#性能优化  解决页面首次加载的性能问题
1. webpack code splitting
2. import 静态或者动态导入模块, 动态导入的模块render时才会去加载
`
import('./detail.js').then(...)

`

#注意事项
1. React.lazy 函数允许您渲染动态导入为常规组件
2. React.lazy 和 Suspense 尚不可用于服务器端渲染。如果要在服务器渲染的应用程序中进行代码拆分，我们建议使用 Loadable Components 