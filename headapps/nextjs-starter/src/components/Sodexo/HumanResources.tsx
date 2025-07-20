import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  faExpand,
  faPlus,
  faStar as solidStar,
} from '@fortawesome/free-solid-svg-icons';
import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
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
  const trainings = [
    {
      id: 1,
      title: 'Cleaning and Hygiene practices',
      duration: '30 min',
      rating: 5,
      reviews: 5,
      image: '/placeholder.svg?height=80&width=80',
      tags: ['Food', 'Sustainability', 'Health & Safety'],
    },
    {
      id: 2,
      title: 'Sodexo Climate Ambition',
      duration: '15 min',
      rating: 5,
      reviews: 4,
      image: '/placeholder.svg?height=80&width=80',
      tags: ['Food', 'Sustainability', 'Strategy'],
    },
    {
      id: 3,
      title: 'Zero Accident Mindset',
      duration: '20 min',
      rating: 5,
      reviews: 5,
      image: '/placeholder.svg?height=80&width=80',
      tags: ['Safety & Compliance'],
    },
  ];

  if (props.fields) {
    return (
      <div
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          minWidth: '300px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 20px',
            borderBottom: '1px solid #eee',
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#3a2a6d',
            }}
          >
            HR Access
          </h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '5px',
              }}
            >
              <FontAwesomeIcon icon={faEllipsisH} size="sm" color="#666" />
            </button>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '5px',
              }}
            >
              <FontAwesomeIcon icon={faExpand} size="sm" color="#666" />
            </button>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '5px',
              }}
            >
              <FontAwesomeIcon icon={faPlus} size="sm" color="#666" />
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '15px 20px',
            borderBottom: '1px solid #eee',
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#e63946',
            }}
          >
            Recommended trainings
          </h3>
          <a
            href="#"
            style={{
              fontSize: '14px',
              color: '#3a2a6d',
              textDecoration: 'none',
            }}
          >
            See all
          </a>
        </div>

        <div>
          {trainings.map((training, index) => (
            <div
              key={training.id}
              style={{
                padding: '15px 20px',
                borderBottom: index < trainings.length - 1 ? '1px solid #eee' : 'none',
                display: 'flex',
                gap: '15px',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '5px',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <Image
                  src={training.image || '/placeholder.svg'}
                  alt={training.title}
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '5px',
                  }}
                >
                  <h4
                    style={{
                      margin: 0,
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#333',
                    }}
                  >
                    {training.title}
                  </h4>
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0',
                    }}
                  >
                    <FontAwesomeIcon icon={faEllipsisH} size="xs" color="#666" />
                  </button>
                </div>

                <p
                  style={{
                    margin: '0 0 5px 0',
                    fontSize: '14px',
                    color: '#666',
                  }}
                >
                  Online course · {training.duration}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={solidStar}
                      size="xs"
                      color={i < training.rating ? '#ffc107' : '#ccc'}
                      style={{ height: '20px' }}
                    />
                  ))}
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#666',
                      marginLeft: '5px',
                    }}
                  >
                    {training.reviews}/5 ({training.reviews * 10})
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {training.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '12px',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        backgroundColor: '#f0f0f0',
                        color: '#666',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <SodexoDefaultComponent {...props} />;
};
