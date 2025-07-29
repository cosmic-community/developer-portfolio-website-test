import { Metadata } from 'next'
import { getProjects } from '@/lib/cosmic'
import ProjectGrid from '@/components/ProjectGrid'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Projects | Developer Portfolio',
  description: 'Browse my portfolio of web development projects, featuring modern technologies and innovative solutions.',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="My Projects"
        description="A collection of my recent work and side projects"
      />
      
      <section className="section-padding py-16">
        <div className="container-max-width">
          {projects.length > 0 ? (
            <ProjectGrid projects={projects} />
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No projects found. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}