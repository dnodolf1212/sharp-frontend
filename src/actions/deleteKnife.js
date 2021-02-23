export const deleteKnife = (ownerID, knifeID) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/owners/${ownerID}/knives/${knifeID}`, { 
      
      method: 'DELETE'

    })
    .then(res => res.json())
    .then(owner => dispatch({ type: 'DELETE_KNIFE', payload: owner}))
  }
}