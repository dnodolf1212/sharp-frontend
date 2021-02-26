import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchOwners } from '../actions/fetchOwners.js';
import Owners from '../components/Owners.js';
import OwnerShow from '../components/OwnerShow.js';
import OwnerInput from '../components/OwnerInput.js';


class OwnersContainer extends React.Component {
  
  

  componentDidMount() {
    const { fetchOwners } = this.props;
    fetchOwners();
  }

  
  render() { 
    const { owners } = this.props;
     
    return (
      <div>
        <Switch>
          <Route path='/owners/new' component={OwnerInput}/>

          <Route path='/owners/:id' render={(routerProps) => 
            <OwnerShow {...routerProps} owners={owners}/>} />

          <Route path='/owners' render={(routerProps) => 
            <Owners {...routerProps} owners={owners} />} />
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
