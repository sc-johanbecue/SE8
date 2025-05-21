"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3161],{3161:(e,t,o)=>{o.d(t,{m:()=>b});var r=o(95155),n=o(12115),l=o(50795),i=o(93411);let a=i.Ay.div`
  ${({outlined:e,theme:t})=>e?`box-shadow: 0 2px 6px rgba(${t.colors.transparentBlack}, 0.26);`:""};
  padding: 0.5rem 0;
  background: ${({outlined:e})=>e?"white":"transparent"};
  max-height: 12.5rem;
  overflow-y: auto;
`,s=i.Ay.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;i.Ay.li`
  display: flex;
`;var d=o(33860);let c=i.Ay.span`
  height: auto;
  display: flex;
  align-items: center;
  font-weight: ${({theme:e,isAutocomplete:t})=>t?e.fontWeights.regular:e.fontWeights.medium};
  color: ${({$color:e})=>e};

  & strong {
    white-space: pre;
  }

  & .start {
    white-space: pre;
  }
`,p=i.Ay.li`
  &&& {
    padding: 0;
    margin: 0;
    display: flex;
    max-width: 100%;
    position: relative;
    align-items: center;
    overflow: hidden;
    word-break: break-word;
    min-height: 2.5rem;
    height: auto;
    ${({disabled:e})=>e?"":"cursor: pointer;"};
  }

  > span:first-child {
    left: 0;
    min-height: 2.5rem;
    height: auto;
  }

  > span:last-child {
    margin-left: ${({leftSpace:e,isActive:t,type:o})=>e&&!t&&"withIcon"===o?"2.5rem":e&&t?"0":"0.5rem"};
    height: auto;
  }

  > div {
    height: auto;
    min-height: 2.5rem;
    flex: 1;
  }

  > div div {
    height: auto;
    min-height: 2.5rem;
    justify-content: center;
  }

  label {
    min-width: unset;
    max-width: initial;
  }

  font-size: ${({theme:e})=>e.fontTokens.font12[0]};
  line-height: ${({theme:e})=>e.fontTokens.font12[1]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};

  box-sizing: border-box;
  border: 1px solid transparent;
  color: ${({disabled:e,theme:t,isActive:o})=>e?`rgba(${t.colors.transparentBlack},0.26);`:o?t.colors.primaryLight:t.colors.black};

  svg {
    fill: ${({theme:e,type:t})=>"withIcon"===t?e.colors.primaryLight:"checkbox"===t?e.colors.white:e.colors.black};

    ${({theme:e,disabled:t})=>t?`fill: rgba(${e.colors.transparentBlack},0.26);`:""};
  }

  @media ${({theme:e})=>e.device.medium} {
    > span:last-child {
      max-width: unset;
    }
  }

  @media ${({theme:e})=>e.device.touch} {
    min-height: 2.75rem;

    > span:first-child {
      height: auto;
      height: auto;
    }

    > span:last-child {
      height: auto;
      margin-left: ${({leftSpace:e})=>e?"2.75rem":"0.5rem"};
    }
  }

  &:focus {
    outline: none;
    ${({theme:e,focused:t})=>t?`border: 1px solid ${e.colors.primaryLight}; outline: 1px solid ${e.colors.primaryLight};`:""};
  }

  ${({theme:e,disabled:t,hovered:o})=>!t&&o?`background-color: rgba(${e.colors.transparentBlack},0.06);`:""};
  @media (hover: hover) {
    &:hover {
      ${({theme:e,disabled:t,hovered:o})=>!t&&o?`background-color: rgba(${e.colors.transparentBlack},0.06);`:""};
    }
  }

  &:active {
    ${({theme:e})=>e.global.disableTapHighlight}

    ${({theme:e,disabled:t})=>t?"":`border: 1px solid ${e.colors.grey15}; background-color: ${e.colors.grey15}; color: ${e.colors.white};`};

    label {
      ${({theme:e,disabled:t})=>t?"":`color: ${e.colors.white};`};

      &:after {
        ${({theme:e,disabled:t})=>t?"":`border-color: ${e.colors.white};`};
      }
    }

    span {
      ${({theme:e,disabled:t})=>t?"":`color: ${e.colors.white};`};
    }

    svg {
      ${({theme:e,disabled:t})=>t?"":`fill: ${e.colors.white};`};
    }
  }
