import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo'
import SortDropdown from '../SortDropdown'
import './TodoList.scss'

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

const TodoList = props => {
  const {
    todos,
    toggleTodo,
    updateTodoDueDate,
    title,
    showSort
  } = props
  
  const [sort, setSort] = useState('alphabetically')
  
  const renderTitle = (
    <h4
      className="todoListHeading"
    >
      { title }
    </h4>
  )
  
  const sortAlphabetically = (a, b) => {
    if (a.text < b.text) { return -1; }
    if (a.text > b.text) { return 1; }
    return 0;
  }
  
  const sortByDueDate = (a, b) => {
    if (a.dueDate < b.dueDate) { return -1; }
    if (a.dueDate > b.dueDate) { return 1; }
    return 0;
  }
  
  const todosSorted = todos.sort(
    sort === 'alphabetically'
    ? sortAlphabetically
    : sort === 'dueDate'
    ? sortByDueDate : null
  )
  
  const todoList = (
    <div
      className="todoListSection"
    >
      <div
        className="todoListHeader"
      >
        {todos.length && title ? renderTitle : null}
        {showSort && todos.length > 0 &&
          <SortDropdown
            onSortChange={value => setSort(value)}
          />
        }
      </div>
      <ul
        className="todoList"
      >
        {todosSorted.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onCompletedChange={() => toggleTodo(todo.id)}
            onDueDateChange={(time) => updateTodoDueDate(todo.id, time)}
            dueDate={todo.dueDate}
          />
        )}
      </ul>
    </div>
  )
  
  return todos.length ? todoList : null
}

TodoList.propTypes = propTypes

export default TodoList
