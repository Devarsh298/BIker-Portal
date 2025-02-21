import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Bikelist from "../Components/BikeCo";

function Bike() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div
        className="relative w-full h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/IMG/IMG/list.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold">Find Your Bike</h1>
          <p className="text-sm mt-2">
            <a href="/" className="text-gray-300 hover:underline">Home</a> &gt; Find Your Bike
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-16">
        <div className="container mx-auto w-11/12 md:w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Sidebar Filter */}
            <div className="border-2 h-64 border-gray-300 p-5 rounded-md shadow-md">
              <h5 className="text-xl font-bold mb-4 flex items-center">
                <i className="fa fa-filter text-blue-500 mr-2"></i> Find Your Bike
              </h5>

              <form>
                {/* Select Brand */}
                <div className="mb-4">
                  <select className="w-full p-2 border rounded-md bg-gray-200">
                    <option>Select Brand</option>
                    <option value="1">Heros</option>
                    <option value="2">Honda</option>
                    <option value="3">Mahindra</option>
                    <option value="4">TVS</option>
                    <option value="5">Suzuki</option>
                    <option value="7">Bajaj</option>
                    <option value="8">Yamaha</option>
                    <option value="9">Royal Enfield</option>
                    <option value="10">KTM</option>
                    <option value="14">BMW</option>
                  </select>
                </div>

                {/* Select Fuel Type */}
                <div className="mb-4">
                  <select className="w-full p-2 border rounded-md bg-gray-200">
                    <option>Select Fuel Type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="CNG">CNG</option>
                  </select>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  <i className="fa fa-search mr-2"></i> Search Bike
                </button>
              </form>
            </div>

            {/* Bike Listings */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-6">
                
                <Bikelist 
                  img="/IMG/IMG/glamour-programmed-fi-24.jpg"
                  Name="Heros , Hero Glamour"
                  Price="₹350"
                  Model="2018" 
                />

                <Bikelist 
                  img="/IMG/IMG/honda-cb.png"
                  Name="Honda , CB Shine"
                  Price="₹550"
                  Model="2019" 
                />

                <Bikelist 
                  img="/IMG/IMG/mahindra.jpg"
                  Name="Mahindra Centura"
                  Price="₹500"
                  Model="2017" 
                />

                <Bikelist 
                  img="/IMG/IMG/royal-enfield-bullet-500-1464785917.png"
                  Name="Royal Enfield Bullet 500"
                  Price="₹350"
                  Model="2018" 
                />

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Button */}
      <div className="fixed bottom-5 right-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-500 text-white rounded-full shadow-lg h-12 w-12 flex items-center justify-center hover:bg-blue-600 transition"
        >
          <i className="fa fa-angle-up"></i>
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Bike;
