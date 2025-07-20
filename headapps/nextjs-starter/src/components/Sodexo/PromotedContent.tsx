import React from 'react';
import { TextField, ImageField, Text, Image as JssImage } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title1: TextField;
  SubTitle1: TextField;
  Title2: TextField;
  SubTitle2: TextField;
  Title3: TextField;
  SubTitle3: TextField;
  Title4: TextField;
  SubTitle4: TextField;
  Image1: ImageField;
  Image2: ImageField;
  Image3: ImageField;
  Image4: ImageField;
}

type SodexoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const SodexoDefaultComponent = (props: SodexoProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint"></span>
    </div>
  </div>
);

export const Default = (props: SodexoProps): JSX.Element => {
  if (props.fields) {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'auto auto',
          gap: '15px',
          marginTop: '20px',
        }}
      >
        <div
          style={{
            gridColumn: '1 / 2',
            gridRow: '1 / 3',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
            height: '500px',
          }}
        >
          <JssImage field={props.fields.Image1} alt="" fill style={{ objectFit: 'cover' }} />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
              padding: '20px',
              color: 'white',
            }}
          >
            <h3
              style={{
                margin: '0 0 5px 0',
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              <Text field={props.fields.Title1} />
            </h3>
            <p style={{ margin: 0, fontSize: '16px' }}>
              <Text field={props.fields.SubTitle1} />
            </p>
          </div>
        </div>

        <div
          style={{
            gridColumn: '2 / 3',
            gridRow: '1 / 2',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
            height: '240px',
          }}
        >
          <JssImage
            field={props.fields.Image2}
            alt={props.fields.Title2.value}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
              padding: '15px',
              color: 'white',
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              <Text field={props.fields.Title2} />
            </h3>
          </div>
        </div>

        <div
          style={{
            gridColumn: '2 / 3',
            gridRow: '2 / 3',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px',
          }}
        >
          <div
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              height: '240px',
            }}
          >
            <JssImage
              field={props.fields.Image3}
              alt={props.fields.Title3.value}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                padding: '10px',
                color: 'white',
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                <Text field={props.fields.Title3} />
              </h3>
            </div>
          </div>

          <div
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              position: 'relative',
              height: '240px',
            }}
          >
            <JssImage
              field={props.fields.Image4}
              alt={props.fields.Title4.value}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                padding: '10px',
                color: 'white',
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                <Text field={props.fields.Title4} />
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <SodexoDefaultComponent {...props} />;
};
