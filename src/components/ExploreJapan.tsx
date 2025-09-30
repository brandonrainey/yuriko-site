import { MapPin, Camera, Heart } from 'lucide-react'

const ExploreJapan = () => {
  const destinations = [
    {
      name: "Kyoto Temples",
      image: "https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-161401.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Ancient temples and serene gardens"
    },
    {
      name: "Tokyo Food Scene",
      image: "https://images.pexels.com/photos/5928068/pexels-photo-5928068.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Street food and hidden gems"
    },
    {
      name: "Hakone Hot Springs",
      image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      description: "Relaxation with Mount Fuji views"
    }
  ];

  return (
    <section id="japan" className="py-20 bg-gradient-to-b from-violet-100/50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-3 sm:mb-4 px-4 sm:px-0">
            Explore Japan With Me
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-violet-400 to-orange-300 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            From bustling Tokyo streets to peaceful mountain retreats, join me as I explore the diverse beauty of Japan. 
            Each journey offers unique experiences and unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-2 sm:px-0">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 touch-manipulation"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">{destination.name}</h3>
                  <p className="text-white/90 text-xs sm:text-sm">{destination.description}</p>
                </div>
                <button className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 touch-manipulation">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 bg-white rounded-2xl sm:rounded-full px-4 sm:px-6 lg:px-8 py-4 sm:py-4 shadow-lg mx-2 sm:mx-0">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
              <span className="text-sm sm:text-base text-gray-700 font-medium">47 Prefectures</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Camera className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
              <span className="text-sm sm:text-base text-gray-700 font-medium">500+ Videos</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
              <span className="text-sm sm:text-base text-gray-700 font-medium">1M+ Views</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreJapan;