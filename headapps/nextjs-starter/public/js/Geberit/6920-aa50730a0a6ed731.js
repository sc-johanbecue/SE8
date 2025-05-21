(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6920],{1177:(e,o,r)=>{"use strict";r.d(o,{J:()=>t});var i=r(93411);let t=i.Ay.label`
  font-size: ${({theme:e,type:o})=>"checkbox"===o?e.fontTokens.font12[0]:e.fontTokens.font14[0]};
  line-height: ${({theme:e,type:o})=>"checkbox"===o?e.fontTokens.font12[1]:e.fontTokens.font14[1]};
  color: ${({theme:e})=>e.colors.grey13};

  ${({hasError:e,theme:o})=>e?`
    /* overwrite html5 label-to-input hover state */
    &:hover ~ div {
      input:hover,
      textarea:hover {
        border: 1px solid ${o.colors.grey10};
        background-color: ${o.colors.white};
      }
      input:active,
      input:focus,
      textarea:active,
      textarea:focus {
        background-color: ${o.colors.offWhite};
        border: 1px solid ${o.colors.grey14};
      }
      input:read-only,
      textarea:read-only {
        cursor: default;
        background-color: ${o.colors.grey04};
        border: 1px solid rgba(${o.colors.transparentBlack}, 0);
      }
      input:disabled,
      textarea:disabled {
        background-color: ${o.colors.grey03};
        border: 1px solid rgba(${o.colors.transparentBlack}, 0);
        color: rgba(${o.colors.transparentBlack}, 0.26);
      }
    }
  `:""}

  ${({isToggle:e,theme:o,type:r,disabledStates:i,isFlyout:t,hasError:n,checked:a,groupSelection:l})=>e?`
        color: ${o.colors.grey15};
        display: flex;
        align-items: center;
        cursor: pointer;
        min-height: 1.25rem;
        margin: 0 0 0 ${t?"2.5rem":"2.75rem"};
    
        &:hover {
          ${i?"":`
              &:before {
                border: 1px solid rgba(${o.colors.transparentBlack}, 0);
                background-color: rgba(${o.colors.transparentBlack}, 0.08);
              }`}

          &:after {
            background-color: rgba(${o.colors.transparentBlack}, 0);
            border: 1px solid ${n&&!a?o.colors.error:a?o.colors.grey15:o.colors.black};
          }
        }

        &:active {
          ${i?"":`
              &:before {
                background-color: ${o.colors.grey15};
                border: 1px solid ${o.colors.grey15};
              }

              &:after {
                border: 1px solid ${o.colors.grey10};
                background: transparent;
              }

              span {
                svg, svg path {
                  fill: ${o.colors.grey10};
                }
                color: ${o.colors.grey10};
                ${"radio"===r?`border: 1px solid ${o.colors.grey10}; 
                    background-color: ${o.colors.grey10};`:""}
              }`}
        }

        &:after {
          content: '';
          display: block;
          position: absolute;
          ${n&&!a?`border: 1px solid ${o.colors.error};`:a||l?`border: 1px solid ${o.colors.grey15};`:`border: 1px solid ${o.colors.grey10};`}
          ${"radio"===r?"border-radius: 50%;":""};
          background: ${o.colors.white};
          height: 1.375rem;
          width: 1.375rem;
          left: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
        }

        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          min-width: 2.5rem;
          min-height: 2.5rem;
          box-sizing: border-box;
          border: 1px solid rgb(${o.colors.transparentBlack}, 0);
          ${"radio"===r?"border-radius: 50%;":""};
        }

        & > span {
          display: none;
          position: absolute;
          z-index: 1;
          ${"radio"===r?`border: 1px solid ${o.colors.black}; 
                border-radius: 50%; 
                width: 0.5rem; 
                height: 0.5rem; 
                top: 0.9375rem;
                left: 0.9375rem;
                background-color: ${o.colors.black};`:"top: 0.75rem;left: 0.75rem;"}
        }`:""};
`},8077:(e,o,r)=>{"use strict";r.d(o,{r:()=>t});var i=r(93411);let t=i.Ay.span`
  display: block;
  margin-top: 0.5rem;
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontTokens.font14[0]};
  line-height: ${({theme:e})=>e.fontTokens.font14[0]};
`},21799:function(e,o,r){var i;!function(t,n){"use strict";var a="function",l="undefined",s="object",d="string",c="major",b="model",u="name",p="type",m="vendor",g="version",w="architecture",f="console",h="mobile",v="tablet",x="smarttv",y="wearable",k="embedded",$="Amazon",S="Apple",j="ASUS",O="BlackBerry",A="Browser",T="Chrome",B="Firefox",C="Google",z="Huawei",E="Microsoft",I="Motorola",_="Opera",M="Samsung",P="Sharp",U="Sony",q="Xiaomi",N="Zebra",L="Facebook",F="Chromium OS",R="Mac OS",D=" Browser",W=function(e,o){var r={};for(var i in e)o[i]&&o[i].length%2==0?r[i]=o[i].concat(e[i]):r[i]=e[i];return r},V=function(e){for(var o={},r=0;r<e.length;r++)o[e[r].toUpperCase()]=e[r];return o},G=function(e,o){return typeof e===d&&-1!==Y(o).indexOf(Y(e))},Y=function(e){return e.toLowerCase()},H=function(e,o){if(typeof e===d)return e=e.replace(/^\s\s*/,""),typeof o===l?e:e.substring(0,500)},X=function(e,o){for(var r,i,t,l,d,c,b=0;b<o.length&&!d;){var u=o[b],p=o[b+1];for(r=i=0;r<u.length&&!d&&u[r];)if(d=u[r++].exec(e))for(t=0;t<p.length;t++)c=d[++i],typeof(l=p[t])===s&&l.length>0?2===l.length?typeof l[1]==a?this[l[0]]=l[1].call(this,c):this[l[0]]=l[1]:3===l.length?typeof l[1]!==a||l[1].exec&&l[1].test?this[l[0]]=c?c.replace(l[1],l[2]):void 0:this[l[0]]=c?l[1].call(this,c,l[2]):void 0:4===l.length&&(this[l[0]]=c?l[3].call(this,c.replace(l[1],l[2])):n):this[l]=c||n;b+=2}},K=function(e,o){for(var r in o)if(typeof o[r]===s&&o[r].length>0){for(var i=0;i<o[r].length;i++)if(G(o[r][i],e))return"?"===r?n:r}else if(G(o[r],e))return"?"===r?n:r;return o.hasOwnProperty("*")?o["*"]:e},Z={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Q={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[g,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[g,[u,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[u,g],[/opios[\/ ]+([\w\.]+)/i],[g,[u,_+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[g,[u,_+" GX"]],[/\bopr\/([\w\.]+)/i],[g,[u,_]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[g,[u,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[g,[u,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,/(heytap|ovi|115)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[u,g],[/quark(?:pc)?\/([-\w\.]+)/i],[g,[u,"Quark"]],[/\bddg\/([\w\.]+)/i],[g,[u,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[g,[u,"UC"+A]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[g,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[g,[u,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[g,[u,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[g,[u,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[g,[u,"Smart Lenovo "+A]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure "+A],g],[/\bfocus\/([\w\.]+)/i],[g,[u,B+" Focus"]],[/\bopt\/([\w\.]+)/i],[g,[u,_+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[g,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[g,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[g,[u,_+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[g,[u,"MIUI"+D]],[/fxios\/([\w\.-]+)/i],[g,[u,B]],[/\bqihoobrowser\/?([\w\.]*)/i],[g,[u,"360"]],[/\b(qq)\/([\w\.]+)/i],[[u,/(.+)/,"$1Browser"],g],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1"+D],g],[/samsungbrowser\/([\w\.]+)/i],[g,[u,M+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[g,[u,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[u,"Sogou Mobile"],g],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[u,g],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[u],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[g,u],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[u,L],g],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[u,g],[/\bgsa\/([\w\.]+) .*safari\//i],[g,[u,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[g,[u,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[g,[u,T+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[u,T+" WebView"],g],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[g,[u,"Android "+A]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[u,g],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[g,[u,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[g,u],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[u,[g,K,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[u,g],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[u,"Netscape"],g],[/(wolvic|librewolf)\/([\w\.]+)/i],[u,g],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[g,[u,B+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[u,[g,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[u,[g,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[w,"amd64"]],[/(ia32(?=;))/i],[[w,Y]],[/((?:i[346]|x)86)[;\)]/i],[[w,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[w,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[w,"armhf"]],[/windows (ce|mobile); ppc;/i],[[w,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[w,/ower/,"",Y]],[/(sun4\w)[;\)]/i],[[w,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[w,Y]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[b,[m,M],[p,v]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[b,[m,M],[p,h]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[b,[m,S],[p,h]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[b,[m,S],[p,v]],[/(macintosh);/i],[b,[m,S]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[b,[m,P],[p,h]],[/(?:honor)([-\w ]+)[;\)]/i],[b,[m,"Honor"],[p,h]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[b,[m,z],[p,v]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[b,[m,z],[p,h]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],[[b,/_/g," "],[m,q],[p,h]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[b,/_/g," "],[m,q],[p,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[b,[m,"OPPO"],[p,h]],[/\b(opd2\d{3}a?) bui/i],[b,[m,"OPPO"],[p,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[b,[m,"Vivo"],[p,h]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[b,[m,"Realme"],[p,h]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[b,[m,I],[p,h]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[b,[m,I],[p,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[b,[m,"LG"],[p,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[b,[m,"LG"],[p,h]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[b,[m,"Lenovo"],[p,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[b,/_/g," "],[m,"Nokia"],[p,h]],[/(pixel c)\b/i],[b,[m,C],[p,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[b,[m,C],[p,h]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[b,[m,U],[p,h]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[b,"Xperia Tablet"],[m,U],[p,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[b,[m,"OnePlus"],[p,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[b,[m,$],[p,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[b,/(.+)/g,"Fire Phone $1"],[m,$],[p,h]],[/(playbook);[-\w\),; ]+(rim)/i],[b,m,[p,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[b,[m,O],[p,h]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[b,[m,j],[p,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[b,[m,j],[p,h]],[/(nexus 9)/i],[b,[m,"HTC"],[p,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[b,/_/g," "],[p,h]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[b,[m,"TCL"],[p,v]],[/(itel) ((\w+))/i],[[m,Y],b,[p,K,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[b,[m,"Acer"],[p,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[b,[m,"Meizu"],[p,h]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[b,[m,"Ulefone"],[p,h]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[b,[m,"Energizer"],[p,h]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[b,[m,"Cat"],[p,h]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[b,[m,"Smartfren"],[p,h]],[/droid.+; (a(?:015|06[35]|142p?))/i],[b,[m,"Nothing"],[p,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,b,[p,h]],[/(imo) (tab \w+)/i,/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,b,[p,v]],[/(surface duo)/i],[b,[m,E],[p,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[b,[m,"Fairphone"],[p,h]],[/(u304aa)/i],[b,[m,"AT&T"],[p,h]],[/\bsie-(\w*)/i],[b,[m,"Siemens"],[p,h]],[/\b(rct\w+) b/i],[b,[m,"RCA"],[p,v]],[/\b(venue[\d ]{2,7}) b/i],[b,[m,"Dell"],[p,v]],[/\b(q(?:mv|ta)\w+) b/i],[b,[m,"Verizon"],[p,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[b,[m,"Barnes & Noble"],[p,v]],[/\b(tm\d{3}\w+) b/i],[b,[m,"NuVision"],[p,v]],[/\b(k88) b/i],[b,[m,"ZTE"],[p,v]],[/\b(nx\d{3}j) b/i],[b,[m,"ZTE"],[p,h]],[/\b(gen\d{3}) b.+49h/i],[b,[m,"Swiss"],[p,h]],[/\b(zur\d{3}) b/i],[b,[m,"Swiss"],[p,v]],[/\b((zeki)?tb.*\b) b/i],[b,[m,"Zeki"],[p,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],b,[p,v]],[/\b(ns-?\w{0,9}) b/i],[b,[m,"Insignia"],[p,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[b,[m,"NextBook"],[p,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],b,[p,h]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],b,[p,h]],[/\b(ph-1) /i],[b,[m,"Essential"],[p,h]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[b,[m,"Envizen"],[p,v]],[/\b(trio[-\w\. ]+) b/i],[b,[m,"MachSpeed"],[p,v]],[/\btu_(1491) b/i],[b,[m,"Rotor"],[p,v]],[/(shield[\w ]+) b/i],[b,[m,"Nvidia"],[p,v]],[/(sprint) (\w+)/i],[m,b,[p,h]],[/(kin\.[onetw]{3})/i],[[b,/\./g," "],[m,E],[p,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[b,[m,N],[p,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[b,[m,N],[p,h]],[/smart-tv.+(samsung)/i],[m,[p,x]],[/hbbtv.+maple;(\d+)/i],[[b,/^/,"SmartTV"],[m,M],[p,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,"LG"],[p,x]],[/(apple) ?tv/i],[m,[b,S+" TV"],[p,x]],[/crkey/i],[[b,T+"cast"],[m,C],[p,x]],[/droid.+aft(\w+)( bui|\))/i],[b,[m,$],[p,x]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[b,[m,P],[p,x]],[/(bravia[\w ]+)( bui|\))/i],[b,[m,U],[p,x]],[/(mitv-\w{5}) bui/i],[b,[m,q],[p,x]],[/Hbbtv.*(technisat) (.*);/i],[m,b,[p,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,H],[b,H],[p,x]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[p,x]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,b,[p,f]],[/droid.+; (shield) bui/i],[b,[m,"Nvidia"],[p,f]],[/(playstation [345portablevi]+)/i],[b,[m,U],[p,f]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[b,[m,E],[p,f]],[/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],[b,[m,M],[p,y]],[/((pebble))app/i],[m,b,[p,y]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[b,[m,S],[p,y]],[/droid.+; (glass) \d/i],[b,[m,C],[p,y]],[/droid.+; (wt63?0{2,3})\)/i],[b,[m,N],[p,y]],[/droid.+; (glass) \d/i],[b,[m,C],[p,y]],[/(pico) (4|neo3(?: link|pro)?)/i],[m,b,[p,y]],[/; (quest( \d| pro)?)/i],[b,[m,L],[p,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[p,k]],[/(aeobc)\b/i],[b,[m,$],[p,k]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[b,[p,h]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[b,[p,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[p,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[p,h]],[/(android[-\w\. ]{0,9});.+buil/i],[b,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[g,[u,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[u,g],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[g,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[u,g],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[g,u]],os:[[/microsoft (windows) (vista|xp)/i],[u,g],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[u,[g,K,Z]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[g,K,Z],[u,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[g,/_/g,"."],[u,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[u,R],[g,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[g,u],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[u,g],[/\(bb(10);/i],[g,[u,O]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[g,[u,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[g,[u,B+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[g,[u,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[g,[u,"watchOS"]],[/crkey\/([\d\.]+)/i],[g,[u,T+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[u,F],g],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[u,g],[/(sunos) ?([\w\.\d]*)/i],[[u,"Solaris"],g],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[u,g]]},J=function(e,o){if(typeof e===s&&(o=e,e=n),!(this instanceof J))return new J(e,o).getResult();var r=typeof t!==l&&t.navigator?t.navigator:n,i=e||(r&&r.userAgent?r.userAgent:""),f=r&&r.userAgentData?r.userAgentData:n,x=o?W(Q,o):Q,y=r&&r.userAgent==i;return this.getBrowser=function(){var e,o={};return o[u]=n,o[g]=n,X.call(o,i,x.browser),o[c]=typeof(e=o[g])===d?e.replace(/[^\d\.]/g,"").split(".")[0]:n,y&&r&&r.brave&&typeof r.brave.isBrave==a&&(o[u]="Brave"),o},this.getCPU=function(){var e={};return e[w]=n,X.call(e,i,x.cpu),e},this.getDevice=function(){var e={};return e[m]=n,e[b]=n,e[p]=n,X.call(e,i,x.device),y&&!e[p]&&f&&f.mobile&&(e[p]=h),y&&"Macintosh"==e[b]&&r&&typeof r.standalone!==l&&r.maxTouchPoints&&r.maxTouchPoints>2&&(e[b]="iPad",e[p]=v),e},this.getEngine=function(){var e={};return e[u]=n,e[g]=n,X.call(e,i,x.engine),e},this.getOS=function(){var e={};return e[u]=n,e[g]=n,X.call(e,i,x.os),y&&!e[u]&&f&&f.platform&&"Unknown"!=f.platform&&(e[u]=f.platform.replace(/chrome os/i,F).replace(/macos/i,R)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i=typeof e===d&&e.length>500?H(e,500):e,this},this.setUA(i),this};J.VERSION="1.0.40",J.BROWSER=V([u,g,c]),J.CPU=V([w]),J.DEVICE=V([b,m,p,f,h,x,v,y,k]),J.ENGINE=J.OS=V([u,g]),typeof o!==l?(e.exports&&(o=e.exports=J),o.UAParser=J):r.amdO?n!==(i=(function(){return J}).call(o,r,o,e))&&(e.exports=i):typeof t!==l&&(t.UAParser=J);var ee=typeof t!==l&&(t.jQuery||t.Zepto);if(ee&&!ee.ua){var eo=new J;ee.ua=eo.getResult(),ee.ua.get=function(){return eo.getUA()},ee.ua.set=function(e){eo.setUA(e);var o=eo.getResult();for(var r in o)ee.ua[r]=o[r]}}}("object"==typeof window?window:this)},35894:(e,o,r)=>{"use strict";r.d(o,{m:()=>A});var i=r(95155),t=r(12115),n=r(55702),a=r(33860),l=r(6631),s=r(3161),d=r(93411);let c=d.Ay.div`
  position: relative;
  height: 2.5rem;
  width: 100%;
  ${({theme:e})=>`color: rgba(${e.colors.transparentBlack}, 0.36);`}

  position: absolute;
  top: 0;
  left: 0;
  display: none;

  @media (hover: hover) {
    // Since we are using a mouse, it's safe to show the custom select.
    display: block;
    &:hover {
      background: white;
    }
  }

  ${({$forceCustom:e})=>e&&`
      display: block;
      &:hover {
        background: white;
      }
  `}
`,b=d.Ay.select`
  position: relative;
  height: 2.5rem;
  width: 100%;
  color: transparent;
  box-sizing: border-box;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  font-size: ${({theme:e})=>e.fontTokens.font12[0]};
  background-color: ${({theme:e})=>e.colors.white};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: ${({multiple:e})=>e?"0":"0.5rem"};
  padding-right: ${({multiple:e})=>e?"0":"2.75rem"};

  ${({errors:e,name:o,outlined:r,theme:i,hasInitialSelectionChanged:t,opened:n})=>{let a=(null==e?void 0:e[o])?i.colors.error:t||n?i.colors.black:i.colors.grey10,l=t?i.colors.black:`rgba(${i.colors.transparentBlack}, 0.36)`;return`
      ${r?"":"border: none;"}
      border${r?"":"-bottom"}: 1px solid ${a};
      color: ${l}
    `}};

  &:focus {
    ${({theme:e,focused:o})=>o?`outline: 1px solid ${e.colors.primaryLight};
        border: 1px solid ${e.colors.primaryLight};`:"outline: none;"}

    ${({multiOpened:e})=>e?"height: auto;":"height: 2.5rem"};

    option {
      ${({multiple:e,multiOpened:o})=>e?o?"display: block;":"display:none;":"display: block;"}
      ${({multiple:e,multiOpened:o})=>e?o?"":`
            &:first-child {
              height: 2.5rem;
              display: flex;
              align-items: center;
              border: 1px solid transparent;
              outline:  1px solid transparent;
              font-weight: inherit;
              padding: 0;
            }
            `:""}
    }
  }

  &:active {
    transition: background-color,
      border-color 0.3s ${({opened:e})=>e?"ease-in":"ease-out"};
    background-color: ${({theme:e,outlined:o})=>o?e.colors.grey05:`rgba(${e.colors.transparentBlack}, 0.06)`};
    ${({outlined:e,theme:o,errors:r})=>r&&Object.keys(r).length>0?"":`
        ${e?"":"border: none;"}
        border${e?"":"-bottom"}: 1px solid ${o.colors.black};
        `}
  }

  color: ${({theme:e})=>e.colors.black};

  &:disabled,
  &:disabled:active,
  &:disabled:hover {
    background-color: ${({readOnly:e,theme:o,outlined:r})=>r?e?o.colors.grey04:o.colors.grey03:"transparent"};
    ${({outlined:e,theme:o})=>`
      ${e?"":"border: none;"}
      border${e?"":"-bottom"}: 1px solid rgba(${o.colors.transparentBlack},${e?"0":"0.26"});`};
    color: ${({theme:e,readOnly:o})=>o?e.colors.black:`rgba(${e.colors.transparentBlack}, 0.26)`};
  }

  @media (hover: hover) {
    &:focus {
      & + div {
        display: none;
      }
    }
  }

  ${({$forceCustom:e})=>!e&&`
  @media ${({theme:e})=>e.device.touch} {
    height: ${({multiple:e})=>`${e?"auto":"2.75rem"}`};
  }`}

  ${({$forceCustom:e})=>e&&`
    &:focus {
      & + div {
        display: none;
      }
    }
  `}
`,u=d.Ay.option`
  ${({theme:e})=>`color: rgb(${e.colors.transparentBlack}, 0.36);`}
`,p=d.Ay.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding-left: 0.5rem;

  ${({errors:e,name:o,outlined:r,theme:i,hasInitialSelectionChanged:t,opened:n})=>{let a=(null==e?void 0:e[o])?i.colors.error:t||n?i.colors.black:i.colors.grey10,l=t?i.colors.black:`rgba(${i.colors.transparentBlack}, 0.36)`;return`
      ${r?"":"border: none;"}
      border${r?"":"-bottom"}: 1px solid ${a};
      color: ${l}
    `}};

  &:hover {
    cursor: pointer;

    background-color: ${({theme:e,outlined:o})=>o?e.colors.offWhite:`rgba(${e.colors.transparentBlack}, 0.04)`};

    ${({outlined:e,theme:o,errors:r,opened:i})=>r&&Object.keys(r).length>0||i?"":`
        ${e?"":"border: none;"}
        border${e?"":"-bottom"}: 1px solid ${o.colors.grey14};
      `}
  }

  &:active {
    transition: background-color,
      border-color 0.3s ${({opened:e})=>e?"ease-in":"ease-out"};
    background-color: ${({theme:e,outlined:o})=>o?e.colors.grey05:`rgba(${e.colors.transparentBlack}, 0.06)`};
    ${({outlined:e,theme:o,errors:r})=>r&&Object.keys(r).length>0?"":`
        ${e?"":"border: none;"}
        border${e?"":"-bottom"}: 1px solid ${o.colors.black};
        `}
  }

  &.disabled,
  &.disabled:active,
  &.disabled:hover {
    cursor: initial;
    background-color: ${({readOnly:e,theme:o,outlined:r})=>r?e?o.colors.grey04:o.colors.grey03:o.colors.white};
    ${({outlined:e,theme:o,readOnly:r})=>`${e?"":"border: none;"}border${e?"":"-bottom"}: 1px solid ${e?`rgba(${o.colors.transparentBlack},0)`:r?o.colors.grey10:`rgba(${o.colors.transparentBlack},0.2)`}`};
    color: ${({theme:e,readOnly:o})=>o?e.colors.black:`rgba(${e.colors.transparentBlack}, 0.26)`};
  }

  div {
    width: calc(100% - 2.5rem);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,m=d.Ay.ul`
  position: absolute;
  margin: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  display: block;
  box-sizing: border-box;
  ${({flyoutMaxItemsCount:e,isMultipleSelect:o,withFooter:r})=>o&&r?"auto":o?`max-height: ${2.5*e+1.5}rem`:`max-height: ${2.5*e+1}rem`};
  overflow-y: ${({isMultipleSelect:e,withFooter:o})=>e&&o?"hidden":"auto"};
  ${({theme:e})=>`box-shadow: 0 2px 6px rgba(${e.colors.transparentBlack}, 0.26);`}
  padding: ${({isMultipleSelect:e})=>e?"0":"0.5rem 0"};
  transition: opacity 0.3s ${({opened:e})=>e?"ease-in":"ease-out"},
    visibility 0s ${({opened:e})=>e?"ease-in":"ease-out"};
  ${({opened:e})=>`visibility: ${e?"visible":"hidden"};`}
  ${({opened:e})=>`opacity: ${e?"1":"0"};`}
  ${({openDirection:e="bottom"})=>"top"===e?"bottom: 100%;":"top: 100%;"}

  > div {
    flex: 1;
    ${({isMultipleSelect:e,withFooter:o})=>e&&o?"max-height: 10rem":e?"max-height: 13rem":""};
  }

  li {
    padding-right: 0;

    div {
      flex: 1;
    }
  }
`,g=d.Ay.div`
  margin-left: auto;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`,w=d.Ay.li`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: end;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  height: auto;
  box-sizing: border-box;
  font-size: ${({theme:e})=>e.fontTokens.font12[0]};
  line-height: ${({theme:e})=>e.fontTokens.font12[1]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({disabled:e,theme:o,isActive:r})=>e?`rgba(${o.colors.transparentBlack},0.16);`:r?o.colors.primaryLight:o.colors.black};

  ${({isActive:e})=>e?"padding: 0.625rem 0 0.625rem 0":"padding: 0.625rem 0 0.625rem 2.5rem"};

  & > span {
    width: 100%;
  }
  & > div {
    height: 1.25rem;
    min-width: 2.5rem;
  }
  & > div > span > svg {
    ${({theme:e})=>`fill: ${e.colors.primaryLight};`}
  }

  &:hover {
    cursor: pointer;
    ${({theme:e,isHovered:o,disabled:r})=>!r&&o?`background-color: rgba(${e.colors.transparentBlack},0.06);`:""}
  }
  ${({theme:e,isHovered:o,disabled:r})=>!r&&o?`background-color: rgba(${e.colors.transparentBlack},0.06);`:""}

  &:active {
    ${({theme:e,disabled:o})=>o?"":`border: 1px solid ${e.colors.grey15}; background-color: ${e.colors.grey15}; color: ${e.colors.white};`};
    & > div > span > svg {
      ${({theme:e})=>`fill: ${e.colors.white};`}
    }
  }
`;var f=r(8077);let h=d.Ay.span`
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${({theme:e})=>e.colors.grey13};
  padding-bottom: 0.25rem;
  display: block;
`,v=d.Ay.div`
  position: relative;
  min-height: 2.5rem;

  & > span {
    z-index: 1;
    position: absolute;
    right: 0rem;
    bottom: 0rem;
    pointer-events: none;
    transition: transform 0.3s ${({opened:e})=>e?"ease-in":"ease-out"};
    ${({opened:e})=>e?"transform: rotate(-180deg);":"  transform: rotate(0deg);"}
  }

  &.disabled,
  &.disabled:active,
  &.disabled:hover {
    & > span {
      svg {
        fill: ${({theme:e,readOnly:o})=>o?e.colors.black:`rgba(${e.colors.transparentBlack}, 0.26)`};
      }
    }
  }

  @media ${({theme:e})=>e.device.touch} {
    & > span {
      ${({$forceCustom:e,multiple:o})=>`${!e&&o?"display: none":""}`};
    }
  }
`,x=d.Ay.div`
  position: relative;
`,y=d.Ay.div`
  display: flex;
  padding: 0.5rem;
  height: 2.5rem;
  max-height: 2.5rem;
`;function k({items:e,selectedValue:o}){if(!e)return;let r=e.map((e,o)=>Object.assign(Object.assign({},e),{index:o})).find(e=>(null==e?void 0:e.value)===o);if(r)return r}function $({defaultValue:e,values:o,name:r,items:i},t){let n=(null==o?void 0:o[r])||e;if(t){if(n&&"object"==typeof n){let e=[];return n.forEach(o=>{let r=k({items:i,selectedValue:o});r&&e.push(r.index)}),e}return[]}let a=k({items:i,selectedValue:n});return a?a.index:-1}var S=r(57760),j=r(90740),O=function(e,o){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>o.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var t=0,i=Object.getOwnPropertySymbols(e);t<i.length;t++)0>o.indexOf(i[t])&&Object.prototype.propertyIsEnumerable.call(e,i[t])&&(r[i[t]]=e[i[t]]);return r};let A=e=>{var o,{onChange:r,onBlur:d,errorMessage:A,errors:T,name:B,values:C,label:z,placeholder:E,readOnly:I,required:_,disabled:M,items:P,defaultValue:U,className:q,flyoutMaxItemsCount:N=5,multiple:L,previewId:F,children:R,forceCustom:D,isOpen:W,renderFooter:V,resetDefaultValue:G,dataTestIdPrefix:Y}=e,H=O(e,["onChange","onBlur","errorMessage","errors","name","values","label","placeholder","readOnly","required","disabled","items","defaultValue","className","flyoutMaxItemsCount","multiple","previewId","children","forceCustom","isOpen","renderFooter","resetDefaultValue","dataTestIdPrefix"]);let X=(0,t.useRef)(null),K=(0,t.useRef)(null),Z=(0,j.Q)(["(min-width: 1024px)","(min-width: 768px)","(min-width: 320px)"],[!1,!1,!0],!1),[Q,J]=(0,t.useState)(!1),[ee,eo]=(0,t.useState)(!1),[er,ei]=(0,t.useState)(-1),[et,en]=(0,t.useState)([]),[ea,el]=(0,t.useState)(!1),[es,ed]=(0,t.useState)($({defaultValue:U,values:C,name:B,items:P},L)),ec=(0,t.useRef)(!1);(0,t.useEffect)(()=>{G&&!U&&ed(-1)},[G,U]),(0,t.useEffect)(()=>{U&&P.length&&!ec.current&&ed($({defaultValue:U,values:C,name:B,items:P},L))},[U]);let eb=(0,t.useMemo)(()=>$({defaultValue:U,values:C,name:B,items:P},L),[U,C,B,P]);(0,t.useEffect)(()=>{W!==ee&&eo(W)},[W]),(0,t.useEffect)(()=>{L?eb>-1?en(eb):en(es):eb>-1?ei(eb):ei(es)},[es,eb]);let[eu,ep]=(0,t.useState)(es>=0?es:0);function em(e){if(L){if(!e.length)return;let o=P[e];if(X&&X.current&&o){let{value:e}=o;X.current.value=e}}else{if(e<0)return;let o=P[e];if(X&&X.current&&o){let{value:e}=o;X.current.value=e}}}function eg(e){K.current.contains(e.target)||(eo(!1),ep(0))}(0,t.useEffect)(()=>{if(L)L&&void 0!==r&&ed($({defaultValue:U,values:C,name:B,items:P},L));else{let e=$({defaultValue:U,values:C,name:B,items:P});ed(e),e>-1?ep(e):ep(0)}},[C]);let ew=()=>{for(let e=eu+1;e<P.length;e+=1)if(!P[e].disabled)return e;return eu},ef=()=>{for(let e=eu-1;e>=0;e-=1)if(!P[e].disabled)return e;return eu},eh=e=>{if(e.preventDefault(),e.key===l.Y.ArrowDown&&eu<P.length-1&&(ep(ew()),eu>N-2)){let e=K.current.querySelectorAll("li");if(e&&!L){let o=e[eu+1],r=40;o&&(r=o.getBoundingClientRect().height),K.current.lastChild.scrollBy(0,r)}}if(e.key===l.Y.ArrowUp&&eu>0&&(ep(ef()),eu>N-2)){let e=K.current.querySelectorAll("li");if(e&&!L){let o=e[eu];if(o){let e=o.getBoundingClientRect().height;K.current.lastChild.scrollBy(0,-1*e)}}}(e.key===l.Y.Enter||e.key===l.Y.Space)&&(em(eu),ed(eu),ec.current=!0,eo(!1)),e.key===l.Y.Escape&&eo(!1)},ev=(0,t.useRef)(eh);(0,t.useEffect)(()=>{ev.current=eh},[eu]),(0,t.useEffect)(()=>{let e=e=>ev.current(e),o=()=>{L||document.removeEventListener("keydown",e),document.removeEventListener("click",eg)};return ee&&(L||document.addEventListener("keydown",e),document.addEventListener("click",eg)),o},[ee,Q,eu]);let ex=L&&Q?P.length+1:L&&Z&&!D?P.length+ +!M:void 0,ey=!I&&!(L&&Q),ek="number"==typeof es?P[es]:null,e$=(0,S.X)(Y);return(0,i.jsxs)(x,Object.assign({className:"select"},{children:[z&&(0,i.jsxs)(h,Object.assign({id:"label"},{children:[z,z&&_&&"*"]})),(0,i.jsxs)(v,Object.assign({readOnly:I,opened:ee,multiple:L,className:I||M?" disabled":"",$forceCustom:D},{children:[ey&&(0,i.jsx)(a.I,{withHitSpace:!0,symbol:"chevron_down"}),(0,i.jsxs)(b,Object.assign({},H,{"data-preview-id":F,opened:ee,$forceCustom:D,ref:X,id:B,hasInitialSelectionChanged:!!(null==C?void 0:C[B])||er>=0,"aria-labelledby":"label",focused:Q,size:ex,onChange:e=>{if(ec.current=!0,L){en(Array.from(X.current.querySelectorAll("option")).map((e,o)=>!e.disabled&&e.selected&&o>0?o-1:null).filter(e=>null!==e&&e>=0));return}let o=k({selectedValue:e.target.value,items:P});o?(ed(o.index),ep(o.index),eb>-1&&em(eb)):(ed(-1),ep(0)),r&&r(o)},onKeyUp:e=>{J(!0)," "===e.key&&el(!0),(e.key===l.Y.Tab||e.key===l.Y.Enter)&&el(!1)},onBlur:e=>{J(!1),d&&d(e)},multiOpened:ea&&L,multiple:L,name:B,disabled:I||M,readOnly:I,errors:T,defaultValue:(L?"":null==C?void 0:C[B])||U,"data-testid":e$("dropdown-select")},{children:[E&&(0,i.jsx)(u,Object.assign({value:L?"":U||""},{children:E})),null==P?void 0:P.map(e=>e?(0,i.jsx)("option",Object.assign({disabled:!!e.disabled,value:e.value},{children:e.text}),e.value):"")]})),(0,i.jsxs)(c,Object.assign({"data-preview-id":F,ref:K,"aria-hidden":!ee,$forceCustom:D},{children:[(0,i.jsx)(p,Object.assign({},H,{onClick:()=>{eo(e=>n.Fr&&Z&&!D||I||M?e:!e),n.Fr&&Z&&!D&&el(!0)},opened:ee,errors:T,name:B,hasInitialSelectionChanged:!!(null==C?void 0:C[B])||er>=0||!!et.length,className:I||M?" disabled":"",disabled:M,readOnly:I,"data-testid":e$("dropdown-selectcustom-trigger")},{children:(0,i.jsx)("div",{children:L?P?et.length?et.map(e=>{var o;return(null===(o=null==P?void 0:P[e])||void 0===o?void 0:o.text)?`${P[e].text}`:E}).join(", "):E||(null===(o=P[0])||void 0===o?void 0:o.text):"":P?(null==ek?void 0:ek.text)||E:""})})),(0,i.jsxs)(m,Object.assign({flyoutMaxItemsCount:N,opened:ee,isMultipleSelect:L,withFooter:!!V},{children:[L&&(0,i.jsx)(s.m,{type:"checkbox",onItemsChange:e=>{let o=e.map(e=>k({selectedValue:e,items:P}));en(o.map(e=>e.index)),r&&r(o)},name:"checkbox-dropdown",values:et.map(e=>{var o;return null===(o=null==P?void 0:P[e])||void 0===o?void 0:o.value}),items:P}),!L&&(null==P?void 0:P.map((e,o)=>(0,i.jsxs)(w,Object.assign({onMouseMove:()=>{o!==eu&&ep(o)},isHovered:ee&&o===eu,isActive:es===o,disabled:!!e.disabled,onClick:()=>{ec.current=!0,!e.disabled&&(ed(o),X.current.selectedIndex=o,eo(!1),r&&r(e))},"data-testid":e$("dropdown-selectcustom-option"),"data-":"select-option"},{children:[e.disabled?null:o===es&&(0,i.jsx)(g,{children:(0,i.jsx)(a.I,{symbol:"Checkmark"})}),(0,i.jsx)("span",{children:e.text})]}),e.value))),L&&"function"==typeof V&&(0,i.jsx)(y,{children:(0,i.jsx)(i.Fragment,{children:V({closeDropdown:()=>{eo(!1)}})})})]})),ee&&(0,i.jsx)(i.Fragment,{children:R})]}))]})),(null==T?void 0:T[B])&&(0,i.jsx)(f.r,{children:A||T[B]})]}))}},36251:(e,o,r)=>{"use strict";r.d(o,{z:()=>m});var i=r(95155),t=r(12115),n=r(33860),a=r(85023),l=r(80902),s=r(8077),d=r(1177),c=r(93411);let b=c.Ay.div`
  position: relative;
  height: 100%;
  ${({withIcon:e})=>e?"width: calc(100% - 2.5rem)":"width: 100%"};
  ${({withIcon:e})=>e?"margin-left: 2.5rem":""};
  @media ${({theme:e})=>e.device.touch} {
    ${({withIcon:e})=>e?"width: calc(100% - 2.75rem)":""};
    ${({withIcon:e})=>e?"margin-left: 2.75rem":""};
  }

  & > input {
    -webkit-appearance: none;
    appearance: none;
    ${({hasReset:e})=>e?"padding-right: 38px;":""}
  }

  & > input[type="date"] {
    ${({hasReset:e})=>e?"padding-right: 0.5rem;":""}
  }

  & > input,
  & > input + button {
    height: 2.5rem;

    @media ${({theme:e})=>e.device.touch} {
      height: 2.75rem;
    }
  }
`,u=c.Ay.input`
  box-sizing: border-box;
  width: 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  font-family: ${({theme:e})=>e.fontTokens.defaultFont};
  font-size: ${({theme:e})=>e.fontTokens.font12[0]};
  color: ${({theme:e})=>e.colors.black};
  background-color: ${({theme:e})=>e.colors.white};
  text-align: ${({textAlignment:e})=>e};
  padding: 0 0.5rem;
  border: 1px solid
    ${({errors:e,name:o,theme:r,selected:i})=>(null==e?void 0:e[o])?r.colors.error:i?r.colors.black:r.colors.grey10};
  height: 2.5rem;
  @media ${({theme:e})=>e.device.touch} {
    height: 2.75rem;
  }

  &::placeholder {
    color: rgba(${({theme:e})=>e.colors.transparent13}, 0.36);
  }

  &:read-only {
    background-color: ${({theme:e})=>e.colors.grey04};
    border: 1px solid rgba(${({theme:e})=>e.colors.transparentBlack}, 0);
  }

  @media (hover: hover) {
    &:hover {
      ${({theme:e,readOnly:o,errors:r,name:i})=>o||(null==r?void 0:r[i])?"":`background-color: ${e.colors.offWhite};`}
      ${({theme:e,readOnly:o,errors:r,name:i,selected:t})=>t||o||(null==r?void 0:r[i])?"":`border: 1px solid ${e.colors.grey14};`}
    }
  }

  &:focus {
    ${({theme:e,focused:o})=>o?`border: 1px solid ${e.colors.primaryLight};`:""};
    ${({theme:e,focused:o})=>o?`outline: 1px solid ${e.colors.primaryLight};`:"outline: none;"};
  }

  &:active {
    ${({theme:e,readOnly:o,errors:r,name:i})=>o||(null==r?void 0:r[i])?"":`background-color: ${e.colors.grey05};`}
    ${({theme:e,readOnly:o,errors:r,name:i})=>o||(null==r?void 0:r[i])?"":`border: 1px solid ${e.colors.black};`}
  }

  &:disabled {
    background-color: ${({theme:e})=>e.colors.grey03};
    border: 1px solid rgba(${({theme:e})=>e.colors.transparentBlack}, 0);
    color: rgba(${({theme:e})=>e.colors.transparentBlack}, 0.26);
  }

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    color: transparent;
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  &::-webkit-datetime-edit {
    font-family: ${({theme:e})=>e.fontTokens.defaultFont};
    font-size: ${({theme:e})=>e.fontTokens.font12[0]};
    color: ${({theme:e,type:o,value:r})=>"date"!==o||r?e.colors.black:`rgba(${e.colors.transparent13}, 0.36);`};
  }

  // remove arrows & clear button in input fields
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // remove arrows in FF
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;var p=r(57760);let m=({onChange:e,onMouseDown:o,onBlur:r,type:c="text",errorMessage:m,errors:g,name:w,values:f,label:h,icon:v,placeholder:x,readOnly:y,reset:k,required:$,disabled:S,defaultValue:j,onIconClick:O,iconAlignment:A="left",textAlignment:T="left",inputValue:B,min:C,max:z,pattern:E,title:I,previewId:_,dataTestIdPrefix:M})=>{var P,U;let[q,N]=(0,t.useState)(!1),[L,F]=(0,t.useState)(!1),R=(0,p.X)(M);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.d,Object.assign({type:c,values:f,name:w},{children:[v&&"left"===A&&(0,i.jsx)(n.I,{withHitSpace:!0,symbol:v}),h&&(0,i.jsxs)(d.J,Object.assign({hasError:!!(null==g?void 0:g[w]),htmlFor:w},{children:[h,h&&$&&"*"]})),(0,i.jsxs)(b,Object.assign({withIcon:v&&"left"===A,hasReset:!!k},{children:[(0,i.jsx)(u,Object.assign({"data-preview-id":_,id:w,readOnly:y,placeholder:x,textAlignment:T,focused:q,selected:L,pattern:E,title:I},["date","number","time","week","month","datetime-local"].includes(c)?{min:C,max:z}:{minLength:C,maxLength:z},{onFocus:()=>F(!0),onChange:o=>{e&&e(o)},onMouseDown:e=>{N(!1),F(!1),"function"==typeof o&&o(e)},onKeyUp:e=>{e&&"Tab"===e.key&&N(!0),F(!0)},onBlur:e=>{N(!1),F(!1),r&&r(e)},errors:g,name:w,type:c,value:j||B||(null==f?void 0:f[w]),disabled:S,"data-testid":R("formfield-input")})),((null===(P=null==f?void 0:f[w])||void 0===P?void 0:P.length)===0||!(null==f?void 0:f[w]))&&!B&&"right"===A&&v&&(0,i.jsx)(a.$,{onClick:O,disabled:S,stylingType:"flat",isIcon:!0,symbol:v}),((null===(U=null==f?void 0:f[w])||void 0===U?void 0:U.length)>0||B)&&k&&(0,i.jsx)(a.$,{onClick:k,disabled:S,stylingType:"flat",isIcon:!0,symbol:"Close"}),"date"===c&&!(null==f?void 0:f[w])&&!B&&(0,i.jsx)(n.I,{symbol:"Calendar",withHitSpace:!0})]})),(null==g?void 0:g[w])&&(0,i.jsx)(s.r,{children:m||g[w]})]}))})}},55702:(e,o,r)=>{"use strict";var i=(function(e){e&&"object"==typeof e&&"default"in e?e.default:e}(r(12115)),r(21799)),t=new i,n=t.getBrowser(),a=t.getCPU(),l=t.getDevice(),s=t.getEngine(),d=t.getOS(),c=t.getUA(),b=function(e){if(!e){console.error("No userAgent string was provided");return}var o=new i(e);return{UA:o,browser:o.getBrowser(),cpu:o.getCPU(),device:o.getDevice(),engine:o.getEngine(),os:o.getOS(),ua:o.getUA(),setUserAgent:function(e){return o.setUA(e)}}},u=Object.freeze({ClientUAInstance:t,browser:n,cpu:a,device:l,engine:s,os:d,ua:c,setUa:function(e){return t.setUA(e)},parseUserAgent:b});function p(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);o&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,i)}return r}var m={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Embedded:"embedded",Browser:void 0},g={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},w={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},f={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},h=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||o},v=function(){return!!("undefined"!=typeof window&&(window.navigator||navigator))&&(window.navigator||navigator)},x=function(e){var o=v();return o&&o.platform&&(-1!==o.platform.indexOf(e)||"MacIntel"===o.platform&&o.maxTouchPoints>1&&!window.MSStream)},y=function(e){return e.type===m.Mobile},k=function(e){return e.type===m.Tablet},$=function(e){var o=e.type;return o===m.Mobile||o===m.Tablet},S=function(e){return e.type===m.SmartTv},j=function(e){return e.type===m.Browser},O=function(e){return e.type===m.Wearable},A=function(e){return e.type===m.Console},T=function(e){return e.type===m.Embedded},B=function(e){return h(e.vendor)},C=function(e){return h(e.model)},z=function(e){return h(e.type,"browser")},E=function(e){return e.name===w.Android},I=function(e){return e.name===w.Windows},_=function(e){return e.name===w.MAC_OS},M=function(e){return e.name===w.WindowsPhone},P=function(e){return e.name===w.IOS},U=function(e){return h(e.version)},q=function(e){return h(e.name)},N=function(e){return e.name===g.Chrome},L=function(e){return e.name===g.Firefox},F=function(e){return e.name===g.Chromium},R=function(e){return e.name===g.Edge},D=function(e){return e.name===g.Yandex},W=function(e){var o=e.name;return o===g.Safari||o===g.MobileSafari},V=function(e){return e.name===g.MobileSafari},G=function(e){return e.name===g.Opera},Y=function(e){var o=e.name;return o===g.InternetExplorer||o===g.Ie},H=function(e){return e.name===g.MIUI},X=function(e){return e.name===g.SamsungBrowser},K=function(e){return h(e.version)},Z=function(e){return h(e.major)},Q=function(e){return h(e.name)},J=function(e){return h(e.name)},ee=function(e){return h(e.version)},eo=function(){var e=v(),o=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"==typeof o&&/electron/.test(o)},er=function(e){return"string"==typeof e&&-1!==e.indexOf("Edg/")},ei=function(){var e=v();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream},et=function(){return x("iPad")},en=function(){return x("iPhone")},ea=function(){return x("iPod")},el=function(e){return h(e)};S(l),A(l),O(l),T(l),V(n)||et(),F(n);var es=$(l)||et();y(l),k(l)||et(),j(l),j(l),E(d),M(d),P(d)||et(),N(n),L(n),W(n),G(n),Y(n),U(d),q(d),K(n),Z(n),Q(n),B(l),C(l),J(s),ee(s),el(c),R(n)||er(c),D(n),z(l),ei(),et(),en(),ea(),eo(),er(c),R(n)&&er(c),I(d),_(d),H(n),X(n);o.Fr=es},61458:(e,o,r)=>{"use strict";r.d(o,{Kx:()=>t,hr:()=>a,vf:()=>n});var i=r(93411);let t=i.Ay.div`
  display: grid;

  &::after {
    content: attr(data-replicated-value) " ";
    white-space: pre-wrap;
    ${({autoHeight:e})=>e?"visibility: hidden":"display: none"};
    grid-area: 1 / 1 / 2 / 2;
    border: 1px solid ${({theme:e})=>e.colors.grey10};
    font: inherit;
  }
`,n=i.Ay.span.attrs({className:"charactersInfoStyled"})`
  font-size: ${({theme:e})=>e.fontTokens.font14[0]};
  line-height: ${({theme:e})=>e.fontTokens.font14[1]};
  color: ${({theme:e,error:o,currentValue:r})=>o&&(null==r?void 0:r.length)!==0?e.colors.error:e.colors.grey13};
  position: absolute;
  right: 0;
`,a=i.Ay.textarea`
  padding: 0.375rem 0.5rem;
  font-family: ${({theme:e})=>e.fontTokens.defaultFont};
  font-size: ${({theme:e})=>e.fontTokens.font12[0]};
  resize: ${({autoHeight:e})=>e?"vertical":"none"};
  min-height: 4.625rem;
  ${({autoHeight:e})=>e?"":"max-height: 4.625rem;"};
  overflow-x: hidden;
  overflow-y: ${({autoHeight:e})=>e?"hidden":"scroll"};
  grid-area: 1 / 1 / 2 / 2;
  border: 1px solid
    ${({errors:e,name:o,theme:r,selected:i})=>(null==e?void 0:e[o])?r.colors.error:i?r.colors.black:r.colors.grey10};
  cursor: text;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(${({theme:e})=>e.colors.transparent13}, 0.36);
  }

  &:read-only:not(:disabled),
  &:read-only:not(:disabled):hover {
    cursor: default;
    background-color: ${({theme:e})=>e.colors.grey04};
    border: 1px solid rgba(${({theme:e})=>e.colors.transparentBlack}, 0);
  }

  @media (hover: hover) {
    &:hover {
      ${({theme:e,disabled:o,errors:r,name:i})=>(null==r?void 0:r[i])||o?"":`background-color: ${e.colors.offWhite}`};
      ${({theme:e,selected:o,errors:r,name:i})=>o||(null==r?void 0:r[i])?"":`border: 1px solid ${e.colors.grey14}`};
    }
  }

  &:focus {
    ${({theme:e,focused:o})=>o?`border: 1px solid ${e.colors.primaryLight};`:""};
    ${({theme:e,focused:o})=>o?`outline: 1px solid ${e.colors.primaryLight};`:"outline: none;"};
  }

  &:active {
    ${({theme:e,readOnly:o,errors:r,name:i})=>o||(null==r?void 0:r[i])?"":`background-color: ${e.colors.grey05};`}
    ${({theme:e,readOnly:o,errors:r,name:i})=>o||(null==r?void 0:r[i])?"":`border: 1px solid ${e.colors.black};`}
  }

  &:disabled {
    background-color: ${({theme:e})=>e.colors.grey03};
    border: 1px solid rgba(${({theme:e})=>e.colors.transparentBlack}, 0);
    color: rgba(${({theme:e})=>e.colors.transparentBlack}, 0.26);
  }
`},80902:(e,o,r)=>{"use strict";r.d(o,{d:()=>a});var i=r(93411),t=r(61458),n=r(8077);let a=i.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({indented:e})=>e?"margin-left: 2.25rem;":""}
  ${({isToggle:e})=>e?"min-height: 2.5rem;":""}

  & > span:not(${t.vf}, ${n.r}) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    left: 0;
    bottom: 0;

    & > svg {
      height: 1rem;
    }
  }

  & span {
    pointer-events: none;
  }

  @media ${({theme:e})=>e.device.xsmall} {
    & > span:not(${t.vf}, ${n.r}) {
      height: 2.75rem;
      width: 2.75rem;
    }
  }
  @media ${({theme:e})=>e.device.large} {
    & > span:not(${t.vf}, ${n.r}) {
      height: 2.5rem;
      width: 2.5rem;
    }
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

  label {
    ${({multiLine:e})=>e?"padding-top: 0.75rem; padding-bottom: 0.5rem;":"padding-bottom: 0.25rem;"}
    ${({type:e})=>"checkbox"===e||"checkboxGroup"===e?"margin-right: auto;":""}
  }

  @supports (-moz-appearance: none) {
    button {
      ${({type:e,values:o,name:r})=>{var i;return"date"===e&&(null===(i=null==o?void 0:o[r])||void 0===i?void 0:i.length)>0?"display: none":""}}
    }
  }

  ${({isToggle:e,type:o,values:r,name:i,theme:t,indented:n})=>{var a,l;return e?`
      &:first-of-type {
        ${n?"margin-left: 0;":""};

        input + label {
          & > span {
            display: ${"checkboxGroup"===o&&(null===(a=null==r?void 0:r[i])||void 0===a?void 0:a.length)>=1?"block":""};
          }

          &:after {
            ${"checkboxGroup"===o&&(null===(l=null==r?void 0:r[i])||void 0===l?void 0:l.length)>=1?`background-color: ${t.colors.grey15}`:""};
          }
      }
    }`:""}}
`},90740:(e,o,r)=>{"use strict";r.d(o,{Q:()=>t});var i=r(12115);let t=(e,o,r)=>{let t=[],n=()=>{let e=t.findIndex(e=>e.matches);return(null==o?void 0:o[e])||r},[a,l]=(0,i.useState)(n);return(0,i.useEffect)(()=>{t=e.map(e=>window.matchMedia(e));let o=()=>l(n);return t.forEach(e=>e.addListener(o)),o(),()=>t.forEach(e=>e.removeListener(o))},[]),a}}}]);
//# sourceMappingURL=6920-aa50730a0a6ed731.js.map