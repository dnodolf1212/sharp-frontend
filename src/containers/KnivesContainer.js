import React from 'react';
import KnifeInput from '../components/KnifeInput';
import Knives from  '../components/Knives.js'

class KnivesContainer extends React.Component {
 
  render(){
    return(
      <div>
        <KnifeInput owner={this.props.owner}/>
        <Knives knives={this.props.owner && this.props.owner.knives}/>
      </div>
    )
  }
}
export default KnivesContainer
