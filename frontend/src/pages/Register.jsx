import React from "react";
import { NavLink } from "react-router-dom";

function Registration() {
  return (
    <section className="h-screen">
      <div className="h-full">
        {/* Left column container with background */}
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Image column */}
          <div className="hidden lg:block lg:w-6/12 xl:w-6/12">
            <img
              src=""
              className="w-full h-full object-cover"
              alt="Sample image"
            />
          </div>

          {/* Form column */}
          <div className="flex justify-center items-center p-6 lg:p-12">
            <form className="w-full max-w-sm">
              {/* Registration form heading */}
              <h2 className="text-2xl font-bold mb-6 text-neutral-900">
                Create an Account
              </h2>

              {/* Name input */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password input */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>

              {/* Confirm password input */}
              <div className="mb-6">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Confirm your password"
                />
              </div>

              {/* Registration button */}
              <button
                type="submit"
                className="w-full bg-primary text-black py-2 px-4 rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                Register
              </button>

              {/* Login link */}
              <p className="mt-4 text-sm">
                Already have an account?{" "}
                <NavLink to="/" className="font-medium text-primary hover:underline">
                  Log in
               </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
