import type { Skill } from '@/types'

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const proficiency = skill.metadata?.proficiency_level || 0
  const yearsExperience = skill.metadata?.years_experience

  return (
    <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {skill.metadata?.icon && (
            <span className="text-2xl">{skill.metadata.icon}</span>
          )}
          <h4 className="text-lg font-semibold text-gray-900">
            {skill.title}
          </h4>
        </div>
        
        {yearsExperience && (
          <span className="text-sm text-gray-500">
            {yearsExperience}y
          </span>
        )}
      </div>

      {skill.metadata?.description && (
        <p className="text-gray-600 text-sm mb-4">
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
        <span className="text-sm text-gray-500">Proficiency</span>
        <span className="text-sm font-medium text-gray-900">
          {proficiency}%
        </span>
      </div>
    </div>
  )
}