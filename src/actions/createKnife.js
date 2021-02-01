export const createKnife = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/knives', { //api/vi/owners/:id/knives ???
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(knife => dispatch({ type: 'ADD_KNIFE', payload: knife}))
  }
}