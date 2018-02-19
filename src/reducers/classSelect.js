const classSelect = (state = null, action) => {
    switch (action.type) {
        case 'SET_CLASS':
            return action.class
        default:
            return state
    }
}

export default classSelect