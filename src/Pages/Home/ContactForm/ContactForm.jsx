// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const ContactForm = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         emailjs.sendForm(
//             'YOUR_SERVICE_ID',
//             'YOUR_TEMPLATE_ID',
//             e.target,
//             'YOUR_USER_ID'
//         )
//             .then((result) => {
//                 console.log(result.text);
//                 // Reset form fields after successful submission
//                 setName('');
//                 setEmail('');
//                 setMessage('');
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };

//     return (
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
//             <div className=" px-4">
//                 <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="name" className="block mb-1">Name</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block mb-1">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="message" className="block mb-1">Message</label>
//                         <textarea
//                             id="message"
//                             name="message"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
//                         ></textarea>
//                     </div>
//                     <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
//                 </form>
//             </div>
//             <div className='flex justify-center order-[-1] md:order-2'>
//                 <img className='rounded-full h-4/5' src="https://i.ibb.co/WPf0v4L/Chayon-adhikary-formal.png" alt="" />
//             </div>
//         </div>
//     );
// };

// export default ContactForm;




import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                // Reset form fields after successful submission
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id='contact' className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="px-4" data-aos="fade-right" data-aos-duration="1000">
                <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
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
