import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  metric?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CalculatorFormData {
  name: string;
  email: string;
  phone: string;
  avgLeadValue: string;
  subscribers: string;
  weeklyEmails: string;
}