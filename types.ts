// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Project interface
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
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

// Skill interface
export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
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

// Work experience interface
export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
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

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
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

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip?: number;
}

// Type guards
export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}

export function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type === 'skills';
}

export function isWorkExperience(obj: CosmicObject): obj is WorkExperience {
  return obj.type === 'work-experience';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

// Utility type for skills grouped by category
export type SkillsByCategory = Record<string, Skill[]>;