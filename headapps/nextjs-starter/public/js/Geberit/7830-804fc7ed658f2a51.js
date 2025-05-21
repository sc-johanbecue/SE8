(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7830],{7338:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,o.default)(e);if(!n.length){t.preventDefault();return}var r=void 0,i=t.shiftKey,a=n[0],s=n[n.length-1],l=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return t.activeElement.shadowRoot?e(t.activeElement.shadowRoot):t.activeElement}();if(e===l){if(!i)return;r=s}if(s!==l||i||(r=a),a===l&&i&&(r=s),r){t.preventDefault(),r.focus();return}var d=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null!=d&&"Chrome"!=d[1]&&null==/\biPod\b|\biPad\b/g.exec(navigator.userAgent)){var u=n.indexOf(l);if(u>-1&&(u+=i?-1:1),void 0===(r=n[u])){t.preventDefault(),(r=i?s:a).focus();return}t.preventDefault(),r.focus()}};var o=function(e){return e&&e.__esModule?e:{default:e}}(n(90330));e.exports=t.default},16637:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(){console.log("portalOpenInstances ----------"),console.log(o.openInstances.length),o.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")},t.resetState=function(){o=new n};var n=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach(function(n){return n(e,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},o=new n;t.default=o},29667:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(12115),s=g(n(38637)),l=h(n(83838)),d=g(n(7338)),u=h(n(69479)),c=h(n(99695)),f=n(93091),p=g(f),m=g(n(16637));function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function g(e){return e&&e.__esModule?e:{default:e}}n(59054);var v={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},y=0,b=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setOverlayRef=function(e){n.overlay=e,n.props.overlayRef&&n.props.overlayRef(e)},n.setContentRef=function(e){n.content=e,n.props.contentRef&&n.props.contentRef(e)},n.afterClose=function(){var e=n.props,t=e.appElement,o=e.ariaHideApp,r=e.htmlOpenClassName,i=e.bodyOpenClassName,a=e.parentSelector,s=a&&a().ownerDocument||document;i&&c.remove(s.body,i),r&&c.remove(s.getElementsByTagName("html")[0],r),o&&y>0&&0==(y-=1)&&u.show(t),n.props.shouldFocusAfterRender&&(n.props.shouldReturnFocusAfterClose?(l.returnFocus(n.props.preventScroll),l.teardownScopedFocus()):l.popWithoutFocus()),n.props.onAfterClose&&n.props.onAfterClose(),m.default.deregister(n)},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(n.props.shouldFocusAfterRender&&(l.setupScopedFocus(n.node),l.markForFocusLater()),n.setState({isOpen:!0},function(){n.openAnimationFrame=requestAnimationFrame(function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})})}))},n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:!0})},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){("Tab"===e.code||9===e.keyCode)&&(0,d.default)(n.content,e),n.props.shouldCloseOnEsc&&("Escape"===e.code||27===e.keyCode)&&(e.stopPropagation(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnMouseUp=function(){n.shouldClose=!1},n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o=(void 0===t?"undefined":r(t))==="object"?t:{base:v[e],afterOpen:v[e]+"--after-open",beforeClose:v[e]+"--before-close"},i=o.base;return n.state.afterOpen&&(i=i+" "+o.afterOpen),n.state.beforeClose&&(i=i+" "+o.beforeClose),"string"==typeof t&&t?i+" "+t:i},n.attributesFromObject=function(e,t){return Object.keys(t).reduce(function(n,o){return n[e+"-"+o]=t[o],n},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n.moveFromContentToOverlay=null,n}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName,i=e.parentSelector,a=i&&i().ownerDocument||document;r&&c.add(a.body,r),o&&c.add(a.getElementsByTagName("html")[0],o),n&&(y+=1,u.hide(t)),m.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,r=e.overlayClassName,i=e.defaultStyles,a=e.children,s=n?{}:i.content,l=r?{}:i.overlay;if(this.shouldBeClosed())return null;var d={ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:o({},l,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},u=o({id:t,ref:this.setContentRef,style:o({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),c=this.props.contentElement(u,a);return this.props.overlayElement(d,c)}}]),t}(a.Component);b.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},b.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(p.default),s.default.instanceOf(f.SafeHTMLCollection),s.default.instanceOf(f.SafeNodeList),s.default.arrayOf(s.default.instanceOf(p.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=b,e.exports=t.default},50200:(e,t,n)=>{"use strict";n.d(t,{GP:()=>l,gy:()=>s});var o=n(95155),r=n(12115),i=n(63945);let a=(0,r.createContext)(null),s=({children:e})=>{let[t,n]=(0,r.useState)(null),[s,l]=(0,r.useState)(!1),d=(0,r.useMemo)(()=>({config:t,setConfig:n,showDialogue:s,setShowDialogue:l}),[t,n,s,l]);return(0,o.jsxs)(a.Provider,Object.assign({value:d},{children:[e,s&&(0,o.jsx)(i.X,Object.assign({},t,{closeDialogue:()=>{l(!1),n(null)}}))]}))},l=()=>{let{setConfig:e,setShowDialogue:t}=(0,r.useContext)(a);return{showDialogue:(0,r.useCallback)(n=>{e(Object.assign({},n)),t(!0)},[e,t]),closeDialogue:(0,r.useCallback)(()=>{t(!1),e(null)},[e,t])}}},54052:(e,t,n)=>{var o=0/0,r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,c=d||u||Function("return this")(),f=Object.prototype.toString,p=Math.max,m=Math.min,h=function(){return c.Date.now()};function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==f.call(t))return o;if(g(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var d=a.test(e);return d||s.test(e)?l(e.slice(2),d?2:8):i.test(e)?o:+e}e.exports=function(e,t,n){var o,r,i,a,s,l,d=0,u=!1,c=!1,f=!0;if("function"!=typeof e)throw TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,d=t,a=e.apply(i,n)}function b(e){var n=e-l,o=e-d;return void 0===l||n>=t||n<0||c&&o>=i}function O(){var e,n,o,r=h();if(b(r))return w(r);s=setTimeout(O,(e=r-l,n=r-d,o=t-e,c?m(o,i-n):o))}function w(e){return(s=void 0,f&&o)?y(e):(o=r=void 0,a)}function x(){var e,n=h(),i=b(n);if(o=arguments,r=this,l=n,i){if(void 0===s)return d=e=l,s=setTimeout(O,t),u?y(e):a;if(c)return s=setTimeout(O,t),y(l)}return void 0===s&&(s=setTimeout(O,t)),a}return t=v(t)||0,g(n)&&(u=!!n.leading,i=(c="maxWait"in n)?p(v(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),x.cancel=function(){void 0!==s&&clearTimeout(s),d=0,o=l=r=s=void 0},x.flush=function(){return void 0===s?a:w(h())},x}},59054:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){for(var e=[r,i],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}r=i=null,a=[]},t.log=function(){console.log("bodyTrap ----------"),console.log(a.length);for(var e=[r,i],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")};var o=function(e){return e&&e.__esModule?e:{default:e}}(n(16637)),r=void 0,i=void 0,a=[];function s(){0!==a.length&&a[a.length-1].focusContent()}o.default.subscribe(function(e,t){r||i||((r=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),r.style.position="absolute",r.style.opacity="0",r.setAttribute("tabindex","0"),r.addEventListener("focus",s),(i=r.cloneNode()).addEventListener("focus",s)),(a=t).length>0?(document.body.firstChild!==r&&document.body.insertBefore(r,document.body.firstChild),document.body.lastChild!==i&&document.body.appendChild(i)):(r.parentElement&&r.parentElement.removeChild(r),i.parentElement&&i.parentElement.removeChild(i))})},63945:(e,t,n)=>{"use strict";n.d(t,{X:()=>C});var o=n(95155),r=n(94274),i=n.n(r),a=n(85023),s=n(2085),l=n(93411);let d=l.Ay.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 30;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }

  ${({theme:e,size:t,fullscreen:n})=>`
  @media (orientation:landscape) {
    padding: ${n?"unset":"0 1rem 0 1rem"};
  }

  @media (orientation:portrait) {
    padding-top: ${n?"unset":"7.5rem"};
    padding-bottom: unset;
  }

  @media ${e.device.medium} {
    padding-top: 7.5rem;
  }

  @media (orientation: landscape) and ${e.device.medium} {
    align-items: unset;
  }

  @media only screen and (max-height: 575.98px) and (orientation: landscape) {
    ${"l"===t||"xl"===t?`
        align-items: unset;`:`padding-top: 7.5rem;
        align-items: unset;`} 
      overflow: scroll;
      align-items:center;
      padding-top: unset;
    }
  `}
