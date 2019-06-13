import React, { Component, lazy, Suspense } from "react"
import { connect } from "react-redux"
import "./index.less"

const About = lazy(() => import(/* webpackChunkName: "about" */ './about.js'))

class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError() {
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
