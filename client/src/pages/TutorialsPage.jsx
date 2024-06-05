import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const TutorialsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const tutorials = [
    { 
      title: 'Tutorial 1: Introduction to Blockchain', 
      description: 'This tutorial provides a beginner-friendly introduction to blockchain technology and will understand the core structure and technical mechanisms of Ethereum, about Blockchain transparency.', 
      link: 'https://www.investopedia.com/terms/b/blockchain.asp', 
      image: 'https://t3.ftcdn.net/jpg/01/96/96/86/360_F_196968684_zp8obttcJzlY4tWhFHzDGOTbPkdY0Q3p.jpg' 
    },
    { 
      title: 'Tutorial 2: Understanding Cryptocurrency', 
      description: 'In this tutorial, you\'ll delve into the world of cryptocurrency and its advantages.', 
      link: 'https://www.coindesk.com/learn/bitcoin-101/what-is-bitcoin', 
      image: 'https://t3.ftcdn.net/jpg/03/27/97/96/360_F_327979651_8nYIqRZE5RaYCs0f2KdXTAG1sdfRmgEl.jpg' 
    },
    { 
      title: 'Tutorial 3: Smart Contracts and Ethereum', 
      description: 'Learn about smart contracts, a key feature of blockchain technology, and their implementation on the Ethereum blockchain. Discover how smart contracts enable decentralized applications (DApps) and automate trustless transactions.', 
      link: "https://ethereum.org/en/developers/docs/smart-contracts/", 
      image: 'https://t3.ftcdn.net/jpg/02/23/02/16/360_F_223021623_NEqWEPFFWWbjrcE9V0cUclG5Sm6SdbXq.jpg' 
    },
    { 
      title: 'Tutorial 4: Decentralized Finance (DeFi)', 
      description: 'Explore the world of decentralized finance (DeFi) and its impact on traditional financial systems. Learn about lending, borrowing, trading, and earning interest using DeFi platforms and protocol', 
      link: "https://www.blockchain.com/defi", 
      image: 'https://media.istockphoto.com/id/1322244673/photo/defi-decentralized-finance-on-dark-blue-abstract-polygonal-background-concept-of-blockchain.jpg?s=612x612&w=0&k=20&c=V6DVcmJNcIAgxwML2qsnXQe5zZQFY826QtdUyKJZX0g=' 
    },
    { 
      title: 'Tutorial 5: Blockchain Use Cases in Healthcare', 
      description: 'Explore how blockchain technology is transforming the healthcare industry. Learn about use cases such as patient data management, supply chain transparency, and medical research collaboration facilitated by blockchain.', 
      link: "https://www.ibm.com/blockchain/industries/healthcare", 
      image: 'https://media.istockphoto.com/id/997784670/photo/pharma-logistician-using-iot-based-on-blockchain.jpg?s=612x612&w=0&k=20&c=mDTYaUEB4laXzb6AQGeHs12liZu-denwznwIgTlIDh8=' 
    },
    { 
      title: 'Tutorial 6: Blockchain Consensus Mechanisms', 
      description: 'This tutorial explores different blockchain consensus mechanisms, such as Proof of Work (PoW), Proof of Stake (PoS), and Delegated Proof of Stake (DPoS). Learn how these mechanisms achieve decentralization and consensus in blockchain networks.', 
      link: "https://www.ibm.com/cloud/learn/blockchain/consensus-mechanisms", 
      image: 'https://www.c-sharpcorner.com/article/consensus-mechanisms-in-blockchain/Images/Consensus%20Mechanism.png' 
    },
    { 
      title: 'Tutorial 7: Tokenization and Asset Digitization', 
      description: "Explore tokenization and its applications in asset digitization. Learn how tokenized assets represent ownership rights and can be traded on blockchain-based platforms. Discover use cases for tokenization in real estate, art, and finance.", 
      link: "https://www.gemini.com/cryptopedia/what-is-tokenization", 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxNDOHampgy8xfAhPGq4YymHTL2ZsaUmejg&s' 
    },
    { 
      title: 'Tutorial 8: Blockchain Scalability Solutions', 
      description: 'This tutorial discusses various scalability solutions for blockchain networks, including layer 2 solutions, sharding, and sidechains. Learn how these solutions address the scalability challenges faced by blockchain platforms.', 
      link: "https://www.binance.com/en/blog/421499824684902210/A-Deep-Dive-Into-Blockchain-Scalability-Solutions", 
      image: 'https://adminblog.upyo.io/wp-content/uploads/2023/05/blockchain-scalability-problem.png' 
    },
    { 
      title: 'Tutorial 9: Blockchain Scalability Solutions', 
      description: 'This tutorial discusses various scalability solutions for blockchain networks, including layer 2 solutions, sharding, and sidechains. Learn how these solutions address the scalability challenges faced by blockchain platforms.', 
      link: "https://www.binance.com/en/blog/421499824684902210/A-Deep-Dive-Into-Blockchain-Scalability-Solutions", 
      image: 'https://public.bnbstatic.com/static/images/common/dev-platform/20220419/bg/graph-1.png' 
    },
    { 
      title: 'Tutorial 10: Decentralized Finance (DeFi)', 
      description: "Explore the world of decentralized finance (DeFi) and its impact on traditional financial systems. Learn about lending, borrowing, trading, and earning interest using DeFi platforms and protocols", 
      link: "https://www.blockchain.com/defi", 
      image: 'https://d2hijos0r2m9rf.cloudfront.net/uploads/blog_image/blog_334.jpg' 
    },
    { 
      title: 'Tutorial 11: Blockchain Scalability Solutions', 
      description: 'This tutorial discusses various scalability solutions for blockchain networks, including layer 2 solutions, sharding, and sidechains. Learn how these solutions address the scalability challenges faced by blockchain platforms.', 
      link: "https://www.binance.com/en/blog/421499824684902210/A-Deep-Dive-Into-Blockchain-Scalability-Solutions", 
      image: 'https://adminblog.upyo.io/wp-content/uploads/2023/05/blockchain-scalability-problem.png' 
    },
  ];

  const filteredTutorials = tutorials.filter(tutorial =>
    tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    
      {/* Navbar */}
      <nav className="navbar bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* <Link to="/" className="text-white text-2xl font-bold">
            <img src="../../images/logo-color.png" alt="Logo" className="w-45 h-6 cursor-pointer mr-4 ml-2" />
          </Link> */}
          {/* <div className="search-box">
            <input
              type="text"
              placeholder="Search for tutorials..."
              className="search-input rounded-l-lg px-4 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none">Search</button>
          </div> */}

          <ul className="flex space-x-4">
            
          </ul>
        </div>
      </nav>

      {/* Tutorials Content */}
      <div className="tutorials-container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-white">Tutorials</h1>
        <p className="text-lg mb-8 h-5 text-white">Blockchain Tutorials for Beginners to Advanced Level</p>
        <ul className="space-y-6">
          {filteredTutorials.map((tutorial, index) => (
            <li key={index} className="rounded-lg shadow-md p-6 animate__animated animate__fadeIn">
              <div className="tutorial-info flex items-center">
                <div className="tutorial-image mr-4">
                  <img src={tutorial.image} alt={tutorial.title} className="w-32 h-32 object-cover rounded-lg" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-white sm:text-2xl">{tutorial.title}</h2>
                  <p className="text-gray-300">{tutorial.description}</p>
                  <a href={tutorial.link} className="text-blue-500 hover:underline mt-4 inline-block">Read More</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default TutorialsPage;
