
import { useEffect, useRef} from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cx3jnqu', 'template_revc1jr', form.current, 'ICJ_YgRXxgEMoCYRT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="px-4" data-aos="fade-right" data-aos-duration="1000">
                <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
               
                <form ref={form} onSubmit={sendEmail}>
                    <div className='mb-4'>
                        <label className="block mb-1">Name</label>
                        <input className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" type="text" name="from_name" />
                    </div>
                    <div className='mb-4'>
                        <label className="block mb-1">Email</label>
                        <input className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" type="email" name="user_email" />
                    </div>

                    <div className='mb-4'>
                        <label className="block mb-1">Message</label>
                        <textarea className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" name="message" />
                    </div>
                    <div className='mb-4'>
                        <input className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            <div
                className="flex justify-center order-[-1] md:order-2"
                data-aos="fade-left"
                data-aos-duration="1000"
            >
                <img
                    className="rounded-full h-4/5"
                    src="https://i.ibb.co/WPf0v4L/Chayon-adhikary-formal.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default ContactForm;
