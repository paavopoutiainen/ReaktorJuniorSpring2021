(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),r=n(8),i=n.n(r),s=(n(65),n(66),n(22)),j=function(){return Object(c.jsxs)("div",{className:"App-header",children:[Object(c.jsx)("div",{style:{margin:10},children:Object(c.jsx)(s.b,{to:"/",style:{textDecoration:"none",fontWeight:"bold"},exact:!0,activeClassName:"activeLink",children:"Main Page"})}),Object(c.jsx)("div",{style:{margin:10},children:Object(c.jsx)(s.b,{to:"/jackets",style:{textDecoration:"none",fontWeight:"bold"},activeClassName:"activeLink",children:"Jackets"})}),Object(c.jsx)("div",{style:{margin:10},children:Object(c.jsx)(s.b,{to:"/shirts",style:{textDecoration:"none",fontWeight:"bold"},activeClassName:"activeLink",children:"Shirts"})}),Object(c.jsx)("div",{style:{margin:10},children:Object(c.jsx)(s.b,{to:"/accessories",style:{textDecoration:"none",fontWeight:"bold"},activeClassName:"activeLink",children:"Accessories"})})]})},o=n(39),d=n.n(o),l=n(49),b=n(50),h=n.n(b),u=function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://evening-ridge-26628.herokuapp.com/products");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=n(19),O=n(10),v=n(40),p=n(130),g=n(131),m=n(132),f=n(128),y=n(129),k=n(133),C=n(124),P=function(e){var t=e.columnNames;return Object(c.jsx)(C.a,{children:Object(c.jsx)(f.a,{children:t.map((function(e){return Object(c.jsx)(y.a,{align:"center",children:e},e)}))})})},w=[{name:"Id",key:"id"},{name:"Name",key:"name"},{name:"Manufacturer",key:"manufacturer"},{name:"Color",key:"color"},{name:"Price",key:"price"},{name:"Availability",key:"availability"}],N=function(e){var t=e.data,n=Object(a.useState)(0),r=Object(v.a)(n,2),i=r[0],s=r[1],j=Object(a.useState)(50),o=Object(v.a)(j,2),d=o[0],l=o[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p.a,{style:{height:"87vh"},children:Object(c.jsxs)(g.a,{stickyHeader:!0,children:[Object(c.jsx)(P,{columnNames:w.map((function(e){return e.name}))}),Object(c.jsx)(m.a,{children:t.slice(i*d,i*d+d).map((function(e){return Object(c.jsx)(f.a,{hover:!0,children:w.map((function(t,n){return Object(c.jsx)(y.a,{align:"center",children:e[t.key]},n)}))},e.id)}))})]})}),Object(c.jsx)(k.a,{rowsPerPageOptions:[10,50,100,200,500,1e3,5e3,{value:-1,label:"All"}],component:"div",count:t.length,page:i,rowsPerPage:d,onChangePage:function(e,t){s(t)},onChangeRowsPerPage:function(e){l(e.target.value),s(0)},style:{position:"fixed",width:"100%",bottom:0,backgroundColor:"white",borderTop:"solid gray 1px",zIndex:1}})]})},I=function(){var e=Object(x.b)("/products").data;return e?Object(c.jsx)("div",{children:e&&Object(c.jsx)(N,{data:e.jackets})}):Object(c.jsx)("div",{children:"loading..."})},L=function(){var e=Object(x.b)("/products").data;return e?Object(c.jsx)("div",{children:e&&Object(c.jsx)(N,{data:e.shirts})}):Object(c.jsx)("div",{children:"loading..."})},A=function(e){e.data;var t=Object(x.b)("/products").data;return t?Object(c.jsx)("div",{children:t&&Object(c.jsx)(N,{data:t.accessories})}):Object(c.jsx)("div",{children:"loading..."})},D=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Welcome to the warehouse app!"})})]})},F=function(){return Object(c.jsxs)(O.c,{children:[Object(c.jsx)(O.a,{exact:!0,path:"/",children:Object(c.jsx)(D,{})}),Object(c.jsx)(O.a,{exact:!0,path:"/jackets",children:Object(c.jsx)(I,{})}),Object(c.jsx)(O.a,{exact:!0,path:"/shirts",children:Object(c.jsx)(L,{})}),Object(c.jsx)(O.a,{exact:!0,path:"/accessories",children:Object(c.jsx)(A,{})})]})};var W=function(){return Object(x.b)("/products").data,Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(x.a,{value:{dedupingInterval:15e4,refreshInterval:3e5,fetcher:u},children:Object(c.jsxs)(s.a,{children:[Object(c.jsx)(j,{}),Object(c.jsx)(F,{})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(c.jsx)(W,{}),document.getElementById("root")),S()}},[[94,1,2]]]);
//# sourceMappingURL=main.93318b72.chunk.js.map