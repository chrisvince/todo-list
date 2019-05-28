let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleShowCompleted = () => ({
  type: 'TOGGLE_SHOW_COMPLETED'
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const updateTodoDueDate = (id, dueDate) => ({
  type: 'UPDATE_TODO_DUE_DATE',
  id,
  dueDate
})
