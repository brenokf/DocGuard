export type Benefit = {
  title: string;
  description: string;
  icon: string;
};

export type Step = {
  number: number;
  description: string;
};

export interface CtaContent {
  title: string;
  subtitle: string;
  buttonText: string;
}

export type FormData = {
  businessType: string;
  location: string;
  documentPurpose: string;
};