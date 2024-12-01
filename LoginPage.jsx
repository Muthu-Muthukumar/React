import React from "react";
import { FaGoogle } from "react-icons/fa";

function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row">
        
        <div className="hidden md:block md:w-1/2 p-4">
          <img
            src="./src/assets/mkp.png"  
            alt="Login Illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

      
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-2 bg-red-500 text-white rounded-md"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">Or login with</p>
            <button
              aria-label="Login with Google"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md flex items-center justify-center bg-white text-gray-700"
            >
              <FaGoogle className="mr-2 text-xl" /> Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
