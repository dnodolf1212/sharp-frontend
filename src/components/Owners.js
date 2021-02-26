import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Owners = (props) => {
  const ownerList = props.owners
  const [initialList, setList] = useState(ownerList)//initial state
  const sortOwners = () => {
    console.log('clicked')
    const sorted = [...initialList].sort((a, b) => {
    return a.ownername - b.ownername;
    });
    console.log(sorted)
    setList(sorted)
}

  return (
    <div>
      <h1>Owners</h1>
      <button onClick={sortOwners}>Sort Owners</button>
       {props.owners && props.owners.map( owner => 
        <div key={owner.id}> 
          <Link to={ `/owners/${owner.id}` }>{owner.ownername}</Link> 
        </div> )}
    </div>
    
  )

}

export default Owners

