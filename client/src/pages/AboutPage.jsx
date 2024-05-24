
import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mt-14 text-blue-500">About decentralx</h1>
        <p className=" mt-19 text-white">Your Trusted Source for Blockchain News and Insights</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Our Mission</h2>
        <p className="text-lg mb-6 text-white">
          At Decentralx, we are passionate about providing our users with the latest news, insights, and analysis
          from the world of blockchain and cryptocurrency. Our mission is to empower individuals and businesses
          with the knowledge they need to navigate the rapidly evolving landscape of decentralized technologies.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">What Sets Us Apart</h2>
        <p className="text-lg mb-6 text-white">
          With a team of experienced journalists, researchers, and industry experts, we strive to deliver accurate,
          unbiased, and informative content that educates and inspires. We believe in the transformative potential
          of blockchain technology and aim to be your trusted source for staying informed and ahead of the curve.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">Our Commitment</h2>
        <p className="text-lg mb-6 text-white">
          Integrity, transparency, and excellence are at the core of everything we do. We are committed to upholding
          the highest standards of journalism and ethical conduct, ensuring that our readers can trust the information
          they find on our platform. Your satisfaction and trust are our top priorities.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-blue text-blue-500">Our Vision</h2>
        <p className="text-lg mb-6 text-white">
          We envision a future where blockchain technology revolutionizes industries, disrupts traditional systems,
          and empowers individuals to take control of their financial and digital identities. Through our platform,
          we aim to facilitate this transformation by providing access to reliable information, fostering
          collaboration, and driving innovation in the blockchain ecosystem.
        </p>
        <div className="flex justify-center items-center flex-col mt-8">
          <p className="text-lg mb-2 text-white">Contact us at:</p>
          <p className="text-blue-500 font-semibold mb-4">info@decentralx.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
