import React, { useEffect, useState, useMemo, memo, useCallback, useRef, PureComponent } from "react"

// class里使用 createRef
// hooks里使用 useRef:2个使用场景
// 1.获取子组件或者DOM节点的句柄
// 2.渲染周期之间共享数据的存储（不会触发重渲染）

// todo 问题，在副作用中如何判断一个元素或者组件在本次或者上次渲染之间有过重新创建


const Counter = memo(function Counter(props) {
  console.log('Counter render')
  const speak = () => {
    console.log(`now count ${this.props.count}`)
  } 
  return (
    <h1 onClick={props.onClick}>Counter:{props.count}</h1>
  )
})

// class Counter extends PureComponent {
//   speak = () => {
//     console.log(`now count ${this.props.count}`)
//   }
//   render() {
//     const props = this.props
//     return (
//       <h1 onClick={props.onClick}>Counter:{props.count}</h1>
//     )
//   }
// }

function HooksPage7(props) {

  const [count, setCount] = useState(0)
  const counterRef = useRef()
  // const HeightrRef = useRef<HTMLDivElement>(null)  // null初始值要给，严格模式,在ts上使用useRef
  // useEffect(() => {
    // console.log(counterRef.current && counterRef.current.clientHeight);
    // console.log(counterRef.current && counterRef.current.clientWidth);
  // },[])
  // let it  // 这样定义后clearInterval(it)没有生效
  const it = useRef() // 访问上一次渲染所需要的数据，可以放到ref中,
  const onClick = useCallback(() => {
    // console.log('click')
    // 函数组件打印出来是undefined，class组件有对应的值
    // console.log(counterRef.current)
    counterRef.current.speak()
  }, [counterRef])

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

  return (
    <div>
      <button type='button' onClick={() => {
        setCount(count + 1)
      }}>count:{count}</button>
      <Counter ref={counterRef} count={count} onClick={onClick} />
    </div>
  )
}
export default HooksPage7
