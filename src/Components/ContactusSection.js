import React from 'react';




const MarketingPoints = [
  {
    title: 'Be Found',
    description: 'Optimize for AI-based search and content platforms.',
  },
  {
    title: 'Go Multi-Channel',
    description: 'Integrate audience behavior insights with proven marketing strategies.',
  },
  {
    title: 'Stay Authentic',
    description: 'Craft a brand voice that stands out in an AI-saturated world.',
  },
];

const App = () => {
 
  const graphicUrl = "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c712d62c21396b2e1bc3d6_Ai%20Animatiion%20home%20page%20(2)%20(1)%201.svg";

  return (
    // Set the overall page background to the off-white color
    <div className="min-h-screen">
      
      {/* Main Section - The background color now spans the full width of the screen */}
      <section 
        className="rounded-none " 
       
      >
     
        <div className="w-full mx-auto px-4 sm:px-2 lg:px-8">
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start px-2  md:p-16 lg:p-20"> {/* Padding applied to content inside the max-width container */}

            {/* Left Content Column */}
            <div className="space-y-2">
              {/* Headline */}
              <h1 
                className="text-2xl sm:text-4xl lg:text-5xl font-normal leading-sung tracking-wider text-[#2C438A]"
              
              >
                Stay Visible and Authentic in the Age of AI with Anion Marketing
              </h1>

              {/* Description */}
              <p className="sm:text-14  lg:text-[18px] text-[#444B46] leading-sung pt-3 sm:pt-1">
                AI is reshaping marketing—Anion Marketing helps you stay ahead by optimizing AI-driven search visibility, multi-channel strategies, and authentic brand messaging.
              </p>

              {/* Key Bullet Points - Exact match for disc style and indentation */}
              <ul className="list-disc list-outside space-y-3 pt-4 pl-5 text-gray-700">
                {MarketingPoints.map((point, index) => (
                  <li key={index}>
                    <p className="inline">
                      <strong className='color-[#444B46]'>{point.title}</strong> 
                      <span className="ml-1 text-[#444B46]">— {point.description}</span>
                    </p>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="pt-6 px-14 sm:px-14 lg:px-8">
                <button 
                  className="px-8 py-3 text-lg font-normal text-white transition duration-200 bg-[#2c438a] hover:bg-[#48cbe7] py-4 "
                  
                  onClick={() => console.log('Contact Us Clicked')}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Graphic Column */}
            <div className="flex justify-center items-center md:pt-0">
              <img
                src={graphicUrl}
                alt="Abstract AI Network Graphic"
                className="w-full  h-auto transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
              
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;
