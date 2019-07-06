import React, { createContext, Component } from "react"
// 一般不要滥用，会影响组件的独立性
// Provider：提供者          Consumer：消费者
export const BatteryContext = createContext(90) // 里面的参数是默认值，一般单元测试时使用
export const OnlineContext = createContext()



 


