webpackJsonp([13,14],{132:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(4),i=r(o),s=a(2),d=r(s),n=a(3),l=r(n),f=a(6),p=r(f),g=a(5),b=r(g),u=a(1),h=r(u);a(200);var c=function(e){function t(e){(0,d.default)(this,t);var a=(0,p.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return a.state={WINDOW_WIDTH:0,WINDOW_HEIGHT:0,leftPupil:null,rightPupil:null,leftLight:null,rightLight:null},a.cat={},a.follow=a.follow.bind(a),a.setScreenSize=a.setScreenSize.bind(a),a}return(0,b.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){document.addEventListener("mousemove",e.follow),window.addEventListener("resize",e.setScreenSize),e.setScreenSize();for(var t in e.cat)e.cat[t].info=e.getElemData(e.cat[t],/Eye/g.test(t)?20:0,/Eye/g.test(t)?30:0)},10)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this.follow),window.removeEventListener("resize",this.setScreenSize)}},{key:"setScreenSize",value:function(){this.setState({WINDOW_WIDTH:document.body.offsetWidth,WINDOW_HEIGHT:document.body.offsetHeight})}},{key:"follow",value:function(e){var t=e.pageX,a=e.pageY,r=this.cat.leftEye.info,o=this.cat.rightEye.info;this.setState({leftPupil:this.getPupilStyles(r,t),rightPupil:this.getPupilStyles(o,t),leftLight:this.getLightStyles(r,t,a,this.cat.leftPupil.info.width),rightLight:this.getLightStyles(o,t,a,this.cat.rightPupil.info.width)})}},{key:"getPupilStyles",value:function(e,t){return{left:e.width/2+(t-e.left-e.width/2)/(this.state.WINDOW_WIDTH-e.left-e.width/2)*(e.width/2)+"px"}}},{key:"getLightStyles",value:function(e,t,a,r){return{left:t/(this.state.WINDOW_WIDTH/(r/2))+"px",top:e.height/2+(a-e.top-e.height/2)/(this.state.WINDOW_HEIGHT-e.top-e.height/2)*(e.height/2-10)+5+"px"}}},{key:"getElemData",value:function(e,t,a){var r=e.getBoundingClientRect(),o=r.left,i=r.top;return{left:~~o,top:~~i,width:e.clientWidth-t,height:e.clientHeight-a}}},{key:"render",value:function(){var e=this;return h.default.createElement("div",{ref:"view",className:"about-view"},h.default.createElement("h1",null,"NightCat"),h.default.createElement("div",{className:"cat-mobile"}),h.default.createElement("div",{className:"cat"},h.default.createElement("div",{className:"head"},h.default.createElement("div",{className:"ear"}),h.default.createElement("div",{className:"face"},h.default.createElement("div",{ref:function(t){return e.cat.leftEye=t},className:"left-eye eye blink"},h.default.createElement("div",{ref:function(t){return e.cat.leftPupil=t},style:this.state.leftPupil,className:"pupil"},h.default.createElement("div",{ref:function(t){return e.cat.leftLight=t},style:this.state.leftLight,className:"light"}))),h.default.createElement("div",{ref:function(t){return e.cat.rightEye=t},className:"right-eye eye blink"},h.default.createElement("div",{ref:function(t){return e.cat.rightPupil=t},style:this.state.rightPupil,className:"pupil"},h.default.createElement("div",{ref:function(t){return e.cat.rightLight=t},style:this.state.rightLight,className:"light"}))))),h.default.createElement("div",{className:"body"},h.default.createElement("div",{className:"leg"}),h.default.createElement("div",{className:"left-hand hand"}),h.default.createElement("div",{className:"right-hand hand"})),h.default.createElement("div",{className:"tail"})))}}]),t}(u.Component);t.default=c,c.propTypes={location:u.PropTypes.any},c.contextTypes={router:h.default.PropTypes.any.isRequired}},179:function(e,t,a){t=e.exports=a(9)(),t.push([e.id,'.about-view .cat{margin:100px;width:780px;height:400px;position:relative}.about-view .cat .head .ear{position:absolute;width:0;height:0;border-bottom:150px solid #000;border-left:75px solid transparent;border-right:75px solid transparent;-webkit-transform:skew(-15deg);transform:skew(-15deg);border-radius:35px 35px 125px 125px;z-index:2}.about-view .cat .head .ear:before{left:119px;border-bottom:142px solid #000;border-left:100px solid transparent;border-right:100px solid transparent;z-index:2}.about-view .cat .head .ear:after,.about-view .cat .head .ear:before{content:"";position:absolute;top:60px;width:0;height:0;-webkit-transform:rotate(30deg);transform:rotate(30deg);border-radius:35px 35px 125px 125px}.about-view .cat .head .ear:after{left:117px;border-bottom:144px solid #fff;border-left:102px solid transparent;border-right:102px solid transparent;z-index:1}.about-view .cat .head .face{position:absolute;width:358px;height:263px;background-color:#000;border-radius:300px 300px 300px 300px/300px 300px 166px 163px;top:73px;left:-34px;-webkit-transform:rotate(14deg) skew(2deg);transform:rotate(14deg) skew(2deg);border-right:1px solid #fff;border-bottom:1px solid #fff;box-shadow:22px 9px 29px 0 rgba(0,0,0,.56);z-index:2}.about-view .cat .head .face .eye{position:absolute;background-color:#fff;overflow:hidden}.about-view .cat .head .face .left-eye{width:120px;height:100px;border-radius:300px 300px 300px 300px/300px 300px 160px 193px;top:73px;left:15px;-webkit-transform:rotate(12deg) skew(12deg);transform:rotate(12deg) skew(12deg);box-shadow:inset -13px 0 41px 0 rgba(0,0,0,.56);-webkit-animation:left 10s infinite;animation:left 10s infinite}.about-view .cat .head .face .left-eye .pupil{width:14px;position:absolute;left:75%;height:90%;background-color:#000;border-radius:100%;-webkit-transform:rotate(10deg);transform:rotate(10deg);overflow:hidden}.about-view .cat .head .face .left-eye .pupil .light{width:6px;height:6px;position:absolute;top:10px;background-color:#fff;border-radius:100%;z-index:-1}.about-view .cat .head .face .right-eye{width:134px;height:104px;border-radius:193px 119px 150px 175px/178px 144px 108px 73px;top:99px;left:210px;-webkit-transform:rotate(7deg) skew(0);transform:rotate(7deg) skew(0);box-shadow:inset -16px 9px 38px 0 rgba(0,0,0,.56);-webkit-animation:right 10s infinite;animation:right 10s infinite}.about-view .cat .head .face .right-eye .pupil{width:16px;position:absolute;top:0;left:75%;height:92%;background-color:#000;border-radius:100%;-webkit-transform:rotate(2deg);transform:rotate(2deg)}.about-view .cat .head .face .right-eye .pupil .light{width:6px;height:6px;position:absolute;top:10px;background-color:#fff;border-radius:100%;z-index:-1}.about-view .cat .body:before{content:"";position:absolute;width:652px;height:322px;left:157px;top:20px;border-radius:345px 348px 251px 0/218px 250px 124px 37px;background-color:#000;z-index:1;-webkit-transform:rotate(15deg) skew(-27deg);transform:rotate(15deg) skew(-27deg);box-shadow:14px 27px 39px 0 rgba(0,0,0,.56)}.about-view .cat .body .leg{position:absolute;width:442px;height:262px;left:352px;top:108px;border-radius:100%;border-left:1px solid #fff;background-color:#000;-webkit-transform:rotate(0deg);transform:rotate(0deg);z-index:2}.about-view .cat .body .hand{position:absolute;background-color:#000;overflow:hidden}.about-view .cat .body .left-hand{width:85px;height:219px;border-radius:100%;top:218px;left:50px;-webkit-transform:rotate(-54deg) skew(0deg);transform:rotate(-54deg) skew(0deg);box-shadow:3px 9px 20px 0 rgba(0,0,0,.56)}.about-view .cat .body .right-hand{position:absolute;width:82px;height:250px;border-radius:100%/170px 170px 140px 140px;top:250px;left:252px;-webkit-transform:rotate(-160deg) skew(0);transform:rotate(-160deg) skew(0);box-shadow:-14px 27px 39px 0 rgba(0,0,0,.56)}.about-view .cat .body .right-hand.action{-webkit-animation:react .85s;animation:react .85s}.about-view .cat .tail{position:absolute;left:304px;top:174px;width:548px;height:312px;border:50px solid #000;border-radius:100%/300px 300px 300px 300px;border-top-color:transparent;border-left-color:transparent;box-shadow:72px 21px 60px -62px rgba(0,0,0,.56),inset -110px 9px 60px -90px rgba(0,0,0,.56)}.about-view .cat .tail:after{content:"";width:48px;height:48px;border-radius:100%;background-color:#000;position:absolute;bottom:-1px;left:3px}@-webkit-keyframes left{0%{-webkit-transform:rotate(12deg) skew(12deg);transform:rotate(12deg) skew(12deg)}1%{-webkit-transform:rotateX(102deg) rotateY(12deg) skew(12deg);transform:rotateX(102deg) rotateY(12deg) skew(12deg)}2%{-webkit-transform:rotate(12deg) skew(12deg);transform:rotate(12deg) skew(12deg)}}@keyframes left{0%{-webkit-transform:rotate(12deg) skew(12deg);transform:rotate(12deg) skew(12deg)}1%{-webkit-transform:rotateX(102deg) rotateY(12deg) skew(12deg);transform:rotateX(102deg) rotateY(12deg) skew(12deg)}2%{-webkit-transform:rotate(12deg) skew(12deg);transform:rotate(12deg) skew(12deg)}}@-webkit-keyframes right{0%{-webkit-transform:rotate(7deg) skew(0);transform:rotate(7deg) skew(0)}1%{-webkit-transform:rotateX(90deg) rotateY(7deg) skew(0);transform:rotateX(90deg) rotateY(7deg) skew(0)}2%{-webkit-transform:rotate(7deg) skew(0);transform:rotate(7deg) skew(0)}}@keyframes right{0%{-webkit-transform:rotate(7deg) skew(0);transform:rotate(7deg) skew(0)}1%{-webkit-transform:rotateX(90deg) rotateY(7deg) skew(0);transform:rotateX(90deg) rotateY(7deg) skew(0)}2%{-webkit-transform:rotate(7deg) skew(0);transform:rotate(7deg) skew(0)}}@-webkit-keyframes react{0%{-webkit-transform:translateX(0) rotate(-160deg) skew(0);transform:translateX(0) rotate(-160deg) skew(0)}50%{-webkit-transform:translateX(20px) rotate(-180deg) skew(5deg);transform:translateX(20px) rotate(-180deg) skew(5deg)}to{-webkit-transform:translateX(0) rotate(-160deg) skew(0);transform:translateX(0) rotate(-160deg) skew(0)}}@keyframes react{0%{-webkit-transform:translateX(0) rotate(-160deg) skew(0);transform:translateX(0) rotate(-160deg) skew(0)}50%{-webkit-transform:translateX(20px) rotate(-180deg) skew(5deg);transform:translateX(20px) rotate(-180deg) skew(5deg)}to{-webkit-transform:translateX(0) rotate(-160deg) skew(0);transform:translateX(0) rotate(-160deg) skew(0)}}.about-view{-webkit-box-flex:1;-ms-flex:1;flex:1;position:absolute;width:100%;height:100vh;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#e3e3e3;background-image:-webkit-radial-gradient(50% 50% farthest-side,#666 0,#e3e3e3 100%);background-image:radial-gradient(farthest-side at 50% 50%,#666 0,#e3e3e3 100%)}.about-view h1{font-size:30px}.about-view .cat-mobile{display:none;position:absolute;bottom:-12.5vh;left:-5%;width:110%;height:25vh;border-radius:50%;background-color:#130c0e}.about-view .cat-mobile:before{left:10%;-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}.about-view .cat-mobile:after,.about-view .cat-mobile:before{content:"";position:absolute;bottom:21vh;height:0;width:0;border:7vh solid transparent;border-bottom-color:#130c0e}.about-view .cat-mobile:after{right:10%;-webkit-transform:rotate(10deg);transform:rotate(10deg)}@media (max-width:768px){.about-view{background-image:none}.about-view .cat{display:none}.about-view .cat-mobile{display:block}}',""])},200:function(e,t,a){var r=a(179);"string"==typeof r&&(r=[[e.id,r,""]]);a(11)(r,{});r.locals&&(e.exports=r.locals)}});