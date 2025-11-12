/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { JSX } from 'react';
import { useState, useEffect } from 'react';
import {
  TextField,
  RichTextField,
  LinkField,
  ImageField,
  Image as JssImage,
  Text,
  RichText,
  ComponentRendering,
  ComponentParams,
  GetComponentServerProps,
} from '@sitecore-content-sdk/nextjs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import Image from 'next/image';
import { type Doctor } from 'src/pages/api/generate-mock-data';
//generateMockDoctors,

type PatientTypeOption = {
  fields: {
    Label: TextField;
    Value: TextField;
  };
};

type MediClinicAppointmentBookingFields = {
  Doctors: LinkField;
  Title: TextField;
  DoctorName: TextField;
  DoctorSpecialty: TextField;
  DoctorLocation: TextField;
  DoctorImage: ImageField;
  PatientLabel: TextField;
  PatientTypes: PatientTypeOption[];
  EstablishedPatientLabel: TextField;
  TreatmentLabel: TextField;
  TreatmentOptions: { label: TextField; value: TextField }[];
  TreatmentInfoText: RichTextField;
  DateTimeLabel: TextField;
  PersonalDetailsLabel: TextField;
  FirstNameLabel: TextField;
  LastNameLabel: TextField;
  DobLabel: TextField;
  MobileLabel: TextField;
  StreetLabel: TextField;
  NumberLabel: TextField;
  CityLabel: TextField;
  ZipLabel: TextField;
  EmailLabel: TextField;
  RepeatEmailLabel: TextField;
  ReasonLabel: TextField;
  SubmitButtonText: TextField;
  CancelButtonText: TextField;
  OverviewButtonText: TextField;
  CooperationText: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: MediClinicAppointmentBookingFields;
  doctorId: string;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const [patientType, setPatientType] = useState<'new' | 'established'>('new');
  const [treatment, setTreatment] = useState('');
  const [acceptInfo, setAcceptInfo] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availability, setAvailability] = useState<any[]>([]);
  const [doctor, setDoctor] = useState<Doctor>();
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    mobile: '',
    street: '',
    number: '',
    city: '',
    zip: '',
    email: '',
    repeatEmail: '',
    reason: '',
  });

  // Fetch availability when component mounts
  useEffect(() => {
    console.log('[v1] Loading doctors from /doctors.json...');

    fetch(props.fields.Doctors.value.href as string)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load doctors.json');
        return res.json();
      })
      .then((data: Doctor[]) => {
        console.log('[v1] Loaded', data.length, 'doctors');
        const doctor = props.doctorId && data.find((d) => String(d.id) === String(props.doctorId));
        if (doctor != undefined && doctor != '') {
          setDoctor(doctor);
        }
      })
      .catch((err) => {
        console.error('[v1] Error loading doctors:', err);
      });
  }, []);

  // useEffect(() => {
  //   const doctors = generateMockDoctors(3073);
  //   setDoctor(doctors[doctorId]);
  // }, [doctorId]);

  // Fetch availability when component mounts
  useEffect(() => {
    fetchAvailability(currentWeekStart);
  }, [props.doctorId]);

  const fetchAvailability = async (startDate: Date) => {
    try {
      const response = await fetch(
        `/api/appointments/availability?doctorId=${props.doctorId}&startDate=${startDate.toISOString().split('T')[0]}`
      );
      const data = await response.json();
      setAvailability(data.availability || []);
    } catch (error) {
      console.error('[v0] Error fetching availability:', error);
    }
  };

  const handlePreviousWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentWeekStart(newDate);
    fetchAvailability(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentWeekStart(newDate);
    fetchAvailability(newDate);
  };

  const handleTimeSelect = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[v0] Appointment booking submitted:', {
      doctor,
      patientType,
      treatment,
      selectedDate,
      selectedTime,
      formData,
    });
    // In real implementation, this would call an API to book the appointment
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-100 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Text
            field={props.fields.Title}
            tag="h1"
            className="text-2xl md:text-3xl font-bold text-gray-800"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          {/* Doctor Profile Sidebar */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={doctor?.image as string}
                  alt=""
                  width={400}
                  height={400}
                  objectFit="cover"
                />
              </div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">{doctor?.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{doctor?.specialty}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Info className="w-4 h-4" />
                {(doctor?.locations?.length ?? 0) > 0 ? (
                  <span>{(doctor?.locations ?? []).join(', ')}</span>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="space-y-6">
            {/* Step 1: New Patient */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#00A0C6] text-white flex items-center justify-center font-bold">
                  1
                </div>
                <Text
                  field={props.fields.PatientLabel}
                  tag="h3"
                  className="text-lg font-bold text-gray-800"
                />
              </div>
              <RadioGroup value={patientType} onValueChange={(value: any) => setPatientType(value)}>
                {props.fields.PatientTypes.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem
                      value={option.fields.Value.value as string}
                      id={`option-${index}`}
                    />
                    <Label htmlFor={`option-${index}`} className="cursor-pointer">
                      {option.fields.Label.value}
                    </Label>
                  </div>
                ))}
              </RadioGroup>{' '}
            </div>

            {/* Step 2: Treatment */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#00A0C6] text-white flex items-center justify-center font-bold">
                  2
                </div>
                <Text
                  field={props.fields.TreatmentLabel}
                  tag="h3"
                  className="text-lg font-bold text-gray-800"
                />
              </div>
              <select
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
              >
                <option value="">Select treatment</option>
                {props.fields.TreatmentOptions.map((option, index) => (
                  <option key={index} value={option.value.value}>
                    {option.label.value}
                  </option>
                ))}
              </select>
              {treatment && (
                <div className="bg-gray-50 p-4 rounded-md">
                  <RichText
                    field={props.fields.TreatmentInfoText}
                    tag="p"
                    className="text-sm text-gray-700 mb-3"
                  />
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="accept-info"
                      checked={acceptInfo}
                      onCheckedChange={(checked: any) => setAcceptInfo(checked)}
                    />
                    <Label htmlFor="accept-info" className="text-sm cursor-pointer">
                      Krankenkassenkarte mitbringen
                    </Label>
                  </div>
                </div>
              )}
            </div>

            {/* Step 3: Date and Time */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#00A0C6] text-white flex items-center justify-center font-bold">
                  3
                </div>
                <Text
                  field={props.fields.DateTimeLabel}
                  tag="h3"
                  className="text-lg font-bold text-gray-800"
                />
              </div>

              {/* Desktop: 3-column layout */}
              <div className="hidden md:block">
                <div className="flex items-center justify-between mb-4">
                  <Button variant="ghost" size="icon" onClick={handlePreviousWeek}>
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleNextWeek}>
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {availability.slice(0, 3).map((day, index) => (
                    <div key={index}>
                      <h4 className="text-center font-semibold mb-2">
                        {day.dayName}
                        <br />
                        <span className="text-sm text-gray-600">
                          {new Date(day.date).toLocaleDateString()}
                        </span>
                      </h4>
                      <div className="space-y-2">
                        {day.slots
                          .filter((slot: any) => slot.available)
                          .slice(0, 3)
                          .map((slot: any, slotIndex: number) => (
                            <Button
                              key={slotIndex}
                              variant={
                                selectedTime === slot.time && selectedDate === day.date
                                  ? 'default'
                                  : 'outline'
                              }
                              className={`w-full ${
                                selectedTime === slot.time && selectedDate === day.date
                                  ? 'bg-[#00A0C6] hover:bg-[#008FB5]'
                                  : ''
                              }`}
                              onClick={() => handleTimeSelect(day.date, slot.time)}
                            >
                              {slot.time} Time
                            </Button>
                          ))}
                        <Button variant="link" className="w-full text-[#00A0C6]">
                          Show more
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile: Single column with date selector */}
              <div className="md:hidden">
                <div className="flex items-center justify-between mb-4">
                  <Button variant="ghost" size="icon" onClick={handlePreviousWeek}>
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <span className="font-semibold">
                    {availability[0]?.dayName}{' '}
                    {availability[0] && new Date(availability[0].date).toLocaleDateString()}
                  </span>
                  <Button variant="ghost" size="icon" onClick={handleNextWeek}>
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
                <div className="space-y-2">
                  {availability[0]?.slots
                    .filter((slot: any) => slot.available)
                    .slice(0, 3)
                    .map((slot: any, index: number) => (
                      <Button
                        key={index}
                        variant={selectedTime === slot.time ? 'default' : 'outline'}
                        className={`w-full ${selectedTime === slot.time ? 'bg-[#00A0C6] hover:bg-[#008FB5]' : ''}`}
                        onClick={() => handleTimeSelect(availability[0].date, slot.time)}
                      >
                        {slot.time} Time
                      </Button>
                    ))}
                  <Button variant="link" className="w-full text-[#00A0C6]">
                    Show more
                  </Button>
                </div>
              </div>
            </div>

            {/* Step 4: Personal Details */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold">
                  4
                </div>
                <Text
                  field={props.fields.PersonalDetailsLabel}
                  tag="h3"
                  className="text-lg font-bold text-gray-800"
                />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">
                      <Text field={props.fields.FirstNameLabel} tag="span" />
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">
                      <Text field={props.fields.LastNameLabel} tag="span" />
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dob">
                    <Text field={props.fields.DobLabel} tag="span" />
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="dob"
                    placeholder="dd.mm.yyyy"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  />
                </div>

                <div className="flex items-center gap-4">
                  <JssImage
                    field={{
                      value: {
                        src: '/hirslanden-logo-pink.jpg',
                        alt: 'Hirslanden',
                        width: 120,
                        height: 26,
                      },
                    }}
                  />
                </div>

                <div>
                  <Label htmlFor="mobile">
                    <Text field={props.fields.MobileLabel} tag="span" />
                  </Label>
                  <Input
                    id="mobile"
                    placeholder="+41799000000"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-[1fr_auto] gap-4">
                  <div>
                    <Label htmlFor="street">
                      <Text field={props.fields.StreetLabel} tag="span" />
                    </Label>
                    <Input
                      id="street"
                      value={formData.street}
                      onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="number">
                      <Text field={props.fields.NumberLabel} tag="span" />
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="number"
                      required
                      className="w-24"
                      value={formData.number}
                      onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">
                      <Text field={props.fields.CityLabel} tag="span" />
                    </Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="zip">
                      <Text field={props.fields.ZipLabel} tag="span" />
                    </Label>
                    <Input
                      id="zip"
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">
                    <Text field={props.fields.EmailLabel} tag="span" />
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="repeatEmail">
                    <Text field={props.fields.RepeatEmailLabel} tag="span" />
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="repeatEmail"
                    type="email"
                    required
                    value={formData.repeatEmail}
                    onChange={(e) => setFormData({ ...formData, repeatEmail: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="reason">
                    <Text field={props.fields.ReasonLabel} tag="span" />
                  </Label>
                  <Textarea
                    id="reason"
                    rows={4}
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    className="bg-[#00A0C6] hover:bg-[#008FB5] text-white flex-1"
                  >
                    <Text field={props.fields.SubmitButtonText} tag="span" />
                  </Button>
                  <Button type="button" variant="outline" className="flex-1 bg-transparent">
                    <Text field={props.fields.OverviewButtonText} tag="span" />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Text field={props.fields.CancelButtonText} tag="span" />
                  </Button>
                </div>

                <Text
                  field={props.fields.CooperationText}
                  tag="p"
                  className="text-sm text-gray-500 text-center"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getComponentServerProps: GetComponentServerProps = async (
  _rendering,
  _layoutData,
  context
) => {
  let doctorId: string | undefined = '';
  if (context.params) {
    context.params.requestPath = context.params.path;
    doctorId = context.params.requestPath?.at(context.params.requestPath.length - 1);
  }
  console.log('ZZZZZ Context:', JSON.stringify(context.params));
  console.log('doctorID:', doctorId);

  return {
    doctorId: doctorId,
  };
};
