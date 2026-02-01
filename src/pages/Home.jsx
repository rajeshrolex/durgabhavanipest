import React from 'react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = () => {
    return (
        <main>
            <SEO
                title="Home"
                description="Durga Bhavani Pest Control provides expert pest management services in Hyderabad, Nizamabad and Karimnagar. Safe, effective solutions for termites, cockroaches, rodents, and more."
            />
            <Hero />
            <Services />
            <About />
            <WhyChooseUs />
            <Testimonials />
            <Contact />
        </main>
    )
}

export default Home
