import React from 'react';
import OwnerShow from './OwnerShow.js'

const Owners = (props) => {
   
  return (
    <>
      {props.owners.map( owner => 
      <div key={owner.id }> <OwnerShow owner={props.owner}/> </div> )}
    </>
  )
}
export default Owners