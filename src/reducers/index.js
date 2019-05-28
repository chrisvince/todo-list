import { combineReducers } from 'redux'
import todos from './todos'
import toggleShowCompleted from './toggleShowCompleted'

export default combineReducers({
  todos,
  toggleShowCompleted
})
