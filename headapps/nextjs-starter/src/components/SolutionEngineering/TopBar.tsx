import React, { JSX } from 'react';
import {
  Field,
  LinkField,
  Link as JssLink,
  ComponentRendering,
  ComponentParams,
} from '@sitecore-content-sdk/nextjs';
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from 'react-icons/fa6';

interface HeaderTopFields {
  PhoneNumber: Field<string>;
  Email: Field<string>;
  Hours: Field<string>;
  InstagramLink: LinkField;
  FacebookLink: LinkField;
  XLink: LinkField;
  AppointmentLink: LinkField;
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: HeaderTopFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  if (!props.fields) {
    return (
      <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <p>TopBar Component</p>
        </div>
      </div>
    );
  } else
    return (
      <div
        className="w-full border-b border-gray-200 bg-white text-sm text-gray-700"
        id={id ? id : undefined}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs md:text-sm">
            <span className="flex items-center gap-1">
              <FaPhone className="text-blue-600" />
              <span className="text-blue-600 font-medium">{props.fields.PhoneNumber.value}</span>
            </span>
            <span className="flex items-center gap-1">
              <FaEnvelope className="text-gray-500" />
              <span>{props.fields.Email.value}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              <FaClock />
              <span>{props.fields.Hours.value}</span>
            </span>
          </div>

          {/* Right Side: Social & CTA */}
          <div className="flex items-center gap-4">
            <JssLink field={props.fields.InstagramLink} className="hover:text-blue-600">
              <FaInstagram size={16} />
            </JssLink>
            <JssLink field={props.fields.FacebookLink} className="hover:text-blue-600">
              <FaFacebookF size={16} />
            </JssLink>
            <JssLink field={props.fields.XLink} className="hover:text-blue-600">
              <FaXTwitter size={16} />
            </JssLink>
            <JssLink field={props.fields.AppointmentLink}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm font-semibold tracking-wide whitespace-nowrap">
                MAKE AN APPOINTMENT
              </button>
            </JssLink>
          </div>
        </div>
      </div>
    );
};
