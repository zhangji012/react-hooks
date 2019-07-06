import React, { createContext, Component } from "react"
import "./index.less"

// 比Context用起来更加简洁,但是有多个 context，contextType只能指向其中的一个
const BatteryContext = createContext(90) // 里面的参数是默认值，一般单元测试时使用
const OnlineContext = createContext()


class Leaf extends Component {
  static contextType = BatteryContext
  render() {
    const battery = this.context
    console.log('this.context',this.context)

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
      online: 1
    }
  }

  render() {
    const { battery, online } = this.state
    return (
      <div>
        <BatteryContext.Provider value={battery}>
          <OnlineContext.Provider value={online}>
            <Middle />
            <button type='button' onClick={() => {
              setInterval(() => {
                this.setState({
                  battery: this.state.battery - 1
                })
              }, 1000)
            }}>press</button>
            <button type='button' onClick={() => {
              setInterval(() => {
                this.setState({
                  online: this.state.online + 1
                })
              }, 1000)

            }}>online</button>
          </OnlineContext.Provider>


        </BatteryContext.Provider>
      </div>
    )
  }

}

export default ContextTypePage
