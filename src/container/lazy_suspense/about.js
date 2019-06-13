import React, { Component } from "react"
import { connect } from "react-redux"
import "./index.less"


class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
       about
      </div>
    )
  }

}

export default connect(
  state => {
    return {}
  },
  dispatch => ({
    actions: {}
  })
)(ContextPage)
