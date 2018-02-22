let nextTodoId = 0
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const setStats = stats => {
    return {
        type: 'SET_STATS',
        stats
    }
}

export const createStat = stat => {
    return {
        type: 'CREATE_STAT',
        stat
    }
}

export const setClass = chosenClass => {
    return {
        type: 'SET_CLASS',
        chosenClass
    }
}