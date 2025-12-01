import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { CategoriesSection } from '@/components/home/categories-section';
import { CTASection } from '@/components/home/cta-section';
import { FeaturesSection } from '@/components/home/features-section';
import { HeroSection } from '@/components/home/hero-section';

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CategoriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
