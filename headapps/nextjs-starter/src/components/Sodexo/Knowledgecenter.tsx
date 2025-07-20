import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faExpand, faPlus, faDownload } from '@fortawesome/free-solid-svg-icons';
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
  const documents = [
    {
      id: 1,
      title: 'Data Protection policy',
      date: 'July 04, 2024',
      type: 'PPT',
      size: '114.5 Mb',
    },
    {
      id: 2,
      title: 'Human Resource Policy',
      date: 'May 12, 2024',
      type: 'PDF',
      size: '98 Mb',
    },
    {
      id: 3,
      title: 'Global Food Safety Policy',
      date: 'June 15, 2024',
      type: 'PDF',
      size: '120.4 Mb',
    },
    {
      id: 4,
      title: 'Business & Sustainability Report 2023.pdf',
      date: 'June 30, 2024',
      type: 'PDF',
      size: '120.4 Mb',
    },
    {
      id: 5,
      title: 'Food Safety Guidelines check.docx',
      date: 'August 12, 2024',
      type: 'WORD',
      size: '3.5 Mb',
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
            Knowledge Center
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
            borderBottom: '1px solid #eee',
          }}
        >
          <button
            style={{
              flex: 1,
              padding: '15px 20px',
              background: 'none',
              border: 'none',
              borderBottom: '2px solid #e63946',
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#e63946',
              cursor: 'pointer',
            }}
          >
            Lastest documents
          </button>
          <button
            style={{
              flex: 1,
              padding: '15px 20px',
              background: 'none',
              border: 'none',
              fontSize: '14px',
              color: '#666',
              cursor: 'pointer',
            }}
          >
            Popular documents
          </button>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0 20px',
            }}
          >
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
        </div>

        <div>
          {documents.map((doc, index) => (
            <div
              key={doc.id}
              style={{
                padding: '15px 20px',
                borderBottom: index < documents.length - 1 ? '1px solid #eee' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor:
                      doc.type === 'PDF'
                        ? '#e63946'
                        : doc.type === 'PPT'
                        ? '#ff9f1c'
                        : doc.type === 'WORD'
                        ? '#457b9d'
                        : '#666',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '10px',
                    fontWeight: 'bold',
                  }}
                >
                  {doc.type}
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    margin: '0 0 5px 0',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#333',
                  }}
                >
                  {doc.title}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: '12px',
                    color: '#666',
                  }}
                >
                  {doc.date}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    color: '#666',
                  }}
                >
                  {doc.type} {doc.size}
                </span>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '5px',
                  }}
                >
                  <FontAwesomeIcon icon={faDownload} size="sm" color="#666" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <SodexoDefaultComponent {...props} />;
};
