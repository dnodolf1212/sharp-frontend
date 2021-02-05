import React from 'react';
import { connect } from 'react-redux';
import { createKnife } from '../actions/createKnife.js';

class KnifeInput extends React.Component {

  state = {
    category: '', 
    brand: '',
    price: 0, 
    description: '',
    for_sale: false,
    likes: 0,
    featured_image: null,
    image_url: null
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('category', this.state.category);
    formData.append('brand', this.state.brand);
    formData.append('price', this.state.price);
    formData.append('description', this.state.description);
    formData.append('for_sale', this.state.for_sale);
    formData.append('likes', this.state.likes);
    formData.append('featured_image', this.state.featured_image);
    this.props.createKnife(formData, this.props.owner.id)
  }
  
  onImageChange = event => { 
    this.setState({ featured_image: event.target.files[0] }); 
  };

    
  //this.props.createKnife(this.state, this.props.owner.id) // add this.state.featured_image??
  //  this.setState({
  //    category: '', 
  //    brand: '',
  //    price: 0, 
  //    description: '',
  //    for_sale: false,
  //    likes: 0,
  //    featured_image: ''
  //  })

  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Knife Form: </label><br/>
          <input type="text" placeholder="category" 
          onChange={this.handleOnChange} name="category" value={this.state.category} />
          <br />

          <input type="text" placeholder="brand" 
          onChange={this.handleOnChange} name="brand" value={this.state.brand} />
          <br />
          
          <input type="text" placeholder="description" 
          onChange={this.handleOnChange} name="description" value={this.state.description} />
          <br />

          <label>For Sale?</label>
          <input type="checkbox" placeholder="for_sale" 
          onChange={this.handleOnChange} name="for_sale" value={this.state.for_sale} />
          <br />
          <label>Price</label>
          <br/>
          <input type="text" placeholder="price" 
          onChange={this.handleOnChange} name="price" value={this.state.price} />
           <br/>

          <label>LIKES:</label>
          <br/>
          <input type="text" placeholder="likes" 
          onChange={this.handleOnChange} name="likes" value={this.state.likes} />
          <br />

          <input type='file' accept='image/*' multiple={false} 
          onChange={this.onImageChange} />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div> 
    )
  }

}
export default connect(null, {createKnife})(KnifeInput)

//