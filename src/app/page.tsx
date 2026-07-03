import Hero from '@/components/Hero';
import CoreServices from '@/components/CoreServices';
import GapTimeline from '@/components/GapTimeline';
import Challenges from '@/components/Challenges';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <CoreServices />
      <GapTimeline />
      <Challenges />
      <FAQ />
      <ContactForm />
    </>
  );
}
