import type React from "react";
import { useNavigate } from "react-router";

const RequestAccessPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-12 flex items-center justify-center px-4 select-none">
      <div className="bg-neutral-900 p-10 rounded-2xl text-white shadow-xl">
        
        {/* Title */}
        <h1 className="text-5xl font-semibold mb-2 text-center">Request Access</h1>
        <p className="text-neutral-400 mb-16">
          We'll send your access request to the administrator<br/> for approval
        </p>

        {/* Form */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full bg-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none mb-5 text-lg"
          />

          <button
            type="submit"
            className="w-full bg-main text-black font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition hover:cursor-pointer  text-lg"
          >
            Send request
            <span className="text-xl">→</span>
          </button>
        </form>

        {/* Footer */}
        <p className="text-neutral-500 text-s text-center mt-16">
          Copyright © 2025 Catalysts, All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default RequestAccessPage;
