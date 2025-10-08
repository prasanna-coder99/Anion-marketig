import React, { useState, useEffect } from  'react';

const CookieConsentBanner = () => {
    // State to control the visibility of the banner
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle removing the banner 
    const handleDismiss = () => {
        setIsVisible(false);
       
    };

    // Set a timer to show the banner after 2 seconds (2000ms)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
     
        <div className="fixed inset-x-0 bottom-0 z-50 flex justify-end pointer-events-none p-4 sm:px-10 md:p-6 lg:px-8">
            
            {/* The actual modal/box container */}
          <div 
  className="pointer-events-auto bg-white w-full max-w-full sm:max-w-xl md:max-w-2xl 
             p-4 sm:p-6 md:p-8 shadow-2xl rounded-lg border border-gray-100 relative"
  role="alert"
  aria-live="assertive"
>
    <button 
        onClick={handleDismiss} 
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors"
        aria-label="Close"
    >
        <span className="text-2xl font-semibold leading-none">&times;</span> 
    </button>

    <p className="text-gray-600 text-sm leading-relaxed mb-6 pr-10">
       This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you.
        We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. 
        To find out more about the cookies we use, see our Privacy Policy.
    </p>

    <p className="text-gray-600 text-sm leading-relaxed mb-4 pr-10">
        If you decline, your information won’t be tracked when you visit this website. 
        A single cookie will be used in your browser to remember your preference not to be tracked.
    </p>

    {/* Buttons and Settings Link */}
    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <button className="text-[#2C438A] text-sm font-semibold underline">
            Cookies settings
        </button>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 sm:mt-0">
            <button 
                onClick={handleDismiss} 
                className="bg-cyan-400 hover:bg-cyan-500 text-white font-medium py-2 px-6 rounded-md transition-colors shadow-md"
            >
                Accept
            </button>
            <button 
                onClick={handleDismiss} 
                className="bg-cyan-400 hover:bg-cyan-500 text-white font-medium py-2 px-6 rounded-md transition-colors shadow-md"
            >
                Decline
            </button>
        </div>
    </div>
</div>
</div>
    );
};

export default CookieConsentBanner;