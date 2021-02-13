import React from 'react';
import { Link } from 'react-router-dom';
import OwnersContainer from '../containers/OwnersContainer';
import IMG_1964_jpg from '../images/IMG_1964.jpg'


 

export const Header = () => {

  return (
  
   <nav className="nav-wrap" style={{ padding: "10px 20px", textAlign: "center", color: "white"}}>
     <div className="container">
       <div className="logo"><h1>Lookin' Sharp</h1></div> 
       <img src={IMG_1964_jpg} alt="aknife" style={{ width:'80%', height:'600px', }}/> 

        <ul style={{ listStyleType: "none", margin: 0, padding: 0, overflow: "hidden"}}>
          <li><Link to='/home'> Home </Link></li>
          <li><Link to='/owners/new'> Sign Up </Link></li>
          <li><Link to='/owners'> Knife Owners </Link></li>
        </ul>
       <br/>
       
       

       <p>Where knife users can join and upload their knife collection</p>
       <OwnersContainer />
      
     </div>
   </nav>
  
      
  
  )
}
//<p> I want this new knife form to be for me alone, for the "user" on their "home page"</p>
       // <KnifeInput />