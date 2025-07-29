import Link from 'next/link'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import type { Project } from '@/types'
import TechnologyBadge from '@/components/TechnologyBadge'

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Project Image */}
      {project.metadata?.image && (
        <div className="relative overflow-hidden">
          <img
            src={`${project.metadata.image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
            alt={project.title}
            width="600"
            height="400"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      )}

      <div className="p-6">
        {/* Category */}
        {project.metadata?.category && (
          <div className="mb-3">
            <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
              {project.metadata.category.title}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        {/* Description */}
        {project.metadata?.description && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {project.metadata.description}
          </p>
        )}

        {/* Technologies */}
        {project.metadata?.technologies && project.metadata.technologies.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.metadata.technologies.slice(0, 3).map((tech) => (
                <TechnologyBadge key={tech.id} technology={tech} size="sm" />
              ))}
              {project.metadata.technologies.length > 3 && (
                <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded">
                  +{project.metadata.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Links */}
        <div className="flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
          >
            Learn More
          </Link>
          
          <div className="flex space-x-3">
            {project.metadata?.project_url && (
              <a
                href={project.metadata.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 transition-colors duration-200"
                aria-label="View live project"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
            
            {project.metadata?.github_url && (
              <a
                href={project.metadata.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 transition-colors duration-200"
                aria-label="View source code"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}