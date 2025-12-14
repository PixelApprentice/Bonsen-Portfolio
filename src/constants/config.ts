/**
 * Application configuration constants
 * Centralized config for resume, social links, and app metadata
 */

export const RESUME_CONFIG = {
    url: '/docs/Bonsen-Fuad-Muhammed-CV.pdf',
    filename: 'Bonsen_Fuad_Resume.pdf',
} as const;

export const SOCIAL_LINKS = {
    github: 'https://github.com/PixelApprentice',
    linkedin: '', // Add when available
    twitter: '', // Add when available
    email: 'bonsenfuad@gmail.com',
} as const;

export const APP_CONFIG = {
    name: 'Bonsen Portfolio',
    description: 'UI/UX Designer & Software Engineer',
    author: 'Bonsen Fuad',
    url: process.env.NODE_ENV === 'production'
        ? 'https://bonsen-fuad.vercel.app'
        : 'http://localhost:8080',
} as const;

export const SKILLS_CONFIG = {
    scrollDuration: {
        firstRow: 25,
        secondRow: 30,
    },
    threshold: 0.1,
} as const;
