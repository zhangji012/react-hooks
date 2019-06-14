import React, { createContext, Component } from "react"
import "./index.less"

// 比Context用起来更加简洁,但是有多个 context，contextType只能指向其中的一个
const BatteryContext = createContext() 


class Leaf extends Component {
  static contextType = BatteryContext
  render() {
    const battery = this.context
    return (
      <h1>Battery: {battery}</h1>
    )
  }
}

function Middle() {
  return (
    <Leaf />
  )
}

class ContextTypePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      battery: 60,
    }
  }

  render() {
    const { battery } = this.state
    return (
      <div>
        <BatteryContext.Provider value={battery}>
            <Middle />
            <button type='button' onClick={() => {
              setInterval(() => {
                this.setState({
                  battery: this.state.battery - 1
                })
              }, 1000)
            }}>press</button>
        </BatteryContext.Provider>
      </div>
    )
  }

}

export default ContextTypePage
