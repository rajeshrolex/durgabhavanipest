import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'

const PHONE_NUMBER = '+918790128760'
const PHONE_DISPLAY = '+91 87901 28760'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="/images/logo.png"
                            alt="Durga Bhavani Pest Control"
                            className="h-12 md:h-14 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                                    ? 'text-primary-600'
                                    : 'text-gray-700 hover:text-primary-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                        >
                            <FiPhone className="w-5 h-5" />
                            <span>{PHONE_DISPLAY}</span>
                        </a>
                        <Link to="/contact" className="btn-primary">
                            Get Free Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                        {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="px-4 py-4 space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${location.pathname === link.path
                                        ? 'bg-primary-50 text-primary-600'
                                        : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="flex items-center space-x-2 px-4 py-3 text-primary-600 font-semibold"
                            >
                                <FiPhone className="w-5 h-5" />
                                <span>{PHONE_DISPLAY}</span>
                            </a>
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center btn-primary"
                            >
                                Get Free Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
