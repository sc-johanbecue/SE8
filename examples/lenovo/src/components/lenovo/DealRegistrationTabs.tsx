'use client';

import type React from 'react';

import { useState } from 'react';
import {
  type TextField,
  Text,
  type RichTextField,
  RichText,
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

type ProductCategory = {
  fields: {
    Value: TextField;
    Text: TextField;
  };
};

type Deal = {
  fields: {
    ID: TextField;
    Company: TextField;
    Product: TextField;
    Value: TextField;
    Status: TextField;
    Date: TextField;
  };
};

type Fields = {
  Tab1Label: TextField;
  Tab2Label: TextField;
  NewDealTitle: TextField;
  NewDealDescription: RichTextField;
  CompanyLabel: TextField;
  CompanyPlaceholderText: TextField;
  ContactLabel: TextField;
  ContactPlaceholderText: TextField;
  EmailLabel: TextField;
  EmailPlaceholderText: TextField;
  PhoneLabel: TextField;
  PhonePlaceholderText: TextField;
  ProductLabel: TextField;
  ProductPlaceholderText: TextField;
  DealValueLabel: TextField;
  DealValuePlaceholderText: TextField;
  NotesLabel: TextField;
  NotesPlaceholderText: TextField;
  SubmitButtonText: TextField;
  TrackingTitle: TextField;
  TrackingDescription: RichTextField;
  Deals: Deal[];
  TrackingProductLabel: TextField;
  TrackingValueLabel: TextField;
  TrackingSubmittedLabel: TextField;
  ProductCategories: ProductCategory[];
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

// Mock deal data for tracking

export const Default = (props: ComponentProps) => {
  const fields = props.fields;
  const id = props.rendering.uid;

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
                <Text field={fields.NewDealTitle} />
              </CardTitle>
              <CardDescription>
                <RichText field={fields.NewDealDescription} />
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
                      placeholder={props.fields.CompanyPlaceholderText.value as string}
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
                      placeholder={props.fields.ContactPlaceholderText.value as string}
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
                      placeholder={props.fields.EmailPlaceholderText.value as string}
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
                      placeholder={props.fields.PhonePlaceholderText.value as string}
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
                        <SelectValue
                          placeholder={props.fields.ProductPlaceholderText.value as string}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {fields.ProductCategories.map((productCategory, index) => (
                          <SelectItem
                            key={index}
                            value={productCategory.fields.Value.value as string}
                          >
                            {productCategory.fields.Text.value}
                          </SelectItem>
                        ))}
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
                      placeholder={props.fields.DealValuePlaceholderText.value as string}
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
                    placeholder={props.fields.NotesPlaceholderText.value as string}
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
                <RichText field={fields.TrackingDescription} />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fields.Deals.map((deal) => (
                  <Card key={deal.fields.ID.value} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(deal.fields.Status.value as string)}
                          <div>
                            <h3 className="font-semibold text-lg">{deal.fields.Company.value}</h3>
                            <p className="text-sm text-muted-foreground">{deal.fields.ID.value}</p>
                          </div>
                        </div>
                        {getStatusBadge(deal.fields.Status.value as string)}
                      </div>
                      <div className="grid gap-3 md:grid-cols-3 text-sm">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            <Text field={fields.TrackingProductLabel} />
                          </span>
                          <span className="font-medium">{deal.fields.Product.value}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            <Text field={fields.TrackingValueLabel} />
                          </span>
                          <span className="font-medium">{deal.fields.Value.value}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            <Text field={fields.TrackingSubmittedLabel} />
                          </span>
                          <span className="font-medium">{deal.fields.Date.value}</span>
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
