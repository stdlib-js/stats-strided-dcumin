"use strict";var c=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var d=c(function(F,x){
var m=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/math-base-assert-is-negative-zero/dist');function E(i,r,t,f,a,s,q){var e,o,u,n,v;if(i<=0)return a;if(o=f,u=q,e=r[o],a[u]=e,u+=s,v=1,m(e)===!1)for(v;v<i;v++){if(o+=t,n=r[o],m(n)){e=n;break}(n<e||n===e&&k(n))&&(e=n),a[u]=e,u+=s}if(m(e))for(v;v<i;v++)a[u]=e,u+=s;return a}x.exports=E
});var y=c(function(G,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),O=d();function Z(i,r,t,f,a){var s=j(i,t),q=j(i,a);return O(i,r,t,s,f,a,q)}l.exports=Z
});var b=c(function(H,_){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),w=d();h(R,"ndarray",w);_.exports=R
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=b(),p,g=A(z(__dirname,"./native.js"));B(g)?p=C:p=g;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
