import {isMobile} from '../scripts/animateResume/untils/untils'

const is_mobile: boolean = isMobile()

export const style1:string = `/**
 *
 * Hey. 我叫张熙沐枫. 前端高级开发.
 *
 * 这是我的动态简历
 *
 * 废话少说. 现在开始...
 *
 */

* {
  transition: all 1s;
}

/**
 * 这个动画好像看起来没什么用.
 *
 * 白纸黑字看起来好刺眼,
 * 说改就改...
 */

html {
  background: #216583;
  font-size: 10px;
  overflow: hidden;
}

/***
 * 继续...
 */

pre, a {
  color: #ffffff;
}

/**
 * 现在好点了.
 *
 * 这个地方有点憋屈.
 *
 * 我们重新建个地方.
 */

pre:not(:empty) {
  ${is_mobile ?
  `height:46%;
  width: calc(100% - 2rem);`
  :
  `height: 100%;`}
  font-size: 1.4rem;
  overflow: auto;
  background: rgb(48, 48, 48);
  border: 1px solid #ccc;
  padding: 1rem 1rem 2rem;
  white-space: pre-wrap;
  outline: 0;
}

#style-container {
  height:92%;${is_mobile ? 'width:100%;' : 'width: 49%;transform: translateX(95%);'}
  position: absolute;
  left: 1rem;
  top: 1rem;
}

/**
 * 漂亮! 但是这个可读性不太友好
 * 让我们来给它点样式.
 */

#style-container  { color: #DEDEDE }
.comment       { color: #857F6B; font-style: italic; }
.selector      { color: #D7BA7D; }
.keyword       { color: #569CD6; }
.property      { color: #569CD6; }
.function      { color: #C366A3; }
.punctuation   { color: #FFCF00; }

/**
 * 现在好一点了
 */

body {
  perspective: 100rem;
}

#style-container {
  ${is_mobile ? 'transform: rotateX(-10deg);' : 'transform: translateX(98.5%) rotateY(-10deg);'}
  transform-origin: right;
}

/**
 * 好了，现在是展示简历的时候了
 * 你不能只是来看动效 ->_->
 */

 #resume-container {
  height:92%;${is_mobile?'width:100%;':'width: 49%;'}
  white-space: normal;
 ${is_mobile ?
  ` position: absolute;
  left: 1rem;
  top:50%;`
  : ` position: absolute;
  left: 1rem;
  top: 1rem;
  transform: rotateY(10deg);
  transform-origin: left;`}
}
`

export const style2 = `/**
 * markdown 看起来不是太好
 */

#resume-container{
  font-size: 1.4rem;
}
#resume-container h1{
  display: inline-block;
  border-bottom: 1px solid;
  margin: .5rem 0 1rem;
  font-size: 2.6rem;
}
#resume-container a{
  color: #ffffff;
  text-decoration: none;
}
#resume-container ul> li{
  margin-bottom: .3rem;
}
#resume-container ul> li::before{
  content: '•';
  margin-right: .5rem;
  color: '#ffffff';
}

/**
 * 好了，差不多了。
 *
 * 效果来自 by http://strml.net/
 *
 * 本项目地址 https://github.com/zhangximufeng/animate_resume_ts.git.
 *
 */`
