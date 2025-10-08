import React from 'react';

// Define the data for the cards, including the specific icon URLs
const workData = [
    {
        iconUrl: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c1506f80ef9ee2a714e562_Market%20Research%20yellow.svg",
        title: "Market Research",
        description: "Behavior and trend research into how engineers learn, trust, and gather information.",
        isCta: false,
    },
    {
        iconUrl: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c14f43e1481be45bd0be3f_Strategic%20Consulting%2028-02-25.svg",
        title: "Strategic Consulting",
        description: "Fully outsourced marketing strategy and execution for a European company.",
        isCta: false,
    },
    {
        iconUrl: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c14f431c685961ef13c3b2_Multi%20channel%2028-02-25.svg",
        title: "Multi-Channel",
        description: "Multi-channel performance marketing for Power Management ICs.",
        isCta: false,
    },
    {
        description: "See examples of how Anion Marketing helped semiconductor and tech brands with their marketing initiatives.",
        isCta: true, 
    },
];

// Reusable Card Component
const WorkCard = ({ data }) => {
    // Determine card-specific styles
    const cardClasses = data.isCta
        ? "flex flex-col justify-between p-6 text-neutral-700 bg-white border-t border-l border-r border-gray-200" // CTA card styling
        : "p-14 pl-4 text-neutral-700 bg-white border-r border-t border-l border-b border-gray-200 border-neutral-200 lg:border-r border-b-neutral-200 border-b lg:border-b-0 tracking-wider"; // Standard card styling
    
  

    return (
        <div 
            className={`${cardClasses}  transition-all duration-300 md:border-r md:border-b 
                md:last:border-b-0 md:even:border-r-0 lg:last:border-r-0 
                lg:border-r lg:border-b-0 lg:last:border-r-0 
                lg:[&:nth-child(4)]:border-r-0 lg:[&:nth-child(2)]:border-r`} // Complex but precise border control
        >
            {!data.isCta && (
                <>
                    {/* Icon section */}
                    <div className="mb-4 h-12 flex items-center">
                        <img src={data.iconUrl} alt={`${data.title} icon`} className="w-14 h-12 object-contain mb-14 " />
                    </div>
                    <h3 className="text-xl font-normal mb-4 mt-10 text-black">{data.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{data.description}</p>
                </>
            )}
            
            {data.isCta && (
                <>
                    <p className="text-[16px] mt-10 font-normal leading-relaxed  tracking-wider mb-6">
                        {data.description}
                    </p>
                    <a 
                        href="#" 
                        className="self-start inline-block px-10 py-5 text-sm font-normal text-white bg-[#2c438a] hover:bg-[#48cbe7] transition duration-300 "
                    >
                        View More
                    </a>
                </>
            )}
        </div>
    );
};

// Main Component
const RecentWorkSection = () => {
    return (
        <section className="px-2 lg:py-16 lg:px-16 ">
            <div className="w-full mx-auto  lg:px-4 py-8 md:py-16 ">
                {/* Section Title */}
                <h2 className="text-4xl lg:text-5xl md:text-3xl font-normal text-[#4a5a7b] mb-10 md:mb-14 lg:text-4xl">
                    Our Recent Work
                </h2>

                {/* Grid Container for Cards */}
                <div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white border border-[#ece9e3]  overflow-hidden"
                >
                    {workData.map((item, index) => (
                        <WorkCard key={index} data={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentWorkSection;