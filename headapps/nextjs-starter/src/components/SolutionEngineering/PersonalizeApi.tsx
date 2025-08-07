'use client'; // Used only in Next.js App Router

import { personalize } from '@sitecore-cloudsdk/personalize/browser';

export default function Component() {
  const runPersonalization = async () => {
    const personalizeData = {
      channel: 'WEB',
      friendlyId: 'running_shoes_popup_02',
    };
    const personalizeResponse = await personalize(personalizeData);
    console.log('Ran personalization.', personalizeResponse);
  };
  return (
    <div>
      <button onClick={runPersonalization}>run personalization</button>
    </div>
  );
}
