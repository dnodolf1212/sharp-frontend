import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Owners = (props) => {

  const owners = props.owners
  const [ownerList, sortOwnerList ] = useState([]);
  const sorted = [...owners].sort((a, b) => {return a.ownername < b.ownername});
  console.log(sorted)
 

  return (
    <div>
      <h1>Owners</h1>
      <button >Sort Owners</button>
      {props.owners && props.owners.map( owner => 
        <div key={owner.id}> 
          <Link to={ `/owners/${owner.id}` }>{owner.ownername}</Link> 
        </div> )}
    </div>
  )

}

export default Owners

