import React, { useEffect, useState, useMemo, memo, useCallback } from "react"

const Counter = memo(function Counter(props) {
  console.log('Counter render')
  return (
    <h1 onClick={props.onClick}>Counter:{props.count}</h1>
  )
})


function HooksPage5(props) {

  const [count, setCount] = useState(0)
  // count === 3  这个现在是个boolen值，只要发生变化就会重新计算
  // useMemo是在渲染期间完成的，是需要返回值的
  const double = useMemo(() => {
    console.log('count', count)
    return count * 2
  }, [count === 3])

  // 上面的memo本来使用的目的是防止重复渲染，但是现在有props.onClick之后，每次渲染后onClick的地址发生改变，导致Counter也会渲染
  // const onClick = () => {
  //   console.log('click')
  // }


  // 这个时候使用useMemo后，锁定onClick，只渲染一次，防止过渡渲染
  // const onClick = useMemo(() => {
  //   return () => {
  //     console.log('click')
  //   }
  // }, [])

  // 如果useMemo返回的是一个函数，可以直接使用useCallback简写
  const onClick = useCallback(() => {
    console.log('click')
  }, [])
  // 注意useMemo、Memo只是对性能优化的锦上添花，不能作为逻辑判断的依据
  return (
    <div>
      <button type='button' onClick={() => {
        setCount(count + 1)
      }}>count:{count}, doule:{double}</button>
      <Counter count={double} onClick={onClick} />
    </div>
  )
}
export default HooksPage5
