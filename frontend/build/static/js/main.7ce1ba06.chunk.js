(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{10:function(e,t,n){e.exports={container:"CurrencyConverter_container__3ko-V",heading:"CurrencyConverter_heading__2TD8o",cross:"CurrencyConverter_cross__1XUcT",input_container:"CurrencyConverter_input_container__2C9dM",curreny_select:"CurrencyConverter_curreny_select__3GOu0",currency_input:"CurrencyConverter_currency_input__2XEYU",input_box:"CurrencyConverter_input_box__3Dylu",copy:"CurrencyConverter_copy__2cipk"}},106:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(27),i=n.n(s),o=(n(47),n(28)),r=function(e){e&&e instanceof Function&&n.e(14).then(n.bind(null,308)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},l=n(1);i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o.a,{})}),document.getElementById("root")),r()},16:function(e,t,n){"use strict";var a,c=n(38),s=(n(2),n(40)),i=n.n(s),o=n(41),r=n(5),l=n(1),j=Object(r.css)(a||(a=Object(c.a)(["\n\tz-index:2147483647;"])));t.a=function(e){var t=2147483645,n=!1;return e&&(e.zIndex&&(t=e.zIndex),e.showLoader&&(n=e.showLoader)),Object(l.jsx)("div",{style:{zIndex:t},className:i.a.overlay,children:n&&Object(l.jsx)(o.SyncLoader,{css:j,size:15,color:"#326b84",loading:!0})})}},21:function(e,t,n){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAcElEQVQ4jc3Suw2DQBCE4U9QlXu6gMtch6ty4oAeSGnBOAHJAV7uOAl50vlnV/vgn3RDKuDSyu4ab+QgnFfmZ6MBC+6V3iFYHN4LVIc3bfOGe+lqq5aqaYSmJTad8dQj9V9mjxGPoMATM16YAu5CfQC9xSc6StXvWAAAAABJRU5ErkJggg=="},28:function(e,t,n){"use strict";n.d(t,"b",(function(){return U}));var a=n(14),c=(n(53),n(2)),s=n.n(c),i=n(8),o=n(7),r=(n(46),n(19)),l=n.n(r),j=n(16),d=n(10),u=n.n(d),m=n(21),b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABYklEQVRoge2ZzU3DQBBGH3CAAoBcCAnFhBqgBRqAFqAAIEKigBTAHQVBE3CwAkgRJ3LhQBAcspYniB/bu7NrxDxp5MSxZr+3yuYwAcMw/jVdoA+MgCnw7lFT1+fU9VVnG5h4hv6uJkBPM/yWYvi8noGOlkBfOXxeJ1oCo0gCWajAq8BAvPc9sFUOtjct4M41zIkRPi9vzr9o1hiBhRICT8y+QvL5IDtTkh8zlhGQYRsnsBgrhRYmkBoTSI0JpMYEUmMCqTGB1JhAakwgNXUF3oKm8FinjIBssuSuj7XiVOf+twfKCIzF65a7XtSKU50g6wwpRhw77l6XOLPRzRACB6LpUNzvuUW0wgebTreBF9F8T3zWYTaAzQjz/0AGHBNo5yVHYqHXTxJ/ghXghvkduwJ2gQ2KX6dGsw5co3do5fRbjWXgkPkzEaJuKeavUWgD+8Al8ED9AzwGzoC1mOENw2gQHyT6cHdnW4kfAAAAAElFTkSuQmCC",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABFklEQVRIid2UOQ7CQAxFn0BwFgqooIOOA4BYr8R2jIjbUBPWFkEJFHSh8ARFZkaZJFR8yVKUcd5P7Njw76oCU2ANhMDTRGjuTUxOLg2BExClxBEYZAGXgZUHWMcSKPkY5IHHMU+DDwvA4+i74FWknkUNzjgaP80BuwJNoKPuj2Nosik916c5dAO6wAZ4qTMra5/hzW9AwzxXAy7qPLQZPH4EjwzrS3eV1AZaSJ2TNa+b/Lo6S8bdZrBTSU0F8oU7S7RWSRroC4+AwGYwsSQmTXzhETCyGbgG7Yr0QvfDFQegYjMA2YpFJzl1npYF4LM0OMh0L3LA53iu61h9pJ4+Nc+6Zj6qIIsrALbIhD7MdYD8Lc6G/ofeNtQLIa7UqNkAAAAASUVORK5CYII=",_=n(1);var A=function(e){var t,n=Object(c.useState)({}),s=Object(a.a)(n,2),i=s[0],o=s[1],r=Object(c.useState)({input_one:!1,input_two:!1}),d=Object(a.a)(r,2),A=d[0],O=d[1];Object(c.useEffect)((function(){l.a.get("http://data.fixer.io/api/latest?access_key=5ccc18623852221c413d079181cc8cfa&format=1").then((function(e){o(e.data)})).catch((function(e){console.log("Error>> ".concat(e))}))}),[]);var x=function(e){O({input_one:!1,input_two:!1}),clearTimeout(t),t=setTimeout((function(){var t=document.getElementById("currency_select_one").value,n=document.getElementById("currency_select_two").value;l.a.get("http://data.fixer.io/api/latest?access_key=5ccc18623852221c413d079181cc8cfa&format=1").then((function(a){if("currency_input_one"!=e.target.id&&"currency_select_two"!=e.target.id)if("currency_input_two"!=e.target.id&&"currency_select_one"!=e.target.id);else{var c=document.getElementById("currency_input_two").value;document.getElementById("currency_input_one").value=p(a.data.rates,c,n,t)}else{var s=document.getElementById("currency_input_one").value;document.getElementById("currency_input_two").value=p(a.data.rates,s,t,n)}})).catch((function(e){console.log("Error>> ".concat(e))}))}),100)},p=function(e,t,n,a){console.log(e),console.log(n),console.log(a),console.log("-------------");var c=e[n];return t*e[a]/c},g=function(e,t){navigator.clipboard.writeText(e).then((function(){t()}))},v=function(e){if("copy_input_one"!=e.target.id){if("copy_input_two"==e.target.id){var t=document.getElementById("currency_input_two").value;g(t,(function(){O({input_one:!1,input_two:!0})}))}}else{var n=document.getElementById("currency_input_one").value;g(n,(function(){O({input_one:!0,input_two:!1})}))}};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(j.a,{showLoader:!1}),Object(_.jsxs)("div",{className:u.a.container,children:[Object(_.jsx)("img",{onClick:function(){return e.toggleCurrencyConverter()},src:m.a,className:u.a.cross,alt:"close"}),Object(_.jsx)("h2",{className:u.a.heading,children:"Convert"}),Object(_.jsxs)("div",{className:u.a.input_container,children:[Object(_.jsx)("select",{className:u.a.curreny_select,id:"currency_select_one",onChange:x,children:i.rates&&Object.keys(i.rates).map((function(e,t){return Object(_.jsx)("option",{value:e,children:e},t)}))}),Object(_.jsxs)("div",{className:u.a.input_box,children:[Object(_.jsx)("input",{className:u.a.currency_input,type:"number",id:"currency_input_one",onChange:x}),window.isSecureContext&&document.getElementById("currency_input_one")&&""!=document.getElementById("currency_input_one").value&&Object(_.jsx)("img",{className:u.a.copy,title:"".concat(A.input_one?"copied":"copy"),id:"copy_input_one",src:"".concat(A.input_one?h:b),onClick:v})]})]}),Object(_.jsxs)("div",{className:u.a.input_container,children:[Object(_.jsx)("select",{className:u.a.curreny_select,id:"currency_select_two",onChange:x,children:i.rates&&Object.keys(i.rates).map((function(e,t){return Object(_.jsx)("option",{value:e,children:e},t)}))}),Object(_.jsxs)("div",{className:u.a.input_box,children:[Object(_.jsx)("input",{className:u.a.currency_input,type:"number",id:"currency_input_two",onChange:x}),window.isSecureContext&&document.getElementById("currency_input_two")&&""!=document.getElementById("currency_input_two").value&&Object(_.jsx)("img",{className:u.a.copy,title:"".concat(A.input_two?"copied":"copy"),id:"copy_input_two",src:"".concat(A.input_two?h:b),onClick:v})]})]})]})]})},O=n(3),x=n.n(O);var p=function(){var e=Object(c.useContext)(U).state,t=Object(c.useState)(!1),n=Object(a.a)(t,2),s=n[0],o=n[1],r=Object(c.useState)(!1),l=Object(a.a)(r,2),j=l[0],d=l[1],u=Object(c.useState)(!1),b=Object(a.a)(u,2),h=b[0],O=b[1],p=function(){O(!h)},g=function(){d(!j)};return Object(c.useEffect)((function(){s&&document.body.addEventListener("click",(function e(){o(!s),document.body.removeEventListener("click",e)}))}),[s]),Object(_.jsxs)(_.Fragment,{children:[h&&Object(_.jsx)(A,{toggleCurrencyConverter:p}),Object(_.jsxs)("div",{className:x.a.navcontainer,children:[Object(_.jsx)("div",{className:x.a.logoContainer}),Object(_.jsxs)("div",{className:"".concat(x.a.menuContainer," ").concat(j&&x.a.MobileMenuContainer),children:[Object(_.jsx)("img",{loading:"lazy",onClick:g,className:x.a.navClose,src:m.a}),Object(_.jsxs)("ul",{className:"".concat(x.a.navlist," ").concat(j&&x.a.MobileNavlist),children:[Object(_.jsx)("li",{onClick:g,className:x.a.listitem,children:Object(_.jsx)(i.b,{to:"/home",className:x.a.listitem,children:"home"})}),e.flg?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("li",{onClick:g,className:x.a.listitem,children:Object(_.jsx)(i.b,{to:"/expenseslist",className:x.a.listitem,children:"transactions"})}),Object(_.jsx)("li",{onClick:g,className:x.a.listitem,children:Object(_.jsx)(i.b,{to:"/expensesadd",className:x.a.listitem,children:"add"})}),Object(_.jsx)("li",{onClick:g,className:x.a.listitem,children:Object(_.jsx)(i.b,{to:"/wallets",className:x.a.listitem,children:"wallets"})})]}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("li",{onClick:g,className:x.a.listitem,children:Object(_.jsx)(i.b,{to:"/signin",className:x.a.listitem,children:"Sign in"})}),Object(_.jsx)("li",{onClick:g,className:x.a.listitem,children:Object(_.jsx)(i.b,{to:"/create",className:x.a.listitem,children:"Register"})})]})]})]}),e.flg&&Object(_.jsx)("div",{className:x.a.ProfileNavlistContainer,children:Object(_.jsx)("ul",{className:x.a.ProfileNavlist,children:Object(_.jsxs)("li",{onClick:function(){console.log("profile clicked"),o(!s)},className:"".concat(x.a.listitem," ").concat(x.a.avtarListItem),children:[Object(_.jsx)("div",{className:x.a.avatar,children:e.name[0]}),Object(_.jsx)("img",{loading:"lazy",className:x.a.expandArrow,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABDklEQVRIie3PK0uEQRQG4EfdIoIgiIJtg8VgMa6woEEMBpvFZNhmM2k1icVkM5j0D1hNFoPFsMGyYBAEEUS8X8qMLB/frHsTDPvCSec9zzD08p9SRg2lDoxSMMrZxSwe8IV7zLSBT+MuGI+Yy8Pj3GKqBXwSNxnj55FaZhHnGsUm8GLo5hk1mMdTonCFiQb4GKqJ2xcsxuICnhPFKsZz8FFcJm5esZQ9WMZb4uACI3XdYZwnuu9YSX15FR+JwzMMYRCnic4n1lJ4TCUU84CTMCm88hses55AGs1Gs3jMVgv4Zqt4zHYT+G67eMxOA3yvUxz6sJ+DH4RdV9KPwzr8GAPdwmMKOApT6Dbey9/lG8m7mtO59/lwAAAAAElFTkSuQmCC"}),Object(_.jsx)("div",{className:"".concat(x.a.profileOptions," ").concat(s&&x.a.showProfile),children:Object(_.jsxs)("ul",{className:x.a.profileOptionsNavlist,children:[Object(_.jsx)("li",{className:"".concat(x.a.profileOptionsListItem," ").concat(x.a.CurrencyConverterListItem),onClick:p,children:"Currency\xa0Converter"}),Object(_.jsx)("li",{className:x.a.profileOptionsListItem,children:Object(_.jsx)(i.b,{to:"/insights",children:"Insights"})}),Object(_.jsx)("li",{className:x.a.profileOptionsListItem,children:Object(_.jsx)(i.b,{to:"/logout",children:"log\xa0out"})}),Object(_.jsx)("li",{className:x.a.profileOptionsListItem,children:Object(_.jsx)(i.b,{to:{pathname:"https://avadhootkhedekar.com"},target:"_blank",children:"about\xa0developer"})})]})})]})})}),Object(_.jsx)("div",{className:x.a.hamMenuContainer,children:Object(_.jsx)("img",{loading:"lazy",onClick:g,className:x.a.ham,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAANElEQVRoge3WwQ0AIAzEsCv77wxLIFoke4I8kwAAqSS7O+KG1R0AAADP2HgAAPiOjQcABjrSpwMHOlg7MAAAAABJRU5ErkJggg=="})})]})]})},g=n.p+"static/media/banner.21a68cdd.webp",v=n(4),f=n.n(v),y=n(43),C=n(45),w=n(42),N=n(44);function k(e){return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:f.a.titleContainer,children:[Object(_.jsx)("p",{className:f.a.welcome,children:"Welcome"}),Object(_.jsx)("br",{}),Object(_.jsx)("h1",{className:f.a.title,children:e.name})]})})}var I=function(){var e=Object(c.useContext)(U).state;return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:f.a.container,children:[Object(_.jsxs)("div",{className:f.a.banner,children:[e.flg?k(e):Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)("div",{className:f.a.titleContainer,children:[Object(_.jsxs)("h1",{className:f.a.title,children:["Track",Object(_.jsx)("br",{}),"My Money"]}),Object(_.jsx)("p",{className:f.a.desc,children:"Manage all kinds of your daily expenses with ease..."}),Object(_.jsxs)("div",{className:f.a.links,children:[Object(_.jsx)(i.b,{to:"/signin",className:f.a.login,children:"Sign in"}),Object(_.jsx)("p",{children:"or"}),Object(_.jsx)(i.b,{to:"/create",className:f.a.login,children:"Register"})]})]})}),Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:g,className:f.a.bannerimg})})]}),Object(_.jsx)("svg",{className:f.a.wave,"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:Object(_.jsx)("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"})}),Object(_.jsx)("div",{className:f.a.featuresContainer,children:Object(_.jsxs)("div",{className:f.a.features,children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("h3",{children:"Transactions"}),Object(_.jsx)("p",{children:"Add, Delete, edit any kind of transaction in USD/INR with attached reference image."})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("h3",{children:"Multiple wallets"}),Object(_.jsx)("p",{children:"Manage all of your online/offline transactions by creating multiple wallets."})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("h3",{children:"Currency converter"}),Object(_.jsx)("p",{children:"Realtime currency converter that supports 20+ currencies."})]})]})}),Object(_.jsxs)("div",{className:f.a.myInfoContainer,children:[Object(_.jsx)("p",{className:f.a.myInfo,children:"Reach out the developer."}),Object(_.jsxs)("div",{className:f.a.myInfoLinks,children:[Object(_.jsx)(i.b,{className:f.a.iconLinks,to:{pathname:"https://avadhootkhedekar.com"},target:"_blank",children:Object(_.jsx)(w.a,{title:"Developer's website",className:f.a.icons,size:25})}),Object(_.jsx)(i.b,{className:f.a.iconLinks,to:{pathname:"https://www.linkedin.com/in/avadhootkhedekar/"},target:"_blank",children:Object(_.jsx)(y.a,{title:"Developer's Linkedin",className:f.a.icons,size:25})}),Object(_.jsx)(i.b,{className:f.a.iconLinks,to:{pathname:"mailto: khedekaravadhoot@gmail.com"},target:"_blank",children:Object(_.jsx)(N.a,{title:"Developer's Email",className:f.a.icons,size:25})}),Object(_.jsx)(i.b,{className:f.a.iconLinks,to:{pathname:"https://leetcode.com/avadhoot05/"},target:"_blank",children:Object(_.jsx)(C.a,{title:"Developer's LeetCode",className:f.a.icons,size:25})})]})]})]})})};var B=function(){var e=Object(c.useContext)(U).dispatch,t=Object(c.useState)(!1),n=Object(a.a)(t,2),s=n[0],i=n[1],r=Object(c.useState)(!1),d=Object(a.a)(r,2),u=d[0],m=d[1],b=Object(o.f)();return Object(c.useEffect)((function(){console.log("log out"),i(!0),l.a.get("/logout",{headers:{"Content-Type":"application/json"},withCredentials:"include"}).then((function(t){i(!1),200==t.status?(e({type:"USER_OK",payload:{flg:!1,name:null}}),m(!0),setTimeout((function(){m(!1),b.push("/")}),2e3)):alert("Logout failed")})).catch((function(e){return i(!1)}))}),[]),Object(_.jsxs)(_.Fragment,{children:[s&&Object(_.jsx)(j.a,{showLoader:!0}),u&&Object(_.jsx)("div",{children:"You have been logged out."})]})},L=function(e,t){return"USER_OK"===t.type?{flg:t.payload.flg,userid:t.payload.userid,name:t.payload.name,email:t.payload.email}:e},S=s.a.lazy((function(){return n.e(12).then(n.bind(null,312))})),M=s.a.lazy((function(){return Promise.all([n.e(3),n.e(9)]).then(n.bind(null,313))})),E=s.a.lazy((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,302))})),z=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,314))})),F=s.a.lazy((function(){return Promise.all([n.e(2),n.e(8),n.e(13)]).then(n.bind(null,307))})),R=s.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(7)]).then(n.bind(null,311))})),U=s.a.createContext();t.a=function(){var e=Object(c.useReducer)(L,{flg:!1,userid:null,name:null,email:null}),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(U.Provider,{value:{state:n,dispatch:r},children:Object(_.jsx)(i.a,{children:Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(p,{}),Object(_.jsxs)(o.c,{children:[Object(_.jsx)(o.a,{exact:!0,path:"/home",component:I}),Object(_.jsx)(o.a,{exact:!0,path:"/",component:I}),Object(_.jsx)(o.a,{exact:!0,path:"/signin",children:Object(_.jsx)(s.a.Suspense,{fallback:Object(_.jsx)(j.a,{showLoader:!0}),children:Object(_.jsx)(S,{})})}),Object(_.jsx)(o.a,{exact:!0,path:"/create",children:Object(_.jsx)(s.a.Suspense,{fallback:Object(_.jsx)(j.a,{showLoader:!0}),children:Object(_.jsx)(E,{})})}),Object(_.jsx)(o.a,{exact:!0,path:"/logout",component:B}),Object(_.jsx)(o.a,{exact:!0,path:"/wallets",children:Object(_.jsx)(s.a.Suspense,{fallback:Object(_.jsx)(j.a,{showLoader:!0}),children:Object(_.jsx)(M,{})})}),Object(_.jsx)(o.a,{exact:!0,path:"/expenseslist",children:Object(_.jsx)(s.a.Suspense,{fallback:Object(_.jsx)(j.a,{showLoader:!0}),children:Object(_.jsx)(R,{})})}),Object(_.jsx)(o.a,{exact:!0,path:"/expensesadd",children:Object(_.jsx)(s.a.Suspense,{fallback:Object(_.jsx)(j.a,{showLoader:!0}),children:Object(_.jsx)(z,{})})}),Object(_.jsx)(o.a,{exact:!0,path:"/insights",children:Object(_.jsx)(s.a.Suspense,{fallback:Object(_.jsx)(j.a,{showLoader:!0}),children:Object(_.jsx)(F,{})})})]})]})})})})}},3:function(e,t,n){e.exports={navcontainer:"nav_navcontainer__UeGzU",hamMenuContainer:"nav_hamMenuContainer__1b8dK",menuContainer:"nav_menuContainer__3fqAN",avatar:"nav_avatar__1zS-M",navlist:"nav_navlist__3oyBk",ProfileNavlist:"nav_ProfileNavlist__1hkxi",listitem:"nav_listitem__1iHo_",CurrencyConverterListItem:"nav_CurrencyConverterListItem__3YKiz",avtarListItem:"nav_avtarListItem__1r3Vi",expandArrow:"nav_expandArrow__14gq3",rotateArrow:"nav_rotateArrow__2Fq-0",profileOptions:"nav_profileOptions__1tnkk",showProfile:"nav_showProfile__1W28l",appearSlow:"nav_appearSlow__3_LHB",profileOptionsNavlist:"nav_profileOptionsNavlist__3-UZz",profileOptionsListItem:"nav_profileOptionsListItem__1GDQD",navClose:"nav_navClose__3Jd4V",ProfileNavlistContainer:"nav_ProfileNavlistContainer__1j3xd",ham:"nav_ham__3Zzdp",MobileMenuContainer:"nav_MobileMenuContainer__3jwOo",MobileNavlist:"nav_MobileNavlist__39RxO"}},4:function(e,t,n){e.exports={container:"Home_container__3xVYN",banner:"Home_banner__3iIFh",titleContainer:"Home_titleContainer__2Cyic",welcome:"Home_welcome__3D39J",title:"Home_title__3a9Vi",desc:"Home_desc__Mo6WO",login:"Home_login__l9hGV",links:"Home_links__1aZmn",bannerimg:"Home_bannerimg__3FymL",wave:"Home_wave__Tq8VI",featuresContainer:"Home_featuresContainer__2Il6v",features:"Home_features__1CyyA",myInfoContainer:"Home_myInfoContainer__3IvFh",myInfo:"Home_myInfo__2zePx",myInfoLinks:"Home_myInfoLinks__3W-ic",icons:"Home_icons__K53I5",iconLinks:"Home_iconLinks__dULpO"}},40:function(e,t,n){e.exports={overlay:"BlockingOverlay_overlay__3F9KU"}},47:function(e,t,n){},53:function(e,t,n){}},[[106,5,6]]]);