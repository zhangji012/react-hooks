import React, { Component } from "react"

// 传统class模式
class HooksPage1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div> 
      <button type='button' onClick={() => {
        this.setState({
          count: this.state.count + 1,
        })
      }}>count:{this.state.count}</button>
      </div>
    )
  }

}

export default HooksPage1
