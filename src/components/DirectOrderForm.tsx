
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Rupee } from 'lucide-react';

const DirectOrderForm = () => {
  const [movieName, setMovieName] = useState('');
  const [customDetails, setCustomDetails] = useState('');
  const [size, setSize] = useState('A4');

  const handleDirectOrder = () => {
    const message = `Hi! I want to order a movie poster:
    
Movie: ${movieName}
Size: ${size} (₹100)
Custom Details: ${customDetails || 'Standard poster design'}

Please confirm the order and payment details.`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramOrder = () => {
    const instagramUrl = 'https://instagram.com/cinemabaanisa91';
    window.open(instagramUrl, '_blank');
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white mb-2">
                Order Your Custom Movie Poster
              </CardTitle>
              <p className="text-gray-400">
                ₹100 for A4 size • Custom designs available
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Movie Name *
                </label>
                <Input
                  value={movieName}
                  onChange={(e) => setMovieName(e.target.value)}
                  placeholder="Enter movie name (e.g., The Matrix, Avengers)"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Size & Price
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
                >
                  <option value="A4">A4 Size - ₹100</option>
                  <option value="A3">A3 Size - ₹150</option>
                  <option value="Custom">Custom Size - Contact for price</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Custom Details (Optional)
                </label>
                <Textarea
                  value={customDetails}
                  onChange={(e) => setCustomDetails(e.target.value)}
                  placeholder="Any specific requirements? (e.g., specific scene, quote, color theme)"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 min-h-[100px]"
                />
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleDirectOrder}
                  disabled={!movieName.trim()}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order via WhatsApp
                </Button>

                <Button
                  onClick={handleInstagramOrder}
                  variant="outline"
                  className="w-full border-red-600 text-red-500 hover:bg-red-600 hover:text-white py-3 text-lg"
                >
                  Order via Instagram @cinemabaanisa91
                </Button>
              </div>

              <div className="text-center text-gray-400 text-sm">
                <p>💳 Payment: UPI, Cash on Delivery available</p>
                <p>🚚 Delivery: 2-3 business days</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DirectOrderForm;
