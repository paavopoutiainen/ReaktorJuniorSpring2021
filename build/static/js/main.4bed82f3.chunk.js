(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{65:function(e,t,c){},66:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),i=c(8),r=c.n(i),s=(c(65),c(66),c(22)),j=function(){return Object(n.jsxs)("div",{className:"App-header",children:[Object(n.jsx)("div",{style:{margin:10},children:Object(n.jsx)(s.b,{to:"/",style:{textDecoration:"none",fontWeight:"bold"},exact:!0,activeClassName:"activeLink",children:"Main Page"})}),Object(n.jsx)("div",{style:{margin:10},children:Object(n.jsx)(s.b,{to:"/jackets",style:{textDecoration:"none",fontWeight:"bold"},activeClassName:"activeLink",children:"Jackets"})}),Object(n.jsx)("div",{style:{margin:10},children:Object(n.jsx)(s.b,{to:"/shirts",style:{textDecoration:"none",fontWeight:"bold"},activeClassName:"activeLink",children:"Shirts"})}),Object(n.jsx)("div",{style:{margin:10},children:Object(n.jsx)(s.b,{to:"/accessories",style:{textDecoration:"none",fontWeight:"bold"},activeClassName:"activeLink",children:"Accessories"})})]})},o=c(39),d=c.n(o),l=c(49),b=c(50),h=c.n(b),u=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://evening-ridge-26628.herokuapp.com/products");case 2:return t=e.sent,console.log(t),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=c(19),O=c(10),v=c(40),p=c(130),g=c(131),m=c(132),f=c(128),y=c(129),k=c(133),C=c(124),P=function(e){var t=e.columnNames;return Object(n.jsx)(C.a,{children:Object(n.jsx)(f.a,{children:t.map((function(e){return Object(n.jsx)(y.a,{align:"center",children:e},e)}))})})},w=[{name:"Id",key:"id"},{name:"Name",key:"name"},{name:"Manufacturer",key:"manufacturer"},{name:"Color",key:"color"},{name:"Price",key:"price"},{name:"Availability",key:"availability"}],N=function(e){var t=e.data,c=Object(a.useState)(0),i=Object(v.a)(c,2),r=i[0],s=i[1],j=Object(a.useState)(50),o=Object(v.a)(j,2),d=o[0],l=o[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p.a,{style:{overflow:"initial"},children:Object(n.jsxs)(g.a,{stickyHeader:!0,children:[Object(n.jsx)(P,{columnNames:w.map((function(e){return e.name}))}),Object(n.jsx)(m.a,{children:t.slice(r*d,r*d+d).map((function(e){return Object(n.jsx)(f.a,{hover:!0,children:w.map((function(t,c){return Object(n.jsx)(y.a,{align:"center",children:e[t.key]},c)}))},e.id)}))})]})}),Object(n.jsx)(k.a,{rowsPerPageOptions:[10,50,100,200,500,1e3,5e3,{value:-1,label:"All"}],component:"div",count:t.length,page:r,rowsPerPage:d,onChangePage:function(e,t){s(t)},onChangeRowsPerPage:function(e){l(e.target.value),s(0)},style:{position:"fixed",width:"100%",bottom:0,backgroundColor:"white",borderTop:"solid gray 1px",zIndex:1}})]})},A=function(){var e=Object(x.b)("/products").data;return e?Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Jackets"}),e&&Object(n.jsx)(N,{data:e.jackets})]}):Object(n.jsx)("div",{children:"loading..."})},L=function(){var e=Object(x.b)("/products").data;return e?Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Shirts"}),e&&Object(n.jsx)(N,{data:e.shirts})]}):Object(n.jsx)("div",{children:"loading..."})},D=function(e){e.data;var t=Object(x.b)("/products").data;return t?Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Accessories"}),t&&Object(n.jsx)(N,{data:t.accessories})]}):Object(n.jsx)("div",{children:"loading..."})},F=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Welcome!"})})]})},I=function(){return Object(n.jsxs)(O.c,{children:[Object(n.jsx)(O.a,{exact:!0,path:"/",children:Object(n.jsx)(F,{})}),Object(n.jsx)(O.a,{exact:!0,path:"/jackets",children:Object(n.jsx)(A,{})}),Object(n.jsx)(O.a,{exact:!0,path:"/shirts",children:Object(n.jsx)(L,{})}),Object(n.jsx)(O.a,{exact:!0,path:"/accessories",children:Object(n.jsx)(D,{})})]})};var S=function(){return Object(x.b)("/products").data,Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(x.a,{value:{dedupingInterval:3e5,fetcher:u},children:Object(n.jsxs)(s.a,{children:[Object(n.jsx)(j,{}),Object(n.jsx)(I,{})]})})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,135)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(n.jsx)(S,{}),document.getElementById("root")),W()}},[[94,1,2]]]);
//# sourceMappingURL=main.4bed82f3.chunk.js.map