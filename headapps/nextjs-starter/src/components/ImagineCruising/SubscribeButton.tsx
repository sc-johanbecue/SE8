'use client';

import React, { useEffect } from 'react';

const SubscribeButton: React.FC = () => {
  useEffect(() => {
    const button = Array.from(document.querySelectorAll('button')).find(
      (btn) => btn.textContent?.trim() === 'Subscribe'
    );
    console.log('subscribebutton tsx - button:' + button?.className);
    if (!button) return;

    const handleClick = async () => {
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstname: '',
            name: 'Paul',
            email: 'someEmail@email.com',
            persona: 'Looker',
            operator: 'Princess',
          }),
        });

        const data = await response.json();
        console.log('Response:', data);
      } catch (error) {
        console.error('Subscription failed', error);
      }
    };

    button.addEventListener('click', handleClick);
    return () => button.removeEventListener('click', handleClick);
  }, []);

  return <button id="subscribe-btn">Subscribe</button>;
};

export default SubscribeButton;
