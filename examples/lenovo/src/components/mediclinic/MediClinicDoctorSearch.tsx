'use client';

import { useState, useEffect, useMemo } from 'react';
import { TextField, Text, LinkField } from '@sitecore-content-sdk/nextjs';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import MediClinicDoctorCard from 'components/mediclinic/MediClinicDoctorCard';
import { type Doctor } from 'src/pages/api/generate-mock-data';
//generateMockDoctors,

type MediClinicDoctorsFinderFields = {
  Doctors: LinkField;
  Title: TextField;
  DoctorsLabel: TextField;
  KeywordPlaceholder: TextField;
  HospitalLabel: TextField;
  PlaceLabel: TextField;
  SpecialtyLabel: TextField;
  AppointmentOnlineLabel: TextField;
  ApplyButtonText: TextField;
  LoadMoreText: TextField;
  InitialDisplayCount: TextField;
  LoadingMessage: TextField;
};

type MediClinicDoctorsFinderProps = {
  fields: MediClinicDoctorsFinderFields;
};

export function MediClinicDoctorsFinder(props: MediClinicDoctorsFinderProps) {
  const [keyword, setKeyword] = useState('');
  const [hospital, setHospital] = useState('');
  const [place, setPlace] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [appointmentOnline, setAppointmentOnline] = useState(false);
  const [displayCount, setDisplayCount] = useState(
    (props.fields?.InitialDisplayCount.value as number) || 10
  );
  const [allDoctors, setAllDoctors] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('[v1] Loading doctors from /doctors.json...');

    fetch(props.fields.Doctors.value.href as string) //'/doctors.json'
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load doctors.json');
        return res.json();
      })
      .then((data: Doctor[]) => {
        console.log('[v1] Loaded', data.length, 'doctors');
        setAllDoctors(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('[v1] Error loading doctors:', err);
        setIsLoading(false);
      });
  }, [props.fields.Doctors.value.href]);

  // useEffect(() => {
  //   console.log('[v0] Generating mock doctors...');
  //   const doctors = generateMockDoctors(3073);
  //   setAllDoctors(doctors);
  //   setIsLoading(false);
  //   console.log('[v0] Generated', doctors.length, 'doctors');
  // }, []);

  const filteredDoctors = useMemo(() => {
    console.log('[v0] Filtering doctors with:', {
      keyword,
      hospital,
      place,
      specialty,
      appointmentOnline,
    });

    let filtered = allDoctors;

    if (keyword) {
      const lowerKeyword = keyword.toLowerCase();
      filtered = filtered.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(lowerKeyword) ||
          doctor.specialty.toLowerCase().includes(lowerKeyword) ||
          doctor.subspecialty.toLowerCase().includes(lowerKeyword)
      );
    }

    if (hospital && hospital !== 'all') {
      filtered = filtered.filter((doctor) => doctor.hospital === hospital);
    }

    if (place && place !== 'all') {
      filtered = filtered.filter((doctor) => doctor.city === place);
    }

    if (specialty && specialty !== 'all') {
      filtered = filtered.filter((doctor) => doctor.specialty === specialty);
    }

    if (appointmentOnline) {
      filtered = filtered.filter((doctor) => doctor.hasOnlineBooking);
    }

    console.log('[v0] Filtered to', filtered.length, 'doctors');
    return filtered;
  }, [allDoctors, keyword, hospital, place, specialty, appointmentOnline]);

  const filterOptions = useMemo(() => {
    const hospitals = Array.from(new Set(allDoctors.map((d) => d.hospital))).sort();
    const places = Array.from(new Set(allDoctors.map((d) => d.city))).sort();
    const specialties = Array.from(new Set(allDoctors.map((d) => d.specialty))).sort();

    return { hospitals, places, specialties };
  }, [allDoctors]);

  const handleSearch = () => {
    setDisplayCount((props.fields?.InitialDisplayCount.value as number) || 10);
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 10);
  };

  const transformedDoctors = filteredDoctors.map((doctor) => ({
    fields: {
      doctorId: doctor.doctorId,
      name: { value: doctor.name },
      title: { value: doctor.title },
      specialty: { value: doctor.specialty },
      languages: { value: doctor.languages.join(', ') },
      locations: { value: doctor.city },
      profileImage: {
        value: {
          src: doctor.image,
          alt: doctor.name,
          width: 96,
          height: 96,
        },
      },
      profileLink: { value: { href: `/doctors/${doctor.id}`, text: 'View Profile' } },
      hasOnlineBooking: doctor.hasOnlineBooking,
    },
  }));

  const visibleDoctors = transformedDoctors.slice(0, displayCount);
  const hasMore = displayCount < transformedDoctors.length;

  if (isLoading) {
    return (
      <div className="bg-white py-12 text-center">
        <p className="text-gray-600">
          <Text field={props.fields?.LoadingMessage} />
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          <Text field={props.fields?.DoctorsLabel} />
          &nbsp;
          <span className="text-gray-500 font-normal">{filteredDoctors.length}</span>
        </h2>
      </div>

      <div className="py-6 md:py-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4">
          {/* Keyword Search */}
          <div className="relative sm:col-span-2 lg:col-span-1">
            <Input
              type="text"
              placeholder={props.fields?.KeywordPlaceholder.value as string}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="pr-10"
            />
            <Button
              size="icon"
              className="absolute right-0 top-0 h-full bg-[#00A0C6] hover:bg-[#008FB5] rounded-l-none"
              onClick={handleSearch}
            >
              <Search className="h-5 w-5 text-white" />
            </Button>
          </div>

          {/* Hospital Select */}
          <Select value={hospital} onValueChange={setHospital}>
            <SelectTrigger>
              <SelectValue placeholder={props.fields?.HospitalLabel.value} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Hospitals</SelectItem>
              {filterOptions.hospitals.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Place Select */}
          <Select value={place} onValueChange={setPlace}>
            <SelectTrigger>
              <SelectValue placeholder={props.fields?.PlaceLabel.value} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Places</SelectItem>
              {filterOptions.places.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Specialty Select */}
          <Select value={specialty} onValueChange={setSpecialty}>
            <SelectTrigger>
              <SelectValue placeholder={props.fields?.SpecialtyLabel.value} />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              <SelectItem value="all">All Specialties</SelectItem>
              {filterOptions.specialties.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Appointment Online Checkbox and Apply Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="appointment-online"
              checked={appointmentOnline}
              onCheckedChange={(checked) => setAppointmentOnline(checked as boolean)}
            />
            <label htmlFor="appointment-online" className="text-sm text-gray-700 cursor-pointer">
              {props.fields?.AppointmentOnlineLabel.value}
            </label>
          </div>

          <Button
            onClick={handleSearch}
            className="bg-[#00A0C6] hover:bg-[#008FB5] text-white px-8 w-full sm:w-auto"
          >
            {props.fields?.ApplyButtonText.value}
          </Button>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {visibleDoctors.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-gray-600">No doctors found matching your criteria.</p>
          </div>
        ) : (
          visibleDoctors.map((doctor, index) => (
            <MediClinicDoctorCard key={index} fields={doctor.fields} />
          ))
        )}
      </div>

      {hasMore && (
        <div className="flex justify-center py-8">
          <Button
            onClick={handleLoadMore}
            className="bg-[#00A0C6] hover:bg-[#008FB5] text-white px-8"
          >
            {props.fields?.LoadMoreText.value}
          </Button>
        </div>
      )}
    </div>
  );
}

export default MediClinicDoctorsFinder;
