import React from 'react';
import { Link } from 'react-router-dom';

const Owners = (props) => {
  return (
    <>
      {props.owners && props.owners.map( owner => 
      <div key={owner.id}> 
        <Link to={ `/owners/${owner.id}` }>{owner.ownername}</Link> 
      </div> )}
    </>
  )
}
export default Owners