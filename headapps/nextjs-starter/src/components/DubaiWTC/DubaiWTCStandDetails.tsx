import React from 'react';

import { TextField, Text, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  StandNo: TextField;
  HallNo: TextField;
  Pavilion: TextField;
  StandType: TextField;
  StandArea: TextField;
  StandWidth: TextField;
  StandDepth: TextField;
  OpenSides: TextField;
}

type DubaiWTCStandDetailsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const DubaiWTCStandDetails = (props: DubaiWTCStandDetailsProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext.pageEditing;

  return (
    <div className="col-xs-12  whitebg mrg_bt30 formlabels">
      <div>
        <div
          data-shortcode="W1NIT1JUOlN0YW5kLUNvbnRlbnQgZW52X2lkPSIyMDE0IiBleGJfaWQ9IjE2MzUxIl0="
          data-editable="no"
          className=" mceNonEditable"
        >
          <div className="col-xs-12 stand_block np" style={{ paddingLeft: '10px;' }}>
            <div className="col-xs-12 col-md-6 np">
              {isPageEditing ? (
                <h5>******** ****** **** ******</h5>
              ) : (
                <h5>Sitecore Middle East FZ-LLC</h5>
              )}
            </div>
            <div className="col-xs-12 col-md-6 text-right np">
              <div className="col-xs-10  np width-auto np">
                <h5 className="text-right">
                  {' '}
                  <Text field={props.fields.Title} />
                </h5>
              </div>
              <div className="col-xs-2 img_wrapper">
                <img
                  src="https://dwtc.exhibitoronlinemanual.com/themes/gitex_theme/images/stand_details.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xs-12 np">
            <div className="stdblk-container-col-8">
              <div className="std-block">
                <Text field={props.fields.StandNo} />
                {isPageEditing ? <p>**-***</p> : <p>H4-B10</p>}
              </div>
              <div className="std-block">
                <Text field={props.fields.HallNo} />
                {isPageEditing ? <p>Hall **</p> : <p>Hall 4</p>}
              </div>
              <div className="std-block">
                <Text field={props.fields.Pavilion} />
                {isPageEditing ? <p>*</p> : <p>-</p>}
              </div>
              <div className="std-block">
                <Text field={props.fields.StandType} />
                {isPageEditing ? <p>***** ****</p> : <p>Space Only</p>}
              </div>
              <div className="std-block">
                <Text field={props.fields.StandArea} />
                {isPageEditing ? <p>***.** Sq.m</p> : <p>120.00 Sq.m </p>}
              </div>
              <div className="std-block">
                <Text field={props.fields.StandWidth} />
                {isPageEditing ? <p>**.** </p> : <p>10.00</p>}
              </div>
              <div className="std-block">
                <Text field={props.fields.StandDepth} />
                {isPageEditing ? <p>**.** </p> : <p>12.00</p>}
              </div>
              <div className="std-block">
                <Text field={props.fields.OpenSides} />
                {isPageEditing ? <p>*</p> : <p>4</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiWTCStandDetails;
