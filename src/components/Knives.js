import React from 'react';

const Knives = (props) => {

  console.log(props.knives)
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
 