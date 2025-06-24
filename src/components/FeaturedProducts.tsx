
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

const featuredProducts = [
  {
    title: "The Matrix",
    year: "1999",
    price: "24.99",
    originalPrice: "29.99",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&w=400&h=600&fit=crop",
    rating: 5,
    isNew: true
  },
  {
    title: "Blade Runner 2049",
    year: "2017",
    price: "19.99",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&w=400&h=600&fit=crop",
    rating: 5,
    isNew: false
  },
  {
    title: "Interstellar",
    year: "2014",
    price: "22.99",
    originalPrice: "27.99",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&w=400&h=600&fit=crop",
    rating: 4,
    isNew: false
  },
  {
    title: "Pulp Fiction",
    year: "1994",
    price: "18.99",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&w=400&h=600&fit=crop",
    rating: 5,
    isNew: false
  },
  {
    title: "The Dark Knight",
    year: "2008",
    price: "21.99",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&w=400&h=600&fit=crop",
    rating: 5,
    isNew: true
  },
  {
    title: "Inception",
    year: "2010",
    price: "20.99",
    originalPrice: "25.99",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&w=400&h=600&fit=crop",
    rating: 4,
    isNew: false
  },
  {
    title: "Dune",
    year: "2021",
    price: "26.99",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&w=400&h=600&fit=crop",
    rating: 4,
    isNew: true
  },
  {
    title: "Mad Max: Fury Road",
    year: "2015",
    price: "17.99",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&w=400&h=600&fit=crop",
    rating: 5,
    isNew: false
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Featured Posters</h2>
            <p className="text-gray-400 text-lg">
              Handpicked collection of the most popular movie posters
            </p>
          </div>
          <Button variant="outline" className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
