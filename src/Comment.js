//your code here
import React, { Component } from 'react'

export default class Comment extends Component {
    render(){
        return(
            <div  className="comment">
            {this.props.commentText}
          </div>    
        )// This is the end of my return
    }//This is the end of my render
}//this the the end fo comment 