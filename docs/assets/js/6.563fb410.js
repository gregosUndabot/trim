(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{181:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("We will examine typical scenario where new resource is ready on backend api and admin user interface has to be created.\nSteps needed to complete UI for this new resource:")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("For simple resources this can be completed in less then 5 minutes.")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("Make sure that resource backend api is ready to handle get, post, and put requests.\nCheck that backend properly outputs relation includes, make sure that filtering and validation rules are respected.\nExamine new resource attributes and relations and decide what list and form elements have to be used.")]),t._v(" "),n("p",[t._v("Everything works? Then lets build resource UI controller.")]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v('Lets say new resource in need of UI is "tag" entity.\nWe will need a component to describe how resource is browsed, filtered and sorted in list, what form fields are rendered when resource is created or updated.')]),t._v(" "),n("p",[t._v("For this purpose we will build a tag resource controller in 'src/controllers/tag.js' file:")]),t._v(" "),t._m(4),n("hr"),t._v(" "),n("p",[t._v("Read up on how "),n("router-link",{attrs:{to:"/core-concepts-and-api.html#resource-controller"}},[t._v("resource controllers")]),t._v(" work, examine how to build "),n("router-link",{attrs:{to:"/list-elements.html"}},[t._v("resource list")]),t._v(" and "),n("router-link",{attrs:{to:"/form-elements.html"}},[t._v("form elements")]),t._v(".")],1),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("Open your routes file (src/routes.js) and add new resource route:")]),t._v(" "),t._m(6),n("p",[t._v("Browse "),n("router-link",{attrs:{to:"/core-concepts-and-api.html#router"}},[t._v("router docs")]),t._v(" to learn more.")],1),t._v(" "),t._m(7),t._v(" "),n("p",[t._v("Open your main navigation component (src/mainNavigation.js) and add new navigation item:")]),t._v(" "),t._m(8),n("p",[t._v("Read more about "),n("router-link",{attrs:{to:"/core-concepts-and-api.html#navigation"}},[t._v("main navigation")]),t._v(" if you want to learn more.")],1),t._v(" "),t._m(9),t._v(" "),n("p",[t._v("Open up your services file (src/services.js) and add new tag resource controller to registry.\nUse dynamic import to load controller code and its dependencies only when controller is actually rendered.")]),t._v(" "),t._m(10),n("p",[t._v("Done! Read up on "),n("router-link",{attrs:{to:"/core-concepts-and-api.html#services"}},[t._v("services")]),t._v(" if you want to learn more.")],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"adding-resource"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-resource","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding resource")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("examine resource api")]),t._v(" "),n("li",[t._v("create resource controller")]),t._v(" "),n("li",[t._v("add resource route")]),t._v(" "),n("li",[t._v("add navigation link")]),t._v(" "),n("li",[t._v("register controller as service")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examine-resource-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examine-resource-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Examine resource api")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"create-resource-controller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-resource-controller","aria-hidden":"true"}},[this._v("#")]),this._v(" Create resource controller")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    resourceName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tag'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("setupList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addCreateControl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Create new tag'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --------------------------------------------------------------")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Filters")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --------------------------------------------------------------")]),t._v("\n        list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFilter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TextFormElement'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Title'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --------------------------------------------------------------")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// List items")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --------------------------------------------------------------")]),t._v("\n        list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addItem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TextListItem'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            attributes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'textListItemType1 hiddenOnMobile'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            caption"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ID'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            mapTo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addItem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LinkListItem'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            caption"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Title'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            mapTo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            action"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'editItem'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --------------------------------------------------------------")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Context menu")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --------------------------------------------------------------")]),t._v("\n        list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addItem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ContextMenuListItem'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            caption"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Actions'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            items"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("caption"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Edit'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'editItem'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("setupEdit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("edit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addToIndexControl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addSaveControl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        edit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addField")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'TextFormElement'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Title'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"add-resource-route"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-resource-route","aria-hidden":"true"}},[this._v("#")]),this._v(" Add resource route")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\nrouter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tag'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"add-navigation-item"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-navigation-item","aria-hidden":"true"}},[this._v("#")]),this._v(" Add navigation item")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getNavigationItems")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("router")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        caption"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tags'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tag'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resource.tag.index'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        icon"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Misc'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"register-controller-as-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#register-controller-as-service","aria-hidden":"true"}},[this._v("#")]),this._v(" Register controller as service")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("TagController")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./controllers/tag'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);