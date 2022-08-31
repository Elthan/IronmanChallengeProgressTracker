import React from "react";
import { FaTiktok, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


function Footer() {
  const socials = [
    {href: "https://www.tiktok.com/@edisonparklive/", icon: <FaTiktok />},
    {href: "http://twitter.com/edisonparklive", icon: <FaTwitter />},
    {href: "http://instagram.com/edisonparklive", icon: <FaInstagram />},
    {href: "https://www.youtube.com/c/edisonparklive", icon: <FaYoutube />},
  ];

  return(
    <footer className="relative">
      {/* Decoration */}
      <div className="bg-zinc-700 py-4"></div>

      <div className="bg-zinc-800 pt-10 sm:pt-16 pb-4 flex flex-col items-center">
        <div className="text-zinc-300 flex justify-center space-x-6 text-3xl mb-4 sm:mb-10">
          {socials.map(social => 
            <a
              className="hover:text-white"
              href={social.href}
              rel='noreferrer'
              target='_blank'
            >
              {social.icon}
            </a>
          )}
        </div>
        <p className="text-zinc-600 text-sm">
          <small>&copy;Ironman Challenge</small>
        </p> 
      </div>
    </footer>
  );
}

export default Footer;