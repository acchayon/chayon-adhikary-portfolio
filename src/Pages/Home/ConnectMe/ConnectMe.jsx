// import { FaFacebook, FaLinkedin, FaVoicemail } from "react-icons/Fa";

// const ConnectMe = () => {
//     return (
//         <div className="mb-10 md:w-2/5 mx-auto">
//             <div>
//                 <h3 className="text-3xl  mx-auto md:w-3/5 mb-8 font-bold ">Connect Me With</h3>
//             </div>
//             <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
//                 <div>
//                     <a target="_blank" href="https://www.facebook.com/ac.chayon/"><FaFacebook size={40}></FaFacebook></a>
//                 </div>
//                 <div>
//                     <a target="_blank" href="https://www.linkedin.com/in/chayon-adhikary-125486224/"><FaLinkedin size={40}></FaLinkedin></a>
//                 </div>
//                 <div>
//                     <a target="_blank" href=""><FaVoicemail size={40}></FaVoicemail></a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ConnectMe;







import { FaFacebook, FaLinkedin, FaVoicemail } from 'react-icons/Fa';

const ConnectMe = () => {
 
  const emailLink = 'mailto:adhikaryac81@gmail.com';

  return (
    <div className="mb-10 md:w-2/5 mx-auto">
      <div>
        <h3 className="text-3xl mx-auto md:w-3/5 mb-8 font-bold">Connect Me With</h3>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
        <div>
          <a target="_blank" href="https://www.facebook.com/ac.chayon/">
            <FaFacebook size={40}></FaFacebook>
          </a>
        </div>
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/chayon-adhikary-125486224/">
            <FaLinkedin size={40}></FaLinkedin>
          </a>
        </div>
        <div>
          <a target="_blank" href={emailLink}>
            <FaVoicemail size={40}></FaVoicemail>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectMe;
