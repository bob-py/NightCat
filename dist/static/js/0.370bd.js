webpackJsonp([0,1],{69:function(t,e,i){t.exports={default:i(203),__esModule:!0}},113:function(t,e,i){t.exports={default:i(204),__esModule:!0}},179:function(t,e,i){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}Object.defineProperty(e,"__esModule",{value:!0});var o=i(111),s=i(112),n=r(s),a={register:(0,o.createAction)(n.RESGISTER_EVENT,function(t,e,i){return{type:t,fn:e,data:i}}),execute:(0,o.createAction)(n.EXECUTE)};e.default=a},189:function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(41),s=r(o),n=i(18),a=r(n),c=i(19),l=r(c),u=i(43),f=r(u),p=i(42),d=r(p),h=i(4),y=r(h),m=i(116),x=r(m);i(397);var v=i(191),b=r(v),g=function(t){function e(t){(0,a.default)(this,e);var i=(0,f.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t));return i.state={gameProgress:100,gameSign:!0,game:null},i.gameStart=i.gameStart.bind(i),i.clickFn=i.clickFn.bind(i),i}return(0,d.default)(e,t),(0,l.default)(e,[{key:"componentDidMount",value:function(){this.gameStart()}},{key:"gameStart",value:function(){this.setState({gameSign:!0,game:new b.default(this.refs.factory)})}},{key:"clickFn",value:function(){this.state.game.start()}},{key:"render",value:function(){var t=(0,x.default)("factory",{show:this.state.gameSign}),e=(0,x.default)("game-prev-group",{hide:this.state.gameSign});return y.default.createElement("div",{ref:"view",className:"factory-view"},y.default.createElement("div",{className:e},y.default.createElement("h1",{className:"game-title"},"Welcome to Code Factory!"),y.default.createElement("button",{className:"game-btn",onClick:this.gameStart},"Start")),y.default.createElement("div",{ref:"factory",className:t}))}}]),e}(h.Component);e.default=g,g.propTypes={}},190:function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(69),s=r(o),n=i(113),a=r(n),c=i(56),l=r(c),u=i(18),f=r(u),p=i(19),d=r(p),h={},y=function(){function t(e){(0,f.default)(this,t),(0,l.default)(this,h,e),this.init()}return(0,d.default)(t,[{key:"init",value:function(){this.items=[],this.active=null,this.last_output=0,this.success_count=0,this.output_active=null,this.createDetector(),this.initIems(),this.render()}},{key:"reset",value:function(){this.last_output=0,this.setActive(),this.setOutPutActive()}},{key:"createDetector",value:function(){if(this.elem=document.createElement("DIV"),this.elem.className="factory-detector",this.isMultigroup){this.output_group={},this.input_group=this.createGroup("INPUT");for(var t in this.data[0].expectant_output){this.output_group[t]={},this.output_group[t].el=this.createGroup("OUTPUT "+t);var e=document.createElement("DIV");e.className="factory-group-child-wrap",this.output_group[t].output_cgroup=this.createChildGroup(e),this.output_group[t].expect_cgroup=this.createChildGroup(e),this.output_group[t].el.appendChild(e)}}else this.input_group=this.createGroup("INPUT"),this.output_group=this.createGroup("OUTPUT"),this.expect_group=this.createGroup("EXPECT");this.wrap.appendChild(this.elem)}},{key:"createGroup",value:function(t){var e=document.createElement("DIV");return e.className="factory-group",e.innerHTML='<div class="group-title">'+t+"</div>",this.elem.appendChild(e),e}},{key:"createChildGroup",value:function(t){var e=document.createElement("DIV");return e.className="factory-group-child",t.appendChild(e),e}},{key:"createOutputGroup",value:function(t){var e=document.createElement("DIV");return e.className="factory-group",e.innerHTML='<div class="group-title">'+t+"</div>",this.this.elem.appendChild(e),e}},{key:"createItem",value:function(t,e,i){var r=document.createElement("DIV");return r.className="factory-item",r.innerHTML=null!==t?this.fromat(t):"",r.setAttribute("data-index",e),i.appendChild(r),r}},{key:"fromat",value:function(t){if("[object Object]"===Object.prototype.toString.call(t)){var e="";for(var i in t)e+="<div>\n\t\t\t\t\t<span>"+i+"</span>\n\t\t\t\t\t<span>"+t[i]+"</span>\n\t\t\t\t</div>";return e}return(0,a.default)(t)}},{key:"initIems",value:function(){this.items=(0,s.default)(this.data,function(t,e){return(0,l.default)({index:e},t)})}},{key:"render",value:function(){var t=this;(0,s.default)(this.items,function(e,i){t.isMultigroup?e.input_el=t.createItem(e.input,i,t.input_group):(e.input_el=t.createItem(e.input,i,t.input_group),e.output_el=t.createItem(e.output,i,t.output_group),e.expect_el=t.createItem(e.expectant_output,i,t.expect_group))})}},{key:"setActive",value:function(t){this.active&&this.active.classList.remove("active"),"number"==typeof t?this.active=this.input_group.querySelector('[data-index="'+t+'"]'):this.active=null,this.active&&this.active.classList.add("active")}},{key:"setOutPutActive",value:function(t){this.output_active&&this.output_active.classList.remove("active"),"number"==typeof t?this.output_active=this.output_group.querySelector('[data-index="'+t+'"]'):this.output_active=null,this.output_active&&this.output_active.classList.add("active")}},{key:"output",value:function(t,e){this.last_output<this.data.length&&(this.items[this.last_output].output=t,this.items[this.last_output].output_el.textContent=null!==t?this.fromat(t):"",this.examine(this.last_output),this.setOutPutActive(this.last_output++),this.last_output===this.data.length&&this.setOutPutActive())}},{key:"examine",value:function(t){var e=this.items[t];this.isDiff(e.output,e.expectant_output)?e.output_el.classList.add("error"):(this.success_count++,e.output_el.classList.add("success"))}},{key:"isDiff",value:function(t,e){return Object.prototype.toString.call(t)!==Object.prototype.toString.call(e)||(Array.isArray(t)&&t.length===e.length?t.some(function(t,i){return t!==e[i]}):t!==e)}},{key:"cloneObj",value:function(t){var e={};for(var i in t)e[i]=t[i];return e}}]),t}();e.default=y},191:function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(69),s=r(o),n=i(56),a=r(n),c=i(18),l=r(c),u=i(19),f=r(u),p=i(190),d=r(p),h=i(192),y=r(h),m=i(193),x=r(m),v={size:null,inService:!1,missions:x.default,mission:1,data_count:20,processor_count:9},b=function(){function t(e,i){(0,l.default)(this,t),(0,a.default)(this,v,i),this.elem=e,this.data=[],this.events=[],this.detector=null,this.active=0,this.init()}return(0,f.default)(t,[{key:"init",value:function(){this.initSize(),this.getMissions(),this.initMission(),this.createContaner(),this.createConsole(),this.initProcessor(),this.createDetector(),this.createPanel()}},{key:"destory",value:function(){for(this.elem.innerHTML="",this.data=[],this.events=[],this.active=0,this.detector=null;this.events.length;)this.events.shift()()}},{key:"initSize",value:function(){this.size?(this.width=this.size[0],this.height=this.size[1],this.elem.style.cssText="\n\t\t\t\twidth: "+this.width+"px;\n\t\t\t\theight: "+this.height+"px;\n\t\t\t"):(this.width=this.elem.offsetWidth,this.height=this.elem.offsetHeight)}},{key:"createDetector",value:function(){this.detector=new d.default({wrap:this.console,isMultigroup:this.isMultigroup||!1,factory:this,data:this.data})}},{key:"createPanel",value:function(){this.panel=document.createElement("DIV"),this.panel.className="factory-panel",this.nextBtn=this.createBtn("Next",this.next,this.panel),this.nextBtn=this.createBtn("Auto",this.start,this.panel),this.nextBtn=this.createBtn("Pause",this.pause,this.panel),this.nextBtn=this.createBtn("Restart",this.restart,this.panel),this.nextBtn=this.createBtn("Reset",this.reset,this.panel),this.console.appendChild(this.panel)}},{key:"createBtn",value:function(t,e,i){var r=document.createElement("BUTTON");return r.className="factory-panel-btn",r.textContent=t,e=e.bind(this),r.addEventListener("click",e,!1),this.events.push(function(){return r.removeEventListener("click",e,!1)}),i.appendChild(r),r}},{key:"createContaner",value:function(){this.container=document.createElement("DIV"),this.container.className="factory-container",this.elem.appendChild(this.container)}},{key:"createConsole",value:function(){this.console=document.createElement("DIV"),this.console.className="factory-console",this.elem.appendChild(this.console)}},{key:"getMissions",value:function(){var t=this.missions[this.mission];"function"!=typeof t?(0,a.default)(this,this.missions[this.mission]()):(0,a.default)(this,this.missions[this.mission]())}},{key:"initMission",value:function(){for(var t=0;t<this.data_count;t++){var e=this.missionCreater();this.data.push({input:e.input,output:null,expectant_output:e.output,result:"pending"})}}},{key:"initProcessor",value:function(){var t=this;this.processors=[];for(var e=0;e<this.processor_count;e++)this.processors.push(new y.default({status:this.err&&this.err.indexOf(e)>-1?"error":"idle",size:this.size,wrap:this.container,factory:this,index:e}));(0,s.default)(this.processors,function(e,i){var r=i-1;e.leftProcessor=t.processors[r]||null;var o=i+1;e.rightProcessor=t.processors[o]||null;var s=i-3;e.topProcessor=t.processors[s]||null;var n=i+3;e.bottomProcessor=t.processors[n]||null,t.entry[i]&&e.setPort(t.entry[i],"entry"),t.export[i]&&e.setPort(t.export[i],"export")})}},{key:"unableCodeInput",value:function(t){(0,s.default)(this.processors,function(e){t?e.code.setAttribute("disabled",!0):e.code.removeAttribute("disabled")})}},{key:"start",value:function(){var t=this;this.timer=setInterval(function(){t.next()},200)}},{key:"pause",value:function(){clearInterval(this.timer),this.timer=null}},{key:"end",value:function(){this.pause(),this.unableCodeInput(!1),this.detector.success_count===this.data.length?(alert("你通关了:)"),this.mission=this.mission+1,this.restart()):console.log("错了"+(this.data.length-this.detector.success_count)+"个")}},{key:"restart",value:function(){this.pause(),this.destory(),this.init()}},{key:"reset",value:function(){this.active=0,this.unableCodeInput(!1),this.detector.reset()}},{key:"next",value:function(){this.active<this.data.length?(this.detector.setActive(this.active),this.entryGetNext(),this.inService||(this.inService=!0,this.unableCodeInput(!0)),this.active++):this.detector.setActive(),(0,s.default)(this.processors,function(t){t.resetACC()}),this.entryGetNext(),(0,s.default)(this.processors,function(t){t.next()}),!this.processors.some(function(t){return"run"===t.status})&&this.end()}},{key:"entryGetNext",value:function(){for(var t in this.entry)this.data[this.active]&&this.processors[t].setNext(this.data[this.active].input)}}]),t}();e.default=b},192:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var _stringify=__webpack_require__(113),_stringify2=_interopRequireDefault(_stringify),_assign=__webpack_require__(56),_assign2=_interopRequireDefault(_assign),_classCallCheck2=__webpack_require__(18),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__(19),_createClass3=_interopRequireDefault(_createClass2),_default={width:150,height:150,_NEXT:null,_ACC:null,_context:{},cur_size:0,size:128,status:"idle"},Processor=function(){function Processor(t){(0,_classCallCheck3.default)(this,Processor),(0,_assign2.default)(this,_default,t),this.asyncSize=this.asyncSize.bind(this),this.closeError=this.closeError.bind(this),this.init()}return(0,_createClass3.default)(Processor,[{key:"bindEvent",value:function(){this.code.addEventListener("keyup",this.asyncSize),this.elem.addEventListener("click",this.closeError)}},{key:"unbindEvent",value:function(){this.code.removeEventListener("keyup",this.asyncSize),this.elem.removeEventListener("click",this.closeError)}},{key:"init",value:function(){this.createProcessor(),this.bindEvent()}},{key:"destory",value:function(){this.unbindEvent()}},{key:"createProcessor",value:function(){this.elem=document.createElement("DIV"),this.elem.className="factory-process","error"===this.status&&this.setError(),this.code=this.createCode(),this.displayArea=this.createDisplayArea(),this.wrap.appendChild(this.elem)}},{key:"setError",value:function(){this.elem.classList.add("factory-error"),this.elem.setAttribute("data-error","ERROR")}},{key:"setCodeError",value:function(t){this.elem.classList.add("factory-code-error"),this.elem.setAttribute("data-error",t),this.factory.pause()}},{key:"closeError",value:function(){this.elem.classList.contains("factory-code-error")&&this.elem.classList.remove("factory-code-error")}},{key:"createCode",value:function(){var t=document.createElement("DIV");t.className="code-group",t.innerHTML='<div class="code-index">Processor '+(this.index+1)+"</div>";var e=document.createElement("TEXTAREA");return e.className="code",e.setAttribute("spellcheck",!1),t.appendChild(e),this.elem.appendChild(t),e}},{key:"createDisplayArea",value:function(){var t=document.createElement("DIV");return t.className="display-area",this.displayNext=this.createItem("NEXT",this._NEXT,t),this.displayACC=this.createItem("ACC",this._ACC,t),this.displayStatus=this.createItem("STATUS",this.status,t),this.displaySize=this.createItem("BYTE",this.cur_size+"/"+this.size,t),this.elem.appendChild(t),t}},{key:"createItem",value:function(t,e,i){var r=document.createElement("DIV");r.className="display-item",r.innerHTML='<div class="item-title">'+t+"</div>";var o=document.createElement("DIV");return o.className="item-value",o.textContent=e,r.appendChild(o),i.appendChild(r),o}},{key:"asyncSize",value:function(t){var e=t.target.value.match(/\S/g);this.cur_size=e?e.length:0,this.cur_size>this.size&&(this.cur_size=this.size,t.target.value=t.target.value.substr(0,this.size)),this.displaySize.innerHTML=this.cur_size+"/"+this.size}},{key:"transmitACC",value:function(t,e){return"entry"!==this[e].type&&void("export"===this[e].type?null!==t&&this.factory.detector.output(t,this[e].name):this[e].setNext(t))}},{key:"setStatus",value:function(t){this.status=t,this.displayStatus.innerHTML=this.status}},{key:"setNext",value:function(t){"error"!==this.status&&(this._NEXT=t,this.displayNext.innerHTML=null!==this._NEXT?(0,_stringify2.default)(this._NEXT):"")}},{key:"next",value:function(){return"error"!==this.status&&(this.isEnd(),void(null!==this._ACC&&this.executeCode()))}},{key:"resetACC",value:function(){this._ACC=this._NEXT,this.displayACC.textContent=null!==this._ACC?(0,_stringify2.default)(this._ACC):"",this.setNext(null)}},{key:"isEnd",value:function(){null===this._ACC&&null===this._NEXT?this.setStatus("idle"):this.setStatus("run")}},{key:"executeCode",value:function executeCode(){var _this=this,code=this.code.value,fn=function fn(_ref){var NEXT=_ref.NEXT,ACC=_ref.ACC,TOLEFT=_ref.TOLEFT,TORIGHT=_ref.TORIGHT,TOTOP=_ref.TOTOP,TOBOTTOM=_ref.TOBOTTOM,ERROR=_ref.ERROR;try{eval(code)}catch(t){ERROR(t)}};this._context={},fn.call(this._context,{NEXT:this._NEXT,ACC:this._ACC,TOLEFT:function(t){return _this.leftProcessor&&_this.transmitACC(t,"leftProcessor")},TORIGHT:function(t){return _this.rightProcessor&&_this.transmitACC(t,"rightProcessor")},TOTOP:function(t){return _this.topProcessor&&_this.transmitACC(t,"topProcessor")},TOBOTTOM:function(t){return _this.bottomProcessor&&_this.transmitACC(t,"bottomProcessor")},ERROR:function(t){return _this.setCodeError(t)}})}},{key:"setPort",value:function(t,e){this[t.pos]={type:e,name:t.name},this.elem.setAttribute("data-port",("entry"===e?"INPUT":"OUTPUT")+" "+(t.name||"")+" ↓"),this.elem.classList.add(e)}}]),Processor}();exports.default=Processor},193:function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(69),s=r(o);e.default={1:function(){var t=function(){var t=function(){return~~(10*Math.random())},e=t();return{input:e,output:2*e}};return{err:[1,2,4,5],size:64,entry:{0:{pos:"topProcessor"}},export:{8:{pos:"bottomProcessor"}},missionCreater:t}},2:function(){var t=function(){var t=function(){return~~(10*Math.random())},e=[t(),t()],i=(0,s.default)(e,function(t){return 2*t}).sort(function(t,e){return t-e});return{input:e,output:i}};return{err:[],size:64,entry:{0:{pos:"topProcessor"}},export:{8:{pos:"bottomProcessor"}},missionCreater:t}}}},194:function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(41),s=r(o),n=i(18),a=r(n),c=i(19),l=r(c),u=i(43),f=r(u),p=i(42),d=r(p),h=i(4),y=r(h);i(398);var m=i(105),x=i(54),v=i(179),b=r(v),g=function(t){function e(t){return(0,a.default)(this,e),(0,f.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t))}return(0,d.default)(e,t),(0,l.default)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return y.default.createElement("div",{ref:"view",className:"home-view"},y.default.createElement("section",{className:"info"},y.default.createElement("h1",null,"NightCat"),y.default.createElement("small",null,"- Welcome to NightCat game city -")))}}]),e}(h.Component),_=function(t){return{store:t}},k=function(t){return{actions:(0,x.bindActionCreators)(b.default,t)}};e.default=(0,m.connect)(_,k)(g),g.propTypes={actions:h.PropTypes.any}},203:function(t,e,i){i(127),i(235),t.exports=i(10).Array.from},204:function(t,e,i){var r=i(10),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},215:function(t,e,i){var r=i(70),o=i(13)("toStringTag"),s="Arguments"==r(function(){return arguments}()),n=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,i,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=n(e=Object(t),o))?i:s?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},216:function(t,e,i){"use strict";var r=i(22),o=i(47);t.exports=function(t,e,i){e in t?r.f(t,e,o(0,i)):t[e]=i}},219:function(t,e,i){var r=i(45),o=i(13)("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||s[o]===t)}},221:function(t,e,i){var r=i(30);t.exports=function(t,e,i,o){try{return o?e(r(i)[0],i[1]):e(i)}catch(e){var s=t.return;throw void 0!==s&&r(s.call(t)),e}}},223:function(t,e,i){var r=i(13)("iterator"),o=!1;try{var s=[7][r]();s.return=function(){o=!0},Array.from(s,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var i=!1;try{var s=[7],n=s[r]();n.next=function(){return{done:i=!0}},s[r]=function(){return n},t(s)}catch(t){}return i}},234:function(t,e,i){var r=i(215),o=i(13)("iterator"),s=i(45);t.exports=i(10).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||s[r(t)]}},235:function(t,e,i){"use strict";var r=i(71),o=i(20),s=i(58),n=i(221),a=i(219),c=i(126),l=i(216),u=i(234);o(o.S+o.F*!i(223)(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,o,f,p=s(t),d="function"==typeof this?this:Array,h=arguments.length,y=h>1?arguments[1]:void 0,m=void 0!==y,x=0,v=u(p);if(m&&(y=r(y,h>2?arguments[2]:void 0,2)),void 0==v||d==Array&&a(v))for(e=c(p.length),i=new d(e);e>x;x++)l(i,x,m?y(p[x],x):p[x]);else for(f=v.call(p),i=new d;!(o=f.next()).done;x++)l(i,x,m?n(f,y,[o.value,x],!0):o.value);return i.length=x,i}})},250:function(t,e,i){e=t.exports=i(48)(),e.push([t.id,".factory-view{-webkit-box-flex:1;-ms-flex:1;flex:1;background-color:#130c0e;color:#fffffb;position:relative;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;flex-direction:column}.factory-view,.factory-view .game-prev-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column}.factory-view .game-prev-group{flex-direction:column}.factory-view .game-prev-group.hide{display:none}.factory-view .game-title{margin-top:150px}.factory-view .game-btn{margin-top:100px;border:none;font-size:30px;background-color:transparent;color:#fffffb;cursor:pointer}.factory-view .game-btn:hover{text-shadow:0 0 5px hsla(0,0%,100%,.6)}.factory-view+.menu .menu-btn-outside{color:#fffffb;display:none}.factory{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;padding:10px;margin:20px;border:1px solid #fffffb;background-color:#130c0e;visibility:hidden}.factory.show{visibility:visible}.factory-container{-webkit-box-flex:1;-ms-flex:1;flex:1;margin:10px;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:30px 20px}.factory-container,.factory-container .factory-process{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex}.factory-container .factory-process{width:30%;height:30%;border:1px solid #fffffb}.factory-container .factory-process.entry:before{content:attr(data-port);position:absolute;left:10px;top:-25px}.factory-container .factory-process.export:after{content:attr(data-port);position:absolute;right:10px;bottom:-25px}.factory-container .factory-process .code-group{position:relative;height:100%;margin-right:80px;-webkit-box-flex:1;-ms-flex:1;flex:1}.factory-container .factory-process .code-index{position:absolute;width:100%;height:100%;opacity:.1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:1}.factory-container .factory-process .code{position:absolute;height:100%;width:100%;resize:none;background-color:transparent;color:#fffffb;font-size:14px;border-right:1px solid #fffffb;padding:5px;font-family:Montserrat,Segoe UI,Microsoft Yahei,Helvetica,Arial;z-index:2}.factory-container .factory-process .display-area{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;top:0;right:0;width:80px;height:100%;z-index:2}.factory-container .factory-process .display-area .display-item{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:2px 2px 0;padding:3px 0;text-align:center;border:1px solid #fffffb}.factory-container .factory-process .display-area .display-item>div{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.factory-container .factory-process .display-area .item-title{border-bottom:1px solid #d3dce6}.factory-container .factory-process.factory-error:after{opacity:.9;font-size:40px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.factory-container .factory-process.factory-code-error:after,.factory-container .factory-process.factory-error:after{content:attr(data-error);position:absolute;top:0;left:0;width:100%;height:100%;padding:20px;background-color:#d71345;z-index:5}.factory-container .factory-process.factory-code-error:after{opacity:.85;font-size:18px}.factory-console{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.factory-detector{-ms-flex:1;flex:1;width:380px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.factory-detector,.factory-detector .factory-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1}.factory-detector .factory-group{-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border:1px solid #fffffb;margin:0 10px;color:#fffffb}.factory-detector .factory-group .factory-group-child-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}.factory-detector .factory-group .factory-group-child{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1}.factory-detector .factory-group .factory-item{height:25px;line-height:25px;padding:2px 5px;font-size:14px;display:-webkit-box;display:-ms-flexbox;display:flex}.factory-detector .factory-group .factory-item>div{-webkit-box-flex:1;-ms-flex:1;flex:1;white-space:nowrap;letter-spacing:-.8px}.factory-detector .factory-group .factory-item>div span:last-child{opacity:.6}.factory-detector .factory-group .error{color:#d71345}.factory-detector .factory-group .success{color:#2ecc71}.factory-detector .factory-group .active{background-color:#fffffb;color:#130c0e}.factory-detector .factory-group .group-title{font-size:13px}.factory-panel{height:100px;margin:20px 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.factory-panel .factory-panel-btn{font-size:18px;padding:5px 8px}.btn,.factory-panel .factory-panel-btn{border:none;color:#fffffb;background-color:transparent}.btn{margin-top:10px}",""])},251:function(t,e,i){e=t.exports=i(48)(),e.push([t.id,".home-view{-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;background-image:url("+i(403)+");background-repeat:no-repeat;background-size:cover;cursor:default}.home-view .info{position:relative;font-size:20px;margin:120px 0 0 60px;width:300px;text-align:center}.home-view+.menu .menu-btn-outside,.home-view .info{color:#fffffb;text-shadow:0 0 10px hsla(0,0%,100%,.86)}",""])},397:function(t,e,i){var r=i(250);"string"==typeof r&&(r=[[t.id,r,""]]);i(55)(r,{});r.locals&&(t.exports=r.locals)},398:function(t,e,i){var r=i(251);"string"==typeof r&&(r=[[t.id,r,""]]);i(55)(r,{});r.locals&&(t.exports=r.locals)},403:function(t,e,i){t.exports=i.p+"static/img/bg.c198192.jpg"},406:function(t,e,i){function r(t){return i(o(t))}function o(t){return s[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var s={"./factory/index.jsx":189,"./home/index.jsx":194};r.keys=function(){return Object.keys(s)},r.resolve=o,t.exports=r,r.id=406}});