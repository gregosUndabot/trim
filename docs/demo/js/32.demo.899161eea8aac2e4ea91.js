(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{332:function(e,t,r){"use strict";r.r(t);var o=r(5),s=r(0),n=r(2),i=r(91),a=r(63),u=r(51),c=r(14),d=r(60),l=r(61),f=r(17),p=o.a.extend({mixins:[l.a,f.a],props:{isExternal:{type:Boolean,default:!1}},data:function(){return{resourceModel:void 0,navigationKey:void 0,resourceCreatedMessage:Object(n.a)("baseResourceController.entityCreatedMessage"),resourceSavedMessage:Object(n.a)("baseResourceController.entitySavedMessage"),breadcrumbs:[],resourceControls:[],currentQuery:{}}},created:function(){this.$emit("create",this),this.setNavSelected(),this.bootstrapModel()},methods:{bootstrapModel:function(){var e=this;return Promise.resolve(this.getModel(this.getModelType())).then(function(t){return e.resourceModel=t,t})},getModelType:function(){return c.b},getResourceControlsType:function(){return i.a},getResourceHeaderType:function(){return a.a},getResourceEditType:function(){return u.a},setNavSelected:function(){this.isExternal||this.$store.commit("setNavSelected",this.navigationKey)},addControl:function(e){return this.resourceControls.push(Object(s.a)({actionContext:this},e)),this},addSaveControl:function(e){var t=this;return this.addControl({caption:e||Object(n.a)("resourceControls.save"),className:"accented iconUploadCloud",action:function(){return t.$refs.editHandler.save().catch(function(e){})}})},addDropdownControl:function(e){var t=this;return Array.isArray(e)&&(e={items:e}),e.isDropdown=!0,e.items.forEach(function(e){e.actionContext=t}),this.resourceControls.push(e),this},setPageTitle:function(e){return this.setBreadcrumbs({caption:e}),this.isExternal||(window.document.title=this.formatWindowTitle(this.breadcrumbs,this.$store.state.projectCaption)),this},formatWindowTitle:function(e,t){return e.map(function(e){return e.caption}).join(" / ")+" - "+t},setBreadcrumbs:function(e){return this.breadcrumbs=[e],this},getEditConfigurator:function(){var e=this;return function(t){return e.resetResourceControls(),e.setupEdit(Object(s.a)({query:e.currentQuery},t))}},processConfigureEvent:function(e,t){this.$emit({beforeConfigure:"beforeEditSetup",afterConfigure:"afterEditSetup"}[e],{controller:this,editHandler:t})},processSaveEvent:function(e){this.$emit("resourceSaved",e)},resetResourceControls:function(){return this.resourceControls=[],this}}});p.getDataKeys=function(){return["navigationKey","resourceSavedMessage","resourceCreatedMessage"]},p.toVueComponent=Object(d.a)({extends:p,dataKeys:p.getDataKeys()});var g=p,h=r(1),C=Object(h.a)(g,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"resourceController"},[r(e.getResourceHeaderType(),{tag:"component",attrs:{breadcrumbs:e.breadcrumbs,hasBottomBorder:e.headerHasBorder}},[r(e.getResourceControlsType(),{tag:"component",attrs:{controls:e.resourceControls}})],1),e._v(" "),e.resourceModel?r(e.getResourceEditType(),{ref:"editHandler",tag:"component",staticClass:"resourceEdit resourceEditType1",attrs:{ModelType:e.getModelType(),configure:e.getEditConfigurator(),model:e.resourceModel,resourceSavedMessage:e.resourceSavedMessage,resourceCreatedMessage:e.resourceCreatedMessage},on:{beforeConfigure:function(t){e.processConfigureEvent("beforeConfigure",t)},afterConfigure:function(t){e.processConfigureEvent("afterConfigure",t)},resourceModelSaved:function(t){e.processSaveEvent(t)}}}):e._e()],1)},[],!1,null,null,null);C.options.__file="baseResourceEdit.vue";t.default=C.exports}}]);