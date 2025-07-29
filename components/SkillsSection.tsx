import { getSkillsByCategory } from '@/lib/cosmic'
import SkillCard from '@/components/SkillCard'

export default async function SkillsSection() {
  const skillsByCategory = await getSkillsByCategory()
  const categories = Object.keys(skillsByCategory)

  if (categories.length === 0) {
    return null
  }

  return (
    <section id="about" className="section-padding py-24 bg-gray-50">
      <div className="container-max-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I specialize in modern web technologies and frameworks, 
            constantly learning and adapting to the latest industry trends.
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsByCategory[category].map((skill, skillIndex) => (
                  <div 
                    key={skill.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <SkillCard skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}