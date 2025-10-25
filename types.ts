
export type Page = 'home' | 'about' | 'programs' | 'admission' | 'scholarships' | 'alumni' | 'news' | 'contact' | 'cohort' | 'testimonials' | 'support' | 'join' | 'privacy' | 'terms';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  country: string;
  image: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: string;
}

export interface ProgramModule {
    title: string;
    description: string;
    topics: string[];
}

export type TeamMemberCategory = 'pedagogy' | 'mentor';

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  category: TeamMemberCategory;
}

export interface ChartData {
    title: string;
    data: { label: string; value: number; color: string }[];
}

export interface Scholar {
    name: string;
    major: string;
    image: string;
}

export interface ScholarByCountry {
    country: string;
    scholars: { name: string; major: string }[];
}

export interface GalleryMember {
    name: string;
    image: string;
}
