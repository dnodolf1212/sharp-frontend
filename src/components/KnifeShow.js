import React from 'react';


export const KnifeShow = () => {

  return (
    <div>
      {props.knives.map( knife => 
        <li key={knife.id}>
          {knife.category}/{knife.brand} : {knife.description} 
        </li>
        )}
    </div>
  )

} 