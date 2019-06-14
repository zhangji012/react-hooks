import React, { useEffect, useState, useMemo, memo, useCallback, useRef, PureComponent } from "react"


const Counter = memo(function Counter(props) {
  return (
    <h1>Counter:{props.count}</h1>
  )
})
// 自定义 Hook 是一个函数，其名称以 “use” 开头
function useCount(defaultCount) {
  const [count, setCount] = useState(defaultCount)
  const it = useRef() // 访问上一次渲染所需要的数据，可以放到ref中,

  useEffect(() => {
    it.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  },[])
  useEffect(() => {
    console.log('count', count)
    if (count > 4) {
      clearInterval(it.current)
    }
  })

  return [count, setCount]
}

function HooksPage8(props) {
  const [count, setCount] = useCount(0)

  return (
    <div>
      <button type='button' onClick={() => {
        setCount(count + 1)
      }}>count:{count}</button>
      <Counter count={count}  />
    </div>
  )
}
export default HooksPage8
