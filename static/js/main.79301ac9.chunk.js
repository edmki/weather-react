(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{100:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(28),s=n.n(c),i=(n(90),n(60)),o=n(6),u=(n(91),n(92),n(145)),l=n(65),d=n.n(l),j=n(61),h=n.n(j),f=n(1);var b=function(e){return Object(f.jsxs)("header",{className:"Header",children:[Object(f.jsx)("div",{className:"Header-title",children:"HOJE"}),Object(f.jsxs)("div",{className:"Header-switch",children:[Object(f.jsx)(h.a,{}),Object(f.jsx)(u.a,{onChange:function(t){return e.onColorModeChange(t.target.checked?"dark":"light")},defaultChecked:!0}),Object(f.jsx)(d.a,{})]})]})},m=n(17),p=(n(98),n(26)),O=n.n(p),x=n(41);n(100);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.71247 1.17073C2.1271 2.37805 1.16369 3.10976 1.01735 4.02439C0.883201 4.84146 1.52954 6 2.87101 6C4.21247 6 4.85881 4.84146 4.72466 4.02439C4.57832 3.10976 3.61491 2.37805 3.02954 1.17073C2.98076 1.06098 2.91979 1 2.87101 1C2.82222 1 2.76125 1.06098 2.71247 1.17073Z",stroke:"#0099FF"});function y(e,t){var n=e.title,a=e.titleId,c=w(e,["title","titleId"]);return r.createElement("svg",v({width:6,height:7,viewBox:"0 0 6 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?r.createElement("title",{id:a},n):null,g)}var C=r.forwardRef(y);n.p;var k=function(e){var t=Object(r.useRef)(null),n=Object(r.useState)(!1),a=Object(o.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(0),u=Object(o.a)(i,2),l=u[0],d=u[1],j=Object(r.useState)(0),h=Object(o.a)(j,2),b=h[0],m=h[1];Object(r.useEffect)((function(){return window.addEventListener("mouseup",O),function(){window.removeEventListener("mouseup",O)}}),[]),Object(r.useEffect)((function(){return window.addEventListener("toutchend",O),function(){window.removeEventListener("toutchend",O)}}),[]);var p=function(e){var n=e.touches?e.touches[0].clientX:e.clientX;s(!0),d(n),m(t.current.scrollLeft)},O=function(e){s(!1)},x=function(e){var n=e.touches?e.touches[0].clientX:e.clientX;c&&(t.current.scrollLeft=b+l-n)};return Object(f.jsx)("div",{ref:t,className:e.className,style:{overflow:"hidden",cursor:"pointer",userSelect:"none"},onMouseDown:p,onMouseMove:x,onWheel:function(e){var n=Math.sign(e.deltaY);t.current.scrollLeft+=20*n},onTouchStart:p,onTouchMove:x,children:e.children})},N=n(150),S=n(143),E=n(148),M=n(149),F=n(67),L=n.n(F),D=n(68),W=n.n(D),H=n(140),I=n(142),T="02717570ae161f36b367bfd021863328";function P(e){var t="https://openweathermap.org/img/wn/".concat(e.data.weather[0].icon,"@4x.png"),n=Math.round(parseFloat(e.data.temp)),r=Math.round(parseFloat(e.dayData.temp.min)),a=Math.round(parseFloat(e.dayData.temp.max));return Object(f.jsxs)("div",{className:"CurrentWeather",children:[Object(f.jsx)("div",{className:"CityCard-name",children:e.name}),Object(f.jsx)(H.a,{title:e.data.weather[0].description,children:Object(f.jsx)("div",{className:"CityCard-icon",children:Object(f.jsx)("img",{src:t,alt:"weather icon"})})}),Object(f.jsx)("div",{className:"CityCard-temperature",children:n}),Object(f.jsxs)("div",{className:"CityCard-range",children:[Object(f.jsx)(H.a,{title:"m\xednima",children:Object(f.jsx)("div",{className:"CityCard-min",children:r})}),Object(f.jsx)(H.a,{title:"m\xe1xima",children:Object(f.jsx)("div",{className:"CityCard-max",children:a})})]})]})}function B(e){var t=e.data.filter((function(e,t){return t>0&&t<=13}));return Object(f.jsx)(k,{className:"WeatherNext",children:t.map((function(e,t){var n="https://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png"),r=Math.round(parseFloat(e.temp)),a=Math.round(100*parseFloat(e.pop));return Object(f.jsxs)("div",{className:"WeatherNext-item",children:[Object(f.jsxs)("div",{className:"WeatherNext-time",children:[new Date(1e3*e.dt).getHours(),":00"]}),Object(f.jsx)(H.a,{title:e.weather[0].description,children:Object(f.jsx)("div",{className:"WeatherNext-icon",children:Object(f.jsx)("img",{draggable:"false",src:n,alt:"weather icon"})})}),Object(f.jsxs)("div",{className:"WeatherNext-temperature",children:[r,"\xb0"]}),Object(f.jsx)(H.a,{title:"Chuva",children:Object(f.jsxs)("div",{className:"WeatherNext-rain",children:[Object(f.jsx)(C,{})," ",a,"%"]})})]},t)}))})}var J=function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(!1),i=Object(o.a)(s,2),u=i[0],l=i[1],d=Object(r.useState)(!1),j=Object(o.a)(d,2),h=j[0],b=j[1],m=Object(r.useState)(!1),p=Object(o.a)(m,2),v=p[0],w=p[1];Object(r.useEffect)((function(){e.name&&y(e.name)}),[]),Object(r.useEffect)((function(){u&&e.onSuccessQuery&&e.onSuccessQuery(a,e.id)}),[u]),Object(r.useEffect)((function(){v&&e.onError&&e.onError(v,e.id)}),[v]);var g=function(){var e=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),y(a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(x.a)(O.a.mark((function e(t){var n,r,a,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,C(t);case 4:return n=e.sent,r=Object(o.a)(n,2),a=r[0],c=r[1],e.next=10,k(a,c);case 10:(s=e.sent).name=t,l(s),b(!1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),console.error(e.t0),w(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(x.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/geo/1.0/direct?q=".concat(t,"&appid=").concat(T));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("HTTP error! status: ".concat(n.status));case 5:return e.next=7,n.json();case 7:if(0!=(r=e.sent).length){e.next=10;break}throw new Error("Cidade n\xe3o encontrada");case 10:if(!r.cod||200==r.cod){e.next=12;break}throw new Error(r.message||"Unknown error");case 12:return e.abrupt("return",[r[0].lat,r[0].lon]);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(x.a)(O.a.mark((function e(t,n){var r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(n,"&appid=").concat(T,"&exclude=minutely&units=metric&lang=pt_br"));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("HTTP error! status: ".concat(r.status));case 5:return e.next=7,r.json();case 7:if(!(a=e.sent).cod||200==a.cod){e.next=10;break}throw new Error(a.message||"Unknown error");case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=Object(f.jsxs)(E.a,{component:"form",onSubmit:g,name:"city",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:"100%",flexDirection:"row"},children:[Object(f.jsx)(S.a,{autoFocus:!0,placeholder:"Cidade",required:!0,color:"primary",sx:{ml:1,flex:1},onInput:function(e){return c(e.target.value)}}),Object(f.jsx)(M.a,{type:"submit",sx:{p:"10px"},"aria-label":"search",children:Object(f.jsx)(L.a,{})})]});return Object(f.jsx)("div",{className:"CityCard",children:Object(f.jsxs)("div",{className:"CityCard-content",children:[Object(f.jsx)(H.a,{title:"Excluir cidade",children:Object(f.jsx)(M.a,{onClick:function(){return e.onDelete(e.id)},className:"CityCard-delete",size:"small",children:Object(f.jsx)(W.a,{fontSize:"small"})})}),v?Object(f.jsx)(I.a,{severity:"error",children:v}):u&&Object.keys(u).length>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(P,{data:u.current,dayData:u.daily[0],name:u.name}),Object(f.jsx)(B,{data:u.hourly})]}):h?Object(f.jsx)(N.a,{className:"CityCard-loader"}):F]})})},R=n(144);function X(e){return Object(f.jsx)("div",{className:"AddButton",children:Object(f.jsx)(H.a,{title:"Adicionar cidade",children:Object(f.jsx)("div",{className:"add-icon",onClick:e.onClick,children:Object(f.jsxs)("svg",{stroke:"white",width:"108",height:"108",viewBox:"0 0 108 108",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(f.jsx)("path",{d:"M54 4L54 104",strokeWidth:"8",strokeLinecap:"round"}),Object(f.jsx)("path",{d:"M4 54H104",strokeWidth:"8",strokeLinecap:"round"})]})})})})}var A=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)({alert:!1,message:""}),s=Object(o.a)(c,2),i=s[0],u=s[1],l=Object(r.useRef)([]);Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("weather_cities"))||[];a(e.map((function(e){return{name:e}})))}),[]),Object(r.useEffect)((function(){l.current=n;var e=n.filter((function(e){return e.name})).map((function(e){return e.name}));localStorage.setItem("weather_cities",JSON.stringify(e))}),[n]);var d=function(e,t){if("undefined"!==typeof l.current[t]){var n=l.current;n[t].name=e,a(Object(m.a)(n))}},j=function(e){"undefined"!==typeof l.current[e]&&a(l.current.filter((function(t,n){return n!=e})))},h=function(e,t){u({alert:!0,message:e}),j(t)};return Object(f.jsxs)("div",{className:"CityCardList",children:[n.map((function(e,t){return e.component?e.component:e.name?Object(f.jsx)(J,{id:t.toString(),name:e.name,onDelete:j},t.toString()):void 0})),n.length<5&&Object(f.jsx)(X,{onClick:function(){if("undefined"===typeof n[n.length-1]||""!==n[n.length-1].name){var e=Object(f.jsx)(J,{id:n.length,onDelete:j,onSuccessQuery:d,onError:h},n.length);a([].concat(Object(m.a)(n),[{name:"",component:e}]))}}}),Object(f.jsx)(R.a,{open:i.alert,autoHideDuration:6e3,onClose:function(e,t){"clickaway"!==t&&u({alert:!1,message:""})},children:Object(f.jsx)(I.a,{severity:"error",children:i.message})})]})},Q=n(69),_=n(147),q=n(139);var z=function(){var e=Object(r.useState)("dark"),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(Q.a)({palette:Object(i.a)({mode:n},"light"===n&&{background:{default:"#efefef"}})});return Object(f.jsx)(_.a,{theme:c,children:Object(f.jsxs)("div",{className:"App ".concat(n),children:[Object(f.jsx)(q.a,{}),Object(f.jsx)(b,{onColorModeChange:a}),Object(f.jsx)(A,{})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(z,{})}),document.getElementById("root")),U()},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},98:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.79301ac9.chunk.js.map