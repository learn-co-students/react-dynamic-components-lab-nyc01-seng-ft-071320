import { render } from 'enzyme';
import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  // colorBoxDiv = (o) => {
  //   return (<div class="color-box" style={{opacity: o}}></div>)
  // }

  // opaq = (arg) => {
  //   if(arg >= 0.2){
  //     return(this.colorBoxDiv(arg - 0.1))
  //   } else if (arg < 0.2){
  //     return(null)
  //   }
  // }

  render() {
    if(this.props.opacity >= 0.2){
      return(
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1}/>
        </div>
      )
    } else {
      return null
    }
  }

}

