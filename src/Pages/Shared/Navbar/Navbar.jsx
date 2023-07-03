






import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navItem = (
    <>
      <li className="text-xl mr-10" data-aos="fade-left">
        <a href="#skills">Skills</a>
      </li>
      <li className="text-xl mr-10" data-aos="fade-bottom">
        <a href="#tech">Tech</a>
      </li>
      <li className="text-xl" data-aos="fade-right">
        <a href="#projects">Projects</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <img
          className="w-1/6 rounded-full"
          src="https://i.ibb.co/zXN82vH/Brown-Beige-Aesthetic-Minimalist-Font-Initials-Logo.png"
          alt=""
          data-aos="fade-right"
        />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

















// const Navbar = () => {
//     const navItem = <>
//         <li className="text-xl mr-10"><a href="#skills">Skills</a></li>
//         <li className="text-xl mr-10"><a href="#tech">Tech</a></li>
//         <li className="text-xl"><a href="#projects">Projects</a></li>
//     </>
//     return (
//         <div className="navbar bg-base-100">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                         {navItem}
                        
//                     </ul>
//                 </div>
//                 <img className="w-1/6 rounded-full" src="https://i.ibb.co/zXN82vH/Brown-Beige-Aesthetic-Minimalist-Font-Initials-Logo.png" alt="" />
//             </div>
//             <div className="navbar-end hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {navItem}
//                 </ul>
//             </div>
            
//         </div>
//     );
// };

// export default Navbar;