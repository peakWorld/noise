## 创建项目
* `npx react-native init xxx --template react-native-template-typescript`

## 

## Css 方案
* tailwind
* styledComponent
* styleSheet

## 图片加载
* 静态图片资源: 每次访问时都不会变化的图片资源
* 网络图片
* 宿主应用图片 不推荐
* Base64图片

* 图片缓存机制配合预加载机制
  * 预加载提前将网络图片缓存到本地, 用户首次查看但机器已经是二次加载。
  * `Image.prefetch()`接受图片的远程地址
* 开发环境用require加载network图片/base64图片, 上线编译打包时用工具分别处理(network图片要上传到cdn、base64图片转成base64格式)

## 输入框
* 受控组件

## 无限滑动
* FlatList
  * 如果每项固定高度, 设置getItemLayout属性提高性能
  * 可用于高度不固定
* RecyclerListView
  * 适用于高度固定或大致固定

## 导航 React Navigation
* https://reactnavigation.org
* 安装步骤
  * `yarn add @react-navigation/native`
  * `yarn add react-native-screens react-native-safe-area-context`
  * ios 需要执行 `npx pod-install ios`
  * 安卓 按文档方案来
* 问题
  * 安全区域 https://reactnavigation.org/docs/handling-safe-area
  * 使用icon https://medium.com/@vimniky/how-to-use-vector-icons-in-your-react-native-project-8212ac6a8f06
* devtools
  * https://reactnavigation.org/docs/devtools

## 状态管理
* @reduxjs/toolkit 全局状态
* @tanstack/react-query 异步状态
* useState 组件状态

## 动画
* Animated 自带, 轻量级动画
* Lottie 无交互场景的
* Reanimated 可交互场景 ✨
  * 在UI线程中创建隔离的js虚拟机
  * UI线程js虚拟机和Js线程的js虚拟机是两个不同的虚拟机; UI线程js虚拟机只执行相关动画、手势回调函数的上下文, JS线程js虚拟机执行页面渲染的上下文

## 手势
* react-native-gesture-handler
* 通用回调: 手势并未真正触发，但也会触发通用回调
  * onBegin、onTouchesDown、onTouchesUp、onFinalize
* 激活回调: 手势真正被触发了
  * onStart、onUpdate、onChange、onEnd
  * 手势内部状态变为ACTIVE，才会触发onStart、onUpdate、onChange
  * 手势内部状态由ACTIVE变为END，才会触发onEnd
* 系统取消回调: 操作系统打断了手势
  * onTouchesCancellled
* 单视图多手势
  * 竞争 Gesture.Race 只要触发了一个手势, 其他手势事件不会再触发
  * 同时触发 Gesture.Simultaneous 多个手势同时响应
  * 优先级 Gesture.Exclusive 第一个手势事件大于第二个手势, 依次类推。

## 解决bug思路
* 发现问题、找到原因、修复bug
* 工具 Terminal和Flipper 

## 命令行
* 打正式包 `yarn ios --configuration Release`
* 编译打包
  * 指定机器 `yarn ios --simulator "iPhone 14"`