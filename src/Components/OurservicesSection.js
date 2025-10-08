import React from "react";
import { ArrowRight } from "lucide-react"; 
import OurServices from "./OurServices";

const ServicesData = [
  { title: "Strategic Consulting", description: "Leverage our expertise to create targeted marketing solutions that achieve your goals", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67b05aa57426b7ddc9b39d0e_16.svg" },
  { title: "Content Generation", description: "Engage audiences with compelling technical and thought leadership content", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67b16974c2272a4d343c9970_Content%20Generation.svg" },
  { title: "Marketing & Go-to-Market Services", description: "Boost your success with our comprehensive marketing strategies and execution support", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67b16974c2f5e8f4b7fdf672_Marketing%20%26%20Go-to-Market%20Services.svg" },
  { title: "Performance Marketing", description: "Optimizing end-to-end digital marketing campaigns including Web design, SEM, SEO, Social media, and ABM", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67b16974cbe620c976308f28_Performance%20Marketing.svg" },
  { title: "PR & Media Relations", description: "Build brand credibility and expand your brand reach through PR and media relations", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67dc284c1c73e6bf0f95d3b5_icon%203.1.svg" },
  { title: "Graphic Design & Branding", description: "Elevate your brand with expert design: 3D graphics, infographics, and impactful visuals", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67b16974c7dbbb1d46c6d904_Graphic%20Design%20%26%20Branding.svg" },
  { title: "Market Intelligence and Analytics", description: "Leverage data-driven insights to refine strategies, target markets, and drive success", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67b169743fcfacb48aa701d8_Market%20Intelligence%20and%20Analytics.svg" },
  { title: "Engineering & Project Management Services", description: "Achieve project success with Anion’s expert project management & engineering resources", iconSrc: "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67b16974807867cccd88327c_Engineering%20%26%20Project%20Management%20Services.svg" },
];

const ServiceCard = ({ service }) => (
  <div
    className="group relative p-8 h-full min-h-[300px] flex flex-col justify-between border-r border-b transition-all duration-300 overflow-hidden"
    style={{ borderColor: "#4a4d52" }}
  >
    {/* 🔹 TOP ROW: ICON + ARROW */}
    <div className="flex items-center justify-between mb-6">
      {/* Icon */}
      <img
        src={service.iconSrc}
        alt={`${service.title} Icon`}
        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/40x40/34393e/ffc74c?text=ICON";
        }}
      />

      {/* Arrow (appears on hover, beside icon) */}
      <ArrowRight
        size={32}
        className="text-white opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
      />
    </div>

    {/* 🔹 BOTTOM SECTION: TITLE + DESCRIPTION */}
       <div className="absolute  bottom-0">
      {/* Title (moves up on hover) */}
      <h3 className="text-[22px]  font-medium text-white transition-all duration-300 group-hover:-translate-y-8 tracking-wider ">
        {service.title}
      </h3>

      {/* Description (slides in below title on hover) */}
      {service.description && (
        <p className="text-[18px] text-white  opacity-0   transition-all duration-500 group-hover:opacity-100 mt-3 mb-4">
          {service.description}
        </p>
      )}
    </div>
  </div>
);


const OurserviceSection = () => {
  return (
    <div
      className="min-h-screen p-0 m-0"
      style={{ backgroundColor: "#34393e", fontFamily: "Inter, sans-serif" }}
    >
      <div className="w-full mx-auto py-20 lg:px-16 md:px-14 sm:px-6">
        <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-normal mb-12 px-4  lg:px-8 text-white">
          Our Services
        </h2>

        {/* ✅ Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-l "
          style={{ borderColor: "#4a4d52" }}
        >
          {ServicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16  px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="flex flex-col gap-6">
            <p
              className="text-[18px] leading-relaxed  "
              style={{ color: "#dcdcdc" }}
            >
              Anion helps semiconductor, electronics, engineering, and technology companies
              develop and market their organizations through a range of services.
            </p>
        
            <button
              className=" w-fit px-8 py-4 text-[16px]  bg-[#2c438a] hover:bg-[#48cbe7] font-medium text-white tracking-wider "
              
              
            >
              View More
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurserviceSection;
