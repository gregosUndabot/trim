(window.webpackJsonp=window.webpackJsonp||[]).push([[6,13],{302:function(t,e,n){var o=n(314);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4).default)("d3328cc8",o,!0,{})},304:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(6),i=n(17);function r(){return window.CKEDITOR_BASEPATH=Object(o.a)("ckEditorPath","https://cdn.ckeditor.com/4.11.4/standard-all/"),n.e(24).then(n.t.bind(null,333,7)).then((function(){var t=i.a.getLocale(),e=window.CKEDITOR;return e.disableAutoInline=!0,e.config.defaultLanguage=t,e.config.language=t,e.config.extraPlugins="sourcedialog",e.config.entities=!1,e.customStyles={richCombo:"\n                .body, html { margin: 0; padding: 0; }\n                .cke_panel_block { padding: 5px 0; outline: none !important; }\n                .cke_panel_list { list-style:none; padding: 0; margin: 0; }\n                .cke_panel_listItem { padding: 0; margin; 0; }\n                .cke_panel_listItem a { font-family: Arial; display:block; padding: 5px 10px; text-decoration:none; font-size: 13px; color: #303030; }\n                .cke_panel_listItem a:hover { background-color: #ededed; }\n            "},e}))}},313:function(t,e,n){"use strict";var o=n(302);n.n(o).a},314:function(t,e,n){(e=n(3)(!1)).push([t.i,".htmlInputType1{font-family:Roboto, sans-serif;font-weight:400;font-style:normal;font-size:1.6em;outline:none;margin-bottom:1.875em;min-height:1.375em;padding:.625em 0;border-bottom:1px solid #ddd}.htmlInputType1>p,.htmlInputType1>ul,.htmlInputType1>ol{margin-bottom:1.5625em;line-height:1.4;color:#303030}.htmlInputType1>p:last-child,.htmlInputType1>ul:last-child,.htmlInputType1>ol:last-child{margin-bottom:0}.htmlInputType1>ul>li{padding-left:1.25em;position:relative;margin-bottom:.625em}.htmlInputType1>ul>li:before{content:'';position:absolute;left:0;top:.5em;width:.3125em;height:.3125em;background:#303030;border-radius:50%}.htmlInputType1>ol{list-style-type:decimal}.htmlInputType1>ol>li{list-style-type:decimal;padding-left:.9375em;margin-left:1.25em;margin-bottom:.625em}.htmlInputType1>h1,.htmlInputType1>h2,.htmlInputType1>h3{font-size:1.5625em;margin-bottom:1em;line-height:1.3}.htmlInputType1>h1{font-size:1.625em}.htmlInputType1>h2{font-size:1.375em}.htmlInputType1>h3{font-size:1.125em}.htmlInputType1 a{color:#303030;text-decoration:underline;-webkit-text-decoration-color:#e03431;-moz-text-decoration-color:#e03431;text-decoration-color:#e03431}.htmlInputType1:empty:before{font-size:1.6em;content:attr(placeholder);display:block;color:#666;pointer-events:none}\n",""]),t.exports=e},315:function(t,e,n){var o=n(352);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4).default)("62692640",o,!0,{})},316:function(t,e,n){var o=n(354);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4).default)("a5870d1c",o,!0,{})},334:function(t,e,n){"use strict";n.r(e);var o=n(11),i=n(12),r=n(304),a=n(0),s={elementType:"html",components:{ElementWrapper:i.a},mixins:[o.a],props:{value:{type:String,default:""},editorConfig:{type:Object}},data:function(){return{editorValue:this.value}},watch:{value:function(t){t!==this.editorValue&&this.editor&&(this.editorValue=t,this.editor.setData(t))}},mounted:function(){var t=this;this.$watch("isInteractive",(function(e){e?t.setupEditor():t.disableEditor()}),{immediate:!0})},beforeDestroy:function(){this.disableEditor()},methods:{disableEditor:function(){this.editor&&this.editor.destroy(),delete this.editor},setupEditor:function(){var t=this;return Object(r.a)().then((function(e){var n=Object(a.b)({startupShowBorders:!0,toolbar:[{name:"basicstyles",items:["Bold","Italic","Strike","RemoveFormat"]},{name:"paragraph",items:["NumberedList","BulletedList"]},{name:"links",items:["Link","Unlink"]},{name:"format",items:["Format"]},{name:"document",items:["Sourcedialog"]}],removePlugins:"magicline",format_tags:"p;h1;h2;h3"},t.editorConfig),o=t.editor=e.inline(t.$refs.content,n);return o.on("instanceReady",(function(){return o.setReadOnly(!1)})),o.on("change",(function(){var e=o.getData();t.editorValue=e,t.$emit("input",e)})),o}))}}},l=(n(313),n(1)),c=Object(l.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("element-wrapper",this._b({},"element-wrapper",this.elementWrapperProps,!1),[this._m(0)])}),[function(){var t=this.$createElement;return(this._self._c||t)("div",this._b({ref:"content",attrs:{contenteditable:this.isInteractive},domProps:{innerHTML:this._s(this.value)}},"div",this.inputAttributes,!1))}],!1,null,null,null);e.default=c.exports},351:function(t,e,n){"use strict";var o=n(315);n.n(o).a},352:function(t,e,n){(e=n(3)(!1)).push([t.i,".ck_add_components .cke_combo_text{width:auto}\n",""]),t.exports=e},353:function(t,e,n){"use strict";var o=n(316);n.n(o).a},354:function(t,e,n){(e=n(3)(!1)).push([t.i,'.htmlComponentsType1::after{clear:both;content:"";display:table}.htmlComponentsType1 .htmlInputType1>.htmlCustomComponent{font-size:.625em}.htmlComponentsType1 .htmlInputType1:not(:last-child){margin-bottom:.9375em;border:0}.htmlComponentsType1 .htmlInputType1:last-child{margin-bottom:0}\n',""]),t.exports=e},415:function(t,e,n){"use strict";n.r(e);var o=n(11),i=n(12),r=n(0),a=n(304),s=n(2),l=(n(334),{props:{content:String,clientId:String,editorConfig:Object,inputAttributes:Object,type:String,components:Array,context:Object},data:function(){return{editorContent:this.content}},watch:{content:function(t){t!==this.editorContent&&this.editor&&(this.editorContent=t,this.editor.setData(t))}},mounted:function(){this.setupEditor()},beforeDestroy:function(){this.editor&&this.editor.destroy()},methods:{setupEditor:function(){var t=this;return Object(a.a)().then((function(e){var n=Object.assign({startupShowBorders:!1,toolbar:[{name:"basicstyles",items:["Bold","Italic","Strike","RemoveFormat"]},{name:"paragraph",items:["NumberedList","BulletedList","ComponentSelector"]},{name:"links",items:["Link","Unlink"]},{name:"format",items:["Format"]},{name:"document",items:["Sourcedialog"]}],removePlugins:"magicline",format_tags:"p;h1;h2;h3"},t.editorConfig),o=t.editor=e.inline(t.$refs.content,n);return o.on("instanceReady",(function(){return o.setReadOnly(!1)})),o.on("change",(function(){var e=o.getData();t.editorContent=e,t.$emit("updateContent",{clientId:t.clientId,content:e})})),t.setupInsertDropdown(o,e),o}))},setupInsertDropdown:function(t,e){var n=Object(s.a)("formElements.htmlComponents.insertComponentCaption"),o=this.components.filter((function(t){return Boolean(t)})),i=this;0!==o.length&&t.ui.addRichCombo("ComponentSelector",{label:n,title:n,voiceLabel:n,className:"ck_add_components",panel:{css:e.customStyles.richCombo},init:function(){var t=this;o.forEach((function(e){t.add(e.componentType,Object(r.x)(e.insertCaption),Object(r.x)(e.insertCaption))}))},onClick:function(e){i.prepareInsertEvent(e,t.getSelection().getRanges()[0]),t.focusManager.blur(!0)}})},splitContentByIndex:function(t){for(var e=["",""],n=0,o=this.editor.container.getChild(0);o;){var i=o.getOuterHtml().trim();e[n<t?0:1]+=i,o=o.getNext(),n++}return e},prepareInsertEvent:function(t,e){for(var n=this,o=this.components.find((function(e){return e.componentType===t})),i=e.startContainer;i.getParent().$!==this.editor.element.$;)i=i.getParent();o.prepareDataModel((function(t){var r=null,a={clientId:n.clientId,component:Object.assign({type:o.componentType},t)};if(0!==e.startOffset||i.hasPrevious()?0===e.startOffset&&i.hasPrevious()?(a.placement="split",r=i.getPrevious()):i.hasNext()?(a.placement="split",r=i):a.placement="after":a.placement="before",r){for(var s=[],l=[r],c=r;c.hasPrevious();)c=c.getPrevious(),l.push(c);for(c=r;c.hasNext();)c=c.getNext(),s.push(c);a.content=l.reverse().filter((function(t){return t.getText().trim()})).map((function(t){return t.getOuterHtml()})).join("").trim(),a.contentCut=s.filter((function(t){return t.getText().trim()})).map((function(t){return t.getOuterHtml()})).join("").trim()}n.$emit("insertComponent",a)}),this.context)}}}),c=(n(351),n(1)),u=Object(c.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement;return(this._self._c||t)("div",this._b({ref:"content",domProps:{innerHTML:this._s(this.content)}},"div",this.inputAttributes,!1))}],!1,null,null,null).exports;function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){i=!0,r=t}finally{try{o||null==s.return||s.return()}finally{if(i)throw r}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var d=0,f=function(){return(Date.now()+ ++d).toString()},h={elementType:"htmlComponents",components:{ElementWrapper:i.a,HtmlEditor:u},mixins:[o.a],props:{value:{type:Array,default:function(){return[{clientId:f(),type:"html",content:""}]}},components:{type:Array,default:function(){return[]}},editorConfig:{type:Object},context:{type:Object}},computed:{sanitizedInputAttributes:function(){var t=Object.assign({},this.inputAttributes);return["id","name"].forEach((function(e){return delete t[e]})),t}},mounted:function(){var t=this,e=this.$watch("value",(function(n){n.length>1&&t.$nextTick((function(){t.setupDragAndDrop(),e()}))}),{immediate:!0});0===this.value.length&&this.$emit("input",[{clientId:f(),type:"html",content:""}])},beforeDestroy:function(){this.drake&&this.drake.destroy()},methods:{getComponent:function(t){return this.components.find((function(e){return e.componentType===t.type}))},updateComponent:function(t){this.$emit("input",this.value.map((function(e){return e.clientId===t.clientId?Object.assign({},e,t):e})))},insertComponent:function(t){this.$emit("input",this.normalize(this.prepInsert(this.value,t)))},prepInsert:function(t,e){var n=function(t){return Object.assign({clientId:f()},t)};return t.reduce((function(t,o){return o.clientId===e.clientId?"after"===e.placement?(t.push(o),t.push(n(e.component))):"before"===e.placement?(t.push(n(e.component)),t.push(o)):"split"===e.placement&&(t.push(Object.assign({},o,{content:e.content})),t.push(n(e.component)),e.contentCut&&t.push({clientId:f(),type:"html",content:e.contentCut})):t.push(o),t}),[])},deleteComponent:function(t){this.$emit("input",this.normalize(this.value.filter((function(e){return e.clientId!==t}))))},normalize:function(t){var e=t.reduce((function(t,e){var n=t.length,o=n>=1?t[n-1]:null;return"html"===e.type&&o&&"html"===o.type?t[n-1]=Object.assign({},o,{content:o.content+e.content}):t.push(e),t}),[]),n=e.length;return 0!==n&&"html"===e[n-1].type||e.push({clientId:f(),type:"html",content:""}),e},setupDragAndDrop:function(){var t=this,e=this.$refs.inputWrapper;n.e(0).then(n.t.bind(null,404,7)).then((function(n){var o=n.default;t.drake=o([e],{isContainer:function(t){return Boolean(t.getAttribute("contenteditable"))||t===e},moves:function(t,n,o,i){var r=Boolean(o.getAttribute("data-sort-handle")),a=e.contains(o);return r&&a},mirrorContainer:e,direction:"vertical"}),t.drake.on("drop",(function(e,n,o,i){var a=t.value;if(n.getAttribute("contenteditable")){t.drake.cancel((function(){return!1}));var s,l,c,u=t.getComponentByEl(e),m=t.getComponentByEl(n),d=a.find((function(t){return t.clientId===u.clientId}));if(a=a.filter((function(t){return t.clientId!==u.clientId})),i){var f=Object(r.i)(i);if(0===f)s="before";else{s="split";var h=p(m.splitContentByIndex(f),2);l=h[0],c=h[1]}}else s="after";a=t.prepInsert(a,{clientId:m.clientId,component:d,placement:s,content:l,contentCut:c})}else a.sort((function(e,n){return t.getComponentDomIndex(e.clientId)-t.getComponentDomIndex(n.clientId)}));t.$emit("input",t.normalize(a))}))}))},getComponentByEl:function(t){return this.$refs.componentInstances.find((function(e){return e.$el===t}))},getComponentDomIndex:function(t){var e=this.$refs.componentInstances.find((function(e){return e.clientId===t}));return Object(r.i)(e.$el)}}},g=(n(353),Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("element-wrapper",t._b({attrs:{renderInputWrapper:!1}},"element-wrapper",t.elementWrapperProps,!1),[n("div",t._b({ref:"inputWrapper"},"div",t.inputWrapperAttributes,!1),[t._l(t.value,(function(e){return["html"===e.type?n("html-editor",t._b({key:e.clientId,ref:"componentInstances",refInFor:!0,attrs:{context:t.context,inputAttributes:t.sanitizedInputAttributes,editorConfig:t.editorConfig,components:t.components},on:{updateContent:t.updateComponent,insertComponent:t.insertComponent}},"html-editor",e,!1)):n(t.getComponent(e),t._b({key:e.clientId,ref:"componentInstances",refInFor:!0,tag:"component",staticClass:"htmlCustomComponent",attrs:{context:t.context},on:{updateComponent:t.updateComponent,deleteComponent:t.deleteComponent}},"component",e,!1))]}))],2)])}),[],!1,null,null,null));e.default=g.exports}}]);