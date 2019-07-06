import React, { Component, lazy, Suspense } from "react"
import { connect } from "react-redux"
import "./index.less"

// 封装的是组件的导入行为
// 详细介绍  https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy
// 注意暂不支持服务端渲染
// /* webpackChunkName: "about" */  结合webpack可以自定义命名
const About = lazy(() => import(/* webpackChunkName: "about" */ './about.js'))

class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  // static介绍  https://www.jianshu.com/p/5585412b4575
  // 错误边界
  static getDerivedStateFromError() {
    // todo 加入放生了错误，如何再请求一次
    return {
      hasError: true,
    }
  }
  // ErrorBoundary 错误边界，能够捕获后台组件渲染错误的组件
  // 利用react生命周期ComponentDidCatch, 也可以使用静态方法
  // componentDidCatch() {
  //   this.setState({
  //     hasError: true
  //   })
  // }
  render() {
    // fallback如何加载一个组件需要组件的实例， <loading />
    const { hasError } = this.state

    return (
      <div>
        {
          hasError ? <div>error</div> : (
            <Suspense fallback={<div>loading</div>}>
              <About></About>
            </Suspense>
          )
        }
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
