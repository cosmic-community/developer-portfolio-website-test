// Base Cosmic object interface
interface CosmicObject {
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
    description?: string;
    technologies?: Technology[];
    project_url?: string;
    github_url?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
    featured?: boolean;
    category?: ProjectCategory;
    completion_date?: string;
  };
}

// Technology interface
export interface Technology extends CosmicObject {
  type: 'technologies';
  metadata: {
    icon?: string;
    color?: string;
    description?: string;
  };
}

// Project category interface
export interface ProjectCategory extends CosmicObject {
  type: 'project-categories';
  metadata: {
    description?: string;
    color?: string;
  };
}

// Skill interface
export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    proficiency_level?: number;
    category?: SkillCategory;
    description?: string;
    years_experience?: number;
    icon?: string;
  };
}

// Skill category interface
export interface SkillCategory extends CosmicObject {
  type: 'skill-categories';
  metadata: {
    description?: string;
    order?: number;
  };
}

// Work experience interface
export interface WorkExperience extends CosmicObject {
  type: 'work-experiences';
  metadata: {
    company?: string;
    position?: string;
    start_date?: string;
    end_date?: string;
    current?: boolean;
    description?: string;
    achievements?: string[];
    technologies?: Technology[];
    location?: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    client_position?: string;
    client_company?: string;
    rating?: number;
    project?: Project;
    testimonial_text?: string;
    client_image?: {
      url: string;
      imgix_url: string;
    };
    date?: string;
    featured?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Utility types
export type OptionalMetadata<T> = Partial<T['metadata']>;

// Type guards
export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}

export function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type === 'skills';
}

export function isWorkExperience(obj: CosmicObject): obj is WorkExperience {
  return obj.type === 'work-experiences';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}