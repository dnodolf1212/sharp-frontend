export const createKnife = (formData, ownerID) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/owners/${ownerID}/knives`, { 
      
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then((featured_image) => this.setState({ image_url: featured_image.image_url }))
    .then(owner => dispatch({ type: 'ADD_KNIFE', payload: owner}))
  }
}
