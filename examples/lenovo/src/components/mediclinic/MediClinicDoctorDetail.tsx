'use client';

import {
  TextField,
  ImageField,
  LinkField,
  Image as JssImage,
  Link as JssLink,
} from '@sitecore-content-sdk/nextjs';

import { User, Calendar, Mail, Phone, Globe, MapPin, Building2, ArrowLeft } from 'lucide-react';

type ContactInfo = {
  practiceName: TextField;
  street: TextField;
  city: TextField;
  zip: TextField;
  country: TextField;
  phone: TextField;
  phoneLink: LinkField;
  website: TextField;
  websiteLink: LinkField;
  email: TextField;
  emailLink: LinkField;
};

type MediClinicDoctorDetailFields = {
  doctorId: number;
  name: TextField;
  title: TextField;
  specialty: TextField;
  specialtyLink: LinkField;
  specialtyDetail: TextField;
  specialtyDetailLink: LinkField;
  languages: TextField;
  profileImage: ImageField;
  hasOnlineBooking: boolean;
  bookingLink: LinkField;
  contactInfo: ContactInfo;
  hospitals: Array<{
    name: TextField;
    link: LinkField;
  }>;
  backLink: LinkField;
};

type MediClinicDoctorDetailProps = {
  fields: MediClinicDoctorDetailFields;
};

export function MediClinicDoctorDetail({ fields }: MediClinicDoctorDetailProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <JssLink
            field={fields.backLink}
            className="inline-flex items-center gap-2 text-[#00A0C6] hover:text-[#008FB5] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </JssLink>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              {fields.profileImage.value?.src ? (
                <JssImage
                  field={fields.profileImage}
                  className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover mx-auto md:mx-0"
                />
              ) : (
                <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-gray-200 flex items-center justify-center mx-auto md:mx-0">
                  <User className="w-16 h-16 md:w-24 md:h-24 text-gray-400" />
                </div>
              )}
            </div>

            {/* Doctor Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {fields.name.value}
              </h1>

              <div className="space-y-2 text-base md:text-lg">
                <div>
                  <span className="font-semibold text-gray-700">Specialist in</span>
                  <br />
                  <JssLink
                    field={fields.specialtyLink}
                    className="text-[#00A0C6] hover:text-[#008FB5] transition-colors"
                  >
                    {fields.specialty.value}
                  </JssLink>
                </div>

                {fields.specialtyDetail.value && (
                  <div>
                    <span className="font-semibold text-gray-700">specialty:</span>
                    <br />
                    <JssLink
                      field={fields.specialtyDetailLink}
                      className="text-[#00A0C6] hover:text-[#008FB5] transition-colors"
                    >
                      {fields.specialtyDetail.value}
                    </JssLink>
                  </div>
                )}

                <div>
                  <span className="font-semibold text-gray-700">Languages</span>
                  <br />
                  <span className="text-gray-600">{fields.languages.value}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
          {fields.hasOnlineBooking && (
            <JssLink
              field={fields.bookingLink}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-[#E6F7FB] text-gray-700 rounded hover:bg-[#D0EFF7] transition-colors font-medium"
            >
              <Calendar className="w-5 h-5" />
              Book appointment online
            </JssLink>
          )}

          <JssLink
            field={fields.contactInfo.emailLink}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-[#E6F7FB] text-gray-700 rounded hover:bg-[#D0EFF7] transition-colors font-medium"
          >
            <Mail className="w-5 h-5" />
            Send email
          </JssLink>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#00A0C6] flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <h3 className="font-bold text-lg text-gray-900">
              {fields.contactInfo.practiceName.value}
            </h3>

            <div className="space-y-2">
              <p className="text-[#00A0C6]">{fields.contactInfo.street.value}</p>
              <p className="text-[#00A0C6]">
                {fields.contactInfo.zip.value} {fields.contactInfo.city.value}
              </p>
              <p className="text-[#00A0C6]">{fields.contactInfo.country.value}</p>
            </div>

            <div className="space-y-2 pt-4">
              <JssLink
                field={fields.contactInfo.phoneLink}
                className="flex items-center gap-2 text-gray-700 hover:text-[#00A0C6] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {fields.contactInfo.phone.value}
              </JssLink>

              <JssLink
                field={fields.contactInfo.websiteLink}
                className="flex items-center gap-2 text-gray-700 hover:text-[#00A0C6] transition-colors"
              >
                <Globe className="w-4 h-4" />
                {fields.contactInfo.website.value}
              </JssLink>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-700 mb-2">Doctor direct</p>
              <JssLink
                field={fields.contactInfo.emailLink}
                className="flex items-center gap-2 text-[#00A0C6] hover:text-[#008FB5] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {fields.contactInfo.email.value}
              </JssLink>
            </div>
          </div>
        </div>
      </div>

      {/* Practices Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#00A0C6] flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Practices at</h2>
          </div>

          <ul className="space-y-2">
            {fields.hospitals.map((hospital, index) => (
              <li key={index}>
                <JssLink
                  field={hospital.link}
                  className="text-[#00A0C6] hover:text-[#008FB5] transition-colors"
                >
                  {hospital.name.value}
                </JssLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MediClinicDoctorDetail;
