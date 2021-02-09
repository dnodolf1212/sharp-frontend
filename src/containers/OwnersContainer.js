import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route path='/owners/new' component={OwnerInput}/>

          <Route path='/owners/:id' render={(routerProps) => 
            <OwnerShow {...routerProps} owners={this.props.owners}/>} />

          <Route path='/owners' render={(routerProps) => 
            <Owners {...routerProps} owners={this.props.owners}/>} />
        </Switch>
        <br />
      </div>
    )
  }
}

const mapStateToProps = state => { 
  return {
   owners: state.owners 
  }
}

export default connect(mapStateToProps, { fetchOwners })(OwnersContainer)