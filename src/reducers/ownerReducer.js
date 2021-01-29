
export default function ownerReducer(state = { owners: [] }, action) {
  switch(action.type) {
    case 'FETCH_OWNERS':
      return { owners: action.payload }

    case 'ADD_OWNER':
      return {...state, owners: [...state.owners, action.payload] }
    
    default:
      return state
  }
  
}