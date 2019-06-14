import React, { useEffect, useState, createContext, Component, useContext } from "react"

// hooks中使用 useContext获取contentext
// 类组件中使用Consumer 获取
// 但是contentext不要滥用，会破坏组件的独立性

const CountContentext = createContext()

// 常规写法
class Foo extends Component {
  render() {
    return (
      <CountContentext.Consumer>
        {
          count => <h1>Foo:{count}</h1>
        }
      </CountContentext.Consumer>
    )
  }
}
// class里精简写法，但是一个组件里只能有一个
class Bar extends Component {
  static contextType = CountContentext
  render() {
    const count = this.context
    return (
      <h1>Bar:{count}</h1>
    )
  }
}

function Counter() {
  // useContext可以获取所有的contentext,而且写法比CountContentext.Consumer更加精简
  const count = useContext(CountContentext)
  return (
    <h1>Counter:{count}</h1>
  )
}


function HooksPage4(props) {

  const [count, setCount] = useState(0)

  return (
    <div>
      <button type='button' onClick={() => {
        setCount(count + 1)
      }}>count:{count}</button>
      <CountContentext.Provider value={count}>
        <Foo />
        <Bar />
        <Counter />
      </CountContentext.Provider>
    </div>
  )
}
export default HooksPage4
