import React, { Component } from 'react'
import loader from './Spinner-1s-200px.gif'
export default class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <video src={loader}></video>
      </div>
    )
  }
}
