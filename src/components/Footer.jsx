import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    const services = [
        'Termite Control',
        'Cockroach Control',
        'Rodent Control',
        'Mosquito Control',
        'Bed Bug Treatment',
        'General Pest Control',
    ]

    const socialLinks = [
        { icon: FiFacebook, href: '#', label: 'Facebook' },
        { icon: FiInstagram, href: '#', label: 'Instagram' },
        { icon: FiTwitter, href: '#', label: 'Twitter' },
        { icon: FiYoutube, href: '#', label: 'YouTube' },
    ]

    return (
        <footer className="bg-dark-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-xl">DB</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Durga Bhavani</h3>
                                <p className="text-sm text-primary-400">Pest Control</p>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Professional pest management services for homes and businesses. Safe, effective, and eco-friendly solutions.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link
                                        to="/services"
                                        className="text-gray-400 hover:text-primary-400 transition-colors"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <FiPhone className="w-5 h-5 text-primary-400 mt-1" />
                                <div>
                                    <a href="tel:+919876543210" className="text-gray-400 hover:text-primary-400 transition-colors block">
                                        +91 98765 43210
                                    </a>
                                    <a href="tel:+918765432109" className="text-gray-400 hover:text-primary-400 transition-colors block">
                                        +91 87654 32109
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <FiMail className="w-5 h-5 text-primary-400 mt-1" />
                                <a href="mailto:info@durgabhavanipest.in" className="text-gray-400 hover:text-primary-400 transition-colors">
                                    info@durgabhavanipest.in
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <FiMapPin className="w-5 h-5 text-primary-400 mt-1" />
                                <span className="text-gray-400">
                                    Hyderabad, Telangana<br />
                                    India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} Durga Bhavani Pest Control. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <a
                            href="https://www.sandanithin.shop/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 text-sm hover:text-primary-400 transition-colors"
                        >
                            Designed and Developed by onlinewebsites
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
