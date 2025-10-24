/* eslint-disable react-hooks/exhaustive-deps */
import React, { JSX, useEffect, useState } from 'react';
import { TextField, Text, ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';

type Fields = {
  Title: TextField;
  CountdownTargetDate: TextField;
  DaysLabel: TextField;
  MinutesLabel: TextField;
  HoursLabel: TextField;
  SecondsLabel: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const countdownTargetDate = props.fields.CountdownTargetDate.value as string;
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(countdownTargetDate).getTime();
      console.log('DateTimeinUseEffect', countdownTargetDate);
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#E55A00] rounded-lg p-3 md:p-6" key={id}>
      <Text
        tag="h2"
        field={props.fields.Title}
        className="text-base md:text-2xl font-bold text-white mb-2 md:mb-4 text-center md:text-left"
      />
      <div className="grid grid-cols-4 gap-1.5 md:gap-3">
        {[
          { value: timeLeft.days, label: props.fields.DaysLabel.value },
          { value: timeLeft.hours, label: props.fields.HoursLabel.value },
          { value: timeLeft.minutes, label: props.fields.MinutesLabel.value },
          { value: timeLeft.seconds, label: props.fields.SecondsLabel.value },
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-1.5 md:p-3 lg:p-4 text-center">
            <div className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] md:text-xs lg:text-sm text-gray-600 mt-0.5 md:mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
