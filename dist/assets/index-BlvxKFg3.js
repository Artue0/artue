(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nu="160",Pg=0,Ah=1,Lg=2,vp=1,Ig=2,Ai=3,Fi=0,on=1,Tn=2,ss=0,wr=1,Rh=2,Ch=3,Ph=4,Ng=5,Cs=100,Dg=101,Ug=102,Lh=103,Ih=104,Fg=200,Og=201,Bg=202,zg=203,Zl=204,Jl=205,kg=206,Hg=207,Gg=208,Vg=209,Wg=210,Xg=211,qg=212,jg=213,Yg=214,Kg=0,$g=1,Zg=2,qa=3,Jg=4,Qg=5,e_=6,t_=7,xp=0,n_=1,i_=2,rs=0,s_=1,r_=2,o_=3,a_=4,c_=5,l_=6,Nh="attached",u_="detached",yp=300,Or=301,Br=302,Ql=303,eu=304,xc=306,zr=1e3,On=1001,ja=1002,zt=1003,tu=1004,za=1005,un=1006,Mp=1007,Gs=1008,os=1009,h_=1010,d_=1011,Du=1012,Ep=1013,Ji=1014,Ni=1015,Co=1016,Sp=1017,Tp=1018,Us=1020,f_=1021,Bn=1023,p_=1024,m_=1025,Fs=1026,kr=1027,g_=1028,bp=1029,__=1030,wp=1031,Ap=1033,Vc=33776,Wc=33777,Xc=33778,qc=33779,Dh=35840,Uh=35841,Fh=35842,Oh=35843,Rp=36196,Bh=37492,zh=37496,kh=37808,Hh=37809,Gh=37810,Vh=37811,Wh=37812,Xh=37813,qh=37814,jh=37815,Yh=37816,Kh=37817,$h=37818,Zh=37819,Jh=37820,Qh=37821,jc=36492,ed=36494,td=36495,v_=36283,nd=36284,id=36285,sd=36286,Po=2300,Hr=2301,Yc=2302,rd=2400,od=2401,ad=2402,x_=2500,y_=0,Cp=1,nu=2,Pp=3e3,Os=3001,M_=3200,E_=3201,Lp=0,S_=1,zn="",xt="srgb",Gt="srgb-linear",Uu="display-p3",yc="display-p3-linear",Ya="linear",lt="srgb",Ka="rec709",$a="p3",Qs=7680,cd=519,T_=512,b_=513,w_=514,Ip=515,A_=516,R_=517,C_=518,P_=519,iu=35044,ld="300 es",su=1035,Di=2e3,Za=2001;class Jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ud=1234567;const Ar=Math.PI/180,Gr=180/Math.PI;function Kn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[o&255]+jt[o>>8&255]+jt[o>>16&255]+jt[o>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function Kt(o,e,t){return Math.max(e,Math.min(t,o))}function Fu(o,e){return(o%e+e)%e}function L_(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function I_(o,e,t){return o!==e?(t-o)/(e-o):0}function Eo(o,e,t){return(1-t)*o+t*e}function N_(o,e,t,n){return Eo(o,e,1-Math.exp(-t*n))}function D_(o,e=1){return e-Math.abs(Fu(o,e*2)-e)}function U_(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function F_(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function O_(o,e){return o+Math.floor(Math.random()*(e-o+1))}function B_(o,e){return o+Math.random()*(e-o)}function z_(o){return o*(.5-Math.random())}function k_(o){o!==void 0&&(ud=o);let e=ud+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function H_(o){return o*Ar}function G_(o){return o*Gr}function ru(o){return(o&o-1)===0&&o!==0}function V_(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Ja(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function W_(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),c=r(t/2),l=s((e+n)/2),u=r((e+n)/2),h=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":o.set(a*u,c*h,c*d,a*l);break;case"YZY":o.set(c*d,a*u,c*h,a*l);break;case"ZXZ":o.set(c*h,c*d,a*u,a*l);break;case"XZX":o.set(a*u,c*g,c*f,a*l);break;case"YXY":o.set(c*f,a*u,c*g,a*l);break;case"ZYZ":o.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ii(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function tt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Vr={DEG2RAD:Ar,RAD2DEG:Gr,generateUUID:Kn,clamp:Kt,euclideanModulo:Fu,mapLinear:L_,inverseLerp:I_,lerp:Eo,damp:N_,pingpong:D_,smoothstep:U_,smootherstep:F_,randInt:O_,randFloat:B_,randFloatSpread:z_,seededRandom:k_,degToRad:H_,radToDeg:G_,isPowerOfTwo:ru,ceilPowerOfTwo:V_,floorPowerOfTwo:Ja,setQuaternionFromProperEuler:W_,normalize:tt,denormalize:ii};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,i,s,r,a,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,c,l)}set(e,t,n,i,s,r,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],v=i[1],x=i[4],y=i[7],E=i[2],S=i[5],b=i[8];return s[0]=r*_+a*v+c*E,s[3]=r*p+a*x+c*S,s[6]=r*m+a*y+c*b,s[1]=l*_+u*v+h*E,s[4]=l*p+u*x+h*S,s[7]=l*m+u*y+h*b,s[2]=d*_+f*v+g*E,s[5]=d*p+f*x+g*S,s[8]=d*m+f*y+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*a*l-n*s*u+n*a*c+i*s*l-i*r*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*r-a*l,d=a*c-u*s,f=l*s-r*c,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*r)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(r*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*a)+r+e,-i*l,i*c,-i*(-l*r+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kc.makeScale(e,t)),this}rotate(e){return this.premultiply(Kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kc=new We;function Np(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Lo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function X_(){const o=Lo("canvas");return o.style.display="block",o}const hd={};function So(o){o in hd||(hd[o]=!0,console.warn(o))}const dd=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fd=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[Gt]:{transfer:Ya,primaries:Ka,toReference:o=>o,fromReference:o=>o},[xt]:{transfer:lt,primaries:Ka,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[yc]:{transfer:Ya,primaries:$a,toReference:o=>o.applyMatrix3(fd),fromReference:o=>o.applyMatrix3(dd)},[Uu]:{transfer:lt,primaries:$a,toReference:o=>o.convertSRGBToLinear().applyMatrix3(fd),fromReference:o=>o.applyMatrix3(dd).convertLinearToSRGB()}},q_=new Set([Gt,yc]),Ze={enabled:!0,_workingColorSpace:Gt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!q_.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=ea[e].toReference,i=ea[t].fromReference;return i(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return ea[o].primaries},getTransfer:function(o){return o===zn?Ya:ea[o].transfer}};function Rr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function $c(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let er;class Dp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=Lo("canvas")),er.width=e.width,er.height=e.height;const n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Rr(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rr(t[n]/255)*255):t[n]=Rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let j_=0;class Up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Kn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Zc(i[r].image)):s.push(Zc(i[r]))}else s=Zc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Zc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Dp.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Y_=0;class Xt extends Jr{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=On,i=On,s=un,r=Gs,a=Bn,c=os,l=Xt.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=Kn(),this.name="",this.source=new Up(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(So("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Os?xt:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return So("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xt?Os:Pp}set encoding(e){So("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Os?xt:zn}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=yp;Xt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(f+1)/2,E=(m+1)/2,S=(u+d)/4,b=(h+_)/4,L=(g+p)/4;return x>y&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=S/n,s=b/n):y>E?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=S/i,s=L/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=b/s,i=L/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K_ extends Jr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(So("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Os?xt:zn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Up(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vs extends K_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fp extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $_ extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let zi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=s[r+0],f=s[r+1],g=s[r+2],_=s[r+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let p=1-a;const m=c*d+l*f+u*g+h*_,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const E=Math.sqrt(x),S=Math.atan2(E,m*v);p=Math.sin(p*S)/E,a=Math.sin(a*S)/E}const y=a*v;if(c=c*p+d*y,l=l*p+f*y,u=u*p+g*y,h=h*p+_*y,p===1-a){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(r){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(r-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(s-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(r-i)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+r*a+i*l-s*c,this._y=i*u+r*c+s*a-n*l,this._z=s*u+r*l+n*c-i*a,this._w=r*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,c=e.w,l=2*(r*i-a*n),u=2*(a*t-s*i),h=2*(s*n-r*t);return this.x=t+c*l+r*h-a*u,this.y=n+c*u+a*l-s*h,this.z=i+c*h+s*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*r-n*c,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jc=new O,pd=new zi;class ki{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,Wn):Wn.fromBufferAttribute(s,r),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),na.subVectors(this.max,ro),tr.subVectors(e.a,ro),nr.subVectors(e.b,ro),ir.subVectors(e.c,ro),Gi.subVectors(nr,tr),Vi.subVectors(ir,nr),xs.subVectors(tr,ir);let t=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-xs.z,xs.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,xs.z,0,-xs.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-xs.y,xs.x,0];return!Qc(t,tr,nr,ir,na)||(t=[1,0,0,0,1,0,0,0,1],!Qc(t,tr,nr,ir,na))?!1:(ia.crossVectors(Gi,Vi),t=[ia.x,ia.y,ia.z],Qc(t,tr,nr,ir,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new O,new O,new O,new O,new O,new O,new O,new O],Wn=new O,ta=new ki,tr=new O,nr=new O,ir=new O,Gi=new O,Vi=new O,xs=new O,ro=new O,na=new O,ia=new O,ys=new O;function Qc(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){ys.fromArray(o,s);const a=i.x*Math.abs(ys.x)+i.y*Math.abs(ys.y)+i.z*Math.abs(ys.z),c=e.dot(ys),l=t.dot(ys),u=n.dot(ys);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Z_=new ki,oo=new O,el=new O;let di=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Z_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const t=oo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(oo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(el)),this.expandByPoint(oo.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const _i=new O,tl=new O,sa=new O,Wi=new O,nl=new O,ra=new O,il=new O;let Vo=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){tl.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(tl);const s=e.distanceTo(t)*.5,r=-this.direction.dot(sa),a=Wi.dot(this.direction),c=-Wi.dot(sa),l=Wi.lengthSq(),u=Math.abs(1-r*r);let h,d,f,g;if(u>0)if(h=r*c-a,d=r*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+r*d+2*a)+d*(r*h+d+2*c)+l}else d=s,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-r*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(r*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=r>0?-s:s,h=Math.max(0,-(r*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(tl).addScaledVector(sa,d),f}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const n=_i.dot(this.direction),i=_i.dot(_i)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,r=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,r=(e.min.y-d.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,i,s){nl.subVectors(t,e),ra.subVectors(n,e),il.crossVectors(nl,ra);let r=this.direction.dot(il),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Wi.subVectors(this.origin,e);const c=a*this.direction.dot(ra.crossVectors(Wi,ra));if(c<0)return null;const l=a*this.direction.dot(nl.cross(Wi));if(l<0||c+l>r)return null;const u=-a*Wi.dot(il);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Oe{constructor(e,t,n,i,s,r,a,c,l,u,h,d,f,g,_,p){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,c,l,u,h,d,f,g,_,p)}set(e,t,n,i,s,r,a,c,l,u,h,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),r=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=r*u,f=r*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=r*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=r*l,t[1]=r*h,t[5]=r*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=r*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-r*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*u,t[9]=_-d*a,t[2]=-r*l,t[6]=a,t[10]=r*c}else if(e.order==="ZYX"){const d=r*u,f=r*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=r*c}else if(e.order==="YZX"){const d=r*c,f=r*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=r*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=r*c,f=r*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=r*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J_,e,Q_)}lookAt(e,t,n){const i=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Xi.crossVectors(n,xn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Xi.crossVectors(n,xn)),Xi.normalize(),oa.crossVectors(xn,Xi),i[0]=Xi.x,i[4]=oa.x,i[8]=xn.x,i[1]=Xi.y,i[5]=oa.y,i[9]=xn.y,i[2]=Xi.z,i[6]=oa.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],x=n[7],y=n[11],E=n[15],S=i[0],b=i[4],L=i[8],M=i[12],w=i[1],F=i[5],k=i[9],U=i[13],P=i[2],I=i[6],N=i[10],G=i[14],z=i[3],H=i[7],$=i[11],Z=i[15];return s[0]=r*S+a*w+c*P+l*z,s[4]=r*b+a*F+c*I+l*H,s[8]=r*L+a*k+c*N+l*$,s[12]=r*M+a*U+c*G+l*Z,s[1]=u*S+h*w+d*P+f*z,s[5]=u*b+h*F+d*I+f*H,s[9]=u*L+h*k+d*N+f*$,s[13]=u*M+h*U+d*G+f*Z,s[2]=g*S+_*w+p*P+m*z,s[6]=g*b+_*F+p*I+m*H,s[10]=g*L+_*k+p*N+m*$,s[14]=g*M+_*U+p*G+m*Z,s[3]=v*S+x*w+y*P+E*z,s[7]=v*b+x*F+y*I+E*H,s[11]=v*L+x*k+y*N+E*$,s[15]=v*M+x*U+y*G+E*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*c*h-i*l*h-s*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*r*d-i*r*f+i*l*u-s*c*u)+p*(+t*l*h-t*a*f-s*r*h+n*r*f+s*a*u-n*l*u)+m*(-i*a*u-t*c*h+t*a*d+i*r*h-n*r*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=h*p*l-_*d*l+_*c*f-a*p*f-h*c*m+a*d*m,x=g*d*l-u*p*l-g*c*f+r*p*f+u*c*m-r*d*m,y=u*_*l-g*h*l+g*a*f-r*_*f-u*a*m+r*h*m,E=g*h*c-u*_*c-g*a*d+r*_*d+u*a*p-r*h*p,S=t*v+n*x+i*y+s*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/S;return e[0]=v*b,e[1]=(_*d*s-h*p*s-_*i*f+n*p*f+h*i*m-n*d*m)*b,e[2]=(a*p*s-_*c*s+_*i*l-n*p*l-a*i*m+n*c*m)*b,e[3]=(h*c*s-a*d*s-h*i*l+n*d*l+a*i*f-n*c*f)*b,e[4]=x*b,e[5]=(u*p*s-g*d*s+g*i*f-t*p*f-u*i*m+t*d*m)*b,e[6]=(g*c*s-r*p*s-g*i*l+t*p*l+r*i*m-t*c*m)*b,e[7]=(r*d*s-u*c*s+u*i*l-t*d*l-r*i*f+t*c*f)*b,e[8]=y*b,e[9]=(g*h*s-u*_*s-g*n*f+t*_*f+u*n*m-t*h*m)*b,e[10]=(r*_*s-g*a*s+g*n*l-t*_*l-r*n*m+t*a*m)*b,e[11]=(u*a*s-r*h*s-u*n*l+t*h*l+r*n*f-t*a*f)*b,e[12]=E*b,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*p+t*h*p)*b,e[14]=(g*a*i-r*_*i-g*n*c+t*_*c+r*n*p-t*a*p)*b,e[15]=(r*h*i-u*a*i+u*n*c-t*h*c-r*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,c=e.z,l=s*r,u=s*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*r,0,l*c-i*a,u*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,c=t._w,l=s+s,u=r+r,h=a+a,d=s*l,f=s*u,g=s*h,_=r*u,p=r*h,m=a*h,v=c*l,x=c*u,y=c*h,E=n.x,S=n.y,b=n.z;return i[0]=(1-(_+m))*E,i[1]=(f+y)*E,i[2]=(g-x)*E,i[3]=0,i[4]=(f-y)*S,i[5]=(1-(d+m))*S,i[6]=(p+v)*S,i[7]=0,i[8]=(g+x)*b,i[9]=(p-v)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=sr.set(i[0],i[1],i[2]).length();const r=sr.set(i[4],i[5],i[6]).length(),a=sr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Xn.copy(this);const l=1/s,u=1/r,h=1/a;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,t.setFromRotationMatrix(Xn),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=Di){const c=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Di)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===Za)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=Di){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(r-s),d=(t+e)*l,f=(n+i)*u;let g,_;if(a===Di)g=(r+s)*h,_=-2*h;else if(a===Za)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const sr=new O,Xn=new Oe,J_=new O(0,0,0),Q_=new O(1,1,1),Xi=new O,oa=new O,xn=new O,md=new Oe,gd=new zi;class fs{constructor(e=0,t=0,n=0,i=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return md.makeRotationFromQuaternion(e),this.setFromRotationMatrix(md,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gd.setFromEuler(this),this.setFromQuaternion(gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class Ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let e0=0;const _d=new O,rr=new zi,vi=new Oe,aa=new O,ao=new O,t0=new O,n0=new zi,vd=new O(1,0,0),xd=new O(0,1,0),yd=new O(0,0,1),i0={type:"added"},s0={type:"removed"};class gt extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new O,t=new fs,n=new zi,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new We}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(vd,e)}rotateY(e){return this.rotateOnAxis(xd,e)}rotateZ(e){return this.rotateOnAxis(yd,e)}translateOnAxis(e,t){return _d.copy(e).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vd,e)}translateY(e){return this.translateOnAxis(xd,e)}translateZ(e){return this.translateOnAxis(yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(ao,aa,this.up):vi.lookAt(aa,ao,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),rr.setFromRotationMatrix(vi),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(i0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,t0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,n0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),h=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new O(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new O,xi=new O,sl=new O,yi=new O,or=new O,ar=new O,Md=new O,rl=new O,ol=new O,al=new O;let ca=!1;class Fn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qn.subVectors(e,t),i.cross(qn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){qn.subVectors(i,t),xi.subVectors(n,t),sl.subVectors(e,t);const r=qn.dot(qn),a=qn.dot(xi),c=qn.dot(sl),l=xi.dot(xi),u=xi.dot(sl),h=r*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(r*u-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(e,t,n,i,s,r,a,c){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),this.getInterpolation(e,t,n,i,s,r,a,c)}static getInterpolation(e,t,n,i,s,r,a,c){return this.getBarycoord(e,t,n,i,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yi.x),c.addScaledVector(r,yi.y),c.addScaledVector(a,yi.z),c)}static isFrontFacing(e,t,n,i){return qn.subVectors(n,t),xi.subVectors(e,t),qn.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),qn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),Fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;or.subVectors(i,n),ar.subVectors(s,n),rl.subVectors(e,n);const c=or.dot(rl),l=ar.dot(rl);if(c<=0&&l<=0)return t.copy(n);ol.subVectors(e,i);const u=or.dot(ol),h=ar.dot(ol);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(n).addScaledVector(or,r);al.subVectors(e,s);const f=or.dot(al),g=ar.dot(al);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ar,a);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Md.subVectors(s,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Md,a);const m=1/(p+_+d);return r=_*m,a=d*m,t.copy(n).addScaledVector(or,r).addScaledVector(ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},la={h:0,s:0,l:0};function cl(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=Fu(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=cl(r,s,e+1/3),this.g=cl(r,s,e),this.b=cl(r,s,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const n=Op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=$c(e.r),this.g=$c(e.g),this.b=$c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Ze.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Kt(Yt.r*255,0,255))*65536+Math.round(Kt(Yt.g*255,0,255))*256+Math.round(Kt(Yt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,i=Yt.g,s=Yt.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const h=r-a;switch(l=u<=.5?h/(r+a):h/(2-r-a),r){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=xt){Ze.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,i=Yt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(la);const n=Eo(qi.h,la.h,t),i=Eo(qi.s,la.s,t),s=Eo(qi.l,la.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Te;Te.NAMES=Op;let r0=0,ai=class extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=wr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zl&&(n.blendSrc=this.blendSrc),this.blendDst!==Jl&&(n.blendDst=this.blendDst),this.blendEquation!==Cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const c=s[a];delete c.metadata,r.push(c)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class hn extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new O,ua=new He;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=iu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ua.fromBufferAttribute(this,t),ua.applyMatrix3(e),this.setXY(t,ua.x,ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iu&&(e.usage=this.usage),e}}class Bp extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zp extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ht extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let o0=0;const Ln=new Oe,ll=new gt,cr=new O,yn=new ki,co=new ki,Bt=new O;class cn extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Np(e)?zp:Bp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];co.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(yn.min,co.min),yn.expandByPoint(Bt),Bt.addVectors(yn.max,co.max),yn.expandByPoint(Bt)):(yn.expandByPoint(co.min),yn.expandByPoint(co.max))}yn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Bt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Bt.fromBufferAttribute(a,l),c&&(cr.fromBufferAttribute(e,l),Bt.add(cr)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new O,u[w]=new O;const h=new O,d=new O,f=new O,g=new He,_=new He,p=new He,m=new O,v=new O;function x(w,F,k){h.fromArray(i,w*3),d.fromArray(i,F*3),f.fromArray(i,k*3),g.fromArray(r,w*2),_.fromArray(r,F*2),p.fromArray(r,k*2),d.sub(h),f.sub(h),_.sub(g),p.sub(g);const U=1/(_.x*p.y-p.x*_.y);isFinite(U)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(f,-_.y).multiplyScalar(U),v.copy(f).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(U),l[w].add(m),l[F].add(m),l[k].add(m),u[w].add(v),u[F].add(v),u[k].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,F=y.length;w<F;++w){const k=y[w],U=k.start,P=k.count;for(let I=U,N=U+P;I<N;I+=3)x(n[I+0],n[I+1],n[I+2])}const E=new O,S=new O,b=new O,L=new O;function M(w){b.fromArray(s,w*3),L.copy(b);const F=l[w];E.copy(F),E.sub(b.multiplyScalar(b.dot(F))).normalize(),S.crossVectors(L,F);const U=S.dot(u[w])<0?-1:1;c[w*4]=E.x,c[w*4+1]=E.y,c[w*4+2]=E.z,c[w*4+3]=U}for(let w=0,F=y.length;w<F;++w){const k=y[w],U=k.start,P=k.count;for(let I=U,N=U+P;I<N;I+=3)M(n[I+0]),M(n[I+1]),M(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new O,s=new O,r=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),u.subVectors(r,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let m=0;m<u;m++)d[g++]=l[f++]}return new an(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,u=r.length;l<u;l++){const h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ed=new Oe,Ms=new Vo,ha=new di,Sd=new O,lr=new O,ur=new O,hr=new O,ul=new O,da=new O,fa=new He,pa=new He,ma=new He,Td=new O,bd=new O,wd=new O,ga=new O,_a=new O;class wt extends gt{constructor(e=new cn,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){da.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(ul.fromBufferAttribute(h,e),r?da.addScaledVector(ul,u):da.addScaledVector(ul.sub(t),u))}t.add(da)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),Ms.copy(e.ray).recast(e.near),!(ha.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(ha,Sd)===null||Ms.origin.distanceToSquared(Sd)>(e.far-e.near)**2))&&(Ed.copy(s).invert(),Ms.copy(e.ray).applyMatrix4(Ed),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=r[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,E=x;y<E;y+=3){const S=a.getX(y),b=a.getX(y+1),L=a.getX(y+2);i=va(this,m,e,n,l,u,h,S,b,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=va(this,r,e,n,l,u,h,v,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=r[p.materialIndex],v=Math.max(p.start,f.start),x=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,E=x;y<E;y+=3){const S=y,b=y+1,L=y+2;i=va(this,m,e,n,l,u,h,S,b,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=p,x=p+1,y=p+2;i=va(this,r,e,n,l,u,h,v,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function a0(o,e,t,n,i,s,r,a){let c;if(e.side===on?c=n.intersectTriangle(r,s,i,!0,a):c=n.intersectTriangle(i,s,r,e.side===Fi,a),c===null)return null;_a.copy(a),_a.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(_a);return l<t.near||l>t.far?null:{distance:l,point:_a.clone(),object:o}}function va(o,e,t,n,i,s,r,a,c,l){o.getVertexPosition(a,lr),o.getVertexPosition(c,ur),o.getVertexPosition(l,hr);const u=a0(o,e,t,n,lr,ur,hr,ga);if(u){i&&(fa.fromBufferAttribute(i,a),pa.fromBufferAttribute(i,c),ma.fromBufferAttribute(i,l),u.uv=Fn.getInterpolation(ga,lr,ur,hr,fa,pa,ma,new He)),s&&(fa.fromBufferAttribute(s,a),pa.fromBufferAttribute(s,c),ma.fromBufferAttribute(s,l),u.uv1=Fn.getInterpolation(ga,lr,ur,hr,fa,pa,ma,new He),u.uv2=u.uv1),r&&(Td.fromBufferAttribute(r,a),bd.fromBufferAttribute(r,c),wd.fromBufferAttribute(r,l),u.normal=Fn.getInterpolation(ga,lr,ur,hr,Td,bd,wd,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new O,materialIndex:0};Fn.getNormal(lr,ur,hr,h.normal),u.face=h}return u}class ps extends cn{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2));function g(_,p,m,v,x,y,E,S,b,L,M){const w=y/b,F=E/L,k=y/2,U=E/2,P=S/2,I=b+1,N=L+1;let G=0,z=0;const H=new O;for(let $=0;$<N;$++){const Z=$*F-U;for(let K=0;K<I;K++){const Y=K*w-k;H[_]=Y*v,H[p]=Z*x,H[m]=P,l.push(H.x,H.y,H.z),H[_]=0,H[p]=0,H[m]=S>0?1:-1,u.push(H.x,H.y,H.z),h.push(K/b),h.push(1-$/L),G+=1}}for(let $=0;$<L;$++)for(let Z=0;Z<b;Z++){const K=d+Z+I*$,Y=d+Z+I*($+1),J=d+(Z+1)+I*($+1),ie=d+(Z+1)+I*$;c.push(K,Y,ie),c.push(Y,J,ie),z+=6}a.addGroup(f,z,M),f+=z,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wr(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(o){const e={};for(let t=0;t<o.length;t++){const n=Wr(o[t]);for(const i in n)e[i]=n[i]}return e}function c0(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function kp(o){return o.getRenderTarget()===null?o.outputColorSpace:Ze.workingColorSpace}const l0={clone:Wr,merge:sn};var u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ls extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hp extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends Hp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,fr=1;class d0 extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(dr,fr,e,t);i.layers=this.layers,this.add(i);const s=new Wt(dr,fr,e,t);s.layers=this.layers,this.add(s);const r=new Wt(dr,fr,e,t);r.layers=this.layers,this.add(r);const a=new Wt(dr,fr,e,t);a.layers=this.layers,this.add(a);const c=new Wt(dr,fr,e,t);c.layers=this.layers,this.add(c);const l=new Wt(dr,fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,c]=t;for(const l of t)this.remove(l);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Gp extends Xt{constructor(e,t,n,i,s,r,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Or,super(e,t,n,i,s,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class f0 extends Vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(So("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Os?xt:zn),this.texture=new Gp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ps(5,5,5),s=new ls({name:"CubemapFromEquirect",uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:ss});s.uniforms.tEquirect.value=t;const r=new wt(i,s),a=t.minFilter;return t.minFilter===Gs&&(t.minFilter=un),new d0(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const hl=new O,p0=new O,m0=new We;let Pi=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=hl.subVectors(n,t).cross(p0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(hl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||m0.getNormalMatrix(e),i=this.coplanarPoint(hl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Es=new di,xa=new O;class Bu{constructor(e=new Pi,t=new Pi,n=new Pi,i=new Pi,s=new Pi,r=new Pi){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di){const n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(c-s,d-l,p-f,y-m).normalize(),n[1].setComponents(c+s,d+l,p+f,y+m).normalize(),n[2].setComponents(c+r,d+u,p+g,y+v).normalize(),n[3].setComponents(c-r,d-u,p-g,y-v).normalize(),n[4].setComponents(c-a,d-h,p-_,y-x).normalize(),t===Di)n[5].setComponents(c+a,d+h,p+_,y+x).normalize();else if(t===Za)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(xa.x=i.normal.x>0?e.max.x:e.min.x,xa.y=i.normal.y>0?e.max.y:e.min.y,xa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vp(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function g0(o,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,f=h.byteLength,g=o.createBuffer();o.bindBuffer(u,g),o.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=o.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=o.SHORT;else if(h instanceof Uint32Array)_=o.UNSIGNED_INT;else if(h instanceof Int32Array)_=o.INT;else if(h instanceof Int8Array)_=o.BYTE;else if(h instanceof Uint8Array)_=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:f}}function s(l,u,h){const d=u.array,f=u._updateRange,g=u.updateRanges;if(o.bindBuffer(h,l),f.count===-1&&g.length===0&&o.bufferSubData(h,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?o.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):o.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}f.count!==-1&&(t?o.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(o.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,l,u),h.version=l.version}}return{get:r,remove:a,update:c}}class Wo extends cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const v=m*d-r;for(let x=0;x<l;x++){const y=x*h-s;g.push(y,-v,0),_.push(0,0,1),p.push(x/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const x=v+l*m,y=v+l*(m+1),E=v+1+l*(m+1),S=v+1+l*m;f.push(x,y,S),f.push(y,E,S)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.widthSegments,e.heightSegments)}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,L0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,k0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,G0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,V0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,K0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ev=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,av=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_v=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Av=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Iv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Nv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ix=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ax=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ux=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_x=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Px=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ux=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ox=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:_0,alphahash_pars_fragment:v0,alphamap_fragment:x0,alphamap_pars_fragment:y0,alphatest_fragment:M0,alphatest_pars_fragment:E0,aomap_fragment:S0,aomap_pars_fragment:T0,batching_pars_vertex:b0,batching_vertex:w0,begin_vertex:A0,beginnormal_vertex:R0,bsdfs:C0,iridescence_fragment:P0,bumpmap_pars_fragment:L0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:N0,clipping_planes_pars_vertex:D0,clipping_planes_vertex:U0,color_fragment:F0,color_pars_fragment:O0,color_pars_vertex:B0,color_vertex:z0,common:k0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:G0,displacementmap_pars_vertex:V0,displacementmap_vertex:W0,emissivemap_fragment:X0,emissivemap_pars_fragment:q0,colorspace_fragment:j0,colorspace_pars_fragment:Y0,envmap_fragment:K0,envmap_common_pars_fragment:$0,envmap_pars_fragment:Z0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:uv,envmap_vertex:Q0,fog_vertex:ev,fog_pars_vertex:tv,fog_fragment:nv,fog_pars_fragment:iv,gradientmap_pars_fragment:sv,lightmap_fragment:rv,lightmap_pars_fragment:ov,lights_lambert_fragment:av,lights_lambert_pars_fragment:cv,lights_pars_begin:lv,lights_toon_fragment:hv,lights_toon_pars_fragment:dv,lights_phong_fragment:fv,lights_phong_pars_fragment:pv,lights_physical_fragment:mv,lights_physical_pars_fragment:gv,lights_fragment_begin:_v,lights_fragment_maps:vv,lights_fragment_end:xv,logdepthbuf_fragment:yv,logdepthbuf_pars_fragment:Mv,logdepthbuf_pars_vertex:Ev,logdepthbuf_vertex:Sv,map_fragment:Tv,map_pars_fragment:bv,map_particle_fragment:wv,map_particle_pars_fragment:Av,metalnessmap_fragment:Rv,metalnessmap_pars_fragment:Cv,morphcolor_vertex:Pv,morphnormal_vertex:Lv,morphtarget_pars_vertex:Iv,morphtarget_vertex:Nv,normal_fragment_begin:Dv,normal_fragment_maps:Uv,normal_pars_fragment:Fv,normal_pars_vertex:Ov,normal_vertex:Bv,normalmap_pars_fragment:zv,clearcoat_normal_fragment_begin:kv,clearcoat_normal_fragment_maps:Hv,clearcoat_pars_fragment:Gv,iridescence_pars_fragment:Vv,opaque_fragment:Wv,packing:Xv,premultiplied_alpha_fragment:qv,project_vertex:jv,dithering_fragment:Yv,dithering_pars_fragment:Kv,roughnessmap_fragment:$v,roughnessmap_pars_fragment:Zv,shadowmap_pars_fragment:Jv,shadowmap_pars_vertex:Qv,shadowmap_vertex:ex,shadowmask_pars_fragment:tx,skinbase_vertex:nx,skinning_pars_vertex:ix,skinning_vertex:sx,skinnormal_vertex:rx,specularmap_fragment:ox,specularmap_pars_fragment:ax,tonemapping_fragment:cx,tonemapping_pars_fragment:lx,transmission_fragment:ux,transmission_pars_fragment:hx,uv_pars_fragment:dx,uv_pars_vertex:fx,uv_vertex:px,worldpos_vertex:mx,background_vert:gx,background_frag:_x,backgroundCube_vert:vx,backgroundCube_frag:xx,cube_vert:yx,cube_frag:Mx,depth_vert:Ex,depth_frag:Sx,distanceRGBA_vert:Tx,distanceRGBA_frag:bx,equirect_vert:wx,equirect_frag:Ax,linedashed_vert:Rx,linedashed_frag:Cx,meshbasic_vert:Px,meshbasic_frag:Lx,meshlambert_vert:Ix,meshlambert_frag:Nx,meshmatcap_vert:Dx,meshmatcap_frag:Ux,meshnormal_vert:Fx,meshnormal_frag:Ox,meshphong_vert:Bx,meshphong_frag:zx,meshphysical_vert:kx,meshphysical_frag:Hx,meshtoon_vert:Gx,meshtoon_frag:Vx,points_vert:Wx,points_frag:Xx,shadow_vert:qx,shadow_frag:jx,sprite_vert:Yx,sprite_frag:Kx},re={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ni={basic:{uniforms:sn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:sn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Te(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:sn([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:sn([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:sn([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Te(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:sn([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:sn([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:sn([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:sn([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:sn([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:sn([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:sn([re.common,re.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:sn([re.lights,re.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ni.physical={uniforms:sn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ya={r:0,b:0,g:0};function $x(o,e,t,n,i,s,r){const a=new Te(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(p,m){let v=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),v=!0);const y=o.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(o.autoClear||v)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===xc)?(u===void 0&&(u=new wt(new ps(1,1,1),new ls({name:"BackgroundCubeMaterial",uniforms:Wr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,S,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(x.colorSpace)!==lt,(h!==x||d!==x.version||f!==o.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new wt(new Wo(2,2),new ls({name:"BackgroundMaterial",uniforms:Wr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=o.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,m){p.getRGB(ya,kp(o)),n.buffers.color.setClear(ya.r,ya.g,ya.b,m,r)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),c=m,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:g}}function Zx(o,e,t,n){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},c=p(null);let l=c,u=!1;function h(P,I,N,G,z){let H=!1;if(r){const $=_(G,N,I);l!==$&&(l=$,f(l.object)),H=m(P,G,N,z),H&&v(P,G,N,z)}else{const $=I.wireframe===!0;(l.geometry!==G.id||l.program!==N.id||l.wireframe!==$)&&(l.geometry=G.id,l.program=N.id,l.wireframe=$,H=!0)}z!==null&&t.update(z,o.ELEMENT_ARRAY_BUFFER),(H||u)&&(u=!1,L(P,I,N,G),z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function d(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(P){return n.isWebGL2?o.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?o.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function _(P,I,N){const G=N.wireframe===!0;let z=a[P.id];z===void 0&&(z={},a[P.id]=z);let H=z[I.id];H===void 0&&(H={},z[I.id]=H);let $=H[G];return $===void 0&&($=p(d()),H[G]=$),$}function p(P){const I=[],N=[],G=[];for(let z=0;z<i;z++)I[z]=0,N[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:G,object:P,attributes:{},index:null}}function m(P,I,N,G){const z=l.attributes,H=I.attributes;let $=0;const Z=N.getAttributes();for(const K in Z)if(Z[K].location>=0){const J=z[K];let ie=H[K];if(ie===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),J===void 0||J.attribute!==ie||ie&&J.data!==ie.data)return!0;$++}return l.attributesNum!==$||l.index!==G}function v(P,I,N,G){const z={},H=I.attributes;let $=0;const Z=N.getAttributes();for(const K in Z)if(Z[K].location>=0){let J=H[K];J===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));const ie={};ie.attribute=J,J&&J.data&&(ie.data=J.data),z[K]=ie,$++}l.attributes=z,l.attributesNum=$,l.index=G}function x(){const P=l.newAttributes;for(let I=0,N=P.length;I<N;I++)P[I]=0}function y(P){E(P,0)}function E(P,I){const N=l.newAttributes,G=l.enabledAttributes,z=l.attributeDivisors;N[P]=1,G[P]===0&&(o.enableVertexAttribArray(P),G[P]=1),z[P]!==I&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,I),z[P]=I)}function S(){const P=l.newAttributes,I=l.enabledAttributes;for(let N=0,G=I.length;N<G;N++)I[N]!==P[N]&&(o.disableVertexAttribArray(N),I[N]=0)}function b(P,I,N,G,z,H,$){$===!0?o.vertexAttribIPointer(P,I,N,z,H):o.vertexAttribPointer(P,I,N,G,z,H)}function L(P,I,N,G){if(n.isWebGL2===!1&&(P.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const z=G.attributes,H=N.getAttributes(),$=I.defaultAttributeValues;for(const Z in H){const K=H[Z];if(K.location>=0){let Y=z[Z];if(Y===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const J=Y.normalized,ie=Y.itemSize,me=t.get(Y);if(me===void 0)continue;const ge=me.buffer,Ie=me.type,De=me.bytesPerElement,we=n.isWebGL2===!0&&(Ie===o.INT||Ie===o.UNSIGNED_INT||Y.gpuType===Ep);if(Y.isInterleavedBufferAttribute){const Ke=Y.data,V=Ke.stride,Qt=Y.offset;if(Ke.isInstancedInterleavedBuffer){for(let Me=0;Me<K.locationSize;Me++)E(K.location+Me,Ke.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ke.meshPerAttribute*Ke.count)}else for(let Me=0;Me<K.locationSize;Me++)y(K.location+Me);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let Me=0;Me<K.locationSize;Me++)b(K.location+Me,ie/K.locationSize,Ie,J,V*De,(Qt+ie/K.locationSize*Me)*De,we)}else{if(Y.isInstancedBufferAttribute){for(let Ke=0;Ke<K.locationSize;Ke++)E(K.location+Ke,Y.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ke=0;Ke<K.locationSize;Ke++)y(K.location+Ke);o.bindBuffer(o.ARRAY_BUFFER,ge);for(let Ke=0;Ke<K.locationSize;Ke++)b(K.location+Ke,ie/K.locationSize,Ie,J,ie*De,ie/K.locationSize*Ke*De,we)}}else if($!==void 0){const J=$[Z];if(J!==void 0)switch(J.length){case 2:o.vertexAttrib2fv(K.location,J);break;case 3:o.vertexAttrib3fv(K.location,J);break;case 4:o.vertexAttrib4fv(K.location,J);break;default:o.vertexAttrib1fv(K.location,J)}}}}S()}function M(){k();for(const P in a){const I=a[P];for(const N in I){const G=I[N];for(const z in G)g(G[z].object),delete G[z];delete I[N]}delete a[P]}}function w(P){if(a[P.id]===void 0)return;const I=a[P.id];for(const N in I){const G=I[N];for(const z in G)g(G[z].object),delete G[z];delete I[N]}delete a[P.id]}function F(P){for(const I in a){const N=a[I];if(N[P.id]===void 0)continue;const G=N[P.id];for(const z in G)g(G[z].object),delete G[z];delete N[P.id]}}function k(){U(),u=!0,l!==c&&(l=c,f(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:k,resetDefaultState:U,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:y,disableUnusedAttributes:S}}function Jx(o,e,t,n){const i=n.isWebGL2;let s;function r(u){s=u}function a(u,h){o.drawArrays(s,u,h),t.update(h,s,1)}function c(u,h,d){if(d===0)return;let f,g;if(i)f=o,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,h,d),t.update(h,s,d)}function l(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,s,1)}}this.setMode=r,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Qx(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=r||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),d=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=o.getParameter(o.MAX_TEXTURE_SIZE),g=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),p=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),m=o.getParameter(o.MAX_VARYING_VECTORS),v=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=r||e.has("OES_texture_float"),E=x&&y,S=r?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:S}}function ey(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Pi,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=o.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):l();else{const v=s?0:n,x=v*4;let y=m.clippingState||null;c.value=y,y=u(g,d,x,f);for(let E=0;E!==x;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,y=f;x!==_;++x,y+=4)r.copy(h[x]).applyMatrix4(v,a),r.normal.toArray(p,y),p[y+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ty(o){let e=new WeakMap;function t(r,a){return a===Ql?r.mapping=Or:a===eu&&(r.mapping=Br),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ql||a===eu)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new f0(c.height/2);return l.fromEquirectangularTexture(o,r),e.set(r,l),r.addEventListener("dispose",i),t(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Mc extends Hp{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mr=4,Ad=[.125,.215,.35,.446,.526,.582],Ps=20,dl=new Mc,Rd=new Te;let fl=null,pl=0,ml=0;const As=(1+Math.sqrt(5))/2,pr=1/As,Cd=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,As,pr),new O(0,As,-pr),new O(pr,0,As),new O(-pr,0,As),new O(As,pr,0),new O(-As,pr,0)];class Pd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,pl,ml),e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Co,format:Bn,colorSpace:Gt,depthBuffer:!1},i=Ld(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ld(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ny(s)),this._blurMaterial=iy(s,e,t)}return i}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,dl)}_sceneToCubeUV(e,t,n,i){const a=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Rd),u.toneMapping=rs,u.autoClear=!1;const f=new hn({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new wt(new ps,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(Rd),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const x=this._cubeSize;Ma(i,v*x,m>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Or||e.mapping===Br;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ma(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,dl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Cd[(i-1)%Cd.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new wt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ps-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Ps;p>Ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ps}`);const m=[];let v=0;for(let b=0;b<Ps;++b){const L=b/_,M=Math.exp(-L*L/2);m.push(M),b===0?v+=M:b<p&&(v+=2*M)}for(let b=0;b<m.length;b++)m[b]=m[b]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const y=this._sizeLods[i],E=3*y*(i>x-Mr?i-x+Mr:0),S=4*(this._cubeSize-y);Ma(t,E,S,3*y,2*y),c.setRenderTarget(t),c.render(h,dl)}}function ny(o){const e=[],t=[],n=[];let i=o;const s=o-Mr+1+Ad.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let c=1/a;r>o-Mr?c=Ad[r-o+Mr-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*f),x=new Float32Array(p*g*f),y=new Float32Array(m*g*f);for(let S=0;S<f;S++){const b=S%3*2/3-1,L=S>2?0:-1,M=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];v.set(M,_*g*S),x.set(d,p*g*S);const w=[S,S,S,S,S,S];y.set(w,m*g*S)}const E=new cn;E.setAttribute("position",new an(v,_)),E.setAttribute("uv",new an(x,p)),E.setAttribute("faceIndex",new an(y,m)),e.push(E),i>Mr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ld(o,e,t){const n=new Vs(o,e,t);return n.texture.mapping=xc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ma(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function iy(o,e,t){const n=new Float32Array(Ps),i=new O(0,1,0);return new ls({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Id(){return new ls({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Nd(){return new ls({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function zu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sy(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ql||c===eu,u=c===Or||c===Br;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Pd(o)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Pd(o));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function ry(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function oy(o,e,t,n){const i={},s=new WeakMap;function r(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],o.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],o.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,y=v.length;x<y;x+=3){const E=v[x+0],S=v[x+1],b=v[x+2];d.push(E,S,S,b,b,E)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const E=x+0,S=x+1,b=x+2;d.push(E,S,S,b,b,E)}}else return;const p=new(Np(d)?zp:Bp)(d,1);p.version=_;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ay(o,e,t,n){const i=n.isWebGL2;let s;function r(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,g){o.drawElements(s,g,a,f*c),t.update(g,s,1)}function h(f,g,_){if(_===0)return;let p,m;if(i)p=o,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,f*c,_),t.update(g,s,_)}function d(f,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,f,0,_);let m=0;for(let v=0;v<_;v++)m+=g[v];t.update(m,s,1)}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function cy(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case o.TRIANGLES:t.triangles+=a*(s/3);break;case o.LINES:t.lines+=a*(s/2);break;case o.LINE_STRIP:t.lines+=a*(s-1);break;case o.LINE_LOOP:t.lines+=a*s;break;case o.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ly(o,e){return o[0]-e[0]}function uy(o,e){return Math.abs(e[1])-Math.abs(o[1])}function hy(o,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new it,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let P=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let L=0;v===!0&&(L=1),x===!0&&(L=2),y===!0&&(L=3);let M=u.attributes.position.count*L,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const F=new Float32Array(M*w*4*g),k=new Fp(F,M,w,g);k.type=Ni,k.needsUpdate=!0;const U=L*4;for(let I=0;I<g;I++){const N=E[I],G=S[I],z=b[I],H=M*w*4*I;for(let $=0;$<N.count;$++){const Z=$*U;v===!0&&(r.fromBufferAttribute(N,$),F[H+Z+0]=r.x,F[H+Z+1]=r.y,F[H+Z+2]=r.z,F[H+Z+3]=0),x===!0&&(r.fromBufferAttribute(G,$),F[H+Z+4]=r.x,F[H+Z+5]=r.y,F[H+Z+6]=r.z,F[H+Z+7]=0),y===!0&&(r.fromBufferAttribute(z,$),F[H+Z+8]=r.x,F[H+Z+9]=r.y,F[H+Z+10]=r.z,F[H+Z+11]=z.itemSize===4?r.w:1)}}_={count:g,texture:k,size:new He(M,w)},s.set(u,_),u.addEventListener("dispose",P)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const m=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(o,"morphTargetBaseInfluence",m),h.getUniforms().setValue(o,"morphTargetInfluences",d),h.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<f;x++){const y=g[x];y[0]=x,y[1]=d[x]}g.sort(uy);for(let x=0;x<8;x++)x<f&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(ly);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let x=0;x<8;x++){const y=a[x],E=y[0],S=y[1];E!==Number.MAX_SAFE_INTEGER&&S?(_&&u.getAttribute("morphTarget"+x)!==_[E]&&u.setAttribute("morphTarget"+x,_[E]),p&&u.getAttribute("morphNormal"+x)!==p[E]&&u.setAttribute("morphNormal"+x,p[E]),i[x]=S,m+=S):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const v=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(o,"morphTargetBaseInfluence",v),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function dy(o,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,o.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,o.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:r}}class Wp extends Xt{constructor(e,t,n,i,s,r,a,c,l,u){if(u=u!==void 0?u:Fs,u!==Fs&&u!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fs&&(n=Ji),n===void 0&&u===kr&&(n=Us),super(null,i,s,r,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zt,this.minFilter=c!==void 0?c:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xp=new Xt,qp=new Wp(1,1);qp.compareFunction=Ip;const jp=new Fp,Yp=new $_,Kp=new Gp,Dd=[],Ud=[],Fd=new Float32Array(16),Od=new Float32Array(9),Bd=new Float32Array(4);function Qr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=Dd[i];if(s===void 0&&(s=new Float32Array(i),Dd[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function Dt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Ut(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Ec(o,e){let t=Ud[e];t===void 0&&(t=new Int32Array(e),Ud[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function fy(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function py(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;o.uniform2fv(this.addr,e),Ut(t,e)}}function my(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;o.uniform3fv(this.addr,e),Ut(t,e)}}function gy(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;o.uniform4fv(this.addr,e),Ut(t,e)}}function _y(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Bd.set(n),o.uniformMatrix2fv(this.addr,!1,Bd),Ut(t,n)}}function vy(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Od.set(n),o.uniformMatrix3fv(this.addr,!1,Od),Ut(t,n)}}function xy(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Fd.set(n),o.uniformMatrix4fv(this.addr,!1,Fd),Ut(t,n)}}function yy(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function My(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;o.uniform2iv(this.addr,e),Ut(t,e)}}function Ey(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;o.uniform3iv(this.addr,e),Ut(t,e)}}function Sy(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;o.uniform4iv(this.addr,e),Ut(t,e)}}function Ty(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function by(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;o.uniform2uiv(this.addr,e),Ut(t,e)}}function wy(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;o.uniform3uiv(this.addr,e),Ut(t,e)}}function Ay(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;o.uniform4uiv(this.addr,e),Ut(t,e)}}function Ry(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);const s=this.type===o.SAMPLER_2D_SHADOW?qp:Xp;t.setTexture2D(e||s,i)}function Cy(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yp,i)}function Py(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Kp,i)}function Ly(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jp,i)}function Iy(o){switch(o){case 5126:return fy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return _y;case 35675:return vy;case 35676:return xy;case 5124:case 35670:return yy;case 35667:case 35671:return My;case 35668:case 35672:return Ey;case 35669:case 35673:return Sy;case 5125:return Ty;case 36294:return by;case 36295:return wy;case 36296:return Ay;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}function Ny(o,e){o.uniform1fv(this.addr,e)}function Dy(o,e){const t=Qr(e,this.size,2);o.uniform2fv(this.addr,t)}function Uy(o,e){const t=Qr(e,this.size,3);o.uniform3fv(this.addr,t)}function Fy(o,e){const t=Qr(e,this.size,4);o.uniform4fv(this.addr,t)}function Oy(o,e){const t=Qr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function By(o,e){const t=Qr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function zy(o,e){const t=Qr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function ky(o,e){o.uniform1iv(this.addr,e)}function Hy(o,e){o.uniform2iv(this.addr,e)}function Gy(o,e){o.uniform3iv(this.addr,e)}function Vy(o,e){o.uniform4iv(this.addr,e)}function Wy(o,e){o.uniform1uiv(this.addr,e)}function Xy(o,e){o.uniform2uiv(this.addr,e)}function qy(o,e){o.uniform3uiv(this.addr,e)}function jy(o,e){o.uniform4uiv(this.addr,e)}function Yy(o,e,t){const n=this.cache,i=e.length,s=Ec(t,i);Dt(n,s)||(o.uniform1iv(this.addr,s),Ut(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Xp,s[r])}function Ky(o,e,t){const n=this.cache,i=e.length,s=Ec(t,i);Dt(n,s)||(o.uniform1iv(this.addr,s),Ut(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Yp,s[r])}function $y(o,e,t){const n=this.cache,i=e.length,s=Ec(t,i);Dt(n,s)||(o.uniform1iv(this.addr,s),Ut(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Kp,s[r])}function Zy(o,e,t){const n=this.cache,i=e.length,s=Ec(t,i);Dt(n,s)||(o.uniform1iv(this.addr,s),Ut(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||jp,s[r])}function Jy(o){switch(o){case 5126:return Ny;case 35664:return Dy;case 35665:return Uy;case 35666:return Fy;case 35674:return Oy;case 35675:return By;case 35676:return zy;case 5124:case 35670:return ky;case 35667:case 35671:return Hy;case 35668:case 35672:return Gy;case 35669:case 35673:return Vy;case 5125:return Wy;case 36294:return Xy;case 36295:return qy;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Zy}}class Qy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Iy(t.type)}}class eM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jy(t.type)}}class tM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const gl=/(\w+)(\])?(\[|\.)?/g;function zd(o,e){o.seq.push(e),o.map[e.id]=e}function nM(o,e,t){const n=o.name,i=n.length;for(gl.lastIndex=0;;){const s=gl.exec(n),r=gl.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){zd(t,l===void 0?new Qy(a,o,e):new eM(a,o,e));break}else{let h=t.map[a];h===void 0&&(h=new tM(a),zd(t,h)),t=h}}}class ka{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);nM(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function kd(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const iM=37297;let sM=0;function rM(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function oM(o){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(o);let n;switch(e===t?n="":e===$a&&t===Ka?n="LinearDisplayP3ToLinearSRGB":e===Ka&&t===$a&&(n="LinearSRGBToLinearDisplayP3"),o){case Gt:case yc:return[n,"LinearTransferOETF"];case xt:case Uu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[n,"LinearTransferOETF"]}}function Hd(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+rM(o.getShaderSource(e),r)}else return i}function aM(o,e){const t=oM(e);return`vec4 ${o}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cM(o,e){let t;switch(e){case s_:t="Linear";break;case r_:t="Reinhard";break;case o_:t="OptimizedCineon";break;case a_:t="ACESFilmic";break;case l_:t="AgX";break;case c_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lM(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Er).join(`
`)}function uM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Er).join(`
`)}function hM(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dM(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function Er(o){return o!==""}function Gd(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vd(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(o){return o.replace(fM,mM)}const pM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mM(o,e){let t=Fe[e];if(t===void 0){const n=pM.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ou(t)}const gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wd(o){return o.replace(gM,_M)}function _M(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xd(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===vp?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ig?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function xM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Or:case Br:e="ENVMAP_TYPE_CUBE";break;case xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Br:e="ENVMAP_MODE_REFRACTION";break}return e}function MM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case xp:e="ENVMAP_BLENDING_MULTIPLY";break;case n_:e="ENVMAP_BLENDING_MIX";break;case i_:e="ENVMAP_BLENDING_ADD";break}return e}function EM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function SM(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const c=vM(t),l=xM(t),u=yM(t),h=MM(t),d=EM(t),f=t.isWebGL2?"":lM(t),g=uM(t),_=hM(s),p=i.createProgram();let m,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Er).join(`
`),m.length>0&&(m+=`
`),v=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Er).join(`
`),v.length>0&&(v+=`
`)):(m=[Xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),v=[f,Xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?Fe.tonemapping_pars_fragment:"",t.toneMapping!==rs?cM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,aM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),r=ou(r),r=Gd(r,t),r=Vd(r,t),a=ou(a),a=Gd(a,t),a=Vd(a,t),r=Wd(r),a=Wd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+m+r,E=x+v+a,S=kd(i,i.VERTEX_SHADER,y),b=kd(i,i.FRAGMENT_SHADER,E);i.attachShader(p,S),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function L(k){if(o.debug.checkShaderErrors){const U=i.getProgramInfoLog(p).trim(),P=i.getShaderInfoLog(S).trim(),I=i.getShaderInfoLog(b).trim();let N=!0,G=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(N=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,p,S,b);else{const z=Hd(i,S,"vertex"),H=Hd(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+z+`
`+H)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(P===""||I==="")&&(G=!1);G&&(k.diagnostics={runnable:N,programLog:U,vertexShader:{log:P,prefix:m},fragmentShader:{log:I,prefix:v}})}i.deleteShader(S),i.deleteShader(b),M=new ka(i,p),w=dM(i,p)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(p,iM)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=b,this}let TM=0;class bM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wM(e),t.set(e,n)),n}}class wM{constructor(e){this.id=TM++,this.code=e,this.usedTimes=0}}function AM(o,e,t,n,i,s,r){const a=new Ou,c=new bM,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,w,F,k,U){const P=k.fog,I=U.geometry,N=M.isMeshStandardMaterial?k.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||N),z=G&&G.mapping===xc?G.image.height:null,H=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const $=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=$!==void 0?$.length:0;let K=0;I.morphAttributes.position!==void 0&&(K=1),I.morphAttributes.normal!==void 0&&(K=2),I.morphAttributes.color!==void 0&&(K=3);let Y,J,ie,me;if(H){const en=ni[H];Y=en.vertexShader,J=en.fragmentShader}else Y=M.vertexShader,J=M.fragmentShader,c.update(M),ie=c.getVertexShaderID(M),me=c.getFragmentShaderID(M);const ge=o.getRenderTarget(),Ie=U.isInstancedMesh===!0,De=U.isBatchedMesh===!0,we=!!M.map,Ke=!!M.matcap,V=!!G,Qt=!!M.aoMap,Me=!!M.lightMap,Pe=!!M.bumpMap,_e=!!M.normalMap,ht=!!M.displacementMap,Be=!!M.emissiveMap,C=!!M.metalnessMap,A=!!M.roughnessMap,X=M.anisotropy>0,te=M.clearcoat>0,ee=M.iridescence>0,ne=M.sheen>0,ve=M.transmission>0,ce=X&&!!M.anisotropyMap,de=te&&!!M.clearcoatMap,be=te&&!!M.clearcoatNormalMap,ze=te&&!!M.clearcoatRoughnessMap,Q=ee&&!!M.iridescenceMap,et=ee&&!!M.iridescenceThicknessMap,Xe=ne&&!!M.sheenColorMap,Ce=ne&&!!M.sheenRoughnessMap,ye=!!M.specularMap,fe=!!M.specularColorMap,Ue=!!M.specularIntensityMap,Je=ve&&!!M.transmissionMap,_t=ve&&!!M.thicknessMap,Ge=!!M.gradientMap,se=!!M.alphaMap,D=M.alphaTest>0,oe=!!M.alphaHash,ae=!!M.extensions,Ae=!!I.attributes.uv1,Ee=!!I.attributes.uv2,st=!!I.attributes.uv3;let rt=rs;return M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(rt=o.toneMapping),{isWebGL2:u,shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:J,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:De,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ge===null?o.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Gt,map:we,matcap:Ke,envMap:V,envMapMode:V&&G.mapping,envMapCubeUVHeight:z,aoMap:Qt,lightMap:Me,bumpMap:Pe,normalMap:_e,displacementMap:d&&ht,emissiveMap:Be,normalMapObjectSpace:_e&&M.normalMapType===S_,normalMapTangentSpace:_e&&M.normalMapType===Lp,metalnessMap:C,roughnessMap:A,anisotropy:X,anisotropyMap:ce,clearcoat:te,clearcoatMap:de,clearcoatNormalMap:be,clearcoatRoughnessMap:ze,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:et,sheen:ne,sheenColorMap:Xe,sheenRoughnessMap:Ce,specularMap:ye,specularColorMap:fe,specularIntensityMap:Ue,transmission:ve,transmissionMap:Je,thicknessMap:_t,gradientMap:Ge,opaque:M.transparent===!1&&M.blending===wr,alphaMap:se,alphaTest:D,alphaHash:oe,combine:M.combine,mapUv:we&&_(M.map.channel),aoMapUv:Qt&&_(M.aoMap.channel),lightMapUv:Me&&_(M.lightMap.channel),bumpMapUv:Pe&&_(M.bumpMap.channel),normalMapUv:_e&&_(M.normalMap.channel),displacementMapUv:ht&&_(M.displacementMap.channel),emissiveMapUv:Be&&_(M.emissiveMap.channel),metalnessMapUv:C&&_(M.metalnessMap.channel),roughnessMapUv:A&&_(M.roughnessMap.channel),anisotropyMapUv:ce&&_(M.anisotropyMap.channel),clearcoatMapUv:de&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(M.sheenRoughnessMap.channel),specularMapUv:ye&&_(M.specularMap.channel),specularColorMapUv:fe&&_(M.specularColorMap.channel),specularIntensityMapUv:Ue&&_(M.specularIntensityMap.channel),transmissionMapUv:Je&&_(M.transmissionMap.channel),thicknessMapUv:_t&&_(M.thicknessMap.channel),alphaMapUv:se&&_(M.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(_e||X),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Ee,vertexUv3s:st,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(we||se),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:K,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:rt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Tn,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)w.push(F),w.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(v(w,M),x(w,M),w.push(o.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const w=g[M.type];let F;if(w){const k=ni[w];F=l0.clone(k.uniforms)}else F=M.uniforms;return F}function E(M,w){let F;for(let k=0,U=l.length;k<U;k++){const P=l[k];if(P.cacheKey===w){F=P,++F.usedTimes;break}}return F===void 0&&(F=new SM(o,w,M,s),l.push(F)),F}function S(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function b(M){c.remove(M)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:E,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:L}}function RM(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function CM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function qd(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function jd(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(h,d,f,g,_,p){let m=o[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},o[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function a(h,d,f,g,_,p){const m=r(h,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(h,d,f,g,_,p){const m=r(h,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(h,d){t.length>1&&t.sort(h||CM),n.length>1&&n.sort(d||qd),i.length>1&&i.sort(d||qd)}function u(){for(let h=e,d=o.length;h<d;h++){const f=o[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function PM(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new jd,o.set(n,[r])):i>=s.length?(r=new jd,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function LM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Te};break;case"SpotLight":t={position:new O,direction:new O,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new O,halfWidth:new O,halfHeight:new O};break}return o[e.id]=t,t}}}function IM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let NM=0;function DM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function UM(o,e){const t=new LM,n=IM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const s=new O,r=new Oe,a=new Oe;function c(u,h){let d=0,f=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let _=0,p=0,m=0,v=0,x=0,y=0,E=0,S=0,b=0,L=0,M=0;u.sort(DM);const w=h===!0?Math.PI:1;for(let k=0,U=u.length;k<U;k++){const P=u[k],I=P.color,N=P.intensity,G=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=I.r*N*w,f+=I.g*N*w,g+=I.b*N*w;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],N);M++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const $=P.shadow,Z=n.get(P);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=z,i.directionalShadowMatrix[_]=P.shadow.matrix,y++}i.directional[_]=H,_++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(I).multiplyScalar(N*w),H.distance=G,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[m]=H;const $=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,$.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[m]=$.matrix,P.castShadow){const Z=n.get(P);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,i.spotShadow[m]=Z,i.spotShadowMap[m]=z,S++}m++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(I).multiplyScalar(N),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=H,v++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*w),H.distance=P.distance,H.decay=P.decay,P.castShadow){const $=P.shadow,Z=n.get(P);Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,i.pointShadow[p]=Z,i.pointShadowMap[p]=z,i.pointShadowMatrix[p]=P.shadow.matrix,E++}i.point[p]=H,p++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(N*w),H.groundColor.copy(P.groundColor).multiplyScalar(N*w),i.hemi[x]=H,x++}}v>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==_||F.pointLength!==p||F.spotLength!==m||F.rectAreaLength!==v||F.hemiLength!==x||F.numDirectionalShadows!==y||F.numPointShadows!==E||F.numSpotShadows!==S||F.numSpotMaps!==b||F.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=v,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+b-L,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=M,F.directionalLength=_,F.pointLength=p,F.spotLength=m,F.rectAreaLength=v,F.hemiLength=x,F.numDirectionalShadows=y,F.numPointShadows=E,F.numSpotShadows=S,F.numSpotMaps=b,F.numLightProbes=M,i.version=NM++)}function l(u,h){let d=0,f=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){const y=u[v];if(y.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(y.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const E=i.hemi[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:i}}function Yd(o,e){const t=new UM(o,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:a}}function FM(o,e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let c;return a===void 0?(c=new Yd(o,e),t.set(s,[c])):r>=a.length?(c=new Yd(o,e),a.push(c)):c=a[r],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class OM extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BM extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HM(o,e,t){let n=new Bu;const i=new He,s=new He,r=new it,a=new OM({depthPacking:E_}),c=new BM,l={},u=t.maxTextureSize,h={[Fi]:on,[on]:Fi,[Tn]:Tn},d=new ls({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:zM,fragmentShader:kM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vp;let m=this.type;this.render=function(S,b,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const M=o.getRenderTarget(),w=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),k=o.state;k.setBlending(ss),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const U=m!==Ai&&this.type===Ai,P=m===Ai&&this.type!==Ai;for(let I=0,N=S.length;I<N;I++){const G=S[I],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const H=z.getFrameExtents();if(i.multiply(H),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/H.x),i.x=s.x*H.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/H.y),i.y=s.y*H.y,z.mapSize.y=s.y)),z.map===null||U===!0||P===!0){const Z=this.type!==Ai?{minFilter:zt,magFilter:zt}:{};z.map!==null&&z.map.dispose(),z.map=new Vs(i.x,i.y,Z),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}o.setRenderTarget(z.map),o.clear();const $=z.getViewportCount();for(let Z=0;Z<$;Z++){const K=z.getViewport(Z);r.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),k.viewport(r),z.updateMatrices(G,Z),n=z.getFrustum(),y(b,L,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Ai&&v(z,L),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,o.setRenderTarget(M,w,F)};function v(S,b){const L=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Vs(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,o.setRenderTarget(S.mapPass),o.clear(),o.renderBufferDirect(b,null,L,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,o.setRenderTarget(S.map),o.clear(),o.renderBufferDirect(b,null,L,f,_,null)}function x(S,b,L,M){let w=null;const F=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)w=F;else if(w=L.isPointLight===!0?c:a,o.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const k=w.uuid,U=b.uuid;let P=l[k];P===void 0&&(P={},l[k]=P);let I=P[U];I===void 0&&(I=w.clone(),P[U]=I,b.addEventListener("dispose",E)),w=I}if(w.visible=b.visible,w.wireframe=b.wireframe,M===Ai?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:h[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,L.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=o.properties.get(w);k.light=L}return w}function y(S,b,L,M,w){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Ai)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const U=e.update(S),P=S.material;if(Array.isArray(P)){const I=U.groups;for(let N=0,G=I.length;N<G;N++){const z=I[N],H=P[z.materialIndex];if(H&&H.visible){const $=x(S,H,M,w);S.onBeforeShadow(o,S,b,L,U,$,z),o.renderBufferDirect(L,null,U,$,S,z),S.onAfterShadow(o,S,b,L,U,$,z)}}}else if(P.visible){const I=x(S,P,M,w);S.onBeforeShadow(o,S,b,L,U,I,null),o.renderBufferDirect(L,null,U,I,S,null),S.onAfterShadow(o,S,b,L,U,I,null)}}const k=S.children;for(let U=0,P=k.length;U<P;U++)y(k[U],b,L,M,w)}function E(S){S.target.removeEventListener("dispose",E);for(const L in l){const M=l[L],w=S.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function GM(o,e,t){const n=t.isWebGL2;function i(){let D=!1;const oe=new it;let ae=null;const Ae=new it(0,0,0,0);return{setMask:function(Ee){ae!==Ee&&!D&&(o.colorMask(Ee,Ee,Ee,Ee),ae=Ee)},setLocked:function(Ee){D=Ee},setClear:function(Ee,st,rt,Ft,en){en===!0&&(Ee*=Ft,st*=Ft,rt*=Ft),oe.set(Ee,st,rt,Ft),Ae.equals(oe)===!1&&(o.clearColor(Ee,st,rt,Ft),Ae.copy(oe))},reset:function(){D=!1,ae=null,Ae.set(-1,0,0,0)}}}function s(){let D=!1,oe=null,ae=null,Ae=null;return{setTest:function(Ee){Ee?De(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(Ee){oe!==Ee&&!D&&(o.depthMask(Ee),oe=Ee)},setFunc:function(Ee){if(ae!==Ee){switch(Ee){case Kg:o.depthFunc(o.NEVER);break;case $g:o.depthFunc(o.ALWAYS);break;case Zg:o.depthFunc(o.LESS);break;case qa:o.depthFunc(o.LEQUAL);break;case Jg:o.depthFunc(o.EQUAL);break;case Qg:o.depthFunc(o.GEQUAL);break;case e_:o.depthFunc(o.GREATER);break;case t_:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ae=Ee}},setLocked:function(Ee){D=Ee},setClear:function(Ee){Ae!==Ee&&(o.clearDepth(Ee),Ae=Ee)},reset:function(){D=!1,oe=null,ae=null,Ae=null}}}function r(){let D=!1,oe=null,ae=null,Ae=null,Ee=null,st=null,rt=null,Ft=null,en=null;return{setTest:function(ot){D||(ot?De(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(ot){oe!==ot&&!D&&(o.stencilMask(ot),oe=ot)},setFunc:function(ot,tn,$n){(ae!==ot||Ae!==tn||Ee!==$n)&&(o.stencilFunc(ot,tn,$n),ae=ot,Ae=tn,Ee=$n)},setOp:function(ot,tn,$n){(st!==ot||rt!==tn||Ft!==$n)&&(o.stencilOp(ot,tn,$n),st=ot,rt=tn,Ft=$n)},setLocked:function(ot){D=ot},setClear:function(ot){en!==ot&&(o.clearStencil(ot),en=ot)},reset:function(){D=!1,oe=null,ae=null,Ae=null,Ee=null,st=null,rt=null,Ft=null,en=null}}}const a=new i,c=new s,l=new r,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,_=[],p=null,m=!1,v=null,x=null,y=null,E=null,S=null,b=null,L=null,M=new Te(0,0,0),w=0,F=!1,k=null,U=null,P=null,I=null,N=null;const G=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const $=o.getParameter(o.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),z=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),z=H>=2);let Z=null,K={};const Y=o.getParameter(o.SCISSOR_BOX),J=o.getParameter(o.VIEWPORT),ie=new it().fromArray(Y),me=new it().fromArray(J);function ge(D,oe,ae,Ae){const Ee=new Uint8Array(4),st=o.createTexture();o.bindTexture(D,st),o.texParameteri(D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(D,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let rt=0;rt<ae;rt++)n&&(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)?o.texImage3D(oe,0,o.RGBA,1,1,Ae,0,o.RGBA,o.UNSIGNED_BYTE,Ee):o.texImage2D(oe+rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ee);return st}const Ie={};Ie[o.TEXTURE_2D]=ge(o.TEXTURE_2D,o.TEXTURE_2D,1),Ie[o.TEXTURE_CUBE_MAP]=ge(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ie[o.TEXTURE_2D_ARRAY]=ge(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ie[o.TEXTURE_3D]=ge(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),De(o.DEPTH_TEST),c.setFunc(qa),Be(!1),C(Ah),De(o.CULL_FACE),_e(ss);function De(D){d[D]!==!0&&(o.enable(D),d[D]=!0)}function we(D){d[D]!==!1&&(o.disable(D),d[D]=!1)}function Ke(D,oe){return f[D]!==oe?(o.bindFramebuffer(D,oe),f[D]=oe,n&&(D===o.DRAW_FRAMEBUFFER&&(f[o.FRAMEBUFFER]=oe),D===o.FRAMEBUFFER&&(f[o.DRAW_FRAMEBUFFER]=oe)),!0):!1}function V(D,oe){let ae=_,Ae=!1;if(D)if(ae=g.get(oe),ae===void 0&&(ae=[],g.set(oe,ae)),D.isWebGLMultipleRenderTargets){const Ee=D.texture;if(ae.length!==Ee.length||ae[0]!==o.COLOR_ATTACHMENT0){for(let st=0,rt=Ee.length;st<rt;st++)ae[st]=o.COLOR_ATTACHMENT0+st;ae.length=Ee.length,Ae=!0}}else ae[0]!==o.COLOR_ATTACHMENT0&&(ae[0]=o.COLOR_ATTACHMENT0,Ae=!0);else ae[0]!==o.BACK&&(ae[0]=o.BACK,Ae=!0);Ae&&(t.isWebGL2?o.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Qt(D){return p!==D?(o.useProgram(D),p=D,!0):!1}const Me={[Cs]:o.FUNC_ADD,[Dg]:o.FUNC_SUBTRACT,[Ug]:o.FUNC_REVERSE_SUBTRACT};if(n)Me[Lh]=o.MIN,Me[Ih]=o.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Me[Lh]=D.MIN_EXT,Me[Ih]=D.MAX_EXT)}const Pe={[Fg]:o.ZERO,[Og]:o.ONE,[Bg]:o.SRC_COLOR,[Zl]:o.SRC_ALPHA,[Wg]:o.SRC_ALPHA_SATURATE,[Gg]:o.DST_COLOR,[kg]:o.DST_ALPHA,[zg]:o.ONE_MINUS_SRC_COLOR,[Jl]:o.ONE_MINUS_SRC_ALPHA,[Vg]:o.ONE_MINUS_DST_COLOR,[Hg]:o.ONE_MINUS_DST_ALPHA,[Xg]:o.CONSTANT_COLOR,[qg]:o.ONE_MINUS_CONSTANT_COLOR,[jg]:o.CONSTANT_ALPHA,[Yg]:o.ONE_MINUS_CONSTANT_ALPHA};function _e(D,oe,ae,Ae,Ee,st,rt,Ft,en,ot){if(D===ss){m===!0&&(we(o.BLEND),m=!1);return}if(m===!1&&(De(o.BLEND),m=!0),D!==Ng){if(D!==v||ot!==F){if((x!==Cs||S!==Cs)&&(o.blendEquation(o.FUNC_ADD),x=Cs,S=Cs),ot)switch(D){case wr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rh:o.blendFunc(o.ONE,o.ONE);break;case Ch:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ph:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case wr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Ch:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ph:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,E=null,b=null,L=null,M.set(0,0,0),w=0,v=D,F=ot}return}Ee=Ee||oe,st=st||ae,rt=rt||Ae,(oe!==x||Ee!==S)&&(o.blendEquationSeparate(Me[oe],Me[Ee]),x=oe,S=Ee),(ae!==y||Ae!==E||st!==b||rt!==L)&&(o.blendFuncSeparate(Pe[ae],Pe[Ae],Pe[st],Pe[rt]),y=ae,E=Ae,b=st,L=rt),(Ft.equals(M)===!1||en!==w)&&(o.blendColor(Ft.r,Ft.g,Ft.b,en),M.copy(Ft),w=en),v=D,F=!1}function ht(D,oe){D.side===Tn?we(o.CULL_FACE):De(o.CULL_FACE);let ae=D.side===on;oe&&(ae=!ae),Be(ae),D.blending===wr&&D.transparent===!1?_e(ss):_e(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);const Ae=D.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),X(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?De(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){k!==D&&(D?o.frontFace(o.CW):o.frontFace(o.CCW),k=D)}function C(D){D!==Pg?(De(o.CULL_FACE),D!==U&&(D===Ah?o.cullFace(o.BACK):D===Lg?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),U=D}function A(D){D!==P&&(z&&o.lineWidth(D),P=D)}function X(D,oe,ae){D?(De(o.POLYGON_OFFSET_FILL),(I!==oe||N!==ae)&&(o.polygonOffset(oe,ae),I=oe,N=ae)):we(o.POLYGON_OFFSET_FILL)}function te(D){D?De(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function ee(D){D===void 0&&(D=o.TEXTURE0+G-1),Z!==D&&(o.activeTexture(D),Z=D)}function ne(D,oe,ae){ae===void 0&&(Z===null?ae=o.TEXTURE0+G-1:ae=Z);let Ae=K[ae];Ae===void 0&&(Ae={type:void 0,texture:void 0},K[ae]=Ae),(Ae.type!==D||Ae.texture!==oe)&&(Z!==ae&&(o.activeTexture(ae),Z=ae),o.bindTexture(D,oe||Ie[D]),Ae.type=D,Ae.texture=oe)}function ve(){const D=K[Z];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ce(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{o.compressedTexImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(D){ie.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),ie.copy(D))}function Je(D){me.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),me.copy(D))}function _t(D,oe){let ae=h.get(oe);ae===void 0&&(ae=new WeakMap,h.set(oe,ae));let Ae=ae.get(D);Ae===void 0&&(Ae=o.getUniformBlockIndex(oe,D.name),ae.set(D,Ae))}function Ge(D,oe){const Ae=h.get(oe).get(D);u.get(oe)!==Ae&&(o.uniformBlockBinding(oe,Ae,D.__bindingPointIndex),u.set(oe,Ae))}function se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),n===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},Z=null,K={},f={},g=new WeakMap,_=[],p=null,m=!1,v=null,x=null,y=null,E=null,S=null,b=null,L=null,M=new Te(0,0,0),w=0,F=!1,k=null,U=null,P=null,I=null,N=null,ie.set(0,0,o.canvas.width,o.canvas.height),me.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:De,disable:we,bindFramebuffer:Ke,drawBuffers:V,useProgram:Qt,setBlending:_e,setMaterial:ht,setFlipSided:Be,setCullFace:C,setLineWidth:A,setPolygonOffset:X,setScissorTest:te,activeTexture:ee,bindTexture:ne,unbindTexture:ve,compressedTexImage2D:ce,compressedTexImage3D:de,texImage2D:ye,texImage3D:fe,updateUBOMapping:_t,uniformBlockBinding:Ge,texStorage2D:Xe,texStorage3D:Ce,texSubImage2D:be,texSubImage3D:ze,compressedTexSubImage2D:Q,compressedTexSubImage3D:et,scissor:Ue,viewport:Je,reset:se}}function VM(o,e,t,n,i,s,r){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,A){return f?new OffscreenCanvas(C,A):Lo("canvas")}function _(C,A,X,te){let ee=1;if((C.width>te||C.height>te)&&(ee=te/Math.max(C.width,C.height)),ee<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ne=A?Ja:Math.floor,ve=ne(ee*C.width),ce=ne(ee*C.height);h===void 0&&(h=g(ve,ce));const de=X?g(ve,ce):h;return de.width=ve,de.height=ce,de.getContext("2d").drawImage(C,0,0,ve,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ve+"x"+ce+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return ru(C.width)&&ru(C.height)}function m(C){return a?!1:C.wrapS!==On||C.wrapT!==On||C.minFilter!==zt&&C.minFilter!==un}function v(C,A){return C.generateMipmaps&&A&&C.minFilter!==zt&&C.minFilter!==un}function x(C){o.generateMipmap(C)}function y(C,A,X,te,ee=!1){if(a===!1)return A;if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=A;if(A===o.RED&&(X===o.FLOAT&&(ne=o.R32F),X===o.HALF_FLOAT&&(ne=o.R16F),X===o.UNSIGNED_BYTE&&(ne=o.R8)),A===o.RED_INTEGER&&(X===o.UNSIGNED_BYTE&&(ne=o.R8UI),X===o.UNSIGNED_SHORT&&(ne=o.R16UI),X===o.UNSIGNED_INT&&(ne=o.R32UI),X===o.BYTE&&(ne=o.R8I),X===o.SHORT&&(ne=o.R16I),X===o.INT&&(ne=o.R32I)),A===o.RG&&(X===o.FLOAT&&(ne=o.RG32F),X===o.HALF_FLOAT&&(ne=o.RG16F),X===o.UNSIGNED_BYTE&&(ne=o.RG8)),A===o.RGBA){const ve=ee?Ya:Ze.getTransfer(te);X===o.FLOAT&&(ne=o.RGBA32F),X===o.HALF_FLOAT&&(ne=o.RGBA16F),X===o.UNSIGNED_BYTE&&(ne=ve===lt?o.SRGB8_ALPHA8:o.RGBA8),X===o.UNSIGNED_SHORT_4_4_4_4&&(ne=o.RGBA4),X===o.UNSIGNED_SHORT_5_5_5_1&&(ne=o.RGB5_A1)}return(ne===o.R16F||ne===o.R32F||ne===o.RG16F||ne===o.RG32F||ne===o.RGBA16F||ne===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(C,A,X){return v(C,X)===!0||C.isFramebufferTexture&&C.minFilter!==zt&&C.minFilter!==un?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function S(C){return C===zt||C===tu||C===za?o.NEAREST:o.LINEAR}function b(C){const A=C.target;A.removeEventListener("dispose",b),M(A),A.isVideoTexture&&u.delete(A)}function L(C){const A=C.target;A.removeEventListener("dispose",L),F(A)}function M(C){const A=n.get(C);if(A.__webglInit===void 0)return;const X=C.source,te=d.get(X);if(te){const ee=te[A.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(C),Object.keys(te).length===0&&d.delete(X)}n.remove(C)}function w(C){const A=n.get(C);o.deleteTexture(A.__webglTexture);const X=C.source,te=d.get(X);delete te[A.__cacheKey],r.memory.textures--}function F(C){const A=C.texture,X=n.get(C),te=n.get(A);if(te.__webglTexture!==void 0&&(o.deleteTexture(te.__webglTexture),r.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(X.__webglFramebuffer[ee]))for(let ne=0;ne<X.__webglFramebuffer[ee].length;ne++)o.deleteFramebuffer(X.__webglFramebuffer[ee][ne]);else o.deleteFramebuffer(X.__webglFramebuffer[ee]);X.__webglDepthbuffer&&o.deleteRenderbuffer(X.__webglDepthbuffer[ee])}else{if(Array.isArray(X.__webglFramebuffer))for(let ee=0;ee<X.__webglFramebuffer.length;ee++)o.deleteFramebuffer(X.__webglFramebuffer[ee]);else o.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&o.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&o.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ee=0;ee<X.__webglColorRenderbuffer.length;ee++)X.__webglColorRenderbuffer[ee]&&o.deleteRenderbuffer(X.__webglColorRenderbuffer[ee]);X.__webglDepthRenderbuffer&&o.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,ne=A.length;ee<ne;ee++){const ve=n.get(A[ee]);ve.__webglTexture&&(o.deleteTexture(ve.__webglTexture),r.memory.textures--),n.remove(A[ee])}n.remove(A),n.remove(C)}let k=0;function U(){k=0}function P(){const C=k;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),k+=1,C}function I(C){const A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function N(C,A){const X=n.get(C);if(C.isVideoTexture&&ht(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(X,C,A);return}}t.bindTexture(o.TEXTURE_2D,X.__webglTexture,o.TEXTURE0+A)}function G(C,A){const X=n.get(C);if(C.version>0&&X.__version!==C.version){ie(X,C,A);return}t.bindTexture(o.TEXTURE_2D_ARRAY,X.__webglTexture,o.TEXTURE0+A)}function z(C,A){const X=n.get(C);if(C.version>0&&X.__version!==C.version){ie(X,C,A);return}t.bindTexture(o.TEXTURE_3D,X.__webglTexture,o.TEXTURE0+A)}function H(C,A){const X=n.get(C);if(C.version>0&&X.__version!==C.version){me(X,C,A);return}t.bindTexture(o.TEXTURE_CUBE_MAP,X.__webglTexture,o.TEXTURE0+A)}const $={[zr]:o.REPEAT,[On]:o.CLAMP_TO_EDGE,[ja]:o.MIRRORED_REPEAT},Z={[zt]:o.NEAREST,[tu]:o.NEAREST_MIPMAP_NEAREST,[za]:o.NEAREST_MIPMAP_LINEAR,[un]:o.LINEAR,[Mp]:o.LINEAR_MIPMAP_NEAREST,[Gs]:o.LINEAR_MIPMAP_LINEAR},K={[T_]:o.NEVER,[P_]:o.ALWAYS,[b_]:o.LESS,[Ip]:o.LEQUAL,[w_]:o.EQUAL,[C_]:o.GEQUAL,[A_]:o.GREATER,[R_]:o.NOTEQUAL};function Y(C,A,X){if(X?(o.texParameteri(C,o.TEXTURE_WRAP_S,$[A.wrapS]),o.texParameteri(C,o.TEXTURE_WRAP_T,$[A.wrapT]),(C===o.TEXTURE_3D||C===o.TEXTURE_2D_ARRAY)&&o.texParameteri(C,o.TEXTURE_WRAP_R,$[A.wrapR]),o.texParameteri(C,o.TEXTURE_MAG_FILTER,Z[A.magFilter]),o.texParameteri(C,o.TEXTURE_MIN_FILTER,Z[A.minFilter])):(o.texParameteri(C,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(C,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(C===o.TEXTURE_3D||C===o.TEXTURE_2D_ARRAY)&&o.texParameteri(C,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(A.wrapS!==On||A.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(C,o.TEXTURE_MAG_FILTER,S(A.magFilter)),o.texParameteri(C,o.TEXTURE_MIN_FILTER,S(A.minFilter)),A.minFilter!==zt&&A.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(o.texParameteri(C,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(C,o.TEXTURE_COMPARE_FUNC,K[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===zt||A.minFilter!==za&&A.minFilter!==Gs||A.type===Ni&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Co&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(o.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function J(C,A){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",b));const te=A.source;let ee=d.get(te);ee===void 0&&(ee={},d.set(te,ee));const ne=I(A);if(ne!==C.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,X=!0),ee[ne].usedTimes++;const ve=ee[C.__cacheKey];ve!==void 0&&(ee[C.__cacheKey].usedTimes--,ve.usedTimes===0&&w(A)),C.__cacheKey=ne,C.__webglTexture=ee[ne].texture}return X}function ie(C,A,X){let te=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(te=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(te=o.TEXTURE_3D);const ee=J(C,A),ne=A.source;t.bindTexture(te,C.__webglTexture,o.TEXTURE0+X);const ve=n.get(ne);if(ne.version!==ve.__version||ee===!0){t.activeTexture(o.TEXTURE0+X);const ce=Ze.getPrimaries(Ze.workingColorSpace),de=A.colorSpace===zn?null:Ze.getPrimaries(A.colorSpace),be=A.colorSpace===zn||ce===de?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ze=m(A)&&p(A.image)===!1;let Q=_(A.image,ze,!1,i.maxTextureSize);Q=Be(A,Q);const et=p(Q)||a,Xe=s.convert(A.format,A.colorSpace);let Ce=s.convert(A.type),ye=y(A.internalFormat,Xe,Ce,A.colorSpace,A.isVideoTexture);Y(te,A,et);let fe;const Ue=A.mipmaps,Je=a&&A.isVideoTexture!==!0&&ye!==Rp,_t=ve.__version===void 0||ee===!0,Ge=E(A,Q,et);if(A.isDepthTexture)ye=o.DEPTH_COMPONENT,a?A.type===Ni?ye=o.DEPTH_COMPONENT32F:A.type===Ji?ye=o.DEPTH_COMPONENT24:A.type===Us?ye=o.DEPTH24_STENCIL8:ye=o.DEPTH_COMPONENT16:A.type===Ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Fs&&ye===o.DEPTH_COMPONENT&&A.type!==Du&&A.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ji,Ce=s.convert(A.type)),A.format===kr&&ye===o.DEPTH_COMPONENT&&(ye=o.DEPTH_STENCIL,A.type!==Us&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Us,Ce=s.convert(A.type))),_t&&(Je?t.texStorage2D(o.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(o.TEXTURE_2D,0,ye,Q.width,Q.height,0,Xe,Ce,null));else if(A.isDataTexture)if(Ue.length>0&&et){Je&&_t&&t.texStorage2D(o.TEXTURE_2D,Ge,ye,Ue[0].width,Ue[0].height);for(let se=0,D=Ue.length;se<D;se++)fe=Ue[se],Je?t.texSubImage2D(o.TEXTURE_2D,se,0,0,fe.width,fe.height,Xe,Ce,fe.data):t.texImage2D(o.TEXTURE_2D,se,ye,fe.width,fe.height,0,Xe,Ce,fe.data);A.generateMipmaps=!1}else Je?(_t&&t.texStorage2D(o.TEXTURE_2D,Ge,ye,Q.width,Q.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,Q.width,Q.height,Xe,Ce,Q.data)):t.texImage2D(o.TEXTURE_2D,0,ye,Q.width,Q.height,0,Xe,Ce,Q.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Je&&_t&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ge,ye,Ue[0].width,Ue[0].height,Q.depth);for(let se=0,D=Ue.length;se<D;se++)fe=Ue[se],A.format!==Bn?Xe!==null?Je?t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,0,fe.width,fe.height,Q.depth,Xe,fe.data,0,0):t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,se,ye,fe.width,fe.height,Q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(o.TEXTURE_2D_ARRAY,se,0,0,0,fe.width,fe.height,Q.depth,Xe,Ce,fe.data):t.texImage3D(o.TEXTURE_2D_ARRAY,se,ye,fe.width,fe.height,Q.depth,0,Xe,Ce,fe.data)}else{Je&&_t&&t.texStorage2D(o.TEXTURE_2D,Ge,ye,Ue[0].width,Ue[0].height);for(let se=0,D=Ue.length;se<D;se++)fe=Ue[se],A.format!==Bn?Xe!==null?Je?t.compressedTexSubImage2D(o.TEXTURE_2D,se,0,0,fe.width,fe.height,Xe,fe.data):t.compressedTexImage2D(o.TEXTURE_2D,se,ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(o.TEXTURE_2D,se,0,0,fe.width,fe.height,Xe,Ce,fe.data):t.texImage2D(o.TEXTURE_2D,se,ye,fe.width,fe.height,0,Xe,Ce,fe.data)}else if(A.isDataArrayTexture)Je?(_t&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Ge,ye,Q.width,Q.height,Q.depth),t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Xe,Ce,Q.data)):t.texImage3D(o.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,Xe,Ce,Q.data);else if(A.isData3DTexture)Je?(_t&&t.texStorage3D(o.TEXTURE_3D,Ge,ye,Q.width,Q.height,Q.depth),t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Xe,Ce,Q.data)):t.texImage3D(o.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,Xe,Ce,Q.data);else if(A.isFramebufferTexture){if(_t)if(Je)t.texStorage2D(o.TEXTURE_2D,Ge,ye,Q.width,Q.height);else{let se=Q.width,D=Q.height;for(let oe=0;oe<Ge;oe++)t.texImage2D(o.TEXTURE_2D,oe,ye,se,D,0,Xe,Ce,null),se>>=1,D>>=1}}else if(Ue.length>0&&et){Je&&_t&&t.texStorage2D(o.TEXTURE_2D,Ge,ye,Ue[0].width,Ue[0].height);for(let se=0,D=Ue.length;se<D;se++)fe=Ue[se],Je?t.texSubImage2D(o.TEXTURE_2D,se,0,0,Xe,Ce,fe):t.texImage2D(o.TEXTURE_2D,se,ye,Xe,Ce,fe);A.generateMipmaps=!1}else Je?(_t&&t.texStorage2D(o.TEXTURE_2D,Ge,ye,Q.width,Q.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,Xe,Ce,Q)):t.texImage2D(o.TEXTURE_2D,0,ye,Xe,Ce,Q);v(A,et)&&x(te),ve.__version=ne.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function me(C,A,X){if(A.image.length!==6)return;const te=J(C,A),ee=A.source;t.bindTexture(o.TEXTURE_CUBE_MAP,C.__webglTexture,o.TEXTURE0+X);const ne=n.get(ee);if(ee.version!==ne.__version||te===!0){t.activeTexture(o.TEXTURE0+X);const ve=Ze.getPrimaries(Ze.workingColorSpace),ce=A.colorSpace===zn?null:Ze.getPrimaries(A.colorSpace),de=A.colorSpace===zn||ve===ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const be=A.isCompressedTexture||A.image[0].isCompressedTexture,ze=A.image[0]&&A.image[0].isDataTexture,Q=[];for(let se=0;se<6;se++)!be&&!ze?Q[se]=_(A.image[se],!1,!0,i.maxCubemapSize):Q[se]=ze?A.image[se].image:A.image[se],Q[se]=Be(A,Q[se]);const et=Q[0],Xe=p(et)||a,Ce=s.convert(A.format,A.colorSpace),ye=s.convert(A.type),fe=y(A.internalFormat,Ce,ye,A.colorSpace),Ue=a&&A.isVideoTexture!==!0,Je=ne.__version===void 0||te===!0;let _t=E(A,et,Xe);Y(o.TEXTURE_CUBE_MAP,A,Xe);let Ge;if(be){Ue&&Je&&t.texStorage2D(o.TEXTURE_CUBE_MAP,_t,fe,et.width,et.height);for(let se=0;se<6;se++){Ge=Q[se].mipmaps;for(let D=0;D<Ge.length;D++){const oe=Ge[D];A.format!==Bn?Ce!==null?Ue?t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,0,0,oe.width,oe.height,Ce,oe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,fe,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,0,0,oe.width,oe.height,Ce,ye,oe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+se,D,fe,oe.width,oe.height,0,Ce,ye,oe.data)}}}else{Ge=A.mipmaps,Ue&&Je&&(Ge.length>0&&_t++,t.texStorage2D(o.TEXTURE_CUBE_MAP,_t,fe,Q[0].width,Q[0].height));for(let se=0;se<6;se++)if(ze){Ue?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Q[se].width,Q[se].height,Ce,ye,Q[se].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,fe,Q[se].width,Q[se].height,0,Ce,ye,Q[se].data);for(let D=0;D<Ge.length;D++){const ae=Ge[D].image[se].image;Ue?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,0,0,ae.width,ae.height,Ce,ye,ae.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,fe,ae.width,ae.height,0,Ce,ye,ae.data)}}else{Ue?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ce,ye,Q[se]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,fe,Ce,ye,Q[se]);for(let D=0;D<Ge.length;D++){const oe=Ge[D];Ue?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,0,0,Ce,ye,oe.image[se]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+se,D+1,fe,Ce,ye,oe.image[se])}}}v(A,Xe)&&x(o.TEXTURE_CUBE_MAP),ne.__version=ee.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function ge(C,A,X,te,ee,ne){const ve=s.convert(X.format,X.colorSpace),ce=s.convert(X.type),de=y(X.internalFormat,ve,ce,X.colorSpace);if(!n.get(A).__hasExternalTextures){const ze=Math.max(1,A.width>>ne),Q=Math.max(1,A.height>>ne);ee===o.TEXTURE_3D||ee===o.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,de,ze,Q,A.depth,0,ve,ce,null):t.texImage2D(ee,ne,de,ze,Q,0,ve,ce,null)}t.bindFramebuffer(o.FRAMEBUFFER,C),_e(A)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,te,ee,n.get(X).__webglTexture,0,Pe(A)):(ee===o.TEXTURE_2D||ee>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,te,ee,n.get(X).__webglTexture,ne),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ie(C,A,X){if(o.bindRenderbuffer(o.RENDERBUFFER,C),A.depthBuffer&&!A.stencilBuffer){let te=a===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(X||_e(A)){const ee=A.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Ni?te=o.DEPTH_COMPONENT32F:ee.type===Ji&&(te=o.DEPTH_COMPONENT24));const ne=Pe(A);_e(A)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ne,te,A.width,A.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,te,A.width,A.height)}else o.renderbufferStorage(o.RENDERBUFFER,te,A.width,A.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,C)}else if(A.depthBuffer&&A.stencilBuffer){const te=Pe(A);X&&_e(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,te,o.DEPTH24_STENCIL8,A.width,A.height):_e(A)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,te,o.DEPTH24_STENCIL8,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,C)}else{const te=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0;ee<te.length;ee++){const ne=te[ee],ve=s.convert(ne.format,ne.colorSpace),ce=s.convert(ne.type),de=y(ne.internalFormat,ve,ce,ne.colorSpace),be=Pe(A);X&&_e(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,be,de,A.width,A.height):_e(A)?c.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,be,de,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,de,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function De(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),N(A.depthTexture,0);const te=n.get(A.depthTexture).__webglTexture,ee=Pe(A);if(A.depthTexture.format===Fs)_e(A)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,te,0,ee):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,te,0);else if(A.depthTexture.format===kr)_e(A)?c.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,te,0,ee):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function we(C){const A=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");De(A.__webglFramebuffer,C)}else if(X){A.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[te]),A.__webglDepthbuffer[te]=o.createRenderbuffer(),Ie(A.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),Ie(A.__webglDepthbuffer,C,!1);t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(C,A,X){const te=n.get(C);A!==void 0&&ge(te.__webglFramebuffer,C,C.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),X!==void 0&&we(C)}function V(C){const A=C.texture,X=n.get(C),te=n.get(A);C.addEventListener("dispose",L),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture()),te.__version=A.version,r.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,ne=C.isWebGLMultipleRenderTargets===!0,ve=p(C)||a;if(ee){X.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer[ce]=[];for(let de=0;de<A.mipmaps.length;de++)X.__webglFramebuffer[ce][de]=o.createFramebuffer()}else X.__webglFramebuffer[ce]=o.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)X.__webglFramebuffer[ce]=o.createFramebuffer()}else X.__webglFramebuffer=o.createFramebuffer();if(ne)if(i.drawBuffers){const ce=C.texture;for(let de=0,be=ce.length;de<be;de++){const ze=n.get(ce[de]);ze.__webglTexture===void 0&&(ze.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&_e(C)===!1){const ce=ne?A:[A];X.__webglMultisampledFramebuffer=o.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){const be=ce[de];X.__webglColorRenderbuffer[de]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,X.__webglColorRenderbuffer[de]);const ze=s.convert(be.format,be.colorSpace),Q=s.convert(be.type),et=y(be.internalFormat,ze,Q,be.colorSpace,C.isXRRenderTarget===!0),Xe=Pe(C);o.renderbufferStorageMultisample(o.RENDERBUFFER,Xe,et,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+de,o.RENDERBUFFER,X.__webglColorRenderbuffer[de])}o.bindRenderbuffer(o.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=o.createRenderbuffer(),Ie(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ee){t.bindTexture(o.TEXTURE_CUBE_MAP,te.__webglTexture),Y(o.TEXTURE_CUBE_MAP,A,ve);for(let ce=0;ce<6;ce++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)ge(X.__webglFramebuffer[ce][de],C,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else ge(X.__webglFramebuffer[ce],C,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(A,ve)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const ce=C.texture;for(let de=0,be=ce.length;de<be;de++){const ze=ce[de],Q=n.get(ze);t.bindTexture(o.TEXTURE_2D,Q.__webglTexture),Y(o.TEXTURE_2D,ze,ve),ge(X.__webglFramebuffer,C,ze,o.COLOR_ATTACHMENT0+de,o.TEXTURE_2D,0),v(ze,ve)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let ce=o.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ce=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,te.__webglTexture),Y(ce,A,ve),a&&A.mipmaps&&A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)ge(X.__webglFramebuffer[de],C,A,o.COLOR_ATTACHMENT0,ce,de);else ge(X.__webglFramebuffer,C,A,o.COLOR_ATTACHMENT0,ce,0);v(A,ve)&&x(ce),t.unbindTexture()}C.depthBuffer&&we(C)}function Qt(C){const A=p(C)||a,X=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,ee=X.length;te<ee;te++){const ne=X[te];if(v(ne,A)){const ve=C.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,ce=n.get(ne).__webglTexture;t.bindTexture(ve,ce),x(ve),t.unbindTexture()}}}function Me(C){if(a&&C.samples>0&&_e(C)===!1){const A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],X=C.width,te=C.height;let ee=o.COLOR_BUFFER_BIT;const ne=[],ve=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ce=n.get(C),de=C.isWebGLMultipleRenderTargets===!0;if(de)for(let be=0;be<A.length;be++)t.bindFramebuffer(o.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+be,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+be,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let be=0;be<A.length;be++){ne.push(o.COLOR_ATTACHMENT0+be),C.depthBuffer&&ne.push(ve);const ze=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(ze===!1&&(C.depthBuffer&&(ee|=o.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=o.STENCIL_BUFFER_BIT)),de&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ce.__webglColorRenderbuffer[be]),ze===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[ve]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[ve])),de){const Q=n.get(A[be]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Q,0)}o.blitFramebuffer(0,0,X,te,0,0,X,te,ee,o.NEAREST),l&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<A.length;be++){t.bindFramebuffer(o.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+be,o.RENDERBUFFER,ce.__webglColorRenderbuffer[be]);const ze=n.get(A[be]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+be,o.TEXTURE_2D,ze,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Pe(C){return Math.min(i.maxSamples,C.samples)}function _e(C){const A=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ht(C){const A=r.render.frame;u.get(C)!==A&&(u.set(C,A),C.update())}function Be(C,A){const X=C.colorSpace,te=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===su||X!==Gt&&X!==zn&&(Ze.getTransfer(X)===lt?a===!1?e.has("EXT_sRGB")===!0&&te===Bn?(C.format=su,C.minFilter=un,C.generateMipmaps=!1):A=Dp.sRGBToLinear(A):(te!==Bn||ee!==os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}this.allocateTextureUnit=P,this.resetTextureUnits=U,this.setTexture2D=N,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=H,this.rebindTextures=Ke,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=_e}function WM(o,e,t){const n=t.isWebGL2;function i(s,r=zn){let a;const c=Ze.getTransfer(r);if(s===os)return o.UNSIGNED_BYTE;if(s===Sp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Tp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===h_)return o.BYTE;if(s===d_)return o.SHORT;if(s===Du)return o.UNSIGNED_SHORT;if(s===Ep)return o.INT;if(s===Ji)return o.UNSIGNED_INT;if(s===Ni)return o.FLOAT;if(s===Co)return n?o.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===f_)return o.ALPHA;if(s===Bn)return o.RGBA;if(s===p_)return o.LUMINANCE;if(s===m_)return o.LUMINANCE_ALPHA;if(s===Fs)return o.DEPTH_COMPONENT;if(s===kr)return o.DEPTH_STENCIL;if(s===su)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===g_)return o.RED;if(s===bp)return o.RED_INTEGER;if(s===__)return o.RG;if(s===wp)return o.RG_INTEGER;if(s===Ap)return o.RGBA_INTEGER;if(s===Vc||s===Wc||s===Xc||s===qc)if(c===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Vc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Vc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dh||s===Uh||s===Fh||s===Oh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Dh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Uh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Oh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rp)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Bh||s===zh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Bh)return c===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===zh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===kh||s===Hh||s===Gh||s===Vh||s===Wh||s===Xh||s===qh||s===jh||s===Yh||s===Kh||s===$h||s===Zh||s===Jh||s===Qh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===kh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$h)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qh)return c===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jc||s===ed||s===td)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===jc)return c===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ed)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===td)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===v_||s===nd||s===id||s===sd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===jc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===nd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===id)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Us?n?o.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class XM extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ns extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qM={type:"move"};class _l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qM)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ns;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jM extends Jr{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=t.getContextAttributes();let p=null,m=null;const v=[],x=[],y=new He;let E=null;const S=new Wt;S.layers.enable(1),S.viewport=new it;const b=new Wt;b.layers.enable(2),b.viewport=new it;const L=[S,b],M=new XM;M.layers.enable(1),M.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=v[Y];return J===void 0&&(J=new _l,v[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=v[Y];return J===void 0&&(J=new _l,v[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=v[Y];return J===void 0&&(J=new _l,v[Y]=J),J.getHandSpace()};function k(Y){const J=x.indexOf(Y.inputSource);if(J===-1)return;const ie=v[J];ie!==void 0&&(ie.update(Y.inputSource,Y.frame,l||r),ie.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",P);for(let Y=0;Y<v.length;Y++){const J=x[Y];J!==null&&(x[Y]=null,v[Y].disconnect(J))}w=null,F=null,e.setRenderTarget(p),f=null,d=null,h=null,i=null,m=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",U),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new Vs(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:os,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,ie=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?kr:Fs,ie=_.stencil?Us:Ji);const ge={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new Vs(d.textureWidth,d.textureHeight,{format:Bn,type:os,depthTexture:new Wp(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ie=e.properties.get(m);Ie.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(Y){for(let J=0;J<Y.removed.length;J++){const ie=Y.removed[J],me=x.indexOf(ie);me>=0&&(x[me]=null,v[me].disconnect(ie))}for(let J=0;J<Y.added.length;J++){const ie=Y.added[J];let me=x.indexOf(ie);if(me===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=x.length){x.push(ie),me=Ie;break}else if(x[Ie]===null){x[Ie]=ie,me=Ie;break}if(me===-1)break}const ge=v[me];ge&&ge.connect(ie)}}const I=new O,N=new O;function G(Y,J,ie){I.setFromMatrixPosition(J.matrixWorld),N.setFromMatrixPosition(ie.matrixWorld);const me=I.distanceTo(N),ge=J.projectionMatrix.elements,Ie=ie.projectionMatrix.elements,De=ge[14]/(ge[10]-1),we=ge[14]/(ge[10]+1),Ke=(ge[9]+1)/ge[5],V=(ge[9]-1)/ge[5],Qt=(ge[8]-1)/ge[0],Me=(Ie[8]+1)/Ie[0],Pe=De*Qt,_e=De*Me,ht=me/(-Qt+Me),Be=ht*-Qt;J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Be),Y.translateZ(ht),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const C=De+ht,A=we+ht,X=Pe-Be,te=_e+(me-Be),ee=Ke*we/A*C,ne=V*we/A*C;Y.projectionMatrix.makePerspective(X,te,ee,ne,C,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function z(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;M.near=b.near=S.near=Y.near,M.far=b.far=S.far=Y.far,(w!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,F=M.far);const J=Y.parent,ie=M.cameras;z(M,J);for(let me=0;me<ie.length;me++)z(ie[me],J);ie.length===2?G(M,S,b):M.projectionMatrix.copy(S.projectionMatrix),H(Y,M,J)};function H(Y,J,ie){ie===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ie.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Gr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)};let $=null;function Z(Y,J){if(u=J.getViewerPose(l||r),g=J,u!==null){const ie=u.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let me=!1;ie.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let ge=0;ge<ie.length;ge++){const Ie=ie[ge];let De=null;if(f!==null)De=f.getViewport(Ie);else{const Ke=h.getViewSubImage(d,Ie);De=Ke.viewport,ge===0&&(e.setRenderTargetTextures(m,Ke.colorTexture,d.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(m))}let we=L[ge];we===void 0&&(we=new Wt,we.layers.enable(ge),we.viewport=new it,L[ge]=we),we.matrix.fromArray(Ie.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ie.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(De.x,De.y,De.width,De.height),ge===0&&(M.matrix.copy(we.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(we)}}for(let ie=0;ie<v.length;ie++){const me=x[ie],ge=v[ie];me!==null&&ge!==void 0&&ge.update(me,J,l||r)}$&&$(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const K=new Vp;K.setAnimationLoop(Z),this.setAnimationLoop=function(Y){$=Y},this.dispose=function(){}}}function YM(o,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,kp(o)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,x):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=o._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function KM(o,e,t,n){let i={},s={},r=[];const a=t.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function l(v,x){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",p));const E=x.program;n.updateUBOMapping(v,E);const S=e.render.frame;s[v.id]!==S&&(d(v),s[v.id]=S)}function u(v){const x=h();v.__bindingPointIndex=x;const y=o.createBuffer(),E=v.__size,S=v.usage;return o.bindBuffer(o.UNIFORM_BUFFER,y),o.bufferData(o.UNIFORM_BUFFER,E,S),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],y=v.uniforms,E=v.__cache;o.bindBuffer(o.UNIFORM_BUFFER,x);for(let S=0,b=y.length;S<b;S++){const L=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,w=L.length;M<w;M++){const F=L[M];if(f(F,S,M,E)===!0){const k=F.__offset,U=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let I=0;I<U.length;I++){const N=U[I],G=_(N);typeof N=="number"||typeof N=="boolean"?(F.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,k+P,F.__data)):N.isMatrix3?(F.__data[0]=N.elements[0],F.__data[1]=N.elements[1],F.__data[2]=N.elements[2],F.__data[3]=0,F.__data[4]=N.elements[3],F.__data[5]=N.elements[4],F.__data[6]=N.elements[5],F.__data[7]=0,F.__data[8]=N.elements[6],F.__data[9]=N.elements[7],F.__data[10]=N.elements[8],F.__data[11]=0):(N.toArray(F.__data,P),P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,k,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(v,x,y,E){const S=v.value,b=x+"_"+y;if(E[b]===void 0)return typeof S=="number"||typeof S=="boolean"?E[b]=S:E[b]=S.clone(),!0;{const L=E[b];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return E[b]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function g(v){const x=v.uniforms;let y=0;const E=16;for(let b=0,L=x.length;b<L;b++){const M=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,F=M.length;w<F;w++){const k=M[w],U=Array.isArray(k.value)?k.value:[k.value];for(let P=0,I=U.length;P<I;P++){const N=U[P],G=_(N),z=y%E;z!==0&&E-z<G.boundary&&(y+=E-z),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=G.storage}}}const S=y%E;return S>0&&(y+=E-S),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const y=r.indexOf(x.__bindingPointIndex);r.splice(y,1),o.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const v in i)o.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:c,update:l,dispose:m}}class fi{constructor(e={}){const{canvas:t=X_(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=r;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this._useLegacyLights=!1,this.toneMapping=rs,this.toneMappingExposure=1;const x=this;let y=!1,E=0,S=0,b=null,L=-1,M=null;const w=new it,F=new it;let k=null;const U=new Te(0);let P=0,I=t.width,N=t.height,G=1,z=null,H=null;const $=new it(0,0,I,N),Z=new it(0,0,I,N);let K=!1;const Y=new Bu;let J=!1,ie=!1,me=null;const ge=new Oe,Ie=new He,De=new O,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ke(){return b===null?G:1}let V=n;function Qt(R,B){for(let q=0;q<R.length;q++){const j=R[q],W=t.getContext(j,B);if(W!==null)return W}return null}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nu}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",oe,!1),V===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),V=Qt(B,R),V===null)throw Qt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Me,Pe,_e,ht,Be,C,A,X,te,ee,ne,ve,ce,de,be,ze,Q,et,Xe,Ce,ye,fe,Ue,Je;function _t(){Me=new ry(V),Pe=new Qx(V,Me,e),Me.init(Pe),fe=new WM(V,Me,Pe),_e=new GM(V,Me,Pe),ht=new cy(V),Be=new RM,C=new VM(V,Me,_e,Be,Pe,fe,ht),A=new ty(x),X=new sy(x),te=new g0(V,Pe),Ue=new Zx(V,Me,te,Pe),ee=new oy(V,te,ht,Ue),ne=new dy(V,ee,te,ht),Xe=new hy(V,Pe,C),ze=new ey(Be),ve=new AM(x,A,X,Me,Pe,Ue,ze),ce=new YM(x,Be),de=new PM,be=new FM(Me,Pe),et=new $x(x,A,X,_e,ne,d,c),Q=new HM(x,ne,Pe),Je=new KM(V,ht,Pe,_e),Ce=new Jx(V,Me,ht,Pe),ye=new ay(V,Me,ht,Pe),ht.programs=ve.programs,x.capabilities=Pe,x.extensions=Me,x.properties=Be,x.renderLists=de,x.shadowMap=Q,x.state=_e,x.info=ht}_t();const Ge=new jM(x,V);this.xr=Ge,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(I,N,!1))},this.getSize=function(R){return R.set(I,N)},this.setSize=function(R,B,q=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,N=B,t.width=Math.floor(R*G),t.height=Math.floor(B*G),q===!0&&(t.style.width=R+"px",t.style.height=B+"px"),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(I*G,N*G).floor()},this.setDrawingBufferSize=function(R,B,q){I=R,N=B,G=q,t.width=Math.floor(R*q),t.height=Math.floor(B*q),this.setViewport(0,0,R,B)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,B,q,j){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,B,q,j),_e.viewport(w.copy($).multiplyScalar(G).floor())},this.getScissor=function(R){return R.copy(Z)},this.setScissor=function(R,B,q,j){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,B,q,j),_e.scissor(F.copy(Z).multiplyScalar(G).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(R){_e.setScissorTest(K=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){H=R},this.getClearColor=function(R){return R.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(R=!0,B=!0,q=!0){let j=0;if(R){let W=!1;if(b!==null){const ue=b.texture.format;W=ue===Ap||ue===wp||ue===bp}if(W){const ue=b.texture.type,xe=ue===os||ue===Ji||ue===Du||ue===Us||ue===Sp||ue===Tp,Se=et.getClearColor(),Re=et.getClearAlpha(),ke=Se.r,Le=Se.g,Ne=Se.b;xe?(f[0]=ke,f[1]=Le,f[2]=Ne,f[3]=Re,V.clearBufferuiv(V.COLOR,0,f)):(g[0]=ke,g[1]=Le,g[2]=Ne,g[3]=Re,V.clearBufferiv(V.COLOR,0,g))}else j|=V.COLOR_BUFFER_BIT}B&&(j|=V.DEPTH_BUFFER_BIT),q&&(j|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),be.dispose(),Be.dispose(),A.dispose(),X.dispose(),ne.dispose(),Ue.dispose(),Je.dispose(),ve.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",en),Ge.removeEventListener("sessionend",ot),me&&(me.dispose(),me=null),tn.stop()};function se(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=ht.autoReset,B=Q.enabled,q=Q.autoUpdate,j=Q.needsUpdate,W=Q.type;_t(),ht.autoReset=R,Q.enabled=B,Q.autoUpdate=q,Q.needsUpdate=j,Q.type=W}function oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const B=R.target;B.removeEventListener("dispose",ae),Ae(B)}function Ae(R){Ee(R),Be.remove(R)}function Ee(R){const B=Be.get(R).programs;B!==void 0&&(B.forEach(function(q){ve.releaseProgram(q)}),R.isShaderMaterial&&ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,q,j,W,ue){B===null&&(B=we);const xe=W.isMesh&&W.matrixWorld.determinant()<0,Se=wg(R,B,q,j,W);_e.setMaterial(j,xe);let Re=q.index,ke=1;if(j.wireframe===!0){if(Re=ee.getWireframeAttribute(q),Re===void 0)return;ke=2}const Le=q.drawRange,Ne=q.attributes.position;let Mt=Le.start*ke,vn=(Le.start+Le.count)*ke;ue!==null&&(Mt=Math.max(Mt,ue.start*ke),vn=Math.min(vn,(ue.start+ue.count)*ke)),Re!==null?(Mt=Math.max(Mt,0),vn=Math.min(vn,Re.count)):Ne!=null&&(Mt=Math.max(Mt,0),vn=Math.min(vn,Ne.count));const Ot=vn-Mt;if(Ot<0||Ot===1/0)return;Ue.setup(W,j,Se,q,Re);let mi,dt=Ce;if(Re!==null&&(mi=te.get(Re),dt=ye,dt.setIndex(mi)),W.isMesh)j.wireframe===!0?(_e.setLineWidth(j.wireframeLinewidth*Ke()),dt.setMode(V.LINES)):dt.setMode(V.TRIANGLES);else if(W.isLine){let Ve=j.linewidth;Ve===void 0&&(Ve=1),_e.setLineWidth(Ve*Ke()),W.isLineSegments?dt.setMode(V.LINES):W.isLineLoop?dt.setMode(V.LINE_LOOP):dt.setMode(V.LINE_STRIP)}else W.isPoints?dt.setMode(V.POINTS):W.isSprite&&dt.setMode(V.TRIANGLES);if(W.isBatchedMesh)dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)dt.renderInstances(Mt,Ot,W.count);else if(q.isInstancedBufferGeometry){const Ve=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,zc=Math.min(q.instanceCount,Ve);dt.renderInstances(Mt,Ot,zc)}else dt.render(Mt,Ot)};function st(R,B,q){R.transparent===!0&&R.side===Tn&&R.forceSinglePass===!1?(R.side=on,R.needsUpdate=!0,Qo(R,B,q),R.side=Fi,R.needsUpdate=!0,Qo(R,B,q),R.side=Tn):Qo(R,B,q)}this.compile=function(R,B,q=null){q===null&&(q=R),p=be.get(q),p.init(),v.push(p),q.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),R!==q&&R.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(x._useLegacyLights);const j=new Set;return R.traverse(function(W){const ue=W.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const Se=ue[xe];st(Se,q,W),j.add(Se)}else st(ue,q,W),j.add(ue)}),v.pop(),p=null,j},this.compileAsync=function(R,B,q=null){const j=this.compile(R,B,q);return new Promise(W=>{function ue(){if(j.forEach(function(xe){Be.get(xe).currentProgram.isReady()&&j.delete(xe)}),j.size===0){W(R);return}setTimeout(ue,10)}Me.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let rt=null;function Ft(R){rt&&rt(R)}function en(){tn.stop()}function ot(){tn.start()}const tn=new Vp;tn.setAnimationLoop(Ft),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(R){rt=R,Ge.setAnimationLoop(R),R===null?tn.stop():tn.start()},Ge.addEventListener("sessionstart",en),Ge.addEventListener("sessionend",ot),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(B),B=Ge.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,B,b),p=be.get(R,v.length),p.init(),v.push(p),ge.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(ge),ie=this.localClippingEnabled,J=ze.init(this.clippingPlanes,ie),_=de.get(R,m.length),_.init(),m.push(_),$n(R,B,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(z,H),this.info.render.frame++,J===!0&&ze.beginShadows();const q=p.state.shadowsArray;if(Q.render(q,R,B),J===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(_,R),p.setupLights(x._useLegacyLights),B.isArrayCamera){const j=B.cameras;for(let W=0,ue=j.length;W<ue;W++){const xe=j[W];Mh(_,R,xe,xe.viewport)}}else Mh(_,R,B);b!==null&&(C.updateMultisampleRenderTarget(b),C.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(x,R,B),Ue.resetDefaultState(),L=-1,M=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function $n(R,B,q,j){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Y.intersectsSprite(R)){j&&De.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ge);const xe=ne.update(R),Se=R.material;Se.visible&&_.push(R,xe,Se,q,De.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Y.intersectsObject(R))){const xe=ne.update(R),Se=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),De.copy(R.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),De.copy(xe.boundingSphere.center)),De.applyMatrix4(R.matrixWorld).applyMatrix4(ge)),Array.isArray(Se)){const Re=xe.groups;for(let ke=0,Le=Re.length;ke<Le;ke++){const Ne=Re[ke],Mt=Se[Ne.materialIndex];Mt&&Mt.visible&&_.push(R,xe,Mt,q,De.z,Ne)}}else Se.visible&&_.push(R,xe,Se,q,De.z,null)}}const ue=R.children;for(let xe=0,Se=ue.length;xe<Se;xe++)$n(ue[xe],B,q,j)}function Mh(R,B,q,j){const W=R.opaque,ue=R.transmissive,xe=R.transparent;p.setupLightsView(q),J===!0&&ze.setGlobalState(x.clippingPlanes,q),ue.length>0&&bg(W,ue,B,q),j&&_e.viewport(w.copy(j)),W.length>0&&Jo(W,B,q),ue.length>0&&Jo(ue,B,q),xe.length>0&&Jo(xe,B,q),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function bg(R,B,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const ue=Pe.isWebGL2;me===null&&(me=new Vs(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Co:os,minFilter:Gs,samples:ue?4:0})),x.getDrawingBufferSize(Ie),ue?me.setSize(Ie.x,Ie.y):me.setSize(Ja(Ie.x),Ja(Ie.y));const xe=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(U),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Se=x.toneMapping;x.toneMapping=rs,Jo(R,q,j),C.updateMultisampleRenderTarget(me),C.updateRenderTargetMipmap(me);let Re=!1;for(let ke=0,Le=B.length;ke<Le;ke++){const Ne=B[ke],Mt=Ne.object,vn=Ne.geometry,Ot=Ne.material,mi=Ne.group;if(Ot.side===Tn&&Mt.layers.test(j.layers)){const dt=Ot.side;Ot.side=on,Ot.needsUpdate=!0,Eh(Mt,q,j,vn,Ot,mi),Ot.side=dt,Ot.needsUpdate=!0,Re=!0}}Re===!0&&(C.updateMultisampleRenderTarget(me),C.updateRenderTargetMipmap(me)),x.setRenderTarget(xe),x.setClearColor(U,P),x.toneMapping=Se}function Jo(R,B,q){const j=B.isScene===!0?B.overrideMaterial:null;for(let W=0,ue=R.length;W<ue;W++){const xe=R[W],Se=xe.object,Re=xe.geometry,ke=j===null?xe.material:j,Le=xe.group;Se.layers.test(q.layers)&&Eh(Se,B,q,Re,ke,Le)}}function Eh(R,B,q,j,W,ue){R.onBeforeRender(x,B,q,j,W,ue),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(x,B,q,j,R,ue),W.transparent===!0&&W.side===Tn&&W.forceSinglePass===!1?(W.side=on,W.needsUpdate=!0,x.renderBufferDirect(q,B,j,W,R,ue),W.side=Fi,W.needsUpdate=!0,x.renderBufferDirect(q,B,j,W,R,ue),W.side=Tn):x.renderBufferDirect(q,B,j,W,R,ue),R.onAfterRender(x,B,q,j,W,ue)}function Qo(R,B,q){B.isScene!==!0&&(B=we);const j=Be.get(R),W=p.state.lights,ue=p.state.shadowsArray,xe=W.state.version,Se=ve.getParameters(R,W.state,ue,B,q),Re=ve.getProgramCacheKey(Se);let ke=j.programs;j.environment=R.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(R.isMeshStandardMaterial?X:A).get(R.envMap||j.environment),ke===void 0&&(R.addEventListener("dispose",ae),ke=new Map,j.programs=ke);let Le=ke.get(Re);if(Le!==void 0){if(j.currentProgram===Le&&j.lightsStateVersion===xe)return Th(R,Se),Le}else Se.uniforms=ve.getUniforms(R),R.onBuild(q,Se,x),R.onBeforeCompile(Se,x),Le=ve.acquireProgram(Se,Re),ke.set(Re,Le),j.uniforms=Se.uniforms;const Ne=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ne.clippingPlanes=ze.uniform),Th(R,Se),j.needsLights=Rg(R),j.lightsStateVersion=xe,j.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.directionalShadowMap.value=W.state.directionalShadowMap,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotShadowMap.value=W.state.spotShadowMap,Ne.spotLightMatrix.value=W.state.spotLightMatrix,Ne.spotLightMap.value=W.state.spotLightMap,Ne.pointShadowMap.value=W.state.pointShadowMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=Le,j.uniformsList=null,Le}function Sh(R){if(R.uniformsList===null){const B=R.currentProgram.getUniforms();R.uniformsList=ka.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Th(R,B){const q=Be.get(R);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function wg(R,B,q,j,W){B.isScene!==!0&&(B=we),C.resetTextureUnits();const ue=B.fog,xe=j.isMeshStandardMaterial?B.environment:null,Se=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Gt,Re=(j.isMeshStandardMaterial?X:A).get(j.envMap||xe),ke=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Le=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ne=!!q.morphAttributes.position,Mt=!!q.morphAttributes.normal,vn=!!q.morphAttributes.color;let Ot=rs;j.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ot=x.toneMapping);const mi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=mi!==void 0?mi.length:0,Ve=Be.get(j),zc=p.state.lights;if(J===!0&&(ie===!0||R!==M)){const Pn=R===M&&j.id===L;ze.setState(j,R,Pn)}let vt=!1;j.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==zc.state.version||Ve.outputColorSpace!==Se||W.isBatchedMesh&&Ve.batching===!1||!W.isBatchedMesh&&Ve.batching===!0||W.isInstancedMesh&&Ve.instancing===!1||!W.isInstancedMesh&&Ve.instancing===!0||W.isSkinnedMesh&&Ve.skinning===!1||!W.isSkinnedMesh&&Ve.skinning===!0||W.isInstancedMesh&&Ve.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ve.instancingColor===!1&&W.instanceColor!==null||Ve.envMap!==Re||j.fog===!0&&Ve.fog!==ue||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ze.numPlanes||Ve.numIntersection!==ze.numIntersection)||Ve.vertexAlphas!==ke||Ve.vertexTangents!==Le||Ve.morphTargets!==Ne||Ve.morphNormals!==Mt||Ve.morphColors!==vn||Ve.toneMapping!==Ot||Pe.isWebGL2===!0&&Ve.morphTargetsCount!==dt)&&(vt=!0):(vt=!0,Ve.__version=j.version);let _s=Ve.currentProgram;vt===!0&&(_s=Qo(j,B,W));let bh=!1,so=!1,kc=!1;const qt=_s.getUniforms(),vs=Ve.uniforms;if(_e.useProgram(_s.program)&&(bh=!0,so=!0,kc=!0),j.id!==L&&(L=j.id,so=!0),bh||M!==R){qt.setValue(V,"projectionMatrix",R.projectionMatrix),qt.setValue(V,"viewMatrix",R.matrixWorldInverse);const Pn=qt.map.cameraPosition;Pn!==void 0&&Pn.setValue(V,De.setFromMatrixPosition(R.matrixWorld)),Pe.logarithmicDepthBuffer&&qt.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&qt.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,so=!0,kc=!0)}if(W.isSkinnedMesh){qt.setOptional(V,W,"bindMatrix"),qt.setOptional(V,W,"bindMatrixInverse");const Pn=W.skeleton;Pn&&(Pe.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),qt.setValue(V,"boneTexture",Pn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(qt.setOptional(V,W,"batchingTexture"),qt.setValue(V,"batchingTexture",W._matricesTexture,C));const Hc=q.morphAttributes;if((Hc.position!==void 0||Hc.normal!==void 0||Hc.color!==void 0&&Pe.isWebGL2===!0)&&Xe.update(W,q,_s),(so||Ve.receiveShadow!==W.receiveShadow)&&(Ve.receiveShadow=W.receiveShadow,qt.setValue(V,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(vs.envMap.value=Re,vs.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),so&&(qt.setValue(V,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&Ag(vs,kc),ue&&j.fog===!0&&ce.refreshFogUniforms(vs,ue),ce.refreshMaterialUniforms(vs,j,G,N,me),ka.upload(V,Sh(Ve),vs,C)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ka.upload(V,Sh(Ve),vs,C),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&qt.setValue(V,"center",W.center),qt.setValue(V,"modelViewMatrix",W.modelViewMatrix),qt.setValue(V,"normalMatrix",W.normalMatrix),qt.setValue(V,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Pn=j.uniformsGroups;for(let Gc=0,Cg=Pn.length;Gc<Cg;Gc++)if(Pe.isWebGL2){const wh=Pn[Gc];Je.update(wh,_s),Je.bind(wh,_s)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _s}function Ag(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function Rg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,B,q){Be.get(R.texture).__webglTexture=B,Be.get(R.depthTexture).__webglTexture=q;const j=Be.get(R);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,B){const q=Be.get(R);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,q=0){b=R,E=B,S=q;let j=!0,W=null,ue=!1,xe=!1;if(R){const Re=Be.get(R);Re.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(V.FRAMEBUFFER,null),j=!1):Re.__webglFramebuffer===void 0?C.setupRenderTarget(R):Re.__hasExternalTextures&&C.rebindTextures(R,Be.get(R.texture).__webglTexture,Be.get(R.depthTexture).__webglTexture);const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(xe=!0);const Le=Be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Le[B])?W=Le[B][q]:W=Le[B],ue=!0):Pe.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?W=Be.get(R).__webglMultisampledFramebuffer:Array.isArray(Le)?W=Le[q]:W=Le,w.copy(R.viewport),F.copy(R.scissor),k=R.scissorTest}else w.copy($).multiplyScalar(G).floor(),F.copy(Z).multiplyScalar(G).floor(),k=K;if(_e.bindFramebuffer(V.FRAMEBUFFER,W)&&Pe.drawBuffers&&j&&_e.drawBuffers(R,W),_e.viewport(w),_e.scissor(F),_e.setScissorTest(k),ue){const Re=Be.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+B,Re.__webglTexture,q)}else if(xe){const Re=Be.get(R.texture),ke=B||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Re.__webglTexture,q||0,ke)}L=-1},this.readRenderTargetPixels=function(R,B,q,j,W,ue,xe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){_e.bindFramebuffer(V.FRAMEBUFFER,Se);try{const Re=R.texture,ke=Re.format,Le=Re.type;if(ke!==Bn&&fe.convert(ke)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Le===Co&&(Me.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Le!==os&&fe.convert(Le)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Ni&&(Pe.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-j&&q>=0&&q<=R.height-W&&V.readPixels(B,q,j,W,fe.convert(ke),fe.convert(Le),ue)}finally{const Re=b!==null?Be.get(b).__webglFramebuffer:null;_e.bindFramebuffer(V.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(R,B,q=0){const j=Math.pow(2,-q),W=Math.floor(B.image.width*j),ue=Math.floor(B.image.height*j);C.setTexture2D(B,0),V.copyTexSubImage2D(V.TEXTURE_2D,q,0,0,R.x,R.y,W,ue),_e.unbindTexture()},this.copyTextureToTexture=function(R,B,q,j=0){const W=B.image.width,ue=B.image.height,xe=fe.convert(q.format),Se=fe.convert(q.type);C.setTexture2D(q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,j,R.x,R.y,W,ue,xe,Se,B.image.data):B.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,j,R.x,R.y,B.mipmaps[0].width,B.mipmaps[0].height,xe,B.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,j,R.x,R.y,xe,Se,B.image),j===0&&q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(R,B,q,j,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=R.max.x-R.min.x+1,xe=R.max.y-R.min.y+1,Se=R.max.z-R.min.z+1,Re=fe.convert(j.format),ke=fe.convert(j.type);let Le;if(j.isData3DTexture)C.setTexture3D(j,0),Le=V.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)C.setTexture2DArray(j,0),Le=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const Ne=V.getParameter(V.UNPACK_ROW_LENGTH),Mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),vn=V.getParameter(V.UNPACK_SKIP_PIXELS),Ot=V.getParameter(V.UNPACK_SKIP_ROWS),mi=V.getParameter(V.UNPACK_SKIP_IMAGES),dt=q.isCompressedTexture?q.mipmaps[W]:q.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,dt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,dt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,R.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,R.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,R.min.z),q.isDataTexture||q.isData3DTexture?V.texSubImage3D(Le,W,B.x,B.y,B.z,ue,xe,Se,Re,ke,dt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Le,W,B.x,B.y,B.z,ue,xe,Se,Re,dt.data)):V.texSubImage3D(Le,W,B.x,B.y,B.z,ue,xe,Se,Re,ke,dt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ne),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,vn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ot),V.pixelStorei(V.UNPACK_SKIP_IMAGES,mi),W===0&&j.generateMipmaps&&V.generateMipmap(Le),_e.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),_e.unbindTexture()},this.resetState=function(){E=0,S=0,b=null,_e.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Uu?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===yc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xt?Os:Pp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Os?xt:Gt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $M extends fi{}$M.prototype.isWebGL1Renderer=!0;class Sc extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ZM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=iu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new O;class ku{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ku(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kd=new O,$d=new it,Zd=new it,JM=new O,Jd=new Oe,Ea=new O,vl=new di,Qd=new Oe,xl=new Vo;class QM extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nh,this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ki),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ea),this.boundingBox.expandByPoint(Ea)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new di),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ea),this.boundingSphere.expandByPoint(Ea)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vl.copy(this.boundingSphere),vl.applyMatrix4(i),e.ray.intersectsSphere(vl)!==!1&&(Qd.copy(i).invert(),xl.copy(e.ray).applyMatrix4(Qd),!(this.boundingBox!==null&&xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===u_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;$d.fromBufferAttribute(i.attributes.skinIndex,e),Zd.fromBufferAttribute(i.attributes.skinWeight,e),Kd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Zd.getComponent(s);if(r!==0){const a=$d.getComponent(s);Jd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(JM.copy(Kd).applyMatrix4(Jd),r)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class $p extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class eE extends Xt{constructor(e=null,t=1,n=1,i,s,r,a,c,l=zt,u=zt,h,d){super(null,r,a,c,l,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ef=new Oe,tE=new Oe;class Hu{constructor(e=[],t=[]){this.uuid=Kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:tE;ef.multiplyMatrices(a,t[s]),ef.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Hu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new eE(t,e,e,Bn,Ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new $p),this.bones.push(r),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class au extends an{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mr=new Oe,tf=new Oe,Sa=[],nf=new ki,nE=new Oe,lo=new wt,uo=new di;class Zp extends wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new au(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,nE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),nf.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(nf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),uo.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(lo.geometry=this.geometry,lo.material=this.material,lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),e.ray.intersectsSphere(uo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,mr),tf.multiplyMatrices(n,mr),lo.matrixWorld=tf,lo.raycast(e,Sa);for(let r=0,a=Sa.length;r<a;r++){const c=Sa[r];c.instanceId=s,c.object=this,t.push(c)}Sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new au(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class eo extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sf=new O,rf=new O,of=new Oe,yl=new Vo,Ta=new di;class Tc extends gt{constructor(e=new cn,t=new eo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)sf.fromBufferAttribute(t,i-1),rf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sf.distanceTo(rf);e.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(i),Ta.radius+=s,e.ray.intersectsSphere(Ta)===!1)return;of.copy(i).invert(),yl.copy(e.ray).applyMatrix4(of);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new O,u=new O,h=new O,d=new O,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,r.start),v=Math.min(g.count,r.start+r.count);for(let x=m,y=v-1;x<y;x+=f){const E=g.getX(x),S=g.getX(x+1);if(l.fromBufferAttribute(p,E),u.fromBufferAttribute(p,S),yl.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,r.start),v=Math.min(p.count,r.start+r.count);for(let x=m,y=v-1;x<y;x+=f){if(l.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),yl.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const af=new O,cf=new O;class Ys extends Tc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)af.fromBufferAttribute(t,i),cf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+af.distanceTo(cf);e.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class iE extends Tc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Jp extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lf=new Oe,cu=new Vo,ba=new di,wa=new O;class sE extends gt{constructor(e=new cn,t=new Jp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(i),ba.radius+=s,e.ray.intersectsSphere(ba)===!1)return;lf.copy(i).invert(),cu.copy(e.ray).applyMatrix4(lf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let g=d,_=f;g<_;g++){const p=l.getX(g);wa.fromBufferAttribute(h,p),uf(wa,p,c,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(h.count,r.start+r.count);for(let g=d,_=f;g<_;g++)wa.fromBufferAttribute(h,g),uf(wa,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function uf(o,e,t,n,i,s,r){const a=cu.distanceSqToPoint(o);if(a<t){const c=new O;cu.closestPointToPoint(o,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:r})}}class Gu extends cn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],r=[],a=[],c=[],l=new O,u=new He;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[d]/e+1)/2,u.y=(r[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(a,3)),this.setAttribute("uv",new Ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const Aa=new O,Ra=new O,Ml=new O,Ca=new Fn;class Vu extends cn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(Ar*t),r=e.getIndex(),a=e.getAttribute("position"),c=r?r.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){r?(l[0]=r.getX(g),l[1]=r.getX(g+1),l[2]=r.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:p,c:m}=Ca;if(_.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),Ca.getNormal(Ml),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=h[v],E=h[x],S=Ca[u[v]],b=Ca[u[x]],L=`${y}_${E}`,M=`${E}_${y}`;M in d&&d[M]?(Ml.dot(d[M].normal)<=s&&(f.push(S.x,S.y,S.z),f.push(b.x,b.y,b.z)),d[M]=null):L in d||(d[L]={index0:l[v],index1:l[x],normal:Ml.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:p}=d[g];Aa.fromBufferAttribute(a,_),Ra.fromBufferAttribute(a,p),f.push(Aa.x,Aa.y,Aa.z),f.push(Ra.x,Ra.y,Ra.z)}this.setAttribute("position",new Ht(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Io extends cn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const u=[],h=new O,d=new O,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const v=[],x=m/n;let y=0;m===0&&r===0?y=.5/t:m===n&&c===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const S=E/t;h.x=-e*Math.cos(i+S*s)*Math.sin(r+x*a),h.y=e*Math.cos(r+x*a),h.z=e*Math.sin(i+S*s)*Math.sin(r+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(S+y,1-x),v.push(l++)}u.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const x=u[m][v+1],y=u[m][v],E=u[m+1][v],S=u[m+1][v+1];(m!==0||r>0)&&f.push(x,y,S),(m!==n-1||c<Math.PI)&&f.push(y,E,S)}this.setIndex(f),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wu extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lp,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hi extends Wu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Pa(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function rE(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function oE(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hf(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[r++]=o[a+c]}return i}function Qp(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class Xo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class aE extends Xo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rd,endingEnd:rd}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],c=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case od:s=e,a=2*t-n;break;case ad:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case od:r=e,c=2*n-t;break;case ad:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,v=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*p+(1.5+f)*_+.5*g,y=f*p-f*_;for(let E=0;E!==a;++E)s[E]=m*r[u+E]+v*r[l+E]+x*r[c+E]+y*r[h+E];return s}}class cE extends Xo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=r[l+d]*h+r[c+d]*u;return s}}class lE extends Xo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class pi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pa(t,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pa(e.times,Array),values:Pa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new aE(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Po:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case Yc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Yc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,r),e=!1;break}r=c}if(i!==void 0&&rE(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yc,s=e.length-1;let r=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==r){e[r]=e[a];const h=a*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[a+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Hr;class to extends pi{}to.prototype.ValueTypeName="bool";to.prototype.ValueBufferType=Array;to.prototype.DefaultInterpolation=Po;to.prototype.InterpolantFactoryMethodLinear=void 0;to.prototype.InterpolantFactoryMethodSmooth=void 0;class em extends pi{}em.prototype.ValueTypeName="color";class Xr extends pi{}Xr.prototype.ValueTypeName="number";class uE extends Xo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)zi.slerpFlat(s,0,r,l-a,r,l,c);return s}}class Ws extends pi{InterpolantFactoryMethodLinear(e){return new uE(this.times,this.values,this.getValueSize(),e)}}Ws.prototype.ValueTypeName="quaternion";Ws.prototype.DefaultInterpolation=Hr;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class no extends pi{}no.prototype.ValueTypeName="string";no.prototype.ValueBufferType=Array;no.prototype.DefaultInterpolation=Po;no.prototype.InterpolantFactoryMethodLinear=void 0;no.prototype.InterpolantFactoryMethodSmooth=void 0;class qr extends pi{}qr.prototype.ValueTypeName="vector";class hE{constructor(e,t=-1,n,i=x_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Kn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(fE(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(pi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=oE(c);c=hf(c,1,u),l=hf(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new Xr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const p=[],m=[];Qp(f,p,m,g),p.length!==0&&_.push(new h(d,p,m))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let v=0;v!==d[g].morphTargets.length;++v){const x=d[g];p.push(x.time),m.push(x.morphTarget===_?1:0)}i.push(new Xr(".morphTargetInfluence["+_+"]",p,m))}c=f.length*r}else{const f=".bones["+t[h].name+"]";n(qr,f+".position",d,"pos",i),n(Ws,f+".quaternion",d,"rot",i),n(qr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function dE(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xr;case"vector":case"vector2":case"vector3":case"vector4":return qr;case"color":return em;case"quaternion":return Ws;case"bool":case"boolean":return to;case"string":return no}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function fE(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dE(o.type);if(o.times===void 0){const t=[],n=[];Qp(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Qi={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class tm{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,a),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const pE=new tm;class io{constructor(e){this.manager=e!==void 0?e:pE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}io.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class mE extends Error{constructor(e,t){super(e),this.response=t}}class nm extends io{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Qi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:i});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Mi[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){v();function v(){h.read().then(({done:x,value:y})=>{if(x)m.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let S=0,b=u.length;S<b;S++){const L=u[S];L.onProgress&&L.onProgress(E)}m.enqueue(y),v()}})}}});return new Response(p)}else throw new mE(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Qi.add(e,l);const u=Mi[e];delete Mi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Mi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Mi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class gE extends io{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Qi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=Lo("img");function c(){u(),Qi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class _E extends io{constructor(e){super(e)}load(e,t,n,i){const s=new Xt,r=new gE(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Xu extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const El=new Oe,df=new O,ff=new O;class qu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bu,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;df.setFromMatrixPosition(e.matrixWorld),t.position.copy(df),ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ff),t.updateMatrixWorld(),El.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(El)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vE extends qu{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Gr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xE extends Xu{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new vE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pf=new Oe,ho=new O,Sl=new O;class yE extends qu{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ho.setFromMatrixPosition(e.matrixWorld),n.position.copy(ho),Sl.copy(n.position),Sl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sl),n.updateMatrixWorld(),i.makeTranslation(-ho.x,-ho.y,-ho.z),pf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pf)}}class ME extends Xu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class EE extends qu{constructor(){super(new Mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class SE extends Xu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new EE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class To{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class TE extends io{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Qi.get(e);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Qi.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Qi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Qi.add(e,c),s.manager.itemStart(e)}}const ju="\\[\\]\\.:\\/",bE=new RegExp("["+ju+"]","g"),Yu="[^"+ju+"]",wE="[^"+ju.replace("\\.","")+"]",AE=/((?:WC+[\/:])*)/.source.replace("WC",Yu),RE=/(WCOD+)?/.source.replace("WCOD",wE),CE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yu),PE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yu),LE=new RegExp("^"+AE+RE+CE+PE+"$"),IE=["material","materials","bones","map"];class NE{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bE,"")}static parseTrackName(e){const t=LE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);IE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[i];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=NE;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ku{constructor(e,t,n=0,i=1/0){this.ray=new Vo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ou,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return lu(e,this,n,t),n.sort(mf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)lu(e[i],this,n,t);return n.sort(mf),n}}function mf(o,e){return o.distance-e.distance}function lu(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let s=0,r=i.length;s<r;s++)lu(i[s],e,t,!0)}}class im extends Ys{constructor(e=10,t=10,n=4473924,i=8947848){n=new Te(n),i=new Te(i);const s=t/2,r=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=r){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=d===s?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const u=new cn;u.setAttribute("position",new Ht(c,3)),u.setAttribute("color",new Ht(l,3));const h=new eo({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nu);class Yn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new T);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new T);const n=this.elements,i=e.x,s=e.y,r=e.z;return t.x=n[0]*i+n[1]*s+n[2]*r,t.y=n[3]*i+n[4]*s+n[5]*r,t.z=n[6]*i+n[7]*s+n[8]*r,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Yn);const n=this.elements,i=e.elements,s=t.elements,r=n[0],a=n[1],c=n[2],l=n[3],u=n[4],h=n[5],d=n[6],f=n[7],g=n[8],_=i[0],p=i[1],m=i[2],v=i[3],x=i[4],y=i[5],E=i[6],S=i[7],b=i[8];return s[0]=r*_+a*v+c*E,s[1]=r*p+a*x+c*S,s[2]=r*m+a*y+c*b,s[3]=l*_+u*v+h*E,s[4]=l*p+u*x+h*S,s[5]=l*m+u*y+h*b,s[6]=d*_+f*v+g*E,s[7]=d*p+f*x+g*S,s[8]=d*m+f*y+g*b,t}scale(e,t){t===void 0&&(t=new Yn);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new T);const n=3,i=4,s=[];let r,a;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)s[r+i*a]=this.elements[r+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let c=3;const l=c;let u;const h=4;let d;do{if(r=l-c,s[r+i*r]===0){for(a=r+1;a<l;a++)if(s[r+i*a]!==0){u=h;do d=h-u,s[d+i*r]+=s[d+i*a];while(--u);break}}if(s[r+i*r]!==0)for(a=r+1;a<l;a++){const f=s[r+i*a]/s[r+i*r];u=h;do d=h-u,s[d+i*a]=d<=r?0:s[d+i*a]-s[d+i*r]*f;while(--u)}}while(--c);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Yn);const t=3,n=6,i=DE;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const u=n;let h;do{if(s=c-a,i[s+n*s]===0){for(r=s+1;r<c;r++)if(i[s+n*r]!==0){l=u;do h=u-l,i[h+n*s]+=i[h+n*r];while(--l);break}}if(i[s+n*s]!==0)for(r=s+1;r<c;r++){const d=i[s+n*r]/i[s+n*s];l=u;do h=u-l,i[h+n*r]=h<=s?0:i[h+n*r]-i[h+n*s]*d;while(--l)}}while(--a);s=2;do{r=s-1;do{const d=i[s+n*r]/i[s+n*s];l=n;do h=n-l,i[h+n*r]=i[h+n*r]-i[h+n*s]*d;while(--l)}while(r--)}while(--s);s=2;do{const d=1/i[s+n*s];l=n;do h=n-l,i[h+n*s]=i[h+n*s]*d;while(--l)}while(s--);s=2;do{r=2;do{if(h=i[t+r+n*s],isNaN(h)||h===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,r,h)}while(r--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,r=t+t,a=n+n,c=i+i,l=t*r,u=t*a,h=t*c,d=n*a,f=n*c,g=i*c,_=s*r,p=s*a,m=s*c,v=this.elements;return v[3*0+0]=1-(d+g),v[3*0+1]=u-m,v[3*0+2]=h+p,v[3*1+0]=u+m,v[3*1+1]=1-(l+g),v[3*1+2]=f-_,v[3*2+0]=h-p,v[3*2+1]=f+_,v[3*2+2]=1-(l+d),this}transpose(e){e===void 0&&(e=new Yn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const DE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class T{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new T);const n=e.x,i=e.y,s=e.z,r=this.x,a=this.y,c=this.z;return t.x=a*s-c*i,t.y=c*n-r*s,t.z=r*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new T(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new T(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Yn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new T);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(r-n)*(r-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z;return(s-t)*(s-t)+(r-n)*(r-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new T);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new T),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new T),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new T),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=UE,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=FE;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,e)):(r.set(0,1,0),i.cross(r,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,r=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=r+(e.z-r)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(gf),gf.almostEquals(e,t)}clone(){return new T(this.x,this.y,this.z)}}T.ZERO=new T(0,0,0);T.UNIT_X=new T(1,0,0);T.UNIT_Y=new T(0,1,0);T.UNIT_Z=new T(0,0,1);const UE=new T,FE=new T,gf=new T;class Cn{constructor(e){e===void 0&&(e={}),this.lowerBound=new T,this.upperBound=new T,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,r=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),r.copy(s);for(let c=1;c<e.length;c++){let l=e[c];a&&(a.vmult(l,_f),l=_f),l.x>r.x&&(r.x=l.x),l.x<s.x&&(s.x=l.x),l.y>r.y&&(r.y=l.y),l.y<s.y&&(s.y=l.y),l.z>r.z&&(r.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Cn().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,r=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return r&&a&&c}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,r,a,c){const l=this.lowerBound,u=this.upperBound;e.copy(l),t.set(u.x,l.y,l.z),n.set(u.x,u.y,l.z),i.set(l.x,u.y,u.z),s.set(u.x,l.y,u.z),r.set(l.x,u.y,l.z),a.set(l.x,l.y,u.z),c.copy(u)}toLocalFrame(e,t){const n=vf,i=n[0],s=n[1],r=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7];this.getCorners(i,s,r,a,c,l,u,h);for(let d=0;d!==8;d++){const f=n[d];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=vf,i=n[0],s=n[1],r=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7];this.getCorners(i,s,r,a,c,l,u,h);for(let d=0;d!==8;d++){const f=n[d];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,r=1/t.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,h=(this.lowerBound.z-n.z)*r,d=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,c),Math.min(l,u)),Math.min(h,d)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,u)),Math.max(h,d));return!(g<0||f>g)}}const _f=new T,vf=[new T,new T,new T,new T,new T,new T,new T,new T];class xf{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class sm{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class It{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new T),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=OE,i=BE;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new It);const n=this.x,i=this.y,s=this.z,r=this.w,a=e.x,c=e.y,l=e.z,u=e.w;return t.x=n*u+r*a+i*l-s*c,t.y=i*u+r*c+s*a-n*l,t.z=s*u+r*l+n*c-i*a,t.w=r*u-n*a-i*c-s*l,t}inverse(e){e===void 0&&(e=new It);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const r=1/(t*t+n*n+i*i+s*s);return e.x*=r,e.y*=r,e.z*=r,e.w*=r,e}conjugate(e){return e===void 0&&(e=new It),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new T);const n=e.x,i=e.y,s=e.z,r=this.x,a=this.y,c=this.z,l=this.w,u=l*n+a*s-c*i,h=l*i+c*n-r*s,d=l*s+r*i-a*n,f=-r*n-a*i-c*s;return t.x=u*l+f*-r+h*-c-d*-a,t.y=h*l+f*-a+d*-r-u*-c,t.z=d*l+f*-c+u*-a-h*-r,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const r=this.x,a=this.y,c=this.z,l=this.w;switch(t){case"YZX":const u=r*a+c*l;if(u>.499&&(n=2*Math.atan2(r,l),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(r,l),i=-Math.PI/2,s=0),n===void 0){const h=r*r,d=a*a,f=c*c;n=Math.atan2(2*a*l-2*r*c,1-2*d-2*f),i=Math.asin(2*u),s=Math.atan2(2*r*l-2*a*c,1-2*h-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),r=Math.cos(t/2),a=Math.cos(n/2),c=Math.sin(e/2),l=Math.sin(t/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=c*r*a+s*l*u,this.y=s*l*a-c*r*u,this.z=s*r*u+c*l*a,this.w=s*r*a-c*l*u):i==="YXZ"?(this.x=c*r*a+s*l*u,this.y=s*l*a-c*r*u,this.z=s*r*u-c*l*a,this.w=s*r*a+c*l*u):i==="ZXY"?(this.x=c*r*a-s*l*u,this.y=s*l*a+c*r*u,this.z=s*r*u+c*l*a,this.w=s*r*a-c*l*u):i==="ZYX"?(this.x=c*r*a-s*l*u,this.y=s*l*a+c*r*u,this.z=s*r*u-c*l*a,this.w=s*r*a+c*l*u):i==="YZX"?(this.x=c*r*a+s*l*u,this.y=s*l*a+c*r*u,this.z=s*r*u-c*l*a,this.w=s*r*a-c*l*u):i==="XZY"&&(this.x=c*r*a-s*l*u,this.y=s*l*a-c*r*u,this.z=s*r*u+c*l*a,this.w=s*r*a+c*l*u),this}clone(){return new It(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new It);const i=this.x,s=this.y,r=this.z,a=this.w;let c=e.x,l=e.y,u=e.z,h=e.w,d,f,g,_,p;return f=i*c+s*l+r*u+a*h,f<0&&(f=-f,c=-c,l=-l,u=-u,h=-h),1-f>1e-6?(d=Math.acos(f),g=Math.sin(d),_=Math.sin((1-t)*d)/g,p=Math.sin(t*d)/g):(_=1-t,p=t),n.x=_*i+p*c,n.y=_*s+p*l,n.z=_*r+p*u,n.w=_*a+p*h,n}integrate(e,t,n,i){i===void 0&&(i=new It);const s=e.x*n.x,r=e.y*n.y,a=e.z*n.z,c=this.x,l=this.y,u=this.z,h=this.w,d=t*.5;return i.x+=d*(s*h+r*u-a*l),i.y+=d*(r*h+a*c-s*u),i.z+=d*(a*h+s*l-r*c),i.w+=d*(-s*c-r*l-a*u),i}}const OE=new T,BE=new T,zE={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class he{constructor(e){e===void 0&&(e={}),this.id=he.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}he.idCounter=0;he.types=zE;class $e{constructor(e){e===void 0&&(e={}),this.position=new T,this.quaternion=new It,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return $e.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return $e.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new T),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new T),n.vsub(e,i),t.conjugate(yf),yf.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new T),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new T),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new T),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const yf=new It;class bo extends he{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=e;super({type:he.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new T;for(let s=0;s!==e.length;s++){const r=e[s],a=r.length;for(let c=0;c!==a;c++){const l=(c+1)%a;t[r[c]].vsub(t[r[l]],i),i.normalize();let u=!1;for(let h=0;h!==n.length;h++)if(n[h].almostEquals(i)||n[h].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new T;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];bo.computeNormal(i,s,r,t)}static computeNormal(e,t,n,i){const s=new T,r=new T;t.vsub(e,r),n.vsub(t,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,r,a,c,l){const u=new T;let h=-1,d=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),s.vmult(u,u);const _=u.dot(r);_>d&&(d=_,h=g)}const f=[];for(let g=0;g<n.faces[h].length;g++){const _=n.vertices[n.faces[h][g]],p=new T;p.copy(_),s.vmult(p,p),i.vadd(p,p),f.push(p)}h>=0&&this.clipFaceAgainstHull(r,e,t,f,a,c,l)}findSeparatingAxis(e,t,n,i,s,r,a,c){const l=new T,u=new T,h=new T,d=new T,f=new T,g=new T;let _=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let m=0;m!==p.uniqueAxes.length;m++){n.vmult(p.uniqueAxes[m],l);const v=p.testSepAxis(l,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,r.copy(l))}else{const m=a?a.length:p.faces.length;for(let v=0;v<m;v++){const x=a?a[v]:v;l.copy(p.faceNormals[x]),n.vmult(l,l);const y=p.testSepAxis(l,e,t,n,i,s);if(y===!1)return!1;y<_&&(_=y,r.copy(l))}}if(e.uniqueAxes)for(let m=0;m!==e.uniqueAxes.length;m++){s.vmult(e.uniqueAxes[m],u);const v=p.testSepAxis(u,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,r.copy(u))}else{const m=c?c.length:e.faces.length;for(let v=0;v<m;v++){const x=c?c[v]:v;u.copy(e.faceNormals[x]),s.vmult(u,u);const y=p.testSepAxis(u,e,t,n,i,s);if(y===!1)return!1;y<_&&(_=y,r.copy(u))}}for(let m=0;m!==p.uniqueEdges.length;m++){n.vmult(p.uniqueEdges[m],d);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],f),d.cross(f,g),!g.almostZero()){g.normalize();const x=p.testSepAxis(g,e,t,n,i,s);if(x===!1)return!1;x<_&&(_=x,r.copy(g))}}return i.vsub(t,h),h.dot(r)>0&&r.negate(r),!0}testSepAxis(e,t,n,i,s,r){const a=this;bo.project(a,e,n,i,Tl),bo.project(t,e,s,r,bl);const c=Tl[0],l=Tl[1],u=bl[0],h=bl[1];if(c<h||u<l)return!1;const d=c-h,f=u-l;return d<f?d:f}calculateLocalInertia(e,t){const n=new T,i=new T;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*r*2*r+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,r,a){const c=new T,l=new T,u=new T,h=new T,d=new T,f=new T,g=new T,_=new T,p=this,m=[],v=i,x=m;let y=-1,E=Number.MAX_VALUE;for(let w=0;w<p.faces.length;w++){c.copy(p.faceNormals[w]),n.vmult(c,c);const F=c.dot(e);F<E&&(E=F,y=w)}if(y<0)return;const S=p.faces[y];S.connectedFaces=[];for(let w=0;w<p.faces.length;w++)for(let F=0;F<p.faces[w].length;F++)S.indexOf(p.faces[w][F])!==-1&&w!==y&&S.connectedFaces.indexOf(w)===-1&&S.connectedFaces.push(w);const b=S.length;for(let w=0;w<b;w++){const F=p.vertices[S[w]],k=p.vertices[S[(w+1)%b]];F.vsub(k,l),u.copy(l),n.vmult(u,u),t.vadd(u,u),h.copy(this.faceNormals[y]),n.vmult(h,h),t.vadd(h,h),u.cross(h,d),d.negate(d),f.copy(F),n.vmult(f,f),t.vadd(f,f);const U=S.connectedFaces[w];g.copy(this.faceNormals[U]);const P=this.getPlaneConstantOfFace(U);_.copy(g),n.vmult(_,_);const I=P-_.dot(t);for(this.clipFaceAgainstPlane(v,x,_,I);v.length;)v.shift();for(;x.length;)v.push(x.shift())}g.copy(this.faceNormals[y]);const L=this.getPlaneConstantOfFace(y);_.copy(g),n.vmult(_,_);const M=L-_.dot(t);for(let w=0;w<v.length;w++){let F=_.dot(v[w])+M;if(F<=s&&(console.log(`clamped: depth=${F} to minDist=${s}`),F=s),F<=r){const k=v[w];if(F<=1e-6){const U={point:k,normal:_,depth:F};a.push(U)}}}}clipFaceAgainstPlane(e,t,n,i){let s,r;const a=e.length;if(a<2)return t;let c=e[e.length-1],l=e[0];s=n.dot(c)+i;for(let u=0;u<a;u++){if(l=e[u],r=n.dot(l)+i,s<0)if(r<0){const h=new T;h.copy(l),t.push(h)}else{const h=new T;c.lerp(l,s/(s-r),h),t.push(h)}else if(r<0){const h=new T;c.lerp(l,s/(s-r),h),t.push(h),t.push(l)}c=l,s=r}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new T);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new T);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let r,a,c,l,u,h,d=new T;for(let f=0;f<s.length;f++){d.copy(s[f]),t.vmult(d,d),e.vadd(d,d);const g=d;(r===void 0||g.x<r)&&(r=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(c===void 0||g.z<c)&&(c=g.z),(h===void 0||g.z>h)&&(h=g.z)}n.set(r,a,c),i.set(l,u,h)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new T);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const r=i[s];t.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];t.vmult(r,r)}}if(e)for(let s=0;s<n;s++){const r=i[s];r.vadd(e,r)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new T;this.getAveragePointLocal(r);for(let a=0;a<this.faces.length;a++){let c=i[a];const l=t[n[a][0]],u=new T;e.vsub(l,u);const h=c.dot(u),d=new T;r.vsub(l,d);const f=c.dot(d);if(h<0&&f>0||h>0&&f<0)return!1}return s?1:-1}static project(e,t,n,i,s){const r=e.vertices.length,a=kE;let c=0,l=0;const u=HE,h=e.vertices;u.setZero(),$e.vectorToLocalFrame(n,i,t,a),$e.pointToLocalFrame(n,i,u,u);const d=u.dot(a);l=c=h[0].dot(a);for(let f=1;f<r;f++){const g=h[f].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=d,c-=d,l>c){const f=l;l=c,c=f}s[0]=c,s[1]=l}}const Tl=[],bl=[];new T;const kE=new T,HE=new T;class bc extends he{constructor(e){super({type:he.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=T,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new bo({vertices:s,faces:r,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new T),bc.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)ji.set(s[r][0],s[r][1],s[r][2]),t.vmult(ji,ji),e.vadd(ji,ji),n(ji.x,ji.y,ji.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Zn[0].set(s.x,s.y,s.z),Zn[1].set(-s.x,s.y,s.z),Zn[2].set(-s.x,-s.y,s.z),Zn[3].set(-s.x,-s.y,-s.z),Zn[4].set(s.x,-s.y,-s.z),Zn[5].set(s.x,s.y,-s.z),Zn[6].set(-s.x,s.y,-s.z),Zn[7].set(s.x,-s.y,s.z);const r=Zn[0];t.vmult(r,r),e.vadd(r,r),i.copy(r),n.copy(r);for(let a=1;a<8;a++){const c=Zn[a];t.vmult(c,c),e.vadd(c,c);const l=c.x,u=c.y,h=c.z;l>i.x&&(i.x=l),u>i.y&&(i.y=u),h>i.z&&(i.z=h),l<n.x&&(n.x=l),u<n.y&&(n.y=u),h<n.z&&(n.z=h)}}}const ji=new T,Zn=[new T,new T,new T,new T,new T,new T,new T,new T],$u={DYNAMIC:1,STATIC:2,KINEMATIC:4},Zu={AWAKE:0,SLEEPY:1,SLEEPING:2};class le extends sm{constructor(e){e===void 0&&(e={}),super(),this.id=le.idCounter++,this.index=-1,this.world=null,this.vlambda=new T,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new T,this.previousPosition=new T,this.interpolatedPosition=new T,this.initPosition=new T,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new T,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new T,this.force=new T;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?le.STATIC:le.DYNAMIC,typeof e.type==typeof le.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=le.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new T,this.quaternion=new It,this.initQuaternion=new It,this.previousQuaternion=new It,this.interpolatedQuaternion=new It,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new T,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new T,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new T,this.invInertia=new T,this.invInertiaWorld=new Yn,this.invMassSolve=0,this.invInertiaSolve=new T,this.invInertiaWorldSolve=new Yn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new T(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new T(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Cn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new T,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=le.AWAKE,this.wakeUpAfterNarrowphase=!1,e===le.SLEEPING&&this.dispatchEvent(le.wakeupEvent)}sleep(){this.sleepState=le.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===le.AWAKE&&n<i?(this.sleepState=le.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(le.sleepyEvent)):t===le.SLEEPY&&n>i?this.wakeUp():t===le.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(le.sleepEvent))}}updateSolveMassProperties(){this.sleepState===le.SLEEPING||this.type===le.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new T),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new T),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new T),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new T),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new T,s=new It;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const r=e[s];r.updateBoundingSphereRadius();const a=t[s].length(),c=r.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=GE,r=VE,a=this.quaternion,c=this.aabb,l=WE;for(let u=0;u!==i;u++){const h=e[u];a.vmult(t[u],s),s.vadd(this.position,s),a.mult(n[u],r),h.calculateWorldAABB(s,r,l.lowerBound,l.upperBound),u===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=XE,i=qE;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new T),this.type!==le.DYNAMIC)return;this.sleepState===le.SLEEPING&&this.wakeUp();const n=YE;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new T),this.type!==le.DYNAMIC)return;const n=KE,i=$E;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===le.DYNAMIC&&(this.sleepState===le.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new T),this.type!==le.DYNAMIC)return;this.sleepState===le.SLEEPING&&this.wakeUp();const n=t,i=ZE;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=JE;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new T),this.type!==le.DYNAMIC)return;const n=QE,i=eS;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=tS;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),bc.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new T;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===le.DYNAMIC||this.type===le.KINEMATIC)||this.sleepState===le.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,a=this.force,c=this.torque,l=this.quaternion,u=this.invMass,h=this.invInertiaWorld,d=this.linearFactor,f=u*e;i.x+=a.x*f*d.x,i.y+=a.y*f*d.y,i.z+=a.z*f*d.z;const g=h.elements,_=this.angularFactor,p=c.x*_.x,m=c.y*_.y,v=c.z*_.z;s.x+=e*(g[0]*p+g[1]*m+g[2]*v),s.y+=e*(g[3]*p+g[4]*m+g[5]*v),s.z+=e*(g[6]*p+g[7]*m+g[8]*v),r.x+=i.x*e,r.y+=i.y*e,r.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}le.idCounter=0;le.COLLIDE_EVENT_NAME="collide";le.DYNAMIC=$u.DYNAMIC;le.STATIC=$u.STATIC;le.KINEMATIC=$u.KINEMATIC;le.AWAKE=Zu.AWAKE;le.SLEEPY=Zu.SLEEPY;le.SLEEPING=Zu.SLEEPING;le.wakeupEvent={type:"wakeup"};le.sleepyEvent={type:"sleepy"};le.sleepEvent={type:"sleep"};const GE=new T,VE=new It,WE=new Cn,XE=new Yn,qE=new Yn,jE=new Yn,YE=new T,KE=new T,$E=new T,ZE=new T,JE=new T,QE=new T,eS=new T,tS=new T;class nS{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&le.STATIC||e.sleepState===le.SLEEPING)&&(t.type&le.STATIC||t.sleepState===le.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=iS;t.position.vsub(e.position,s);const r=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<r&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=sS,i=rS,s=oS,r=e.length;for(let a=0;a!==r;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==r;a++){const c=i[a].id,l=s[a].id,u=c<l?`${c},${l}`:`${l},${c}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];e.push(i[l]),t.push(s[l]),delete n[c]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new T;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const iS=new T;new T;new It;new T;const sS={keys:[]},rS=[],oS=[];new T;new T;new T;class aS extends nS{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let r,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)r=i[c],a=i[l],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class Qa{constructor(){this.rayFromWorld=new T,this.rayToWorld=new T,this.hitNormalWorld=new T,this.hitPointWorld=new T,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,r,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=a}}let rm,om,am,cm,lm,um,hm;const Ju={CLOSEST:1,ANY:2,ALL:4};rm=he.types.SPHERE;om=he.types.PLANE;am=he.types.BOX;cm=he.types.CYLINDER;lm=he.types.CONVEXPOLYHEDRON;um=he.types.HEIGHTFIELD;hm=he.types.TRIMESH;class Pt{get[rm](){return this._intersectSphere}get[om](){return this._intersectPlane}get[am](){return this._intersectBox}get[cm](){return this._intersectConvex}get[lm](){return this._intersectConvex}get[um](){return this._intersectHeightfield}get[hm](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new T),t===void 0&&(t=new T),this.from=e.clone(),this.to=t.clone(),this.direction=new T,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Pt.ANY,this.result=new Qa,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Pt.ANY,this.result=t.result||new Qa,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Mf),wl.length=0,e.broadphase.aabbQuery(e,Mf,wl),this.intersectBodies(wl),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=cS,s=lS;for(let r=0,a=e.shapes.length;r<a;r++){const c=e.shapes[r];if(!(n&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[r],s),e.quaternion.vmult(e.shapeOffsets[r],i),i.vadd(e.position,i),this.intersectShape(c,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(SS(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const r=this.from,a=this.to,c=this.direction,l=new T(0,0,1);t.vmult(l,l);const u=new T;r.vsub(n,u);const h=u.dot(l);a.vsub(n,u);const d=u.dot(l);if(h*d>0||r.distanceTo(a)<h)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const g=new T,_=new T,p=new T;r.vsub(n,g);const m=-l.dot(g)/f;c.scale(m,_),r.vadd(_,p),this.reportIntersection(l,p,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const r=uS;r.from.copy(this.from),r.to.copy(this.to),$e.pointToLocalFrame(n,t,r.from,r.from),$e.pointToLocalFrame(n,t,r.to,r.to),r.updateDirection();const a=hS;let c,l,u,h;c=l=0,u=h=e.data.length-1;const d=new Cn;r.getAABB(d),e.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),e.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),u=Math.min(u,a[0]+1),h=Math.min(h,a[1]+1);for(let f=c;f<u;f++)for(let g=l;g<h;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,d),!!d.overlapsRay(r)){if(e.getConvexTrianglePillar(f,g,!1),$e.pointToWorldFrame(n,t,e.pillarOffset,La),this._intersectConvex(e.pillarConvex,t,La,i,s,Ef),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),$e.pointToWorldFrame(n,t,e.pillarOffset,La),this._intersectConvex(e.pillarConvex,t,La,i,s,Ef)}}}_intersectSphere(e,t,n,i,s){const r=this.from,a=this.to,c=e.radius,l=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,u=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),h=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-c**2,d=u**2-4*l*h,f=dS,g=fS;if(!(d<0))if(d===0)r.lerp(a,d,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const _=(-u-Math.sqrt(d))/(2*l),p=(-u+Math.sqrt(d))/(2*l);if(_>=0&&_<=1&&(r.lerp(a,_,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(r.lerp(a,p,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(e,t,n,i,s,r){const a=pS,c=Sf,l=r&&r.faceList||null,u=e.faces,h=e.vertices,d=e.faceNormals,f=this.direction,g=this.from,_=this.to,p=g.distanceTo(_),m=l?l.length:u.length,v=this.result;for(let x=0;!v.shouldStop&&x<m;x++){const y=l?l[x]:x,E=u[y],S=d[y],b=t,L=n;c.copy(h[E[0]]),b.vmult(c,c),c.vadd(L,c),c.vsub(g,c),b.vmult(S,a);const M=f.dot(a);if(Math.abs(M)<this.precision)continue;const w=a.dot(c)/M;if(!(w<0)){f.scale(w,ln),ln.vadd(g,ln),jn.copy(h[E[0]]),b.vmult(jn,jn),L.vadd(jn,jn);for(let F=1;!v.shouldStop&&F<E.length-1;F++){Jn.copy(h[E[F]]),Qn.copy(h[E[F+1]]),b.vmult(Jn,Jn),b.vmult(Qn,Qn),L.vadd(Jn,Jn),L.vadd(Qn,Qn);const k=ln.distanceTo(g);!(Pt.pointInTriangle(ln,jn,Jn,Qn)||Pt.pointInTriangle(ln,Jn,jn,Qn))||k>p||this.reportIntersection(a,ln,s,i,y)}}}}_intersectTrimesh(e,t,n,i,s,r){const a=mS,c=MS,l=ES,u=Sf,h=gS,d=_S,f=vS,g=yS,_=xS,p=e.indices;e.vertices;const m=this.from,v=this.to,x=this.direction;l.position.copy(n),l.quaternion.copy(t),$e.vectorToLocalFrame(n,t,x,h),$e.pointToLocalFrame(n,t,m,d),$e.pointToLocalFrame(n,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,f.vsub(d,h),h.normalize();const y=d.distanceSquared(f);e.tree.rayQuery(this,l,c);for(let E=0,S=c.length;!this.result.shouldStop&&E!==S;E++){const b=c[E];e.getNormal(b,a),e.getVertex(p[b*3],jn),jn.vsub(d,u);const L=h.dot(a),M=a.dot(u)/L;if(M<0)continue;h.scale(M,ln),ln.vadd(d,ln),e.getVertex(p[b*3+1],Jn),e.getVertex(p[b*3+2],Qn);const w=ln.distanceSquared(d);!(Pt.pointInTriangle(ln,Jn,jn,Qn)||Pt.pointInTriangle(ln,jn,Jn,Qn))||w>y||($e.vectorToWorldFrame(t,a,_),$e.pointToWorldFrame(n,t,ln,g),this.reportIntersection(_,g,s,i,b))}c.length=0}reportIntersection(e,t,n,i,s){const r=this.from,a=this.to,c=r.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Pt.ALL:this.hasHit=!0,l.set(r,a,e,t,n,i,c),l.hasHit=!0,this.callback(l);break;case Pt.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(r,a,e,t,n,i,c));break;case Pt.ANY:this.hasHit=!0,l.hasHit=!0,l.set(r,a,e,t,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Ls),n.vsub(t,fo),e.vsub(t,Al);const s=Ls.dot(Ls),r=Ls.dot(fo),a=Ls.dot(Al),c=fo.dot(fo),l=fo.dot(Al);let u,h;return(u=c*a-r*l)>=0&&(h=s*l-r*a)>=0&&u+h<s*c-r*r}}Pt.CLOSEST=Ju.CLOSEST;Pt.ANY=Ju.ANY;Pt.ALL=Ju.ALL;const Mf=new Cn,wl=[],fo=new T,Al=new T,cS=new T,lS=new It,ln=new T,jn=new T,Jn=new T,Qn=new T;new T;new Qa;const Ef={faceList:[0]},La=new T,uS=new Pt,hS=[],dS=new T,fS=new T,pS=new T;new T;new T;const Sf=new T,mS=new T,gS=new T,_S=new T,vS=new T,xS=new T,yS=new T;new Cn;const MS=[],ES=new $e,Ls=new T,Ia=new T;function SS(o,e,t){t.vsub(o,Ls);const n=Ls.dot(e);return e.scale(n,Ia),Ia.vadd(o,Ia),t.distanceTo(Ia)}class TS{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Tf{constructor(){this.spatial=new T,this.rotational=new T}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class qo{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=qo.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Tf,this.jacobianElementB=new Tf,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*e-i*t-r*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return e.spatial.dot(s)+t.spatial.dot(r)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(r,c)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,a=n.wlambda,c=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(r,c)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,u=i.invMassSolve;return s.scale(l,bf),a.scale(u,wf),n.invInertiaWorldSolve.vmult(r,Af),i.invInertiaWorldSolve.vmult(c,Rf),e.multiplyVectors(bf,Af)+t.multiplyVectors(wf,Rf)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+r;return a.vmult(e.rotational,Na),l+=Na.dot(e.rotational),c.vmult(t.rotational,Na),l+=Na.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=bS;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,r),i.wlambda.addScaledVector(e,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(e,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}qo.idCounter=0;const bf=new T,wf=new T,Af=new T,Rf=new T,Na=new T,bS=new T;class wS extends qo{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new T,this.rj=new T,this.ni=new T}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,a=this.rj,c=AS,l=RS,u=i.velocity,h=i.angularVelocity;i.force,i.torque;const d=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=CS,_=this.jacobianElementA,p=this.jacobianElementB,m=this.ni;r.cross(m,c),a.cross(m,l),m.negate(_.spatial),c.negate(_.rotational),p.spatial.copy(m),p.rotational.copy(l),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(r,g);const v=m.dot(g),x=this.restitution+1,y=x*d.dot(m)-x*u.dot(m)+f.dot(l)-h.dot(c),E=this.computeGiMf();return-v*t-y*n-e*E}getImpactVelocityAlongNormal(){const e=PS,t=LS,n=IS,i=NS,s=DS;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const AS=new T,RS=new T,CS=new T,PS=new T,LS=new T,IS=new T,NS=new T,DS=new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;class Cf extends qo{constructor(e,t,n){super(e,t,-n,n),this.ri=new T,this.rj=new T,this.t=new T}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=US,r=FS,a=this.t;n.cross(a,s),i.cross(a,r);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(r);const u=this.computeGW(),h=this.computeGiMf();return-u*t-e*h}}const US=new T,FS=new T;class jo{constructor(e,t,n){n=TS.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=jo.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}jo.idCounter=0;class Yo{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Yo.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Yo.idCounter=0;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new Pt;new T;new T;new T;new T(1,0,0),new T(0,1,0),new T(0,0,1);new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;class OS extends he{constructor(e){if(super({type:he.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new T);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){const c=r[a];n[c]=e[c]-s,i[c]=e[c]+s}}}new T;new T;new T;new T;new T;new T;new T;new T;new T;class BS extends he{constructor(){super({type:he.types.PLANE}),this.worldNormal=new T,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new T),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){Ei.set(0,0,1),t.vmult(Ei,Ei);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Ei.x===1?i.x=e.x:Ei.x===-1&&(n.x=e.x),Ei.y===1?i.y=e.y:Ei.y===-1&&(n.y=e.y),Ei.z===1?i.z=e.z:Ei.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Ei=new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new Cn;new T;new Cn;new T;new T;new T;new T;new T;new T;new T;new Cn;new T;new $e;new Cn;class zS{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class kS extends zS{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,a=r.length,c=t.bodies,l=c.length,u=e;let h,d,f,g,_,p;if(a!==0)for(let y=0;y!==l;y++)c[y].updateSolveMassProperties();const m=GS,v=VS,x=HS;m.length=a,v.length=a,x.length=a;for(let y=0;y!==a;y++){const E=r[y];x[y]=0,v[y]=E.computeB(u),m[y]=1/E.computeC()}if(a!==0){for(let S=0;S!==l;S++){const b=c[S],L=b.vlambda,M=b.wlambda;L.set(0,0,0),M.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let S=0;S!==a;S++){const b=r[S];h=v[S],d=m[S],p=x[S],_=b.computeGWlambda(),f=d*(h-_-b.eps*p),p+f<b.minForce?f=b.minForce-p:p+f>b.maxForce&&(f=b.maxForce-p),x[S]+=f,g+=f>0?f:-f,b.addToWlambda(f)}if(g*g<s)break}for(let S=0;S!==l;S++){const b=c[S],L=b.velocity,M=b.angularVelocity;b.vlambda.vmul(b.linearFactor,b.vlambda),L.vadd(b.vlambda,L),b.wlambda.vmul(b.angularFactor,b.wlambda),M.vadd(b.wlambda,M)}let y=r.length;const E=1/u;for(;y--;)r[y].multiplier=x[y]*E}return n}}const HS=[],GS=[],VS=[];le.STATIC;class WS{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class XS extends WS{constructor(){super(...arguments),this.type=T}constructObject(){return new T}}const ct={sphereSphere:he.types.SPHERE,spherePlane:he.types.SPHERE|he.types.PLANE,boxBox:he.types.BOX|he.types.BOX,sphereBox:he.types.SPHERE|he.types.BOX,planeBox:he.types.PLANE|he.types.BOX,convexConvex:he.types.CONVEXPOLYHEDRON,sphereConvex:he.types.SPHERE|he.types.CONVEXPOLYHEDRON,planeConvex:he.types.PLANE|he.types.CONVEXPOLYHEDRON,boxConvex:he.types.BOX|he.types.CONVEXPOLYHEDRON,sphereHeightfield:he.types.SPHERE|he.types.HEIGHTFIELD,boxHeightfield:he.types.BOX|he.types.HEIGHTFIELD,convexHeightfield:he.types.CONVEXPOLYHEDRON|he.types.HEIGHTFIELD,sphereParticle:he.types.PARTICLE|he.types.SPHERE,planeParticle:he.types.PLANE|he.types.PARTICLE,boxParticle:he.types.BOX|he.types.PARTICLE,convexParticle:he.types.PARTICLE|he.types.CONVEXPOLYHEDRON,cylinderCylinder:he.types.CYLINDER,sphereCylinder:he.types.SPHERE|he.types.CYLINDER,planeCylinder:he.types.PLANE|he.types.CYLINDER,boxCylinder:he.types.BOX|he.types.CYLINDER,convexCylinder:he.types.CONVEXPOLYHEDRON|he.types.CYLINDER,heightfieldCylinder:he.types.HEIGHTFIELD|he.types.CYLINDER,particleCylinder:he.types.PARTICLE|he.types.CYLINDER,sphereTrimesh:he.types.SPHERE|he.types.TRIMESH,planeTrimesh:he.types.PLANE|he.types.TRIMESH};class qS{get[ct.sphereSphere](){return this.sphereSphere}get[ct.spherePlane](){return this.spherePlane}get[ct.boxBox](){return this.boxBox}get[ct.sphereBox](){return this.sphereBox}get[ct.planeBox](){return this.planeBox}get[ct.convexConvex](){return this.convexConvex}get[ct.sphereConvex](){return this.sphereConvex}get[ct.planeConvex](){return this.planeConvex}get[ct.boxConvex](){return this.boxConvex}get[ct.sphereHeightfield](){return this.sphereHeightfield}get[ct.boxHeightfield](){return this.boxHeightfield}get[ct.convexHeightfield](){return this.convexHeightfield}get[ct.sphereParticle](){return this.sphereParticle}get[ct.planeParticle](){return this.planeParticle}get[ct.boxParticle](){return this.boxParticle}get[ct.convexParticle](){return this.convexParticle}get[ct.cylinderCylinder](){return this.convexConvex}get[ct.sphereCylinder](){return this.sphereConvex}get[ct.planeCylinder](){return this.planeConvex}get[ct.boxCylinder](){return this.boxConvex}get[ct.convexCylinder](){return this.convexConvex}get[ct.heightfieldCylinder](){return this.heightfieldCylinder}get[ct.particleCylinder](){return this.particleCylinder}get[ct.sphereTrimesh](){return this.sphereTrimesh}get[ct.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new XS,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new wS(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||e.material,u=i.material||t.material;return l&&u&&l.restitution>=0&&u.restitution>=0&&(a.restitution=l.restitution*u.restitution),a.si=s||n,a.sj=r||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,r=e.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const u=s.material||n.material,h=r.material||i.material;if(u&&h&&u.friction>=0&&h.friction>=0&&(l=u.friction*h.friction),l>0){const d=l*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,_=g.length?g.pop():new Cf(n,i,d*f),p=g.length?g.pop():new Cf(n,i,d*f);return _.bi=p.bi=n,_.bj=p.bj=i,_.minForce=p.minForce=-d*f,_.maxForce=p.maxForce=d*f,_.ri.copy(e.ri),_.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(_.t,p.t),_.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),p.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),_.enabled=p.enabled=e.enabled,t.push(_,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Ss.setZero(),gr.setZero(),_r.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(Ss.vadd(t.ni,Ss),gr.vadd(t.ri,gr),_r.vadd(t.rj,_r)):(Ss.vsub(t.ni,Ss),gr.vadd(t.rj,gr),_r.vadd(t.ri,_r));const r=1/e;gr.scale(r,n.ri),_r.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Ss.normalize(),Ss.tangents(n.t,i.t)}getContacts(e,t,n,i,s,r,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=r;const c=KS,l=$S,u=jS,h=YS;for(let d=0,f=e.length;d!==f;d++){const g=e[d],_=t[d];let p=null;g.material&&_.material&&(p=n.getContactMaterial(g.material,_.material)||null);const m=g.type&le.KINEMATIC&&_.type&le.STATIC||g.type&le.STATIC&&_.type&le.KINEMATIC||g.type&le.KINEMATIC&&_.type&le.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],c),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const x=g.shapes[v];for(let y=0;y<_.shapes.length;y++){_.quaternion.mult(_.shapeOrientations[y],l),_.quaternion.vmult(_.shapeOffsets[y],h),h.vadd(_.position,h);const E=_.shapes[y];if(!(x.collisionFilterMask&E.collisionFilterGroup&&E.collisionFilterMask&x.collisionFilterGroup)||u.distanceTo(h)>x.boundingSphereRadius+E.boundingSphereRadius)continue;let S=null;x.material&&E.material&&(S=n.getContactMaterial(x.material,E.material)||null),this.currentContactMaterial=S||p||n.defaultContactMaterial;const b=x.type|E.type,L=this[b];if(L){let M=!1;x.type<E.type?M=L.call(this,x,E,u,h,c,l,g,_,x,E,m):M=L.call(this,E,x,h,u,l,c,_,g,x,E,m),M&&m&&(n.shapeOverlapKeeper.set(x.id,E.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(e,t,n,i,s,r,a,c,l,u,h){if(h)return n.distanceSquared(i)<(e.radius+t.radius)**2;const d=this.createContactEquation(a,c,e,t,l,u);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(e.radius,d.ri),d.rj.scale(-t.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(c.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(e,t,n,i,s,r,a,c,l,u,h){const d=this.createContactEquation(a,c,e,t,l,u);if(d.ni.set(0,0,1),r.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(e.radius,d.ri),n.vsub(i,Da),d.ni.scale(d.ni.dot(Da),Pf),Da.vsub(Pf,d.rj),-Da.dot(d.ni)<=e.radius){if(h)return!0;const f=d.ri,g=d.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(c.position,g),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(e,t,n,i,s,r,a,c,l,u,h){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,r,a,c,e,t,h)}sphereBox(e,t,n,i,s,r,a,c,l,u,h){const d=this.v3pool,f=ET;n.vsub(i,Ua),t.getSideNormals(f,r);const g=e.radius;let _=!1;const p=TT,m=bT,v=wT;let x=null,y=0,E=0,S=0,b=null;for(let N=0,G=f.length;N!==G&&_===!1;N++){const z=xT;z.copy(f[N]);const H=z.length();z.normalize();const $=Ua.dot(z);if($<H+g&&$>0){const Z=yT,K=MT;Z.copy(f[(N+1)%3]),K.copy(f[(N+2)%3]);const Y=Z.length(),J=K.length();Z.normalize(),K.normalize();const ie=Ua.dot(Z),me=Ua.dot(K);if(ie<Y&&ie>-Y&&me<J&&me>-J){const ge=Math.abs($-H-g);if((b===null||ge<b)&&(b=ge,E=ie,S=me,x=H,p.copy(z),m.copy(Z),v.copy(K),y++,h))return!0}}}if(y){_=!0;const N=this.createContactEquation(a,c,e,t,l,u);p.scale(-g,N.ri),N.ni.copy(p),N.ni.negate(N.ni),p.scale(x,p),m.scale(E,m),p.vadd(m,p),v.scale(S,v),p.vadd(v,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let L=d.get();const M=ST;for(let N=0;N!==2&&!_;N++)for(let G=0;G!==2&&!_;G++)for(let z=0;z!==2&&!_;z++)if(L.set(0,0,0),N?L.vadd(f[0],L):L.vsub(f[0],L),G?L.vadd(f[1],L):L.vsub(f[1],L),z?L.vadd(f[2],L):L.vsub(f[2],L),i.vadd(L,M),M.vsub(n,M),M.lengthSquared()<g*g){if(h)return!0;_=!0;const H=this.createContactEquation(a,c,e,t,l,u);H.ri.copy(M),H.ri.normalize(),H.ni.copy(H.ri),H.ri.scale(g,H.ri),H.rj.copy(L),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),H.rj.vadd(i,H.rj),H.rj.vsub(c.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}d.release(L),L=null;const w=d.get(),F=d.get(),k=d.get(),U=d.get(),P=d.get(),I=f.length;for(let N=0;N!==I&&!_;N++)for(let G=0;G!==I&&!_;G++)if(N%3!==G%3){f[G].cross(f[N],w),w.normalize(),f[N].vadd(f[G],F),k.copy(n),k.vsub(F,k),k.vsub(i,k);const z=k.dot(w);w.scale(z,U);let H=0;for(;H===N%3||H===G%3;)H++;P.copy(n),P.vsub(U,P),P.vsub(F,P),P.vsub(i,P);const $=Math.abs(z),Z=P.length();if($<f[H].length()&&Z<g){if(h)return!0;_=!0;const K=this.createContactEquation(a,c,e,t,l,u);F.vadd(U,K.rj),K.rj.copy(K.rj),P.negate(K.ni),K.ni.normalize(),K.ri.copy(K.rj),K.ri.vadd(i,K.ri),K.ri.vsub(n,K.ri),K.ri.normalize(),K.ri.scale(g,K.ri),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(c.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}}d.release(w,F,k,U,P)}planeBox(e,t,n,i,s,r,a,c,l,u,h){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,r,a,c,e,t,h)}convexConvex(e,t,n,i,s,r,a,c,l,u,h,d,f){const g=HT;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,r,g,d,f)){const _=[],p=GT;e.clipAgainstHull(n,s,t,i,r,g,-100,100,_);let m=0;for(let v=0;v!==_.length;v++){if(h)return!0;const x=this.createContactEquation(a,c,e,t,l,u),y=x.ri,E=x.rj;g.negate(x.ni),_[v].normal.negate(p),p.scale(_[v].depth,p),_[v].point.vadd(p,y),E.copy(_[v].point),y.vsub(n,y),E.vsub(i,E),y.vadd(n,y),y.vsub(a.position,y),E.vadd(i,E),E.vsub(c.position,E),this.result.push(x),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(e,t,n,i,s,r,a,c,l,u,h){const d=this.v3pool;n.vsub(i,AT);const f=t.faceNormals,g=t.faces,_=t.vertices,p=e.radius;let m=!1;for(let v=0;v!==_.length;v++){const x=_[v],y=LT;r.vmult(x,y),i.vadd(y,y);const E=PT;if(y.vsub(n,E),E.lengthSquared()<p*p){if(h)return!0;m=!0;const S=this.createContactEquation(a,c,e,t,l,u);S.ri.copy(E),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(p,S.ri),y.vsub(i,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(a.position,S.ri),S.rj.vadd(i,S.rj),S.rj.vsub(c.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let v=0,x=g.length;v!==x&&m===!1;v++){const y=f[v],E=g[v],S=IT;r.vmult(y,S);const b=NT;r.vmult(_[E[0]],b),b.vadd(i,b);const L=DT;S.scale(-p,L),n.vadd(L,L);const M=UT;L.vsub(b,M);const w=M.dot(S),F=FT;if(n.vsub(b,F),w<0&&F.dot(S)>0){const k=[];for(let U=0,P=E.length;U!==P;U++){const I=d.get();r.vmult(_[E[U]],I),i.vadd(I,I),k.push(I)}if(vT(k,S,n)){if(h)return!0;m=!0;const U=this.createContactEquation(a,c,e,t,l,u);S.scale(-p,U.ri),S.negate(U.ni);const P=d.get();S.scale(-w,P);const I=d.get();S.scale(-p,I),n.vsub(i,U.rj),U.rj.vadd(I,U.rj),U.rj.vadd(P,U.rj),U.rj.vadd(i,U.rj),U.rj.vsub(c.position,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),d.release(P),d.release(I),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult);for(let N=0,G=k.length;N!==G;N++)d.release(k[N]);return}else for(let U=0;U!==E.length;U++){const P=d.get(),I=d.get();r.vmult(_[E[(U+1)%E.length]],P),r.vmult(_[E[(U+2)%E.length]],I),i.vadd(P,P),i.vadd(I,I);const N=RT;I.vsub(P,N);const G=CT;N.unit(G);const z=d.get(),H=d.get();n.vsub(P,H);const $=H.dot(G);G.scale($,z),z.vadd(P,z);const Z=d.get();if(z.vsub(n,Z),$>0&&$*$<N.lengthSquared()&&Z.lengthSquared()<p*p){if(h)return!0;const K=this.createContactEquation(a,c,e,t,l,u);z.vsub(i,K.rj),z.vsub(n,K.ni),K.ni.normalize(),K.ni.scale(p,K.ri),K.rj.vadd(i,K.rj),K.rj.vsub(c.position,K.rj),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult);for(let Y=0,J=k.length;Y!==J;Y++)d.release(k[Y]);d.release(P),d.release(I),d.release(z),d.release(Z),d.release(H);return}d.release(P),d.release(I),d.release(z),d.release(Z),d.release(H)}for(let U=0,P=k.length;U!==P;U++)d.release(k[U])}}}planeConvex(e,t,n,i,s,r,a,c,l,u,h){const d=OT,f=BT;f.set(0,0,1),s.vmult(f,f);let g=0;const _=zT;for(let p=0;p!==t.vertices.length;p++)if(d.copy(t.vertices[p]),r.vmult(d,d),i.vadd(d,d),d.vsub(n,_),f.dot(_)<=0){if(h)return!0;const v=this.createContactEquation(a,c,e,t,l,u),x=kT;f.scale(f.dot(_),x),d.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(f),d.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,r,a,c,l,u,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,r,a,c,e,t,h)}sphereHeightfield(e,t,n,i,s,r,a,c,l,u,h){const d=t.data,f=e.radius,g=t.elementSize,_=eb,p=QT;$e.pointToLocalFrame(i,r,n,p);let m=Math.floor((p.x-f)/g)-1,v=Math.ceil((p.x+f)/g)+1,x=Math.floor((p.y-f)/g)-1,y=Math.ceil((p.y+f)/g)+1;if(v<0||y<0||m>d.length||x>d[0].length)return;m<0&&(m=0),v<0&&(v=0),x<0&&(x=0),y<0&&(y=0),m>=d.length&&(m=d.length-1),v>=d.length&&(v=d.length-1),y>=d[0].length&&(y=d[0].length-1),x>=d[0].length&&(x=d[0].length-1);const E=[];t.getRectMinMax(m,x,v,y,E);const S=E[0],b=E[1];if(p.z-f>b||p.z+f<S)return;const L=this.result;for(let M=m;M<v;M++)for(let w=x;w<y;w++){const F=L.length;let k=!1;if(t.getConvexTrianglePillar(M,w,!1),$e.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(k=this.sphereConvex(e,t.pillarConvex,n,_,s,r,a,c,e,t,h)),h&&k||(t.getConvexTrianglePillar(M,w,!0),$e.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(k=this.sphereConvex(e,t.pillarConvex,n,_,s,r,a,c,e,t,h)),h&&k))return!0;if(L.length-F>2)return}}boxHeightfield(e,t,n,i,s,r,a,c,l,u,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,r,a,c,e,t,h)}convexHeightfield(e,t,n,i,s,r,a,c,l,u,h){const d=t.data,f=t.elementSize,g=e.boundingSphereRadius,_=ZT,p=JT,m=$T;$e.pointToLocalFrame(i,r,n,m);let v=Math.floor((m.x-g)/f)-1,x=Math.ceil((m.x+g)/f)+1,y=Math.floor((m.y-g)/f)-1,E=Math.ceil((m.y+g)/f)+1;if(x<0||E<0||v>d.length||y>d[0].length)return;v<0&&(v=0),x<0&&(x=0),y<0&&(y=0),E<0&&(E=0),v>=d.length&&(v=d.length-1),x>=d.length&&(x=d.length-1),E>=d[0].length&&(E=d[0].length-1),y>=d[0].length&&(y=d[0].length-1);const S=[];t.getRectMinMax(v,y,x,E,S);const b=S[0],L=S[1];if(!(m.z-g>L||m.z+g<b))for(let M=v;M<x;M++)for(let w=y;w<E;w++){let F=!1;if(t.getConvexTrianglePillar(M,w,!1),$e.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,n,_,s,r,a,c,null,null,h,p,null)),h&&F||(t.getConvexTrianglePillar(M,w,!0),$e.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,n,_,s,r,a,c,null,null,h,p,null)),h&&F))return!0}}sphereParticle(e,t,n,i,s,r,a,c,l,u,h){const d=qT;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=e.radius*e.radius){if(h)return!0;const g=this.createContactEquation(c,a,t,e,l,u);d.normalize(),g.rj.copy(d),g.rj.scale(e.radius,g.rj),g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,r,a,c,l,u,h){const d=VT;d.set(0,0,1),a.quaternion.vmult(d,d);const f=WT;if(i.vsub(a.position,f),d.dot(f)<=0){if(h)return!0;const _=this.createContactEquation(c,a,t,e,l,u);_.ni.copy(d),_.ni.negate(_.ni),_.ri.set(0,0,0);const p=XT;d.scale(d.dot(i),p),i.vsub(p,p),_.rj.copy(p),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(e,t,n,i,s,r,a,c,l,u,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,r,a,c,e,t,h)}convexParticle(e,t,n,i,s,r,a,c,l,u,h){let d=-1;const f=YT,g=KT;let _=null;const p=jT;if(p.copy(i),p.vsub(n,p),s.conjugate(Lf),Lf.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let m=0,v=e.faces.length;m!==v;m++){const x=[e.worldVertices[e.faces[m][0]]],y=e.worldFaceNormals[m];i.vsub(x[0],If);const E=-y.dot(If);if(_===null||Math.abs(E)<Math.abs(_)){if(h)return!0;_=E,d=m,f.copy(y)}}if(d!==-1){const m=this.createContactEquation(c,a,t,e,l,u);f.scale(_,g),g.vadd(i,g),g.vsub(n,g),m.rj.copy(g),f.negate(m.ni),m.ri.set(0,0,0);const v=m.ri,x=m.rj;v.vadd(i,v),v.vsub(c.position,v),x.vadd(n,x),x.vsub(a.position,x),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,r,a,c,l,u,h){return this.convexHeightfield(t,e,i,n,r,s,c,a,l,u,h)}particleCylinder(e,t,n,i,s,r,a,c,l,u,h){return this.convexParticle(t,e,i,n,r,s,c,a,l,u,h)}sphereTrimesh(e,t,n,i,s,r,a,c,l,u,h){const d=sT,f=rT,g=oT,_=aT,p=cT,m=lT,v=fT,x=iT,y=tT,E=pT;$e.pointToLocalFrame(i,r,n,p);const S=e.radius;v.lowerBound.set(p.x-S,p.y-S,p.z-S),v.upperBound.set(p.x+S,p.y+S,p.z+S),t.getTrianglesInAABB(v,E);const b=nT,L=e.radius*e.radius;for(let U=0;U<E.length;U++)for(let P=0;P<3;P++)if(t.getVertex(t.indices[E[U]*3+P],b),b.vsub(p,y),y.lengthSquared()<=L){if(x.copy(b),$e.pointToWorldFrame(i,r,x,b),b.vsub(n,y),h)return!0;let I=this.createContactEquation(a,c,e,t,l,u);I.ni.copy(y),I.ni.normalize(),I.ri.copy(I.ni),I.ri.scale(e.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),I.rj.copy(b),I.rj.vsub(c.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}for(let U=0;U<E.length;U++)for(let P=0;P<3;P++){t.getVertex(t.indices[E[U]*3+P],d),t.getVertex(t.indices[E[U]*3+(P+1)%3],f),f.vsub(d,g),p.vsub(f,m);const I=m.dot(g);p.vsub(d,m);let N=m.dot(g);if(N>0&&I<0&&(p.vsub(d,m),_.copy(g),_.normalize(),N=m.dot(_),_.scale(N,m),m.vadd(d,m),m.distanceTo(p)<e.radius)){if(h)return!0;const z=this.createContactEquation(a,c,e,t,l,u);m.vsub(p,z.ni),z.ni.normalize(),z.ni.scale(e.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),$e.pointToWorldFrame(i,r,m,m),m.vsub(c.position,z.rj),$e.vectorToWorldFrame(r,z.ni,z.ni),$e.vectorToWorldFrame(r,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}const M=uT,w=hT,F=dT,k=eT;for(let U=0,P=E.length;U!==P;U++){t.getTriangleVertices(E[U],M,w,F),t.getNormal(E[U],k),p.vsub(M,m);let I=m.dot(k);if(k.scale(I,m),p.vsub(m,m),I=m.distanceTo(p),Pt.pointInTriangle(m,M,w,F)&&I<e.radius){if(h)return!0;let N=this.createContactEquation(a,c,e,t,l,u);m.vsub(p,N.ni),N.ni.normalize(),N.ni.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),$e.pointToWorldFrame(i,r,m,m),m.vsub(c.position,N.rj),$e.vectorToWorldFrame(r,N.ni,N.ni),$e.vectorToWorldFrame(r,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}E.length=0}planeTrimesh(e,t,n,i,s,r,a,c,l,u,h){const d=new T,f=ZS;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,d);const _=new T;_.copy(d),$e.pointToWorldFrame(i,r,_,d);const p=JS;if(d.vsub(n,p),f.dot(p)<=0){if(h)return!0;const v=this.createContactEquation(a,c,e,t,l,u);v.ni.copy(f);const x=QS;f.scale(p.dot(f),x),d.vsub(x,x),v.ri.copy(x),v.ri.vsub(a.position,v.ri),v.rj.copy(d),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Ss=new T,gr=new T,_r=new T,jS=new T,YS=new T,KS=new It,$S=new It,ZS=new T,JS=new T,QS=new T,eT=new T,tT=new T;new T;const nT=new T,iT=new T,sT=new T,rT=new T,oT=new T,aT=new T,cT=new T,lT=new T,uT=new T,hT=new T,dT=new T,fT=new Cn,pT=[],Da=new T,Pf=new T,mT=new T,gT=new T,_T=new T;function vT(o,e,t){let n=null;const i=o.length;for(let s=0;s!==i;s++){const r=o[s],a=mT;o[(s+1)%i].vsub(r,a);const c=gT;a.cross(e,c);const l=_T;t.vsub(r,l);const u=c.dot(l);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Ua=new T,xT=new T,yT=new T,MT=new T,ET=[new T,new T,new T,new T,new T,new T],ST=new T,TT=new T,bT=new T,wT=new T,AT=new T,RT=new T,CT=new T,PT=new T,LT=new T,IT=new T,NT=new T,DT=new T,UT=new T,FT=new T;new T;new T;const OT=new T,BT=new T,zT=new T,kT=new T,HT=new T,GT=new T,VT=new T,WT=new T,XT=new T,qT=new T,Lf=new It,jT=new T;new T;const YT=new T,If=new T,KT=new T,$T=new T,ZT=new T,JT=[0],QT=new T,eb=new T;class Nf{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,r=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const u=n[c];for(;u>i[a];)a++;l=u===i[a],l||Df(e,u)}a=0;for(let c=0;c<r;c++){let l=!1;const u=i[c];for(;u>n[a];)a++;l=n[a]===u,l||Df(t,u)}}}function Df(o,e){o.push((e&4294901760)>>16,e&65535)}const Rl=(o,e)=>o<e?`${o}-${e}`:`${e}-${o}`;class tb{constructor(){this.data={keys:[]}}get(e,t){const n=Rl(e,t);return this.data[n]}set(e,t,n){const i=Rl(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Rl(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class nb extends sm{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new T,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new T,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new aS,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new kS,this.constraints=[],this.narrowphase=new qS(this),this.collisionMatrix=new xf,this.collisionMatrixPrevious=new xf,this.bodyOverlapKeeper=new Nf,this.shapeOverlapKeeper=new Nf,this.contactmaterials=[],this.contactMaterialTable=new tb,this.defaultMaterial=new Yo("default"),this.defaultContactMaterial=new jo(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Qa?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Pt.ALL,n.from=e,n.to=t,n.callback=i,Cl.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Pt.ANY,n.from=e,n.to=t,n.result=i,Cl.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Pt.CLOSEST,n.from=e,n.to=t,n.result=i,Cl.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof le&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===e)return r}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Nt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Nt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(Nt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const r=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,r,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,r,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=ab,i=cb,s=this.bodies.length,r=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,u=this.profile,h=le.DYNAMIC;let d=-1/0;const f=this.constraints,g=ob;c.length();const _=c.x,p=c.y,m=c.z;let v=0;for(l&&(d=Nt.now()),v=0;v!==s;v++){const U=r[v];if(U.type===h){const P=U.force,I=U.mass;P.x+=I*_,P.y+=I*p,P.z+=I*m}}for(let U=0,P=this.subsystems.length;U!==P;U++)this.subsystems[U].update();l&&(d=Nt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(u.broadphase=Nt.now()-d);let x=f.length;for(v=0;v!==x;v++){const U=f[v];if(!U.collideConnected)for(let P=n.length-1;P>=0;P-=1)(U.bodyA===n[P]&&U.bodyB===i[P]||U.bodyB===n[P]&&U.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),l&&(d=Nt.now());const y=rb,E=t.length;for(v=0;v!==E;v++)y.push(t[v]);t.length=0;const S=this.frictionEquations.length;for(v=0;v!==S;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,y,this.frictionEquations,g),l&&(u.narrowphase=Nt.now()-d),l&&(d=Nt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const b=t.length;for(let U=0;U!==b;U++){const P=t[U],I=P.bi,N=P.bj,G=P.si,z=P.sj;let H;if(I.material&&N.material?H=this.getContactMaterial(I.material,N.material)||this.defaultContactMaterial:H=this.defaultContactMaterial,H.friction,I.material&&N.material&&(I.material.friction>=0&&N.material.friction>=0&&I.material.friction*N.material.friction,I.material.restitution>=0&&N.material.restitution>=0&&(P.restitution=I.material.restitution*N.material.restitution)),a.addEquation(P),I.allowSleep&&I.type===le.DYNAMIC&&I.sleepState===le.SLEEPING&&N.sleepState===le.AWAKE&&N.type!==le.STATIC){const $=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),Z=N.sleepSpeedLimit**2;$>=Z*2&&(I.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===le.DYNAMIC&&N.sleepState===le.SLEEPING&&I.sleepState===le.AWAKE&&I.type!==le.STATIC){const $=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),Z=I.sleepSpeedLimit**2;$>=Z*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(I,N,!0),this.collisionMatrixPrevious.get(I,N)||(po.body=N,po.contact=P,I.dispatchEvent(po),po.body=I,N.dispatchEvent(po)),this.bodyOverlapKeeper.set(I.id,N.id),this.shapeOverlapKeeper.set(G.id,z.id)}for(this.emitContactEvents(),l&&(u.makeContactConstraints=Nt.now()-d,d=Nt.now()),v=0;v!==s;v++){const U=r[v];U.wakeUpAfterNarrowphase&&(U.wakeUp(),U.wakeUpAfterNarrowphase=!1)}for(x=f.length,v=0;v!==x;v++){const U=f[v];U.update();for(let P=0,I=U.equations.length;P!==I;P++){const N=U.equations[P];a.addEquation(N)}}a.solve(e,this),l&&(u.solve=Nt.now()-d),a.removeAllEquations();const L=Math.pow;for(v=0;v!==s;v++){const U=r[v];if(U.type&h){const P=L(1-U.linearDamping,e),I=U.velocity;I.scale(P,I);const N=U.angularVelocity;if(N){const G=L(1-U.angularDamping,e);N.scale(G,N)}}}this.dispatchEvent(sb),l&&(d=Nt.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,F=this.quatNormalizeFast;for(v=0;v!==s;v++)r[v].integrate(e,w,F);this.clearForces(),this.broadphase.dirty=!0,l&&(u.integrate=Nt.now()-d),this.stepnumber+=1,this.dispatchEvent(ib);let k=!0;if(this.allowSleep)for(k=!1,v=0;v!==s;v++){const U=r[v];U.sleepTick(this.time),U.sleepState!==le.SLEEPING&&(k=!0)}this.hasActiveBodies=k}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Si,Ti),e){for(let s=0,r=Si.length;s<r;s+=2)mo.bodyA=this.getBodyById(Si[s]),mo.bodyB=this.getBodyById(Si[s+1]),this.dispatchEvent(mo);mo.bodyA=mo.bodyB=null}if(t){for(let s=0,r=Ti.length;s<r;s+=2)go.bodyA=this.getBodyById(Ti[s]),go.bodyB=this.getBodyById(Ti[s+1]),this.dispatchEvent(go);go.bodyA=go.bodyB=null}Si.length=Ti.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Si,Ti),n){for(let s=0,r=Si.length;s<r;s+=2){const a=this.getShapeById(Si[s]),c=this.getShapeById(Si[s+1]);bi.shapeA=a,bi.shapeB=c,a&&(bi.bodyA=a.body),c&&(bi.bodyB=c.body),this.dispatchEvent(bi)}bi.bodyA=bi.bodyB=bi.shapeA=bi.shapeB=null}if(i){for(let s=0,r=Ti.length;s<r;s+=2){const a=this.getShapeById(Ti[s]),c=this.getShapeById(Ti[s+1]);wi.shapeA=a,wi.shapeB=c,a&&(wi.bodyA=a.body),c&&(wi.bodyB=c.body),this.dispatchEvent(wi)}wi.bodyA=wi.bodyB=wi.shapeA=wi.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Cn;const Cl=new Pt,Nt=globalThis.performance||{};if(!Nt.now){let o=Date.now();Nt.timing&&Nt.timing.navigationStart&&(o=Nt.timing.navigationStart),Nt.now=()=>Date.now()-o}new T;const ib={type:"postStep"},sb={type:"preStep"},po={type:le.COLLIDE_EVENT_NAME,body:null,contact:null},rb=[],ob=[],ab=[],cb=[],Si=[],Ti=[],mo={type:"beginContact",bodyA:null,bodyB:null},go={type:"endContact",bodyA:null,bodyB:null},bi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},wi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function Ci(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function dm(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var An={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},jr={duration:.5,overwrite:!1,delay:0},Qu,Zt,ut,Hn=1e8,at=1/Hn,uu=Math.PI*2,lb=uu/4,ub=0,fm=Math.sqrt,hb=Math.cos,db=Math.sin,Vt=function(e){return typeof e=="string"},yt=function(e){return typeof e=="function"},Oi=function(e){return typeof e=="number"},eh=function(e){return typeof e>"u"},hi=function(e){return typeof e=="object"},dn=function(e){return e!==!1},th=function(){return typeof window<"u"},Fa=function(e){return yt(e)||Vt(e)},pm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,hu=/(?:-?\.?\d|\.)+/gi,mm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gm=/[+-]=-?[.\d]+/,_m=/[^,'"\[\]\s]+/gi,fb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pt,ti,du,nh,Rn={},ec={},vm,xm=function(e){return(ec=Xs(e,Rn))&&gn},ih=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},No=function(e,t){return!t&&console.warn(e)},ym=function(e,t){return e&&(Rn[e]=t)&&ec&&(ec[e]=t)||Rn},Do=function(){return 0},pb={suppressEvents:!0,isStart:!0,kill:!1},Ha={suppressEvents:!0,kill:!1},mb={suppressEvents:!0},sh={},as=[],fu={},Mm,Sn={},Ll={},Uf=30,Ga=[],rh="",oh=function(e){var t=e[0],n,i;if(hi(t)||yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ga.length;i--&&!Ga[i].targetTest(t););n=Ga[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Xm(e[i],n)))||e.splice(i,1);return e},Bs=function(e){return e._gsap||oh(Gn(e))[0]._gsap},Em=function(e,t,n){return(n=e[t])&&yt(n)?e[t]():eh(n)&&e.getAttribute&&e.getAttribute(t)||n},fn=function(e,t){return(e=e.split(",")).forEach(t)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},kt=function(e){return Math.round(e*1e7)/1e7||0},Cr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},gb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},tc=function(){var e=as.length,t=as.slice(0),n,i;for(fu={},as.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Sm=function(e,t,n,i){as.length&&!Zt&&tc(),e.render(t,n,Zt&&t<0&&(e._initted||e._startAt)),as.length&&!Zt&&tc()},Tm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(_m).length<2?t:Vt(e)?e.trim():e},bm=function(e){return e},Vn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_b=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Xs=function(e,t){for(var n in t)e[n]=t[n];return e},Ff=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=hi(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},nc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},wo=function(e){var t=e.parent||pt,n=e.keyframes?_b(Jt(e.keyframes)):Vn;if(dn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},vb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},wm=function(e,t,n,i,s){var r=e[i],a;if(s)for(a=t[s];r&&r[s]>a;)r=r._prev;return r?(t._next=r._next,r._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=r,t.parent=t._dp=e,t},wc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,r=t._next;s?s._next=r:e[n]===t&&(e[n]=r),r?r._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},us=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},zs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},xb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},pu=function(e,t,n,i){return e._startAt&&(Zt?e._startAt.revert(Ha):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},yb=function o(e){return!e||e._ts&&o(e.parent)},Of=function(e){return e._repeat?Yr(e._tTime,e=e.duration()+e._rDelay)*e:0},Yr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ic=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ac=function(e){return e._end=kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||at)||0))},Rc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ac(e),n._dirty||zs(n,e)),e},Am=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ic(e.rawTime(),t),(!t._dur||Ko(0,t.totalDuration(),n)-t._tTime>at)&&t.render(n,!0)),zs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-at}},si=function(e,t,n,i){return t.parent&&us(t),t._start=kt((Oi(n)?n:n||e!==pt?Nn(e,n,t):e._time)+t._delay),t._end=kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),wm(e,t,"_first","_last",e._sort?"_start":0),mu(t)||(e._recent=t),i||Am(e,t),e._ts<0&&Rc(e,e._tTime),e},Rm=function(e,t){return(Rn.ScrollTrigger||ih("scrollTrigger",t))&&Rn.ScrollTrigger.create(t,e)},Cm=function(e,t,n,i,s){if(ch(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Mm!==bn.frame)return as.push(e),e._lazy=[s,i],1},Mb=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},mu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Eb=function(e,t,n,i){var s=e.ratio,r=t<0||!t&&(!e._start&&Mb(e)&&!(!e._initted&&mu(e))||(e._ts<0||e._dp._ts<0)&&!mu(e))?0:1,a=e._rDelay,c=0,l,u,h;if(a&&e._repeat&&(c=Ko(0,e._tDur,t),u=Yr(c,a),e._yoyo&&u&1&&(r=1-r),u!==Yr(e._tTime,a)&&(s=1-r,e.vars.repeatRefresh&&e._initted&&e.invalidate())),r!==s||Zt||i||e._zTime===at||!t&&e._zTime){if(!e._initted&&Cm(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?at:0),n||(n=t&&!h),e.ratio=r,e._from&&(r=1-r),e._time=0,e._tTime=c,l=e._pt;l;)l.r(r,l.d),l=l._next;t<0&&pu(e,t,n,!0),e._onUpdate&&!n&&wn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&wn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===r&&(r&&us(e,1),!n&&!Zt&&(wn(e,r?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Sb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Kr=function(e,t,n,i){var s=e._repeat,r=kt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=r/e._dur),e._dur=r,e._tDur=s?s<0?1e10:kt(r*(s+1)+e._rDelay*s):r,a>0&&!i&&Rc(e,e._tTime=e._tDur*a),e.parent&&Ac(e),n||zs(e.parent,e),e},Bf=function(e){return e instanceof rn?zs(e):Kr(e,e._dur)},Tb={_start:0,endTime:Do,totalDuration:Do},Nn=function o(e,t,n){var i=e.labels,s=e._recent||Tb,r=e.duration()>=Hn?s.endTime(!1):e._dur,a,c,l;return Vt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=r),i[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(Jt(n)?n[0]:n).totalDuration()),a>1?o(e,t.substr(0,a-1),n)+c:r+c)):t==null?r:+t},Ao=function(e,t,n){var i=Oi(t[1]),s=(i?2:1)+(e<2?0:1),r=t[s],a,c;if(i&&(r.duration=t[1]),r.parent=n,e){for(a=r,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=dn(c.vars.inherit)&&c.parent;r.immediateRender=dn(a.immediateRender),e<2?r.runBackwards=1:r.startAt=t[s-1]}return new Lt(t[0],r,t[s+1])},ms=function(e,t){return e||e===0?t(e):t},Ko=function(e,t,n){return n<e?e:n>t?t:n},$t=function(e,t){return!Vt(e)||!(t=fb.exec(e))?"":t[1]},bb=function(e,t,n){return ms(n,function(i){return Ko(e,t,i)})},gu=[].slice,Pm=function(e,t){return e&&hi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&hi(e[0]))&&!e.nodeType&&e!==ti},wb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Vt(i)&&!t||Pm(i,1)?(s=n).push.apply(s,Gn(i)):n.push(i)})||n},Gn=function(e,t,n){return ut&&!t&&ut.selector?ut.selector(e):Vt(e)&&!n&&(du||!$r())?gu.call((t||nh).querySelectorAll(e),0):Jt(e)?wb(e,n):Pm(e)?gu.call(e,0):e?[e]:[]},_u=function(e){return e=Gn(e)[0]||No("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Gn(t,n.querySelectorAll?n:n===e?No("Invalid scope")||nh.createElement("div"):e)}},Lm=function(e){return e.sort(function(){return .5-Math.random()})},Im=function(e){if(yt(e))return e;var t=hi(e)?e:{each:e},n=ks(t.ease),i=t.from||0,s=parseFloat(t.base)||0,r={},a=i>0&&i<1,c=isNaN(i)||a,l=t.axis,u=i,h=i;return Vt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(u=i[0],h=i[1]),function(d,f,g){var _=(g||t).length,p=r[_],m,v,x,y,E,S,b,L,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,Hn])[1],!M){for(b=-Hn;b<(b=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(p=r[_]=[],m=c?Math.min(M,_)*u-.5:i%M,v=M===Hn?0:c?_*h/M-.5:i/M|0,b=0,L=Hn,S=0;S<_;S++)x=S%M-m,y=v-(S/M|0),p[S]=E=l?Math.abs(l==="y"?y:x):fm(x*x+y*y),E>b&&(b=E),E<L&&(L=E);i==="random"&&Lm(p),p.max=b-L,p.min=L,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:l?l==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=$t(t.amount||t.each)||0,n=n&&_<0?Gm(n):n}return _=(p[d]-p.min)/p.max||0,kt(p.b+(n?n(_):_)*p.v)+p.u}},vu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Oi(n)?0:$t(n))}},Nm=function(e,t){var n=Jt(e),i,s;return!n&&hi(e)&&(i=n=e.radius||Hn,e.values?(e=Gn(e.values),(s=!Oi(e[0]))&&(i*=i)):e=vu(e.increment)),ms(t,n?yt(e)?function(r){return s=e(r),Math.abs(s-r)<=i?s:r}:function(r){for(var a=parseFloat(s?r.x:r),c=parseFloat(s?r.y:0),l=Hn,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-c,d=d*d+f*f):d=Math.abs(e[h]-a),d<l&&(l=d,u=h);return u=!i||l<=i?e[u]:r,s||u===r||Oi(r)?u:u+$t(r)}:vu(e))},Dm=function(e,t,n,i){return ms(Jt(e)?!t:n===!0?!!(n=0):!i,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Ab=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,r){return r(s)},i)}},Rb=function(e,t){return function(n){return e(parseFloat(n))+(t||$t(n))}},Cb=function(e,t,n){return Fm(e,t,0,1,n)},Um=function(e,t,n){return ms(n,function(i){return e[~~t(i)]})},Pb=function o(e,t,n){var i=t-e;return Jt(e)?Um(e,o(0,e.length),t):ms(n,function(s){return(i+(s-e)%i)%i+e})},Lb=function o(e,t,n){var i=t-e,s=i*2;return Jt(e)?Um(e,o(0,e.length-1),t):ms(n,function(r){return r=(s+(r-e)%s)%s||0,e+(r>i?s-r:r)})},Uo=function(e){for(var t=0,n="",i,s,r,a;~(i=e.indexOf("random(",t));)r=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,r-i-7).match(a?_m:hu),n+=e.substr(t,i-t)+Dm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=r+1;return n+e.substr(t,e.length-t)},Fm=function(e,t,n,i,s){var r=t-e,a=i-n;return ms(s,function(c){return n+((c-e)/r*a||0)})},Ib=function o(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var r=Vt(e),a={},c,l,u,h,d;if(n===!0&&(i=1)&&(n=null),r)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(u=[],h=e.length,d=h-2,l=1;l<h;l++)u.push(o(e[l-1],e[l]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=Xs(Jt(e)?[]:{},e));if(!u){for(c in t)ah.call(a,e,c,"get",t[c]);s=function(g){return hh(g,a)||(r?e.p:e)}}}return ms(n,s)},zf=function(e,t,n){var i=e.labels,s=Hn,r,a,c;for(r in i)a=i[r]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=r,s=a);return c},wn=function(e,t,n){var i=e.vars,s=i[t],r=ut,a=e._ctx,c,l,u;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&as.length&&tc(),a&&(ut=a),u=c?s.apply(l,c):s.call(l),ut=r,u},xo=function(e){return us(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Zt),e.progress()<1&&wn(e,"onInterrupt"),e},Tr,Om=[],Bm=function(e){if(e)if(e=!e.name&&e.default||e,th()||e.headless){var t=e.name,n=yt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Do,render:hh,add:ah,kill:Yb,modifier:jb,rawVars:0},r={targetTest:0,get:0,getSetter:uh,aliases:{},register:0};if($r(),e!==i){if(Sn[t])return;Vn(i,Vn(nc(e,s),r)),Xs(i.prototype,Xs(s,nc(e,r))),Sn[i.prop=t]=i,e.targetTest&&(Ga.push(i),sh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ym(t,i),e.register&&e.register(gn,i,pn)}else Om.push(e)},nt=255,yo={aqua:[0,nt,nt],lime:[0,nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,nt],navy:[0,0,128],white:[nt,nt,nt],olive:[128,128,0],yellow:[nt,nt,0],orange:[nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[nt,0,0],pink:[nt,192,203],cyan:[0,nt,nt],transparent:[nt,nt,nt,0]},Il=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*nt+.5|0},zm=function(e,t,n){var i=e?Oi(e)?[e>>16,e>>8&nt,e&nt]:0:yo.black,s,r,a,c,l,u,h,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),yo[e])i=yo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),r=e.charAt(2),a=e.charAt(3),e="#"+s+s+r+r+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&nt,i&nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&nt,e&nt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(hu),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,r=u<=.5?u*(l+1):u+l-u*l,s=u*2-r,i.length>3&&(i[3]*=1),i[0]=Il(c+1/3,s,r),i[1]=Il(c,s,r),i[2]=Il(c-1/3,s,r);else if(~e.indexOf("="))return i=e.match(mm),n&&i.length<4&&(i[3]=1),i}else i=e.match(hu)||yo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/nt,r=i[1]/nt,a=i[2]/nt,h=Math.max(s,r,a),d=Math.min(s,r,a),u=(h+d)/2,h===d?c=l=0:(f=h-d,l=u>.5?f/(2-h-d):f/(h+d),c=h===s?(r-a)/f+(r<a?6:0):h===r?(a-s)/f+2:(s-r)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},km=function(e){var t=[],n=[],i=-1;return e.split(cs).forEach(function(s){var r=s.match(Sr)||[];t.push.apply(t,r),n.push(i+=r.length+1)}),t.c=n,t},kf=function(e,t,n){var i="",s=(e+i).match(cs),r=t?"hsla(":"rgba(",a=0,c,l,u,h;if(!s)return e;if(s=s.map(function(d){return(d=zm(d,t,1))&&r+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=km(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(cs,"1").split(Sr),h=l.length-1;a<h;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||r+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(cs),h=l.length-1;a<h;a++)i+=l[a]+s[a];return i+l[h]},cs=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in yo)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),Nb=/hsl[a]?\(/,Hm=function(e){var t=e.join(" "),n;if(cs.lastIndex=0,cs.test(t))return n=Nb.test(t),e[1]=kf(e[1],n),e[0]=kf(e[0],n,km(e[1])),!0},Fo,bn=function(){var o=Date.now,e=500,t=33,n=o(),i=n,s=1e3/240,r=s,a=[],c,l,u,h,d,f,g=function _(p){var m=o()-i,v=p===!0,x,y,E,S;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,x=E-r,(x>0||v)&&(S=++h.frame,d=E-h.time*1e3,h.time=E=E/1e3,r+=x+(x>=s?4:s-x),y=1),v||(c=l(_)),y)for(f=0;f<a.length;f++)a[f](E,d,S,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){vm&&(!du&&th()&&(ti=du=window,nh=ti.document||{},Rn.gsap=gn,(ti.gsapVersions||(ti.gsapVersions=[])).push(gn.version),xm(ec||ti.GreenSockGlobals||!ti.gsap&&ti||{}),Om.forEach(Bm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(p){return setTimeout(p,r-h.time*1e3+1|0)},Fo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Fo=0,l=Do},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),r=h.time*1e3+s},add:function(p,m,v){var x=m?function(y,E,S,b){p(y,E,S,b),h.remove(x)}:p;return h.remove(p),a[v?"unshift":"push"](x),$r(),x},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},h}(),$r=function(){return!Fo&&bn.wake()},Ye={},Db=/^[\d.\-M][\d.\-,\s]/,Ub=/["']/g,Fb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,r=n.length,a,c,l;s<r;s++)c=n[s],a=s!==r-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[i]=isNaN(l)?l.replace(Ub,"").trim():+l,i=c.substr(a+1).trim();return t},Ob=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Bb=function(e){var t=(e+"").split("("),n=Ye[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Fb(t[1])]:Ob(e).split(",").map(Tm)):Ye._CE&&Db.test(e)?Ye._CE("",e):n},Gm=function(e){return function(t){return 1-e(1-t)}},Vm=function o(e,t){for(var n=e._first,i;n;)n instanceof rn?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ks=function(e,t){return e&&(yt(e)?e:Ye[e]||Bb(e))||t},Ks=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},r;return fn(e,function(a){Ye[a]=Rn[a]=s,Ye[r=a.toLowerCase()]=n;for(var c in s)Ye[r+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ye[a+"."+c]=s[c]}),s},Wm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Nl=function o(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),r=s/uu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*db((u-r)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:Wm(a);return s=uu/s,c.config=function(l,u){return o(e,l,u)},c},Dl=function o(e,t){t===void 0&&(t=1.70158);var n=function(r){return r?--r*r*((t+1)*r+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Wm(n);return i.config=function(s){return o(e,s)},i};fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Ks(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ye.Linear.easeNone=Ye.none=Ye.Linear.easeIn;Ks("Elastic",Nl("in"),Nl("out"),Nl());(function(o,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?o*a*a:a<n?o*Math.pow(a-1.5/e,2)+.75:a<i?o*(a-=2.25/e)*a+.9375:o*Math.pow(a-2.625/e,2)+.984375};Ks("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);Ks("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Ks("Circ",function(o){return-(fm(1-o*o)-1)});Ks("Sine",function(o){return o===1?1:-hb(o*lb)+1});Ks("Back",Dl("in"),Dl("out"),Dl());Ye.SteppedEase=Ye.steps=Rn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,r=1-at;return function(a){return((i*Ko(0,r,a)|0)+s)*n}}};jr.ease=Ye["quad.out"];fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return rh+=o+","+o+"Params,"});var Xm=function(e,t){this.id=ub++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Em,this.set=t?t.getSetter:uh},Oo=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Kr(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),Fo||bn.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Kr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if($r(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Rc(this,n),!s._dp||s.parent||Am(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===at||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Of(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Of(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Yr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-at?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ic(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-at?0:this._rts,this.totalTime(Ko(-Math.abs(this._delay),this._tDur,s),i!==!1),Ac(this),xb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($r(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==at&&(this._tTime-=at)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&si(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(dn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ic(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=mb);var i=Zt;return Zt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Zt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Bf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Nn(this,n),dn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,dn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-at:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-at,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-at)},e.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},e.then=function(n){var i=this;return new Promise(function(s){var r=yt(n)?n:bm,a=function(){var l=i.then;i.then=null,yt(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=l),s(r),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){xo(this)},o}();Vn(Oo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-at,_prom:0,_ps:!1,_rts:1});var rn=function(o){dm(e,o);function e(n,i){var s;return n===void 0&&(n={}),s=o.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=dn(n.sortChildren),pt&&si(n.parent||pt,Ci(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Rm(Ci(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,r){return Ao(0,arguments,this),this},t.from=function(i,s,r){return Ao(1,arguments,this),this},t.fromTo=function(i,s,r,a){return Ao(2,arguments,this),this},t.set=function(i,s,r){return s.duration=0,s.parent=this,wo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Lt(i,s,Nn(this,r),1),this},t.call=function(i,s,r){return si(this,Lt.delayedCall(0,i,s),r)},t.staggerTo=function(i,s,r,a,c,l,u){return r.duration=s,r.stagger=r.stagger||a,r.onComplete=l,r.onCompleteParams=u,r.parent=this,new Lt(i,r,Nn(this,c)),this},t.staggerFrom=function(i,s,r,a,c,l,u){return r.runBackwards=1,wo(r).immediateRender=dn(r.immediateRender),this.staggerTo(i,s,r,a,c,l,u)},t.staggerFromTo=function(i,s,r,a,c,l,u,h){return a.startAt=r,wo(a).immediateRender=dn(a.immediateRender),this.staggerTo(i,s,a,c,l,u,h)},t.render=function(i,s,r){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:kt(i),h=this._zTime<0!=i<0&&(this._initted||!l),d,f,g,_,p,m,v,x,y,E,S,b;if(this!==pt&&u>c&&i>=0&&(u=c),u!==this._tTime||r||h){if(a!==this._time&&l&&(u+=this._time-a,i+=this._time-a),d=u,y=this._start,x=this._ts,m=!x,h&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,r);if(d=kt(u%p),u===c?(_=this._repeat,d=l):(_=~~(u/p),_&&_===u/p&&(d=l,_--),d>l&&(d=l)),E=Yr(this._tTime,p),!a&&this._tTime&&E!==_&&this._tTime-E*p-this._dur<=0&&(E=_),S&&_&1&&(d=l-d,b=1),_!==E&&!this._lock){var L=S&&E&1,M=L===(S&&_&1);if(_<E&&(L=!L),a=L?0:u%l?l:u,this._lock=1,this.render(a||(b?0:kt(_*p)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&wn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,M&&(this._lock=2,a=L?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Vm(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Sb(this,kt(a),kt(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!_&&(wn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,r);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,r),d!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=-at);break}}f=g}else{f=this._last;for(var w=i<0?i:d;f;){if(g=f._prev,(f._act||w<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,r);if(f.render(f._ts>0?(w-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(w-f._start)*f._ts,s,r||Zt&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){v=0,g&&(u+=this._zTime=w?-at:at);break}}f=g}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-at)._zTime=d>=a?1:-1,this._ts))return this._start=y,Ac(this),this.render(i,s,r);this._onUpdate&&!s&&wn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&us(this,1),!s&&!(i<0&&!a)&&(u||a||!c)&&(wn(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var r=this;if(Oi(s)||(s=Nn(this,s,i)),!(i instanceof Oo)){if(Jt(i))return i.forEach(function(a){return r.add(a,s)}),this;if(Vt(i))return this.addLabel(i,s);if(yt(i))i=Lt.delayedCall(0,i);else return this}return this!==i?si(this,i,s):this},t.getChildren=function(i,s,r,a){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=-Hn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof Lt?s&&c.push(l):(r&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,r)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},t.remove=function(i){return Vt(i)?this.removeLabel(i):yt(i)?this.killTweensOf(i):(wc(this,i),i===this._recent&&(this._recent=this._last),zs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kt(bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Nn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,r){var a=Lt.delayedCall(0,s||Do,r);return a.data="isPause",this._hasPause=1,si(this,a,Nn(this,i))},t.removePause=function(i){var s=this._first;for(i=Nn(this,i);s;)s._start===i&&s.data==="isPause"&&us(s),s=s._next},t.killTweensOf=function(i,s,r){for(var a=this.getTweensOf(i,r),c=a.length;c--;)es!==a[c]&&a[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var r=[],a=Gn(i),c=this._first,l=Oi(s),u;c;)c instanceof Lt?gb(c._targets,a)&&(l?(!es||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&r.push(c):(u=c.getTweensOf(a,s)).length&&r.push.apply(r,u),c=c._next;return r},t.tweenTo=function(i,s){s=s||{};var r=this,a=Nn(r,i),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,d=c.immediateRender,f,g=Lt.to(r,Vn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:r._time))/r.timeScale())||at,onStart:function(){if(r.pause(),!f){var p=s.duration||Math.abs((a-(l&&"time"in l?l.time:r._time))/r.timeScale());g._dur!==p&&Kr(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,r){return this.tweenTo(s,Vn({startAt:{time:Nn(this,i)}},r))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),zf(this,Nn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),zf(this,Nn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+at)},t.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var a=this._first,c=this.labels,l;a;)a._start>=r&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=r&&(c[l]+=i);return zs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zs(this)},t.totalDuration=function(i){var s=0,r=this,a=r._last,c=Hn,l,u,h;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(h=r.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&r._sort&&a._ts&&!r._lock?(r._lock=1,si(r,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!h&&!r._dp||h&&h.smoothChildTiming)&&(r._start+=u/r._ts,r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;Kr(r,r===pt&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},e.updateRoot=function(i){if(pt._ts&&(Sm(pt,ic(i,pt)),Mm=bn.frame),bn.frame>=Uf){Uf+=An.autoSleep||120;var s=pt._first;if((!s||!s._ts)&&An.autoSleep&&bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||bn.sleep()}}},e}(Oo);Vn(rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var zb=function(e,t,n,i,s,r,a){var c=new pn(this._pt,e,t,0,1,Zm,null,s),l=0,u=0,h,d,f,g,_,p,m,v;for(c.b=n,c.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Uo(i)),r&&(v=[n,i],r(v,e,t),n=v[0],i=v[1]),d=n.match(Pl)||[];h=Pl.exec(i);)g=h[0],_=i.substring(l,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Cr(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},l=Pl.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(gm.test(i)||m)&&(c.e=0),this._pt=c,c},ah=function(e,t,n,i,s,r,a,c,l,u){yt(i)&&(i=i(s||0,e,r));var h=e[t],d=n!=="get"?n:yt(h)?l?e[t.indexOf("set")||!yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,f=yt(h)?l?Wb:Km:lh,g;if(Vt(i)&&(~i.indexOf("random(")&&(i=Uo(i)),i.charAt(1)==="="&&(g=Cr(d,i)+($t(d)||0),(g||g===0)&&(i=g))),!u||d!==i||xu)return!isNaN(d*i)&&i!==""?(g=new pn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?qb:$m,0,f),l&&(g.fp=l),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&ih(t,i),zb.call(this,e,t,d,i,f,c||An.stringFilter,l))},kb=function(e,t,n,i,s){if(yt(e)&&(e=Ro(e,s,t,n,i)),!hi(e)||e.style&&e.nodeType||Jt(e)||pm(e))return Vt(e)?Ro(e,s,t,n,i):e;var r={},a;for(a in e)r[a]=Ro(e[a],s,t,n,i);return r},qm=function(e,t,n,i,s,r){var a,c,l,u;if(Sn[e]&&(a=new Sn[e]).init(s,a.rawVars?t[e]:kb(t[e],i,s,r,n),n,i,r)!==!1&&(n._pt=c=new pn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Tr))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},es,xu,ch=function o(e,t,n){var i=e.vars,s=i.ease,r=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,v=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!Qu,y=e.timeline,E,S,b,L,M,w,F,k,U,P,I,N,G;if(y&&(!d||!s)&&(s="none"),e._ease=ks(s,jr.ease),e._yEase=h?Gm(ks(h===!0?s:h,jr.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(k=p[0]?Bs(p[0]).harness:0,N=k&&i[k.prop],E=nc(i,sh),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?Ha:pb),_._lazy=0),r){if(us(e._startAt=Lt.set(p,Vn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&dn(c),startAt:null,delay:0,onUpdate:l&&function(){return wn(e,"onUpdate")},stagger:0},r))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt||!a&&!f)&&e._startAt.revert(Ha),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),b=Vn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&dn(c),immediateRender:a,stagger:0,parent:m},E),N&&(b[k.prop]=N),us(e._startAt=Lt.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt?e._startAt.revert(Ha):e._startAt.render(-1,!0)),e._zTime=t,!a)o(e._startAt,at,at);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&dn(c)||c&&!g,S=0;S<p.length;S++){if(M=p[S],F=M._gsap||oh(p)[S]._gsap,e._ptLookup[S]=P={},fu[F.id]&&as.length&&tc(),I=v===p?S:v.indexOf(M),k&&(U=new k).init(M,N||E,e,I,v)!==!1&&(e._pt=L=new pn(e._pt,M,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(z){P[z]=L}),U.priority&&(w=1)),!k||N)for(b in E)Sn[b]&&(U=qm(b,E,e,I,M,v))?U.priority&&(w=1):P[b]=L=ah.call(e,M,b,"get",E[b],I,v,0,i.stringFilter);e._op&&e._op[S]&&e.kill(M,e._op[S]),x&&e._pt&&(es=e,pt.killTweensOf(M,P,e.globalTime(t)),G=!e.parent,es=0),e._pt&&c&&(fu[F.id]=1)}w&&Jm(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!G,d&&t<=0&&y.render(Hn,!0,!0)},Hb=function(e,t,n,i,s,r,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return xu=1,e.vars[t]="+=0",ch(e,a),xu=0,c?No(t+" not eligible for reset"):1;l.push(u)}for(f=l.length;f--;)h=l[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+r*u.c,u.c=n-u.s,h.e&&(h.e=Tt(n)+$t(h.e)),h.b&&(h.b=u.s+$t(h.b))},Gb=function(e,t){var n=e[0]?Bs(e[0]).harness:0,i=n&&n.aliases,s,r,a,c;if(!i)return t;s=Xs({},t);for(r in i)if(r in s)for(c=i[r].split(","),a=c.length;a--;)s[c[a]]=s[r];return s},Vb=function(e,t,n,i){var s=t.ease||i||"power1.inOut",r,a;if(Jt(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(r in t)a=n[r]||(n[r]=[]),r==="ease"||a.push({t:parseFloat(e),v:t[r],e:s})},Ro=function(e,t,n,i,s){return yt(e)?e.call(t,n,i,s):Vt(e)&&~e.indexOf("random(")?Uo(e):e},jm=rh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ym={};fn(jm+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Ym[o]=1});var Lt=function(o){dm(e,o);function e(n,i,s,r){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=o.call(this,r?i:wo(i))||this;var c=a.vars,l=c.duration,u=c.delay,h=c.immediateRender,d=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,p=c.scrollTrigger,m=c.yoyoEase,v=i.parent||pt,x=(Jt(n)||pm(n)?Oi(n[0]):"length"in i)?[n]:Gn(n),y,E,S,b,L,M,w,F;if(a._targets=x.length?oh(x):No("GSAP target "+n+" not found. https://gsap.com",!An.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||Fa(l)||Fa(u)){if(i=a.vars,y=a.timeline=new rn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=Ci(a),y._start=0,d||Fa(l)||Fa(u)){if(b=x.length,w=d&&Im(d),hi(d))for(L in d)~jm.indexOf(L)&&(F||(F={}),F[L]=d[L]);for(E=0;E<b;E++)S=nc(i,Ym),S.stagger=0,m&&(S.yoyoEase=m),F&&Xs(S,F),M=x[E],S.duration=+Ro(l,Ci(a),E,M,x),S.delay=(+Ro(u,Ci(a),E,M,x)||0)-a._delay,!d&&b===1&&S.delay&&(a._delay=u=S.delay,a._start+=u,S.delay=0),y.to(M,S,w?w(E,M,x):0),y._ease=Ye.none;y.duration()?l=u=0:a.timeline=0}else if(g){wo(Vn(y.vars.defaults,{ease:"none"})),y._ease=ks(g.ease||i.ease||"none");var k=0,U,P,I;if(Jt(g))g.forEach(function(N){return y.to(x,N,">")}),y.duration();else{S={};for(L in g)L==="ease"||L==="easeEach"||Vb(L,g[L],S,g.easeEach);for(L in S)for(U=S[L].sort(function(N,G){return N.t-G.t}),k=0,E=0;E<U.length;E++)P=U[E],I={ease:P.e,duration:(P.t-(E?U[E-1].t:0))/100*l},I[L]=P.v,y.to(x,I,k),k+=I.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||a.duration(l=y.duration())}else a.timeline=0;return f===!0&&!Qu&&(es=Ci(a),pt.killTweensOf(x),es=0),si(v,Ci(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!l&&!g&&a._start===kt(v._time)&&dn(h)&&yb(Ci(a))&&v.data!=="nested")&&(a._tTime=-at,a.render(Math.max(0,-u)||0)),p&&Rm(Ci(a),p),a}var t=e.prototype;return t.render=function(i,s,r){var a=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-at&&!u?c:i<at?0:i,d,f,g,_,p,m,v,x,y;if(!l)Eb(this,i,s,r);else if(h!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,x=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,r);if(d=kt(h%_),h===c?(g=this._repeat,d=l):(g=~~(h/_),g&&g===kt(h/_)&&(d=l,g--),d>l&&(d=l)),m=this._yoyo&&g&1,m&&(y=this._yEase,d=l-d),p=Yr(this._tTime,_),d===a&&!r&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(x&&this._yEase&&Vm(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=r=1,this.render(kt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Cm(this,u?i:d,r,s,h))return this._tTime=0,this;if(a!==this._time&&!(r&&this.vars.repeatRefresh&&g!==p))return this;if(l!==this._dur)return this.render(i,s,r)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(d/l),this._from&&(this.ratio=v=1-v),d&&!a&&!s&&!g&&(wn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&pu(this,i,s,r),wn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&wn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&pu(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&us(this,1),!s&&!(u&&!a)&&(h||a||m)&&(wn(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,r,a,c){Fo||bn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ch(this,l),u=this._ease(l/this._dur),Hb(this,i,s,r,a,u,l,c)?this.resetTo(i,s,r,a,1):(Rc(this,0),this.parent||wm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xo(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,es&&es.vars.overwrite!==!0)._first||xo(this),this.parent&&r!==this.timeline.totalDuration()&&Kr(this,this._dur*this.timeline._tDur/r,0,1),this}var a=this._targets,c=i?Gn(i):a,l=this._ptLookup,u=this._pt,h,d,f,g,_,p,m;if((!s||s==="all")&&vb(a,c))return s==="all"&&(this._pt=0),xo(this);for(h=this._op=this._op||[],s!=="all"&&(Vt(s)&&(_={},fn(s,function(v){return _[v]=1}),s=_),s=Gb(a,s)),m=a.length;m--;)if(~c.indexOf(a[m])){d=l[m],s==="all"?(h[m]=s,g=d,f={}):(f=h[m]=h[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&wc(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&xo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ao(1,arguments)},e.delayedCall=function(i,s,r,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:a})},e.fromTo=function(i,s,r){return Ao(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,r){return pt.killTweensOf(i,s,r)},e}(Oo);Vn(Lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fn("staggerTo,staggerFrom,staggerFromTo",function(o){Lt[o]=function(){var e=new rn,t=gu.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var lh=function(e,t,n){return e[t]=n},Km=function(e,t,n){return e[t](n)},Wb=function(e,t,n,i){return e[t](i.fp,n)},Xb=function(e,t,n){return e.setAttribute(t,n)},uh=function(e,t){return yt(e[t])?Km:eh(e[t])&&e.setAttribute?Xb:lh},$m=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},qb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Zm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},hh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},jb=function(e,t,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(e,t,n),s=r},Yb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?wc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Kb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Jm=function(e){for(var t=e._pt,n,i,s,r;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:r)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:r=t,t=n}e._pt=s},pn=function(){function o(t,n,i,s,r,a,c,l,u){this.t=n,this.s=s,this.c=r,this.p=i,this.r=a||$m,this.d=c||this,this.set=l||lh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Kb,this.m=n,this.mt=s,this.tween=i},o}();fn(rh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return sh[o]=1});Rn.TweenMax=Rn.TweenLite=Lt;Rn.TimelineLite=Rn.TimelineMax=rn;pt=new rn({sortChildren:!1,defaults:jr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});An.stringFilter=Hm;var Hs=[],Va={},$b=[],Hf=0,Zb=0,Ul=function(e){return(Va[e]||$b).map(function(t){return t()})},yu=function(){var e=Date.now(),t=[];e-Hf>2&&(Ul("matchMediaInit"),Hs.forEach(function(n){var i=n.queries,s=n.conditions,r,a,c,l;for(a in i)r=ti.matchMedia(i[a]).matches,r&&(c=1),r!==s[a]&&(s[a]=r,l=1);l&&(n.revert(),c&&t.push(n))}),Ul("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Hf=e,Ul("matchMedia"))},Qm=function(){function o(t,n){this.selector=n&&_u(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Zb++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,s){yt(n)&&(s=i,i=n,n=yt);var r=this,a=function(){var l=ut,u=r.selector,h;return l&&l!==r&&l.data.push(r),s&&(r.selector=_u(s)),ut=r,h=i.apply(r,arguments),yt(h)&&r._r.push(h),ut=l,r.selector=u,r.isReverted=!1,h};return r.last=a,n===yt?a(r,function(c){return r.add(null,c)}):n?r[n]=a:a},e.ignore=function(n){var i=ut;ut=null,n(this),ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Lt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof rn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Lt)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var r=Hs.length;r--;)Hs[r].id===this.id&&Hs.splice(r,1)},e.revert=function(n){this.kill(n||{})},o}(),Jb=function(){function o(t){this.contexts=[],this.scope=t,ut&&ut.data.push(this)}var e=o.prototype;return e.add=function(n,i,s){hi(n)||(n={matches:n});var r=new Qm(0,s||this.scope),a=r.conditions={},c,l,u;ut&&!r.selector&&(r.selector=ut.selector),this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(l in n)l==="all"?u=1:(c=ti.matchMedia(n[l]),c&&(Hs.indexOf(r)<0&&Hs.push(r),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(yu):c.addEventListener("change",yu)));return u&&i(r,function(h){return r.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),sc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Bm(i)})},timeline:function(e){return new rn(e)},getTweensOf:function(e,t){return pt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Vt(e)&&(e=Gn(e)[0]);var s=Bs(e||{}).get,r=n?bm:Tm;return n==="native"&&(n=""),e&&(t?r((Sn[t]&&Sn[t].get||s)(e,t,n,i)):function(a,c,l){return r((Sn[a]&&Sn[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=Gn(e),e.length>1){var i=e.map(function(u){return gn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var r=Sn[t],a=Bs(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=r?function(u){var h=new r;Tr._pt=0,h.init(e,n?u+n:u,Tr,0,[e]),h.render(1,h),Tr._pt&&hh(1,Tr)}:a.set(e,c);return r?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=gn.to(e,Xs((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),r=function(c,l,u){return s.resetTo(t,c,l,u)};return r.tween=s,r},isTweening:function(e){return pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ks(e.ease,jr.ease)),Ff(jr,e||{})},config:function(e){return Ff(An,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,r=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Sn[a]&&!Rn[a]&&No(t+" effect requires "+a+" plugin.")}),Ll[t]=function(a,c,l){return n(Gn(a),Vn(c||{},s),l)},r&&(rn.prototype[t]=function(a,c,l){return this.add(Ll[t](a,hi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Ye[e]=ks(t)},parseEase:function(e,t){return arguments.length?ks(e,t):Ye},getById:function(e){return pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new rn(e),i,s;for(n.smoothChildTiming=dn(e.smoothChildTiming),pt.remove(n),n._dp=0,n._time=n._tTime=pt._time,i=pt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Lt&&i.vars.onComplete===i._targets[0]))&&si(n,i,i._start-i._delay),i=s;return si(pt,n,0),n},context:function(e,t){return e?new Qm(e,t):ut},matchMedia:function(e){return new Jb(e)},matchMediaRefresh:function(){return Hs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||yu()},addEventListener:function(e,t){var n=Va[e]||(Va[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Va[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Pb,wrapYoyo:Lb,distribute:Im,random:Dm,snap:Nm,normalize:Cb,getUnit:$t,clamp:bb,splitColor:zm,toArray:Gn,selector:_u,mapRange:Fm,pipe:Ab,unitize:Rb,interpolate:Ib,shuffle:Lm},install:xm,effects:Ll,ticker:bn,updateRoot:rn.updateRoot,plugins:Sn,globalTimeline:pt,core:{PropTween:pn,globals:ym,Tween:Lt,Timeline:rn,Animation:Oo,getCache:Bs,_removeLinkedListItem:wc,reverting:function(){return Zt},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return Qu=e}}};fn("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return sc[o]=Lt[o]});bn.add(rn.updateRoot);Tr=sc.to({},{duration:0});var Qb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ew=function(e,t){var n=e._targets,i,s,r;for(i in t)for(s=n.length;s--;)r=e._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=Qb(r,i)),r&&r.modifier&&r.modifier(t[i],e,n[s],i))},Fl=function(e,t){return{name:e,rawVars:1,init:function(i,s,r){r._onInit=function(a){var c,l;if(Vt(s)&&(c={},fn(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}ew(a,s)}}}},gn=sc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var r,a,c;this.tween=n;for(r in t)c=e.getAttribute(r)||"",a=this.add(e,"setAttribute",(c||0)+"",t[r],i,s,0,0,r),a.op=r,a.b=c,this._props.push(r)},render:function(e,t){for(var n=t._pt;n;)Zt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Fl("roundProps",vu),Fl("modifiers"),Fl("snap",Nm))||sc;Lt.version=rn.version=gn.version="3.12.5";vm=1;th()&&$r();Ye.Power0;Ye.Power1;Ye.Power2;Ye.Power3;Ye.Power4;Ye.Linear;Ye.Quad;Ye.Cubic;Ye.Quart;Ye.Quint;Ye.Strong;Ye.Elastic;Ye.Back;Ye.SteppedEase;Ye.Bounce;Ye.Sine;Ye.Expo;Ye.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gf,ts,Pr,dh,Ds,Vf,fh,tw=function(){return typeof window<"u"},Bi={},Rs=180/Math.PI,Lr=Math.PI/180,vr=Math.atan2,Wf=1e8,ph=/([A-Z])/g,nw=/(left|right|width|margin|padding|x)/i,iw=/[\s,\(]\S/,oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Mu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},sw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ow=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},eg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},tg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},aw=function(e,t,n){return e.style[t]=n},cw=function(e,t,n){return e.style.setProperty(t,n)},lw=function(e,t,n){return e._gsap[t]=n},uw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hw=function(e,t,n,i,s){var r=e._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},dw=function(e,t,n,i,s){var r=e._gsap;r[t]=n,r.renderTransform(s,r)},mt="transform",mn=mt+"Origin",fw=function o(e,t){var n=this,i=this.target,s=i.style,r=i._gsap;if(e in Bi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Li(i,a)}):this.tfm[e]=r.x?r[e]:Li(i,e),e===mn&&(this.tfm.zOrigin=r.zOrigin);else return oi.transform.split(",").forEach(function(a){return o.call(n,a,t)});if(this.props.indexOf(mt)>=0)return;r.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(mn,t,"")),e=mt}(s||t)&&this.props.push(e,t,s[e])},ng=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,r;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(ph,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=fh(),(!s||!s.isStart)&&!n[mt]&&(ng(n),i.zOrigin&&n[mn]&&(n[mn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ig=function(e,t){var n={target:e,props:[],revert:pw,save:fw};return e._gsap||gn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},sg,Eu=function(e,t){var n=ts.createElementNS?ts.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ts.createElement(e);return n&&n.style?n:ts.createElement(e)},ci=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ph,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Zr(t)||t,1)||""},Xf="O,Moz,ms,Ms,Webkit".split(","),Zr=function(e,t,n){var i=t||Ds,s=i.style,r=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);r--&&!(Xf[r]+e in s););return r<0?null:(r===3?"ms":r>=0?Xf[r]:"")+e},Su=function(){tw()&&window.document&&(Gf=window,ts=Gf.document,Pr=ts.documentElement,Ds=Eu("div")||{style:{}},Eu("div"),mt=Zr(mt),mn=mt+"Origin",Ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sg=!!Zr("perspective"),fh=gn.core.reverting,dh=1)},Ol=function o(e){var t=Eu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(Pr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Pr.removeChild(t),this.style.cssText=s,r},qf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},rg=function(e){var t;try{t=e.getBBox()}catch{t=Ol.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ol||(t=Ol.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+qf(e,["x","cx","x1"])||0,y:+qf(e,["y","cy","y1"])||0,width:0,height:0}:t},og=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&rg(e))},qs=function(e,t){if(t){var n=e.style,i;t in Bi&&t!==mn&&(t=mt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(ph,"-$1").toLowerCase())):n.removeAttribute(t)}},ns=function(e,t,n,i,s,r){var a=new pn(e._pt,t,n,0,1,r?tg:eg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},jf={deg:1,rad:1,turn:1},mw={grid:1,flex:1},hs=function o(e,t,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",a=Ds.style,c=nw.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,d=i==="px",f=i==="%",g,_,p,m;if(i===r||!s||jf[i]||jf[r])return s;if(r!=="px"&&!d&&(s=o(e,t,n,"px")),m=e.getCTM&&og(e),(f||r==="%")&&(Bi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[c?"width":"height"]:e[u],Tt(f?s/g*h:s/100*g);if(a[c?"width":"height"]=h+(d?r:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ts||!_.appendChild)&&(_=ts.body),p=_._gsap,p&&f&&p.width&&c&&p.time===bn.time&&!p.uncache)return Tt(s/p.width*h);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+i,g=e[u],v?e.style[t]=v:qs(e,t)}else(f||r==="%")&&!mw[ci(_,"display")]&&(a.position=ci(e,"position")),_===e&&(a.position="static"),_.appendChild(Ds),g=Ds[u],_.removeChild(Ds),a.position="absolute";return c&&f&&(p=Bs(_),p.time=bn.time,p.width=_[u]),Tt(d?g*s/h:g&&s?h/g*s:0)},Li=function(e,t,n,i){var s;return dh||Su(),t in oi&&t!=="transform"&&(t=oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Bi[t]&&t!=="transform"?(s=zo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:oc(ci(e,mn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=rc[t]&&rc[t](e,t,n)||ci(e,t)||Em(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?hs(e,t,s,n)+n:s},gw=function(e,t,n,i){if(!n||n==="none"){var s=Zr(t,e,1),r=s&&ci(e,s,1);r&&r!==n?(t=s,n=r):t==="borderColor"&&(n=ci(e,"borderTopColor"))}var a=new pn(this._pt,e.style,t,0,1,Zm),c=0,l=0,u,h,d,f,g,_,p,m,v,x,y,E;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=ci(e,t)||i,_?e.style[t]=_:qs(e,t)),u=[n,i],Hm(u),n=u[0],i=u[1],d=n.match(Sr)||[],E=i.match(Sr)||[],E.length){for(;h=Sr.exec(i);)p=h[0],v=i.substring(c,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(_=d[l++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),p.charAt(1)==="="&&(p=Cr(f,p)+y),m=parseFloat(p),x=p.substr((m+"").length),c=Sr.lastIndex-x.length,x||(x=x||An.units[t]||y,c===i.length&&(i+=x,a.e+=x)),y!==x&&(f=hs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||l===1?v:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=t==="display"&&i==="none"?tg:eg;return gm.test(i)&&(a.e=0),this._pt=a,a},Yf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_w=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Yf[n]||n,t[1]=Yf[i]||i,t.join(" ")},vw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,r=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],Bi[a]&&(c=1,a=a==="transformOrigin"?mn:mt),qs(n,a);c&&(qs(n,mt),r&&(r.svg&&n.removeAttribute("transform"),zo(n,1),r.uncache=1,ng(i)))}},rc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var r=e._pt=new pn(e._pt,t,n,0,0,vw);return r.u=i,r.pr=-10,r.tween=s,e._props.push(n),1}}},Bo=[1,0,0,1,0,0],ag={},cg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Kf=function(e){var t=ci(e,mt);return cg(t)?Bo:t.substr(7).match(mm).map(Tt)},mh=function(e,t){var n=e._gsap||Bs(e),i=e.style,s=Kf(e),r,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Bo:s):(s===Bo&&!e.offsetParent&&e!==Pr&&!n.svg&&(c=i.display,i.display="block",r=e.parentNode,(!r||!e.offsetParent)&&(l=1,a=e.nextElementSibling,Pr.appendChild(e)),s=Kf(e),c?i.display=c:qs(e,"display"),l&&(a?r.insertBefore(e,a):r?r.appendChild(e):Pr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Tu=function(e,t,n,i,s,r){var a=e._gsap,c=s||mh(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=c[0],g=c[1],_=c[2],p=c[3],m=c[4],v=c[5],x=t.split(" "),y=parseFloat(x[0])||0,E=parseFloat(x[1])||0,S,b,L,M;n?c!==Bo&&(b=f*p-g*_)&&(L=y*(p/b)+E*(-_/b)+(_*v-p*m)/b,M=y*(-g/b)+E*(f/b)-(f*v-g*m)/b,y=L,E=M):(S=rg(e),y=S.x+(~x[0].indexOf("%")?y/100*S.width:y),E=S.y+(~(x[1]||x[0]).indexOf("%")?E/100*S.height:E)),i||i!==!1&&a.smooth?(m=y-l,v=E-u,a.xOffset=h+(m*f+v*_)-m,a.yOffset=d+(m*g+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=E,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[mn]="0px 0px",r&&(ns(r,a,"xOrigin",l,y),ns(r,a,"yOrigin",u,E),ns(r,a,"xOffset",h,a.xOffset),ns(r,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},zo=function(e,t){var n=e._gsap||new Xm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,r="px",a="deg",c=getComputedStyle(e),l=ci(e,mn)||"0",u,h,d,f,g,_,p,m,v,x,y,E,S,b,L,M,w,F,k,U,P,I,N,G,z,H,$,Z,K,Y,J,ie;return u=h=d=_=p=m=v=x=y=0,f=g=1,n.svg=!!(e.getCTM&&og(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[mt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[mt]!=="none"?c[mt]:"")),i.scale=i.rotate=i.translate="none"),b=mh(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),l=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Tu(e,G||l,!!G||n.originIsAbsolute,n.smooth!==!1,b)),E=n.xOrigin||0,S=n.yOrigin||0,b!==Bo&&(F=b[0],k=b[1],U=b[2],P=b[3],u=I=b[4],h=N=b[5],b.length===6?(f=Math.sqrt(F*F+k*k),g=Math.sqrt(P*P+U*U),_=F||k?vr(k,F)*Rs:0,v=U||P?vr(U,P)*Rs+_:0,v&&(g*=Math.abs(Math.cos(v*Lr))),n.svg&&(u-=E-(E*F+S*U),h-=S-(E*k+S*P))):(ie=b[6],Y=b[7],$=b[8],Z=b[9],K=b[10],J=b[11],u=b[12],h=b[13],d=b[14],L=vr(ie,K),p=L*Rs,L&&(M=Math.cos(-L),w=Math.sin(-L),G=I*M+$*w,z=N*M+Z*w,H=ie*M+K*w,$=I*-w+$*M,Z=N*-w+Z*M,K=ie*-w+K*M,J=Y*-w+J*M,I=G,N=z,ie=H),L=vr(-U,K),m=L*Rs,L&&(M=Math.cos(-L),w=Math.sin(-L),G=F*M-$*w,z=k*M-Z*w,H=U*M-K*w,J=P*w+J*M,F=G,k=z,U=H),L=vr(k,F),_=L*Rs,L&&(M=Math.cos(L),w=Math.sin(L),G=F*M+k*w,z=I*M+N*w,k=k*M-F*w,N=N*M-I*w,F=G,I=z),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Tt(Math.sqrt(F*F+k*k+U*U)),g=Tt(Math.sqrt(N*N+ie*ie)),L=vr(I,N),v=Math.abs(L)>2e-4?L*Rs:0,y=J?1/(J<0?-J:J):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!cg(ci(e,mt)),G&&e.setAttribute("transform",G))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+r,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+r,n.z=d+r,n.scaleX=Tt(f),n.scaleY=Tt(g),n.rotation=Tt(_)+a,n.rotationX=Tt(p)+a,n.rotationY=Tt(m)+a,n.skewX=v+a,n.skewY=x+a,n.transformPerspective=y+r,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[mn]=oc(l)),n.xOffset=n.yOffset=0,n.force3D=An.force3D,n.renderTransform=n.svg?yw:sg?lg:xw,n.uncache=0,n},oc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bl=function(e,t,n){var i=$t(t);return Tt(parseFloat(t)+parseFloat(hs(e,"x",n+"px",i)))+i},xw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,lg(e,t)},Ts="0deg",_o="0px",bs=") ",lg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,v=n.target,x=n.zOrigin,y="",E=m==="auto"&&e&&e!==1||m===!0;if(x&&(h!==Ts||u!==Ts)){var S=parseFloat(u)*Lr,b=Math.sin(S),L=Math.cos(S),M;S=parseFloat(h)*Lr,M=Math.cos(S),r=Bl(v,r,b*M*-x),a=Bl(v,a,-Math.sin(S)*-x),c=Bl(v,c,L*M*-x+x)}p!==_o&&(y+="perspective("+p+bs),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(E||r!==_o||a!==_o||c!==_o)&&(y+=c!==_o||E?"translate3d("+r+", "+a+", "+c+") ":"translate("+r+", "+a+bs),l!==Ts&&(y+="rotate("+l+bs),u!==Ts&&(y+="rotateY("+u+bs),h!==Ts&&(y+="rotateX("+h+bs),(d!==Ts||f!==Ts)&&(y+="skew("+d+", "+f+bs),(g!==1||_!==1)&&(y+="scale("+g+", "+_+bs),v.style[mt]=y||"translate(0, 0)"},yw=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,v=n.forceCSS,x=parseFloat(r),y=parseFloat(a),E,S,b,L,M;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Lr,l*=Lr,E=Math.cos(c)*h,S=Math.sin(c)*h,b=Math.sin(c-l)*-d,L=Math.cos(c-l)*d,l&&(u*=Lr,M=Math.tan(l-u),M=Math.sqrt(1+M*M),b*=M,L*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),E*=M,S*=M)),E=Tt(E),S=Tt(S),b=Tt(b),L=Tt(L)):(E=h,L=d,S=b=0),(x&&!~(r+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=hs(f,"x",r,"px"),y=hs(f,"y",a,"px")),(g||_||p||m)&&(x=Tt(x+g-(g*E+_*b)+p),y=Tt(y+_-(g*S+_*L)+m)),(i||s)&&(M=f.getBBox(),x=Tt(x+i/100*M.width),y=Tt(y+s/100*M.height)),M="matrix("+E+","+S+","+b+","+L+","+x+","+y+")",f.setAttribute("transform",M),v&&(f.style[mt]=M)},Mw=function(e,t,n,i,s){var r=360,a=Vt(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?Rs:1),l=c-i,u=i+l+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(l%=r,l!==l%(r/2)&&(l+=l<0?r:-r)),h==="cw"&&l<0?l=(l+r*Wf)%r-~~(l/r)*r:h==="ccw"&&l>0&&(l=(l-r*Wf)%r-~~(l/r)*r)),e._pt=d=new pn(e._pt,t,n,i,l,sw),d.e=u,d.u="deg",e._props.push(n),d},$f=function(e,t){for(var n in t)e[n]=t[n];return e},Ew=function(e,t,n){var i=$f({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,a,c,l,u,h,d,f,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),r[mt]=t,a=zo(n,1),qs(n,mt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[mt],r[mt]=t,a=zo(n,1),r[mt]=l);for(c in Bi)l=i[c],u=a[c],l!==u&&s.indexOf(c)<0&&(f=$t(l),g=$t(u),h=f!==g?hs(n,c,l,g):parseFloat(l),d=parseFloat(u),e._pt=new pn(e._pt,a,c,h,d-h,Mu),e._pt.u=g||0,e._props.push(c));$f(a,i)};fn("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",s="Left",r=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?o+a:"border"+a+o});rc[e>1?"border"+o:o]=function(a,c,l,u,h){var d,f;if(arguments.length<4)return d=r.map(function(g){return Li(a,g,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},r.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(c,f,h)}});var ug={name:"css",register:Su,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var r=this._props,a=e.style,c=n.vars.startAt,l,u,h,d,f,g,_,p,m,v,x,y,E,S,b,L;dh||Su(),this.styles=this.styles||ig(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Sn[_]&&qm(_,t,n,i,e,s)))){if(f=typeof u,g=rc[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Uo(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",cs.lastIndex=0,cs.test(l)||(p=$t(l),m=$t(u)),m?p!==m&&(l=hs(e,_,l,m)+m):p&&(u+=p),this.add(a,"setProperty",l,u,i,s,0,0,_),r.push(_),L.push(_,0,a[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,e,s):c[_],Vt(l)&&~l.indexOf("random(")&&(l=Uo(l)),$t(l+"")||l==="auto"||(l+=An.units[_]||$t(Li(e,_))||""),(l+"").charAt(1)==="="&&(l=Li(e,_))):l=Li(e,_),d=parseFloat(l),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),_ in oi&&(_==="autoAlpha"&&(d===1&&Li(e,"visibility")==="hidden"&&h&&(d=0),L.push("visibility",0,a.visibility),ns(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=oi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Bi,x){if(this.styles.save(_),y||(E=e._gsap,E.renderTransform&&!t.parseTransform||zo(e,t.parseTransform),S=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new pn(this._pt,a,mt,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new pn(this._pt,E,"scaleY",E.scaleY,(v?Cr(E.scaleY,v+h):h)-E.scaleY||0,Mu),this._pt.u=0,r.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(mn,0,a[mn]),u=_w(u),E.svg?Tu(e,u,0,S,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&ns(this,E,"zOrigin",E.zOrigin,m),ns(this,a,_,oc(l),oc(u)));continue}else if(_==="svgOrigin"){Tu(e,u,1,S,0,this);continue}else if(_ in ag){Mw(this,E,_,d,v?Cr(d,v+u):u);continue}else if(_==="smoothOrigin"){ns(this,E,"smooth",E.smooth,u);continue}else if(_==="force3D"){E[_]=u;continue}else if(_==="transform"){Ew(this,u,e);continue}}else _ in a||(_=Zr(_)||_);if(x||(h||h===0)&&(d||d===0)&&!iw.test(u)&&_ in a)p=(l+"").substr((d+"").length),h||(h=0),m=$t(u)||(_ in An.units?An.units[_]:p),p!==m&&(d=hs(e,_,l,m)),this._pt=new pn(this._pt,x?E:a,_,d,(v?Cr(d,v+h):h)-d,!x&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?ow:Mu),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=rw);else if(_ in a)gw.call(this,e,_,l,v?v+u:u);else if(_ in e)this.add(e,_,l||e[_],v?v+u:u,i,s);else if(_!=="parseTransform"){ih(_,u);continue}x||(_ in a?L.push(_,0,a[_]):L.push(_,1,l||e[_])),r.push(_)}}b&&Jm(this)},render:function(e,t){if(t.tween._time||!fh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Li,aliases:oi,getSetter:function(e,t,n){var i=oi[t];return i&&i.indexOf(",")<0&&(t=i),t in Bi&&t!==mn&&(e._gsap.x||Li(e,"x"))?n&&Vf===n?t==="scale"?uw:lw:(Vf=n||{})&&(t==="scale"?hw:dw):e.style&&!eh(e.style[t])?aw:~t.indexOf("-")?cw:uh(e,t)},core:{_removeProperty:qs,_getMatrix:mh}};gn.utils.checkPrefix=Zr;gn.core.getStyleSaver=ig;(function(o,e,t,n){var i=fn(o+","+e+","+t,function(s){Bi[s]=1});fn(e,function(s){An.units[s]="deg",ag[s]=1}),oi[i[13]]=o+","+e,fn(n,function(s){var r=s.split(":");oi[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){An.units[o]="px"});gn.registerPlugin(ug);var Dn=gn.registerPlugin(ug)||gn;Dn.core.Tween;function Zf(o,e){if(e===y_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===nu||e===Cp){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)r.push(c);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===nu)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class Sw extends io{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Rw(t)}),this.register(function(t){return new Ow(t)}),this.register(function(t){return new Bw(t)}),this.register(function(t){return new zw(t)}),this.register(function(t){return new Pw(t)}),this.register(function(t){return new Lw(t)}),this.register(function(t){return new Iw(t)}),this.register(function(t){return new Nw(t)}),this.register(function(t){return new Aw(t)}),this.register(function(t){return new Dw(t)}),this.register(function(t){return new Cw(t)}),this.register(function(t){return new Fw(t)}),this.register(function(t){return new Uw(t)}),this.register(function(t){return new bw(t)}),this.register(function(t){return new kw(t)}),this.register(function(t){return new Hw(t)})}load(e,t,n,i){const s=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=To.extractUrlBase(e);r=To.resolveURL(l,this.path)}else r=To.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new nm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,r,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===hg){try{r[qe.KHR_BINARY_GLTF]=new Gw(e)}catch(h){i&&i(h);return}s=JSON.parse(r[qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new tA(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:r[h]=new ww;break;case qe.KHR_DRACO_MESH_COMPRESSION:r[h]=new Vw(s,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:r[h]=new Ww;break;case qe.KHR_MESH_QUANTIZATION:r[h]=new Xw;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(r),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Tw(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bw{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Te(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Gt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new SE(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ME(u),l.distance=h;break;case"spot":l=new xE(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Zi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class ww{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return hn}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Gt),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,xt))}return Promise.all(i)}}class Aw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Rw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(a,a)}return Promise.all(s)}}class Cw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Pw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){const a=r.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Gt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,xt)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Lw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class Iw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],Gt),Promise.all(s)}}class Nw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Dw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],Gt),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,xt)),Promise.all(s)}}class Uw{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(s)}}class Fw{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class Ow{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Bw{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zw{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class kw{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(u*h);return r.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class Hw{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Un.TRIANGLES&&l.mode!==Un.TRIANGLE_STRIP&&l.mode!==Un.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],c={};for(const l in r)a.push(this.parser.getDependency("accessor",r[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new Oe,p=new O,m=new zi,v=new O(1,1,1),x=new Zp(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),x.setMatrixAt(y,_.compose(p,m,v));for(const y in c)if(y==="_COLOR_0"){const E=c[y];x.instanceColor=new au(E.array,E.itemSize,E.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);gt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const hg="glTF",vo=12,Jf={JSON:1313821514,BIN:5130562};class Gw{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,vo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-vo,s=new DataView(e,vo);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const c=s.getUint32(r,!0);if(r+=4,c===Jf.JSON){const l=new Uint8Array(e,vo+r,a);this.content=n.decode(l)}else if(c===Jf.BIN){const l=vo+r;this.body=e.slice(l,l+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Vw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},c={},l={};for(const u in r){const h=bu[u]||u.toLowerCase();a[h]=r[u]}for(const u in e.attributes){const h=bu[u]||u.toLowerCase();if(r[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Ir[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}h(f)},a,l,Gt,d)})})}}class Ww{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Xw{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class dg extends Xo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,p=-2*f+3*d,m=f-d,v=1-p,x=m-d+h;for(let y=0;y!==a;y++){const E=r[_+y+a],S=r[_+y+c]*u,b=r[g+y+a],L=r[g+y]*u;s[y]=v*E+x*S+p*b+m*L}return s}}const qw=new zi;class jw extends dg{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return qw.fromArray(s).normalize().toArray(s),s}}const Un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qf={9728:zt,9729:un,9984:tu,9985:Mp,9986:za,9987:Gs},ep={33071:On,33648:ja,10497:zr},zl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Yw={CUBICSPLINE:void 0,LINEAR:Hr,STEP:Po},kl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Kw(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Wu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fi})),o.DefaultMaterial}function ws(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $w(o,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):o.attributes.position;r.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):o.attributes.color;c.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(o.morphAttributes.position=u),i&&(o.morphAttributes.normal=h),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function Zw(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jw(o){let e;const t=o.extensions&&o.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hl(t.attributes):e=o.indices+":"+Hl(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)e+=":"+Hl(o.targets[n]);return e}function Hl(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function wu(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Qw(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const eA=new Oe;class tA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Tw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new _E(this.options.manager):this.textureLoader=new TE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new nm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return ws(s,a,i),Zi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,c=r.length;a<c;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const c=this.associations.get(r);c!=null&&this.associations.set(a,c);for(const[l,u]of r.children.entries())s(u,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(To.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=zl[i.type],a=Ir[i.componentType],c=i.normalized===!0,l=new a(i.count*r);return Promise.resolve(new an(l,r,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],c=zl[i.type],l=Ir[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(f&&f!==h){const m=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let x=t.cache.get(v);x||(_=new l(a,m*f,i.count*f/u),x=new ZM(_,f/u),t.cache.add(v,x)),p=new ku(x,c,d%f/u,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),p=new an(_,c,g);if(i.sparse!==void 0){const m=zl.SCALAR,v=Ir[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,E=new v(r[1],x,i.sparse.count*m),S=new l(r[2],y,i.sparse.count*c);a!==null&&(p=new an(p.array.slice(),p.itemSize,p.normalized));for(let b=0,L=E.length;b<L;b++){const M=E[b];if(p.setX(M,S[b*c]),c>=2&&p.setY(M,S[b*c+1]),c>=3&&p.setZ(M,S[b*c+2]),c>=4&&p.setW(M,S[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=r.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[r.sampler]||{};return u.magFilter=Qf[d.magFilter]||un,u.minFilter=Qf[d.minFilter]||Gs,u.wrapS=ep[d.wrapS]||zr,u.wrapT=ep[d.wrapT]||zr,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const r=i.images[e],a=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:r.mimeType});return c=a.createObjectURL(d),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Xt(_);p.needsUpdate=!0,d(p)}),t.load(To.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=r.mimeType||Qw(r.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(r);r=s.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Jp,ai.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new eo,ai.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Wu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},c=s.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){const h=i[qe.KHR_MATERIALS_UNLIT];r=h.getMaterialType(),l.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Gt),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,xt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Tn);const u=s.alphaMode||kl.OPAQUE;if(u===kl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===kl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==hn&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new He(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&r!==hn&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==hn){const h=s.emissiveFactor;a.emissive=new Te().setRGB(h[0],h[1],h[2],Gt)}return s.emissiveTexture!==void 0&&r!==hn&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,xt)),Promise.all(l).then(function(){const h=new r(a);return s.name&&(h.name=s.name),Zi(h,s),t.associations.set(h,{materials:e}),s.extensions&&ws(i,h,s),h})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return tp(c,a,t)})}const r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Jw(l),h=i[u];if(h)r.push(h.promise);else{let d;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=tp(new cn,l,t),i[u]={primitive:l,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let c=0,l=r.length;c<l;c++){const u=r[c].material===void 0?Kw(this.cache):this.getDependency("material",r[c].material);a.push(u)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],p=r[f];let m;const v=l[f];if(p.mode===Un.TRIANGLES||p.mode===Un.TRIANGLE_STRIP||p.mode===Un.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new QM(_,v):new wt(_,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Un.TRIANGLE_STRIP?m.geometry=Zf(m.geometry,Cp):p.mode===Un.TRIANGLE_FAN&&(m.geometry=Zf(m.geometry,nu));else if(p.mode===Un.LINES)m=new Ys(_,v);else if(p.mode===Un.LINE_STRIP)m=new Tc(_,v);else if(p.mode===Un.LINE_LOOP)m=new iE(_,v);else if(p.mode===Un.POINTS)m=new sE(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Zw(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Zi(m,s),p.extensions&&ws(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&ws(i,h[0],s),h[0];const d=new Ns;s.extensions&&ws(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(Vr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Mc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],c=[];for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h){a.push(h);const d=new Oe;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Hu(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(r.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(_))}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let v=0,x=d.length;v<x;v++){const y=d[v],E=f[v],S=g[v],b=_[v],L=p[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const M=n._createAnimationTracks(y,E,S,b,L);if(M)for(let w=0;w<M.length;w++)m.push(M[w])}return new hE(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)r.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,eA)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new $p:l.length>1?u=new Ns:l.length===1?u=l[0]:u=new gt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=r),Zi(u,s),s.extensions&&ws(n,u,s),s.matrix!==void 0){const h=new Oe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Ns;n.name&&(s.name=i.createUniqueName(n.name)),Zi(s,n),n.extensions&&ws(t,s,n);const r=n.nodes||[],a=[];for(let c=0,l=r.length;c<l;c++)a.push(i.getDependency("node",r[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof ai||d instanceof Xt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const r=[],a=e.name?e.name:e.uuid,c=[];Yi[s.path]===Yi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Yi[s.path]){case Yi.weights:l=Xr;break;case Yi.rotation:l=Ws;break;case Yi.position:case Yi.scale:l=qr;break;default:switch(n.itemSize){case 1:l=Xr;break;case 2:case 3:default:l=qr;break}break}const u=i.interpolation!==void 0?Yw[i.interpolation]:Hr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Yi[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=wu(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ws?jw:dg;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function nA(o,e,t){const n=e.attributes,i=new ki;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),a.normalized){const u=wu(Ir[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new O,c=new O;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=wu(Ir[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new di;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function tp(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(c){o.setAttribute(a,c)})}for(const r in n){const a=bu[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return Ze.workingColorSpace!==Gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Zi(o,e),nA(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?$w(o,e.targets,t):o})}console.log("script.js loaded");var ft=0;let Mn=0,_n=!1,Cc=!0,Nr=!1,At=null;var ko=document.getElementById("main-page"),ac=document.getElementById("cat-page"),cc=document.getElementById("pc-page"),lc=document.getElementById("music-page"),uc=document.getElementById("games-page"),hc=document.getElementById("projects-page"),dc=document.getElementById("website-page"),fc=document.getElementById("links-page");let In,ei;var kn=!0;const iA=document.querySelectorAll(".icon");let Ki=null,pe=null;const fg=document.querySelectorAll("#indicator p"),li=document.querySelectorAll("#pc-page, #cat-page, #projects-page, #website-page, #links-page, #music-page, #games-page");let np=null,ui=document.body.scrollHeight;const js=document.getElementById("all"),pc=document.querySelectorAll(".title, .subtitleBottom, .subtitleTop, .basicText"),Dr=".title, .subtitleTop, .subtitleBottom, .basicText, .link, .pcPart, .welcome, .see",Ho=document.querySelectorAll(".projectsMenuButton");let Ur,Au,Ru=!1,bt=!1,Ct=document.getElementById("bg"),gs=null,je=null;document.addEventListener("DOMContentLoaded",function(){var o=document.getElementById("image-track");o.dataset.percentage=-50;var e=function(i){o.dataset.mouseDownAt=i.clientX},t=function(){o.dataset.mouseDownAt="0",o.dataset.prevPercentage=o.dataset.percentage};const n=function(i){if(o.dataset.mouseDownAt==="0"||!kn||Ru)return;const s=parseFloat(o.dataset.mouseDownAt)-i.clientX,r=window.innerWidth,a=s/r*-100,c=parseFloat(o.dataset.prevPercentage)+a,l=Math.max(Math.min(c,-6.5),-93.5);o.dataset.percentage=l,o.style.transform=`translate(${l}%, -50%)`,np=Math.max(Math.min((c+50)*6.9,300),-300),fg.forEach(f=>{f.style.transform=`translate(${np}%, 0)`});const h=o.getElementsByClassName("image");for(var d of h)d.style.objectPosition=`${100+l}% center`};window.addEventListener("mousedown",function(i){e(i),sA(i)}),window.addEventListener("touchstart",function(i){e(i.touches[0])}),window.addEventListener("mouseup",function(i){t()}),window.addEventListener("touchend",function(i){t(i.touches[0])}),window.addEventListener("mousemove",function(i){n(i)}),window.addEventListener("touchmove",function(i){n(i.touches[0])})});function sA(o){const e=o.target,t=e.getBoundingClientRect(),n=document.getElementsByClassName("button")[0];if((e.parentNode.classList.contains("icon2")||e.classList.contains("image"))&&!bt){switch(!0){case(e.classList.contains("cPc")||e.classList.contains("imgSetup")):Ki=document.getElementById("iconPc").querySelector("i"),In=cc,je=0,pe=0;break;case(e.classList.contains("cCats")||e.classList.contains("imgCats")):Ki=document.getElementById("iconCats").querySelector("i"),In=ac,je=1,pe=1;break;case(e.classList.contains("cProjects")||e.classList.contains("imgProjects")):Ki=document.getElementById("iconProjects").querySelector("i"),In=hc,je=2,pe=2;break;case(e.classList.contains("cWebsite")||e.classList.contains("imgWebsite")):Ki=document.getElementById("iconWebsite").querySelector("i"),In=dc,je=3,pe=3;break;case(e.classList.contains("cLinks")||e.classList.contains("imgLinks")):Ki=document.getElementById("iconLinks").querySelector("i"),In=fc,je=4,pe=4;break;case(e.classList.contains("cMusic")||e.classList.contains("imgMusic")):Ki=document.getElementById("iconMusic").querySelector("i"),In=lc,je=5,pe=5;break;case(e.classList.contains("cGames")||e.classList.contains("imgGames")):Ki=document.getElementById("iconGames").querySelector("i"),In=uc,je=6,pe=6;break}e.classList.contains("image")&&(li.forEach(s=>{s.querySelectorAll("*").forEach(r=>{r.classList.add("invisible")})}),setTimeout(function(){In.querySelectorAll("*").forEach(s=>{s.classList.remove("invisible")}),ko.classList.add("invisible")},1e3)),Mn=Ki,(Cc&&!Nr||e.classList.contains("image"))&&Mn.classList.add("active")}if(e.classList.contains("image")&&!e.classList.contains("fullscreen")&&kn&&!bt){Ru=!0,bt=!0,window.scrollTo({top:0,behavior:"smooth"});var i=setInterval(function(){window.scrollY===0&&(clearInterval(i),ft=Ct,kn=!kn,Ct.classList.remove("displayNone"),Ct.classList.add("fullscreen"),Ct.style.setProperty("--start-x",t.left+"px"),n.classList.remove("slideUp"),n.classList.add("slideDown"),_n=!0,Ct.style.boxShadow="none",Ct.classList.remove("imageAnim"),Ct.classList.add("visible"),console.log("page: ",In),In.querySelectorAll(Dr).forEach(s=>{s.classList.add("visible")}),setTimeout(function(){Ho.forEach(s=>{s.classList.add("buttonVisible"),s.classList.remove("buttonInvisible")}),bt=!1},1200),window.scrollY===0?In.querySelectorAll(Dr).forEach(s=>{s.style.zIndex="15"}):setTimeout(function(){In.querySelectorAll(Dr).forEach(s=>{s.style.zIndex="15"})}))},128)}else Ru=!1;if(e.classList.contains("button")){window.scrollTo({top:0,behavior:"smooth"});var i=setInterval(function(){if(window.scrollY===0){li.forEach(c=>{c.style.height=`${ui}px`}),js.style.height=`${ui}px`,pc.forEach(c=>{c.classList.remove("visible")}),Ho.forEach(c=>{c.classList.remove("buttonVisible"),c.classList.add("buttonInvisible")}),Mn=0,bt=!1,_n=!1;let r;switch(!0){case pe===0:r="home";break;case pe===1:r="about";break;case pe===2:r="projects";break;case pe===3:r="portfolio";break;case pe===4:r="contact";break;case pe===5:r="music";break;case pe===6:r="games";break}je=pe,Ct.style.setProperty("--current-objectPos",getComputedStyle(Ct).objectPosition),Ct.style.setProperty("--target-objectPos",getComputedStyle(document.getElementById(r)).objectPosition),Ct.classList.add("reverseFullscreen"),Ct.classList.remove("fullscreen"),n.classList.remove("slideDown"),n.classList.add("slideUp"),setTimeout(function(){ft.classList.remove("reverseFullscreen"),ft=0,pe=null,kn=!kn,pc.forEach(c=>{c.style.zIndex="14"})},1500),ko.classList.remove("invisible"),li.forEach(c=>{c.querySelectorAll("*").forEach(l=>{l.classList.add("invisible")})}),document.querySelectorAll(".active").forEach(c=>{c.classList.remove("active")}),clearInterval(i)}},128)}}function ip(){At=document.getElementsByClassName("setup")[0],console.log("home: ",pe),pe!==null&&(gs=pe),pe!=0&&!bt&&$s(-6.5,"home",At,cc),pe===0&&_n&&!bt&&Zs(At,cc,"home"),pe=0,je=pe}function sp(){At=document.getElementsByClassName("cats")[0],pe!==null&&(gs=pe),pe!=1&&!bt&&$s(-21,"about",At,ac),pe===1&&_n&&!bt&&Zs(At,ac,"about"),pe=1,je=pe}function rp(){At=document.getElementsByClassName("projects")[0],pe!==null&&(gs=pe),pe===2&&_n&&!bt&&Zs(At,hc,"projects"),pe!=2&&!bt&&$s(-35.5,"projects",At,hc),pe=2,je=pe}function op(){At=document.getElementsByClassName("portfolio")[0],pe!==null&&(gs=pe),pe===3&&_n&&!bt&&Zs(At,dc,"portfolio"),pe!=3&&!bt&&$s(-50,"portfolio",At,dc),pe=3,je=pe}function ap(){At=document.getElementsByClassName("links")[0],pe!==null&&(gs=pe),pe===4&&_n&&!bt&&Zs(At,fc,"contact"),pe!=4&&!bt&&$s(-64.5,"contact",At,fc),pe=4,je=pe}function cp(){At=document.getElementsByClassName("music")[0],pe!==null&&(gs=pe),pe===5&&_n&&!bt&&Zs(At,lc,"music"),pe!=5&&!bt&&$s(-79,"music",At,lc),pe=5,je=pe}function lp(){At=document.getElementsByClassName("games")[0],pe!==null&&(gs=pe),pe===6&&_n&&!bt&&Zs(At,uc,"games"),pe!=6&&!bt&&$s(-93.5,"games",At,uc),pe=6,je=pe}iA.forEach(o=>{o.addEventListener("click",function(){Cc&&!Nr&&this.classList.add("active"),Mn=this.querySelector("i")})});function $s(o,e,t,n){if(console.log("nav"),Nr)return;setTimeout(function(){console.log("clickedElement: ",t)},1),Cc=!0,Nr=!0,kn=!1;const i=document.getElementById("image-track");let s=parseFloat(i.dataset.percentage);const r=document.getElementsByClassName("button")[0],a=o>s?1.35:-1.35;let c=s;if(document.querySelectorAll(".active").forEach(f=>{f.classList.remove("active")}),t.classList.contains("active")||t.classList.add("active"),bt=!0,setTimeout(function(){bt=!1},1200),window.scrollY!==0){window.scrollTo({top:0,behavior:"smooth"});var u=setInterval(function(){window.scrollY===0&&(clearInterval(u),h())},128)}else h();function h(){ft===0?d():(setTimeout(d,1500),setTimeout(function(){je=gs,console.log("MAIN INDEX: ",je)},1e3),ft.style.setProperty("--current-objectPos",getComputedStyle(ft).objectPosition),ft.style.setProperty("--target-objectPos",getComputedStyle(document.getElementById(e)).objectPosition),ft.classList.add("reverseFullscreen"),ft.classList.remove("fullscreen"),r.classList.remove("slideDown"),r.classList.add("slideUp"),t.classList.add("active"),_n=!1,setTimeout(function(){ft.classList.remove("reverseFullscreen"),ft=0},1500),ko.classList.add("invisible"),li.forEach(f=>{f.querySelectorAll("*").forEach(g=>{g.classList.add("invisible")})})),pc.forEach(f=>{f.classList.remove("visible")}),Ho.forEach(f=>{f.classList.remove("buttonVisible"),f.classList.add("buttonInvisible")})}function d(){pc.forEach(g=>{g.style.zIndex="14"});const f=setInterval(()=>{c+=a,i.dataset.percentage=c,i.style.transform=`translate(${c}%, -50%)`,fg.forEach(p=>{p.style.transform=`translate(${((c- -6.5)/(-93.5- -6.5)*600+-300)*-1}%, 0)`});const g=i.getElementsByClassName("image");for(var _ of g)_.style.objectPosition=`${100+c}% center`;if(a>0&&c>=o||a<0&&c<=o){const p=document.getElementById(e);Au=p,Ur=p.getBoundingClientRect(),console.log("correct rect2: ",Ur.left),Ct.classList.remove("displayNone"),Ct.style.boxShadow="none",Ct.classList.remove("imageAnim"),Ct.classList.add("visible"),ft=Ct,Ct.classList.add("fullscreen"),Ct.style.setProperty("--start-x",Ur.left+"px"),r.classList.remove("slideUp"),r.classList.add("slideDown"),_n=!0,Nr=!1,setTimeout(function(){console.log("NOW"),n.querySelectorAll("*").forEach(m=>{m.classList.remove("invisible")}),ko.classList.add("invisible"),n.style.height="auto",li.forEach(m=>{m.style.height=`${n.clientHeight}px`}),js.style.height=`${n.clientHeight}px`,n.querySelectorAll(Dr).forEach(m=>{m.classList.add("visible"),m.style.zIndex="15"}),Ho.forEach(m=>{m.classList.add("buttonVisible"),m.classList.remove("buttonInvisible")}),setTimeout(()=>{pg()},1e3)},1e3),clearInterval(f)}})}i.dataset.prevPercentage=o}window.addEventListener("resize",function(){Au!=null&&(Ur=Au.getBoundingClientRect(),Ct.style.setProperty("--start-x",Ur.left+"px"),console.log("rect2: ",Ur.left))});function Zs(o,e,t){console.log("menu");const n=document.getElementsByClassName("button")[0];if(li.forEach(r=>{r.style.height=`${ui}px`}),js.style.height=`${ui}px`,Cc=!1,_n=!1,window.scrollY!==0){window.scrollTo({top:0,behavior:"smooth"});var i=setInterval(function(){window.scrollY===0&&(clearInterval(i),s())},128)}else s();function s(){e.querySelectorAll(Dr).forEach(r=>{r.classList.remove("visible")}),Ho.forEach(r=>{r.classList.remove("buttonVisible"),r.classList.add("buttonInvisible")}),li.forEach(r=>{r.querySelectorAll("*").forEach(a=>{a.classList.add("invisible")})}),ft&&(ft.style.setProperty("--current-objectPos",getComputedStyle(ft).objectPosition),ft.style.setProperty("--target-objectPos",getComputedStyle(document.getElementById(t)).objectPosition),ft.classList.add("reverseFullscreen"),ft.classList.remove("fullscreen")),o&&o.classList.remove("active"),n.classList.remove("slideDown"),n.classList.add("slideUp"),ko.classList.remove("invisible"),setTimeout(function(){console.log("NOW"),ft&&(ft.classList.remove("reverseFullscreen"),ft=0),Mn=0,kn=!0,pe=null,mg(),e.querySelectorAll(Dr).forEach(r=>{r.style.zIndex="14"})},1500)}}const rA=new IntersectionObserver(o=>{o.forEach(e=>{e.isIntersecting&&e.target.classList.contains("imageAppear")?e.target.classList.add("imageAnim"):(e.target.classList.remove("imageAppear"),e.target.classList.add("visible"))})}),oA=document.querySelectorAll(".image");oA.forEach(o=>rA.observe(o));const aA=new IntersectionObserver(o=>{o.forEach(e=>{e.isIntersecting&&!e.target.classList.contains("invisible")&&e.target.classList.add("show")})}),cA=document.querySelectorAll(".hidden");function pg(){cA.forEach(o=>aA.observe(o))}pg();li.forEach(o=>{o.querySelectorAll("*").forEach(e=>{e.classList.add("invisible")}),o.style.height=`${ui}px`});js.style.height=`${ui}px`;window.addEventListener("resize",function(){if(window.innerWidth!==window.outerWidth||window.innerHeight!==window.outerHeight){if(Mn!==0)switch(!0){case Mn.classList.contains("setup"):ei=cc;break;case Mn.classList.contains("cats"):ei=ac;break;case Mn.classList.contains("projects"):ei=hc;break;case Mn.classList.contains("portfolio"):ei=dc;break;case Mn.classList.contains("links"):ei=fc;break;case Mn.classList.contains("music"):ei=lc;break;case Mn.classList.contains("games"):ei=uc;break}_n&&(ei.style.height="auto",li.forEach(o=>{o.style.height=`${ei.clientHeight}px`}),js.style.height=`${ei.clientHeight}px`,console.log("page")),_n||mg(),console.log("scrollHeight: ",ui)}});function mg(){js.style.height="auto",ui=document.body.scrollHeight,js.style.height=`${ui}px`,li.forEach(o=>{o.style.height=`${ui}px`}),console.log("websitePage")}document.addEventListener("DOMContentLoaded",function(){document.getElementById("iconPc").addEventListener("click",function(){ip()}),document.getElementById("pcContainer").addEventListener("click",function(){ip()}),document.getElementById("iconCats").addEventListener("click",function(){sp()}),document.getElementById("catContainer").addEventListener("click",function(){sp()}),document.getElementById("iconProjects").addEventListener("click",function(){rp()}),document.getElementById("projectsContainer").addEventListener("click",function(){rp()}),document.getElementById("iconWebsite").addEventListener("click",function(){op()}),document.getElementById("websiteContainer").addEventListener("click",function(){op()}),document.getElementById("iconLinks").addEventListener("click",function(){ap()}),document.getElementById("linksContainer2").addEventListener("click",function(){ap()}),document.getElementById("iconMusic").addEventListener("click",function(){cp()}),document.getElementById("musicContainer").addEventListener("click",function(){cp()}),document.getElementById("iconGames").addEventListener("click",function(){lp()}),document.getElementById("gamesContainer").addEventListener("click",function(){lp()}),document.getElementById("button1").addEventListener("click",function(){scrollButton(this)}),document.getElementById("button2").addEventListener("click",function(){scrollButton(this)}),document.getElementById("button3").addEventListener("click",function(){scrollButton(this)})});const Gl=[new URL("/assets/A-CDky6Qjj.glb",import.meta.url),new URL("/assets/R-Dov7rH0u.glb",import.meta.url),new URL("/assets/T--_nRg-uC.glb",import.meta.url),new URL("/assets/U-ncIavpcL.glb",import.meta.url),new URL("/assets/E-CWwchXUd.glb",import.meta.url)],gh=new tm;gh.onProgress=function(o,e,t){document.getElementById("progressBarContainer").querySelector("label").innerText=`[${Math.round(e/t*100)}%]`};gh.onLoad=function(){document.getElementById("progressBarContainer").style.display="none"};const mc=new hn({color:16777215}),_h=new hn({color:0}),gc=new Sc,En=new Wt(75,window.innerWidth/window.innerHeight,.1,1e3);let $o=new fi;$o.setSize(window.innerWidth,window.innerHeight);const gg=[],_g=[];let Vl=!1;const vg=(o,e)=>{const t=o.geometry,n=new Vu(t),i=new Ys(n,mc);return i.position.copy(o.position),i.scale.copy(o.scale),i.rotation.copy(o.rotation),i.scale.multiplyScalar(1+e),i};for(let o=0;o<700;o++){const[e,t,n,i,s,r]=Array(6).fill().map(()=>Vr.randFloatSpread(300)),[a,c,l]=Array(6).fill().map(()=>Vr.randFloatSpread(400)),[u,h,d]=Array(3).fill().map(()=>Math.random()*360),f=Math.random()*(4-.3)+.3,g=new Io(.2,24,24),_=new wt(g,mc),p=new Io(.1,24,24),m=new wt(p,mc),v=new ps(2.03,2.03,2.03),x=new wt(v,_h);x.rotation.set(u,h,d),x.scale.set(f,f,f),x.position.set(i,s,r),_.position.set(e,t,n),m.position.set(a,c,l);const y=vg(x,.03);gc.add(y),gc.add(_,m,x);const E=Math.random()*.005;gg.push({boxMesh:x,rotationSpeed:E}),_g.push({linesMesh:y,rotationSpeed:E})}const lA=new Sw(gh),$i=[];function Cu(o){if(o>=Gl.length)return;const e=Gl[o];lA.load(e.href,function(t){const n=t.scene.children[0];n.rotateX(Math.PI/2),n.scale.set(2,2,2),$i.push(t.scene),gc.add(t.scene);const i=new Vu(n.geometry),s=new Ys(i,mc);s.scale.set(1.03,1.03,1.03),n.add(s),$i.length===Gl.length&&($i[0].position.set(-1.7,-100,-153),$i[1].position.set(-.75,-100,-153),$i[2].position.set(0,-100,-153),$i[3].position.set(.75,-100,-153),$i[4].position.set(1.7,-100,-153)),Cu(o+1)},void 0,function(t){console.error(t),Cu(o+1)})}Cu(0);function uA(o){$i.forEach(e=>{const t=new O(e.position.x,e.position.y,e.position.z);t.project(En);const n=(t.x+1)/2*window.innerWidth,i=(-t.y+1)/2*window.innerHeight,s=(o.clientX-n)/n,r=(o.clientY-i)/i,a=s.toFixed(2)*Math.PI/2,c=r.toFixed(2)*Math.PI/2;e.rotation.y=Math.max(Math.min(a,Math.PI/4),Math.PI/-4),e.rotation.x=Math.max(Math.min(c,Math.PI/4),Math.PI/-4)})}document.addEventListener("mousemove",uA);En.rotateX(Vr.degToRad(90));let Pc=new fi({canvas:document.getElementById("home")});Pc.setSize(window.innerWidth,window.innerHeight,!1);let Lc=new fi({canvas:document.getElementById("about")});Lc.setSize(window.innerWidth,window.innerHeight,!1);let Ic=new fi({canvas:document.getElementById("projects")});Ic.setSize(window.innerWidth,window.innerHeight,!1);const ds=new Sc,up=window.innerWidth/window.innerHeight,Oa=30,Ui=new Mc(Oa*up/-2,Oa*up/2,Oa/2,Oa/-2,.1,1e3);Ui.position.set(100,100,100);Ui.lookAt(0,0,0);const hp=100;let Wl=-45;const hA=new im(100,100,16777215,16777215),dA=new Ys(hA.geometry,new eo({color:5592405}));ds.add(dA);const fA=new im(100,50,16777215,16777215),pA=new Ys(fA.geometry,new eo({color:16777215}));ds.add(pA);const vh=100,xh=100,Ii=1,Nc=1,mA=(xh-1)*Ii/2,gA=(vh-1)*Nc/2,_A=new hn({color:0,side:Tn}),yh=new Zp(new Wo(Ii,Nc),_A,vh*xh),br=new Oe;let dp=0;for(let o=0;o<vh;o++)for(let e=0;e<xh;e++){br.identity();const t=e*Ii-mA,n=o*Nc-gA;br.setPosition(t,-.01,n),br.multiply(new Oe().makeRotationX(-Math.PI/2)),yh.setMatrixAt(dp,br),dp++}ds.add(yh);const _c=[],xg=1e3,yg=[],Mg=[];let Ba=0;for(let o=0;o<xg;o++){const e=new ps(1,1,1),t=new wt(e,new hn({color:16777215}));t.visible=!1,yg.push(t),ds.add(t);const n=new Vu(e),i=new Ys(n,_h);i.scale.multiplyScalar(1.03),i.visible=!1,Mg.push(i),ds.add(i)}function vA(o,e,t,n){const i=yg[Ba],s=Mg[Ba];i.position.set(o,e,t),i.visible=!0,i.scale.set(0,0,0),i.rotation.set(0,0,0);const r="circ.inOut";Dn.to(i.scale,{duration:1,x:Ii,y:Ii,z:Ii,ease:r,onUpdate:()=>{i.rotation.y+=.01}}),Dn.to(i.rotation,{duration:1,y:Math.PI*2,ease:r}),i.position.y=i.position.y+1,setTimeout(function(){Dn.to(i.position,{duration:.5,y:e,ease:"bounce.out"})},1e3),s.position.set(o,e,t),s.visible=!0,s.scale.set(0,0,0),s.rotation.set(0,0,0),Dn.to(s.scale,{duration:1,x:Ii,y:Ii,z:Ii,ease:r,onUpdate:()=>{s.rotation.y+=.01}}),Dn.to(s.rotation,{duration:1,y:Math.PI*2,ease:r}),s.position.y=s.position.y+1,setTimeout(function(){Dn.to(s.position,{duration:.5,y:e,ease:"bounce.out"})},1e3),setTimeout(()=>{Dn.to(i.scale,{duration:1,x:0,y:0,z:0,ease:r,onUpdate:()=>{i.rotation.y+=.01}}),Dn.to(i.rotation,{duration:1,y:Math.PI*4,ease:r}),Dn.to(s.scale,{duration:1,x:0,y:0,z:0,ease:r,onUpdate:()=>{s.rotation.y+=.01}}),Dn.to(s.rotation,{duration:1,y:Math.PI*4,ease:r}),setTimeout(()=>{i.visible=!1,s.visible=!1;const a=_c.indexOf(n);a>-1&&_c.splice(a,1)},1e3)},2e3),Ba=(Ba+1)%xg}const Xl=new He,fp=new Ku;function xA(o){Xl.x=o.clientX/window.innerWidth*2-1,Xl.y=-(o.clientY/window.innerHeight)*2+1,fp.setFromCamera(Xl,Ui);const e=fp.intersectObjects([yh]);if(e.length>0){const t=e[0],n=t.instanceId;if(!_c.includes(n)){_c.push(n);const i=new O,s=new zi,r=new O;t.object.getMatrixAt(n,br),br.decompose(i,s,r),vA(i.x,i.y+Nc/2,i.z,n)}}}let Dc=new fi({canvas:document.getElementById("portfolio")});Dc.setSize(window.innerWidth,window.innerHeight,!1);const Et=new Sc,St=new Wt(75,50/34,.1,1e3);St.aspect=window.innerWidth/window.innerHeight;St.updateProjectionMatrix();St.position.z=20;const Zo=new nb({gravity:new T(0,0,0)});function Uc(o,e,t){const n=new le({type:le.STATIC,shape:new BS});if(n.quaternion.setFromEuler(e.x,e.y,e.z),n.position.copy(o),Zo.addBody(n),t){const i=new wt(new Wo(10,10,10,10),new hn({color:16777215,wireframe:!0,side:Tn}));i.position.copy(n.position),i.quaternion.copy(n.quaternion),Et.add(i)}}Uc(new O(0,50,-25),new fs(0,0,0),!1);Uc(new O(25,50,0),new fs(0,-Math.PI/2,0),!1);Uc(new O(-25,50,0),new fs(0,Math.PI/2,0),!1);Uc(new O(0,-110,0),new fs(-Math.PI/2,0,0),!0);const Pu=new Yo,yA=new jo(Pu,Pu,{friction:.3,restitution:.7});Zo.addContactMaterial(yA);const is=[],ri=[],Go=[],Wa=[],Mo=[],Lu=[],MA=(o,e)=>{const t=o.geometry,n=new ls({vertexShader:`
            void main() {
                vec3 newPosition = position + normal * ${e};
                gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1);
            }
        `,fragmentShader:`
            void main() {
                gl_FragColor = vec4(1, 1, 1, 1);
            }
        `,side:on}),i=new wt(t,n);return Et.add(i),i};for(let o=0;o<40;o++){const e=Math.random()*2+1,t={x:Math.random()*360,y:Math.random()*360,z:Math.random()*360},n=new ps(e*2,e*2,e*2),i=new wt(n,_h);i.position.set(Math.random()*50-25,Math.random()*-60-20,Math.random()*0),i.rotation.set(t.x,t.y,t.z);const s=vg(i,.03);Et.add(s),Et.add(i),Wa.push(i),Lu.push(s);const r={x:t.x*(Math.PI/180),y:t.y*(Math.PI/180),z:t.z*(Math.PI/180)},a=new le({type:le.STATIC,shape:new bc(new T(e,e,e))});a.position.copy(i.position),a.quaternion.setFromEuler(r.x,r.y,r.z),Zo.addBody(a),Mo.push(a)}const pp=.5,xr=5,yr=7;for(var ql=0;ql<yr;ql++)for(var jl=0;jl<yr;jl++)for(var Yl=0;Yl<yr;Yl++){const o=new Io(pp,32,32),e=new hn({color:0}),t=new wt(o,e);t.position.set(ql*xr-(yr-1)*xr/2,jl*xr-(yr-1)*xr/2,Yl*xr-(yr-1)*xr/2);const n=MA(t,.05);Go.push(n),Et.add(t),is.push(t);const i=new le({mass:1,material:Pu,shape:new OS(pp)});i.position.copy(t.position),Zo.addBody(i),ri.push(i)}let Fc=new fi({canvas:document.getElementById("contact")});Fc.setSize(window.innerWidth,window.innerHeight,!1);const Is=new Sc,Fr=new Wt(75,window.innerWidth/window.innerHeight,.1,1e3);Fr.position.z=70;const vc=[],EA=150;for(let o=0;o<EA;o++){const e=new Gu(.2,32),t=Math.random()*(1-.1)+.1,n=new hn({color:new Te(t,t,t),side:Tn}),i=new wt(e,n);i.position.x=Math.random()*180-90,i.position.y=Math.random()*180-90,i.position.z=Math.random()*40-20,Is.add(i),vc.push(i)}const Kl=new He,mp=new Ku,Iu=new O,SA=new Pi(new O(0,0,1),0),gp=20;function TA(o){Kl.x=o.clientX/window.innerWidth*2-1,Kl.y=-(o.clientY/window.innerHeight)*2+1,mp.setFromCamera(Kl,Fr),mp.ray.intersectPlane(SA,Iu)}function Eg(){const o=Math.floor(Math.random()*4);let e,t,n;switch(o){case 0:t=100,e=Math.random()*180-90;break;case 1:t=Math.random()*180-90,e=100;break;case 2:t=-100,e=Math.random()*180-90;break;case 3:t=Math.random()*180-90,e=-100;break}return n=Math.random()*40-20,{x:e,y:t,z:n}}function Sg(o){const e=Eg(),n=o.position.distanceTo(new O(e.x,e.y,e.z))/(Math.random()*2);Dn.to(o.position,{x:e.x,y:e.y,z:e.z,duration:n,ease:"power1.inOut",onComplete:()=>setTimeout(()=>bA(o),500)})}function bA(o){console.log("relocated");const e=Eg();o.position.set(e.x,e.y,e.z),Sg(o)}vc.forEach(o=>Sg(o));let Oc=new fi({canvas:document.getElementById("music")});Oc.setSize(window.innerWidth,window.innerHeight,!1);let Bc=new fi({canvas:document.getElementById("games")});Bc.setSize(window.innerWidth,window.innerHeight,!1);const Js=document.getElementById("image-track");document.body.appendChild($o.domElement);Js.appendChild(Pc.domElement);Js.appendChild(Lc.domElement);Js.appendChild(Ic.domElement);Js.appendChild(Dc.domElement);Js.appendChild(Fc.domElement);Js.appendChild(Oc.domElement);Js.appendChild(Bc.domElement);let Ri=new fi({canvas:document.getElementById("bg")});Ri.setSize(window.innerWidth,window.innerHeight,!1);window.addEventListener("scroll",function(o){var e=document.documentElement.scrollHeight,t=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientHeight;const i=Math.min(Math.max(t/(e-n)*100,0),100);kn?i>=0&&i<=30?En.rotation.x=Vr.degToRad(90*(1-i/30)):i>30&&i<=60?(En.rotation.x=0,En.position.y=-100*(i/30-1)):i>60&&i<=90?(En.position.y=-100,En.position.z=-150*(i/30-2)):(En.position.z=-150,En.position.y=-100,En.rotation.x=0):(St.position.y=-i,Wl=Vr.degToRad(-45+i*-3.6),Ui.position.set(hp*Math.cos(Wl),Ui.position.y,hp*Math.sin(Wl)),Ui.lookAt(0,0,0))});const $l=new He,_p=new Ku,Xa=new O,wA=new Pi(new O(0,0,1),0);function AA(o){$l.x=o.clientX/window.innerWidth*2-1,$l.y=-(o.clientY/window.innerHeight)*2+1,_p.setFromCamera($l,St),_p.ray.intersectPlane(wA,Xa)}document.addEventListener("mousemove",function(o){kn||(je===2&&xA(o),je===3&&AA(o),je===4&&TA(o))});function Tg(){if(requestAnimationFrame(Tg),!kn){Zo.fixedStep();for(let e=0;e<is.length;e++){const t=ri[e],n=new T(Xa.x-t.position.x,Xa.y-t.position.y,Xa.z-t.position.z),i=n.length();if(i>.1){const s=100/(1+i);n.normalize(),n.scale(s,n),t.applyForce(n,t.position)}}for(let e=0;e<is.length;e++)is[e].position.copy(ri[e].position),is[e].quaternion.copy(ri[e].quaternion),Go[e].position.copy(ri[e].position),Go[e].quaternion.copy(ri[e].quaternion);for(let e=0;e<Wa.length;e++)Wa[e].position.copy(Mo[e].position),Wa[e].quaternion.copy(Mo[e].quaternion),Lu[e].position.copy(Mo[e].position),Lu[e].quaternion.copy(Mo[e].quaternion);vc.forEach(e=>{e.lookAt(Fr.position)});const o=[];Is.traverse(e=>{e.isLine&&o.push(e)}),o.forEach(e=>Is.remove(e)),vc.forEach(e=>{const t=Iu.distanceTo(e.position);if(t<=gp){const n=1-t/gp,i=new Te(1,1,1).lerp(new Te(1,1,1),n),s=new cn().setFromPoints([Iu,e.position]),r=new eo({color:i,transparent:!0,opacity:n}),a=new Tc(s,r);Is.add(a)}})}if(kn&&!Nr&&(gg.forEach(o=>{const{boxMesh:e,rotationSpeed:t}=o;e.rotation.x+=t,e.rotation.y+=t,e.rotation.z+=t}),_g.forEach(o=>{const{linesMesh:e,rotationSpeed:t}=o;e.rotation.x+=t,e.rotation.y+=t,e.rotation.z+=t}),$o.render(gc,En)),ft!==0&&ft.classList.contains("reverseFullscreen")&&(Vl=!0,setTimeout(function(){if(Vl)switch(Vl=!1,console.log("mainIndex (main): ",je),!0){case je===0:Pc.render(Et,St);break;case je===1:Lc.render(Et,St);break;case je===2:Ic.render(ds,Ui);break;case je===3:Dc.render(Et,St);break;case je===4:Fc.render(Is,Fr);break;case je===5:Oc.render(Et,St);break;case je===6:Bc.render(Et,St);break}},1400)),Ri!==null)switch(!0){case je===0:Ri.render(Et,St);break;case je===1:Ri.render(Et,St);break;case je===2:Ri.render(ds,Ui);break;case je===3:Ri.render(Et,St);break;case je===4:Ri.render(Is,Fr);break;case je===5:Ri.render(Et,St);break;case je===6:Ri.render(Et,St);break}}for(let o=0;o<is.length;o++)is[o].position.copy(ri[o].position),is[o].quaternion.copy(ri[o].quaternion),Go[o].position.copy(ri[o].position),Go[o].quaternion.copy(ri[o].quaternion);$o.render(Et,St);Pc.render(Et,St);Lc.render(Et,St);Ic.render(ds,Ui);Dc.render(Et,St);Fc.render(Is,Fr);Oc.render(Et,St);Bc.render(Et,St);Tg();window.addEventListener("resize",function(){En.aspect=window.innerWidth/window.innerHeight,En.updateProjectionMatrix(),$o.setSize(window.innerWidth,window.innerHeight)});