function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('child.jpg')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content Section */}
      <div className="flex flex-col items-center justify-center h-full relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-yellow-300 drop-shadow-lg mb-4">
          Giggles and Ghosts
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium max-w-3xl drop-shadow-md">
          Fun and Friendly Tales for Little Ones! Whimsical adventures and charming stories designed to bring smiles and spark imaginations.
        </p>
        <button className="mt-8 px-6 py-3 bg-yellow-400 hover:bg-pink-500 text-black font-bold rounded-full shadow-lg transition-all duration-300">
          Explore Stories
        </button>
      </div>
    </div>
  );
}

export default Home;
