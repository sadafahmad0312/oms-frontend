'use client'

//This is Footer layout
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Icons from react-icons
export const Footer = () => {
    return (
      <footer className="bg-lime-900 text-white py-2  w-full   ">
        <div className="container mx-auto px-4 w-full  flex-wrap ">
          {/* Footer Content */}
          <div className="flex justify-center   gap-8">
           
  
            {/* Quick Links */}
           
  
            {/* Contact & Social Media */}
          
           
            <div className="flex justify-center md:justify-end space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="mailto:info@brewery.com"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
          </div>
  
          {/* Copyright */}
          <div className=" flex justify-between border-spacing-0 border-gray-800 pt-4 text-center">
          
            <p className="text-white">
              &copy; {new Date().getFullYear()} Sadaf Ahmad. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  
  
  