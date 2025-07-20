import React from 'react';
import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <>
      <div className="flex w-full items-center ">
        <div className="flex w-2/12 items-center" data-testid="logotype">
          <Link
            className="z-30 flex text-2xl font-semibold transition duration-300 ease-in-out"
            aria-label="Home"
            href="/"
          >
            <svg
              width="128"
              height="47"
              viewBox="0 0 110 40"
              fill="#002554"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="z-50 transition duration-700 ease-in-out"
            >
              <path d="M35.3832 33.7277H34.1738V39.8268H35.3832V33.7277Z"></path>
              <path d="M53.1092 37.1595H55.2596V36.165H53.1092V34.7222H55.6489V33.7277H51.9236V39.8268H55.7071V38.8323H53.1092V37.1595Z"></path>
              <path d="M29.3034 35.2796C29.3034 34.7968 29.8148 34.5956 30.2682 34.5956C30.6681 34.5988 31.0536 34.7436 31.355 35.0037L31.9884 34.1644C31.4633 33.7744 30.82 33.5717 30.1635 33.5896C29.1232 33.5896 28.0887 34.2277 28.0887 35.3141C28.0887 37.2974 30.9946 36.918 30.9946 38.1596C30.9905 38.2723 30.9629 38.3829 30.9137 38.4846C30.8645 38.5863 30.7947 38.6769 30.7085 38.7508C30.6224 38.8247 30.5219 38.8802 30.4131 38.914C30.3043 38.9478 30.1897 38.9591 30.0764 38.9472C29.7954 38.9381 29.5193 38.8728 29.2646 38.7552C29.0098 38.6376 28.7819 38.4702 28.5944 38.2631L27.804 39.0334C28.4155 39.6163 29.2272 39.949 30.0764 39.9647C30.3409 39.9826 30.6064 39.9482 30.8573 39.8637C31.1083 39.7792 31.3398 39.6461 31.5383 39.4722C31.7368 39.2984 31.8983 39.0872 32.0135 38.851C32.1287 38.6148 32.1953 38.3583 32.2093 38.0964C32.2093 35.9982 29.3034 36.2684 29.3034 35.2682"></path>
              <path d="M48.058 38.959C48.6274 38.9727 49.1798 38.7665 49.5981 38.3842L50.3653 39.1372C49.7289 39.7057 48.8979 40.0139 48.0406 39.9995C47.5182 39.9844 47.0073 39.8445 46.5516 39.5917C46.0958 39.3389 45.7087 38.9808 45.4232 38.5478C45.1378 38.1149 44.9626 37.62 44.9126 37.1055C44.8625 36.591 44.9392 36.0722 45.1359 35.5934C45.3327 35.1146 45.6437 34.69 46.0424 34.3559C46.4411 34.0218 46.9156 33.7881 47.4255 33.6749C47.9353 33.5616 48.4653 33.5721 48.9702 33.7055C49.475 33.8388 49.9397 34.0911 50.3246 34.4407L49.54 35.257C49.2803 35.0249 48.9675 34.8586 48.6285 34.7725C48.2894 34.6864 47.9343 34.6829 47.5937 34.7625C47.253 34.8421 46.937 35.0022 46.6727 35.2293C46.4085 35.4563 46.2039 35.7434 46.0766 36.0659C45.9493 36.3884 45.9031 36.7367 45.9419 37.0808C45.9807 37.4249 46.1034 37.7545 46.2994 38.0413C46.4955 38.3281 46.759 38.5636 47.0673 38.7274C47.3757 38.8913 47.7196 38.9787 48.0696 38.982"></path>
              <path d="M41.7404 37.6309V33.7277H42.8795V39.8268H42.06L38.9333 35.9063V39.8268H37.7942V33.7277H38.6136L41.7404 37.6309Z"></path>
              <path d="M66.0748 33.5688C65.4973 33.5673 64.9426 33.7919 64.532 34.1937C64.1215 34.5955 63.8884 35.1417 63.8838 35.713C63.883 35.9917 63.9384 36.2677 64.0469 36.5249C64.1554 36.7821 64.3148 37.0153 64.5156 37.2107C64.7165 37.4062 64.9548 37.56 65.2165 37.6631C65.4783 37.7662 65.7583 37.8165 66.04 37.8112H66.0748L64.9125 39.7542H66.226L67.6789 37.3283C68.0237 36.8316 68.2246 36.2512 68.2601 35.6497C68.2534 35.3656 68.1894 35.0857 68.0718 34.8264C67.9543 34.5671 67.7855 34.3337 67.5754 34.1398C67.3653 33.946 67.1182 33.7956 66.8485 33.6975C66.5789 33.5995 66.2921 33.5557 66.0051 33.5688H66.0748ZM66.749 36.6155C66.5419 36.7128 66.3157 36.7638 66.0865 36.765C65.9427 36.7628 65.8009 36.7321 65.6694 36.6748C65.5379 36.6175 65.4193 36.5347 65.3207 36.4312C65.222 36.3278 65.1454 36.2058 65.0953 36.0726C65.0451 35.9394 65.0225 35.7975 65.0287 35.6555C65.0232 35.5178 65.0459 35.3804 65.0955 35.2516C65.145 35.1227 65.2203 35.0051 65.317 34.9058C65.4136 34.8065 65.5295 34.7275 65.6577 34.6736C65.7859 34.6197 65.9239 34.5919 66.0632 34.592C66.2037 34.589 66.3433 34.6133 66.4743 34.6637C66.6052 34.714 66.7248 34.7894 66.8263 34.8855C66.9277 34.9816 67.0091 35.0965 67.0656 35.2237C67.1222 35.3509 67.1528 35.4879 67.1558 35.6268C67.1393 35.9787 67.0112 36.3166 66.7897 36.5925"></path>
              <path d="M72.0367 33.5665C70.4617 33.5665 69.863 34.9864 69.863 36.7167C69.863 38.447 70.4442 39.8726 72.0367 39.8726C73.6291 39.8726 74.2103 38.4527 74.2103 36.7167C74.2103 34.9807 73.6291 33.5665 72.0367 33.5665ZM72.0367 38.8264C71.3218 38.8264 71.0777 37.8664 71.0777 36.7167C71.0777 35.567 71.3218 34.6128 72.0367 34.6128C72.7515 34.6128 72.9956 35.567 72.9956 36.7167C72.9956 37.8664 72.7457 38.8264 72.0367 38.8264Z"></path>
              <path d="M76.8544 37.3088H78.1562V35.6877L76.8544 37.3088ZM79.3418 37.3088H80.3589V38.2688H79.3418V39.6657H78.1794V38.286H75.3142V37.5905L78.5282 33.5665H79.3651L79.3418 37.3088Z"></path>
              <path d="M58.6296 4.97365H66.9231V26.2833H72.1827V4.97365H80.4761V0.633545H58.6296V4.97365Z"></path>
              <path d="M23.9562 3.73799C21.3115 1.28858 17.8094 -0.0508436 14.1866 0.00147707C5.94547 0.00147707 0 5.94541 0 13.4587C0 20.9719 6.02102 26.9159 14.2621 26.9159C17.8922 26.985 21.4169 25.7074 24.1422 23.3346L24.0085 23.1909L21.277 20.3166L20.8295 19.8452C19.0782 21.4461 16.7745 22.3242 14.39 22.2999C12.0476 22.2779 9.80696 21.3497 8.14791 19.714C6.48887 18.0783 5.5433 15.865 5.51367 13.5482C5.48404 11.2314 6.3727 8.99519 7.98939 7.31846C9.60607 5.64173 11.8222 4.65777 14.1633 4.57727C16.5764 4.59131 18.8871 5.54312 20.597 7.22732L23.9562 3.73799Z"></path>
              <path d="M55.9675 13.4585C55.9675 6.02001 50.0976 0.00134277 41.9379 0.00134277C33.7781 0.00134277 27.9024 6.02001 27.9024 13.4585C27.9024 20.8971 33.7723 26.9157 41.9379 26.9157C50.1034 26.9157 55.9675 20.8971 55.9675 13.4585ZM50.6614 13.4585C50.6134 15.1529 50.0616 16.7956 49.075 18.1815C48.0884 19.5674 46.7107 20.6349 45.1141 21.2507C43.5176 21.8665 41.7729 22.0032 40.0982 21.6437C38.4236 21.2842 36.8931 20.4445 35.6982 19.2295C34.5033 18.0146 33.697 16.4782 33.3799 14.8125C33.0629 13.1468 33.2492 11.4255 33.9156 9.86397C34.582 8.30239 35.6989 6.96971 37.1267 6.03248C38.5546 5.09525 40.23 4.59504 41.9437 4.59438C43.1059 4.60557 44.2544 4.84427 45.3229 5.29669C46.3914 5.74911 47.3588 6.40631 48.1692 7.23037C48.9797 8.05442 49.6172 9.02904 50.0449 10.098C50.4726 11.1669 50.6821 12.3091 50.6614 13.4585Z"></path>
              <path d="M103.712 0.633545H110L99.3121 16.2234V26.289H94.0756V16.2924L83.3936 0.633545H89.7517L96.7839 11.2682L103.712 0.633545Z"></path>
              <path d="M59.635 34.4403V35.5498L60.7805 34.9232V39.6657H61.9667V33.5665H61.1294L59.635 34.4403Z"></path>
            </svg>
          </Link>
        </div>
        <div className="w-8/12">
          <ul className="hidden justify-center lg:flex lg:items-center">
            <li className="">
              <div className="relative w-full w-fit">
                <div className="w-full  block w-fit" data-testid="navigation-element">
                  <Link
                    aria-expanded="false"
                    aria-controls="menu-dropdown-horizontal-menu-our-purpose"
                    className="  hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base "
                    href="/our-purpose"
                  >
                    Our Purpose
                  </Link>
                </div>
                <div
                  className="absolute -left-4 bottom-0 translate-y-full pt-4  overflow-hidden transition-all ease-out lg:duration-[0ms] opacity-0 duration-200"
                  data-testid="menu-dropdown-horizontal-menu-our-purpose"
                  id="menu-dropdown-horizontal-menu-our-purpose"
                  style={{ maxHeight: '0px', visibility: 'hidden' }}
                >
                  <ul className="relative flex flex-col rounded-tr-[48px] border-2 border-solid border-lightGray bg-white px-8 py-6">
                    <li className="first-of-type:pt-0 pt-2 ">
                      <span
                        className="absolute -top-[7px] z-50 inline"
                        style={{
                          left: '54.5px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg)',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                        href="/our-purpose"
                      >
                        Who We Are
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 pt-2 ">
                      <span
                        className="absolute -top-[7px] z-50 inline"
                        style={{
                          left: '54.5px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg)',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                        href="/our-heritage"
                      >
                        Our Heritage
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 pt-2 ">
                      <span
                        className="absolute -top-[7px] z-50 inline"
                        style={{
                          left: '54.5px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg)',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                        href="/our-leaders"
                      >
                        Our Leaders
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 pt-2 ">
                      <span
                        className="absolute -top-[7px] z-50 inline"
                        style={{
                          left: '54.5px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg)',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                        href="/undefine-beauty"
                      >
                        #UndefineBeauty
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="">
              <Link
                className="  hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base "
                href="/our-brands"
              >
                Our Brands
              </Link>
            </li>
            <li className="">
              <div className="relative w-full w-fit">
                <div className="w-full  block w-fit" data-testid="navigation-element">
                  <Link
                    aria-expanded="false"
                    aria-controls="menu-dropdown-horizontal-menu-sustainability"
                    className="  hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base "
                    href="/sustainability"
                  >
                    Sustainability
                  </Link>
                </div>
                <div
                  className="absolute -left-4 bottom-0 translate-y-full pt-4  overflow-hidden transition-all ease-out lg:duration-[0ms] opacity-0 duration-200"
                  data-testid="menu-dropdown-horizontal-menu-sustainability"
                  id="menu-dropdown-horizontal-menu-sustainability"
                  style={{ maxHeight: '0px', visibility: 'hidden' }}
                >
                  <ul className="relative flex flex-col rounded-tr-[48px] border-2 border-solid border-lightGray bg-white px-8 py-6">
                    <li className="first-of-type:pt-0 pt-2 ">
                      <span
                        className="absolute -top-[7px] z-50 inline"
                        style={{
                          left: '68.5px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg)',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                        href="/sustainability"
                      >
                        Beauty That Lasts
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 pt-2 ">
                      <span
                        className="absolute -top-[7px] z-50 inline"
                        style={{
                          left: '68.5px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg)',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                        href="/sustainability/goals-targets"
                      >
                        Goals and Targets
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 pt-2 ">
                      <span
                        className="absolute -top-[7px] z-50 inline"
                        style={{
                          left: '68.5px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg)',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                        href="/sustainability/beauty-of-our-planet"
                      >
                        Beauty of our Planet
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 pt-2 ">
                      <span
                        className="absolute -top-[7px] z-50 inline"
                        style={{
                          left: '68.5px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg)',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                        href="/sustainability/beauty-of-our-people"
                      >
                        Beauty of our People
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 pt-2 ">
                      <span
                        className="absolute -top-[7px] z-50 inline"
                        style={{
                          left: '68.5px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg)',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                        href="/sustainability/governed-beautifully"
                      >
                        Governed Beautifully
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 pt-2 ">
                      <span
                        className="absolute -top-[7px] z-50 inline"
                        style={{
                          left: '68.5px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg)',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-sm"
                        href="/sustainability/esg-reporting-hub"
                      >
                        ESG Reporting Hub
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="">
              <Link
                className="  hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base "
                href="/innovation"
              >
                Innovation
              </Link>
            </li>
            <li className="">
              <Link
                className="  hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base "
                href="/your-career"
              >
                Your Career
              </Link>
            </li>
            <li className="">
              <Link
                className="  hover-underline mx-2 block px-0 pb-1 text-center text-sm leading-none xl:mx-3 2xl:mx-4 2xl:text-base "
                href="/news"
              >
                News
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex w-2/12 min-w-[80px] items-center justify-between gap-4 md:min-w-min md:justify-center md:gap-8">
          <div className="min-w-8 hidden lg:block" data-testid="countries-selector">
            <div>
              <div className="relative inline-block text-left" data-headlessui-state="">
                <div>
                  <span id=":r88:" className="sr-only">
                    Country
                  </span>
                  <div
                    className="border-blue inline-flex w-full justify-center border-0 border-b pt-2 text-sm font-semibold md:pt-0"
                    role="combobox"
                    aria-expanded="false"
                    aria-haspopup="menu"
                    aria-labelledby=":r88:"
                    id=":r87:"
                    data-headlessui-state=""
                    aria-controls=":r89:"
                  >
                    EN
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="text-blue -mr-1 h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div
                  className="absolute right-0 top-2 z-10 w-10 border border-blue bg-white font-semibold md:top-0"
                  hidden={false}
                  id=":r89:"
                  role="menu"
                  tabIndex={0}
                  data-headlessui-state=""
                  style={{ display: 'none' }}
                  aria-labelledby=":r87:"
                >
                  <button
                    className="flex w-full cursor-pointer pl-[2px] text-sm text-blue"
                    data-testid="countries-link"
                    data-option-index="0"
                    aria-current="true"
                    id="headlessui-menu-item-:r8c:"
                    role="menuitem"
                    tabIndex={-1}
                    data-headlessui-state=""
                  >
                    EN
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <button
                    className="flex w-full cursor-pointer pl-[2px] text-sm text-blue"
                    data-testid="countries-link"
                    data-option-index="1"
                    aria-current="false"
                    id="headlessui-menu-item-:r8d:"
                    role="menuitem"
                    tabIndex={-1}
                    data-headlessui-state=""
                  >
                    FR
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden h-8 gap-x-4 justify-end lg:flex">
            <Link
              target="_blank"
              className="min-w-[90px] border px-5 border-blue whitespace-nowrap rounded-br-2xl py-2 text-center text-base leading-4 transition duration-300 ease-in-out hover:border-transparent hover:bg-blue hover:text-white"
              href="https://careers.coty.com/go/Open-Positions/8765801"
            >
              OPEN POSITIONS
            </Link>
          </div>
          <button data-testid="search-bar" aria-label="Click to search" className="relative z-50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition duration-700 ease-in-out"
                d="M18.9388 25.4558C12.0935 25.4558 6.54426 19.9065 6.54426 13.0612C6.54426 6.21589 12.0935 0.666665 18.9388 0.666665C25.7841 0.666665 31.3333 6.21589 31.3333 13.0612C31.3333 19.9065 25.7841 25.4558 18.9388 25.4558Z"
                stroke="#002554"
                stroke-width="1.33333"
              ></path>
              <line
                className="transition duration-700 ease-in-out"
                x1="10.2671"
                y1="22.6755"
                x2="0.471133"
                y2="32.4714"
                stroke="#002554"
                stroke-width="1.33333"
              ></line>
            </svg>
          </button>
          <div className="relative z-50 block h-[26px] w-6 lg:hidden ">
            <button
              className="flex min-h-[24px] flex-col items-center justify-between gap-y-2 py-2"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="menu-mobile"
              aria-haspopup="true"
            >
              <span className="h-px w-6 bg-blue transition duration-700 ease-in-out "></span>
              <span className="h-px w-6 bg-blue transition duration-700 ease-in-out "></span>
            </button>
          </div>
        </div>
      </div>
      <div
        id="menu-mobile"
        className="fixed inset-0 z-20 overflow-auto bg-blue text-white lg:hidden"
        aria-describedby=":r8e:"
        style={{
          visibility: 'hidden',
          transform: 'translateY(-100%)',
          transition: 'transform 1000ms cubic-bezier(0.4, 0, 0.2, 1), visibility linear 1500ms',
        }}
      >
        <span id=":r8e:" className="sr-only">
          Primary mobile menu
        </span>
        <div className="mx-auto flex h-full max-w-screen-sm flex-col px-5 pt-20">
          <ul className="mt-6 border-t border-white">
            <li className="flex w-full flex-col items-center">
              <div className="relative w-full border-b border-white">
                <div
                  className="w-full  flex items-center justify-between"
                  data-testid="navigation-element"
                >
                  <Link
                    aria-expanded="false"
                    aria-controls="menu-dropdown-vertical-menu-our-purpose"
                    className="  w-full py-5 text-3xl font-bold uppercase sm:text-4xl"
                    href="/our-purpose"
                  >
                    Our Purpose
                  </Link>
                  <button tabIndex={-1} className="p-4 transition-transform ease-out -rotate-90">
                    <svg
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 17L5 13L0.999999 9L9 1" stroke="#FFFFFF"></path>
                    </svg>
                  </button>
                </div>
                <div
                  className=" overflow-hidden transition-all ease-out lg:duration-[0ms] opacity-0 duration-200"
                  data-testid="menu-dropdown-vertical-menu-our-purpose"
                  id="menu-dropdown-vertical-menu-our-purpose"
                  style={{ maxHeight: '0px', visibility: 'hidden' }}
                >
                  <ul className="relative flex flex-col rounded-tr-[48px] mb-5 bg-transparent">
                    <li className="first-of-type:pt-0 py-3 uppercase ">
                      <span
                        className="absolute -top-[7px] z-50 hidden"
                        style={{
                          left: '24px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg);',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                        href="/our-purpose"
                      >
                        Who We Are
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 py-3 uppercase ">
                      <span
                        className="absolute -top-[7px] z-50 hidden"
                        style={{
                          left: '24px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg);',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                        href="/our-heritage"
                      >
                        Our Heritage
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 py-3 uppercase ">
                      <span
                        className="absolute -top-[7px] z-50 hidden"
                        style={{
                          left: '24px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg);',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                        href="/our-leaders"
                      >
                        Our Leaders
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 py-3 uppercase ">
                      <span
                        className="absolute -top-[7px] z-50 hidden"
                        style={{
                          left: '24px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg);',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                        href="/undefine-beauty"
                      >
                        #UndefineBeauty
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="flex w-full flex-col items-center">
              <Link
                className="border-b border-white  w-full py-5 text-3xl font-bold uppercase sm:text-4xl"
                href="/our-brands"
              >
                Our Brands
              </Link>
            </li>
            <li className="flex w-full flex-col items-center">
              <div className="relative w-full border-b border-white">
                <div
                  className="w-full  flex items-center justify-between"
                  data-testid="navigation-element"
                >
                  <Link
                    aria-expanded="false"
                    aria-controls="menu-dropdown-vertical-menu-sustainability"
                    className="  w-full py-5 text-3xl font-bold uppercase sm:text-4xl"
                    href="/sustainability"
                  >
                    Sustainability
                  </Link>
                  <button tabIndex={-1} className="p-4 transition-transform ease-out -rotate-90">
                    <svg
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 17L5 13L0.999999 9L9 1" stroke="#FFFFFF"></path>
                    </svg>
                  </button>
                </div>
                <div
                  className=" overflow-hidden transition-all ease-out lg:duration-[0ms] opacity-0 duration-200"
                  data-testid="menu-dropdown-vertical-menu-sustainability"
                  id="menu-dropdown-vertical-menu-sustainability"
                  style={{ maxHeight: '0px', visibility: 'hidden' }}
                >
                  <ul className="relative flex flex-col rounded-tr-[48px] mb-5 bg-transparent">
                    <li className="first-of-type:pt-0 py-3 uppercase ">
                      <span
                        className="absolute -top-[7px] z-50 hidden"
                        style={{
                          left: '24px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg);',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                        href="/sustainability"
                      >
                        Beauty That Lasts
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 py-3 uppercase ">
                      <span
                        className="absolute -top-[7px] z-50 hidden"
                        style={{
                          left: '24px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg);',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                        href="/sustainability/goals-targets"
                      >
                        Goals and Targets
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 py-3 uppercase ">
                      <span
                        className="absolute -top-[7px] z-50 hidden"
                        style={{
                          left: '24px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg);',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                        href="/sustainability/beauty-of-our-planet"
                      >
                        Beauty of our Planet
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 py-3 uppercase ">
                      <span
                        className="absolute -top-[7px] z-50 hidden"
                        style={{
                          left: '24px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg);',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                        href="/sustainability/beauty-of-our-people"
                      >
                        Beauty of our People
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 py-3 uppercase ">
                      <span
                        className="absolute -top-[7px] z-50 hidden"
                        style={{
                          left: '24px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg)',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                        href="/sustainability/governed-beautifully"
                      >
                        Governed Beautifully
                      </Link>
                    </li>
                    <li className="first-of-type:pt-0 py-3 uppercase ">
                      <span
                        className="absolute -top-[7px] z-50 hidden"
                        style={{
                          left: '24px',
                          width: '10px',
                          height: '10px',
                          background: 'rgb(255, 255, 255)',
                          borderStyle: 'solid',
                          borderWidth: '1px 0px 0px 1px',
                          borderColor: 'lightgray transparent transparent lightgray',
                          transform: 'rotate(45deg);',
                        }}
                      ></span>
                      <Link
                        tabIndex={-1}
                        className="hover-underline relative whitespace-nowrap pb-1 text-left opacity-60 lg:opacity-100   text-lg"
                        href="/sustainability/esg-reporting-hub"
                      >
                        ESG Reporting Hub
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="flex w-full flex-col items-center">
              <Link
                className="border-b border-white  w-full py-5 text-3xl font-bold uppercase sm:text-4xl"
                href="/innovation"
              >
                Innovation
              </Link>
            </li>
            <li className="flex w-full flex-col items-center">
              <Link
                className="border-b border-white  w-full py-5 text-3xl font-bold uppercase sm:text-4xl"
                href="/your-career"
              >
                Your Career
              </Link>
            </li>
            <li className="flex w-full flex-col items-center">
              <Link
                className="border-b border-white  w-full py-5 text-3xl font-bold uppercase sm:text-4xl"
                href="/news"
              >
                News
              </Link>
            </li>
          </ul>
          <div className="mt-[42px] flex justify-evenly gap-y-4 mb-4">
            <Link
              target="_blank"
              className="text-xl font-medium uppercase opacity-60 transition duration-300 ease-in-out hover:opacity-100"
              href="https://careers.coty.com/go/Open-Positions/8765801"
            >
              Open positions
            </Link>
            <Link
              target="_blank"
              className="text-xl font-medium uppercase opacity-60 transition duration-300 ease-in-out hover:opacity-100"
              href="/news"
            >
              News
            </Link>
          </div>
          <div className="mt-[42px] flex justify-evenly gap-y-4 pb-8">
            <div className="flex justify-center gap-[1.6rem] mt-2 flex w-full max-w-[136px] items-center justify-between self-center">
              <Link
                target="_blank"
                rel="noreferrer"
                data-testid="social-list-item"
                href="https://www.facebook.com/COTYInc/?ref=page_internal"
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                    position: 'relative',
                    maxWidth: '100%',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0px',
                        margin: '0px',
                        padding: '0px',
                      }}
                    />
                  </span>
                  <img
                    alt="facebook.svg"
                    srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt2f59f9a354f27e0a/623b141f7c24b44cb0bf3d68/facebook.svg?width=16&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/blt2f59f9a354f27e0a/623b141f7c24b44cb0bf3d68/facebook.svg?width=32&amp;quality=50&amp;auto=webp 2x"
                    src="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt2f59f9a354f27e0a/623b141f7c24b44cb0bf3d68/facebook.svg?width=32&amp;quality=50&amp;auto=webp"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="cursor-pointer"
                    style={{
                      position: 'absolute',
                      inset: '0px',
                      boxSizing: 'border-box',
                      padding: '0px',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0px',
                      height: '0px',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                  />
                </span>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                data-testid="social-list-item"
                href="https://twitter.com/COTYInc"
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                    position: 'relative',
                    maxWidth: '100%;',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0px',
                        margin: '0px',
                        padding: '0px',
                      }}
                    />
                  </span>
                  <img
                    alt="twitter.svg"
                    srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/bltae3da7ec72868e4a/623b157398622e5de9392b40/twitter.svg?width=16&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/bltae3da7ec72868e4a/623b157398622e5de9392b40/twitter.svg?width=32&amp;quality=50&amp;auto=webp 2x"
                    src="https://images.contentstack.io/v3/assets/blted39bd312054daca/bltae3da7ec72868e4a/623b157398622e5de9392b40/twitter.svg?width=32&amp;quality=50&amp;auto=webp"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="cursor-pointer"
                    style={{
                      position: 'absolute',
                      inset: '0px',
                      boxSizing: 'border-box',
                      padding: '0px',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0px',
                      height: '0px',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                  />
                </span>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                data-testid="social-list-item"
                href="https://www.instagram.com/cotyinc"
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                    position: 'relative',
                    maxWidth: '100%',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0px',
                        margin: '0px',
                        padding: '0px',
                      }}
                    />
                  </span>
                  <img
                    alt="instagram.svg"
                    srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt1385c7d5d3fc46d9/623b14ac159fc76504c17780/instagram.svg?width=16&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/blt1385c7d5d3fc46d9/623b14ac159fc76504c17780/instagram.svg?width=32&amp;quality=50&amp;auto=webp 2x"
                    src="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt1385c7d5d3fc46d9/623b14ac159fc76504c17780/instagram.svg?width=32&amp;quality=50&amp;auto=webp"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="cursor-pointer"
                    style={{
                      position: 'absolute',
                      inset: '0px',
                      boxSizing: 'border-box',
                      padding: '0px',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0px',
                      height: '0px',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                  />
                </span>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                data-testid="social-list-item"
                href="https://in.linkedin.com/company/coty"
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'inline-block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
                    position: 'relative',
                    maxWidth: '100%',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: 1,
                      border: '0px',
                      margin: '0px',
                      padding: '0px',
                      maxWidth: '100%',
                    }}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
                      style={{
                        display: 'block',
                        maxWidth: '100%',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: 1,
                        border: '0px',
                        margin: '0px',
                        padding: '0px',
                      }}
                    />
                  </span>
                  <img
                    alt="linkedin.svg"
                    srcSet="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt69d99ba37c9de5ba/623b15c3714afc639a7b22cb/linkedin.svg?width=16&amp;quality=50&amp;auto=webp 1x, https://images.contentstack.io/v3/assets/blted39bd312054daca/blt69d99ba37c9de5ba/623b15c3714afc639a7b22cb/linkedin.svg?width=32&amp;quality=50&amp;auto=webp 2x"
                    src="https://images.contentstack.io/v3/assets/blted39bd312054daca/blt69d99ba37c9de5ba/623b15c3714afc639a7b22cb/linkedin.svg?width=32&amp;quality=50&amp;auto=webp"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="cursor-pointer"
                    style={{
                      position: 'absolute',
                      inset: '0px',
                      boxSizing: 'border-box',
                      padding: '0px',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0px',
                      height: '0px',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                  />
                </span>
              </Link>
            </div>
            <div className="block max-w-[50px] lg:hidden">
              <div>
                <div className="relative inline-block text-left" data-headlessui-state="">
                  <div>
                    <span id=":r8g:" className="sr-only">
                      Country
                    </span>
                    <div
                      className="border-white inline-flex w-full justify-center border-0 border-b pt-2 text-sm font-semibold md:pt-0"
                      role="combobox"
                      aria-expanded="false"
                      aria-haspopup="menu"
                      aria-labelledby=":r8g:"
                      id=":r8f:"
                      data-headlessui-state=""
                      aria-controls=":r8h:"
                    >
                      EN
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-white -mr-1 h-5 w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="absolute right-0 top-2 z-10 w-10 border border-blue bg-white font-semibold md:top-0"
                    hidden={false}
                    id=":r8h:"
                    role="menu"
                    tabIndex={0}
                    data-headlessui-state=""
                    aria-labelledby=":r8f:"
                    style={{ display: 'none' }}
                  >
                    <button
                      className="flex w-full cursor-pointer pl-[2px] text-sm text-blue"
                      data-testid="countries-link"
                      data-option-index="0"
                      aria-current="true"
                      id="headlessui-menu-item-:r8k:"
                      role="menuitem"
                      tabIndex={-1}
                      data-headlessui-state=""
                    >
                      EN
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className="flex w-full cursor-pointer pl-[2px] text-sm text-blue"
                      data-testid="countries-link"
                      data-option-index="1"
                      aria-current="false"
                      id="headlessui-menu-item-:r8l:"
                      role="menuitem"
                      tabIndex={-1}
                      data-headlessui-state=""
                    >
                      FR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
