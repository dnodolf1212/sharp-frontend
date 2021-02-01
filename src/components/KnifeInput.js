import React from 'react';
import { connect } from 'react-redux';
import { createKnife } from '../actions/createOwner.js';

class KnifeInput extends React.Component {

  state = {
    category: '', 
    brand: '',
    price: 0, 
    description: '',
    for_sale: false,
    likes: 0,
    featured_image: ''
  }

  render() {
    return (
      <div>
        <form>
          <label>New Knife Form: </label><br/>
          <input type="text" placeholder="category" 
          onChange={this.handleOnChange} name="category" value={this.state.category} />
          <br />
          <input type="text" placeholder="brand" 
          onChange={this.handleOnChange} name="brand" value={this.state.brand} />
          <br />
          <input type="text" placeholder="price" 
          onChange={this.handleOnChange} name="price" value={this.state.price} />
          <br />
          <input type="text" placeholder="description" 
          onChange={this.handleOnChange} name="description" value={this.state.description} />
          <br />
          <input type="checkbox" placeholder="for_sale" 
          onChange={this.handleOnChange} name="for_sale" value={this.state.for_sale} />
          <br />
          <input type="text" placeholder="likes" 
          onChange={this.handleOnChange} name="likes" value={this.state.likes} />
          <br />
          <input type="url" placeholder="featured_image" 
          onChange={this.handleOnChange} name="featured_image" value={this.state.featured_image} />
          <br />
        </form>
      </div>
    )
  }

}
export default KnifeInput