import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../src/Components/Navbar";
import CookieConsentBanner from "./Components/CookieConsentBanner";
import PlayVideo from "./Components/PlayVideo";
import ExpertiseSection from "./Components/ExpertiseSection";
import WorkPage from './Components/WorkPage'
import ClientValue from "./Components/ClientValue";
import RecentWorkSection from "./Components/RecentWorkSection";
import ContactusSection from "./Components/ContactusSection";
import OurserviceSection from "./Components/OurservicesSection";
import WhoWeServeSection from "./Components/WhoWeServiceSection";
import AboutUsSection from "./Components/AboutUsSection";
import FooterSection from "./Components/FooterSection";

import "./App.css";
import OurServices from "./Components/OurServices";

// 🏠 Home Page
function HomePage() {
  return (
    <div className="min-h-screen bg-[#ece9e3]">
      <main className="bg-[#ece9e3] text-center">
        <section id="home" className="bg-[#ece9e3] py-32 pb-16 text-center">
          <div className="w-full mx-auto mt-20">
            <h1 className="text-3xl sm:text-3xl md:text-6xl font-grotesk font-normal tracking-wide text-gray-800">
              A
              <span className="text-[#2c438a] font-OverusedGrotesk">
                {" "}
                Semiconductor
              </span>{" "}
              and
              <span className="text-[#2c438a] font-OverusedGrotesk">
                {" "}
                Technology
              </span>
              <br className="hidden sm:block" />
              <span className="block leading-[1.8]">B2B Marketing Agency</span>
            </h1>

            <p className="sm:px-4 text-gray-600 text-[14px] sm:text-[12px] md:text-[22px] font-normal tracking-wider ">
              We Bridge the Gap between Technology and Marketing
            </p>
          </div>
        </section>
      </main>

      <PlayVideo />
      <ClientValue />
      <RecentWorkSection />
      <ContactusSection />
      <OurserviceSection />
      <WhoWeServeSection />
      <AboutUsSection />
     

      <section className="bg-anion-dark h-80 w-full"></section>
    </div>
  );
}

// 📄 Expertise Page (separate)
function ExpertisePage() {
  return (
    <div className=" bg-[#ece9e3] px-12 pb-24 min-h-screen">
      <h1 className="py-24"></h1>
      <ExpertiseSection />
     
      
    </div>
  );
}

function WorkSection() {
  return (
    <div className="min-h-screen bg-[#ece9e3]">
      <h1 className="text-4xl font-bold text-center py-20"></h1>
      <WorkPage />
    </div>
  );
}
// 📄 Services Page (separate)
function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#ece9e3">
      <h1 className="text-4xl font-bold text-center py-20"></h1>
     <OurServices/>
    </div>
  );
}

// 📄 About Page
function AboutPage() {
  return (
    <div className="min-h-screen bg-[#ece9e3]">
      <h1 className="text-4xl font-bold text-center py-20">About Us</h1>
      <AboutUsSection />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <CookieConsentBanner />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/work" element={<WorkSection />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Add more pages here */}
      </Routes>
      <FooterSection />
    </Router>
  );
}

export default App;
