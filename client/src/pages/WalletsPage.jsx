import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './WalletsPage.css'; // Import CSS file

const WalletsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="wallets-container">
        <h1 className="wallets-heading">Blockchain Wallet Options</h1>
        <ul className="wallets-list">
          <li className="wallets-list-item">
            <img src="https://kriptomat.io/wp-content/uploads/2022/01/blockchain-wallet.jpg" alt="Blockchain Wallet" className="wallet-image" />
            <div className="wallets-info">
              <h2 className="wallet-name">Blockchain Wallet</h2>
              <p className="wallet-description">Blockchain Wallet is a cryptocurrency wallet that allows you to buy, sell, exchange, and hold various cryptocurrencies including Bitcoin, Ethereum, and Bitcoin Cash.</p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.blockchain.wallet" className="download-link">
              (Download)
            </a>
          </li>
          <li className="wallets-list-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZaVpfhv3kgZA46GoqfVNIFhR6pXIdX4_Rg&s" alt="MetaMask" className="wallet-image" />
            <div className="wallets-info">
              <h2 className="wallet-name">MetaMask</h2>
              <p className="wallet-description">MetaMask is a cryptocurrency wallet and a gateway to blockchain applications. It allows you to manage your Ethereum wallet and interact with decentralized applications (DApps).</p>
            </div>
            <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" className="download-link">
              (Download)
            </a>
          </li>
          <li className="wallets-list-item">
            <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/73/f0/a8/73f0a86f-d4e1-2bf2-707c-e633d486606e/AppIcon-0-0-1x_U007ephone-0-85-220.png/1200x630wa.png" alt="Coinbase Wallet" className="wallet-image" />
            <div className="wallets-info">
              <h2 className="wallet-name">Coinbase Wallet</h2>
              <p className="wallet-description">Coinbase Wallet is a cryptocurrency wallet and decentralized application browser (DApp). It allows you to securely store, send, and receive cryptocurrencies.</p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.coinbase.android" className="download-link">
              (Download)
            </a>
          </li>
          <li className="wallets-list-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNz3Jtcu-hDcvWDOfyxeEBpEzqmfQ7qfxzCg&s" alt="Trust Wallet" className="wallet-image" />
            <div className="wallets-info">
              <h2 className="wallet-name">Trust Wallet</h2>
              <p className="wallet-description">Trust Wallet is a mobile wallet app that allows you to securely store a wide range of cryptocurrencies. Developed by ChatGPT, it provides a simple and intuitive interface for managing your digital assets.</p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp" className="download-link">
              (Download)
            </a>
          </li>
          <li className="wallets-list-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXETByE_GHmva_bzyjGhoczEF7g8YpL11cA&s" alt="Exodus Wallet" className="wallet-image" />
            <div className="wallets-info">
              <h2 className="wallet-name">Exodus Wallet</h2>
              <p className="wallet-description">Exodus Wallet is a desktop and mobile wallet with a built-in exchange feature. Developed by ChatGPT, it supports a wide range of cryptocurrencies and offers easy-to-use tools for managing your digital assets.</p>
            </div>
            <a href="https://www.exodus.com/download/" className="download-link">
              (Download)
            </a>
          </li>
          <li className="wallets-list-item">
            <img src="https://masterthecrypto.com/wp-content/uploads/2019/12/Jaxx.jpg" alt="Jaxx Wallet" className="wallet-image" />
            <div className="wallets-info">
              <h2 className="wallet-name">Jaxx Wallet</h2>
              <p className="wallet-description">Jaxx Wallet is a multi-platform cryptocurrency wallet developed by ChatGPT. It supports multiple cryptocurrencies and offers a user-friendly interface for managing your digital assets.</p>
            </div>
            <a href="https://jaxx.io/downloads.html" className="download-link">
              (Download)
            </a>
          </li>
          <li className="wallets-list-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAXDJwJiWjxv_5TQAged9nOibYOseESwa7w&s" alt="Ledger Wallet" className="wallet-image" />
            <div className="wallets-info">
              <h2 className="wallet-name">Ledger Wallet</h2>
              <p className="wallet-description">Ledger Wallet is a cryptocurrency wallet and decentralized application browser (DApp). It allows you to securely store, send, and receive cryptocurrencies.</p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.coinbase.android" className="download-link">
              (Download)
            </a>
          </li>
          <li className="wallets-list-item">
            <img src="https://bitcoinmagazine.com/.image/t_share/MTc5Mjk3NzkzMzI2MTMwODgz/brain-wallet.jpg" alt="Brain Wallet" className="wallet-image" />
            <div className="wallets-info">
              <h2 className="wallet-name">Brain Wallet</h2>
              <p className="wallet-description">Brain Wallet is a cryptocurrency wallet that allows you to buy, sell, exchange, and hold various cryptocurrencies including Bitcoin, Ethereum, and Bitcoin Cash.</p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.blockchain.wallet" className="download-link">
              (Download)
            </a>
          </li>
          <li className="wallets-list-item">
            <img src="https://101blockchains.com/wp-content/uploads/2021/11/bitgo-cryptocurrency-wallet-removebg-preview.png" alt="Software Wallet" className="wallet-image" />
            <div className="wallets-info">
              <h2 className="wallet-name">Software Wallet</h2>
              <p className="wallet-description">Software Wallet is a cryptocurrency wallet and decentralized application browser (DApp). It allows you to securely store, send, and receive cryptocurrencies.</p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.coinbase.android" className="download-link">
              (Download)
            </a>
          </li>
          <li className="wallets-list-item">
            <img src="https://i0.wp.com/bdtechtalks.com/wp-content/uploads/2021/03/Bitcoin-hardware-wallets.jpg?ssl=1" alt="Hardware Wallet" className="wallet-image" />
            <div className="wallets-info">
              <h2 className="wallet-name">Hardware Wallet</h2>
              <p className="wallet-description">Hardware Wallet is a cryptocurrency wallet and decentralized application browser (DApp). It allows you to securely store, send, and receive cryptocurrencies.</p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.coinbase.android" className="download-link">
              (Download)
            </a>
          </li>
          <li className="wallets-list-item">
            <img src="https://play-lh.googleusercontent.com/8aXTeaP1Sm29QPQ1IWacpgBRMpyCQLlVtA5QQ0DhN30d-R0fCdrCHlbQUZvdg2bJGvQ" alt="Defi Wallet" className="wallet-image" />
            <div className="wallets-info">
              <h2 className="wallet-name">Defi Wallet</h2>
              <p className="wallet-description">Defi Wallet is a cryptocurrency wallet and decentralized application browser (DApp). It allows you to securely store, send, and receive cryptocurrencies.</p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.coinbase.android" className="download-link">
              (Download)
            </a>
          </li>
          <li className="wallets-list-item">
            <img src="https://www.usatoday.com/money/blueprint/images/uploads/2023/04/01013552/what-is-a-bitcoin-wallet-e1690868199765.jpg" alt="Defi Wallet" className="wallet-image" />
            <div className="wallets-info">
              <h2 className="wallet-name">Bitcoin  Wallet</h2>
              <p className="wallet-description">Defi Wallet is a cryptocurrency wallet and decentralized application browser (DApp). It allows you to securely store, send, and receive cryptocurrencies.</p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.coinbase.android" className="download-link">
              (Download)
            </a>
          </li>
          <li className="wallets-list-item">
            <img src="https://corefy.com/user/pages/02.glossary/mobile-wallet/Mobile_wallet.svg" alt="Mobile Wallet" className="wallet-image" />
            <div className="wallets-info">
              <h2 className="wallet-name">Mobile Wallet</h2>
              <p className="wallet-description">Mobile Wallet is a cryptocurrency wallet and decentralized application browser (DApp). It allows you to securely store, send, and receive cryptocurrencies.</p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.coinbase.android" className="download-link">
              (Download)
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default WalletsPage;
