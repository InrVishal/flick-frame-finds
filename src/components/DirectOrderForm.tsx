import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Mail } from 'lucide-react';

const DirectOrderForm = () => {
  const [movieName, setMovieName] = useState('');
  const [customDetails, setCustomDetails] = useState('');
  const [size, setSize] = useState('A4');

  const getPrice = () => {
    switch(size) {
      case 'A4': return '₹100';
      case 'A3': return '₹150';
      case 'Custom': return 'Contact for price';
      default: return '₹100';
    }
  };

  const handleWhatsAppOrder = () => {
    if (!movieName.trim()) return;
    
    const message = `Hi! I want to order a movie poster:

Movie: ${movieName}
Size: ${size} (${getPrice()})
Custom Details: ${customDetails || 'Standard poster design'}

Please confirm the order and payment details.`;

    const whatsappUrl = `https://wa.me/9949246650?text=${encodeURIComponent(message)}`;
    console.log('WhatsApp URL:', whatsappUrl);
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailOrder = () => {
    if (!movieName.trim()) return;
    
    const subject = 'Movie Poster Order';
    const body = `Hi! I want to order a movie poster:

Movie: ${movieName}
Size: ${size} (${getPrice()})
Custom Details: ${customDetails || 'Standard poster design'}

Please confirm the order and payment details.

Thank you!`;

    const emailUrl = `mailto:vishalpasumarty@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    console.log('Email URL:', emailUrl);
    window.open(emailUrl, '_blank');
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
                  onClick={handleWhatsAppOrder}
                  disabled={!movieName.trim()}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order via WhatsApp
                </Button>

                <Button
                  onClick={handleEmailOrder}
                  disabled={!movieName.trim()}
                  variant="outline"
                  className="w-full border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white py-3 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Order via Email
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
