import { useState, useEffect } from 'react'
import { Play, MessageCircle, Share2 } from 'lucide-react'


interface Video {
  guid: string
  title: string
  thumbnail: string
  duration: string
  views: string
  likes: string
  link: string
}

const VideoGallery = () => {
  const [videos, setVideos] = useState<Video[]>([])

  useEffect(() => {
    const fetchVideos = async () => {
      // The API URL you got from rss2json.com
      const response = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCG9CVOjDIV32eaRJN9-JTaw'
      )
      const data = await response.json()

      const fullVideos = data.items.filter((video: { link: string | string[] }) => {
        // Ensure video.link exists before checking it
        return video.link && !video.link.includes('/shorts/');
      });


      setVideos(fullVideos.slice(0, 3)) // The 'items' array contains your videos
    }

    fetchVideos()
  }, [])

  

  return (
    <section
      id="videos"
      className="py-20 bg-gradient-to-b from-white to-violet-100/30"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-3 sm:mb-4 px-4 sm:px-0">
            Latest Adventures
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-violet-400 to-orange-300 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
            Explore Japan's beauty through my recent videos, from peaceful
            temple walks to exciting food discoveries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
          {videos.map((video) => (
            <div
              key={video.guid}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105 touch-manipulation"
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl sm:rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center touch-manipulation">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 border border-white/20 touch-manipulation">
                    <a
                      href={video.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white ml-1" />
                    </a>
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs sm:text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <a href={video.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3 group-hover:text-violet-500 transition-colors duration-300 line-clamp-2">
                  {video.title}
                </h3>
                </a>
                

                {/* <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  <span>{video.views} views</span>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>{video.likes}</span>
                  </div>
                </div> */}

                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-1 sm:space-x-2 text-violet-400 hover:text-violet-500 transition-colors duration-200 touch-manipulation">
                    <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm font-medium">
                      Comment
                    </span>
                  </button>
                  <button className="flex items-center space-x-1 sm:space-x-2 text-gray-400 hover:text-gray-500 transition-colors duration-200 touch-manipulation">
                    <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm font-medium">
                      Share
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoGallery
