import React from 'react' 

const Owners = (props) => {
   
  return (
    <div>
      {props.owners.map(owner => <li key={owner.id}>{owner.ownername} - {owner.location}</li> )}
    </div>
  )
}
export default Owners