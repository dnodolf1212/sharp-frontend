import React from 'react'; 

const OwnerShow = (props) => {
  console.log(props)
  let owner = props.owners[props.match.params.id - 1]

  return (
  <li>
    {owner.ownername}
  </li>
  )
}
export default OwnerShow 