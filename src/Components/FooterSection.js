import React from 'react';

// Function to handle the Scroll-to-Top button (instant jump)
const handleScrollToTop = () => {
    window.scrollTo({ 
        top: 0, 
        behavior: 'auto' 
    });
};


const LinkedInIcon = (props) => ( <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.366-4-3.235-4 0v5.604h-3v-11h3v1.765c1.397-2.618 7-2.716 7 2.396v6.839z"/></svg>);
const XIcon = (props) => ( <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.164-2.722-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.917-4.717 6.643-4.008-.2-7.532-2.116-9.92-5.029-.41.702-.641 1.547-.641 2.446 0 1.956.993 3.682 2.502 4.706-.8-.026-1.56-.246-2.227-.616v.055c0 3.18 2.227 5.835 5.176 6.438-.542.15-1.115.19-1.697.19-.413 0-.814-.04-1.206-.115 1.637 5.097 6.446 8.815 12.088 8.913-2.316 1.828-5.234 2.757-8.878 2.757-.582 0-1.15-.037-1.71-.11.666 1.96 1.933 3.593 3.491 4.766z"/></svg>);


const contactData = [
    { text: '+49 (5252) 763642', href: 'tel:+495252763642' },
    { text: '+1 (847) 691 8955', href: 'tel:+18476918955' },
];
const emailData = [
    { text: 'projects@anionmarketing.com', href: 'mailto:projects@anionmarketing.com' },
];
const socialData = [
    { icon: <LinkedInIcon className="w-5 h-5 text-gray-300 hover:text-white" />, href: '#' },
    { icon: <XIcon className="w-5 h-5 text-gray-300 hover:text-white" />, href: '#' },
];
const Logo = () => (
    <div className="flex flex-col"> 
        <div className="flex items-center space-x-1">
            <div className="flex items-end h-8 text-white mt-6">
                {/* Logo bars are white to contrast with aqua box, text is black/dark */}
                <img 
    src="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67c55925a027a01c6cd6b9ef_Anion%20logo%20normal%2C%20no%20quote.svg"
    alt="Anion Logo"
    className="w-26 h-12 filter brightness-0 invert" 
/>
</div>
</div>
</div>
);
const FooterLinkColumn = ({ title, links }) => (
    <div className="flex flex-col space-y-2">
        <h4 className="text-gray-500 uppercase text-sm font-semibold mb-2">{title}</h4>
        {links.map((link, index) => (
            <a key={index} href={link.href} className="text-gray-300 hover:text-white text-base transition-colors">
                {link.text}
            </a>
        ))}
    </div>
);
const FooterContactBlock = ({ title, items, isSocial = false }) => (
    <div className="flex flex-col space-y-2">
        <h4 className="text-gray-500 uppercase text-sm font-semibold mb-2">{title}</h4>
        {isSocial ? (
             <div className="flex space-x-4">
                {items.map((item, index) => (
                    <a key={index} href={item.href} aria-label="Social Link">
                        {item.icon}
                    </a>
                ))}
            </div>
        ) : (
            items.map((item, index) => (
                <div key={index} className="flex items-center space-x-0">
                    {item.icon}
                    <a href={item.href} className="text-gray-300 hover:text-white text-base transition-colors">
                        {item.text}
                    </a>
                </div>
            ))
        )}
       
    </div>
);


const FooterSection = () => {
    const aquaColor = 'bg-[#40c3da]'; 
    const darkBlueColor = 'bg-[#12161b]'; 

    return (
        // Set position relative on the footer to contain the absolutely positioned button
        <footer className='relative bg-black h-full'>
            
            {/* 1. Scroll-to-Top Button (ABSOLUTELY POSITIONED) */}
            <button
                onClick={handleScrollToTop}
                
                className=" absolute 
    bottom-[140px] ml-14 transform -translate-x-1/2   /* mobile: bottom center */
    lg:top-[100px] lg:right-[145px] lg:bottom-auto lg:left-auto lg:translate-x-0 lg:-translate-y-1/2  /* desktop overrides */
    z-30 w-10 h-10 bg-[#f7b644] hover:bg-[#e0a030] 
    rounded-full flex items-center justify-center shadow-lg transition-colors"
                aria-label="Scroll to top"
            >
                {/* Arrow Icon */}
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </button> 

            {/* Main Footer Content Container */}
            <div className=" mx-auto pt-16 pb-6 px-4 sm:px-6 lg:px-8">
                
                {/* Main Content Row */}
                <div className="flex flex-col lg:flex-row border-b border-gray-700/50 pb-12 mb-6">
                    
                    {/* LEFT SIDE: Promotional Contact Block (AQUA BOX) */}
                    <div
                        className='lg:w-1/3 h-80 px-10 py-4  lg:mb-0 lg:mr-16 bg-[#48cbe7] shadow-xl relative  lg:ml-10 lg:-mt-24 flex flex-col'
                    >
                        <Logo /> 
                        
                        <p className="text-white text-base pt-8 mb-2 font-normal leading-sung">
                            Have an exciting idea or brand you want to develop? We'd love to hear about your project and offer our expertise to bring it to life.
                        </p>
                        <div className="mt-4 ">
                        <a 
                            href="#" 
                            className="w-max inline-block bg-white text-[#48cbe7] hover:bg-[#2c438a] hover:text-white font-normal py-4 px-10 flex justify-center"
                        >
                            Contact Us
                        </a>
                        </div>
                    </div>
                    
                    {/* RIGHT SIDE: Navigation and Contact Grid */}
                    <div className="lg:w-2/3 flex flex-wrap justify-between ml-0 lg;ml-[200px] lg:pt-8"> 
                        
                        {/* Group 1: Navigation Links */}
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 mb-8 pt-6 sm:pt-8 lg:pt-0 lg:mb-0">
                            <FooterLinkColumn 
                                title="Navigation" 
                                className="text-2xl leading-relaxed"
                                links={[
                                    { text: 'Home', href: '#' },
                                    { text: 'Expertise', href: '#' },
                                    { text: 'Work', href: '#' },
                                    { text: 'Services', href: '#' },
                                    { text: 'Resources', href: '#' },
                                    { text: 'About', href: '#' },
                                    
                                ]}
                            />
                        </div>
                        
                        {/* Group 2: Phone, E-mail, and Social */}
                        <div className="w-1/2 sm:w-1/2 md:w-2/3 grid grid-cols-1  gap-y-10 pt-6 sm:pt-4 lg:pt-0">
                            {/* FIX: Removed sm:grid-cols-2 to force single-column stacking on all screen sizes */}
                            
                            <FooterContactBlock title="Phone Number" items={contactData} />
                            <FooterContactBlock title="E-mail" items={emailData} />
                            
                            <div className="col-span-1">
                                <FooterContactBlock 
                                    title="Social" 
                                    items={socialData}
                                    isSocial={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright and Privacy */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm">
                    <p className="mb-2 sm:mb-0">
                        © 2025 Anion Marketing. All Rights Reserved
                    </p>
                    <a href="#" className="hover:text-white transition-colors">
                        Privacy Policy
                    </a>
                </div>
                
            </div>
        </footer>
    );
};

export default FooterSection;
