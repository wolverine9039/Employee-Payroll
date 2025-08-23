import React from "react";
import { Mail, Lock } from "lucide-react";
import logo from "./assets/logo.png";
import students from "./assets/students.png";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full">
        
        {/* Left side */}
        <div className="left-panel">
            <img src={logo} alt="Logo" className="logo" />
            <h1>Earn Log</h1>
            <p>“From Leaves to Payslips – Sorted.”</p>
            <img src={students} alt="Students" className="student-img" />
        </div>


        {/* Right side */}
        <div className="w-1/2 flex justify-center items-center p-0">
          <div className="w-full max-w-lg min-h-[80vh] bg-white">
            <h2 className="text-4xl font-bold mb-8 text-center">
              welcome Back !
            </h2>
            
            {/* Email field */}
            <label className="block font-medium mb-3">Enter your Email</label>
            <div className="flex items-center border rounded mb-6  px-3 py-2">
              <Mail className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Please enter your  E-mail"
                className="w-full outline-none"
              />
            </div>
            
            {/* Password field */}
            <label className="block font-medium mb-3">Enter your Password</label>
            <div className="flex items-center border rounded mb-8 px-3 py-2">
              <Lock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Please enter your  Password"
                className="w-full outline-none"
              />
            </div>

            {/* Sign in button */}
            <button className="w-full bg-purple-900 text-white font-bold py-3 rounded hover:bg-purple-800 mb-8">
              SING IN
            </button>

            {/* Sign up link */}
            <p className="mt-6 text-center text-gray-700">
              Don’t have an account ?{" "}
              <a href="#" className="text-purple-600 font-medium hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
