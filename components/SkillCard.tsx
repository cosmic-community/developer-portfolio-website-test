import type { Skill } from '@/types'

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const proficiencyLevels = {
    'beginner': 25,
    'intermediate': 50,
    'advanced': 75,
    'expert': 100
  }
  
  const proficiencyKey = skill.metadata?.proficiency?.key as keyof typeof proficiencyLevels
  const proficiency = proficiencyLevels[proficiencyKey] || 0
  const yearsExperience = skill.metadata?.years_experience

  return (
    <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {skill.metadata?.icon && (
            <img
              src={`${skill.metadata.icon.imgix_url}?w=40&h=40&fit=crop&auto=format,compress`}
              alt={`${skill.title} icon`}
              width="24"
              height="24"
              className="w-6 h-6 object-contain"
            />
          )}
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {skill.title}
          </h4>
        </div>
        
        {yearsExperience && (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {yearsExperience}y
          </span>
        )}
      </div>

      {skill.metadata?.description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {skill.metadata.description}
        </p>
      )}

      {/* Proficiency Bar */}
      <div className="skill-bar">
        <div 
          className="skill-progress"
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between items-center mt-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">Proficiency</span>
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          {skill.metadata?.proficiency?.value || 'Not specified'}
        </span>
      </div>
    </div>
  )
}