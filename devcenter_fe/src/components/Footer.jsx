import { ArrowUp } from 'lucide-react';
import React from 'react';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };


  return (
    <footer className="bg-green-600 text-gray-100 pt-20 pb-9" role="contentinfo">
      <div className="container mx-auto px-4">
        {/* md:grid grid-cols-12 gap-4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className='col-span-6'>
            <h3 className="text-lg-small-caption font-bold mb-4">Address</h3>
            <p className='text-md-small-caption '>123 Maple Street, Springfield, IL 62704, Lagos</p>
          </div>
          <div className='col-span-2'>
            <h3 className="text-xl font-semibold mb-4">Info</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-md-small-caption hover:text-gray-300" aria-label="About Us">About</a></li>
              <li><a href="#how-it-works" className="text-md-small-caption hover:text-gray-300" aria-label="How It Works">How it works</a></li>
              <li><a href="#contact" className="text-md-small-caption hover:text-gray-300" aria-label="Contact Us">Contact us</a></li>
            </ul>
          </div>
          <div className='col-span-2'>
            <h3 className="text-md-small-caption font-semibold mb-4">Contact</h3>
            <div className='flex flex-col gap-2 '>
                <a className='text-md-small-caption' href="tel:08001255006266" aria-label="Phone number">0800-125-500-6266</a>
                <a className='text-md-small-caption' href="mailto:info@abcd.com.ng" aria-label="Email address">info@abcd.com.ng</a>
            </div>

          </div>
          <div className='col-span-2'>
            <span onClick={scrollToTop} className=' cursor-pointer border border-black rounded-full bg-white w-9 h-9 flex items-center justify-center '>
            <ArrowUp size={20} className='text-green-700' />
            </span>
          </div>

        </div>

        <div className='flex justify-between border-t-[1px] border-gray-300 mt-9 pt-4'>
            <p className="text-md-body">Powered by StellarSync Technology © 2024 </p>
            <p>v.1.0.0</p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;