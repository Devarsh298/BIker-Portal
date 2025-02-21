import React, { useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Bikelist from "../Components/BikeCo";

function Bike() {


    return (

        <>
            <Header></Header>
            {/* Hero Section with Background Image */}
            <div className="relative w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: "url(./public/IMG/IMG/list.jpg)" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="text-sm mt-2">
                        <a href="/" className="text-gray-300 hover:underline">Home</a> &gt; About Us
                    </p>
                </div>
            </div>
            {/*  */}

            <div className="p-20">
                <div className="container w-4/5 mx-auto px-3">
                    <div className="grid grid-cols-3">
                        <div className="col-span-1 text-center">
                            <div class="sidebar_widget border-2 border-[#e6e6e6] mb-10 p-5">
                                <div class="widget_heading text-xl font-bold">
                                    <h5 className="text-xl"><i class="fa fa-filter text-[#228dcb]" aria-hidden="true"></i> Find Your Bike </h5>
                                </div>
                                <div class="sidebar_filter">
                                    <form action="search-carresult.php" method="post">
                                        <div class="form-group select mb-4">
                                            <select class="form-control w-64 mt-5 p-2 bg-[#e6e6e6]" name="brand" fdprocessedid="cdcb7g">
                                                <option>Select Brand</option>


                                                <option value="1">Heros</option>

                                                <option value="2">Honda</option>

                                                <option value="3">Mahindra</option>

                                                <option value="4">TVS</option>

                                                <option value="5">Suzuki</option>

                                                <option value="7">Bajaj</option>

                                                <option value="8">Yamahas</option>

                                                <option value="9">Royal Enfield</option>

                                                <option value="10">KTM</option>

                                                <option value="14">BMW</option>

                                            </select>
                                        </div>
                                        <div class="form-group select">
                                            <select class="form-control w-64 mt-5 p-2 bg-[#e6e6e6]">
                                                <option>Select Fuel Type</option>
                                                <option value="Petrol">Petrol</option>
                                                <option value="Diesel">Diesel</option>
                                                <option value="CNG">CNG</option>
                                            </select>
                                        </div>

                                        <div class="form-group mt-5">
                                            <button type="submit" class="btn btn-block w-64  p-2 bg-[#228dcb] text-center text-white" ><i class="fa fa-search"></i> Search Bike </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            {/*  */}
                            <Bikelist img="./public/IMG/IMG/glamour-programmed-fi-24.jpg"
                                Name="Heros , Hero Glamour"
                                Price="₹350  "
                                Model="2018" >
                            </Bikelist>
                            
                            <Bikelist img="./public/IMG/IMG/honda-cb.png"
                                Name="Honda , CB Shine"
                                Price="₹550  "
                                Model="2019" >
                            </Bikelist>
                            
                            <Bikelist img="./public/IMG/IMG/mahindra.jpg"
                                Name="Mahindra Centura"
                                Price="₹500  "
                                Model="2017" >
                            </Bikelist>
                            
                            <Bikelist img="./public/IMG/IMG/royal-enfield-bullet-500-1464785917.png"
                                Name="Hero Glamour"
                                Price="₹350  "
                                Model="2018" >
                            </Bikelist>
                            
                           
                            {/*  */}
                        </div>
                    </div>
                </div>
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
        </>
    );
};

export default Bike;
