import type { Technology } from '@/types'

interface TechnologyBadgeProps {
  technology: Technology;
  size?: 'sm' | 'md';
}

export default function TechnologyBadge({ technology, size = 'md' }: TechnologyBadgeProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1',
  }

  // Simple color mapping for common technologies
  const getColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'React': '#61DAFB',
      'TypeScript': '#3178C6',
      'JavaScript': '#F7DF1E',
      'Node.js': '#339933',
      'Next.js': '#000000',
      'Vue.js': '#4FC08D',
      'Angular': '#DD0031',
      'Python': '#3776AB',
      'MongoDB': '#47A248',
      'PostgreSQL': '#336791',
      'MySQL': '#4479A1',
      'AWS': '#FF9900',
      'Docker': '#2496ED',
      'Tailwind CSS': '#06B6D4',
      'Express': '#000000',
      'HTML/CSS': '#E34F26',
      'Django': '#092E20',
      'PHP': '#777BB4',
      'Java': '#007396',
      'C#': '#239120',
    }
    return colors[tech] || '#6B7280'
  }

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-medium text-white ${sizeClasses[size]}`}
      style={{ backgroundColor: getColor(technology) }}
    >
      {technology}
    </span>
  )
}