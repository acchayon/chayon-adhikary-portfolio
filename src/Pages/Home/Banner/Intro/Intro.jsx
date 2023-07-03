import { FaDownload } from 'react-icons/Fa';
import { Zoom, Slide } from 'react-reveal';


const Intro = () => {

    const handleDownloadResume = () => {
        const resumeUrl = '/public/chayon-adhikary-resume.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', 'chayon-adhikary-resume.pdf');
        document.body.appendChild(link);
        link.click(); 

        document.body.removeChild(link);

    };


    return (
        <div className="w-4/5 mx-auto mb-10">
            <Slide top>
                <h3 className='text-6xl font-bold'>
                    <span className='text-blue-600'>Hey,,, I'm</span> Chayon Adhikary
                </h3>
            </Slide>
            <Zoom delay={500}>
                <p className='mt-5 text-3xl font-semibold'>
                    <span>Transforming visions into digital</span> <br />
                    <span>realities through elegant web development</span>
                    
                </p>
            </Zoom>
            <Slide bottom delay={1000}>
                <button
                    onClick={handleDownloadResume}
                    className='btn btn-active btn-primary mt-5'
                >Get Resume <FaDownload />
                </button>
                <button className="btn btn-primary mx-5"><a href="#contact">Hire Me</a></button>
            </Slide>
        </div>
    );
};

export default Intro;