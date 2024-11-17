import Footer from "./Footer";

function About() {
return(
    <>
        <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-white mb-4">🎥 Welcome to GiggleTown! 🎉</h1>
      <p className="text-xl text-gray-100 max-w-2xl mb-6">
        We bring joy, laughter, and magical moments to kids everywhere! At <span className="font-bold">GiggleTown</span>, our mission is simple: *Make Every Child Laugh!* Our animated videos are packed with fun characters, silly adventures, and endless giggles!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-pink-500 mb-2">✨ Our Mission</h2>
          <p className="text-gray-700">
            To create vibrant, animated stories that spark joy, inspire creativity, and deliver laughter for kids of all ages.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-blue-500 mb-2">🎨 What We Do</h2>
          <p className="text-gray-700">
            From playful animal antics to magical fairy tales, we craft exciting adventures that kids love to watch over and over again.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg text-lg">
          Watch Our Videos Now 🎬
        </button>
      </div>

      <div className="mt-12">
        <img
          src="https://via.placeholder.com/500x300.png?text=GiggleTown+Preview"
          alt="GiggleTown Preview"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>


    </>
    
)
}

 export default About;