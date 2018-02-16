const INITIAL_STATS = {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
}
const stats = (state = INITIAL_STATS, action) => {
    switch (action.type) {
        case 'SET_STATS':
            return action.stats
        default:
            return state
    }
}

export default stats