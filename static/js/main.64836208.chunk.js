(this.webpackJsonpkksearchwindow=this.webpackJsonpkksearchwindow||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(0),c=n(10),i=n.n(c),s=n(14),o=n(11),l=n(34),d=n(35),j="PRODUCT_LIST_REQUEST",u="PRODUCT_LIST_SUCCESS",h="PRODUCT_LIST_FAIL",b=Object(o.combineReducers)({listResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{items:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{loading:!0,items:[]};case u:return{loading:!1,items:t.payload.data.items};case h:return{loading:!1,error:t.payload};default:return e}}}),p=[l.a],g=Object(o.createStore)(b,{},Object(d.composeWithDevTools)(o.applyMiddleware.apply(void 0,p))),x=(n(51),n(52),n(53),n.p,n(54),n(40)),O=n(80),f=n(41),m=n(78),y=n(79),v=n(82),k=function(e){var t=e.item;return Object(r.jsxs)(v.a,{className:"my-3 p-3 rounded",children:[Object(r.jsx)(v.a.Link,{style:{display:"table-cell"},href:t.image.contextLink,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(v.a.Img,{src:t.image.thumbnailLink,variant:"top",style:{height:"100%"}})}),Object(r.jsxs)(v.a.Body,{children:[Object(r.jsx)(v.a.Link,{style:{display:"table-cell"},href:t.image.contextLink,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(v.a.Title,{as:"div",children:Object(r.jsx)("strong",{children:t.title})})}),Object(r.jsx)(v.a.Link,{href:t.displayLink,target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(v.a.Text,{children:t.displayLink})})]})]})},L=n(77),w=function(){return Object(r.jsx)(L.a,{animation:"border",roles:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"},children:Object(r.jsx)("span",{className:"sr-only",children:"Loading..."})})},T=n(81),S=function(e){var t=e.variant,n=e.children;return Object(r.jsx)(T.a,{variant:t,children:n})};S.defaultProps={variant:"info"};var _=S,C=n(21),I=n.n(C),F=n(38),R=n(39),D=n.n(R),E=function(e){var t=e.title,n=Object(s.b)();Object(a.useEffect)((function(){var e;n((e=t,function(){var t=Object(F.a)(I.a.mark((function t(n){var r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:j}),t.next=4,D.a.get("https://content.googleapis.com/customsearch/v1?cx=001361074102112665899%3Ap7mybnrloug&q="+e+"&searchType=image&key=AIzaSyCefJfjoi6Qx4o9UL7ruz8gaQ_MH71e7Ck");case 4:r=t.sent,n({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n({type:h,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[t,n]);var c=Object(s.c)((function(e){return e.listResult})),i=c.loading,o=c.error,l=c.items;return Object(r.jsx)(r.Fragment,{children:i?Object(r.jsx)(w,{}):o?Object(r.jsx)(_,{variant:"danger",children:o}):Object(r.jsx)(m.a,{children:l&&l.map((function(e,t){return Object(r.jsx)(y.a,{sm:14,md:8,lg:6,xl:4,children:Object(r.jsx)(k,{item:e})},e._id)}))})})},P=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Myndaleit"}),Object(r.jsx)("input",{type:"text",style:{width:600,height:30},name:"searchWords",id:"keywords",placeholder:"leitaror\xf0",onKeyDown:function(e){return function(e){"Enter"===e.key&&c(e.target.value)}(e)}}),n&&Object(r.jsx)(E,{title:n})]})};var U=function(){return Object(r.jsx)(x.a,{children:Object(r.jsx)(O.a,{children:Object(r.jsx)(P,{})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(r.jsx)(s.a,{store:g,children:Object(r.jsx)(U,{})}),document.getElementById("root")),A()}},[[75,1,2]]]);
//# sourceMappingURL=main.64836208.chunk.js.map