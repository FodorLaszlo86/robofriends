(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,n){},17:function(e,a,n){},21:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(3),o=n.n(i);n(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(4),c=n(5),s=n(7),m=n(6),h=n(8),u=n(1),d=function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 ma2 pa2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t),alt:"avatar"}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},b=function(e){var a=e.robots.map(function(e){return r.a.createElement(d,{key:"robot-friend-".concat(e.id),name:e.name,email:e.email,id:e.id})});return r.a.createElement("div",null,a)},g=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],v=function(e){e.searchField;var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:a}))},w=(n(17),function(e){function a(e){var n;return Object(l.a)(this,a),(n=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={searchField:"",robotFriends:g},n.onSearchChange=n.onSearchChange.bind(Object(u.a)(Object(u.a)(n))),n}return Object(h.a)(a,e),Object(c.a)(a,[{key:"onSearchChange",value:function(e){this.setState({searchField:e.target.value})}},{key:"render",value:function(){var e=this,a=this.state.robotFriends.filter(function(a){return a.name.toLowerCase().includes(e.state.searchField.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(v,{searchChange:this.onSearchChange}),r.a.createElement(b,{robots:a}))}}]),a}(t.Component));n(19);o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,n){e.exports=n(21)}},[[9,2,1]]]);
//# sourceMappingURL=main.3d804fef.chunk.js.map