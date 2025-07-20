import React from 'react';

const DubaiWTCLogin = (): JSX.Element => {
  return (
    <div
      id="ms_disclaimer"
      style={{
        position: 'relative',
        float: 'left',
        width: '100%',
        display: 'inline-block',
        marginBottom: '80px',
      }}
    >
      <div className="element_wrapper">
        <div id="content">
          <div className="container login-main create_login ">
            <div className="row pos_relative">
              <div className="pos_relative">
                <div className="text-center text-chrome col-sm-12 col-md-12 col-lg-12 ">
                  <span className="text-center">
                    This page works best when using <b>Google Chrome/ Firefox/Safari/Opera </b>
                    browser.{' '}
                  </span>
                </div>
                <div className="create_password_login_box col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                  <div className="login-panel panel panel-default pull-left box-shadow border-radius nb col-xs-12 nplr">
                    <div className="panel-heading text-center">
                      <span className="panel-title">Exhibitor Login</span>
                    </div>
                    <div className="panel-body">
                      <div className="col-lg-12 text-center">
                        <div className="error">
                          <b>Please enter the USERNAME provided in the Welcome Email</b>
                        </div>
                      </div>
                      <div className="inner_panel col-xs-12">
                        <form role="form" action="#" method="post">
                          <fieldset>
                            <div className="form-group">
                              <input
                                value=""
                                className="form-control filter_required"
                                placeholder="User Name"
                                name="username"
                                type="email"
                                data-errors="{filter_required:'Username is required'}"
                                autoFocus
                              />
                              <div
                                data-lastpass-icon-root=""
                                style={{
                                  position: 'relative',
                                  height: '0px !important',
                                  width: '0px !important',
                                  float: 'left',
                                }}
                              ></div>
                            </div>
                            <div className="form-group">
                              <input
                                className="form-control filter_required password-field"
                                id="password-field"
                                placeholder="Password "
                                name="password"
                                type="password"
                                value=""
                                data-errors="{filter_required:'Password is required'}"
                              />
                              <div
                                data-lastpass-icon-root=""
                                style={{
                                  position: 'relative',
                                  height: '0px !important',
                                  width: '0px !important',
                                  float: 'left',
                                }}
                              ></div>
                              <span className="fa fa-fw fa-eye field-icon toggle-password"></span>
                            </div>

                            <div className="form-group">
                              <div className=" col-xs-12 col-sm-12 np text-right change-password pull-right">
                                <div className=" col-xs-6 col-sm-5 np ">
                                  <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    value="yes"
                                    data-errors=""
                                  />

                                  <label htmlFor="remember-me"> Remember Me </label>
                                </div>
                                <div className=" col-xs-6 col-sm-6 np ">
                                  <a
                                    data-type="a"
                                    href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/exb/forget_password"
                                    className="color-red"
                                  >
                                    Forgot Password?
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="form-group"></div>
                            <div className="col-xs-12 text-center login-submit">
                              <a
                                href="https://dubaiwtc.vercel.app/Portal"
                                className="btn btn-danger form-xhttp-request"
                              >
                                Exhibitor Login
                              </a>
                              {/* <input
                                type="button"
                                name="submit"
                                value="Exhibitor Login"
                                className="btn btn-danger form-xhttp-request"
                                data-href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/exb/login"
                                data-qr="mi_encoded_string=PTArADA/VjNNUTz+FSNWCw==&amp;opd=content"
                              /> */}
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                data-type="a"
                className="onpage_popup"
                data-qr="mi_encoded_string=MOTIO1T1gZc2pPem+3tigA==&amp;opd=popup_div"
                id="disbaleme_mgs"
                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/exb/disable_msg"
                data-href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/exb/disable_msg"
              ></a>
            </div>
          </div>
          <script type="text/javascript">
            {`
    $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
    `}
          </script>
        </div>
      </div>
    </div>
  );
};

export default DubaiWTCLogin;
