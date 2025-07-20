import Link from 'next/link';
import React from 'react';
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

const DubaiWTCMainNavBar = (): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  return (
    <div className="col-xs-12 menumain main_navbar">
      <div className="row">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="collapse navbar-collapse " id="myNavbar">
              <div className="col-xs-3 main-header w250 np">
                <ul className="header-nav nav navbar-nav mi-custom-header">
                  <li className="mi-dashbord-link w20p">
                    <Link
                      data-type="a"
                      href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard"
                    >
                      <span className="glyphicon mi-icon-home" aria-hidden="true"></span>
                    </Link>
                  </li>
                  <li className="w67p">
                    <form id="ddd">
                      <div className="form-group">
                        <div className="search_box select_type_box nplr_xs">
                          <div className="input-group pull-right col-xs-12 nplr mi-border">
                            <input
                              name="keyword"
                              type="search"
                              className="txt-search form-control form-with-change-key-up "
                              value=""
                              data-href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/search"
                              data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                              placeholder="Search"
                              id="txtSearch"
                              style={{ color: '#ffffff' }}
                            />
                            <div className="input-group-btn pull-left">
                              <button
                                className="btn btn-primary"
                                data-href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/search"
                                data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                                type="button"
                              >
                                <span className="glyphicon mi-icon-search"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </li>
                </ul>
              </div>
              <div className="col-xs-5 np w55p">
                <nav className="navbar">
                  <div className="container-fluid np">
                    <ul className="header-nav col-xs-5 nav navbar-nav  mi-custom-header head_stand_wrap">
                      <li className="sh_switch-stand">
                        <div className="form-group">
                          <div className="search_box select_type_box nplr_xs">
                            <p>Stand : </p>
                          </div>
                        </div>
                      </li>
                      <li className="switch-stand-dwtc">
                        <form className="w90p">
                          <div className="form-group">
                            <div className="mi-border col-lg-12 col-sm-12 col-md-12 col-xs-12 input_fileds_header-/ np">
                              <label
                                className="drpdown-arrow-up-dwn col-md-12 np mi-stand-select-head"
                                style={{ marginBottom: '0px', fontWeight: '100' }}
                              >
                                {/* <i className="fa fa-chevron-up up-arrow-select"></i> */}
                                <span className="glyphicon mi-select mi-icon-angle-up"></span>
                                <select
                                  data-type="select"
                                  className="form-control blk-bg-naviblue cursor-pointer no-border no-shadow change-base-xhttp-request"
                                  data-base="stand_type"
                                  name="stand_type"
                                  data-qr="mi_encoded_string=hSNzEiisZFw7+McbFRFSB2VdJfcb6oRRQG8It7eLFg1rax83ZWQwQauq3jGPK2POkVvPhxeH59/9vdRz3GCnSA==&opd=content"
                                  data-href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/exb/switch_exb_stand"
                                  data-confirmmessage="Do you want to switch your stand number?"
                                  data-confirm="yes"
                                >
                                  {/*placeholder="Switch Stand"*/}
                                  <option value="16525" selected>
                                    {isPageEditing ? <>******</> : <>H4-B10</>}
                                  </option>
                                </select>
                                <span className="glyphicon mi-select     mi-icon-angle-down"></span>
                                {/* <i className="fa fa-chevron-down down-arrow-select"></i> */}
                              </label>
                            </div>
                          </div>
                        </form>
                      </li>
                    </ul>
                    <div className="  ">
                      <div className="inner">
                        <ul className="nav navbar-nav menu-list" id=""></ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <ul className="col-xs-3 nav navbar-nav navbar-right hidden-xs mi-header-user mi_user_wel_wrap">
                <li className="dropdown pull-right">
                  <Link
                    data-type="a"
                    className="dropdown-toggle profile_icons pd-right0"
                    data-bs-toggle="dropdown"
                    href="javascript:void(0);"
                  >
                    <span className="glyphicon mi-icon-user "></span>
                    <span className="glyphicon mi-icon-angle-down"></span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        data-type="a"
                        href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/profile"
                      >
                        <div>
                          <strong>Profile</strong>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        data-type="a"
                        href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/logout"
                      >
                        <div>
                          <strong>Logout</strong>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="hidden_1200 pull-right mi-welcome-user mi_user_wel_txt">
                  <Link
                    data-type="a"
                    href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/profile"
                    className="mi_wel_msg"
                  >
                    Welcome,
                    {isPageEditing ? <>******* *******</> : <>Moatez Habayeb</>}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-header ">
              <ul className="mobile_search">
                <ul className="header-nav nav navbar-nav mi-custom-header">
                  <li className="mi-dashbord-link w20p">
                    <Link
                      data-type="a"
                      href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard"
                    >
                      <span className="glyphicon mi-icon-home" aria-hidden="true"></span>
                    </Link>
                  </li>
                  <li className="w67p">
                    <form id="ddd">
                      <div className="form-group">
                        <div className="search_box select_type_box nplr_xs">
                          <div className="input-group pull-right col-xs-12 nplr mi-border">
                            <input
                              name="keyword"
                              type="search"
                              className="txt-search form-control form-with-change-key-up "
                              value=""
                              data-href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/search"
                              data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                              placeholder="Search"
                              id="txtSearch"
                              style={{ color: '#ffffff' }}
                            />
                            <div className="input-group-btn pull-left">
                              <button
                                className="btn btn-primary"
                                data-href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/search"
                                data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                                type="button"
                              >
                                <span className="glyphicon mi-icon-search"></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </li>
                </ul>
              </ul>
              {/*                            <button type="button" className="navbar-toggle pull-left" data-bs-toggle="collapse" data-bs-target="#myNavbar">*/}
              <button type="button" className="navbar-toggle pull-left" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <ul className="header-nav col-xs-12 nav navbar-nav navbar-right  mi-custom-header switch_stand_mobile text-center">
                <li className="sh_switch-stand">
                  <div className="form-group">
                    <div className="search_box select_type_box nplr_xs">
                      <p>Stand : </p>
                    </div>
                  </div>
                </li>
                <li className="switch-stand-dwtc">
                  <form className="w90p">
                    <div className="form-group">
                      <div className="mi-border col-lg-12 col-sm-12 col-md-12 col-xs-12 input_fileds_header-/ np">
                        <label
                          className="drpdown-arrow-up-dwn col-md-12 np mi-stand-select-head"
                          style={{ marginBottom: '0px', fontWeight: '100' }}
                        >
                          {/* <i className="fa fa-chevron-up up-arrow-select"></i> */}
                          <span className="glyphicon mi-select mi-icon-angle-up"></span>
                          <select
                            data-type="select"
                            className="form-control blk-bg-naviblue cursor-pointer no-border no-shadow change-base-xhttp-request"
                            data-base="stand_type"
                            name="stand_type"
                            data-qr="mi_encoded_string=hSNzEiisZFw7+McbFRFSB2VdJfcb6oRRQG8It7eLFg1rax83ZWQwQauq3jGPK2POkVvPhxeH59/9vdRz3GCnSA==&opd=content"
                            data-href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/exb/switch_exb_stand"
                            data-confirmmessage="Do you want to switch your stand number?"
                            data-confirm="yes"
                          >
                            {/*placeholder="Switch Stand" */}
                            <option value="16525" selected>
                              H4-B10
                            </option>
                          </select>
                          <span className="glyphicon mi-select     mi-icon-angle-down"></span>
                          {/* <i className="fa fa-chevron-down down-arrow-select"></i> */}
                        </label>
                      </div>
                    </div>
                  </form>
                </li>
              </ul>
              <ul className="responsive-menu nav navbar-nav navbar-right hidden-lg hidden-sm hidden-md pull-right">
                <li>
                  <Link
                    data-type="a"
                    className="dropdown-toggle profile_icons pd-right0"
                    data-bs-toggle="dropdown"
                    href="javascript:void(0);"
                  >
                    <span className="glyphicon mi-icon-user "></span>
                    <span className="glyphicon mi-icon-angle-down"></span>
                  </Link>
                  <ul className="dropdown-menu width767_nav">
                    <li>
                      <Link
                        data-type="a"
                        href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/profile"
                      >
                        <div>
                          <strong>Profile</strong>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        data-type="a"
                        href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/logout"
                      >
                        <div>
                          <strong>Logout</strong>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DubaiWTCMainNavBar;
