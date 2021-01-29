import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchOwners } from '../actions/fetchOwners.js';
import Owners from '../components/Owners.js';
import OwnerShow from '../components/OwnerShow.js';
import OwnerInput from '../components/OwnerInput.js';


class OwnersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchOwners()
  }
  
  render() { 
    return (
      <div>
        <Route exact path='/owners/new' component={OwnerInput}/>

        <Route exact path='/owners/:id' render={(routerProps) => 
          <OwnerShow {...routerProps} owners={this.props.owners}/>} />

        <Route exact path='/owners' render={(routerProps) => 
          <Owners {...routerProps} owners={this.props.owners}/>} />
        
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