import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from '../reducers/visibiliyFilter.js'

export default combineReducers({
  todos,
  visibilityFilter
})