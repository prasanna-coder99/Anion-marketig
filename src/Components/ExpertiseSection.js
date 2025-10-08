import React, { useState } from 'react';

import FooterSection from './FooterSection';

// --- DATA SET 1: Technology Expertise (techAreas from user input) ---
const technologyAreas = [
    {
        title: "Processing",
        description: "GPUs, processors (x86 and Arm), FPGAs, and SoCs",
        imagePlaceholder: "Processing+Chips",
        imageUrl:"https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52aac_processing.png"
    },
    {
        title: "Analog and Power",
        description: "Signal chain components including sensors, signal conditioners, isolation, data converters, and power discretes/chips/modules",
        imagePlaceholder: "Circuit+Board",
        imageUrl:"https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52aae_Analog.png"
    },
    {
        title: "High-Power",
        description: "Wide-bandgap (GaN and SiC) and high-power semiconductors",
        imagePlaceholder: "Server+Rack",
        imageUrl:"https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52aad_high%20power.png"
    },
    {
        title: "Connectivity",
        description: "Wired (Ethernet, 10BASE-T, and other industrial protocols) and wireless connectivity (Wi-Fi, Bluetooth, and 5G)",
        imagePlaceholder: "Network+Cables",
        imageUrl:"https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab1_connectivity.png"
    },
    {
        title: "Cyber Security",
        description: "Hardware (root-of-trust, trusted platform module, authentication, etc.) and software-based solutions to ensure data security at rest and in motion",
        imagePlaceholder: "Binary+Code",
        imageUrl:"https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab3_cyber%20security.png"
    },
    {
        title: "Operating Systems & Software",
        description: "Embedded commercial and open-source operating systems, development frameworks, and applications software",
        imagePlaceholder: "Desktop+Monitor",
        imageUrl:"https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52aaf_operating%20system.png"
    },
    {
        title: "Edge-to-Data Center",
        description: "Industrial PCs and gateways, servers, and storage appliances",
        imagePlaceholder: "Server+Interaction",
        imageUrl:"https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab0_edge%20to%20datacenter.png"
    },
    {
        title: "Services",
        description: "Engineering, supply chain, manufacturing, and integration",
        imagePlaceholder: "3D+Printer",
        imageUrl:"https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab2_services.png"
    }
];

// --- DATA SET 2: End Market Expertise (marketAreas from user input) ---
const endMarketAreas = [
    {
        title: "Artificial Intelligence at the Edge",
        description: "Machine vision, generative AI, autonomous robotics, and digital twins",
        imageUrl: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52aba_Artificial%20Intelligence%20at%20the%20Edge.png"
    },
    {
        title: "Clean Energy Solutions",
        description: "EVs, charging infrastructure, energy storage, battery management systems, and smart buildings and homes",
        imageUrl: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab8_Clean%20Energy%20Solutions.png"
    },
    {
        title: "Industrial Automation", 
        description: "Robotics and digital factories",
        imageUrl: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52abb_Industrial%20Automation.png"
    },
    {
        title: "Transportation",
        description: "Automotive and connected logistics",
        imageUrl: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab5_Enterprise.png"
    },
    {
        title: "Healthcare",
        description: "Medical devices, wearables, diagnostics, and healthcare infrastructure",
        imageUrl: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab7_Healthcare.png"
    },
    {
        title: "Enterprise",
        description: "Datacenter, on-premises compute and storage, and cloud",
        imageUrl: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab5_Enterprise.png"
    },
    {
        title: "Security",
        description: "Hardware and software cybersecurity solutions, and physical security",
        imageUrl: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab6_Security.png"
    },
    {
        title: "Retail",
        description:"Connected retail, digital signage, and warehouse management",
        imageUrl: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/679b17668c8048d0dbb52ab4_Retail.png"
    }
];

// --- Helper Component: Card ---
const Card = ({ data }) => {
    
    const imageSource = data.imageUrl;

    return (
        <div className="bg-white flex flex-col">
            {/* Image Area */}
            <div className="h-[250px] w-full overflow-hidden">
                <img
                    src={imageSource}
                    alt={`${data.title} illustration`}
                    className="h-40 w-full object-cover" 
                    onError={(e) => { 
                        e.currentTarget.onerror = null; 
                        e.currentTarget.src = 'https://placehold.co/400x250/E5E7EB/4B5563?text=Image+Error'; 
                    }}
                />
            </div>

            {/* Text Area */}
            <div className="px-2  lg:px-6 lg:py-2 flex-1">
                <h2 className="text-xl text-[#121619] font-medium mb-5">
                    {data.title}
                </h2>
                <p className="text-normal text-[#444b46] leading-relaxed ">
                    {data.description}
                </p>
            </div>
        </div>
    );
};


