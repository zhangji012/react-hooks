import React, { useState } from "react"

// state 使用hooks方式
function HooksPage2(props) {
  // 单线程，useState只可能在唯一的一个组件中
  // const defaultCount = props.defaultCount || 0
  const [count, setCount] = useState(() => {
    // 这个函数只运行一次,相比写在上面更省性能
    console.log('init count')
    return props.defaultCount || 0
  })
  const [myName] = useState('zhangji')

  return (
    <div>
      <button type='button' onClick={() => {
        
        setCount(count + 1)
      }}>count:{count}, name:{myName}</button>
    </div>
  )
}
export default HooksPage2
