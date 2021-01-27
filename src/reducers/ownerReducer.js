
export default function ownerReducer(state = {owners: []}, action) {
  return action.payload
  //we can see that the action is coming in correctly and the store is 
  //properly updated by reducer
}