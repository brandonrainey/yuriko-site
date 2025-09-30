
import {Youtube, Instagram, Coffee, Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-r from-gray-50 to-violet-100 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              
              <div className="text-xl sm:text-2xl font-serif text-orange-500">
               🌸 The Life of<span className="text-violet-400"> Yurichan</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Join me on this beautiful journey through Japan. From daily life in Kamakura to adventures across the country, 
              let's explore the Land of the Rising Sun together. Subscribe for weekly videos and authentic Japanese experiences.
            </p>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a href="https://www.youtube.com/@i.am.yurichan/featured" target="_blank" rel="noopener noreferrer" className="group bg-red-400 hover:bg-red-500 text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 touch-manipulation">
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://www.instagram.com/i.am.yurichan/?r=nametag" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-r from-purple-300 to-violet-400 hover:from-purple-400 hover:to-violet-500 text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 touch-manipulation">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://ko-fi.com/iamyurichan" target="_blank" rel="noopener noreferrer" className="group bg-orange-400 hover:bg-orange-500 text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 touch-manipulation">
                <Coffee className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://www.tiktok.com/@i.am.yurichan" target="_blank" rel="noopener noreferrer" className="group bg-gray-700 hover:bg-gray-800 text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 touch-manipulation">
                <Music2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#home" className="text-sm sm:text-base text-gray-600 hover:text-violet-400 transition-colors duration-200 touch-manipulation">Home</a></li>
              <li><a href="#about" className="text-sm sm:text-base text-gray-600 hover:text-violet-400 transition-colors duration-200 touch-manipulation">About Me</a></li>
              <li><a href="#kamakura" className="text-sm sm:text-base text-gray-600 hover:text-violet-400 transition-colors duration-200 touch-manipulation">Kamakura Life</a></li>
              <li><a href="#japan" className="text-sm sm:text-base text-gray-600 hover:text-violet-400 transition-colors duration-200 touch-manipulation">Explore Japan</a></li>
              <li><a href="#blog" className="text-sm sm:text-base text-gray-600 hover:text-violet-400 transition-colors duration-200 touch-manipulation">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Get In Touch</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-sm sm:text-base text-gray-600">
                <p className="font-medium">For collaborations:</p>
                <p>i.am.yurichan1998@gmail.com</p>
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                <p className="font-medium">Based in:</p>
                <p>Kamakura, Kanagawa, Japan</p>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            {/* <div className="mt-4 sm:mt-6">
              <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Weekly Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:ring-2 focus:ring-violet-400 focus:border-transparent outline-none touch-manipulation"
                />
                <button className="bg-violet-400 hover:bg-violet-1000 text-white px-4 py-2 text-sm rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-colors duration-200 touch-manipulation">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;