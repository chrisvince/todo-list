import Moment from 'moment'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          dueDate: null,
          dateCreated: Moment.now()
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    case 'UPDATE_TODO_DUE_DATE':
      return state.map(todo =>
        (todo.id === action.id)
          ? {
              ...todo,
              dueDate: action.dueDate
            }
          : todo
      )
    default:
      return state
  }
}

export default todos
