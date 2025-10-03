import React from 'react';
import Navbar from '../src/Components/Navbar' 
import PlayVideo from './Components/PlayVideo';
import ClientValue from './Components/ClientValue';
import RecentWorkSection from './Components/RecentWorkSection';
import ContactusSection from './Components/ContactusSection';
import OurserviceSection from './Components/OurservicesSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#ece9e3]">
      
   
      <Navbar />
      

    
      <main className="bg-[#ece9e3]  text-center"> 
        <section id="home" className="bg-[#ece9e3] py-32 pb-16 text-center">
        <div className="w-full mx-auto mt-20">
          
         
          <h1 className="text-3xl sm:text-3xl md:text-6xl font-grotesk font-normal tracking-wide text-gray-800">
            A
            <span className="text-[#2c438a] font-OverusedGrotesk "> Semiconductor</span> and 
            <span className="text-[#2c438a] font-OverusedGrotesk"> Technology</span>
            <br className="hidden sm:block"/>
            <span className="block leading-[1.8]">
            B2B Marketing Agency
            </span>
          </h1>
      
          <p className="text-gray-600 text-lg sm:text-[12px] md:text-[22px] font-normal tracking-wider ">
            We Bridge the Gap between Technology and Marketing
          </p>

        </div>
        </section>
      </main>
      <PlayVideo/>
      <ClientValue/>
      <RecentWorkSection/>
      <ContactusSection/>
      <OurserviceSection/>
    
      <section className="bg-anion-dark h-80 w-full"></section>
     


    </div>
    
  );
}

export default App;