(this.webpackJsonphacker_news=this.webpackJsonphacker_news||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),u=(n(11),n(12),n(1)),o=n(2),l=n.n(o),i=n(3);var f=function(e){var t=e.news,n=new Date(t.time),c="https://hacker-news.firebaseio.com/v0/user/".concat(t.by,".json"),s=Object(a.useState)(null),o=Object(u.a)(s,2),l=o[0],i=o[1];return Object(a.useEffect)((function(){fetch(c).then((function(e){return e.json()})).then((function(e){i(e.karma)}))}),[]),r.a.createElement("a",{href:"#"},r.a.createElement("article",{className:"News"},r.a.createElement("header",{className:"News__header"},r.a.createElement("section",null,r.a.createElement("h3",null,t.by)," ",r.a.createElement("p",null,r.a.createElement("small",null,"karma:")," ",l))," ",r.a.createElement("data",null,n.toDateString())),r.a.createElement("h2",null,t.title),r.a.createElement("h3",null,"".concat(t.score," \u2729"))))},m="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",h=function(e){return"https://hacker-news.firebaseio.com/v0/item/".concat(e,".json")},p=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e,t){for(var n,a=[],r=[],c=0;c<10;){var s=(n=t,Math.floor(Math.random()*Math.floor(n)));r.includes(s)||(r.push(s),c++)}return r.forEach((function(t){a.push(e[t])})),a};var b=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(u.a)(s,2),b=o[0],w=o[1];return Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,p(m);case 3:return t=e.sent,n=t.length,a=E(t,n),e.next=8,Promise.all(a.map((function(e){return p(h(e))})));case 8:r=e.sent,c(r),w(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("main",{className:"topNews"},console.log(n,b),b?r.a.createElement("p",null,"loading..."):n.sort((function(e,t){return t.score-e.score})).map((function(e){return r.a.createElement(f,{news:e,key:e.id})})))};var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Top Hacker's News"),r.a.createElement(b,null))};s.a.render(r.a.createElement(w,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.98a43303.chunk.js.map