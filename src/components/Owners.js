import React from 'react';
import {  Link } from 'react-router-dom';
//import OwnerShow from './OwnerShow.js'

const Owners = (props) => {
   
  return (
    <>
      {props.owners.map( owner => 
      <div key={owner.id}> 
        <Link to={ `/owners/${owner.id}` }>{owner.ownername}</Link> 
      </div> )}
    </>
  )
}
export default Owners