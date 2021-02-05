import React from 'react';
  
const Knives = (props) => {
  debugger;
  return (
    
    <div>
      {props.knives && props.knives.map( knife => 
      
        <li key={knife.id}>
         {knife.category}/{knife.brand} : {knife.description} 
         {knife.featured_image.url && <img src={knife.featured_image.url} />}
        </li>
         )}
    </div>

  )
      
}
export default Knives
//console.log(props.knives)