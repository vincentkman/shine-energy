(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),s=a.n(l),c=(a(16),a(2)),i=a(1),u=a(5),o=a(6),m=a(8),p=a(7),d=a(9),h=(a(17),a(18),a(19),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleInput=function(e){e.target.value>=1e9?e.target.value=999999999:e.target.value<=-1e9&&(e.target.value=-999999999);var t=e.target.value,n=e.target.name;a.setState(function(e){return Object(i.a)({},n,{prev:e[n].prev,current:t,used:t-e[n].prev,bill:1e3+20*(t-e[n].prev-100)})})},a.state={gas:{prev:11e3,current:0,used:0,bill:0},elec:{prev:11e3,current:0,used:0,bill:0}},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/shine-energy.netlify.com/.netlify/functions/meter-readings",{headers:{"x-requested-with":"XMLHttpRequest",origin:"https://google.com"}}).then(function(e){return e.json()}).then(function(t){console.log("This is our response  "+Object.entries(t)),e.setState(function(e){return{gas:Object(c.a)({},e.gas,{prev:t.gas.reading}),elec:Object(c.a)({},e.elec,{prev:t.electricity.reading})}})}).catch(function(e){console.log("Our fetch request is failing, error: "+e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"SHINE ENERGY"),r.a.createElement("h2",{className:"subtitle"},"Your Account Summary"),r.a.createElement("div",{className:"container container1"},r.a.createElement("div",{className:"item"},"Total Bill: ",r.a.createElement("span",null,E(this.state.gas.bill+this.state.elec.bill),"p (\xa3",E((this.state.gas.bill+this.state.elec.bill)/100),")"))),r.a.createElement("div",{className:"container container2"},r.a.createElement("div",{className:"item"},r.a.createElement("label",{htmlFor:"gas"},"Gas Reading:"),r.a.createElement("input",{type:"number",max:"999",name:"gas",onChange:function(t){return e.handleInput(t)}})),r.a.createElement("div",{className:"item"},"Gas Reading Entered:",r.a.createElement("span",null,E(this.state.gas.current))),r.a.createElement("div",{className:"item"},"Gas units used =>",r.a.createElement("div",{className:"used"},"Current:",r.a.createElement("span",null,E(this.state.gas.current)),r.a.createElement("br",null),"previous:",r.a.createElement("span",null,E(this.state.gas.prev))," ",r.a.createElement("br",null),"Used:",r.a.createElement("span",null,E(this.state.gas.used)))),r.a.createElement("div",{className:"item"},"Gas bill amount =>",r.a.createElement("span",null,E(this.state.gas.bill)),"p (\xa3",r.a.createElement("span",{id:"pound"},E(this.state.gas.bill/100)),")")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"item"},r.a.createElement("label",{htmlFor:"elec"},"Electricity Reading:"),r.a.createElement("input",{type:"number",max:"999",name:"elec",onChange:function(t){return e.handleInput(t)}})),r.a.createElement("div",{className:"item"},"Electricty Reading Entered: ",r.a.createElement("span",null,E(this.state.elec.current))),r.a.createElement("div",{className:"item"},"Electricty units used =>",r.a.createElement("div",{className:"used"},"Current:",r.a.createElement("span",null,E(this.state.elec.current)),r.a.createElement("br",null),"previous:",r.a.createElement("span",null,E(this.state.elec.prev))," => ",r.a.createElement("br",null),"Used:",r.a.createElement("span",null,E(this.state.elec.used)))),r.a.createElement("div",{className:"item"},"Electricty bill amount =>",r.a.createElement("span",null,E(this.state.elec.bill)),"p (\xa3",r.a.createElement("span",{id:"pound"},E(this.state.elec.bill/100)),")")))}}]),t}(r.a.Component)),E=function(e){return 0==e?0:v(e)},v=function(e){var t=e.toString();return t.includes(".")?t.split(".").reduce(function(e,t){return console.log("Whole "+e+" fraction "+t),e.split("").reverse().map(function(e,t){return t%3==0&&0!=t&&"-"!=e?e+",":e}).reverse().join("").concat("."+t)}):t.split("").reverse().map(function(e,t){return t%3==0&&0!=t&&"-"!=e?e+",":e}).reverse().join("")},g=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.e3572fd4.chunk.js.map