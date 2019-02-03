(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,t,n){e.exports=n(84)},82:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a,o=n(0),r=n.n(o),c=n(13),i=n.n(c),l=n(11),u=n(19),d=n(48),s=n(20),m=n(21),f=n(34),p=n(32),h=n(35),b=n(25),O=n(12),E=n(86),v=n(87),y=n(61),j=1,T="ADD_TODO",k="TOGGLE_TODO",g="REMOVE_TODO",C="CHANGE_TODO",w="EDIT_TODO",A=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={name:""},n.handleInputChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,o=t.name;n.setState(Object(O.a)({},o,a))},n.onSubmit=function(e){e.preventDefault();var t=n.props.todo;n.state.name&&(null!==t?n.props.onChangeTodo(t.id,n.state.name):n.props.onAddTodo(n.state.name)),n.setState({name:""})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){e.todo!==this.props.todo&&null!==this.props.todo&&this.setState({name:this.props.todo.text})}},{key:"render",value:function(){var e=this.props,t=(e.onAddTodo,e.todo),n=(e.onChangeTodo,Object(b.a)(e,["onAddTodo","todo","onChangeTodo"]));return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(E.a,n,r.a.createElement(v.a,{name:"name",value:this.state.name,onChange:this.handleInputChange,placeholder:"Your task name..."}),r.a.createElement(E.a.Append,null,r.a.createElement(y.a,{type:"submit"},null!==t?"Edit":"Add"))))}}]),t}(r.a.Component),x=Object(l.b)(function(e){return{todo:e.todos.find(function(e){return!0===e.edit})||null}},function(e){return{onChangeTodo:function(t,n){return e(function(e,t){return{type:C,payload:{id:e,text:t}}}(t,n))}}})(A),D=Object(l.b)(null,function(e){return{onAddTodo:function(t){return e(function(e){return{type:T,payload:{id:j++,text:e}}}(t))}}})(x),R="SET_FILTER",S="SHOW_ALL",I="SHOW_COMPLETED",N="SHOW_ACTIVE",_=n(92),L=n(88),W=n(89),H=n(94),B=function(e){var t=e.onTodoClick,n=e.onTodoEdit,a=e.onTodoRemove,o=e.completed,c=e.text;return r.a.createElement(_.a.Item,{variant:o?"success":""},r.a.createElement(L.a,null,r.a.createElement(W.a,{className:"col-auto mr-auto"},r.a.createElement(H.a,{type:"checkbox",checked:o,onChange:t,label:c})),r.a.createElement(W.a,{className:"col-auto"},r.a.createElement(y.a,{variant:"link",className:"py-0",onClick:n},"Edit"),r.a.createElement(y.a,{variant:"link",className:"py-0 text-danger",onClick:a},"Remove"))))},F=function(e){var t=e.todos,n=Object(b.a)(e,["todos"]);return r.a.createElement(_.a,null,t.length>0?t.map(function(e,t){return r.a.createElement(B,Object.assign({key:t},e,{onTodoClick:function(){return n.onTodoClick(e.id)},onTodoEdit:function(){return n.onTodoEdit(e.id)},onTodoRemove:function(){return n.onTodoRemove(e.id)}}))}):r.a.createElement(_.a.Item,{variant:"primary"},"List is empty."))},G=function(e,t){switch(t){case S:return e;case I:return e.filter(function(e){return!0===e.completed});case N:return e.filter(function(e){return!1===e.completed});default:throw new Error("Unknown filter: ".concat(t))}},M=Object(l.b)(function(e){return{todos:G(e.todos,e.filter)}},function(e){return{onTodoClick:function(t){return e(function(e){return{type:k,payload:{id:e}}}(t))},onTodoEdit:function(t){return e(function(e){return{type:w,payload:{id:e}}}(t))},onTodoRemove:function(t){return e(function(e){return{type:g,payload:{id:e}}}(t))}}})(F),J=function(e){var t=e.as,n=e.active,a=e.children,o=e.onClick,c=t||"a";return r.a.createElement(c,{onClick:function(e){e.preventDefault(),o()},active:n},a)},U=Object(l.b)(function(e,t){return{active:e.filter===t.filter}},function(e,t){return{onClick:function(){return e((n=t.filter,{type:R,payload:{filter:n}}));var n}}})(J),V=n(90),z=n(85),K=function(e){var t=e.filters,n=Object(b.a)(e,["filters"]);return r.a.createElement(V.a,n,Object.keys(t).map(function(e,n){return r.a.createElement(U,{key:n,as:z.a.Item,filter:e},t[e])}))},P=(a={},Object(O.a)(a,S,"All"),Object(O.a)(a,N,"Active"),Object(O.a)(a,I,"Completed"),a),Y=Object(l.b)(function(e){var t=e.filter;return{filters:P,title:"Filter: ".concat(P[t])}},{})(K),$=n(91),q=n(93),Q=(n(80),function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement($.a,null,r.a.createElement(L.a,null,r.a.createElement(W.a,{style:{marginTop:20},md:{span:6,offset:3}},r.a.createElement(q.a,null,r.a.createElement(q.a.Header,{as:"h3",className:"text-center"},"Another React Todo"),r.a.createElement(q.a.Body,null,r.a.createElement(D,{className:"pb-3"}),r.a.createElement(L.a,null,r.a.createElement(W.a,{className:"col-auto ml-auto mt-2 mb-2"},r.a.createElement(Y,{variant:"outline-secondary",size:"sm"}))),r.a.createElement(M,null)),r.a.createElement(q.a.Footer,{as:"small",className:"text-center"},r.a.createElement("a",{href:"https://github.com/wojciechkrol"},"Wojciech Kr\xf3l")," @ 2019 | ",r.a.createElement("code",null,"Made while learning React + Redux"))))))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=n(18),Z=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(s.a)(this,e),this.reducers=t}return Object(m.a)(e,[{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.reducers=Object(X.a)({},this.reducers,Object(O.a)({},t||e.name,e))}},{key:"all",value:function(){return this.reducers}}]),e}(),ee=n(51),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return[].concat(Object(ee.a)(e),[Object(X.a)({},t.payload,{completed:!1,edit:!1})]);case k:return e.map(function(e){return e.id===t.payload.id?Object(X.a)({},e,{completed:!e.completed}):e});case g:return e.filter(function(e){return e.id!==t.payload.id});case C:return e.map(function(e){return e.id===t.payload.id?Object(X.a)({},e,{text:t.payload.text,edit:!1}):e});case w:return e.map(function(e){return e.id===t.payload.id?Object(X.a)({},e,{edit:!0}):Object(X.a)({},e,{edit:!1})});default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return t.payload.filter;default:return e}},ae=new Z;ae.add(te),ae.add(ne);var oe=Object(u.c)(ae.all()),re=(n(82),Object(u.d)(oe,Object(u.a)(d.a)));i.a.render(r.a.createElement(l.a,{store:re},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,2,1]]]);
//# sourceMappingURL=main.df665143.chunk.js.map