`,u={s:"26.25rem",m:"35rem",l:"42.75rem",xl:"52.5rem",xlMedium:"45rem"},c=l.Ay.div`
  overflow: ${({fullscreen:e})=>e?"hidden":"auto"};
  margin: ${({fullscreen:e})=>e?"0":"0 1rem 1rem 1rem"};
  height: 100%;

  @media ${({theme:e})=>e.device.medium} {
    overflow: auto;
    margin: 0 1rem 1rem 1rem;
  }
`,f=l.Ay.div`
  background: white;
  position: relative;
  position: relative;

  ${({size:e,theme:t,fullscreen:n})=>`
    box-shadow: 0 4px 16px rgba(${t.colors.transparentBlack}, 0.26);

    max-width: ${u[e]};

    height: ${n?"100vh":"auto"};
    width: ${n?"100vw":"auto"};

    @media ${t.device.medium} {
      width: ${u[e]};
      height: auto;
      ${"xl"===e?`width: ${u.xlMedium};`:""}
      min-height: unset;
    }
    @media ${t.device.large} {
      width: ${u[e]};
    }

    @media only screen and (max-height: 575.98px) and (orientation: landscape) and (pointer:coarse) {
      max-width: 100%;
      ${"l"===e||"xl"===e?"width: 100vw; min-height: 100vh;":`width: ${n?"100%":"95vw"}; min-height: 95vh;`}
    }
  `};
