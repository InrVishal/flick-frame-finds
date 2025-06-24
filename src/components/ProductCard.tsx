
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  title: string;
  year: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  rating: number;
  isNew?: boolean;
}

const ProductCard = ({ title, year, price, originalPrice, imageUrl, rating, isNew }: ProductCardProps) => {
  return (
    <div className="group relative bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`${title} poster`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3">
            <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
              <Eye className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
              <Heart className="w-4 h-4" />
            </Button>
            <Button size="icon" className="bg-red-600 hover:bg-red-700">
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Badges */}
        {isNew && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
            NEW
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-red-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-2">{year}</p>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xs ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
            >
              ★
            </span>
          ))}
          <span className="text-gray-400 text-xs ml-2">({rating}.0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-lg">${price}</span>
            {originalPrice && (
              <span className="text-gray-500 line-through text-sm">${originalPrice}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
