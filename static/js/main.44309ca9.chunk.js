(this["webpackJsonpusers-list"]=this["webpackJsonpusers-list"]||[]).push([[0],{53:function(e,t,a){e.exports=a(83)},58:function(e,t,a){},59:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(46),c=a.n(l),s=(a(58),a(15)),i=a(10),o=a(16),u=a(17),m=a(18),p=a(13),h=a(19),f=(a(59),a(109)),d=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"user"},r.a.createElement("ul",{className:"eachUserLink"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/user/".concat(this.props.profile.id),className:"eachUserLink"},r.a.createElement("span",{className:"avatar"},r.a.createElement(f.a,null,this.props.profile.name.charAt(0))),this.props.profile.name))))}}]),t}(r.a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"users-list"},this.props.users.map((function(e){return r.a.createElement(d,{profile:e,key:e.id})})))}}]),t}(r.a.Component),v=a(27),b=a.n(v),g=a(36),j=a(49),y=a.n(j),O=a(48),k=a.n(O),w=a(110),N=a(103),x=a(104);function L(e){return r.a.createElement(g.a,e,r.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))}var U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={profile:[],loading:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return b.a.get("https://jsonplaceholder.typicode.com/users/".concat(this.props.match.params.id)).then((function(t){e.setState({profile:t.data,loading:!0})})),this.state.loading?r.a.createElement("div",{className:"ProfileContainer"},r.a.createElement(p.b,{to:"/List-Users"},"GoBack"),r.a.createElement(N.a,{variant:"outlined",className:"Userprofile"},r.a.createElement(x.a,null," ",r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("figure",{className:"userprofileimage"},r.a.createElement("img",{className:"userprofileimage",src:"https://cdn.imgbin.com/21/23/1/imgbin-computer-icons-female-user-profile-avatar-material-x1Zz1EDVQQssccaQu0dy0VFGy.jpg",alt:"image"}),r.a.createElement("figcaption",null,this.state.profile.name))),r.a.createElement("div",{className:"information"},r.a.createElement("strong",null,this.state.profile.username),r.a.createElement("br",null),r.a.createElement(k.a,{color:"secondary"})," ",this.state.profile.email,r.a.createElement("br",null),r.a.createElement(y.a,{color:"secondary"})," ",this.state.profile.phone,r.a.createElement("br",null),r.a.createElement(L,{color:"secondary"})," ",this.state.profile.address.street,r.a.createElement("br",null),this.state.profile.address.suite,r.a.createElement("br",null),this.state.profile.address.city,r.a.createElement("br",null),this.state.profile.address.zipcode))))):r.a.createElement(w.a,null)}}]),t}(r.a.Component),C=a(105),z=a(106),B=a(107),G=a(108),A=Object(C.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),D=function(){return{color:"white",fontSize:"22px",textDecoration:"none",padding:"0px 50px"}};function Q(){var e=A();return r.a.createElement("div",{className:e.root},r.a.createElement(z.a,{position:"static"},r.a.createElement(B.a,null,r.a.createElement(G.a,{variant:"h6",className:e.title},r.a.createElement(p.b,{to:"/",className:"header",style:D()},"Home")),r.a.createElement(p.b,{to:"/List-Users",style:D()},"List-Users"))))}var S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){return e.setState({users:t.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(Q,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement("h1",null,"Welcome .....")}}),r.a.createElement(h.a,{exact:!0,path:"/List-Users",render:function(){return r.a.createElement("div",null,r.a.createElement(E,{users:e.state.users}))}}),r.a.createElement(h.a,{exact:!0,path:"/user/:id",render:function(e){return r.a.createElement(U,e)}}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.44309ca9.chunk.js.map