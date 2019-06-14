import React, { useEffect, useState, useMemo } from "react"

// memo判断一个组件是否重复执行
// useMemo判断一个逻辑是否重复执行
// 本质都是用同样的算法判断一个依赖是否发生改变
// 都是用来做性能优化，不会改变逻辑


function Counter(props) {
  // useContext可以获取所有的contentext,而且写法比CountContentext.Consumer更加精简
  return (
    <h1>Counter:{props.count}</h1>
  )
}


function HooksPage5(props) {

  const [count, setCount] = useState(0)
  // 运行策略基本和useEffect一样，但是有一点不一样，useEffect是执行的副作用，所以是在渲染之后执行
  // 而useMemo是有返回值的，返回值直接参与渲染，是在渲染期间完成的
  // 当判断条件变化时会重新计算
  const double = useMemo(() => {
    return count * 2
  }, [count === 3])
  return (
    <div>
      <button type='button' onClick={() => {
        setCount(count + 1)
      }}>count:{count}, doule:{double}</button>
      <Counter count={count} />
    </div>
  )
}
export default HooksPage5
