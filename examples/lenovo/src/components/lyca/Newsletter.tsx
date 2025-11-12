import { useState, type JSX } from 'react';
import {
  TextField,
  Text,
  RichText,
  RichTextField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { fireIdentityEvent } from '@/lib/cdp-events';

type NewsletterFields = {
  Heading: TextField;
  Description: RichTextField;
  SubscribeButtonText: TextField;
  SubscribedButtonText: TextField;
  EmailPlaceholderText: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: NewsletterFields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email.includes('@')) return; // Simple validation
    console.log('📧 Newsletter submit:', email);
    fireIdentityEvent(email);
    console.log('✅ IDENTITY event fired');
    setSubmitted(true);
    setEmail(''); // Clear email input after submit
  };

  return (
    <section key={id} className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a4d] mb-8">
            <Text field={props.fields.Heading} />
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="email"
              placeholder={props.fields.EmailPlaceholderText.value as string}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
            />
            <button
              onClick={handleSubmit}
              disabled={submitted}
              className="px-8 py-3 bg-[#00d4aa] text-black font-bold rounded-lg hover:bg-[#00c299] transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitted
                ? props.fields.SubscribeButtonText.value
                : props.fields.SubscribeButtonText.value}
            </button>
          </div>

          <RichText
            field={props.fields.Description}
            className="text-xs text-gray-500 leading-relaxed"
          />
        </div>
      </div>
    </section>
  );
};
