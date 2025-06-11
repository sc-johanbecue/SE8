import React, { useEffect, useState } from 'react';
import { TextField, ImageField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface SliderItem {
  fields: {
    Image: ImageField;
    Title: TextField;
    SubTitle: TextField;
  };
}

interface Fields {
  SliderItems: SliderItem[];
}

type SliderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: SliderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const sliderItems = props.fields.SliderItems || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [sliderItems.length]);

  return (
    <div
      key={id ? id : undefined}
      id={id ? id : undefined}
      className={`component row ${props.params.styles}`}
    >
      <div className="columns small-12">
        <ul className="list list-slider" style={{ position: 'relative', overflow: 'hidden' }}>
          {sliderItems.map((item, index) => (
            <li
              key={index}
              className="slide"
              style={{
                backgroundImage: `linear-gradient(to bottom,transparent 0,rgba(0,0,0,.35) 100%), url(${item.fields.Image.value?.src})`,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: index === currentIndex ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            >
              <a
                className="slide-link"
                href="https://www.gdanimalhealth.com/Disease-control/MonitoringSurveillance"
              >
                MonitoringSurveillance
              </a>
              <div className="slide-caption">
                <p>
                  <Text field={item.fields.SubTitle} />
                </p>
                <h2>
                  <Text field={item.fields.Title} />
                </h2>
              </div>
              <div className="slide-overlay"></div>
              <ul className="slick-pager" role="tablist">
                {sliderItems.map((item, index) => (
                  <li
                    className={index === currentIndex ? 'slick-active' : ''}
                    role="presentation"
                    key={index}
                  >
                    <a>
                      <Text field={item.fields.Title} />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
