import React from 'react';
  
const Knives = (props) => {

  return (
    <div>
      {props.knives && props.knives.map( knife => 
        <li key={knife.id}>
         {knife.category}/{knife.brand} : {knife.description} 
        </li>
         )}
    </div>

  )

      
}
export default Knives
