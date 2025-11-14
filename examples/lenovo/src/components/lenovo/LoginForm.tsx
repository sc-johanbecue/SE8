'use client';

import type React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  TextField,
  RichTextField,
  Link as JssLink,
  RichText,
  ComponentParams,
  ComponentRendering,
  LinkField,
} from '@sitecore-content-sdk/nextjs';
import { Text } from '@sitecore-content-sdk/nextjs';

type Fields = {
  Title: TextField;
  Description: RichTextField;
  LogoText: TextField;
  UsernameLabel: TextField;
  UsernamePlaceholder: TextField;
  PasswordLabel: TextField;
  PasswordPlaceholder: TextField;
  SubmitButtonText: TextField;
  SubmitButtonLoadingText: TextField;
  BackToHomeText: TextField;
  BackToHomeLink: LinkField;
  RedirectLink: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps) => {
  const id = props.rendering.uid;
  const fields = props.fields;
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    console.log('[v0] Login form submitted', { username });

    try {
      console.log('[v0] Sending login request');
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      console.log('[v0] Response status:', response.status);

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        console.error('[v0] Non-JSON response received:', await response.text());
        setError('Server error: Invalid response format');
        setIsLoading(false);
        return;
      }

      const result = await response.json();
      console.log('[v0] Response result:', result);

      if (result.success) {
        const redirectPath = fields.RedirectLink.value.href as string;
        console.log('[v0] Login successful, redirecting to:', redirectPath);
        router.push(redirectPath);
        router.refresh();
      } else {
        console.log('[v0] Login failed:', result.error);
        setError(result.error || 'Login failed');
        setIsLoading(false);
      }
    } catch (err) {
      console.error('[v0] Login exception:', err);
      setError('An error occurred during login');
      setIsLoading(false);
    }
  };

  return (
    <div
      key={id}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4"
    >
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="bg-[#E2231A] px-6 py-2 text-white font-bold text-2xl">
              <Text field={fields.LogoText} />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">
            <Text field={fields.Title} />
          </CardTitle>
          <CardDescription className="text-center">
            <RichText field={fields.Description} />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">
                <Text field={fields.UsernameLabel} />
              </Label>
              <Input
                id="username"
                type="text"
                placeholder={fields.UsernamePlaceholder?.value as string}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">
                <Text field={fields.PasswordLabel} />
              </Label>
              <Input
                id="password"
                type="password"
                placeholder={fields.PasswordPlaceholder?.value as string}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-[#E2231A] hover:bg-[#C11D15]"
              disabled={isLoading}
            >
              {isLoading ? fields.SubmitButtonLoadingText?.value : fields.SubmitButtonText?.value}
            </Button>
            <div className="text-center text-sm">
              <JssLink field={fields.BackToHomeLink} className="text-[#E2231A] hover:underline">
                <Text field={fields.BackToHomeText} />
              </JssLink>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Default;
