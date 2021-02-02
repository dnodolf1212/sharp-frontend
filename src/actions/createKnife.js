export const createKnife = (knife, ownerID) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/owners/${ownerID}/knives`, { //api/vi/owners/:id/knives ???
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      method: 'POST',
      body: JSON.stringify(knife)
    })
    .then(res => res.json())
    .then(owner => dispatch({ type: 'ADD_KNIFE', payload: owner}))
  }
}