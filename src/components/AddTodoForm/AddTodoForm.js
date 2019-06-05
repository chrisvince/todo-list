import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	addTodo: PropTypes.func.isRequired
}

const AddTodoForm = props => {
	const { addTodo } = props
	let input
	
	const handleFormSubmit = e => {
		e.preventDefault()
		if (!input.value.trim()) {
			return
		}
		
		addTodo(input.value)
		input.value = ''
	}
	
	return (
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
	)
}

AddTodoForm.propTypes = propTypes

export default AddTodoForm
