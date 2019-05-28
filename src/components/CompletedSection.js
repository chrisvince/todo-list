import React from 'react'
import { connect } from 'react-redux'
import ShowCompletedButton from '../containers/ShowCompletedButton'
import CompletedTodoList from '../containers/CompletedTodoList'

const CompletedSection = () => (
  <div>
    <ShowCompletedButton />
    <CompletedTodoList />
  </div>
)

export default connect()(CompletedSection)
