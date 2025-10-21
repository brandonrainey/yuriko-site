import { MapPin, Calendar, Heart, Camera } from 'lucide-react'
import yurikoBannerAVIF from '../../images/yuriko-banner-avif.avif'
import yurikoBannerWEBP from '../../images/yuriko-banner-webp.webp'
import yurikoBannerJPG from '../../images/yuriko-banner-jpg.jpg'


const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-gradient-to-b from-white to-violet-100/30"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Banner Image Section */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl mb-12 sm:mb-16 mx-2 sm:mx-0 shadow-2xl">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem]">
            <picture>
          {/* Browser will try AVIF first */}
          <source srcSet={yurikoBannerAVIF} type="image/avif" />
          {/* If it can't, it will try WebP */}
          <source srcSet={yurikoBannerWEBP} type="image/webp" />
          {/* The <img> tag is the final fallback for all browsers */}
          <img
            src={yurikoBannerJPG}
            alt="Kamakura scenic view"
            className="w-full h-full object-cover object-center" 
          />
        </picture>

            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
                <div className="max-w-lg">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-3 sm:mb-4 leading-tight">
                    About Me
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
                    Hi! I'm sharing my journey of living in beautiful Kamakura
                    and exploring the wonders of Japan, one adventure at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-gradient-to-r from-violet-100 to-orange-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 mx-2 sm:mx-0">
          <div className="px-2 sm:px-0">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-800 mb-4 sm:mb-6">
                  Living My Dream in Japan
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  Hello! I'm Yuriko, a videographer and traveler based in the beautiful coastal city of Kamakura, Japan.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  On my channel, "The Life of Yurichan," I love sharing glimpses into my daily life, travels around Japan, and the authentic moments that make this country so special. My goal is to bring the "real voice" of Japan directly to you through my camera.
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Thanks for stopping by – let's go on this journey together!
                </p>
              </div>

              {/* Stats/Highlights */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-violet-100">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
                    <span className="text-xs sm:text-sm font-medium text-gray-500">
                      LOCATION
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-gray-800">
                    Kamakura, Japan
                  </p>
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-violet-100">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
                    <span className="text-xs sm:text-sm font-medium text-gray-500">
                      STARTED
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-gray-800">
                    2022
                  </p>
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-violet-100">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                    <Camera className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
                    <span className="text-xs sm:text-sm font-medium text-gray-500">
                      VIDEOS
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-gray-800">
                    170+
                  </p>
                </div>

                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-violet-100">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
                    <span className="text-xs sm:text-sm font-medium text-gray-500">
                      SUBSCRIBERS
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-gray-800">
                    28K+
                  </p>
                </div>
              </div>

              {/* Personal Touches */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                  <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Passionate about capturing authentic moments through videography and photography
                  </span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                  <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Can communicate in English and enjoys practicing with viewers!
                  </span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                  <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Love connecting with viewers from around the world and sharing Japanese culture
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
