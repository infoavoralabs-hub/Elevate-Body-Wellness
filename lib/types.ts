export type Service = {
  icon: string;
  slug: string;
  shortDescription: string;
  description: string;
  title: string;
  benefits: string[];
};

export type Program = {
  title: string;
  duration: string;
  idealFor: string;
  includes: string[];
  highlight: boolean;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readingTime: string;
  coverImage: string;
  publishedAt: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Transformation = {
  beforeImage: string;
  afterImage: string;
  name: string;
  description: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  website?: string;
};

export type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  goals: string;
  heardAbout: string;
  message: string;
  consent: boolean;
  website?: string;
};

export type NavLink = { href: string; label: string };
export type SocialLink = { href: string; icon: string };
