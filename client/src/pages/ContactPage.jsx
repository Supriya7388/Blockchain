import React, { useState } from 'react';
import { GrMail } from 'react-icons/gr';
import { AiFillPhone } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';
import MarketNavbar from './MarketNavbar';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send contact form data to backend or handle locally
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b text-white py-10">
    <MarketNavbar />
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-3/4 lg:w-1/2">
        <div className="flex flex-col items-center">
          <GrMail className="text-4xl mb-2" />
          <p className="mb-1">Email</p>
          <p>contact@decentralx.com</p>
        </div>
        <div className="flex flex-col items-center">
          <AiFillPhone className="text-4xl mb-2" />
          <p className="mb-1">Phone</p>
          <p>+923 426 7890</p>
        </div>
        <div className="flex flex-col items-center">
          <FaTelegramPlane className="text-4xl mb-2" />
          <p className="mb-1">Telegram</p>
          <p>@decentralx.com</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full md:w-3/4 lg:w-1/2 mt-10">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4  py-2 mb-4 text-black bg-white rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full text-black px-4 py-2 mb-4 bg-white rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full text-black px-4 py-2 mb-4 bg-white rounded-md shadow-md focus:outline-none focus:ring focus:ring-blue-300 resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md shadow-md text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none"
        >
          <RiSendPlaneFill className="mr-2" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
