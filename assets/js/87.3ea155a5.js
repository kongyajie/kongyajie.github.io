(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{377:function(t,e,a){"use strict";a.r(e);var v=a(10),_=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"react系列之4-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react系列之4-原理"}},[t._v("#")]),t._v(" React系列之4-原理")]),t._v(" "),e("h3",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),e("h4",{attrs:{id:"函数式编程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程"}},[t._v("#")]),t._v(" 函数式编程")]),t._v(" "),e("ul",[e("li",[t._v("纯函数")]),t._v(" "),e("li",[t._v("不可变值")])]),t._v(" "),e("h4",{attrs:{id:"jsx的本质-vdom和diff算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsx的本质-vdom和diff算法"}},[t._v("#")]),t._v(" JSX的本质&vdom和diff算法")]),t._v(" "),e("ul",[e("li",[t._v("JSX即createElement函数")]),t._v(" "),e("li",[t._v("执行生成vnode")]),t._v(" "),e("li",[t._v("patch(elem,vnode) patch(vnode,newVnode)")])]),t._v(" "),e("h4",{attrs:{id:"合成事件机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合成事件机制"}},[t._v("#")]),t._v(" 合成事件机制")]),t._v(" "),e("ul",[e("li",[t._v("更好的兼容性和跨平台（摆脱DOM的限制，比如在移动端使用时不需重新写一套）")]),t._v(" "),e("li",[t._v("减少内存消耗，避免频繁解绑")]),t._v(" "),e("li",[t._v("方便事件的统一管理（如事务机制）")]),t._v(" "),e("li",[t._v("React17事件绑定到root\n"),e("ul",[e("li",[t._v("React16绑定到document")]),t._v(" "),e("li",[t._v("React17绑定到root")]),t._v(" "),e("li",[t._v("有利于多个React版本并存，例如微前端")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:"evernotecid://B63432A3-3625-498B-A5B9-0B4067BB7E62/appyinxiangcom/6172631/ENResource/p661",alt:"91bca0d15ce207c92ae108c95cf1c410.png"}})]),t._v(" "),e("h4",{attrs:{id:"setstate和batchupdate机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setstate和batchupdate机制"}},[t._v("#")]),t._v(" setState和batchUpdate机制")]),t._v(" "),e("ul",[e("li",[t._v("setState 的表现（重要）主流程")]),t._v(" "),e("li",[t._v("batchUpdate 机制")]),t._v(" "),e("li",[t._v("transaction（事务）机制")])]),t._v(" "),e("h4",{attrs:{id:"组件渲染和更新的过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件渲染和更新的过程"}},[t._v("#")]),t._v(" 组件渲染和更新的过程")]),t._v(" "),e("ul",[e("li",[t._v("组件渲染过程\n"),e("ul",[e("li",[t._v("props/state")]),t._v(" "),e("li",[t._v("render()生成vnode")]),t._v(" "),e("li",[t._v("patch(elem,vnode)")])])]),t._v(" "),e("li",[t._v("组件更新过程\n"),e("ul",[e("li",[t._v("setState(newState) --\x3e dirtyComponents(可能有子组件)")]),t._v(" "),e("li",[t._v("遍历dirtyComponents，根据newState，newProps，通过render()生成newVnode")]),t._v(" "),e("li",[t._v("patch(vnode,newVnode)")])])]),t._v(" "),e("li",[t._v("patch被拆分为两个阶段\n"),e("ul",[e("li",[t._v("reconciliation阶段：执行diff算法，纯JS计算")]),t._v(" "),e("li",[t._v("commit阶段：将diff结果渲染DOM")])])]),t._v(" "),e("li",[t._v("为什么要拆分：可能会有性能问题\n"),e("ul",[e("li",[t._v("JS是单线程，且和DOM渲染公用一个线程")]),t._v(" "),e("li",[t._v("当组件足够复杂，组件更新计算和渲染都压力大")]),t._v(" "),e("li",[t._v("同时再有DOM操作需求（动画、鼠标拖拽等），将卡顿")])])]),t._v(" "),e("li",[t._v("React fiber\n"),e("ul",[e("li",[t._v("将reconciliation阶段进行任务拆分（commit dom渲染无法拆分）")]),t._v(" "),e("li",[t._v("DOM需要渲染时暂停，空闲时恢复")]),t._v(" "),e("li",[t._v("window.requestIdleCallback")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);