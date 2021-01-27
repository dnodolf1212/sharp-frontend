import React from 'react';
import { connect } from 'react-redux';
import { fetchOwners } from './actions/fetchOwners';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchOwners({type: 'FETCH_OWNERS', payload: {ownername: 'Greg'}})
  }

  render() {
    return (
      <div>
        App
      </div>
    );
  }
}

//mapStateToProps = (state) => {
//  return {
//    owners: state.owners
//  }
//}


export default connect(null, { fetchOwners })(App);
