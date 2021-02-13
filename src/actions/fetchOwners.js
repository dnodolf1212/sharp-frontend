
export function fetchOwners() {
  
  return(dispatch) => {
      fetch('http://localhost:3000/api/v1/owners')
        .then(res => res.json())
        .then(owners => dispatch({
          type: 'FETCH_OWNERS',
          payload: owners
        }))
        .catch(err => {
          console.log(err)
        })
    }
  
}
//