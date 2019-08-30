import React, { createContext, Component } from "react"
import { connect } from "react-redux"
// import Leaf from "./leaf"
// import {BatteryContext, OnlineContext} from './context'
// 老的context对性能的影响特别大
import "./index.less"
// 一般不要滥用，会影响组件的独立性
// Provider：提供者          Consumer：消费者
const BatteryContext = createContext(90) // 里面的参数是默认值，一般单元测试时使用
const OnlineContext = createContext()

function Leaf() {
  return (
    <BatteryContext.Consumer>
      {
        battery => (
          <OnlineContext.Consumer>
            {
              online => (
                <div>
                  <h1>Battery: {battery}</h1>
                  <h1>online: {online}</h1>
                </div>
              )
            }
          </OnlineContext.Consumer>
        )
      }
    </BatteryContext.Consumer>
  )
}

function Middle() {
  return (
    <Leaf />
  )
}

class ContextPage extends Component {
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

export default connect(
  state => {
    return {}
  },
  dispatch => ({
    actions: {}
  })
)(ContextPage)
