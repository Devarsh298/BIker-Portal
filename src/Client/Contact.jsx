import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
    return (
        <div>
            <Header></Header>
            {/* Hero Section */}
            <div className="relative w-full h-64 bg-cover bg-center"
                style={{
                    backgroundImage: "url('./public/IMG/IMG/Contact.jpg')",
                }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="text-sm mt-2">
                        <a href="/" className="text-gray-300 hover:underline">
                            Home
                        </a>{" "}
                        &gt; Contact Us
                    </p>
                </div>
            </div>

            {/* Contact Form & Info Section */}
            <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-gray-100 p-8 shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold mb-6">
                        Get in touch using the form below
                    </h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Full Name *</label>
                            <input
                                type="text"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Email Address *</label>
                            <input
                                type="email"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Phone Number *</label>
                            <input
                                type="tel"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium">Message *</label>
                            <textarea
                                rows="4"
                                className="w-full p-3 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center"
                        >
                            Send Message <span className="ml-2"></span>
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600 text-xl"><i class="fa-solid fa-location-dot"></i></span>
                            <p className="text-gray-700">
                                61,Sanskar Society ,Himmatnagar,Gujrat
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600 text-xl"><i class="fa fa-phone"></i></span>
                            <p className="text-gray-700">+91 6351522559</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600 text-xl"><i class="fa-solid fa-envelope"></i></span>
                            <p className="text-gray-700">Admin@gmail.com</p>
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
        </div>
    );
};

export default Contact;
