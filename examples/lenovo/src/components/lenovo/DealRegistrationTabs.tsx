'use client';

import type React from 'react';

import { useState } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, DollarSign, FileText, CheckCircle2, Clock, XCircle } from 'lucide-react';

type Fields = {
  Heading: TextField;
  Description: TextField;
  Tab1Label: TextField;
  Tab2Label: TextField;
  FormTitle: TextField;
  FormDescription: TextField;
  CompanyLabel: TextField;
  ContactLabel: TextField;
  EmailLabel: TextField;
  PhoneLabel: TextField;
  ProductLabel: TextField;
  DealValueLabel: TextField;
  NotesLabel: TextField;
  SubmitButtonText: TextField;
  TrackingTitle: TextField;
  TrackingDescription: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'Deal Registration & Tracking' },
  Description: {
    value: 'Register new deals and track their progress through the approval pipeline',
  },
  Tab1Label: { value: 'Register New Deal' },
  Tab2Label: { value: 'Track Deals' },
  FormTitle: { value: 'New Deal Registration' },
  FormDescription: { value: 'Complete the form below to register a new partner deal' },
  CompanyLabel: { value: 'Company Name' },
  ContactLabel: { value: 'Contact Person' },
  EmailLabel: { value: 'Email Address' },
  PhoneLabel: { value: 'Phone Number' },
  ProductLabel: { value: 'Product Category' },
  DealValueLabel: { value: 'Estimated Deal Value ($)' },
  NotesLabel: { value: 'Additional Notes' },
  SubmitButtonText: { value: 'Submit Deal Registration' },
  TrackingTitle: { value: 'Your Deal Registrations' },
  TrackingDescription: { value: 'Track the status of your submitted deals' },
};

// Mock deal data for tracking
const mockDeals = [
  {
    id: 'DEAL-2024-001',
    company: 'Tech Solutions Inc.',
    product: 'ThinkPad X1 Carbon (50 units)',
    value: '$75,000',
    status: 'Approved',
    date: '2024-12-15',
  },
  {
    id: 'DEAL-2024-002',
    company: 'Global Enterprises',
    product: 'ThinkStation P Series (10 units)',
    value: '$45,000',
    status: 'Pending',
    date: '2024-12-20',
  },
  {
    id: 'DEAL-2024-003',
    company: 'Startup Innovators',
    product: 'ThinkBook 14 (25 units)',
    value: '$22,500',
    status: 'Under Review',
    date: '2024-12-22',
  },
];

export const Default = (props: ComponentProps) => {
  const fields = props.fields || defaultFields;
  const id = props.rendering?.uid || 'deal-registration-tabs';

  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    product: '',
    dealValue: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Deal registration submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case 'Pending':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      case 'Under Review':
        return <FileText className="h-5 w-5 text-blue-600" />;
      case 'Rejected':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
      Approved: 'default',
      Pending: 'secondary',
      'Under Review': 'outline',
      Rejected: 'destructive',
    };
    return (
      <Badge
        variant={variants[status] || 'secondary'}
        className={status === 'Approved' ? 'bg-green-600' : ''}
      >
        {status}
      </Badge>
    );
  };

  return (
    <div key={id} className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          <Text field={fields.Heading} />
        </h1>
        <p className="text-muted-foreground">
          <Text field={fields.Description} />
        </p>
      </div>

      <Tabs defaultValue="register" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="register">
            <Text field={fields.Tab1Label} />
          </TabsTrigger>
          <TabsTrigger value="track">
            <Text field={fields.Tab2Label} />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="register" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <Text field={fields.FormTitle} />
              </CardTitle>
              <CardDescription>
                <Text field={fields.FormDescription} />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company">
                      <Text field={fields.CompanyLabel} />
                    </Label>
                    <Input
                      id="company"
                      placeholder="Enter company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">
                      <Text field={fields.ContactLabel} />
                    </Label>
                    <Input
                      id="contact"
                      placeholder="Enter contact person"
                      value={formData.contact}
                      onChange={(e) => handleInputChange('contact', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <Text field={fields.EmailLabel} />
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="contact@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      <Text field={fields.PhoneLabel} />
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="product">
                      <Text field={fields.ProductLabel} />
                    </Label>
                    <Select
                      value={formData.product}
                      onValueChange={(value) => handleInputChange('product', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select product category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="thinkpad">ThinkPad Series</SelectItem>
                        <SelectItem value="thinkbook">ThinkBook Series</SelectItem>
                        <SelectItem value="thinkstation">ThinkStation Workstations</SelectItem>
                        <SelectItem value="thinkcentre">ThinkCentre Desktops</SelectItem>
                        <SelectItem value="legion">Legion Gaming</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure Solutions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dealValue">
                      <Text field={fields.DealValueLabel} />
                    </Label>
                    <Input
                      id="dealValue"
                      type="number"
                      placeholder="50000"
                      value={formData.dealValue}
                      onChange={(e) => handleInputChange('dealValue', e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">
                    <Text field={fields.NotesLabel} />
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Provide any additional details about this deal..."
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full bg-[#E2231A] hover:bg-[#E2231A]/90">
                  <Text field={fields.SubmitButtonText} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="track" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <Text field={fields.TrackingTitle} />
              </CardTitle>
              <CardDescription>
                <Text field={fields.TrackingDescription} />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockDeals.map((deal) => (
                  <Card key={deal.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(deal.status)}
                          <div>
                            <h3 className="font-semibold text-lg">{deal.company}</h3>
                            <p className="text-sm text-muted-foreground">{deal.id}</p>
                          </div>
                        </div>
                        {getStatusBadge(deal.status)}
                      </div>
                      <div className="grid gap-3 md:grid-cols-3 text-sm">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Product:</span>
                          <span className="font-medium">{deal.product}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Value:</span>
                          <span className="font-medium">{deal.value}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Submitted:</span>
                          <span className="font-medium">{deal.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Default;
