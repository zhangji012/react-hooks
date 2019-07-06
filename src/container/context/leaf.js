import React from "react"
import "./index.less"
import {BatteryContext, OnlineContext} from './context'

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

export default Leaf


