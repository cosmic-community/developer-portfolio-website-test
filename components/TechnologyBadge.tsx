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

  const bgColor = technology.metadata?.color || '#3b82f6'

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-medium text-white ${sizeClasses[size]}`}
      style={{ backgroundColor: bgColor }}
    >
      {technology.metadata?.icon && (
        <span className="text-xs">{technology.metadata.icon}</span>
      )}
      {technology.title}
    </span>
  )
}