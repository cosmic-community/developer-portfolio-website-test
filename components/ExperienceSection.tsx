import { getWorkExperience } from '@/lib/cosmic'
import ExperienceCard from '@/components/ExperienceCard'

export default async function ExperienceSection() {
  const experiences = await getWorkExperience()

  if (experiences.length === 0) {
    return null
  }

  return (
    <section id="experience" className="section-padding py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container-max-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey building innovative solutions and 
            contributing to successful projects across various industries.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ExperienceCard experience={experience} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}