webpackJsonp([8,13],{19:function(t,e,i){t.exports={default:i(33),__esModule:!0}},33:function(t,e,i){i(43),i(38),t.exports=i(11).Array.from},35:function(t,e,i){"use strict";var n=i(22),a=i(36);t.exports=function(t,e,i){e in t?n.f(t,e,a(0,i)):t[e]=i}},38:function(t,e,i){"use strict";var n=i(29),a=i(21),s=i(37),r=i(59),o=i(57),c=i(51),u=i(35),f=i(52);a(a.S+a.F*!i(60)(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,a,h,l=s(t),d="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,x=void 0!==y,m=0,p=f(l);if(x&&(y=n(y,v>2?arguments[2]:void 0,2)),void 0==p||d==Array&&o(p))for(e=c(l.length),i=new d(e);e>m;m++)u(i,m,x?y(l[m],m):l[m]);else for(h=p.call(l),i=new d;!(a=h.next()).done;m++)u(i,m,x?r(h,y,[a.value,m],!0):a.value);return i.length=m,i}})},281:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(106),s=n(a),r=i(19),o=n(r),c=i(31),u=n(c),f=i(4),h=n(f),l=i(5),d=n(l),v={width:0,height:0},y=[{avatar:"https://cdn.v2ex.com/gravatar/9606f9cc7e486b4cc5c118b9c0ad1d48/?d=https://cdn.v2ex.com/gravatar/9606f9cc7e486b4cc5c118b9c0ad1d48",name:"NightCat"}],x=function(){function t(e,i){(0,h.default)(this,t),(0,u.default)(this,v,i),this.canvas=e,this.cxt=this.canvas.getContext("2d"),this.isAnimate=!0,this.infos=[],this.init()}return(0,d.default)(t,[{key:"init",value:function(){this.setSize(),this.getFriends(),this.start()}},{key:"destory",value:function(){this.cxt.clearRect(0,0,this.width,this.height),this.stop()}},{key:"bindEvent",value:function(){this.canvas.addEventListener("mousemove",this.getMousePos.bind(this))}},{key:"getFriends",value:function(){this.infos=(0,o.default)(y,function(t){return(0,s.default)({x:100,vx:5,vy:3,y:100,r:10,color:"#000"},t)})}},{key:"start",value:function(){var t=this;this.isAnimate=!0;var e=function e(){return!!t.isAnimate&&(t.render(),t.update(),void requestAnimationFrame(e))};requestAnimationFrame(e)}},{key:"stop",value:function(){this.isAnimate=!1}},{key:"getMousePos",value:function(t){this.mx=t.clientX-this.bounds.left,this.my=t.clientY-this.bounds.top}},{key:"setSize",value:function(){this.canvas.width=this.width=this.canvas.offsetWidth,this.canvas.height=this.height=this.canvas.offsetHeight}},{key:"render",value:function(){var t=this;this.cxt.clearRect(0,0,this.width,this.height),(0,o.default)(this.infos,function(e){t.cxt.fillStyle="rgba("+e.color+")",t.cxt.beginPath(),t.cxt.arc(e.x,e.y,e.r,0,2*Math.PI,!0),t.cxt.closePath(),t.cxt.fill()})}},{key:"update",value:function(){var t=this;(0,o.default)(this.infos,function(e){e.x+=e.vx,e.y+=e.vy,e.y>=t.height-e.r&&(e.y=t.height-e.r,e.vy=-e.vy*Math.floor(3*Math.random()+7)*.1),e.y<=e.r&&(e.y=e.r,e.vy=-e.vy*Math.floor(3*Math.random()+7)*.1),e.x>=t.width-e.r&&(e.x=t.width-e.r,e.vx=-e.vx*Math.floor(3*Math.random()+7)*.1),e.x<=e.r&&(e.x=e.r,e.vx=-e.vx*Math.floor(3*Math.random()+7)*.1)})}}]),t}();e.default=x},282:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(7),s=n(a),r=i(4),o=n(r),c=i(5),u=n(c),f=i(9),h=n(f),l=i(8),d=n(l),v=i(2),y=n(v),x=i(281),m=n(x);i(386);var p=function(t){function e(t){(0,o.default)(this,e);var i=(0,h.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t));return i.state={},i}return(0,d.default)(e,t),(0,u.default)(e,[{key:"componentDidMount",value:function(){new m.default(this.canvas)}},{key:"render",value:function(){var t=this;return y.default.createElement("div",{ref:"view",className:"my-friends-view"},y.default.createElement("canvas",{id:"canvas",ref:function(e){return t.canvas=e}}))}}]),e}(v.Component);e.default=p,p.propTypes={location:v.PropTypes.any},p.contextTypes={router:y.default.PropTypes.any.isRequired}},362:function(t,e,i){e=t.exports=i(13)(),e.push([t.id,".my-friends-view{-webkit-box-flex:1;-ms-flex:1;flex:1;height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:100vh}.my-friends-view canvas{width:100%;height:100%}",""])},386:function(t,e,i){var n=i(362);"string"==typeof n&&(n=[[t.id,n,""]]);i(14)(n,{});n.locals&&(t.exports=n.locals)}});