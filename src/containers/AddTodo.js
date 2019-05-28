import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input
  
  const handleFormSubmit = e => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div
          className="addTodoGroup"
        >
          <input
            ref={node => input = node}
            className="addTodoField"
            placeholder="Add a to-do"
          />
          <button
            type="submit"
            className="addTodoBtn"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
