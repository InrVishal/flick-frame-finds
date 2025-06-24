
import { Film, Zap, Ghost, Heart, Sword, Laugh, Brain, Star } from 'lucide-react';

const categories = [
  { name: 'Action', icon: Zap, color: 'from-red-500 to-orange-500', count: '1,200+' },
  { name: 'Horror', icon: Ghost, color: 'from-purple-500 to-red-500', count: '800+' },
  { name: 'Romance', icon: Heart, color: 'from-pink-500 to-red-400', count: '600+' },
  { name: 'Adventure', icon: Sword, color: 'from-green-500 to-blue-500', count: '900+' },
  { name: 'Comedy', icon: Laugh, color: 'from-yellow-500 to-orange-400', count: '700+' },
  { name: 'Sci-Fi', icon: Brain, color: 'from-blue-500 to-purple-500', count: '850+' },
  { name: 'Drama', icon: Film, color: 'from-gray-500 to-gray-700', count: '1,100+' },
  { name: 'Classic', icon: Star, color: 'from-amber-500 to-yellow-600', count: '500+' },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Browse by Genre</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our vast collection organized by your favorite movie genres
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>
                
                <div className="relative p-6 h-32 flex flex-col items-center justify-center text-white">
                  <Icon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count}</p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
