import React from 'react';
import { connect } from 'react-redux'; 
import {fetchOwners} from '../actions/fetchOwners'

class SortComp extends React.Component {

  state = {
    initialList: this.props.owners, //can I do this?????
    sortedList: []
  }
  
  componentDidMount() {
    const { fetchOwners } = this.props;
    fetchOwners(); //???????????????? do I have to ?????
  }

  sortOwners = () => {
    this.setState({...this.state, sortedList:
      this.state.initialList.sort()
    })
  }

  render(){
    
    return(
      <div>
        SortComp
        
      </div>
    )
  }

}

const mapStateToProps = state => {  
  return {
    owners: state.owners
  }
}
export default connect(mapStateToProps, {fetchOwners})(SortComp)