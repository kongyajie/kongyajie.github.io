(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{512:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"经验总结-web获取元素大小与各种宽高距离总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#经验总结-web获取元素大小与各种宽高距离总结"}},[t._v("#")]),t._v(" 经验总结-Web获取元素大小与各种宽高距离总结")]),t._v(" "),s("h2",{attrs:{id:"_1、获取元素自身大小、滚动位移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、获取元素自身大小、滚动位移"}},[t._v("#")]),t._v(" 1、获取元素自身大小、滚动位移")]),t._v(" "),s("p",[s("code",[t._v("DOM API")]),t._v(" 支持获取元素自身的各种宽高大小，滚动位移等，每个属性都有其使用场景，根据需要获取即可：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("clientWidth/clientHeight")]),t._v("：元素内容的可视部分，不包含边框、滚动条，但是包含内边距")]),t._v(" "),s("li",[s("code",[t._v("offsetWidth/offsetHeight")]),t._v("：元素盒子的可视部分，包含宽高、内边距、边框")]),t._v(" "),s("li",[s("code",[t._v("scrollWidth/scrollHeight")]),t._v("：滚动宽高，包含盒子的所有内容，包括隐藏的滚动区域")])]),t._v(" "),s("h2",{attrs:{id:"_2、获取网页的宽高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、获取网页的宽高"}},[t._v("#")]),t._v(" 2、获取网页的宽高")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPagearea")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"_3、获取元素距离顶部距离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、获取元素距离顶部距离"}},[t._v("#")]),t._v(" 3、获取元素距离顶部距离")]),t._v(" "),s("p",[t._v("获取元素距离顶部距离：")]),t._v(" "),s("p",[t._v("方法一："),s("code",[t._v("offsetParent.offsetTop")]),t._v("\n方法二："),s("code",[t._v("getBoundingClientRect")]),t._v(" 方法返回元素的大小及其相对于视口的位置。")]),t._v(" "),s("h2",{attrs:{id:"_4、获取元素内部滚动位移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、获取元素内部滚动位移"}},[t._v("#")]),t._v(" 4、获取元素内部滚动位移")]),t._v(" "),s("p",[t._v("内容超过元素最大宽度/高度时，使用下面的属性获取：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("scrollTop")])]),t._v(" "),s("li",[s("code",[t._v("scrollLeft")])])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("document.documentElement")]),t._v(" 也同样拥有上面的这些属性，如获取当前页面的滚动位移：")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前页面垂直滚动条位移（兼容性写法）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scrollTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"_5、获取鼠标到元素、视口、文档、屏幕距离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、获取鼠标到元素、视口、文档、屏幕距离"}},[t._v("#")]),t._v(" 5、获取鼠标到元素、视口、文档、屏幕距离")]),t._v(" "),s("p",[t._v("这种主要是读取event对象中的值：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("ev.offsetX")]),t._v(" 到元素距离")]),t._v(" "),s("li",[s("code",[t._v("ev.clientX")]),t._v(" 到视口距离")]),t._v(" "),s("li",[s("code",[t._v("ev.pageX")]),t._v(" 到文档距离，包含滚动距离")]),t._v(" "),s("li",[s("code",[t._v("ev.screenX")]),t._v(" 到屏幕距离")])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6844903846636961806",target:"_blank",rel:"noopener noreferrer"}},[t._v("元素大小与获取各种高度 宽度 距离总结"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding offsetWidth, clientWidth, scrollWidth and -Height, respectively"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);