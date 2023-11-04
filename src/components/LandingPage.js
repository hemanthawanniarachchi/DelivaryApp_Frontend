import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        {/* Your navigation content here */}
      </nav>

      {/* Hero Section */}
      <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="container mx-auto text-center">
          {/* Your hero section content here */}
          <h1 className="text-4xl font-bold">Supermarket Delivery App</h1>
          <p className="text-lg text-gray-600">Order groceries from the comfort of your home.</p>
          <Link to="/username">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Get Started
          </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {/* Feature cards */}
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-gray-600">Get your groceries delivered quickly.</p>
            </div>
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-xl font-semibold">Wide Selection</h3>
              <p className="text-gray-600">Choose from a wide range of products.</p>
            </div>
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-xl font-semibold">Secure Payment</h3>
              <p className="text-gray-600">Safe and secure payment options.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500 p-4">
        {/* Your footer content here */}
      </footer>
    </div>
  );
};

export default LandingPage;
