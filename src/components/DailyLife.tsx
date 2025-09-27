import flowers from '../../images/flowers.jpg';
import fuji from '../../images/fuji.jpg';
import jinja from '../../images/jinja.jpg';
import sunflower from '../../images/sunflower.jpg';


const DailyLife = () => {
  const lifeImages = [
    {
      src: flowers,
      alt: "Flowers in Kamakura"
    },
    {
      src: fuji,
      alt: "mount fuji in tokyo"
    },
    {
      src: jinja,
      alt: "shrine in kamakura"
    },
    {
      src: sunflower,
      alt: "sunflower"
    }
  ];

  return (
    <section id="kamakura" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-3 sm:mb-4 px-4 sm:px-0">
            Daily Life in Kamakura
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-pink-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Experience the peaceful rhythm of life in this historic coastal town. From morning rituals to evening walks, 
            discover what makes Kamakura such a special place to call home.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-12 px-2 sm:px-0">
          {lifeImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg sm:rounded-2xl aspect-square shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default DailyLife;