(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(8),r=n.n(o),l=(n(15),n(3)),i=n(1),s=n(5),u=n(4),m=n(6),p=n(9),h=n.n(p),d=(n(17),n(2)),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={clock:0},n.ticker=n.ticker.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.ticker,1e3)}},{key:"ticker",value:function(){this.setState({clock:new Date-this.props.start})}}]),Object(i.a)(t,[{key:"render",value:function(){var e=Math.round(this.state.clock/1e3);return c.a.createElement("div",null,c.a.createElement("p",null,"You have been on this site since")," ",c.a.createElement("br",null),c.a.createElement("span",null," ",e),c.a.createElement("p",null," Seconds."))}}]),t}(a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"Welcome to Timer App built in React Js"),c.a.createElement("p",null," Scroll Down",c.a.createElement("br",null),"\u2193")),c.a.createElement(b,{start:Date.now()}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[10,2,1]]]);
//# sourceMappingURL=main.062044f5.chunk.js.map