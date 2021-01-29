
export const createOwner = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/owners', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(owner => dispatch({ type: 'ADD_OWNER', payload: owner}))
  }

}
