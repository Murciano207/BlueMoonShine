(this["webpackJsonppink-sale"]=this["webpackJsonppink-sale"]||[]).push([[16],{1302:function(e,t,c){"use strict";c.r(t);var a=c(28),s=c(100),r=c(17),n=c(1),i=c(907),j=c(895),l=c(816),d=c(893),b=c(832),o=c(1277),O=c(90),p=c(866),x=c.n(p),h=c(11),u=c(7),m=c.n(u),f=c(42),v=c(455),g=c(24),_=c(141);var w=c(50),y=c(19),N=c(285),k=c(206),D=c(411),L=c(30),z=c(303),M=c.n(z),A=c(3);t.default=function(){var e=Object(n.useState)(+new Date),t=Object(r.a)(e,2),c=t[0],p=t[1],u=function(e){var t=Object(g.c)();return Object(v.a)(Object(f.a)(m.a.mark((function c(){return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",_.a.pool.getLeaderboard(t,e));case 1:case"end":return c.stop()}}),c)}))),[e])}(c),z=u.loading,I=u.value,S=Object(N.a)(),T=Object(g.c)(),J=Object(k.a)(),B=Object(D.a)(),C=Object(n.useMemo)((function(){return[].concat(Object(s.a)(B||[]),Object(s.a)(J||[]))}),[J,B]),E=(I&&I.docs&&Array.isArray(I.docs)?I.docs:[]).map((function(e){return Object(a.a)(Object(a.a)({},e),{},{pool_detail:Object(h.f)(e.pool_detail)})})).filter((function(e){return C.indexOf(e.pool_address)<0})),F=Object(h.v)(+new Date(2021,6,25),+new Date),H=function(e){return+new Date-7*Number(e)*24*60*60*1e3};return Object(n.useEffect)((function(){M.a.send({hitType:"pageview",page:"/#/leaderboard/",page_title:"Leaderboards",title:"Leaderboards"})}),[]),Object(A.jsx)("div",{className:"py-6 container",children:Object(A.jsxs)(i.a,{children:[Object(A.jsx)(j.a,{defaultActiveKey:"0",onChange:function(e){p(H(e))},children:x()(F).map((function(e){var t=new Date(H(e)),c=Object(h.r)(t),a=Object(r.a)(c,2),s=a[0],n=a[1];return Object(A.jsx)(j.a.TabPane,{tab:"Week ".concat(n,"/").concat(s)},e)}))}),Object(A.jsx)(l.a,{spinning:z,children:Object(A.jsx)(d.b,{itemLayout:"horizontal",dataSource:E,renderItem:function(e,t){return Object(A.jsxs)(d.b.Item,{children:[Object(A.jsx)("div",{className:"mr-4",children:Object(A.jsx)(b.a.Title,{level:4,children:t+1})}),Object(A.jsx)(d.b.Item.Meta,{avatar:Object(A.jsx)(o.a,{size:{xs:24,sm:32,md:36,lg:44,xl:44,xxl:44},src:e.pool_detail.logoUrl}),title:Object(A.jsxs)("div",{children:[Object(A.jsx)("span",{children:e.token_name}),Object(A.jsx)("span",{className:"ml-2 is-size-7",children:e.token_symbol})]}),description:Object(A.jsxs)("div",{className:"flex items-center",children:[Object(A.jsxs)("p",{children:[Object(A.jsx)("span",{children:"Hardcap: "}),Object(A.jsxs)("a",{children:[Object(h.i)(e.hard_cap,S.decimals||0)," ",S.symbol]})]}),Object(A.jsx)("p",{children:"\xa0\u2013\xa0"}),Object(A.jsxs)("p",{children:[Object(A.jsx)("span",{children:"Listing time: "}),Object(A.jsx)("a",{children:Object(h.k)(Object(h.p)(e.finish_time))})]})]})}),Object(A.jsx)("div",{className:"mr-2",children:Object(A.jsx)("div",{className:"flex-wrapper",children:Object(A.jsx)("div",{className:"single-chart",children:Object(A.jsxs)("svg",{viewBox:"0 0 36 36",className:"circular-chart green",children:[Object(A.jsx)("path",{className:"circle-bg",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),Object(A.jsx)("path",{className:"circle",strokeDasharray:"".concat(e.raised_percent,", 100"),d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),Object(A.jsxs)("text",{x:"18",y:"20.35",className:"percentage",children:[e.raised_percent.toString().length>3?e.raised_percent.toFixed(1):e.raised_percent,"%"]})]})})})}),Object(A.jsx)(w.b,{to:Object(L.a)(Object(y.b)(y.a.LauchpadDetail).replace(":id",e.pool_address),T),children:Object(A.jsx)(O.a,{type:"primary",size:"middle",children:"View pool"})})]},e.pool_address)}})})]})})}}}]);