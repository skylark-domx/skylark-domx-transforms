/**
 * skylark-domx-transforms - The skylark transform library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx","skylark-domx-browser","skylark-domx-data","skylark-domx-styler"],function(a,n,t,r,i){var o=t.normalizeCssProperty("transform");function e(a,n){return a>0&&a>-n?n:a<0&&a<n?-n:0}function s(a,n){var t,r,e,s,d,f=(t=n.radian,r=n.y,e=n.x,s=Math.cos(t),d=Math.sin(t),{M11:s*r,M12:-d*e,M21:d*r,M22:s*e});i.css(a,o,"matrix("+f.M11.toFixed(16)+","+f.M21.toFixed(16)+","+f.M12.toFixed(16)+","+f.M22.toFixed(16)+", 0, 0)")}function d(a,n){if(!n)return(n=r.data(a,"transform")||{}).radian=n.radian||0,n.x=n.x||1,n.y=n.y||1,n.zoom=n.zoom||1,n;r.data(a,"transform",n)}var f={vertical:function(a){a.radian=Math.PI-a.radian,a.y*=-1},horizontal:function(a){a.radian=Math.PI-a.radian,a.x*=-1},rotate:function(a,n){a.radian=n*Math.PI/180},left:function(a){a.radian-=Math.PI/2},right:function(a){a.radian+=Math.PI/2},scale:function(a,n){var t=e(a.y,n),r=e(a.x,n);t&&r&&(a.y+=t,a.x+=r)},zoomin:function(a){f.scale(a,.1)},zoomout:function(a){f.scale(a,-.1)}};function c(){return c}return["vertical","horizontal","rotate","left","right","scale","zoom","zoomin","zoomout"].forEach(function(a){var t;c[a]=(t=f[a],function(){var a=n.makeArray(arguments),r=a.shift(),i=d(r);a.unshift(i),t.apply(this,a),s(r,i),d(r,i)})}),n.mixin(c,{reset:function(a){var n={x:1,y:1,radian:0};s(a,n),d(a,n)},matrix:function(a){var n="";do{var t=i.css(a,"transform");t&&"none"!==t&&(n=t+" "+n)}while(a=a.parentNode);return window.DOMMatrix?new DOMMatrix(n):window.WebKitCSSMatrix?new WebKitCSSMatrix(n):window.CSSMatrix?new CSSMatrix(n):void 0}}),a.attach("domx.transforms",c)});
//# sourceMappingURL=sourcemaps/transforms.js.map
