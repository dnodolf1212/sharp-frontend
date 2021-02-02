import React from 'react'; 
import KnivesContainer from '../containers/KnivesContainer';

const OwnerShow = (props) => {
  console.log(props)
  //let owner = props.owners[props.match.params.id - 1]
  let owner = props.owners.filter(owner => owner.id == props.match.params.id)[0]

  return (
    <>
      <h3>
        {owner ? owner.ownername : null} - {owner ? owner.location : null}
      </h3>
    <KnivesContainer owner={owner}/>
    </>
  )
}
export default OwnerShow 

//import {Redirect} from 'react-router-dom';
//{owner ? null : <Redirect to='/owners' />} props are undefined the first time so refreshing means we will redirect
  