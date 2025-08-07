import Link from 'next/link';
import {
  IllustrationBee,
  IllustrationPlant,
  IllustrationTrees,
  IllustrationCow,
  IllustrationDragonfly,
} from './icons/svg-illustrations';

import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  TextField,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Copyright: TextField;
  CurrentCountryLabel: TextField;
  Country: TextField;
  CountryLink: LinkField;
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const FooterDefaultComponent = (props: FooterProps): JSX.Element => (
  <div className={`component Footer ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Footer</span>
    </div>
  </div>
);

export const Default = (props: FooterProps): JSX.Element => {
  if (props.fields) {
    return (
      <section className="pre-footer pre-footer--default">
        <div className="pre-footer__inner">
          <svg
            className="pre-footer__artwork artwork"
            width="1920"
            height="592"
            viewBox="0 0 1920 592"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            style={{ visibility: 'visible' }}
          >
            <g className="artwork__clouds clouds" fill="#EEF3FB" style={{ opacity: 0 }}>
              <g
                className="clouds__layer clouds__layer--rear"
                style={{
                  translate: 'none',
                  rotate: 'none',
                  scale: 'none',
                  transformOrigin: '0px 0px',
                }}
                data-svg-origin="0 0"
                transform="matrix(1,0,0,1,-0.576,0)"
              >
                <rect width="3840" height="1" fill="none"></rect>
                <path d="M1668.07 136.479C1653.41 134.244 1637.99 135.346 1624.25 129.754C1609.2 123.625 1598.25 110.317 1584.1 102.317C1554.84 85.7721 1515.97 95.4706 1491.22 118.215C1479.22 129.218 1469.41 143.164 1454.96 150.627C1440.83 157.909 1423.76 158.212 1410.33 166.656C1398.28 174.231 1390.88 187.267 1380.78 197.299C1367.16 210.83 1358.59 214.208 1329 219.022H1749C1743.05 178.317 1708.88 142.699 1668.07 136.479Z"></path>
                <path d="M3588.07 136.479C3573.41 134.244 3557.99 135.346 3544.25 129.754C3529.2 123.625 3518.25 110.317 3504.1 102.317C3474.84 85.7721 3435.97 95.4706 3411.22 118.215C3399.22 129.218 3389.41 143.164 3374.96 150.627C3360.83 157.909 3343.76 158.212 3330.33 166.656C3318.28 174.231 3310.88 187.267 3300.78 197.299C3287.16 210.83 3278.59 214.208 3249 219.022H3669C3663.05 178.317 3628.88 142.699 3588.07 136.479Z"></path>
              </g>
              <g
                className="clouds__layer clouds__layer--front"
                style={{
                  translate: 'none',
                  rotate: 'none',
                  scale: 'none',
                  transformOrigin: '0px 0px',
                }}
                data-svg-origin="0 0"
                transform="matrix(1,0,0,1,-0.576,0)"
              >
                <rect width="3840" height="1" fill="none"></rect>
                <path d="M467.678 149.514C476.858 148.119 486.51 148.807 495.115 145.317C504.54 141.493 511.401 133.189 520.258 128.198C538.579 117.874 562.919 123.926 578.422 138.117C585.934 144.983 592.074 153.685 601.127 158.341C609.972 162.885 620.661 163.074 629.069 168.343C636.618 173.069 641.249 181.203 647.573 187.463C656.108 195.906 661.471 198.014 680 201.017H417C420.727 175.619 442.124 153.394 467.678 149.514Z"></path>
                <path d="M2387.68 149.514C2396.86 148.119 2406.51 148.807 2415.11 145.317C2424.54 141.493 2431.4 133.189 2440.26 128.198C2458.58 117.874 2482.92 123.926 2498.42 138.117C2505.93 144.983 2512.07 153.685 2521.13 158.341C2529.97 162.885 2540.66 163.074 2549.07 168.343C2556.62 173.069 2561.25 181.203 2567.57 187.463C2576.11 195.906 2581.47 198.014 2600 201.017H2337C2340.73 175.619 2362.12 153.394 2387.68 149.514Z"></path>
              </g>
            </g>
            <g
              className="artwork__horizon horizon horizon--1"
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transformOrigin: '0px 0px',
                opacity: 0.3,
              }}
              data-svg-origin="1153.718994140625 533"
              transform="matrix(0.8,0,0,0.8,230.7438,226.6)"
            >
              <g
                className="artwork__parallax artwork__trees"
                style={{
                  translate: 'none',
                  rotate: 'none',
                  scale: 'none',
                  transformOrigin: '0px 0px',
                  opacity: -1,
                }}
                data-svg-origin="791.1950073242188 335"
                transform="matrix(0.7,0,0,0.7,237.3585,100.5)"
              >
                <IllustrationTrees />
              </g>
              <path
                className="artwork__slope artwork__slope--1"
                d="M1502 533V450C1502 416.863 1475.14 390 1442 390H1179C1132.8 389.996 1087.49 400.936 1048.09 421.609L1040.8 425.439C1001.39 446.125 956.082 457.073 909.87 457.074H483V533H1502Z"
                fill="#DBF0D8"
              ></path>
              <g
                className="artwork__parallax artwork__trees"
                style={{
                  translate: 'none',
                  rotate: 'none',
                  scale: 'none',
                  transformOrigin: '0px 0px',
                  opacity: -1,
                }}
                data-svg-origin="1799.1400146484375 247"
                transform="matrix(0.7,0,0,0.7,539.742,74.1)"
              >
                <IllustrationTrees />
              </g>
              <g
                className="artwork__parallax artwork__plant"
                style={{
                  translate: 'none',
                  rotate: 'none',
                  scale: 'none',
                  transformOrigin: '0px 0px',
                  opacity: -1,
                }}
                data-svg-origin="647.49951171875 352"
                transform="matrix(0.7,0,0,0.7,194.24985,105.6)"
              >
                <IllustrationPlant />
              </g>
            </g>
            <g
              className="artwork__horizon horizon horizon--2"
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transformOrigin: '0px 0px',
              }}
              data-svg-origin="960 602"
              transform="matrix(0.9,0,0,0.9,96,120.2)"
            >
              <g className="artwork__turbine turbine turbine--small">
                <path
                  className="turbine__stem"
                  d="M349.166 204.848C349.471 204.296 349.645 203.663 349.645 202.989C349.645 200.85 347.895 199.115 345.737 199.115C343.579 199.115 341.83 200.85 341.83 202.989C341.83 203.422 341.902 203.839 342.034 204.228C342.018 204.362 342.01 204.498 342.009 204.634L341.329 317.933C340.898 318.207 340.497 318.525 340.132 318.882C339.448 319.553 338.904 320.35 338.531 321.229C338.157 322.108 337.962 323.051 337.957 324.004L337.607 412.911L352.255 412.996L352.605 324.089C352.611 323.135 352.427 322.19 352.064 321.307C351.701 320.424 351.166 319.62 350.49 318.942C349.908 318.359 349.231 317.878 348.489 317.519L349.166 204.848Z"
                  fill="#DCE7F7"
                ></path>
                <g
                  className="turbine__blades"
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    transformOrigin: '0px 0px',
                  }}
                  data-svg-origin="346 203"
                  transform="matrix(0.99988,0.01571,-0.01571,0.99988,3.23065,-5.4113)"
                >
                  <path
                    d="M377.772 227.024L383.876 234.589C384.171 234.966 383.932 235.727 383.343 236.357C382.754 236.987 382.012 237.245 381.667 236.941L344.918 204.748C344.624 204.49 344.696 203.894 345.093 203.297C345.136 203.236 345.181 203.179 345.226 203.122C345.24 203.105 345.254 203.087 345.268 203.069C345.072 202.967 344.902 202.822 344.769 202.646C344.185 201.821 343.568 201.079 342.973 200.364C341.091 198.101 339.436 196.112 339.8 192.629C340.156 189.172 341.625 185.979 343.081 182.814C343.682 181.506 344.281 180.204 344.799 178.89C346.016 175.789 347.237 172.688 348.463 169.587L350.86 163.485L354.418 154.461C354.588 154.038 355.39 153.848 356.235 154.038C357.08 154.228 357.677 154.732 357.583 155.184L354.994 167.845L354.392 170.805L347.994 202.097C348.56 202.046 349.159 202.022 349.767 201.999C351.079 201.947 352.437 201.895 353.62 201.559C353.932 201.475 354.166 201.365 354.377 201.265C354.822 201.056 355.162 200.896 355.894 201.137C357.677 201.721 359.215 203.806 360.485 205.527C360.822 205.984 361.14 206.415 361.439 206.786L366.818 213.446L373.643 221.925L375.571 224.31L377.772 227.024Z"
                    fill="#DCE7F7"
                  ></path>
                  <path
                    d="M342.952 202.181C343.327 202.058 343.813 202.418 344.133 203.061C344.201 203.183 344.259 203.311 344.308 203.441C344.493 203.913 344.506 204.434 344.342 204.913L340.077 213.983C340.042 214.073 339.985 214.153 339.91 214.214C339.835 214.276 339.746 214.317 339.65 214.334L297.408 220.715C296.951 220.783 296.384 220.187 296.128 219.366C295.872 218.546 296.03 217.781 296.456 217.637L305.508 214.626L308.801 213.535L342.952 202.181Z"
                    fill="#DCE7F7"
                  ></path>
                  <rect x="296" y="153" width="100" height="100" fill="none"></rect>
                </g>
                <path
                  d="M344.701 208.046C343.691 207.843 342.766 207.347 342.04 206.622C341.315 205.897 340.823 204.975 340.626 203.973C340.429 202.971 340.537 201.933 340.935 200.992C341.333 200.05 342.004 199.246 342.862 198.682C343.721 198.118 344.729 197.82 345.759 197.824C346.789 197.827 347.794 198.134 348.649 198.704C349.503 199.275 350.167 200.084 350.558 201.028C350.948 201.973 351.048 203.011 350.843 204.012C350.568 205.354 349.766 206.533 348.614 207.289C347.462 208.046 346.055 208.318 344.701 208.046V208.046ZM346.253 200.456C345.748 200.354 345.224 200.403 344.747 200.596C344.269 200.79 343.861 201.119 343.573 201.543C343.284 201.967 343.129 202.466 343.127 202.977C343.125 203.488 343.276 203.989 343.561 204.415C343.846 204.841 344.252 205.173 344.727 205.371C345.203 205.568 345.727 205.621 346.233 205.524C346.739 205.426 347.204 205.181 347.57 204.821C347.936 204.461 348.186 204.001 348.288 203.5C348.425 202.829 348.288 202.132 347.906 201.561C347.525 200.99 346.93 200.592 346.253 200.456V200.456Z"
                  fill="#74BDE9"
                ></path>
              </g>
              <g className="artwork__turbine turbine turbine--large">
                <path
                  d="M1705.37 133.596C1705.77 132.856 1706.01 132.005 1706.01 131.101C1706.01 128.229 1703.66 125.901 1700.76 125.901C1697.87 125.901 1695.52 128.229 1695.52 131.101C1695.52 131.682 1695.61 132.242 1695.79 132.764C1695.77 132.944 1695.76 133.126 1695.76 133.309L1694.85 285.392C1694.27 285.759 1693.73 286.186 1693.24 286.666C1692.32 287.566 1691.59 288.636 1691.09 289.816C1690.59 290.995 1690.33 292.261 1690.32 293.541L1689.85 412.882L1709.51 412.996L1709.98 293.654C1709.99 292.375 1709.74 291.106 1709.26 289.921C1708.77 288.735 1708.05 287.657 1707.14 286.746C1706.36 285.963 1705.45 285.318 1704.46 284.836L1705.37 133.596Z"
                  fill="#DCE7F7"
                ></path>
                <g
                  className="turbine__blades"
                  style={{
                    translate: 'none',
                    rotate: 'none',
                    scale: 'none',
                    transformOrigin: '0px 0px',
                  }}
                  data-svg-origin="1701.115478515625 131.1155014038086"
                  transform="matrix(0.99988,0.01571,-0.01571,0.99988,2.26396,-26.70879)"
                >
                  <path
                    d="M1743.76 163.364L1751.96 173.519C1752.35 174.024 1752.03 175.045 1751.24 175.891C1750.45 176.737 1749.46 177.083 1748.99 176.674L1699.66 133.462C1699.27 133.116 1699.37 132.315 1699.9 131.515C1699.96 131.432 1700.02 131.356 1700.08 131.28C1700.1 131.256 1700.11 131.232 1700.13 131.208C1699.87 131.071 1699.64 130.877 1699.46 130.641C1698.68 129.533 1697.85 128.537 1697.05 127.577C1694.53 124.539 1692.31 121.87 1692.79 117.194C1693.27 112.555 1695.24 108.268 1697.2 104.019C1698 102.264 1698.81 100.516 1699.5 98.7522C1701.14 94.5897 1702.78 90.4271 1704.42 86.2646L1707.64 78.0739L1712.42 65.961C1712.64 65.3934 1713.72 65.138 1714.85 65.3934C1715.99 65.6488 1716.79 66.3243 1716.66 66.9316L1713.19 83.9261L1712.38 87.8994L1703.79 129.903C1704.55 129.835 1705.36 129.803 1706.17 129.771C1707.93 129.703 1709.76 129.632 1711.34 129.182C1711.76 129.069 1712.08 128.921 1712.36 128.787C1712.96 128.506 1713.41 128.291 1714.4 128.614C1716.79 129.399 1718.85 132.198 1720.56 134.508C1721.01 135.121 1721.44 135.7 1721.84 136.198L1729.06 145.138L1738.22 156.518L1740.81 159.72L1743.76 163.364Z"
                    fill="#DCE7F7"
                  ></path>
                  <path
                    d="M1697.02 130.016C1697.53 129.852 1698.18 130.334 1698.61 131.197C1698.7 131.362 1698.78 131.532 1698.84 131.708C1699.09 132.341 1699.11 133.04 1698.89 133.683L1693.16 145.859C1693.12 145.979 1693.04 146.086 1692.94 146.169C1692.84 146.251 1692.72 146.307 1692.59 146.33L1635.89 154.895C1635.28 154.986 1634.52 154.186 1634.17 153.084C1633.83 151.983 1634.04 150.956 1634.61 150.763L1646.76 146.721L1651.18 145.257L1697.02 130.016Z"
                    fill="#DCE7F7"
                  ></path>
                  <rect x="1634" y="64" width="134.231" height="134.231" fill="none"></rect>
                </g>
                <path
                  d="M1699.37 137.889C1698.02 137.616 1696.77 136.951 1695.8 135.978C1694.83 135.005 1694.17 133.767 1693.9 132.422C1693.64 131.077 1693.78 129.684 1694.32 128.42C1694.85 127.156 1695.75 126.077 1696.9 125.32C1698.06 124.563 1699.41 124.162 1700.79 124.167C1702.17 124.172 1703.52 124.584 1704.67 125.35C1705.82 126.115 1706.71 127.201 1707.23 128.469C1707.76 129.737 1707.89 131.131 1707.62 132.474C1707.25 134.276 1706.17 135.858 1704.62 136.873C1703.08 137.889 1701.19 138.254 1699.37 137.889V137.889ZM1701.46 127.701C1700.78 127.564 1700.07 127.629 1699.43 127.889C1698.79 128.149 1698.24 128.591 1697.86 129.16C1697.47 129.729 1697.26 130.399 1697.26 131.085C1697.26 131.771 1697.46 132.443 1697.84 133.014C1698.22 133.586 1698.77 134.033 1699.41 134.298C1700.05 134.563 1700.75 134.634 1701.43 134.503C1702.11 134.372 1702.73 134.044 1703.22 133.56C1703.71 133.077 1704.05 132.46 1704.19 131.787C1704.37 130.886 1704.19 129.95 1703.67 129.184C1703.16 128.417 1702.36 127.884 1701.46 127.701V127.701Z"
                  fill="#74BDE9"
                ></path>
              </g>
              <g
                className="artwork__parallax artwork__plant"
                style={{
                  translate: 'none',
                  rotate: 'none',
                  scale: 'none',
                  transformOrigin: '0px 0px',
                  opacity: -1,
                }}
                data-svg-origin="105.87950134277344 274"
                transform="matrix(0.7,0,0,0.7,31.76385,82.2)"
              >
                <IllustrationPlant />
              </g>
              <g
                className="artwork__parallax artwork__plant"
                style={{
                  translate: 'none',
                  rotate: 'none',
                  scale: 'none',
                  transformOrigin: '0px 0px',
                  opacity: -1,
                }}
                data-svg-origin="1204 363"
                transform="matrix(0.7,0,0,0.7,361.2,108.9)"
              >
                <IllustrationPlant fill="#38B54A" /> {/* Override fill for this specific plant */}
              </g>
              <g
                className="artwork__parallax artwork__tree"
                style={{
                  translate: 'none',
                  rotate: 'none',
                  scale: 'none',
                  transformOrigin: '0px 0px',
                  opacity: -1,
                }}
                data-svg-origin="513.9924926757812 158"
                transform="matrix(0.7,0,0,0.7,154.19775,47.4)"
              >
                <IllustrationTrees fill="#A2D39B" /> {/* Override fill for this specific tree */}
              </g>
              <path
                className="artwork__slope"
                d="M2420 363V602H-500V390H412.199C509.457 389.995 604.825 405.983 687.769 436.198L703.115 441.796C777.597 468.943 862.106 484.616 949.01 487.533H1110.81C1184.27 487.531 1256.3 467.204 1318.94 428.798L1330.53 421.687C1393.17 383.303 1465.19 362.993 1538.63 363H2420Z"
                fill="#FFFFFF"
              ></path>
              <path
                className="artwork__slope artwork__slope--2"
                d="M2420 363V602H-500V390H412.199C509.457 389.995 604.825 405.983 687.769 436.198L703.115 441.796C777.597 468.943 862.106 484.616 949.01 487.533H1110.81C1184.27 487.531 1256.3 467.204 1318.94 428.798L1330.53 421.687C1393.17 383.303 1465.19 362.993 1538.63 363H2420Z"
                fill="#A2D39B"
              ></path>
              <g
                className="artwork__parallax artwork__tree"
                style={{
                  translate: 'none',
                  rotate: 'none',
                  scale: 'none',
                  transformOrigin: '0px 0px',
                  opacity: -1,
                }}
                data-svg-origin="1507.183349609375 93"
                transform="matrix(0.7,0,0,0.7,452.155,27.9)"
              >
                <IllustrationTrees fill="#A2D39B" /> {/* Override fill for this specific tree */}
              </g>
              <g className="artwork__cow cow">
                <IllustrationCow />
              </g>
              <g className="artwork__bee bee" style={{ visibility: 'hidden' }}>
                <IllustrationBee />
              </g>
              <path
                className="motion-path motion-path--bee"
                d="M2033 305C1969.67 289 1780.8 258.2 1532 263C1221 269 1195 335 982 339C769 343 594 297 425 290C256 283 96 330 -111 313"
              ></path>
              <g className="artwork__dragonfly dragonfly" style={{ visibility: 'hidden' }}>
                <IllustrationDragonfly />
              </g>
              <path
                className="motion-path motion-path--dragonfly"
                d="M-86 286C94 258 358.295 257.982 550 286C900.279 337.195 1400 520 2178 248"
              ></path>
            </g>
            <g
              className="artwork__horizon horizon horizon--3"
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transformOrigin: '0px 0px',
              }}
              data-svg-origin="960 665.5"
              transform="matrix(1,0,0,1,0,30)"
            >
              <path
                className="artwork__foreground"
                d="M0 665.5V427H409.524C503.774 426.993 596.193 448.489 676.571 489.113L691.442 496.64C771.826 537.288 864.26 558.802 958.53 558.803H1920V665.5H0Z"
                fill="white"
              ></path>
              <g
                className="artwork__parallax artwork__plant"
                style={{
                  translate: 'none',
                  rotate: 'none',
                  scale: 'none',
                  transformOrigin: '0px 0px',
                  opacity: -1,
                }}
                data-svg-origin="1442.5 417"
                transform="matrix(0.7,0,0,0.7,432.75,125.1)"
              >
                <IllustrationPlant fill="white" /> {/* Override fill for this specific plant */}
              </g>
            </g>
          </svg>
          <div className="pre-footer__message ls-container--xs ls-gutter">
            <h2 className="pre-footer__title title--l">Nourishing by nature</h2>
            <p className="pre-footer__text text--l">Goede voeding in balans met de planeet</p>
            <Link className="button pre-footer__button" href="/nl/duurzaamheid/">
              <span className="button__label">Duurzaamheid</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  return <FooterDefaultComponent {...props} />;
};
