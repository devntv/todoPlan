(this["webpackJsonpreact-todo-app-vinh1"]=this["webpackJsonpreact-todo-app-vinh1"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(8),l=a.n(c),r=(a(16),a(2));var u=function(e){var t=Object(n.useState)(e.edit?e.edit.value:""),a=Object(r.a)(t,2),c=a[0],l=a[1],u=Object(n.useRef)(null);Object(n.useEffect)((function(){u.current.focus()}));var i=function(e){l(e.target.value)};return o.a.createElement("form",{className:"todo-form",onSubmit:function(t){t.preventDefault(),e.onSubmit({id:Math.floor(999*Math.random()),text:c}),l("")}},e.edit?o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"text",placeholder:"Update",value:c,name:"text",className:"todo-input edit",onChange:i,ref:u}),o.a.createElement("button",{className:"todo-button edit"},"Update :)")):o.a.createElement(o.a.Fragment,null," ",o.a.createElement("input",{type:"text",placeholder:"Add a todo",value:c,name:"text",className:"todo-input",onChange:i,ref:u}),o.a.createElement("button",{className:"todo-button"},"Add todo")))},i=a(6),d=a(9),m=a(10);var s=function(e){var t=e.todos,a=e.completeTodo,c=e.removeTodo,l=e.updateTodo,i=Object(n.useState)({id:null,value:""}),s=Object(r.a)(i,2),f=s[0],p=s[1];return f.id?o.a.createElement(u,{edit:f,onSubmit:function(e){l(f.id,e),p({id:null,value:""})}}):t.map((function(e,t){return o.a.createElement("div",{className:e.isComplete?"todo-row complete":"todo-row",key:t},o.a.createElement("div",{key:e.id,onClick:function(){return a(e.id)}},e.text),o.a.createElement("div",{className:"icons"},o.a.createElement(d.a,{onClick:function(){c(e.id)},className:"delete-icon"}),o.a.createElement(m.a,{onClick:function(){p({id:e.id,value:e.text})},className:"edit-icon"}),"\u2728"))}))},f=a(5);var p=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1];return o.a.createElement("div",null,o.a.createElement("h1",null,"ADD Your ",o.a.createElement("span",{style:{color:"#61dafb"}},"Plan")," In To Day  ",o.a.createElement("span",{style:{color:"#61dafb"}},o.a.createElement(f.a,null),"  React ",o.a.createElement(f.b,null)," ")),o.a.createElement(u,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[e].concat(Object(i.a)(a));c(t),localStorage.setItem("todos",JSON.stringify(t))}}}),o.a.createElement(s,{todos:a,completeTodo:function(e){var t=a.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));c(t)},removeTodo:function(e){var t=Object(i.a)(a).filter((function(t){return t.id!==e}));c(t)},updateTodo:function(e,t){t.text&&!/^\s*$/.test(t.text)&&c((function(a){return a.map((function(a){return a.id===e?t:a}))}))}}))};var v=function(){return o.a.createElement("div",{className:"todo-app"},o.a.createElement(p,null))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.9b18ff46.chunk.js.map