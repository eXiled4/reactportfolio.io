import React, { Component } from 'react'
import "./ChildImg.css"

export default class ChildImg extends Component {
  render () {
    return (
      <div className='project'>
          <div className='heading'>
            <h1>{this.props.heading}</h1>
            <br/>
            <p>{this.props.text}</p>
            <br/>
            <p>{this.props.text1}</p>
            <br/>
            <p>{this.props.text2}</p>
          </div>
      </div>
    )
  }
}
