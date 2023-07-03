

import { useEffect } from 'react';
import { FaFacebook, FaLinkedin, FaVoicemail } from 'react-icons/Fa';
import AOS from 'aos';

const ConnectMe = () => {
  const emailLink = 'mailto:adhikaryac81@gmail.com';

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Apply animation only once
      offset: 50, // Offset (in pixels) from the original trigger point
    });
  }, []);

  return (
    <div className="mb-10 mt-10 md:w-2/5 mx-auto">
      <div>
        <h3 className="text-3xl mx-auto md:w-3/5 mb-8 font-bold" data-aos="zoom-in">Connect Me With</h3>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
        <div className='text-blue-500' data-aos="flip-left">
          <a target="_blank" href="https://www.facebook.com/ac.chayon/">
            <FaFacebook size={40}></FaFacebook>
          </a>
        </div>
        <div className='text-blue-500' data-aos="flip-left" data-aos-delay="200">
          <a target="_blank" href="https://www.linkedin.com/in/chayon-adhikary-125486224/">
            <FaLinkedin size={40}></FaLinkedin>
          </a>
        </div>
        <div className='text-blue-500' data-aos="flip-left" data-aos-delay="400">
          <a target="_blank" href={emailLink}>
            <FaVoicemail size={40}></FaVoicemail>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectMe;
