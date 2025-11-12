/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import type { TextField } from '@sitecore-content-sdk/nextjs';
import MediClinicDoctorCard, {
  MediClinicDoctorCardFields,
} from 'components/mediclinic/MediClinicDoctorCard';
import { Button } from '@/components/ui/button';

type MediClinicDoctorListingFields = {
  loadMoreText: TextField;
  initialDisplayCount: number;
};

type MediClinicDoctorListingProps = {
  fields: MediClinicDoctorListingFields;
  searchFilters?: {
    keyword?: string;
    hospital?: string;
    place?: string;
    specialty?: string;
    onlineAppointment?: boolean;
  };
  onCountChange?: (count: number) => void;
};

export function MediClinicDoctorListing({
  fields,
  searchFilters,
  onCountChange,
}: MediClinicDoctorListingProps) {
  const [displayCount, setDisplayCount] = useState(fields.initialDisplayCount || 10);
  const [doctors, setDoctors] = useState<{ fields: MediClinicDoctorCardFields }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchFilters) {
      fetchDoctors();
    }
  }, [searchFilters]);

  const fetchDoctors = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchFilters?.keyword) params.append('keyword', searchFilters.keyword);
      if (searchFilters?.hospital) params.append('hospital', searchFilters.hospital);
      if (searchFilters?.place) params.append('place', searchFilters.place);
      if (searchFilters?.specialty) params.append('specialty', searchFilters.specialty);
      if (searchFilters?.onlineAppointment) params.append('onlineAppointment', 'true');

      const response = await fetch(`/api/doctors?${params.toString()}`);
      const data = await response.json();

      const transformedDoctors = data.doctors.map((doctor: any) => ({
        fields: {
          name: { value: doctor.name },
          title: { value: doctor.title },
          specialty: { value: doctor.specialty },
          languages: { value: doctor.languages.join(', ') },
          locations: { value: doctor.locations.join(', ') },
          profileImage: {
            value: {
              src: doctor.profileImage,
              alt: doctor.name,
              width: 96,
              height: 96,
            },
          },
          profileLink: { value: { href: `/doctors/${doctor.doctorId}`, text: 'View Profile' } },
        },
      }));

      setDoctors(transformedDoctors);
      if (onCountChange) {
        onCountChange(data.total || transformedDoctors.length);
      }
    } catch (error) {
      console.error('[v0] Error fetching doctors:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 10);
  };

  const visibleDoctors = doctors.slice(0, displayCount);
  const hasMore = displayCount < doctors.length;

  if (isLoading) {
    return (
      <div className="bg-white py-12 text-center">
        <p className="text-gray-600">Loading doctors...</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="divide-y divide-gray-200">
        {visibleDoctors.map((doctor, index) => (
          <MediClinicDoctorCard key={index} fields={doctor.fields} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center py-8">
          <Button
            onClick={handleLoadMore}
            className="bg-[#00A0C6] hover:bg-[#008FB5] text-white px-8"
          >
            {fields.loadMoreText.value}
          </Button>
        </div>
      )}
    </div>
  );
}

export default MediClinicDoctorListing;
