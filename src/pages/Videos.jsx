function Videos() {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Section 1 */}
          <div className="bg-gray-900 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
                Watch Our Featured Video
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Dive into the magical world of learning and fun with our exciting videos tailored for young minds!
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border-4 border-yellow-400 mx-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/watch?v=qPw6NZAzhIs&list=RDGMEMAG5Rymn0tbCIY1Nh3hIfZQVMqPw6NZAzhIs&start_radio=1" // Embed link of your video
                  title="YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
  
          {/* Section 2 */}
          <div className="bg-gray-800 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
                Explore More Fun Stories
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Get ready to explore more whimsical tales for your little ones with this next video.
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border-4 border-yellow-400 mx-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/qEjajqS4YBI" // Embed link of your video
                  title="YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
  
          {/* Section 3 */}
          <div className="bg-gray-700 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
                Fun Learning Moments
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Watch as your little ones enjoy fun learning moments with our specially curated videos!
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border-4 border-yellow-400 mx-auto">
              <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/videoseries?list=RDGMEMAG5Rymn0tbCIY1Nh3hIfZQVMqPw6NZAzhIs" // Embed link for playlist
  title="YouTube Playlist"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
              </div>
            </div>
          </div>
  
          {/* Section 4 */}
          <div className="bg-gray-600 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">
                Adventure Awaits
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Let your kids embark on a delightful adventure with our newest video release!
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border-4 border-yellow-400 mx-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/6QdkIOo-fe0" // Embed link of your video
                  title="YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Videos;
  