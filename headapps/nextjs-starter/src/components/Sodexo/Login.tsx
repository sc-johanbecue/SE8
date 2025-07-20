'use client';

import type React from 'react';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TextField, ImageField, Image as JssImage } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: TextField;
  Subtitle: TextField;
  Image: ImageField;
}

type BrandDetailProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export default function SodexoLogin(props: BrandDetailProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (email === 'myname@sodexo.com' && password === 'b') {
        setIsLoggedIn(true);
      } else {
        setError('Invalid email or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  if (isLoggedIn) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            maxWidth: '400px',
            width: '100%',
          }}
        >
          <h1 style={{ color: '#2e3192', marginBottom: '20px' }}>Login Successful</h1>
          <p>Welcome to Sodexo!</p>
          <button
            style={{
              backgroundColor: '#2e3192',
              color: 'white',
              border: 'none',
              padding: '8px 32px',
              fontSize: '16px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
            onClick={() => {
              setIsLoggedIn(false);
              setEmail('');
              setPassword('');
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {/* Left side - Background image */}
      <div
        style={{
          position: 'relative',
        }}
      >
        <JssImage
          field={props.fields.Image}
          style={{
            objectFit: 'cover',
            width: '1920',
            height: '1080',
          }}
        />
      </div>

      {/* Right side - Login form */}
      <div
        style={{
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '48px',
          }}
        >
          <Image src="/sodexo-logo.svg" alt="Sodexo Logo" width={120} height={40} priority />
        </div>

        <div
          style={{
            flexGrow: 1,
          }}
        >
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 500,
              color: '#333',
              marginBottom: '32px',
            }}
          >
            Sign in
          </h1>

          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <div
              style={{
                position: 'relative',
              }}
            >
              <input
                type="email"
                placeholder="username@sodexo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 0',
                  border: 'none',
                  borderBottom: '2px solid #2e3192',
                  outline: 'none',
                  fontSize: '16px',
                  backgroundColor: 'transparent',
                }}
                required
              />
            </div>
            <div
              style={{
                position: 'relative',
              }}
            >
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 0',
                  border: 'none',
                  borderBottom: '2px solid #ccc',
                  outline: 'none',
                  fontSize: '16px',
                  backgroundColor: 'transparent',
                }}
                required
              />
            </div>
            {error && (
              <div
                style={{
                  color: 'red',
                  fontSize: '14px',
                  marginTop: '8px',
                }}
              >
                {error}
              </div>
            )}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                paddingTop: '16px',
              }}
            >
              <button
                type="submit"
                style={{
                  backgroundColor: '#2e3192',
                  color: 'white',
                  border: 'none',
                  padding: '8px 32px',
                  fontSize: '16px',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  opacity: isLoading ? 0.7 : 1,
                }}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Next'}
              </button>
            </div>
          </form>

          <div
            style={{
              marginTop: '64px',
            }}
          >
            <h2
              style={{
                color: '#2e3192',
                fontWeight: 500,
                marginBottom: '8px',
                fontSize: '16px',
              }}
            >
              Legal Warning & Support Information
            </h2>
            <Link
              href="#"
              style={{
                color: '#2e3192',
                textDecoration: 'none',
              }}
            >
              Link to document
            </Link>
          </div>
        </div>

        <div
          style={{
            marginTop: 'auto',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '16px',
          }}
        >
          <Link
            href="#"
            style={{
              color: '#666',
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            Terms of use
          </Link>
          <Link
            href="#"
            style={{
              color: '#666',
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            Privacy & cookies
          </Link>
        </div>
      </div>
    </div>
  );
}
