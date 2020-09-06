(this["webpackJsonppokemon-react-redux"]=this["webpackJsonppokemon-react-redux"]||[]).push([[0],{161:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(9),c=t.n(o),i=(t(99),t(11)),l=t(26),u=t(72),m=t(74),s=t(10),p={loading:!1,data:[],err:"",count:0},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"POKEMON_LIST_LOADING":return Object(s.a)(Object(s.a)({},e),{},{loading:!0});case"POKEMON_LIST_SUCCES":return Object(s.a)(Object(s.a)({},e),{},{loading:!1,data:n.payload.results,count:n.payload.count});case"POKEMON_LIST_FAILURE":return Object(s.a)(Object(s.a)({},e),{},{loading:!1,err:"error"});default:return e}},d=t(33),b={loading:!1,data:{},error:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"POKEMON_MULTIPLE_LOADING":return Object(s.a)(Object(s.a)({},e),{},{loading:!0,error:""});case"POKEMON_MULTIPLE_SUCCES":return Object(s.a)(Object(s.a)({},e),{},{loading:!1,data:Object(s.a)(Object(s.a)({},e.data),{},Object(d.a)({},n.pokemonName,n.payload))});case"POKEMON_MULTIPLE_FAILURE":return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:"errror unable to find pokemon"});default:return e}},h={loading:!1,data:{},error:""},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"POKEMON_SECOND_LOADING":return Object(s.a)(Object(s.a)({},e),{},{loading:!0,error:""});case"POKEMON_SECOND_SUCCES":return Object(s.a)(Object(s.a)({},e),{},{loading:!1,data:Object(s.a)(Object(s.a)({},e.data),{},Object(d.a)({},n.pokemonName,n.payload))});case"POKEMON_SECOND_FAILURE":return Object(s.a)(Object(s.a)({},e),{},{loading:!1,error:"errror unable to find pokemon"});default:return e}},O=Object(l.combineReducers)({pokemonList:f,pokemon:g,pokemonSecond:E}),y=Object(l.createStore)(O,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(m.a))),v=t(27),k=t(34),x=t(15),j=t(39),w=t.n(j),_=t(197),L=t(12);function N(){var e=Object(i.a)(["\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n    height: 3rem;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: black;\n    transition: all 0.2s ease-in 0s;\n\n    &:hover{\n        background-color: #3B5DA8;\n        color: white;\n    }\n"]);return N=function(){return e},e}function S(){var e=Object(i.a)(["\n    text-transform: capitalize;\n    margin-left: 1rem;\n"]);return S=function(){return e},e}var P=L.a.span(S()),I=Object(L.a)(k.b)(N()),M=function(e){var n=e.data;return r.a.createElement(I,{to:"/pokemon/".concat(n.name)},r.a.createElement(P,null,n.name))},C=t(43),K=t.n(C),T=t(56),U=t(49),A=t.n(U),D=function(e){return function(n){var t=15*e-15;n({type:"POKEMON_LIST_LOADING"}),A.a.get("https://pokeapi.co/api/v2/pokemon?limit=".concat(15,"&offset=").concat(t)).then((function(e){n({type:"POKEMON_LIST_SUCCES",payload:e.data})})).catch((function(e){n({type:"POKEMON_LIST_FAILURE"})}))}},F=t(77);function R(){var e=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n"]);return R=function(){return e},e}var z=L.a.div(R()),G=function(){return r.a.createElement(z,null,r.a.createElement(F.LoopCircleLoading,null))};function B(){var e=Object(i.a)(["\n    align-self: center;\n"]);return B=function(){return e},e}function W(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return W=function(){return e},e}function J(){var e=Object(i.a)(["\n    padding: 1rem 0;\n"]);return J=function(){return e},e}var V=L.a.h2(J()),X=L.a.ul(W()),$=Object(L.a)(_.a)(B()),q=function(){var e=Object(v.b)(),n=Object(v.c)((function(e){return e.pokemonList}));return Object(a.useEffect)((function(){e(D(1))}),[]),r.a.createElement(r.a.Fragment,null,n.loading?r.a.createElement(G,null):null,r.a.createElement(V,null,"Pokemon list"),r.a.createElement(X,null,w.a.isEmpty(n.data)?null:n.data.map((function(e,n){return r.a.createElement(M,{key:n,data:e})}))),r.a.createElement($,{color:"primary",style:{marginBottom:"2rem",marginTop:"2rem"},count:Math.ceil(n.count/15),onChange:function(n,t){return e(D(t))}}))},H={normal:{bg:"#9e9e9e",font:"black"},fighting:{bg:"#fb8c00",font:"black"},flying:{bg:"#b2dfdb",font:"black"},poison:{bg:"#9c27b0",font:"white"},ground:{bg:"#ffb300",font:"black"},rock:{bg:"#795548",font:"white"},bug:{bg:"#33691e",font:"white"},ghost:{bg:"#5e35b1",font:"white"},steel:{bg:"#90a4ae",font:"black"},fire:{bg:"#ff3d00",font:"white"},water:{bg:"#3949ab",font:"white"},grass:{bg:"#4caf50",font:"black"},electric:{bg:"#ffeb3b",font:"black"},psychic:{bg:"#ec407a",font:"white"},ice:{bg:"#81d4fa",font:"black"},dragon:{bg:"#ffab91",font:"black"},dark:{bg:"#424242",font:"white"},fairy:{bg:"#ff80ab",font:"black"},unknown:{bg:"#fafafa",fony:"black"},shadow:{bg:"#546e7a",font:"white"}},Q=t(81),Y=t.n(Q),Z=t(82),ee=t.n(Z);function ne(){var e=Object(i.a)(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    margin-top: auto;\n\n    div {\n        padding: 1.4rem 0;\n        background: ",";\n        color: ",";\n        border-right: 1px solid rgba(0,0,0,.2);\n\n        &:last-child {\n            border: none;\n        }\n\n        p {\n            padding: 0;\n            margin: 0;\n            font-style: normal;\n            text-transform: uppercase;\n            color: ",";\n\n            &:first-child {\n                font-size: 2rem;\n                font-weight: bold;\n            }\n        }\n    }\n"]);return ne=function(){return e},e}function te(){var e=Object(i.a)(["\n    max-width: 7rem;\n    width: 40%;\n    height: 1.4rem;\n    border-radius: 3px;\n    background: ",";\n    color: ",";\n    line-height: 1.4rem;\n"]);return te=function(){return e},e}function ae(){var e=Object(i.a)(["\n    margin-top: .2rem;\n    display: flex;\n    justify-content: space-evenly;;\n    line-height: 16px;\n    list-style: none;\n"]);return ae=function(){return e},e}function re(){var e=Object(i.a)(["\n    position: relative;\n    height: 150px;\n    background-image: radial-gradient(circle at 33% 41%, rgba(250, 250, 250,0.03) 0%, rgba(250, 250, 250,0.03) 50%,rgba(37, 37, 37,0.03) 50%, rgba(37, 37, 37,0.03) 100%),radial-gradient(circle at 76% 49%, rgba(28, 28, 28,0.03) 0%, rgba(28, 28, 28,0.03) 50%,rgba(187, 187, 187,0.03) 50%, rgba(187, 187, 187,0.03) 100%),radial-gradient(circle at 41% 99%, rgba(247, 247, 247,0.03) 0%, rgba(247, 247, 247,0.03) 50%,rgba(120, 120, 120,0.03) 50%, rgba(120, 120, 120,0.03) 100%),radial-gradient(circle at 66% 27%, rgba(17, 17, 17,0.03) 0%, rgba(17, 17, 17,0.03) 50%,rgba(156, 156, 156,0.03) 50%, rgba(156, 156, 156,0.03) 100%),linear-gradient(73deg, rgb(209,209,209),rgb(88,88,88));\n    margin-bottom: 2rem;\n\n    \n    img {\n        z-index: 1000;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: auto;\n        height: 100%;\n    }\n    \n    &::before {\n        z-index: 999;\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: ",";\n        mix-blend-mode: screen;\n        border-bottom: 1px solid rgba(0,0,0,0.5);\n    }\n"]);return re=function(){return e},e}function oe(){var e=Object(i.a)(["\n    font-weight: bold;\n    color: ",";\n"]);return oe=function(){return e},e}function ce(){var e=Object(i.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 20rem;\n    min-height: 500px;\n    background-color: white;\n    border-radius: 10px;\n    overflow: hidden;\n    box-shadow: -1px 5px 15px -5px rgba(0,0,0,0.3);\n    text-align: center;\n    \n    p {\n        padding: 1rem 0;\n        margin: 1rem 2rem 2rem 2rem;\n        font-style: italic;\n        color: gray;\n    }\n"]);return ce=function(){return e},e}function ie(){var e=Object(i.a)(["\n    display: flex;\n    justify-content: center;\n    margin: 2rem 0;\n"]);return ie=function(){return e},e}var le=L.a.div(ie()),ue=Object(L.a)(Y.a)(ce()),me=L.a.span(oe(),(function(e){return H[e.type].bg})),se=L.a.div(re(),(function(e){return H[e.type].bg})),pe=L.a.ul(ae()),fe=L.a.li(te(),(function(e){return H[e.type].bg}),(function(e){return H[e.type].font})),de=L.a.div(ne(),(function(e){return H[e.type].bg}),(function(e){return H[e.type].font}),(function(e){return H[e.type].font})),be=function(e){var n=Object(v.b)(),t=Object(v.c)((function(e){return e.pokemon})),o=Object(v.c)((function(e){return e.pokemonSecond})),c=e.match.params.pokemon,i=t.data[c],l=o.data[c];var u;return Object(a.useEffect)((function(){var e;n((e=c,function(){var n=Object(T.a)(K.a.mark((function n(t){var a;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:"POKEMON_MULTIPLE_LOADING"}),n.next=4,A.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e));case 4:a=n.sent,t({type:"POKEMON_MULTIPLE_SUCCES",payload:a.data,pokemonName:e}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t({type:"POKEMON_MULTIPLE_FAILURE"});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}())),n(function(e){return function(){var n=Object(T.a)(K.a.mark((function n(t){var a;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:"POKEMON_SECOND_LOADING"}),n.next=4,A.a.get("http://cors-anywhere.herokuapp.com/https://pokeapi.glitch.me/v1/pokemon/".concat(e));case 4:a=n.sent,t({type:"POKEMON_SECOND_SUCCES",payload:a.data,pokemonName:e}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t({type:"POKEMON_SECOND_FAILURE"});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(c))}),[c]),r.a.createElement(r.a.Fragment,null,t.error?r.a.createElement("p",null,"Error"):null,t.loading?r.a.createElement(G,null):r.a.createElement(le,null,w.a.isEmpty(i)?null:r.a.createElement(ue,{options:{reverse:!1,max:15,perspective:2e3,scale:1.05,speed:300,transition:!0,axis:"X",reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"}},r.a.createElement(se,{type:i.types[0].type.name},r.a.createElement("img",{src:i.sprites.front_default?i.sprites.front_default:ee.a,alt:"pokemon_image"})),r.a.createElement(me,{type:i.types[0].type.name},(u=i.id)<10?"#00".concat(u):u>=10&&u<=99?"#0".concat(u):"#".concat(u)),r.a.createElement("h1",{style:{textTransform:"capitalize"}},c),r.a.createElement(pe,null,i.types.map((function(e,n){return r.a.createElement(fe,{key:n,type:e.type.name},e.type.name)}))),r.a.createElement("div",{style:{display:"flex",marginTop:"2rem"}},r.a.createElement("img",{style:{width:"25%"},src:i.sprites.front_default}),r.a.createElement("img",{style:{width:"25%"},src:i.sprites.back_default}),r.a.createElement("img",{style:{width:"25%"},src:i.sprites.front_shiny}),r.a.createElement("img",{style:{width:"25%"},src:i.sprites.back_shiny})),o.loading||w.a.isEmpty(l)?null:r.a.createElement("p",null," ",l[0].description," "),r.a.createElement(de,{type:i.types[0].type.name},r.a.createElement("div",null,r.a.createElement("p",null,i.stats[0].base_stat),r.a.createElement("p",null,i.stats[0].stat.name)),r.a.createElement("div",null,r.a.createElement("p",null,i.stats[1].base_stat),r.a.createElement("p",null,i.stats[1].stat.name)),r.a.createElement("div",null,r.a.createElement("p",null,i.stats[2].base_stat),r.a.createElement("p",null,i.stats[2].stat.name)))),r.a.createElement("button",{style:{height:"25px"},onClick:function(){return console.log(i.sprites)}})))},ge=t(85),he=t(196),Ee=t(195),Oe=t(84),ye=t.n(Oe),ve=t(83),ke=t.n(ve);function xe(){var e=Object(i.a)(["\n    margin-left: auto;\n    align-self: center;\n"]);return xe=function(){return e},e}function je(){var e=Object(i.a)(["\n    padding: 1rem 0;\n    display: flex;\n    flex-direction: column;\n    \n    @media (max-width: 900px) {\n            flex-direction: column;\n        }\n\n    img {\n        width: 50%;\n\n        @media (max-width: 900px) {\n            width: 100%;\n        }\n    }\n"]);return je=function(){return e},e}var we=L.a.nav(je()),_e=L.a.form(xe()),Le=Object(x.g)((function(e){var n=Object(a.useState)(""),t=Object(ge.a)(n,2),o=t[0],c=t[1];return r.a.createElement(we,null,r.a.createElement(k.b,{to:"/"},r.a.createElement("img",{src:ke.a,alt:"logo"})),r.a.createElement(_e,{onSubmit:function(n){n.preventDefault(),e.history.push("/pokemon/".concat(o.toLowerCase())),c("")},noValidate:!0,autoComplete:"off"},r.a.createElement(he.a,{label:"Search Pokemon",value:o,onChange:function(e){return c(e.target.value)}}),r.a.createElement(Ee.a,{color:"primary",style:{marginTop:"5px"},type:"submit"},r.a.createElement(ye.a,{color:"primary"}))))}));function Ne(){var e=Object(i.a)(["\n    margin-top: 1rem;\n    width: 100%;\n    height: 1rem;\n    text-align: right;\n"]);return Ne=function(){return e},e}var Se=L.a.footer(Ne()),Pe=function(){return r.a.createElement(Se,null,"Thanks to ",r.a.createElement("a",{href:"https://pokedevs.gitbook.io/"},"Pok\xe9dex API")," and ",r.a.createElement("a",{href:"https://pokeapi.co/"},"PokeAPI.co"))};function Ie(){var e=Object(i.a)(["\n  width: 60%;\n  max-width: 1024px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n"]);return Ie=function(){return e},e}var Me=L.a.div(Ie());var Ce=function(){return r.a.createElement(k.a,null,r.a.createElement(v.a,{store:y},r.a.createElement(Me,null,r.a.createElement(Le,null),r.a.createElement(x.d,null,r.a.createElement(x.b,{path:"/",exact:!0,component:q}),r.a.createElement(x.b,{path:"/pokemon/:pokemon",exact:!0,component:be}),r.a.createElement(x.a,{to:"/"}))),r.a.createElement(Pe,null)))};t(160),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,n,t){e.exports=t.p+"static/media/no-photos.bef840e8.svg"},83:function(e,n,t){e.exports=t.p+"static/media/logo.3cfd5e85.svg"},94:function(e,n,t){e.exports=t(161)},99:function(e,n,t){}},[[94,1,2]]]);
//# sourceMappingURL=main.bbcd5c40.chunk.js.map