const ExpertiseSection = () => {
    // State to track which expertise tab is active: 'tech' or 'market'
    const [activeTab, setActiveTab] = useState("tech");

    // Determine which data to show
    const areas = activeTab === "tech" ? technologyAreas : endMarketAreas;

    const TECH_ACTIVE_COLOR = '#ff9900';
    const MARKET_ACTIVE_COLOR = '#48cbe7'; 
    

    // Conditional content for the description paragraph
    const descriptionContent = activeTab === "tech" ? (
        <p className="text-[#444b46] pt-[46px] tracking-wider">
            Many of our team members are engineers and marketing communication experts with
            extensive experience in both semiconductor and technology fields. This expertise
            spans the full spectrum of technologies in the field of semiconductors, embedded
            boards, edge infrastructure, and software.
        </p>
    ) : (
        <p className="text-[#444b46] mt-14 tracking-wider">
            At Anion Marketing, we work on projects across a diverse range of industries and
            applications. This wide-ranging experience allows us to bring a unique perspective
            to every project, ensuring we can effectively tailor marketing strategies to your
            specific needs.
        </p>
    );

    /**
     * Helper function to generate dynamic classes for the tab buttons
     */
    const getTabClass = (tabName) => {
        const isActive = activeTab === tabName;
        const activeColor = tabName === 'tech' ? TECH_ACTIVE_COLOR : MARKET_ACTIVE_COLOR;
        
        return {
            textClasses: `text-xl font-normal cursor-pointer pb-2 transition duration-200 mr-8`,
            textStyle: { 
                color: isActive 
                    ? (tabName === 'market' ? '#48cbe7' : '#2c438a')
                    : (tabName === 'market' ? '#48cbe7' : '#2c438a')
            },
            
            // Dynamic Border Class
            borderClasses: isActive 
                ? `border-b-4` 
                : `border-b-4 border-transparent`, 

            activeBorderColor: tabName === 'tech' ? TECH_ACTIVE_COLOR : MARKET_ACTIVE_COLOR
        };
    };

    const techClasses = getTabClass('tech');
    const marketClasses = getTabClass('market');

    return (
        // The main container for the entire section
          <div className="pb-6 h-full min:h-screen"> 
            
        
<div className=" min:h-screen flex flex-col ">
  {/* Tabs */}
  <div className="flex lg:w-[600px] w-full justify-between">
    {/* Tech Tab */}
    <div
      className={`flex-1 text-base  lg:text-xl cursor-pointer pb-2  transition-colors duration-300 tracking-wider ${
        activeTab === "tech" ? "text-[#48cbe7]" : "text-[#2c438a]"
      }`}
      onClick={() => setActiveTab("tech")}
    >
      Our Technology Expertise
    </div>

    {/* Market Tab */}
    <div
      className={`flex-1 text-base  lg:text-xl cursor-pointer pb-2 font-normal transition-colors duration-300 tracking-wider ${
        activeTab === "market" ? "text-[#48cbe7]" : "text-[#2c438a]"
      }`}
      onClick={() => setActiveTab("market")}
    >
      Our End Market Expertise
    </div>
  </div>

  {/* Underline with 2 halves */}
  <div className="w-full lg:w-[600px] h-[1.5px] flex mt-1">
    {/* Left Half (Orange) */}
    <div
      className={`flex-1 transition-colors duration-300 ${
        activeTab === "tech" ? "bg-[#ffbc4d]" : "bg-[#ffbc4d]"
      }`}
    ></div>

    {/* Right Half (Blue) */}
    <div
      className={`flex-1 transition-colors duration-300 ${
        activeTab === "market" ? "bg-[#b6c4d3]" : "bg-[#b6c4d3]"
      }`}
    ></div>
  </div>
</div>



            {/* Description Content */}
            <div className="mt-8  pb-8">
                {descriptionContent}
            </div>

            {/* Cards Section (Grid)*/} 
    <div className="pt-[20px]">
  <div
    id="tech-grid"
    className="
        w-full
      max-w-[1400px]
      mx-auto
      grid
      gap-8
      mt-8
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
      
    "
  >
    {areas.map((area, index) => (
      <Card key={index} data={area} />
    ))}
  </div>
</div>

        
   </ div>
            
        
        
    );
};



export default ExpertiseSection;