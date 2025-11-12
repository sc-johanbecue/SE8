'use client';

import { useState } from 'react';
import type { TextField, ImageField, LinkField } from '@sitecore-content-sdk/nextjs';
import { Link as JssLink } from '@sitecore-content-sdk/nextjs';
import { User, Calendar } from 'lucide-react';
import Image from 'next/image';

export type MediClinicDoctorCardFields = {
  doctorId: number;
  name: TextField;
  title: TextField;
  specialty: TextField;
  languages: TextField;
  locations: TextField;
  profileImage: ImageField;
  profileLink: LinkField;
  hasOnlineBooking: boolean;
};

type MediClinicDoctorCardProps = {
  fields: MediClinicDoctorCardFields;
};

export function MediClinicDoctorCard({ fields }: MediClinicDoctorCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex gap-4 md:gap-6 p-4 md:p-6 border-b border-gray-200 hover:bg-gray-50 transition-colors relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-shrink-0">
        {fields.profileImage.value?.src ? (
          <Image src={fields.profileImage.value?.src as string} alt="" width={90} height={90} />
        ) : (
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="w-10 h-10 md:w-12 md:h-12 text-gray-400" />
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <JssLink field={fields.profileLink} className="group">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#00A0C6] transition-colors">
            {fields.name.value}
          </h3>
        </JssLink>

        <div className="space-y-2 text-sm">
          <div>
            <span className="font-semibold text-gray-700">Specialist in</span>
            <p className="text-gray-600">{fields.specialty.value}</p>
          </div>

          <div>
            <span className="font-semibold text-gray-700">Languages:</span>
            <p className="text-gray-600">{fields.languages.value}</p>
          </div>

          <div>
            <span className="font-semibold text-gray-700">Locations:</span>
            <p className="text-gray-600">{fields.locations.value}</p>
          </div>
        </div>
      </div>

      {fields.hasOnlineBooking && isHovered && (
        <a
          href={`/corporate/doctors/${fields.doctorId}`}
          className="absolute right-4 top-1/2 -translate-y-1/2 px-6 py-3 bg-[#00A0C6] text-white rounded hover:bg-[#008FB5] transition-colors font-medium whitespace-nowrap flex items-center gap-2"
        >
          <Calendar className="w-5 h-5" />
          Book appointment online
        </a>
      )}
    </div>
  );
}

export default MediClinicDoctorCard;
