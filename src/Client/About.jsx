import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AboutUs = () => {
  return (
    
    <div>
        <Header></Header>
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-64 bg-cover bg-center" 
           style={{ backgroundImage: "url(./public/IMG/IMG/aboutus-page-header-img.jpg)" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-sm mt-2">
            <a href="/" className="text-gray-300 hover:underline">Home</a> &gt; About Us
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Bike Rental Portal is designed to investigate and relate different functional, operational, 
          and technical requirements of a dedicated web application for an online bike rental system. 
          This system facilitates the functioning of a web-based rental bike store.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mt-4">
          The system helps answer customer inquiries about availability and rental fees for various bikes 
          on specific dates. Customers can reserve or earmark their preferred bikes, receive confirmation 
          numbers, and check various options through the website.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg mt-4">
          This bike rental system serves both foreign and local customers. The organization currently 
          uses a manual system for reservations, but this platform enables online bookings, making the 
          process seamless and efficient.
        </p>
      </div>
      {/* Floating Buttons */}
      <div className="fixed bottom-5 right-5 flex flex-col space-y-4">

        {/* Scroll to Top Button */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-500 rounded-full shadow-lg h-12 w-12">
          <span className="text-white text-xl"><i class="fa fa-angle-up text-white" aria-hidden="true"></i></span>
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
