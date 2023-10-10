/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../firebase/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const notify = () => toast.success("Successfully Signed In");

  const handleGoogle = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      notify();
    });
  };

  const handleSignIn = () => {
    if(email,password){
      signIn(email,password).then(result=>{
        console.log(result.user);
        notify();
      })
      .catch((error)=>{
        setError(error.message);
      })
    }
  };

  return (
    <div>
      <div className="flex w-full max-w-sm my-4 mx-auto overflow-hidden lg:max-w-4xl">
        <div
          className="hidden rounded-xl  bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage:
              'url("https://i.ibb.co/dQknQr7/pexels-andrea-piacquadio-3758105.jpg")',
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://i.ibb.co/Kj7B170/Letter-E-Logo-1.png"
              alt=""
            />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 ">
            Welcome back!
          </p>

          <a
            onClick={handleGoogle}
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

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </a>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  lg:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase  hover:underline"
            >
              or Sign in with email
            </a>

            <span className="w-1/5 border-b  lg:w-1/4"></span>
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 "
              //   for="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 "
                // for="loggingPassword"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
              >
                Forget Password?
              </a>
            </div>

            <input
              onChange={(e) => setPassword(e.target.value)}
              id="loggingPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
            />
          </div>

          <div className="mt-6">
            <button onClick={handleSignIn} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <p className="text-xs text-gray-500 uppercase  hover:underline">
              or <Link to="/signUp">Sign Up</Link>
            </p>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
