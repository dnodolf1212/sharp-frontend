import React from 'react';
import { Link } from 'react-router-dom';

const Owners = (props) => {
  console.log(props)
  return (
    
    <div style={{ textAlign: "left"}}>
      <h1>Owners</h1>
      {props.owners && props.owners.map( owner => 
        <div key={owner.id}> 
          <Link to={ `/owners/${owner.id}` }>{owner.ownername}</Link> 
        </div> )}
    </div>
  )
}
export default Owners