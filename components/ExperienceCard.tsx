import type { WorkExperience } from '@/types'
import TechnologyBadge from '@/components/TechnologyBadge'

interface ExperienceCardProps {
  experience: WorkExperience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return ''
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    })
  }

  const startDate = formatDate(experience.metadata?.start_date)
  const endDate = experience.metadata?.current ? 'Present' : formatDate(experience.metadata?.end_date)

  return (
    <div className="relative md:ml-20">
      {/* Timeline Dot */}
      <div className="absolute -left-16 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

      <div className="card p-8 hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              {experience.metadata?.company_logo && (
                <img
                  src={`${experience.metadata.company_logo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                  alt={`${experience.metadata.company} logo`}
                  width="40"
                  height="40"
                  className="w-10 h-10 rounded-lg object-cover"
                />
              )}
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {experience.metadata?.position || experience.title}
                </h3>
                <p className="text-primary-600 font-semibold">
                  {experience.metadata?.company}
                </p>
              </div>
            </div>
            
            {experience.metadata?.location && (
              <p className="text-gray-500 mb-4">
                {experience.metadata.location}
              </p>
            )}
          </div>

          <div className="text-right lg:ml-6">
            <p className="text-sm font-medium text-gray-900 mb-1">
              {startDate} - {endDate}
            </p>
            {experience.metadata?.current && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Current
              </span>
            )}
          </div>
        </div>

        {experience.metadata?.description && (
          <p className="text-gray-600 mb-6 leading-relaxed">
            {experience.metadata.description}
          </p>
        )}

        {/* Achievements */}
        {experience.metadata?.achievements && experience.metadata.achievements.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements:</h4>
            <ul className="space-y-2">
              {experience.metadata.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600 text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {experience.metadata?.technologies && experience.metadata.technologies.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.metadata.technologies.map((tech) => (
                <TechnologyBadge key={tech.id} technology={tech} size="sm" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}