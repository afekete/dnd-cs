import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import stats from './stats'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    stats
})

export default todoApp