import { Play, ArrowRight } from 'lucide-react'
import profilePic from '../../images/profile-pic.jpg'
import heroAVIF from '../../images/hero1-avif.avif'
import heroWEBP from '../../images/hero1-webp.webp'
import heroJPG from '../../images/hero1-jpg.jpg'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Browser will try AVIF first */}
          <source srcSet={heroAVIF} type="image/avif" />
          {/* If it can't, it will try WebP */}
          <source srcSet={heroWEBP} type="image/webp" />
          {/* The <img> tag is the final fallback for all browsers */}
          <img
            src={heroJPG}
            alt="Kamakura scenic view"
            className="w-full h-full object-cover object-top" // Use object-top as we discussed!
            width="1920" // Always provide the actual width and height
            height="1080"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center pt-16 sm:pt-0">
        <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-12 border border-white/20 mx-2 sm:mx-0">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <img
              src={profilePic}
              alt="Profile"
              className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-3 sm:border-4 border-white/30 shadow-lg"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-3 sm:mb-4 leading-tight">
            Discover Japan
            <span className="block text-violet-300 mt-1 sm:mt-0">
              Through My Eyes
            </span>
          </h1>

          <p className="text-md sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Join me on daily adventures exploring the hidden gems of Kamakura,
            discovering authentic Japanese culture, and experiencing the beauty
            of everyday life in Japan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://www.youtube.com/@i.am.yurichan/videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group bg-violet-400 hover:bg-violet-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 touch-manipulation text-sm sm:text-base w-full sm:w-auto justify-center">
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>WATCH LATEST ADVENTURE</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
