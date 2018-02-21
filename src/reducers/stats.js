const INITIAL_STATS = [
    { "name": "str",
      "modifiers": [
        {
          operator: '',
          type: 'num',
          value: '0'
        }
      ]
    },
    { "name": "dex",
      "modifiers": [
        {
          operator: '',
          type: 'num',
          value: '0'
        },
        {
          operator: '+',
          type: 'stat',
          value: 'str'
        }
      ],
      
    }
    // { "name": "con", "value": 0 },
    // { "name": "int", "value": 0 },
    // { "name": "wis", "value": 0 },
    // { "name": "cha", "value": 0 }
]
const stats = (state = INITIAL_STATS, action) => {
    switch (action.type) {
        case 'SET_STATS':
            return action.stats
        default:
            return state
    }
}

export default stats