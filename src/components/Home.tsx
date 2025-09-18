export default function Home() {
  const cards = [
    {
      name: "Anthoxanthin",
      benefit: "Healthy Bone",
      desc: "Antioxidant properties beneficial for cancer treatment and heart health. Improves blood flow and reduces oxidative stress.",
      position: "top-8 left-8"
    },
    {
      name: "Chlorophyll",
      benefit: "Healthy Lungs",
      desc: "Strengthens the immune system and helps block cancer-causing chemicals. Aids in weight loss and lowers cholesterol levels.",
      position: "top-8 right-8"
    },
    {
      name: "Lycopene",
      benefit: "Healthy Heart",
      desc: "Powerful antioxidant that reduces oxidative damage and inflammation. Protects against various cancers and supports heart health.",
      position: "bottom-8 right-8"
    },
    {
      name: "Carotenoids",
      benefit: "Immunity Booster",
      desc: "Essential for vitamin A production supporting immune health. Reduces inflammation and promotes eye health while aiding hair growth.",
      position: "bottom-8 left-8"
    },
    {
      name: "Anthocyanin",
      benefit: "Healthy Brains",
      desc: "Lowers blood pressure and reduces the risk of heart disease. Protects brain function and may slow cancer growth.",
      position: "-bottom-24 left-1/2 transform -translate-x-1/2 translate-y-24"
    },
  ];

  return (
    <div className=" py-4 sm:py-8 lg:py-12 overflow-hidden relative">
      {/* SECTION - 1 */}
      <section className="flex items-start py-4 sm:py-8 lg:py-12 overflow-hidden">
        <div className="mx-auto w-full relative z-[5]">
          <div className="max-w-6xl mx-auto p-4 relative">
            <div
              className="
              rounded-[20px] sm:rounded-[40px] overflow-hidden relative z-[6]
              shadow-[2px_3px_40px_8px_rgba(0,84,231,0.18),-1px_-1px_6px_rgba(0,84,231,0.06)]
              mt-1 sm:mt-3 lg:mt-4 ml-0
            "
            >
              <div className="flex flex-col lg:flex-row items-center text-center lg:text-left px-4 sm:px-8 lg:px-16 pt-4 sm:pt-8 lg:pt-12 pb-8 sm:pb-16 lg:pb-24 bg-[#E4E9ED]">
                {/* Left - product image */}
                <div className="flex-1 flex justify-center lg:justify-start items-center relative z-[10] mb-6 lg:mb-0 order-1">
                  <div className="relative w-[280px] sm:w-[350px] lg:w-[500px] aspect-[400/380]">
                    <img
                      src="https://www.empireblue.in/_next/image?url=%2Fcan1.png&w=1920&q=75"
                      alt="Empire Blue Can"
                      className="absolute inset-0 w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Right - text */}
                <div className="flex-1 w-full lg:max-w-[60%] z-[11] mb-4 lg:mb-0 order-2">
                  <div className="flex justify-center lg:justify-start mb-3 sm:mb-2 lg:mb-2">
                    <div className="relative w-[240px] sm:w-[280px] lg:w-[320px] h-[60px] sm:h-[70px] lg:h-[90px]">
                      <img
                        src="https://www.empireblue.in/_next/image?url=%2Fimage.png&w=1920&q=75"
                        alt="Logo"
                        className="absolute inset-0 w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight">
                    <span className="text-gray-800">World&apos;s</span>{" "}
                    <span className="bg-[#0000aa] text-transparent bg-clip-text">
                      First Non-Expiry
                    </span>{" "}
                    <span className="text-gray-800">Water</span>
                  </h1>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6 max-w-lg mx-auto leading-relaxed">
                    Empire Blue Pvt. Ltd. We prioritize health, innovation, and
                    sustainability we are committed to setting new industry
                    standards and providing a safe, reliable and beneficial
                    hydration solution for people worldwide.
                  </p>

                  <div className="flex flex-col items-center gap-2">
                    <button
                      aria-label="Contact us"
                      className="
                      bg-[#0000aa] hover:bg-blue-800 transition-colors text-white
                      px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg
                      font-semibold mt-2 sm:mt-4 lg:mt-6 w-fit flex items-center gap-2
                      shadow-[0px_6px_24px_rgba(0,84,231,0.25)]
                    "
                    >
                      <span>Contact Us</span>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full-viewport decorative curve  */}
          <div
            className="relative left-1/2 -translate-x-1/2 w-screen -mt-20 sm:-mt-48 pointer-events-none z-[25]"
            aria-hidden="true"
          >
            <svg
              className="w-full h-[120px] sm:h-[200px] lg:h-[220px]"
              viewBox="0 0 1440 500"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C240,200 480,280 720,280 C960,280 1200,200 1440,0"
                stroke="white"
                strokeWidth="15"
                fill="transparent"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0,0 C240,200 480,280 720,280 C960,280 1200,200 1440,0 L1440,500 L0,500 Z"
                fill="#d7e0e7"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* SECTION - 2 */}
      <section className="py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            {/* Image Block */}
            <figure className="relative w-full md:w-1/2 h-[420px] md:h-[460px] overflow-hidden rounded-[28px] shadow-2xl border-4 border-gray-100">
              <img
                src="https://www.empireblue.in/_next/image?url=%2Fabout.jpeg&w=1920&q=75"
                alt="Empire Blue Headquarters"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </figure>

            {/* Text Content */}
            <article className="w-full md:flex-1 px-2 sm:px-6">
              <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                <span className="text-[#0000aa]">About </span>
                <span className="bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">
                  Us
                </span>
              </h2>

              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-5">
                Empire Blue Pvt. Ltd., established in July 2025 in Chhindwara,
                Madhya Pradesh, is a pioneering company in the bottled water
                industry — recognized as the world&apos;s first manufacturer of
                non-expiry, bacteria-free water bottles.
              </p>

              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-7">
                Our mission is to revolutionize the way people consume water by
                ensuring purity, longevity, and health benefits in every drop.
              </p>

              <a
                href="/about"
                className="inline-flex items-center px-8 py-3 rounded-full font-semibold tracking-wide text-white bg-[#0000aa] hover:bg-blue-800 shadow-md transition-colors"
              >
                Learn More
              </a>
            </article>
          </div>
        </div>
      </section>


      {/* SECTION - 3 */}
      <section className="py-8 relative z-10 -mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#E4E9ED] rounded-3xl shadow-xl p-6 sm:p-10 border-2 border-white relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 xl:gap-32 items-center">

              {/* Left Column */}
              <div className="w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 text-center lg:text-left relative z-20 mb-8 lg:mb-0">
                <h3 className="text-2xl mt-1 font-extrabold bg-primary text-[#0000aa] md:text-3xl text-primary mb-4">Current Situation</h3>
                <p className="text-secondary text-md sm:text-lg mb-3 leading-relaxed">
                  Approximately 2.2 billion people do not have access to safe drinking water and 3.5 billion people do not have access to clean drinking water.
                  This problem is increasing due to the rapidly increasing population. Poor water management has further aggravated the crisis.
                </p>
                <p className="text-secondary text-md sm:text-lg leading-relaxed">
                  The top countries facing severe water crisis include Lebanon, Pakistan, Afghanistan, Syria, Yemen, and Ethiopia.
                </p>
              </div>

              {/* Right Column */}
              <div className="w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 text-center lg:text-right relative z-20">
                <h3 className="text-2xl mt-1 font-extrabold bg-primary text-[#0000aa] md:text-3xl text-primary mb-4">
                  Health Impact of<br />contaminated water
                </h3>
                <p className="text-secondary text-md sm:text-lg mb-3 leading-relaxed">
                  Every 33 seconds a person dies from heart disease worldwide and around 26,300 people die from cancer every day.
                </p>
                <p className="text-secondary text-md sm:text-lg leading-relaxed">
                  Contaminated water releases harmful bacteria and microplastics which lead to health problems like cancer and also cause high blood pressure and heart problems.
                </p>
              </div>
            </div>

            {/* Water Droplet - Large Screen */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-70 hidden lg:block">
              <div className="relative w-[180px] h-[180px] xl:w-[240px] xl:h-[240px]">
                <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse"></div>
                <img
                  alt="Water Droplet"
                  loading="lazy"
                  className="object-contain animate-float opacity-80"
                  src="/Image/water-droplet.webp"
                />
              </div>
            </div>

            {/* Water Droplet - Small Screen */}
            <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-70">
              <div className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px]">
                <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse"></div>
                <img
                  alt="Water Droplet"
                  loading="lazy"
                  className="object-contain animate-float opacity-80"
                  src="/Image/water-droplet.webp"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION - 4 */}
      <section className="py-18 relative z-10 -mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#E4E9ED] rounded-3xl shadow-xl p-6 sm:p-10 border-2 border-white relative">
            <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 items-start">

              {/* Image Section */}
              <div className="md:col-span-2 w-full relative z-20 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <img
                    alt="Empire Blue Water Can"
                    loading="lazy"
                    className="w-full h-auto object-contain"
                    src="https://www.empireblue.in/_next/image?url=%2Fdetail.png&w=828&q=75"
                    width={400}
                    height={400}
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="md:col-span-3 w-full relative z-20 mb-16 md:mb-0">
                <div>
                  <h3 className="text-2xl bg-primary text-[#0000aa] bg-clip-text md:text-4xl font-bold text-primary mb-4">
                    Empire Blue Pvt. Ltd.
                  </h3>
                  <p className="text-secondary text-md sm:text-lg leading-relaxed">
                    Our revolutionary water technology is a groundbreaking invention that eliminates the expiration date on bottled water. By using a unique combination of innovative ingredients, we prevent reactions in bottled water—especially when exposed to sunlight—that produce microplastics and harmful bacteria. This addresses major health risks associated with bottled water, including diseases like cancer and heart disease. Our innovation not only maintains water purity and freshness for life, but also provides health benefits such as cancer prevention, heart attack protection, and boosted immunity. With a global reach, we aim to transform the water industry and provide safe drinking water to the billions of people who currently lack access.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              {/* Card 1 */}
              <div className="bg-[#E4E9ED] rounded-3xl shadow-xl p-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <img
                    alt="Revolutionary Technology"
                    loading="lazy"
                    src="https://www.empireblue.in/icons/excellence.svg"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-primary bg-primary text-[#0000aa] bg-clip-text text-xl font-semibold mb-3">
                    Revolutionary Technology
                  </h4>
                  <p className="text-secondary text-base leading-relaxed">
                    Groundbreaking invention that eliminates the expiration date on bottled water
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#E4E9ED] rounded-3xl shadow-xl p-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
                  <img
                    alt="Safe & Pure"
                    loading="lazy"
                    src="https://www.empireblue.in/icons/pure.svg"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-primary bg-primary text-[#0000aa] bg-clip-text text-xl font-semibold mb-3">
                    Safe &amp; Pure
                  </h4>
                  <p className="text-secondary text-base leading-relaxed">
                    Ensuring lifelong freshness and health through advanced purification
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#E4E9ED] rounded-3xl shadow-xl p-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">
                  <img
                    alt="Sustainable Solution"
                    loading="lazy"
                    src="https://www.empireblue.in/icons/eco.svg"
                    width={28}
                    height={28}
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-primary bg-primary text-[#0000aa] bg-clip-text text-xl font-semibold mb-3">
                    Sustainable Solution
                  </h4>
                  <p className="text-secondary text-base leading-relaxed">
                    Eco-friendly approach to water preservation and distribution
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION - 5 */}
      <section className="py-18 relative z-10 -mt-2">
        <div className="mb-12">
          {/* Section Title */}
          <h2 className="text-center text-3xl md:text-5xl font-bold text-primary mt-5">
            <span>Health </span>
            <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">
              Benefits
            </span>
          </h2>
          <p className="text-center mt-4 text-lg md:text-2xl font-semibold text-black bg-clip-text">
            Discover the key nutrients and their powerful effects on your health
          </p>

          {/*CHART*/}
          <div className="hidden lg:block mx-40 my-10">
            <div className="relative flex justify-center items-center">
              <div className="relative w-[550px] h-[550px]">
                <svg className="w-full h-full" viewBox="0 0 550 550">
                  <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "rgb(248, 250, 252)", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "rgb(226, 232, 240)", stopOpacity: 1 }} />
                    </linearGradient>
                    <filter id="ringShadow" x="-20%" y="-10%" width="160%" height="180%">
                      <feDropShadow dx="-3" dy="-3" stdDeviation="3" floodColor="rgba(0,0,0,0.0)" />
                      <feDropShadow dx="24" dy="32" stdDeviation="24" floodColor="rgba(0,0,0,0.14)" />
                    </filter>
                  </defs>
                  <path
                    d="M275 50 A225 225 0 0 1 500 275 A225 225 0 0 1 275 500 A225 225 0 0 1 50 275 A225 225 0 0 1 275 50 Z M275 120 A155 155 0 0 0 120 275 A155 155 0 0 0 275 430 A155 155 0 0 0 430 275 A155 155 0 0 0 275 120 Z"
                    fill="url(#ringGradient)"
                    stroke="#d1d5db"
                    strokeWidth={1}
                    filter="url(#ringShadow)"
                  />
                </svg>

                {/* Center Lung */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full shadow-[inset_4px_4px_12px_rgba(0,0,0,0.15),inset_-4px_-4px_12px_rgba(255,255,255,0.9),8px_8px_24px_rgba(0,0,0,0.2),-8px_-4px_24px_rgba(255,255,255,0.8)] flex items-center justify-center">
                  <div className="w-32 h-32">
                    <img src="https://www.empireblue.in/_next/image?url=%2Flungs.png&w=384&q=75" alt="Lung Illustration" width={150} height={150} />
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-12 left-2 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-1">
                    <img src="https://www.empireblue.in/_next/image?url=%2Fcapsule.png&w=256&q=75" alt="Anthoxanthin" width={80} height={80} />
                  </div>
                  <div className="absolute top-12 right-2 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-2">
                    <img src="https://www.empireblue.in/_next/image?url=%2Fleaf.png&w=256&q=75" alt="Chlorophyll" width={80} height={80} />
                  </div>
                  <div className="absolute bottom-28 -right-2 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-3">
                    <img src="https://www.empireblue.in/_next/image?url=%2Fheart.png&w=256&q=75" alt="Lycopene" width={80} height={80} />
                  </div>
                  <div className="absolute bottom-28 -left-2 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-4">
                    <img src="https://www.empireblue.in/_next/image?url=%2Fvitamin.png&w=256&q=75" alt="Carotenoids" width={80} height={80} />
                  </div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 translate-y-0 w-20 h-20 rounded-full flex items-center justify-center animate-orbit-5">
                    <img src="https://www.empireblue.in/_next/image?url=%2Fbrain.png&w=256&q=75" alt="Anthocyanin" width={80} height={80} />
                  </div>

                  {/* Connecting lines (optional) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="20%" y1="25%" x2="35%" y2="35%" stroke="#e0e0e0" strokeWidth={1}></line>
                    <line x1="80%" y1="25%" x2="65%" y2="35%" stroke="#e0e0e0" strokeWidth={1}></line>
                    <line x1="80%" y1="70%" x2="65%" y2="65%" stroke="#e0e0e0" strokeWidth={1}></line>
                    <line x1="20%" y1="70%" x2="35%" y2="65%" stroke="#e0e0e0" strokeWidth={1}></line>
                    <line x1="50%" y1="70%" x2="50%" y2="65%" stroke="#e0e0e0" strokeWidth={1}></line>
                  </svg>
                </div>
              </div>

              {/* Desktop Cards */}
              {cards.map((card) => (
                <div
                  key={card.name}
                  className={`absolute w-80 rounded-md p-5 ${card.position}`}
                >
                  <h3 className="font-bold text-2xl text-primary bg-clip-text mb-2">{card.name}</h3>
                  <div className="text-[15px] bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-bold mb-1">{card.benefit}</div>
                  <p className="text-sm text-gray-800 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* SECTION - 6 */}
      <section className="py-12 sm:py-16 lg:py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 mb-16 lg:mb-32">
            {/* Text Content */}
            <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4284FF]/10 to-[#4284FF]/5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8">
                <div className="w-2 h-2 bg-[#4284FF] rounded-full animate-pulse"></div>
                <span className="bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text text-sm font-medium">
                  Water Innovation
                </span>
              </div>

              <h2 className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 text-[#0000aa] ">
                Revolutionizing&nbsp;
                <span className="relative inline-block mx-2 sm:mx-3">
                  <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text whitespace-nowrap">
                    Water
                  </span>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-[#4284FF]/10 rounded-full -z-0"></div>
                </span>
                &nbsp;Technology
              </h2>

              <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We're pioneering the future of water technology with our groundbreaking innovation that eliminates expiration dates from bottled water, ensuring pure and safe drinking water for generations to come.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <button className="w-full bg-[#0000aa] tracking-wide d shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-[#4284FF] focus:ring-offset-2 sm:w-auto group bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">Explore Technology</span>
                  <div className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>

                <button className="w-full sm:w-auto group text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium border-2 border-primary transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative w-full max-w-[400px] lg:w-[550px] aspect-square lg:h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4284FF]/10 via-[#2ECC71]/10 to-transparent rounded-[40px] transform rotate-6 animate-pulse"></div>
              <div className="absolute inset-4 bg-white rounded-[40px] shadow-lg backdrop-blur-xl">
                <div className="relative w-full h-full p-8 sm:p-12">
                  <img
                    src="	https://www.empireblue.in/_next/image?url=%2Finnovation.png&w=1920&q=75"
                    alt="Water drop logo"
                    className="object-cover p-6 sm:p-8 animate-float"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION - 7 */}
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-4xl md:text-6xl text-primary font-bold mb-20">
          Meet Our{" "}
          <span className="relative z-10 bg-gradient-to-r from-[#4284FF] to-[#2ECC71] text-transparent bg-clip-text">
            Expert
          </span>{" "}
          Team
        </h2>

        {/* Founder Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
          {/* Founder Card */}
          <div className="w-full md:w-1/3 flex justify-center px-6 sm:px-10 md:px-0">
            <div className="w-full max-w-sm">
              <div className="bg-white rounded-3xl p-2 shadow-xl mx-auto relative">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                    src="https://www.empireblue.in/_next/image?url=%2Fimages%2Fgagan.jpeg&w=1200&q=75"
                    alt="Dr. Gagan Mahalwanshi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 left-0 right-0 mx-8 bg-white rounded-xl p-4 shadow-lg">
                  <p className="text-center text-[#0000aa] font-bold text-xl text-primary">
                    Dr. Gagan Mahalwanshi
                  </p>
                  <p className="text-center  text-gray-500 text-sm">
                    Founder & CEO
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder About */}
          <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="max-w-lg">
              <h3 className="text-3xl text-[#0000aa] font-bold text-primary mb-6">
                About the Founder
              </h3>
              <p className="text-gray-700 leading-relaxed text-xl">
                With over 15 years of experience in the water industry, Dr. Gagan
                Mahalwanshi has pioneered revolutionary water purification
                technologies. His vision for Newtro-X is to create water solutions
                that are both sustainable and beneficial for health.
              </p>

              {/* Social Icons */}
              <div className="mt-8 flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  {/* LinkedIn Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  {/* Twitter Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <h3 className="text-3xl text-[#0000aa] font-semibold text-primary mb-12 text-center">
            Leadership Team
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center w-full px-6 sm:px-8 md:px-4">
              <div className="w-full max-w-[200px] mx-auto">
                <div className="bg-white rounded-3xl p-2 shadow-xl relative">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src="https://www.empireblue.in/_next/image?url=%2Fimages%2Fsandhya.jpeg&w=640&q=75"
                      alt="Sandhya Mahalwanshi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-0 right-0 mx-3 bg-white rounded-xl p-2 shadow-lg">
                    <p className="text-center text-[#0000aa] font-bold text-xs text-primary">
                      Sandhya Mahalwanshi
                    </p>
                    <p className="text-center text-gray-500 text-xs">
                      Managing Director
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center w-full px-6 sm:px-8 md:px-4">
              <div className="w-full max-w-[200px] mx-auto">
                <div className="bg-white rounded-3xl p-2 shadow-xl relative">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src="https://www.empireblue.in/_next/image?url=%2Fimages%2F1.jpeg&w=640&q=75"
                      alt="U. S. Khobariya"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-0 right-0 mx-3 bg-white rounded-xl p-2 shadow-lg">
                    <p className="text-center text-[#0000aa] font-bold text-xs text-primary">
                      U. S. Khobariya
                    </p>
                    <p className="text-center text-gray-500 text-xs">
                      Sub-Director
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center w-full px-6 sm:px-8 md:px-4">
              <div className="w-full max-w-[200px] mx-auto">
                <div className="bg-white rounded-3xl p-2 shadow-xl relative">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                    <img
                      src="https://www.empireblue.in/_next/image?url=%2Fimages%2F2.jpeg&w=640&q=75"
                      alt="Mukesh Dixit"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-0 right-0 mx-3 bg-white rounded-xl p-2 shadow-lg">
                    <p className="text-center  font-bold text-xs text-primary">
                      Mukesh Dixit
                    </p>
                    <p className="text-center text-gray-500 text-xs">CFO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION - 8 */}
      <div className="max-w-6xl mx-auto mt-36 bg-[#f4faff] rounded-2xl shadow-md p-6 md:p-12 relative">
        {/* Top-left dots */}
        <div className="absolute top-5 left-5 md:top-10 md:left-10">
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className={`flex gap-1.5 md:gap-2 ml-${row * 1} md:ml-${row * 3} ${row > 0 ? "mt-1.5 md:mt-2.5" : ""
                }`}
            >
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-yellow-500" />
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-500" />
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-indigo-500" />
            </div>
          ))}
        </div>

        {/* Top-right dots */}
        <div className="absolute top-5 right-5 md:top-10 md:right-10">
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className={`flex gap-1.5 md:gap-2 ml-${row * 1} md:ml-${row * 3} ${row > 0 ? "mt-1.5 md:mt-2.5" : ""
                }`}
            >
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-yellow-500" />
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-500" />
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-indigo-500" />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3 mt-6 md:mt-0">
            <span className="text-primary">Take the </span>
            <span className="relative z-10 bg-gradient-to-r from-[#3A7BFF] to-[#27D96D] text-transparent bg-clip-text">
              Next Step
            </span>
          </h2>
          <h3 className="text-xl md:text-3xl font-semibold text-gray-900 mb-5">
            Towards Better Health
          </h3>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-8">
            Empire Blue Operates in the growing health and wellness market health conscious individuals seeking natural solutions for disease prevention and immune support with increasing awareness of health risks like cancer and heart disease demand for mineral based supplements in mineral water Ready to experience our exceptional innovative water? book your first can today and discover how we can help you live your healthiest life.
          </p>
          <a href="/book-now">
            <div className="inline-block bg-[#0000aa] text-white px-7 py-3 font-semibold md:py-4 md:px-10 rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300">
              Book Now
            </div>
          </a>
        </div>

        {/* Bottom-left dots */}
        <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10">
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className={`flex gap-1.5 md:gap-2 ml-${row * 1} md:ml-${row * 3} ${row > 0 ? "mt-1.5 md:mt-2.5" : ""
                }`}
            >
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-yellow-500" />
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-500" />
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-indigo-500" />
            </div>
          ))}
        </div>

        {/* Bottom-right dots */}
        <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10">
          {[0, 1, 2].map((row) => (
            <div
              key={row}
              className={`flex gap-1.5 md:gap-2 ml-${row * 1} md:ml-${row * 3} ${row > 0 ? "mt-1.5 md:mt-2.5" : ""
                }`}
            >
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-yellow-500" />
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-emerald-500" />
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-indigo-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}