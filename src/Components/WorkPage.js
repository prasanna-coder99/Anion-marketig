import React, { useState } from "react";
import FooterSection from './FooterSection';

const categories = [
  "All",
  "Strategic Consulting",
  "Sales/Lead Generation",
  "Content Generation",
  "Marketing & Go-to-Market Services",
  "Performance Marketing",
  "Graphic Design and Branding",
  "Market Intelligence and Analytics",
  "Engineering & Project Management Services",
];

const workItems = [
  {
    category: "Content Generation",
    title: "Interactive Infographic for Autonomous Mobile Robots",
    description:
      "This asset showcased key components powering autonomous mobile robots: GPUs, SoCs, time of flight sensors, MEMS IMUs, motor drivers, VSLAM algorithms, and simulation tools. It also highlighted software, and data technologies that enable innovation in robotics and automation.",
  },
  {
    category: "Content Generation",
    title:
      "eBooks Showcasing Technologies for Smart Industrial, Healthcare, and Retail Applications",
    description:
      "We produced eBooks showcasing hardware and software solution bundles for the industrial, healthcare, and retail sectors. By creating compelling content, we highlighted the unique features and benefits, effectively engaging audiences with clear narratives that drove action.",
  },
  {
    category: "Content Generation",
    title:
      "Product and Solutions Brochure for a Top Semiconductor Supplier",
    description:
      "The brochure featured a range of SoCs, 5G modules, and development boards, as well as system on module (SOM) and single board computer (SBC) solutions from ecosystem partners. It also highlighted tools and software enablement to showcase the supplier's development stack.",
  },
  {
    category: "Content Generation",
    title:
      "Blog on AI Progression and Improving Adoption Using Simulation Tools",
    description:
      "This blog explored the evolution of AI and showcased the client’s AI hardware and services aimed at accelerating adoption. The post highlighted the crucial role of simulation tools in driving innovation, emphasizing the client’s expertise in this technology.",
  },
  {
    category: "Content Generation",
    title:"Case Study on Successful Transition to Software-Based Business Model",
      
    description:"This case study detailed a customer’s successful shift from a hardware-focused to a software-centric business model. It included an interview with the end-user's CEO, a related blog series and social media campaign and a white paper. "
  },
  {
    category: "Content Generation",
    title:
      "GitHub/GitLab Experiences for FPGA, GPU, and Microprocessor-based Demonstration Boards",
    description:"We created GitHub/GitLab experiences and demo videos for FPGA, microprocessor, and image processing systems. Our team audited demo software and documentation, including Quick Start and Hardware Reference guides, ensuring accurate steps and a smooth customer experience. "
  },
  {
    category: "Engineering & Project Management Services",
    title:"Project Management Services for Website Development for a Large-Cap Company",
    description:"Provided comprehensive project management services including overseeing timelines, coordinating teams, managing resources, and ensuring alignment with business objectives. Our approach facilitated smooth collaboration and successful delivery of the project on time."
  },
  {
    category: "Engineering & Project Management Services",
    title:"GitHub/GitLab Experiences for FPGA, GPU, and Microprocessor-Based Demonstration Boards",
    description:"We developed several GitHub/GitLab experiences and out-of-box demo videos for FPGAs, microprocessors, and image processing systems. Our team audits demo software and documentation, to ensure the accuracy of all steps and a smooth customer experience."
  },
  {
    category: "Graphic Design and Branding",
    title:"Booth Content and Creatives for the Industry’s Largest AI Event",
    description:"We collaborated with an event sponsor to create impactful marketing materials that enhanced their event presence. This included designing application-specific booth layouts, graphics, and a video to effectively showcase their services, maximizing brand visibility."
  },
  {
    category: "Graphic Design and Branding",
    title:"Magazine 3D Cover for Bodo’s Power Systems Magazine",
    description:"We designed a 3D vector graphic for a magazine cover featuring SiC solutions for e-mobility applications in the Bodo’s Power Systems Magazine. The cover showcased e-mobility across land, sky, water, and railway markets, highlighting the versatility of SiC technology. "
  },
  {
    category: "Graphic Design and Branding",
    title:"Interactive Trade Show Content",
    description:" We elevated trade show engagement by designing captivating displays. Our work included crafting content for dynamic video walls, creating voice and gesture-enabled interactive kiosks. These approaches kept visitors engaged and increased the time spent at the booth."
  },
  {
    category: "Graphic Design and Branding",
    title:"Product Portfolio Documentation Rebrand Post-Spin-Off",
    description:"We were instrumental in updating client documentation after a recent spin-off. We rebranded over 220 datasheets to align with the new brand in under two months, ensuring a smooth transition and maintaining consistency across all materials during the rebranding process. "
  },
  {
    category: "Market Intelligence and Analytics",
    title:" Google Analytics Integration for a Semiconductor Company",
    description:"Successfully implemented Google Analytics to track key website performance metrics. These insights enabled the company to optimize messaging, content strategy, and outreach efforts, leading to enhanced engagement with target audiences across various platforms. "
  },
  {
    category: "Market Intelligence and Analytics",
    title:"Insight Driven Market Research Reports",
    description:"We produced detailed market research reports for industries like healthcare, robotics, drones, transportation, and aerospace. They provided insights into emerging market dynamics, sizing, growth areas, and target customer lists to enhance sales engagements. "
  },
  {
    category: "Marketing & Go-to-Market Services",
    title:" Google PPC Campaign for a Leading Analog IC Provider",
    description:"With precise prospect targeting, effective keywords, compelling ad copy, and eye-catching creatives, this campaign delivered significant improvements across all key metrics, including increased web traffic, longer average time spent on pages, and enhanced overall engagement."
  },
  {
    category: "Marketing & Go-to-Market Services",
    title:"Account-Based Marketing (ABM) for a Leading Software Provider",
    description:"We targeted key accounts in the industrial sector using LinkedIn. By delivering personalized content, we ensured our messaging resonated with each account's specific needs, effectively increasing leads and facilitating further follow-up for enhanced engagement. "
  },
  {
    category: "Marketing & Go-to-Market Services",
    title:"Promotions and Communication for Local Market Seminar Series",
    description:"Activities included creation of promotional materials (registration page, flyers, emails, social posts, etc.), targeted outreach efforts, and attendee communication. Our web team also built post-event surveys to gauge attendee engagement and satisfaction."
    },
    {
    category: "Marketing & Go-to-Market Services",
    title:"Sales Enablement through an Interactive Sales Learner Series Custom Platform",
    description:"The interactive Sales Learner Series increased team engagement and product knowledge. It featured learner modules with quizzes and real-world scenarios. Its success led the client to request a customer-facing version of the program, expanding its impact and reach."
    },
    {
    category: "Marketing & Go-to-Market Services",
    title:"Webinar on Cybersecurity Resilience for AI-Powered XDR Solution",
    description:"Anion collaborated with the client to create content and supporting assets. We managed the entire project, identifying the right media partner and webinar platform, executing promotions, coordinating speaker engagement, and handling post-event follow-up effectively."
   
    },
    {
    category: "Performance Marketing",
    title:"Strategic Nurture Campaigns to Boost Engagement and Conversion",
    description:"This automated, multi-step email campaign was crafted to keep prospects engaged and nurture them toward making a purchase decision. By delivering timely and relevant content, the campaign effectively guided prospects through the buyer's journey, encouraging conversions."
    },
    {
    category: "Performance Marketing",
    title:"Tier 1 Launch for the Newest IoT Operating System Version Release",
    description:"Strategy was developed to engage existing customers, re-engage dormant customers, and attract new prospective customers. Key deliverables included creation of content for customers and sales teams, content syndication, SEO optimization, Google PPC, and YouTube outreach."
    },
    {
    category: "Performance Marketing",
    title:"YouTube Paid Promotional Campaign to Increase Subscriber Count",
    description:"Our YouTube paid promotional campaign resulted in a 700% (from 1,000 to 7,000 subscribers) increase in subscribers within six months. Leveraging our domain expertise, we targeted ads to specific audiences, boosting brand visibility and achieving quick results."
    },
    {
    category: "Sales/Lead Generation",
    title:"Drive sales at leading OEMs, CMs, and EMSs in North America",
    description:"Multi-channel Account-Based Marketing (ABM) campaign generated new sales opportunities for electronics distributor by reaching key decision makers at CMs, EMSs, and OEMs. Systematic execution created measurable business impact and reusable marketing assets and infrastructure."
    },
    {
    category: "Strategic Consulting",
    title:"Marketing Services for a European Semiconductor Company",
    description:"We handle all marketing for this client, ensuring a unified brand experience. Our services include managing the website, communication strategy, media engagement, and lead generation. By collaborating closely with stakeholders, we align with business goals and drive success."
    },
    {
    category: "Strategic Consulting",
    title:"Marketing and Strategy Advisory Role for a Semiconductor Security IC Startup",
    description:"Provide strategic marketing guidance for a semiconductor security IC startup. Develop go-to-market strategies for the target markets. Advise on product positioning, competitive analysis, and channel strategies to drive growth in the specialized IC security sector."
    },
    {
    category: "Strategic Consulting",
    title:"Exceptional Omnichannel Campaign Results for Digital Isolation Portfolio",
    description:"We leveraged Google PPC, YouTube, LinkedIn, Programmatic Ads, and Paid Media to achieve exceptional engagement and brand exposure, surpassing client goals. Our strategic targeting enabled us to maximize reach and drive significant results for our clients."
    },
    {
    category: "Strategic Consulting",
    title:"End-to-End Marketing Campaign for Rugged Edge Solution Provider",
    description:"Our team developed a strategic campaign framework, created high-quality content, managed syndication, and enabled follow-up through nurture campaigns. These efforts effectively positioned the client as a thought leader and increased engagement across various channels."
    },
    {
    category: "Strategic Consulting",
    title:"Audience Behavior & Trend Analysis",
    description:"Conducted in-depth research on engineer behaviors, including their trusted information sources, learning preferences, and decision-making processes, to optimize marketing strategies."
    },
  
];

const WorkPage = () => {
  const [active, setActive] = useState("All");

  return (
    <section className="py-10 sm:py-8 lg:py-14 px-6 md:px-20">
      {/* Title */}
      <h2 className="text-4xl lg:text-[40px] font-grotesk font-normal text-[#2c438a] mb-14 tracking-wider">
        Our Recent Work
      </h2>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-4 rounded-full text-[14px]  font-medium transition-colors 
              ${
                active === cat
                  ? "bg-[#f7b644] text-white"
                  : "bg-white text-gray-600 hover:bg-[#f7b644] hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Work Items */}
      <div className="space-y-12">
        {workItems
          .filter((item) => active === "All" || item.category === active)
          .map((item, index) => (
            <div key={index} className="border-t border-gray-400 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left side */}
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-normal text-gray-800 leading-snug max-w-[420px] inline-block">
                  {item.title}
                    </h3>

                </div>

                {/* Right side */}
                <div>
                  <p className="text-[#444B46] text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
          
    </section>
    
  );
};

export default WorkPage;
