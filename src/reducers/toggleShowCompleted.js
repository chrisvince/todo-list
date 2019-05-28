const toggleShowCompleted = (state = null, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state
    default:
      return state
  }
}

export default toggleShowCompleted
