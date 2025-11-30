import { useNavigate } from "react-router";
import React, { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isUser, setIsUser] = useState(true);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="h-screen w-full bg-gray-12 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-10 w-full max-w-md px-6">

        <h1 className="text-white text-9xl font-extrabold tracking-tight">
          DKMS
        </h1>

        {/* User / Admin Toggle */}
        <div className="flex justify-evenly w-full">

          <button
            onClick={() => setIsUser(true)}
            className={`p-4 px-12 outline-0 transition rounded-full 
              ${isUser ? "bg-main text-black" : "bg-[#1A1A1A] text-gray-100 border-2 border-[#2A2A2A]"}`}
          >
            User
          </button>

          <button
            onClick={() => setIsUser(false)}
            className={`p-4 px-12 outline-0 transition rounded-full
              ${!isUser ? "bg-main text-black" : "bg-[#1A1A1A] text-gray-100 border-2 border-[#2A2A2A]"}`}
          >
            Admin
          </button>

        </div>

        {/* Form */}
        <form onSubmit={(e) => handleLogin(e)} className="flex flex-col w-full space-y-4">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-14 bg-[#1A1A1A] text-gray-300 px-4 text-lg outline-none border border-[#2A2A2A] focus:border-gray-500 transition"
          />

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full h-14 bg-[#1A1A1A] text-gray-300 px-4 text-lg outline-none border border-[#2A2A2A] focus:border-gray-500 transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="outline-0 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
            >
              {showPassword ? (
                <svg className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 3l18 18M14.121 14.121A3 3 0 0112 15a3 3 0 01-3-3c0-.796.312-1.559.879-2.121M9.879 9.879A3 3 0 0112 9c1.657 0 3 1.343 3 3 0 .795-.312 1.559-.879 2.121M21 12c-2.5 4-6 6-9 6-1.51 0-2.94-.36-4.243-1M3 12c.955-1.53 2.16-2.82 3.586-3.828" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z" />
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full h-14 bg-main text-black text-xl font-medium flex items-center justify-between px-6 hover:opacity-95 transition"
          >
            <span>Login</span>
            <span className="text-2xl font-light">→</span>
          </button>
        </form>

        <p className="text-gray-500 text-sm pt-6">
          Copyright © 2025 Catalysts, All Rights Reserved.
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
