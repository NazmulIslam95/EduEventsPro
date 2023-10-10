import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const notify = () => toast.success("Successfully Signed Up");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{7,}$/.test(password)) {
      setError(
        "Password must be more than 6 characters long, contain at least one capital letter, and at least one special character."
      );
    } else {
      setError("");
      if (email) {
        signUp(email, password).then((result) => console.log(result.user));
        notify();
      }
    }
  };

  return (
    <div className="my-8">
      <section className="bg-white ">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden rounded-xl shadow-2xl shadow-gray-400 bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/NLkwPnJ/pexels-luis-quintero-2774556.jpg")',
            }}
          ></div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
                Get your free account now.
              </h1>

              <p className="mt-4 text-gray-500 ">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>
              <div>
                <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 ">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 ">
                        Last name
                      </label>
                      <input
                        type="text"
                        placeholder="Snow"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 ">
                        Phone number
                      </label>
                      <input
                        type="text"
                        placeholder="XXX-XX-XXXX-XXX"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 ">
                        Email address
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="johnsnow@example.com"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 ">
                        Password
                      </label>
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter your password"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 ">
                        Confirm password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSignUp}
                    type="submit"
                    className="px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    <span>Sign Up </span>
                  </button>
                  <div>
                    <p className="text-red-500 text-sm">{error}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b  lg:w-1/4"></span>

                    <a
                      href="#"
                      className="text-xs text-center text-gray-500 uppercase  hover:underline"
                    >
                      or Sign Up with Google
                    </a>

                    <span className="w-1/5 border-b  lg:w-1/4"></span>
                  </div>
                  <a
                    href="#"
                    className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
                  >
                    <div className="px-4 py-2">
                      <img
                        width="28"
                        height="48"
                        src="https://img.icons8.com/fluency/48/google-logo.png"
                        alt="google-logo"
                      />
                    </div>

                    <span className="w-5/6 py-3 font-bold text-center">
                      Sign Up with Google
                    </span>
                  </a>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-400">
                  {" "}
                  Already have an account?{" "}
                  <Link
                    to="/logIn"
                    className="font-medium text-gray-700 hover:underline"
                  >
                    Sign In
                  </Link>
                  <a href="#"></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
};

export default SignUp;
