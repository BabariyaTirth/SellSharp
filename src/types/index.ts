import React from 'react';

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface UseCase {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}
