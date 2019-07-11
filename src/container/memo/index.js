import React, { Component, PureComponent, memo } from "react"
import { connect } from "react-redux"
import "./index.less"

// class Leaf extends Component {
//   // 这个可以避免重新渲染，但是需要对比太麻烦
//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextProps.name === this.props.name) {
//       return false
//     } else {
//       return true
//     }
//   }
//   render() {
//     console.log('Leaf render')
//     return (
//       <h1>Leaf</h1>
//     )
//   }
// }

// class Leaf extends PureComponent {
//   // PureComponent提供了一个具有浅比较的shouldComponentUpdate方法，但是只有传入属性本身的对比
//   // PureComponent和Component区别  https://segmentfault.com/a/1190000014979065
//   // this.props.person.age 点击之后本应该重新渲染，但是却没有渲染，
//   // 所以使用PureComponent时注意，只有第一级发生变化，才起作用
//   render() {
//     console.log('Leaf render')
//     return (
//       <h1>
//         Leaf:
//         {this.props.person.age}
//       </h1>
//     )
//   }
// }


// memo是针对没状态组件的，作用和PureComponent类似
const Leaf = memo(function Leaf(props) {
  console.log('Leaf render', props)
  return (
    <h1>
      Leaf:
      {props.person.age}
    </h1>
  )
})

class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      person: {
        age: 1
      }
    }
  }
  cb = () => {

  }
  render() {
    const person = this.state.person
    // console.log('count', this.state.count);
    console.log('age', this.state.person.age);
    // 还有在Leaf 放入一个 cb = {() => {}}内联函数，也会每次都渲染， 可以使用this.cb
    // count={this.state.count}
    return (
      <div>
        
        <Leaf name="zhang"  person={person}   />
        <button type='button' onClick={() => {
          // 每次运行后Leaf 组件都会重新渲染一次
          setInterval(() => {
            person.age++
            this.setState({
              count: this.state.count + 1,
              // person,

            })
          }, 1000)
        }}>count</button>
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
