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
         <label>Category:  </label>
         {knife.category}
         <br/>

         <label>Brand:  </label>
          {knife.brand} 
         <br/>

         <label>Description: </label>
         {knife.description} 
         <br/>

         <label>Price: </label>  
         {knife.price} 
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
