import { Fade } from 'react-reveal';
// import './Photo.css'


const Photo = () => {
    return (
        <div className=' min-h-screen'>
            <div className='photo'>
                <Fade duration={3000} delay={1000}>
                    <img
                        className='rounded-full border-4 border-gradient-cyan mx-auto'
                        src='https://i.ibb.co/FV2qfNW/smile-removebg-preview.png'
                        alt=''
                    />
                </Fade>
            </div>

        </div>

    );
};

export default Photo;





