import React from "react";

const OurServicesPage = () => {
  // --- SERVICES TAGS ---
  const servicesData = [
    "Strategic Consulting",
    "Content Generation",
    "Marketing & Go-to-Market Services",
    "Performance Marketing",
    "PR and Media Relations",
    "Graphic Design & Branding",
    "Market Intelligence and Analytics",
    "Engineering & Project Management Services",
  ];

  // --- STRATEGIC CONSULTING LIST ---
  const strategicServicesList = [
    "Market analysis and opportunity identification",
    "Value proposition development",
    "Targeted audience segmentation",
    "Go-to-market strategy development",
    "Channel marketing and partner development",
  ];

  // --- CONTENT GENERATION LIST ---
  const contentItems = [
    "Tech, user, product guides, manuals, and brochures",
    "Customer and sales training material",
    "White papers, research articles, and thought leadership content",
    "Case studies and blogs",
    "Web & social media content",
    "Press releases and media kits",
    "Technology trend reports",
    "Newsletters & internal communications",
    "Sales enablement and field training",
  ];
  const midContent = Math.ceil(contentItems.length / 2);
  const contentCol1 = contentItems.slice(0, midContent);
  const contentCol2 = contentItems.slice(midContent);

  // --- MARKETING SERVICES LIST ---
  const marketingList = [
    "Pre-launch marketing analysis, positioning, and pricing research",
    "Launch collateral, press kits, and social media plans",
    "Product launch execution and reporting",
    "Lead generation and awareness campaigns",
    "Paid media (content syndication, programmatic display ads, and re-targeting)",
    "User/evangelist communities’ development",
    "Roadshows and events",
  ];

  // --- PERFORMANCE MARKETING LIST ---
  const performanceItems = [
    "Account-based marketing (ABM)",
    "Google SEA campaigns",
    "Programmatic and retargeting ads",
    "Social media marketing",
    "Marketing analytics, optimization, and reporting",
    "Website design",
    "Web experience audits",
    "SEO optimization",
    "Email marketing and nurture campaigns",
    "Lead management via marketing automation platforms",
  ];
  const midPerf = Math.ceil(performanceItems.length / 2);
  const perfCol1 = performanceItems.slice(0, midPerf);
  const perfCol2 = performanceItems.slice(midPerf);

  // --- PR & MEDIA RELATIONS LIST ---
  const prItems = [
    "Enhancing brand authority",
    "Expanding reach into new markets",
    "Promoting new products, services, and partnerships",
    "Increasing the visibility of campaigns",
    "Highlighting subject matter expertise and thought leadership",
  ];

  // --- REUSABLE COMPONENT ---
  const ImagePlaceholder = ({ imageUrl, altText }) => (
    <div className="flex justify-center p-8">
      <img
        src={imageUrl}
        alt={altText}
        className="w-[400px] h-auto max-w-xs md:max-w-full"
      />
    </div>
  );

  // --- MAIN RETURN ---
  return (
    <div className="min-h-screen bg-[#f9f7f3]">

      {/* SECTION 1: Our Services Tags */}
      <section className="py-8 px-4 sm:px-6 lg:px-[80px]">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-[46px] font-normal text-[#2c438a] tracking-wider mb-6">
            Our Services
          </h2>
          <p className="text-base md:text-[18px] tracking-wider pt-8 text-[#444B46] mb-12">
            At Anion, strategy and technical industry expertise meet execution
            excellence to fuel your business success.
          </p>
          <div className="flex flex-wrap gap-4">
            {servicesData.map((service) => (
              <div
                key={service}
                className="px-4 py-4 bg-white text-[#444B46] rounded-full shadow-sm text-[12px] font-medium whitespace-nowrap 
                transition-colors duration-150 hover:bg-[#f7b644] cursor-default"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Strategic Consulting */}
      <section className="py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <ImagePlaceholder
            imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d1769178d1536ec1fbc73e_Strategic%20Consulting.svg"
            altText="Strategic Consulting"
          />
          <div className="space-y-6">
            <h2 className="text-4xl font-normal text-[#48cbe7]">
              Strategic Consulting
            </h2>
            <p className="text-lg text-[#444B46]">
              Our in-depth knowledge of the semiconductor industry's complexities
              empowers us to create bespoke marketing solutions tailored to your
              business goals.
            </p>
            <p className="text-lg font-medium text-[#444B46]">
              Our consulting services include:
            </p>
            <ul className="list-none space-y-3 text-gray-700">
              {strategicServicesList.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-2xl text-[#444b46]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: Content Generation */}
      <section className="py-16 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-normal text-[#48cbe7] mb-4">
              Content Generation
            </h2>
            <p className="text-lg text-[#444B46]">
              We create content and campaigns that engage your audience.
            </p>
            <p className="mt-6 text-lg text-[#444B46]">
              Our copywriting specialists deliver:
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-600">
              {[contentCol1, contentCol2].map((col, i) => (
                <ul key={i} className="space-y-2">
                  {col.map((item, index) => (
                    <li key={index} className="relative pl-6">
                      <span className="absolute left-0 top-1 text-[#444b46]">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <ImagePlaceholder
            imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67cef1b9ccdbce2dd018319b_Content%20Generation%20(3).svg"
            altText="Content Generation"
          />
        </div>
      </section>

      {/* SECTION 4: Marketing & Go-to-Market Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <ImagePlaceholder
            imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d104da3381fa31f9686bc1_Marketing%20%26%20Go-to-Market%20Services%20(2).svg"
            altText="Marketing Services"
          />
          <div className="space-y-6">
            <h2 className="text-4xl font-normal text-[#48cbe7] mb-6">
              Marketing & Go-to-Market Services
            </h2>
            <p className="text-[#444B46]">
              Value propositions, product positioning and messaging, pricing, and 
              sales strategies are all areas that we help you develop to bring your products and services to market successfully.
            </p>
            <p className="text-[#444B46]">
              Our team supports with:
            </p>
            <ul className="list-none space-y-3 text-gray-700">
              {marketingList.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-3 text-[#444b46] text-xl">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5: Performance Marketing */}
      <section className="py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-normal text-[#48cbe7] mb-4">
              Performance Marketing
            </h2>
             <p className="text-[#444B46]">
              Enhance campaign performance through rigorous tracking, A/B testing and optimizing for crucial KPIs.
               Anion’s digital team specializes in personalized campaigns for account-based marketing (ABM), search engine advertising,
               social media ads, website design, SEO, marketing automation systems, digital content elements, and fully tracked integrated campaigns.  
            </p>
            <p className="text-[#444B46]">
              We work with you on:
            </p>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3 text-gray-700">
              {[perfCol1, perfCol2].map((col, colIndex) => (
                <ul key={colIndex} className="space-y-2">
                  {col.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#444b46]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <ImagePlaceholder
            imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67cfd80fe75cff089c31591e_Performance%20Marketing.svg"
            altText="Performance Marketing"
          />
        </div>
      </section>

      {/* SECTION 6: PR and Media Relations */}
      <section className="py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <ImagePlaceholder
            imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67e247222a9b822a0af62d2c_PR%20Animation%2008.svg"
            altText="PR and Media Relations"
          />
          <div className="space-y-6">
            <h2 className="text-4xl font-normal text-[#48cbe7] mb-4">
              PR and Media Relations
            </h2>
            <p className="text-[#444B46]">
              At Anion we support you in developing and executing PR plans that meet your business goals. 
              We work on “translating” your technical expertise and transforming it into stories that help build your brand credibility. 
            </p>
            <p className="text-[#444B46]">
             Through PR and media relations we support in:
            </p>
            <ul className="space-y-3 text-gray-700">
              {prItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#444b46]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 7: Graphic Design & Branding */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf8f4]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-normal text-[#48cbe7] mb-4">
              Graphic Design & Branding
            </h2>
            <p className="text-[#444B46]">
              Our in-house graphic design team creates everything from brand identity and logos to graphics, tradeshow designs, presentations, and documentation layouts.
               Our understanding of semiconductor, electronics, and tech-related applications, imagery, and concepts will help your brand stand out in the marketplace.
            </p>
            <p className="text-[#444B46]">
              Our design services include:
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-[#444b46]">
              <ul className="space-y-2 list-disc list-inside">
                <li>Logos, branding, and corporate guideline development</li>
                <li>Adverts and creatives</li>
                <li>3D graphics, chip, and board images</li>
                <li>Infographics</li>
              </ul>
              <ul className="space-y-4 list-disc list-inside">
                <li>Videos and animations</li>
                <li>High-impact technical illustrations and block diagrams</li>
                <li>Print design and artwork</li>
                <li>Branded giveaways</li>
              </ul>
            </ul>
          </div>
          <ImagePlaceholder
            imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67e24a8b73b62a64c13096bd_Graphic%20Design%20%26%20Branding.svg"
            altText="Graphic Design & Branding"
          />
        </div>
      </section>

      {/* SECTION 8: Market Intelligence and Analytics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf8f4]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <ImagePlaceholder
            imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d104daa600baa4df1a42af_Market%20Intelligence%20and%20Analytics%20(2).svg"
            altText="Market Analytics"
          />
          <div className="space-y-6">
            <h2 className="text-4xl font-normal text-[#48cbe7] mb-4">
              Market Intelligence and Analytics
            </h2>
            <p className="text-[#444B46]">
              Data-driven marketing generates valuable business insights. Our intelligence and analytic services help you better understand your customers and 
              take calculated action to evolve your business. We analyze, optimize, and deliver measurable results.
               We help you gain valuable insights to fine-tune strategies for maximum impact, enabling you to make informed decisions and drive success.
            </p>
            <p className="text-[#444B46]">
              What we cover:
            </p>
            <ul className="space-y-2 list-disc list-inside text-[#444b46]">
              <li>Market trends and research</li>
              <li>Target market identification and strategy</li>
              <li>Pricing and persona analysis</li>
              <li>Competitive analysis</li>
              <li>Surveys—external and internal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 9: Engineering & Project Management Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf8f4]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-normal text-[#48cbe7] mb-4">
              Engineering & Project Management
            </h2>
            <p className="text-[#444B46]">
              At Anion we have engineering and product management resources and tools to manage multiple projects and 
              timelines to meet objectives, performance metrics, and budgets.
            </p>
            <p className="text-[#444B46]">
              Explore our tailored services, where we leverage technical expertise to bring your projects to successful realization.
            </p>
            <ul className="space-y-2 list-disc list-inside text-[#444B46]">
              <li>Demo board out-of-box embedded software evaluation</li>
              <li>Demo documentation including GitHub and GitLab experiences</li>
              <li>Out-of-box demonstration videos</li>
              <li>Project management support</li>
              <li>Project reporting</li>
            </ul>
          </div>
          <ImagePlaceholder
            imageUrl="https://cdn.prod.website-files.com/679b17668c8048d0dbb52a1c/67d998e0e62816dd115c9f6d_Updates%20Engineering%20%26%20Project%20Management%20Services%201.svg"
            altText="Engineering and Project Management"
          />
        </div>
      </section>

    </div>
  );
};

export default OurServicesPage;
