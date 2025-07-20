/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React from 'react';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';

interface Fields {
  Title: TextField;
}

type EuroConsumersCompareProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const EuroConsumersCompareDefaultComponent = (props: EuroConsumersCompareProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">EuroConsumers Compare</span>
    </div>
  </div>
);

export const Default = (props: EuroConsumersCompareProps): JSX.Element => {
  if (props.fields) {
    return (
      <>
        <style jsx>
          {`
            #id-ea74220b-74e3-4e7e-b5e9-9bbef0932767 {
              background-color: #f9f8f7;
            }

            #id-ea74220b-74e3-4e7e-b5e9-9bbef0932767
              .tools-panel--tool__label[data-label-category='new'] {
              background: #5aa0e6;
            }
          `}
        </style>
        <section
          className="tools-panel padding--top-xlarge padding--bottom-large"
          data-selector="spotlight-panel"
          id="id-ea74220b-74e3-4e7e-b5e9-9bbef0932767"
        >
          <div className="constrained">
            <div className="align-central">
              <h2 className="stronger class-ea74220b-74e3-4e7e-b5e9-9bbef0932767">
                Vergelijk producten en diensten
              </h2>
              <p className="class-ea74220b-74e3-4e7e-b5e9-9bbef0932767">
                Wil je steeds de beste keuze kunnen maken? Raadpleeg de resultaten van de duizenden
                producten die we elk jaar testen in onze onafhankelijke laboratoria en maak
                simulaties voor diensten die onze experts onder de loupe hebben genomen.
              </p>
            </div>
            <div className="tools-panel--tools flex__row margin--top-small">
              <div
                className="tools-panel--tool flex__col-xs-6 flex__col-sm-4 flex__col-lg-2"
                id="id-85813de4-4cf8-4c9d-99e2-2ba9c6b24422"
              >
                <div className="tools-panel--tool__content">
                  <Link
                    href="https://www.test-aankoop.be/woning-energie/vaatwasmiddelen/vergelijker"
                    title="Vaat-wasmiddelen"
                  >
                    <img
                      className="tools-panel--tool-image"
                      data-culture-depend=""
                      data-plugin="imageComponent"
                      width={335}
                      height={395}
                      data-src="https://www.test-aankoop.be/-/media/global-artwork/home-appliances/dishwasher-detergents/dishwasher-detergents.svg?rev=0acd7249-a3e5-43e4-85bd-8020c05f149c&mw=330&hash=FCED9F539C5B9F5FF1FE0E224CDD2BE0"
                      alt="Vaat-wasmiddelen"
                      src="https://www.test-aankoop.be/-/media/global-artwork/home-appliances/dishwasher-detergents/dishwasher-detergents.svg?rev=0acd7249-a3e5-43e4-85bd-8020c05f149c&mw=330&hash=FCED9F539C5B9F5FF1FE0E224CDD2BE0"
                    />
                    <span
                      className="tools-panel--tool-title"
                      data-plugin="textLinesLimiter"
                      data-plugin-settings="#toolsPanelTextSettings"
                    >
                      Vaat-wasmiddelen
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="tools-panel--tool flex__col-xs-6 flex__col-sm-4 flex__col-lg-2"
                id="id-53ef0dc8-5ff4-4bc6-9a5b-d021e64283c9"
              >
                <div className="tools-panel--tool__content">
                  <Link
                    href="https://www.test-aankoop.be/hightech/laptops/vergelijker"
                    title="Laptops"
                  >
                    <img
                      className="tools-panel--tool-image"
                      data-culture-depend=""
                      data-plugin="imageComponent"
                      width={335}
                      height={395}
                      data-src="https://www.test-aankoop.be/-/media/global-artwork/hightech/laptop/laptops.svg?rev=022ce088-a4f0-46cd-b95e-b9050c526067&mw=330&hash=8FBC65485C45B85B6D821FDCAF78CE41"
                      alt="Laptops"
                      src="https://www.test-aankoop.be/-/media/global-artwork/hightech/laptop/laptops.svg?rev=022ce088-a4f0-46cd-b95e-b9050c526067&mw=330&hash=8FBC65485C45B85B6D821FDCAF78CE41"
                    />
                    <span
                      className="tools-panel--tool-title"
                      data-plugin="textLinesLimiter"
                      data-plugin-settings="#toolsPanelTextSettings"
                    >
                      Laptops
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="tools-panel--tool flex__col-xs-6 flex__col-sm-4 flex__col-lg-2"
                id="id-f6451ca2-c07b-4c90-859a-830905eacd53"
              >
                <div className="tools-panel--tool__content">
                  <Link
                    href="https://www.test-aankoop.be/huishoudelektro/droogkasten/vergelijker"
                    title="Droogkasten"
                  >
                    <img
                      className="tools-panel--tool-image"
                      data-culture-depend=""
                      data-plugin="imageComponent"
                      width={335}
                      height={395}
                      data-src="https://www.test-aankoop.be/-/media/global-artwork/home-appliances/tumble-dryers/tumble_dryers.svg?rev=62c54399-a767-4f61-a430-d61c43f99b1e&mw=330&hash=7D6732A01402DF0294E45442AC5420F1"
                      alt="Droogkasten"
                      src="https://www.test-aankoop.be/-/media/global-artwork/home-appliances/tumble-dryers/tumble_dryers.svg?rev=62c54399-a767-4f61-a430-d61c43f99b1e&mw=330&hash=7D6732A01402DF0294E45442AC5420F1"
                    />
                    <span
                      className="tools-panel--tool-title"
                      data-plugin="textLinesLimiter"
                      data-plugin-settings="#toolsPanelTextSettings"
                    >
                      Droogkasten
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="tools-panel--tool flex__col-xs-6 flex__col-sm-4 flex__col-lg-2"
                id="id-ee3a5c77-5b99-48cf-9f40-abfa91dcd5e0"
              >
                <div className="tools-panel--tool__content">
                  <Link
                    href="https://www.test-aankoop.be/huishoudelektro/espressomachines/vergelijker"
                    title="Koffie-machines"
                  >
                    <img
                      className="tools-panel--tool-image"
                      data-culture-depend=""
                      data-plugin="imageComponent"
                      width={335}
                      height={395}
                      data-src="https://www.test-aankoop.be/-/media/global-artwork/home-appliances/expressomachines/expressomachines.svg?rev=ab7b7639-5b47-40e4-9fd3-010b80fbbb15&mw=330&hash=2B637084F85812ABB5048E842276C91B"
                      alt="Koffie-machines"
                      src="https://www.test-aankoop.be/-/media/global-artwork/home-appliances/expressomachines/expressomachines.svg?rev=ab7b7639-5b47-40e4-9fd3-010b80fbbb15&mw=330&hash=2B637084F85812ABB5048E842276C91B"
                    />
                    <span
                      className="tools-panel--tool-title"
                      data-plugin="textLinesLimiter"
                      data-plugin-settings="#toolsPanelTextSettings"
                    >
                      Koffie-machines
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="tools-panel--tool flex__col-xs-6 flex__col-sm-4 flex__col-lg-2"
                id="id-90e49705-01e3-4d23-b541-2f764bfacad9"
              >
                <div className="tools-panel--tool__content">
                  <Link
                    href="https://www.test-aankoop.be/hightech/printers/vergelijker"
                    title="Printers"
                  >
                    <img
                      className="tools-panel--tool-image"
                      data-culture-depend=""
                      data-plugin="imageComponent"
                      width={335}
                      height={395}
                      data-src="https://www.test-aankoop.be/-/media/global-artwork/hightech/printers/printers.svg?rev=c8c6c8f8-d316-43cc-8717-f3e67aff0123&mw=330&hash=FFBB08ACA0AF33236B2F5B80F0455201"
                      alt="Printers"
                      src="https://www.test-aankoop.be/-/media/global-artwork/hightech/printers/printers.svg?rev=c8c6c8f8-d316-43cc-8717-f3e67aff0123&mw=330&hash=FFBB08ACA0AF33236B2F5B80F0455201"
                    />
                    <span
                      className="tools-panel--tool-title"
                      data-plugin="textLinesLimiter"
                      data-plugin-settings="#toolsPanelTextSettings"
                    >
                      Printers
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className="tools-panel--tool flex__col-xs-6 flex__col-sm-4 flex__col-lg-2"
                id="id-de2a8ff8-bc83-4475-9a27-0c40f2096390"
              >
                <div className="tools-panel--tool__content">
                  <Link
                    href="https://www.test-aankoop.be/woning-energie/afwasmiddelen/vergelijker"
                    title="Afwasmiddelen"
                  >
                    <img
                      className="tools-panel--tool-image"
                      data-culture-depend=""
                      data-plugin="imageComponent"
                      width={335}
                      height={395}
                      data-src="https://www.test-aankoop.be/-/media/global-artwork/living-energy/dish%20detergents/seg_detergent_dish.svg?rev=6e4088dc-67ae-43c8-8187-5418da0bbfcd&mw=330&hash=81EE6F3BEC3DA195F7905FABD0C93336"
                      alt="Afwasmiddelen"
                      src="https://www.test-aankoop.be/-/media/global-artwork/living-energy/dish%20detergents/seg_detergent_dish.svg?rev=6e4088dc-67ae-43c8-8187-5418da0bbfcd&mw=330&hash=81EE6F3BEC3DA195F7905FABD0C93336"
                    />
                    <span
                      className="tools-panel--tool-title"
                      data-plugin="textLinesLimiter"
                      data-plugin-settings="#toolsPanelTextSettings"
                    >
                      Afwasmiddelen
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="tools-panel--footer">
              <Link
                href="https://www.test-aankoop.be/alle-inhoud/vergelijkers-tools"
                className="tools-panel--link link-primary-color"
              >
                Alles bekijken <i className="icon icon-chevron-right" />
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return <EuroConsumersCompareDefaultComponent {...props} />;
};
