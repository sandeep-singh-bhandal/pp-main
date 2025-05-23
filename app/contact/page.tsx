import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Contact from '@/pages/Contact';
import React from 'react'

const ContactPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Contact/>
      <Footer />
    </main>
  )
}

export default ContactPage;