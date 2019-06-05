import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodoForm from '../components/AddTodoForm'

const mapDispatchToProps = (dispatch, ownProps) => ({
  addTodo: (value) => dispatch(addTodo(value))
})

export default connect(
  null,
  mapDispatchToProps
)(AddTodoForm)
