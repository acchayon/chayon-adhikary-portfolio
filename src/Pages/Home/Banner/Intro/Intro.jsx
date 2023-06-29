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
          <p className='mt-5'>
            Hi, I'm a passionate{' '}
            <span className='text-cyan-400'>junior front-end web developer</span>{' '}
            with 1 year of experience in building responsive and user-friendly
            websites. I specialize in HTML, CSS, JavaScript, and React, and I
            love bringing creative ideas to life through code.
          </p>
        </Zoom>
        <Slide bottom delay={1000}>
          <button
            onClick={handleDownloadResume}
            className='btn btn-active btn-primary mt-5'
          >
            Get Resume <FaDownload />
          </button>
        </Slide>

    </div>
);
};

export default Intro;