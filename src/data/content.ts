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
  };
}

export const profile: Profile = data.profile as Profile;

export const heroData: HeroData = data.heroData as HeroData;

export const about: About = data.about as About;

export const skills: string[] = data.skills as string[];

export const experience: Experience[] = data.experience as Experience[];

export const projects: Project[] = data.projects as Project[];

export const organizations: Organization[] = data.organizations as Organization[];

export const languages: string[] = data.languages as string[];

export const interests: string[] = data.interests as string[];

export const contactInfo: ContactInfo = data.contactInfo as ContactInfo;
