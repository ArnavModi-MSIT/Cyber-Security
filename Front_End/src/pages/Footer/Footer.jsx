import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#222121] text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2 text-white">CyberSecure</h3>
          <p className='text-white'>&copy; {new Date().getFullYear()} CyberSecure. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 text-white">
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="mt-4 md:mt-0 text-center">
          <p className='text-white'>Follow us:</p>
          <div className="flex justify-center gap-4 mt-2 text-white">
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://linkedin.com" className="text-blue-700 hover:text-blue-900" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
