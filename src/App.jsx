import React, { Component } from 'react'

export default class  extends Component {
  state = {
    count: 0
  }
  Pilusbtn=()=>{
    this.setState({
      count: this.state.count + 1
    })
  }
  Minusbtn=()=>{
    this.setState({
       count: this.state.count - 1
    })
  }
  render() {
    return (
      <div className='container'>
     <div className='d-flex gap-3 my-5 align-items-center '>
     <button className='btn btn-info' onClick={this.Pilusbtn}>+</button>
        <h3>{this.state.count}</h3>
        <button className='btn btn-danger' onClick={this.Minusbtn}>-</button>
     </div>
      </div> 
    )
  }
}
