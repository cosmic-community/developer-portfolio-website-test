import type { WorkExperience } from '@/types'
import TechnologyBadge from '@/components/TechnologyBadge'

interface ExperienceCardProps {
  experience: WorkExperience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const formatDate = (dateString?: string | null) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    })
  }

  const startDate = formatDate(experience.metadata?.start_date)
  const endDate = experience.metadata?.current_position ? 'Present' : formatDate(experience.metadata?.end_date)

  // Parse achievements from HTML string
  const parseAchievements = (achievementsHtml?: string): string[] => {
    if (!achievementsHtml) return []
    
    // Simple HTML parsing to extract list items
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = achievementsHtml
    const listItems = tempDiv.querySelectorAll('li')
    return Array.from(listItems).map(li => li.textContent || '')
  }

  const achievements = typeof window !== 'undefined' ? parseAchievements(experience.metadata?.achievements) : []

  return (
    <div className="relative md:ml-20">
      {/* Timeline Dot */}
      <div className="absolute -left-16 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block"></div>

      <div className="card p-8 hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              {experience.metadata?.company_logo && (
                <img
                  src={`${experience.metadata.company_logo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                  alt={`${experience.metadata.company_name} logo`}
                  width="40"
                  height="40"
                  className="w-10 h-10 rounded-lg object-cover"
                />
              )}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {experience.metadata?.job_title || experience.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-semibold">
                  {experience.metadata?.company_name}
                </p>
              </div>
            </div>
            
            {experience.metadata?.location && (
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {experience.metadata.location}
              </p>
            )}
          </div>

          <div className="text-right lg:ml-6">
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
              {startDate} - {endDate}
            </p>
            {experience.metadata?.current_position && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                Current
              </span>
            )}
          </div>
        </div>

        {experience.metadata?.description && (
          <div 
            className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: experience.metadata.description }}
          />
        )}

        {/* Achievements */}
        {experience.metadata?.achievements && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
            <div 
              className="prose prose-sm dark:prose-invert max-w-none text-gray-600 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: experience.metadata.achievements }}
            />
          </div>
        )}

        {/* Technologies */}
        {experience.metadata?.technologies && experience.metadata.technologies.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.metadata.technologies.map((tech, techIndex) => (
                <TechnologyBadge key={techIndex} technology={tech} size="sm" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}