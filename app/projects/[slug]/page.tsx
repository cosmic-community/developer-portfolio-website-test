// app/projects/[slug]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi'
import { getProject, getProjects } from '@/lib/cosmic'
import TechnologyBadge from '@/components/TechnologyBadge'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map(project => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Developer Portfolio`,
    description: project.metadata?.description || `Learn more about the ${project.title} project`,
    openGraph: {
      title: project.title,
      description: project.metadata?.description || '',
      images: project.metadata?.featured_image ? [{
        url: `${project.metadata.featured_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`,
        width: 1200,
        height: 630,
      }] : [],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Back Navigation */}
      <div className="section-padding py-8 border-b border-gray-100 dark:border-gray-800">
        <div className="container-max-width">
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Project Header */}
      <section className="section-padding py-16">
        <div className="container-max-width">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Project Info */}
            <div className="animate-slide-up">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {project.title}
              </h1>
              
              {project.metadata?.description && (
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {project.metadata.description}
                </p>
              )}

              {/* Technologies */}
              {project.metadata?.technologies && project.metadata.technologies.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.metadata.technologies.map((tech, index) => (
                      <TechnologyBadge key={index} technology={tech} />
                    ))}
                  </div>
                </div>
              )}

              {/* Project Links */}
              <div className="flex flex-wrap gap-4">
                {project.metadata?.live_url && (
                  <a
                    href={project.metadata.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    View Live Project
                  </a>
                )}
                
                {project.metadata?.github_url && (
                  <a
                    href={project.metadata.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <FiGithub className="w-4 h-4" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Project Image */}
            {project.metadata?.featured_image && (
              <div className="animate-slide-up">
                <img
                  src={`${project.metadata.featured_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                  alt={project.title}
                  width="800"
                  height="600"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Content */}
      {project.metadata?.detailed_overview && (
        <section className="section-padding py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
          <div className="container-max-width">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: project.metadata.detailed_overview }}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}