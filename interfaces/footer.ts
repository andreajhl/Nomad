export interface IconsNetWorks {
  youtube: () => JSX.Element,
  twitter: () => JSX.Element,
  facebook: () => JSX.Element,
  instagram: () => JSX.Element,
};
  
export interface Footer {
  contact:    Contact;
  services:   string[];
  enterprise: Enterprise;
};

interface Contact {
  tlf:   string;
  email: string;
};

interface Enterprise {
  message:        string;
  socialNetworks: string[];
};