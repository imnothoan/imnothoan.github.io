import{c as n,a as g,r as i,j as t}from"./index-DJjIf6GW.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=n("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=n("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=n("IdCard",[["path",{d:"M16 10h2",key:"8sgtl7"}],["path",{d:"M16 14h2",key:"epxaof"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0",key:"n6f512"}],["circle",{cx:"9",cy:"11",r:"2",key:"yxgjnd"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=n("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);function v({className:d="",compact:h=!1}){const{language:s,setLanguage:m,availableLanguages:o,t:x}=g(),[r,l]=i.useState(!1),c=i.useRef(null);i.useEffect(()=>{const e=y=>{c.current&&!c.current.contains(y.target)&&l(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const a=o.find(e=>e.code===s),p=e=>{m(e),l(!1)};return h?t.jsxs("div",{className:`relative ${d}`,ref:c,children:[t.jsx("button",{onClick:()=>l(!r),className:"flex items-center space-x-1 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-600",title:x("language.select"),children:t.jsx("span",{className:"text-lg",children:a==null?void 0:a.flag})}),r&&t.jsx("div",{className:"absolute right-0 mt-1 bg-paper rounded-lg shadow-lg border border-gray-200 py-1 z-50 min-w-[140px]",children:o.map(e=>t.jsxs("button",{onClick:()=>p(e.code),className:`w-full flex items-center space-x-2 px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${s===e.code?"bg-primary-50 text-primary":"text-gray-700"}`,children:[t.jsx("span",{className:"text-lg",children:e.flag}),t.jsx("span",{children:e.name})]},e.code))})]}):t.jsxs("div",{className:`relative ${d}`,ref:c,children:[t.jsxs("button",{onClick:()=>l(!r),className:"flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600",title:x("language.select"),children:[t.jsx(u,{className:"w-4 h-4"}),t.jsx("span",{className:"text-sm font-medium",children:a==null?void 0:a.name}),t.jsx("span",{className:"text-lg",children:a==null?void 0:a.flag})]}),r&&t.jsx("div",{className:"absolute right-0 mt-1 bg-paper rounded-lg shadow-lg border border-gray-200 py-1 z-50 min-w-[160px]",children:o.map(e=>t.jsxs("button",{onClick:()=>p(e.code),className:`w-full flex items-center space-x-3 px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${s===e.code?"bg-primary-50 text-primary font-medium":"text-gray-700"}`,children:[t.jsx("span",{className:"text-lg",children:e.flag}),t.jsx("span",{children:e.name}),s===e.code&&t.jsx("span",{className:"ml-auto text-primary",children:"✓"})]},e.code))})]})}export{b as F,k as I,v as L,j as M};
