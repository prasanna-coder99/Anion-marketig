import React from 'react';

const ServiceCard = ({ iconSrc, title, description }) => (
<section className="lg:py-4  sm:px-8">
 <div className=" mx-auto "> 
  <div className="flex-1 lg:py-8 ">
    
    <div className="w-24 h-22 mb-6 ">
      <img 
        src={iconSrc} 
        alt={`${title} Icon`} 
        className="w-full h-full object-contain" 
      />
    </div>

    {/* Title */}
    <h3 className="text-xl font-medium mb-3 text-gray-800 px-4">
      {title}
    </h3>

    {/* Description */}
    <p className="text-gray-600 leading-relaxed px-4 mb-4">
      {description}
    </p>
  </div>
  </div>
  </section>
);
const WhoWeServeSection = () => {
  // Array of data with placeholder URLs for the icons
  const serviceData = [
    {
      iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d81fb47811444080edaba3_IC%20Companies.svg",
      title: "Semiconductor Companies",
      description: "Fab and fabless chip providers and distributors",
    },
    {
      iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d81fb453524a4f6c58a2bf_Edge%20manufacturing.svg",
      title: "Edge Infrastructure Solution Providers",
      description: "Server, storage, networking, and cloud",
    },
    {
      iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d81fb4c07f85b1eeee56ca_Boards%20and%20PC.svg",
      title: "Board and PC Suppliers",
      description: "SOMs, SBCs, modules, and embedded PCs",
    },
    {
      iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d81fb4a1130eb007895f90_Software%20vendors%20new.svg",
      title: "Software Providers",
      description: "Operating systems, security, and application-level solutions",
    },
  ];
  return (
    // Outer container matching the background color and padding
    <section className=" py-16 px-4 lg:py-24 sm:px-6 lg:px-32">
      
      {/* Centered container  */}
      <div className=" mx-auto">
        
        {/* Title: "Who We Serve" */}
        <h2 className="text-4xl lg:text-5xl font-normal text-[#2C438A] mb-12 lg:mb-16 lg:-mx-12">
          Who We Serve
        </h2>
        
        {/* The main grid/flex container for the cards */}
     <div className="grid grid-cols-1 md:grid-cols-4 bg-white shadow-xl shadow-gray-100/50 overflow-hidden 
                border border-gray-300 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          {serviceData.map((service, index) => (
            // The ServiceCard component
            <ServiceCard 
              key={index}
              iconSrc={service.iconSrc} 
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default WhoWeServeSection;