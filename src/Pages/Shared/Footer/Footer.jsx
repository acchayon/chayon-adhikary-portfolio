
const Footer = () => {
    return (
        <footer className="footer footer-center p-10  text-primary-content">
            <div>
               <img className="w-2/6 rounded-full" src="https://i.ibb.co/zXN82vH/Brown-Beige-Aesthetic-Minimalist-Font-Initials-Logo.png" alt="" />
                <p className="font-bold">
                    <span className="text-2xl">Chayon Adhikary</span> <br /><span className="text-xl">Junior Front-End Developer since - 2022 </span>
                </p>
                
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <p>adhikaryac81@gmail.com</p>
                    <p>+880 1861-931071</p>
                </div>
                <p>Copyright © 2023 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;