var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(n)}function l(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,n,o,i){return t[1]&&i?e(o.ctx.slice(),t[1](i(n))):o.ctx}function c(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function u(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function h(){return d("")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:b(t,o,e[o])}function g(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function _(t,e,n){t.classList[n?"add":"remove"](e)}class v{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=f(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)r(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(p)}}let w;function x(t){w=t}function k(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const D=[],N=[],A=[],I=[],B=Promise.resolve();let L=!1;function P(t){A.push(t)}const T=new Set;let j=0;function E(){const t=w;do{for(;j<D.length;){const t=D[j];j++,x(t),F(t.$$)}for(x(null),D.length=0,j=0;N.length;)N.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];T.has(e)||(T.add(e),e())}A.length=0}while(D.length);for(;I.length;)I.pop()();L=!1,T.clear(),x(t)}function F(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const G=new Set;let U;function O(){U={r:0,c:[],p:U}}function q(){U.r||i(U.c),U=U.p}function W(t,e){t&&t.i&&(G.delete(t),t.i(e))}function M(t,e,n,o){if(t&&t.o){if(G.has(t))return;G.add(t),U.c.push((()=>{G.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const S="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function z(t){t&&t.c()}function C(t,e,o,a){const{fragment:s,on_mount:c,on_destroy:r,after_update:p}=t.$$;s&&s.m(e,o),a||P((()=>{const e=c.map(n).filter(l);r?r.push(...e):i(e),t.$$.on_mount=[]})),p.forEach(P)}function H(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(D.push(t),L||(L=!0,B.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,l,a,s,c,r,u=[-1]){const f=w;x(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};r&&r(d.root);let m=!1;if(d.ctx=l?l(e,n.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),m&&Q(e,t)),n})):[],d.update(),m=!0,i(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&W(e.$$.fragment),C(e,n.target,n.anchor,n.customElement),E()}x(f)}class Y{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(t){let n,o,i,l,a,u,d,h,b=t[9]()+"";const g=t[17].default,w=function(t,e,n,o){if(t){const i=s(t,e,n,o);return t[0](i)}}(g,t,t[16],null);let x=[{id:t[2]},{class:l="flex items-center place-content-center relative rounded-full cursor-pointer "+t[1]+" "+t[5]},{style:a=t[4]+" "+("shape"!==t[8].template.name?`background: ${t[7]};`:"")+" "+t[6]},t[0]],k={};for(let t=0;t<x.length;t+=1)k=e(k,x[t]);return{c(){n=f("div"),o=new v,i=m(),w&&w.c(),o.a=i,y(n,k),_(n,"shadow-md","classic"===t[8].template.name),_(n,"fab-rotate-animation",t[3]),_(n,"svelte-11z2u68",!0)},m(e,l){r(e,n,l),o.m(b,n),c(n,i),w&&w.m(n,null),u=!0,d||(h=$(n,"click",t[18]),d=!0)},p(t,[e]){w&&w.p&&(!u||65536&e)&&function(t,e,n,o,i,l){if(i){const a=s(e,n,o,l);t.p(a,i)}}(w,g,t,t[16],u?function(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}(g,t[16],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[16]),null),y(n,k=function(t,e){const n={},o={},i={$$scope:1};let l=t.length;for(;l--;){const a=t[l],s=e[l];if(s){for(const t in a)t in s||(o[t]=1);for(const t in s)i[t]||(n[t]=s[t],i[t]=1);t[l]=s}else for(const t in a)i[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(x,[(!u||4&e)&&{id:t[2]},(!u||34&e&&l!==(l="flex items-center place-content-center relative rounded-full cursor-pointer "+t[1]+" "+t[5]))&&{class:l},(!u||208&e&&a!==(a=t[4]+" "+("shape"!==t[8].template.name?`background: ${t[7]};`:"")+" "+t[6]))&&{style:a},1&e&&t[0]])),_(n,"shadow-md","classic"===t[8].template.name),_(n,"fab-rotate-animation",t[3]),_(n,"svelte-11z2u68",!0)},i(t){u||(W(w,t),u=!0)},o(t){M(w,t),u=!1},d(t){t&&p(n),w&&w.d(t),d=!1,h()}}}function K(t,e,n){let o,{$$slots:i={},$$scope:l}=e,{id:a=null}=e,{fab:s={}}=e,{data:c={}}=e,{animation:r={}}=e,{shape:p=""}=e,{display:u=!0}=e,{rippleAnimation:f=!1}=e,{rotateAnimation:d=!1}=e,{classNames:m="fab"}=e,{style:h=""}=e,{fab_design:$}=window.FAB_PLUGIN.options,b="",y="",g=!1;r.in=r.in?r.in:"",r.out=r.out?r.out:"",r.timeout=r.timeout?r.timeout:250,m+=" animate__animated",m+="shape"===$.template.name&&p?` fab-template-shape-${p}`:"",o=s.template&&s.template.color?s.template.color:$.template.color;return c&&(c=Object.keys(c).reduce((function(t,e){return t[`data-${e}`]=c[e],t}),{})),t.$$set=t=>{"id"in t&&n(2,a=t.id),"fab"in t&&n(11,s=t.fab),"data"in t&&n(0,c=t.data),"animation"in t&&n(10,r=t.animation),"shape"in t&&n(12,p=t.shape),"display"in t&&n(13,u=t.display),"rippleAnimation"in t&&n(14,f=t.rippleAnimation),"rotateAnimation"in t&&n(3,d=t.rotateAnimation),"classNames"in t&&n(1,m=t.classNames),"style"in t&&n(4,h=t.style),"$$scope"in t&&n(16,l=t.$$scope)},t.$$.update=()=>{41984&t.$$.dirty&&(u?(n(5,b=` animate__${r.in} `),n(6,y="display: flex;")):g&&r.out?n(5,b=` animate__${r.out} `):(n(6,y="display: none;"),n(15,g=!0)))},[c,m,a,d,h,b,y,o,$,()=>{let t=s.template?s.template.color:$.template.color;return"ripple"===r.in&&f?`\n            <div class="animation-ripple" style="background: ${t};"></div>\n            <div class="animation-ripple" style="background: ${t}; animation-delay: 0.6s;"></div>\n        `:""},r,s,p,u,f,g,l,i,function(e){k.call(this,t,e)}]}class R extends Y{constructor(t){super(),X(this,t,K,J,a,{id:2,fab:11,data:0,animation:10,shape:12,display:13,rippleAnimation:14,rotateAnimation:3,classNames:1,style:4})}}const{window:V}=S;function Z(t){let e,n,o;return{c(){e=f("em"),n=m(),o=f("div"),b(e,"class",t[4].icon_class?t[4].icon_class:"fas fa-chevron-up"),g(e,"color",t[1].icon.color),b(o,"class","bg-shape"),g(o,"background",t[1].button.color)},m(t,i){r(t,e,i),r(t,n,i),r(t,o,i)},p(t,n){2&n&&g(e,"color",t[1].icon.color),2&n&&g(o,"background",t[1].button.color)},d(t){t&&p(e),t&&p(n),t&&p(o)}}}function tt(t){let e,n,o,i,l,a=!1,s=()=>{a=!1};P(t[5]);let c=t[4]&&function(t){let e,n;return e=new R({props:{id:"fab-link-"+t[4].ID,data:{id:t[4].ID},display:t[2],rippleAnimation:!1,classNames:"fab fab-scroll-to-top fab-links",animation:{in:t[4].module.options.animation.children.in.value,out:t[4].module.options.animation.children.out.value,timeout:t[4].module.options.animation.children.duration.value},shape:t[4].template.shape?t[4].template.shape:t[3].template.shape,style:`\n            --animate-duration: ${t[4].module.options.animation.children.duration.value/1e3}s;\n         `,$$slots:{default:[Z]},$$scope:{ctx:t}}}),e.$on("click",t[6]),{c(){z(e.$$.fragment)},m(t,o){C(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.display=t[2]),258&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}(t);return{c(){c&&c.c(),n=h()},m(p,u){c&&c.m(p,u),r(p,n,u),o=!0,i||(l=$(V,"scroll",(()=>{a=!0,clearTimeout(e),e=setTimeout(s,100),t[5]()})),i=!0)},p(t,[n]){1&n&&!a&&(a=!0,clearTimeout(e),scrollTo(V.pageXOffset,t[0]),e=setTimeout(s,100)),t[4]&&c.p(t,n)},i(t){o||(W(c),o=!0)},o(t){M(c),o=!1},d(t){c&&c.d(t),t&&p(n),i=!1,l()}}}function et(t,e,n){let o,i,{fab_design:l}=window.FAB_PLUGIN.options,a=window.FAB_PLUGIN.to_display.find((t=>"scrolltotop"===t.type)),s={},c=a?a.module.options.offset.value:0;a&&(s={button:{color:a.template.color?a.template.color:l.template.color},icon:{color:a.template.icon.color?a.template.icon.color:l.template.icon.color},animation:{in:`animate__${a.module.options.animation.children.in.value}`,out:`animate__${a.module.options.animation.children.out.value}`,class:""}});return t.$$.update=()=>{1&t.$$.dirty&&n(2,i=o>c)},[o,s,i,l,a,function(){n(0,o=V.pageYOffset)},()=>{window.FAB_PLUGIN.modules.button.scrollTo(document.documentElement,0,a.module.options.duration.value)}]}class nt extends Y{constructor(t){super(),X(this,t,et,tt,a,{})}}function ot(t){let e,n,o,l,a,s,u,d,h,y,v,w,x,k,D,N,A,I=t[3].tooltip.label&&it(t);return{c(){e=f("div"),n=f("a"),o=f("em"),a=m(),s=f("div"),x=m(),I&&I.c(),b(o,"class",l="relative "+(t[0].icon_class?t[0].icon_class:"fas fa-chevron-up")+" svelte-9oite"),g(o,"color",t[3].icon.color),b(s,"class","bg-shape svelte-9oite"),g(s,"--background-color",t[3].button.color),_(s,"fab-bg-shape-active","shape"===t[6].template.name),b(n,"id",u=`fab-link-${t[0].ID}`),b(n,"title",d=t[0].title),b(n,"href",h=t[5].includes(t[0].type)?t[0].link:void 0),b(n,"target",y="link"===t[0].type&&t[0].linkBehavior?"_blank":void 0),b(n,"data-id",v=t[0].ID?t[0].ID:void 0),b(n,"class",w="flex flex-col h-auto p-3 items-center place-content-center text-xl cursor-pointer "+t[1]+" "+`fab-link-type-${t[0].type} `+t[4]+" "+t[3].button.shape+" svelte-9oite"),_(n,"simptip-position-right","left"===t[6].layout.position),_(n,"simptip-position-left","left"!==t[6].layout.position),b(e,"class",k="fab-link-container flex items-center place-content-center "+(t[8]||"classic"!==t[6].template.name?"":"bg-white rounded-full border border-slate-100 shadow-md mt-3")),b(e,"style",D=t[8]&&1!==t[7].length||!t[2]?"":"width:auto;"),_(e,"px-4",t[2])},m(i,l){r(i,e,l),c(e,n),c(n,o),c(n,a),c(n,s),c(e,x),I&&I.m(e,null),N||(A=[$(e,"mouseenter",t[10]),$(e,"mouseleave",t[11])],N=!0)},p(t,i){1&i&&l!==(l="relative "+(t[0].icon_class?t[0].icon_class:"fas fa-chevron-up")+" svelte-9oite")&&b(o,"class",l),8&i&&g(o,"color",t[3].icon.color),8&i&&g(s,"--background-color",t[3].button.color),1&i&&u!==(u=`fab-link-${t[0].ID}`)&&b(n,"id",u),1&i&&d!==(d=t[0].title)&&b(n,"title",d),1&i&&h!==(h=t[5].includes(t[0].type)?t[0].link:void 0)&&b(n,"href",h),1&i&&y!==(y="link"===t[0].type&&t[0].linkBehavior?"_blank":void 0)&&b(n,"target",y),1&i&&v!==(v=t[0].ID?t[0].ID:void 0)&&b(n,"data-id",v),27&i&&w!==(w="flex flex-col h-auto p-3 items-center place-content-center text-xl cursor-pointer "+t[1]+" "+`fab-link-type-${t[0].type} `+t[4]+" "+t[3].button.shape+" svelte-9oite")&&b(n,"class",w),91&i&&_(n,"simptip-position-right","left"===t[6].layout.position),91&i&&_(n,"simptip-position-left","left"!==t[6].layout.position),t[3].tooltip.label?I?I.p(t,i):(I=it(t),I.c(),I.m(e,null)):I&&(I.d(1),I=null),4&i&&D!==(D=t[8]&&1!==t[7].length||!t[2]?"":"width:auto;")&&b(e,"style",D),4&i&&_(e,"px-4",t[2])},d(t){t&&p(e),I&&I.d(),N=!1,i(A)}}}function it(t){let e,n,o,i,a,s,u=t[3].tooltip.label+"";return{c(){e=f("span"),n=d(u),b(e,"class",o="font-sans animate__animated animate__fadeIn text-md cursor-pointer "+(t[3].button.shape?"px-4 pt-4 ml-3 rounded-md":"pr-2")+" svelte-9oite"),b(e,"style",i="color: "+t[3].tooltip.font.color+"; "+(t[2]?"":"width: auto;")+" "+(t[3].button.shape?`background-color: ${t[3].button.color}; height: 80%;`:"")),_(e,"hidden",!t[2])},m(o,i){r(o,e,i),c(e,n),a||(s=$(e,"click",(function(){l(t[9](`fab-link-${t[0].ID}`))&&t[9](`fab-link-${t[0].ID}`).apply(this,arguments)})),a=!0)},p(l,a){t=l,8&a&&u!==(u=t[3].tooltip.label+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(n,u),8&a&&o!==(o="font-sans animate__animated animate__fadeIn text-md cursor-pointer "+(t[3].button.shape?"px-4 pt-4 ml-3 rounded-md":"pr-2")+" svelte-9oite")&&b(e,"class",o),12&a&&i!==(i="color: "+t[3].tooltip.font.color+"; "+(t[2]?"":"width: auto;")+" "+(t[3].button.shape?`background-color: ${t[3].button.color}; height: 80%;`:""))&&b(e,"style",i),12&a&&_(e,"hidden",!t[2])},d(t){t&&p(e),a=!1,s()}}}function lt(e){let n,o=e[0]&&ot(e);return{c(){o&&o.c(),n=h()},m(t,e){o&&o.m(t,e),r(t,n,e)},p(t,[e]){t[0]?o?o.p(t,e):(o=ot(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&p(n)}}}function at(t,e,n){let{fab_item:o={}}=e,{classNames:i="fab-links "}=e,{tooltipDisplay:l=!1}=e,{fab_design:a}=window.FAB_PLUGIN.options,{to_display:s}=window.FAB_PLUGIN,c={},r="",p=!!i.includes("fab-single-collection");c={button:{color:o.template.color?o.template.color:a.template.color},icon:{color:o.template.icon.color?o.template.icon.color:a.template.icon.color},tooltip:{label:a.tooltip.enable?o.title:void 0,color:o.tooltip.color?o.tooltip.color:a.template.color,font:{color:o.tooltip.font.color?o.tooltip.font.color:a.template.icon.color}}},"classic"===a.template.name?(c.button.shape="",c.icon.color=p||"#fff"!==c.icon.color?c.icon.color:void 0,c.tooltip.font.color=o.tooltip.font.color?c.tooltip.font.color:c.icon.color):"shape"===a.template.name&&(c.button.shape="none"!=o.template.shape?o.template.shape:a.template.shape,c.button.shape=`fab-template-shape-${c.button.shape}`),r=o.responsive.device.mobile?"flex ":"hidden ",r+=o.responsive.device.tablet?"sm:flex ":"sm:hidden ",r+=o.responsive.device.desktop?"lg:flex ":"lg:hidden ";return t.$$set=t=>{"fab_item"in t&&n(0,o=t.fab_item),"classNames"in t&&n(1,i=t.classNames),"tooltipDisplay"in t&&n(2,l=t.tooltipDisplay)},[o,i,l,c,r,["link","latest_post_link"],a,s,p,t=>{jQuery(`#${t}`).click()},function(e){k.call(this,t,e)},function(e){k.call(this,t,e)}]}class st extends Y{constructor(t){super(),X(this,t,at,lt,a,{fab_item:0,classNames:1,tooltipDisplay:2})}}class ct{static check(t){let{mobile:e,tablet:n,desktop:o}=t.responsive.device,i=!1;return i=!!(window.innerWidth<=640&&e)||i,i=!!(window.innerWidth>640&&window.innerWidth<=1024&&n)||i,i=!!(window.innerWidth>1024&&o)||i,i}}function rt(t,e,n){const o=t.slice();return o[15]=e[n],o[17]=n,o}function pt(t,e,n){const o=t.slice();return o[15]=e[n],o[17]=n,o}function ut(t){let e,n,o,i,l,a,s=t[0],c=[];for(let e=0;e<s.length;e+=1)c[e]=dt(pt(t,s,e));const d=t=>M(c[t],1,1,(()=>{c[t]=null}));return l=new R({props:{rippleAnimation:!0,rotateAnimation:t[2],shape:t[5].template.shape,animation:{in:t[4].elements.fab},$$slots:{default:[mt]},$$scope:{ctx:t}}}),l.$on("click",t[6]),{c(){e=f("div");for(let t=0;t<c.length;t+=1)c[t].c();i=m(),z(l.$$.fragment),b(e,"class",n="flex flex-col fac animate__animated "+t[3].animation.class+" svelte-q7ujgw"),b(e,"style",o=(t[2]?"display:flex;":"display:none;")+" width: auto;")},m(t,n){r(t,e,n);for(let t=0;t<c.length;t+=1)c[t].m(e,null);r(t,i,n),C(l,t,n),a=!0},p(t,i){if(385&i){let n;for(s=t[0],n=0;n<s.length;n+=1){const o=pt(t,s,n);c[n]?(c[n].p(o,i),W(c[n],1)):(c[n]=dt(o),c[n].c(),W(c[n],1),c[n].m(e,null))}for(O(),n=s.length;n<c.length;n+=1)d(n);q()}(!a||8&i&&n!==(n="flex flex-col fac animate__animated "+t[3].animation.class+" svelte-q7ujgw"))&&b(e,"class",n),(!a||4&i&&o!==(o=(t[2]?"display:flex;":"display:none;")+" width: auto;"))&&b(e,"style",o);const r={};4&i&&(r.rotateAnimation=t[2]),524288&i&&(r.$$scope={dirty:i,ctx:t}),l.$set(r)},i(t){if(!a){for(let t=0;t<s.length;t+=1)W(c[t]);W(l.$$.fragment,t),a=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)M(c[t]);M(l.$$.fragment,t),a=!1},d(t){t&&p(e),u(c,t),t&&p(i),H(l,t)}}}function ft(t){let e,n;return e=new R({props:{display:ct.check(t[0][0]),rippleAnimation:!0,fab:t[0][0],classNames:t[0][0].tooltipDisplay?"px-6":"",shape:t[0][0].template.shape?t[0][0].template.shape:t[5].template.shape,animation:{in:t[4].elements.fab},style:"width: auto;",$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){z(e.$$.fragment)},m(t,o){C(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.display=ct.check(t[0][0])),1&n&&(o.fab=t[0][0]),1&n&&(o.classNames=t[0][0].tooltipDisplay?"px-6":""),1&n&&(o.shape=t[0][0].template.shape?t[0][0].template.shape:t[5].template.shape),524289&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function dt(t){let e,n;return e=new st({props:{fab_item:t[15],tooltipDisplay:t[15].tooltipDisplay}}),e.$on("mouseenter",(function(){return t[11](t[17])})),e.$on("mouseleave",(function(){return t[12](t[17])})),{c(){z(e.$$.fragment)},m(t,o){C(e,t,o),n=!0},p(n,o){t=n;const i={};1&o&&(i.fab_item=t[15]),1&o&&(i.tooltipDisplay=t[15].tooltipDisplay),e.$set(i)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function mt(e){let n,o,i;return{c(){var t;n=f("em"),o=m(),i=f("div"),b(n,"class",(null==(t=e[5].template.icon.class)?"":t)+" svelte-q7ujgw"),g(n,"color",e[5].template.icon.color),b(i,"class","bg-shape svelte-q7ujgw"),g(i,"--background-color",e[5].template.color),_(i,"fab-bg-shape-active","shape"===e[5].template.name)},m(t,e){r(t,n,e),r(t,o,e),r(t,i,e)},p:t,d(t){t&&p(n),t&&p(o),t&&p(i)}}}function ht(t){let e,n;return e=new st({props:{fab_item:t[0][0],classNames:"fab-links fab-single-collection",tooltipDisplay:t[0][0].tooltipDisplay}}),e.$on("mouseenter",t[9]),e.$on("mouseleave",t[10]),{c(){z(e.$$.fragment)},m(t,o){C(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.fab_item=t[0][0]),1&n&&(o.tooltipDisplay=t[0][0].tooltipDisplay),e.$set(o)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function $t(t){let e,n,o;return e=new st({props:{fab_item:t[15],classNames:"fab-links fab-single-collection",tooltipDisplay:t[15].tooltipDisplay}}),e.$on("mouseenter",(function(){return t[13](t[17])})),e.$on("mouseleave",(function(){return t[14](t[17])})),{c(){z(e.$$.fragment),n=m()},m(t,i){C(e,t,i),r(t,n,i),o=!0},p(n,o){t=n;const i={};2&o&&(i.fab_item=t[15]),2&o&&(i.tooltipDisplay=t[15].tooltipDisplay),e.$set(i)},i(t){o||(W(e.$$.fragment,t),o=!0)},o(t){M(e.$$.fragment,t),o=!1},d(t){H(e,t),t&&p(n)}}}function bt(t){let e,n;return e=new R({props:{display:ct.check(t[15]),id:"fab-standalone-link-"+t[15].ID,rippleAnimation:!1,fab:t[15],classNames:"fab "+(t[15].tooltipDisplay?"px-10":""),shape:t[15].template.shape?t[15].template.shape:t[5].template.shape,animation:{in:t[4].elements.fab},style:t[15].tooltipDisplay?"width: auto; ":"",$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){z(e.$$.fragment)},m(t,o){C(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.display=ct.check(t[15])),2&n&&(o.id="fab-standalone-link-"+t[15].ID),2&n&&(o.fab=t[15]),2&n&&(o.classNames="fab "+(t[15].tooltipDisplay?"px-10":"")),2&n&&(o.shape=t[15].template.shape?t[15].template.shape:t[5].template.shape),2&n&&(o.style=t[15].tooltipDisplay?"width: auto; ":""),524290&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function yt(t){let e,n,o,i,l;const a=[ft,ut],s=[];function c(t,e){return 1===t[0].length?0:t[0].length>=1?1:-1}~(e=c(t))&&(n=s[e]=a[e](t));let f=t[1],d=[];for(let e=0;e<f.length;e+=1)d[e]=bt(rt(t,f,e));const $=t=>M(d[t],1,1,(()=>{d[t]=null}));return{c(){n&&n.c(),o=m();for(let t=0;t<d.length;t+=1)d[t].c();i=h()},m(t,n){~e&&s[e].m(t,n),r(t,o,n);for(let e=0;e<d.length;e+=1)d[e].m(t,n);r(t,i,n),l=!0},p(t,[l]){let r=e;if(e=c(t),e===r?~e&&s[e].p(t,l):(n&&(O(),M(s[r],1,1,(()=>{s[r]=null})),q()),~e?(n=s[e],n?n.p(t,l):(n=s[e]=a[e](t),n.c()),W(n,1),n.m(o.parentNode,o)):n=null),434&l){let e;for(f=t[1],e=0;e<f.length;e+=1){const n=rt(t,f,e);d[e]?(d[e].p(n,l),W(d[e],1)):(d[e]=bt(n),d[e].c(),W(d[e],1),d[e].m(i.parentNode,i))}for(O(),e=f.length;e<d.length;e+=1)$(e);q()}},i(t){if(!l){W(n);for(let t=0;t<f.length;t+=1)W(d[t]);l=!0}},o(t){M(n),d=d.filter(Boolean);for(let t=0;t<d.length;t+=1)M(d[t]);l=!1},d(t){~e&&s[e].d(t),t&&p(o),u(d,t),t&&p(i)}}}function gt(t,e,n){let{fab_animation:o,fab_design:i}=window.FAB_PLUGIN.options,{to_display:l}=window.FAB_PLUGIN,a=[];l=l.filter((t=>!["readingbar","scrolltotop"].includes(t.type))),l=l.map((t=>(t.tooltip.alwaysdisplay=!(!t.tooltip.alwaysdisplay||0==t.tooltip.alwaysdisplay),t.tooltipDisplay=t.tooltip.alwaysdisplay,t))),l=l.filter((t=>(t.standalone&&a.push(t),!t.standalone)));let s=!1,c={animation:{in:`animate__${o.elements.fab_active}`,out:`animate__${o.elements.fab_inactive}`,class:""}};const r=(t,e)=>{"standalone"===t?n(1,a[e].tooltipDisplay=!0,a):n(0,l[e].tooltipDisplay=!0,l)},p=(t,e)=>{"standalone"===t?n(1,a[e].tooltipDisplay=!!a[e].tooltip.alwaysdisplay,a):n(0,l[e].tooltipDisplay=!!l[e].tooltip.alwaysdisplay,l)};return[l,a,s,c,o,i,()=>{s?(n(3,c.animation.class=c.animation.out,c),setTimeout((function(){n(2,s=!s)}),500)):(n(2,s=!s),n(3,c.animation.class=c.animation.in,c))},r,p,()=>r("to_display",0),()=>p("to_display",0),t=>r("to_display",t),t=>p("to_display",t),t=>r("standalone",t),t=>p("standalone",t)]}class _t extends Y{constructor(t){super(),X(this,t,gt,yt,a,{})}}function vt(e){let n,o,i,l,a;return o=new nt({}),l=new _t({}),{c(){n=f("div"),z(o.$$.fragment),i=m(),z(l.$$.fragment),b(n,"class","fab-floating-button fab-template-"+e[0].template.name+" "+(e[0].template.shape?`fab-template-shape-container-${e[0].template.shape}`:"")+" fab-position-"+e[0].layout.position+" px-4"),_(n,"hidden",e[1])},m(t,e){r(t,n,e),C(o,n,null),c(n,i),C(l,n,null),a=!0},p:t,i(t){a||(W(o.$$.fragment,t),W(l.$$.fragment,t),a=!0)},o(t){M(o.$$.fragment,t),M(l.$$.fragment,t),a=!1},d(t){t&&p(n),H(o),H(l)}}}function wt(t){let{fab_design:e}=window.FAB_PLUGIN.options;return[e,!(!e.template||"hidden"!==e.template.name)]}return app=new class extends Y{constructor(t){super(),X(this,t,wt,vt,a,{})}}({target:document.querySelector("#fab-dom")})}();
//# sourceMappingURL=bundle.js.map
