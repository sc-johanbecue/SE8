import React from 'react';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Text: TextField;
}

type SliderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const SliderDefaultComponent = (props: SliderProps): JSX.Element => (
  <div className={`component Slider ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Slider</span>
    </div>
  </div>
);

export const Default = (props: SliderProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <>
      <div
        key={id ? id : undefined}
        id={id ? id : undefined}
        className={`component row ${props.params.styles}`}
      >
        <div className="columns small-12">
          <ul
            className="list list-slider"
            data-module="slider"
            data-module-options='{"lazyLoad":"ondemand"}'
          >
            <li
              id="phcolumn_0_phcontent_0_phspotlightslides_0_Slide"
              className="slide"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom,transparent 0,rgba(0,0,0,.35) 100%), url(https://www.gdanimalhealth.com/-/media/Images/GDDiergezondheid/Home/spotlight/royal-gd-spotlight.jpg?mw=1200)',
              }}
              data-title="About Royal GD"
            >
              <a className="slide-link" href="https://www.gdanimalhealth.com/About-us">
                About-us
              </a>
              <div className="slide-caption">
                <p></p>
                <h2>About Royal GD</h2>
              </div>
              <div className="slide-overlay"></div>
            </li>
            <li
              id="phcolumn_0_phcontent_0_phspotlightslides_1_Slide"
              className="slide"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom,transparent 0,rgba(0,0,0,.35) 100%), url(https://www.gdanimalhealth.com/-/media/Images/GD-Academy/Sliders/gd-academy-Slider.png?mw=1200)',
              }}
              data-title="GD Academy"
            >
              <a className="slide-link" href="https://www.gdanimalhealth.com/GD-Academy">
                GD-Academy
              </a>
              <div className="slide-caption">
                <p>Learn from our experts</p>
                <h2>GD Academy</h2>
              </div>
              <div className="slide-overlay"></div>
            </li>
            <li
              id="phcolumn_0_phcontent_0_phspotlightslides_2_Slide"
              className="slide"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom,transparent 0,rgba(0,0,0,.35) 100%), url(https://www.gdanimalhealth.com/-/media/Images/GDDiergezondheid/Spotlight-slides/Large/SchaapGeit/schaap-jpg.jpg?mw=1200)',
              }}
              data-title="Monitoring &amp; surveillance"
            >
              <a
                className="slide-link"
                href="https://www.gdanimalhealth.com/Disease-control/MonitoringSurveillance"
              >
                MonitoringSurveillance
              </a>
              <div className="slide-caption">
                <p>Country-wide surveillance in the Netherlands</p>
                <h2>Monitoring &amp; surveillance</h2>
              </div>
              <div className="slide-overlay"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  return <SliderDefaultComponent {...props} />;
};
