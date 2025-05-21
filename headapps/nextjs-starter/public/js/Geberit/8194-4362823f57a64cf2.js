(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8194],{801:(e,r,t)=>{var n=t(85855),o=t(23633);e.exports=function(e){return o(n(e).toLowerCase())}},4217:(e,r,t)=>{var n=t(36713),o=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},7985:(e,r,t)=>{e.exports="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g},8047:(e,r,t)=>{"use strict";t.d(r,{m:()=>o});var n=t(93411);let o=n.Ay.div`
  position: relative;
  ${({maxContentWidth:e,fluid:r})=>r?"width: 100%":`max-width: ${e||"90rem"}`};
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 0 auto;
  box-sizing: border-box;

  @media ${({theme:e})=>e.device.medium} {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
`},9428:(e,r,t)=>{"use strict";t.d(r,{f:()=>i});var n=t(93411),o=t(63838);let i=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;

  @media ${({theme:e})=>e.device.medium} {
    margin-right: -0.75rem;
    margin-left: -0.75rem;
  }

  ${({reverse:e,theme:r})=>e?"object"==typeof e?Object.keys(e).map(t=>`
        @media ${r.device[o.G[t]]} {
          flex-direction: ${e[t]?"row-reverse":"row"};
          flex-wrap: ${e[t]?"wrap-reverse":"wrap"};
        }
      `):`
      flex-direction: row-reverse;
      flex-wrap: wrap-reverse;
    `:`
      flex-direction: row;
      flex-wrap: wrap;
    `}

  ${({align:e,theme:r})=>e?"object"==typeof e?Object.keys(e).map(t=>`
        @media ${r.device[o.G[t]]} {
          align-items: ${e[t]};
        }
      `):`align-items: ${e};`:""}

  ${({justify:e,theme:r})=>e?"object"==typeof e?Object.keys(e).map(t=>`
        @media ${r.device[o.G[t]]} {
          justify-content: ${e[t]};
        }
      `):`justify-content: ${e};`:""}
`},16230:(e,r,t)=>{"use strict";t.d(r,{Z:()=>v});var n=t(95155),o=t(1574);let i={h1:{tag:"h1",size:{xsmall:o.$7.fontTokens.font05,medium:o.$7.fontTokens.font03,large:o.$7.fontTokens.font02,xlarge:o.$7.fontTokens.font01}},h2:{tag:"h2",size:{xsmall:o.$7.fontTokens.font06,medium:o.$7.fontTokens.font05,large:o.$7.fontTokens.font04,xlarge:o.$7.fontTokens.font03}},h3:{tag:"h3",size:{xsmall:o.$7.fontTokens.font07,medium:o.$7.fontTokens.font06,large:o.$7.fontTokens.font05,xlarge:o.$7.fontTokens.font04}},h4:{tag:"h4",size:{xsmall:o.$7.fontTokens.font08,medium:o.$7.fontTokens.font07,large:o.$7.fontTokens.font06,xlarge:o.$7.fontTokens.font05}},h5:{tag:"h5",size:{xsmall:o.$7.fontTokens.font09,medium:o.$7.fontTokens.font08,large:o.$7.fontTokens.font07,xlarge:o.$7.fontTokens.font07}},h6:{tag:"h6",size:{xsmall:o.$7.fontTokens.font10,medium:o.$7.fontTokens.font09,large:o.$7.fontTokens.font09,xlarge:o.$7.fontTokens.font09}},h7:{tag:"h6",size:{xsmall:o.$7.fontTokens.font10,medium:o.$7.fontTokens.font10,large:o.$7.fontTokens.font10,xlarge:o.$7.fontTokens.font10}},p1:{tag:"p",size:{xsmall:o.$7.fontTokens.font11}},p2:{tag:"p",size:{xsmall:o.$7.fontTokens.font12}},label1:{tag:"label",size:{xsmall:o.$7.fontTokens.font13}},label2:{tag:"label",size:{xsmall:o.$7.fontTokens.font14}}};var a=t(93411),s=t(12115),u=t(87727),c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>r.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t};let l=s.forwardRef((e,r)=>{var{tag:t="div",children:o,hasHtml:i,isUppercase:a}=e,s=c(e,["tag","children","hasHtml","isUppercase"]);return i?(0,n.jsx)(u.g,Object.assign({},s,{as:t,content:o,ref:r})):(0,n.jsx)(t,Object.assign({},s,{className:`gdds-element ${s.className||""}`,ref:r},{children:o}))});l.displayName="DynamicTypography";var f=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>r.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t};let d={size:{xsmall:["1rem","1.5rem"]},fontWeight:400,isUppercase:!1},m=(0,a.Ay)(e=>{var{tag:r="div"}=e,t=f(e,["tag"]);return(0,n.jsx)(l,Object.assign({},t,{tag:r}))})`
  &&& {
    font-family: ${({theme:e})=>e.fontTokens.defaultFont};
    font-size: ${({size:e=d.size})=>{var r,t;return null!==(t=null===(r=null==e?void 0:e.xsmall)||void 0===r?void 0:r[0])&&void 0!==t?t:"1rem"}};
    font-weight: ${({fontWeight:e=d.fontWeight})=>e};
    line-height: ${({size:e=d.size})=>{var r,t;return null!==(t=null===(r=null==e?void 0:e.xsmall)||void 0===r?void 0:r[1])&&void 0!==t?t:"1.5rem"}};
    text-transform: ${({isUppercase:e=d.isUppercase})=>e?"uppercase":"inherit"};

    @media ${({theme:e})=>e.device.medium} {
      ${({size:e})=>(null==e?void 0:e.medium)?`font-size: ${e.medium[0]}; line-height: ${e.medium[1]}`:""}
    }

    @media ${({theme:e})=>e.device.large} {
      ${({size:e})=>(null==e?void 0:e.large)?`font-size: ${e.large[0]}; line-height: ${e.large[1]}`:""}
    }

    @media ${({theme:e})=>e.device.xlarge} {
      ${({size:e})=>(null==e?void 0:e.xlarge)?`font-size: ${e.xlarge[0]}; line-height: ${e.xlarge[1]}`:""}
    }
  }
`;var p=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>r.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t};let v=e=>{var{variant:r,previewId:t}=e,o=p(e,["variant","previewId"]);return(0,n.jsx)(m,Object.assign({"data-preview-id":t},i[r],o))}},16613:(e,r,t)=>{var n=t(24376),o=t(57213),i=t(39608),a=t(70771),s=1/0,u=n?n.prototype:void 0,c=u?u.toString:void 0;e.exports=function e(r){if("string"==typeof r)return r;if(i(r))return o(r,e)+"";if(a(r))return c?c.call(r):"";var t=r+"";return"0"==t&&1/r==-s?"-0":t}},17855:e=>{var r="\ud800-\udfff",t="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",n="\ud83c[\udffb-\udfff]",o="[^"+r+"]",i="(?:\ud83c[\udde6-\uddff]){2}",a="[\ud800-\udbff][\udc00-\udfff]",s="(?:"+t+"|"+n+")?",u="[\\ufe0e\\ufe0f]?",c="(?:\\u200d(?:"+[o,i,a].join("|")+")"+u+s+")*",l=RegExp(n+"(?="+n+")|"+("(?:"+[o+t+"?",t,i,a,"["+r+"]"].join("|"))+")"+(u+s+c),"g");e.exports=function(e){return e.match(l)||[]}},20570:(e,r,t)=>{var n=t(24376),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=n?n.toStringTag:void 0;e.exports=function(e){var r=i.call(e,s),t=e[s];try{e[s]=void 0;var n=!0}catch(e){}var o=a.call(e);return n&&(r?e[s]=t:delete e[s]),o}},23633:(e,r,t)=>{e.exports=t(62962)("toUpperCase")},24376:(e,r,t)=>{e.exports=t(82500).Symbol},35695:(e,r,t)=>{"use strict";var n=t(18999);t.o(n,"useParams")&&t.d(r,{useParams:function(){return n.useParams}}),t.o(n,"usePathname")&&t.d(r,{usePathname:function(){return n.usePathname}}),t.o(n,"useRouter")&&t.d(r,{useRouter:function(){return n.useRouter}}),t.o(n,"useSearchParams")&&t.d(r,{useSearchParams:function(){return n.useSearchParams}}),t.o(n,"useServerInsertedHTML")&&t.d(r,{useServerInsertedHTML:function(){return n.useServerInsertedHTML}})},36713:e=>{var r=/\s/;e.exports=function(e){for(var t=e.length;t--&&r.test(e.charAt(t)););return t}},36815:(e,r,t)=>{var n=t(4217),o=t(67460),i=t(70771),a=0/0,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return a;if(o(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=o(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var t=u.test(e);return t||c.test(e)?l(e.slice(2),t?2:8):s.test(e)?a:+e}},37929:e=>{e.exports=function(e,r,t){var n=-1,o=e.length;r<0&&(r=-r>o?0:o+r),(t=t>o?o:t)<0&&(t+=o),o=r>t?0:t-r>>>0,r>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+r];return i}},38637:(e,r,t)=>{e.exports=t(79399)()},39608:e=>{e.exports=Array.isArray},43186:(e,r,t)=>{"use strict";t.d(r,{f:()=>a});var n=t(93411),o=t(63838);let i={xs:4,s:4,m:8,l:12,xl:12},a=n.Ay.div.withConfig({shouldForwardProp:e=>!["size","theme","order","justify","align","offset","reverse","xs","s","m","l","xl"].includes(e)})`
  flex-basis: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: ${({flex:e})=>e?"flex":"block"};
  padding-right: 0.5rem;
  padding-left: 0.5rem;

  @media ${({theme:e})=>e.device.medium} {
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }

  ${({size:e,theme:r})=>{let t=e;return(Array.isArray(t)||"object"==typeof t||(t=[4,8,12]),Array.isArray(t))?`
        ${t.length>=1?`
          flex-basis: ${t[0]/4*100}%;
          max-width: ${t[0]/4*100}%;
          `:""}
        ${t.length>=2?`
          @media ${r.device.medium} {
            flex-basis: ${t[1]/8*100}%;
            max-width: ${t[1]/8*100}%;
          }`:""}

          ${t.length>=3?`
          @media ${r.device.large} {
            flex-basis: ${t[2]/12*100}%;
            max-width: ${t[2]/12*100}%;
          }`:""}

          ${4===t.length?`
          @media ${r.device.xlarge} {
            flex-basis: ${t[3]/12*100}%;
            max-width: ${t[3]/12*100}%;
          }`:""}
      `:`${t.xs?`
      flex-basis: ${t.xs/4*100}%;
      max-width: ${t.xs/4*100}%;
      `:""}
    ${t.s?`
      @media ${r.device.small} {
        flex-basis: ${t.s/4*100}%;
        max-width: ${t.s/4*100}%;
      }`:""}

    ${t.m?`
      @media ${r.device.medium} {
        flex-basis: ${t.m/8*100}%;
        max-width: ${t.m/8*100}%;
      }`:""}

    ${t.l?`
      @media ${r.device.large} {
        flex-basis: ${t.l/12*100}%;
        max-width: ${t.l/12*100}%;
      }`:""}

    ${t.xl?`
      @media ${r.device.xlarge} {
        flex-basis: ${t.xl/12*100}%;
        max-width: ${t.xl/12*100}%;
      }`:""}
    `}}

  ${({reverse:e,theme:r})=>e?"object"==typeof e?Object.keys(e).map(t=>`
        @media ${r.device[o.G[t]]} {
          flex-direction: ${e[t]?"column-reverse":"column"};
        }
      `):`
      flex-direction: column-reverse;
    `:`
      flex-direction: column;
    `}

  ${({offset:e,theme:r})=>e&&"object"==typeof e?Object.keys(e).map(t=>`
          @media ${r.device[o.G[t]]} {
            margin-left: ${e[t]/i[t]*100}%;
          }
        `):""}

  ${({order:e,theme:r})=>e?"object"==typeof e?Object.keys(e).map(t=>`
                @media ${r.device[o.G[t]]} {
                  order: ${e[t]};
                }
              `):`order: ${e};`:""}

  ${({justify:e,theme:r})=>e?"object"==typeof e?Object.keys(e).map(t=>`
            @media ${r.device[o.G[t]]} {
              justify-content: ${e[t]};
            }
          `):`justify-content: ${e};`:""}


  ${({align:e,theme:r})=>e?"object"==typeof e?Object.keys(e).map(t=>`
            @media ${r.device[o.G[t]]} {
              align-items: ${e[t]};
            }
          `):`align-items: ${e};`:""}
`},43683:(e,r,t)=>{"use strict";t.d(r,{c:()=>a});var n=t(95155),o=t(93411);let i=o.Ay.hr`
  box-sizing: border-box;
  border: none;
  margin-block-start: 0;
  margin-block-end: 0;

  ${({alignment:e})=>"vertical"===e?`
        height: 100%;
        width: 1px;
        border-left: 1px solid;`:`
        width: 100%;
        height: 1px;
        border-top: 1px solid;`}

  ${({inverted:e,theme:r})=>e?`border-color: rgba(${r.colors.transparentWhite},0.36);`:`border-color: rgba(${r.colors.transparentBlack},0.16);`}
`;function a({alignment:e="horizontal",inverted:r}){return(0,n.jsx)(i,{alignment:e,inverted:r})}},45687:(e,r,t)=>{"use strict";var n,o;n=t(54592),o=t(49506),r.version=n.version,r.renderToString=n.renderToString,r.renderToStaticMarkup=n.renderToStaticMarkup,r.renderToReadableStream=o.renderToReadableStream,o.resume&&(r.resume=o.resume)},45964:(e,r,t)=>{var n=t(67460),o=t(76685),i=t(36815),a=Math.max,s=Math.min;e.exports=function(e,r,t){var u,c,l,f,d,m,p=0,v=!1,g=!1,x=!0;if("function"!=typeof e)throw TypeError("Expected a function");function $(r){var t=u,n=c;return u=c=void 0,p=r,f=e.apply(n,t)}function h(e){var t=e-m,n=e-p;return void 0===m||t>=r||t<0||g&&n>=l}function b(){var e,t,n,i=o();if(h(i))return y(i);d=setTimeout(b,(e=i-m,t=i-p,n=r-e,g?s(n,l-t):n))}function y(e){return(d=void 0,x&&u)?$(e):(u=c=void 0,f)}function w(){var e,t=o(),n=h(t);if(u=arguments,c=this,m=t,n){if(void 0===d)return p=e=m,d=setTimeout(b,r),v?$(e):f;if(g)return clearTimeout(d),d=setTimeout(b,r),$(m)}return void 0===d&&(d=setTimeout(b,r)),f}return r=i(r)||0,n(t)&&(v=!!t.leading,l=(g="maxWait"in t)?a(i(t.maxWait)||0,r):l,x="trailing"in t?!!t.trailing:x),w.cancel=function(){void 0!==d&&clearTimeout(d),p=0,u=m=c=d=void 0},w.flush=function(){return void 0===d?f:y(o())},w}},48611:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},48659:(e,r,t)=>{var n=t(37929);e.exports=function(e,r,t){var o=e.length;return t=void 0===t?o:t,!r&&t>=o?e:n(e,r,t)}},49690:(e,r,t)=>{var n;!function(){"use strict";var o=!!("undefined"!=typeof window&&window.document&&window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!!(window.addEventListener||window.attachEvent),canUseViewport:o&&!!window.screen};void 0!==(n=(function(){return i}).call(r,t,r,e))&&(e.exports=n)}()},50851:e=>{e.exports=function(e){return e.split("")}},57213:e=>{e.exports=function(e,r){for(var t=-1,n=null==e?0:e.length,o=Array(n);++t<n;)o[t]=r(e[t],t,e);return o}},62962:(e,r,t)=>{var n=t(48659),o=t(65531),i=t(75145),a=t(85855);e.exports=function(e){return function(r){var t=o(r=a(r))?i(r):void 0,s=t?t[0]:r.charAt(0),u=t?n(t,1).join(""):r.slice(1);return s[e]()+u}}},63838:(e,r,t)=>{"use strict";t.d(r,{G:()=>n});let n={xs:"xsmall",s:"small",m:"medium",l:"large",xl:"xlarge"}},63974:(e,r,t)=>{"use strict";t.d(r,{YQ:()=>o,d7:()=>s});var n=t(12115);function o(e,r,t){var o=this,i=(0,n.useRef)(null),a=(0,n.useRef)(0),s=(0,n.useRef)(null),u=(0,n.useRef)([]),c=(0,n.useRef)(),l=(0,n.useRef)(),f=(0,n.useRef)(e),d=(0,n.useRef)(!0);f.current=e;var m="undefined"!=typeof window,p=!r&&0!==r&&m;if("function"!=typeof e)throw TypeError("Expected a function");r=+r||0;var v=!!(t=t||{}).leading,g=!("trailing"in t)||!!t.trailing,x="maxWait"in t,$="debounceOnServer"in t&&!!t.debounceOnServer,h=x?Math.max(+t.maxWait||0,r):null;return(0,n.useEffect)(function(){return d.current=!0,function(){d.current=!1}},[]),(0,n.useMemo)(function(){var e=function(e){var r=u.current,t=c.current;return u.current=c.current=null,a.current=e,l.current=f.current.apply(t,r)},t=function(e,r){p&&cancelAnimationFrame(s.current),s.current=p?requestAnimationFrame(e):setTimeout(e,r)},n=function(e){if(!d.current)return!1;var t=e-i.current;return!i.current||t>=r||t<0||x&&e-a.current>=h},b=function(r){return s.current=null,g&&u.current?e(r):(u.current=c.current=null,l.current)},y=function e(){var o=Date.now();if(n(o))return b(o);if(d.current){var s=r-(o-i.current);t(e,x?Math.min(s,h-(o-a.current)):s)}},w=function(){if(m||$){var f=Date.now(),p=n(f);if(u.current=[].slice.call(arguments),c.current=o,i.current=f,p){if(!s.current&&d.current)return a.current=i.current,t(y,r),v?e(i.current):l.current;if(x)return t(y,r),e(i.current)}return s.current||t(y,r),l.current}};return w.cancel=function(){s.current&&(p?cancelAnimationFrame(s.current):clearTimeout(s.current)),a.current=0,u.current=i.current=c.current=s.current=null},w.isPending=function(){return!!s.current},w.flush=function(){return s.current?b(Date.now()):l.current},w},[v,x,r,h,g,p,m,$])}function i(e,r){return e===r}function a(e,r){return r}function s(e,r,t){var s=t&&t.equalityFn||i,u=(0,n.useReducer)(a,e),c=u[0],l=u[1],f=o((0,n.useCallback)(function(e){return l(e)},[l]),r,t),d=(0,n.useRef)(e);return s(d.current,e)||(f(e),d.current=e),[c,f]}},64439:e=>{var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},65154:(e,r,t)=>{"use strict";t.d(r,{Mz:()=>l,cw:()=>c});var n=t(95155),o=t(33860),i=t(93411);let a=i.Ay.a`
  display: inline-flex;
  align-items: center;

  font-family: ${({theme:e})=>e.fontTokens.defaultFont};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  font-size: ${({theme:e})=>e.fontTokens.font12[0]};
  line-height: ${({theme:e})=>e.fontTokens.font12[1]};
  text-decoration: none;
  cursor: pointer;

  padding-right: ${({isAnchor:e,isBackToSection:r})=>e?"0":r?"1rem":"0.5rem"};

  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  box-sizing: border-box;

  background-color: ${({isAnchor:e,theme:r})=>e?`rgba(${r.colors.transparentBlack}, .8)`:"transparent"};
  color: ${({isAnchor:e,theme:r})=>e?r.colors.white:r.colors.black};

  ${({isAnchor:e})=>e?"width: 3rem;":""};
  ${({isAnchor:e})=>e?"height: 3rem;":"height: 2.5rem;"};

  ${({maxWidth:e})=>e?`
      max-width: ${e}px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `:""};

  ${({alignByContent:e})=>!1===e?"":"left"===e?"transform :translateX(-0.75rem);":"transform :translateX(0.75rem);"};

  span:not(:nth-child(2)) {
    width: ${({isAnchor:e})=>e?"3rem":"2rem"};
    display: flex;
    justify-content: center;

    svg {
      fill: ${({isAnchor:e,theme:r})=>e?r.colors.white:r.colors.black};
    }
  }

  &:hover {
    background-color: ${({isAnchor:e,theme:r})=>e?`rgba(${r.colors.transparentBlack}, .6)`:`rgba(${r.colors.transparentBlack}, .08)`};
  }

  &:focus-visible {
    border-color: ${({theme:e})=>e.colors.primaryLight};
    outline: ${({theme:e})=>`1px solid ${e.colors.primaryLight}`};
  }

  &:active {
    background-color: ${({isAnchor:e,theme:r})=>e?r.colors.black:r.colors.grey15};
    color: ${({theme:e})=>e.colors.white};

    span:not(:nth-child(2)) {
      svg {
        fill: ${({theme:e})=>e.colors.white};
      }
    }
  }
`;var s=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>r.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t};function u(e){var{iconName:r,text:t,alignByContent:i,isBackToSection:u}=e,c=s(e,["iconName","text","alignByContent","isBackToSection"]);let l=void 0===t;return(0,n.jsxs)(a,Object.assign({tabIndex:0,alignByContent:i||!1,isAnchor:l,isBackToSection:u},c,{ref:void 0,as:void 0},{children:[(0,n.jsx)(o.I,{width:"1.25rem",symbol:r}),t&&(0,n.jsx)("span",{children:t})]}))}function c(e){return(0,n.jsx)(u,Object.assign({},e,{text:e.text||"",iconName:"chevron_left",isBackToSection:!0}))}function l(e){return(0,n.jsx)(u,Object.assign({},e,{iconName:"chevron_up",text:void 0}))}},65531:e=>{var r=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return r.test(e)}},67460:e=>{e.exports=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)}},70771:(e,r,t)=>{var n=t(98233),o=t(48611);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},72948:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},75145:(e,r,t)=>{var n=t(50851),o=t(65531),i=t(17855);e.exports=function(e){return o(e)?i(e):n(e)}},76685:(e,r,t)=>{var n=t(82500);e.exports=function(){return n.Date.now()}},79399:(e,r,t)=>{"use strict";var n=t(72948);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,r,t,o,i,a){if(a!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},82500:(e,r,t)=>{var n=t(7985),o="object"==typeof self&&self&&self.Object===Object&&self;e.exports=n||o||Function("return this")()},85855:(e,r,t)=>{var n=t(16613);e.exports=function(e){return null==e?"":n(e)}},98233:(e,r,t)=>{var n=t(24376),o=t(20570),i=t(64439),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}}}]);
//# sourceMappingURL=8194-4362823f57a64cf2.js.map