import { connect } from 'react-redux'
import { toggleShowCompleted } from '../actions'
import Button from '../components/Button/Button'

const mapStateToProps = state => ({
  children: `${state.toggleShowCompleted ? 'Hide' : 'Show'} Completed Tasks`,
  hidden: state.todos.filter(t => t.completed).length ? false : true
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(toggleShowCompleted())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
