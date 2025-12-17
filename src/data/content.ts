/* eslint-disable @typescript-eslint/no-explicit-any */
// All content and data for the portfolio (typed exports)
import data from "./site-data.json";

export interface Profile {
  name: string;
  role: string;
  shortBio: string;
  location: string;
  phone: string;
  resumeUrl: string;
  profileImage: string;
}

export interface HeroData {
  headline: string;
  kicker: string;
  subtext: string;
  imageUrl: string;
}

export interface About {
  title: string;
  description: string[];
}

export interface Experience {
  id: number;
  title: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  role: string;
  tags: string[];
  link: string | null;
  github: string | null;
  imageUrl: string;
}

export interface Organization {
  id: number;
  name: string;
  role: string;
  description: string;
}

export interface ContactInfo {
  title: string;
  description: string;
  email: string;
  phone: string;
  socials: {
    github: string;
    telegram?: string;
  };
}

// Safe data access helpers
const getHeroData = (): HeroData => (data as any)?.heroData || {
  headline: "Bonsen",
  kicker: "UI/UX Designer",
  subtext: "Portfolio",
  imageUrl: ""
};

const getProfile = (): Profile => (data as any)?.profile || {
  name: "Bonsen",
  role: "Developer",
  shortBio: "",
  location: "",
  phone: "",
  resumeUrl: "",
  profileImage: ""
};

const getAbout = (): About => (data as any)?.about || {
  title: "About",
  description: []
};

const getContactInfo = (): ContactInfo => (data as any)?.contactInfo || {
  title: "Contact",
  description: "",
  email: "",
  phone: "",
  socials: { github: "" }
};

export const profile: Profile = getProfile();

export const heroData: HeroData = getHeroData();

export const about: About = getAbout();

export const skills: string[] = (data as any)?.skills || [];

export const experience: Experience[] = (data as any)?.experience || [];

export const projects: Project[] = (data as any)?.projects || [];

export const organizations: Organization[] = (data as any)?.organizations || [];

export const languages: string[] = (data as any)?.languages || [];

export const interests: string[] = (data as any)?.interests || [];

export const contactInfo: ContactInfo = getContactInfo();
