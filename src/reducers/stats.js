import Modifier from '../models/Modifier'

const INITIAL_STATS = [
    {
        "name": "str",
        "value": '0',
        "modifiers": [
            new Modifier('default input', 'num', '', '0')
        ]
    },
    {
        "name": "dex",
        "value": '0',
        "modifiers": [
            new Modifier('default input', 'num', '', '0'),
            new Modifier('add str', 'stat', '+', 'str')
        ]
    }
    // { "name": "con", "value": 0 },
    // { "name": "int", "value": 0 },
    // { "name": "wis", "value": 0 },
    // { "name": "cha", "value": 0 }
]

const getValueForStat = (stats, statName) => {
    let stat = stats.find((elem) => {
        return elem.name === statName
    })

    return stat.value
}

const calculateStats = (stats) => {
    stats.forEach((stat, idx) => {
        let value = 0
        stat.modifiers.forEach(mod => {
            let modVal
            if (mod.type === 'stat') {
                modVal = getValueForStat(stats, mod.value)
            }
            else if (mod.type === 'num') {
                modVal = mod.value
            }
            switch (mod.operator) {
                case '':
                    value = Number(modVal)
                    break
                case '+':
                    value += Number(modVal)
                    break
                case '-':
                    value -= Number(modVal)
                    break
                default:
                    throw new Error('Invalid modifier operator ' + mod.operator)
            }
        });
        let updatedStat = { ...stat, value }
        stats = Object.assign([], stats, {[idx]: updatedStat});
    });
    return stats
}

const stats = (state = INITIAL_STATS, action) => {
    switch (action.type) {
        case 'SET_STATS':
            return calculateStats(action.stats)
        case 'CREATE_STAT':
            return calculateStats([...state, action.stat])
        case 'ADD_MOD':
            let statIdx = state.findIndex((elem) => {
                return elem.name === action.modifier.statName
            })

            let modifiers = [ ...state[statIdx].modifiers, action.modifier ]
            let stat = { ...state[statIdx], modifiers }
            let stats = Object.assign([], state, {[statIdx]: stat})
            return calculateStats(stats)
        default:
            return state
    }
}

export default stats