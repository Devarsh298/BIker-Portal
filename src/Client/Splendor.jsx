import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Button = ({ label, onClick, isActive }) => {
  return (
    <button
      className={`px-4 py-2 text-white font-semibold rounded-t-md transition-all ${
        isActive ? "bg-red-600" : "bg-gray-300 hover:bg-gray-400"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default function HeroGlamour() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
        <Header></Header>
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold">Heros, Hero Glamour</h1>
      <div className="flex space-x-4 my-4">
        <div className="bg-gray-200 p-4 rounded-md text-center">
          <p className="text-xl font-semibold">2019</p>
          <p className="text-sm text-gray-600">RegYear</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md text-center">
          <p className="text-xl font-semibold">Petrol</p>
          <p className="text-sm text-gray-600">Fuel Type</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-md text-center">
          <p className="text-xl font-semibold">2</p>
          <p className="text-sm text-gray-600">Seats</p>
        </div>
      </div>
      
      <div className="flex border-b">
        <Button
          label="Vehicle Overview"
          onClick={() => setActiveTab("overview")}
          isActive={activeTab === "overview"}
        />
        <Button
          label="Accessories"
          onClick={() => setActiveTab("accessories")}
          isActive={activeTab === "accessories"}
        />
      </div>
      
      <div className="p-4 border">
        {activeTab === "overview" ? (
          <p>
            A two-wheeler major's mid-sized commuter fighter, the Hero MotoCorp
            Glamour follows the same principle as the 100cc commuter bikes,
            but comes with a host of added features and contemporary styling.
          </p>
        ) : (
          <p>
            This bike comes with premium accessories like alloy wheels, a
            digital instrument cluster, and stylish body graphics.
          </p>
        )}
      </div>
      
      <div className="mt-6 border p-4 rounded-lg w-1/3">
        <h2 className="font-semibold text-lg mb-2">Book Now</h2>
        <input type="date" className="w-full p-2 border rounded mb-2" />
        <input type="date" className="w-full p-2 border rounded mb-2" />
        <textarea className="w-full p-2 border rounded mb-2" placeholder="Message"></textarea>
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login for Book</button>
      </div>
    </div>
      <Footer></Footer>
    </>
  );
}
