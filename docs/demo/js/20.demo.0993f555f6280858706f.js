(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{257:function(o,t,e){var n=e(312);"string"==typeof n&&(n=[[o.i,n,""]]),n.locals&&(o.exports=n.locals);(0,e(4).default)("2ca7a6b8",n,!0,{})},311:function(o,t,e){"use strict";var n=e(257);e.n(n).a},312:function(o,t,e){(o.exports=e(3)(!1)).push([o.i,".colorInputType1 {\n  position: relative;\n}\n.colorInputType1 > .colorPreview {\n    width: 1em;\n    height: 1em;\n    margin-top: -0.5em;\n    position: absolute;\n    right: 1em;\n    top: 50%;\n    border-radius: 50%;\n    -webkit-box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.15);\n            box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.15);\n    -webkit-transition: background-color 0.3s, opacity 0.3s;\n    -o-transition: background-color 0.3s, opacity 0.3s;\n    transition: background-color 0.3s, opacity 0.3s;\n}\n",""])},363:function(o,t,e){"use strict";e.r(t);var n=e(11),r={elementType:"color",components:{TextFormElement:e(93).a},mixins:[n.a],props:{value:{type:String,default:""}},computed:{isValidColor:function(){var o=document.createElement("div");return o.style.color=this.value,Boolean(o.style.color)}}},i=(e(311),e(1)),a=Object(i.a)(r,function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("text-form-element",o._b({on:{input:function(t){return o.$emit("input",t)}}},"text-form-element",o.$props,!1),[e("template",{slot:"inputWrapperEnd"},[e("div",{staticClass:"colorPreview",style:{backgroundColor:o.value,opacity:o.isValidColor?1:0}})])],2)},[],!1,null,null,null);t.default=a.exports}}]);