`;function u({content:e,inputValue:t,symbol:o,isActive:n}){let l=(0,i.DP)(),a=n?l.colors.primaryLight:"";if(!t){let t="string"==typeof e?e:e.text;return(0,r.jsxs)(r.Fragment,{children:[o&&(0,r.jsx)(d.I,{symbol:o,color:a,withHitSpace:!0}),(0,r.jsx)(c,Object.assign({$color:a},{children:t}))]})}let[s,p,u]=function(e,t=""){if("string"!=typeof e)return[void 0,void 0,void 0];if(!e.toLowerCase().includes(t.toLowerCase()))return["","",e];let[o,...r]=null==e?void 0:e.toLowerCase().split(t.toLowerCase()),n=r.join(t);return[e.slice(0,o.length),e.slice(o.length,o.length+t.length),n?e.slice(-n.length):""]}(e,t);return(0,r.jsxs)(r.Fragment,{children:[o&&(0,r.jsx)(d.I,{symbol:o,color:a,withHitSpace:!0}),(0,r.jsxs)(c,Object.assign({isAutocomplete:!0},{children:[void 0!==u&&!!s.trimLeft()&&(0,r.jsx)("span",Object.assign({className:"start"},{children:s.trimLeft()})),(0,r.jsxs)("span",{children:[void 0!==u&&e.includes(p)&&(0,r.jsx)("strong",{children:p}),(0,r.jsx)("span",{children:u})]})]}))]})}var g=o(57760),h=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};function b(e){var{items:t,type:o,outlined:i,children:d,inputValue:c,value:b,onItemChange:m,onItemsChange:f,initialSelectedItem:v,initialHoveredItemIndex:y,onHoveredItemIndexChange:x,initialSelectedItems:$=[],values:k,previewId:w,previewIdExtractor:j,dataTestIdPrefix:O}=e,S=h(e,["items","type","outlined","children","inputValue","value","onItemChange","onItemsChange","initialSelectedItem","initialHoveredItemIndex","onHoveredItemIndexChange","initialSelectedItems","values","previewId","previewIdExtractor","dataTestIdPrefix"]);let[I,C]=(0,n.useState)(!1),[E,L]=(0,n.useState)(-1),B=S.name,[P,T]=(0,n.useState)(v),[z,A]=(0,n.useState)($),F="withIcon"===o||t.some(e=>!!e.symbol);function D(e){var t;T(e.value||(null===(t=e.content)||void 0===t?void 0:t.value)),m&&m(e)}function K(e){let t=[];A(t=z.includes(e.value)?z.filter(t=>t!==e.value):[...z,e.value]),f&&f(t)}(0,n.useEffect)(()=>{P!==b&&T(b)},[b]),(0,n.useEffect)(()=>{L(y)},[y]),(0,n.useEffect)(()=>{k&&A(k)},[k]);let H=(0,g.X)(O);return(0,r.jsxs)(a,Object.assign({"data-preview-id":w,outlined:i},{children:[(0,r.jsx)(s,Object.assign({onMouseDown:()=>C(!1),onKeyUp:e=>{"Tab"===e.key&&C(!0)}},{children:t.map((e,n)=>{var i,a;let s="content"in e&&(0,r.jsx)(u,Object.assign({symbol:"withIcon"===o&&P===e.value?"Checkmark":""},e,{inputValue:c})),d="checkbox"===o?[Object.assign({},e)]:t;return(0,r.jsxs)(p,Object.assign({"data-preview-id":"function"==typeof j?j(e,n):void 0,focused:I,onClick:()=>{!e.disabled&&("checkbox"!==o&&D(e),S.onClick&&S.onClick(e))},onKeyDown:t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),"checkbox"===o?K(e):D(e))},hovered:E===n,onMouseEnter:()=>{L(n),x&&x(n)},onMouseLeave:()=>L(-1),symbol:"Checkmark",type:o,tabIndex:e.disabled?-1:0,disabled:e.disabled,isActive:P&&(P===e.value||P===(null===(i=e.content)||void 0===i?void 0:i.value)),"data-testid":H("flyout-input"),leftSpace:F},{children:["checkbox"===o?(0,r.jsx)(l.l,{type:o,items:d&&d,isFlyout:!0,values:{[B]:z},name:B,disabledStates:!0,onChange:()=>{K(e)}}):null,s]}),e.content?null===(a=e.content)||void 0===a?void 0:a.value:e.value)}).filter(Boolean)})),(0,r.jsx)(r.Fragment,{children:d})]}))}},50795:(e,t,o)=>{o.d(t,{l:()=>$});var r=o(95155),n=o(12115),l=o(93411),i=o(52491),a=o.n(i),s=o(33860),d=o(87727);let c=l.Ay.span`
  display: block;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontTokens.font14[0]};
  line-height: ${({theme:e})=>e.fontTokens.font14[0]};

  ${({alignByContent:e})=>"left"===e?"transform: translate(-8px);":"right"===e?"transform: translate(8px);":""}

  @media ${({theme:e})=>e.device.touch} {
    margin-top: 0.625rem;
    margin-left: 0.625rem;
    ${({alignByContent:e})=>"left"===e?"transform: translate(-10px);":"right"===e?"transform: translate(10px);":""}
  }
