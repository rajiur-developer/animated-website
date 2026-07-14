import { useEffect } from 'react';
import { updateMetaTags, getLocalBusinessSchema, addStructuredData } from '../utils/seo';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';
import DoctorCards from '../components/DoctorCards';
import TestimonialsSection from '../components/TestimonialsSection';
import AppointmentForm from '../components/AppointmentForm';
import FAQSection from '../components/FAQSection';

export default function Home() {
  useEffect(() => {
    updateMetaTags(
      "Doctor's Dental Care - Best Dental Clinic in Savar",
      "Expert dental care in Savar offering general, cosmetic, and advanced treatments. BMDC registered dentists. Call +8801973703423 for appointment.",
      "dental clinic Savar, dentist in Savar, root canal treatment, teeth whitening, dental implants"
    );
    addStructuredData(getLocalBusinessSchema());
  }, []);

  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <DoctorCards />
      <TestimonialsSection />
      <AppointmentForm />
      <FAQSection />
    </main>
  );
}
