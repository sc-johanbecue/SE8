import React from 'react';
import Link from 'next/link';

import { TextField, Text, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  FormName: TextField;
  DeadlineDate: TextField;
  TimeLeft: TextField;
  FormStatus: TextField;
  Action: TextField;
  AddToCalendar: TextField;
}

type DubaiWTCOptionalFormsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const DubaiWTCOptionalForms = (props: DubaiWTCOptionalFormsProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  return (
    <div className="col-xs-12 panelsection nm np">
      <div className="col-xs-12 np ">
        <div className="np col-xs-12  add_contact_outer ">
          <div className="col-xs-12 nplr_xs nplr">
            <div className="manage_exhibitors_box col-xs-12 whitebg shadow border-radius text-bold npb">
              <div className="checklist_form_wrapper col-xs-12 whitebg">
                <div className="col-xs-12 np">
                  <div className="col-xs-12 formname nplr_xs np">
                    <h2 className="heading_page ">
                      <Text field={props.fields.Title} />
                    </h2>
                  </div>
                </div>
                <div className="my_message_table common_table col-xs-12 nplr">
                  <div className="table-responsive">
                    <table
                      id="example_data"
                      className="table table-striped display"
                      style={{ verticalAlign: 'middle' }}
                      width="100%"
                    >
                      <thead>
                        <tr>
                          {/* <th>Form No.</th> */}
                          <th className="w285">
                            <Text field={props.fields.FormName} />
                          </th>
                          <th>
                            <Text field={props.fields.DeadlineDate} />
                          </th>
                          {/* <th>CATEGORY</th> */}
                          <th>
                            <Text field={props.fields.TimeLeft} />
                          </th>
                          {/* <th>EMAIL RECIPIENT</th> */}
                          <th style={{ width: '25%', textWrap: 'nowrap' }}>
                            <Text field={props.fields.FormStatus} />
                          </th>
                          <th>
                            <Text field={props.fields.Action} />
                          </th>
                          <th>
                            <Text field={props.fields.AddToCalendar} />
                          </th>
                        </tr>
                      </thead>
                      {isPageEditing ? (
                        <tbody>
                          <tr>
                            {/* <td className="color-red">
                                                                  </td> */}
                            <td className="color-red">
                              <Link data-type="a" href="">
                                ***** ************ ******
                              </Link>
                            </td>
                            <td className="color-red">** ******* ****</td>
                            {/* <td valign="middle"  className="color-red ">
                                                                  Optional                                                        </td> */}
                            <td className="color-red">*</td>
                            {/* <td  className="color-red">
                                                                  <Link data-type='a' href="mailto:GitexOps@dwtc.com"  style="color:#eb3409 !important;" > 
                                                                      GitexOps@dwtc.com                                                            </Link>
                                                                  </td> */}
                            <td>
                              <span className="label label-suspend ">******** ******</span>
                            </td>
                            <td>
                              <Link data-type="a" href="#">
                                <i className="icon icon-eye-1"></i> View Form{' '}
                              </Link>
                            </td>
                            <td className="ical text-center">
                              <Link
                                data-type="a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ical"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/add_ical/form112"
                              >
                                <span data-tooltip-top="Add To Calendar">
                                  <img
                                    src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/calendar.png"
                                    alt=""
                                    style={{ width: '20px', height: 'auto' }}
                                  />
                                </span>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      ) : (
                        <tbody>
                          <tr>
                            {/* <td className="color-red">
                                                                  </td> */}
                            <td className="color-red">
                              <Link
                                data-type="a"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTExMg=="
                              >
                                {' '}
                                Dubai Municipality Letter
                              </Link>
                            </td>
                            <td className="color-red">04 October 2024</td>
                            {/* <td valign="middle"  className="color-red ">
                                                                  Optional                                                        </td> */}
                            <td className="color-red">0</td>
                            {/* <td  className="color-red">
                                                                  <Link data-type='a' href="mailto:GitexOps@dwtc.com"  style="color:#eb3409 !important;" > 
                                                                      GitexOps@dwtc.com                                                            </Link>
                                                                  </td> */}
                            <td>
                              <span className="label label-suspend ">Deadline Passed </span>
                            </td>
                            <td>
                              <Link
                                data-type="a"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTExMg=="
                              >
                                {' '}
                                <i className="icon icon-eye-1"></i> View Form{' '}
                              </Link>
                            </td>
                            <td className="ical text-center">
                              <Link
                                data-type="a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ical"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/add_ical/form112"
                              >
                                <span data-tooltip-top="Add To Calendar">
                                  <img
                                    src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/calendar.png"
                                    alt=""
                                    style={{ width: '20px', height: 'auto' }}
                                  />
                                </span>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            {/* <td className="">
                                                                  </td> */}
                            <td className="">
                              <Link
                                data-type="a"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTExMQ=="
                              >
                                {' '}
                                Dubai Economic Department Letter for Raffle/Prize Giveaways
                              </Link>
                            </td>
                            <td className="">10 October 2024</td>
                            {/* <td valign="middle"  className=" ">
                                                                  Optional                                                        </td> */}
                            <td className="">2 DAYS</td>
                            {/* <td  className="">
                                                                  <Link data-type='a' href="mailto:Gitexops@dwtc.com"  > 
                                                                      Gitexops@dwtc.com                                                            </Link>
                                                                  </td> */}
                            <td>
                              <span className="label label-suspend ">Not Filled </span>
                            </td>
                            <td>
                              <Link
                                data-type="a"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTExMQ=="
                              >
                                {' '}
                                <i className="icon icon-eye-1"></i> View Form{' '}
                              </Link>
                            </td>
                            <td className="ical text-center">
                              <Link
                                data-type="a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ical"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/add_ical/form111"
                              >
                                <span data-tooltip-top="Add To Calendar">
                                  <img
                                    src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/calendar.png"
                                    alt=""
                                    style={{ width: '20px', height: 'auto' }}
                                  />
                                </span>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            {/* <td className="">
                                                                  </td> */}
                            <td className="">
                              <Link
                                data-type="a"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTk2"
                              >
                                {' '}
                                Vehicle Display Notification
                              </Link>
                            </td>
                            <td className="">10 October 2024</td>
                            {/* <td valign="middle"  className=" ">
                                                                  Optional                                                        </td> */}
                            <td className="">2 DAYS</td>
                            {/* <td  className="">
                                                                  <Link data-type='a' href="mailto:GitexOps@dwtc.com"  > 
                                                                      GitexOps@dwtc.com                                                            </Link>
                                                                  </td> */}
                            <td>
                              <span className="label label-suspend ">Not Filled </span>
                            </td>
                            <td>
                              <Link
                                data-type="a"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTk2"
                              >
                                {' '}
                                <i className="icon icon-eye-1"></i> View Form{' '}
                              </Link>
                            </td>
                            <td className="ical text-center">
                              <Link
                                data-type="a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ical"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/add_ical/form96"
                              >
                                <span data-tooltip-top="Add To Calendar">
                                  <img
                                    src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/calendar.png"
                                    alt=""
                                    style={{ width: '20px', height: 'auto' }}
                                  />
                                </span>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            {/* <td className="">
                                                                  </td> */}
                            <td className="">
                              <Link
                                data-type="a"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTIx"
                              >
                                {' '}
                                Exhibitors - Visa Invitation Letter
                              </Link>
                            </td>
                            <td className="">10 October 2024</td>
                            {/* <td valign="middle"  className=" ">
                                                                  Optional                                                        </td> */}
                            <td className="">2 DAYS</td>
                            {/* <td  className="">
                                                                  <Link data-type='a' href="mailto: GitexOps@dwtc.com"  > 
                                                                       GitexOps@dwtc.com                                                            </Link>
                                                                  </td> */}
                            <td>
                              <span className="label label-suspend ">Not Filled </span>
                            </td>
                            <td>
                              <Link
                                data-type="a"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTIx"
                              >
                                {' '}
                                <i className="icon icon-eye-1"></i> View Form{' '}
                              </Link>
                            </td>
                            <td className="ical text-center">
                              <Link
                                data-type="a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ical"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/add_ical/form21"
                              >
                                <span data-tooltip-top="Add To Calendar">
                                  <img
                                    src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/calendar.png"
                                    alt=""
                                    style={{ width: '20px', height: 'auto' }}
                                  />
                                </span>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            {/* <td className="">
                                                                  </td> */}
                            <td className="">
                              <Link
                                data-type="a"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTE4"
                              >
                                {' '}
                                Dubai Customs Clearance Letter
                              </Link>
                            </td>
                            <td className="">10 October 2024</td>
                            {/* <td valign="middle"  className=" ">
                                                                  Optional                                                        </td> */}
                            <td className="">2 DAYS</td>
                            {/* <td  className="">
                                                                  <Link data-type='a' href="mailto:GitexOps@dwtc.com"  > 
                                                                      GitexOps@dwtc.com                                                            </Link>
                                                                  </td> */}
                            <td>
                              <span className="label label-suspend ">Not Filled </span>
                            </td>
                            <td>
                              <Link
                                data-type="a"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTE4"
                              >
                                {' '}
                                <i className="icon icon-eye-1"></i> View Form{' '}
                              </Link>
                            </td>
                            <td className="ical text-center">
                              <Link
                                data-type="a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ical"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/add_ical/form18"
                              >
                                <span data-tooltip-top="Add To Calendar">
                                  <img
                                    src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/calendar.png"
                                    alt=""
                                    style={{ width: '20px', height: 'auto' }}
                                  />
                                </span>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            {/* <td className="">
                                                                  </td> */}
                            <td className="">
                              <Link
                                data-type="a"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTE0"
                              >
                                {' '}
                                Participation Letter
                              </Link>
                            </td>
                            <td className="">10 October 2024</td>
                            {/* <td valign="middle"  className=" ">
                                                                  Optional                                                        </td> */}
                            <td className="">2 DAYS</td>
                            {/* <td  className="">
                                                                  <Link data-type='a' href="mailto:GitexOps@dwtc.com"  > 
                                                                      GitexOps@dwtc.com                                                            </Link>
                                                                  </td> */}
                            <td>
                              <span className="label label-suspend ">Not Filled </span>
                            </td>
                            <td>
                              <Link
                                data-type="a"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTE0"
                              >
                                {' '}
                                <i className="icon icon-eye-1"></i> View Form{' '}
                              </Link>
                            </td>
                            <td className="ical text-center">
                              <Link
                                data-type="a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ical"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/add_ical/form14"
                              >
                                <span data-tooltip-top="Add To Calendar">
                                  <img
                                    src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/calendar.png"
                                    alt=""
                                    style={{ width: '20px', height: 'auto' }}
                                  />
                                </span>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            {/* <td className="">
                                                                  </td> */}
                            <td className="">
                              <Link
                                data-type="a"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTEw"
                              >
                                {' '}
                                Temporary Staff List
                              </Link>
                            </td>
                            <td className="">10 October 2024</td>
                            {/* <td valign="middle"  className=" ">
                                                                  Optional                                                        </td> */}
                            <td className="">2 DAYS</td>
                            {/* <td  className="">
                                                                  <Link data-type='a' href="mailto:OpsAdmin@dwtc.com"  > 
                                                                      OpsAdmin@dwtc.com                                                            </Link>
                                                                  </td> */}
                            <td>
                              <span className="label label-suspend ">Not Filled </span>
                            </td>
                            <td>
                              <Link
                                data-type="a"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/forms/view/Zm9ybTEw"
                              >
                                {' '}
                                <i className="icon icon-eye-1"></i> View Form{' '}
                              </Link>
                            </td>
                            <td className="ical text-center">
                              <Link
                                data-type="a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ical"
                                href="https://dwtc.exhibitoronlinemanual.com/gitex-global-2024/dashboard/add_ical/form10"
                              >
                                <span data-tooltip-top="Add To Calendar">
                                  <img
                                    src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/calendar.png"
                                    alt=""
                                    style={{ width: '20px', height: 'auto' }}
                                  />
                                </span>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      )}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiWTCOptionalForms;
