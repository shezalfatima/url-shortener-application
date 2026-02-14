import Header from "@/components/header";
import {Outlet} from "react-router-dom";

import { FaGithub } from "react-icons/fa"; 

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container mx-auto px-4">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10 text-white">
        Made by Shezal Fatima{" "}
        <a
          href="https://github.com/shezalfatima/url-shortener-application/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-600 ml-2"
        >
          <FaGithub className="mr-1" /> View on GitHub
        </a>
      </div>
    </div>
  );
};

export default AppLayout;
