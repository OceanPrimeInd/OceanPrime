"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import CookieBanner from "app/components/CookieBanner";


export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the purpose of this project?",
      a: `
We are conducting a twelve-month research project to gauge the demand for a zero-emission fast ferry service spanning the Bristol Channel. Our aim is to understand public interest across Wales and South West England and determine the feasibility of offering a comfortable, efficient, affordable and sustainable ferry service connecting Swansea with key destinations across the Bristol Channel and Celtic Sea to reduce drive time.
      `,
    },
    {
      q: "What are the benefits of this project?",
      a: `
This initiative has the potential to reduce road traffic by offering a faster, cleaner form of public transport. Diverting cars away from busy routes like the M4, M5, and A30 can ease congestion. Enhanced ferry services also bring financial advantages for ports and harbours by attracting new visitors and commercial activity, and helping the UK accelerate the shift towards cleaner maritime solutions more widely. We envision a forward-thinking ferry service that embraces innovation, fosters local and national economic opportunities, and serves as a blueprint for sustainable travel across coastal regions globally.
      `,
    },
    {
      q: "Questions, we have a few… What might the ferry service be like?",
      a: `
Our ambition is to create a user experience that stands out for its affordability, reliability, and comfort. By incorporating design insights from trains, coaches, cars, and aviation, we aim to offer modern amenities that may include the following:

**✅ Food & Drink Menu**
Ethical and sustainable sourced coffee, carefully roasted, with expert blending for a perfect cup of coffee. Green, black and decaffeinated tea, hot chocolate with cream, and a range of bottled cold drinks. Water would be available to refill bottles. Food used for breakfast, all day hot and cold meals, snacks and confectionery would be preferentially sourced from local suppliers and manufacturers.

**✅ Communication**

High-speed Wi-Fi connected to the mobile network, inseat charging, inseat entertainment.

**✅ Accommodation**

Easy and wide access for passengers with reduced mobility, and advanced seating systems to make sea crossing comfortable and safe special baby accommodation and changing facilities. Toilets and bathroom facilities, including showers.

**✅ Event Hire**

We anticipate that some vessels could be adapted for private functions, corporate gatherings, weddings, or educational trips, offering a unique venue that blends maritime charm with modern facilities.

**✅ Vehicles**

Depending on demand, there could be capacity for bicycles, cars, motorcycles, commercial vehicles, and specialised cargo. Secure storage and convenient loading facilities would be considered to support a variety of transport needs.
      `,
    },
    {
      q: "Which routes and destinations are being considered?",
      a: `
The service aims to link Swansea to important locations across the Bristol Channel, Celtic Sea, and potentially even farther afield if interest and feasibility permits. Where would you like to depart from, which destination is your preferred arrival point? Let us know what you think
      `,
    },
    {
      q: "What can you tell us about sailing frequency and timing?",
      a: `
We recognise the importance of a year-round, consistent timetable that meets various travel needs, from daily commutes to bank holiday excursions. Higher demand periods or specific local events could lead to more frequent sailings or flexible departure times. Advanced propulsion and route optimisation would help shorten travel durations without sacrificing safety or reliability, aided by real-time weather and tidal data.
      `,
    },
    {
      q: "What types of ships are envisioned?",
      a: `
Our fleet concept emphasises advanced ship design built around alternative fuel systems and advanced electric propulsion, aesthetic appeal, and passenger comfort in all weathers, semi-autonomous navigation systems and environmental sensors supporting a highly trained captain and crew recruited locally.

Interiors would adopt best practices from other transport industries with inviting seating arrangements, reliable on-board services, and user-friendly layouts.

For propulsion, a combination of fast charge battery-electric systems charged with renewable via shore power, supported by locally produced alternative fuels such as green hydrogen, methanol, biofuel or synthetic diesel which would all be under consideration, potentially supplemented by advanced wind-assisted propulsion where viable.
      `,
    },
    {
      q: "Why can’t all questions be answered yet?",
      a: `
This project remains in its exploratory stage, and the eventual routes, schedules, and vessel designs will depend on what we learn from potential passengers and local communities. Your input directly influences how we develop the service, allowing us to tailor journey times, facilities, and destinations to match your preferences.

We encourage everyone to cast a vote, share comments, and contribute to discussions. Your support and feedback provide the direction we need for the next phase of planning.
      `,
    },
    {
      q: "Who is behind this initiative?",
      a: `
The Swansea Ferry Research project is spearheaded by Ocean (Ocean Prime Industries Ltd), co-founded by Dave Sampson and Jami Buckley. We are dedicated to revolutionising maritime travel by designing and building vessels powered by clean alternative fuels and renewable electricity produced locally. Our overarching vision is to enable zero-emission travel from every port and harbour, benefitting local economies, improving air and water quality, and fostering a thriving zero pollution industry to revitalise our marine ecosystems. you can find more on our “Company” pages
      `,
    },
    {
      q: "How can I get involved?",
      a: `
Participation is vital to our success. You can support the zero-emission ferry concept by voting in our poll, leaving comments, spreading the word on social media, or donating and advertising with us. If you have relevant expertise in maritime, environmental, educational, or investment sectors, we encourage you to collaborate and help shape an entirely new approach to ferry services. We have a blank canvas and welcome all good ideas from anyone. We will review all relevant advanced technology, and we want to promote local input to reimagine ferries for speed, safety, exceptional comfort, and minimal environmental impact.
      `,
    },
    {
      q: "What happens after the research phase?",
      a: `
After the twelve-month research period, we will compile a detailed report based on the data and feedback collected. If there is enough interest and community backing, we will progress to detailed design and development. We want to support local industry and businesses and would love to build the ferry in a local British shipyard, and using local companies and expertise to design and build the supporting infrastructure needed to bring this vision to life.
      `,
    },
    {
      q: "How will my data be used?",
      a: `
Your personal information is only used for research related to this specific project. It is stored securely and never shared with third parties without your explicit consent. If you have chosen to receive updates, we will keep you informed of project milestones. Further details are available in our Privacy Policy.
      `,
    },
    {
      q: "A voyage through history: Ferries across the Bristol Channel and the Celtic Sea",
      a: `
The Bristol Channel boasts a long history of ferry services, once integral to regional connectivity and commerce. Paddle steamers and advanced vessels in previous centuries brought communities closer, fostering cultural and economic exchange. Despite financial or logistical issues leading to the cancellation of some routes over time, there remains a strong drive to revive these connections, using modern technology to create a thriving maritime corridor that respects the environment.

**✅Cork Ferry**
The Swansea–Cork ferry was once a key travel link between South Wales and Southern Ireland. Though popular for both tourism and trade, financial challenges eventually led to its discontinuation in 2006. There is continued interest in reinstating this service, highlighting the potential for renewed economic and cultural ties if the route becomes viable again.

**✅The Severn Link**
Launched in 2010, the Severn Link concept proposed a fast ferry between Swansea and Ilfracombe but it did not materialise due to funding and technical challenges. Similar proposals, such as Patriot Yachts’ hydrogen-powered ferry between Cardiff and Bristol, we believe remain in development, reflecting ongoing efforts to reconnect communities via lower-emission maritime transport.

We aim to learn from these past endeavours by leveraging cutting-edge technology and local expertise, potentially even constructing our fleet in new shipyards with advanced robotics and local materials. This approach could offer new employment opportunities while driving maritime innovation.
      `,
    },
    {
      q: "Innovative Ferry Designs from Around the World",
      a: `Elsewhere, Norway’s “MF Ampere” leads the way in battery electric operation, while Hong Kong’s historic Star Ferry is exploring hybrid options, and Washington State Ferries in the United States is converting its fleet to hybrid-electric. Designers and builders such as Incat Crowther (Tasmania), Damen Shipyards Group (Netherlands), and BMT Group (UK) have pushed for high-speed, energy-efficient catamarans and ferries. These global examples prove that innovations in propulsion, hull design, and energy storage are making large-scale, low-emission passenger services increasingly realistic.
      `,
    },
    {
      q: "Revolutionary Propulsion Technologies",
      a: `
Battery-electric ferries produce no emissions at the point of use and minimise noise levels, while hydrogen fuel cells offer a source of clean electricity onboard and emit only water vapour. Methanol, if it can be sourced locally from renewable processes is another option, as it can be stored at ambient temperatures, and biofuels can further reduce carbon footprints. Hybrid systems combine multiple forms of propulsion, enabling efficiency gains under various operating conditions.

We are continuously searching for technology that offers us the opportunity to create a more efficient ship. Some of these may not have reached the market yet, but will be ready in the next year or two. We’d love to hear from any companies who are in this position.
      `,
    },
    {
      q: "Local Innovators and Educational Institutions",
      a: `
Many companies in the Swansea area and along the Celtic Sea coastline already contribute to maritime technology and renewable energy research. Organisations such as Marine Power Systems (Swansea), Celtic Sea Power (Cornwall), and Tidal Lagoon Power (Gloucester) lead in harnessing wave and tidal energy.

Educational establishments, including Swansea University, Cardiff University, and the University of South Wales, University of Exeter and their new Appledore Clean Maritime Innovation Centre, the University of Plymouth and the University of Falmouth promote courses in advanced technology, marine engineering and green transport strategies. If your organisation or institution would like to contribute, we invite you to contact us and share how you can support this evolving project.
      `,
    },
    {
      q: "Commercial Benefits of a Zero-Emission Future",
      a: `
Beyond lowering air and water pollution, cleaner maritime initiatives often stimulate economic growth by attracting investment and boosting tourism. Aligning with emerging environmental regulations can also help operators avoid fines and position themselves as leaders in responsible transport. The net result can be a healthier community, a more vibrant local economy, and a maritime sector prepared for the demands of tomorrow.
      `,
    },
    {
      q: "Supporting Climate Initiatives and Net Zero Goals",
      a: `
Our research aligns with Swansea Council’s Climate Initiative, the Welsh Government’s Climate Emergency Declaration, the UK Government’s Net Zero Strategy, and various local council climate action plans. By supporting zero-emission ferry services, you contribute to these significant environmental targets and help build resilience in coastal communities. For more details on relevant initiatives, or to add information about your local council’s plan, please contact us.
      `,
    },
    {
      q: "Vote, Donate, or Invest",
      a: `
Your involvement is vital in turning our zero-emission ferry concept into a working reality. You can vote to express your interest, or donate money on the donation page to support us financially. We also invite advertisers and investors to explore opportunities with us, whether you bring domain expertise, technological innovations, or the necessary resources to drive this project forward.
      `,
    },
     {
      q: "Let’s Make Waves Together",
      a: `
Thank you for exploring the future of fast, clean maritime transport across the Bristol Channel. Your comments, votes, and collaborative spirit help shape a service that truly reflects community needs. We look forward to your continued support as we work together to redefine next generation ferry travel, protect the marine environment, and create new economic opportunities in your region.
      `,
    }
  ];

  return (
    <main className="bg-gradient-to-b from-blue-50/60 to-white min-h-screen pb-40">

      {/* ✅ HERO */}
      <section className="w-full py-28 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-blue-900">
          FAQs
        </h1>
        <p className="text-2xl text-gray-700 mt-6 max-w-4xl mx-auto leading-relaxed">
          There are more questions than answers!  
          We will continue updating this page as research progresses.
        </p>
      </section>

      {/* ✅ ACCORDION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="space-y-6">

          {faqs.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-xl border border-gray-200/60 overflow-hidden">
              
              {/* Question header */}
              <button
                className="w-full flex items-center justify-between px-10 py-7 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-2xl font-bold text-blue-900">
                  {item.q}
                </span>

                <ChevronDown
                  size={30}
                  className={`text-blue-900 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-10 pb-10 text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.a}
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>
    <CookieBanner />
    </main>
  );
}
