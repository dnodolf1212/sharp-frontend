export const createKnife = (data, ownerID) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/owners/${ownerID}/knives`, { 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(owner => dispatch({ type: 'ADD_KNIFE', payload: owner}))
  }
}