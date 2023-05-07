!function(){var e={184:function(e,t){var r;!function(){"use strict";var l={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=i.apply(null,r);s&&e.push(s)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)l.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()}},t={};function r(l){var i=t[l];if(void 0!==i)return i.exports;var o=t[l]={exports:{}};return e[l](o,o.exports,r),o.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hizzle-forms/address","title":"Address field","description":"An address text input field for forms.","category":"hizzle-forms","keywords":["form","contact","input","address"],"icon":"location-alt","parent":["hizzle-forms/form"],"version":"1.0.0","textdomain":"hizzle-forms","attributes":{"label":{"type":"string","default":"","source":"html","selector":".hizzle-forms__field-label"},"placeholder":{"type":"string","default":"","source":"attribute","selector":"input","attribute":"placeholder"},"required":{"type":"boolean","default":false,"source":"attribute","selector":"input","attribute":"required"},"help":{"type":"string","default":"","source":"html","selector":".hizzle-forms__field-help-text"},"instanceID":{"type":"string","default":"","source":"attribute","selector":"input","attribute":"data-instance-id"},"autocomplete":{"type":"string","default":"text","source":"attribute","selector":"input","attribute":"autocomplete"},"value":{"type":"string","default":"","source":"attribute","selector":"input","attribute":"value"}},"example":{"attributes":{"label":"Address","placeholder":"Enter your address","required":true,"help":"We\'ll never share your address with anyone else.","autocomplete":"address-line1"}},"supports":{"anchor":true,"spacing":{"margin":true,"padding":true},"reusable":false},"editorScript":"file:./index.js"}'),t=window.wp.element;function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e},l.apply(this,arguments)}var i=r(184),o=r.n(i),s=window.lodash,a=window.wp.blockEditor,n=window.wp.i18n,c=window.wp.components,u=e=>{let{attributes:r,hidePlaceholder:l,setAttributes:i}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(c.PanelBody,{title:(0,n.__)("Field Settings","hizzle-forms")},(0,t.createElement)(c.ToggleControl,{label:(0,n.__)("Field is required","hizzle-forms"),className:"hizzle-forms-field-label__required",checked:r.required,onChange:e=>i({required:e})}),!l&&(0,t.createElement)(c.TextControl,{label:(0,n.__)("Placeholder text","hizzle-forms"),value:r.placeholder||"",onChange:e=>i({placeholder:e}),help:(0,n.__)("Show visitors an example of the type of content expected. Otherwise, leave blank.","hizzle-forms")}))))};function d(e){let{attributes:r,setAttributes:i,disableLabel:c,disableHelpText:d,children:m,className:z,isSelected:f,...h}=e;const p=!d&&(f||!(0,s.isEmpty)(r.help)),_=!c&&(f||!(0,s.isEmpty)(r.label));return(0,t.createElement)("div",(0,a.useBlockProps)({className:o()("hizzle-forms-field",z)}),_&&(0,t.createElement)(a.RichText,{tagName:"label",value:r.label,className:"hizzle-forms__field-label",onChange:e=>{i({label:e})},placeholder:(0,n.__)("Add label…","hizzle-forms")}),m,p&&(0,t.createElement)(a.RichText,{tagName:"p",value:r.help,className:"hizzle-forms__field-help-text",onChange:e=>i({help:e}),placeholder:(0,n.__)("Add help text…","hizzle-forms")}),(0,t.createElement)(u,l({setAttributes:i,attributes:r},h)))}const m=e=>{let{label:r,instanceID:l}=e;return r?(0,t.createElement)(a.RichText.Content,{tagName:"label",className:"hizzle-forms__field-label",htmlFor:`hizzle-forms-field-${l}`,value:r}):null},z=e=>{let{help:r}=e;return r?(0,t.createElement)(a.RichText.Content,{tagName:"p",className:"hizzle-forms__field-help-text",value:r}):null};function f(e){let{attributes:r,children:l,className:i,customClass:s}=e;const n=o()("hizzle-forms-field",i,s),c=a.useBlockProps.save({className:n});return(0,t.createElement)("div",c,(0,t.createElement)(m,{label:r.label,instanceID:r.instanceID}),l,(0,t.createElement)(z,{help:r.help}))}const h="#AA00FF",p=[{name:"hizzle-name",isDefault:!0,title:(0,n.__)("Full Name","hizzle-forms"),description:(0,n.__)("Collect the full name.","hizzle-forms"),keywords:[(0,n.__)("full name","hizzle-forms"),(0,n.__)("input","hizzle-forms")],category:"hizzle-forms",attributes:{autocomplete:"name"},icon:{src:"nametag",foreground:h}},{name:"hizzle-given-name",isDefault:!0,title:(0,n.__)("First Name","hizzle-forms"),description:(0,n.__)("Collect the first name.","hizzle-forms"),keywords:[(0,n.__)("first name","hizzle-forms"),(0,n.__)("input","hizzle-forms")],category:"hizzle-forms",attributes:{autocomplete:"given-name"},icon:{src:"id",foreground:h}},{name:"hizzle-family-name",title:(0,n.__)("Last Name","hizzle-forms"),description:(0,n.__)("Collect the last name.","hizzle-forms"),keywords:[(0,n.__)("last name","hizzle-forms"),(0,n.__)("input","hizzle-forms")],category:"hizzle-forms",attributes:{autocomplete:"family-name"},icon:{src:"buddicons-groups",foreground:h}},{name:"hizzle-address-line1",isDefault:!0,title:(0,n.__)("Address Line 1","hizzle-forms"),description:(0,n.__)("Collect the first line of the address.","hizzle-forms"),keywords:[(0,n.__)("address","hizzle-forms"),(0,n.__)("input","hizzle-forms")],category:"hizzle-forms",attributes:{autocomplete:"address-line1"},icon:{src:"admin-home",foreground:h}},{name:"hizzle-address-line2",title:(0,n.__)("Address Line 2","hizzle-forms"),description:(0,n.__)("Collect the second line of the address.","hizzle-forms"),keywords:[(0,n.__)("address","hizzle-forms"),(0,n.__)("input","hizzle-forms")],category:"hizzle-forms",attributes:{autocomplete:"address-line2"},icon:{src:"building",foreground:h}},{name:"hizzle-address-city",title:(0,n.__)("City","hizzle-forms"),description:(0,n.__)("Collect the city.","hizzle-forms"),keywords:[(0,n.__)("address","hizzle-forms"),(0,n.__)("city","hizzle-forms"),(0,n.__)("input","hizzle-forms")],category:"hizzle-forms",attributes:{autocomplete:"address-level2"},icon:{src:"location",foreground:h}},{name:"hizzle-address-state",title:(0,n.__)("State","hizzle-forms"),description:(0,n.__)("Collect the state.","hizzle-forms"),keywords:[(0,n.__)("address","hizzle-forms"),(0,n.__)("state","hizzle-forms"),(0,n.__)("input","hizzle-forms")],category:"hizzle-forms",attributes:{autocomplete:"address-level1"},icon:{src:"location-alt",foreground:h}},{name:"hizzle-address-zip",title:(0,n.__)("Zip Code","hizzle-forms"),description:(0,n.__)("Collect the zip code.","hizzle-forms"),keywords:[(0,n.__)("address","hizzle-forms"),(0,n.__)("zip","hizzle-forms"),(0,n.__)("postal code","hizzle-forms"),(0,n.__)("input","hizzle-forms")],category:"hizzle-forms",attributes:{autocomplete:"postal-code"},icon:{src:"admin-multisite",foreground:h}},{name:"hizzle-address-country",title:(0,n.__)("Country","hizzle-forms"),description:(0,n.__)("Collect the country.","hizzle-forms"),keywords:[(0,n.__)("address","hizzle-forms"),(0,n.__)("country","hizzle-forms"),(0,n.__)("input","hizzle-forms")],category:"hizzle-forms",attributes:{autocomplete:"country"},icon:{src:"admin-site-alt",foreground:h}},{name:"hizzle-organization",title:(0,n.__)("Company / Organization","hizzle-forms"),description:(0,n.__)("Collect the company or organization.","hizzle-forms"),keywords:[(0,n.__)("organization","hizzle-forms"),(0,n.__)("company","hizzle-forms"),(0,n.__)("input","hizzle-forms")],category:"hizzle-forms",attributes:{autocomplete:"organization"},icon:{src:"groups",foreground:h}}];p.forEach((e=>{e.attributes.label=e.title,e.example={attributes:{label:e.title,placeholder:e.title,required:!0,help:e.description,autocomplete:e.attributes.autocomplete}},e.isActive||(e.isActive=(e,t)=>e.autocomplete===t.autocomplete)}));var _=p,b=window.wp.blocks;const{name:g}=e;var y,v;v={edit:e=>{let{attributes:r,setAttributes:l,clientId:i,isSelected:o}=e;return(0,t.useEffect)((()=>{r.instanceID||l({instanceID:i})}),[]),(0,t.createElement)(d,{attributes:r,setAttributes:l,isSelected:o},(0,t.createElement)("input",{type:"text",className:"hizzle-forms__field-input form-control",placeholder:r.placeholder,value:r.value?r.value:"",autoComplete:r.autocomplete,"data-instance-id":r.instanceID,onChange:e=>{l({value:e.target.value})}}))},save:e=>{let{attributes:r}=e;const l=r.instanceID||"";return(0,t.createElement)(f,{attributes:r},(0,t.createElement)("input",{type:"text",name:`hizzle-forms[${l}]`,id:`hizzle-forms-field-${l}`,className:"hizzle-forms__field-input form-control",placeholder:r.placeholder,value:r.value?r.value:"",required:r.required,autoComplete:r.autocomplete,"data-instance-id":l}))},variations:_},0!==(y=g).indexOf("hizzle-forms/")&&(y="hizzle-forms/"+y),console.log({name:y,settings:v}),"string"==typeof v.icon&&(v.icon={src:v.icon,foreground:"#AA00FF"}),(0,b.registerBlockType)(y,v)}()}();