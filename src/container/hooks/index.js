import React from "react"
import { connect } from "react-redux"
import { Route, Switch, Link } from "react-router-dom"
import Page1 from "./pages/page1" // 子页面1   传统class模式
import Page2 from "./pages/page2" // 子页面2   使用hooks方式
import Page3 from "./pages/page3" // 子页面3   useEffect
import Page4 from "./pages/page4" // 子页面4   hooks中使用 useContext获取contentext
import Page5 from "./pages/page5" // 子页面5   useMemo判断一个逻辑是否重复执行
import Page6 from "./pages/page6" // 子页面6   useMemo使用 结合onclick
import Page7 from "./pages/page7" // 子页面7   ref
import Page8 from "./pages/page8" // 子页面7   自定义hooks


import "./index.less"

function HooksPage({
  match, // 自动注入的match对象
}) {
  return (
    <div> 
      <h2>Hooks测试</h2>
      <div className="sonTest">
        <Link to={`${match.url}/Page1`}>子页1</Link>
        <Link to={`${match.url}/Page2`}>子页2</Link>
        <Link to={`${match.url}/Page3`}>子页3</Link>
        <Link to={`${match.url}/Page4`}>子页4</Link>
        <Link to={`${match.url}/Page5`}>子页5</Link>
        <Link to={`${match.url}/Page6`}>子页6</Link>
        <Link to={`${match.url}/Page7`}>子页7</Link>
        <Link to={`${match.url}/Page8`}>子页8</Link>


        <div className='line'></div>
        <Switch>
          <Route exact path={`${match.url}/`} component={Page1} />
          <Route exact path={`${match.url}/Page1`} component={Page1} />
          <Route exact path={`${match.url}/Page2`} component={Page2} />
          <Route exact path={`${match.url}/Page3`} component={Page3} />
          <Route exact path={`${match.url}/Page4`} component={Page4} />
          <Route exact path={`${match.url}/Page5`} component={Page5} />
          <Route exact path={`${match.url}/Page6`} component={Page6} />
          <Route exact path={`${match.url}/Page7`} component={Page7} />
          <Route exact path={`${match.url}/Page8`} component={Page8} />


        </Switch>
      </div>
    </div>
  )
}

export default connect(
  state => {
    return {}
  },
  dispatch => ({
    actions: {}
  })
)(HooksPage)
