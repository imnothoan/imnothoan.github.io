var Tv=Object.defineProperty;var Sv=($t,dt,ai)=>dt in $t?Tv($t,dt,{enumerable:!0,configurable:!0,writable:!0,value:ai}):$t[dt]=ai;var ry=($t,dt,ai)=>Sv($t,typeof dt!="symbol"?dt+"":dt,ai);(function(){"use strict";var $t=typeof self<"u"?self:{};function dt(){throw Error("Invalid UTF8")}function ai(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let Qn,Ss;const ay=typeof TextDecoder<"u";let sy;const oy=typeof TextEncoder<"u";function Td(e){if(oy)e=(sy||(sy=new TextEncoder)).encode(e);else{let r=0;const i=new Uint8Array(3*e.length);for(let a=0;a<e.length;a++){var t=e.charCodeAt(a);if(t<128)i[r++]=t;else{if(t<2048)i[r++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&a<e.length){const n=e.charCodeAt(++a);if(n>=56320&&n<=57343){t=1024*(t-55296)+n-56320+65536,i[r++]=t>>18|240,i[r++]=t>>12&63|128,i[r++]=t>>6&63|128,i[r++]=63&t|128;continue}a--}t=65533}i[r++]=t>>12|224,i[r++]=t>>6&63|128}i[r++]=63&t|128}}e=r===i.length?i:i.subarray(0,r)}return e}var ks,Jn;e:{for(var Sd=["CLOSURE_FLAGS"],As=$t,Cs=0;Cs<Sd.length;Cs++)if((As=As[Sd[Cs]])==null){Jn=null;break e}Jn=As}var pn,kd=Jn&&Jn[610401301];ks=kd!=null&&kd;const Ad=$t.navigator;function Is(e){return!!ks&&!!pn&&pn.brands.some((({brand:t})=>t&&t.indexOf(e)!=-1))}function Dt(e){var t;return(t=$t.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(e)!=-1}function Lr(){return!!ks&&!!pn&&pn.brands.length>0}function Os(){return Lr()?Is("Chromium"):(Dt("Chrome")||Dt("CriOS"))&&!(!Lr()&&Dt("Edge"))||Dt("Silk")}function zs(e){return zs[" "](e),e}pn=Ad&&Ad.userAgentData||null,zs[" "]=function(){};var uy=!Lr()&&(Dt("Trident")||Dt("MSIE"));!Dt("Android")||Os(),Os(),Dt("Safari")&&(Os()||!Lr()&&Dt("Coast")||!Lr()&&Dt("Opera")||!Lr()&&Dt("Edge")||(Lr()?Is("Microsoft Edge"):Dt("Edg/"))||Lr()&&Is("Opera"));var Cd={},hn=null;function ly(e){const t=e.length;let r=3*t/4;r%3?r=Math.floor(r):"=.".indexOf(e[t-1])!=-1&&(r="=.".indexOf(e[t-2])!=-1?r-2:r-1);const i=new Uint8Array(r);let a=0;return(function(n,s){function o(d){for(;l<n.length;){const p=n.charAt(l++),f=hn[p];if(f!=null)return f;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p)}return d}Id();let l=0;for(;;){const d=o(-1),p=o(0),f=o(64),m=o(64);if(m===64&&d===-1)break;s(d<<2|p>>4),f!=64&&(s(p<<4&240|f>>2),m!=64&&s(f<<6&192|m))}})(e,(function(n){i[a++]=n})),a!==r?i.subarray(0,a):i}function Id(){if(!hn){hn={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let r=0;r<5;r++){const i=e.concat(t[r].split(""));Cd[r]=i;for(let a=0;a<i.length;a++){const n=i[a];hn[n]===void 0&&(hn[n]=a)}}}}var Od=typeof Uint8Array<"u",zd=!uy&&typeof btoa=="function";function Rd(e){if(!zd){var t;t===void 0&&(t=0),Id(),t=Cd[t];var r=Array(Math.floor(e.length/3)),i=t[64]||"";let l=0,d=0;for(;l<e.length-2;l+=3){var a=e[l],n=e[l+1],s=e[l+2],o=t[a>>2];a=t[(3&a)<<4|n>>4],n=t[(15&n)<<2|s>>6],s=t[63&s],r[d++]=o+a+n+s}switch(o=0,s=i,e.length-l){case 2:s=t[(15&(o=e[l+1]))<<2]||i;case 1:e=e[l],r[d]=t[e>>2]+t[(3&e)<<4|o>>4]+s+i}return r.join("")}for(t="",r=0,i=e.length-10240;r<i;)t+=String.fromCharCode.apply(null,e.subarray(r,r+=10240));return t+=String.fromCharCode.apply(null,r?e.subarray(r):e),btoa(t)}const Md=/[-_.]/g,dy={"-":"+",_:"/",".":"="};function cy(e){return dy[e]||""}function Nd(e){if(!zd)return ly(e);Md.test(e)&&(e=e.replace(Md,cy)),e=atob(e);const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}function fn(e){return Od&&e!=null&&e instanceof Uint8Array}var Oi={};function si(){return py||(py=new wr(null,Oi))}function Rs(e){Bd(Oi);var t=e.g;return(t=t==null||fn(t)?t:typeof t=="string"?Nd(t):null)==null?t:e.g=t}var wr=class{h(){return new Uint8Array(Rs(this)||0)}constructor(t,r){if(Bd(r),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let py,hy;function Bd(e){if(e!==Oi)throw Error("illegal external caller")}function Dd(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function Ms(e){return Dd(e=Error(e),"warning"),e}var ea=typeof Symbol=="function"&&typeof Symbol()=="symbol",fy=new Set;function mn(e,t,r=!1,i=!1){return e=typeof Symbol=="function"&&typeof Symbol()=="symbol"?i&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t,r&&fy.add(e),e}var my=mn("jas",void 0,!0,!0),Ld=mn(void 0,"0di"),Ns=mn(void 0,"2ex"),gn=mn(void 0,"1oa",!0),zi=mn(void 0,Symbol(),!0);const ne=ea?my:"Ga",Pd={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Ud=Object.defineProperties;function ta(e,t){ea||ne in e||Ud(e,Pd),e[ne]|=t}function Ze(e,t){ea||ne in e||Ud(e,Pd),e[ne]=t}function Ri(e){return ta(e,34),e}function gy(e,t){Ze(t,-30975&(0|e))}function Bs(e,t){Ze(t,-30941&(34|e))}function Ds(){return typeof BigInt=="function"}function _t(e){return Array.prototype.slice.call(e)}var Ls,_n={},Fd={};function Gd(e){return!(!e||typeof e!="object"||e.Ia!==Fd)}function Ps(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object}function Us(e,t){if(e!=null){if(typeof e=="string")e=e?new wr(e,Oi):si();else if(e.constructor!==wr)if(fn(e))e=e.length?new wr(new Uint8Array(e),Oi):si();else{if(!t)throw Error();e=void 0}}return e}function ra(e){return!(!Array.isArray(e)||e.length)&&!!(1&(0|e[ne]))}const Vd=[];function Pr(e){if(2&e)throw Error()}Ze(Vd,55),Ls=Object.freeze(Vd);class ia{constructor(t,r,i){this.l=0,this.g=t,this.h=r,this.m=i}next(){if(this.l<this.g.length){const t=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,t):t}}return{done:!0,value:void 0}}[Symbol.iterator](){return new ia(this.g,this.h,this.m)}}function Fs(e){return zi?e[zi]:void 0}var _y=Object.freeze({});function na(e){return e.Qa=!0,e}var yy=na((e=>typeof e=="number")),Wd=na((e=>typeof e=="string")),by=na((e=>typeof e=="boolean")),aa=typeof $t.BigInt=="function"&&typeof $t.BigInt(0)=="bigint",Gs=na((e=>aa?e>=vy&&e<=xy:e[0]==="-"?qd(e,wy):qd(e,$y)));const wy=Number.MIN_SAFE_INTEGER.toString(),vy=aa?BigInt(Number.MIN_SAFE_INTEGER):void 0,$y=Number.MAX_SAFE_INTEGER.toString(),xy=aa?BigInt(Number.MAX_SAFE_INTEGER):void 0;function qd(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let r=0;r<e.length;r++){const i=e[r],a=t[r];if(i>a)return!1;if(i<a)return!0}}const Ey=typeof Uint8Array.prototype.slice=="function";let jd,ze=0,je=0;function Hd(e){const t=e>>>0;ze=t,je=(e-t)/4294967296>>>0}function Mi(e){if(e<0){Hd(-e);const[t,r]=js(ze,je);ze=t>>>0,je=r>>>0}else Hd(e)}function Vs(e){const t=jd||(jd=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),je=0,ze=t.getUint32(0,!0)}function Ws(e,t){const r=4294967296*t+(e>>>0);return Number.isSafeInteger(r)?r:yn(e,t)}function qs(e,t){const r=2147483648&t;return r&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),typeof(e=Ws(e,t))=="number"?r?-e:e:r?"-"+e:e}function yn(e,t){if(e>>>=0,(t>>>=0)<=2097151)var r=""+(4294967296*t+e);else Ds()?r=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(r=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),r+=8147497*t,t*=2,e>=1e7&&(r+=e/1e7>>>0,e%=1e7),r>=1e7&&(t+=r/1e7>>>0,r%=1e7),r=t+Kd(r)+Kd(e));return r}function Kd(e){return e=String(e),"0000000".slice(e.length)+e}function sa(e){if(e.length<16)Mi(Number(e));else if(Ds())e=BigInt(e),ze=Number(e&BigInt(4294967295))>>>0,je=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");je=ze=0;const r=e.length;for(let i=t,a=(r-t)%6+t;a<=r;i=a,a+=6){const n=Number(e.slice(i,a));je*=1e6,ze=1e6*ze+n,ze>=4294967296&&(je+=Math.trunc(ze/4294967296),je>>>=0,ze>>>=0)}if(t){const[i,a]=js(ze,je);ze=i,je=a}}}function js(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}const Hs=typeof BigInt=="function"?BigInt.asIntN:void 0,Ty=typeof BigInt=="function"?BigInt.asUintN:void 0,Ni=Number.isSafeInteger,oa=Number.isFinite,ua=Math.trunc;function Ur(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function Yd(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}const Sy=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function la(e){switch(typeof e){case"bigint":return!0;case"number":return oa(e);case"string":return Sy.test(e);default:return!1}}function Bi(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return oa(e)?0|e:void 0}function Xd(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return oa(e)?e>>>0:void 0}function Zd(e){if(e[0]==="-")return!1;const t=e.length;return t<20||t===20&&Number(e.substring(0,6))<184467}function Ks(e){return e=ua(e),Ni(e)||(Mi(e),e=qs(ze,je)),e}function Ys(e){var t=ua(Number(e));if(Ni(t))return String(t);if((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),t=e.length,!(e[0]==="-"?t<20||t===20&&Number(e.substring(0,7))>-922337:t<19||t===19&&Number(e.substring(0,6))<922337))if(sa(e),e=ze,2147483648&(t=je))if(Ds())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[r,i]=js(e,t);e="-"+yn(r,i)}else e=yn(e,t);return e}function da(e){return e==null?e:typeof e=="bigint"?(Gs(e)?e=Number(e):(e=Hs(64,e),e=Gs(e)?Number(e):String(e)),e):la(e)?typeof e=="number"?Ks(e):Ys(e):void 0}function ky(e){if(e==null)return e;var t=typeof e;if(t==="bigint")return String(Ty(64,e));if(la(e)){if(t==="string")return t=ua(Number(e)),Ni(t)&&t>=0?e=String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Zd(e)||(sa(e),e=yn(ze,je))),e;if(t==="number")return(e=ua(e))>=0&&Ni(e)?e:(function(r){if(r<0){Mi(r);var i=yn(ze,je);return r=Number(i),Ni(r)?r:i}return Zd(i=String(r))?i:(Mi(r),Ws(ze,je))})(e)}}function Qd(e){if(typeof e!="string")throw Error();return e}function Di(e){if(e!=null&&typeof e!="string")throw Error();return e}function Li(e){return e==null||typeof e=="string"?e:void 0}function Xs(e,t,r,i){if(e!=null&&typeof e=="object"&&e.W===_n)return e;if(!Array.isArray(e))return r?2&i?((e=t[Ld])||(Ri((e=new t).u),e=t[Ld]=e),t=e):t=new t:t=void 0,t;let a=r=0|e[ne];return a===0&&(a|=32&i),a|=2&i,a!==r&&Ze(e,a),new t(e)}function Ay(e,t,r){if(t)e:{if(!la(t=e))throw Ms("int64");switch(typeof t){case"string":t=Ys(t);break e;case"bigint":if(e=t=Hs(64,t),Wd(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(yy(e)&&!Number.isSafeInteger(e))throw Error(String(e));t=aa?BigInt(t):by(t)?t?"1":"0":Wd(t)?t.trim()||"0":String(t);break e;default:t=Ks(t)}}else t=da(e);return typeof(r=(e=t)==null?r?0:void 0:e)=="string"&&Ni(t=+r)?t:r}const Cy={};let Iy=(function(){try{return zs(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Zs{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,r){return this.g.set(t,r),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,r){return this.g.forEach(t,r)}[Symbol.iterator](){return this.entries()}}const Oy=Iy?(Object.setPrototypeOf(Zs.prototype,Map.prototype),Object.defineProperties(Zs.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Zs):class extends Map{constructor(){super()}};function Jd(e){return e}function Qs(e){if(2&e.L)throw Error("Cannot mutate an immutable Map")}var Lt=class extends Oy{constructor(t,r,i=Jd,a=Jd){super();let n=0|t[ne];n|=64,Ze(t,n),this.L=n,this.S=r,this.R=i,this.Y=this.S?zy:a;for(let s=0;s<t.length;s++){const o=t[s],l=i(o[0],!1,!0);let d=o[1];r?d===void 0&&(d=null):d=a(o[1],!1,!0,void 0,void 0,n),super.set(l,d)}}na(t=ec){if(this.size!==0)return this.X(t)}X(t=ec){const r=[],i=super.entries();for(var a;!(a=i.next()).done;)(a=a.value)[0]=t(a[0]),a[1]=t(a[1]),r.push(a);return r}clear(){Qs(this),super.clear()}delete(t){return Qs(this),super.delete(this.R(t,!0,!1))}entries(){var t=this.ma();return new ia(t,Ry,this)}keys(){return this.Ha()}values(){var t=this.ma();return new ia(t,Lt.prototype.get,this)}forEach(t,r){super.forEach(((i,a)=>{t.call(r,this.get(a),a,this)}))}set(t,r){return Qs(this),(t=this.R(t,!0,!1))==null?this:r==null?(super.delete(t),this):super.set(t,this.Y(r,!0,!0,this.S,!1,this.L))}Na(t){const r=this.R(t[0],!1,!0);t=t[1],t=this.S?t===void 0?null:t:this.Y(t,!1,!0,void 0,!1,this.L),super.set(r,t)}has(t){return super.has(this.R(t,!1,!1))}get(t){t=this.R(t,!1,!1);const r=super.get(t);if(r!==void 0){var i=this.S;return i?((i=this.Y(r,!1,!0,i,this.ra,this.L))!==r&&super.set(t,i),i):r}}ma(){return Array.from(super.keys())}Ha(){return super.keys()}[Symbol.iterator](){return this.entries()}};function zy(e,t,r,i,a,n){return e=Xs(e,i,r,n),a&&(e=pa(e)),e}function ec(e){return e}function Ry(e){return[e,this.get(e)]}let My,tc,Ny;function rc(){return My||(My=new Lt(Ri([]),void 0,void 0,void 0,Cy))}function Js(e,t,r,i,a){if(e!=null){if(Array.isArray(e))e=ra(e)?void 0:a&&2&(0|e[ne])?e:eo(e,t,r,i!==void 0,a);else if(Ps(e)){const n={};for(let s in e)n[s]=Js(e[s],t,r,i,a);e=n}else e=t(e,i);return e}}function eo(e,t,r,i,a){const n=i||r?0|e[ne]:0,s=i?!!(32&n):void 0;i=_t(e);for(let o=0;o<i.length;o++)i[o]=Js(i[o],t,r,s,a);return r&&((e=Fs(e))&&(i[zi]=_t(e)),r(n,i)),i}function By(e){return Js(e,ic,void 0,void 0,!1)}function ic(e){return e.W===_n?e.toJSON():e instanceof Lt?e.na(By):(function(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"bigint":return Gs(t)?Number(t):String(t);case"boolean":return t?1:0;case"object":if(t)if(Array.isArray(t)){if(ra(t))return}else{if(fn(t))return Rd(t);if(t instanceof wr){const r=t.g;return r==null?"":typeof r=="string"?r:t.g=Rd(r)}if(t instanceof Lt)return t.na()}}return t})(e)}function nc(e){return eo(e,ic,void 0,void 0,!1)}function Fr(e,t,r){return e=ac(e,t[0],t[1],r?1:2),t!==tc&&r&&ta(e,16384),e}function ac(e,t,r,i){if(e==null){var a=96;r?(e=[r],a|=512):e=[],t&&(a=-33521665&a|(1023&t)<<15)}else{if(!Array.isArray(e))throw Error("narr");if(2048&(a=0|e[ne]))throw Error("farr");if(64&a)return e;if(i===1||i===2||(a|=64),r&&(a|=512,r!==e[0]))throw Error("mid");e:{if(i=(r=e).length){const n=i-1;if(Ps(r[n])){if((t=n-(512&(a|=256)?0:-1))>=1024)throw Error("pvtlmt");a=-33521665&a|(1023&t)<<15;break e}}if(t){if((t=Math.max(t,i-(512&a?0:-1)))>1024)throw Error("spvt");a=-33521665&a|(1023&t)<<15}}}return Ze(e,a),e}function to(e,t,r=Bs){if(e!=null){if(Od&&e instanceof Uint8Array)return t?e:new Uint8Array(e);if(Array.isArray(e)){var i=0|e[ne];return 2&i?e:(t&&(t=i===0||!!(32&i)&&!(64&i||!(16&i))),t?(Ze(e,-12293&(34|i)),e):eo(e,to,4&i?Bs:r,!0,!0))}return e.W===_n?e=2&(i=0|(r=e.u)[ne])?e:new e.constructor(ca(r,i,!0)):e instanceof Lt&&!(2&e.L)&&(r=Ri(e.X(to)),e=new Lt(r,e.S,e.R,e.Y)),e}}function ca(e,t,r){const i=r||2&t?Bs:gy,a=!!(32&t);return e=(function(n,s,o){const l=_t(n);var d=l.length;const p=256&s?l[d-1]:void 0;for(d+=p?-1:0,s=512&s?1:0;s<d;s++)l[s]=o(l[s]);if(p){s=l[s]={};for(const f in p)s[f]=o(p[f])}return(n=Fs(n))&&(l[zi]=_t(n)),l})(e,t,(n=>to(n,a,i))),ta(e,32|(r?2:0)),e}function pa(e){const t=e.u,r=0|t[ne];return 2&r?new e.constructor(ca(t,r,!1)):e}function Pi(e,t){return vr(e=e.u,0|e[ne],t)}function vr(e,t,r,i){if(r===-1)return null;var a=r+(512&t?0:-1);const n=e.length-1;return a>=n&&256&t?e[n][r]:i&&256&t&&(t=e[n][r])!=null?(e[a]!=null&&Ns!=null&&((a=(e=hy??(hy={}))[Ns]||0)>=4||(e[Ns]=a+1,Dd(e=Error(),"incident"),(function(s){$t.setTimeout((()=>{throw s}),0)})(e))),t):a<=n?e[a]:void 0}function Me(e,t,r){const i=e.u;let a=0|i[ne];return Pr(a),Ve(i,a,t,r),e}function Ve(e,t,r,i){const a=512&t?0:-1,n=r+a;var s=e.length-1;return n>=s&&256&t?(e[s][r]=i,t):n<=s?(e[n]=i,256&t&&r in(e=e[s])&&delete e[r],t):(i!==void 0&&(r>=(s=t>>15&1023||536870912)?i!=null&&(e[s+a]={[r]:i},Ze(e,t|=256)):e[n]=i),t)}function ha(e,t){let r=0|(e=e.u)[ne];const i=vr(e,r,t),a=Ur(i);return a!=null&&a!==i&&Ve(e,r,t,a),a}function sc(e){let t=0|(e=e.u)[ne];const r=vr(e,t,1),i=Us(r,!0);return i!=null&&i!==r&&Ve(e,t,1,i),i}function oi(){return _y===void 0?2:4}function ui(e,t,r,i,a){const n=e.u,s=2&(e=0|n[ne])?1:i;a=!!a;let o=0|(i=ro(n,e,t))[ne];if(!(4&o)){4&o&&(i=_t(i),o=Er(o,e),e=Ve(n,e,t,i));let l=0,d=0;for(;l<i.length;l++){const p=r(i[l]);p!=null&&(i[d++]=p)}d<l&&(i.length=d),o=io(o,e),r=-4097&(20|o),o=r&=-8193,Ze(i,o),2&o&&Object.freeze(i)}return s===1||s===4&&32&o?$r(o)||(a=o,o|=2,o!==a&&Ze(i,o),Object.freeze(i)):(s===2&&$r(o)&&(i=_t(i),o=Er(o,e),o=Gr(o,e,a),Ze(i,o),e=Ve(n,e,t,i)),$r(o)||(t=o,o=Gr(o,e,a),o!==t&&Ze(i,o))),i}function ro(e,t,r,i){return e=vr(e,t,r,i),Array.isArray(e)?e:Ls}function io(e,t){return e===0&&(e=Er(e,t)),1|e}function $r(e){return!!(2&e)&&!!(4&e)||!!(2048&e)}function oc(e){e=_t(e);for(let t=0;t<e.length;t++){const r=e[t]=_t(e[t]);Array.isArray(r[1])&&(r[1]=Ri(r[1]))}return e}function no(e,t,r,i){let a=0|(e=e.u)[ne];Pr(a),Ve(e,a,t,(i==="0"?Number(r)===0:r===i)?void 0:r)}function Ui(e,t,r,i,a){Pr(t);var n=!(!(64&t)&&16384&t);const s=(a=ro(e,t,r,a))!==Ls;if(n||!s){let o=n=s?0|a[ne]:0;(!s||2&o||$r(o)||4&o&&!(32&o))&&(a=_t(a),o=Er(o,t),t=Ve(e,t,r,a)),o=-13&io(o,t),o=Gr(i?-17&o:16|o,t,!0),o!==n&&Ze(a,o)}return a}function ao(e,t){var r=cp;return oo(so(e=e.u),e,0|e[ne],r)===t?t:-1}function so(e){if(ea)return e[gn]??(e[gn]=new Map);if(gn in e)return e[gn];const t=new Map;return Object.defineProperty(e,gn,{value:t}),t}function uc(e,t,r,i){const a=so(e),n=oo(a,e,t,r);return n!==i&&(n&&(t=Ve(e,t,n)),a.set(r,i)),t}function oo(e,t,r,i){let a=e.get(i);if(a!=null)return a;a=0;for(let n=0;n<i.length;n++){const s=i[n];vr(t,r,s)!=null&&(a!==0&&(r=Ve(t,r,a)),a=s)}return e.set(i,a),a}function uo(e,t,r,i){let a,n=0|e[ne];if((i=vr(e,n,r,i))!=null&&i.W===_n)return(t=pa(i))!==i&&Ve(e,n,r,t),t.u;if(Array.isArray(i)){const s=0|i[ne];a=2&s?Fr(ca(i,s,!1),t,!0):64&s?i:Fr(a,t,!0)}else a=Fr(void 0,t,!0);return a!==i&&Ve(e,n,r,a),a}function lc(e,t,r,i){let a=0|(e=e.u)[ne];return(t=Xs(i=vr(e,a,r,i),t,!1,a))!==i&&t!=null&&Ve(e,a,r,t),t}function ve(e,t,r,i=!1){if((t=lc(e,t,r,i))==null)return t;if(!(2&(i=0|(e=e.u)[ne]))){const a=pa(t);a!==t&&Ve(e,i,r,t=a)}return t}function dc(e,t,r,i,a,n,s){e=e.u;var o=!!(2&t);const l=o?1:a;n=!!n,s&&(s=!o);var d=0|(a=ro(e,t,i))[ne];if(!(o=!!(4&d))){var p=a,f=t;const m=!!(2&(d=io(d,t)));m&&(f|=2);let _=!m,y=!0,w=0,x=0;for(;w<p.length;w++){const $=Xs(p[w],r,!1,f);if($ instanceof r){if(!m){const v=!!(2&(0|$.u[ne]));_&&(_=!v),y&&(y=v)}p[x++]=$}}x<w&&(p.length=x),d|=4,d=y?16|d:-17&d,Ze(p,d=_?8|d:-9&d),m&&Object.freeze(p)}if(s&&!(8&d||!a.length&&(l===1||l===4&&32&d))){for($r(d)&&(a=_t(a),d=Er(d,t),t=Ve(e,t,i,a)),r=a,s=d,p=0;p<r.length;p++)(d=r[p])!==(f=pa(d))&&(r[p]=f);s|=8,Ze(r,s=r.length?-17&s:16|s),d=s}return l===1||l===4&&32&d?$r(d)||(t=d,(d|=!a.length||16&d&&(!o||32&d)?2:2048)!==t&&Ze(a,d),Object.freeze(a)):(l===2&&$r(d)&&(Ze(a=_t(a),d=Gr(d=Er(d,t),t,n)),t=Ve(e,t,i,a)),$r(d)||(i=d,(d=Gr(d,t,n))!==i&&Ze(a,d))),a}function xr(e,t,r){const i=0|e.u[ne];return dc(e,i,t,r,oi(),!1,!(2&i))}function oe(e,t,r,i){return i==null&&(i=void 0),Me(e,r,i)}function bn(e,t,r,i){i==null&&(i=void 0);e:{let a=0|(e=e.u)[ne];if(Pr(a),i==null){const n=so(e);if(oo(n,e,a,r)!==t)break e;n.set(r,0)}else a=uc(e,a,r,t);Ve(e,a,t,i)}}function Er(e,t){return-2049&(e=32|(2&t?2|e:-3&e))}function Gr(e,t,r){return 32&t&&r||(e&=-33),e}function fa(e,t,r,i){const a=0|e.u[ne];Pr(a),e=dc(e,a,r,t,2,!0),i=i??new r,e.push(i),e[ne]=2&(0|i.u[ne])?-9&e[ne]:-17&e[ne]}function Pt(e,t){return Bi(Pi(e,t))}function Ut(e,t){return Li(Pi(e,t))}function Ke(e,t){return ha(e,t)??0}function wn(e,t,r){if(r!=null&&typeof r!="boolean")throw e=typeof r,Error(`Expected boolean but got ${e!="object"?e:r?Array.isArray(r)?"array":e:"null"}: ${r}`);Me(e,t,r)}function ur(e,t,r){if(r!=null){if(typeof r!="number"||!oa(r))throw Ms("int32");r|=0}Me(e,t,r)}function re(e,t,r){if(r!=null&&typeof r!="number")throw Error(`Value of float/double field must be a number, found ${typeof r}: ${r}`);Me(e,t,r)}function ma(e,t,r){{const s=e.u;let o=0|s[ne];if(Pr(o),r==null)Ve(s,o,t);else{var i=e=0|r[ne],a=$r(e),n=a||Object.isFrozen(r);for(a||(e=0),n||(r=_t(r),i=0,e=Gr(e=Er(e,o),o,!0),n=!1),e|=21,a=0;a<r.length;a++){const l=r[a],d=Qd(l);Object.is(l,d)||(n&&(r=_t(r),i=0,e=Gr(e=Er(e,o),o,!0),n=!1),r[a]=d)}e!==i&&(n&&(r=_t(r),e=Gr(e=Er(e,o),o,!0)),Ze(r,e)),Ve(s,o,t,r)}}}function ga(e,t,r){Pr(0|e.u[ne]),ui(e,t,Li,2,!0).push(Qd(r))}function cc(e,t){return Error(`Invalid wire type: ${e} (at position ${t})`)}function lo(){return Error("Failed to read varint, encoding is invalid.")}function pc(e,t){return Error(`Tried to read past the end of the data ${t} > ${e}`)}function co(e){if(typeof e=="string")return{buffer:Nd(e),N:!1};if(Array.isArray(e))return{buffer:new Uint8Array(e),N:!1};if(e.constructor===Uint8Array)return{buffer:e,N:!1};if(e.constructor===ArrayBuffer)return{buffer:new Uint8Array(e),N:!1};if(e.constructor===wr)return{buffer:Rs(e)||new Uint8Array(0),N:!0};if(e instanceof Uint8Array)return{buffer:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),N:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function po(e,t){let r,i=0,a=0,n=0;const s=e.h;let o=e.g;do r=s[o++],i|=(127&r)<<n,n+=7;while(n<32&&128&r);for(n>32&&(a|=(127&r)>>4),n=3;n<32&&128&r;n+=7)r=s[o++],a|=(127&r)<<n;if(li(e,o),r<128)return t(i>>>0,a>>>0);throw lo()}function ho(e){let t=0,r=e.g;const i=r+10,a=e.h;for(;r<i;){const n=a[r++];if(t|=n,(128&n)==0)return li(e,r),!!(127&t)}throw lo()}function Vr(e){const t=e.h;let r=e.g,i=t[r++],a=127&i;if(128&i&&(i=t[r++],a|=(127&i)<<7,128&i&&(i=t[r++],a|=(127&i)<<14,128&i&&(i=t[r++],a|=(127&i)<<21,128&i&&(i=t[r++],a|=i<<28,128&i&&128&t[r++]&&128&t[r++]&&128&t[r++]&&128&t[r++]&&128&t[r++])))))throw lo();return li(e,r),a}function Tr(e){return Vr(e)>>>0}function fo(e){var t=e.h;const r=e.g,i=t[r],a=t[r+1],n=t[r+2];return t=t[r+3],li(e,e.g+4),(i<<0|a<<8|n<<16|t<<24)>>>0}function mo(e){var t=fo(e);e=2*(t>>31)+1;const r=t>>>23&255;return t&=8388607,r==255?t?NaN:e*(1/0):r==0?1401298464324817e-60*e*t:e*Math.pow(2,r-150)*(t+8388608)}function Dy(e){return Vr(e)}function go(e,t,{ba:r=!1}={}){e.ba=r,t&&(t=co(t),e.h=t.buffer,e.m=t.N,e.j=0,e.l=e.h.length,e.g=e.j)}function li(e,t){if(e.g=t,t>e.l)throw pc(e.l,t)}function hc(e,t){if(t<0)throw Error(`Tried to read a negative byte length: ${t}`);const r=e.g,i=r+t;if(i>e.l)throw pc(t,e.l-r);return e.g=i,r}function fc(e,t){if(t==0)return si();var r=hc(e,t);return e.ba&&e.m?r=e.h.subarray(r,r+t):(e=e.h,r=r===(t=r+t)?new Uint8Array(0):Ey?e.slice(r,t):new Uint8Array(e.subarray(r,t))),r.length==0?si():new wr(r,Oi)}Lt.prototype.toJSON=void 0,Lt.prototype.Ia=Fd;var mc=[];function gc(e){var t=e.g;if(t.g==t.l)return!1;e.l=e.g.g;var r=Tr(e.g);if(t=r>>>3,!((r&=7)>=0&&r<=5))throw cc(r,e.l);if(t<1)throw Error(`Invalid field number: ${t} (at position ${e.l})`);return e.m=t,e.h=r,!0}function _a(e){switch(e.h){case 0:e.h!=0?_a(e):ho(e.g);break;case 1:li(e=e.g,e.g+8);break;case 2:if(e.h!=2)_a(e);else{var t=Tr(e.g);li(e=e.g,e.g+t)}break;case 5:li(e=e.g,e.g+4);break;case 3:for(t=e.m;;){if(!gc(e))throw Error("Unmatched start-group tag: stream EOF");if(e.h==4){if(e.m!=t)throw Error("Unmatched end-group tag");break}_a(e)}break;default:throw cc(e.h,e.l)}}function vn(e,t,r){const i=e.g.l,a=Tr(e.g),n=e.g.g+a;let s=n-i;if(s<=0&&(e.g.l=n,r(t,e,void 0,void 0,void 0),s=n-e.g.g),s)throw Error(`Message parsing ended unexpectedly. Expected to read ${a} bytes, instead read ${a-s} bytes, either the data ended unexpectedly or the message misreported its own length`);return e.g.g=n,e.g.l=i,t}function _o(e){var t=Tr(e.g),r=hc(e=e.g,t);if(e=e.h,ay){var i,a=e;(i=Ss)||(i=Ss=new TextDecoder("utf-8",{fatal:!0})),t=r+t,a=r===0&&t===a.length?a:a.subarray(r,t);try{var n=i.decode(a)}catch(o){if(Qn===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Qn=!0}catch{Qn=!1}}throw!Qn&&(Ss=void 0),o}}else{t=(n=r)+t,r=[];let o,l=null;for(;n<t;){var s=e[n++];s<128?r.push(s):s<224?n>=t?dt():(o=e[n++],s<194||(192&o)!=128?(n--,dt()):r.push((31&s)<<6|63&o)):s<240?n>=t-1?dt():(o=e[n++],(192&o)!=128||s===224&&o<160||s===237&&o>=160||(192&(i=e[n++]))!=128?(n--,dt()):r.push((15&s)<<12|(63&o)<<6|63&i)):s<=244?n>=t-2?dt():(o=e[n++],(192&o)!=128||o-144+(s<<28)>>30!=0||(192&(i=e[n++]))!=128||(192&(a=e[n++]))!=128?(n--,dt()):(s=(7&s)<<18|(63&o)<<12|(63&i)<<6|63&a,s-=65536,r.push(55296+(s>>10&1023),56320+(1023&s)))):dt(),r.length>=8192&&(l=ai(l,r),r.length=0)}n=ai(l,r)}return n}function _c(e){const t=Tr(e.g);return fc(e.g,t)}function ya(e,t,r){var i=Tr(e.g);for(i=e.g.g+i;e.g.g<i;)r.push(t(e.g))}var ba=[];function Ly(e){return e}let Fi;function Yt(e,t,r){t.g?t.m(e,t.g,t.h,r):t.m(e,t.h,r)}var ee=class{constructor(t,r){this.u=ac(t,r)}toJSON(){const t=!Fi;try{return t&&(Fi=nc),yc(this)}finally{t&&(Fi=void 0)}}l(){var t=wb;return t.g?t.l(this,t.g,t.h,!0):t.l(this,t.h,t.defaultValue,!0)}clone(){const t=this.u;return new this.constructor(ca(t,0|t[ne],!1))}N(){return!!(2&(0|this.u[ne]))}};function yc(e){var t=e.u;{t=(e=Fi(t))!==t;let d=e.length;if(d){var r=e[d-1],i=Ps(r);i?d--:r=void 0;var a=e;if(i){e:{var n,s=r,o=!1;if(s)for(let p in s)isNaN(+p)?(n??(n={}))[p]=s[p]:(i=s[p],Array.isArray(i)&&(ra(i)||Gd(i)&&i.size===0)&&(i=null),i==null&&(o=!0),i!=null&&((n??(n={}))[p]=i));if(o||(n=s),n)for(let p in n){o=n;break e}o=null}s=o==null?r!=null:o!==r}for(;d>0&&((n=a[d-1])==null||ra(n)||Gd(n)&&n.size===0);d--)var l=!0;(a!==e||s||l)&&(t?(l||s||o)&&(a.length=d):a=Array.prototype.slice.call(a,0,d),o&&a.push(o)),l=a}else l=e}return l}function bc(e){return e?/^\d+$/.test(e)?(sa(e),new yo(ze,je)):null:Py||(Py=new yo(0,0))}ee.prototype.W=_n,ee.prototype.toString=function(){try{return Fi=Ly,yc(this).toString()}finally{Fi=void 0}};var yo=class{constructor(t,r){this.h=t>>>0,this.g=r>>>0}};let Py;function wc(e){return e?/^-?\d+$/.test(e)?(sa(e),new bo(ze,je)):null:Uy||(Uy=new bo(0,0))}var bo=class{constructor(t,r){this.h=t>>>0,this.g=r>>>0}};let Uy;function Gi(e,t,r){for(;r>0||t>127;)e.g.push(127&t|128),t=(t>>>7|r<<25)>>>0,r>>>=7;e.g.push(t)}function Vi(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function wa(e,t){if(t>=0)Vi(e,t);else{for(let r=0;r<9;r++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function $n(e,t){e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function Wi(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function xt(e,t,r){Vi(e.g,8*t+r)}function wo(e,t){return xt(e,t,2),t=e.g.end(),Wi(e,t),t.push(e.h),t}function vo(e,t){var r=t.pop();for(r=e.h+e.g.length()-r;r>127;)t.push(127&r|128),r>>>=7,e.h++;t.push(r),e.h++}function va(e,t,r){xt(e,t,2),Vi(e.g,r.length),Wi(e,e.g.end()),Wi(e,r)}function $a(e,t,r,i){r!=null&&(t=wo(e,t),i(r,e),vo(e,t))}function Xt(){const e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var $o=Xt(),vc=Xt(),xo=Xt(),Eo=Xt(),$c=Xt(),xc=Xt(),To=Xt(),Ec=Xt(),Tc=Xt(),qi=class{constructor(e,t,r){this.g=e,this.h=t,e=$o,this.l=!!e&&r===e||!1}};function xa(e,t){return new qi(e,t,$o)}function Sc(e,t,r,i,a){$a(e,r,zc(t,i),a)}const Fy=xa((function(e,t,r,i,a){return e.h===2&&(vn(e,uo(t,i,r),a),!0)}),Sc),Gy=xa((function(e,t,r,i,a){return e.h===2&&(vn(e,uo(t,i,r,!0),a),!0)}),Sc);var Ea=Symbol(),So=Symbol(),kc=Symbol(),Ac=Symbol();let Cc,Ic;function di(e,t,r,i){var a=i[e];if(a)return a;(a={}).Pa=i,a.V=(function(f){switch(typeof f){case"boolean":return tc||(tc=[0,void 0,!0]);case"number":return f>0?void 0:f===0?Ny||(Ny=[0,void 0]):[-f,void 0];case"string":return[0,f];case"object":return f}})(i[0]);var n=i[1];let s=1;n&&n.constructor===Object&&(a.ga=n,typeof(n=i[++s])=="function"&&(a.la=!0,Cc??(Cc=n),Ic??(Ic=i[s+1]),n=i[s+=2]));const o={};for(;n&&Array.isArray(n)&&n.length&&typeof n[0]=="number"&&n[0]>0;){for(var l=0;l<n.length;l++)o[n[l]]=n;n=i[++s]}for(l=1;n!==void 0;){let f;typeof n=="number"&&(l+=n,n=i[++s]);var d=void 0;if(n instanceof qi?f=n:(f=Fy,s--),f==null?void 0:f.l){n=i[++s],d=i;var p=s;typeof n=="function"&&(n=n(),d[p]=n),d=n}for(p=l+1,typeof(n=i[++s])=="number"&&n<0&&(p-=n,n=i[++s]);l<p;l++){const m=o[l];d?r(a,l,f,d,m):t(a,l,f,m)}}return i[e]=a}function Oc(e){return Array.isArray(e)?e[0]instanceof qi?e:[Gy,e]:[e,void 0]}function zc(e,t){return e instanceof ee?e.u:Array.isArray(e)?Fr(e,t,!1):void 0}function ko(e,t,r,i){const a=r.g;e[t]=i?(n,s,o)=>a(n,s,o,i):a}function Ao(e,t,r,i,a){const n=r.g;let s,o;e[t]=(l,d,p)=>n(l,d,p,o||(o=di(So,ko,Ao,i).V),s||(s=Co(i)),a)}function Co(e){let t=e[kc];if(t!=null)return t;const r=di(So,ko,Ao,e);return t=r.la?(i,a)=>Cc(i,a,r):(i,a)=>{const n=0|i[ne];for(;gc(a)&&a.h!=4;){var s=a.m,o=r[s];if(o==null){var l=r.ga;l&&(l=l[s])&&(l=Vy(l))!=null&&(o=r[s]=l)}o!=null&&o(a,i,s)||(s=(o=a).l,_a(o),o.fa?o=void 0:(l=o.g.g-s,o.g.g=s,o=fc(o.g,l)),s=i,o&&((l=s[zi])?l.push(o):s[zi]=[o]))}return 16384&n&&Ri(i),!0},e[kc]=t}function Vy(e){const t=(e=Oc(e))[0].g;if(e=e[1]){const r=Co(e),i=di(So,ko,Ao,e).V;return(a,n,s)=>t(a,n,s,i,r)}return t}function Ta(e,t,r){e[t]=r.h}function Sa(e,t,r,i){let a,n;const s=r.h;e[t]=(o,l,d)=>s(o,l,d,n||(n=di(Ea,Ta,Sa,i).V),a||(a=Rc(i)))}function Rc(e){let t=e[Ac];if(!t){const r=di(Ea,Ta,Sa,e);t=(i,a)=>Mc(i,a,r),e[Ac]=t}return t}function Mc(e,t,r){for(var i=0|e[ne],a=512&i?0:-1,n=e.length,s=512&i?1:0,o=n+(256&i?-1:0);s<o;s++){const l=e[s];if(l==null)continue;const d=s-a,p=Nc(r,d);p&&p(t,l,d)}if(256&i){i=e[n-1];for(const l in i)a=+l,Number.isNaN(a)||(n=i[a])!=null&&(o=Nc(r,a))&&o(t,n,a)}if(e=Fs(e))for(Wi(t,t.g.end()),r=0;r<e.length;r++)Wi(t,Rs(e[r])||new Uint8Array(0))}function Nc(e,t){var r=e[t];if(r)return r;if((r=e.ga)&&(r=r[t])){var i=(r=Oc(r))[0].h;if(r=r[1]){const a=Rc(r),n=di(Ea,Ta,Sa,r).V;r=e.la?Ic(n,a):(s,o,l)=>i(s,o,l,n,a)}else r=i;return e[t]=r}}function ji(e,t){if(Array.isArray(t)){var r=0|t[ne];if(4&r)return t;for(var i=0,a=0;i<t.length;i++){const n=e(t[i]);n!=null&&(t[a++]=n)}return a<i&&(t.length=a),Ze(t,-12289&(5|r)),2&r&&Object.freeze(t),t}}function ct(e,t,r){return new qi(e,t,r)}function Hi(e,t,r){return new qi(e,t,r)}function pt(e,t,r){Ve(e,0|e[ne],t,r)}var Wy=xa((function(e,t,r,i,a){return e.h===2&&(e=vn(e,Fr([void 0,void 0],i,!0),a),Pr(i=0|t[ne]),(a=vr(t,i,r))instanceof Lt?(2&a.L)!=0?((a=a.X()).push(e),Ve(t,i,r,a)):a.Na(e):Array.isArray(a)?(2&(0|a[ne])&&Ve(t,i,r,a=oc(a)),a.push(e)):Ve(t,i,r,[e]),!0)}),(function(e,t,r,i,a){if(t instanceof Lt)t.forEach(((n,s)=>{$a(e,r,Fr([s,n],i,!1),a)}));else if(Array.isArray(t))for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)&&$a(e,r,Fr(s,i,!1),a)}}));function Bc(e,t,r){if(t=(function(i){if(i==null)return i;const a=typeof i;if(a==="bigint")return String(Hs(64,i));if(la(i)){if(a==="string")return Ys(i);if(a==="number")return Ks(i)}})(t),t!=null&&(typeof t=="string"&&wc(t),t!=null))switch(xt(e,r,0),typeof t){case"number":e=e.g,Mi(t),Gi(e,ze,je);break;case"bigint":r=BigInt.asUintN(64,t),r=new bo(Number(r&BigInt(4294967295)),Number(r>>BigInt(32))),Gi(e.g,r.h,r.g);break;default:r=wc(t),Gi(e.g,r.h,r.g)}}function Dc(e,t,r){(t=Bi(t))!=null&&t!=null&&(xt(e,r,0),wa(e.g,t))}function Lc(e,t,r){(t=Yd(t))!=null&&(xt(e,r,0),e.g.g.push(t?1:0))}function Pc(e,t,r){(t=Li(t))!=null&&va(e,r,Td(t))}function Uc(e,t,r,i,a){$a(e,r,zc(t,i),a)}function Fc(e,t,r){(t=t==null||typeof t=="string"||fn(t)||t instanceof wr?t:void 0)!=null&&va(e,r,co(t).buffer)}function Gc(e,t,r){return(e.h===5||e.h===2)&&(t=Ui(t,0|t[ne],r,!1,!1),e.h==2?ya(e,mo,t):t.push(mo(e.g)),!0)}var Sr=ct((function(e,t,r){if(e.h!==1)return!1;var i=e.g;e=fo(i);const a=fo(i);i=2*(a>>31)+1;const n=a>>>20&2047;return e=4294967296*(1048575&a)+e,pt(t,r,n==2047?e?NaN:i*(1/0):n==0?5e-324*i*e:i*Math.pow(2,n-1075)*(e+4503599627370496)),!0}),(function(e,t,r){(t=Ur(t))!=null&&(xt(e,r,1),e=e.g,(r=jd||(jd=new DataView(new ArrayBuffer(8)))).setFloat64(0,+t,!0),ze=r.getUint32(0,!0),je=r.getUint32(4,!0),$n(e,ze),$n(e,je))}),Xt()),Qe=ct((function(e,t,r){return e.h===5&&(pt(t,r,mo(e.g)),!0)}),(function(e,t,r){(t=Ur(t))!=null&&(xt(e,r,5),e=e.g,Vs(t),$n(e,ze))}),To),qy=Hi(Gc,(function(e,t,r){if((t=ji(Ur,t))!=null)for(let s=0;s<t.length;s++){var i=e,a=r,n=t[s];n!=null&&(xt(i,a,5),i=i.g,Vs(n),$n(i,ze))}}),To),Io=Hi(Gc,(function(e,t,r){if((t=ji(Ur,t))!=null&&t.length){xt(e,r,2),Vi(e.g,4*t.length);for(let i=0;i<t.length;i++)r=e.g,Vs(t[i]),$n(r,ze)}}),To),Wr=ct((function(e,t,r){return e.h===0&&(pt(t,r,po(e.g,qs)),!0)}),Bc,xc),Oo=ct((function(e,t,r){return e.h===0&&(pt(t,r,(e=po(e.g,qs))===0?void 0:e),!0)}),Bc,xc),jy=ct((function(e,t,r){return e.h===0&&(pt(t,r,po(e.g,Ws)),!0)}),(function(e,t,r){if((t=ky(t))!=null&&(typeof t=="string"&&bc(t),t!=null))switch(xt(e,r,0),typeof t){case"number":e=e.g,Mi(t),Gi(e,ze,je);break;case"bigint":r=BigInt.asUintN(64,t),r=new yo(Number(r&BigInt(4294967295)),Number(r>>BigInt(32))),Gi(e.g,r.h,r.g);break;default:r=bc(t),Gi(e.g,r.h,r.g)}}),Xt()),He=ct((function(e,t,r){return e.h===0&&(pt(t,r,Vr(e.g)),!0)}),Dc,Eo),ka=Hi((function(e,t,r){return(e.h===0||e.h===2)&&(t=Ui(t,0|t[ne],r,!1,!1),e.h==2?ya(e,Vr,t):t.push(Vr(e.g)),!0)}),(function(e,t,r){if((t=ji(Bi,t))!=null&&t.length){r=wo(e,r);for(let i=0;i<t.length;i++)wa(e.g,t[i]);vo(e,r)}}),Eo),Ki=ct((function(e,t,r){return e.h===0&&(pt(t,r,(e=Vr(e.g))===0?void 0:e),!0)}),Dc,Eo),Le=ct((function(e,t,r){return e.h===0&&(pt(t,r,ho(e.g)),!0)}),Lc,vc),Yi=ct((function(e,t,r){return e.h===0&&(pt(t,r,(e=ho(e.g))===!1?void 0:e),!0)}),Lc,vc),ut=Hi((function(e,t,r){return e.h===2&&(e=_o(e),Ui(t,0|t[ne],r,!1).push(e),!0)}),(function(e,t,r){if((t=ji(Li,t))!=null)for(let s=0;s<t.length;s++){var i=e,a=r,n=t[s];n!=null&&va(i,a,Td(n))}}),xo),qr=ct((function(e,t,r){return e.h===2&&(pt(t,r,(e=_o(e))===""?void 0:e),!0)}),Pc,xo),ke=ct((function(e,t,r){return e.h===2&&(pt(t,r,_o(e)),!0)}),Pc,xo),rt=(function(e,t,r=$o){return new qi(e,t,r)})((function(e,t,r,i,a){return e.h===2&&(i=Fr(void 0,i,!0),Ui(t,0|t[ne],r,!0).push(i),vn(e,i,a),!0)}),(function(e,t,r,i,a){if(Array.isArray(t))for(let n=0;n<t.length;n++)Uc(e,t[n],r,i,a)})),Ie=xa((function(e,t,r,i,a,n){return e.h===2&&(uc(t,0|t[ne],n,r),vn(e,t=uo(t,i,r),a),!0)}),Uc),Vc=ct((function(e,t,r){return e.h===2&&(pt(t,r,_c(e)),!0)}),Fc,Ec),Hy=Hi((function(e,t,r){return(e.h===0||e.h===2)&&(t=Ui(t,0|t[ne],r,!1,!1),e.h==2?ya(e,Tr,t):t.push(Tr(e.g)),!0)}),(function(e,t,r){if((t=ji(Xd,t))!=null)for(let s=0;s<t.length;s++){var i=e,a=r,n=t[s];n!=null&&(xt(i,a,0),Vi(i.g,n))}}),$c),Ky=ct((function(e,t,r){return e.h===0&&(pt(t,r,(e=Tr(e.g))===0?void 0:e),!0)}),(function(e,t,r){(t=Xd(t))!=null&&t!=null&&(xt(e,r,0),Vi(e.g,t))}),$c),Ft=ct((function(e,t,r){return e.h===0&&(pt(t,r,Vr(e.g)),!0)}),(function(e,t,r){(t=Bi(t))!=null&&(t=parseInt(t,10),xt(e,r,0),wa(e.g,t))}),Tc);class Yy{constructor(t,r){this.h=t,this.g=r,this.l=ve,this.m=oe,this.defaultValue=void 0}}function Zt(e,t){return new Yy(e,t)}function jr(e,t){return(r,i)=>{if(ba.length){const n=ba.pop();n.o(i),go(n.g,r,i),r=n}else r=new class{constructor(n,s){if(mc.length){const o=mc.pop();go(o,n,s),n=o}else n=new class{constructor(o,l){this.h=null,this.m=!1,this.g=this.l=this.j=0,go(this,o,l)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ba=!1}}(n,s);this.g=n,this.l=this.g.g,this.h=this.m=-1,this.o(s)}o({fa:n=!1}={}){this.fa=n}}(r,i);try{const n=new e,s=n.u;Co(t)(s,r);var a=n}finally{r.g.clear(),r.m=-1,r.h=-1,ba.length<100&&ba.push(r)}return a}}function Aa(e){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const s=this.g;return this.g=[],s}}}};Mc(this.u,t,di(Ea,Ta,Sa,e)),Wi(t,t.g.end());const r=new Uint8Array(t.h),i=t.l,a=i.length;let n=0;for(let s=0;s<a;s++){const o=i[s];r.set(o,n),n+=o.length}return t.l=[r],r}}var Wc=class extends ee{constructor(e){super(e)}},qc=[0,qr,ct((function(e,t,r){return e.h===2&&(pt(t,r,(e=_c(e))===si()?void 0:e),!0)}),(function(e,t,r){if(t!=null){if(t instanceof ee){const i=t.Ra;return void(i&&(t=i(t),t!=null&&va(e,r,co(t).buffer)))}if(Array.isArray(t))return}Fc(e,t,r)}),Ec)];let zo,jc=globalThis.trustedTypes;function Hc(e){zo===void 0&&(zo=(function(){let r=null;if(!jc)return r;try{const i=a=>a;r=jc.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return r})());var t=zo;return new class{constructor(r){this.g=r}toString(){return this.g+""}}(t?t.createScriptURL(e):e)}function Xy(e,...t){if(t.length===0)return Hc(e[0]);let r=e[0];for(let i=0;i<t.length;i++)r+=encodeURIComponent(t[i])+e[i+1];return Hc(r)}var Kc=[0,He,Ft,Le,-1,ka,Ft,-1],Zy=class extends ee{constructor(e){super(e)}},Yc=[0,Le,ke,Le,Ft,-1,Hi((function(e,t,r){return(e.h===0||e.h===2)&&(t=Ui(t,0|t[ne],r,!1,!1),e.h==2?ya(e,Dy,t):t.push(Vr(e.g)),!0)}),(function(e,t,r){if((t=ji(Bi,t))!=null&&t.length){r=wo(e,r);for(let i=0;i<t.length;i++)wa(e.g,t[i]);vo(e,r)}}),Tc),ke,-1,[0,Le,-1],Ft,Le,-1],Xc=[0,ke,-2],Zc=class extends ee{constructor(e){super(e)}},Qc=[0],Jc=[0,He,Le,1,Le,-3],Et=class extends ee{constructor(e){super(e,2)}},Je={};Je[336783863]=[0,ke,Le,-1,He,[0,[1,2,3,4,5,6,7,8],Ie,Qc,Ie,Yc,Ie,Xc,Ie,Jc,Ie,Kc,Ie,[0,ke,-2],Ie,[0,ke,Ft],Ie,[0,Ft,ke]],[0,ke],Le,[0,[1,3],[2,4],Ie,[0,ka],-1,Ie,[0,ut],-1,rt,[0,ke,-1]],ke];var ep=[0,Oo,-1,Yi,-3,Oo,ka,qr,Ki,Oo,-1,Yi,Ki,Yi,-2,qr];function Tt(e,t){no(e,2,Di(t),"")}function Ne(e,t){ga(e,3,t)}function be(e,t){ga(e,4,t)}var ht=class extends ee{constructor(t){super(t,500)}o(t){return oe(this,0,7,t)}},xn=[-1,{}],tp=[0,ke,1,xn],rp=[0,ke,ut,xn];function St(e,t){fa(e,1,ht,t)}function Be(e,t){ga(e,10,t)}function Ee(e,t){ga(e,15,t)}var yt=class extends ee{constructor(e){super(e,500)}o(e){return oe(this,0,1001,e)}},ip=[-500,rt,[-500,qr,-1,ut,-3,[-2,Je,Le],rt,qc,Ki,-1,tp,rp,rt,[0,qr,Yi],qr,ep,Ki,ut,987,ut],4,rt,[-500,ke,-1,[-1,{}],998,ke],rt,[-500,ke,ut,-1,[-2,{},Le],997,ut,-1],Ki,rt,[-500,ke,ut,xn,998,ut],ut,Ki,tp,rp,rt,[0,qr,-1,xn],ut,-2,ep,qr,-1,Yi,[0,Yi,Ky],978,xn,rt,qc];yt.prototype.g=Aa(ip);var Qy=jr(yt,ip),Jy=class extends ee{constructor(t){super(t)}},np=class extends ee{constructor(t){super(t)}g(){return xr(this,Jy,1)}},ap=[0,rt,[0,He,Qe,ke,-1]],Ca=jr(np,ap),eb=class extends ee{constructor(t){super(t)}},tb=class extends ee{constructor(t){super(t)}},Ro=class extends ee{constructor(t){super(t)}h(){return ve(this,eb,2)}g(){return xr(this,tb,5)}},sp=jr(class extends ee{constructor(e){super(e)}},[0,ut,ka,Io,[0,Ft,[0,He,-3],[0,Qe,-3],[0,He,-1,[0,rt,[0,He,-2]]],rt,[0,Qe,-1,ke,Qe]],ke,-1,Wr,rt,[0,He,Qe],ut,Wr]),op=class extends ee{constructor(t){super(t)}},Xi=jr(class extends ee{constructor(e){super(e)}},[0,rt,[0,Qe,-4]]),up=class extends ee{constructor(t){super(t)}},En=jr(class extends ee{constructor(e){super(e)}},[0,rt,[0,Qe,-4]]),rb=class extends ee{constructor(t){super(t)}},ib=[0,He,-1,Io,Ft],lp=class extends ee{constructor(t){super(t)}};lp.prototype.g=Aa([0,Qe,-4,Wr]);var nb=class extends ee{constructor(t){super(t)}},ab=jr(class extends ee{constructor(e){super(e)}},[0,rt,[0,1,He,ke,ap],Wr]),dp=class extends ee{constructor(t){super(t)}},sb=class extends ee{constructor(t){super(t)}oa(){const t=sc(this);return t??si()}},ob=class extends ee{constructor(t){super(t)}},cp=[1,2],ub=jr(class extends ee{constructor(e){super(e)}},[0,rt,[0,cp,Ie,[0,Io],Ie,[0,Vc],He,ke],Wr]),Mo=class extends ee{constructor(t){super(t)}},pp=[0,ke,He,Qe,ut,-1],hp=class extends ee{constructor(t){super(t)}},lb=[0,Le,-1],fp=class extends ee{constructor(t){super(t)}},Ia=[1,2,3,4,5],Oa=class extends ee{constructor(t){super(t)}g(){return sc(this)!=null}h(){return Ut(this,2)!=null}},Pe=class extends ee{constructor(t){super(t)}g(){return Yd(Pi(this,2))??!1}},mp=[0,Vc,ke,[0,He,Wr,-1],[0,jy,Wr]],Ye=[0,mp,Le,[0,Ia,Ie,Jc,Ie,Yc,Ie,Kc,Ie,Qc,Ie,Xc],Ft],za=class extends ee{constructor(t){super(t)}},No=[0,Ye,Qe,-1,He],db=Zt(502141897,za);Je[502141897]=No;var cb=jr(class extends ee{constructor(e){super(e)}},[0,[0,Ft,-1,qy,Hy],ib]),gp=class extends ee{constructor(t){super(t)}},_p=class extends ee{constructor(t){super(t)}},Bo=[0,Ye,Qe,[0,Ye],Le],yp=[0,Ye,No,Bo,Qe,[0,[0,mp]]],pb=Zt(508968150,_p);Je[508968150]=yp,Je[508968149]=Bo;var bp=class extends ee{constructor(t){super(t)}},hb=Zt(513916220,bp);Je[513916220]=[0,Ye,yp,He];var Zi=class extends ee{constructor(t){super(t)}h(){return ve(this,Mo,2)}g(){Me(this,2)}},wp=[0,Ye,pp];Je[478825465]=wp;var fb=class extends ee{constructor(t){super(t)}},vp=class extends ee{constructor(t){super(t)}},Do=class extends ee{constructor(t){super(t)}},Lo=class extends ee{constructor(t){super(t)}},$p=class extends ee{constructor(t){super(t)}},xp=[0,Ye,[0,Ye],wp,-1],Ep=[0,Ye,Qe,He],Po=[0,Ye,Qe],Tp=[0,Ye,Ep,Po,Qe],mb=Zt(479097054,$p);Je[479097054]=[0,Ye,Tp,xp],Je[463370452]=xp,Je[464864288]=Ep;var gb=Zt(462713202,Lo);Je[462713202]=Tp,Je[474472470]=Po;var _b=class extends ee{constructor(t){super(t)}},Sp=class extends ee{constructor(t){super(t)}},kp=class extends ee{constructor(t){super(t)}},Ap=class extends ee{constructor(t){super(t)}},Uo=[0,Ye,Qe,-1,He],Fo=[0,Ye,Qe,Le];Ap.prototype.g=Aa([0,Ye,Po,[0,Ye],No,Bo,Uo,Fo]);var Cp=class extends ee{constructor(t){super(t)}},yb=Zt(456383383,Cp);Je[456383383]=[0,Ye,pp];var Ip=class extends ee{constructor(t){super(t)}},bb=Zt(476348187,Ip);Je[476348187]=[0,Ye,lb];var Op=class extends ee{constructor(t){super(t)}},zp=class extends ee{constructor(t){super(t)}},Rp=[0,Ft,-1],wb=Zt(458105876,class extends ee{constructor(e){super(e)}g(){var e=this.u;const t=0|e[ne],r=2&t;return e=(function(i,a,n){var s=zp;const o=2&a;let l=!1;if(n==null){if(o)return rc();n=[]}else if(n.constructor===Lt){if((2&n.L)==0||o)return n;n=n.X()}else Array.isArray(n)?l=!!(2&(0|n[ne])):n=[];if(o){if(!n.length)return rc();l||(l=!0,Ri(n))}else l&&(l=!1,n=oc(n));return l||(64&(0|n[ne])?n[ne]&=-33:32&a&&ta(n,32)),Ve(i,a,2,s=new Lt(n,s,Ay,void 0)),s})(e,t,vr(e,t,2)),!r&&zp&&(e.ra=!0),e}});Je[458105876]=[0,Rp,Wy,[!0,Wr,[0,ke,-1,ut]]];var Go=class extends ee{constructor(t){super(t)}},Mp=Zt(458105758,Go);Je[458105758]=[0,Ye,ke,Rp];var Np=class extends ee{constructor(t){super(t)}},vb=Zt(443442058,Np);Je[443442058]=[0,Ye,ke,He,Qe,ut,-1,Le,Qe],Je[514774813]=Uo;var Bp=class extends ee{constructor(t){super(t)}},$b=Zt(516587230,Bp);function Vo(e,t){return t=t?t.clone():new Mo,e.displayNamesLocale!==void 0?Me(t,1,Di(e.displayNamesLocale)):e.displayNamesLocale===void 0&&Me(t,1),e.maxResults!==void 0?ur(t,2,e.maxResults):"maxResults"in e&&Me(t,2),e.scoreThreshold!==void 0?re(t,3,e.scoreThreshold):"scoreThreshold"in e&&Me(t,3),e.categoryAllowlist!==void 0?ma(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&Me(t,4),e.categoryDenylist!==void 0?ma(t,5,e.categoryDenylist):"categoryDenylist"in e&&Me(t,5),t}function Wo(e,t=-1,r=""){return{categories:e.map((i=>({index:Pt(i,1)??0??-1,score:Ke(i,2)??0,categoryName:Ut(i,3)??""??"",displayName:Ut(i,4)??""??""}))),headIndex:t,headName:r}}function Dp(e){var s,o;var t=ui(e,3,Ur,oi()),r=ui(e,2,Bi,oi()),i=ui(e,1,Li,oi()),a=ui(e,9,Li,oi());const n={categories:[],keypoints:[]};for(let l=0;l<t.length;l++)n.categories.push({score:t[l],index:r[l]??-1,categoryName:i[l]??"",displayName:a[l]??""});if((t=(s=ve(e,Ro,4))==null?void 0:s.h())&&(n.boundingBox={originX:Pt(t,1)??0,originY:Pt(t,2)??0,width:Pt(t,3)??0,height:Pt(t,4)??0,angle:0}),(o=ve(e,Ro,4))==null?void 0:o.g().length)for(const l of ve(e,Ro,4).g())n.keypoints.push({x:ha(l,1)??0,y:ha(l,2)??0,score:ha(l,4)??0,label:Ut(l,3)??""});return n}function Ra(e){const t=[];for(const r of xr(e,up,1))t.push({x:Ke(r,1)??0,y:Ke(r,2)??0,z:Ke(r,3)??0,visibility:Ke(r,4)??0});return t}function Tn(e){const t=[];for(const r of xr(e,op,1))t.push({x:Ke(r,1)??0,y:Ke(r,2)??0,z:Ke(r,3)??0,visibility:Ke(r,4)??0});return t}function Lp(e){return Array.from(e,(t=>t>127?t-256:t))}function Pp(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let r=0,i=0,a=0;for(let n=0;n<e.length;n++)r+=e[n]*t[n],i+=e[n]*e[n],a+=t[n]*t[n];if(i<=0||a<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return r/Math.sqrt(i*a)}let Ma;Je[516587230]=[0,Ye,Uo,Fo,Qe],Je[518928384]=Fo;const xb=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Up(){if(Ma===void 0)try{await WebAssembly.instantiate(xb),Ma=!0}catch{Ma=!1}return Ma}async function Sn(e,t=Xy``){const r=await Up()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${e}_${r}.js`,wasmBinaryPath:`${t}/${e}_${r}.wasm`}}var ci=class{};function Fp(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function Gp(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise(((r,i)=>{t.addEventListener("load",(()=>{r()}),!1),t.addEventListener("error",(a=>{i(a)}),!1),document.body.appendChild(t)}))}importScripts(e.toString())}function Vp(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function ae(e,t,r){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),r(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function Wp(e,t,r){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(r?e.i._bindTextureToStream(r):e.i._bindTextureToCanvas(),!(r=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1);const[i,a]=Vp(t);return!e.l||i===e.i.canvas.width&&a===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=a),[i,a]}function qp(e,t,r){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let a=0;a<t.length;a++)i[a]=e.i.stringToNewUTF8(t[a]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),r(t);for(const a of i)e.i._free(a);e.i._free(t)}function lr(e,t,r){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=r}function Hr(e,t,r){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(a,n,s)=>{n?(r(i,s),i=[]):i.push(a)}}ci.forVisionTasks=function(e){return Sn("vision",e)},ci.forTextTasks=function(e){return Sn("text",e)},ci.forGenAiExperimentalTasks=function(e){return Sn("genai_experimental",e)},ci.forGenAiTasks=function(e){return Sn("genai",e)},ci.forAudioTasks=function(e){return Sn("audio",e)},ci.isSimdSupported=function(){return Up()};async function Eb(e,t,r,i){return e=await(async(a,n,s,o,l)=>{if(n&&await Gp(n),!self.ModuleFactory||s&&(await Gp(s),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((n=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(n.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new a(l,o)})(e,r.wasmLoaderPath,r.assetLoaderPath,t,{locateFile:a=>a.endsWith(".wasm")?r.wasmBinaryPath.toString():r.assetBinaryPath&&a.endsWith(".data")?r.assetBinaryPath.toString():a}),await e.o(i),e}function qo(e,t){const r=ve(e.baseOptions,Oa,1)||new Oa;typeof t=="string"?(Me(r,2,Di(t)),Me(r,1)):t instanceof Uint8Array&&(Me(r,1,Us(t,!1)),Me(r,2)),oe(e.baseOptions,0,1,r)}function jp(e){try{const t=e.G.length;if(t===1)throw Error(e.G[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.G.map((r=>r.message)).join(", "))}finally{e.G=[]}}function Y(e,t){e.B=Math.max(e.B,t)}function Na(e,t){e.A=new ht,Tt(e.A,"PassThroughCalculator"),Ne(e.A,"free_memory"),be(e.A,"free_memory_unused_out"),Be(t,"free_memory"),St(t,e.A)}function Qi(e,t){Ne(e.A,t),be(e.A,t+"_unused_out")}function Ba(e){e.g.addBoolToStream(!0,"free_memory",e.B)}var Da=class{constructor(t){this.g=t,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(t,r=!0){var i,a,n,s,o,l;if(r){const d=t.baseOptions||{};if((i=t.baseOptions)!=null&&i.modelAssetBuffer&&((a=t.baseOptions)!=null&&a.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((n=ve(this.baseOptions,Oa,1))!=null&&n.g()||(s=ve(this.baseOptions,Oa,1))!=null&&s.h()||(o=t.baseOptions)!=null&&o.modelAssetBuffer||(l=t.baseOptions)!=null&&l.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(p,f){let m=ve(p.baseOptions,fp,3);if(!m){var _=m=new fp,y=new Zc;bn(_,4,Ia,y)}"delegate"in f&&(f.delegate==="GPU"?(f=m,_=new Zy,bn(f,2,Ia,_)):(f=m,_=new Zc,bn(f,4,Ia,_))),oe(p.baseOptions,0,3,m)})(this,d),d.modelAssetPath)return fetch(d.modelAssetPath.toString()).then((p=>{if(p.ok)return p.arrayBuffer();throw Error(`Failed to fetch model: ${d.modelAssetPath} (${p.status})`)})).then((p=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(p),!0,!1,!1),qo(this,"/model.dat"),this.m(),this.I()}));if(d.modelAssetBuffer instanceof Uint8Array)qo(this,d.modelAssetBuffer);else if(d.modelAssetBuffer)return(async function(p){const f=[];for(var m=0;;){const{done:_,value:y}=await p.read();if(_)break;f.push(y),m+=y.length}if(f.length===0)return new Uint8Array(0);if(f.length===1)return f[0];p=new Uint8Array(m),m=0;for(const _ of f)p.set(_,m),m+=_.length;return p})(d.modelAssetBuffer).then((p=>{qo(this,p),this.m(),this.I()}))}return this.m(),this.I(),Promise.resolve()}I(){}da(){let t;if(this.g.da((r=>{t=Qy(r)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,r){this.g.attachErrorListener(((i,a)=>{this.G.push(Error(a))})),this.g.La(),this.g.setGraph(t,r),this.A=void 0,jp(this)}finishProcessing(){this.g.finishProcessing(),jp(this)}close(){this.A=void 0,this.g.closeGraph()}};function kr(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}Da.prototype.close=Da.prototype.close,(function(e,t){e=e.split(".");var r,i=$t;for((e[0]in i)||i.execScript===void 0||i.execScript("var "+e[0]);e.length&&(r=e.shift());)e.length||t===void 0?i=i[r]&&i[r]!==Object.prototype[r]?i[r]:i[r]={}:i[r]=t})("TaskRunner",Da);class Tb{constructor(t,r,i,a){this.g=t,this.h=r,this.m=i,this.l=a}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Hp(e,t,r){const i=e.g;if(r=kr(i.createShader(r),"Failed to create WebGL shader"),i.shaderSource(r,t),i.compileShader(r),!i.getShaderParameter(r,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(r)}`);return i.attachShader(e.h,r),r}function Kp(e,t){const r=e.g,i=kr(r.createVertexArray(),"Failed to create vertex array");r.bindVertexArray(i);const a=kr(r.createBuffer(),"Failed to create buffer");r.bindBuffer(r.ARRAY_BUFFER,a),r.enableVertexAttribArray(e.O),r.vertexAttribPointer(e.O,2,r.FLOAT,!1,0,0),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),r.STATIC_DRAW);const n=kr(r.createBuffer(),"Failed to create buffer");return r.bindBuffer(r.ARRAY_BUFFER,n),r.enableVertexAttribArray(e.I),r.vertexAttribPointer(e.I,2,r.FLOAT,!1,0,0),r.bufferData(r.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),r.STATIC_DRAW),r.bindBuffer(r.ARRAY_BUFFER,null),r.bindVertexArray(null),new Tb(r,i,a,n)}function jo(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function Ho(e,t,r,i){return jo(e,t),e.h||(e.m(),e.C()),r?(e.s||(e.s=Kp(e,!0)),r=e.s):(e.v||(e.v=Kp(e,!1)),r=e.v),t.useProgram(e.h),r.bind(),e.l(),e=i(),r.g.bindVertexArray(null),e}function La(e,t,r){return jo(e,t),e=kr(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,r??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,r??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function Pa(e,t,r){jo(e,t),e.A||(e.A=kr(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.A),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0)}function Ko(e){var t;(t=e.g)==null||t.bindFramebuffer(e.g.FRAMEBUFFER,null)}var Yo=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=kr(t.createProgram(),"Failed to create WebGL program"),this.aa=Hp(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.Z=Hp(this,this.G(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.I=t.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.aa),t.deleteShader(this.Z)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}};function Ar(e,t){switch(t){case 0:return e.g.find((r=>r instanceof Uint8Array));case 1:return e.g.find((r=>r instanceof Float32Array));case 2:return e.g.find((r=>typeof WebGLTexture<"u"&&r instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function Xo(e){var t=Ar(e,1);if(!t){if(t=Ar(e,0))t=new Float32Array(t).map((i=>i/255));else{t=new Float32Array(e.width*e.height);const i=Ji(e);var r=Zo(e);if(Pa(r,i,Yp(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){r=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,r);for(let a=0,n=0;a<t.length;++a,n+=4)t[a]=r[n]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function Yp(e){let t=Ar(e,2);if(!t){const r=Ji(e);t=Zp(e);const i=Xo(e),a=Xp(e);r.texImage2D(r.TEXTURE_2D,0,a,e.width,e.height,0,r.RED,r.FLOAT,i),Qo(e)}return t}function Ji(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=kr(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function Xp(e){if(e=Ji(e),!Ua)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))Ua=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Ua=e.R16F}return Ua}function Zo(e){return e.l||(e.l=new Yo),e.l}function Zp(e){const t=Ji(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let r=Ar(e,2);return r||(r=La(Zo(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(r),e.j=!0),t.bindTexture(t.TEXTURE_2D,r),r}function Qo(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var Ua,nt=class{constructor(t,r,i,a,n,s,o){this.g=t,this.m=r,this.j=i,this.canvas=a,this.l=n,this.width=s,this.height=o,this.j&&--Qp===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Ar(this,0)}ja(){return!!Ar(this,1)}P(){return!!Ar(this,2)}ia(){return(r=Ar(t=this,0))||(r=Xo(t),r=new Uint8Array(r.map((i=>255*i))),t.g.push(r)),r;var t,r}ha(){return Xo(this)}M(){return Yp(this)}clone(){const t=[];for(const r of this.g){let i;if(r instanceof Uint8Array)i=new Uint8Array(r);else if(r instanceof Float32Array)i=new Float32Array(r);else{if(!(r instanceof WebGLTexture))throw Error(`Type is not supported: ${r}`);{const a=Ji(this),n=Zo(this);a.activeTexture(a.TEXTURE1),i=La(n,a,this.m?a.LINEAR:a.NEAREST),a.bindTexture(a.TEXTURE_2D,i);const s=Xp(this);a.texImage2D(a.TEXTURE_2D,0,s,this.width,this.height,0,a.RED,a.FLOAT,null),a.bindTexture(a.TEXTURE_2D,null),Pa(n,a,i),Ho(n,a,!1,(()=>{Zp(this),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.drawArrays(a.TRIANGLE_FAN,0,4),Qo(this)})),Ko(n),Qo(this)}}t.push(i)}return new nt(t,this.m,this.P(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ji(this).deleteTexture(Ar(this,2)),Qp=-1}};nt.prototype.close=nt.prototype.close,nt.prototype.clone=nt.prototype.clone,nt.prototype.getAsWebGLTexture=nt.prototype.M,nt.prototype.getAsFloat32Array=nt.prototype.ha,nt.prototype.getAsUint8Array=nt.prototype.ia,nt.prototype.hasWebGLTexture=nt.prototype.P,nt.prototype.hasFloat32Array=nt.prototype.ja,nt.prototype.hasUint8Array=nt.prototype.Fa;var Qp=250;function dr(e,t){switch(t){case 0:return e.g.find((r=>r instanceof ImageData));case 1:return e.g.find((r=>typeof ImageBitmap<"u"&&r instanceof ImageBitmap));case 2:return e.g.find((r=>typeof WebGLTexture<"u"&&r instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function Jp(e){var t=dr(e,0);if(!t){t=en(e);const r=Ga(e),i=new Uint8Array(e.width*e.height*4);Pa(r,t,Fa(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,i),Ko(r),t=new ImageData(new Uint8ClampedArray(i.buffer),e.width,e.height),e.g.push(t)}return t}function Fa(e){let t=dr(e,2);if(!t){const r=en(e);t=Va(e);const i=dr(e,1)||Jp(e);r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,i),kn(e)}return t}function en(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=kr(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function Ga(e){return e.l||(e.l=new Yo),e.l}function Va(e){const t=en(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let r=dr(e,2);return r||(r=La(Ga(e),t),e.g.push(r),e.m=!0),t.bindTexture(t.TEXTURE_2D,r),r}function kn(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function eh(e){const t=en(e);return Ho(Ga(e),t,!0,(()=>(function(r,i){const a=r.canvas;if(a.width===r.width&&a.height===r.height)return i();const n=a.width,s=a.height;return a.width=r.width,a.height=r.height,r=i(),a.width=n,a.height=s,r})(e,(()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))))}var at=class{constructor(t,r,i,a,n,s,o){this.g=t,this.j=r,this.m=i,this.canvas=a,this.l=n,this.width=s,this.height=o,(this.j||this.m)&&--th===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ea(){return!!dr(this,0)}ka(){return!!dr(this,1)}P(){return!!dr(this,2)}Ca(){return Jp(this)}Ba(){var t=dr(this,1);return t||(Fa(this),Va(this),t=eh(this),kn(this),this.g.push(t),this.j=!0),t}M(){return Fa(this)}clone(){const t=[];for(const r of this.g){let i;if(r instanceof ImageData)i=new ImageData(r.data,this.width,this.height);else if(r instanceof WebGLTexture){const a=en(this),n=Ga(this);a.activeTexture(a.TEXTURE1),i=La(n,a),a.bindTexture(a.TEXTURE_2D,i),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,this.width,this.height,0,a.RGBA,a.UNSIGNED_BYTE,null),a.bindTexture(a.TEXTURE_2D,null),Pa(n,a,i),Ho(n,a,!1,(()=>{Va(this),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.drawArrays(a.TRIANGLE_FAN,0,4),kn(this)})),Ko(n),kn(this)}else{if(!(r instanceof ImageBitmap))throw Error(`Type is not supported: ${r}`);Fa(this),Va(this),i=eh(this),kn(this)}t.push(i)}return new at(t,this.ka(),this.P(),this.canvas,this.l,this.width,this.height)}close(){this.j&&dr(this,1).close(),this.m&&en(this).deleteTexture(dr(this,2)),th=-1}};at.prototype.close=at.prototype.close,at.prototype.clone=at.prototype.clone,at.prototype.getAsWebGLTexture=at.prototype.M,at.prototype.getAsImageBitmap=at.prototype.Ba,at.prototype.getAsImageData=at.prototype.Ca,at.prototype.hasWebGLTexture=at.prototype.P,at.prototype.hasImageBitmap=at.prototype.ka,at.prototype.hasImageData=at.prototype.Ea;var th=250;function Qt(...e){return e.map((([t,r])=>({start:t,end:r})))}const Sb=(function(e){return class extends e{La(){this.i._registerModelResourcesGraphService()}}})((rh=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:Fp()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const r=e.length,i=this.i._malloc(r);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(r,i):this.i._changeTextGraph(r,i),this.i._free(i)}configureAudio(e,t,r,i,a){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),ae(this,i||"input_audio",(n=>{ae(this,a=a||"audio_header",(s=>{this.i._configureAudio(n,s,e,t??0,r)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}da(e){lr(this,"__graph_config__",(t=>{e(t)})),ae(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,r){this.addAudioToStreamWithShape(e,0,0,t,r)}addAudioToStreamWithShape(e,t,r,i,a){const n=4*e.length;this.h!==n&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(n),this.h=n),this.i.HEAPF32.set(e,this.g/4),ae(this,i,(s=>{this.i._addAudioToInputStream(this.g,t,r,s,a)}))}addGpuBufferToStream(e,t,r){ae(this,t,(i=>{const[a,n]=Wp(this,e,i);this.i._addBoundTextureToStream(i,a,n,r)}))}addBoolToStream(e,t,r){ae(this,t,(i=>{this.i._addBoolToInputStream(e,i,r)}))}addDoubleToStream(e,t,r){ae(this,t,(i=>{this.i._addDoubleToInputStream(e,i,r)}))}addFloatToStream(e,t,r){ae(this,t,(i=>{this.i._addFloatToInputStream(e,i,r)}))}addIntToStream(e,t,r){ae(this,t,(i=>{this.i._addIntToInputStream(e,i,r)}))}addUintToStream(e,t,r){ae(this,t,(i=>{this.i._addUintToInputStream(e,i,r)}))}addStringToStream(e,t,r){ae(this,t,(i=>{ae(this,e,(a=>{this.i._addStringToInputStream(a,i,r)}))}))}addStringRecordToStream(e,t,r){ae(this,t,(i=>{qp(this,Object.keys(e),(a=>{qp(this,Object.values(e),(n=>{this.i._addFlatHashMapToInputStream(a,n,Object.keys(e).length,i,r)}))}))}))}addProtoToStream(e,t,r,i){ae(this,r,(a=>{ae(this,t,(n=>{const s=this.i._malloc(e.length);this.i.HEAPU8.set(e,s),this.i._addProtoToInputStream(s,e.length,n,a,i),this.i._free(s)}))}))}addEmptyPacketToStream(e,t){ae(this,e,(r=>{this.i._addEmptyPacketToInputStream(r,t)}))}addBoolVectorToStream(e,t,r){ae(this,t,(i=>{const a=this.i._allocateBoolVector(e.length);if(!a)throw Error("Unable to allocate new bool vector on heap.");for(const n of e)this.i._addBoolVectorEntry(a,n);this.i._addBoolVectorToInputStream(a,i,r)}))}addDoubleVectorToStream(e,t,r){ae(this,t,(i=>{const a=this.i._allocateDoubleVector(e.length);if(!a)throw Error("Unable to allocate new double vector on heap.");for(const n of e)this.i._addDoubleVectorEntry(a,n);this.i._addDoubleVectorToInputStream(a,i,r)}))}addFloatVectorToStream(e,t,r){ae(this,t,(i=>{const a=this.i._allocateFloatVector(e.length);if(!a)throw Error("Unable to allocate new float vector on heap.");for(const n of e)this.i._addFloatVectorEntry(a,n);this.i._addFloatVectorToInputStream(a,i,r)}))}addIntVectorToStream(e,t,r){ae(this,t,(i=>{const a=this.i._allocateIntVector(e.length);if(!a)throw Error("Unable to allocate new int vector on heap.");for(const n of e)this.i._addIntVectorEntry(a,n);this.i._addIntVectorToInputStream(a,i,r)}))}addUintVectorToStream(e,t,r){ae(this,t,(i=>{const a=this.i._allocateUintVector(e.length);if(!a)throw Error("Unable to allocate new unsigned int vector on heap.");for(const n of e)this.i._addUintVectorEntry(a,n);this.i._addUintVectorToInputStream(a,i,r)}))}addStringVectorToStream(e,t,r){ae(this,t,(i=>{const a=this.i._allocateStringVector(e.length);if(!a)throw Error("Unable to allocate new string vector on heap.");for(const n of e)ae(this,n,(s=>{this.i._addStringVectorEntry(a,s)}));this.i._addStringVectorToInputStream(a,i,r)}))}addBoolToInputSidePacket(e,t){ae(this,t,(r=>{this.i._addBoolToInputSidePacket(e,r)}))}addDoubleToInputSidePacket(e,t){ae(this,t,(r=>{this.i._addDoubleToInputSidePacket(e,r)}))}addFloatToInputSidePacket(e,t){ae(this,t,(r=>{this.i._addFloatToInputSidePacket(e,r)}))}addIntToInputSidePacket(e,t){ae(this,t,(r=>{this.i._addIntToInputSidePacket(e,r)}))}addUintToInputSidePacket(e,t){ae(this,t,(r=>{this.i._addUintToInputSidePacket(e,r)}))}addStringToInputSidePacket(e,t){ae(this,t,(r=>{ae(this,e,(i=>{this.i._addStringToInputSidePacket(i,r)}))}))}addProtoToInputSidePacket(e,t,r){ae(this,r,(i=>{ae(this,t,(a=>{const n=this.i._malloc(e.length);this.i.HEAPU8.set(e,n),this.i._addProtoToInputSidePacket(n,e.length,a,i),this.i._free(n)}))}))}addBoolVectorToInputSidePacket(e,t){ae(this,t,(r=>{const i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const a of e)this.i._addBoolVectorEntry(i,a);this.i._addBoolVectorToInputSidePacket(i,r)}))}addDoubleVectorToInputSidePacket(e,t){ae(this,t,(r=>{const i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const a of e)this.i._addDoubleVectorEntry(i,a);this.i._addDoubleVectorToInputSidePacket(i,r)}))}addFloatVectorToInputSidePacket(e,t){ae(this,t,(r=>{const i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const a of e)this.i._addFloatVectorEntry(i,a);this.i._addFloatVectorToInputSidePacket(i,r)}))}addIntVectorToInputSidePacket(e,t){ae(this,t,(r=>{const i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const a of e)this.i._addIntVectorEntry(i,a);this.i._addIntVectorToInputSidePacket(i,r)}))}addUintVectorToInputSidePacket(e,t){ae(this,t,(r=>{const i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const a of e)this.i._addUintVectorEntry(i,a);this.i._addUintVectorToInputSidePacket(i,r)}))}addStringVectorToInputSidePacket(e,t){ae(this,t,(r=>{const i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const a of e)ae(this,a,(n=>{this.i._addStringVectorEntry(i,n)}));this.i._addStringVectorToInputSidePacket(i,r)}))}attachBoolListener(e,t){lr(this,e,t),ae(this,e,(r=>{this.i._attachBoolListener(r)}))}attachBoolVectorListener(e,t){Hr(this,e,t),ae(this,e,(r=>{this.i._attachBoolVectorListener(r)}))}attachIntListener(e,t){lr(this,e,t),ae(this,e,(r=>{this.i._attachIntListener(r)}))}attachIntVectorListener(e,t){Hr(this,e,t),ae(this,e,(r=>{this.i._attachIntVectorListener(r)}))}attachUintListener(e,t){lr(this,e,t),ae(this,e,(r=>{this.i._attachUintListener(r)}))}attachUintVectorListener(e,t){Hr(this,e,t),ae(this,e,(r=>{this.i._attachUintVectorListener(r)}))}attachDoubleListener(e,t){lr(this,e,t),ae(this,e,(r=>{this.i._attachDoubleListener(r)}))}attachDoubleVectorListener(e,t){Hr(this,e,t),ae(this,e,(r=>{this.i._attachDoubleVectorListener(r)}))}attachFloatListener(e,t){lr(this,e,t),ae(this,e,(r=>{this.i._attachFloatListener(r)}))}attachFloatVectorListener(e,t){Hr(this,e,t),ae(this,e,(r=>{this.i._attachFloatVectorListener(r)}))}attachStringListener(e,t){lr(this,e,t),ae(this,e,(r=>{this.i._attachStringListener(r)}))}attachStringVectorListener(e,t){Hr(this,e,t),ae(this,e,(r=>{this.i._attachStringVectorListener(r)}))}attachProtoListener(e,t,r){lr(this,e,t),ae(this,e,(i=>{this.i._attachProtoListener(i,r||!1)}))}attachProtoVectorListener(e,t,r){Hr(this,e,t),ae(this,e,(i=>{this.i._attachProtoVectorListener(i,r||!1)}))}attachAudioListener(e,t,r){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),lr(this,e,((i,a)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,a)})),ae(this,e,(i=>{this.i._attachAudioListener(i,r||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends rh{get ea(){return this.i}qa(e,t,r){ae(this,t,(i=>{const[a,n]=Wp(this,e,i);this.ea._addBoundTextureAsImageToStream(i,a,n,r)}))}U(e,t){lr(this,e,t),ae(this,e,(r=>{this.ea._attachImageListener(r)}))}ca(e,t){Hr(this,e,t),ae(this,e,(r=>{this.ea._attachImageVectorListener(r)}))}}));var rh,Gt=class extends Sb{};async function ye(e,t,r){return(async function(i,a,n,s){return Eb(i,a,n,s)})(e,r.canvas??(Fp()?void 0:document.createElement("canvas")),t,r)}function ih(e,t,r,i){if(e.T){const n=new lp;if(r!=null&&r.regionOfInterest){if(!e.pa)throw Error("This task doesn't support region-of-interest.");var a=r.regionOfInterest;if(a.left>=a.right||a.top>=a.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(a.left<0||a.top<0||a.right>1||a.bottom>1)throw Error("Expected RectF values to be in [0,1].");re(n,1,(a.left+a.right)/2),re(n,2,(a.top+a.bottom)/2),re(n,4,a.right-a.left),re(n,3,a.bottom-a.top)}else re(n,1,.5),re(n,2,.5),re(n,4,1),re(n,3,1);if(r!=null&&r.rotationDegrees){if((r==null?void 0:r.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(re(n,5,-Math.PI*r.rotationDegrees/180),(r==null?void 0:r.rotationDegrees)%180!=0){const[s,o]=Vp(t);r=Ke(n,3)*o/s,a=Ke(n,4)*s/o,re(n,4,r),re(n,3,a)}}e.g.addProtoToStream(n.g(),"mediapipe.NormalizedRect",e.T,i)}e.g.qa(t,e.aa,i??performance.now()),e.finishProcessing()}function Vt(e,t,r){var i;if((i=e.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");ih(e,t,r,e.B+1)}function cr(e,t,r,i){var a;if(!((a=e.baseOptions)!=null&&a.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");ih(e,t,r,i)}function tn(e,t,r,i){var a=t.data;const n=t.width,s=n*(t=t.height);if((a instanceof Uint8Array||a instanceof Float32Array)&&a.length!==s)throw Error("Unsupported channel count: "+a.length/s);return e=new nt([a],r,!1,e.g.i.canvas,e.O,n,t),i?e.clone():e}var bt=class extends Da{constructor(t,r,i,a){super(t),this.g=t,this.aa=r,this.T=i,this.pa=a,this.O=new Yo}l(t,r=!0){if("runningMode"in t&&wn(this.baseOptions,2,!!t.runningMode&&t.runningMode!=="IMAGE"),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,r)}close(){this.O.close(),super.close()}};bt.prototype.close=bt.prototype.close;var Wt=class extends bt{constructor(t,r){super(new Gt(t,r),"image_in","norm_rect_in",!1),this.j={detections:[]},oe(t=this.h=new za,0,1,r=new Pe),re(this.h,2,.5),re(this.h,3,.3)}get baseOptions(){return ve(this.h,Pe,1)}set baseOptions(t){oe(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&re(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&re(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}D(t,r){return this.j={detections:[]},Vt(this,t,r),this.j}F(t,r,i){return this.j={detections:[]},cr(this,t,i,r),this.j}m(){var t=new yt;Be(t,"image_in"),Be(t,"norm_rect_in"),Ee(t,"detections");const r=new Et;Yt(r,db,this.h);const i=new ht;Tt(i,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ne(i,"IMAGE:image_in"),Ne(i,"NORM_RECT:norm_rect_in"),be(i,"DETECTIONS:detections"),i.o(r),St(t,i),this.g.attachProtoVectorListener("detections",((a,n)=>{for(const s of a)a=sp(s),this.j.detections.push(Dp(a));Y(this,n)})),this.g.attachEmptyPacketListener("detections",(a=>{Y(this,a)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Wt.prototype.detectForVideo=Wt.prototype.F,Wt.prototype.detect=Wt.prototype.D,Wt.prototype.setOptions=Wt.prototype.o,Wt.createFromModelPath=async function(e,t){return ye(Wt,e,{baseOptions:{modelAssetPath:t}})},Wt.createFromModelBuffer=function(e,t){return ye(Wt,e,{baseOptions:{modelAssetBuffer:t}})},Wt.createFromOptions=function(e,t){return ye(Wt,e,t)};var Jo=Qt([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),eu=Qt([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),tu=Qt([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),nh=Qt([474,475],[475,476],[476,477],[477,474]),ru=Qt([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),iu=Qt([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),ah=Qt([469,470],[470,471],[471,472],[472,469]),nu=Qt([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),sh=[...Jo,...eu,...tu,...ru,...iu,...nu],oh=Qt([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function uh(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var We=class extends bt{constructor(t,r){super(new Gt(t,r),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,oe(t=this.h=new _p,0,1,r=new Pe),this.v=new gp,oe(this.h,0,3,this.v),this.s=new za,oe(this.h,0,2,this.s),ur(this.s,4,1),re(this.s,2,.5),re(this.v,2,.5),re(this.h,4,.5)}get baseOptions(){return ve(this.h,Pe,1)}set baseOptions(t){oe(this.h,0,1,t)}o(t){return"numFaces"in t&&ur(this.s,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&re(this.s,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&re(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&re(this.v,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}D(t,r){return uh(this),Vt(this,t,r),this.j}F(t,r,i){return uh(this),cr(this,t,i,r),this.j}m(){var t=new yt;Be(t,"image_in"),Be(t,"norm_rect"),Ee(t,"face_landmarks");const r=new Et;Yt(r,pb,this.h);const i=new ht;Tt(i,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ne(i,"IMAGE:image_in"),Ne(i,"NORM_RECT:norm_rect"),be(i,"NORM_LANDMARKS:face_landmarks"),i.o(r),St(t,i),this.g.attachProtoVectorListener("face_landmarks",((a,n)=>{for(const s of a)a=En(s),this.j.faceLandmarks.push(Ra(a));Y(this,n)})),this.g.attachEmptyPacketListener("face_landmarks",(a=>{Y(this,a)})),this.outputFaceBlendshapes&&(Ee(t,"blendshapes"),be(i,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((a,n)=>{if(this.outputFaceBlendshapes)for(const s of a)a=Ca(s),this.j.faceBlendshapes.push(Wo(a.g()??[]));Y(this,n)})),this.g.attachEmptyPacketListener("blendshapes",(a=>{Y(this,a)}))),this.outputFacialTransformationMatrixes&&(Ee(t,"face_geometry"),be(i,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((a,n)=>{if(this.outputFacialTransformationMatrixes)for(const s of a)(a=ve(cb(s),rb,2))&&this.j.facialTransformationMatrixes.push({rows:Pt(a,1)??0??0,columns:Pt(a,2)??0??0,data:ui(a,3,Ur,oi()).slice()??[]});Y(this,n)})),this.g.attachEmptyPacketListener("face_geometry",(a=>{Y(this,a)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};We.prototype.detectForVideo=We.prototype.F,We.prototype.detect=We.prototype.D,We.prototype.setOptions=We.prototype.o,We.createFromModelPath=function(e,t){return ye(We,e,{baseOptions:{modelAssetPath:t}})},We.createFromModelBuffer=function(e,t){return ye(We,e,{baseOptions:{modelAssetBuffer:t}})},We.createFromOptions=function(e,t){return ye(We,e,t)},We.FACE_LANDMARKS_LIPS=Jo,We.FACE_LANDMARKS_LEFT_EYE=eu,We.FACE_LANDMARKS_LEFT_EYEBROW=tu,We.FACE_LANDMARKS_LEFT_IRIS=nh,We.FACE_LANDMARKS_RIGHT_EYE=ru,We.FACE_LANDMARKS_RIGHT_EYEBROW=iu,We.FACE_LANDMARKS_RIGHT_IRIS=ah,We.FACE_LANDMARKS_FACE_OVAL=nu,We.FACE_LANDMARKS_CONTOURS=sh,We.FACE_LANDMARKS_TESSELATION=oh;var pr=class extends bt{constructor(t,r){super(new Gt(t,r),"image_in","norm_rect",!0),oe(t=this.j=new bp,0,1,r=new Pe)}get baseOptions(){return ve(this.j,Pe,1)}set baseOptions(t){oe(this.j,0,1,t)}o(t){return super.l(t)}Oa(t,r,i){const a=typeof r!="function"?r:{};if(this.h=typeof r=="function"?r:i,Vt(this,t,a??{}),!this.h)return this.s}m(){var t=new yt;Be(t,"image_in"),Be(t,"norm_rect"),Ee(t,"stylized_image");const r=new Et;Yt(r,hb,this.j);const i=new ht;Tt(i,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),Ne(i,"IMAGE:image_in"),Ne(i,"NORM_RECT:norm_rect"),be(i,"STYLIZED_IMAGE:stylized_image"),i.o(r),St(t,i),this.g.U("stylized_image",((a,n)=>{var s=!this.h,o=a.data,l=a.width;const d=l*(a=a.height);if(o instanceof Uint8Array)if(o.length===3*d){const p=new Uint8ClampedArray(4*d);for(let f=0;f<d;++f)p[4*f]=o[3*f],p[4*f+1]=o[3*f+1],p[4*f+2]=o[3*f+2],p[4*f+3]=255;o=new ImageData(p,l,a)}else{if(o.length!==4*d)throw Error("Unsupported channel count: "+o.length/d);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),l,a)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);l=new at([o],!1,!1,this.g.i.canvas,this.O,l,a),this.s=s=s?l.clone():l,this.h&&this.h(s),Y(this,n)})),this.g.attachEmptyPacketListener("stylized_image",(a=>{this.s=null,this.h&&this.h(null),Y(this,a)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};pr.prototype.stylize=pr.prototype.Oa,pr.prototype.setOptions=pr.prototype.o,pr.createFromModelPath=function(e,t){return ye(pr,e,{baseOptions:{modelAssetPath:t}})},pr.createFromModelBuffer=function(e,t){return ye(pr,e,{baseOptions:{modelAssetBuffer:t}})},pr.createFromOptions=function(e,t){return ye(pr,e,t)};var au=Qt([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function lh(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function dh(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function ch(e,t=!0){const r=[];for(const a of e){var i=Ca(a);e=[];for(const n of i.g())i=t&&Pt(n,1)!=null?Pt(n,1)??0:-1,e.push({score:Ke(n,2)??0,index:i,categoryName:Ut(n,3)??""??"",displayName:Ut(n,4)??""??""});r.push(e)}return r}var kt=class extends bt{constructor(t,r){super(new Gt(t,r),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],oe(t=this.j=new $p,0,1,r=new Pe),this.s=new Lo,oe(this.j,0,2,this.s),this.C=new Do,oe(this.s,0,3,this.C),this.v=new vp,oe(this.s,0,2,this.v),this.h=new fb,oe(this.j,0,3,this.h),re(this.v,2,.5),re(this.s,4,.5),re(this.C,2,.5)}get baseOptions(){return ve(this.j,Pe,1)}set baseOptions(t){oe(this.j,0,1,t)}o(t){var n,s,o,l;if(ur(this.v,3,t.numHands??1),"minHandDetectionConfidence"in t&&re(this.v,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&re(this.s,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&re(this.C,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var r=new Zi,i=r,a=Vo(t.cannedGesturesClassifierOptions,(n=ve(this.h,Zi,3))==null?void 0:n.h());oe(i,0,2,a),oe(this.h,0,3,r)}else t.cannedGesturesClassifierOptions===void 0&&((s=ve(this.h,Zi,3))==null||s.g());return t.customGesturesClassifierOptions?(oe(i=r=new Zi,0,2,a=Vo(t.customGesturesClassifierOptions,(o=ve(this.h,Zi,4))==null?void 0:o.h())),oe(this.h,0,4,r)):t.customGesturesClassifierOptions===void 0&&((l=ve(this.h,Zi,4))==null||l.g()),this.l(t)}Ja(t,r){return lh(this),Vt(this,t,r),dh(this)}Ka(t,r,i){return lh(this),cr(this,t,i,r),dh(this)}m(){var t=new yt;Be(t,"image_in"),Be(t,"norm_rect"),Ee(t,"hand_gestures"),Ee(t,"hand_landmarks"),Ee(t,"world_hand_landmarks"),Ee(t,"handedness");const r=new Et;Yt(r,mb,this.j);const i=new ht;Tt(i,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ne(i,"IMAGE:image_in"),Ne(i,"NORM_RECT:norm_rect"),be(i,"HAND_GESTURES:hand_gestures"),be(i,"LANDMARKS:hand_landmarks"),be(i,"WORLD_LANDMARKS:world_hand_landmarks"),be(i,"HANDEDNESS:handedness"),i.o(r),St(t,i),this.g.attachProtoVectorListener("hand_landmarks",((a,n)=>{for(const s of a){a=En(s);const o=[];for(const l of xr(a,up,1))o.push({x:Ke(l,1)??0,y:Ke(l,2)??0,z:Ke(l,3)??0,visibility:Ke(l,4)??0});this.landmarks.push(o)}Y(this,n)})),this.g.attachEmptyPacketListener("hand_landmarks",(a=>{Y(this,a)})),this.g.attachProtoVectorListener("world_hand_landmarks",((a,n)=>{for(const s of a){a=Xi(s);const o=[];for(const l of xr(a,op,1))o.push({x:Ke(l,1)??0,y:Ke(l,2)??0,z:Ke(l,3)??0,visibility:Ke(l,4)??0});this.worldLandmarks.push(o)}Y(this,n)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(a=>{Y(this,a)})),this.g.attachProtoVectorListener("hand_gestures",((a,n)=>{this.gestures.push(...ch(a,!1)),Y(this,n)})),this.g.attachEmptyPacketListener("hand_gestures",(a=>{Y(this,a)})),this.g.attachProtoVectorListener("handedness",((a,n)=>{this.handedness.push(...ch(a)),Y(this,n)})),this.g.attachEmptyPacketListener("handedness",(a=>{Y(this,a)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function ph(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}kt.prototype.recognizeForVideo=kt.prototype.Ka,kt.prototype.recognize=kt.prototype.Ja,kt.prototype.setOptions=kt.prototype.o,kt.createFromModelPath=function(e,t){return ye(kt,e,{baseOptions:{modelAssetPath:t}})},kt.createFromModelBuffer=function(e,t){return ye(kt,e,{baseOptions:{modelAssetBuffer:t}})},kt.createFromOptions=function(e,t){return ye(kt,e,t)},kt.HAND_CONNECTIONS=au;var At=class extends bt{constructor(t,r){super(new Gt(t,r),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],oe(t=this.h=new Lo,0,1,r=new Pe),this.s=new Do,oe(this.h,0,3,this.s),this.j=new vp,oe(this.h,0,2,this.j),ur(this.j,3,1),re(this.j,2,.5),re(this.s,2,.5),re(this.h,4,.5)}get baseOptions(){return ve(this.h,Pe,1)}set baseOptions(t){oe(this.h,0,1,t)}o(t){return"numHands"in t&&ur(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&re(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&re(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&re(this.s,2,t.minHandPresenceConfidence??.5),this.l(t)}D(t,r){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Vt(this,t,r),ph(this)}F(t,r,i){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],cr(this,t,i,r),ph(this)}m(){var t=new yt;Be(t,"image_in"),Be(t,"norm_rect"),Ee(t,"hand_landmarks"),Ee(t,"world_hand_landmarks"),Ee(t,"handedness");const r=new Et;Yt(r,gb,this.h);const i=new ht;Tt(i,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ne(i,"IMAGE:image_in"),Ne(i,"NORM_RECT:norm_rect"),be(i,"LANDMARKS:hand_landmarks"),be(i,"WORLD_LANDMARKS:world_hand_landmarks"),be(i,"HANDEDNESS:handedness"),i.o(r),St(t,i),this.g.attachProtoVectorListener("hand_landmarks",((a,n)=>{for(const s of a)a=En(s),this.landmarks.push(Ra(a));Y(this,n)})),this.g.attachEmptyPacketListener("hand_landmarks",(a=>{Y(this,a)})),this.g.attachProtoVectorListener("world_hand_landmarks",((a,n)=>{for(const s of a)a=Xi(s),this.worldLandmarks.push(Tn(a));Y(this,n)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(a=>{Y(this,a)})),this.g.attachProtoVectorListener("handedness",((a,n)=>{var s=this.handedness,o=s.push;const l=[];for(const d of a){a=Ca(d);const p=[];for(const f of a.g())p.push({score:Ke(f,2)??0,index:Pt(f,1)??0??-1,categoryName:Ut(f,3)??""??"",displayName:Ut(f,4)??""??""});l.push(p)}o.call(s,...l),Y(this,n)})),this.g.attachEmptyPacketListener("handedness",(a=>{Y(this,a)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};At.prototype.detectForVideo=At.prototype.F,At.prototype.detect=At.prototype.D,At.prototype.setOptions=At.prototype.o,At.createFromModelPath=function(e,t){return ye(At,e,{baseOptions:{modelAssetPath:t}})},At.createFromModelBuffer=function(e,t){return ye(At,e,{baseOptions:{modelAssetBuffer:t}})},At.createFromOptions=function(e,t){return ye(At,e,t)},At.HAND_CONNECTIONS=au;var hh=Qt([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function fh(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function mh(e){try{if(!e.C)return e.h;e.C(e.h)}finally{Ba(e)}}function Wa(e,t){e=En(e),t.push(Ra(e))}var Ue=class extends bt{constructor(e,t){super(new Gt(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,oe(e=this.j=new Ap,0,1,t=new Pe),this.J=new Do,oe(this.j,0,2,this.J),this.Z=new _b,oe(this.j,0,3,this.Z),this.s=new za,oe(this.j,0,4,this.s),this.H=new gp,oe(this.j,0,5,this.H),this.v=new Sp,oe(this.j,0,6,this.v),this.K=new kp,oe(this.j,0,7,this.K),re(this.s,2,.5),re(this.s,3,.3),re(this.H,2,.5),re(this.v,2,.5),re(this.v,3,.3),re(this.K,2,.5),re(this.J,2,.5)}get baseOptions(){return ve(this.j,Pe,1)}set baseOptions(e){oe(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&re(this.s,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&re(this.s,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&re(this.H,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&re(this.v,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&re(this.v,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&re(this.K,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&re(this.J,2,e.minHandLandmarksConfidence??.5),this.l(e)}D(e,t,r){const i=typeof t!="function"?t:{};return this.C=typeof t=="function"?t:r,fh(this),Vt(this,e,i),mh(this)}F(e,t,r,i){const a=typeof r!="function"?r:{};return this.C=typeof r=="function"?r:i,fh(this),cr(this,e,a,t),mh(this)}m(){var e=new yt;Be(e,"input_frames_image"),Ee(e,"pose_landmarks"),Ee(e,"pose_world_landmarks"),Ee(e,"face_landmarks"),Ee(e,"left_hand_landmarks"),Ee(e,"left_hand_world_landmarks"),Ee(e,"right_hand_landmarks"),Ee(e,"right_hand_world_landmarks");const t=new Et,r=new Wc;no(r,1,Di("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(a,n){if(n!=null)if(Array.isArray(n))Me(a,2,nc(n));else{if(!(typeof n=="string"||n instanceof wr||fn(n)))throw Error("invalid value in Any.value field: "+n+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");no(a,2,Us(n,!1),si())}})(r,this.j.g());const i=new ht;Tt(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),fa(i,8,Wc,r),Ne(i,"IMAGE:input_frames_image"),be(i,"POSE_LANDMARKS:pose_landmarks"),be(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),be(i,"FACE_LANDMARKS:face_landmarks"),be(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),be(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),be(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),be(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),St(e,i),Na(this,e),this.g.attachProtoListener("pose_landmarks",((a,n)=>{Wa(a,this.h.poseLandmarks),Y(this,n)})),this.g.attachEmptyPacketListener("pose_landmarks",(a=>{Y(this,a)})),this.g.attachProtoListener("pose_world_landmarks",((a,n)=>{var s=this.h.poseWorldLandmarks;a=Xi(a),s.push(Tn(a)),Y(this,n)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(a=>{Y(this,a)})),this.outputPoseSegmentationMasks&&(be(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Qi(this,"pose_segmentation_mask"),this.g.U("pose_segmentation_mask",((a,n)=>{this.h.poseSegmentationMasks=[tn(this,a,!0,!this.C)],Y(this,n)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(a=>{this.h.poseSegmentationMasks=[],Y(this,a)}))),this.g.attachProtoListener("face_landmarks",((a,n)=>{Wa(a,this.h.faceLandmarks),Y(this,n)})),this.g.attachEmptyPacketListener("face_landmarks",(a=>{Y(this,a)})),this.outputFaceBlendshapes&&(Ee(e,"extra_blendshapes"),be(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((a,n)=>{var s=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(a=Ca(a),s.push(Wo(a.g()??[]))),Y(this,n)})),this.g.attachEmptyPacketListener("extra_blendshapes",(a=>{Y(this,a)}))),this.g.attachProtoListener("left_hand_landmarks",((a,n)=>{Wa(a,this.h.leftHandLandmarks),Y(this,n)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(a=>{Y(this,a)})),this.g.attachProtoListener("left_hand_world_landmarks",((a,n)=>{var s=this.h.leftHandWorldLandmarks;a=Xi(a),s.push(Tn(a)),Y(this,n)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(a=>{Y(this,a)})),this.g.attachProtoListener("right_hand_landmarks",((a,n)=>{Wa(a,this.h.rightHandLandmarks),Y(this,n)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(a=>{Y(this,a)})),this.g.attachProtoListener("right_hand_world_landmarks",((a,n)=>{var s=this.h.rightHandWorldLandmarks;a=Xi(a),s.push(Tn(a)),Y(this,n)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(a=>{Y(this,a)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ue.prototype.detectForVideo=Ue.prototype.F,Ue.prototype.detect=Ue.prototype.D,Ue.prototype.setOptions=Ue.prototype.o,Ue.createFromModelPath=function(e,t){return ye(Ue,e,{baseOptions:{modelAssetPath:t}})},Ue.createFromModelBuffer=function(e,t){return ye(Ue,e,{baseOptions:{modelAssetBuffer:t}})},Ue.createFromOptions=function(e,t){return ye(Ue,e,t)},Ue.HAND_CONNECTIONS=au,Ue.POSE_CONNECTIONS=hh,Ue.FACE_LANDMARKS_LIPS=Jo,Ue.FACE_LANDMARKS_LEFT_EYE=eu,Ue.FACE_LANDMARKS_LEFT_EYEBROW=tu,Ue.FACE_LANDMARKS_LEFT_IRIS=nh,Ue.FACE_LANDMARKS_RIGHT_EYE=ru,Ue.FACE_LANDMARKS_RIGHT_EYEBROW=iu,Ue.FACE_LANDMARKS_RIGHT_IRIS=ah,Ue.FACE_LANDMARKS_FACE_OVAL=nu,Ue.FACE_LANDMARKS_CONTOURS=sh,Ue.FACE_LANDMARKS_TESSELATION=oh;var qt=class extends bt{constructor(t,r){super(new Gt(t,r),"input_image","norm_rect",!0),this.j={classifications:[]},oe(t=this.h=new Cp,0,1,r=new Pe)}get baseOptions(){return ve(this.h,Pe,1)}set baseOptions(t){oe(this.h,0,1,t)}o(t){return oe(this.h,0,2,Vo(t,ve(this.h,Mo,2))),this.l(t)}sa(t,r){return this.j={classifications:[]},Vt(this,t,r),this.j}ta(t,r,i){return this.j={classifications:[]},cr(this,t,i,r),this.j}m(){var t=new yt;Be(t,"input_image"),Be(t,"norm_rect"),Ee(t,"classifications");const r=new Et;Yt(r,yb,this.h);const i=new ht;Tt(i,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ne(i,"IMAGE:input_image"),Ne(i,"NORM_RECT:norm_rect"),be(i,"CLASSIFICATIONS:classifications"),i.o(r),St(t,i),this.g.attachProtoListener("classifications",((a,n)=>{this.j=(function(s){const o={classifications:xr(s,nb,1).map((l=>{var d;return Wo(((d=ve(l,np,4))==null?void 0:d.g())??[],Pt(l,2)??0,Ut(l,3)??"")}))};return da(Pi(s,2))!=null&&(o.timestampMs=da(Pi(s,2))??0),o})(ab(a)),Y(this,n)})),this.g.attachEmptyPacketListener("classifications",(a=>{Y(this,a)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};qt.prototype.classifyForVideo=qt.prototype.ta,qt.prototype.classify=qt.prototype.sa,qt.prototype.setOptions=qt.prototype.o,qt.createFromModelPath=function(e,t){return ye(qt,e,{baseOptions:{modelAssetPath:t}})},qt.createFromModelBuffer=function(e,t){return ye(qt,e,{baseOptions:{modelAssetBuffer:t}})},qt.createFromOptions=function(e,t){return ye(qt,e,t)};var Ct=class extends bt{constructor(e,t){super(new Gt(e,t),"image_in","norm_rect",!0),this.h=new Ip,this.embeddings={embeddings:[]},oe(e=this.h,0,1,t=new Pe)}get baseOptions(){return ve(this.h,Pe,1)}set baseOptions(e){oe(this.h,0,1,e)}o(e){var t=this.h,r=ve(this.h,hp,2);return r=r?r.clone():new hp,e.l2Normalize!==void 0?wn(r,1,e.l2Normalize):"l2Normalize"in e&&Me(r,1),e.quantize!==void 0?wn(r,2,e.quantize):"quantize"in e&&Me(r,2),oe(t,0,2,r),this.l(e)}za(e,t){return Vt(this,e,t),this.embeddings}Aa(e,t,r){return cr(this,e,r,t),this.embeddings}m(){var e=new yt;Be(e,"image_in"),Be(e,"norm_rect"),Ee(e,"embeddings_out");const t=new Et;Yt(t,bb,this.h);const r=new ht;Tt(r,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ne(r,"IMAGE:image_in"),Ne(r,"NORM_RECT:norm_rect"),be(r,"EMBEDDINGS:embeddings_out"),r.o(t),St(e,r),this.g.attachProtoListener("embeddings_out",((i,a)=>{i=ub(i),this.embeddings=(function(n){return{embeddings:xr(n,ob,1).map((s=>{var l,d;const o={headIndex:Pt(s,3)??0??-1,headName:Ut(s,4)??""??""};if(lc(s,dp,ao(s,1))!==void 0)s=ui(s=ve(s,dp,ao(s,1)),1,Ur,oi()),o.floatEmbedding=s.slice();else{const p=new Uint8Array(0);o.quantizedEmbedding=((d=(l=ve(s,sb,ao(s,2)))==null?void 0:l.oa())==null?void 0:d.h())??p}return o})),timestampMs:da(Pi(n,2))??0}})(i),Y(this,a)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{Y(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ct.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=Pp(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=Pp(Lp(e.quantizedEmbedding),Lp(t.quantizedEmbedding))}return e},Ct.prototype.embedForVideo=Ct.prototype.Aa,Ct.prototype.embed=Ct.prototype.za,Ct.prototype.setOptions=Ct.prototype.o,Ct.createFromModelPath=function(e,t){return ye(Ct,e,{baseOptions:{modelAssetPath:t}})},Ct.createFromModelBuffer=function(e,t){return ye(Ct,e,{baseOptions:{modelAssetBuffer:t}})},Ct.createFromOptions=function(e,t){return ye(Ct,e,t)};var su=class{constructor(e,t,r){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=r}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach((r=>{r.close()})),(t=this.categoryMask)==null||t.close()}};function gh(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function _h(e){try{const t=new su(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{Ba(e)}}su.prototype.close=su.prototype.close;var wt=class extends bt{constructor(e,t){super(new Gt(e,t),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Go,this.v=new Op,oe(this.h,0,3,this.v),oe(e=this.h,0,1,t=new Pe)}get baseOptions(){return ve(this.h,Pe,1)}set baseOptions(e){oe(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?Me(this.h,2,Di(e.displayNamesLocale)):"displayNamesLocale"in e&&Me(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}I(){(function(e){var r,i;const t=xr(e.da(),ht,1).filter((a=>(Ut(a,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(e.s=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(((i=(r=ve(t[0],Et,7))==null?void 0:r.l())==null?void 0:i.g())??new Map).forEach(((a,n)=>{e.s[Number(n)]=Ut(a,1)??""}))})(this)}segment(e,t,r){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:r,gh(this),Vt(this,e,i),_h(this)}Ma(e,t,r,i){const a=typeof r!="function"?r:{};return this.j=typeof r=="function"?r:i,gh(this),cr(this,e,a,t),_h(this)}Da(){return this.s}m(){var e=new yt;Be(e,"image_in"),Be(e,"norm_rect");const t=new Et;Yt(t,Mp,this.h);const r=new ht;Tt(r,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ne(r,"IMAGE:image_in"),Ne(r,"NORM_RECT:norm_rect"),r.o(t),St(e,r),Na(this,e),this.outputConfidenceMasks&&(Ee(e,"confidence_masks"),be(r,"CONFIDENCE_MASKS:confidence_masks"),Qi(this,"confidence_masks"),this.g.ca("confidence_masks",((i,a)=>{this.confidenceMasks=i.map((n=>tn(this,n,!0,!this.j))),Y(this,a)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Y(this,i)}))),this.outputCategoryMask&&(Ee(e,"category_mask"),be(r,"CATEGORY_MASK:category_mask"),Qi(this,"category_mask"),this.g.U("category_mask",((i,a)=>{this.categoryMask=tn(this,i,!1,!this.j),Y(this,a)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Y(this,i)}))),Ee(e,"quality_scores"),be(r,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,a)=>{this.qualityScores=i,Y(this,a)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Y(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};wt.prototype.getLabels=wt.prototype.Da,wt.prototype.segmentForVideo=wt.prototype.Ma,wt.prototype.segment=wt.prototype.segment,wt.prototype.setOptions=wt.prototype.o,wt.createFromModelPath=function(e,t){return ye(wt,e,{baseOptions:{modelAssetPath:t}})},wt.createFromModelBuffer=function(e,t){return ye(wt,e,{baseOptions:{modelAssetBuffer:t}})},wt.createFromOptions=function(e,t){return ye(wt,e,t)};var ou=class{constructor(e,t,r){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=r}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach((r=>{r.close()})),(t=this.categoryMask)==null||t.close()}};ou.prototype.close=ou.prototype.close;var kb=class extends ee{constructor(e){super(e)}},rn=[0,He,-2],qa=[0,Sr,-3,Le,Sr,-1],yh=[0,qa],bh=[0,qa,He,-1],uu=class extends ee{constructor(e){super(e)}},wh=[0,Sr,-1,Le],Ab=class extends ee{constructor(e){super(e)}},vh=class extends ee{constructor(e){super(e)}},lu=[1,2,3,4,5,6,7,8,9,10,14,15],$h=class extends ee{constructor(e){super(e)}};$h.prototype.g=Aa([0,rt,[0,lu,Ie,qa,Ie,[0,qa,rn],Ie,yh,Ie,[0,yh,rn],Ie,wh,Ie,[0,Sr,-3,Le,Ft],Ie,[0,Sr,-3,Le],Ie,[0,ke,Sr,-2,Le,He,Le,-1,2,Sr,rn],Ie,bh,Ie,[0,bh,rn],Sr,rn,ke,Ie,[0,Sr,-3,Le,rn,-1],Ie,[0,rt,wh]],ke,[0,ke,He,-1,Le]]);var hr=class extends bt{constructor(e,t){super(new Gt(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Go,this.s=new Op,oe(this.h,0,3,this.s),oe(e=this.h,0,1,t=new Pe)}get baseOptions(){return ve(this.h,Pe,1)}set baseOptions(e){oe(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,r,i){const a=typeof r!="function"?r:{};this.j=typeof r=="function"?r:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,r=this.B+1,i=new $h;const n=new vh;var s=new kb;if(ur(s,1,255),oe(n,0,12,s),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var o=new uu;wn(o,3,!0),re(o,1,t.keypoint.x),re(o,2,t.keypoint.y),bn(n,5,lu,o)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(o of(s=new Ab,t.scribble))wn(t=new uu,3,!0),re(t,1,o.x),re(t,2,o.y),fa(s,1,uu,t);bn(n,15,lu,s)}fa(i,1,vh,n),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",r),Vt(this,e,a);e:{try{const d=new ou(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var l=d;break e}this.j(d)}finally{Ba(this)}l=void 0}return l}m(){var e=new yt;Be(e,"image_in"),Be(e,"roi_in"),Be(e,"norm_rect_in");const t=new Et;Yt(t,Mp,this.h);const r=new ht;Tt(r,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),Ne(r,"IMAGE:image_in"),Ne(r,"ROI:roi_in"),Ne(r,"NORM_RECT:norm_rect_in"),r.o(t),St(e,r),Na(this,e),this.outputConfidenceMasks&&(Ee(e,"confidence_masks"),be(r,"CONFIDENCE_MASKS:confidence_masks"),Qi(this,"confidence_masks"),this.g.ca("confidence_masks",((i,a)=>{this.confidenceMasks=i.map((n=>tn(this,n,!0,!this.j))),Y(this,a)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Y(this,i)}))),this.outputCategoryMask&&(Ee(e,"category_mask"),be(r,"CATEGORY_MASK:category_mask"),Qi(this,"category_mask"),this.g.U("category_mask",((i,a)=>{this.categoryMask=tn(this,i,!1,!this.j),Y(this,a)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Y(this,i)}))),Ee(e,"quality_scores"),be(r,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,a)=>{this.qualityScores=i,Y(this,a)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Y(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};hr.prototype.segment=hr.prototype.segment,hr.prototype.setOptions=hr.prototype.o,hr.createFromModelPath=function(e,t){return ye(hr,e,{baseOptions:{modelAssetPath:t}})},hr.createFromModelBuffer=function(e,t){return ye(hr,e,{baseOptions:{modelAssetBuffer:t}})},hr.createFromOptions=function(e,t){return ye(hr,e,t)};var jt=class extends bt{constructor(e,t){super(new Gt(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},oe(e=this.h=new Np,0,1,t=new Pe)}get baseOptions(){return ve(this.h,Pe,1)}set baseOptions(e){oe(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?Me(this.h,2,Di(e.displayNamesLocale)):"displayNamesLocale"in e&&Me(this.h,2),e.maxResults!==void 0?ur(this.h,3,e.maxResults):"maxResults"in e&&Me(this.h,3),e.scoreThreshold!==void 0?re(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&Me(this.h,4),e.categoryAllowlist!==void 0?ma(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&Me(this.h,5),e.categoryDenylist!==void 0?ma(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&Me(this.h,6),this.l(e)}D(e,t){return this.j={detections:[]},Vt(this,e,t),this.j}F(e,t,r){return this.j={detections:[]},cr(this,e,r,t),this.j}m(){var e=new yt;Be(e,"input_frame_gpu"),Be(e,"norm_rect"),Ee(e,"detections");const t=new Et;Yt(t,vb,this.h);const r=new ht;Tt(r,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ne(r,"IMAGE:input_frame_gpu"),Ne(r,"NORM_RECT:norm_rect"),be(r,"DETECTIONS:detections"),r.o(t),St(e,r),this.g.attachProtoVectorListener("detections",((i,a)=>{for(const n of i)i=sp(n),this.j.detections.push(Dp(i));Y(this,a)})),this.g.attachEmptyPacketListener("detections",(i=>{Y(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};jt.prototype.detectForVideo=jt.prototype.F,jt.prototype.detect=jt.prototype.D,jt.prototype.setOptions=jt.prototype.o,jt.createFromModelPath=async function(e,t){return ye(jt,e,{baseOptions:{modelAssetPath:t}})},jt.createFromModelBuffer=function(e,t){return ye(jt,e,{baseOptions:{modelAssetBuffer:t}})},jt.createFromOptions=function(e,t){return ye(jt,e,t)};var du=class{constructor(e,t,r){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=r}close(){var e;(e=this.segmentationMasks)==null||e.forEach((t=>{t.close()}))}};function xh(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function Eh(e){try{const t=new du(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.s)return t;e.s(t)}finally{Ba(e)}}du.prototype.close=du.prototype.close;var It=class extends bt{constructor(e,t){super(new Gt(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,oe(e=this.h=new Bp,0,1,t=new Pe),this.v=new kp,oe(this.h,0,3,this.v),this.j=new Sp,oe(this.h,0,2,this.j),ur(this.j,4,1),re(this.j,2,.5),re(this.v,2,.5),re(this.h,4,.5)}get baseOptions(){return ve(this.h,Pe,1)}set baseOptions(e){oe(this.h,0,1,e)}o(e){return"numPoses"in e&&ur(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&re(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&re(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&re(this.v,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}D(e,t,r){const i=typeof t!="function"?t:{};return this.s=typeof t=="function"?t:r,xh(this),Vt(this,e,i),Eh(this)}F(e,t,r,i){const a=typeof r!="function"?r:{};return this.s=typeof r=="function"?r:i,xh(this),cr(this,e,a,t),Eh(this)}m(){var e=new yt;Be(e,"image_in"),Be(e,"norm_rect"),Ee(e,"normalized_landmarks"),Ee(e,"world_landmarks"),Ee(e,"segmentation_masks");const t=new Et;Yt(t,$b,this.h);const r=new ht;Tt(r,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ne(r,"IMAGE:image_in"),Ne(r,"NORM_RECT:norm_rect"),be(r,"NORM_LANDMARKS:normalized_landmarks"),be(r,"WORLD_LANDMARKS:world_landmarks"),r.o(t),St(e,r),Na(this,e),this.g.attachProtoVectorListener("normalized_landmarks",((i,a)=>{this.landmarks=[];for(const n of i)i=En(n),this.landmarks.push(Ra(i));Y(this,a)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],Y(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,a)=>{this.worldLandmarks=[];for(const n of i)i=Xi(n),this.worldLandmarks.push(Tn(i));Y(this,a)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],Y(this,i)})),this.outputSegmentationMasks&&(be(r,"SEGMENTATION_MASK:segmentation_masks"),Qi(this,"segmentation_masks"),this.g.ca("segmentation_masks",((i,a)=>{this.segmentationMasks=i.map((n=>tn(this,n,!0,!this.s))),Y(this,a)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],Y(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};It.prototype.detectForVideo=It.prototype.F,It.prototype.detect=It.prototype.D,It.prototype.setOptions=It.prototype.o,It.createFromModelPath=function(e,t){return ye(It,e,{baseOptions:{modelAssetPath:t}})},It.createFromModelBuffer=function(e,t){return ye(It,e,{baseOptions:{modelAssetBuffer:t}})},It.createFromOptions=function(e,t){return ye(It,e,t)},It.POSE_CONNECTIONS=hh;/*!
 * ONNX Runtime Web v1.23.2
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var cu=Object.defineProperty,Cb=Object.getOwnPropertyDescriptor,Ib=Object.getOwnPropertyNames,Ob=Object.prototype.hasOwnProperty,zb=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),U=(e,t)=>()=>(e&&(t=e(e=0)),t),nn=(e,t)=>{for(var r in t)cu(e,r,{get:t[r],enumerable:!0})},Rb=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Ib(t))!Ob.call(e,a)&&a!==r&&cu(e,a,{get:()=>t[a],enumerable:!(i=Cb(t,a))||i.enumerable});return e},An=e=>Rb(cu({},"__esModule",{value:!0}),e),Cn,Kr,an,Th,Sh,kh=U(()=>{Cn=new Map,Kr=[],an=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Cn.get(e);if(i===void 0)Cn.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=Kr.indexOf(e);a!==-1&&Kr.splice(a,1);for(let n=0;n<Kr.length;n++)if(Cn.get(Kr[n]).priority<=r){Kr.splice(n,0,e);return}Kr.push(e)}return}throw new TypeError("not a valid backend")},Th=async e=>{let t=Cn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Sh=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?Kr:r,a,n=[],s=new Set;for(let l of i){let d=await Th(l);typeof d=="string"?n.push({name:l,err:d}):(a||(a=d),a===d&&s.add(l))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of n)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[a,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),Mb=U(()=>{kh()}),Ah,Nb=U(()=>{Ah="1.23.2"}),pu,st,Ch=U(()=>{Nb(),pu="warning",st={wasm:{},webgl:{},webgpu:{},versions:{common:Ah},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);pu=e}},get logLevel(){return pu}},Object.defineProperty(st,"logLevel",{enumerable:!0})}),Re,Bb=U(()=>{Ch(),Re=st}),Ih,Oh,Db=U(()=>{Ih=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let p=n*a,f=0,m=p,_=p*2,y=-1;s==="RGBA"?(f=0,m=p,_=p*2,y=p*3):s==="RGB"?(f=0,m=p,_=p*2):s==="RBG"&&(f=0,_=p,m=p*2);for(let w=0;w<n;w++)for(let x=0;x<a;x++){let $=(e.data[f++]-d[0])*l[0],v=(e.data[m++]-d[1])*l[1],E=(e.data[_++]-d[2])*l[2],S=y===-1?255:(e.data[y++]-d[3])*l[3];i.fillStyle="rgba("+$+","+v+","+E+","+S+")",i.fillRect(x,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Oh=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let f=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,_=0,y=1,w=2,x=3,$=0,v=f,E=f*2,S=-1;o==="RGBA"?($=0,v=f,E=f*2,S=f*3):o==="RGB"?($=0,v=f,E=f*2):o==="RBG"&&($=0,E=f,v=f*2),i=r.createImageData(a,n);for(let k=0;k<n*a;_+=m,y+=m,w+=m,x+=m,k++)i.data[_]=(e.data[$++]-p[0])*d[0],i.data[y]=(e.data[v++]-p[1])*d[1],i.data[w]=(e.data[E++]-p[2])*d[2],i.data[x]=S===-1?255:(e.data[S++]-p[3])*d[3]}else throw new Error("Can not access image data");return i}}),ja,zh,Rh,Mh,Nh,Bh,Lb=U(()=>{fu(),ja=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,p=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,m=0,_=1,y=2,w=3,x=0,$=d,v=d*2,E=-1;o==="RGB"&&(f=3,m=0,_=1,y=2,w=-1),l==="RGBA"?E=d*3:l==="RBG"?(x=0,v=d,$=d*2):l==="BGR"&&(v=0,$=d,x=d*2);for(let S=0;S<d;S++,m+=f,y+=f,_+=f,w+=f)p[x++]=(e[m]+s[0])/n[0],p[$++]=(e[_]+s[1])/n[1],p[v++]=(e[y]+s[2])/n[2],E!==-1&&w!==-1&&(p[E++]=(e[w]+s[3])/n[3]);return l==="RGBA"?new Ot("float32",p,[1,4,r,i]):new Ot("float32",p,[1,3,r,i])},zh=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(r){let p=l();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let m=e.height,_=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,_=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=m,o.width=_}else o.tensorFormat="RGBA",o.height=m,o.width=_;f.drawImage(e,0,0),s=f.getImageData(0,0,_,m).data}else throw new Error("Can not access image data")}else if(i){let p,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,f=t.resizedWidth):(p=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=f,t!==void 0){let m=l();m.width=f,m.height=p;let _=d(m);if(_!=null)_.putImageData(e,0,0),s=_.getImageData(0,0,f,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=l();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let m=e.height,_=e.width;return f.drawImage(e,0,0,_,m),s=f.getImageData(0,0,_,m).data,o.height=m,o.width=_,ja(s,o)}else throw new Error("Can not access image data")}else{if(n)return new Promise((p,f)=>{let m=l(),_=d(m);if(!e||!_)return f();let y=new Image;y.crossOrigin="Anonymous",y.src=e,y.onload=()=>{m.width=y.width,m.height=y.height,_.drawImage(y,0,0,m.width,m.height);let w=_.getImageData(0,0,m.width,m.height);o.height=m.height,o.width=m.width,p(ja(w.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return ja(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Rh=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new Ot({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},Mh=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Ot({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},Nh=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Ot({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},Bh=(e,t,r)=>new Ot({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),pi,In,hu,Dh,Pb=U(()=>{pi=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),In=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),hu=!1,Dh=()=>{if(!hu){hu=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(pi.set("int64",BigInt64Array),In.set(BigInt64Array,"int64")),t&&(pi.set("uint64",BigUint64Array),In.set(BigUint64Array,"uint64")),i?(pi.set("float16",r),In.set(r,"float16")):pi.set("float16",Uint16Array)}}}),Lh,Ph,Ub=U(()=>{fu(),Lh=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Ph=(e,t)=>{switch(e.location){case"cpu":return new Ot(e.type,e.data,t);case"cpu-pinned":return new Ot({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ot({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ot({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ot({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ot,fu=U(()=>{Db(),Lb(),Pb(),Ub(),Ot=class{constructor(e,t,r){Dh();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=pi.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=pi.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=In.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");a=o,this.cpuData=s,this.dataLocation="cpu"}let n=Lh(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return zh(e,t)}static fromTexture(e,t){return Rh(e,t)}static fromGpuBuffer(e,t){return Mh(e,t)}static fromMLTensor(e,t){return Nh(e,t)}static fromPinnedBuffer(e,t,r){return Bh(e,t,r)}toDataURL(e){return Ih(this,e)}toImageData(e){return Oh(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ph(this,e)}}}),Jt,Uh=U(()=>{fu(),Jt=Ot}),Ha,mu,fr,er,hi,fi,Fh=U(()=>{Ch(),Ha=(e,t)=>{(typeof st.trace>"u"?!st.wasm.trace:!st.trace)||console.timeStamp(`${e}::ORT::${t}`)},mu=(e,t)=>{var a;let r=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],i=!1;for(let n=0;n<r.length;n++){if(i&&!r[n].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[n].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Ha("CPU",s);return}r[n].includes("TRACE_FUNC")&&(i=!0)}},fr=e=>{(typeof st.trace>"u"?!st.wasm.trace:!st.trace)||mu("BEGIN",e)},er=e=>{(typeof st.trace>"u"?!st.wasm.trace:!st.trace)||mu("END",e)},hi=e=>{(typeof st.trace>"u"?!st.wasm.trace:!st.trace)||console.time(`ORT::${e}`)},fi=e=>{(typeof st.trace>"u"?!st.wasm.trace:!st.trace)||console.timeEnd(`ORT::${e}`)}}),Gh,Fb=U(()=>{kh(),Uh(),Fh(),Gh=class iy{constructor(t){this.handler=t}async run(t,r,i){fr(),hi("InferenceSession.run");let a={},n={};if(typeof t!="object"||t===null||t instanceof Jt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Jt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);a[d]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,p=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(p.indexOf(f)!==-1){let m=r[f];(m===null||m instanceof Jt)&&(d=!0,s=!1,a[f]=m)}if(d){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)a[d]=null;let o=await this.handler.run(t,a,n),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let p=o[d];p instanceof Jt?l[d]=p:l[d]=new Jt(p.type,p.data,p.dims)}return fi("InferenceSession.run"),er(),l}async release(){return this.handler.dispose()}static async create(t,r,i,a){fr(),hi("InferenceSession.create");let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,f=0,m=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(m=t.byteLength-f,typeof i=="number"){if(m=i,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||f+m>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-f}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(p,f,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await Sh(s),d=await o.createInferenceSessionHandler(n,l);return fi("InferenceSession.create"),er(),new iy(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),gu,Gb=U(()=>{Fb(),gu=Gh}),Vb=U(()=>{}),Wb=U(()=>{}),qb=U(()=>{}),jb=U(()=>{}),Hb={};nn(Hb,{InferenceSession:()=>gu,TRACE:()=>Ha,TRACE_EVENT_BEGIN:()=>hi,TRACE_EVENT_END:()=>fi,TRACE_FUNC_BEGIN:()=>fr,TRACE_FUNC_END:()=>er,Tensor:()=>Jt,env:()=>Re,registerBackend:()=>an});var Ht=U(()=>{Mb(),Bb(),Gb(),Uh(),Vb(),Wb(),Fh(),qb(),jb()}),_u=U(()=>{}),Vh={};nn(Vh,{default:()=>Wh});var yu,bu,Wh,Kb=U(()=>{var e;E3(),mi(),Su(),yu="ort-wasm-proxy-worker",bu=((e=globalThis.self)==null?void 0:e.name)===yu,bu&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":Cu(i.wasm).then(()=>{Ul(i).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})})},a=>{postMessage({type:r,err:a})});break;case"init-ep":{let{epName:a,env:n}=i;Fl(n,a).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:a}=i,n=ps(a);postMessage({type:r,out:n});break}case"create":{let{model:a,options:n}=i;Vl(a,n).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":Wl(i),postMessage({type:r});break;case"run":{let{sessionId:a,inputIndices:n,inputs:s,outputIndices:o,options:l}=i;jl(a,n,s,o,new Array(o.length).fill(null),l).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},Kl([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Hl(i),postMessage({type:r});break;default:}}catch(a){postMessage({type:r,err:a})}}),Wh=bu?null:t=>new Worker(t??zt,{type:"module",name:yu})}),qh={};nn(qh,{default:()=>jh});var wu,jh,Hh,Yb=U(()=>{var e,t;wu=async function(r={}){var ty;var i,a,n=r,s=new Promise((u,c)=>{i=u,a=c}),o=typeof window=="object",l=typeof WorkerGlobalScope<"u",d=l&&((ty=self.name)==null?void 0:ty.startsWith("em-pthread"));n.mountExternalData=(u,c)=>{u.startsWith("./")&&(u=u.substring(2)),(n.Fb||(n.Fb=new Map)).set(u,c)},n.unmountExternalData=()=>{delete n.Fb};var p=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,qc:!0}).buffer.constructor;let f=u=>async(...c)=>{var h;try{if(n.Gb)throw Error("Session already started");let g=n.Gb={ec:c[0],errors:[]},b=await u(...c);if(n.Gb!==g)throw Error("Session mismatch");(h=n.Kb)==null||h.flush();let T=g.errors;if(0<T.length){let A=await Promise.all(T);if(A=A.filter(R=>R),0<A.length)throw Error(A.join(`
`))}return b}finally{n.Gb=null}};n.jsepInit=(u,c)=>{if(u==="webgpu"){[n.Kb,n.Vb,n.Zb,n.Lb,n.Yb,n.Ab,n.$b,n.bc,n.Wb,n.Xb,n.ac]=c;let h=n.Kb;n.jsepRegisterBuffer=(g,b,T,A)=>h.registerBuffer(g,b,T,A),n.jsepGetBuffer=g=>h.getBuffer(g),n.jsepCreateDownloader=(g,b,T)=>h.createDownloader(g,b,T),n.jsepOnCreateSession=g=>{h.onCreateSession(g)},n.jsepOnReleaseSession=g=>{h.onReleaseSession(g)},n.jsepOnRunStart=g=>h.onRunStart(g),n.cc=(g,b)=>{h.upload(g,b)}}else if(u==="webnn"){let h=c[0];[n.oc,n.Ob,n.webnnEnsureTensor,n.Pb,n.webnnDownloadTensor,n.nc,n.webnnEnableTraceEvent]=c.slice(1),n.webnnReleaseTensorId=n.Ob,n.webnnUploadTensor=n.Pb,n.webnnRegisterMLContext=n.nc,n.webnnOnRunStart=g=>h.onRunStart(g),n.webnnOnRunEnd=h.onRunEnd.bind(h),n.webnnOnReleaseSession=g=>{h.onReleaseSession(g)},n.webnnCreateMLTensorDownloader=(g,b)=>h.createMLTensorDownloader(g,b),n.webnnRegisterMLTensor=(g,b,T,A)=>h.registerMLTensor(g,b,T,A),n.webnnCreateMLContext=g=>h.createMLContext(g),n.webnnRegisterMLConstant=(g,b,T,A,R,L)=>h.registerMLConstant(g,b,T,A,R,n.Fb,L),n.webnnRegisterGraphInput=h.registerGraphInput.bind(h),n.webnnIsGraphInput=h.isGraphInput.bind(h),n.webnnRegisterGraphOutput=h.registerGraphOutput.bind(h),n.webnnIsGraphOutput=h.isGraphOutput.bind(h),n.webnnCreateTemporaryTensor=h.createTemporaryTensor.bind(h),n.webnnIsGraphInputOutputTypeSupported=h.isGraphInputOutputTypeSupported.bind(h)}};let m=()=>{let u=(c,h,g)=>(...b)=>{let T=br,A=h==null?void 0:h();b=c(...b);let R=h==null?void 0:h();return A!==R&&(c=R,g(A),h=g=null),br!=T?new Promise((L,F)=>{fd={resolve:L,reject:F}}):b};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])n[c]=u(n[c],()=>n[c],h=>n[c]=h)})(),f!==void 0&&(n._OrtRun=f(n._OrtRun),n._OrtRunWithBinding=f(n._OrtRunWithBinding)),m=void 0};n.asyncInit=()=>{m==null||m()};var _,y,w=(u,c)=>{throw c},x=self.location.href,$="";if(o||l){try{$=new URL(".",x).href}catch{}l&&(y=u=>{var c=new XMLHttpRequest;return c.open("GET",u,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),_=async u=>{if(V(u))return new Promise((h,g)=>{var b=new XMLHttpRequest;b.open("GET",u,!0),b.responseType="arraybuffer",b.onload=()=>{b.status==200||b.status==0&&b.response?h(b.response):g(b.status)},b.onerror=g,b.send(null)});var c=await fetch(u,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var v,E,S,k,C,O,I,M,G,te,j,W,me,de,Z,he=console.log.bind(console),Q=console.error.bind(console),se=he,Ae=Q,D=!1,V=u=>u.startsWith("file://");function q(){return E.buffer!=C.buffer&&Se(),C}function ie(){return E.buffer!=C.buffer&&Se(),O}function et(){return E.buffer!=C.buffer&&Se(),I}function _r(){return E.buffer!=C.buffer&&Se(),M}function P(){return E.buffer!=C.buffer&&Se(),G}function Ce(){return E.buffer!=C.buffer&&Se(),te}function Mt(){return E.buffer!=C.buffer&&Se(),j}function mt(){return E.buffer!=C.buffer&&Se(),de}if(d){let u=function(c){try{var h=c.data,g=h.Db;if(g==="load"){let b=[];self.onmessage=T=>b.push(T),self.startWorker=()=>{postMessage({Db:"loaded"});for(let T of b)u(T);self.onmessage=u};for(let T of h.Sb)n[T]&&!n[T].proxy||(n[T]=(...A)=>{postMessage({Db:"callHandler",Rb:T,args:A})},T=="print"&&(se=n[T]),T=="printErr"&&(Ae=n[T]));E=h.kc,Se(),Z(h.lc)}else if(g==="run"){a4(h.Bb),wd(h.Bb,0,0,1,0,0),Z3(),pd(h.Bb),Rr||(V_(),Rr=!0);try{s4(h.hc,h.Jb)}catch(b){if(b!="unwind")throw b}}else h.target!=="setimmediate"&&(g==="checkMailbox"?Rr&&ms():g&&(Ae(`worker: received unknown command ${g}`),Ae(h)))}catch(b){throw W_(),b}};var Rr=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=u}function Se(){var u=E.buffer;n.HEAP8=C=new Int8Array(u),I=new Int16Array(u),n.HEAPU8=O=new Uint8Array(u),M=new Uint16Array(u),n.HEAP32=G=new Int32Array(u),n.HEAPU32=te=new Uint32Array(u),j=new Float32Array(u),de=new Float64Array(u),W=new BigInt64Array(u),me=new BigUint64Array(u)}function Ge(){d?startWorker(n):B.Da()}var Nt,Si=0,ki=null;function W3(){if(--Si==0&&ki){var u=ki;ki=null,u()}}function ei(u){throw Ae(u="Aborted("+u+")"),D=!0,u=new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info."),a(u),u}function q3(){return{a:{L:xv,Aa:$v,b:u4,$:t_,A:n_,pa:a_,X:s_,Z:o_,qa:u_,na:l_,ga:d_,ma:c_,J:p_,Y:h_,V:f_,oa:m_,W:g_,va:l4,E:d4,Q:c4,O:h4,D:m4,v:g4,s:_4,P:y4,z:T4,R:S4,ja:k4,T:A4,aa:C4,M:I4,F:O4,ia:pd,sa:z4,r:R4,Ca:M4,w:D4,o:L4,m:U4,c:ud,Ba:F4,n:G4,j:q4,u:j4,p:H4,f:K4,t:Y4,l:X4,e:Z4,k:Q4,h:J4,g:ev,d:tv,da:rv,ea:iv,fa:nv,ba:C_,ca:I_,N:O_,xa:sv,ua:uv,i:lv,C:dv,G:cv,ta:ov,x:pv,ra:hv,U:fv,q:av,y:mv,K:gv,S:_v,za:yv,ya:bv,ka:N_,la:B_,_:nd,B:D_,I:L_,ha:P_,H:U_,a:E,wa:id}}}class td{constructor(c){ry(this,"name","ExitStatus");this.message=`Program terminated with exit(${c})`,this.status=c}}var j3=u=>{u.terminate(),u.onmessage=()=>{}},rd=[],H3=u=>{ri.length==0&&(J3(),Q3(ri[0]));var c=ri.pop();if(!c)return 6;Hn.push(c),Ai[u.Bb]=c,c.Bb=u.Bb;var h={Db:"run",hc:u.fc,Jb:u.Jb,Bb:u.Bb};return c.postMessage(h,u.Nb),0},ti=0,De=(u,c,...h)=>{for(var g=2*h.length,b=xd(),T=$d(8*g),A=T>>>3,R=0;R<h.length;R++){var L=h[R];typeof L=="bigint"?(W[A+2*R]=1n,W[A+2*R+1]=L):(W[A+2*R]=0n,mt()[A+2*R+1>>>0]=L)}return u=q_(u,0,g,T,c),Es(b),u};function id(u){if(d)return De(0,1,u);if(k=u,!(0<ti)){for(var c of Hn)j3(c);for(c of ri)j3(c);ri=[],Hn=[],Ai={},D=!0}w(0,new td(u))}function K3(u){if(d)return De(1,0,u);nd(u)}var nd=u=>{if(k=u,d)throw K3(u),"unwind";id(u)},ri=[],Hn=[],Y3=[],Ai={},X3=u=>{var c=u.Bb;delete Ai[c],ri.push(u),Hn.splice(Hn.indexOf(u),1),u.Bb=0,j_(c)};function Z3(){Y3.forEach(u=>u())}var Q3=u=>new Promise(c=>{u.onmessage=b=>{var T=(b=b.data).Db;if(b.Hb&&b.Hb!=bd()){var A=Ai[b.Hb];A?A.postMessage(b,b.Nb):Ae(`Internal error! Worker sent a message "${T}" to target pthread ${b.Hb}, but that thread no longer exists!`)}else T==="checkMailbox"?ms():T==="spawnThread"?H3(b):T==="cleanupThread"?X3(Ai[b.ic]):T==="loaded"?(u.loaded=!0,c(u)):b.target==="setimmediate"?u.postMessage(b):T==="callHandler"?n[b.Rb](...b.args):T&&Ae(`worker sent an unknown command ${T}`)},u.onerror=b=>{throw Ae(`worker sent an error! ${b.filename}:${b.lineno}: ${b.message}`),b};var h,g=[];for(h of[])n.propertyIsEnumerable(h)&&g.push(h);u.postMessage({Db:"load",Sb:g,kc:E,lc:S})});function J3(){var u=new Worker((()=>{let c=URL;return self.location.href>"file:"&&self.location.href<"file;"?new c("ort.bundle.min.mjs",self.location.href):new URL(self.location.href)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});ri.push(u)}var a4=u=>{Se();var c=Ce()[u+52>>>2>>>0];u=Ce()[u+56>>>2>>>0],Y_(c,c-u),Es(c)},s4=(u,c)=>{ti=0,u=X_(u,c),0<ti?k=u:vd(u)};class o4{constructor(c){this.Ib=c-24}}function u4(u,c,h){var g=new o4(u>>>=0);throw c>>>=0,h>>>=0,Ce()[g.Ib+16>>>2>>>0]=0,Ce()[g.Ib+4>>>2>>>0]=c,Ce()[g.Ib+8>>>2>>>0]=h,u}function e_(u,c,h,g){return d?De(2,1,u,c,h,g):t_(u,c,h,g)}function t_(u,c,h,g){if(u>>>=0,h>>>=0,g>>>=0,p===void 0)return 6;var b=[];return d&&b.length===0?e_(u,c>>>=0,h,g):(u={fc:h,Bb:u,Jb:g,Nb:b},d?(u.Db="spawnThread",postMessage(u,b),0):H3(u))}var r_=typeof TextDecoder<"u"?new TextDecoder:void 0,i_=(u,c=0,h=NaN)=>{var g=(c>>>=0)+h;for(h=c;u[h]&&!(h>=g);)++h;if(16<h-c&&u.buffer&&r_)return r_.decode(u.buffer instanceof ArrayBuffer?u.subarray(c,h):u.slice(c,h));for(g="";c<h;){var b=u[c++];if(128&b){var T=63&u[c++];if((224&b)==192)g+=String.fromCharCode((31&b)<<6|T);else{var A=63&u[c++];65536>(b=(240&b)==224?(15&b)<<12|T<<6|A:(7&b)<<18|T<<12|A<<6|63&u[c++])?g+=String.fromCharCode(b):(b-=65536,g+=String.fromCharCode(55296|b>>10,56320|1023&b))}}else g+=String.fromCharCode(b)}return g},Xe=(u,c)=>(u>>>=0)?i_(ie(),u,c):"";function n_(u,c,h){return d?De(3,1,u,c,h):0}function a_(u,c){if(d)return De(4,1,u,c)}function s_(u,c){if(d)return De(5,1,u,c)}function o_(u,c,h){if(d)return De(6,1,u,c,h)}function u_(u,c,h){return d?De(7,1,u,c,h):0}function l_(u,c){if(d)return De(8,1,u,c)}function d_(u,c,h){if(d)return De(9,1,u,c,h)}function c_(u,c,h,g){if(d)return De(10,1,u,c,h,g)}function p_(u,c,h,g){if(d)return De(11,1,u,c,h,g)}function h_(u,c,h,g){if(d)return De(12,1,u,c,h,g)}function f_(u){if(d)return De(13,1,u)}function m_(u,c){if(d)return De(14,1,u,c)}function g_(u,c,h){if(d)return De(15,1,u,c,h)}var __,l4=()=>ei(""),yr=u=>{for(var c="";ie()[u>>>0];)c+=__[ie()[u++>>>0]];return c},ad={},sd={},cn=n.BindingError=class extends Error{constructor(u){super(u),this.name="BindingError"}};function Mr(u,c,h={}){return(function(g,b,T={}){var A=b.name;if(!g)throw new cn(`type "${A}" must have a positive integer typeid pointer`);if(sd.hasOwnProperty(g)){if(T.Tb)return;throw new cn(`Cannot register type '${A}' twice`)}sd[g]=b,ad.hasOwnProperty(g)&&(b=ad[g],delete ad[g],b.forEach(R=>R()))})(u,c,h)}var y_=(u,c,h)=>{switch(c){case 1:return h?g=>q()[g>>>0]:g=>ie()[g>>>0];case 2:return h?g=>et()[g>>>1>>>0]:g=>_r()[g>>>1>>>0];case 4:return h?g=>P()[g>>>2>>>0]:g=>Ce()[g>>>2>>>0];case 8:return h?g=>W[g>>>3]:g=>me[g>>>3];default:throw new TypeError(`invalid integer width (${c}): ${u}`)}};function d4(u,c,h){h>>>=0,Mr(u>>>=0,{name:c=yr(c>>>0),fromWireType:g=>g,toWireType:function(g,b){if(typeof b!="bigint"&&typeof b!="number")throw b=b===null?"null":(g=typeof b)=="object"||g==="array"||g==="function"?b.toString():""+b,new TypeError(`Cannot convert "${b}" to ${this.name}`);return typeof b=="number"&&(b=BigInt(b)),b},Cb:ii,readValueFromPointer:y_(c,h,c.indexOf("u")==-1),Eb:null})}var ii=8;function c4(u,c,h,g){Mr(u>>>=0,{name:c=yr(c>>>0),fromWireType:function(b){return!!b},toWireType:function(b,T){return T?h:g},Cb:ii,readValueFromPointer:function(b){return this.fromWireType(ie()[b>>>0])},Eb:null})}var od=[],Nr=[];function ud(u){9<(u>>>=0)&&--Nr[u+1]==0&&(Nr[u]=void 0,od.push(u))}var gt=u=>{if(!u)throw new cn(`Cannot use deleted val. handle = ${u}`);return Nr[u]},Kt=u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=od.pop()||Nr.length;return Nr[c]=u,Nr[c+1]=1,c}};function ld(u){return this.fromWireType(Ce()[u>>>2>>>0])}var p4={name:"emscripten::val",fromWireType:u=>{var c=gt(u);return ud(u),c},toWireType:(u,c)=>Kt(c),Cb:ii,readValueFromPointer:ld,Eb:null};function h4(u){return Mr(u>>>0,p4)}var f4=(u,c)=>{switch(c){case 4:return function(h){return this.fromWireType(Mt()[h>>>2>>>0])};case 8:return function(h){return this.fromWireType(mt()[h>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${u}`)}};function m4(u,c,h){h>>>=0,Mr(u>>>=0,{name:c=yr(c>>>0),fromWireType:g=>g,toWireType:(g,b)=>b,Cb:ii,readValueFromPointer:f4(c,h),Eb:null})}function g4(u,c,h,g,b){if(u>>>=0,h>>>=0,c=yr(c>>>0),b===-1&&(b=4294967295),b=R=>R,g===0){var T=32-8*h;b=R=>R<<T>>>T}var A=c.includes("unsigned")?function(R,L){return L>>>0}:function(R,L){return L};Mr(u,{name:c,fromWireType:b,toWireType:A,Cb:ii,readValueFromPointer:y_(c,h,g!==0),Eb:null})}function _4(u,c,h){function g(T){var A=Ce()[T>>>2>>>0];return T=Ce()[T+4>>>2>>>0],new b(q().buffer,T,A)}var b=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];Mr(u>>>=0,{name:h=yr(h>>>0),fromWireType:g,Cb:ii,readValueFromPointer:g},{Tb:!0})}var Ci=(u,c,h)=>{var g=ie();if(c>>>=0,0<h){var b=c;h=c+h-1;for(var T=0;T<u.length;++T){var A=u.charCodeAt(T);if(55296<=A&&57343>=A&&(A=65536+((1023&A)<<10)|1023&u.charCodeAt(++T)),127>=A){if(c>=h)break;g[c++>>>0]=A}else{if(2047>=A){if(c+1>=h)break;g[c++>>>0]=192|A>>6}else{if(65535>=A){if(c+2>=h)break;g[c++>>>0]=224|A>>12}else{if(c+3>=h)break;g[c++>>>0]=240|A>>18,g[c++>>>0]=128|A>>12&63}g[c++>>>0]=128|A>>6&63}g[c++>>>0]=128|63&A}}g[c>>>0]=0,u=c-b}else u=0;return u},dd=u=>{for(var c=0,h=0;h<u.length;++h){var g=u.charCodeAt(h);127>=g?c++:2047>=g?c+=2:55296<=g&&57343>=g?(c+=4,++h):c+=3}return c};function y4(u,c){Mr(u>>>=0,{name:c=yr(c>>>0),fromWireType:function(h){for(var g,b=Ce()[h>>>2>>>0],T=h+4,A=T,R=0;R<=b;++R){var L=T+R;R!=b&&ie()[L>>>0]!=0||(A=Xe(A,L-A),g===void 0?g=A:(g+="\0",g+=A),A=L+1)}return Br(h),g},toWireType:function(h,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var b=typeof g=="string";if(!(b||ArrayBuffer.isView(g)&&g.BYTES_PER_ELEMENT==1))throw new cn("Cannot pass non-string to std::string");var T=b?dd(g):g.length,A=xs(4+T+1),R=A+4;return Ce()[A>>>2>>>0]=T,b?Ci(g,R,T+1):ie().set(g,R>>>0),h!==null&&h.push(Br,A),A},Cb:ii,readValueFromPointer:ld,Eb(h){Br(h)}})}var b_=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,b4=(u,c)=>{for(var h=u>>1,g=h+c/2;!(h>=g)&&_r()[h>>>0];)++h;if(32<(h<<=1)-u&&b_)return b_.decode(ie().slice(u,h));for(h="",g=0;!(g>=c/2);++g){var b=et()[u+2*g>>>1>>>0];if(b==0)break;h+=String.fromCharCode(b)}return h},w4=(u,c,h)=>{if(h??(h=2147483647),2>h)return 0;var g=c;h=(h-=2)<2*u.length?h/2:u.length;for(var b=0;b<h;++b){var T=u.charCodeAt(b);et()[c>>>1>>>0]=T,c+=2}return et()[c>>>1>>>0]=0,c-g},v4=u=>2*u.length,$4=(u,c)=>{for(var h=0,g="";!(h>=c/4);){var b=P()[u+4*h>>>2>>>0];if(b==0)break;++h,65536<=b?(b-=65536,g+=String.fromCharCode(55296|b>>10,56320|1023&b)):g+=String.fromCharCode(b)}return g},x4=(u,c,h)=>{if(c>>>=0,h??(h=2147483647),4>h)return 0;var g=c;h=g+h-4;for(var b=0;b<u.length;++b){var T=u.charCodeAt(b);if(55296<=T&&57343>=T&&(T=65536+((1023&T)<<10)|1023&u.charCodeAt(++b)),P()[c>>>2>>>0]=T,(c+=4)+4>h)break}return P()[c>>>2>>>0]=0,c-g},E4=u=>{for(var c=0,h=0;h<u.length;++h){var g=u.charCodeAt(h);55296<=g&&57343>=g&&++h,c+=4}return c};function T4(u,c,h){if(u>>>=0,c>>>=0,h=yr(h>>>=0),c===2)var g=b4,b=w4,T=v4,A=R=>_r()[R>>>1>>>0];else c===4&&(g=$4,b=x4,T=E4,A=R=>Ce()[R>>>2>>>0]);Mr(u,{name:h,fromWireType:R=>{for(var L,F=Ce()[R>>>2>>>0],K=R+4,le=0;le<=F;++le){var fe=R+4+le*c;le!=F&&A(fe)!=0||(K=g(K,fe-K),L===void 0?L=K:(L+="\0",L+=K),K=fe+c)}return Br(R),L},toWireType:(R,L)=>{if(typeof L!="string")throw new cn(`Cannot pass non-string to C++ string type ${h}`);var F=T(L),K=xs(4+F+c);return Ce()[K>>>2>>>0]=F/c,b(L,K+4,F+c),R!==null&&R.push(Br,K),K},Cb:ii,readValueFromPointer:ld,Eb(R){Br(R)}})}function S4(u,c){Mr(u>>>=0,{Ub:!0,name:c=yr(c>>>0),Cb:0,fromWireType:()=>{},toWireType:()=>{}})}function k4(u){wd(u>>>0,!l,1,!o,131072,!1),Z3()}var cd=u=>{if(!D)try{if(u(),!(0<ti))try{d?vd(k):nd(k)}catch(c){c instanceof td||c=="unwind"||w(0,c)}}catch(c){c instanceof td||c=="unwind"||w(0,c)}};function pd(u){u>>>=0,typeof Atomics.jc=="function"&&(Atomics.jc(P(),u>>>2,u).value.then(ms),u+=128,Atomics.store(P(),u>>>2,1))}var ms=()=>{var u=bd();u&&(pd(u),cd(K_))};function A4(u,c){(u>>>=0)==c>>>0?setTimeout(ms):d?postMessage({Hb:u,Db:"checkMailbox"}):(u=Ai[u])&&u.postMessage({Db:"checkMailbox"})}var hd=[];function C4(u,c,h,g,b){for(c>>>=0,g/=2,hd.length=g,h=b>>>0>>>3,b=0;b<g;b++)hd[b]=W[h+2*b]?W[h+2*b+1]:mt()[h+2*b+1>>>0];return(c?yd[c]:vv[u])(...hd)}var I4=()=>{ti=0};function O4(u){u>>>=0,d?postMessage({Db:"cleanupThread",ic:u}):X3(Ai[u])}function z4(u){}var gs=(u,c)=>{var h=sd[u];if(h===void 0)throw u=G_(u),h=yr(u),Br(u),new cn(`${c} has unknown type ${h}`);return h},w_=(u,c,h)=>{var g=[];return u=u.toWireType(g,h),g.length&&(Ce()[c>>>2>>>0]=Kt(g)),u};function R4(u,c,h){return c>>>=0,h>>>=0,u=gt(u>>>0),c=gs(c,"emval::as"),w_(c,h,u)}function M4(u,c){return c>>>=0,u=gt(u>>>0),(c=gs(c,"emval::as")).toWireType(null,u)}var _s=u=>{try{u()}catch(c){ei(c)}},ni=0,br=null,v_=0,ys=[],$_={},x_={},N4=0,fd=null,B4=[];function E_(u){return(function(c){if(!D){if(ni===0){var h=!1,g=!1;c((b=0)=>{if(!D&&(v_=b,h=!0,g)){ni=2,_s(()=>J_(br)),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.resume(),b=!1;try{var T=(function(){var L=P()[br+8>>>2>>>0];return L=B[x_[L]],--ti,L()})()}catch(L){T=L,b=!0}var A=!1;if(!br){var R=fd;R&&(fd=null,(b?R.reject:R.resolve)(T),A=!0)}if(b&&!A)throw T}}),g=!0,h||(ni=1,br=(function(){var b=xs(65548),T=b+12;Ce()[b>>>2>>>0]=T,Ce()[b+4>>>2>>>0]=T+65536,T=ys[0];var A=$_[T];return A===void 0&&(A=N4++,$_[T]=A,x_[A]=T),T=A,P()[b+8>>>2>>>0]=T,b})(),typeof MainLoop<"u"&&MainLoop.Qb&&MainLoop.pause(),_s(()=>Z_(br)))}else ni===2?(ni=0,_s(ey),Br(br),br=null,B4.forEach(cd)):ei(`invalid state: ${ni}`);return v_}})(c=>{u().then(c)})}function D4(u){return u>>>=0,E_(async()=>{var c=await gt(u);return Kt(c)})}var bs=[];function L4(u,c,h,g){return h>>>=0,g>>>=0,(u=bs[u>>>0])(null,c=gt(c>>>0),h,g)}var P4={},ws=u=>{var c=P4[u];return c===void 0?yr(u):c};function U4(u,c,h,g,b){return h>>>=0,g>>>=0,b>>>=0,(u=bs[u>>>0])(c=gt(c>>>0),c[h=ws(h)],g,b)}function F4(u,c){return c>>>=0,(u=gt(u>>>0))==gt(c)}var T_=()=>typeof globalThis=="object"?globalThis:Function("return this")();function G4(u){return(u>>>=0)==0?Kt(T_()):(u=ws(u),Kt(T_()[u]))}var V4=u=>{var c=bs.length;return bs.push(u),c},W4=(u,c)=>{for(var h=Array(u),g=0;g<u;++g)h[g]=gs(Ce()[c+4*g>>>2>>>0],`parameter ${g}`);return h};function q4(u,c,h){var g=(c=W4(u,c>>>0)).shift();u--;var b=`return function (obj, func, destructorsRef, args) {
`,T=0,A=[];h===0&&A.push("obj");for(var R=["retType"],L=[g],F=0;F<u;++F)A.push(`arg${F}`),R.push(`argType${F}`),L.push(c[F]),b+=`  var arg${F} = argType${F}.readValueFromPointer(args${T?"+"+T:""});
`,T+=c[F].Cb;return b+=`  var rv = ${h===1?"new func":"func.call"}(${A.join(", ")});
`,g.Ub||(R.push("emval_returnValue"),L.push(w_),b+=`  return emval_returnValue(retType, destructorsRef, rv);
`),u=new Function(...R,b+`};
`)(...L),h=`methodCaller<(${c.map(K=>K.name).join(", ")}) => ${g.name}>`,V4(Object.defineProperty(u,"name",{value:h}))}function j4(u){return u=ws(u>>>0),Kt(n[u])}function H4(u,c){return c>>>=0,u=gt(u>>>0),c=gt(c),Kt(u[c])}function K4(u){9<(u>>>=0)&&(Nr[u+1]+=1)}function Y4(){return Kt([])}function X4(u){u=gt(u>>>0);for(var c=Array(u.length),h=0;h<u.length;h++)c[h]=u[h];return Kt(c)}function Z4(u){return Kt(ws(u>>>0))}function Q4(){return Kt({})}function J4(u){for(var c=gt(u>>>=0);c.length;){var h=c.pop();c.pop()(h)}ud(u)}function ev(u,c,h){c>>>=0,h>>>=0,u=gt(u>>>0),c=gt(c),h=gt(h),u[c]=h}function tv(u,c){return c>>>=0,u=(u=gs(u>>>0,"_emval_take_value")).readValueFromPointer(c),Kt(u)}function rv(u,c){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),c>>>=0,u=new Date(1e3*u),P()[c>>>2>>>0]=u.getUTCSeconds(),P()[c+4>>>2>>>0]=u.getUTCMinutes(),P()[c+8>>>2>>>0]=u.getUTCHours(),P()[c+12>>>2>>>0]=u.getUTCDate(),P()[c+16>>>2>>>0]=u.getUTCMonth(),P()[c+20>>>2>>>0]=u.getUTCFullYear()-1900,P()[c+24>>>2>>>0]=u.getUTCDay(),u=(u.getTime()-Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,P()[c+28>>>2>>>0]=u}var S_=u=>u%4==0&&(u%100!=0||u%400==0),k_=[0,31,60,91,121,152,182,213,244,274,305,335],A_=[0,31,59,90,120,151,181,212,243,273,304,334];function iv(u,c){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),c>>>=0,u=new Date(1e3*u),P()[c>>>2>>>0]=u.getSeconds(),P()[c+4>>>2>>>0]=u.getMinutes(),P()[c+8>>>2>>>0]=u.getHours(),P()[c+12>>>2>>>0]=u.getDate(),P()[c+16>>>2>>>0]=u.getMonth(),P()[c+20>>>2>>>0]=u.getFullYear()-1900,P()[c+24>>>2>>>0]=u.getDay();var h=(S_(u.getFullYear())?k_:A_)[u.getMonth()]+u.getDate()-1|0;P()[c+28>>>2>>>0]=h,P()[c+36>>>2>>>0]=-60*u.getTimezoneOffset(),h=new Date(u.getFullYear(),6,1).getTimezoneOffset();var g=new Date(u.getFullYear(),0,1).getTimezoneOffset();u=0|(h!=g&&u.getTimezoneOffset()==Math.min(g,h)),P()[c+32>>>2>>>0]=u}function nv(u){u>>>=0;var c=new Date(P()[u+20>>>2>>>0]+1900,P()[u+16>>>2>>>0],P()[u+12>>>2>>>0],P()[u+8>>>2>>>0],P()[u+4>>>2>>>0],P()[u>>>2>>>0],0),h=P()[u+32>>>2>>>0],g=c.getTimezoneOffset(),b=new Date(c.getFullYear(),6,1).getTimezoneOffset(),T=new Date(c.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(T,b);return 0>h?P()[u+32>>>2>>>0]=+(b!=T&&A==g):0<h!=(A==g)&&(b=Math.max(T,b),c.setTime(c.getTime()+6e4*((0<h?A:b)-g))),P()[u+24>>>2>>>0]=c.getDay(),h=(S_(c.getFullYear())?k_:A_)[c.getMonth()]+c.getDate()-1|0,P()[u+28>>>2>>>0]=h,P()[u>>>2>>>0]=c.getSeconds(),P()[u+4>>>2>>>0]=c.getMinutes(),P()[u+8>>>2>>>0]=c.getHours(),P()[u+12>>>2>>>0]=c.getDate(),P()[u+16>>>2>>>0]=c.getMonth(),P()[u+20>>>2>>>0]=c.getYear(),u=c.getTime(),BigInt(isNaN(u)?-1:u/1e3)}function C_(u,c,h,g,b,T,A){return d?De(16,1,u,c,h,g,b,T,A):-52}function I_(u,c,h,g,b,T){if(d)return De(17,1,u,c,h,g,b,T)}var Kn={},av=()=>performance.timeOrigin+performance.now();function O_(u,c){if(d)return De(18,1,u,c);if(Kn[u]&&(clearTimeout(Kn[u].id),delete Kn[u]),!c)return 0;var h=setTimeout(()=>{delete Kn[u],cd(()=>H_(u,performance.timeOrigin+performance.now()))},c);return Kn[u]={id:h,rc:c},0}function sv(u,c,h,g){u>>>=0,c>>>=0,h>>>=0,g>>>=0;var b=new Date().getFullYear(),T=new Date(b,0,1).getTimezoneOffset();b=new Date(b,6,1).getTimezoneOffset();var A=Math.max(T,b);Ce()[u>>>2>>>0]=60*A,P()[c>>>2>>>0]=+(T!=b),u=(c=R=>{var L=Math.abs(R);return`UTC${0<=R?"-":"+"}${String(Math.floor(L/60)).padStart(2,"0")}${String(L%60).padStart(2,"0")}`})(T),c=c(b),b<T?(Ci(u,h,17),Ci(c,g,17)):(Ci(u,g,17),Ci(c,h,17))}var ov=()=>Date.now();function uv(u,c,h){return 0<=u&&3>=u?(u===0?u=Date.now():u=performance.timeOrigin+performance.now(),W[h>>>0>>>3]=BigInt(Math.round(1e6*u)),0):28}var md=[],z_=(u,c)=>{md.length=0;for(var h;h=ie()[u++>>>0];){var g=h!=105;c+=(g&=h!=112)&&c%8?4:0,md.push(h==112?Ce()[c>>>2>>>0]:h==106?W[c>>>3]:h==105?P()[c>>>2>>>0]:mt()[c>>>3>>>0]),c+=g?8:4}return md};function lv(u,c,h){return u>>>=0,c=z_(c>>>0,h>>>0),yd[u](...c)}function dv(u,c,h){return u>>>=0,c=z_(c>>>0,h>>>0),yd[u](...c)}var cv=()=>{};function pv(u,c){return Ae(Xe(u>>>0,c>>>0))}var hv=()=>{throw ti+=1,"unwind"};function fv(){return 4294901760}var mv=()=>navigator.hardwareConcurrency;function gv(){return ei("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function _v(u){u>>>=0;var c=ie().length;if(u<=c||4294901760<u)return!1;for(var h=1;4>=h;h*=2){var g=c*(1+.2/h);g=Math.min(g,u+100663296);e:{g=(Math.min(4294901760,65536*Math.ceil(Math.max(u,g)/65536))-E.buffer.byteLength+65535)/65536|0;try{E.grow(g),Se();var b=1;break e}catch{}b=void 0}if(b)return!0}return!1}var vs=()=>(ei("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Yn={},R_=u=>{u.forEach(c=>{vs()})};function yv(){var u=Error().stack.toString().split(`
`);return u[0]=="Error"&&u.shift(),R_(u),Yn.Mb=vs(),Yn.dc=u,Yn.Mb}function bv(u,c,h){if(u>>>=0,c>>>=0,Yn.Mb==u)var g=Yn.dc;else(g=Error().stack.toString().split(`
`))[0]=="Error"&&g.shift(),R_(g);for(var b=3;g[b]&&vs()!=u;)++b;for(u=0;u<h&&g[u+b];++u)P()[c+4*u>>>2>>>0]=vs();return u}var gd,_d={},M_=()=>{if(!gd){var u,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(u in _d)_d[u]===void 0?delete c[u]:c[u]=_d[u];var h=[];for(u in c)h.push(`${u}=${c[u]}`);gd=h}return gd};function N_(u,c){if(d)return De(19,1,u,c);u>>>=0,c>>>=0;var h,g=0,b=0;for(h of M_()){var T=c+g;Ce()[u+b>>>2>>>0]=T,g+=Ci(h,T,1/0)+1,b+=4}return 0}function B_(u,c){if(d)return De(20,1,u,c);u>>>=0,c>>>=0;var h=M_();for(var g of(Ce()[u>>>2>>>0]=h.length,u=0,h))u+=dd(g)+1;return Ce()[c>>>2>>>0]=u,0}function D_(u){return d?De(21,1,u):52}function L_(u,c,h,g){return d?De(22,1,u,c,h,g):52}function P_(u,c,h,g){return d?De(23,1,u,c,h,g):70}var wv=[null,[],[]];function U_(u,c,h,g){if(d)return De(24,1,u,c,h,g);c>>>=0,h>>>=0,g>>>=0;for(var b=0,T=0;T<h;T++){var A=Ce()[c>>>2>>>0],R=Ce()[c+4>>>2>>>0];c+=8;for(var L=0;L<R;L++){var F=u,K=ie()[A+L>>>0],le=wv[F];K===0||K===10?((F===1?se:Ae)(i_(le)),le.length=0):le.push(K)}b+=R}return Ce()[g>>>2>>>0]=b,0}d||(function(){for(var u=n.numThreads-1;u--;)J3();rd.push(()=>{Si++,(function(c){d?c():Promise.all(ri.map(Q3)).then(c)})(()=>W3())})})();for(var F_=Array(256),$s=0;256>$s;++$s)F_[$s]=String.fromCharCode($s);__=F_,Nr.push(0,1,void 0,1,null,1,!0,1,!1,1),n.count_emval_handles=()=>Nr.length/2-5-od.length,d||(E=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Se()),n.wasmBinary&&(v=n.wasmBinary),n.stackSave=()=>xd(),n.stackRestore=u=>Es(u),n.stackAlloc=u=>$d(u),n.setValue=function(u,c,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":q()[u>>>0]=c;break;case"i16":et()[u>>>1>>>0]=c;break;case"i32":P()[u>>>2>>>0]=c;break;case"i64":W[u>>>3]=BigInt(c);break;case"float":Mt()[u>>>2>>>0]=c;break;case"double":mt()[u>>>3>>>0]=c;break;case"*":Ce()[u>>>2>>>0]=c;break;default:ei(`invalid type for setValue: ${h}`)}},n.getValue=function(u,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return q()[u>>>0];case"i16":return et()[u>>>1>>>0];case"i32":return P()[u>>>2>>>0];case"i64":return W[u>>>3];case"float":return Mt()[u>>>2>>>0];case"double":return mt()[u>>>3>>>0];case"*":return Ce()[u>>>2>>>0];default:ei(`invalid type for getValue: ${c}`)}},n.UTF8ToString=Xe,n.stringToUTF8=Ci,n.lengthBytesUTF8=dd;var vv=[id,K3,e_,n_,a_,s_,o_,u_,l_,d_,c_,p_,h_,f_,m_,g_,C_,I_,O_,N_,B_,D_,L_,P_,U_],yd={893836:(u,c,h,g,b)=>{if(n===void 0||!n.Fb)return 1;if((u=Xe(Number(u>>>0))).startsWith("./")&&(u=u.substring(2)),!(u=n.Fb.get(u)))return 2;if(c=Number(c>>>0),h=Number(h>>>0),g=Number(g>>>0),c+h>u.byteLength)return 3;try{let T=u.subarray(c,c+h);switch(b){case 0:ie().set(T,g>>>0);break;case 1:n.mc?n.mc(g,T):n.cc(g,T);break;default:return 4}return 0}catch{return 4}},894660:(u,c,h)=>{n.Pb(u,ie().subarray(c>>>0,c+h>>>0))},894724:()=>n.oc(),894766:u=>{n.Ob(u)},894803:()=>{n.Wb()},894834:()=>{n.Xb()},894863:()=>{n.ac()},894888:u=>n.Vb(u),894921:u=>n.Zb(u),894953:(u,c,h)=>{n.Lb(Number(u),Number(c),Number(h),!0)},895016:(u,c,h)=>{n.Lb(Number(u),Number(c),Number(h))},895073:()=>typeof wasmOffsetConverter<"u",895130:u=>{n.Ab("Abs",u,void 0)},895181:u=>{n.Ab("Neg",u,void 0)},895232:u=>{n.Ab("Floor",u,void 0)},895285:u=>{n.Ab("Ceil",u,void 0)},895337:u=>{n.Ab("Reciprocal",u,void 0)},895395:u=>{n.Ab("Sqrt",u,void 0)},895447:u=>{n.Ab("Exp",u,void 0)},895498:u=>{n.Ab("Erf",u,void 0)},895549:u=>{n.Ab("Sigmoid",u,void 0)},895604:(u,c,h)=>{n.Ab("HardSigmoid",u,{alpha:c,beta:h})},895683:u=>{n.Ab("Log",u,void 0)},895734:u=>{n.Ab("Sin",u,void 0)},895785:u=>{n.Ab("Cos",u,void 0)},895836:u=>{n.Ab("Tan",u,void 0)},895887:u=>{n.Ab("Asin",u,void 0)},895939:u=>{n.Ab("Acos",u,void 0)},895991:u=>{n.Ab("Atan",u,void 0)},896043:u=>{n.Ab("Sinh",u,void 0)},896095:u=>{n.Ab("Cosh",u,void 0)},896147:u=>{n.Ab("Asinh",u,void 0)},896200:u=>{n.Ab("Acosh",u,void 0)},896253:u=>{n.Ab("Atanh",u,void 0)},896306:u=>{n.Ab("Tanh",u,void 0)},896358:u=>{n.Ab("Not",u,void 0)},896409:(u,c,h)=>{n.Ab("Clip",u,{min:c,max:h})},896478:u=>{n.Ab("Clip",u,void 0)},896530:(u,c)=>{n.Ab("Elu",u,{alpha:c})},896588:u=>{n.Ab("Gelu",u,void 0)},896640:u=>{n.Ab("Relu",u,void 0)},896692:(u,c)=>{n.Ab("LeakyRelu",u,{alpha:c})},896756:(u,c)=>{n.Ab("ThresholdedRelu",u,{alpha:c})},896826:(u,c)=>{n.Ab("Cast",u,{to:c})},896884:u=>{n.Ab("Add",u,void 0)},896935:u=>{n.Ab("Sub",u,void 0)},896986:u=>{n.Ab("Mul",u,void 0)},897037:u=>{n.Ab("Div",u,void 0)},897088:u=>{n.Ab("Pow",u,void 0)},897139:u=>{n.Ab("Equal",u,void 0)},897192:u=>{n.Ab("Greater",u,void 0)},897247:u=>{n.Ab("GreaterOrEqual",u,void 0)},897309:u=>{n.Ab("Less",u,void 0)},897361:u=>{n.Ab("LessOrEqual",u,void 0)},897420:(u,c,h,g,b)=>{n.Ab("ReduceMean",u,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(P().subarray(Number(g)>>>0,Number(b)>>>0)):[]})},897595:(u,c,h,g,b)=>{n.Ab("ReduceMax",u,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(P().subarray(Number(g)>>>0,Number(b)>>>0)):[]})},897769:(u,c,h,g,b)=>{n.Ab("ReduceMin",u,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(P().subarray(Number(g)>>>0,Number(b)>>>0)):[]})},897943:(u,c,h,g,b)=>{n.Ab("ReduceProd",u,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(P().subarray(Number(g)>>>0,Number(b)>>>0)):[]})},898118:(u,c,h,g,b)=>{n.Ab("ReduceSum",u,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(P().subarray(Number(g)>>>0,Number(b)>>>0)):[]})},898292:(u,c,h,g,b)=>{n.Ab("ReduceL1",u,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(P().subarray(Number(g)>>>0,Number(b)>>>0)):[]})},898465:(u,c,h,g,b)=>{n.Ab("ReduceL2",u,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(P().subarray(Number(g)>>>0,Number(b)>>>0)):[]})},898638:(u,c,h,g,b)=>{n.Ab("ReduceLogSum",u,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(P().subarray(Number(g)>>>0,Number(b)>>>0)):[]})},898815:(u,c,h,g,b)=>{n.Ab("ReduceSumSquare",u,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(P().subarray(Number(g)>>>0,Number(b)>>>0)):[]})},898995:(u,c,h,g,b)=>{n.Ab("ReduceLogSumExp",u,{keepDims:!!c,noopWithEmptyAxes:!!h,axes:g?Array.from(P().subarray(Number(g)>>>0,Number(b)>>>0)):[]})},899175:u=>{n.Ab("Where",u,void 0)},899228:(u,c,h)=>{n.Ab("Transpose",u,{perm:c?Array.from(P().subarray(Number(c)>>>0,Number(h)>>>0)):[]})},899352:(u,c,h,g)=>{n.Ab("DepthToSpace",u,{blocksize:c,mode:Xe(h),format:g?"NHWC":"NCHW"})},899485:(u,c,h,g)=>{n.Ab("DepthToSpace",u,{blocksize:c,mode:Xe(h),format:g?"NHWC":"NCHW"})},899618:(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt)=>{n.Ab("ConvTranspose",u,{format:L?"NHWC":"NCHW",autoPad:c,dilations:[h],group:g,kernelShape:[b],pads:[T,A],strides:[R],wIsConst:()=>!!q()[F>>>0],outputPadding:K?Array.from(P().subarray(Number(K)>>>0,Number(le)>>>0)):[],outputShape:fe?Array.from(P().subarray(Number(fe)>>>0,Number(xe)>>>0)):[],activation:Xe(tt)})},900051:(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe)=>{n.Ab("ConvTranspose",u,{format:R?"NHWC":"NCHW",autoPad:c,dilations:Array.from(P().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:g,kernelShape:Array.from(P().subarray(Number(b)>>>0,2+(Number(b)>>>0)>>>0)),pads:Array.from(P().subarray(Number(T)>>>0,4+(Number(T)>>>0)>>>0)),strides:Array.from(P().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!q()[L>>>0],outputPadding:F?Array.from(P().subarray(Number(F)>>>0,Number(K)>>>0)):[],outputShape:le?Array.from(P().subarray(Number(le)>>>0,Number(fe)>>>0)):[],activation:Xe(xe)})},900712:(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt)=>{n.Ab("ConvTranspose",u,{format:L?"NHWC":"NCHW",autoPad:c,dilations:[h],group:g,kernelShape:[b],pads:[T,A],strides:[R],wIsConst:()=>!!q()[F>>>0],outputPadding:K?Array.from(P().subarray(Number(K)>>>0,Number(le)>>>0)):[],outputShape:fe?Array.from(P().subarray(Number(fe)>>>0,Number(xe)>>>0)):[],activation:Xe(tt)})},901145:(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe)=>{n.Ab("ConvTranspose",u,{format:R?"NHWC":"NCHW",autoPad:c,dilations:Array.from(P().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),group:g,kernelShape:Array.from(P().subarray(Number(b)>>>0,2+(Number(b)>>>0)>>>0)),pads:Array.from(P().subarray(Number(T)>>>0,4+(Number(T)>>>0)>>>0)),strides:Array.from(P().subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!q()[L>>>0],outputPadding:F?Array.from(P().subarray(Number(F)>>>0,Number(K)>>>0)):[],outputShape:le?Array.from(P().subarray(Number(le)>>>0,Number(fe)>>>0)):[],activation:Xe(xe)})},901806:(u,c)=>{n.Ab("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},901897:(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe)=>{n.Ab("AveragePool",u,{format:xe?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:g,storage_order:b,dilations:T?Array.from(P().subarray(Number(T)>>>0,Number(A)>>>0)):[],kernel_shape:R?Array.from(P().subarray(Number(R)>>>0,Number(L)>>>0)):[],pads:F?Array.from(P().subarray(Number(F)>>>0,Number(K)>>>0)):[],strides:le?Array.from(P().subarray(Number(le)>>>0,Number(fe)>>>0)):[]})},902376:(u,c)=>{n.Ab("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},902467:(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe)=>{n.Ab("AveragePool",u,{format:xe?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:g,storage_order:b,dilations:T?Array.from(P().subarray(Number(T)>>>0,Number(A)>>>0)):[],kernel_shape:R?Array.from(P().subarray(Number(R)>>>0,Number(L)>>>0)):[],pads:F?Array.from(P().subarray(Number(F)>>>0,Number(K)>>>0)):[],strides:le?Array.from(P().subarray(Number(le)>>>0,Number(fe)>>>0)):[]})},902946:(u,c)=>{n.Ab("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},903033:(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe)=>{n.Ab("MaxPool",u,{format:xe?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:g,storage_order:b,dilations:T?Array.from(P().subarray(Number(T)>>>0,Number(A)>>>0)):[],kernel_shape:R?Array.from(P().subarray(Number(R)>>>0,Number(L)>>>0)):[],pads:F?Array.from(P().subarray(Number(F)>>>0,Number(K)>>>0)):[],strides:le?Array.from(P().subarray(Number(le)>>>0,Number(fe)>>>0)):[]})},903508:(u,c)=>{n.Ab("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},903595:(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe)=>{n.Ab("MaxPool",u,{format:xe?"NHWC":"NCHW",auto_pad:c,ceil_mode:h,count_include_pad:g,storage_order:b,dilations:T?Array.from(P().subarray(Number(T)>>>0,Number(A)>>>0)):[],kernel_shape:R?Array.from(P().subarray(Number(R)>>>0,Number(L)>>>0)):[],pads:F?Array.from(P().subarray(Number(F)>>>0,Number(K)>>>0)):[],strides:le?Array.from(P().subarray(Number(le)>>>0,Number(fe)>>>0)):[]})},904070:(u,c,h,g,b)=>{n.Ab("Gemm",u,{alpha:c,beta:h,transA:g,transB:b})},904174:u=>{n.Ab("MatMul",u,void 0)},904228:(u,c,h,g)=>{n.Ab("ArgMax",u,{keepDims:!!c,selectLastIndex:!!h,axis:g})},904336:(u,c,h,g)=>{n.Ab("ArgMin",u,{keepDims:!!c,selectLastIndex:!!h,axis:g})},904444:(u,c)=>{n.Ab("Softmax",u,{axis:c})},904507:(u,c)=>{n.Ab("Concat",u,{axis:c})},904567:(u,c,h,g,b)=>{n.Ab("Split",u,{axis:c,numOutputs:h,splitSizes:g?Array.from(P().subarray(Number(g)>>>0,Number(b)>>>0)):[]})},904723:u=>{n.Ab("Expand",u,void 0)},904777:(u,c)=>{n.Ab("Gather",u,{axis:Number(c)})},904848:(u,c)=>{n.Ab("GatherElements",u,{axis:Number(c)})},904927:(u,c)=>{n.Ab("GatherND",u,{batch_dims:Number(c)})},905006:(u,c,h,g,b,T,A,R,L,F,K)=>{n.Ab("Resize",u,{antialias:c,axes:h?Array.from(P().subarray(Number(h)>>>0,Number(g)>>>0)):[],coordinateTransformMode:Xe(b),cubicCoeffA:T,excludeOutside:A,extrapolationValue:R,keepAspectRatioPolicy:Xe(L),mode:Xe(F),nearestMode:Xe(K)})},905368:(u,c,h,g,b,T,A)=>{n.Ab("Slice",u,{starts:c?Array.from(P().subarray(Number(c)>>>0,Number(h)>>>0)):[],ends:g?Array.from(P().subarray(Number(g)>>>0,Number(b)>>>0)):[],axes:T?Array.from(P().subarray(Number(T)>>>0,Number(A)>>>0)):[]})},905632:u=>{n.Ab("Tile",u,void 0)},905684:(u,c,h)=>{n.Ab("InstanceNormalization",u,{epsilon:c,format:h?"NHWC":"NCHW"})},905798:(u,c,h)=>{n.Ab("InstanceNormalization",u,{epsilon:c,format:h?"NHWC":"NCHW"})},905912:u=>{n.Ab("Range",u,void 0)},905965:(u,c)=>{n.Ab("Einsum",u,{equation:Xe(c)})},906046:(u,c,h,g,b)=>{n.Ab("Pad",u,{mode:c,value:h,pads:g?Array.from(P().subarray(Number(g)>>>0,Number(b)>>>0)):[]})},906189:(u,c,h,g,b,T)=>{n.Ab("BatchNormalization",u,{epsilon:c,momentum:h,spatial:!!b,trainingMode:!!g,format:T?"NHWC":"NCHW"})},906358:(u,c,h,g,b,T)=>{n.Ab("BatchNormalization",u,{epsilon:c,momentum:h,spatial:!!b,trainingMode:!!g,format:T?"NHWC":"NCHW"})},906527:(u,c,h)=>{n.Ab("CumSum",u,{exclusive:Number(c),reverse:Number(h)})},906624:(u,c,h)=>{n.Ab("DequantizeLinear",u,{axis:c,blockSize:h})},906714:(u,c,h,g,b)=>{n.Ab("GridSample",u,{align_corners:c,mode:Xe(h),padding_mode:Xe(g),format:b?"NHWC":"NCHW"})},906884:(u,c,h,g,b)=>{n.Ab("GridSample",u,{align_corners:c,mode:Xe(h),padding_mode:Xe(g),format:b?"NHWC":"NCHW"})},907054:(u,c)=>{n.Ab("ScatterND",u,{reduction:Xe(c)})},907139:(u,c,h,g,b,T,A,R,L)=>{n.Ab("Attention",u,{numHeads:c,isUnidirectional:h,maskFilterValue:g,scale:b,doRotary:T,qkvHiddenSizes:A?Array.from(P().subarray(Number(R)>>>0,Number(R)+A>>>0)):[],pastPresentShareBuffer:!!L})},907411:u=>{n.Ab("BiasAdd",u,void 0)},907466:u=>{n.Ab("BiasSplitGelu",u,void 0)},907527:u=>{n.Ab("FastGelu",u,void 0)},907583:(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt,Bt)=>{n.Ab("Conv",u,{format:le?"NHWC":"NCHW",auto_pad:c,dilations:h?Array.from(P().subarray(Number(h)>>>0,Number(g)>>>0)):[],group:b,kernel_shape:T?Array.from(P().subarray(Number(T)>>>0,Number(A)>>>0)):[],pads:R?Array.from(P().subarray(Number(R)>>>0,Number(L)>>>0)):[],strides:F?Array.from(P().subarray(Number(F)>>>0,Number(K)>>>0)):[],w_is_const:()=>!!q()[Number(fe)>>>0],activation:Xe(xe),activation_params:tt?Array.from(Mt().subarray(Number(tt)>>>0,Number(Bt)>>>0)):[]})},908167:u=>{n.Ab("Gelu",u,void 0)},908219:(u,c,h,g,b,T,A,R,L)=>{n.Ab("GroupQueryAttention",u,{numHeads:c,kvNumHeads:h,scale:g,softcap:b,doRotary:T,rotaryInterleaved:A,smoothSoftmax:R,localWindowSize:L})},908436:(u,c,h,g)=>{n.Ab("LayerNormalization",u,{axis:c,epsilon:h,simplified:!!g})},908547:(u,c,h,g)=>{n.Ab("LayerNormalization",u,{axis:c,epsilon:h,simplified:!!g})},908658:(u,c,h,g,b,T)=>{n.Ab("MatMulNBits",u,{k:c,n:h,accuracyLevel:g,bits:b,blockSize:T})},908785:(u,c,h,g,b,T)=>{n.Ab("MultiHeadAttention",u,{numHeads:c,isUnidirectional:h,maskFilterValue:g,scale:b,doRotary:T})},908944:(u,c)=>{n.Ab("QuickGelu",u,{alpha:c})},909008:(u,c,h,g,b)=>{n.Ab("RotaryEmbedding",u,{interleaved:!!c,numHeads:h,rotaryEmbeddingDim:g,scale:b})},909147:(u,c,h)=>{n.Ab("SkipLayerNormalization",u,{epsilon:c,simplified:!!h})},909249:(u,c,h)=>{n.Ab("SkipLayerNormalization",u,{epsilon:c,simplified:!!h})},909351:(u,c,h,g)=>{n.Ab("GatherBlockQuantized",u,{gatherAxis:c,quantizeAxis:h,blockSize:g})},909472:u=>{n.$b(u)},909506:(u,c)=>n.bc(Number(u),Number(c),n.Gb.ec,n.Gb.errors)};function $v(u,c,h){return E_(async()=>{await n.Yb(Number(u),Number(c),Number(h))})}function xv(){return typeof wasmOffsetConverter<"u"}var B=await(async function(){function u(g,b){return B=g.exports,B=(function(){var T=B,A={};for(let[R,L]of Object.entries(T))A[R]=typeof L=="function"?(...F)=>{ys.push(R);try{return L(...F)}finally{D||(ys.pop(),br&&ni===1&&ys.length===0&&(ni=0,ti+=1,_s(Q_),typeof Fibers<"u"&&Fibers.sc()))}}:L;return A})(),B=(function(){var T=B,A=L=>F=>L(F)>>>0,R=L=>()=>L()>>>0;return(T=Object.assign({},T)).Ea=A(T.Ea),T.gb=R(T.gb),T.ib=A(T.ib),T.tb=A(T.tb),T.ub=R(T.ub),T.__cxa_get_exception_ptr=A(T.__cxa_get_exception_ptr),T})(),Y3.push(B.jb),S=b,W3(),B}Si++;var c=q3();if(n.instantiateWasm)return new Promise(g=>{n.instantiateWasm(c,(b,T)=>{g(u(b,T))})});if(d)return new Promise(g=>{Z=b=>{var T=new WebAssembly.Instance(b,q3());g(u(T,b))}});Nt??(Nt=n.locateFile?n.locateFile?n.locateFile("ort-wasm-simd-threaded.jsep.wasm",$):$+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-BGTZ4Y7F.wasm",self.location.href).href);try{var h=await(async function(g){var b=Nt;if(!v&&typeof WebAssembly.instantiateStreaming=="function"&&!V(b))try{var T=fetch(b,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(T,g)}catch(A){Ae(`wasm streaming compile failed: ${A}`),Ae("falling back to ArrayBuffer instantiation")}return(async function(A,R){try{var L=await(async function(F){if(!v)try{var K=await _(F);return new Uint8Array(K)}catch{}if(F==Nt&&v)F=new Uint8Array(v);else{if(!y)throw"both async and sync fetching of the wasm failed";F=y(F)}return F})(A);return await WebAssembly.instantiate(L,R)}catch(F){Ae(`failed to asynchronously prepare wasm: ${F}`),ei(F)}})(b,g)})(c);return u(h.instance,h.module)}catch(g){return a(g),Promise.reject(g)}})(),G_=u=>(G_=B.Ea)(u),V_=()=>(V_=B.Fa)();n._OrtInit=(u,c)=>(n._OrtInit=B.Ga)(u,c),n._OrtGetLastError=(u,c)=>(n._OrtGetLastError=B.Ha)(u,c),n._OrtCreateSessionOptions=(u,c,h,g,b,T,A,R,L,F)=>(n._OrtCreateSessionOptions=B.Ia)(u,c,h,g,b,T,A,R,L,F),n._OrtAppendExecutionProvider=(u,c,h,g,b)=>(n._OrtAppendExecutionProvider=B.Ja)(u,c,h,g,b),n._OrtAddFreeDimensionOverride=(u,c,h)=>(n._OrtAddFreeDimensionOverride=B.Ka)(u,c,h),n._OrtAddSessionConfigEntry=(u,c,h)=>(n._OrtAddSessionConfigEntry=B.La)(u,c,h),n._OrtReleaseSessionOptions=u=>(n._OrtReleaseSessionOptions=B.Ma)(u),n._OrtCreateSession=(u,c,h)=>(n._OrtCreateSession=B.Na)(u,c,h),n._OrtReleaseSession=u=>(n._OrtReleaseSession=B.Oa)(u),n._OrtGetInputOutputCount=(u,c,h)=>(n._OrtGetInputOutputCount=B.Pa)(u,c,h),n._OrtGetInputOutputMetadata=(u,c,h,g)=>(n._OrtGetInputOutputMetadata=B.Qa)(u,c,h,g),n._OrtFree=u=>(n._OrtFree=B.Ra)(u),n._OrtCreateTensor=(u,c,h,g,b,T)=>(n._OrtCreateTensor=B.Sa)(u,c,h,g,b,T),n._OrtGetTensorData=(u,c,h,g,b)=>(n._OrtGetTensorData=B.Ta)(u,c,h,g,b),n._OrtReleaseTensor=u=>(n._OrtReleaseTensor=B.Ua)(u),n._OrtCreateRunOptions=(u,c,h,g)=>(n._OrtCreateRunOptions=B.Va)(u,c,h,g),n._OrtAddRunConfigEntry=(u,c,h)=>(n._OrtAddRunConfigEntry=B.Wa)(u,c,h),n._OrtReleaseRunOptions=u=>(n._OrtReleaseRunOptions=B.Xa)(u),n._OrtCreateBinding=u=>(n._OrtCreateBinding=B.Ya)(u),n._OrtBindInput=(u,c,h)=>(n._OrtBindInput=B.Za)(u,c,h),n._OrtBindOutput=(u,c,h,g)=>(n._OrtBindOutput=B._a)(u,c,h,g),n._OrtClearBoundOutputs=u=>(n._OrtClearBoundOutputs=B.$a)(u),n._OrtReleaseBinding=u=>(n._OrtReleaseBinding=B.ab)(u),n._OrtRunWithBinding=(u,c,h,g,b)=>(n._OrtRunWithBinding=B.bb)(u,c,h,g,b),n._OrtRun=(u,c,h,g,b,T,A,R)=>(n._OrtRun=B.cb)(u,c,h,g,b,T,A,R),n._OrtEndProfiling=u=>(n._OrtEndProfiling=B.db)(u),n._JsepOutput=(u,c,h)=>(n._JsepOutput=B.eb)(u,c,h),n._JsepGetNodeName=u=>(n._JsepGetNodeName=B.fb)(u);var bd=()=>(bd=B.gb)(),Br=n._free=u=>(Br=n._free=B.hb)(u),xs=n._malloc=u=>(xs=n._malloc=B.ib)(u),wd=(u,c,h,g,b,T)=>(wd=B.kb)(u,c,h,g,b,T),W_=()=>(W_=B.lb)(),q_=(u,c,h,g,b)=>(q_=B.mb)(u,c,h,g,b),j_=u=>(j_=B.nb)(u),vd=u=>(vd=B.ob)(u),H_=(u,c)=>(H_=B.pb)(u,c),K_=()=>(K_=B.qb)(),Y_=(u,c)=>(Y_=B.rb)(u,c),Es=u=>(Es=B.sb)(u),$d=u=>($d=B.tb)(u),xd=()=>(xd=B.ub)(),X_=n.dynCall_ii=(u,c)=>(X_=n.dynCall_ii=B.vb)(u,c);n.dynCall_vii=(u,c,h)=>(n.dynCall_vii=B.dynCall_vii)(u,c,h),n.dynCall_iiiii=(u,c,h,g,b)=>(n.dynCall_iiiii=B.dynCall_iiiii)(u,c,h,g,b),n.dynCall_iii=(u,c,h)=>(n.dynCall_iii=B.dynCall_iii)(u,c,h),n.dynCall_iiiiii=(u,c,h,g,b,T)=>(n.dynCall_iiiiii=B.dynCall_iiiiii)(u,c,h,g,b,T),n.dynCall_iiiiiiii=(u,c,h,g,b,T,A,R)=>(n.dynCall_iiiiiiii=B.dynCall_iiiiiiii)(u,c,h,g,b,T,A,R),n.dynCall_iiiiiii=(u,c,h,g,b,T,A)=>(n.dynCall_iiiiiii=B.dynCall_iiiiiii)(u,c,h,g,b,T,A),n.dynCall_vi=(u,c)=>(n.dynCall_vi=B.dynCall_vi)(u,c),n.dynCall_iiii=(u,c,h,g)=>(n.dynCall_iiii=B.dynCall_iiii)(u,c,h,g),n.dynCall_i=u=>(n.dynCall_i=B.dynCall_i)(u),n.dynCall_viiiiiiii=(u,c,h,g,b,T,A,R,L)=>(n.dynCall_viiiiiiii=B.dynCall_viiiiiiii)(u,c,h,g,b,T,A,R,L),n.dynCall_viii=(u,c,h,g)=>(n.dynCall_viii=B.dynCall_viii)(u,c,h,g),n.dynCall_viijj=(u,c,h,g,b)=>(n.dynCall_viijj=B.dynCall_viijj)(u,c,h,g,b),n.dynCall_viiiiii=(u,c,h,g,b,T,A)=>(n.dynCall_viiiiii=B.dynCall_viiiiii)(u,c,h,g,b,T,A),n.dynCall_viiii=(u,c,h,g,b)=>(n.dynCall_viiii=B.dynCall_viiii)(u,c,h,g,b),n.dynCall_viiiii=(u,c,h,g,b,T)=>(n.dynCall_viiiii=B.dynCall_viiiii)(u,c,h,g,b,T),n.dynCall_vfiii=(u,c,h,g,b)=>(n.dynCall_vfiii=B.dynCall_vfiii)(u,c,h,g,b),n.dynCall_viiiiff=(u,c,h,g,b,T,A)=>(n.dynCall_viiiiff=B.dynCall_viiiiff)(u,c,h,g,b,T,A),n.dynCall_viiiiiff=(u,c,h,g,b,T,A,R)=>(n.dynCall_viiiiiff=B.dynCall_viiiiiff)(u,c,h,g,b,T,A,R),n.dynCall_ffff=(u,c,h,g)=>(n.dynCall_ffff=B.dynCall_ffff)(u,c,h,g),n.dynCall_viiff=(u,c,h,g,b)=>(n.dynCall_viiff=B.dynCall_viiff)(u,c,h,g,b),n.dynCall_fffffff=(u,c,h,g,b,T,A)=>(n.dynCall_fffffff=B.dynCall_fffffff)(u,c,h,g,b,T,A),n.dynCall_jjjjjjj=(u,c,h,g,b,T,A)=>(n.dynCall_jjjjjjj=B.dynCall_jjjjjjj)(u,c,h,g,b,T,A),n.dynCall_jjjjjj=(u,c,h,g,b,T)=>(n.dynCall_jjjjjj=B.dynCall_jjjjjj)(u,c,h,g,b,T),n.dynCall_iijjii=(u,c,h,g,b,T)=>(n.dynCall_iijjii=B.dynCall_iijjii)(u,c,h,g,b,T),n.dynCall_viiiiiiiiiiiii=(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe)=>(n.dynCall_viiiiiiiiiiiii=B.dynCall_viiiiiiiiiiiii)(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe),n.dynCall_viiiiiiiiii=(u,c,h,g,b,T,A,R,L,F,K)=>(n.dynCall_viiiiiiiiii=B.dynCall_viiiiiiiiii)(u,c,h,g,b,T,A,R,L,F,K),n.dynCall_viiiiiiiiiii=(u,c,h,g,b,T,A,R,L,F,K,le)=>(n.dynCall_viiiiiiiiiii=B.dynCall_viiiiiiiiiii)(u,c,h,g,b,T,A,R,L,F,K,le),n.dynCall_viiiiiiiiiiii=(u,c,h,g,b,T,A,R,L,F,K,le,fe)=>(n.dynCall_viiiiiiiiiiii=B.dynCall_viiiiiiiiiiii)(u,c,h,g,b,T,A,R,L,F,K,le,fe),n.dynCall_viiiiiiiiiiiiiiiiii=(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt,Bt,Dr,Ii,Xn)=>(n.dynCall_viiiiiiiiiiiiiiiiii=B.dynCall_viiiiiiiiiiiiiiiiii)(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt,Bt,Dr,Ii,Xn),n.dynCall_viiiiiiiii=(u,c,h,g,b,T,A,R,L,F)=>(n.dynCall_viiiiiiiii=B.dynCall_viiiiiiiii)(u,c,h,g,b,T,A,R,L,F),n.dynCall_viiiiiiiiiiiiiiiiiii=(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt,Bt,Dr,Ii,Xn,Ed)=>(n.dynCall_viiiiiiiiiiiiiiiiiii=B.dynCall_viiiiiiiiiiiiiiiiiii)(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt,Bt,Dr,Ii,Xn,Ed),n.dynCall_viiiiiii=(u,c,h,g,b,T,A,R)=>(n.dynCall_viiiiiii=B.dynCall_viiiiiii)(u,c,h,g,b,T,A,R),n.dynCall_viiiiiiiiiiiiiii=(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt,Bt)=>(n.dynCall_viiiiiiiiiiiiiii=B.dynCall_viiiiiiiiiiiiiii)(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt,Bt),n.dynCall_jiji=(u,c,h,g)=>(n.dynCall_jiji=B.dynCall_jiji)(u,c,h,g),n.dynCall_v=u=>(n.dynCall_v=B.dynCall_v)(u),n.dynCall_iidiiii=(u,c,h,g,b,T,A)=>(n.dynCall_iidiiii=B.dynCall_iidiiii)(u,c,h,g,b,T,A),n.dynCall_iiiiiiiii=(u,c,h,g,b,T,A,R,L)=>(n.dynCall_iiiiiiiii=B.dynCall_iiiiiiiii)(u,c,h,g,b,T,A,R,L),n.dynCall_iiij=(u,c,h,g)=>(n.dynCall_iiij=B.dynCall_iiij)(u,c,h,g),n.dynCall_iiiiiiiiii=(u,c,h,g,b,T,A,R,L,F)=>(n.dynCall_iiiiiiiiii=B.dynCall_iiiiiiiiii)(u,c,h,g,b,T,A,R,L,F),n.dynCall_iiiiiiiiiiiii=(u,c,h,g,b,T,A,R,L,F,K,le,fe)=>(n.dynCall_iiiiiiiiiiiii=B.dynCall_iiiiiiiiiiiii)(u,c,h,g,b,T,A,R,L,F,K,le,fe),n.dynCall_iiiiiiiiiii=(u,c,h,g,b,T,A,R,L,F,K)=>(n.dynCall_iiiiiiiiiii=B.dynCall_iiiiiiiiiii)(u,c,h,g,b,T,A,R,L,F,K),n.dynCall_ji=(u,c)=>(n.dynCall_ji=B.dynCall_ji)(u,c),n.dynCall_iijii=(u,c,h,g,b)=>(n.dynCall_iijii=B.dynCall_iijii)(u,c,h,g,b),n.dynCall_vij=(u,c,h)=>(n.dynCall_vij=B.dynCall_vij)(u,c,h),n.dynCall_viiijii=(u,c,h,g,b,T,A)=>(n.dynCall_viiijii=B.dynCall_viiijii)(u,c,h,g,b,T,A),n.dynCall_viijiiiiiiiiiiiiii=(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt,Bt,Dr,Ii)=>(n.dynCall_viijiiiiiiiiiiiiii=B.dynCall_viijiiiiiiiiiiiiii)(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt,Bt,Dr,Ii),n.dynCall_viiiji=(u,c,h,g,b,T)=>(n.dynCall_viiiji=B.dynCall_viiiji)(u,c,h,g,b,T),n.dynCall_fiii=(u,c,h,g)=>(n.dynCall_fiii=B.dynCall_fiii)(u,c,h,g),n.dynCall_viijii=(u,c,h,g,b,T)=>(n.dynCall_viijii=B.dynCall_viijii)(u,c,h,g,b,T),n.dynCall_viij=(u,c,h,g)=>(n.dynCall_viij=B.dynCall_viij)(u,c,h,g),n.dynCall_jiij=(u,c,h,g)=>(n.dynCall_jiij=B.dynCall_jiij)(u,c,h,g),n.dynCall_fi=(u,c)=>(n.dynCall_fi=B.dynCall_fi)(u,c),n.dynCall_fii=(u,c,h)=>(n.dynCall_fii=B.dynCall_fii)(u,c,h),n.dynCall_jii=(u,c,h)=>(n.dynCall_jii=B.dynCall_jii)(u,c,h),n.dynCall_dii=(u,c,h)=>(n.dynCall_dii=B.dynCall_dii)(u,c,h),n.dynCall_fiiii=(u,c,h,g,b)=>(n.dynCall_fiiii=B.dynCall_fiiii)(u,c,h,g,b),n.dynCall_fif=(u,c,h)=>(n.dynCall_fif=B.dynCall_fif)(u,c,h),n.dynCall_jfi=(u,c,h)=>(n.dynCall_jfi=B.dynCall_jfi)(u,c,h),n.dynCall_viiiiiiiiiiiiii=(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt)=>(n.dynCall_viiiiiiiiiiiiii=B.dynCall_viiiiiiiiiiiiii)(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt),n.dynCall_viiiiiiiiiiiiiiiiiiii=(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt,Bt,Dr,Ii,Xn,Ed,Ev)=>(n.dynCall_viiiiiiiiiiiiiiiiiiii=B.dynCall_viiiiiiiiiiiiiiiiiiii)(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt,Bt,Dr,Ii,Xn,Ed,Ev),n.dynCall_viiiiiiiiiiiiiiii=(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt,Bt,Dr)=>(n.dynCall_viiiiiiiiiiiiiiii=B.dynCall_viiiiiiiiiiiiiiii)(u,c,h,g,b,T,A,R,L,F,K,le,fe,xe,tt,Bt,Dr),n.dynCall_iif=(u,c,h)=>(n.dynCall_iif=B.dynCall_iif)(u,c,h),n.dynCall_jiiii=(u,c,h,g,b)=>(n.dynCall_jiiii=B.dynCall_jiiii)(u,c,h,g,b),n.dynCall_jiii=(u,c,h,g)=>(n.dynCall_jiii=B.dynCall_jiii)(u,c,h,g),n.dynCall_viif=(u,c,h,g)=>(n.dynCall_viif=B.dynCall_viif)(u,c,h,g),n.dynCall_viiij=(u,c,h,g,b)=>(n.dynCall_viiij=B.dynCall_viiij)(u,c,h,g,b),n.dynCall_viiiijii=(u,c,h,g,b,T,A,R)=>(n.dynCall_viiiijii=B.dynCall_viiiijii)(u,c,h,g,b,T,A,R),n.dynCall_iiiiij=(u,c,h,g,b,T)=>(n.dynCall_iiiiij=B.dynCall_iiiiij)(u,c,h,g,b,T),n.dynCall_iiiiid=(u,c,h,g,b,T)=>(n.dynCall_iiiiid=B.dynCall_iiiiid)(u,c,h,g,b,T),n.dynCall_iiiiijj=(u,c,h,g,b,T,A)=>(n.dynCall_iiiiijj=B.dynCall_iiiiijj)(u,c,h,g,b,T,A),n.dynCall_iiiiiijj=(u,c,h,g,b,T,A,R)=>(n.dynCall_iiiiiijj=B.dynCall_iiiiiijj)(u,c,h,g,b,T,A,R);var Z_=u=>(Z_=B.wb)(u),Q_=()=>(Q_=B.xb)(),J_=u=>(J_=B.yb)(u),ey=()=>(ey=B.zb)();return(function u(){if(0<Si)ki=u;else if(d)i(n),Ge();else{for(;0<rd.length;)rd.shift()(n);0<Si?ki=u:(n.calledRun=!0,D||(Ge(),i(n)))}})(),n.PTR_SIZE=4,s},jh=wu,Hh=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Hh&&wu()}),vu,$u,Kh,zt,Yh,Ka,Xh,Zh,xu,Qh,Eu,Jh,Tu,ef,Su=U(()=>{_u(),vu=typeof location>"u"?void 0:location.origin,$u=self.location.href>"file:"&&self.location.href<"file;",Kh=()=>{{if($u){let e=URL;return new URL(new e("ort.bundle.min.mjs",self.location.href).href,vu).href}return self.location.href}},zt=Kh(),Yh=()=>{if(zt&&!zt.startsWith("blob:"))return zt.substring(0,zt.lastIndexOf("/")+1)},Ka=(e,t)=>{try{let r=t??zt;return(r?new URL(e,r):new URL(e)).origin===vu}catch{return!1}},Xh=(e,t)=>{let r=t??zt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},Zh=(e,t)=>`${t??"./"}${e}`,xu=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Qh=async e=>(await import(e)).default,Eu=(Kb(),An(Vh)).default,Jh=async()=>{if(!zt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ka(zt))return[void 0,Eu()];let e=await xu(zt);return[e,Eu(e)]},Tu=(Yb(),An(qh)).default,ef=async(e,t,r,i)=>{let a=Tu&&!(e||t);if(a)if(zt)a=Ka(zt);else if(i&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,Tu];{let n="ort-wasm-simd-threaded.jsep.mjs",s=e??Xh(n,t),o=r&&s&&!Ka(s,t),l=o?await xu(s):s??Zh(n,t);return[o?l:void 0,await Qh(l)]}}}),ku,Ya,On,Au,tf,rf,nf,Cu,Oe,mi=U(()=>{Su(),Ya=!1,On=!1,Au=!1,tf=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},rf=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},nf=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Cu=async e=>{if(Ya)return Promise.resolve();if(On)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Au)throw new Error("previous call to 'initializeWebAssembly()' failed.");On=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!nf())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!rf())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=tf();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a==null?void 0:a.mjs,o=(s==null?void 0:s.href)??s,l=a==null?void 0:a.wasm,d=(l==null?void 0:l.href)??l,p=e.wasmBinary,[f,m]=await ef(o,n,r>1,!!p||!!d),_=!1,y=[];if(t>0&&y.push(new Promise(w=>{setTimeout(()=>{_=!0,w()},t)})),y.push(new Promise((w,x)=>{let $={numThreads:r};if(p)$.wasmBinary=p;else if(d||n)$.locateFile=v=>d??n+v;else if(o&&o.indexOf("blob:")!==0)$.locateFile=v=>new URL(v,o).href;else if(f){let v=Yh();v&&($.locateFile=E=>v+E)}m($).then(v=>{On=!1,Ya=!0,ku=v,w(),f&&URL.revokeObjectURL(f)},v=>{On=!1,Au=!0,x(v)})})),await Promise.race(y),_)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Oe=()=>{if(Ya&&ku)return ku;throw new Error("WebAssembly is not initialized yet.")}}),tr,Xa,Te,Iu=U(()=>{mi(),tr=(e,t)=>{let r=Oe(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Xa=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")Xa(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},Te=e=>{let t=Oe(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),af,Xb=U(()=>{mi(),Iu(),af=e=>{let t=Oe(),r=0,i=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let n=0;return(e==null?void 0:e.tag)!==void 0&&(n=tr(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&Te("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Xa(e.extra,"",new WeakSet,(s,o)=>{let l=tr(s,i),d=tr(o,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&Te(`Can't set a run config entry: ${s} - ${o}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),sf,of,uf,zn,lf,df,Zb=U(()=>{mi(),Iu(),sf=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},of=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},uf=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},zn=(e,t,r,i)=>{let a=tr(t,i),n=tr(r,i);Oe()._OrtAddSessionConfigEntry(e,a,n)!==0&&Te(`Can't set a session config entry: ${t} - ${r}.`)},lf=async(e,t,r)=>{for(let i of t){let a=typeof i=="string"?i:i.name,n=[];switch(a){case"webnn":if(a="WEBNN",typeof i!="string"){let p=i==null?void 0:i.deviceType;p&&zn(e,"deviceType",p,r)}break;case"webgpu":if(a="JS",typeof i!="string"){let p=i;if(p!=null&&p.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);zn(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=tr(a,r),o=n.length,l=0,d=0;if(o>0){l=Oe()._malloc(o*Oe().PTR_SIZE),r.push(l),d=Oe()._malloc(o*Oe().PTR_SIZE),r.push(d);for(let p=0;p<o;p++)Oe().setValue(l+p*Oe().PTR_SIZE,n[p][0],"*"),Oe().setValue(d+p*Oe().PTR_SIZE,n[p][1],"*")}await Oe()._OrtAppendExecutionProvider(e,s,l,d,o)!==0&&Te(`Can't append execution provider: ${a}.`)}},df=async e=>{let t=Oe(),r=0,i=[],a=e||{};uf(a);try{let n=sf(a.graphOptimizationLevel??"all"),s=of(a.executionMode??"sequential"),o=typeof a.logId=="string"?tr(a.logId,i):0,l=a.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=a.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let p=typeof a.optimizedModelFilePath=="string"?tr(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,o,l,d,p),r===0&&Te("Can't create session options."),a.executionProviders&&await lf(r,a.executionProviders,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);zn(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[f,m]of Object.entries(a.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let _=tr(f,i);t._OrtAddFreeDimensionOverride(r,_,m)!==0&&Te(`Can't set a free dimension override: ${f} - ${m}.`)}return a.extra!==void 0&&Xa(a.extra,"",new WeakSet,(f,m)=>{zn(r,f,m,i)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Te("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),gi,Cr,_i,Za,Qa,Ou,zu,Ru,ue=U(()=>{gi=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Cr=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},_i=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},Za=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Qa=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ou=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",zu=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ru=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Mu,cf=U(()=>{_u(),Mu=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let l=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let s=0;for(;;){let{done:o,value:l}=await a.read();if(o)break;let d=l.byteLength;new Uint8Array(n,s,d).set(l),s+=d}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),pf,hf,ff,mf,Nu,gf,_e,Ir=U(()=>{ue(),pf=["V","I","W","E","F"],hf=(e,t)=>{console.log(`[${pf[e]},${new Date().toISOString()}]${t}`)},Nu=(e,t)=>{ff=e,mf=t},gf=(e,t)=>{let r=Qa(e),i=Qa(ff);r>=i&&hf(r,typeof t=="function"?t():t)},_e=(...e)=>{mf&&gf(...e)}}),_f,sn,z,Ja,yf,bf,wf,ce=U(()=>{_f=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},sn=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let o=_f.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(o===void 0)return;[s[n-2],s[n-1]]=o}for(let o=r?3:1;o<=n;o++){let l=i-o<0?1:e[i-o],d=a-o<0?1:t[a-o];if(l!==d&&l>1&&d>1)return;let p=Math.max(l,d);if(l&&d)s[n-o]=Math.max(l,d);else{if(p>1)return;s[n-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},z=class Ts{static size(t){return Ts.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Ts.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Ts.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},Ja=class Zn{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<a.length){if(a[o]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=i[o]||s[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,o){if(o){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)Zn.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],a[l],n,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,i,a,n,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return Zn.computeShapeHelper(t,r,l,i,a,n,s,o),l}static computeConvOutputShape(t,r,i,a,n,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return Zn.computeShapeHelper(!1,t,l,i,a,n,s,o),l}static computeShapeHelper(t,r,i,a,n,s,o,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(Zn.adjustPadAndReturnShape(r[d+2],a[d],n[d],s[d],o,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,a,n,s,o,l){let d=i*(a-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return n[s]=0,n[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(l==="SAME_LOWER"?(p+1)/2:p/2),n[o]=p-n[s],Math.floor((t+p-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[o]-d)/r+1)}},yf=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,o;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let l=-1;if(i?(o=r[0],l=1):(o=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(n<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(a&&!sn.isValidBroadcast(a,[n,o]))throw new Error("gemm: invalid bias shape for broadcast");return[n,o,s]}},bf=-34028234663852886e22,wf=34028234663852886e22}),Bu,vf=U(()=>{ue(),Bu=(e,t)=>new(Za(t))(e)}),Du,Lu,Pu,$f,Uu,xf,Fu,Gu,Vu,Ef,Tf,Qb=U(()=>{ue(),Ir(),Du=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Lu=(e,t)=>{if(t==="int32")return e;let r=Du.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,n=new(Za(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let o=0;o<a;o++){let l=n[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&n.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Pu=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},$f=1,Uu=()=>$f++,xf=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Fu=(e,t)=>{let r=Du.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},Gu=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:n,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=n,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Fu(this.dataType,this.tensorShape)}destroy(){_e("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Pu(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},Vu=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),n;if(!a.opSupportLimits().input.dataTypes.includes(t)){if(n=xf.get(t),!n||!a.opSupportLimits().input.dataTypes.includes(n))throw new Error(`WebNN backend does not support data type: ${t}`);_e("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${n}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Fu(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,s,!0,!0,n),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Lu(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else _e("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?Pu(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Ef=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=Uu();return this.tensorTrackersById.set(e,new Vu(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){_e("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){_e("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),n=Uu(),s=new Gu({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(n,new Vu(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,i,a,n,s){let o=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,r)){_e("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}_e("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:a,readable:n});return new Gu({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Tf=(...e)=>new Ef(...e)}),Rn,Sf,kf,Jb=U(()=>{ue(),mi(),vf(),Qb(),Ir(),Rn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Sf=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},kf=class{constructor(e){this.tensorManager=Tf(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,Nu(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){_e("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){_e("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)_e("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Sf(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){_e("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let n=Rn.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,i,a)}async createTemporaryTensor(e,t,r){_e("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=Rn.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!Oe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");_e("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Bu(r,t)}}registerMLTensor(e,t,r,i){let a=Rn.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,a,i);return _e("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerMLConstant(e,t,r,i,a,n,s=!1){if(!n)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=n.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,p;switch(a.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":if(s){let f=Lu(new Uint8Array(d),"int64");p=new Int32Array(f.buffer),a.dataType="int32"}else p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return _e("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(a,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=this.mlContextBySessionId.get(e),a=Rn.get(gi(t));return typeof a>"u"?!1:r?!!(i!=null&&i.opSupportLimits().input.dataTypes.includes(a)):!!(i!=null&&i.opSupportLimits().output.dataTypes.includes(a))}flush(){}}}),Wu=U(()=>{}),qu,es,ts,Af,Cf,ju,Hu,If,Of,ew=U(()=>{Ir(),Wu(),qu=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),es=[],ts=e=>Math.ceil(Number(e)/16)*16,Af=e=>{for(let t=0;t<es.length;t++){let r=es[t];if(e<=r)return r}return Math.ceil(e/16)*16},Cf=1,ju=()=>Cf++,Hu=async(e,t,r,i)=>{let a=ts(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let o=n.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{n.destroy()}},If=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of qu)es.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=ts(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,a)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([d.finish()]),o.destroy(),_e("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=ts(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return _e("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=ju();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),_e("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),_e("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Af(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let o=(a?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:ju(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),_e("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return _e("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Hu(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=qu.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(_e("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Of=(...e)=>new If(...e)}),zf,$e,qe=U(()=>{zf=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},$e=e=>new zf(e)}),on,rs,it,lt,J,Fe,Ku,un,Yr,X,Mn,N,H,Rf,Yu,Mf,Nf,pe=U(()=>{ue(),ce(),on=64,rs=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},it=(e,t=1)=>{let r=rs(e,t);return typeof r=="string"?r:r[0]},lt=(e,t=1)=>{let r=rs(e,t);return typeof r=="string"?r:r[1]},J=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:z.computeStrides(r)})}),t},Fe=e=>e%4===0?4:e%2===0?2:1,Ku=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,un=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,Yr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,X=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Mn=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,o=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=rs(t,a),p=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],m={indices:l,value:p,storage:f,tensor:t},_=D=>typeof D=="string"?D:`${D}u`,y={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=n?"uniforms.":"",x=`${w}${e}_shape`,$=`${w}${e}_strides`,v="";for(let D=0;D<s-1;D++)v+=`
    let dim${D} = current / ${X($,D,s)};
    let rest${D} = current % ${X($,D,s)};
    indices[${D}] = dim${D};
    current = rest${D};
    `;v+=`indices[${s-1}] = current;`;let E=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${v}
    return indices;
  }`,S=D=>(y.offsetToIndices=!0,s<2?D:`o2i_${e}(${D})`),k=[];if(s>=2)for(let D=s-1;D>=0;D--)k.push(`${X($,D,s)} * (indices[${D}])`);let C=s<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${k.join("+")};
  }`,O=D=>(y.indicesToOffset=!0,s<2?D:`i2o_${e}(${D})`),I=(...D)=>s===0?"0u":`${m.indices}(${D.map(_).join(",")})`,M=(D,V)=>s<2?`${D}`:`${X(D,V,s)}`,G=(D,V,q)=>s<2?`${D}=${q};`:`${X(D,V,s)}=${q};`,te={},j=(D,V)=>{y.broadcastedIndicesToOffset=!0;let q=`${V.name}broadcastedIndicesTo${e}Offset`;if(q in te)return`${q}(${D})`;let ie=[];for(let et=s-1;et>=0;et--){let _r=V.indicesGet("outputIndices",et+V.rank-s);ie.push(`${M($,et)} * (${_r} % ${M(x,et)})`)}return te[q]=`fn ${q}(outputIndices: ${V.type.indices}) -> u32 {
             return ${ie.length>0?ie.join("+"):"0u"};
           }`,`${q}(${D})`},W=(D,V)=>(()=>{if(m.storage===m.value)return`${e}[${D}]=${V};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${D}]=vec2<u32>(u32(${V}), select(0u, 0xFFFFFFFFu, ${V} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${D}]=vec2<u32>(u32(${V}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${D}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${V}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),me=D=>(()=>{if(m.storage===m.value)return`${e}[${D}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${D}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${D}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${D}] & 0xFFu), bool(${e}[${D}] & 0xFF00u), bool(${e}[${D}] & 0xFF0000u), bool(${e}[${D}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),de=s<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${p} {
    return ${me(`i2o_${e}(indices)`)};
  }`,Z=s<2?"":(()=>{let D=o.map(q=>`d${q}: u32`).join(", "),V=o.map(q=>`d${q}`).join(", ");return`
  fn get_${e}(${D}) -> ${p} {
    return get_${e}ByIndices(${I(V)});
  }`})(),he=(...D)=>{if(D.length!==s)throw new Error(`indices length must be ${s}`);let V=D.map(_).join(",");return s===0?me("0u"):s===1?me(V[0]):(y.get=!0,y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}(${V})`)},Q=D=>s<2?me(D):(y.getByIndices=!0,y.indicesToOffset=!0,`get_${e}ByIndices(${D})`),se=s<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${p}) {
    ${W(`i2o_${e}(indices)`,"value")}
  }`,Ae=s<2?"":(()=>{let D=o.map(q=>`d${q}: u32`).join(", "),V=o.map(q=>`d${q}`).join(", ");return`
  fn set_${e}(${D}, value: ${p}) {
    set_${e}ByIndices(${I(V)}, value);
  }`})();return{impl:()=>{let D=[],V=!1;return y.offsetToIndices&&(D.push(E),V=!0),y.indicesToOffset&&(D.push(C),V=!0),y.broadcastedIndicesToOffset&&(Object.values(te).forEach(q=>D.push(q)),V=!0),y.set&&(D.push(Ae),V=!0),y.setByIndices&&(D.push(se),V=!0),y.get&&(D.push(Z),V=!0),y.getByIndices&&(D.push(de),V=!0),!n&&V&&D.unshift(`const ${x} = ${m.indices}(${r.join(",")});`,`const ${$} = ${m.indices}(${z.computeStrides(r).join(",")});`),D.join(`
`)},type:m,offsetToIndices:S,indicesToOffset:O,broadcastedIndicesToOffset:j,indices:I,indicesGet:M,indicesSet:G,set:(...D)=>{if(D.length!==s+1)throw new Error(`indices length must be ${s}`);let V=D[s];if(typeof V!="string")throw new Error("value must be string");let q=D.slice(0,s).map(_).join(",");return s===0?W("0u",V):s===1?W(q[0],V):(y.set=!0,y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}(${q}, ${V})`)},setByOffset:W,setByIndices:(D,V)=>s<2?W(D,V):(y.setByIndices=!0,y.indicesToOffset=!0,`set_${e}ByIndices(${D}, ${V});`),get:he,getByOffset:me,getByIndices:Q,usage:i,name:e,strides:$,shape:x,rank:s}},N=(e,t,r,i=1)=>Mn(e,t,r,"input",i),H=(e,t,r,i=1)=>Mn(e,t,r,"output",i),Rf=(e,t,r)=>Mn(e,t,r,"atomicOutput",1),Yu=(e,t,r,i=1)=>Mn(e,t,r,"internal",i),Mf=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=on){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Nf=(e,t)=>new Mf(e,t)}),Bf,Xu,Df,Lf,Pf,Uf,Rt,Ff,Gf,Xr=U(()=>{ue(),ce(),qe(),pe(),Bf=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Xu=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Df=(e,t)=>z.sortBasedOnPerm(e,Xu(e.length,t)),Lf=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},Pf=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Uf=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Rt=(e,t)=>{let r=e.dataType,i=e.dims.length,a=Xu(i,t),n=Df(e.dims,a),s=e.dims,o=n,l=i<2||Uf(a,e.dims),d;if(l)return d=y=>{let w=N("input",r,s,4),x=H("output",r,o,4);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,x)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=z.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(y/4)}]}},getShaderSource:d};let{newShape:p,newPerm:f}=Pf(e.dims,a),m=z.areEqual(f,[2,3,1]),_=z.areEqual(f,[3,1,2]);if(p.length===2||m||_){s=m?[p[0],p[1]*p[2]]:_?[p[0]*p[1],p[2]]:p,o=[s[1],s[0]];let y=16;return d=w=>{let x=N("a",r,s.length),$=H("output",r,o.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(x,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${y+1}>, ${y}>;
  ${w.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${x.getByIndices(`${x.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=z.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/y),y:Math.ceil(o[0]/y)},programUniforms:[{type:12,data:w},...J(s,o)]}},getShaderSource:d}}return d=y=>{let w=N("a",r,s.length),x=H("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(w,x)}

  ${Lf(a,i,w,x)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let y=z.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...J(s,o)]}},getShaderSource:d}},Ff=(e,t)=>{Bf(e.inputs,t.perm),e.compute(Rt(e.inputs[0],t.perm))},Gf=e=>$e({perm:e.perm})}),Vf,Wf,qf,jf,Hf,Kf,Yf,Xf,Zf,Qf,rr,Jf,em,tm,rm,im,nm,am,sm,om,um,tw=U(()=>{ue(),ce(),pe(),Qu(),Xr(),Vf={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Wf={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},qf={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},jf={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Hf=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Kf=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},Yf=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},Xf=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Zf=(e,t)=>{let r=[];if(!Xf(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Qf=(e,t,r,i,a,n,s)=>{let o=r[0].dims,l=z.size(n),d=z.size(s),p=N("_A",r[0].dataType,o),f=H("output",a,n),m=64;l===1&&(m=256);let _=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `,y=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(p,f)}
        ${_}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${qf[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${Vf[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Wf[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${jf[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${m}`,inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},rr=(e,t,r,i)=>{let a=e.inputs.length===1?r:Zu(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((_,y)=>y));let s=z.normalizeAxes(n,e.inputs[0].dims.length),o=s,l=e.inputs[0],d=Zf(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Rt(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Hf(o.length,l.dims.length));let[p,f]=Kf(l.dims,o),m=p;a.keepDims&&(m=Yf(p,s)),e.compute(Qf(t,a.cacheKey,[l],i,e.inputs[0].dataType,m,f),{inputs:[l]})},Jf=(e,t)=>{rr(e,"ReduceMeanShared",t,"mean")},em=(e,t)=>{rr(e,"ReduceL1Shared",t,"l1")},tm=(e,t)=>{rr(e,"ReduceL2Shared",t,"l2")},rm=(e,t)=>{rr(e,"ReduceLogSumExpShared",t,"logSumExp")},im=(e,t)=>{rr(e,"ReduceMaxShared",t,"max")},nm=(e,t)=>{rr(e,"ReduceMinShared",t,"min")},am=(e,t)=>{rr(e,"ReduceProdShared",t,"prod")},sm=(e,t)=>{rr(e,"ReduceSumShared",t,"sum")},om=(e,t)=>{rr(e,"ReduceSumSquareShared",t,"sumSquare")},um=(e,t)=>{rr(e,"ReduceLogSumShared",t,"logSum")}}),ir,lm,is,Zu,nr,dm,cm,pm,hm,fm,mm,gm,_m,ym,bm,ar,wm,vm,$m,xm,Em,Tm,Sm,km,Am,Cm,Qu=U(()=>{ue(),ce(),qe(),pe(),tw(),ir=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},lm=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],is=(e,t,r,i,a,n,s=!1,o=!1)=>{let l=[],d=r[0].dims,p=d.length,f=z.normalizeAxes(a,p),m=!o&&f.length===0;d.forEach((w,x)=>{m||f.indexOf(x)>=0?s&&l.push(1):l.push(w)});let _=l.length,y=z.size(l);return{name:e,shaderCache:t,getShaderSource:w=>{let x=[],$=N("_A",r[0].dataType,p),v=H("output",n,_),E=i($,v,f),S=E[2];for(let k=0,C=0;k<p;k++)m||f.indexOf(k)>=0?(s&&C++,S=`for(var j${k}: u32 = 0; j${k} < ${d[k]}; j${k}++) {
                  ${E[2].includes("last_index")?`let last_index = j${k};`:""}
                  ${$.indicesSet("input_indices",k,`j${k}`)}
                  ${S}
                }`):(x.push(`${$.indicesSet("input_indices",k,v.indicesGet("output_indices",C))};`),C++);return`

        ${w.registerUniform("output_size","u32").declareVariables($,v)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${v.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${E[0]}       // init ops for reduce max/min
          ${E[1]}
          ${S}
          ${E[3]}
          ${E.length===4?v.setByOffset("global_idx","value"):E.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:n}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...J(d,l)]})}},Zu=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),$e({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},nr=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:Zu(a,r);e.compute(is(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?lm:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},dm=(e,t)=>{ir(e.inputs),nr(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},cm=(e,t)=>{ir(e.inputs),nr(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},pm=(e,t)=>{ir(e.inputs),nr(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},hm=(e,t)=>{ir(e.inputs),nr(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},fm=(e,t)=>{ir(e.inputs),nr(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},mm=(e,t)=>{ir(e.inputs),nr(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},gm=(e,t)=>{ir(e.inputs),nr(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},_m=(e,t)=>{ir(e.inputs),nr(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},ym=(e,t)=>{ir(e.inputs),nr(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},bm=(e,t)=>{ir(e.inputs),nr(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},ar=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},wm=(e,t)=>{ar(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mm(e,t):Jf(e,t)},vm=(e,t)=>{ar(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cm(e,t):em(e,t)},$m=(e,t)=>{ar(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pm(e,t):tm(e,t)},xm=(e,t)=>{ar(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hm(e,t):rm(e,t)},Em=(e,t)=>{ar(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fm(e,t):im(e,t)},Tm=(e,t)=>{ar(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gm(e,t):nm(e,t)},Sm=(e,t)=>{ar(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_m(e,t):am(e,t)},km=(e,t)=>{ar(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ym(e,t):sm(e,t)},Am=(e,t)=>{ar(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bm(e,t):om(e,t)},Cm=(e,t)=>{ar(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dm(e,t):um(e,t)}}),Ju,Im,Om,el,rw=U(()=>{ue(),qe(),Qu(),Ju=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Im=(e,t)=>{Ju(e.inputs);let r=(i,a,n)=>{let s=[];for(let o=0;o<i.rank;o++)(n.indexOf(o)>=0||n.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(is("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Om=(e,t)=>{Ju(e.inputs);let r=(i,a,n)=>{let s=[];for(let o=0;o<i.rank;o++)(n.indexOf(o)>=0||n.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(is("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},el=e=>$e(e)}),zm,ns,Rm,Mm,Nm,Nn,Bm,Dm,tl=U(()=>{ue(),ce(),Wu(),pe(),zm=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],p=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=a.dims[0]/3,m=f,_=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let E of t.qkvHiddenSizes)if(E%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],_=t.qkvHiddenSizes[2]}let y=d;if(f!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==f+m+_)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(s){if(m!==_)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=s.dims[3])}let x=y+w,$=-1,v=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:y,totalSequenceLength:x,maxSequenceLength:$,inputHiddenSize:p,hiddenSize:f,vHiddenSize:_,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(_/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},ns=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Rm=(e,t,r,i,a,n,s,o)=>{let l=Fe(s?1:n),d=64,p=n/l;p<d&&(d=32);let f=Math.ceil(n/l/d),m=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:p},{type:12,data:f}],_=it(e.dataType,l),y=lt(1,l),w=["type"];s&&w.push("type"),o&&w.push("type");let x=$=>{let v=H("x",e.dataType,e.dims,l),E=[v],S=s?N("seq_lens",s.dataType,s.dims):void 0;S&&E.push(S);let k=o?N("total_sequence_length_input",o.dataType,o.dims):void 0;k&&E.push(k);let C=lt(e.dataType),O=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${$.registerUniforms(O).declareVariables(...E)}
  ${$.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${ns(S,k,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${y}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${y}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${y}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${y}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${v.type.value}(${C}(1.0) / ${C}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${y}(x[offset + i]);
        x[offset + i] = ${v.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${v.type.value}(${C}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${_};${l}`,inputDependencies:w},getShaderSource:x,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:m})}},Mm=(e,t,r,i,a,n,s,o,l)=>{let d=s+n.kvSequenceLength,p=[n.batchSize,n.numHeads,n.sequenceLength,d],f=e>1&&i,m=n.kvNumHeads?n.kvNumHeads:n.numHeads,_=f?[n.batchSize,m,d,n.headSize]:void 0,y=n.nReps?n.nReps:1,w=n.scale===0?1/Math.sqrt(n.headSize):n.scale,x=Fe(n.headSize),$=n.headSize/x,v=12,E={x:Math.ceil(d/v),y:Math.ceil(n.sequenceLength/v),z:n.batchSize*n.numHeads},S=[{type:12,data:n.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:w},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:y}],k=f&&i&&z.size(i.dims)>0,C=["type","type"];k&&C.push("type"),a&&C.push("type"),o&&C.push("type"),l&&C.push("type");let O=[{dims:p,dataType:t.dataType,gpuDataType:0}];f&&O.push({dims:_,dataType:t.dataType,gpuDataType:0});let I=M=>{let G=N("q",t.dataType,t.dims,x),te=N("key",r.dataType,r.dims,x),j=[G,te];if(k){let se=N("past_key",i.dataType,i.dims,x);j.push(se)}a&&j.push(N("attention_bias",a.dataType,a.dims));let W=o?N("seq_lens",o.dataType,o.dims):void 0;W&&j.push(W);let me=l?N("total_sequence_length_input",l.dataType,l.dims):void 0;me&&j.push(me);let de=H("output",t.dataType,p),Z=[de];f&&Z.push(H("present_key",t.dataType,_,x));let he=lt(1,x),Q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${v}u;

  var<workgroup> tileQ: array<${G.type.storage}, ${v*v}>;
  var<workgroup> tileK: array<${G.type.storage}, ${v*v}>;
  ${M.registerUniforms(Q).declareVariables(...j,...Z)}
  ${M.mainStart([v,v,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${ns(W,me,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${k&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${he}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${k&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${he}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${de.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${a!==void 0};${i!==void 0};${e}`,inputDependencies:C},getRunData:()=>({outputs:O,dispatchGroup:E,programUniforms:S}),getShaderSource:I}},Nm=(e,t,r,i,a,n,s=void 0,o=void 0)=>{let l=n+a.kvSequenceLength,d=a.nReps?a.nReps:1,p=a.vHiddenSize*d,f=e>1&&i,m=a.kvNumHeads?a.kvNumHeads:a.numHeads,_=f?[a.batchSize,m,l,a.headSize]:void 0,y=[a.batchSize,a.sequenceLength,p],w=12,x={x:Math.ceil(a.vHeadSize/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},$=[{type:12,data:a.sequenceLength},{type:12,data:l},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:p},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:d}],v=f&&i&&z.size(i.dims)>0,E=["type","type"];v&&E.push("type"),s&&E.push("type"),o&&E.push("type");let S=[{dims:y,dataType:t.dataType,gpuDataType:0}];f&&S.push({dims:_,dataType:t.dataType,gpuDataType:0});let k=C=>{let O=N("probs",t.dataType,t.dims),I=N("v",r.dataType,r.dims),M=[O,I];v&&M.push(N("past_value",i.dataType,i.dims));let G=s?N("seq_lens",s.dataType,s.dims):void 0;s&&M.push(G);let te=o?N("total_sequence_length_input",o.dataType,o.dims):void 0;o&&M.push(te);let j=[H("output",t.dataType,y)];f&&j.push(H("present_value",t.dataType,_));let W=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${O.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${O.type.value}, ${w*w}>;
  ${C.registerUniforms(W).declareVariables(...M,...j)}
  ${C.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${ns(G,te,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${v&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${O.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${v&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:S,dispatchGroup:x,programUniforms:$}),getShaderSource:k}},Nn=(e,t,r,i,a,n,s,o,l,d,p=void 0,f=void 0)=>{let m=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),_=m>1?d.pastSequenceLength:0,y=_+d.kvSequenceLength,w=l&&z.size(l.dims)>0?l:void 0,x=[t,r];m>1&&s&&z.size(s.dims)>0&&x.push(s),w&&x.push(w),p&&x.push(p),f&&x.push(f);let $=e.compute(Mm(m,t,r,s,w,d,_,p,f),{inputs:x,outputs:m>1?[-1,1]:[-1]})[0];e.compute(Rm($,d.batchSize,d.numHeads,_,d.sequenceLength,y,p,f),{inputs:p&&f?[$,p,f]:[$],outputs:[]});let v=[$,i];m>1&&o&&z.size(o.dims)>0&&v.push(o),p&&v.push(p),f&&v.push(f),e.compute(Nm(m,$,i,o,d,_,p,f),{inputs:v,outputs:m>1?[0,2]:[0]})},Bm=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=f=>{let m=H("output_q",l[0].dataType,r),_=H("output_k",l[0].dataType,r),y=H("output_v",l[0].dataType,r),w=N("input",l[0].dataType,l[0].dims),x=N("weight",l[1].dataType,l[1].dims),$=N("bias",l[2].dataType,l[2].dims),v=w.type.storage,E=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${v}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${v}, ${s*s}>;
  var<workgroup> tileWeightK: array<${v}, ${s*s}>;
  var<workgroup> tileWeightV: array<${v}, ${s*s}>;
  ${f.registerUniforms(E).declareVariables(w,x,$,m,_,y)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${v}(0);
    var valueK = ${v}(0);
    var valueV = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:p},{inputs:l,outputs:[-1,-1,-1]})},Dm=(e,t)=>{let r=zm(e.inputs,t),[i,a,n]=Bm(e,r);return Nn(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Lm,Pm,Um,Fm,iw=U(()=>{Ht(),ue(),ce(),qe(),pe(),Lm=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((o,l)=>{if(o!==i[l])throw new Error(`${n}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Pm=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?Fe(n[n.length-1]):1,o=a==="NHWC"&&n.length>1?s:1,l=z.size(n)/s,d=i,p=d?n.length:n,f=N("x",e[0].dataType,e[0].dims,s),m=N("scale",e[1].dataType,e[1].dims,o),_=N("bias",e[2].dataType,e[2].dims,o),y=N("inputMean",e[3].dataType,e[3].dims,o),w=N("inputVar",e[4].dataType,e[4].dims,o),x=H("y",e[0].dataType,p,s),$=()=>{let E="";if(i)E=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")E=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{E=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let S=1;S<m.rank;S++)E+=`cIndices[${S}] = outputIndices[${S}];`;E+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return E},v=E=>`
  const epsilon = ${r};
  ${E.registerUniform("outputSize","u32").declareVariables(f,m,_,y,w,x)}
  ${E.mainStart()}
  ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${s}`)};
    ${$()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${_.getByOffset("cOffset")};
    let inputMean = ${y.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:v,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...J(n)]:[{type:12,data:l}]})}},Um=e=>$e(e),Fm=(e,t)=>{let{inputs:r,outputCount:i}=e,a=Um({...t,outputCount:i});if(Re.webgpu.validateInputContent&&Lm(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Pm(r,a))}}),Gm,Vm,Wm,nw=U(()=>{ce(),pe(),Gm=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Vm=e=>{let t=e[0].dims,r=e[0].dims[2],i=z.size(t)/4,a=e[0].dataType,n=N("input",a,t,4),s=N("bias",a,[r],4),o=N("residual",a,t,4),l=H("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(n,s,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Wm=e=>{Gm(e.inputs),e.compute(Vm(e.inputs))}}),qm,we,jm,Hm,Km,Ym,Xm,Zm,Qm,Jm,e1,t1,r1,i1,n1,a1,Bn,s1,as,o1,u1,l1,d1,c1,p1,h1,f1,m1,g1,_1,y1,b1,w1,v1,$1,rl,x1,il,nl,E1,T1,S1,k1,A1,C1,al=U(()=>{ue(),ce(),qe(),pe(),qm=(e,t,r,i,a,n,s)=>{let o=Math.ceil(t/4),l="";typeof a=="string"?l=`${a}(a)`:l=a("a");let d=N("inputData",r,[o],4),p=H("outputData",i,[o],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,p)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",l)}
  }`},we=(e,t,r,i,a,n=e.dataType,s,o)=>{let l=[{type:12,data:Math.ceil(z.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:d=>qm(d,z.size(e.dims),e.dataType,n,r,i,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(z.size(d[0].dims)/64/4)},programUniforms:l})}},jm=e=>{e.compute(we(e.inputs[0],"Abs","abs"))},Hm=e=>{e.compute(we(e.inputs[0],"Acos","acos"))},Km=e=>{e.compute(we(e.inputs[0],"Acosh","acosh"))},Ym=e=>{e.compute(we(e.inputs[0],"Asin","asin"))},Xm=e=>{e.compute(we(e.inputs[0],"Asinh","asinh"))},Zm=e=>{e.compute(we(e.inputs[0],"Atan","atan"))},Qm=e=>{e.compute(we(e.inputs[0],"Atanh","atanh"))},Jm=e=>$e(e),e1=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(we(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},t1=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return $e({min:t,max:r})},r1=(e,t)=>{let r=t||t1(e.inputs),i=lt(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},i1=e=>{e.compute(we(e.inputs[0],"Ceil","ceil"))},n1=e=>{e.compute(we(e.inputs[0],"Cos","cos"))},a1=e=>{e.compute(we(e.inputs[0],"Cosh","cosh"))},Bn=e=>$e(e),s1=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},as=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,o1=e=>{let t=lt(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,as(t)))},u1=e=>{e.compute(we(e.inputs[0],"Exp","exp"))},l1=e=>{e.compute(we(e.inputs[0],"Floor","floor"))},d1=e=>{let t=lt(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,as(t)))},c1=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(we(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},p1=e=>{e.compute(we(e.inputs[0],"Not",t=>`!${t}`))},h1=e=>{e.compute(we(e.inputs[0],"Neg",t=>`-${t}`))},f1=e=>{e.compute(we(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},m1=e=>{let t=lt(e.inputs[0].dataType);e.compute(we(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},g1=e=>{e.compute(we(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},_1=e=>$e(e),y1=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(we(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},b1=e=>{e.compute(we(e.inputs[0],"Sin","sin"))},w1=e=>{e.compute(we(e.inputs[0],"Sinh","sinh"))},v1=e=>{e.compute(we(e.inputs[0],"Sqrt","sqrt"))},$1=e=>{e.compute(we(e.inputs[0],"Tan","tan"))},rl=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,x1=e=>{e.compute(we(e.inputs[0],"Tanh",rl))},il=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${rl("v")};
}
`,nl=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,E1=e=>{let t=lt(e.inputs[0].dataType);e.compute(we(e.inputs[0],"FastGelu",nl,il(t),void 0,e.inputs[0].dataType))},T1=(e,t)=>{let r=lt(e.inputs[0].dataType);return e.compute(we(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},S1=e=>{e.compute(we(e.inputs[0],"Log","log"))},k1=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,A1=e=>`quick_gelu_impl(${e})`,C1=(e,t)=>{let r=lt(e.inputs[0].dataType);e.compute(we(e.inputs[0],"QuickGelu",A1,k1(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),I1,O1,z1,aw=U(()=>{ce(),pe(),al(),I1=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},O1=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=N("input",e[0].dataType,e[0].dims,4),i=N("bias",e[0].dataType,[e[0].dims[2]],4),a=H("output",e[0].dataType,t,4),n=z.size(t)/4,s=it(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,a)}

  ${as(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},z1=e=>{I1(e.inputs),e.compute(O1(e.inputs))}}),R1,M1,sr,N1,B1,D1,L1,P1,U1,F1,G1,V1,W1,sw=U(()=>{ue(),ce(),pe(),R1=(e,t,r,i,a,n,s,o,l,d,p,f)=>{let m,_;typeof o=="string"?m=_=(v,E)=>`${o}((${v}),(${E}))`:typeof o=="function"?m=_=o:(m=o.scalar,_=o.vector);let y=H("outputData",p,i.length,4),w=N("aData",l,t.length,4),x=N("bData",d,r.length,4),$;if(a)if(n){let v=z.size(t)===1,E=z.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,k=r.length>0&&r[r.length-1]%4===0;v||E?$=y.setByOffset("global_idx",_(v?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),E?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):$=`
            let outputIndices = ${y.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",y)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",y)};
            ${y.setByOffset("global_idx",_(s||S?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||k?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=y.setByOffset("global_idx",_(w.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let v=(E,S,k="")=>{let C=`aData[indexA${S}][componentA${S}]`,O=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${y.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${w.broadcastedIndicesToOffset(`outputIndices${S}`,y)};
            let offsetB${S} = ${x.broadcastedIndicesToOffset(`outputIndices${S}`,y)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${E}[${S}] = ${k}(${m(C,O)});
          `};p===9?$=`
            var data = vec4<u32>(0);
            ${v("data",0,"u32")}
            ${v("data",1,"u32")}
            ${v("data",2,"u32")}
            ${v("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${v("outputData[global_idx]",0)}
            ${v("outputData[global_idx]",1)}
            ${v("outputData[global_idx]",2)}
            ${v("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,x,y)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},M1=(e,t,r,i,a,n,s=r.dataType)=>{let o=r.dims.map(w=>Number(w)??1),l=i.dims.map(w=>Number(w)??1),d=!z.areEqual(o,l),p=o,f=z.size(o),m=!1,_=!1,y=[d];if(d){let w=sn.calcShape(o,l,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");p=w.slice(),f=z.size(p);let x=z.size(o)===1,$=z.size(l)===1,v=o.length>0&&o[o.length-1]%4===0,E=l.length>0&&l[l.length-1]%4===0;y.push(x),y.push($),y.push(v),y.push(E);let S=1;for(let k=1;k<p.length;k++){let C=o[o.length-k],O=l[l.length-k];if(C===O)S*=C;else break}S%4===0?(_=!0,m=!0):(x||$||v||E)&&(m=!0)}else m=!0;return y.push(m),{name:e,shaderCache:{hint:t+y.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>R1(w,o,l,p,m,d,_,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(z.size(p)/4)},...J(o,l,p)]})}},sr=(e,t,r,i,a,n)=>{e.compute(M1(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},N1=e=>{sr(e,"Add",(t,r)=>`${t}+${r}`)},B1=e=>{sr(e,"Div",(t,r)=>`${t}/${r}`)},D1=e=>{sr(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},L1=e=>{sr(e,"Mul",(t,r)=>`${t}*${r}`)},P1=e=>{let t=N("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;sr(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},U1=e=>{sr(e,"Sub",(t,r)=>`${t}-${r}`)},F1=e=>{sr(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},G1=e=>{sr(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},V1=e=>{sr(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},W1=e=>{sr(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),q1,j1,H1,K1,Y1,X1,ow=U(()=>{ue(),ce(),qe(),pe(),q1=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},j1=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,H1=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},K1=(e,t,r,i)=>{let a=z.size(r),n=new Array(e.length),s=new Array(e.length),o=0,l=[],d=[],p=[{type:12,data:a}];for(let w=0;w<e.length;++w)o+=e[w].dims[t],n[w]=o,d.push(e[w].dims.length),s[w]=N(`input${w}`,i,d[w]),l.push("rank"),p.push({type:12,data:n[w]});for(let w=0;w<e.length;++w)p.push(...J(e[w].dims));p.push(...J(r));let f=H("output",i,r.length),m=f.indicesGet("indices",t),_=Array.from(Array(n.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),y=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)w.registerUniform(`sizeInConcatAxis${x}`,"u32");return w.declareVariables(...s,f)})()}

  ${j1(n.length,_)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${_});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${H1(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}),getShaderSource:y}},Y1=(e,t)=>{let r=e.inputs,i=r[0].dims,a=z.normalizeAxis(t.axis,i.length);q1(r,a);let n=i.slice();n[a]=r.reduce((o,l)=>o+(l.dims.length>a?l.dims[a]:0),0);let s=r.filter(o=>z.size(o.dims)>0);e.compute(K1(s,a,n,r[0].dataType),{inputs:s})},X1=e=>$e({axis:e.axis})}),yi,bi,wi,sl,vi=U(()=>{ue(),ce(),yi=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},bi=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},wi=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},sl=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[bf,wf];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),ot,Z1,ol=U(()=>{ot=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Z1=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Q1,uw=U(()=>{Q1=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Dn,ul,ll=U(()=>{ue(),ce(),pe(),vi(),Dn=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${X(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,X(a,o+n,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},ul=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,o=e[1].dims,l=s[s.length-2],d=o[o.length-1],p=s[s.length-1],f=Fe(d),m=Fe(p),_=Fe(l),y=z.size(r)/f/_,w=e.length>2,x=i?i.slice(0,-2):r.slice(0,-2),$=[z.size(x),l,d],v=[{type:12,data:y},{type:12,data:l},{type:12,data:d},{type:12,data:p}];bi(t,v),v.push(...J(x,s,o)),w&&v.push(...J(e[2].dims)),v.push(...J($));let E=S=>{let k=Yu("batch_dims",e[0].dataType,x.length),C=N("a",e[0].dataType,s.length,m),O=N("b",e[1].dataType,o.length,f),I=H("output",e[0].dataType,$.length,f),M=it(I.type.tensor),G=yi(t,I.type.value,M),te=[C,O],j="";if(w){let de=a?f:1;te.push(N("bias",e[2].dataType,e[2].dims.length,de)),j=`${a?`value += bias[col / ${de}];`:`value += ${I.type.value}(bias[row + i]);`}`}let W=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];wi(t,W);let me=()=>{let de=`var a_data: ${C.type.value};`;for(let Z=0;Z<m;Z++)de+=`
              let b_data${Z} = b[(b_offset + (k + ${Z}) * uniforms.N + col) / ${f}];`;for(let Z=0;Z<_;Z++){de+=`a_data = a[(a_offset + (row + ${Z}) * uniforms.K + k) / ${m}];`;for(let he=0;he<m;he++)de+=`
            values[${Z}] = fma(${O.type.value}(a_data${m===1?"":`[${he}]`}), b_data${he}, values[${Z}]);
`}return de};return`
  ${S.registerUniforms(W).registerInternalVariables(k).declareVariables(...te,I)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${_};
    let row = (index1 % stride1) * ${_};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${k.offsetToIndices("batch")};`}

    var a_indices: ${C.type.indices};
    ${Dn("a_indices",C,C.rank-2,k.rank,"batch_indices")}
    ${C.indicesSet("a_indices",C.rank-2,0)}
    ${C.indicesSet("a_indices",C.rank-1,0)}
    let a_offset = ${C.indicesToOffset("a_indices")};

    var b_indices: ${O.type.indices};
    ${Dn("b_indices",O,O.rank-2,k.rank,"batch_indices")}
    ${O.indicesSet("b_indices",O.rank-2,0)}
    ${O.indicesSet("b_indices",O.rank-1,0)}
    let b_offset = ${O.indicesToOffset("b_indices")};
    var values: array<${I.type.value}, ${_}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${me()}
    }
    for (var i = 0u; i < ${_}u; i++) {
      var value = values[i];
      ${j}
      ${G}
      let cur_indices = ${I.type.indices}(batch, row + i, col);
      let offset = ${I.indicesToOffset("cur_indices")};
      ${I.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${m};${_};${a}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:v}),getShaderSource:E}}}),J1,e2,dl,cl,t2,pl,r2,ss,hl=U(()=>{ue(),ce(),pe(),vi(),ll(),ol(),J1=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,e2=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,dl=(e,t,r="f32",i,a=!1,n=32,s=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],p=a?l:n,f=a?n:l,m=p/t[0],_=n/t[1];if(!((a&&m===4&&e[1]===4||!a&&(m===3||m===4))&&p%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${p/m}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(o/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${_};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${J1(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${e2(a,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},cl=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,t2=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",pl=(e,t,r="f32",i,a=!1,n=32,s=!1,o=32,l=!1)=>{let d=e[1]*t[1],p=e[0]*t[0],f=a?d:n,m=a?n:d;if(!(m%t[1]===0&&f%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let _=m/t[1],y=f/t[0],w=n/t[1],x=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${cl(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${_};
let tileColA = i32(localId.x) * ${y};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${_}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${y}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${cl(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${t2(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${p}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},r2=(e,t,r,i,a=!1)=>{let[n,s,o,l]=i,d=it(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${ot(e,d)} {
      var value = ${ot(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Dn("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${ot(e,d)} {
      var value = ${ot(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Dn("bIndices",o,o.rank-2,n.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ot(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${ot(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ss=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,o=e[1].dims,l=s.slice(0,-2),d=o.slice(0,-2),p=i?i.slice(0,-2):r.slice(0,-2),f=z.size(p),m=s[s.length-2],_=s[s.length-1],y=o[o.length-1],w=_%4===0&&y%4===0,x=m<=8?[4,1,1]:[4,4,1],$=[8,8,1],v=[Math.ceil(y/$[0]/x[0]),Math.ceil(m/$[1]/x[1]),Math.ceil(f/$[2]/x[2])],E=w?4:1,S=[...l,m,_/E],k=S.length,C=[...d,_,y/E],O=C.length,I=[f,m,y/E],M=[{type:6,data:m},{type:6,data:y},{type:6,data:_}];bi(t,M),M.push(...J(p,S,C));let G=["rank","rank"],te=e.length>2;te&&(M.push(...J(e[2].dims)),G.push("rank")),M.push(...J(I));let j=W=>{let me=p.length,de=Yu("batchDims",e[0].dataType,me,1),Z=it(e[0].dataType),he=N("a",e[0].dataType,k,E),Q=N("b",e[1].dataType,O,E),se=H("result",e[0].dataType,I.length,E),Ae=[he,Q];if(te){let et=a?E:1;Ae.push(N("bias",e[2].dataType,e[2].dims.length,et))}let D=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];wi(t,D);let V=it(se.type.tensor),q=yi(t,se.type.value,V),ie=r2(E,te,q,[de,he,Q,se],a);return`
  ${W.registerUniforms(D).registerInternalVariables(de).declareVariables(...Ae,se)}
  ${ie}
  ${w?dl(x,$,Z,de):pl(x,$,Z,de)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${w};${a}`,inputDependencies:G},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:M}),getShaderSource:j}}}),i2,n2,lw=U(()=>{ue(),Ir(),pe(),vi(),ol(),uw(),hl(),i2=(e,t,r,i,a=!1,n,s=4,o=4,l=4,d="f32")=>{let p=M=>{switch(M){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},f=M=>{switch(M){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${M} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,_=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,y=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",$=e?"col":"row",v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${ot(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${y} && xCol >= 0 && xCol < ${w}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(s)}
    }
    return resData;`,E=e?t&&i?`
    let col = colIn * ${s};
    ${v}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${ot(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${v}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${ot(s,d)}(0.0);`,S=e?i&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${ot(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${ot(o,d)}(0.0);`,k=ot(l,d),C=ot(e?s:o,d),O=ot(e?o:s,d),I=yi(n,k,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?E:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${O} {
      ${e?S:E}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${k}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${_}
      ${Z1(a)}
      ${I}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},n2=(e,t,r,i,a,n,s,o,l)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],f=r[0],m=d?r[2]:r[3],_=d?r[1]:r[2],y=d?r[3]:r[1],w=d&&(p%4===0||p%3===0)&&y%4===0,x=d?y:m*_,$=d?m*_:y,v=[8,8,1],E=i<=8?[4,1,1]:[4,4,1],S=[Math.ceil(x/v[0]/E[0]),Math.ceil($/v[1]/E[1]),Math.ceil(f/v[2]/E[2])];_e("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let k=w?d&&p%4!==0?3:4:1,C=v[1]*E[1],O=v[0]*E[0],I=Math.max(v[0]*k,v[1]),M=i%C===0,G=a%O===0,te=n%I===0,j=w?[k,4,4]:[1,1,1],W=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];bi(t,W),W.push(...J(e[0].dims,e[1].dims));let me=["rank","rank"];s&&(W.push(...J(e[2].dims)),me.push("rank")),W.push(...J(r));let de=Z=>{let he=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];wi(t,he);let Q=w?4:1,se=it(e[0].dataType),Ae=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${se}>`:se}) {
        result[flatIndex] = ${w?`vec4<${se}>`:se}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${se}>`:se}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,D=N("x",e[0].dataType,e[0].dims.length,k===3?1:k),V=N("w",e[1].dataType,e[1].dims.length,Q),q=[D,V],ie=H("result",e[0].dataType,r.length,Q);if(s){let et=N("bias",e[2].dataType,e[2].dims.length,Q);q.push(et),Ae+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${se}>`:se} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${Q1("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${Z.registerUniforms(he).declareVariables(...q,ie)}
        ${Ae}
        ${i2(d,M,G,te,s,t,j[0],j[1],j[2],se)}
        ${w?dl(E,v,se,void 0,!d,I):pl(E,v,se,void 0,!d,I,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${k};${w};${M};${G};${te};${C};${O};${I}`,inputDependencies:me},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:W}),getShaderSource:de}}}),a2,fl,Ln,s2,ml,o2,u2,l2,dw=U(()=>{ue(),Ir(),ce(),pe(),vi(),ol(),a2=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},fl=e=>typeof e=="number"?[e,e,e]:e,Ln=(e,t)=>t<=1?e:e+(e-1)*(t-1),s2=(e,t,r,i=1)=>{let a=Ln(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},ml=(e,t,r,i,a)=>{a==null&&(a=s2(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},o2=(e,t,r,i,a,n,s,o,l,d)=>{let p,f,m,_;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let y=ml([t,r,i,1],[o,l,d],1,[a,n,s],e);f=y[0],m=y[1],_=y[2]}else if(Array.isArray(e)){if(!e.every((w,x,$)=>w===$[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let y=ml([t,r,i,1],[o,l,d],1,[a,n,s],e[0]);f=y[0],m=y[1],_=y[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/a),m=Math.ceil(r/n),_=Math.ceil(i/s);let y=(f-1)*a+o-t,w=(m-1)*n+l-r,x=(_-1)*s+d-i,$=Math.floor(y/2),v=y-$,E=Math.floor(w/2),S=w-E,k=Math.floor(x/2),C=x-k;p={top:E,bottom:S,left:k,right:C,front:$,back:v}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:f,outHeight:m,outWidth:_}},u2=(e,t,r,i,a,n=!1,s="channelsLast")=>{let o,l,d,p,f;if(s==="channelsLast")[o,l,d,p,f]=e;else if(s==="channelsFirst")[o,f,l,d,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[m,,_,y,w]=t,[x,$,v]=fl(r),[E,S,k]=fl(i),C=Ln(_,E),O=Ln(y,S),I=Ln(w,k),{padInfo:M,outDepth:G,outHeight:te,outWidth:j}=o2(a,l,d,p,x,$,v,C,O,I),W=n?m*f:m,me=[0,0,0,0,0];return s==="channelsFirst"?me=[o,W,G,te,j]:s==="channelsLast"&&(me=[o,G,te,j,W]),{batchSize:o,dataFormat:s,inDepth:l,inHeight:d,inWidth:p,inChannels:f,outDepth:G,outHeight:te,outWidth:j,outChannels:W,padInfo:M,strideDepth:x,strideHeight:$,strideWidth:v,filterDepth:_,filterHeight:y,filterWidth:w,effectiveFilterDepth:C,effectiveFilterHeight:O,effectiveFilterWidth:I,dilationDepth:E,dilationHeight:S,dilationWidth:k,inShape:e,outShape:me,filterShape:t}},l2=(e,t,r,i,a,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:r.map((x,$)=>$)},d=[Math.ceil(a2(l.x.map(x=>r[x]))/o[0]),1,1];_e("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let p=1,f=z.size(r),m=[{type:12,data:f},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];bi(t,m),m.push(...J(e[0].dims,e[1].dims));let _=["rank","rank"],y=e.length===3;y&&(m.push(...J(e[2].dims)),_.push("rank")),m.push(...J(r));let w=x=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];wi(t,$);let v=1,E=it(e[0].dataType),S=N("x",e[0].dataType,e[0].dims.length,p),k=N("W",e[1].dataType,e[1].dims.length,v),C=[S,k],O=H("result",e[0].dataType,r.length,v),I="";if(y){let te=N("bias",e[2].dataType,e[2].dims.length,v);C.push(te),I+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${E} {
          return bias[${s?X("coords",4,5):X("coords",1,5)}];
        }`}let M=ot(p,E),G=yi(t,M,E);return`
            ${I}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
          ${x.registerUniforms($).declareVariables(...C,O)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${O.offsetToIndices("global_idx")};
              let batch = ${X("coords",0,S.rank)};
              let d2 = ${s?X("coords",S.rank-1,S.rank):X("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?X("coords",1,S.rank):X("coords",2,S.rank)},
              ${s?X("coords",2,S.rank):X("coords",3,S.rank)},
              ${s?X("coords",3,S.rank):X("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?X("uniforms.x_shape",1,S.rank):X("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?X("uniforms.x_shape",2,S.rank):X("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?X("uniforms.x_shape",3,S.rank):X("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?X("uniforms.x_shape",4,S.rank):X("uniforms.x_shape",1,S.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${y?"value = value + getBiasByOutputCoords(coords)":""};
              ${G}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${p};${y}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:m}),getShaderSource:w}}}),d2,c2,cw=U(()=>{ue(),ce(),pe(),vi(),d2=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],p=d/t.group,f=l&&p>=4?Fe(d):1,m=z.size(r)/f,_=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];bi(t,_),_.push(...J(s,[o[0],o[1],o[2],o[3]/f]));let y=a?["rank","rank","rank"]:["rank","rank"];_.push(...J([r[0],r[1],r[2],r[3]/f]));let w=x=>{let $=H("output",e[0].dataType,r.length,f),v=it($.type.tensor),E=yi(t,$.type.value,v),S=N("x",e[0].dataType,s.length),k=N("w",e[1].dataType,o.length,f),C=[S,k];a&&C.push(N("b",e[2].dataType,e[2].dims,f));let O=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];wi(t,O);let I=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${k.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${k.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(O).declareVariables(...C,$)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${I}
    ${n}
    ${E}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:w}},c2=(e,t,r,i)=>{let a=e.length>2,n=Fe(r[3]),s=Fe(r[2]),o=z.size(r)/n/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],p=[r[0],r[1],r[2],r[3]/n],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];bi(t,f),f.push(...J(l,d,p));let m=(s-1)*t.strides[1]+d[1],_=y=>{let w=H("output",e[0].dataType,p.length,n),x=it(w.type.tensor),$=yi(t,w.type.value,x),v=N("x",e[0].dataType,l.length,n),E=N("w",e[1].dataType,d.length,n),S=[v,E];a&&S.push(N("b",e[2].dataType,e[2].dims,n));let k=a?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return wi(t,C),`
  ${y.registerUniforms(C).declareVariables(...S,w)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${v.type.value}, ${m}>;
    var values: array<${w.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${v.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${v.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${E.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${k}
      ${$}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${m};${d[0]};${d[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:_}}}),p2,os,h2,us,gl,_l,f2,m2,yl,pw=U(()=>{ce(),lw(),dw(),hl(),cw(),vi(),ll(),Xr(),p2=(e,t,r,i,a,n)=>{let s=e[0],o=e.slice(n?1:2,n?3:4),l=o.length,d=t[0],p=t.slice(2).map((m,_)=>m+(m-1)*(r[_]-1)),f=o.map((m,_)=>m+i[_]+i[_+l]).map((m,_)=>Math.floor((m-p[_]+a[_])/a[_]));return f.splice(0,0,s),f.splice(n?3:1,0,d),f},os=[2,3,1,0],h2=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},us=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();Ja.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},gl=e=>{let t=sl(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},_l=(e,t,r,i)=>{let a=r.format==="NHWC",n=p2(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let C=[t[0]];if(a){let O=e.kernelCustomData.wT??e.compute(Rt(t[1],os),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=O),C.push(O)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(c2(C,r,n,i),{inputs:C}):e.compute(d2(C,r,n,i),{inputs:C});return}let s=t.length===3,o=t[0].dims[a?1:2],l=t[0].dims[a?2:3],d=t[0].dims[a?3:1],p=t[1].dims[2],f=t[1].dims[3],m=n[a?1:2],_=n[a?2:3],y=n[a?3:1],w=a&&p===o&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(w||p===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let C=n[0],O,I,M,G=[];if(a){let W=e.kernelCustomData.wT??e.compute(Rt(t[1],os),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=W),w){let me=o*l*d;O=t[0].reshape([1,C,me]),I=W.reshape([1,me,y]),M=[1,C,y]}else O=t[0].reshape([C,o*l,d]),I=W.reshape([1,d,y]),M=[C,m*_,y];G.push(O),G.push(I)}else O=t[0].reshape([C,d,o*l]),I=t[1].reshape([1,y,d]),M=[C,y,m*_],G.push(I),G.push(O);s&&G.push(t[2]);let te=M[2],j=G[0].dims[G[0].dims.length-1];te<8&&j<8?e.compute(ul(G,r,n,M,a,i),{inputs:G}):e.compute(ss(G,r,n,M,a,i),{inputs:G});return}let x=!0,$=e.kernelCustomData.wT??e.compute(Rt(t[1],os),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let v=[t[0],$];s&&v.push(t[2]);let E=a?m*_:y,S=a?y:m*_,k=p*f*d;e.compute(n2(v,r,n,E,S,k,s,x,i),{inputs:v})},f2=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=us({...t,pads:a,strides:n,dilations:s,kernelShape:o},i);_l(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},m2=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=us(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=u2(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(l2(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},yl=(e,t)=>{if(h2(e.inputs,t),e.inputs[0].dims.length===3)f2(e,t);else if(e.inputs[0].dims.length===5)m2(e,e.inputs,t);else{let r=us(t,e.inputs);_l(e,e.inputs,r)}}}),g2,hw=U(()=>{ue(),Ir(),ce(),pe(),g2=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,o=e[1].dims,l=o[2]/s,d=o[3],p=n?Fe(l):1,f=n&&d===1&&l>=4,m=f?Math.floor(l/4)*4:Math.floor(l/p)*p,_=l-m,y=n?Fe(d):1,w=n?d===1?p:y:1,x=z.size(a)/y,$=[Math.ceil(x/64),1,1];_e("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let v=["rank","rank"],E=[t.strides[0],t.strides[1]],S=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],k=[t.dilations[0],t.dilations[1]],C=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],O=[C[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),C[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],I=[{type:12,data:x},{type:12,data:E},{type:12,data:S},{type:12,data:k},{type:12,data:C},{type:6,data:O},{type:12,data:m},{type:12,data:l},{type:12,data:d},...J(e[0].dims,e[1].dims)];i&&(I.push(...J(e[2].dims)),v.push("rank")),I.push(...J(a));let M=G=>{let te=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:E.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:O.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],j=it(e[0].dataType),W=n?1:2,me=n?2:3,de=n?3:1,Z=N("W",e[1].dataType,e[1].dims.length,w),he=N("Dy",e[0].dataType,e[0].dims.length,p),Q=[he,Z];i&&Q.push(N("bias",e[2].dataType,[a[de]].length,y));let se=H("result",e[0].dataType,a.length,y),Ae=()=>{let q="";if(f)p===4?q+=`
        let xValue = ${he.getByOffset("x_offset")};
        let wValue = ${Z.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?q+=`
          dotProd = dotProd + dot(vec4<${j}>(${he.getByOffset("x_offset")}, ${he.getByOffset("x_offset + 1u")}), vec4<${j}>(${Z.getByOffset("w_offset")}, ${Z.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(q+=`
          dotProd = dotProd + dot(vec4<${j}>(${he.getByOffset("x_offset")}, ${he.getByOffset("x_offset + 1u")}, ${he.getByOffset("x_offset + 2u")}, ${he.getByOffset("x_offset + 3u")}), vec4<${j}>(${Z.getByOffset("w_offset")}, ${Z.getByOffset("w_offset + 1u")}, ${Z.getByOffset("w_offset + 2u")}, ${Z.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(q+=`
                  let xValue = ${n?he.getByOffset(`${he.indicesToOffset(`${he.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):he.get("batch","inputChannel","idyR","idyC")};
        `,p===1)q+=`
          let w_offset = ${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${Z.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ie=0;ie<p;ie++)q+=`
            let wValue${ie} = ${Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ie}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${ie}] * wValue${ie};`;return q},D=()=>{if(_===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let q="";if(p===1){q+="dotProd = dotProd";for(let ie=0;ie<_;ie++)q+=`
            + ${he.getByOffset(`x_offset + ${ie}`)} * ${Z.getByOffset(`w_offset + ${ie}`)}`;q+=";"}else if(p===2){if(_!==2)throw new Error(`Invalid inputChannelsRemainder ${_}.`);q+=`
          let xValue = ${he.getByOffset("x_offset")};
          let wValue = ${Z.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return q},V=`
            let outputIndices = ${se.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${se.indicesGet("outputIndices",0)};
            let d1 = ${se.indicesGet("outputIndices",de)};
            let r = ${se.indicesGet("outputIndices",W)};
            let c = ${se.indicesGet("outputIndices",me)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${se.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${j}(dyRCorner) + ${j}(wR)) / ${j}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${j}(uniforms.Dy_shape[${W}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${j}(dyCCorner) + ${j}(wC)) / ${j}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${j}(uniforms.Dy_shape[${me}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${he.indicesToOffset(`${he.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${Z.indicesToOffset(`${Z.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:p}) {
                  ${Ae()}
                  inputChannel = inputChannel + ${f?4:p};
                }
                ${D()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${y}]`:""};
            ${se.setByOffset("global_idx","value")};
          `;return`
    ${G.registerUniforms(te).declareVariables(...Q,se)}
      ${G.mainStart()}
      ${G.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${V}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${w}${y}${f}${_}`,inputDependencies:v},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:I}),getShaderSource:M}}}),_2,y2,b2,bl,w2,v2,wl,$2,x2,fw=U(()=>{hw(),vi(),Xr(),_2=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,y2=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},b2=(e,t,r,i,a,n,s,o,l,d)=>{let p=e.length-2,f=d.length===0;l.length<p&&l.push(...Array(p-l.length).fill(0));let m=e[0],_=t[o?3:1]*a;for(let y=0,w=e.length-p-(o?1:0);y<p;++y,++w){let x=e[w],$=f?x*s[y]:d[y],v=_2(x,s[y],n[y],t[w],r[y],$);y2(v,i,n,y,y+p),f&&d.push(s[y]*(x-1)+l[y]+(t[w]-1)*r[y]+1-n[y]-n[y+p])}d.splice(0,0,m),d.splice(o?3:1,0,_)},bl=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,m)=>f*m,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((f,m)=>f+m,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,m)=>f+m,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}b2(o,r,l,e.autoPad,e.group,a,d,i,s,n);let p=Object.assign({},e);return Object.assign(p,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:l,strides:d}),p},w2=e=>{let t=sl(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group,s=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),p=e.outputPadding,f=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:p,outputShape:f,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},v2=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},wl=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(Rt(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute(g2(n,r,i),{inputs:n})},$2=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let l=t.outputPadding;l=[0].concat(l);let d=bl({...t,pads:o,strides:s,dilations:n,kernelShape:a,outputPadding:l},i);wl(e,i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},x2=(e,t)=>{if(v2(e.inputs,t),e.inputs[0].dims.length===3)$2(e,t);else{let r=bl(t,e.inputs);wl(e,e.inputs,r)}}}),E2,T2,S2,mw=U(()=>{ue(),ce(),qe(),pe(),E2=(e,t,r,i)=>{let a=z.size(t),n=t.length,s=N("input",e,n),o=H("output",e,n),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=z.normalizeAxis(l,n),p=f=>{let m=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,_=X("uniforms.input_shape","uniforms.axis",n),y=i.reverse?m+(i.exclusive?" + 1":""):"0",w=i.reverse?_:m+(i.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${y};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:d},...J(t,t)]}),getShaderSource:p}},T2=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(E2(i,r,a,t),{inputs:[0]})},S2=e=>{let t=e.exclusive===1,r=e.reverse===1;return $e({exclusive:t,reverse:r})}}),k2,A2,C2,I2,O2,gw=U(()=>{ue(),ce(),qe(),pe(),k2=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},A2=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},C2=(e,t)=>{let r,i,a,n,s,o,l=t.format==="NHWC",d=t.blocksize,p=t.mode==="DCR";l?([r,i,a,n]=e.dims,s=p?[r,i,a,d,d,n/d**2]:[r,i,a,n/d**2,d,d],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[r,d,d,n/d**2,i,a]:[r,n/d**2,d,d,i,a],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),m=f.dims.length,_=e.dataType,y=N("a",_,m),w=H("output",_,m),x=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(y,w)}

  ${A2(o,m,y,w)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let v=l?[r,i*d,a*d,n/d**2]:[r,n/d**2,i*d,a*d],E=z.size(v),S=f.dims,k=z.sortBasedOnPerm(S,o);return{outputs:[{dims:v,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(E/64)},programUniforms:[{type:12,data:E},...J(S,k)]}},getShaderSource:x}},I2=(e,t)=>{k2(e.inputs),e.compute(C2(e.inputs[0],t))},O2=e=>$e({blocksize:e.blocksize,mode:e.mode,format:e.format})}),ls,Pn,vl,z2,R2,M2,N2,$l,B2,D2,L2,_w=U(()=>{ue(),ce(),qe(),pe(),ls="[a-zA-Z]|\\.\\.\\.",Pn="("+ls+")+",vl="^"+Pn+"$",z2="("+Pn+",)*"+Pn,R2="^"+z2+"$",M2=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},N2=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(R2)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,s)=>{let o=e[s].dims.slice();if(!n.match(RegExp(vl)))throw new Error("Invalid LHS term");let l=this.processTerm(n,!0,o,s);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([n,s])=>s.count===1||n==="...").map(([n])=>n).join("");else if(!i.match(RegExp(Pn)))throw new Error("Invalid RHS");(a=i.match(RegExp(ls,"g")))==null||a.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(n);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],o=0;if(!e.match(RegExp(vl))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(ls,"g")),d=new M2(i);return l==null||l.forEach((p,f)=>{if(p==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let m=a-l.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+m),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let _=0;_<s.length;_++){let y=String.fromCharCode(48+_);d.addSymbol(y,f+_),this.addSymbol(y,r[o++],i)}}else d.addSymbol(p,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,r[o++],i)}),d}},$l=e=>e+"_max",B2=(e,t,r,i)=>{let a=e.map(d=>d.length).map((d,p)=>N(`input${p}`,t,d)),n=z.size(i),s=H("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let p=[],f="var prod = 1.0;",m="var sum = 0.0;",_="sum += prod;",y=[],w=[],x=[],$=[],v=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,k)=>{var C;if(r.rhs.symbolToIndices.has(k)){let O=(C=r.rhs.symbolToIndices.get(k))==null?void 0:C[0];O!==void 0&&r.lhs.forEach((I,M)=>{if(S.inputIndices.includes(M)){let G=I.symbolToIndices.get(k);if(G===void 0)throw new Error("Invalid symbol error");G.forEach(te=>{p.push(`${a[M].indicesSet(`input${M}Indices`,te,s.indicesGet("outputIndices",O))}`)})}})}else r.lhs.forEach((O,I)=>{if(S.inputIndices.includes(I)){let M=O.symbolToIndices.get(k);if(M===void 0)throw new Error("Invalid symbol error");M.forEach(G=>{y.push(`${a[I].indicesSet(`input${I}Indices`,G,`${k}`)}`)}),$.push(`prod *= ${a[I].getByIndices(`input${I}Indices`)};`)}}),w.push(`for(var ${k}: u32 = 0; ${k} < uniforms.${$l(k)}; ${k}++) {`),x.push("}")});let E=v?[...p,`let sum = ${a.map((S,k)=>S.getByIndices(`input${k}Indices`)).join(" * ")};`]:[...p,m,...w,...y,f,...$,_,...x];return`
            ${d.registerUniforms(o.map(S=>({name:`${$l(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((S,k)=>`var input${k}Indices: ${a[k].type.indices};`).join(`
`)}
            ${E.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(f=>r.symbolToInfo.has(f)).map(f=>{var m;return{type:12,data:((m=r.symbolToInfo.get(f))==null?void 0:m.dimValue)||0}});d.push({type:12,data:n});let p=e.map((f,m)=>[...J(f)]).reduce((f,m)=>f.concat(m),d);return p.push(...J(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}},getShaderSource:l}},D2=(e,t)=>{let r=new N2(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(B2(a,e.inputs[0].dataType,r,i))},L2=e=>{let t=e.equation.replace(/\s+/g,"");return $e({equation:t})}}),P2,xl,U2,F2,G2,yw=U(()=>{ue(),ce(),pe(),P2=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},xl=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},U2=(e,t)=>e.length>t.length?xl(e,t):xl(t,e),F2=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=U2(t,r),a=e[0].dataType,n=a===9||z.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,o=n||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(z.size(i)/o),d=f=>{let m=N("input",a,t.length,s),_=H("output",a,i.length,o),y;if(a===9){let w=(x,$,v="")=>`
          let outputIndices${$} = ${_.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${m.broadcastedIndicesToOffset(`outputIndices${$}`,_)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${x}[${$}] = ${v}(${m.getByOffset(`index${$}`)}[component${$}]);
        `;y=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${_.setByOffset("global_idx","data")}
      }`}else y=`
        let outputIndices = ${_.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${m.broadcastedIndicesToOffset("outputIndices",_)};
        let data = ${_.type.value}(${m.getByOffset(`inputOffset / ${s}`)});
        ${_.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(m,_)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${y}`},p=[{type:12,data:l},...J(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p})}},G2=e=>{P2(e.inputs),e.compute(F2(e.inputs),{inputs:[0]})}}),V2,W2,bw=U(()=>{ue(),ce(),pe(),al(),V2=e=>{let t=e[0].dataType,r=z.size(e[0].dims),i=z.size(e[1].dims),a=i%4===0,n=s=>{let o=N("x",t,[1],4),l=N("bias",t,[1],4),d=H("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=_=>`
      let bias${_}_offset: u32 = (global_idx * 4 + ${_}) % uniforms.bias_size;
      let bias${_} = ${l.getByOffset(`bias${_}_offset / 4`)}[bias${_}_offset % 4];`,m=a?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(o,l,d)}

    ${il(lt(t))}

    ${s.mainStart(on)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",nl("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/on/4)}})}},W2=e=>{e.inputs.length<2||z.size(e.inputs[1].dims)===0?E1(e):e.compute(V2(e.inputs))}}),q2,j2,H2,K2,ww=U(()=>{ue(),ce(),qe(),pe(),q2=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},j2=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=z.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let o=r[n],l=e[0].dataType===9?4:1,d=Math.ceil(z.size(s)/l),p=[{type:12,data:d},{type:6,data:o},{type:12,data:n},...J(e[0].dims,e[1].dims,s)],f=m=>{let _=N("data",e[0].dataType,e[0].dims.length,l),y=N("inputIndices",e[1].dataType,e[1].dims.length),w=H("output",e[0].dataType,s.length,l),x=v=>{let E=i.length,S=`var indicesIndices${v}  = ${y.type.indices}(0);`;for(let k=0;k<E;k++)S+=`${E>1?`indicesIndices${v}[${k}]`:`indicesIndices${v}`} = ${s.length>1?`outputIndices${v}[uniforms.axis + ${k}]`:`outputIndices${v}`};`;S+=`
          var idx${v} = ${y.getByIndices(`indicesIndices${v}`)};
          if (idx${v} < 0) {
            idx${v} = idx${v} + uniforms.axisDimLimit;
          }
          var dataIndices${v} : ${_.type.indices};
        `;for(let k=0,C=0;k<a;k++)k===n?(S+=`${a>1?`dataIndices${v}[${k}]`:`dataIndices${v}`} = u32(idx${v});`,C+=E):(S+=`${a>1?`dataIndices${v}[${k}]`:`dataIndices${v}`} = ${s.length>1?`outputIndices${v}[${C}]`:`outputIndices${v}`};`,C++);return S},$;if(e[0].dataType===9){let v=(E,S,k="")=>`
          let outputIndices${S} = ${w.offsetToIndices(`outputOffset + ${S}u`)};
          ${x(S)};
          let offset${S} = ${_.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${E}[${S}] = ${k}(${_.getByOffset(`index${S}`)}[component${S}]);
        `;$=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${v("value",0,"u32")}
        ${v("value",1,"u32")}
        ${v("value",2,"u32")}
        ${v("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${_.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,y,w)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f}},H2=e=>$e({axis:e.axis}),K2=(e,t)=>{let r=e.inputs;q2(r),e.compute(j2(e.inputs,t))}}),Y2,X2,Z2,vw=U(()=>{ue(),ce(),pe(),Y2=(e,t,r,i,a,n,s,o,l)=>{let d=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:l}],p=[n];d.push(...J(t.dims,p));let f=m=>{let _=N("indices_data",t.dataType,t.dims.length),y=H("input_slice_offsets_data",12,1,1),w=[_,y],x=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${m.registerUniforms(x).declareVariables(...w)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},X2=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],o=z.sizeToDimension(n,n.length-1),l=z.sizeFromDimension(i,t.batchDims+s),d=z.sizeToDimension(i,t.batchDims),p=z.sizeFromDimension(i,t.batchDims),f=o/d,m=new Array(s),_=l;for(let S=0;S<s;++S)m[s-1-S]=_,_*=i[t.batchDims+s-1-S];let y=Y2(e,r[1],m,t.batchDims,i,o,f,p,s),w=t.batchDims+s;if(w>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let x=n.slice(0,-1).concat(i.slice(w)),$=z.size(x),v=[{type:12,data:$},{type:12,data:l},...J(r[0].dims,y.dims,x)],E=S=>{let k=N("data",r[0].dataType,r[0].dims.length),C=N("slice_offsets",12,y.dims.length),O=H("output",r[0].dataType,x.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(k,C,O)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:x,dataType:a}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:v}),getShaderSource:E},{inputs:[r[0],y]})},Z2=e=>({batchDims:e.batch_dims,cacheKey:""})}),Q2,J2,eg,tg,$w=U(()=>{ue(),ce(),qe(),pe(),Q2=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=z.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((o,l)=>l===r?Math.ceil(o/i)===n.dims[l]:o===n.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((o,l)=>o===n.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},J2=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=z.normalizeAxis(t.gatherAxis,a),s=z.normalizeAxis(t.quantizeAxis,a),o=r.slice(0);o.splice(n,1,...i);let l=z.size(o),d=e[2].dataType,p=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...J(...e.map((_,y)=>_.dims),o)],m=_=>{let y=N("data",e[0].dataType,e[0].dims.length),w=N("inputIndices",e[1].dataType,e[1].dims.length),x=N("scales",e[2].dataType,e[2].dims.length),$=e.length>3?N("zeroPoint",e[3].dataType,e[3].dims.length):void 0,v=H("output",d,o.length),E=[y,w,x];$&&E.push($);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${_.registerUniforms(S).declareVariables(...E,v)}
        ${_.mainStart()}
        let output_indices = ${v.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${v.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${v.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${y.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${v.indicesGet("output_indices","i")};
          ${y.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${y.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${v.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${y.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${y.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${y.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${lt(d)}(quantized_data - zero_point) * scale;
        ${v.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((_,y)=>y!==1).map(_=>_.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(_,y)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:m}},eg=(e,t)=>{let r=e.inputs;Q2(r,t),e.compute(J2(e.inputs,t))},tg=e=>$e({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),rg,ig,ng,ag,xw=U(()=>{ue(),ce(),qe(),pe(),rg=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ig=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,o=z.normalizeAxis(t.axis,a),l=r[o],d=n.slice(0),p=z.size(d),f=N("input",i,a),m=N("indicesInput",s,n.length),_=H("output",i,d.length),y=[{type:12,data:p},{type:6,data:l},{type:12,data:o}];return y.push(...J(r,n,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:y}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,m,_)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${_.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${_.setByOffset("global_idx","value")};
  }`}},ng=e=>$e({axis:e.axis}),ag=(e,t)=>{let r=e.inputs;rg(r),e.compute(ig(e.inputs,t))}}),sg,og,ug,lg,Ew=U(()=>{ue(),ce(),pe(),sg=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},og=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=yf.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[a,n];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(n/l),p=Math.ceil(a/l),f=!0,m=z.size(o),_=[{type:12,data:f?d:m},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],y=["type","type"];e.length===3&&(_.push(...J(e[2].dims)),y.push("rank")),_.push(...J(o));let w=$=>{let v="";t.transA&&t.transB?v="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?v="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?v="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(v="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let E=t.alpha===1?"":"value *= uniforms.alpha;",S=N("a",e[0].dataType,e[0].dims),k=N("b",e[1].dataType,e[1].dims),C=S.type.value,O=null,I=[S,k];e.length===3&&(O=N("c",e[2].dataType,e[2].dims.length),I.push(O));let M=H("output",e[0].dataType,o.length);I.push(M);let G=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(G).declareVariables(...I)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${C}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${v}
    }

    ${E}
    ${O!=null?`let cOffset = ${O.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${C}(uniforms.beta) * ${O.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},x=$=>{let v=N("a",e[0].dataType,e[0].dims),E=N("b",e[1].dataType,e[1].dims),S=null,k=[v,E];e.length===3&&(S=N("c",e[2].dataType,e[2].dims.length),k.push(S));let C=H("output",e[0].dataType,o.length);k.push(C);let O=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],I="",M="";t.transA&&t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,I="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(M=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,I="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,I="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(M=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${v.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${E.type.value}(0);
      }
      `,I="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let G=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(O).declareVariables(...k)}
  var<workgroup> tile_a: array<array<${v.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${E.type.storage}, ${l}>, ${l}>;
  ${$.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${C.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${M}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${I}
      }
      workgroupBarrier();
    }

    ${G}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",C)}; value += ${C.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*p},programUniforms:_}),getShaderSource:x}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:w}},ug=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},lg=(e,t)=>{sg(e.inputs),e.compute(og(e.inputs,t))}}),mr,Or,$i,xi,dg,cg,pg,hg,fg,mg,gg,_g,yg,bg,Tw=U(()=>{ue(),ce(),qe(),pe(),[mr,Or,$i,xi]=[0,1,2,3],dg=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},cg=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,pg=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,hg=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,fg=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,mg=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${mr}] = batch;
     indices[${Or}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${$i}] = u32(r);
            indices[${xi}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${$i}] = u32(clamp(r, 0, H - 1));
          indices[${xi}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${$i}] = gs_reflect(r, border[1], border[3]);
          indices[${xi}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,gg=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${mr}], indices[${Or}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${mr}], indices[${Or}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${mr}], indices[${Or}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${mr}], indices[${Or}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${mr}], indices[${Or}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${mr}], indices[${Or}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,_g=(e,t)=>{let r=N("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=N("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[mr,Or,$i,xi]=[0,3,1,2]);let s=H("output",e[0].dataType,n.length),o=r.type.value,l=z.size(n),d=[{type:12,data:l},...J(e[0].dims,i,n)],p=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${cg}
  ${pg(o)}
  ${hg(t)}
  ${fg(t)}
  ${mg(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${$i}]);
      let W_in = i32(uniforms.x_shape[${xi}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${mr}], indices[${$i}], indices[${xi}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${gg(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let m=z.size(n);return{outputs:[{dims:n,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:d}},getShaderSource:p}},yg=(e,t)=>{dg(e.inputs),e.compute(_g(e.inputs,t))},bg=e=>$e({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ft,wg,vg,El,$g,Un,xg,Eg=U(()=>{ue(),ce(),qe(),Wu(),tl(),pe(),Xr(),ft=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,wg=(e,t)=>{let r=e[0],i=ft(e,1),a=ft(e,2),n=ft(e,3),s=ft(e,4),o=ft(e,5),l=ft(e,6),d=ft(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=r.dims[0],f=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],_=f,y=0,w=0,x=Math.floor(m/t.numHeads);if(l&&d&&z.size(l.dims)&&z.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=l.dims[2],w=l.dims[2]}else if(l&&z.size(l.dims)||d&&z.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(i&&z.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,_=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,_=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,_=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(n&&z.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let v=y+_,E=0;if(s&&z.size(s.dims)>0){E=8;let O=s.dims;throw O.length===1?O[0]===p?E=1:O[0]===3*p+2&&(E=3):O.length===2&&O[0]===p&&O[1]===v&&(E=5),E===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,k=m;if(a&&z.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(_!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=a.dims[2]}else{if(_!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');k=a.dims[1]*a.dims[3],S=!0}}let C=!1;if(s&&z.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&z.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==v)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:f,pastSequenceLength:y,kvSequenceLength:_,totalSequenceLength:v,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:m,vHiddenSize:k,headSize:x,vHeadSize:Math.floor(k/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:E,scale:t.scale,broadcastResPosBias:C,passPastInKv:S,qkvFormat:$}},vg=e=>$e({...e}),El=$e({perm:[0,2,1,3]}),$g=(e,t,r,i,a,n,s)=>{let o=[i,a,n],l=z.size(o),d=[{type:12,data:l},{type:12,data:s},{type:12,data:n}],p=f=>{let m=H("qkv_with_bias",t.dataType,o),_=N("qkv",t.dataType,o),y=N("bias",r.dataType,o),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(w).declareVariables(_,y,m)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p},{inputs:[t,r],outputs:[-1]})[0]},Un=(e,t,r,i,a,n,s,o)=>{let l=n;if(s&&z.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=$g(e,n,s,t,i,r*a,o),l=l.reshape([t,i,r,a]),r===1||i===1?l:e.compute(Rt(l,El.perm),{inputs:[l],outputs:[-1]})[0]}else return n.dims.length===3&&(l=n.reshape([t,i,r,a])),r===1||i===1?l:e.compute(Rt(l,El.perm),{inputs:[l],outputs:[-1]})[0]},xg=(e,t)=>{let r=wg(e.inputs,t),i=e.inputs[0],a=ft(e.inputs,1),n=ft(e.inputs,2),s=ft(e.inputs,3),o=ft(e.inputs,4),l=ft(e.inputs,5),d=ft(e.inputs,6),p=ft(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let f=a&&n&&a.dims.length===4&&n.dims.length===4,m=Un(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(f)return Nn(e,m,a,n,o,void 0,d,p,l,r);if(!a||!n)throw new Error("key and value must be provided");let _=Un(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),y=Un(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);Nn(e,m,_,y,o,void 0,d,p,l,r)}}),Tg,Sg,kg,Ag,Tl,Cg,Ig,Og=U(()=>{ue(),ce(),qe(),pe(),Tg=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Sg=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),$e({numOutputs:i,axis:t.axis,splitSizes:r})},kg=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${X("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ag=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Tl=(e,t)=>{let r=e[0].dims,i=z.size(r),a=e[0].dataType,n=z.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=N("input",a,r.length),l=new Array(t.numOutputs),d=[],p=[],f=0,m=[{type:12,data:i}];for(let y=0;y<t.numOutputs;y++){f+=t.splitSizes[y],l[y]=f;let w=r.slice();w[n]=t.splitSizes[y],p.push(w),s[y]=H(`output${y}`,a,w.length),d.push({dims:p[y],dataType:e[0].dataType})}m.push({type:12,data:l},...J(r,...p));let _=y=>`
  ${y.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...s)}
  ${kg(l.length)}
  ${Ag(s)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${X("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m})}},Cg=(e,t)=>{Tg(e.inputs);let r=e.inputs.length===1?t:Sg(e.inputs,t);e.compute(Tl(e.inputs,r),{inputs:[0]})},Ig=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return $e({axis:t,numOutputs:i,splitSizes:r})}}),zg,ds,Rg,Mg=U(()=>{ue(),ce(),qe(),pe(),zg=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!z.areEqual(i.dims,[])&&!z.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!z.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],p=a.dims[0],f=z.sizeFromDimension(r.dims,1)/d,m=o===0?a.dims[1]*2:f/s;if(o>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(m/2!==a.dims[1]&&o/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(d>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},ds=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],o=z.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,p=e[2].dims[1],f=a===0?p*2:d/i,m=new Array(s,l,d/f,f-p),_=z.computeStrides(m),y=[{type:1,data:n},{type:12,data:m},{type:12,data:_},...e[0].dims.length===3?new Array({type:12,data:[o,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,l*f,1]}):[],...J(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=x=>{let $=N("input",e[0].dataType,e[0].dims.length),v=N("position_ids",e[1].dataType,e[1].dims.length),E=N("cos_cache",e[2].dataType,e[2].dims.length),S=N("sin_cache",e[3].dataType,e[3].dims.length),k=H("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:_.length},{name:"input_output_strides",type:"u32",length:_.length}]),`
        ${x.declareVariables($,v,E,S,k)}

        ${x.mainStart(on)}
          let half_rotary_emb_dim = uniforms.${E.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${v.broadcastedIndicesToOffset("bsnh.xy",H("",v.type.tensor,2))};
            let position_id =
                u32(${v.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${$.getByOffset("i")} * ${E.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${k.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${E.get("position_id","bsnh[3]")};
            ${k.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${k.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:$e({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(m)/on)},programUniforms:y})}},Rg=(e,t)=>{zg(e.inputs,t),e.compute(ds(e.inputs,t))}}),Ng,Bg,Sl,Dg,Lg,Sw=U(()=>{qe(),ue(),tl(),Eg(),Og(),Xr(),Mg(),pe(),Ng=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],p=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,m=0,_=!i||i.dims.length===0,y=Math.floor(_?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);_&&(p=y*t.numHeads);let w=n&&n.dims.length!==0,x=s&&s.dims.length!==0;if(w&&n.dims.length===4&&n.dims[0]===l&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===y)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&x){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=n.dims[2]}else if(w||x)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let v=0,E=!1,S=t.kvNumHeads?y*t.kvNumHeads:p;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(f!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=a.dims[2]}else{if(f!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=a.dims[1]*a.dims[3],E=!0}}let k=e.length>4?e[5]:void 0;if(k&&k.dims.length!==1&&k.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:S,headSize:y,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:v,scale:t.scale,broadcastResPosBias:!1,passPastInKv:E,qkvFormat:$}},Bg=$e({perm:[0,2,1,3]}),Sl=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(Rt(i,Bg.perm),{inputs:[i],outputs:[-1]})[0]),i},Dg=(e,t,r,i)=>{let a=7,n=["type","type"],s=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=p=>{let f=N("seq_lens",r.dataType,r.dims),m=N("total_seq_lens",i.dataType,i.dims),_=H("pos_ids",a,s),y=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${p.registerUniforms(y).declareVariables(f,m,_)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${m.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${_.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${_.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},Lg=(e,t)=>{var S;let r=Ng(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((S=e.inputs[1])==null?void 0:S.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=$e({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,p*r.headSize,p*r.headSize]}),[m,_,y]=!a&&!n?e.compute(Tl([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],w,x;if(t.doRotary){let k=e.compute(Dg(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],C=e.inputs[7],O=e.inputs[8],I=$e({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),M=[m,k,C,O],G=[-1];w=e.compute(ds(M,I),{inputs:M,outputs:G})[0],M.splice(0,1,_);let te=$e({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});x=e.compute(ds(M,te),{inputs:M,outputs:G})[0]}let $=Un(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?w:m,void 0,0),v=Sl(e,t.doRotary?x:_,r),E=Sl(e,y,r);Nn(e,$,v,E,void 0,void 0,s,o,void 0,r,l,d)}}),kl,Pg,Ug,Fg,kw=U(()=>{ue(),ce(),Xr(),pe(),kl=(e,t,r,i,a,n,s,o)=>{let l=Fe(n),d=l===1?"f32":`vec${l}f`,p=l===1?"vec2f":`mat2x${l}f`,f=a*s,m=64;f===1&&(m=256);let _=[a,s,n/l],y=[a,s,2],w=["rank","type","type"],x=[];x.push(...J(_,y));let $=v=>{let E=N("x",t.dataType,3,l),S=N("scale",r.dataType,r.dims),k=N("bias",i.dataType,i.dims),C=H("output",1,3,2),O=[E,S,k,C];return`
  var<workgroup> workgroup_shared : array<${p}, ${m}>;
  const workgroup_size = ${m}u;
  ${v.declareVariables(...O)}
  ${v.mainStart(m)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${E.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Yr("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${Yr("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${m}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:y,dataType:1}],dispatchGroup:{x:f},programUniforms:x}),getShaderSource:$},{inputs:[t,r,i],outputs:[-1]})[0]},Pg=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],o=i[1],l=z.sizeFromDimension(i,n),d=Fe(l),p=z.size(a)/d,f=kl(e,t[0],t[1],t[2],s,l,o,r.epsilon),m=[s,o,l/d],_=[s,o],y=["type","none"],w=x=>{let $=N("x",t[0].dataType,m.length,d),v=N("scale_shift",1,_.length,2),E=H("output",t[0].dataType,m.length,d),S=[$,v,E];return`
  ${x.registerUniform("output_size","u32").declareVariables(...S)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${E.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${v.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${E.type.value}(scale_shift.x) + ${E.type.value}(scale_shift.y);
      ${E.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...J(m,_,m)]}),getShaderSource:w},{inputs:[t[0],f]})},Ug=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],o=z.sizeFromDimension(i,1)/s,l=Fe(s),d=z.size(a)/l,p=[{type:12,data:o},{type:12,data:Math.floor(s/l)}],f=["type","type"],m=!1,_=[0,i.length-1];for(let $=0;$<i.length-2;$++)m=m||i[$+1]!==1,_.push($+1);m=m&&i[i.length-1]!==1;let y=m?e.compute(Rt(e.inputs[0],_),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},($,v)=>i[_[v]])),w=kl(e,y,t[1],t[2],n,o,s,r.epsilon),x=$=>{let v=it(t[0].dataType),E=l===1?"vec2f":`mat${l}x2f`,S=O=>{let I=O===0?"x":"y",M=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${v}(${M}(scale.${I}))`;case 2:return`vec2<${v}>(${M}(scale[0].${I}, scale[1].${I}))`;case 4:return`vec4<${v}>(${M}(scale[0].${I}, scale[1].${I}, scale[2].${I}, scale[3].${I}))`;default:throw new Error(`Not supported compoents ${l}`)}},k=N("input",t[0].dataType,t[0].dims,l),C=H("output",t[0].dataType,a,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${k.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${E}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${C.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:x},{inputs:[t[0],w]})},Fg=(e,t)=>{t.format==="NHWC"?Ug(e,e.inputs,t):Pg(e,e.inputs,t)}}),Gg,Vg,Wg,Aw=U(()=>{ue(),ce(),pe(),Gg=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Vg=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],o=a,l=z.normalizeAxis(t.axis,a.length),d=z.sizeToDimension(a,l),p=z.sizeFromDimension(a,l),f=z.size(n.dims),m=s?z.size(s.dims):0;if(f!==p||s&&m!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${m}`);let _=[];for(let k=0;k<a.length;++k)k<l?_.push(a[k]):_.push(1);let y=Fe(p),w=["type","type"],x=[{type:12,data:d},{type:1,data:p},{type:12,data:Math.floor(p/y)},{type:1,data:t.epsilon}];s&&w.push("type");let $=r>1,v=r>2,E=k=>{let C=it(e[0].dataType),O=[N("x",e[0].dataType,e[0].dims,y),N("scale",n.dataType,n.dims,y)];s&&O.push(N("bias",s.dataType,s.dims,y)),O.push(H("output",e[0].dataType,o,y)),$&&O.push(H("mean_data_output",1,_)),v&&O.push(H("inv_std_output",1,_));let I=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${k.registerUniforms(I).declareVariables(...O)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ku("f32",y)};
    var mean_square_vector = ${Ku("f32",y)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${un(C,y,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Yr("mean_vector",y)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Yr("mean_square_vector",y)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${un(C,y,"x[j + offset]")};
      let f32scale = ${un(C,y,"scale[j]")};
      output[j + offset] = ${O[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${un(C,y,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${v?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:o,dataType:e[0].dataType}];return $&&S.push({dims:_,dataType:1}),v&&S.push({dims:_,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${y};${r};${i}`,inputDependencies:w},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:x}),getShaderSource:E}},Wg=(e,t)=>{Gg(e.inputs),e.compute(Vg(e.inputs,t,e.outputCount))}}),qg,jg,Cw=U(()=>{ce(),ll(),hl(),qg=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},jg=e=>{qg(e.inputs);let t=sn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(ul(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=z.size(e.inputs[0].dims.slice(0,-2)),s=z.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let o=e.inputs[0].reshape([1,n,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,n,r],p=[o,l];e.compute(ss(p,{activation:""},t,d),{inputs:p})}else e.compute(ss(e.inputs,{activation:""},t))}}}),Hg,Kg,Yg,Xg,Zg,Iw=U(()=>{ue(),ce(),qe(),pe(),Hg=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!z.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(z.size(o)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(z.size(l)!==d)throw new Error("zeroPoints input size error.")}},Kg=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,o=r.slice(0,i-2),l=z.size(o),d=e[1].dims[2]/4,p=e[0].dataType,f=Fe(t.k),m=Fe(d),_=Fe(s),y=o.concat([a,s]),w=a>1&&s/_%2===0?2:1,x=z.size(y)/_/w,$=64,v=[],E=[l,a,n/f],S=z.convertShape(e[1].dims).slice();S.splice(-1,1,d/m),v.push(...J(E)),v.push(...J(S)),v.push(...J(e[2].dims)),e.length===4&&v.push(...J(z.convertShape(e[3].dims)));let k=[l,a,s/_];v.push(...J(k));let C=O=>{let I=E.length,M=N("a",e[0].dataType,I,f),G=N("b",12,S.length,m),te=N("scales",e[2].dataType,e[2].dims.length),j=[M,G,te],W=e.length===4?N("zero_points",12,e[3].dims.length):void 0;W&&j.push(W);let me=k.length,de=H("output",e[0].dataType,me,_),Z=it(e[0].dataType),he=(()=>{switch(f){case 1:return`array<${Z}, 8>`;case 2:return`mat4x2<${Z}>`;case 4:return`mat2x4<${Z}>`;default:throw new Error(`${f}-component is not supported.`)}})(),Q=()=>{let D=`
          // reuse a data
            var input_offset = ${M.indicesToOffset(`${M.type.indices}(batch, row, word_offset)`)};
            var a_data: ${he};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${M.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let V=0;V<_*w;V++)D+=`
            b_value = ${m===1?`b${V}_data`:`b${V}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${he}(${Array.from({length:4},(q,ie)=>`${Z}(b_value_lower[${ie}]), ${Z}(b_value_upper[${ie}])`).join(", ")});
            b_dequantized_values = ${f===1?`${he}(${Array.from({length:8},(q,ie)=>`(b_quantized_values[${ie}] - ${W?`zero_point${V}`:"zero_point"}) * scale${V}`).join(", ")});`:`(b_quantized_values - ${he}(${Array(8).fill(`${W?`zero_point${V}`:"zero_point"}`).join(",")})) * scale${V};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(V/_)}]${_>1?`[${V%_}]`:""} += ${Array.from({length:8/f},(q,ie)=>`${f===1?`a_data[${ie}] * b_dequantized_values[${ie}]`:`dot(a_data[${ie}], b_dequantized_values[${ie}])`}`).join(" + ")};
          `;return D},se=()=>{let D=`
            var col_index = col * ${_};
            ${W?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Z}(8);`}
            `;for(let V=0;V<_*w;V++)D+=`
            let scale${V} = ${te.getByOffset("col_index * nBlocksPerCol + block")};
            ${W?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${W.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${V} = ${Z}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return D},Ae=()=>{let D=`col_index = col * ${_};`;for(let V=0;V<_*w;V++)D+=`
            let b${V}_data = ${G.getByIndices(`${G.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return D+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${he};
            var b_dequantized_values: ${he};`,D};return`
        var<workgroup> workgroup_shared: array<${de.type.value}, ${w*$}>;
        ${O.declareVariables(...j,de)}
        ${O.mainStart([$,1,1])}
          let output_indices = ${de.offsetToIndices(`(global_idx / ${$}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${se()}
            for (var word: u32 = 0; word < ${d}; word += ${m}) {
              ${Ae()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${Q()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${de.type.value} = ${de.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${de.setByIndices(`${de.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${m};${_};${w};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:p}],dispatchGroup:{x},programUniforms:v}),getShaderSource:C}},Yg=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,o=r.slice(0,i-2),l=z.size(o),d=e[1].dims[2]/4,p=e[0].dataType,f=Fe(t.k),m=Fe(d),_=o.concat([a,s]),y=128,w=s%8===0?8:s%4===0?4:1,x=y/w,$=x*m*8,v=$/f,E=$/t.blockSize,S=z.size(_)/w,k=[],C=[l,a,n/f],O=z.convertShape(e[1].dims).slice();O.splice(-1,1,d/m),k.push(...J(C)),k.push(...J(O)),k.push(...J(e[2].dims)),e.length===4&&k.push(...J(z.convertShape(e[3].dims)));let I=[l,a,s];k.push(...J(I));let M=G=>{let te=C.length,j=N("a",e[0].dataType,te,f),W=N("b",12,O.length,m),me=N("scales",e[2].dataType,e[2].dims.length),de=[j,W,me],Z=e.length===4?N("zero_points",12,e[3].dims.length):void 0;Z&&de.push(Z);let he=I.length,Q=H("output",e[0].dataType,he),se=it(e[0].dataType),Ae=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${se}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${se}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${se}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${se}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${j.type.value}, ${v}>;
        var<workgroup> inter_results: array<array<${Q.type.value}, ${x}>, ${w}>;
        ${G.declareVariables(...de,Q)}
        ${G.mainStart([x,w,1])}
          let output_indices = ${Q.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${E} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${v};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${v}; a_offset += ${y})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${j.getByIndices(`${j.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${j.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${E} + local_id.x;
            ${Z?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${Z.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${se}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${se}(8);`}
            let scale = ${me.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${W.getByIndices(`${W.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${m}; i++) {
              ${Ae()}
              let b_value = ${m===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${se}>(${Array.from({length:4},(D,V)=>`${se}(b_value_lower[${V}]), ${se}(b_value_upper[${V}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${se}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(D,V)=>`${`dot(a_data${V}, b_dequantized_values[${V}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${Q.type.value} = ${Q.type.value}(0);
            for (var b = 0u; b < ${x}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${Q.setByIndices(`${Q.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${m};${x};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:p}],dispatchGroup:{x:S},programUniforms:k}),getShaderSource:M}},Xg=(e,t)=>{Hg(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Yg(e.inputs,t)):e.compute(Kg(e.inputs,t))},Zg=e=>$e(e)}),Qg,Jg,e0,t0,r0,i0,n0,a0,s0,Ow=U(()=>{ue(),ce(),pe(),Qg=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Jg=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${X("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${X("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${X("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},e0=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${X("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${X("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${X("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${X("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},t0=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${X("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${X("uniforms.x_shape",a,t)})) {
                  k = i32(${X("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${X("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},r0=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${X("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${X("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${X("uniforms.x_shape",a,t)})) {
                  k -= i32(${X("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${X("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},i0=(e,t,r)=>{switch(r.mode){case 0:return Jg(e,t,r.pads.length);case 1:return e0(e,t,r.pads.length);case 2:return t0(e,t,r.pads.length);case 3:return r0(e,t,r.pads.length);default:throw new Error("Invalid mode")}},n0=(e,t)=>{let r=z.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=z.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...J(e[0].dims,r));let o=["rank"],l=d=>{let p=H("output",e[0].dataType,r.length),f=N("x",e[0].dataType,i.length),m=f.type.value,_=i0(p,i.length,t),y=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&y.push({name:"constant_value",type:s?m:"f32"}),`
            ${d.registerUniforms(y).declareVariables(f,p)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${_}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(r)/64)},programUniforms:n}),getShaderSource:l}},a0=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)n[Number(o[l])]=Number(r[l]),n[Number(o[l])+a]=Number(r[l+o.length])}else r.forEach((o,l)=>n[Number(l)]=Number(o));let s=[];return n.forEach(o=>s.push(o)),{mode:t.mode,value:i,pads:s}}else return t},s0=(e,t)=>{Qg(e.inputs);let r=a0(e.inputs,t);e.compute(n0(e.inputs,r),{inputs:[0]})}}),Fn,Al,Cl,Il,Ol,o0,u0,zl,Rl,l0,d0,Ml,c0,p0,Nl,h0,f0,m0,g0,zw=U(()=>{Ht(),ue(),ce(),pe(),Fn=e=>{if(Re.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Al=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),l=n?t.dilations.slice():[],d=t.pads.slice();Ja.adjustPoolAttributes(r,a,s,o,l,d);let p=Ja.computePoolOutputShape(r,a,o,l,s,d,t.autoPad),f=Object.assign({},t);n?Object.assign(f,{kernelShape:s,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let m=p.slice();return m.push(m.splice(1,1)[0]),[f,i?m:p]},Cl=(e,t)=>{let r=t.format==="NHWC",i=z.size(e),a=z.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],f=!!(d+p);n.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let _=t.kernelShape[t.kernelShape.length-2],y=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];m=!!(w+x),n.push({type:12,data:_},{type:12,data:y},{type:12,data:w},{type:12,data:x}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,f,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=z.computeStrides(t.kernelShape);n.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,p)=>d+p);return[n,s,!!l,!1,!1]}},Il=(e,t,r,i,a,n,s,o,l,d,p,f)=>{let m=a.format==="NHWC",_=t.type.value,y=H("output",t.type.tensor,i);if(a.kernelShape.length<=2){let w="",x="",$="",v=r-(m?2:1);if(p?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${v}] < 0 || xIndices[${v}]
                      >= uniforms.x_shape[${v}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${v}] = indices[${v}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let E=r-(m?3:2);f?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${E}] < 0 || xIndices[${E}] >= uniforms.x_shape[${E}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var value = ${_}(${o});
              var pad = 0;
              ${x}
              ${w}
              ${$}
              ${s}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=a.kernelShape.length,x=a.pads.length,$="";return d?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:$=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(l).declareVariables(t,y)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${y.offsetToIndices("global_idx")};
              var xIndices = ${y.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${_}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${X("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${X("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${X("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${X("uniforms.pads","j - 2u",x)};
                  ${$}
              }
              ${s}

              output[global_idx] = value;
            }`}},Ol=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,o0=e=>`${Ol(e)};${e.countIncludePad}`,u0=e=>`${Ol(e)};${e.storageOrder};${e.dilations}`,zl=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Rl=(e,t,r,i)=>{let[a,n]=Al(t,i,r),s=N("x",t.dataType,t.dims.length),o=s.type.value,l="value += x_val;",d="";a.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,f,m,_,y]=Cl(n,a);p.push(...J(t.dims,n));let w=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${m};${_};${y}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(n)/64)},programUniforms:p}),getShaderSource:x=>Il(x,s,t.dims.length,n.length,a,l,d,0,f,m,_,y)}},l0=e=>{let t=e.count_include_pad!==0,r=zl(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:o0(i)}},d0=(e,t)=>{Fn(e.inputs),e.compute(Rl("AveragePool",e.inputs[0],!1,t))},Ml={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},c0=e=>{let t=e.format;return{format:t,...Ml,cacheKey:t}},p0=(e,t)=>{Fn(e.inputs),e.compute(Rl("GlobalAveragePool",e.inputs[0],!0,t))},Nl=(e,t,r,i)=>{let[a,n]=Al(t,i,r),s=`
      value = max(x_val, value);
    `,o="",l=N("x",t.dataType,t.dims.length),d=["rank"],[p,f,m,_,y]=Cl(n,a);return p.push(...J(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${m};${_};${y}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(n)/64)},programUniforms:p}),getShaderSource:w=>Il(w,l,t.dims.length,n.length,a,s,o,t.dataType===10?-65504:-1e5,f,m,_,y)}},h0=(e,t)=>{Fn(e.inputs),e.compute(Nl("MaxPool",e.inputs[0],!1,t))},f0=e=>{let t=e.storage_order,r=e.dilations,i=zl(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:u0(a)}},m0=e=>{let t=e.format;return{format:t,...Ml,cacheKey:t}},g0=(e,t)=>{Fn(e.inputs),e.compute(Nl("GlobalMaxPool",e.inputs[0],!0,t))}}),_0,y0,b0,w0,Rw=U(()=>{ue(),ce(),qe(),pe(),_0=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},y0=(e,t)=>{let r=z.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,o=z.size(n),l=i===3||i===2,d=l?[Math.ceil(z.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,f=e.length>2?e[2]:void 0,m=f?l?[Math.ceil(z.size(f.dims)/4)]:f.dims:void 0,_=p.length===0||p.length===1&&p[0]===1,y=_===!1&&p.length===1,w=Fe(o),x=_&&(!l||w===4),$=x?w:1,v=x&&!l?w:1,E=N("input",l?12:i,d.length,v),S=N("scale",s,p.length),k=f?N("zero_point",l?12:i,m.length):void 0,C=H("output",s,n.length,$),O=[E,S];k&&O.push(k);let I=[d,p];f&&I.push(m);let M=[{type:12,data:o/$},{type:12,data:r},{type:12,data:t.blockSize},...J(...I,n)],G=te=>{let j=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${te.registerUniforms(j).declareVariables(...O,C)}
      ${te.mainStart()}
          ${te.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${E.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${E.getByOffset("global_idx")};`};

          // Set scale input
          ${_?`let scale_value= ${S.getByOffset("0")}`:y?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${k?_?l?`
                let zero_point_input = ${k.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${k.getByOffset("0")}`:y?l?`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${k.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${k.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${k.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${k.getByIndices("scale_indices")};`:`let zero_point_value = ${l?a?"i32":"u32":E.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:k?["rank","rank","rank"]:["rank","rank"]},getShaderSource:G,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(o/$/64),y:1,z:1},programUniforms:M})}},b0=(e,t)=>{_0(e.inputs,t),e.compute(y0(e.inputs,t))},w0=e=>$e({axis:e.axis,blockSize:e.blockSize})}),v0,$0,x0,Mw=U(()=>{Ht(),ue(),pe(),v0=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},$0=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,o=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...J(n)],l=d=>{let p=H("output",i,n.length),f=p.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(m).declareVariables(p)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},x0=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),Re.webgpu.validateInputContent&&v0(t,r,i),e.compute($0(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),E0,T0,S0,k0,Nw=U(()=>{ue(),ce(),qe(),pe(),E0=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${n}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},T0=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(z.sizeToDimension(i,i.length-1)/n),o=i[i.length-1],l=z.sizeFromDimension(r,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:l},...J(e[1].dims,e[2].dims,a)],p=f=>{let m=N("indices",e[1].dataType,e[1].dims.length),_=N("updates",e[2].dataType,e[2].dims.length,n),y=t.reduction!=="none"&&t.reduction!==""?Rf("output",e[0].dataType,a.length):H("output",e[0].dataType,a.length,n);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(m,_,y)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${E0(t.reduction,"output[data_offset + i]","value",y.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p}},S0=e=>$e({reduction:e.reduction}),k0=(e,t)=>{e.compute(T0(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),A0,C0,I0,Bl,O0,z0,R0,M0,N0,B0,D0,L0,Dl,P0,U0,F0,G0,V0,W0,q0,Bw=U(()=>{ue(),ce(),qe(),pe(),A0=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},C0=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},I0=(e,t,r,i,a,n)=>{let[s,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>n.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>i.push(p)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");A0(i,t),t.axes.length>0&&C0(i,t.axes,d).forEach((p,f)=>i[f]=p)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(p=>a.push(Number(p))),a.length!==0&&a.length!==d&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},Bl=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,O0=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Bl("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Bl("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",z0=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",R0=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},M0=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},N0=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},B0=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${X("uniforms.scales","i",i)};
        var roi_low = ${X("uniforms.roi","i",a)};
        var roi_hi = ${X("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${X("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${X("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,D0=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${X("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${X("uniforms.roi","i",n)};
          var roi_hi = ${X("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${X("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${X("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,L0=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${X("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Dl=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",P0=(e,t,r,i,a)=>{let[n,s,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Dl(e,l,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},U0=(e,t,r,i,a,n,s,o,l,d)=>{let p=r.length===2,[f,m]=p?[0,1]:[2,3],_=e.type.value,y=w=>{let x=w===f?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[w]},
        ${i[w]}, ${r[w]}, ${n[w]}, ${n[w]} + ${r.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${l};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${_} = originalIdx + ${_}(i);
          if (${x} < 0 || ${x} >= ${r[w]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${x} = max(0, min(${x}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${x})`)};
          data[i + 1] = ${w===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${y(f)};
    ${y(m)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},F0=(e,t,r,i,a)=>{let[n,s,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${Dl(e,d,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${s}];
      var height:${p} = originalIndices[${o}];
      var width:${p} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},G0=(e,t,r,i,a,n)=>{let s=e.dims,o=R0(n,t.axes,s.length),l=M0(s,i,a,t.axes),d=i.slice();i.length===0&&(d=s.map((v,E)=>v===0?1:l[E]/v),t.keepAspectRatioPolicy!=="stretch"&&(l=N0(s,d,t)));let p=H("output",e.dataType,l.length),f=N("input",e.dataType,s.length),m=z.size(l),_=s.length===l.length&&s.every((v,E)=>v===l[E]),y=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,x=f.type.value,$=v=>`
      ${_?"":`
      ${O0(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${L0(f,s)};
              ${z0(t.nearestMode,r,x)};
              ${D0(f,p,s,l,d.length,o.length,y)};
              `;case"linear":return`
              ${B0(p,s,l,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${P0(f,p,s,y,w)}`;if(s.length===3||s.length===5)return`${F0(f,p,s,y,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${U0(f,p,s,l,d,o,t.cubicCoeffA,y,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${v.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(f,p)}
      ${v.mainStart()}
        ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${_?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${a.length>0?a:""}|${o.length>0?o:""}|${_}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:d},{type:1,data:o},...J(s,l)]})}},V0=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},W0=(e,t)=>{let r=[],i=[],a=[],n=V0(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");I0(e.inputs,t,n,r,i,a),e.compute(G0(e.inputs[0],t,n,r,i,a),{inputs:[0]})},q0=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return $e({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),j0,H0,K0,Dw=U(()=>{ue(),ce(),pe(),j0=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},H0=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=z.size(n),o=n,l=s,d=n.slice(-1)[0],p=i?n.slice(0,-1).concat(1):[],f=!a&&e.length>3,m=e.length>4,_=i&&r>1,y=i&&r>2,w=r>3,x=64,$=Fe(d),v=[{type:12,data:l},{type:12,data:$},{type:12,data:d},{type:1,data:t.epsilon}],E=k=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],O=[N("x",e[0].dataType,e[0].dims,$),N("skip",e[1].dataType,e[1].dims,$),N("gamma",e[2].dataType,e[2].dims,$)];f&&O.push(N("beta",e[3].dataType,e[3].dims,$)),m&&O.push(N("bias",e[4].dataType,e[4].dims,$)),O.push(H("output",e[0].dataType,o,$)),_&&O.push(H("mean_output",1,p)),y&&O.push(H("inv_std_output",1,p)),w&&O.push(H("input_skip_bias_sum",e[0].dataType,o,$));let I=it(e[0].dataType),M=it(1,$);return`

      ${k.registerUniforms(C).declareVariables(...O)}
      var<workgroup> sum_shared : array<${M}, ${x}>;
      var<workgroup> sum_squared_shared : array<${M}, ${x}>;

      ${k.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":I+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${un(I,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Yr("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Yr("square_sum",$)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${_?"mean_output[global_idx] = mean;":""}
        ${y?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${I}(mean)`}) *
            ${I}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:o,dataType:e[0].dataType}];return r>1&&S.push({dims:p,dataType:1}),r>2&&S.push({dims:p,dataType:1}),r>3&&S.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${_};${y};${w}`,inputDependencies:e.map((k,C)=>"type")},getShaderSource:E,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:v})}},K0=(e,t)=>{j0(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(H0(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Y0,Gn,X0,Ll,Z0,Q0,J0,e3,Lw=U(()=>{ue(),ce(),qe(),pe(),Y0=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},Gn=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},X0=(e,t)=>{if(e.length>1){let r=Gn(e,1),i=Gn(e,2),a=Gn(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),$e({starts:r,ends:i,axes:a})}else return t},Ll=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},Z0=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${X("uniforms.input_shape","i",r.length)};
            let steps_i = ${X("uniforms.steps","i",r.length)};
            let signs_i = ${X("uniforms.signs","i",r.length)};
            let starts_i = ${X("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Q0=(e,t)=>{let r=e[0].dims,i=z.size(r),a=t.axes.length>0?z.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=Gn(e,4);n.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map(($,v)=>Ll($,v,r,a,n)),o=t.ends.map(($,v)=>Ll($,v,r,a,n));if(a.length!==s.length||a.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let $=0;$<r.length;++$)a.includes($)||(s.splice($,0,0),o.splice($,0,r[$]),n.splice($,0,1));let l=n.map($=>Math.sign($));n.forEach(($,v,E)=>{if($<0){let S=(o[v]-s[v])/$,k=s[v],C=k+S*n[v];s[v]=C,o[v]=k,E[v]=-$}});let d=r.slice(0);a.forEach(($,v)=>{d[$]=Math.ceil((o[$]-s[$])/n[$])});let p={dims:d,dataType:e[0].dataType},f=H("output",e[0].dataType,d.length),m=N("input",e[0].dataType,e[0].dims.length),_=z.size(d),y=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:n.length}],w=[{type:12,data:_},{type:12,data:s},{type:6,data:l},{type:12,data:n},...J(e[0].dims,d)],x=$=>`
      ${$.registerUniforms(y).declareVariables(m,f)}
        ${Z0(m,f,r)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:w})}},J0=(e,t)=>{Y0(e.inputs,t);let r=X0(e.inputs,t);e.compute(Q0(e.inputs,r),{inputs:[0]})},e3=e=>{let t=e.starts,r=e.ends,i=e.axes;return $e({starts:t,ends:r,axes:i})}}),t3,r3,i3,n3,Pw=U(()=>{ue(),ce(),qe(),Xr(),pe(),t3=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},r3=(e,t)=>{let r=e.inputs[0],i=r.dims,a=z.size(i),n=i.length,s=z.normalizeAxis(t.axis,n),o=s<i.length-1,l,d=[];o?(d=Array.from({length:n},(O,I)=>I),d[s]=n-1,d[n-1]=s,l=e.compute(Rt(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let p=l.dims,f=p[n-1],m=a/f,_=Fe(f),y=f/_,w=64;m===1&&(w=256);let x=(O,I)=>I===4?`max(max(${O}.x, ${O}.y), max(${O}.z, ${O}.w))`:I===2?`max(${O}.x, ${O}.y)`:I===3?`max(max(${O}.x, ${O}.y), ${O}.z)`:O,$=N("x",l.dataType,l.dims,_),v=H("result",l.dataType,l.dims,_),E=$.type.value,S=it(l.dataType)==="f32"?`var threadMax = ${E}(-3.402823e+38f);`:`var threadMax = ${E}(-65504.0h);`,k=O=>`
      var<workgroup> rowMaxShared : ${E};
      var<workgroup> rowSumShared : ${E};
      var<workgroup> threadShared : array<${E}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${E} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${E}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${O.registerUniform("packedCols","i32").declareVariables($,v)}
      ${O.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${E}(${x("threadShared[0]",_)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${E}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${E}(${Yr("threadShared[0]",_)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${E}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,C=e.compute({name:"Softmax",shaderCache:{hint:`${_};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:l.dataType}],dispatchGroup:{x:m},programUniforms:[{type:6,data:y}]}),getShaderSource:k},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(Rt(C,d),{inputs:[C]})},i3=(e,t)=>{t3(e.inputs),r3(e,t)},n3=e=>$e({axis:e.axis})}),Pl,a3,s3,o3,u3,Uw=U(()=>{ue(),ce(),pe(),Pl=e=>Array.from(e.getBigInt64Array(),Number),a3=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Pl(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},s3=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},o3=(e,t)=>{let r=e[0].dims,i=t??Pl(e[1]),a=s3(r,i),n=z.size(a),s=e[0].dataType,o=N("input",s,r.length),l=H("output",s,a.length),d=p=>`
      const inputShape = ${o.indices(...r)};
      ${p.registerUniform("output_size","u32").declareVariables(o,l)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...J(e[0].dims,a)]}),getShaderSource:d}},u3=e=>{a3(e.inputs),e.compute(o3(e.inputs),{inputs:[0]})}}),l3,d3,c3,Fw=U(()=>{ue(),ce(),pe(),l3=(e,t,r,i,a)=>{let n=H("output_data",a,r.length,4),s=N("a_data",t[1].dataType,t[1].dims.length,4),o=N("b_data",t[2].dataType,t[2].dims.length,4),l=N("c_data",t[0].dataType,t[0].dims.length,4),d,p=(f,m,_)=>`select(${m}, ${f}, ${_})`;if(!i)d=n.setByOffset("global_idx",p(s.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(m,_,y="")=>{let w=`a_data[index_a${_}][component_a${_}]`,x=`b_data[index_b${_}][component_b${_}]`,$=`bool(c_data[index_c${_}] & (0xffu << (component_c${_} * 8)))`;return`
            let output_indices${_} = ${n.offsetToIndices(`global_idx * 4u + ${_}u`)};
            let offset_a${_} = ${s.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let offset_b${_} = ${o.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let offset_c${_} = ${l.broadcastedIndicesToOffset(`output_indices${_}`,n)};
            let index_a${_} = offset_a${_} / 4u;
            let index_b${_} = offset_b${_} / 4u;
            let index_c${_} = offset_c${_} / 4u;
            let component_a${_} = offset_a${_} % 4u;
            let component_b${_} = offset_b${_} % 4u;
            let component_c${_} = offset_c${_} % 4u;
            ${m}[${_}] = ${y}(${p(w,x,$)});
          `};a===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,o,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},d3=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(z.areEqual(t,r)&&z.areEqual(r,i)),s=t,o=z.size(t);if(n){let d=sn.calcShape(sn.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=z.size(s)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>l3(d,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...J(i,t,r,s)]})}},c3=e=>{e.compute(d3(e.inputs))}}),p3,Gw=U(()=>{rw(),tl(),iw(),nw(),aw(),sw(),ow(),pw(),fw(),mw(),gw(),_w(),yw(),bw(),ww(),vw(),$w(),xw(),Ew(),Tw(),Sw(),kw(),Aw(),Cw(),Iw(),Eg(),Ow(),zw(),Rw(),Mw(),Nw(),Qu(),Bw(),Mg(),Dw(),Lw(),Pw(),Og(),Uw(),Xr(),al(),Fw(),p3=new Map([["Abs",[jm]],["Acos",[Hm]],["Acosh",[Km]],["Add",[N1]],["ArgMax",[Om,el]],["ArgMin",[Im,el]],["Asin",[Ym]],["Asinh",[Xm]],["Atan",[Zm]],["Atanh",[Qm]],["Attention",[Dm]],["AveragePool",[d0,l0]],["BatchNormalization",[Fm]],["BiasAdd",[Wm]],["BiasSplitGelu",[z1]],["Cast",[e1,Jm]],["Ceil",[i1]],["Clip",[r1]],["Concat",[Y1,X1]],["Conv",[yl,gl]],["ConvTranspose",[x2,w2]],["Cos",[n1]],["Cosh",[a1]],["CumSum",[T2,S2]],["DepthToSpace",[I2,O2]],["DequantizeLinear",[b0,w0]],["Div",[B1]],["Einsum",[D2,L2]],["Elu",[s1,Bn]],["Equal",[D1]],["Erf",[o1]],["Exp",[u1]],["Expand",[G2]],["FastGelu",[W2]],["Floor",[l1]],["FusedConv",[yl,gl]],["Gather",[K2,H2]],["GatherElements",[ag,ng]],["GatherBlockQuantized",[eg,tg]],["GatherND",[X2,Z2]],["Gelu",[d1]],["Gemm",[lg,ug]],["GlobalAveragePool",[p0,c0]],["GlobalMaxPool",[g0,m0]],["Greater",[F1]],["GreaterOrEqual",[V1]],["GridSample",[yg,bg]],["GroupQueryAttention",[Lg]],["HardSigmoid",[y1,_1]],["InstanceNormalization",[Fg]],["LayerNormalization",[Wg]],["LeakyRelu",[c1,Bn]],["Less",[G1]],["LessOrEqual",[W1]],["Log",[S1]],["MatMul",[jg]],["MatMulNBits",[Xg,Zg]],["MaxPool",[h0,f0]],["Mul",[L1]],["MultiHeadAttention",[xg,vg]],["Neg",[h1]],["Not",[p1]],["Pad",[s0]],["Pow",[P1]],["QuickGelu",[C1,Bn]],["Range",[x0]],["Reciprocal",[f1]],["ReduceMin",[Tm]],["ReduceMean",[wm]],["ReduceMax",[Em]],["ReduceSum",[km]],["ReduceProd",[Sm]],["ReduceL1",[vm]],["ReduceL2",[$m]],["ReduceLogSum",[Cm]],["ReduceLogSumExp",[xm]],["ReduceSumSquare",[Am]],["Relu",[m1]],["Resize",[W0,q0]],["RotaryEmbedding",[Rg]],["ScatterND",[k0,S0]],["Sigmoid",[g1]],["Sin",[b1]],["Sinh",[w1]],["Slice",[J0,e3]],["SkipLayerNormalization",[K0]],["Split",[Cg,Ig]],["Sqrt",[v1]],["Softmax",[i3,n3]],["Sub",[U1]],["Tan",[$1]],["Tanh",[x1]],["ThresholdedRelu",[T1,Bn]],["Tile",[u3]],["Transpose",[Ff,Gf]],["Where",[c3]]])}),h3,Vw=U(()=>{Ht(),Ir(),pe(),h3=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){fr(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});a&&o.push({binding:o.length,resource:a});let l=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),er(e.programInfo.name)}dispose(){}build(e,t){fr(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let a=Nf(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,o=r.createShaderModule({code:s,label:e.name});_e("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return er(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),f3={};nn(f3,{WebGpuBackend:()=>y3});var m3,g3,_3,y3,Ww=U(()=>{Ht(),ue(),Ir(),vf(),ew(),Gw(),Vw(),m3=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},g3=(e,t,r)=>{var a,n;let i=e.name;return(a=e.shaderCache)!=null&&a.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${m3(t,((n=e.shaderCache)==null?void 0:n.inputDependencies)??new Array(t.length).fill("dims"))}`,i},_3=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},y3=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=n=>t.features.has(n)&&r.push(n)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i),this.adapterInfo=new _3(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Of(this),this.programManager=new h3(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Nu(e.logLevel,!!e.debug),this.device.onuncapturederror=n=>{n.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${n.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;fr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let n=r[a],s=n.kernelId,o=this.kernels.get(s),l=o.kernelType,d=o.kernelName,p=n.programName,f=n.inputTensorViews,m=n.outputTensorViews,_=t[a*2],y=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let w=Number(_-this.queryTimeBase),x=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(x))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map($=>({dims:$.dims,dataType:Cr($.dataType)})),outputsMetadata:m.map($=>({dims:$.dims,dataType:Cr($.dataType)})),kernelId:s,kernelType:l,kernelName:d,programName:p,startTime:w,endTime:x});else{let $="";f.forEach((E,S)=>{$+=`input[${S}]: [${E.dims}] | ${Cr(E.dataType)}, `});let v="";m.forEach((E,S)=>{v+=`output[${S}]: [${E.dims}] | ${Cr(E.dataType)}, `}),console.log(`[profiling] kernel "${s}|${l}|${d}|${p}" ${$}${v}start time: ${w} ns, execution time: ${x-w} ns`)}Ha("GPU",`${p}::${_}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),er()}run(e,t,r,i,a,n){fr(e.name);let s=[];for(let v=0;v<t.length;++v){let E=t[v].data;if(E===0)continue;let S=this.gpuDataManager.get(E);if(!S)throw new Error(`no GPU data for input: ${E}`);s.push(S)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),p=r.length===0?o.map((v,E)=>E):r;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let f=[],m=[];for(let v=0;v<o.length;++v){if(!Number.isInteger(p[v])||p[v]<-3||p[v]>=n)throw new Error(`Invalid output index: ${p[v]}`);if(p[v]===-3)continue;let E=p[v]===-1,S=p[v]===-2,k=E||S?a(o[v].dataType,o[v].dims):i(p[v],o[v].dataType,o[v].dims);if(f.push(k),k.data===0)continue;let C=this.gpuDataManager.get(k.data);if(!C)throw new Error(`no GPU data for output: ${k.data}`);if(E&&this.temporaryData.push(C),S){let O=this.kernelPersistentData.get(this.currentKernelId);O||(O=[],this.kernelPersistentData.set(this.currentKernelId,O)),O.push(C)}m.push(C)}if(s.length!==t.length||m.length!==f.length){if(m.length===0)return er(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let _;if(d){let v=0,E=[];d.forEach(O=>{let I=typeof O.data=="number"?[O.data]:O.data;if(I.length===0)return;let M=O.type===10?2:4,G,te;O.type===10?(te=I.length>4?16:I.length>2?8:I.length*M,G=I.length>4?16:M*I.length):(te=I.length<=2?I.length*M:16,G=16),v=Math.ceil(v/te)*te,E.push(v);let j=O.type===10?8:4;v+=I.length>4?Math.ceil(I.length/j)*G:I.length*M});let S=16;v=Math.ceil(v/S)*S;let k=new ArrayBuffer(v);d.forEach((O,I)=>{let M=E[I],G=typeof O.data=="number"?[O.data]:O.data;if(O.type===6)new Int32Array(k,M,G.length).set(G);else if(O.type===12)new Uint32Array(k,M,G.length).set(G);else if(O.type===10)new Uint16Array(k,M,G.length).set(G);else if(O.type===1)new Float32Array(k,M,G.length).set(G);else throw new Error(`Unsupported uniform type: ${Cr(O.type)}`)});let C=this.gpuDataManager.create(v,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,k,0,v),this.gpuDataManager.release(C.id),_={offset:0,size:v,buffer:C.buffer}}let y=this.programManager.normalizeDispatchGroupSize(l),w=y[1]===1&&y[2]===1,x=g3(e,t,w),$=this.programManager.getArtifact(x);if($||($=this.programManager.build(e,y),this.programManager.setArtifact(x,$),_e("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),d&&$.uniformVariablesInfo){if(d.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${d.length} in program "${$.programInfo.name}".`);for(let v=0;v<d.length;v++){let E=d[v],S=E.type,k=typeof E.data=="number"?1:E.data.length,[C,O]=$.uniformVariablesInfo[v];if(S!==C||k!==O)throw new Error(`Uniform variable ${v} mismatch: expect type ${C} with size ${O}, got type ${S} with size ${k} in program "${$.programInfo.name}".`)}}if(_e("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${y[0]}x${y[1]}x${y[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let v={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(v),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(v)}return this.programManager.run($,s,m,y,_),er(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=p3.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),_e("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${a}] ${n}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Hu(this,e,t);return Bu(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){_e("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){_e("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){_e("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),b3={};nn(b3,{init:()=>v3});var cs,w3,v3,qw=U(()=>{ue(),Ir(),ce(),Jb(),cs=class ny{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(z.size(t)!==z.size(this.dims))throw new Error("Invalid new shape");return new ny(this.module,this.dataType,this.data,t)}},w3=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let o=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*a++,n)),p=Number(e.getValue(i*a++,"*")),f=Number(e.getValue(i*a++,n)),m=[];for(let _=0;_<f;_++)m.push(Number(e.getValue(i*a++,n)));o.push(new cs(e,d,p,m))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,i=(t==null?void 0:t.outputs)??[],a=(o,l,d)=>new cs(this.module,l,this.output(o,d),d),n=(o,l)=>{let d=_i(o,l);if(!d)throw new Error(`Unsupported data type: ${o}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new cs(this.module,o,p,l)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},v3=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(Ww(),An(f3)).WebGpuBackend,s=new n;await s.initialize(r,i),a("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,l,d,p=!1)=>{if(p)_e("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(o),Number(l));else{_e("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(l),f)}},async(o,l,d)=>{_e("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>s.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>s.releaseKernel(o),(o,l,d,p)=>{_e("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let f=new w3(t,s,Number(l));return s.computeKernel(Number(o),f,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new kf(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,o,l,d,p)=>n.ensureTensor(s,o,l,d,p),(s,o)=>{n.uploadTensor(s,o)},async(s,o)=>n.downloadTensor(s,o),(s,o)=>n.registerMLContext(s,o),!!r.trace])}}}),$3,Ul,Fl,Zr,x3,Gl,ps,Vl,Wl,ql,jl,Hl,Kl,E3=U(()=>{Ht(),Xb(),Zb(),ue(),mi(),Iu(),cf(),$3=(e,t)=>{Oe()._OrtInit(e,t)!==0&&Te("Can't initialize onnxruntime.")},Ul=async e=>{$3(e.wasm.numThreads,Qa(e.logLevel))},Fl=async(e,t)=>{var i,a;(a=(i=Oe()).asyncInit)==null||a.call(i);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let n=(qw(),An(b3)).init;t==="webgpu"&&await n("webgpu",Oe(),e,r),t==="webnn"&&await n("webnn",Oe(),e)}},Zr=new Map,x3=e=>{let t=Oe(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&Te("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},Gl=(e,t)=>{let r=Oe(),i=r.stackSave(),a=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&Te("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));a=Number(r.getValue(s+n,"*"));let l=r.HEAP32[a/4];if(l===0)return[o,0];let d=r.HEAPU32[a/4+1],p=[];for(let f=0;f<d;f++){let m=Number(r.getValue(a+8+f*n,"*"));p.push(m!==0?r.UTF8ToString(m):Number(r.getValue(a+8+(f+d)*n,"*")))}return[o,l,p]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},ps=e=>{let t=Oe(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Vl=async(e,t)=>{var f,m,_,y;let r,i,a=Oe();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=ps(e);let n=0,s=0,o=0,l=[],d=[],p=[];try{if([s,l]=await df(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let I=[];for(let M of t.externalData){let G=typeof M=="string"?M:M.path;I.push(Mu(typeof M=="string"?M:M.data).then(te=>{a.mountExternalData(G,te)}))}await Promise.all(I)}for(let I of(t==null?void 0:t.executionProviders)??[])if((typeof I=="string"?I:I.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof I!="string"){let M=I,G=M==null?void 0:M.context,te=M==null?void 0:M.gpuDevice,j=M==null?void 0:M.deviceType,W=M==null?void 0:M.powerPreference;G?a.currentContext=G:te?a.currentContext=await a.webnnCreateMLContext(te):a.currentContext=await a.webnnCreateMLContext({deviceType:j,powerPreference:W})}else a.currentContext=await a.webnnCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),(f=a.webgpuOnCreateSession)==null||f.call(a,n),n===0&&Te("Can't create a session."),(m=a.jsepOnCreateSession)==null||m.call(a),a.currentContext&&(a.webnnRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[w,x]=x3(n),$=!!(t!=null&&t.enableGraphCapture),v=[],E=[],S=[],k=[],C=[];for(let I=0;I<w;I++){let[M,G,te]=Gl(n,I);M===0&&Te("Can't get an input name."),d.push(M);let j=a.UTF8ToString(M);v.push(j),S.push(G===0?{name:j,isTensor:!1}:{name:j,isTensor:!0,type:Cr(G),shape:te})}for(let I=0;I<x;I++){let[M,G,te]=Gl(n,I+w);M===0&&Te("Can't get an output name."),p.push(M);let j=a.UTF8ToString(M);E.push(j),k.push(G===0?{name:j,isTensor:!1}:{name:j,isTensor:!0,type:Cr(G),shape:te});{if($&&(t==null?void 0:t.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let W=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((_=t==null?void 0:t.preferredOutputLocation)==null?void 0:_[j])??"cpu",me=a.webnnIsGraphOutput;if(W==="cpu"&&me&&me(n,j)){C.push("ml-tensor-cpu-output");continue}if(W!=="cpu"&&W!=="cpu-pinned"&&W!=="gpu-buffer"&&W!=="ml-tensor")throw new Error(`Not supported preferred output location: ${W}.`);if($&&W!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${W}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(W)}}let O=null;return C.some(I=>I==="gpu-buffer"||I==="ml-tensor"||I==="ml-tensor-cpu-output")&&(o=a._OrtCreateBinding(n),o===0&&Te("Can't create IO binding."),O={handle:o,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(I=>I==="ml-tensor-cpu-output"?"ml-tensor":I).map(I=>Ru(I))}),Zr.set(n,[n,d,p,O,$,!1]),[n,v,E,S,k]}catch(w){throw d.forEach(x=>a._OrtFree(x)),p.forEach(x=>a._OrtFree(x)),o!==0&&a._OrtReleaseBinding(o)!==0&&Te("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&Te("Can't release session."),w}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&Te("Can't release session options."),l.forEach(w=>a._free(w)),(y=a.unmountExternalData)==null||y.call(a)}},Wl=e=>{var l,d,p;let t=Oe(),r=Zr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&Te("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Te("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(p=t.webgpuOnReleaseSession)==null||p.call(t,e),a.forEach(f=>t._OrtFree(f)),n.forEach(f=>t._OrtFree(f)),t._OrtReleaseSession(i)!==0&&Te("Can't release session."),Zr.delete(e)},ql=async(e,t,r,i,a,n,s=!1)=>{if(!e){t.push(0);return}let o=Oe(),l=o.PTR_SIZE,d=e[0],p=e[1],f=e[3],m=f,_,y;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let $=e[2].gpuBuffer;y=_i(gi(d),p);{let v=o.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=v(i,n,$,y)}}else if(f==="ml-tensor"){let $=e[2].mlTensor;y=_i(gi(d),p);let v=o.webnnRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=v(i,$,gi(d),p)}else{let $=e[2];if(Array.isArray($)){y=l*$.length,_=o._malloc(y),r.push(_);for(let v=0;v<$.length;v++){if(typeof $[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);o.setValue(_+v*l,tr($[v],r),"*")}}else{let v=o.webnnIsGraphInput,E=o.webnnIsGraphOutput;if(d!=="string"&&v&&E){let S=o.UTF8ToString(a);if(v(i,S)||E(i,S)){let k=gi(d);y=_i(k,p),m="ml-tensor";let C=o.webnnCreateTemporaryTensor,O=o.webnnUploadTensor;if(!C||!O)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let I=await C(i,k,p);O(I,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),_=I}else y=$.byteLength,_=o._malloc(y),r.push(_),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,y),_)}else y=$.byteLength,_=o._malloc(y),r.push(_),o.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,y),_)}}let w=o.stackSave(),x=o.stackAlloc(4*p.length);try{p.forEach((v,E)=>o.setValue(x+E*l,v,l===4?"i32":"i64"));let $=o._OrtCreateTensor(gi(d),_,y,x,p.length,Ru(m));$===0&&Te(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push($)}finally{o.stackRestore(w)}},jl=async(e,t,r,i,a,n)=>{var te,j,W,me;let s=Oe(),o=s.PTR_SIZE,l=Zr.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],p=l[1],f=l[2],m=l[3],_=l[4],y=l[5],w=t.length,x=i.length,$=0,v=[],E=[],S=[],k=[],C=s.stackSave(),O=s.stackAlloc(w*o),I=s.stackAlloc(w*o),M=s.stackAlloc(x*o),G=s.stackAlloc(x*o);try{[$,v]=af(n),hi("wasm prepareInputOutputTensor");for(let Q=0;Q<w;Q++)await ql(r[Q],E,k,e,p[t[Q]],t[Q],_);for(let Q=0;Q<x;Q++)await ql(a[Q],S,k,e,f[i[Q]],w+i[Q],_);fi("wasm prepareInputOutputTensor");for(let Q=0;Q<w;Q++)s.setValue(O+Q*o,E[Q],"*"),s.setValue(I+Q*o,p[t[Q]],"*");for(let Q=0;Q<x;Q++)s.setValue(M+Q*o,S[Q],"*"),s.setValue(G+Q*o,f[i[Q]],"*");if(m&&!y){let{handle:Q,outputPreferredLocations:se,outputPreferredLocationsEncoded:Ae}=m;if(p.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${p.length}).`);hi("wasm bindInputsOutputs");for(let D=0;D<w;D++){let V=t[D];await s._OrtBindInput(Q,p[V],E[D])!==0&&Te(`Can't bind input[${D}] for session=${e}.`)}for(let D=0;D<x;D++){let V=i[D];(te=a[D])!=null&&te[3]?s._OrtBindOutput(Q,f[V],S[D],0)!==0&&Te(`Can't bind pre-allocated output[${D}] for session=${e}.`):s._OrtBindOutput(Q,f[V],0,Ae[V])!==0&&Te(`Can't bind output[${D}] to ${se[D]} for session=${e}.`)}fi("wasm bindInputsOutputs"),Zr.set(e,[d,p,f,m,_,!0])}(j=s.jsepOnRunStart)==null||j.call(s,d),(W=s.webnnOnRunStart)==null||W.call(s,d);let de;m?de=await s._OrtRunWithBinding(d,m.handle,x,M,$):de=await s._OrtRun(d,I,O,w,G,x,M,$),de!==0&&Te("failed to call OrtRun().");let Z=[],he=[];hi("wasm ProcessOutputTensor");for(let Q=0;Q<x;Q++){let se=Number(s.getValue(M+Q*o,"*"));if(se===S[Q]){Z.push(a[Q]);continue}let Ae=s.stackSave(),D=s.stackAlloc(4*o),V=!1,q,ie=0;try{s._OrtGetTensorData(se,D,D+o,D+2*o,D+3*o)!==0&&Te(`Can't access output tensor data on index ${Q}.`);let et=o===4?"i32":"i64",_r=Number(s.getValue(D,et));ie=s.getValue(D+o,"*");let P=s.getValue(D+o*2,"*"),Ce=Number(s.getValue(D+o*3,et)),Mt=[];for(let Se=0;Se<Ce;Se++)Mt.push(Number(s.getValue(P+Se*o,et)));s._OrtFree(P)!==0&&Te("Can't free memory for tensor dims.");let mt=Mt.reduce((Se,Ge)=>Se*Ge,1);q=Cr(_r);let Rr=m==null?void 0:m.outputPreferredLocations[i[Q]];if(q==="string"){if(Rr==="gpu-buffer"||Rr==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Se=[];for(let Ge=0;Ge<mt;Ge++){let Nt=s.getValue(ie+Ge*o,"*"),Si=s.getValue(ie+(Ge+1)*o,"*"),ki=Ge===mt-1?void 0:Si-Nt;Se.push(s.UTF8ToString(Nt,ki))}Z.push([q,Mt,Se,"cpu"])}else if(Rr==="gpu-buffer"&&mt>0){let Se=s.jsepGetBuffer;if(!Se)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Ge=Se(ie),Nt=_i(_r,mt);if(Nt===void 0||!Ou(q))throw new Error(`Unsupported data type: ${q}`);V=!0,Z.push([q,Mt,{gpuBuffer:Ge,download:s.jsepCreateDownloader(Ge,Nt,q),dispose:()=>{s._OrtReleaseTensor(se)!==0&&Te("Can't release tensor.")}},"gpu-buffer"])}else if(Rr==="ml-tensor"&&mt>0){let Se=s.webnnEnsureTensor,Ge=s.webnnIsGraphInputOutputTypeSupported;if(!Se||!Ge)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(_i(_r,mt)===void 0||!zu(q))throw new Error(`Unsupported data type: ${q}`);if(!Ge(e,q,!1))throw new Error(`preferredLocation "ml-tensor" for ${q} output is not supported by current WebNN Context.`);let Nt=await Se(e,ie,_r,Mt,!1);V=!0,Z.push([q,Mt,{mlTensor:Nt,download:s.webnnCreateMLTensorDownloader(ie,q),dispose:()=>{s.webnnReleaseTensorId(ie),s._OrtReleaseTensor(se)}},"ml-tensor"])}else if(Rr==="ml-tensor-cpu-output"&&mt>0){let Se=s.webnnCreateMLTensorDownloader(ie,q)(),Ge=Z.length;V=!0,he.push((async()=>{let Nt=[Ge,await Se];return s.webnnReleaseTensorId(ie),s._OrtReleaseTensor(se),Nt})()),Z.push([q,Mt,[],"cpu"])}else{let Se=Za(q),Ge=new Se(mt);new Uint8Array(Ge.buffer,Ge.byteOffset,Ge.byteLength).set(s.HEAPU8.subarray(ie,ie+Ge.byteLength)),Z.push([q,Mt,Ge,"cpu"])}}finally{s.stackRestore(Ae),q==="string"&&ie&&s._free(ie),V||s._OrtReleaseTensor(se)}}m&&!_&&(s._OrtClearBoundOutputs(m.handle)!==0&&Te("Can't clear bound outputs."),Zr.set(e,[d,p,f,m,_,!1]));for(let[Q,se]of await Promise.all(he))Z[Q][2]=se;return fi("wasm ProcessOutputTensor"),Z}finally{(me=s.webnnOnRunEnd)==null||me.call(s,d),s.stackRestore(C),E.forEach(de=>s._OrtReleaseTensor(de)),S.forEach(de=>s._OrtReleaseTensor(de)),k.forEach(de=>s._free(de)),$!==0&&s._OrtReleaseRunOptions($),v.forEach(de=>s._free(de))}},Hl=e=>{let t=Oe(),r=Zr.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&Te("Can't get an profile file name."),t._OrtFree(a)},Kl=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),Qr,vt,ln,Vn,Wn,hs,Yl,fs,Ei,Ti,T3,S3,k3,A3,C3,I3,O3,z3,R3=U(()=>{Ht(),E3(),mi(),Su(),Qr=()=>!!Re.wasm.proxy&&typeof document<"u",ln=!1,Vn=!1,Wn=!1,fs=new Map,Ei=(e,t)=>{let r=fs.get(e);r?r.push(t):fs.set(e,[t])},Ti=()=>{if(ln||!Vn||Wn||!vt)throw new Error("worker not ready")},T3=e=>{switch(e.data.type){case"init-wasm":ln=!1,e.data.err?(Wn=!0,Yl[1](e.data.err)):(Vn=!0,Yl[0]()),hs&&(URL.revokeObjectURL(hs),hs=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=fs.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},S3=async()=>{if(!Vn){if(ln)throw new Error("multiple calls to 'initWasm()' detected.");if(Wn)throw new Error("previous call to 'initWasm()' failed.");if(ln=!0,Qr())return new Promise((e,t)=>{vt==null||vt.terminate(),Jh().then(([r,i])=>{try{vt=i,vt.onerror=n=>t(n),vt.onmessage=T3,Yl=[e,t];let a={type:"init-wasm",in:Re};!a.in.wasm.wasmPaths&&(r||$u)&&(a.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-BGTZ4Y7F.wasm",self.location.href).href}),vt.postMessage(a),hs=r}catch(a){t(a)}},t)});try{await Cu(Re.wasm),await Ul(Re),Vn=!0}catch(e){throw Wn=!0,e}finally{ln=!1}}},k3=async e=>{if(Qr())return Ti(),new Promise((t,r)=>{Ei("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:Re}};vt.postMessage(i)});await Fl(Re,e)},A3=async e=>Qr()?(Ti(),new Promise((t,r)=>{Ei("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};vt.postMessage(i,[e.buffer])})):ps(e),C3=async(e,t)=>{if(Qr()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Ti(),new Promise((r,i)=>{Ei("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),vt.postMessage(a,n)})}else return Vl(e,t)},I3=async e=>{if(Qr())return Ti(),new Promise((t,r)=>{Ei("release",[t,r]);let i={type:"release",in:e};vt.postMessage(i)});Wl(e)},O3=async(e,t,r,i,a,n)=>{if(Qr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Ti(),new Promise((s,o)=>{Ei("run",[s,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:n}};vt.postMessage(d,Kl(l))})}else return jl(e,t,r,i,a,n)},z3=async e=>{if(Qr())return Ti(),new Promise((t,r)=>{Ei("end-profiling",[t,r]);let i={type:"end-profiling",in:e};vt.postMessage(i)});Hl(e)}}),Xl,M3,N3,jw=U(()=>{Ht(),R3(),ue(),_u(),cf(),Xl=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},M3=e=>{switch(e[3]){case"cpu":return new Jt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ou(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Jt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!zu(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Jt.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},N3=class{async fetchModelAndCopyToWasmMemory(e){return A3(await Mu(e))}async loadModel(e,t){fr();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await C3(r,t),er()}async dispose(){return I3(this.sessionId)}async run(e,t,r){fr();let i=[],a=[];Object.entries(e).forEach(f=>{let m=f[0],_=f[1],y=this.inputNames.indexOf(m);if(y===-1)throw new Error(`invalid input '${m}'`);i.push(_),a.push(y)});let n=[],s=[];Object.entries(t).forEach(f=>{let m=f[0],_=f[1],y=this.outputNames.indexOf(m);if(y===-1)throw new Error(`invalid output '${m}'`);n.push(_),s.push(y)});let o=i.map((f,m)=>Xl(f,()=>`input "${this.inputNames[a[m]]}"`)),l=n.map((f,m)=>f?Xl(f,()=>`output "${this.outputNames[s[m]]}"`):null),d=await O3(this.sessionId,a,o,s,l,r),p={};for(let f=0;f<d.length;f++)p[this.outputNames[s[f]]]=n[f]??M3(d[f]);return er(),p}startProfiling(){}endProfiling(){z3(this.sessionId)}}}),B3={};nn(B3,{OnnxruntimeWebAssemblyBackend:()=>Ql,initializeFlags:()=>Zl,wasmBackend:()=>D3});var Zl,Ql,D3,Hw=U(()=>{Ht(),R3(),jw(),Zl=()=>{(typeof Re.wasm.initTimeout!="number"||Re.wasm.initTimeout<0)&&(Re.wasm.initTimeout=0);let e=Re.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Re.wasm.simd=!1),typeof Re.wasm.proxy!="boolean"&&(Re.wasm.proxy=!1),typeof Re.wasm.trace!="boolean"&&(Re.wasm.trace=!1),typeof Re.wasm.numThreads!="number"||!Number.isInteger(Re.wasm.numThreads)||Re.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Re.wasm.numThreads=1;else{let t=typeof navigator>"u"?zb("node:os").cpus().length:navigator.hardwareConcurrency;Re.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ql=class{async init(e){Zl(),await S3(),await k3(e)}async createInferenceSessionHandler(e,t){let r=new N3;return await r.loadModel(e,t),r}},D3=new Ql});Ht(),Ht(),Ht();var Kw="1.23.2";{let e=(Hw(),An(B3)).wasmBackend;an("webgpu",e,5),an("webnn",e,5),an("cpu",e,10),an("wasm",e,10)}Object.defineProperty(Re.versions,"web",{value:Kw,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ge={FACE:{MIN_DETECTION_CONFIDENCE:.5,MIN_TRACKING_CONFIDENCE:.5,YAW_THRESHOLD:.25,PITCH_THRESHOLD:.2,CONSECUTIVE_FRAMES:5,MIN_LANDMARKS_FOR_POSE:468,LEFT_IRIS:[468,469,470,471,472],RIGHT_IRIS:[473,474,475,476,477],LEFT_EYE:[33,7,163,144,145,153,154,155,133,173,157,158,159,160,161,246],RIGHT_EYE:[362,382,381,380,374,373,390,249,263,466,388,387,386,385,384,398],UPPER_LIP:[61,185,40,39,37,0,267,269,270,409,291],LOWER_LIP:[146,91,181,84,17,314,405,321,375,291],EYE_GAZE_THRESHOLD:.15,LIP_MOVEMENT_THRESHOLD:.02,BLINK_THRESHOLD:.2},YOLO:{MODEL_PATH:"/models/anticheat_yolo11s.onnx",INPUT_SIZE:640,CONFIDENCE_THRESHOLD:.01,IOU_THRESHOLD:.45,CLASSES:["person","phone","material","headphones"],ALERT_CLASSES:["phone","material","headphones"],MASK_COEFFICIENTS:32,MULTI_PERSON_ALERT:!0},CASCADE:{YOLO_ACTIVATION_SECONDS:3},ADVANCED:{LIP_MOVEMENT_FRAMES:10,LIP_ALERT_THRESHOLD:5,BLINK_RATE_WINDOW:3e4,ABNORMAL_BLINK_RATE_LOW:5,ABNORMAL_BLINK_RATE_HIGH:40}};let Jl=null,or=null,gr=0,dn=0,L3=0,ed=!1;const Yw=500;let zr=null,Jr=[],qn=0,jn=[],P3=0,U3=0,F3=0;async function G3(){self.postMessage({type:"STATUS",payload:"Đang tải model AI...",code:"aiLoading"});const e=(t,r,i)=>Promise.race([t,new Promise((a,n)=>setTimeout(()=>n(new Error(`${i} timeout after ${r}ms`)),r))]);try{const t="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.18/wasm",r="https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",i=await e(ci.forVisionTasks(t),1e4,"MediaPipe WASM");let a=["GPU","CPU"],n=null;for(const s of a)try{Jl=await e(We.createFromOptions(i,{baseOptions:{modelAssetPath:r,delegate:s},runningMode:"IMAGE",numFaces:1,minFaceDetectionConfidence:ge.FACE.MIN_DETECTION_CONFIDENCE,minTrackingConfidence:ge.FACE.MIN_TRACKING_CONFIDENCE,outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!0}),15e3,`FaceLandmarker (${s})`),console.log(`MediaPipe Face Landmarker loaded successfully with ${s} delegate`),n=null;break}catch(o){console.warn(`Failed to load MediaPipe with ${s} delegate:`,o.message),n=o}if(n)throw n;self.postMessage({type:"STATUS",payload:"Đang tải YOLO...",code:"yoloLoading"});try{Re.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.20.1/dist/";const s=ge.YOLO.MODEL_PATH,o=self.location.origin||"",l=s.startsWith("/")?o+s:s,d=s.split("/").pop();console.log("Attempting to load YOLO model from:",l),console.log("Worker origin:",self.location.origin);let p=null;const f=[l,s,`./models/${d}`];for(const m of f)try{console.log("Trying to load from:",m),or=await gu.create(m,{executionProviders:["wasm"],graphOptimizationLevel:"all"}),console.log("✅ Successfully loaded from:",m),p=null;break}catch(_){console.warn("Failed to load from",m,":",_.message),p=_}if(p)throw p;console.log("✅ YOLO model loaded successfully!"),console.log("Input names:",or.inputNames),console.log("Output names:",or.outputNames),or.inputNames&&or.inputNames.length>0&&(console.log("Model is ready for inference with custom trained classes:",ge.YOLO.CLASSES),console.log("Confidence threshold:",ge.YOLO.CONFIDENCE_THRESHOLD)),self.postMessage({type:"STATUS",payload:"AI proctoring active (Face + YOLO)",code:"monitoring"})}catch(s){console.warn("YOLO model not available"),console.warn("Error details:",s.message),console.warn("Stack:",s.stack),self.postMessage({type:"STATUS",payload:"Face monitoring active (YOLO unavailable)",code:"faceOnly"})}ed=!0}catch(t){console.error("AI initialization error:",t),self.postMessage({type:"STATUS",payload:"Lỗi khởi tạo AI - Sử dụng chế độ cơ bản",code:"error"}),ed=!0}}function Xw(e,t){if(!e||e.length<ge.FACE.MIN_LANDMARKS_FOR_POSE)return{yaw:0,pitch:0,roll:0,isValid:!1};if(t){const m=t.data,_=Math.atan2(m[8],m[10]),y=Math.asin(-m[9]),w=Math.atan2(m[1],m[5]);return{yaw:_,pitch:y,roll:w,isValid:!0}}const r=e[1],i=e[33],a=e[263],n=e[152],s=e[10],o={x:(i.x+a.x)/2,y:(i.y+a.y)/2},l=(r.x-o.x)*2,d=Math.abs(n.y-s.y),f=((r.y-s.y)/d-.5)*2;return{yaw:l,pitch:f,roll:0,isValid:!0}}function Zw(e){if(!e||e.length<478)return{isLookingAway:!1,direction:null};const t=e[468],r=e[473],i=e[133],a=e[33],n=e[362],s=e[263],o=Math.abs(a.x-i.x),l=Math.abs(s.x-n.x),d=(i.x+a.x)/2,p=(n.x+s.x)/2,f=(t.x-d)/o,m=(r.x-p)/l,_=(f+m)/2;let y=null,w=!1;return _>ge.FACE.EYE_GAZE_THRESHOLD?(y="right",w=!0):_<-.15&&(y="left",w=!0),{isLookingAway:w,direction:y,gazeOffset:_}}function Qw(e){if(!e||e.length<400)return{isSpeaking:!1,lipDistance:0};const t=e[13],r=e[14],i=Math.abs(t.y-r.y);if(Jr.push(i),Jr.length>ge.ADVANCED.LIP_MOVEMENT_FRAMES&&Jr.shift(),Jr.length>=3){const n=Jr.reduce((o,l)=>o+l,0)/Jr.length;Jr.reduce((o,l)=>o+Math.pow(l-n,2),0)/Jr.length>ge.FACE.LIP_MOVEMENT_THRESHOLD?qn++:qn=Math.max(0,qn-1)}return{isSpeaking:qn>=ge.ADVANCED.LIP_ALERT_THRESHOLD,lipDistance:i,speakingFrameCount:qn}}function Jw(e){if(!e||e.length<400)return{isBlink:!1,eyeAspectRatio:0};const t=e[33],r=e[160],i=e[158],a=e[133],n=e[153],s=e[144],o=e[362],l=e[385],d=e[387],p=e[263],f=e[373],m=e[380],_=V3(t,r,i,a,n,s),y=V3(o,l,d,p,f,m),w=(_+y)/2,x=w<ge.FACE.BLINK_THRESHOLD&&P3>=ge.FACE.BLINK_THRESHOLD,$=Date.now();x&&(jn.push($),jn=jn.filter(E=>$-E<ge.ADVANCED.BLINK_RATE_WINDOW)),P3=w;const v=jn.length/ge.ADVANCED.BLINK_RATE_WINDOW*6e4;return{isBlink:x,eyeAspectRatio:w,blinkRate:v,isAbnormalBlinkRate:v<ge.ADVANCED.ABNORMAL_BLINK_RATE_LOW||v>ge.ADVANCED.ABNORMAL_BLINK_RATE_HIGH}}function V3(e,t,r,i,a,n){const s=Math.sqrt(Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2)),o=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(e.x-i.x,2)+Math.pow(e.y-i.y,2));return l===0?0:(s+o)/(2*l)}async function e4(e){var a;if(!ed){Math.random()<.02&&self.postMessage({type:"ALERT",payload:"LOOK_AT_SCREEN",code:"lookAtScreen"});return}const t=Date.now();let r=!1,i="";if(Jl)try{const n=await createImageBitmap(e),s=Jl.detect(n);if(n.close(),s.faceLandmarks.length===0)gr++,gr>=ge.FACE.CONSECUTIVE_FRAMES&&(r=!0,i="NO_FACE");else{const o=s.faceLandmarks[0],l=(a=s.facialTransformationMatrixes)==null?void 0:a[0],d=Xw(o,l);d.isValid&&(Math.abs(d.yaw)>ge.FACE.YAW_THRESHOLD?(gr++,gr>=ge.FACE.CONSECUTIVE_FRAMES&&(r=!0,i=d.yaw>0?"LOOK_RIGHT":"LOOK_LEFT")):Math.abs(d.pitch)>ge.FACE.PITCH_THRESHOLD?(gr++,gr>=ge.FACE.CONSECUTIVE_FRAMES&&(r=!0,i=d.pitch>0?"LOOK_DOWN":"LOOK_UP")):gr=Math.max(0,gr-1));const p=Zw(o);p.isLookingAway&&t-F3>8e3&&(self.postMessage({type:"GAZE_AWAY",payload:p.direction==="left"?"GAZE_LEFT":"GAZE_RIGHT",direction:p.direction}),F3=t),Qw(o).isSpeaking&&t-dn>1e4&&(self.postMessage({type:"ALERT",payload:"SPEAKING_DETECTED",code:"speakingDetected"}),dn=t);const m=Jw(o);m.isAbnormalBlinkRate&&jn.length>10&&console.log("Abnormal blink rate detected:",m.blinkRate,"bpm")}}catch(n){console.warn("Face detection error:",n)}if(or&&t-L3>=Yw){L3=t;try{const n=await t4(e);if((!self.lastDetectionLog||t-self.lastDetectionLog>5e3)&&(self.lastDetectionLog=t,console.log(`🔍 YOLO inference: ${n.length} detections (threshold: ${ge.YOLO.CONFIDENCE_THRESHOLD})`)),n.length>0){const s=n.filter(o=>ge.YOLO.ALERT_CLASSES.includes(o.class));s.length>0&&console.log("🚨 YOLO Alert Detections:",s.map(o=>`${o.class} (${(o.confidence*100).toFixed(1)}%)`))}if(ge.YOLO.MULTI_PERSON_ALERT){const s=n.filter(o=>o.class==="person"&&o.confidence>.3);s.length>1&&t-U3>1e4&&(self.postMessage({type:"ALERT",payload:"MULTI_PERSON",code:"multiPerson",count:s.length}),U3=t,console.log("🚨 Multi-person detected:",s.length,"people"))}for(const s of n)if(ge.YOLO.ALERT_CLASSES.includes(s.class)){t-dn>5e3&&(self.postMessage({type:"ALERT",payload:s.class.toUpperCase()+"_DETECTED",code:s.class+"Detected",detectedClass:s.class,confidence:s.confidence}),dn=t,self.postMessage({type:"STATUS",payload:`DETECTION_${s.class.toUpperCase()}`,code:"detection",detectedClass:s.class,confidence:s.confidence}));break}}catch(n){console.warn("YOLO inference error:",n)}}r&&gr===ge.FACE.CONSECUTIVE_FRAMES&&(self.postMessage({type:"GAZE_AWAY",payload:i,code:i}),gr>=ge.FACE.CONSECUTIVE_FRAMES*2&&t-dn>5e3&&(self.postMessage({type:"ALERT",payload:i,code:i}),dn=t)),Math.random()<.01&&self.postMessage({type:"STATUS",payload:"MONITORING",code:"monitoring"})}async function t4(e){if(!or)return[];try{const{width:t,height:r,data:i}=e,a=ge.YOLO.INPUT_SIZE,n=new Float32Array(3*a*a),s=t/a,o=r/a;for(let w=0;w<a;w++)for(let x=0;x<a;x++){const $=Math.min(Math.floor(x*s),t-1),E=(Math.min(Math.floor(w*o),r-1)*t+$)*4,S=i[E]/255,k=i[E+1]/255,C=i[E+2]/255;n[0*a*a+w*a+x]=S,n[1*a*a+w*a+x]=k,n[2*a*a+w*a+x]=C}const l=new Jt("float32",n,[1,3,a,a]),p={[or.inputNames[0]||"images"]:l},f=await or.run(p),m=or.outputNames[0]||"output0",_=f[m];return _?(self.loggedOutputInfo||(console.log("YOLO inference output:",{outputNames:or.outputNames,outputDims:_.dims,numElements:_.data.length}),self.loggedOutputInfo=!0),r4(_.data,_.dims,t,r)):(console.warn("No output tensor found"),[])}catch(t){return console.error("YOLO inference error:",t),[]}}function r4(e,t,r,i){const a=[],n=ge.YOLO.CLASSES.length,s=ge.YOLO.INPUT_SIZE,o=ge.YOLO.MASK_COEFFICIENTS;if(self.loggedDims||(console.log("🔍 YOLO Output dimensions:",t),console.log("   Expected classes:",n,"("+ge.YOLO.CLASSES.join(", ")+")"),console.log("   Expected detect channels:",4+n),console.log("   Expected seg channels:",4+n+o),self.loggedDims=!0),zr||(zr=new Array(n).fill(0)),t.length===3){const l=t[1],d=t[2],p=4+n,f=4+n+o;self.loggedFormat||(console.log("   Actual dims: [1,",l,",",d,"]"),console.log("   Determining format..."),self.loggedFormat=!0);let m=!1,_,y;if(l===p||l===f)m=!0,_=l,y=d,self.loggedFormatResult||(console.log("   ✅ Detected transposed format: [1, channels, numBoxes]"),console.log("   Channels:",_,"NumBoxes:",y),self.loggedFormatResult=!0);else if(d===p||d===f)m=!1,_=d,y=l,self.loggedFormatResult||(console.log("   ✅ Detected standard format: [1, numBoxes, channels]"),self.loggedFormatResult=!0);else if(l<d&&l<=100)m=!0,_=l,y=d,self.loggedFormatResult||(console.log("   ⚠️ Inferred transposed format from size ratio"),console.log("   Channels:",_,"NumBoxes:",y),self.loggedFormatResult=!0);else if(d<l&&d<=100)m=!1,_=d,y=l,self.loggedFormatResult||(console.log("   ⚠️ Inferred standard format from size ratio"),self.loggedFormatResult=!0);else return console.warn(`❌ Cannot determine YOLO format. Dims: [1, ${l}, ${d}]`),console.warn(`   Expected detect channels: ${p}, seg channels: ${f}`),[];let w=!1;for(let x=0;x<y;x++){let $,v,E,S,k=[];if(m){$=e[0*y+x],v=e[1*y+x],E=e[2*y+x],S=e[3*y+x];for(let I=0;I<n;I++)k.push(e[(4+I)*y+x])}else{const I=x*_;$=e[I+0],v=e[I+1],E=e[I+2],S=e[I+3];for(let M=0;M<n;M++)k.push(e[I+4+M])}!w&&x<5&&Math.max(...k)>.001&&(console.log(`   Box[${x}]: cx=${$.toFixed(1)}, cy=${v.toFixed(1)}, w=${E.toFixed(1)}, h=${S.toFixed(1)}, scores=[${k.map(M=>(M*100).toFixed(1)+"%").join(", ")}]`),w=!0);let C=0,O=0;for(let I=0;I<n;I++)k[I]>C&&(C=k[I],O=I),zr&&I<zr.length&&k[I]>zr[I]&&(zr[I]=k[I]);if(C>=ge.YOLO.CONFIDENCE_THRESHOLD){const I=r/s,M=i/s;a.push({class:ge.YOLO.CLASSES[O],confidence:C,box:{x:($-E/2)*I,y:(v-S/2)*M,width:E*I,height:S*M}})}}if(zr&&(!self.lastMaxScoreLog||Date.now()-self.lastMaxScoreLog>1e4)){self.lastMaxScoreLog=Date.now();const x=ge.YOLO.CLASSES.map(($,v)=>{const E=v<zr.length?zr[v]:0;return`${$}: ${(E*100).toFixed(2)}%`}).join(", ");console.log("📊 YOLO Max scores per class:",x),a.length>0&&console.log("   Detections found:",a.length)}}else if(t.length===2){const l=t[0],d=t[1];for(let p=0;p<l;p++){const f=p*d,m=e[f+0],_=e[f+1],y=e[f+2],w=e[f+3];let x=[];for(let E=0;E<n;E++)x.push(e[f+4+E]);let $=0,v=0;for(let E=0;E<n;E++)x[E]>$&&($=x[E],v=E);if($>=ge.YOLO.CONFIDENCE_THRESHOLD){const E=r/s,S=i/s;a.push({class:ge.YOLO.CLASSES[v],confidence:$,box:{x:(m-y/2)*E,y:(_-w/2)*S,width:y*E,height:w*S}})}}}else return console.warn("❌ Unexpected dims length:",t.length,t),[];return i4(a,ge.YOLO.IOU_THRESHOLD)}function i4(e,t){if(e.length===0)return[];e.sort((a,n)=>n.confidence-a.confidence);const r=[],i=new Set;for(let a=0;a<e.length;a++)if(!i.has(a)){r.push(e[a]);for(let n=a+1;n<e.length;n++){if(i.has(n)||e[a].class!==e[n].class)continue;n4(e[a].box,e[n].box)>t&&i.add(n)}}return r}function n4(e,t){const r=Math.max(e.x,t.x),i=Math.max(e.y,t.y),a=Math.min(e.x+e.width,t.x+t.width),n=Math.min(e.y+e.height,t.y+t.height),s=Math.max(0,a-r)*Math.max(0,n-i),o=e.width*e.height,l=t.width*t.height,d=o+l-s;return s/d}self.onmessage=async e=>{const{type:t,payload:r}=e.data;t==="INIT"?await G3():t==="PROCESS_FRAME"&&await e4(r)},G3()})();
