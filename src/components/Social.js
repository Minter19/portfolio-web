import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Social() {
  return (
    <>
      <div className="container w-screen p-4 flex-1 m-auto h-80 mt-10 mb-10">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          <p className="text-xl inline-block">Social</p>
        </div>

        <a href="https://www.linkedin.com/in/minterrgg/" target="_blank">
          <button className="border p-5 w-full rounded-lg mt-1 hover:scale-95 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
            LinkedIn
          </button>
        </a>
        <a href="https://fb.me/autofix.apk/" target="_blank">
          <button className="border p-5 w-full rounded-lg mt-1 hover:scale-95 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
            Facebook
          </button>
        </a>
        <a href="https://www.instagram.com/minterrgg/" target="_blank">
          <button className="border p-5 w-full rounded-lg mt-1 hover:scale-95 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
            Instagram
          </button>
        </a>
        <a href="https://www.tiktok.com/@mrrgg_v1" target="_blank">
          <button className="border p-5 w-full rounded-lg mt-1 hover:scale-95 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
            Tiktok
          </button>
        </a>
      </div>
    </>
  );
}

export default Social;
