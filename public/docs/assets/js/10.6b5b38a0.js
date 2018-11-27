(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{171:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"debug-dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug-dashboard","aria-hidden":"true"}},[t._v("#")]),t._v(" Debug Dashboard")]),t._v(" "),s("p",[t._v("In addition to logging the events to the console, you can also use a realtime Dashboard that shows you all incoming connections, events and disconnects the moment they happen on your WebSocket server.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/dashboard.jpg",alt:"Debug Dashboard"}})]),t._v(" "),s("h2",{attrs:{id:"accessing-the-dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-dashboard","aria-hidden":"true"}},[t._v("#")]),t._v(" Accessing the Dashboard")]),t._v(" "),s("p",[t._v("The dashboard is only available, once you register the required routes in your "),s("code",[t._v("web.php")]),t._v(" file.\nYou can do this using "),s("code",[t._v("Route::webSocketDashboard();")])]),t._v(" "),s("p",[t._v("This will register the dashboard routes under the "),s("code",[t._v("/websockets")]),t._v(" prefix by default.")]),t._v(" "),s("p",[t._v("If you want to change the prefix to something else, you can just pass it to the route method:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Route"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("webSocketDashboard")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'my-dashboard'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("To access the debug dashboard, you can visit the dashboard URL of your Laravel project in the browser.\nSince your WebSocket server has support for multiple clients, you can select which client you want to connect to and inspect.")]),t._v(" "),s("p",[t._v('By pressing the "Connect" button, you can establish the WebSocket connection and see all events taking place on your WebSocket server from there on in real-time.')]),t._v(" "),s("h2",{attrs:{id:"protecting-the-dashboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#protecting-the-dashboard","aria-hidden":"true"}},[t._v("#")]),t._v(" Protecting the Dashboard")]),t._v(" "),s("p",[t._v("By default, access to the WebSocket dashboard is only allowed while your application environment is set to "),s("code",[t._v("local")]),t._v(".")]),t._v(" "),s("p",[t._v("However, you can change this behavior by overriding the Laravel Gate being used. A good place for this is the "),s("code",[t._v("AuthServiceProvider")]),t._v(" that ships with Laravel.")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("boot")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token variable"}},[t._v("$this")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token function"}},[t._v("registerPolicies")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    Gate"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token function"}},[t._v("define")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'viewWebSocketsDashboard'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$user")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("in_array")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        \t"),s("span",{attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$user")]),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token property"}},[t._v("email")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"event-creator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-creator","aria-hidden":"true"}},[t._v("#")]),t._v(" Event Creator")]),t._v(" "),s("p",[t._v("The dashboard also comes with an easy-to-use event creator, that lets you manually send events to your channels.")]),t._v(" "),s("p",[t._v("Simply enter the channel, the event name and provide a valid JSON payload to send it to all connected clients in the given channel.")])])}],!1,null,null,null);e.options.__file="dashboard.md";a.default=e.exports}}]);