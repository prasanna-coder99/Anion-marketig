import React, { useState } from 'react';

const ClientValue = () => {
    // Data structure for the items on the right
    const valueItems = [
        { text: "Extensive Industry Expertise", description: "Our deep knowledge of the semiconductor and technology sectors ensures precise, effective marketing strategies tailored to complex industries. "},
        { text: "Cost-Effective Marketing ", description: "We maximize marketing impact with smart, efficient strategies, offering on-demand expertise while reducing fixed costs." },
        { text: "Flexible Engagement Models ",description: "Our adaptable approach allows clients to scale services based on their needs, ensuring seamless collaboration.​ " },
        { text: "Agile and Results-Driven ", description:" We move fast, iterate quickly, and focus on measurable outcomes that to meet business objectives." },
    ];

    
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleItem = (index) => {
    // Collapse if clicked again
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

    return (
        <section className= "py-10  lg:py-24 px-6 md:px-12 lg:px-24 lg:mt-16">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* === LEFT COLUMN: Text Content and Button === */}
                <div className="lg:pr-2">
                    <h2 className="text-4xl sm:text-5xl font-normal text-[#2C438A] mb-10 leading-normal ">
                        What Our Clients Value <br className="hidden sm:block " /> <span className='block mt-2 sm:mt-2 lg:mt-6'> About Us</span> 
                    </h2>
                    
                    <p className="text-[16px] text-[#444B46] mb-10 tracking-wider leading-loose">
                        Anion Marketing offers a  <strong className="font-semibold text-[#444B46]"> full spectrum of marketing services</strong>, from
                        comprehensive strategy development to targeted, high-impact
                        deliverables. Whether you need <strong className="font-semibold text-[#444B46]">end-to-end marketing support</strong> or a
                        <strong className="font-semibold font-OverusedGrotesk text-[#444B46]">single project execution</strong>, we adapt to your needs with precision and
                        industry expertise.
                    </p>

                    <button 
                        className="
                            bg-[#2C438A] text-white font-medium 
                            py-4 px-6
                            hover:bg-[#48cbe7] transition duration-300 tracking-wider
                        "
                    >
                        Our Expertise
                    </button>
                </div>

                {/* === RIGHT COLUMN: Value Items (Accordion Style) === */}
               
  <div className="mt-2">
  {valueItems.map((item, index) => (
    <div
      key={index}
      className={`flex flex-col py-6 ${
        index < valueItems.length - 1 ? "border-b border-gray-400" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <span className="text-[22px] font-normal text-gray-800 tracking-wider">
          {item.text}
        </span>

        {/* Plus Icon */}
        <div
            onClick={() => toggleItem(index)}
              className="bg-[#535a5d] w-8 h-8 rounded-full 
             flex items-center justify-center cursor-pointer flex-shrink-0">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 text-gray-300 transform transition-transform duration-700 
                ${expandedIndex === index ? "-rotate-45" : "rotate-0"}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
</div>


      </div>

      {/* Description text */}
      {expandedIndex === index && (
        <p className="mt-3 text-gray-600">{item.description}</p>
      )}
    </div>
  ))}
</div>


            </div>
        </section>
    );
};

export default ClientValue;