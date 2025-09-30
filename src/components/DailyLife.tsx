
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

  return (
    <section id="kamakura" className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-3 sm:mb-4 px-4 sm:px-0">
            Daily Life in Kamakura
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-orange-300 to-violet-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Experience the peaceful rhythm of life in this historic coastal
            town. From morning rituals to evening walks, discover what makes
            Kamakura such a special place to call home.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12 px-2 sm:px-0">
          {lifeImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg sm:rounded-2xl aspect-square shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation"
            >
              <picture>
                <source srcSet={image.srcAVIF} type="image/avif" />
                <source srcSet={image.srcWEBP} type="image/webp" />
                <img
                  src={image.srcJPG}
                  alt={image.alt}
                  loading="lazy" // <-- THIS IS THE MOST IMPORTANT PART
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </picture>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DailyLife
