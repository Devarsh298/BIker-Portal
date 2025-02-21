import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* <!-- header start --> */}
      <header className="py-6">
        <div className="container w-11/12 md:w-4/5 mx-auto px-3">
          <div className="flex flex-wrap justify-between items-center">
            <div className="logo">
              <img src="/IMG/IMG/download.png" alt="Logo" className="w-24 md:w-32" />
            </div>
            <div className="contacts hidden md:flex">
              <div className="header-info flex flex-wrap justify-between items-center">
                <div className="header-widget flex items-center mr-3">
                  <div className="circle-icon hover:bg-black hover:text-white duration-500 h-10 w-10 md:h-12 md:w-12 rounded-full border border-black flex justify-center items-center">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="header-widget1 pl-3">
                    <p className="uppercase font-bold text-xs md:text-sm">For support mail us:</p>
                    <a href="mailto:admin@gmail.com" className="text-sm">admin@gmail.com</a>
                  </div>
                </div>
                <div className="header-widget flex items-center mr-3">
                  <div className="circle-icon hover:bg-black hover:text-white duration-500 h-10 w-10 md:h-12 md:w-12 rounded-full border border-black flex justify-center items-center">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className="header-widget1 pl-3">
                    <p className="uppercase font-bold text-xs md:text-sm">Service Helpline:</p>
                    <a href="tel:6351522559" className="text-sm">6351522559</a>
                  </div>
                </div>
                <div className="button">
                  <button type="button" className="uppercase bg-blue-500 hover:bg-red-500 duration-500 rounded-md text-sm w-28 md:w-36 h-8 text-white font-bold">
                    <a href="/login">Login/Register</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* <!-- navbar start --> */}
      <nav>
        <div className="bg-black text-white py-4 text-sm">
          <div className="container w-11/12 md:w-4/5 flex flex-wrap items-center justify-between">
            {/* Toggle Button for Mobile Menu */}
            <button 
              className="md:hidden text-white text-2xl focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>

            {/* Navigation Menu */}
            <div className={`menus w-full md:w-auto ${isMenuOpen ? "block" : "hidden"} md:flex`}>
              <ul className="uppercase font-bold flex flex-col md:flex-row text-center">
                <li className="px-4 py-2 md:px-6 aniBor cursor-pointer"><a href="/">Home</a></li>
                <li className="px-4 py-2 md:px-6 aniBor cursor-pointer"><a href="/AboutUs">About Us</a></li>
                <li className="px-4 py-2 md:px-6 aniBor cursor-pointer"><a href="/Bike">Bike Listing</a></li>
                <li className="px-4 py-2 md:px-6 aniBor cursor-pointer"><a href="/Faq">FAQs</a></li>
                <li className="px-4 py-2 md:px-6 aniBor cursor-pointer"><a href="/Contact">Contact Us</a></li>
              </ul>
            </div>

            {/* Search/User Icon */}
            <div className="search ml-[40%] border border-gray-400 rounded-lg mt-2 md:mt-0">
              <div className="icon  p-2 w-16 text-center">
                <i className="fa fa-user-circle mr-1"></i>
                <i className="fa fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- navbar end --> */}
    </>
  );
};

export default Header;
