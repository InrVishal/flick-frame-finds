
import { Button } from '@/components/ui/button';
import { Palette, Upload, Download, Sparkles } from 'lucide-react';

const CustomPosterSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-red-900/10 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Create Your Own
              <span className="block text-red-500">Custom Movie Poster</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Design personalized movie posters with your favorite scenes, quotes, and custom text. 
              Perfect for gifts, room decor, or special occasions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Features */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                  <Upload className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Upload Your Image</h3>
                  <p className="text-gray-400">
                    Upload your favorite movie scene, personal photo, or any image you want to transform into a poster.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                  <Palette className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Customize Design</h3>
                  <p className="text-gray-400">
                    Add custom text, choose from various poster templates, adjust colors, and apply cinematic effects.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">AI Enhancement</h3>
                  <p className="text-gray-400">
                    Our AI technology enhances your image quality and suggests the best poster layouts automatically.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                  <Download className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">High-Quality Print</h3>
                  <p className="text-gray-400">
                    Get your custom poster printed on premium paper with multiple size options and fast shipping.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Call to Action */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Start Designing Now</h3>
                <p className="text-gray-400 mb-6">
                  Create your unique movie poster in just a few clicks. No design experience needed!
                </p>
                
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Palette className="w-5 h-5 mr-2" />
                    Create Custom Poster
                  </Button>
                  
                  <div className="text-sm text-gray-500">
                    Starting from <span className="text-white font-semibold">$15.99</span>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
                    <span>✓ Free Design Tools</span>
                    <span>✓ 300 DPI Quality</span>
                    <span>✓ Fast Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPosterSection;
