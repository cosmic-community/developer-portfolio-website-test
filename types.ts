export interface CosmicObject {
  id: string;
  title: string;
  slug: string;
  content?: string;
  metadata?: Record<string, any>;
  created_at: string;
  modified_at: string;
  status: string;
  published_at?: string;
}

export interface Project extends CosmicObject {
  metadata?: {
    project_name?: string;
    description?: string;
    detailed_overview?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    technologies?: string[];
    project_type?: {
      key: string;
      value: string;
    };
    live_url?: string;
    github_url?: string;
    completion_date?: string;
    featured?: boolean;
  };
}

export interface Skill extends CosmicObject {
  metadata?: {
    skill_name?: string;
    category?: {
      key: string;
      value: string;
    };
    proficiency?: {
      key: string;
      value: string;
    };
    years_experience?: number;
    description?: string;
    icon?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface WorkExperience extends CosmicObject {
  metadata?: {
    job_title?: string;
    company_name?: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    location?: string;
    employment_type?: {
      key: string;
      value: string;
    };
    start_date?: string;
    end_date?: string | null;
    current_position?: boolean;
    description?: string;
    achievements?: string;
    technologies?: string[];
  };
}

export interface Testimonial extends CosmicObject {
  metadata?: {
    client_name?: string;
    client_position?: string;
    company_name?: string;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    testimonial_text?: string;
    rating?: {
      key: string;
      value: string;
    };
    related_project?: Project | null;
    date_received?: string;
    featured?: boolean;
  };
}

// Simple type for technology badges
export type Technology = string;