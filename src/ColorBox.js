import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    console.log(this.props)
    if (this.props.opacity < 0.2) {
      return null
    }
    let opacity = this.props.opacity - 0.1
    return (<div className="color-box" style={{opacity: this.props.opacity}}><ColorBox opacity={opacity}/></div>)
  }

}

