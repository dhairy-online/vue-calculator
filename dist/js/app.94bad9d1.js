(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1346:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("Arena")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",[n("template",{slot:"brand"},[n("b-navbar-item",[n("b",[t._v("Scribble")])])],1),n("template",{slot:"end"},[n("b-navbar-item",{attrs:{tag:"div"}},[n("div",{staticClass:"buttons"},[n("a",{staticClass:"button is-primary"},[n("strong",[t._v("Github")])])])])],1)],2)},s=[],c=n("2877"),u={},l=Object(c["a"])(u,i,s,!1,null,null,null),p=l.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 mt-2"},[n("VueSignaturePad",{ref:"signaturePad",attrs:{id:"signature",width:"100%",height:"500px",options:t.options}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-3 mt-2"},[n("compact-picker",{attrs:{value:t.color},on:{input:t.updateVal}})],1)])])},d=[],b=n("c345"),v={name:"Arena",components:{"compact-picker":b["Compact"]},sockets:{connect:function(){console.log("Connected")}},data:function(){return{color:{hex:"#194d33e6",hsl:{h:150,s:.5,l:.2,a:.9},hsv:{h:150,s:.66,v:.3,a:.9},rgba:{r:159,g:96,b:43,a:.9},a:.9},options:{penColor:"#000",backgroundColor:"#fff",onEnd:function(){}}}},methods:{updateVal:function(t){this.options={penColor:t.hex}}},created:function(){var t=this;this.sockets.subscribe("img",(function(e){console.log("asd"+e),t.$refs.signaturePad.fromDataURL(e)})),this.options.onEnd=function(){var e=t.$refs.signaturePad.saveSignature(),n=(e.isEmpty,e.data);t.$socket.emit("draw",n),console.info("Drawing!")}}},h=v,m=(n("a0cc"),Object(c["a"])(h,f,d,!1,null,null,null)),g=m.exports,y={name:"App",components:{Navbar:p,Arena:g}},w=y,O=Object(c["a"])(w,a,o,!1,null,null,null),_=O.exports,j=n("289d"),x=n("1918"),C=n.n(x),P=(n("5abe"),n("1dce")),k=n.n(P),S=n("5132"),$=n.n(S);r["a"].use(new $.a({connection:"http://localhost:3000"})),r["a"].config.productionTip=!1,r["a"].use(j["a"],{defaultIconPack:"fas"}),r["a"].use(C.a),r["a"].use(k.a),new r["a"]({render:function(t){return t(_)}}).$mount("#app")},a0cc:function(t,e,n){"use strict";var r=n("1346"),a=n.n(r);a.a}});
//# sourceMappingURL=app.94bad9d1.js.map