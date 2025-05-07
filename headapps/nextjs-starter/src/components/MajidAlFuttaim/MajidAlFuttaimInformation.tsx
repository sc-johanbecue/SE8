/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {
  TextField,
  Text,
  RichTextField,
  RichText,
  LinkField,
  Link as JssLink,
} from '@sitecore-jss/sitecore-jss-nextjs';
import 'animate.css';

interface Fields {
  Heading: TextField;
  Description: RichTextField;
  LinkText: TextField;
  Link: LinkField;
}

type InformationProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const InformationDefaultComponent = (props: InformationProps): JSX.Element => (
  <div className={`component Information ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Information</span>
    </div>
  </div>
);

export const Default = (props: InformationProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className="section-to-scroll active" data-color="dark" data-section-name="" id="">
        <div className="information">
          <div className="section-container">
            <div className="row">
              <div className="col-md-6 col-12 text-content">
                <div className="inner-content">
                  <div className="section-heading">
                    <h2>
                      <Text field={props.fields.Heading} />
                    </h2>
                  </div>
                  <div className="description">
                    <RichText field={props.fields.Description} />
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12 info-content">
                <div className="info-box">
                  <div className="info-contact">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      className="svg-image replaced-svg"
                    >
                      <g fill="#FFF">
                        <path d="M25.411 2.589A7.116 7.116 0 0020.34.475c-1.902 0-3.698.74-5.072 2.114l-4.174 4.173a.766.766 0 000 1.11.766.766 0 001.11 0l4.173-4.174A5.598 5.598 0 0120.34 2.06c1.479 0 2.905.582 3.962 1.638A5.598 5.598 0 0125.94 7.66c0 1.48-.634 2.906-1.69 3.963l-4.175 4.173c-2.166 2.166-5.705 2.166-7.871 0-.581-.58-1.004-1.268-1.321-2.06-.158-.423-.581-.634-1.004-.476-.422.159-.634.582-.475 1.004.37 1.004.898 1.902 1.69 2.642a7.207 7.207 0 005.072 2.113c1.85 0 3.698-.687 5.072-2.113l4.173-4.174a7.116 7.116 0 002.114-5.072c0-1.902-.793-3.698-2.114-5.071z"></path>
                        <path d="M15.268 20.604l-4.174 4.173c-2.166 2.166-5.705 2.166-7.871 0a5.598 5.598 0 01-1.638-3.962c0-1.48.581-2.906 1.638-3.962l4.173-4.174a5.598 5.598 0 013.962-1.637c1.48 0 2.906.58 3.963 1.637.475.476.845 1.057 1.162 1.638.159.423.634.581 1.057.423.422-.159.58-.634.422-1.057a7.275 7.275 0 00-1.479-2.113 7.116 7.116 0 00-5.072-2.113c-1.902 0-3.698.74-5.071 2.113l-4.174 4.173a7.174 7.174 0 000 10.144A7.207 7.207 0 007.238 28c1.849 0 3.698-.687 5.071-2.113l4.174-4.174a.766.766 0 000-1.11c-.317-.316-.898-.316-1.215 0z"></path>
                      </g>
                    </svg>
                    <span>
                      <Text field={props.fields.LinkText} />
                    </span>
                    <JssLink field={props.fields.Link} target="_blank" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <InformationDefaultComponent {...props} />;
};
