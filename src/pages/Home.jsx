import Hero from '../components/Hero';
import CategoryCards from '../components/CategoryCards';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryCards />
      <WhyChooseUs />
      <Reviews />
      <CTA />
    </>
  );
}
