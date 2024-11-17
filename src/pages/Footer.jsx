function Footer(){
    return(
        <>
         <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm">© 2024 Your Company. All Rights Reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <a 
              href="https://www.facebook.com" 
              className="text-white hover:text-blue-500 transition duration-300"
            >
              Facebook
            </a>
          </li>
          <li>
            <a 
              href="https://www.twitter.com" 
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Twitter
            </a>
          </li>
          <li>
            <a 
              href="https://www.instagram.com" 
              className="text-white hover:text-pink-500 transition duration-300"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
            
        </>
    )
}
 export default Footer;