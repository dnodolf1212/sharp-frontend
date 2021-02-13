import React from 'react';
import { Link } from 'react-router-dom';
import OwnersContainer from '../containers/OwnersContainer';
import IMG_1966_jpg from '../images/IMG_1966.jpg'

export const Header = () => {

  return (
  
   <nav className="nav-wrap" style={{ padding: "10px 20px", textAlign: "center", color: "white" }}>
     <div className="container">
       <div className="logo"><h1>Lookin' Sharp</h1></div> 

        <ul style={{ listStyleType: "none", margin: 0, padding: 0, overflow: "hidden"}}>
          <li><Link to='/home'> Home </Link></li>
          <li><Link to='/owners/new'> Sign Up </Link></li>
          <li><Link to='/owners'> Knife Owners </Link></li>
        </ul>
       <br/>
              <img src={IMG_1966_jpg} alt="aknife" /> 

       

       <p>Where knife users can join and upload their knife collection</p>
       <OwnersContainer />
      
     </div>
   </nav>
  
      
  
  )
}
