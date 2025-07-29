import type { Project } from '@/types'
import ProjectCard from '@/components/ProjectCard'

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div 
          key={project.id} 
          className="animate-slide-up" 
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}