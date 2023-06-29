import { Fade } from 'react-reveal';


const Photo = () => {
    return (

        // <div className='photo'>
        //     <img className="rounded-full border-4 border-cyan-200 mx-auto" src="https://i.ibb.co/FV2qfNW/smile-removebg-preview.png" alt="" />
        // </div>
        <div className=' min-h-screen'>
            <div className='photo'>
                <Fade duration={3000} delay={1000}>
                    <img
                        className='rounded-full border-4 border-cyan-200 mx-auto'
                        src='https://i.ibb.co/FV2qfNW/smile-removebg-preview.png'
                        alt=''
                    />
                </Fade>
            </div>
           
        </div>

    );
};

export default Photo;










// top-24 md:right-32 bottom-20

//  {/* <div className="relative h-100 w-100">
//                 <img className="absolute z-[-10] right-0 inset-0 object-cover" src="https://i.ibb.co/D48kg5T/header-bg.png" alt="" />
//             </div> */}


// <div className='photo'>
        //     <div className="relative h-100 w-100">
        //         <img className="absolute z-[-10] insert-0  " src="https://i.ibb.co/D48kg5T/header-bg.png" alt="" />
        //     </div>
        //     <img className="rounded-full border-4 border-cyan-200" src="https://i.ibb.co/FV2qfNW/smile-removebg-preview.png" alt="" />
        // </div>