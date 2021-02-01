import React from 'react';
import { connect } from 'react-redux';
import { createOwner } from '../actions/createOwner.js';

class OwnerInput extends React.Component { //controlled form with local state

  state = {
    ownername: '',
    location: ''
   
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.createOwner(this.state)
    this.setState({
      ownername: '',
      location: '',
     
    });
  };

  onImageChange = event => {
    this.setState({

    });
  };


  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Knife Owner Form:</label>
          <br />

          <input type="text" placeholder="ownername" 
          onChange={this.handleOnChange} name="ownername" value={this.state.ownername} />
          <br />

          <input type="text" placeholder="Location" 
          onChange={this.handleOnChange} name="location" value={this.state.location} />
          <br />
          
          <input type="submit" />
        </form>
      </div>
    )

  }
}

export default connect(null, { createOwner })(OwnerInput)