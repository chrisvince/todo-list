import React from 'react'
import './SortDropdown.scss'

const SortDropdown = props => {
  
  const {
    onSortChange,
    sort
  } = props

  return (
    <div
      className="sortDropdown"
    >
      <label
        className="sortDropdownLabel"
      >
        Sort by:
      </label>
      <select
        onChange={event => onSortChange(event.target.value)}
        value={sort}
        className="sortDropdownSelect"
      >
        <option
          value="dueDate"
        >
          Due Date
        </option>
        <option
          value="alphabetically"
        >
          Alphabetically
        </option>
      </select>
    </div>
  )
}

export default SortDropdown
