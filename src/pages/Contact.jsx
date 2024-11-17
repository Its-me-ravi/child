import React, { useState } from "react";

function Contact() {
  const [isSignIn, setIsSignIn] = useState(true);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      // Handle sign-in logic here
      console.log("Sign In Submitted");
    } else {
      // Handle sign-up logic here
      console.log("Sign Up Submitted");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Form Container */}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Switch Button to Toggle Between Sign In and Sign Up */}
        <button
          onClick={() => setIsSignIn(!isSignIn)}
          className="w-full py-2 mb-6 text-sm text-blue-500 font-medium focus:outline-none hover:text-blue-700 transition-colors"
        >
          {isSignIn ? "Switch to Sign Up" : "Switch to Sign In"}
        </button>

        {/* Form Based on Current State (Sign In or Sign Up) */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>

          {/* Common Form Fields */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Show confirm password field for sign-up */}
          {!isSignIn && (
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm text-gray-700">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
