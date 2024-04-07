import React from "react";

function Login() {
  return (
    <section className="h-screen">
      <div className="h-full">
        {/* Left column container with background */}
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Image column */}
          <div className="hidden lg:block lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full h-full object-cover"
              alt="Sample image"
            />
          </div>

          {/* Form column */}
          <div className="flex justify-center items-center p-6 lg:p-12">
            <form className="w-full max-w-sm">
              {/* Sign in with social media */}
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <p className="mb-0 mr-4 text-lg">Sign in with</p>

                {/* Social media buttons (Facebook, Twitter, Linkedin) */}
                {/* Buttons code here */}

              </div>

              {/* Separator between social media and email/password sign in */}
              <div className="my-4 flex items-center before:flex-1 before:border-t before:border-neutral-300 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
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

              {/* Remember me checkbox and Forgot password link */}
              <div className="flex justify-between mb-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-neutral-900"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                Log in
              </button>

              {/* Register link */}
              <p className="mt-4 text-sm">
                Don't have an account?{" "}
                <a href="#!" className="font-medium text-primary hover:underline">
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
