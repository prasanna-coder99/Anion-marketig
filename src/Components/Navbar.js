import React, { useEffect, useState} from 'react';
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
 const navLinks = [
    { name: "Home", path: "/" },
    { name: "Expertise", path: "/expertise" },
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Market Reports", path: "/market-reports" },
    { name: "About", path: "/about" },
  ];
  const [active, setActive] = useState("Home"); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
 useEffect(() => {
        const currentLink = navLinks.find(link => link.path === location.pathname);
        if (currentLink) {
            setActive(currentLink.name);
        }
        // This effect runs on location.pathname change, ensuring routing updates the state.
    }, [location.pathname]);  
 

  

  // The logo URL 
  const logoUrl = "https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c55925a027a01c6cd6b9ef_Anion%20logo%20normal%2C%20no%20quote.svg";
  const handleNavLinkClick = (name) => {
    setActive(name);
    setIsMenuOpen(false); // Close menu on click
  };
  const CloseIcon = ({ className = "w-8 h-8", color = "#000" }) => (
    <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
  );

  const HamburgerIcon = ({ className = "w-8 h-8", color = "#000" }) => (
    <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  );

  return (
    // Outer container for the whole navbar area (white background)
  <header className=" fixed top-0 left-0 w-full z-50 bg-[#ece9e3] px-2 py-4"> 
  <div className="w-full mx-auto bg-white pl-0 pr-0  md:px-6  ">
    <div className="flex justify-between items-center h-24">
      
      {/* Logo Section */}
      <div className="flex items-center  md:mr-4  sm:px-2 flex-shrink-0 ">
        <img
          src={logoUrl}
          alt="Anion Marketing Logo"
          className="h-14 w-[180px] lg:w-full  sm:h-10 sm:w-[150px] md:w-14 md:h-14  sm:h-6  lg:h-[60px]"
        />
      </div>
      <div className="flex items-center md:ml-auto">
      {/* Navigation Links */}
     <nav className="hidden md:flex  md:space-x-4 lg:space-x-16 items-center ">
    {navLinks.map((link) => {
    const id = link.name.toLowerCase().replace(" ", "-");
   const isActive =
  active === link.name ||
  (link.name === "Home" && !active); 


    return (
        <Link
            key={link.name}
            to={link.path}
            className={`
                relative z-10 text-sm md:text-[16px] font-normal font-grotesk 
                px-1 py-2  
                rounded-md tracking-wider transition-colors duration-200 
                 ${location.pathname === link.path ? "text-[#2C438A]" : "text-gray-500"}
            `}
        >
            {link.name}
        
            {isActive && (
               <span
               className="absolute left-1/2 bottom-0 transform -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[#2c438a]"></span>

            )}
        </Link> 
    );
})}
</nav>
{/* Contact Us Button */}
          <div className="hidden md:flex md:ml-4 ">
           <button
          className="lg:w-40 h-16 text-sm md:w-32 md:text-base font-medium text-white bg-[#2c438a] hover:bg-[#48cbe7] transition duration-150 flex items-center justify-center tracking-wide"
           > 
          Contact Us
          </button>

      
          </div>
         <button 
           className="md:hidden p-2 text-gray-800 mr-4 z-[60]"
           onClick={() => setIsMenuOpen(prev => !prev)}  // <-- toggle instead of always true
             >
      {isMenuOpen ? <CloseIcon color="#2C438A" /> : <HamburgerIcon color="#2C438A" />}
           </button> 
   
            {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#ece9e3] flex flex-col items-center md:hidden shadow-lg">
            {navLinks.map((link) => {
              const id = link.name.toLowerCase().replace(" ", "-");
              const isActive = active === link.name;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavLinkClick(link.name)}
                  className={`block w-full text-center py-4 text-lg font-medium transition-colors duration-200 
                     ${location.pathname === link.path ? "text-[#2C438A]" : "text-gray-700"
                  } hover:bg-[#dcd8d3]`}
                >
                  {link.name}
                </Link>
              );
            })}
            {/* Contact Button (Mobile) */}
            <button className="w-3/4 my-2 py-2 text-white bg-[#2c438a] hover:bg-[#48cbe7]  transition">
              Contact Us
            </button>
          </div>
        )} 
        </div>
      </div>
      </div>
    </header>
  );
};

export default Navbar;