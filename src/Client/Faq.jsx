import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const FAQ = () => {
    const faqs = [
        {
            question: "How I Book a Bike For Per Day Rent?",
            answer:"You can book a bike by going to the Bike-Listing section, selecting a bike, entering your details, and booking.",
        },
        {
            question: "How Much Cost I Pay For Per Day Bike Rent?",
            answer:"The cost of bike rent depends on the bike model and brand. It also depends on the selected bike and brand.",
        },
        {
            question: "Which Types Of Bike Brands You Provided For Rent?",
            answer:"We provide India's popular bike brands like Bajaj, Honda, Yamaha, and Suzuki. We also provide some sport bikes.",
        },
        {
            question: "Are You Provided Best Quality Bikes For Rent?",
            answer:"Yes, we provide the best quality bikes for our customers, ensuring their satisfaction with our services.",
        },
    ];

    return (
        <div>
            <Header></Header>
            {/* Hero Section */}
            <div className="relative w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: "url(./public/IMG/IMG/aboutus-page-header-img.jpg)", }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold">FAQs</h1>
                    <p className="text-sm mt-2">
                        <a href="/" className="text-gray-300 hover:underline">
                            Home
                        </a>{" "}
                        &gt; FAQs
                    </p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-5xl mx-auto py-16 px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">FAQs</h2>
                <div className="space-y-6 text-left">
                    {faqs.map((faq, index) => (
                        <div key={index} className="text-center pb-4">
                            <h3 className="text-xl font-semibold">
                                {index + 1}Q. {faq.question}
                            </h3>
                            <p className="text-gray-600 mt-2">Ans: {faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Buttons */}
            <div className="fixed bottom-5 right-5 flex flex-col space-y-4">

                {/* Scroll to Top Button */}
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="bg-blue-500 rounded-full shadow-lg h-12 w-12">
                    <span className="text-white text-xl"><i className="fa fa-angle-up text-white" aria-hidden="true"></i></span>
                </button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default FAQ;
