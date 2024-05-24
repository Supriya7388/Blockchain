import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import MarketPage from "./pages/MarketPage";
import TutorialsPage from "./pages/TutorialsPage";
import WalletsPage from "./pages/WalletsPage";
import AboutPage from "./pages/AboutPage";
import MarketNavbar from "./pages/MarketNavbar"; // Import MarketNavbar
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
const App = () => (
  <Router>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Welcome />
              <Services />
              <Transactions />
        <Footer />
            </>
          } />
          <Route path="/market" element={
            <>
              <MarketNavbar />
              <MarketPage />
            </>
          } />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/wallets" element={<WalletsPage />} />
          <Route path="/about" element={
            <>
              <MarketNavbar />
              <AboutPage />
            </>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  </Router>
)

export default App;
