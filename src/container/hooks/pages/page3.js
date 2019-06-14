import React, { useEffect, useState } from "react"

// useEffect 使用hooks方式
function HooksPage3(props) {

  const [count, setCount] = useState(0)
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  }
  // 这一个每次渲染结束都在调用
  useEffect(() => {
    console.log(1111111)
    document.title = count
  })
  // 这个只调用了一次
  // 第二个参数是一个数组，只有数组的每一项都不变时才会阻止useEffect执行
  // todo 是什么样的不变呢，是不是和PureComponent一样对里面的内容作浅比较
  // 第二个参数3种形态undefined、空数组、非空数组
  useEffect(() => {
    console.log(2222)
    window.addEventListener('resize', onResize, false)  // 默认冒泡
    // 这是一个回调函数
    return () => {
      console.log('组件卸载时会执行');
      window.removeEventListener('resize', onResize, false)
    }
  }, []) // 这个[]作用不太清楚，有这个可以避免每次渲染都绑定和解绑，只运行在第一次渲染，而且结束时会解除这个绑定函数

  // 这个只有当count变化时才执行
  useEffect(() => {
    console.log('count', count)
  }, [count])

  const onClick = () => {
    console.log('onclick');
  }
  useEffect(() => {
    document.querySelector('#size').addEventListener('click', onClick, false)
    return () => {
      console.log('removeEventListener')
      document.querySelector('#size').removeEventListener('click', onClick, false)
    }
  })
  return (
    <div>
      <button type='button' onClick={() => {
        setCount(count + 1)
      }}>count:{count}</button>
      {
        count % 2 ? <span id="size">
          {size.width}*{size.height}
        </span> : <p id="size">
            {size.width}*{size.height}
          </p>
      }


    </div>
  )
}
export default HooksPage3
