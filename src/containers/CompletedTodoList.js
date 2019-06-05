import React from 'react'
import { connect } from 'react-redux'
import FilteredTodoList from './FilteredTodoList'

const mapStateToProps = state => ({
  showCompleted: state.toggleShowCompleted,
  children: `${state.toggleShowCompleted ? 'Hide' : 'Show'} Completed Tasks`
})

const CompletedTodoList = props => (
  props.showCompleted ? <FilteredTodoList filter="SHOW_COMPLETED" showSort={false} /> : null
)

export default connect(
  mapStateToProps
)(CompletedTodoList)
