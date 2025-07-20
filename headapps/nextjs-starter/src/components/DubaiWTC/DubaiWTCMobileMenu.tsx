import React from 'react';
import Link from 'next/link';

const DubaiWTCMobileMenu = (): JSX.Element => {
  return (
    <div id="mobile_menu">
      <span className="close">&times;</span>
      <div className="mi-countdown-table">
        <table width="100%">
          <tr>
            <td>
              <div className="micountdown" style={{ margin: '0px', width: '240px' }}></div>
              <script>
                {`
                        $(function () {
                             var miuntil_time = new Date(+2024, 10-1, 14,+12, +00, +00);
                           //   var miuntil_time = new Date('2024-10-14 12:00:00');
                             console.log(miuntil_time);
                        $('.micountdown').countdown({until: miuntil_time, padZeroes: true,timezone: +4,format: 'DHMS'});
                           });
                        `}
              </script>
            </td>
          </tr>
          {/* <tr><td>
                  <div className="about_company_outer col-xs-12 mt20 mb30">
                      <div className="about_company">
                              <h5 className="blue-color"> Sitecore Middle East FZ-LLC</h5>
                          <p><b>Stand No - </b>H4-B10</p>
                          <p><b>Stand Type - </b>Space Only</p>
                          <p><b>Stand Size - </b>10.00 X 12.00 meters</p>
                          <p><b>Contractual Sq.m - </b>120.00 </p>
                                      <br />
                          <Link>
                              <h5 className="blue-color"> GITEX GLOBAL DWTC 2024</h5>
                          </Link>
                      </div>
                  </div>
                      </td></tr> */}
        </table>
      </div>
      <div className="  ">
        <div className="inner">
          <ul className="nav navbar-nav menu-list" id=""></ul>
        </div>
      </div>
      <div className="  ">
        <div className="inner">
          <ul className="nav sidebar-menu" id="side-menu">
            <li className="">
              <Link
                data-type="a"
                className="home click-xhttp-request  mi-icon mi-icon-home"
                href="/gitex-global-2024/dashboard"
                data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                data-name="Home"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                data-type="a"
                className="checklist click-xhttp-request  mi-icon mi-icon-checklist"
                href="/gitex-global-2024/exb_zone/checklist "
                data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                data-name="Checklist"
              >
                Checklist
              </Link>
            </li>
            <li className=" dropdown">
              <Link
                data-type="a"
                className="exhibitor-zone dropdown_anchor dropdown_anchor  mi-icon mi-icon-exhibitor-zone"
                href="#"
                data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                data-name="Company Profile"
              >
                Company Profile
              </Link>
              <i className="icon icon-plus dropdown_icon"></i>
              <ul className="dropdown-content" style={{ display: 'none' }}>
                <li className="   drop-down-list">
                  <Link
                    data-type="a"
                    className=" click-xhttp-request click-xhttp-request   "
                    href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/exb_zone/my_profile"
                    data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                    data-name="Company Information"
                  >
                    Company Information
                  </Link>
                </li>
                <li className="   drop-down-list">
                  <Link
                    data-type="a"
                    className=" click-xhttp-request click-xhttp-request   "
                    href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/exb_zone/exh_zone_form"
                    data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                    data-name="Matchmaking"
                  >
                    Matchmaking
                  </Link>
                </li>
                <li className="   drop-down-list">
                  <Link
                    data-type="a"
                    className=" click-xhttp-request click-xhttp-request   "
                    href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/exb_zone/tag_products"
                    data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                    data-name="Products & Categories"
                  >
                    Products & Categories
                  </Link>
                </li>
                <li className="   drop-down-list">
                  <Link
                    data-type="a"
                    className=" click-xhttp-request click-xhttp-request   "
                    href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/exb_zone/promotional_material"
                    data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                    data-name="Promote Your Company"
                  >
                    Promote Your Company
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
              <Link
                data-type="a"
                className="exhibitor-badges mi-icon mi-icon-exhibitor-badges"
                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTE2YQ=="
                data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                target="_blank"
                data-name="Badges & Promo Codes"
              >
                Badges & Promo Codes
              </Link>
            </li>
            <li className="">
              <Link
                data-type="a"
                className="free-markeing-tools click-xhttp-request  mi-icon mi-icon-freetools"
                href="/gitex-global-2024/banner/banner_list"
                data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                data-name="Marketing Assets"
              >
                Marketing Assets
              </Link>
            </li>
            <li className=" dropdown">
              <Link
                data-type="a"
                className="exhibitor-manual dropdown_anchor Exhibitor Manual mi-icon mi-icon-exhibitor-manual"
                href="/gitex-global-2024/dashboard"
                data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                data-name="Manuals & Guides"
              >
                Manuals & Guides
              </Link>
              <i className="icon icon-plus dropdown_icon"></i>
              <ul className="dropdown-content" style={{ display: 'none' }}>
                <li className="essential-information    drop-down-list">
                  <Link
                    data-type="a"
                    className="essential-information click-xhttp-request click-xhttp-request   Essential Information"
                    href="/gitex-global-2024/cms/essential-information"
                    data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                    data-name="Event Information"
                  >
                    Event Information
                  </Link>
                </li>
                <li className="general-information    drop-down-list">
                  <Link
                    data-type="a"
                    className="general-information click-xhttp-request click-xhttp-request   General Information"
                    href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/cms/general-information"
                    data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                    data-name="Essential Information"
                  >
                    Essential Information
                  </Link>
                </li>
                <li className="official-contractor-manuals-forms    drop-down-list">
                  <Link
                    data-type="a"
                    className="official-contractor-manuals-forms click-xhttp-request click-xhttp-request   Official Freight Forwarder Manual & Forms"
                    href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/cms/official-freight-forwarder-manual-forms"
                    data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                    data-name="Freight Forwarder"
                  >
                    Freight Forwarder
                  </Link>
                </li>
                <li className="health-safety-rules-and-regulations    drop-down-list">
                  <Link
                    data-type="a"
                    className="health-safety-rules-and-regulations click-xhttp-request click-xhttp-request   Health & Safety Rules And Regulations"
                    href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/cms/health-safety-rules-and-regulations"
                    data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                    data-name="Health & Safety Regulations"
                  >
                    Health & Safety Regulations
                  </Link>
                </li>
                <li className="technical-manual    drop-down-list">
                  <Link
                    data-type="a"
                    className="technical-manual click-xhttp-request click-xhttp-request   Technical Manual"
                    href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/cms/technical-manual"
                    data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                    data-name="Technical Manual"
                  >
                    Technical Manual
                  </Link>
                </li>
              </ul>
            </li>
            <li className="">
              <Link
                data-type="a"
                className="exhibitor-order-forms click-xhttp-request  Exhibitor Order Forms mi-icon mi-icon-exhibitor-manual"
                href="/gitex-global-2024/dashboard/forms"
                data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                data-name="Forms & Services"
              >
                Forms & Services
              </Link>
            </li>
            <li className="">
              <Link
                data-type="a"
                className="assign-new-contact click-xhttp-request  mi-icon mi-icon-user-add"
                href="/gitex-global-2024/exb/assign_new_contact"
                data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                data-name="Add a Contractor User"
              >
                Add a Contractor User
              </Link>
            </li>
            <li className="">
              <Link
                data-type="a"
                className="additinal-users click-xhttp-request  mi-icon mi-icon-additional-user"
                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/exb/addonexb"
                data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content"
                data-name="Add Additional User"
              >
                Add Additional User
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="inner">
          <ul className="nav sidebar-menu in" id="system_menu"></ul>
        </div>
      </div>
    </div>
  );
};

export default DubaiWTCMobileMenu;
