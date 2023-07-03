
// const Tech = () => {
//     return (
//         <div className="w-4/5 mx-auto mb-10" id="tech">
//             <h3 className="text-center text-3xl mb-8 font-bold">My Tech Friends</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
//                 <div className="w-3/5 hover:translate-y-5 rounded-2xl ">
//                     <img className="object-cover" src="https://i.ibb.co/R3b2z7W/html.webp" alt="" />
//                 </div>
//                 <div className="w-3/5 hover:translate-y-5 rounded-2xl ">
//                     <img className="object-cover" src="https://i.ibb.co/cXQDwbn/css.png" alt="" />
//                 </div>
//                 <div className="w-3/5 hover:translate-y-5 rounded-2xl ">
//                     <img className="object-cover" src="https://i.ibb.co/V3x58XL/bootstrap.png" alt="" />
//                 </div>
//                 <div className="w-3/5 hover:translate-y-5 rounded-2xl ">
//                     <img className="object-cover" src="https://i.ibb.co/6vrpF10/tailwind.png" alt="" />
//                 </div>
//                 <div className="w-3/5 hover:translate-y-5 rounded-2xl ">
//                     <img className="object-cover" src="https://i.ibb.co/HnntjrX/js.png" alt="" />
//                 </div>
//                 <div className="w-3/5 hover:translate-y-5 rounded-2xl ">
//                     <img className="object-cover" src="https://i.ibb.co/wy64S9n/react.png" alt="" />
//                 </div>
//                 <div className="w-3/5 hover:translate-y-5 rounded-2xl ">
//                     <img className="object-cover" src="https://i.ibb.co/sVJb9Ny/firebase.png" alt="" />
//                 </div>
//                 <div className="w-3/5 hover:translate-y-5 rounded-2xl ">
//                     <img className="object-cover" src="https://i.ibb.co/j5kqwQW/node.jpg" alt="" />
//                 </div>
//                 <div className="w-3/5 hover:translate-y-5 rounded-2xl ">
//                     <img className="object-cover" src="https://i.ibb.co/KDZ1y6N/mongodb.jpg" alt="" />
//                 </div>
//                 <div className="w-3/5 hover:translate-y-5 rounded-2xl ">
//                     <img className="object-cover" src="https://i.ibb.co/fknnr3n/express.png" alt="" />
//                 </div>
//                 <div className="w-3/5 hover:translate-y-5 rounded-2xl ">
//                     <img className="object-cover" src="https://i.ibb.co/bFsvNSp/next.png" alt="" />
//                 </div>
//                 <div className="w-3/5 hover:translate-y-5 rounded-2xl ">
//                     <img className="object-cover" src="https://i.ibb.co/WvFPRQt/mern.jpg" alt="" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Tech;




import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Tech = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-4/5 mx-auto mb-10" id="tech">
      <h3 className="text-center text-3xl mb-8 font-bold">My Tech Friends</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
        <div className="w-3/5 hover:translate-y-5 rounded-2xl" data-aos="fade-up">
          <img className="object-cover" src="https://i.ibb.co/R3b2z7W/html.webp" alt="" />
        </div>
        <div className="w-3/5 hover:translate-y-5 rounded-2xl" data-aos="zoom-in">
          <img className="object-cover" src="https://i.ibb.co/cXQDwbn/css.png" alt="" />
        </div>
        <div className="w-3/5 hover:translate-y-5 rounded-2xl" data-aos="fade-left">
          <img className="object-cover" src="https://i.ibb.co/V3x58XL/bootstrap.png" alt="" />
        </div>
        <div className="w-3/5 hover:translate-y-5 rounded-2xl" data-aos="zoom-in">
          <img className="object-cover" src="https://i.ibb.co/6vrpF10/tailwind.png" alt="" />
        </div>
        <div className="w-3/5 hover:translate-y-5 rounded-2xl" data-aos="fade-right">
          <img className="object-cover" src="https://i.ibb.co/HnntjrX/js.png" alt="" />
        </div>
        <div className="w-3/5 hover:translate-y-5 rounded-2xl" data-aos="flip-up">
          <img className="object-cover" src="https://i.ibb.co/wy64S9n/react.png" alt="" />
        </div>
        <div className="w-3/5 hover:translate-y-5 rounded-2xl" data-aos="fade-down">
          <img className="object-cover" src="https://i.ibb.co/sVJb9Ny/firebase.png" alt="" />
        </div>
        <div className="w-3/5 hover:translate-y-5 rounded-2xl" data-aos="flip-right">
          <img className="object-cover" src="https://i.ibb.co/j5kqwQW/node.jpg" alt="" />
        </div>
        <div className="w-3/5 hover:translate-y-5 rounded-2xl" data-aos="fade-in">
          <img className="object-cover" src="https://i.ibb.co/KDZ1y6N/mongodb.jpg" alt="" />
        </div>
        <div className="w-3/5 hover:translate-y-5 rounded-2xl" data-aos="flip-left">
          <img className="object-cover" src="https://i.ibb.co/fknnr3n/express.png" alt="" />
        </div>
        <div className="w-3/5 hover:translate-y-5 rounded-2xl" data-aos="zoom-in">
          <img className="object-cover" src="https://i.ibb.co/bFsvNSp/next.png" alt="" />
        </div>
        <div className="w-3/5 hover:translate-y-5 rounded-2xl" data-aos="fade-up">
          <img className="object-cover" src="https://i.ibb.co/WvFPRQt/mern.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
