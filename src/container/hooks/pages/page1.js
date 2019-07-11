import React, { Component, PureComponent } from "react"

// 传统class模式
// PureComponent 通过props和state的浅对比来实现 shouldComponentUpate()
// PureComponent和Component区别    https://blog.csdn.net/u013003052/article/details/87894262
// 浅比较和深比较    https://www.jianshu.com/p/06a78b66c3a2
// 使用hooks之后修饰器不好用了，是对类的行为进行修饰的
class HooksPage1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <button type='button' onClick={() => {
          this.setState({
            count: this.state.count + 1,
          })
        }}>count:{this.state.count}</button>
      </div>
    )
  }

}

export default HooksPage1
