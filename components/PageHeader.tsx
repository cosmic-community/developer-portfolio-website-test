interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export default function PageHeader({ title, description, className = '' }: PageHeaderProps) {
  return (
    <section className={`bg-gray-900 text-white py-20 ${className}`}>
      <div className="container-max-width text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-slide-up">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            {description}
          </p>
        )}
      </div>
    </section>
  )
}