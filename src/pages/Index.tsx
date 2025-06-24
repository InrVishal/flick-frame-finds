
import Header from '@/components/Header';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="pt-8">
        <div className="container mx-auto px-4 text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            <span className="text-red-500">CINEMA</span>POSTERS
          </h1>
          <p className="text-gray-400 text-lg">From @cinemabaanisa91</p>
        </div>
        <FeaturedProducts />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
