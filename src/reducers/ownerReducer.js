
export default function ownerReducer(state = { owners: [] }, action) {
  switch(action.type) {
    case 'FETCH_OWNERS':
      return { owners: action.payload }

    case 'ADD_OWNER':
      return {...state, owners: [...state.owners, action.payload] }

    case 'ADD_KNIFE':
      let owners = state.owners.map( owner => {
        if (owner.id === action.payload.id) {
          return action.payload
        } else {
          return owner
        }
      })
      return {...state, owners: owners}
    default:
      return state
  }
  
}