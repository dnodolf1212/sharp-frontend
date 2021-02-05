import React from 'react';
import { Link } from 'react-router-dom';
import OwnersContainer from '../containers/OwnersContainer';


 

export const Header = () => {

  return (
  
   <nav className="nav-wrap">
     <div className="container">
       <a className="logo">Lookin' Sharp --- > LOGO</a> 
       <h1>These are links in the Header</h1>
        <ul>
          <li><Link to='/home'> Home </Link></li>
          <li><Link to='/owners/new'> Sign Up </Link></li>
          <li><Link to='/owners'> Knife Owners </Link></li>
        </ul>
       <br/>
       
       

       <p>This is where owners container is -- new owners page, owners list</p>
       <OwnersContainer />
      
     </div>
   </nav>
  
      
  
  )
}
//<p> I want this new knife form to be for me alone, for the "user" on their "home page"</p>
       // <KnifeInput />