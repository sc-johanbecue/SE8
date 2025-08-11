import React from 'react'; //{ useState }
import {
  ComponentRendering,
  ComponentParams,
  TextField,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Copyright: TextField;
  CurrentCountryLabel: TextField;
  Country: TextField;
  CountryLink: LinkField;
}

type FooterProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: FooterProps): JSX.Element => {
  return (
    <li
      id={props.rendering.uid}
      className="carousel__item carousel__item--static carousel__item--colorful"
      data-key-id="ft-0"
    >
      <article className="carousel__inner">
        <a href="/nl/stories/guus-janssen" className="carousel__link">
          <div className="carousel__visual ls-first-item">
            <img
              className="carousel__image carousel__image--static lazyload"
              alt=""
              width="325"
              height="250"
              src="https://www.frieslandcampina.com/uploads/sites/3/2025/08/Guus_1080x1080-1600x1280.jpg"
              data-src="https://www.frieslandcampina.com/uploads/sites/3/2025/08/Guus_1080x1080-1600x1280.jpg"
              data-srcset="https://www.frieslandcampina.com/uploads/sites/3/2025/08/Guus_1080x1080-1600x1280.jpg 1600w, https://www.frieslandcampina.com/uploads/sites/3/2025/08/Guus_1080x1080-800x640.jpg 800w, https://www.frieslandcampina.com/uploads/sites/3/2025/08/Guus_1080x1080-400x320.jpg 400w"
              data-sizes="auto"
              data-key-id=""
              sizes="698px"
              srcSet="https://www.frieslandcampina.com/uploads/sites/3/2025/08/Guus_1080x1080-1600x1280.jpg 1600w, https://www.frieslandcampina.com/uploads/sites/3/2025/08/Guus_1080x1080-800x640.jpg 800w, https://www.frieslandcampina.com/uploads/sites/3/2025/08/Guus_1080x1080-400x320.jpg 400w"
            />
          </div>
          <div className="carousel__content ls-second-item">
            <h1
              className="carousel__title title--m"
              data-title="‘De sterke melkprijs helpt me vooruit te blijven boeren’"
            >
              ‘De sterke melkprijs helpt me vooruit te blijven boeren’
            </h1>
            <p className="carousel__intro text--l">
              Melkveehouder Guus Janssen (37) investeert op zijn erf in het Noord-Brabantse Velp in
              de toekomst. In die van zijn bedrijf, met twee melkrobots.{' '}
            </p>
            <footer className="carousel__fauxlink">
              <span className="link">Leden aan het woord</span>
            </footer>
          </div>
        </a>
      </article>
    </li>
  );
};
