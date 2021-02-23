import React from 'react';
import { connect } from 'react-redux';

class DeleteButton extends React.Component {

  handleDelete = () => {
    this.props.deleteKnife(this.props.owner.id)
  }
  
  render() {
    return(
      <button onClick={this.handleDelete}>Delete ME!</button>
    )
  }
}
export default connect(null, {deleteKnife})(DeleteButton)