export default function Footer() {
    return (
      <footer className="bg-white pt-16 pb-8 border-t">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-10 mb-10">
          
          {/* Logo & About */}
          <div className="space-y-6">
            <a className="block" href="/">
              <div className="relative w-[200px] h-[60px]">
                <img
                  src="https://www.empireblue.in/_next/image?url=%2Flogo1.png&w=640&q=75"
                  alt="Empire Blue"
                  className="object-contain w-full h-full"
                />
              </div>
            </a>
            <p className="text-gray-600 text-sm leading-relaxed">
              We deliver safe and reliable water solutions for a healthier tomorrow.
              Trusted by families and industries through quality and innovation.
            </p>
            <div className="flex items-center gap-4">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=61580030567585",
                  path: (
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  ),
                },
                {
                  href: "#",
                  path: (
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  ),
                },
                {
                  href: "#",
                  path: (
                    <>
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </>
                  ),
                },
                {
                  href: "https://www.linkedin.com/company/empire-blue/?viewAsMember=true",
                  path: (
                    <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </>
                  ),
                },
              ].map((icon, i) => (
                <a
                  key={i}
                  href={icon.href}
                  className="text-gray-400 hover:text-[#1D22BF] transition-transform hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {icon.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-bold tracking-wide mb-6 text-lg">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  className="text-gray-600 hover:text-[#1D22BF] transition-colors hover:underline"
                  href="/about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-[#1D22BF] transition-colors hover:underline"
                  href="/services"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-[#1D22BF] transition-colors hover:underline"
                  href="#"
                >
                  Latest News
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-gray-900 font-bold tracking-wide mb-6 text-lg">
              Our Services
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                { name: "Water Testing", link: "/services/water-testing" },
                { name: "Water Purification", link: "/services/purification" },
                { name: "Water Treatment", link: "/services/treatment" },
                { name: "Expert Consultation", link: "/services/consultation" },
              ].map((service) => (
                <li key={service.name}>
                  <a
                    href={service.link}
                    className="text-gray-600 hover:text-[#1D22BF] transition-colors hover:underline"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-gray-900 font-bold tracking-wide mb-6 text-lg">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#1D22BF] mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600 leading-relaxed">
                  Empire Blue Pvt. Ltd.<br />
                  Chhindwara, Madhya Pradesh<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#1D22BF]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  className="text-gray-600 hover:text-[#1D22BF] hover:underline transition-colors"
                  href="tel:+918867268719"
                >
                  +91 8867268719
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#1D22BF]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  className="text-gray-600 hover:text-[#1D22BF] hover:underline transition-colors"
                  href="mailto:info@empireblue.in"
                >
                  info@empireblue.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 Empire Blue. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                className="text-gray-600 hover:text-[#1D22BF] text-sm hover:underline"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
              <a
                className="text-gray-600 hover:text-[#1D22BF] text-sm hover:underline"
                href="/terms"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
  }
  