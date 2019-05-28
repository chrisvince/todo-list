import { connect } from 'react-redux'
import { toggleTodo, updateTodoDueDate } from '../actions'
import TodoList from '../components/TodoList/TodoList'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_NEW: 'SHOW_NEW',
  SHOW_NOT_NEW: 'SHOW_NOT_NEW',
}

const getFilteredTodos = (todos, filter = 'SHOW_ALL') => {
  switch (filter) {
    case VisibilityFilters.SHOW_NEW:
      return todos.filter(t => {
        return !t.dueDate && !t.completed
      })
    case VisibilityFilters.SHOW_NOT_NEW:
      return todos.filter(t => {
        return t.dueDate && !t.completed
      })
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: getFilteredTodos(state.todos, ownProps.filter),
  showSort: ownProps.filter !== VisibilityFilters.SHOW_NEW
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  updateTodoDueDate: (id, dueDate) => dispatch(updateTodoDueDate(id, dueDate))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
