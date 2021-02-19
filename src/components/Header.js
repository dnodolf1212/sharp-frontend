import React from 'react';
import { Link } from 'react-router-dom';
import OwnersContainer from '../containers/OwnersContainer';
import nikiri from '../images/nikiri.jpg'

export const Header = () => {

  return (
  
   <nav className="nav-wrap">
     <div className="container">

       <div className="logo"><h1>Lookin' Sharp</h1></div> 

        <p>Where knife users can join and upload their knife collection</p>
        <img src={nikiri} alt="aknife" style={{ float: "left"}}/>
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
