import React from 'react';
import {
  ImageField,
  TextField,
  RichTextField,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Number: TextField;
  Label: TextField;
  Name: TextField;
  Category: TextField;
  Family: TextField;
  ShortDescription: RichTextField;
  LongDescription: RichTextField;
  MasterAsset: ImageField;
}

type TheRigFooterProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const TheRigHeaderDefaultComponent = (props: TheRigFooterProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: TheRigFooterProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const direction = sitecoreContext.language === 'ar-SA' ? 'rtl' : 'ltr';

  if (props.fields) {
    return (
      <footer className="css-1xiwo48" dir={direction}>
        <style data-emotion="css rn69un">
          {`
            .css-rn69un{
              position:absolute;
              inset-inline-start:0;
              top:-80px;
              width:2000px;
              height:160px;
              min-width:100%;
              mix-blend-mode:hard-light;
              }
              @media screen and (max-width: 899px){
                .css-rn69un{
                  width:0px;
                }
                }
                @media screen and (max-width: 1440px){
                  .css-rn69un{
                    left:-280px;
                    }
                    }
                    `}
        </style>
        <img src="https://therig.sa/rust/rust-mbl.png" className="css-rn69un" alt="" />
        <style data-emotion="css 1oguv67">{`.css-1oguv67{border-bottom:2px solid #494949;padding-bottom:32px;margin:auto auto 32px;max-width:1440px;}`}</style>
        <style data-emotion="css 14epr7c">{`.css-14epr7c{--Grid-columns:12;--Grid-columnSpacing:0px;--Grid-rowSpacing:0px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;min-width:0;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:calc(var(--Grid-rowSpacing) / -2) calc(var(--Grid-columnSpacing) / -2);border-bottom:2px solid #494949;padding-bottom:32px;margin:auto auto 32px;max-width:1440px;}`}</style>
        <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-row css-14epr7c">
          <style data-emotion="css scklcb">{`.css-scklcb{--Grid-columns:12;--Grid-columnSpacing1:var(--Grid-columnSpacing);--Grid-rowSpacing1:var(--Grid-rowSpacing);-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;min-width:0;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:calc(var(--Grid-rowSpacing1) / -2) calc(var(--Grid-columnSpacing1) / -2);padding:calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);margin-bottom:30px;}@media (min-width:600px){.css-scklcb{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns) + var(--Grid-columnSpacing1));}}@media (min-width:900px){.css-scklcb{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns) + var(--Grid-columnSpacing1));}}`}</style>
          <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-md-12 css-scklcb">
            <style data-emotion="css 1ecy7u2">{`.css-1ecy7u2.show-pif{display:none;}@media screen and (max-width: 599px){.css-1ecy7u2.hide-pif{display:none;}.css-1ecy7u2.show-pif{display:block;text-align:left;margin-top:16px;}}`}</style>
            <style data-emotion="css 16o6wsf">{`.css-16o6wsf{--Grid-columns:12;--Grid-columnSpacing2:var(--Grid-columnSpacing1);--Grid-rowSpacing2:var(--Grid-rowSpacing1);-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;min-width:0;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:calc(var(--Grid-rowSpacing2) / -2) calc(var(--Grid-columnSpacing2) / -2);padding:calc(var(--Grid-rowSpacing1) / 2) calc(var(--Grid-columnSpacing1) / 2);-webkit-order:2;-ms-flex-order:2;order:2;-webkit-box-pack:end;-ms-flex-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;}@media (min-width:600px){.css-16o6wsf{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 6 / var(--Grid-columns) + var(--Grid-columnSpacing2));}}@media (min-width:900px){.css-16o6wsf{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 6 / var(--Grid-columns) + var(--Grid-columnSpacing2));}}.css-16o6wsf.show-pif{display:none;}@media screen and (max-width: 599px){.css-16o6wsf.hide-pif{display:none;}.css-16o6wsf.show-pif{display:block;text-align:left;margin-top:16px;}}`}</style>
            <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-row MuiGrid-grid-sm-6 MuiGrid-grid-md-6 hide-pif css-16o6wsf">
              <style data-emotion="css 1v7fosp">{`.css-1v7fosp{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.css-1v7fosp img{height:44px;-webkit-transform:translate3d(0, 0, 0);}`}</style>
              <style data-emotion="css 11tvyti">{`.css-11tvyti{min-width:0;box-sizing:border-box;padding:calc(var(--Grid-rowSpacing2) / 2) calc(var(--Grid-columnSpacing2) / 2);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.css-11tvyti img{height:44px;-webkit-transform:translate3d(0, 0, 0);}`}</style>
              <div className="MuiGrid-root MuiGrid-direction-xs-row css-11tvyti">
                <img src="https://therig.sa/footer/rig_logo_white.svg" alt="THE RIG. logo" />
              </div>
            </div>
            <style data-emotion="css 1sw6vb">{`.css-1sw6vb{min-width:0;box-sizing:border-box;padding:calc(var(--Grid-rowSpacing1) / 2) calc(var(--Grid-columnSpacing1) / 2);text-align:start;-webkit-order:1;-ms-flex-order:1;order:1;}@media (min-width:600px){.css-1sw6vb{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 6 / var(--Grid-columns));}}@media (min-width:900px){.css-1sw6vb{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 6 / var(--Grid-columns));}}.css-1sw6vb.show-pif{display:none;}@media screen and (max-width: 599px){.css-1sw6vb.hide-pif{display:none;}.css-1sw6vb.show-pif{display:block;text-align:left;margin-top:16px;}}`}</style>
            <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-6 MuiGrid-grid-md-6 css-1sw6vb">
              <style data-emotion="css 172taml">{`.css-172taml{min-width:0;box-sizing:border-box;padding:calc(var(--Grid-rowSpacing1) / 2) calc(var(--Grid-columnSpacing1) / 2);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.css-172taml img{height:44px;-webkit-transform:translate3d(0, 0, 0);}`}</style>
              <div className="MuiGrid-root MuiGrid-direction-xs-row css-172taml">
                <img src="https://therig.sa/footer/PIFCo-logo-en.png" alt="" />
              </div>
            </div>
          </div>
          <style data-emotion="css 1bldu4w">{`.css-1bldu4w{--Grid-columns:12;--Grid-columnSpacing1:var(--Grid-columnSpacing);--Grid-rowSpacing1:var(--Grid-rowSpacing);-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;min-width:0;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:calc(var(--Grid-rowSpacing1) / -2) calc(var(--Grid-columnSpacing1) / -2);padding:calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);}@media (min-width:600px){.css-1bldu4w{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns) + var(--Grid-columnSpacing1));}}@media (min-width:900px){.css-1bldu4w{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns) + var(--Grid-columnSpacing1));}}`}</style>
          <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-md-12 css-1bldu4w">
            <style data-emotion="css 6zothf">{`.css-6zothf{min-width:0;box-sizing:border-box;padding:calc(var(--Grid-rowSpacing1) / 2) calc(var(--Grid-columnSpacing1) / 2);}@media (min-width:600px){.css-6zothf{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns));}}@media (min-width:900px){.css-6zothf{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 6 / var(--Grid-columns));}}@media (min-width:1200px){.css-6zothf{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 7 / var(--Grid-columns));}}`}</style>
            <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-7 css-6zothf">
              <style data-emotion="css 1cchult">{`.css-1cchult{margin-bottom:20px;}@media screen and (max-width: 899px){.css-1cchult{display:initial;}}`}</style>
              <div className="css-1cchult">
                <style data-emotion="css 10frtmk">{`.css-10frtmk{font-family:'Changa',sans-serif!important;font-style:normal;font-weight:400;font-size:1.6rem;line-height:160%;color:#E1E5EE;-webkit-transition:0.2s;transition:0.2s;-webkit-margin-end:24px;margin-inline-end:24px;-webkit-padding-end:16px;padding-inline-end:16px;display:inline-block;margin-bottom:12px;border-inline-end:2px solid #FFFFFF;}.css-10frtmk:hover{color:#FFFFFF;}@media screen and (max-width: 899px){.css-10frtmk{display:block;-webkit-margin-end:16px;margin-inline-end:16px;}.css-10frtmk.top{display:inline-block;margin-bottom:20px;}}.css-10frtmk:last-child{border-inline-end:none;}`}</style>
                <Link className="top css-10frtmk" href="/about/">
                  About THE RIG.
                </Link>
                <Link className="top css-10frtmk" href="/press/">
                  Press
                </Link>
              </div>
              <style data-emotion="css jqavj3">{`.css-jqavj3{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:start;justify-content:start;border-radius:2px;}.css-jqavj3 .disable{opacity:0.4;background:#777!important;}@media screen and (max-width: 899px){.css-jqavj3{-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:start;justify-content:start;margin-bottom:40px;}}.css-jqavj3 .disable:hover .toolTip{visibility:visible;}`}</style>
              <div className="css-jqavj3">
                <style data-emotion="css rtflpr">{`.css-rtflpr{width:36px;position:relative;height:36px;-webkit-margin-end:8px;margin-inline-end:8px;background-color:#FFD26A;border-radius:2px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;}.css-rtflpr div{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.css-rtflpr svg{color:#1D1D1B;height:20px;width:20px;}.css-rtflpr.enable:hover{background-color:#FCA900;}`}</style>
                <Link
                  className="enable css-rtflpr"
                  target="_blank"
                  href="https://twitter.com/THERIGsa"
                >
                  <div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        className="injected-svg"
                        data-src="https://therig.sa/footer/social/tw.svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        role="img"
                      >
                        <path
                          d="M0.0457559 0L7.29149 9.92807L0 18H1.64102L8.02471 10.9329L13.1826 18H18.767L11.1136 7.5135L17.9005 0H16.2595L10.3804 6.50866L5.63022 0H0.0457559ZM2.459 1.2387H5.02452L16.3534 16.7611H13.7879L2.459 1.2387Z"
                          fill="#1D1D1B"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Link>
                <Link
                  className="enable css-rtflpr"
                  target="_blank"
                  href="https://www.linkedin.com/company/therigsa"
                >
                  <div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        className="injected-svg"
                        data-src="https://therig.sa/footer/social/li.svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        role="img"
                      >
                        <path
                          d="M3.05176e-05 2.41981C3.05176e-05 1.8426 0.202739 1.36641 0.608139 0.991237C1.01354 0.616051 1.54058 0.428467 2.18922 0.428467C2.82629 0.428467 3.34172 0.613159 3.73555 0.982579C4.14095 1.36353 4.34366 1.85991 4.34366 2.47176C4.34366 3.02587 4.14675 3.48762 3.75293 3.85704C3.34753 4.23799 2.8147 4.42847 2.15447 4.42847H2.1371C1.50002 4.42847 0.984592 4.23799 0.590764 3.85704C0.196936 3.47608 3.05176e-05 2.997 3.05176e-05 2.41981ZM0.225899 17.5713V6.00422H4.08304V17.5713H0.225899ZM6.22011 17.5713H10.0773V11.1124C10.0773 10.7084 10.1236 10.3967 10.2162 10.1774C10.3784 9.78488 10.6245 9.45298 10.9547 9.18171C11.2848 8.91042 11.6989 8.77478 12.1969 8.77478C13.4942 8.77478 14.1429 9.64635 14.1429 11.3895V17.5713H18V10.9393C18 9.23077 17.5946 7.93496 16.7838 7.05184C15.973 6.16872 14.9016 5.72717 13.5695 5.72717C12.0753 5.72717 10.9112 6.36786 10.0773 7.64924V7.68388H10.0599L10.0773 7.64924V6.00422H6.22011C6.24327 6.37362 6.25486 7.52225 6.25486 9.45011C6.25486 11.378 6.24327 14.085 6.22011 17.5713Z"
                          fill="#1D1D1B"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Link>
                <Link className="disable 2-disable css-rtflpr" target="" href="javascript:void(0);">
                  <div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        className="injected-svg"
                        data-src="https://therig.sa/footer/social/yt.svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        role="img"
                      >
                        <path
                          d="M9.92081 14.0201L6.02275 13.9473C4.76064 13.9219 3.49539 13.9726 2.25803 13.7096C0.375725 13.3166 0.242375 11.3898 0.102839 9.77362C-0.0894277 7.50145 -0.0149955 5.18804 0.347836 2.93484C0.552667 1.67056 1.35876 0.916149 2.60535 0.834055C6.81352 0.536124 11.0497 0.571432 15.2485 0.710428C15.692 0.72317 16.1385 0.792813 16.5757 0.872086C18.7341 1.25872 18.7868 3.44219 18.9267 5.28025C19.0662 7.13728 19.0073 9.00385 18.7406 10.8482C18.5266 12.3753 18.1173 13.656 16.3896 13.7796C14.225 13.9412 12.1101 14.0714 9.93937 14.03C9.93947 14.0201 9.927 14.0201 9.92081 14.0201ZM7.62913 10.1539C9.26035 9.19683 10.8604 8.25567 12.4823 7.30497C10.8481 6.34786 9.25102 5.4067 7.62913 4.45601V10.1539Z"
                          fill="#1D1D1B"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <style data-emotion="css 1xr9vc3">{`.css-1xr9vc3{visibility:hidden;bottom:-29px;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:2px 6px;gap:8px;border-radius:4px;background:#494949;font-size:12px;font-style:normal;font-weight:300;line-height:160%;color:#FFF;text-align:center;position:absolute;z-index:1;}`}</style>
                  <div style={{ left: '-28px' }} className="toolTip css-1xr9vc3">
                    coming soon
                  </div>
                </Link>
                <Link className="disable 3-disable css-rtflpr" target="" href="javascript:void(0);">
                  <div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        className="injected-svg"
                        data-src="https://therig.sa/footer/social/in.svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        role="img"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 9C0 5.40486 0 3.60729 0.856692 2.31255C1.23925 1.73439 1.73439 1.23925 2.31255 0.856692C3.60729 0 5.40486 0 9 0C12.5951 0 14.3927 0 15.6874 0.856692C16.2656 1.23925 16.7608 1.73439 17.1433 2.31255C18 3.60729 18 5.40486 18 9C18 12.5951 18 14.3927 17.1433 15.6874C16.7608 16.2656 16.2656 16.7608 15.6874 17.1433C14.3927 18 12.5951 18 9 18C5.40486 18 3.60729 18 2.31255 17.1433C1.73439 16.7608 1.23925 16.2656 0.856692 15.6874C0 14.3927 0 12.5951 0 9ZM13.6593 9.00023C13.6593 11.5735 11.5732 13.6596 8.99984 13.6596C6.42652 13.6596 4.34043 11.5735 4.34043 9.00023C4.34043 6.42691 6.42652 4.34082 8.99984 4.34082C11.5732 4.34082 13.6593 6.42691 13.6593 9.00023ZM8.99984 12.0832C10.7025 12.0832 12.0828 10.7029 12.0828 9.00023C12.0828 7.29753 10.7025 5.91722 8.99984 5.91722C7.29714 5.91722 5.91684 7.29753 5.91684 9.00023C5.91684 10.7029 7.29714 12.0832 8.99984 12.0832ZM13.8433 5.20155C14.4479 5.20155 14.9381 4.71138 14.9381 4.10673C14.9381 3.50207 14.4479 3.0119 13.8433 3.0119C13.2386 3.0119 12.7485 3.50207 12.7485 4.10673C12.7485 4.71138 13.2386 5.20155 13.8433 5.20155Z"
                          fill="#1D1D1B"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div style={{ left: '-28px' }} className="toolTip css-1xr9vc3">
                    coming soon
                  </div>
                </Link>
                <Link className="disable 4-disable css-rtflpr" target="" href="javascript:void(0);">
                  <div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="18"
                        viewBox="0 0 10 18"
                        fill="none"
                        className="injected-svg"
                        data-src="https://therig.sa/footer/social/fb.svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        role="img"
                      >
                        <path
                          d="M6.46384 18V9.78936H9.35853L9.79192 6.5895H6.46376V4.54653C6.46376 3.6201 6.73394 2.98879 8.12938 2.98879L9.90907 2.98799V0.126072C9.60126 0.0871459 8.54474 0 7.31576 0C4.74974 0 2.993 1.49118 2.993 4.22972V6.5895H0.0908813V9.78936H2.993V17.9999H6.46384V18Z"
                          fill="#1D1D1B"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div style={{ left: '-28px' }} className="toolTip css-1xr9vc3">
                    coming soon
                  </div>
                </Link>
              </div>
            </div>
            <style data-emotion="css 1nbejvw">{`.css-1nbejvw{--Grid-columns:12;--Grid-columnSpacing2:var(--Grid-columnSpacing1);--Grid-rowSpacing2:var(--Grid-rowSpacing1);-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns) + var(--Grid-columnSpacing2));-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;min-width:0;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:calc(var(--Grid-rowSpacing2) / -2) calc(var(--Grid-columnSpacing2) / -2);padding:calc(var(--Grid-rowSpacing1) / 2) calc(var(--Grid-columnSpacing1) / 2);width:100%;}@media (min-width:600px){.css-1nbejvw{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns) + var(--Grid-columnSpacing2));}}@media (min-width:900px){.css-1nbejvw{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 6 / var(--Grid-columns) + var(--Grid-columnSpacing2));}}@media (min-width:1200px){.css-1nbejvw{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 5 / var(--Grid-columns) + var(--Grid-columnSpacing2));}}`}</style>
            <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-row MuiGrid-grid-lg-5 MuiGrid-grid-md-6 MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 css-1nbejvw">
              <style data-emotion="css xe0fef">{`.css-xe0fef{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;}`}</style>
              <style data-emotion="css 1e2r27i">{`.css-1e2r27i{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns));min-width:0;box-sizing:border-box;padding:calc(var(--Grid-rowSpacing2) / 2) calc(var(--Grid-columnSpacing2) / 2);width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;}@media (min-width:600px){.css-1e2r27i{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns));}}@media (min-width:900px){.css-1e2r27i{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns));}}`}</style>
              <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 css-1e2r27i">
                <style data-emotion="css 1496lx8">{`.css-1496lx8{font-family:'Changa',sans-serif!important;font-style:normal;font-weight:400;font-size:1.4rem;line-height:140%;color:#FFFFFF;text-transform:uppercase;margin-bottom:16px;}`}</style>
                <div className="css-1496lx8">BE THE FIRST TO KNOW</div>
                <style data-emotion="css yw3nq1">{`.css-yw3nq1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border:1px solid transparent;}@media screen and (max-width: 599px){.css-yw3nq1{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}`}</style>
                <form className="css-yw3nq1">
                  <style data-emotion="css 1w17zfj">{`.css-1w17zfj{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;padding:12px 20px;border-radius:2px!important;background-color:rgba(255,255,255,.2);}@media screen and (max-width: 599px){.css-1w17zfj{margin-bottom:10px;max-width:433px;}}`}</style>
                  <div style={{ marginRight: '15px', marginLeft: '0px' }} className="css-1w17zfj">
                    <style data-emotion="css vquyny">{`.css-vquyny{background-color:transparent;border:none;width:70%;color:#FFFFFF;font-family:'Changa',sans-serif;font-style:normal;font-weight:400;font-size:1.6rem;line-height:2.4rem;}.css-vquyny::-webkit-input-placeholder{font-family:'Changa',sans-serif!important;font-style:normal;font-weight:400;font-size:1.6rem;line-height:160%;color:#FFFFFF;}.css-vquyny::-moz-placeholder{font-family:'Changa',sans-serif!important;font-style:normal;font-weight:400;font-size:1.6rem;line-height:160%;color:#FFFFFF;}.css-vquyny:-ms-input-placeholder{font-family:'Changa',sans-serif!important;font-style:normal;font-weight:400;font-size:1.6rem;line-height:160%;color:#FFFFFF;}.css-vquyny::placeholder{font-family:'Changa',sans-serif!important;font-style:normal;font-weight:400;font-size:1.6rem;line-height:160%;color:#FFFFFF;}.css-vquyny:focus,.css-vquyny:visited,.css-vquyny:focus-visible{outline:none;}`}</style>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Your E-mail"
                      aria-describedby=""
                      className="css-vquyny"
                      value=""
                    />
                  </div>
                  <style data-emotion="css 1xth1r">{`.css-1xth1r{font-family:'Changa',sans-serif!important;font-style:normal;font-weight:600;font-size:1.4rem;line-height:2.6rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-transform:uppercase;border-radius:2px;cursor:pointer;margin:2px;padding:8px 24px;background-color:#1D1D1B;color:#FFFFFF;font-size:14px;font-style:normal;line-height:normal;text-transform:uppercase;border-radius:2px;background:#FFD26A;color:#1D1D1B!important;}.css-1xth1r:has(svg){-webkit-padding-end:8px;padding-inline-end:8px;}.css-1xth1r svg{margin-inline:8px;-webkit-transition:margin 0.2s ease-in;transition:margin 0.2s ease-in;}.css-1xth1r:hover{border-radius:4px;margin:0;}.css-1xth1r:hover svg{-webkit-margin-end:0;margin-inline-end:0;-webkit-margin-start:16px;margin-inline-start:16px;}.css-1xth1r[disabled]{opacity:0.5;cursor:not-allowed;}.css-1xth1r[disabled]:hover svg{margin-inline:8px;}.css-1xth1r:hover{border:2px solid #1D1D1B;}.css-1xth1r:active{color:#FFC845;}.css-1xth1r svg{-webkit-padding-end:0px!important;padding-inline-end:0px!important;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}@media screen and (max-width: 899px){.css-1xth1r{padding:8px!important;width:100%;margin:0px;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;}}.css-1xth1r:hover{border:2px solid #FFD26A;margin-left:auto;}.css-1xth1r:active{color:#1D1D1B;}`}</style>
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    style={{ backgroundColor: '#FFD26A' }}
                    className="css-1xth1r"
                  >
                    <style data-emotion="css 9c55vl">{`.css-9c55vl{font-family:'Changa',sans-serif!important;font-style:normal;font-weight:600;font-size:1.4rem;line-height:2.6rem;}`}</style>
                    <span className="css-9c55vl">Subscribe</span>
                    <style data-emotion="css 6flbmm">{`.css-6flbmm{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:1em;height:1em;display:inline-block;fill:currentColor;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-transition:fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;transition:fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;font-size:2.1875rem;}`}</style>
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-6flbmm"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="KeyboardDoubleArrowRightIcon"
                    >
                      <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                      <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
                    </svg>
                  </button>
                </form>
                <style data-emotion="css pl0z93">{`.css-pl0z93{height:27.2px;display:none;}`}</style>
                <div className="css-pl0z93"></div>
              </div>
            </div>
          </div>
        </div>
        <style data-emotion="css 18ua6wv">{`.css-18ua6wv{--Grid-columns:12;--Grid-columnSpacing:0px;--Grid-rowSpacing:0px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;min-width:0;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:calc(var(--Grid-rowSpacing) / -2) calc(var(--Grid-columnSpacing) / -2);}`}</style>
        <div
          className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-row css-18ua6wv"
          style={{ maxWidth: '1440px', margin: 'auto' }}
        >
          <style data-emotion="css 2v2l7j">{`.css-2v2l7j{-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:start;justify-content:start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width: 899px){.css-2v2l7j{display:initial;}}`}</style>
          <style data-emotion="css tq4q1u">{`.css-tq4q1u{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns));min-width:0;box-sizing:border-box;padding:calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:start;justify-content:start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media (min-width:600px){.css-tq4q1u{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns));}}@media (min-width:900px){.css-tq4q1u{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 6 / var(--Grid-columns));}}@media screen and (max-width: 899px){.css-tq4q1u{display:initial;}}`}</style>
          <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 css-tq4q1u">
            <style data-emotion="css 1hrf48z">{`.css-1hrf48z{font-family:'Changa',sans-serif!important;font-style:normal;font-weight:400;font-size:1.6rem;line-height:160%;color:#E1E5EE;-webkit-transition:0.2s;transition:0.2s;-webkit-margin-end:40px;margin-inline-end:40px;-webkit-padding-end:16px;padding-inline-end:16px;-webkit-margin-end:16px;margin-inline-end:16px;border-inline-end:2px solid #FFFFFF;}.css-1hrf48z:hover{color:#FFFFFF;}.css-1hrf48z:last-child{border-inline-end:none;}@media screen and (max-width: 899px){.css-1hrf48z{display:block;-webkit-margin-end:16px;margin-inline-end:16px;border-inline-end:none;}.css-1hrf48z.bottom{margin-bottom:24px;}}`}</style>
            <Link className="bottom css-1hrf48z" href="/terms/">
              Terms &amp; Conditions
            </Link>
            <Link className="bottom css-1hrf48z" href="/privacy/">
              Privacy Policy
            </Link>
            <Link className="bottom css-1hrf48z" href="/cookie_policy/">
              Cookie Policy
            </Link>
            <Link className="bottom css-1hrf48z" href="/whistleblowing/">
              Whistleblowing
            </Link>
          </div>
          <style data-emotion="css 1umk73g">{`.css-1umk73g{font-family:'Changa',sans-serif!important;font-style:normal;font-size:1.8rem;line-height:3.3rem;font-weight:300;color:#E1E5EE;text-align:end;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-family:Changa;font-size:12px;font-style:normal;font-weight:300;line-height:160%;}@media screen and (max-width: 899px){.css-1umk73g{text-align:initial;}}`}</style>
          <style data-emotion="css 1jwntlb">{`.css-1jwntlb{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns));min-width:0;box-sizing:border-box;padding:calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);font-family:'Changa',sans-serif!important;font-style:normal;font-size:1.8rem;line-height:3.3rem;font-weight:300;color:#E1E5EE;text-align:end;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-family:Changa;font-size:12px;font-style:normal;font-weight:300;line-height:160%;}@media (min-width:600px){.css-1jwntlb{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 12 / var(--Grid-columns));}}@media (min-width:900px){.css-1jwntlb{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 6 / var(--Grid-columns));}}@media screen and (max-width: 899px){.css-1jwntlb{text-align:initial;}}`}</style>
          <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 css-1jwntlb">
            COPYRIGHT © 2021 THE RIG. ALL RIGHTS RESERVED.
          </div>
        </div>
        <style data-emotion="css 1q37vrn">{`.css-1q37vrn{min-width:0;box-sizing:border-box;padding:calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);}@media (min-width:600px){.css-1q37vrn{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 6 / var(--Grid-columns));}}@media (min-width:900px){.css-1q37vrn{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-basis:auto;-ms-flex-preferred-size:auto;flex-basis:auto;width:calc(100% * 6 / var(--Grid-columns));}}.css-1q37vrn.show-pif{display:none;}@media screen and (max-width: 599px){.css-1q37vrn.hide-pif{display:none;}.css-1q37vrn.show-pif{display:block;text-align:left;margin-top:16px;}}`}</style>
        <div className="MuiGrid-root MuiGrid-direction-xs-row MuiGrid-grid-sm-6 MuiGrid-grid-md-6 show-pif css-1q37vrn">
          <style data-emotion="css 1p600jf">{`.css-1p600jf{min-width:0;box-sizing:border-box;padding:calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.css-1p600jf img{height:44px;-webkit-transform:translate3d(0, 0, 0);}`}</style>
          <div className="MuiGrid-root MuiGrid-direction-xs-row css-1p600jf">
            <img src="https://therig.sa/footer/rig_logo_white.svg" alt="THE RIG. logo" />
          </div>
        </div>
      </footer>
    );
  }

  return <TheRigHeaderDefaultComponent {...props} />;
};