`,p=l.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({indented:e})=>e?"margin-left: 2.25rem;":""}
  min-height: 1.5rem;

  ${({alignByContent:e})=>"left"===e?"transform: translate(-8px);":"right"===e?"transform: translate(8px);":""}

  & > span:not(.charactersInfoStyled, ${c}) {
    display: flex;
    justify-content: center;
    height: auto;
    width: 2.5rem;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  & > span + label,
  & > span ~ input,
  & > span + select,
  & > span ~ select {
    margin-left: 2.5rem;
  }

  div > button {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  div > span {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  label,
  label a {
    max-width: max-content;
    ${({multiLine:e})=>e?"padding-top: 0.75rem; padding-bottom: 0.5rem;":"padding-top: 0.625rem; padding-bottom: 0.625rem;"}
  }

  label {
    padding-right: 0.5rem;
  }

  && label {
    & > span {
      display: none;
      position: absolute;
      z-index: 1;
      ${({type:e,theme:t})=>"radio"===e?`border-radius: 50%; 
            left: 0.875rem;
            top: 0.875rem;
            width: 0.75rem; 
            height: 0.75rem; 
            background-color: ${t.colors.grey15};`:"left: 0.75rem;"}
      ${({type:e})=>"checkbox"===e?"left: 0.75rem; top: 0.75rem;":""}
      ${({type:e})=>"checkboxGroup"===e?"left: 0.75rem; top: 0.75rem;":""}
    }
    p {
      line-height: 1rem;
      span:last-child {
        padding: 1px 1px;
        box-sizing: border-box;
        line-height: 0.875rem;
      }
    }
  }

  @supports (-moz-appearance: none) {
    button {
      ${({type:e,values:t,name:o})=>{var r;return"date"===e&&(null===(r=null==t?void 0:t[o])||void 0===r?void 0:r.length)>0?"display: none":""}}
    }
  }

  ${({type:e,values:t,name:o,theme:r,indented:n})=>{var l,i;return`&:first-of-type {
        ${n?"margin-left: 0;":""};

        input + label {
          & > span {
            display: ${"checkboxGroup"===e&&(null===(l=null==t?void 0:t[o])||void 0===l?void 0:l.length)>=1?"block":""};
          }

          &:after {
            ${"checkboxGroup"===e&&(null===(i=null==t?void 0:t[o])||void 0===i?void 0:i.length)>=1?`background-color: ${r.colors.grey15}`:""};
          }
        }
      }`}}

  @media ${({theme:e})=>e.device.touch} {
    min-height: auto;

    ${({alignByContent:e})=>"left"===e?"transform: translate(-10px);":"right"===e?"transform: translate(10px);":""}

    && label {
      ${({multiLine:e})=>e?"padding-top: 0.875rem; padding-bottom: 0.625rem;":"padding-top: 0.75rem; padding-bottom: 0.75rem;"}

      & > span {
        display: none;
        position: absolute;
        z-index: 1;
        ${({type:e,theme:t})=>"radio"===e?`left: 1rem;top: 1rem;border-radius: 50%;width: 0.75rem;height: 0.75rem;background-color: ${t.colors.grey15};`:"left: 0.75rem;"}
        ${({type:e})=>"checkbox"===e?"left: 0.875rem; top: 0.875rem;":""}
      }
    }
  }
`,u=l.Ay.div`
  display: flex;
  flex-direction: ${({alignment:e})=>"horizontal"===e?"row":"column"};

  ${p} {
    ${({alignment:e})=>"horizontal"===e?"margin-right: 1.5rem":""};

    &:last-of-type {
      ${({alignment:e})=>"horizontal"===e?"margin-right: 0":"margin-bottom: 0"};
    }
  }
`,g=l.Ay.label`
  font-size: ${({theme:e,type:t})=>"checkbox"===t?e.fontTokens.font12[0]:e.fontTokens.font14[0]};
  line-height: ${({theme:e,type:t})=>"checkbox"===t?e.fontTokens.font12[1]:e.fontTokens.font14[1]};
  color: ${({theme:e})=>e.colors.grey15};

  ${({theme:e,type:t,disabledStates:o,isFlyout:r,hasError:n,checked:l,groupSelection:i,areCssLabelStatesDisabled:a})=>`color: ${e.colors.grey15};
    display: flex;
    align-items: center;
    cursor: pointer;
    min-height: 1.25rem;
    margin: 0 0 0 ${r?"2.5rem":"2.75rem"};
    p {
      margin: 0;
      padding:0;
    }

    @media (hover: hover) {
      &:hover {
        ${o||a?"":`&:before {
          border: 1px solid rgba(${e.colors.transparentBlack}, 0);
          background-color: rgba(${e.colors.transparentBlack}, 0.08);
        }`}


      ${a?"":`
              &:after {
          background-color: rgba(${e.colors.transparentBlack}, 0);
          border: 1px solid ${n&&!l?e.colors.error:l?e.colors.grey15:e.colors.black};
        }
      `}
      }
    }

    &:active {
      ${e.global.disableTapHighlight}

      ${o||a?"":`&:before {
            background-color: ${e.colors.grey15};
            border: 1px solid ${e.colors.grey15};
          }

          &:after {
            border: 1px solid ${e.colors.grey10};
            background: transparent;
          }

          span {
            svg, svg path {
              fill: ${e.colors.grey10};
            }
            color: ${e.colors.grey10};
            ${"radio"===t?`background-color: ${e.colors.grey10};`:""}
          }`}
    }

    &:after {
      content: '';
      display: block;
      box-sizing: border-box;
      position: absolute;
      ${n&&!l?`border: 1px solid ${e.colors.error};`:l||i?`border: 1px solid ${e.colors.grey15};`:`border: 1px solid ${e.colors.grey10};`}
      ${"radio"===t?"border-radius: 50%;":""};
      background: ${e.colors.white};
      height: 1.5rem;
      width: 1.5rem;
      left: 0.5rem;
      top: 0.5rem;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      min-width: 2.5rem;
      min-height: 2.5rem;
      box-sizing: border-box;
      border: 1px solid rgb(${e.colors.transparentBlack}, 0);
      ${"radio"===t?"border-radius: 50%;":""};
    }`};

  @media ${({theme:e})=>e.device.touch} {
    margin: 0 0 0 ${({isFlyout:e})=>e?"2.75rem":"3rem"};

    &:before {
      min-width: 2.75rem;
      min-height: 2.75rem;
    }
    &:after {
      left: 0.625rem;
      top: 0.625rem;
    }

    & > span {
      ${({type:e})=>"radio"===e?"left: 1rem;top: 1rem;":""}
      ${({type:e})=>"checkbox"===e?"left: 0.875rem;top: 0.875rem;":""}
    }
  }
`;var h=o(57760),b=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};let m=e=>{var{children:t,dataTestIdPrefix:o}=e,l=b(e,["children","dataTestIdPrefix"]);let[i,a]=(0,n.useState)(!1),s=(0,n.useRef)(null),d=(0,h.X)(o);function c(){if(s.current){let{offsetHeight:e}=s.current;a(e>44)}}return(0,n.useEffect)(()=>(window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)),[]),(0,n.useLayoutEffect)(()=>{c()},[]),(0,r.jsx)(p,Object.assign({ref:s},l,{multiLine:i,"data-testid":d("styled-wrapper")},{children:(0,r.jsx)(r.Fragment,{children:t})}))},f=l.Ay.input`
  display: block;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;

  &:focus + label {
    &:before {
      ${({theme:e,disabledStates:t,focused:o})=>!t&&o?`border: 1px solid ${e.colors.primaryLight};`:""};
      ${({type:e,theme:t,disabledStates:o,focused:r})=>o||!r?"":"radio"!==e?`outline: 1px solid ${t.colors.primaryLight};`:`outline: none; box-shadow: 0 0 0 1px ${t.colors.primaryLight};`};
    }
  }

  &&:checked + label {
    &:after {
      ${({type:e,theme:t})=>"radio"!==e?`background-color: ${t.colors.grey15}`:""};
    }

    & > span {
      display: block;
    }
  }

  &:disabled,
  &:disabled:checked {
    & + label {
      pointer-events: none;
      color: rgba(${({theme:e})=>e.colors.transparentBlack}, 0.26);

      &:after {
        background-color: transparent;
        border: 1px solid
          rgba(${({theme:e})=>e.colors.transparentBlack}, 0.2);
      }

      & > span {
        svg {
          fill: rgba(${({theme:e})=>e.colors.transparentBlack}, 0.26);
        }
        ${({type:e,theme:t})=>"radio"===e?`background-color: rgba(${t.colors.transparentBlack}, 0.2)`:""};
      }
    }
  }
`;var v=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};let y=e=>{var{children:t,dataTestIdPrefix:o}=e,r=v(e,["children","dataTestIdPrefix"]);let[l,i]=(0,n.useState)(!1),a=(0,h.X)(o);return(0,n.createElement)(f,Object.assign({},r,{key:r.key,onMouseDown:()=>{i(!1)},onKeyUp:e=>{i(!0),r.onKeyUp&&r.onKeyUp(e)},onBlur:e=>{i(!1),r.onBlur&&r.onBlur(e)},focused:l,"data-testid":a("toggle-input")}))};var x=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o};let $=e=>{var{onChange:t,onBlur:o,onAllChange:i,errorMessage:p,errors:b,name:f,values:v,label:$,items:k,type:w,disabled:j,indented:O,disabledStates:S,alignment:I="vertical",isFlyout:C,tabIndex:E,alignByContent:L,dataTestIdPrefix:B}=e,P=x(e,["onChange","onBlur","onAllChange","errorMessage","errors","name","values","label","items","type","disabled","indented","disabledStates","alignment","isFlyout","tabIndex","alignByContent","dataTestIdPrefix"]);let T=(0,l.DP)(),[z,A]=(0,n.useState)(""),[F,D]=(0,n.useState)(),[K,H]=(0,n.useState)(!1),M=(0,n.useRef)(null),U="checkboxGroup"===w,G=(0,h.X)(B);return(0,n.useEffect)(()=>{var e,t,o;if(U){let r=(null==k?void 0:k.length)===(null===(e=null==v?void 0:v[f])||void 0===e?void 0:e.length);!r&&(null===(t=null==v?void 0:v[f])||void 0===t?void 0:t.length)>=1?(A("Minus"),D("partial")):(null===(o=null==v?void 0:v[f])||void 0===o?void 0:o.length)===0?(A(""),D(void 0)):r&&(A("Checkmark"),D("all"))}},[v]),(0,n.useEffect)(()=>{let e=M.current.querySelector("a");if(e){let t=t=>(t.stopPropagation(),t.preventDefault(),window.open(e.href,e.target),!1);e.addEventListener("click",t),e.addEventListener("touchstart",t),e.addEventListener("mouseover",()=>H(!0)),e.addEventListener("mouseout",()=>H(!1))}},[]),(0,r.jsxs)(u,Object.assign({},P,{ref:M,alignment:I},{children:[U&&(0,r.jsxs)(m,Object.assign({alignByContent:L,indented:O,name:f,values:v,type:w,isToggle:!0},{children:[(0,r.jsx)(y,{onKeyUp:e=>{("Enter"===e.key||" "===e.key)&&i&&i(z)},id:a()(f),type:"checkbox",name:f,disabled:j,checked:!!F,onChange:()=>{},disabledStates:S,tabIndex:S?-1:0}),(0,r.jsxs)(g,Object.assign({areCssLabelStatesDisabled:K,htmlFor:a()(f),onClick:()=>i(z),role:"presentation",type:w,disabledStates:S,isToggle:!0,"data-testid":G("group-toggle-label"),isFlyout:C,groupSelection:F,hasError:!!(null==b?void 0:b[f])},{children:[$,z&&(0,r.jsx)(s.I,{symbol:z,color:T.colors.white})]}))]})),null==k?void 0:k.map((e,n)=>{var l,i;return(0,r.jsxs)(m,Object.assign({alignByContent:L,type:w,indented:O,isToggle:!0},{children:[(0,r.jsx)(y,{id:`${a()(e)}_${f}`,onKeyUp:o=>{("Enter"===o.key||" "===o.key)&&t&&t(e.value)},onBlur:o,type:"checkboxGroup"===w?"checkbox":w,name:f.concat(String(n)),disabled:j||e.disabled,value:"radio"!==w?e.value:(null==v?void 0:v[f])||"",checked:"string"==typeof(null==v?void 0:v[f])?(null==v?void 0:v[f])===e.value:null===(l=null==v?void 0:v[f])||void 0===l?void 0:l.includes(e.value),onChange:()=>{},disabledStates:S,tabIndex:E||S?-1:0}),(0,r.jsxs)(g,Object.assign({areCssLabelStatesDisabled:K,htmlFor:a()(e),onClick:()=>t(e.value),role:"presentation",type:w,disabledStates:S,isToggle:!0,"data-testid":G("toggle-label"),isFlyout:C,checked:"string"==typeof(null==v?void 0:v[f])?(null==v?void 0:v[f])===e.value:null===(i=null==v?void 0:v[f])||void 0===i?void 0:i.includes(e.value),hasError:!!(null==b?void 0:b[f])},{children:[(0,r.jsx)(d.g,{content:e.text,as:"p"}),"radio"!==w?(0,r.jsx)(s.I,{symbol:"Checkmark",color:j?T.colors.grey04:T.colors.white}):(0,r.jsx)("span",{})]}))]}),`${a()(e.value)}-${n}`)}),(null==b?void 0:b[f])&&(0,r.jsx)(c,Object.assign({alignByContent:L},{children:p||b[f]}))]}))}}}]);
//# sourceMappingURL=3161-65c0635445389317.js.map