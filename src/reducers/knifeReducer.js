export default function knifeReducer(state = { knives: [] }, action) {
  switch(action.type) {
    case 'FETCH_KNIVES':
      return { knives: action.payload }

    case 'ADD_KNIFE':
      return {...state, knives: [...state.knives, action.payload] }
    
    default:
      return state
  }
  
}