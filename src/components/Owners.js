import React, {useState} from 'react';
import { Link } from 'react-router-dom';



const Owners = (props) => {
  const ownerList = props.owners
  const [initialList] = useState(ownerList);//initial state

  const [isSorted, setSorted] = useState(false);
  const [newList, setList] = useState([...initialList]); //a way to change initialList with setList, newList might be superflous
  
  const sortOwners = () => {
    console.log('clicked'); // to make sure button is wired up to the function

    const sorted = [...initialList].sort(function(a, b) {
      const nameA = a.ownername.toUpperCase(); // ignore upper and lowercase
      const nameB = b.ownername.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) { //sorting by ownername using the return numbers as placement in array
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;// names must be equal
    });
    console.log(sorted);
    setList(sorted);//the sorted list "becomes state" with setList
  } 

    const toggle = () => {
      if (isSorted === false) { //used flags to tell whether or not we are seeing sorted data
        setSorted(true);
        sortOwners(); //conversely running the sort if "sorted flag" is false
      } else {
        setSorted(false) //if flag is true, setting it to false and setting the intialList as "state"
        setList([...initialList]);
      };
    };
    

  return (
    
    <div>
      <h1>Owners</h1>
      <button onClick={toggle}>Sort Owners</button>
       {newList && newList.map( owner => 
        <div key={owner.id}> 
          <Link to={ `/owners/${owner.id}` }>{owner.ownername}</Link> 
        </div> )}
    </div>
    
  )

}

export default Owners

