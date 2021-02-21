import React from 'react';
import { Link } from 'react-router-dom';
import OwnersContainer from '../containers/OwnersContainer';


export const Header = () => {

  return (
  
   <nav className="nav-wrap">
     <div className="container">

       <div className="logo"><h1>Lookin' Sharp</h1></div> 

        <p>Where knife users can join and upload their knife collection</p>
        
        <ul>
          <li><Link to='/home'> Home </Link></li>
          <li><Link to='/owners/new'> Sign Up </Link></li>
          <li><Link to='/owners'> Knife Owners </Link></li>
           
        </ul>
       <br/>
     </div>
     <OwnersContainer />
   </nav>

  
      
      
  
  )
}
//<img src={nikiri} alt="aknife" style={{ float: "left"}}/>