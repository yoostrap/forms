!function(){var e={184:function(e,t){var r;!function(){"use strict";var i={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var l=n.apply(null,r);l&&e.push(l)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)i.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,r),o.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.lodash,t=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"hizzle-forms/form","title":"Contact Form","description":"Displays a form.","category":"hizzle-forms","keywords":["form","contact","input"],"icon":"forms","version":"1.0.0","textdomain":"hizzle-forms","attributes":{"emails":{"type":"array","default":[{"email":"{admin_email}","subject":"New Response: Contact Form","message":"You have received a new response to your contact form.\\n\\nHere are the details:\\n\\n{response_fields}\\n\\nThank you,\\n{site_title}\\n\\n<hr>\\nURL: {current_url} \\nIP Address: {user_ip}\\nUser Agent: {user_agent}\\nTime: {current_date} at {current_time}","sender_name":"{site_title}","reply_to":"{email}","active":true},{"email":"{email}","subject":"Thank you for contacting us","message":"Thank you for contacting us. We will be in touch with you shortly.\\n\\nHere are the details of your message:\\n\\n{response_fields}\\n\\nThank you,\\n{site_title}\\n\\n<hr>\\nURL: {current_url} \\nIP Address: {user_ip}\\nUser Agent: {user_agent}\\nTime: {current_date} at {current_time}","sender_name":"{site_title}","reply_to":"{admin_email}","active":true}]},"action":{"type":"string","default":"message"},"redirect":{"type":"string","default":""},"message":{"type":"string","default":"Thank you for contacting us. We will be in touch with you shortly."},"title":{"type":"string","default":"Contact Form"},"instanceID":{"type":"string"}},"styles":[{"name":"hizzle-default","label":"Default","isDefault":true},{"name":"hizzle-full","label":"Full"},{"name":"hizzle-wide","label":"Wide"}],"example":{"innerBlocks":[{"name":"hizzle-forms/input","attributes":{"validation":[{"name":"required"}],"label":"Name","type":"name"}},{"name":"hizzle-forms/input","attributes":{"validation":[{"name":"required"}],"type":"email","label":"Email"}},{"name":"hizzle-forms/textarea","attributes":{"validation":[{"name":"required"}],"label":"Message"}},{"name":"hizzle-forms/checkbox","attributes":{"validation":[{"name":"required"}],"label":"I agree to the terms and conditions"}},{"name":"hizzle-forms/submit","attributes":{"text":"Send Message","element":"button"}}]},"supports":{"anchor":true,"spacing":{"blockGap":true,"units":["px","em","rem","vh","vw"],"margin":false,"padding":true},"color":{"link":true,"gradients":true},"html":false},"editorScript":"file:./index.js","script":"file:./view.js","style":"file:./view.css"}'),i=window.wp.element,n=window.wp.blockEditor,o=window.wp.components,l=window.wp.i18n,a=r(184),s=r.n(a);function m(e){let{children:t}=e;return(0,i.createElement)("p",{style:{color:"rgba( 117, 117, 117, 1 )",marginBottom:"24px"}},t)}function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},z.apply(this,arguments)}const c=e=>{let{index:t,active:r,email:n,subject:a,message:s,sender_name:m,reply_to:z,setAttributes:c,canDelete:u,deleteConnection:_,insertConnection:h}=e;const f=(0,l.sprintf)((0,l.__)("Email Connection #%d","hizzle-forms"),t+1);return(0,i.createElement)(o.PanelBody,{title:f,initialOpen:!1},(0,i.createElement)(o.ToggleControl,{label:(0,l.__)("Send this email","hizzle-forms"),help:r?(0,l.__)("This email will be sent.","hizzle-forms"):(0,l.__)("This email will not be sent.","hizzle-forms"),checked:r,onChange:e=>c({active:e})}),r&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(o.TextControl,{label:(0,l.__)("Sender name","hizzle-forms"),value:m||"",placeholder:(0,l.__)("Enter a sender name","hizzle-forms"),onChange:e=>c({sender_name:e})}),(0,i.createElement)(o.TextControl,{label:(0,l.__)("Reply-to","hizzle-forms"),value:z||"",placeholder:(0,l.__)("Enter a reply-to email address","hizzle-forms"),onChange:e=>c({reply_to:e})}),(0,i.createElement)(o.TextControl,{label:(0,l.__)("Recipient","hizzle-forms"),placeholder:(0,l.__)("{admin_email}, {email}, example@gmail.com","hizzle-forms"),value:n||"",onChange:e=>c({email:e}),help:(0,l.__)("You can enter multiple email addresses separated by commas.","hizzle-forms")}),(0,i.createElement)(o.TextControl,{label:(0,l.__)("Email subject line","hizzle-forms"),value:a||"",placeholder:(0,l.__)("Enter a subject","hizzle-forms"),onChange:e=>c({subject:e})}),(0,i.createElement)(o.TextareaControl,{value:s||"",onChange:e=>c({message:e}),label:(0,l.__)("Email content","hizzle-forms"),placeholder:(0,l.__)("Enter email content…","hizzle-forms"),rows:10})),(0,i.createElement)(o.Flex,null,(0,i.createElement)(o.FlexItem,null,(0,i.createElement)(o.Button,{variant:"secondary",isSmall:!0,onClick:h},(0,l.__)("Add Connection","hizzle-forms"))),u&&(0,i.createElement)(o.FlexItem,null,(0,i.createElement)(o.Button,{isDestructive:!0,isSmall:!0,onClick:_},(0,l.__)("Delete Connection","hizzle-forms")))))};var u=e=>{let{emails:t,setAttributes:r}=e;if((0,i.useEffect)((()=>{Array.isArray(t)&&0!==t.length||r({emails:[{email:"{admin_email}",subject:(0,l.__)("New form response","hizzle-forms"),message:(0,l.__)("You have received a new response to your contact form. \n\nHere are the details:\n\n{response_fields}\n\nThank you,\n{site_title}\n\n<hr>\nURL: {current_url} \nIP Address: {user_ip}\nUser Agent: {user_agent}\nTime: {current_date} at {current_time}","hizzle-forms"),sender_name:"{site_title}",reply_to:"{email}",active:!1}]})}),[t]),!Array.isArray(t))return null;const n=t.length>1;return(0,i.createElement)(i.Fragment,null,t.map(((e,o)=>(0,i.createElement)(c,z({key:o,index:o,canDelete:n,setAttributes:e=>{const i=[...t];i[o]={...i[o],...e},r({emails:i})},deleteConnection:()=>{const e=[...t];e.splice(o,1),r({emails:e})},insertConnection:()=>{const e=[...t];e.splice(o+1,0,{email:"",subject:"",message:"",active:!1}),r({emails:e})}},e)))))};const _=["hizzle-forms/input","hizzle-forms/textarea","hizzle-forms/checkbox","hizzle-forms/radio","hizzle-forms/select","hizzle-forms/multi-checkbox","hizzle-forms/submit","core/audio","core/heading","core/image","core/list","core/paragraph","core/separator","core/spacer","core/subhead","core/video"],h=[["hizzle-forms/input",{validation:[{name:"required"}],label:(0,l.__)("Name","hizzle-forms"),type:"name"}],["hizzle-forms/input",{validation:[{name:"required"}],type:"email",label:(0,l.__)("Email","hizzle-forms")}],["hizzle-forms/textarea",{label:(0,l.__)("Message","hizzle-forms")}],["hizzle-forms/submit",{text:(0,l.__)("Contact Us","hizzle-forms")}]];var f=e=>{let{width:t=24,height:r=24}=e;return(0,i.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",width:t,height:r,viewBox:"0 0 256 256"},(0,i.createElement)(o.Path,{d:"M117.668 4.27984C124.283 1.5395 131.717 1.5395 138.332 4.27984L208.177 33.2105C214.793 35.9508 220.049 41.207 222.79 47.8228L251.72 117.668C254.461 124.283 254.46 131.717 251.72 138.332L222.79 208.177C220.049 214.793 214.793 220.049 208.177 222.79L138.332 251.72C131.717 254.46 124.283 254.46 117.668 251.72L47.8228 222.789C41.207 220.049 35.9508 214.793 33.2105 208.177L4.27984 138.332C1.5395 131.717 1.53951 124.283 4.27984 117.668L33.2105 47.8228C35.9508 41.207 41.207 35.9508 47.8228 33.2105L117.668 4.27984Z",fill:"#AA00FF"}),(0,i.createElement)(o.Path,{d:"M129.613 150.2L125.813 205C125.68 206.067 125.547 206.867 125.413 207.4C125.413 207.8 124.813 208 123.613 208H112.613C105.147 208 99.8133 206.533 96.6133 203.6C93.4133 200.667 91.8133 196.467 91.8133 191C91.8133 188.333 92.0133 183.8 92.4133 177.4C92.8133 170.867 93.3466 163.467 94.0133 155.2C94.6799 146.933 95.3466 138.2 96.0133 129C96.6799 119.8 97.3466 111.133 98.0133 103C98.6799 94.8667 99.2133 87.7333 99.6133 81.6C100.013 75.4667 100.213 71.2667 100.213 69C100.213 67 101.28 66 103.413 66H173.813C174.613 66 175.347 66.2 176.013 66.6C176.68 67 177.013 67.7333 177.013 68.8L176.213 80.6C175.947 84.6 174.813 87.8667 172.813 90.4C170.947 92.8 167.013 94 161.013 94H133.413L131.413 122.2H159.813C160.613 122.2 161.347 122.4 162.013 122.8C162.68 123.2 163.013 123.933 163.013 125L162.213 136.8C161.947 140.8 160.813 144.067 158.813 146.6C156.947 149 153.013 150.2 147.013 150.2H129.613Z",fill:"#FAFAFA"}))};const d=[{name:"hizzle-contact-form",isDefault:!0,title:(0,l.__)("Contact Form","hizzle-forms"),description:(0,l.__)("Add a contact form to your page.","hizzle-forms"),keywords:[(0,l.__)("contact","hizzle-forms"),(0,l.__)("email","hizzle-forms")],innerBlocks:[["hizzle-forms/input",{validation:[{name:"required"}],label:(0,l.__)("Name","hizzle-forms"),type:"name"}],["hizzle-forms/input",{validation:[{name:"required"}],type:"email",label:(0,l.__)("Email","hizzle-forms")}],["hizzle-forms/textarea",{label:(0,l.__)("Message","hizzle-forms")}],["hizzle-forms/submit",{text:(0,l.__)("Contact Us","hizzle-forms")}]]},{name:"hizzle-newsletter-form",title:(0,l.__)("Newsletter Sign-up","hizzle-forms"),description:(0,l.__)("A simple way to collect information from folks visiting your site.","hizzle-forms"),keywords:[(0,l.__)("subscribe","hizzle-forms"),(0,l.__)("email","hizzle-forms"),(0,l.__)("signup","hizzle-forms")],innerBlocks:[["hizzle-forms/input",{validation:[{name:"required"}],label:(0,l.__)("Name","hizzle-forms"),type:"name"}],["hizzle-forms/input",{validation:[{name:"required"}],type:"email",label:(0,l.__)("Email","hizzle-forms")}],["hizzle-forms/checkbox",{validation:[{name:"required"}],label:(0,l.__)("Agree to terms and conditions","hizzle-forms")}],["hizzle-forms/submit",{text:(0,l.__)("Subscribe","hizzle-forms")}]]},{name:"hizzle-rsvp-form",title:(0,l.__)("RSVP Form","hizzle-forms"),description:(0,l.__)("Add an RSVP form to your page","hizzle-forms"),keywords:[(0,l.__)("rsvp","hizzle-forms"),(0,l.__)("event","hizzle-forms")],innerBlocks:[["hizzle-forms/input",{validation:[{name:"required"}],label:(0,l.__)("Name","hizzle-forms"),type:"name"}],["hizzle-forms/input",{validation:[{name:"required"}],type:"email",label:(0,l.__)("Email","hizzle-forms")}],["hizzle-forms/radio",{label:(0,l.__)("Attending?","hizzle-forms"),validation:[{name:"required"}],isRadio:!0,innerBlocks:[["hizzle-forms/radio-option",{option:(0,l.__)("Yes","hizzle-forms"),selected:!0}],["hizzle-forms/radio-option",{option:(0,l.__)("No","hizzle-forms")}]]}],["hizzle-forms/textarea",{label:(0,l.__)("Other Details","hizzle-forms")}],["hizzle-forms/submit",{text:(0,l.__)("Send RSVP","hizzle-forms")}]]},{name:"hizzle-registration-form",title:(0,l.__)("Registration Form","hizzle-forms"),description:(0,l.__)("Add a Registration form to your page","hizzle-forms"),keywords:[(0,l.__)("register","hizzle-forms"),(0,l.__)("event","hizzle-forms")],innerBlocks:[["hizzle-forms/input",{validation:[{name:"required"}],label:(0,l.__)("Name","hizzle-forms"),type:"name"}],["hizzle-forms/input",{validation:[{name:"required"}],type:"email",label:(0,l.__)("Email","hizzle-forms")}],["hizzle-forms/input",{type:"tel",label:(0,l.__)("Phone","hizzle-forms")}],["hizzle-forms/select",{label:(0,l.__)("How did you hear about us?","hizzle-forms"),value:(0,l.__)("Search Engine","hizzle-forms"),options:[(0,l.__)("Search Engine","hizzle-forms"),(0,l.__)("Social Media","hizzle-forms"),(0,l.__)("TV","hizzle-forms"),(0,l.__)("Radio","hizzle-forms"),(0,l.__)("Friend or Family","hizzle-forms")]}],["hizzle-forms/textarea",{label:(0,l.__)("Other Details","hizzle-forms")}],["hizzle-forms/submit",{text:(0,l.__)("Send","hizzle-forms")}]]},{name:"hizzle-appointment-form",title:(0,l.__)("Appointment Form","hizzle-forms"),description:(0,l.__)("Add an Appointment booking form to your page","hizzle-forms"),keywords:[(0,l.__)("appointment","hizzle-forms"),(0,l.__)("event","hizzle-forms")],innerBlocks:[["hizzle-forms/input",{validation:[{name:"required"}],label:(0,l.__)("Name","hizzle-forms"),type:"name"}],["hizzle-forms/input",{validation:[{name:"required"}],type:"tel",label:(0,l.__)("Email","hizzle-forms")}],["hizzle-forms/input",{validation:[{name:"required"}],type:"tel",label:(0,l.__)("Phone","hizzle-forms")}],["hizzle-forms/input",{type:"tel",label:(0,l.__)("Date","hizzle-forms"),validation:[{name:"required"}]}],["hizzle-forms/radio",{label:(0,l.__)("Time","hizzle-forms"),validation:[{name:"required"}],isRadio:!0,innerBlocks:[["hizzle-forms/radio-option",{option:(0,l.__)("Morning","hizzle-forms"),selected:!0}],["hizzle-forms/radio-option",{option:(0,l.__)("Afternoon","hizzle-forms")}]]}],["hizzle-forms/textarea",{label:(0,l.__)("Notes","hizzle-forms")}],["hizzle-forms/submit",{text:(0,l.__)("Book Appointment","hizzle-forms")}]]},{name:"hizzle-feedback-form",title:(0,l.__)("Feedback Form","hizzle-forms"),description:(0,l.__)("Add a Feedback form to your page","hizzle-forms"),keywords:[(0,l.__)("feedback","hizzle-forms"),(0,l.__)("event","hizzle-forms")],innerBlocks:[["hizzle-forms/input",{validation:[{name:"required"}],label:(0,l.__)("Name","hizzle-forms"),type:"name"}],["hizzle-forms/input",{validation:[{name:"required"}],type:"tel",label:(0,l.__)("Email","hizzle-forms")}],{name:"hizzle-forms/radio",attributes:{label:(0,l.__)("Please rate our website","hizzle-forms"),validation:[{name:"required"}],isRadio:!0},innerBlocks:[{name:"hizzle-forms/radio-option",attributes:{option:(0,l.__)("1 - Very Bad","hizzle-forms"),selected:!0}},{name:"hizzle-forms/radio-option",attributes:{option:(0,l.__)("2 - Poor","hizzle-forms")}},{name:"hizzle-forms/radio-option",attributes:{option:(0,l.__)("3 - Average","hizzle-forms")}},{name:"hizzle-forms/radio-option",attributes:{option:(0,l.__)("4 - Good","hizzle-forms")}},{name:"hizzle-forms/radio-option",attributes:{option:(0,l.__)("5 - Excellent","hizzle-forms")}}]},["hizzle-forms/textarea",{label:(0,l.__)("How could we improve?","hizzle-forms")}],["hizzle-forms/submit",{text:(0,l.__)("Send Feedback","hizzle-forms")}]]}];d.forEach((e=>{var t;e.attributes={emails:[{email:"{admin_email}",subject:(0,l.__)("New Response: Contact Form","hizzle-forms"),message:(0,l.__)("You have received a new response to your contact form. \n\nHere are the details:\n\n{response_fields}\n\nThank you,\n{site_title}\n\n<hr>\nURL: {current_url} \n{user_ip}\nIP Address: {user_ip}\nUser Agent: {user_agent}\nTime: {current_date} at {current_time}","hizzle-forms"),sender_name:"{site_title}",reply_to:"{email}",active:!0},{email:"{email}",subject:(0,l.__)("Thank you for contacting us","hizzle-forms"),message:(0,l.__)("Thank you for contacting us. We will be in touch with you shortly.\n\nHere are the details of your message:\n\n{response_fields}\n\nThank you,\n{site_title}\n\n<hr>\nURL: {current_url} \nIP Address: {user_ip}\nUser Agent: {user_agent}\nTime: {current_date} at {current_time}","hizzle-forms"),sender_name:"{site_title}",reply_to:"{admin_email}",active:!0}],action:"message",redirect:"",message:(0,l.__)("Thank you for contacting us. We will be in touch with you shortly.","hizzle-forms"),title:e.title},e.category="hizzle-forms",e.icon=f,e.example={attributes:{...e.attributes},innerBlocks:(t=e.innerBlocks,t.map((e=>{if(!Array.isArray(e))return e;let[t,r,i]=e;return r=r?{...r}:{},i=i?[...i]:[],{name:t,attributes:r,innerBlocks:i}})))},console.log(e.example),e.isActive||(e.isActive=["title"])}));var p=d,b=window.wp.blocks;function g(e,t){0!==e.indexOf("hizzle-forms/")&&(e="hizzle-forms/"+e),"string"==typeof t.icon&&(t.icon={src:t.icon,foreground:"#AA00FF"}),(0,b.registerBlockType)(e,t)}var y=window.wp.data,v=window.wp.apiFetch,x=r.n(v);g("hizzle-forms/submit",{apiVersion:2,title:(0,l.__)("Submit Button","hizzle-forms"),description:(0,l.__)("A button to submit the form.","hizzle-forms"),icon:"button",category:"hizzle-forms",parent:["hizzle-forms/form"],attributes:{text:{type:"string",source:"html",selector:"button",default:(0,l.__)("Submit","hizzle-forms")},backgroundColor:{type:"string"},textColor:{type:"string"},gradient:{type:"string"}},supports:{anchor:!0,align:!1,alignWide:!1,color:{__experimentalSkipSerialization:!0,gradients:!0,__experimentalDefaultControls:{background:!0,text:!0}},typography:{fontSize:!0,lineHeight:!0,__experimentalFontFamily:!0,__experimentalFontWeight:!0,__experimentalFontStyle:!0,__experimentalTextTransform:!0,__experimentalTextDecoration:!0,__experimentalLetterSpacing:!0,__experimentalDefaultControls:{fontSize:!0}},reusable:!1,shadow:!0,spacing:{__experimentalSkipSerialization:!0,padding:["horizontal","vertical"],__experimentalDefaultControls:{padding:!0}},__experimentalBorder:{color:!0,radius:!0,style:!0,width:!0,__experimentalSkipSerialization:!0,__experimentalDefaultControls:{color:!0,radius:!0,style:!0,width:!0}},__experimentalSelector:".wp-block-hizzle-forms-submit button"},edit:e=>{let{attributes:t,setAttributes:r}=e;const{text:o}=t,a=(0,n.useBlockProps)({className:"hizzle-forms__submit-button"}),m=(0,n.__experimentalUseBorderProps)(t),z=(0,n.__experimentalUseColorProps)(t),c=(0,n.__experimentalGetSpacingClassesAndStyles)(t);return(0,i.createElement)(i.Fragment,null,(0,i.createElement)("div",a,(0,i.createElement)(n.RichText,{"aria-label":(0,l.__)("Button text"),placeholder:(0,l.__)("Add button text…"),value:o,onChange:e=>{r({text:e.replace(/<\/?a[^>]*>/g,"")})},withoutInteractiveFormatting:!0,className:s()("button btn",z.className,m.className,(0,n.__experimentalGetElementClassName)("button")),style:{...m.style,...z.style,...c.style},identifier:"text"})))},save:e=>{let{attributes:t}=e;const{text:r}=t,o=n.useBlockProps.save({className:"hizzle-forms__submit-button"}),a=(0,n.__experimentalGetBorderClassesAndStyles)(t),m=(0,n.__experimentalGetColorClassesAndStyles)(t),z=(0,n.__experimentalGetSpacingClassesAndStyles)(t),c=s()("button btn",m.className,a.className,(0,n.__experimentalGetElementClassName)("button")),u={...a.style,...m.style,...z.style};return(0,i.createElement)("div",o,(0,i.createElement)(n.RichText.Content,{tagName:"button",className:c,type:"submit",style:u,value:r||(0,l.__)("Submit","hizzle-forms")}))}});const{name:C}=t;function k(t){const{attributes:r,innerBlocks:i,name:n}=t,o={name:n,attributes:r};return!!n.startsWith("hizzle-forms/")&&(Array.isArray(i)&&i.length?o.innerBlocks=(0,e.compact)(i.map(k)):o.innerBlocks=[],o)}function w(e){let t=[];return e.forEach((e=>{"hizzle-forms/form"===e.name?t.push(k(e)):Array.isArray(e.innerBlocks)&&e.innerBlocks.length&&(t=t.concat(w(e.innerBlocks)))})),t}g(C,{edit:function(e){let{attributes:t,setAttributes:r,clientId:a}=e;const{emails:s,action:z,redirect:c,message:f,title:d,instanceID:p}=t;(0,i.useEffect)((()=>{p||r({instanceID:a})}),[]);const b=(0,n.useInnerBlocksProps)((0,n.useBlockProps)({className:"hizzle-forms"}),{allowedBlocks:_,template:h});return(0,i.createElement)(i.Fragment,null,(0,i.createElement)(n.InspectorControls,null,(0,i.createElement)(o.PanelBody,{title:(0,l.__)("Form Settings","hizzle-forms")},(0,i.createElement)(o.TextControl,{label:(0,l.__)("Form Name","hizzle-forms"),value:d,placeholder:(0,l.__)("Contact Form.","hizzle-forms"),onChange:e=>r({title:e})})),(0,i.createElement)(o.PanelBody,{title:(0,l.__)("Submission Settings","hizzle-forms"),initialOpen:!1},(0,i.createElement)(i.Fragment,null,(0,i.createElement)(m,null,(0,l.__)("Customize the view after form submission:","hizzle-forms")),(0,i.createElement)(o.SelectControl,{label:(0,l.__)("On Submission","hizzle-forms"),value:z,options:[{label:(0,l.__)("Show a success message","hizzle-forms"),value:"message"},{label:(0,l.__)("Redirect the user","hizzle-forms"),value:"redirect"}],onChange:e=>r({customThankyou:e})}),"message"===z&&(0,i.createElement)(o.TextareaControl,{label:(0,l.__)("Success Message","hizzle-forms"),value:f,placeholder:(0,l.__)("Thank you for contacting us. We will be in touch with you shortly.","hizzle-forms"),onChange:e=>r({message:e})}),"redirect"===z&&(0,i.createElement)(o.BaseControl,{label:(0,l.__)("Redirect URL","hizzle-forms"),id:`hizzle-forms-${instanceId}-thankyou-url`},(0,i.createElement)(n.URLInput,{id:`hizzle-forms-${instanceId}-thankyou-url`,value:c,className:"hizzle-forms__thankyou-redirect-url",onChange:e=>r({redirect:e})})))),(0,i.createElement)(u,{emails:s,setAttributes:r})),(0,i.createElement)("div",b))},save:e=>{let{attributes:t}=e;const r={"data-instance-id":t.instanceID||"",method:"POST"};return(0,i.createElement)("form",z({},n.useBlockProps.save(r),{novalidate:!0}),(0,i.createElement)(n.InnerBlocks.Content,null),(0,i.createElement)("div",{className:"hizzle-forms__form-error"}),(0,i.createElement)("div",{className:"hizzle-forms-spinner__wrapper"},(0,i.createElement)("div",{className:"hizzle-forms-spinner"})))},variations:p,icon:f});let E=!1;(0,y.subscribe)((()=>{if(E)return;if(!(0,y.select)("core/block-editor"))return;const e={};if((0,y.select)("core/editor")){const{isSavingPost:t,isAutosavingPost:r,getCurrentPostId:i}=(0,y.select)("core/editor");if(!t()||r())return;e.post_id=i()}else{if(!(0,y.select)("core/edit-site"))return;{const{isSaveViewOpened:t,getEditedPostId:r}=(0,y.select)("core/editor");if(!t())return;e.mode="site",e.template=r()}}const t=w((0,y.select)("core/block-editor").getBlocks());E=!0,x()({path:"/hizzle/v1/forms/sync",method:"POST",data:{...e,forms:t}}).finally((()=>{E=!1}))}))}()}();