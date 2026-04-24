import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import WorkForce from '@/components/home/WorkForce';
import About from '@/components/home/About';
import Mission from '@/components/home/Mission';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WorkForce />
      <About />
      <Mission />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
