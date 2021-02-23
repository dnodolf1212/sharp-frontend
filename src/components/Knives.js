import React from 'react';
import { connect } from 'react-redux';
import { deleteKnife } from '../actions/deleteKnife';

  
const Knives = (props) => {

  const handleDelete = (knife) => {
    props.deleteKnife(knife.id, knife.owner_id)
  }

  return (
    <div>
      {props.knives && props.knives.map( knife => 
        <li key={knife.id}>
         {knife.category}/{knife.brand} : {knife.description} <br/>
          <p>Price:</p>  {knife.price} 
          <br/>
          <button onClick={ () => {handleDelete(knife)}}>
            Delete ME!
          </button>
          
        </li>
         )}
    </div>

  )

      
} 
export default connect(null, { deleteKnife })(Knives)
