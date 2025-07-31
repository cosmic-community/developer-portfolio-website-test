import { getTestimonials } from '@/lib/cosmic'
import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { metadata } = testimonial
  
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-6">
        {metadata.client_photo && (
          <img
            src={`${metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={metadata.client_name || 'Client'}
            className="w-16 h-16 rounded-full object-cover"
          />
        )}
        <div>
          <h3 className="font-semibold text-gray-900">{metadata.client_name}</h3>
          {metadata.client_position && (
            <p className="text-sm text-gray-600">{metadata.client_position}</p>
          )}
          {metadata.company_name && (
            <p className="text-sm text-gray-500">{metadata.company_name}</p>
          )}
        </div>
        {metadata.rating && (
          <div className="ml-auto flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < parseInt(metadata.rating?.key || '0') ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        )}
      </div>
      
      <blockquote className="text-gray-700 leading-relaxed">
        "{metadata.testimonial_text}"
      </blockquote>
      
      {metadata.date_received && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <time className="text-sm text-gray-500">
            {new Date(metadata.date_received).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      )}
    </div>
  )
}

export default async function TestimonialsSection() {
  const testimonials = await getTestimonials()
  
  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="section-padding py-24 bg-white">
      <div className="container-max-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients and colleagues have to say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}