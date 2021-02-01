import React from 'react';
import KnifeInput from '../components/KnifeInput';
import Knives from  '../components/Knives'

class KnivesContainer extends React.Component {

  render(){
    return(
      <div>
        <KnifeInput />
        <Knives knives={this.props.knives && this.props.owner.knives}/>
      </div>
    )
  }
}
export default KnivesContainer