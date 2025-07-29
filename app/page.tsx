import { Suspense } from 'react'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import SkillsSection from '@/components/SkillsSection'
import ExperienceSection from '@/components/ExperienceSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <Hero />
      
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedProjects />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <SkillsSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ExperienceSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>  
        <TestimonialsSection />
      </Suspense>
      
      <CTASection />
    </div>
  )
}