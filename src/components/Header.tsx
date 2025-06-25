
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <span className="text-red-500">CINEMA</span>POSTERS
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
