import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { getFeaturedProjects } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjects()

  if (projects.length === 0) {
    return null
  }

  return (
    <section className="section-padding py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container-max-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, featuring modern web applications 
            built with cutting-edge technologies and best practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-lg transition-colors duration-200"
          >
            View All Projects
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}