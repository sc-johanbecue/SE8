import React from 'react';

import {
  TextField,
  Placeholder,
  ComponentRendering,
  ComponentParams,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
}

type DubaiWTCPageWrapperProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const DubaiWTCPageWrapper = (props: DubaiWTCPageWrapperProps): JSX.Element => {
  return (
    <div id="page-wrapper">
      {/* /.row */}
      <div className="col-xs-12 main-section">
        <div className="row">
          <div className="content_wrapper doctor content_outer" id="content">
            <div className="col-xs-12 padding-fifteen">
              <div className="col-xs-12 nplr_xs">
                <div className="col-xs-12"></div>

                {/* <div className="col-xs-12 padding-fifteen pd-top0">
                              <div className="col-xs-12 nplr_xs"> */}
                {/* <div className="col-xs-12 padding-fifteen pd-top0 micheck-pd0 panelsection nm np">
                              <div className="col-xs-12 np ">
                                  <div className="np col-xs-12 padding-fifteen add_contact_outer ">
                                  <div className="col-xs-12 nplr_xs nplr">
                                  <div className="manage_exhibitors_box col-xs-12 section-padding whitebg shadow border-radius text-bold npb">
                                  <div className="checklist_heading col-xs-12 col-sm-12 col-md-12 col-lg-12 nplr">
                                      <p>Exhibitor Zone</p>
                                  </div>
                                  <div className="checklist_form_wrapper col-xs-12 whitebg">
                                                                      <ul className="exb_checklist">
                                                                                      <li className="list">
                                                      <label className="btn">
                                                              <i className="fa fa-check-square-o  pull-left"></i> 
                                                                                                              <i className="fa fa-times  pull-left"></i>     
                                                                                                      </label>
                                                      <span><Link data-type='a' className="click-xhttp-request type_btn" data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&opd=content" data-href=""></Link></span>
                                                  </li>
                                                                              </ul>
                                                              </div>
                                  </div>
                                  </div>
                                  </div>
                              </div>
                              </div> */}
                {/* </div>
                              </div> */}
                <div className="col-xs-12 np ">
                  <div className=""></div>
                </div>
                <div className="row order_outer mi-checklist-panel ">
                  <div
                    className="responsive-padding col-xs-12 mce-content-body formname nplr"
                    style={{ marginTop: '20px;' }}
                  >
                    {/* <h2 className="heading_page text-uppercase mrg-top0">Checklist</h2> */}
                  </div>
                  {/* <div className="col-xs-12 padding-fifteen">
                                 <div className="col-xs-12 nplr_xs"> */}
                  {/*                <div className="col-xs-12 panelsection nm np">
                                 <div className="col-xs-12 np ">
                                     <div className="np col-xs-12  add_contact_outer ">
                                     <div className="col-xs-12 nplr_xs nplr">
                                     <div className="manage_exhibitors_box col-xs-12 whitebg shadow border-radius text-bold npb">
                                      <div className="checklist_heading col-xs-12 col-sm-12 col-md-12 col-lg-12 nplr">
                                         <p>Exhibitor Order Forms</p>
                                     </div>
                                     <div className="checklist_form_wrapper col-xs-12 whitebg">*/}
                  <main>
                    <div id="content">
                      <Placeholder name="headless-main" rendering={props.rendering} />
                    </div>
                  </main>

                  {/*                        </div>
                                 </div>
                                 </div>
                                 </div>
                                 </div>
                                 </div>*/}
                  {/* </div>
                                 </div> */}
                </div>
              </div>
            </div>
            <script type="text/javascript">
              {`
                        $(document).ready(function () {
                            if ($(window).width() < 1024) { 
                                adjust_table();
                            }
                        });
                       `}
            </script>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiWTCPageWrapper;
