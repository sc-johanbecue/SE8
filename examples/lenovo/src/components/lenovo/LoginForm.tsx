'use client';

import type React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { login } from '@/lib/auth';
import type { TextField, ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';
import { Text } from '@sitecore-content-sdk/nextjs';

type Fields = {
  Title: TextField;
  Description: TextField;
  LogoText: TextField;
  UsernameLabel: TextField;
  UsernamePlaceholder: TextField;
  PasswordLabel: TextField;
  PasswordPlaceholder: TextField;
  SubmitButtonText: TextField;
  SubmitButtonLoadingText: TextField;
  DemoCredentialsTitle: TextField;
  DemoCredential1: TextField;
  DemoCredential2: TextField;
  BackToHomeText: TextField;
  BackToHomeHref: TextField;
  RedirectPath: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Title: { value: 'Partner Portal Login' },
  Description: { value: 'Enter your credentials to access the partner hub' },
  LogoText: { value: 'Lenovo' },
  UsernameLabel: { value: 'Username' },
  UsernamePlaceholder: { value: 'demo1 or demo2' },
  PasswordLabel: { value: 'Password' },
  PasswordPlaceholder: { value: 'demo1 or demo2' },
  SubmitButtonText: { value: 'Sign In' },
  SubmitButtonLoadingText: { value: 'Signing in...' },
  DemoCredentialsTitle: { value: 'Demo Credentials:' },
  DemoCredential1: { value: 'Username: demo1 / Password: demo1' },
  DemoCredential2: { value: 'Username: demo2 / Password: demo2' },
  BackToHomeText: { value: 'Back to Home' },
  BackToHomeHref: { value: '/' },
  RedirectPath: { value: '/dashboard' },
};

export const Default = (props: ComponentProps) => {
  const id = props.rendering.uid;
  const fields = props.fields || defaultFields;
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const result = await login(username, password);

    if (result.success) {
      const redirectPath = (fields.RedirectPath?.value as string) || '/dashboard';
      router.push(redirectPath);
      router.refresh();
    } else {
      setError(result.error || 'Login failed');
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
            <Text field={fields.Description} />
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

            <div className="text-sm text-center text-muted-foreground">
              <p className="mb-2">
                <Text field={fields.DemoCredentialsTitle} />
              </p>
              <p>
                <Text field={fields.DemoCredential1} />
              </p>
              <p>
                <Text field={fields.DemoCredential2} />
              </p>
            </div>

            <div className="text-center text-sm">
              <Link
                href={(fields.BackToHomeHref?.value as string) || '/'}
                className="text-[#E2231A] hover:underline"
              >
                <Text field={fields.BackToHomeText} />
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Default;
