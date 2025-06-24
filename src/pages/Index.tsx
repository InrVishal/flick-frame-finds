
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import CustomPosterSection from '@/components/CustomPosterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <CustomPosterSection />
      <Footer />
    </div>
  );
};

export default Index;
