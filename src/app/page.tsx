import Hero from '@/components/Hero';
import ByTheNumbers from '@/components/ByTheNumbers';
import AboutUs from '@/components/AboutUs';
import CoreServices from '@/components/CoreServices';
import GapTimeline from '@/components/GapTimeline';
import Challenges from '@/components/Challenges';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <ByTheNumbers />
      <AboutUs />
      <CoreServices />
      <GapTimeline />
      <Challenges />
      <FAQ />
      <ContactForm />
    </>
  );
}
