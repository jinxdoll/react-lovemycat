(this.webpackJsonpclasspractice=this.webpackJsonpclasspractice||[]).push([[0],{54:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(30),s=a.n(c),r=a(9),i=a(2),o=a(15),l=a(12),d=a(13),h=a(16),u=a(14),m=a(8),b=a.n(m),j=function(){return b.a.get("https://api.thecatapi.com/v1/images/search")},v=(a(54),a(0));var p=function(e){return Object(v.jsx)("button",{onClicknclick:e.Onclick,className:"card-btn ".concat(e["data-vale"]),"data-value":e["data-value"]})};a(56);var f=function(e){return Object(v.jsxs)("div",{className:"card",style:{backgroundImage:e.image?"url(".concat(e.image,")"):"none"},children:[!e.image&&Object(v.jsx)("i",{className:"fa fa-spinner fa-spin","aria-hidden":"true"}),Object(v.jsx)(p,{onClick:e.handleBtnClick,"date-value":"pass"}),Object(v.jsx)(p,{onClick:e.handleBtnClick,"date-value":"pick"})]})};var g=function(e){return Object(v.jsx)("div",{role:"alert",classname:"alert alert-".concat(e.type," fade in"),style:Object(o.a)({width:"80%",margin:"0 auto",marginTop:18},e.style),children:e.children})},x=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={image:"",match:!1,matchCount:0},e.handleBtnclick=function(t){var a=t.targe.attributes.getNameitem("data-vale").valye,n=Object(o.a)({},e.state);"pick"===a?(n.match=1===Math.floor(5*Math.random())+1,n.matchCount=n.match?n.matchCount+1:n.matchCount):n.match=!1,e.setState(n),e.loadNextCat()},e.loadNextCat=function(){j().then((function(t){return e.setState({image:t.data.message})})).catch((function(e){return console.log(e)}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.loadNextCat()}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"text-center",children:"Make New Fur-Ever Friends"}),Object(v.jsx)("h3",{className:"text-center",children:"Thumbs up on any Kitty's you'd like to get to know!"}),Object(v.jsx)(f,{image:this.state.image,handleBtnClick:this.handleBtnClick}),Object(v.jsxs)("h1",{className:"text-center",children:["You've made ",this.state.matchCount," new kitty-cat friends so far!"]}),Object(v.jsx)(g,{style:{opacity:this.state.match?1:0},type:"success",children:"great choice! This cat likes you too!!!"})]})}}]),a}(n.Component);a(57);var O=function(e){return Object(v.jsx)("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")},children:e.children})};var y=function(e){return Object(v.jsx)("div",{className:"container",style:e.style,children:e.children})};var k=function(e){return Object(v.jsx)("div",{className:"row",children:e.children})};var w=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(v.jsx)("div",{className:t,children:e.children})};var C=function(){return Object(v.jsxs)("div",{children:[Object(v.jsxs)(O,{backgroundImage:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.soundsideanimalhospital.com%2Fblog%2Fdental-tips-for-cats.html&psig=AOvVaw1wFoMq-RSKmHRdb9p9TLhH&ust=1617999323438000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJio1bC77-8CFQAAAAAdAAAAABAD",children:[Object(v.jsx)("h1",{children:"Kitty's"}),Object(v.jsx)("h2",{children:"The loyal friend you can always rely on !"})]}),Object(v.jsxs)(y,{style:{marginTop:30},children:[Object(v.jsx)(k,{children:Object(v.jsx)(w,{size:"md-12",children:Object(v.jsx)("h1",{children:"Hello! Welcome to Love My Kitty Cat "})})}),Object(v.jsx)(k,{children:Object(v.jsxs)(w,{size:"md-12",children:[Object(v.jsx)("p",{children:"Cats are one of, if not the most, popular pet in the world. There are over 500 million domestic cats in the world. Cats and humans have been associated for nearly 10000 years. Cats conserve energy by sleeping for an average of 13 to14 hours a day. Cats have flexible bodies and teeth adapted for hunting small animals such as mice and rats. A group of cats is called a clowder, a male cat is called a tom, a female cat is called a molly or queen while young cats are called kittens. Domestic cats usually weigh around 4 kilograms (8 lb 13 oz) to 5 kilograms (11 lb 0 oz). The heaviest domestic cat on record is 21.297 kilograms (46 lb 15.2 oz)."}),Object(v.jsx)("p",{children:"Cats are one of, if not the most, popular pet in the world. There are over 500 million domestic cats in the world. Cats and humans have been associated for nearly 10000 years. Cats conserve energy by sleeping for an average of 13 to14 hours a day. Cats have flexible bodies and teeth adapted for hunting small animals such as mice and rats. A group of cats is called a clowder, a male cat is called a tom, a female cat is called a molly or queen while young cats are called kittens. Domestic cats usually weigh around 4 kilograms (8 lb 13 oz) to 5 kilograms (11 lb 0 oz). The heaviest domestic cat on record is 21.297 kilograms (46 lb 15.2 oz)."}),Object(v.jsx)("p",{children:"Cats are one of, if not the most, popular pet in the world. There are over 500 million domestic cats in the world. Cats and humans have been associated for nearly 10000 years. Cats conserve energy by sleeping for an average of 13 to14 hours a day. Cats have flexible bodies and teeth adapted for hunting small animals such as mice and rats. A group of cats is called a clowder, a male cat is called a tom, a female cat is called a molly or queen while young cats are called kittens. Domestic cats usually weigh around 4 kilograms (8 lb 13 oz) to 5 kilograms (11 lb 0 oz). The heaviest domestic cat on record is 21.297 kilograms (46 lb 15.2 oz)."})]})})]})]})},N=function(e){return b.a.get("https://api.thecatapi.com/images/search?{{selected_breed.id}}")},A=function(){return b.a.get("https://api.thecatapi.com/v1/breeds")};a(58);var F=function(e){return Object(v.jsx)("form",{className:"search",children:Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"breed",children:" Name of the cat's breed:"}),Object(v.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"breed",list:"breeds",type:"text",className:"form-control",placeholder:"Type in a cat breed to begin your search",id:"breed"}),Object(v.jsx)("datalist",{id:"breeds",children:e.breeds.map((function(e){return Object(v.jsx)("option",{value:e},e)}))}),Object(v.jsx)("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-success",children:"Search"})]})})};a(59);var S=function(e){return Object(v.jsx)("ul",{className:"list-group search-results",children:e.results.map((function(e){return Object(v.jsx)("li",{className:"list-group-item",children:Object(v.jsx)("img",{alt:"Cat",src:e,className:"img-fluid"})},e)}))})},T=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={search:"",breeds:[],results:[],error:""},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),N(e.state.search).then((function(t){if("error"===t.data.status)throw new Error("error on line 32:",t.data.message);e.setState({results:t.data.message,error:""})})).catch((function(t){return e.setState({error:t.message})}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;A().then((function(t){return e.setState({breeds:t.data.message})})).catch((function(e){return console.log("error on line 20:",e)}))}},{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsxs)(y,{style:{minHeight:"80%"},children:[Object(v.jsx)("h1",{className:"text-center",children:"Search By Cat Breed!"}),Object(v.jsx)(g,{type:"danger",style:{opacity:this.state.error?1:0,marginBottom:10},children:this.state.error}),Object(v.jsx)(F,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,breeds:this.state.breeds}),Object(v.jsx)(S,{results:this.state.results})]})})}}]),a}(n.Component);a(60);var z=function(){return Object(v.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(v.jsx)(r.b,{className:"navbar-brand",to:"/",children:"Pupster"}),Object(v.jsx)("div",{children:Object(v.jsxs)("ul",{className:"navbar-nav",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(r.b,{to:"/",className:"/"===window.location.pathname||"/about"===window.location.pathname?"nav-link active":"nav-link",children:"About"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(r.b,{to:"/discover",className:"/discover"===window.location.pathname?"nav-link active":"nav-link",children:"Discover"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(r.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link",children:"Search"})})]})})]})};a(66);var B=function(){return Object(v.jsx)("footer",{className:"footer",children:Object(v.jsx)("span",{children:"LoveMyKittyKat 2021"})})};a(67);var I=function(e){return Object(v.jsx)("main",{className:"wrapper",children:e.children})};var D=function(){return Object(v.jsx)(r.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)(z,{}),Object(v.jsxs)(I,{children:[Object(v.jsx)(i.a,{exact:!0,path:"/",component:C}),Object(v.jsx)(i.a,{exact:!0,path:"/about",component:C}),Object(v.jsx)(i.a,{exact:!0,path:"/discover",component:x}),Object(v.jsx)(i.a,{exact:!0,path:"/search",component:T})]}),Object(v.jsx)(B,{})]})})};a(68),a(69);s.a.render(Object(v.jsx)(D,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.2ee63f05.chunk.js.map