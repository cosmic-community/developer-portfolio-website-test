import { createBucketClient } from '@cosmicjs/sdk'
import type { Project, Skill, WorkExperience, Testimonial } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all projects
export async function getProjects(): Promise<Project[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'projects' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .sort('-created_at');
    
    return response.objects as Project[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching projects:', error);
    throw new Error('Failed to fetch projects');
  }
}

// Get single project by slug
export async function getProject(slug: string): Promise<Project | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'projects', slug })
      .props(['id', 'title', 'slug', 'content', 'metadata'])
      .depth(1);
    
    return response.object as Project;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching project:', error);
    throw new Error('Failed to fetch project');
  }
}

// Fetch featured projects
export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'projects',
        'metadata.featured': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(6);
    
    return response.objects as Project[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching featured projects:', error);
    throw new Error('Failed to fetch featured projects');
  }
}

// Fetch all skills
export async function getSkills(): Promise<Skill[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'skills' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .sort('title');
    
    return response.objects as Skill[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching skills:', error);
    throw new Error('Failed to fetch skills');
  }
}

// Fetch skills by category
export async function getSkillsByCategory(): Promise<{ [key: string]: Skill[] }> {
  try {
    const skills = await getSkills();
    const groupedSkills: { [key: string]: Skill[] } = {};
    
    skills.forEach(skill => {
      const category = skill.metadata?.category?.value || 'Other';
      if (!groupedSkills[category]) {
        groupedSkills[category] = [];
      }
      groupedSkills[category].push(skill);
    });
    
    return groupedSkills;
  } catch (error) {
    console.error('Error grouping skills by category:', error);
    return {};
  }
}

// Fetch work experience
export async function getWorkExperience(): Promise<WorkExperience[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'work-experience' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .sort('-metadata.start_date');
    
    return response.objects as WorkExperience[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching work experience:', error);
    throw new Error('Failed to fetch work experience');
  }
}

// Fetch testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .sort('-created_at');
    
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching testimonials:', error);
    throw new Error('Failed to fetch testimonials');
  }
}

// Fetch featured testimonials
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'testimonials',
        'metadata.featured': true 
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
      .limit(3);
    
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching featured testimonials:', error);
    throw new Error('Failed to fetch featured testimonials');
  }
}