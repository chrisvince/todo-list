import React from 'react'
import PropTypes from 'prop-types'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'
import './Todo.scss'
import MaterialIcon from 'material-icons-react'
import Datepicker from '../Datepicker'
import classnames from 'classnames'

const propTypes = {
  onCompletedChange: PropTypes.func.isRequired,
  onDueDateChange: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const Todo = props => {
  const {
    onCompletedChange,
    onDueDateChange,
    completed,
    text,
    id,
    dueDate
  } = props
  
  const todoLabelClasses = classnames([
    'todoLabel',
    {
      'completed': completed
    }
  ])
  
  return (
    <li
      className="todoListItem"
    >
      <div
        className="classtodoItemWrap"
      >
        <div
          className="todoCheckboxSection"
        >
          <input
            type="checkbox"
            id={`completed-${id}`}
            onChange={onCompletedChange}
            checked={completed ? true : false}
          />
          <label
            htmlFor={`completed-${id}`}
            role="checkbox"
            aria-checked={completed}
            className="checkbox"
          >
            <MaterialIcon
              icon={completed ? 'check_box' : 'check_box_outline_blank'}
              size={16}
              color={completed ? '#2DA52E' : '#202020'}
              aria-hidden="true"
            />
          </label>
          <label
            htmlFor={`completed-${id}`}
            className={todoLabelClasses}
          >
            {text}
          </label>
        </div>
        <div>
          <Datepicker
            completed={completed}
            dueDate={dueDate}
            id={id}
            onDueDateChange={onDueDateChange}
          />
        </div>
      </div>
    </li>
  )
}

Todo.propTypes = propTypes

export default Todo
