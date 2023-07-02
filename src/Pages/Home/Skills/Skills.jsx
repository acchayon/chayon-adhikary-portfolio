
import { useEffect } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Skills = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 2000
        });
    }, []);

    return (
        <div className='mb-10' id='skills'>
            <h3 className='text-3xl font-bold text-center mb-7'>My Skills</h3>

            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 w-5/6 mx-auto'>
                <div  data-aos='fade-left'>
                    <ProgressBar completed={95} />
                    <h4 className='font-semibold text-xl'>HTML</h4>
                </div>
                <div  data-aos='fade-right'>
                    <ProgressBar completed={80} />
                    <h4 className='font-semibold text-xl'>CSS</h4>
                </div>
                <div  data-aos='fade-left'>
                    <ProgressBar completed={90} />
                    <h4 className='font-semibold text-xl'>BOOTSTRAP</h4>
                </div>
                <div  data-aos='fade-right'>
                    <ProgressBar completed={90} />
                    <h4 className='font-semibold text-xl'>TAILWIND</h4>
                </div>
                <div  data-aos='fade-up-left'>
                    <ProgressBar completed={75} />
                    <h4 className='font-semibold text-xl'>JAVASCRIPT</h4>
                </div>
                <div  data-aos='fade-up-right'>
                    <ProgressBar completed={80} />
                    <h4 className='font-semibold text-xl'>REACT</h4>
                </div>
                <div  data-aos='fade-left'>
                    <ProgressBar completed={70} />
                    <h4 className='font-semibold text-xl'>NODE JS</h4>
                </div>
                <div  data-aos='fade-right'>
                    <ProgressBar completed={75} />
                    <h4 className='font-semibold text-xl'>MONGODB</h4>
                </div>
                <div  data-aos='flip-left'>
                    <ProgressBar completed={72} />
                    <h4 className='font-semibold text-xl'>EXPRESS JS</h4>
                </div>
                <div  data-aos='flip-right'>
                    <ProgressBar completed={65} />
                    <h4 className='font-semibold text-xl'>FIREBASE</h4>
                </div>
                <div  data-aos='flip-left'>
                    <ProgressBar completed={90} />
                    <h4 className='font-semibold text-xl'>GITHUB</h4>
                </div>
                <div  data-aos='flip-left'>
                    <ProgressBar completed={55} />
                    <h4 className='font-semibold text-xl'>NEXT JS</h4>
                </div>
            </div>
        </div>
    );
};

export default Skills;
