import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

const socialLinks = [
  { name: 'GitHub', href: '#', icon: FiGithub },
  { name: 'LinkedIn', href: '#', icon: FiLinkedin },
  { name: 'Twitter', href: '#', icon: FiTwitter },
  { name: 'Email', href: 'mailto:hello@example.com', icon: FiMail },
]

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Projects', href: '/projects' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { name: 'Web Applications', href: '/projects' },
      { name: 'Open Source', href: '/projects' },
      { name: 'Mobile Apps', href: '/projects' },
    ],
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-padding py-16">
        <div className="container-max-width">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Full-stack developer passionate about creating innovative web solutions and exceptional user experiences.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title} className="col-span-1">
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div className="col-span-1">
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>Ready to work together?</p>
                <a
                  href="mailto:hello@example.com"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                >
                  hello@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}