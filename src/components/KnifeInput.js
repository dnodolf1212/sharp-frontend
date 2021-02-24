import React from 'react';
import { connect } from 'react-redux';
import { createKnife } from '../actions/createKnife.js';

class KnifeInput extends React.Component {

  state = {
    category: '', 
    brand: '',
    price: 0, 
    description: ''
  }

  handleOnChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createKnife(this.state, this.props.owner.id) 
    this.setState({
      category: '', 
      brand: '',
      price: 0, 
      description: ''
    });
  };
  
  render() {
    const { category, brand, description, price } = this.state;
    return (
      <div className="knife-form" style={{textAlign: "left"}}>
        <form onSubmit={this.handleSubmit} >
          <label>New Knife Form: </label><br/>
          <input type="text" placeholder="category" 
          onChange={this.handleOnChange} name="category" value={category} />
          <br />

          <input type="text" placeholder="brand" 
          onChange={this.handleOnChange} name="brand" value={brand} />
          <br />
          
          <input type="text" placeholder="description" 
          onChange={this.handleOnChange} name="description" value={description} />
          <br />

          <label>Price</label>
          <br/>
          <input type="text" placeholder="price" 
          onChange={this.handleOnChange} name="price" value={price} />
           <br/>

          <input type="submit" value="Submit" />
        </form>
      </div> 
    )
  }

}
export default connect(null, {createKnife})(KnifeInput)

//