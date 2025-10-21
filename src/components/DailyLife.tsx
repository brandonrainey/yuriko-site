import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import { Instagram, Expand } from 'lucide-react'
import flowersAvif from '../../images/flowers-avif.avif'
import fujiAvif from '../../images/fuji-avif.avif'
import jinjaAvif from '../../images/jinja-avif.avif'
import sunflowerAvif from '../../images/sunflower-avif.avif'
import flowersWebp from '../../images/flowers-webp.webp'
import fujiWebp from '../../images/fuji-webp.webp'
import jinjaWebp from '../../images/jinja-webp.webp'
import sunflowerWebp from '../../images/sunflower-webp.webp'
import flowersJpg from '../../images/flowers-jpg.jpg'
import fujiJpg from '../../images/fuji-jpg.jpg'
import jinjaJpg from '../../images/jinja-jpg.jpg'
import sunflowerJpg from '../../images/sunflower-jpg.jpg'

const DailyLife = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const lifeImages = [
    {
      srcAVIF: flowersAvif,
      srcWEBP: flowersWebp,
      srcJPG: flowersJpg,
      alt: 'Flowers in Kamakura',
    },
    {
      srcAVIF: fujiAvif,
      srcWEBP: fujiWebp,
      srcJPG: fujiJpg,
      alt: 'mount fuji in tokyo',
    },
    {
      srcAVIF: jinjaAvif,
      srcWEBP: jinjaWebp,
      srcJPG: jinjaJpg,
      alt: 'shrine in kamakura',
    },
    {
      srcAVIF: sunflowerAvif,
      srcWEBP: sunflowerWebp,
      srcJPG: sunflowerJpg,
      alt: 'sunflower',
    },
  ]

  // --- Prepare slides array for the Lightbox (using JPGs for simplicity) ---
  const lightboxSlides = lifeImages.map((image) => ({ src: image.srcJPG }))

  // --- Function to handle thumbnail click ---
  const handleImageClick = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="kamakura" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-3 sm:mb-4 px-4 sm:px-0">
            Kamakura Through My Lens
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-300 to-violet-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Discover the beauty of Kamakura through my lens. This gallery captures moments, big and small, showcasing the scenic views and everyday charm of this historic coastal town.
          </p>
        </div>

        {/* --- Image Grid --- */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12 px-2 sm:px-0">
          {lifeImages.map((image, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(index)} // Triggers the lightbox
              className="group relative overflow-hidden rounded-lg sm:rounded-2xl aspect-square shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation cursor-pointer"
            >
              <picture>
                <source srcSet={image.srcAVIF} type="image/avif" />
                <source srcSet={image.srcWEBP} type="image/webp" />
                <img
                  src={image.srcJPG}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Instagram Icon Link Overlay */}
              <a
                href="https://instagram.com/i.am.yurichan/?r=nametag"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Prevent triggering lightbox
                className="absolute bottom-2 right-2 z-10 p-1.5 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/40 hover:scale-110"
                aria-label="View on Instagram"
              >
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </a>

              <div
                className="absolute top-2 right-2 z-10 p-1.5 bg-black/30 backdrop-blur-sm rounded-full sm:hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 hover:scale-110"
                style={{ pointerEvents: 'none' }} // Makes sure the icon itself isn't clickable
              >
                <Expand className="h-3 w-3 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
        plugins={[Zoom]}
        styles={{
          root: {
            '--yarl__color_backdrop': 'rgba(0, 0, 0, 0.9)',
          },
          slide: { padding: 0 },
        }}
      />
    </section>
  )
}

export default DailyLife