`,p=l.Ay.div`
  height: 4.75rem;
  width: 100%;
  padding: 0 1rem 0 1rem;
  display: flex;
  align-items: center;

  > span:nth-child(2) {
    flex-grow: 1;
    margin-left: 1rem;
  }

  > button {
    margin-left: 0.5rem;
    width: 2.75rem;
    height: 2.75rem;
    min-width: unset;
  }

  > button > span {
    width: 2.75rem;
    height: 2.75rem;
    min-width: unset;
  }

  > button > span > svg {
    width: 1.125rem;
  }

  @media ${({theme:e})=>e.device.medium} {
    height: 4.5rem;
    padding: 0 1rem 0 1.5rem;

    > button,
    > button > span {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  ${({type:e,theme:t,$color:n,bgColor:o,iconColor:r})=>{let i="unset",a="unset",s="unset";switch(e){case"warning":i=`rgba(${t.colors.transparentWarning}, 0.1)`,a=t.colors.error,s=t.colors.error;break;case"information":i=`rgba(${t.colors.transparent15}, 0.1)`,a=t.colors.grey15,s=t.colors.grey15;break;case"error":i=`rgba(${t.colors.transparentError}, 0.1)`,a=t.colors.error,s=t.colors.error;break;case"success":i=`rgba(${t.colors.transparentSuccess}, 0.1)`,a=t.colors.grey15,s=t.colors.success;break;case"custom":i=o,a=n,s=r}return`
    background-color: ${i};
    color: ${a};

    > span:nth-child(1) {
      fill: ${s};
    }
  `}}

  @media ${({theme:e})=>e.device.medium} {
    padding: 0 1rem 0 2rem;
  }
`,m=l.Ay.div`
  display: flex;
  padding-top: 1rem;
  padding: ${({widerPadding:e,noTitle:t})=>e&&!t?"1rem 1.5rem 0":"1rem 1rem 0"};
  color: ${({theme:e})=>e.colors.black};
  @media ${({theme:e})=>e.device.medium} {
    ${({noTitle:e})=>e?"":"padding: 1rem 1rem 0 2rem ;"}
  }

  > span {
    flex-grow: 1;
    margin: 2rem 0.5rem 0 0;
  }

  > span h6 {
    margin: 0;
  }

  > button,
  > button > span {
    width: 2.75rem;
    height: 2.75rem;
    min-width: unset;
  }

  > button > span > svg {
    width: 1.25rem;
  }

  @media ${({theme:e})=>e.device.medium} {
    > button,
    > button > span {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`,h=l.Ay.div`
  width: 100%;
  padding: ${({widerPadding:e})=>e?"1.5rem 1.5rem 2.5rem":"1rem 1rem 2.5rem"};
  ${({noHeader:e})=>e?"padding-top: 3rem":""}
  font-size: ${({theme:e})=>e.fontTokens.font12[0]};
  line-height: ${({theme:e})=>e.fontTokens.font12[1]};
  color: ${({theme:e})=>e.colors.black};

  ${({type:e})=>"error"===e||"success"===e||"warning"===e||"information"===e?"padding: 1.5rem 1.5rem 2.5rem 1.5rem;":""}

  > p {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${({theme:e})=>`
    @media ${e.device.small} and (orientation:landscape) and (pointer: coarse) {
      padding-bottom: 1rem;
    }
  `}

  @media ${({theme:e})=>e.device.medium} {
    ${({type:e})=>"error"===e||"success"===e||"warning"===e||"information"===e?"padding: 1.5rem 2rem 2rem 2rem;":"padding: 1rem 2rem 2rem;"}
  }

  ${({hideClose:e,type:t,noTitle:n})=>e&&"blocking"!==t&&n?"&&& {padding-top: 3rem;}":""}
`,g=l.Ay.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 2rem;
`,v=l.Ay.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 0;
  ${({reversed:e})=>e?"margin-right: auto;":"width: 100%;"}

  > button {
    width: ${({hasTwoBtns:e})=>e?"100%":"unset"};
  }
  > button:first-child {
    margin: ${({hasTwoBtns:e})=>e?"0 0 1.5rem":""};
    @media ${({theme:e})=>e.device.medium} {
      margin: 0 0 0 1.5rem;
      ${({reversed:e})=>e?"transform: translate(-1rem);":""};
    }
  }

  @media ${({theme:e})=>e.device.small} {
    button {
      ${({reversed:e})=>e?"transform: translate(0);":""};
    }
  }

  ${({theme:e})=>`
    @media ${e.device.small} and (orientation:landscape) {
      padding-top: 1rem;
      > button {
        width: 100%;
      }
    }
  `}

  ${({theme:e})=>`
    @media ${e.device.small} and (orientation:portrait) {
      padding-top: 1rem;

      > button {
        width: 100%;
      }

      > button:first-child {
        margin: ${({hasTwoBtns:e})=>e?"0 0 1rem 0":""};
      }
    }
  `}
  
  @media ${({theme:e})=>e.device.medium} {
    padding-top: 0rem;
    > button {
      @media ${({theme:e})=>e.device.medium} {
        width: unset;
      }
    }
  }

  ${({reversed:e})=>e?"flex-grow: 1;":"flex-direction: row-reverse;"}

  > a {
    margin: 0 -0.5rem 0 0;
    @media ${({theme:e})=>e.device.medium} {
      margin: 0;
    }
  }
`,y=l.Ay.span`
  width: 1.5rem;
`,b=({type:e,primaryBtnLabel:t,primaryBtnDisable:n,onPrimaryBtnClick:r=()=>{},secondaryBtnLabel:l,secondaryBtnDisable:d,secondaryBtnStyle:u="secondary",onSecondaryBtnClick:c=()=>{},extraActionAs:f="link",extraActionLabel:p,extraActionTarget:m="#",extraActionOnClick:h=()=>{},extraActionDisable:y})=>(i()("blocking"!==e||"blocking"===e&&t,"You chose type blocking but no primary button label is given. You need to pass one, since no close button is shown."),(0,o.jsx)(g,{children:(0,o.jsxs)(v,Object.assign({hasTwoBtns:!!t&&!!l},{children:[t&&(0,o.jsx)(a.$,Object.assign({disabled:n,onClick:r,stylingType:"primary"},{children:t})),l&&(0,o.jsx)(a.$,Object.assign({disabled:d,onClick:c,stylingType:u},{children:l})),p&&(0,o.jsxs)(v,Object.assign({reversed:!0},{children:["link"===f&&(0,o.jsx)(s.N,{stylingType:"primary",href:m,onClick:h,text:p,disabled:y,alignByContent:"left"}),"button"===f&&(0,o.jsx)(a.$,Object.assign({disabled:y,alignByContent:"left",onClick:h,stylingType:"flatHighlight"},{children:p}))]}))]}))}));var O=n(33860),w=n(16230);let x={warning:"warning_moderate",error:"warning_severe",info:"info",success:"checkmark"},j=({headerLabel:e,titleLabel:t,headerSymbol:n,widerMobilePadding:r,headerBgColor:i,headerColor:s,closeDialogue:l,onClose:d=()=>{},headerIconColor:u,hideClose:c=!1,type:f})=>{let h=()=>{l(),d()};return(0,o.jsxs)(o.Fragment,{children:[e&&(0,o.jsxs)(p,Object.assign({type:f,bgColor:i,$color:s,iconColor:u},{children:["custom"===f?void 0!==n&&(0,o.jsx)(O.I,{symbol:n||x[f]||"warning_info",width:"1.5rem"}):(0,o.jsx)(O.I,{symbol:n||x[f]||"warning_info",width:"1.5rem"}),(0,o.jsx)("span",{children:(0,o.jsx)(w.Z,Object.assign({variant:"h4",fontWeight:500},{children:e}))}),"custom"===f&&void 0===n&&(0,o.jsx)(y,{}),c||(0,o.jsx)(a.$,{onClick:h,stylingType:"icon",symbol:"close"})]})),!e&&t&&(0,o.jsxs)(m,Object.assign({widerPadding:r},{children:[(0,o.jsx)("span",{children:(0,o.jsx)(w.Z,Object.assign({variant:"h6",fontWeight:500},{children:t}))}),!c&&(0,o.jsx)(a.$,{onClick:h,stylingType:"icon",symbol:"close"})]})),!e&&!t&&!c&&"blocking"!==f&&(0,o.jsxs)(m,Object.assign({widerPadding:r,noTitle:!t},{children:[(0,o.jsx)("span",{}),(0,o.jsx)(a.$,{onClick:h,stylingType:"icon",symbol:"close"})]}))]})},C=e=>{let{body:t,size:n="m",widerMobilePadding:r,headerLabel:i,titleLabel:a,type:s,previewId:l,hideClose:u,noFooterButton:p,fullscreen:m}=e;return(0,o.jsx)(d,Object.assign({size:n,fullscreen:m,className:"gdds-dialogue"},{children:(0,o.jsx)(c,Object.assign({size:n,fullscreen:m},{children:(0,o.jsxs)(f,Object.assign({size:n,"data-preview-id":l,fullscreen:m},{children:[(0,o.jsx)(j,Object.assign({},e)),(0,o.jsxs)(h,Object.assign({widerPadding:r,noHeader:!i&&!a,hideClose:!i&&u,noTitle:!a,type:s},{children:[(0,o.jsx)(o.Fragment,{children:t}),!p&&(0,o.jsx)(b,Object.assign({},e))]}))]}))}))}))}},69479:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){i&&(i.removeAttribute?i.removeAttribute("aria-hidden"):null!=i.length?i.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(i).forEach(function(e){return e.removeAttribute("aria-hidden")})),i=null},t.log=function(){},t.assertNodeList=a,t.setElement=function(e){var t=e;if("string"==typeof t&&r.canUseDOM){var n=document.querySelectorAll(t);a(n,t),t=n}return i=t||i},t.validateElement=s,t.hide=function(e){var t=!0,n=!1,o=void 0;try{for(var r,i=s(e)[Symbol.iterator]();!(t=(r=i.next()).done);t=!0)r.value.setAttribute("aria-hidden","true")}catch(e){n=!0,o=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw o}}},t.show=function(e){var t=!0,n=!1,o=void 0;try{for(var r,i=s(e)[Symbol.iterator]();!(t=(r=i.next()).done);t=!0)r.value.removeAttribute("aria-hidden")}catch(e){n=!0,o=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw o}}},t.documentNotReadyOrSSRTesting=function(){i=null};var o=function(e){return e&&e.__esModule?e:{default:e}}(n(94274)),r=n(93091),i=null;function a(e,t){if(!e||!e.length)throw Error("react-modal: No elements were found for selector "+t+".")}function s(e){var t=e||i;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,o.default)(!1,"react-modal: App element is not defined. Please use `Modal.setAppElement(el)` or set `appElement={el}`. This is needed so screen readers don't see main content when modal is opened. It is not recommended, but you can opt-out by setting `ariaHideApp={false}`."),[])}},78257:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(12115),a=m(i),s=m(n(47650)),l=m(n(38637)),d=m(n(29667)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(69479)),c=n(93091),f=m(c),p=n(87760);function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}var g=t.portalClassName="ReactModalPortal",v=t.bodyOpenClassName="ReactModal__Body--open",y=c.canUseDOM&&void 0!==s.default.createPortal,b=function(e){return document.createElement(e)},O=function(){return y?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer},w=function(e){function t(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);for(var e,n,r,i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=r=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.removePortal=function(){y||s.default.unmountComponentAtNode(r.node);var e=(0,r.props.parentSelector)();e&&e.contains(r.node)?e.removeChild(r.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},r.portalRef=function(e){r.portal=e},r.renderPortal=function(e){var n=O()(r,a.default.createElement(d.default,o({defaultStyles:t.defaultStyles},e)),r.node);r.portalRef(n)},h(r,n)}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){c.canUseDOM&&(y||(this.node=b("div")),this.node.className=this.props.portalClassName,(0,this.props.parentSelector)().appendChild(this.node),y||this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:(0,e.parentSelector)(),nextParent:(0,this.props.parentSelector)()}}},{key:"componentDidUpdate",value:function(e,t,n){if(c.canUseDOM){var o=this.props,r=o.isOpen,i=o.portalClassName;e.portalClassName!==i&&(this.node.className=i);var a=n.prevParent,s=n.nextParent;s!==a&&(a.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||r)&&(y||this.renderPortal(this.props))}}},{key:"componentWillUnmount",value:function(){if(c.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return c.canUseDOM&&y?(!this.node&&y&&(this.node=b("div")),O()(a.default.createElement(d.default,o({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){u.setElement(e)}}]),t}(i.Component);w.propTypes={isOpen:l.default.bool.isRequired,style:l.default.shape({content:l.default.object,overlay:l.default.object}),portalClassName:l.default.string,bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,className:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),overlayClassName:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),appElement:l.default.oneOfType([l.default.instanceOf(f.default),l.default.instanceOf(c.SafeHTMLCollection),l.default.instanceOf(c.SafeNodeList),l.default.arrayOf(l.default.instanceOf(f.default))]),onAfterOpen:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,ariaHideApp:l.default.bool,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,parentSelector:l.default.func,aria:l.default.object,data:l.default.object,role:l.default.string,contentLabel:l.default.string,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func},w.defaultProps={isOpen:!1,portalClassName:g,bodyOpenClassName:v,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return a.default.createElement("div",e,t)},contentElement:function(e,t){return a.default.createElement("div",e,t)}},w.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(w),t.default=w},78353:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e&&e.__esModule?e:{default:e}}(n(78257)).default,e.exports=t.default},79737:(e,t,n)=>{"use strict";let o;n.d(t,{A:()=>s});let r={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},i=new Uint8Array(16),a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));let s=function(e,t,n){if(r.randomUUID&&!t&&!e)return r.randomUUID();let s=(e=e||{}).random||(e.rng||function(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(i)})();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=s[e];return t}return function(e,t=0){return a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]}(s)}},83838:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){r=[]},t.log=function(){},t.handleBlur=s,t.handleFocus=l,t.markForFocusLater=function(){r.push(document.activeElement)},t.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{0!==r.length&&(t=r.pop()).focus({preventScroll:e});return}catch(e){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},t.popWithoutFocus=function(){r.length>0&&r.pop()},t.setupScopedFocus=function(e){i=e,window.addEventListener?(window.addEventListener("blur",s,!1),document.addEventListener("focus",l,!0)):(window.attachEvent("onBlur",s),document.attachEvent("onFocus",l))},t.teardownScopedFocus=function(){i=null,window.addEventListener?(window.removeEventListener("blur",s),document.removeEventListener("focus",l)):(window.detachEvent("onBlur",s),document.detachEvent("onFocus",l))};var o=function(e){return e&&e.__esModule?e:{default:e}}(n(90330)),r=[],i=null,a=!1;function s(){a=!0}function l(){a&&(a=!1,i&&setTimeout(function(){!i.contains(document.activeElement)&&((0,o.default)(i)[0]||i).focus()},0))}},87760:(e,t,n)=>{"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState((function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}).bind(this))}function i(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}function a(e){var t=e.prototype;if(!t||!t.isReactComponent)throw Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,a=null,s=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?a="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?s="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==a||null!==s)throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+(e.displayName||e.name)+" uses "+("function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()")+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==a?"\n  "+a:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var l=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;l.call(this,e,t,o)}}return e}n.r(t),n.d(t,{polyfill:()=>a}),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},90330:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){return[].slice.call(t.querySelectorAll("*"),0).reduce(function(t,n){return t.concat(n.shadowRoot?e(n.shadowRoot):[n])},[]).filter(o)};var n=/^(input|select|textarea|button|object|iframe)$/;function o(e){var t,o=e.getAttribute("tabindex");null===o&&(o=void 0);var r=isNaN(o);return(r||o>=0)&&(t=e.nodeName.toLowerCase(),(n.test(t)&&!e.disabled||"a"===t&&e.href||!r)&&function(e){for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),function(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var n=window.getComputedStyle(e),o=n.getPropertyValue("display");return t?"contents"!==o&&("visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0):"none"===o}catch(e){return console.warn("Failed to inspect element style"),!1}}(t))return!1;t=t.parentNode}return!0}(e))}e.exports=t.default},93091:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var o=function(e){return e&&e.__esModule?e:{default:e}}(n(49690)).default,r=o.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=o.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=o.canUseDOM?window.NodeList:{},t.canUseDOM=o.canUseDOM,t.default=r},93526:(e,t,n)=>{"use strict";n.d(t,{w:()=>M});var o=n(95155),r=n(12115),i=n(43683),a=n(8047),s=n(9428),l=n(43186),d=n(85023),u=n(52491),c=n.n(u),f=n(93411);let p=f.Ay.ul`
  margin: 0;
  display: flex;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  transform: translateX(-0.625rem);
  margin-top: -1rem;

  @media ${({theme:e})=>e.device.medium} {
    margin-top: 0;
  }

  @media ${({theme:e})=>e.device.large} {
    transform: translateX(0.5rem);
  }

  > li {
    margin-right: 0.5rem;
    margin-top: 1rem;

    @media ${({theme:e})=>e.device.medium} {
      margin-top: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  & button {
    @media ${({theme:e})=>e.device.medium} {
      width: 2.5rem;
      height: 2.5rem;
    }

    &:active {
      svg {
        path {
          fill: ${({theme:e})=>e.colors.white};
        }
        .pinterest__path1 {
          fill: ${({theme:e})=>e.colors.grey15};
        }
      }
    }

    svg {
      width: 1.5rem;
      path {
        fill: ${({theme:e})=>e.colors.grey15};
      }
      .pinterest__path1 {
        fill: ${({theme:e})=>e.colors.white};
      }
    }
  }
`,m=f.Ay.div`
  > button {
    & img {
      width: 1.5rem;
      height: 1.5rem;
    }
    & img[data-set='url'] {
      display: block;
    }
    & img[data-set='urlActive'] {
      display: none;
    }

    &:active {
      & img[data-set='url'] {
        display: none;
      }
      & img[data-set='urlActive'] {
        display: block;
      }
    }
  }
`,h=({label:e,items:t,previewId:n,previewIdExtractor:r})=>(0,o.jsx)("nav",Object.assign({"aria-label":e},{children:(0,o.jsx)(p,Object.assign({"data-preview-id":n},{children:t.map((e,t)=>(0,o.jsx)("li",Object.assign({"data-preview-id":"function"==typeof r?r(e,t):void 0},{children:"withCustomIcon"===e.type?(0,o.jsxs)(m,{children:[(0,o.jsxs)(d.$,Object.assign({stylingType:"flat",isIcon:!0},e,{children:[e.urlActive&&(0,o.jsx)("img",{src:e.urlActive,"data-set":"urlActive",alt:e.target})," ",(0,o.jsx)("img",{src:e.url,"data-set":"url",alt:e.target})]}))," "]}):(0,o.jsx)(d.$,Object.assign({stylingType:"flat",isIcon:!0},e))}),c()(e.target+e.symbol)))}))})),g=f.Ay.footer`
  min-height: 16.25rem;
  position: relative;
`,v=f.Ay.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 4rem 0;

  @media ${({theme:e})=>e.device.medium} {
    justify-content: flex-end;
    padding: 4rem 0 2rem;
  }

  @media ${({theme:e})=>e.device.large} {
    justify-content: flex-start;
  }
`,y=f.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${({theme:e})=>e.device.medium} {
    flex-direction: row;
    min-height: 3.75rem;
  }

  &:first-child {
    @media ${({theme:e})=>e.device.medium} {
      justify-content: space-between;
    }
  }

  &:not(:first-child) {
    flex-direction: column-reverse;
    margin-top: 3rem;

    @media ${({theme:e})=>e.device.medium} {
      flex-direction: row;
      margin-top: 1rem;
      flex-wrap: wrap-reverse;
      min-height: 2.5rem;

      ul {
        margin-left: ${({wrapped:e})=>e?"-0.5rem":"0"};
      }

      .copyright {
        ${({wrapped:e})=>e?"margin-top:0.5rem;":""}
      }
    }

    @media ${({theme:e})=>e.device.large} {
      justify-content: flex-end;
      .copyright {
        ${({wrapped:e})=>e?"margin-right: 0rem;":""}
      }
    }
  }
`;(0,f.Ay)(e=>(0,o.jsx)(a.m,Object.assign({},e)))`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  box-sizing: border-box;
  width: 100vw;
  max-width: 90rem;
  margin: 0 auto;

  @media ${({theme:e})=>e.device.medium} {
    min-height: 16.25rem;
    padding: 64px 1.5rem 0;
  }
`;var b=n(16230);let O=(0,f.Ay)(b.Z)`
  display: flex;
  height: 1.25rem;
  align-items: center;
  color: ${({theme:e})=>e.colors.grey14};
  &&& {
    font-size: ${({theme:e})=>e.fontTokens.font12[0]};
    font-weight: ${({theme:e})=>e.fontWeights.regular};
  }
  margin-top: 0.5rem;
  @media ${({theme:e})=>e.device.medium} {
    height: auto;
    margin-right: ${({$withMarginRight:e})=>e?"1rem":"0"};
    margin-top: 0;
  }
`,w=({text:e,withMarginRight:t,previewId:n})=>(0,o.jsx)(O,Object.assign({"data-preview-id":n,$withMarginRight:t,className:"copyright",hasHtml:!0},{children:e}));var x=n(2085);let j=f.Ay.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  @media ${({theme:e})=>e.device.medium} {
    margin-bottom: 0;
  }

  &&& > a {
    box-sizing: border-box;
    height: 2.75rem;
    align-items: center;
    margin-right: auto;

    @media ${({theme:e})=>e.device.medium} {
      height: 2.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`,C=f.Ay.span`
  display: flex;
  align-self: center;
  box-sizing: border-box;
  height: 2.75rem;
  align-items: center;
  margin-right: auto;

  @media ${({theme:e})=>e.device.medium} {
    height: 2.5rem;
    padding-right: 0.5rem;
  }
`,$=({title:e,region:t,target:n,windowTarget:r,onClick:i,previewId:a})=>{let s=(0,f.DP)();return(0,o.jsxs)(j,Object.assign({"data-preview-id":a},{children:[(0,o.jsx)(b.Z,Object.assign({size:{xsmall:s.fontTokens.font12},fontWeight:s.fontWeights.bold,tag:"strong"},{children:e})),n?(0,o.jsx)(x.N,{alignByContent:"left",text:t,target:n,href:n,standardFontSize:!0,onClick:i,stylingType:"primary",windowTarget:r}):(0,o.jsx)(C,{children:t})]}))},S=f.Ay.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media ${({theme:e})=>e.device.medium} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media ${({theme:e})=>e.device.large} {
    transform: translateX(0.5rem);
  }
`,_=f.Ay.li`
  cursor: pointer;
  transform: translateX(-0.5rem);

  &&& > a {
    min-width: unset;
  }

  &&& > button {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    min-width: unset;
  }

  @media ${({theme:e})=>e.device.medium} {
    transform: none;
  }
`,E=({title:e,target:t,className:n,onClick:r})=>(0,o.jsx)(_,{children:(0,o.jsx)(x.N,{href:t,standardFontSize:!0,stylingType:"secondary",hasArrow:!1,target:t,text:e,disabled:!1,className:n,onClick:r})}),A=({label:e,items:t,previewId:n,previewIdExtractor:r})=>(0,o.jsx)("nav",Object.assign({"aria-label":e},{children:(0,o.jsx)(S,Object.assign({"data-preview-id":n},{children:t.map(({title:e,target:t,className:n,onClick:i},a)=>(0,o.jsx)(E,{"data-preview-id":"function"==typeof r?r({title:e,target:t,className:n},a):void 0,className:n,title:e,target:t,onClick:i},e.replace(/\W+/,"")))}))})),M=({copyright:e,regionSelect:t,socialNavigation:n,metaNavigation:d,maxContentWidth:u,toTopButton:c})=>{let f=(0,r.useRef)(null),[p,m]=(0,r.useState)(!1),b=Object.assign({items:[],label:""},n),O=Object.assign({items:[],label:""},d);function x(){null!==f.current&&m(f.current.getBoundingClientRect().height>40)}return(0,r.useEffect)(()=>{x()},[f.current]),(0,r.useEffect)(()=>(window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)),[]),(0,o.jsxs)(g,{children:[(0,o.jsx)(i.c,{}),(0,o.jsx)(a.m,Object.assign({maxContentWidth:u},{children:(0,o.jsx)(s.f,{children:(0,o.jsx)(l.f,{children:(0,o.jsxs)(v,{children:[(0,o.jsxs)(y,{children:[t&&(0,o.jsx)($,Object.assign({},t)),n&&(0,o.jsx)(h,Object.assign({},b))]}),(0,o.jsxs)(y,Object.assign({ref:f,wrapped:p},{children:[(0,o.jsx)(w,Object.assign({withMarginRight:!!n},e)),d&&(0,o.jsx)(A,Object.assign({},O))]}))]})})})})),(0,o.jsx)(o.Fragment,{children:r.isValidElement(c)?c:null})]})}},94274:e=>{"use strict";e.exports=function(){}},99695:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){var e=document.getElementsByTagName("html")[0];for(var t in n)r(e,n[t]);var i=document.body;for(var a in o)r(i,o[a]);n={},o={}},t.log=function(){};var n={},o={};function r(e,t){e.classList.remove(t)}var i=function(e,t,n){n.forEach(function(n){t[n]||(t[n]=0),t[n]+=1,e.add(n)})},a=function(e,t,n){n.forEach(function(n){t[n]&&(t[n]-=1),0===t[n]&&e.remove(n)})};t.add=function(e,t){return i(e.classList,"html"==e.nodeName.toLowerCase()?n:o,t.split(" "))},t.remove=function(e,t){return a(e.classList,"html"==e.nodeName.toLowerCase()?n:o,t.split(" "))}}}]);
//# sourceMappingURL=7830-804fc7ed658f2a51.js.map