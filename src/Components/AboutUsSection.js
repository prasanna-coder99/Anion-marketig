import React from 'react';

// --- Main About Us Section Component ---
const AboutUsSection = ({ videoLink }) => { 
  return (
    <section className="flex flex-col lg:flex-row min-h-[600px] max-w-full">
      
      {/* LEFT SIDE: Text Content*/}
      <div className="lg:w-1/2  p-8 lg:p-20 flex flex-col justify-center">
        <h2 className="text-4xl sm:text-4xl lg:text-5xl font-normal text-[#2C438A] mb-8 leading-tight">
          About Us
        </h2>
        <p className="text-[#444B46] text-lg lg:text-[18px] leading-relaxed mb-8 pr-4">
          Semiconductor companies face unique marketing challenges. From
          decoding intricate product details to reaching a highly specialized
          audience, effective marketing is crucial for success. Anion Marketing
          specializes in bridging the gap between complex technology and
          compelling storytelling.
        </p>
        <button className="bg-[#2c438a] hover:bg-[#48cbe7] text-white font-medium  py-5 px-8 w-fit  duration-200 ">
          About Us
        </button>
      </div>

      {/* RIGHT SIDE: Text Statement  */}
      <div className="lg:w-2/4 relative overflow-hidden flex flex-col justify-center items-center p-4 lg:p-12 text-center">
        <div className="relative z-10 w-full  aspect-video bg-gray-800  flex items-center justify-center mt-12">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
           playsInline>
          <source src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c%2F67ed4f8c88827a2127a79245_Anion%2010%20Anniversary%20Video%20Apr%2002_N-transcode.mp4" type="video/mp4" />
         <source src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c%2F67ed4f8c88827a2127a79245_Anion%2010%20Anniversary%20Video%20Apr%2002_N-transcode.webm" type="video/webm" />
          </video>

        </div>
        
      </div>
    </section>
  );
};

export default AboutUsSection;