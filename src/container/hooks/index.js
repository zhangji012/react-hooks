import React, { Component, PureComponent, memo } from "react"
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
        111111111111
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
