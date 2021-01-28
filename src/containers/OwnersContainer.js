import React from 'react';
import { connect } from 'react-redux';

import { fetchOwners } from '../actions/fetchOwners.js';
import Owners from '../components/Owners.js';
import OwnerInput from '../components/OwnerInput.js';


class OwnersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchOwners()
  }
  
  render() {
    return (
      <div>
      OwnersContainer - Im rendering both OwnerInput and Owners
        <OwnerInput />
        <Owners owners={this.props.owners}/>
      </div>
    )
  }
}

const mapStateToProps = state => { // to see stuff from the store and map it to props
  return {
   owners: state.owners 
  }
}

export default connect(mapStateToProps, { fetchOwners })(OwnersContainer)