import Image from "next/image";
import Link from "next/link";
import { FaIdCard, FaWater, FaHeartbeat, FaUniversity } from "react-icons/fa";
import ScrollToTop from "@/components/ScrollToTop";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto py-6 px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="relative">
              <Image
                src="/images/sandeep-logo.svg"
                alt="संदीप जन सेवा केंद्र लोगो"
                width={70}
                height={70}
                className="mr-4 drop-shadow-md animate-pulse-slow"
                priority
              />
              <div className="absolute -top-1 -right-1 bg-yellow-500 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                ✓
              </div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold drop-shadow-sm">
                <span className="text-white">संदीप</span>{" "}
                <span className="text-yellow-300">जन सेवा केंद्र</span>
              </h1>
              <p className="text-sm sm:text-base bg-purple-900 inline-block px-2 py-0.5 rounded mt-1">
                प्राइवेट सेवा प्रदाता - सरकार से संबद्ध नहीं
              </p>
            </div>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex flex-wrap justify-center gap-5 text-sm sm:text-base bg-purple-800/80 backdrop-blur-md px-6 py-3 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
            <a
              href="#hero"
              className="hover:text-yellow-300 transition-colors duration-300 font-medium flex items-center px-3 py-1 rounded-lg hover:bg-purple-700/50 relative group"
            >
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 inline-block group-hover:scale-125 transition-transform"></span>
              <span>मुख्य पृष्ठ</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#services"
              className="hover:text-yellow-300 transition-colors duration-300 flex items-center px-3 py-1 rounded-lg hover:bg-purple-700/50 relative group"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 inline-block group-hover:scale-125 transition-transform"></span>
              <span>सेवाएं</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#how-to-apply"
              className="hover:text-yellow-300 transition-colors duration-300 flex items-center px-3 py-1 rounded-lg hover:bg-purple-700/50 relative group"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 inline-block group-hover:scale-125 transition-transform"></span>
              <span>आवेदन प्रक्रिया</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-300 transition-colors duration-300 flex items-center px-3 py-1 rounded-lg hover:bg-purple-700/50 relative group"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 inline-block group-hover:scale-125 transition-transform"></span>
              <span>संपर्क करें</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="animated-bg text-white py-16 md:py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-700/80"></div>
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-yellow-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-6 animate-bounce">
            सरकारी सेवाओं के लिए प्राइवेट सहायता केंद्र
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            आपकी सेवा में <span className="text-yellow-300">हमेशा तत्पर</span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light">
            <span className="font-semibold text-yellow-300">
              संदीप जन सेवा केंद्र
            </span>{" "}
            उत्तर प्रदेश के नागरिकों को सरकारी और अन्य महत्वपूर्ण सेवाएं प्राप्त
            करने में सहायता प्रदान करने के लिए समर्पित है।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1"
            >
              <span>सेवाएं देखें</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a
              href="#contact"
              className="bg-white text-purple-800 hover:bg-purple-50 font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-white/30 transform hover:-translate-y-1"
            >
              <span>संपर्क करें</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:rotate-12"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">1000+</div>
              <div className="text-sm mt-1">नागरिकों को सेवा प्रदान की</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">25+</div>
              <div className="text-sm mt-1">सरकारी सेवाएं उपलब्ध</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">100%</div>
              <div className="text-sm mt-1">नागरिक संतुष्टि</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-300">12+</div>
              <div className="text-sm mt-1">साल का अनुभव</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-100 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-700 text-sm font-bold px-4 py-1 rounded-full mb-4">
              हमारी सेवाएं
            </div>
            <h2 className="section-title pb-4">
              संदीप जन सेवा केंद्र द्वारा{" "}
              <span className="gradient-text">सहायता सेवाएं</span>
            </h2>
            <p className="text-gray-600 max-w-2xl text-center mt-4">
              हम एक प्राइवेट सेवा प्रदाता हैं जो निम्नलिखित सरकारी सेवाओं के लिए
              आवेदन और फॉर्म भरने में आपकी सहायता करते हैं। हमारी टीम आपके
              दस्तावेज़ तैयार करने में मदद करेगी।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Government Services */}
            <div className="card group hover:bg-purple-50">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                  <FaIdCard className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">
                  सरकारी दस्तावेज़ सहायता
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "जन्म और मृत्यु प्रमाण पत्र",
                  "आय प्रमाण पत्र",
                  "जाति प्रमाण पत्र",
                  "राशन कार्ड",
                  "आधार कार्ड सेवाएं",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-2 flex-shrink-0 text-xs">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href="/services/government"
                  className="text-purple-600 font-medium flex items-center hover:underline"
                >
                  अधिक जानकारी
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Utility Services */}
            <div className="card group hover:bg-green-50">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                  <FaWater className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                  उपयोगिता सेवाएं
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "बिजली बिल भुगतान",
                  "पानी बिल भुगतान",
                  "प्रधानमंत्री आवास योजना",
                  "अटल पेंशन योजना",
                  "अन्य सरकारी योजनाएं",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2 flex-shrink-0 text-xs">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href="/services/utility"
                  className="text-green-600 font-medium flex items-center hover:underline"
                >
                  अधिक जानकारी
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Health Services */}
            <div className="card group hover:bg-red-50">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mr-4 group-hover:bg-red-200 transition-colors">
                  <FaHeartbeat className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-700 transition-colors">
                  स्वास्थ्य सेवाएं
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "आयुष्मान भारत योजना",
                  "राष्ट्रीय स्वास्थ्य मिशन",
                  "बुनियादी स्वास्थ्य सेवाएं",
                  "टीकाकरण जानकारी",
                  "स्वास्थ्य शिविर",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-2 flex-shrink-0 text-xs">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href="/services/health"
                  className="text-red-600 font-medium flex items-center hover:underline"
                >
                  अधिक जानकारी
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Financial Services */}
            <div className="card group hover:bg-yellow-50">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mr-4 group-hover:bg-yellow-200 transition-colors">
                  <FaUniversity className="text-yellow-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-yellow-700 transition-colors">
                  वित्तीय सेवाएं
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "बैंकिंग सेवाएं",
                  "खाता खोलना",
                  "ऋण आवेदन सहायता",
                  "वित्तीय साक्षरता कार्यक्रम",
                  "सरकारी वित्तीय योजनाएं",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mr-2 flex-shrink-0 text-xs">
                      ✓
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href="/services/financial"
                  className="text-yellow-600 font-medium flex items-center hover:underline"
                >
                  अधिक जानकारी
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#services"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
            >
              <span>सभी सहायता सेवाएं देखें</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section
        id="how-to-apply"
        className="py-20 bg-purple-50 relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-700 text-sm font-bold px-4 py-1 rounded-full mb-4">
              प्रक्रिया
            </div>
            <h2 className="section-title pb-4">
              <span className="gradient-text">सहायता</span> कैसे प्राप्त करें
            </h2>
            <p className="text-gray-600 max-w-2xl text-center mt-4">
              संदीप जन सेवा केंद्र एक प्राइवेट सेवा प्रदाता है जो आपकी सरकारी
              दस्तावेज़ और सेवाओं के लिए आवेदन में मदद करता है। आप इन आसान चरणों
              का पालन करके हमारी सहायता प्राप्त कर सकते हैं।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl p-8 shadow-lg relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <div className="text-center pt-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  केंद्र पर जाएं
                </h3>
                <div className="h-40 flex items-center justify-center mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    width="120"
                    height="120"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <p className="text-gray-600">
                  अपने नजदीकी संदीप जन सेवा केंद्र पर जाएं और अपनी आवश्यकता
                  बताएं। हमारी टीम आपको सही दिशा देगी।
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <div className="text-center pt-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  आवश्यक जानकारी प्रदान करें
                </h3>
                <div className="h-40 flex items-center justify-center mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    width="120"
                    height="120"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <p className="text-gray-600">
                  हम आपको आवश्यक दस्तावेज़ और फॉर्म की जानकारी देंगे। हमारे
                  कर्मचारी आपको बताएंगे कि किस सेवा के लिए क्या आवश्यक है।
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <div className="text-center pt-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  सहायता सेवा प्राप्त करें
                </h3>
                <div className="h-40 flex items-center justify-center mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    width="120"
                    height="120"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <p className="text-gray-600">
                  हम आपके आवेदन प्रक्रिया में मदद करेंगे और आपको सही समय पर
                  अपडेट प्रदान करेंगे। हम आपको प्रक्रिया के हर चरण में सहायता
                  करेंगे।
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-purple-600 text-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white rounded-full p-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8e44ad"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  किसी भी सहायता के लिए हमें कॉल करें
                </h3>
                <p className="text-purple-100 mb-3">
                  हमारी हेल्पलाइन टीम आपकी हर संभव मदद के लिए तैयार है
                </p>
                <p className="text-2xl font-bold">1800-XXX-XXXX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Important Information */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-purple-800 to-purple-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-block bg-purple-700 text-purple-200 text-sm font-bold px-4 py-1 rounded-full mb-4">
              संपर्क माध्यम
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="text-yellow-300">संदीप जन सेवा केंद्र</span> से
              संपर्क करें
            </h2>
            <p className="text-purple-200 max-w-2xl text-center">
              किसी भी प्रश्न या सरकारी सेवाओं से संबंधित सहायता के लिए हमसे
              संपर्क करें। हमारी टीम आपकी मदद के लिए हमेशा तत्पर है।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">
                संपर्क जानकारी
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-600 rounded-full p-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      हेल्पलाइन नंबर
                    </h4>
                    <p className="text-purple-200">1800-XXX-XXXX (टोल फ्री)</p>
                    <p className="text-purple-200 mt-1">+91-XXXXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-600 rounded-full p-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">ईमेल पता</h4>
                    <p className="text-purple-200">
                      contact@sandeep-janseva.com
                    </p>
                    <p className="text-purple-200 mt-1">
                      info@sandeep-janseva.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-600 rounded-full p-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">कार्यालय समय</h4>
                    <p className="text-purple-200">
                      सुबह 9:00 बजे से शाम 5:00 बजे तक
                    </p>
                    <p className="text-purple-200 mt-1">(सोमवार से शनिवार)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">
                सहायक लिंक
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://up.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 p-4 rounded-lg transition-colors group"
                >
                  <div className="bg-yellow-600 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                  <span className="group-hover:text-yellow-300 transition-colors">
                    उत्तर प्रदेश सरकार पोर्टल
                  </span>
                </a>

                <a
                  href="https://www.india.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 p-4 rounded-lg transition-colors group"
                >
                  <div className="bg-yellow-600 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                  <span className="group-hover:text-yellow-300 transition-colors">
                    भारत सरकार पोर्टल
                  </span>
                </a>

                <a
                  href="https://www.digitalindia.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 p-4 rounded-lg transition-colors group"
                >
                  <div className="bg-yellow-600 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                  <span className="group-hover:text-yellow-300 transition-colors">
                    डिजिटल इंडिया
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 p-4 rounded-lg transition-colors group"
                >
                  <div className="bg-yellow-600 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </div>
                  <span className="group-hover:text-yellow-300 transition-colors">
                    जन सुविधा पोर्टल
                  </span>
                </a>
              </div>

              <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                <h4 className="text-lg font-semibold mb-2 text-yellow-300">
                  सोशल मीडिया पर फॉलो करें
                </h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-[#3b5998] hover:bg-[#2d4373] w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-blue-400 hover:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 hover:bg-pink-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-red-600 hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <Image
                  src="/images/sandeep-logo.svg"
                  alt="संदीप जन सेवा केंद्र लोगो"
                  width={50}
                  height={50}
                  className="mr-3 drop-shadow-md"
                />
                <div>
                  <h2 className="text-2xl font-bold">
                    <span className="text-white">संदीप</span>{" "}
                    <span className="text-yellow-300">जन सेवा केंद्र</span>
                  </h2>
                  <p className="text-sm text-gray-400">
                    प्राइवेट सेवा प्रदाता - सरकार से संबद्ध नहीं
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                संदीप जन सेवा केंद्र एक प्राइवेट सेवा प्रदाता है जो उत्तर प्रदेश
                के नागरिकों को विभिन्न सरकारी सेवाओं के लिए आवेदन और फॉर्म भरने
                में सहायता प्रदान करता है। हमारा उद्देश्य है कि हर नागरिक को
                आसानी से और बिना किसी परेशानी के सभी सेवाओं का लाभ मिल सके।
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-300">
                जरूरी लिंक
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#hero"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    मुख्य पृष्ठ
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    सेवाएं
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    संपर्क करें
                  </a>
                </li>
                <li>
                  <a
                    href="#how-to-apply"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    आवेदन प्रक्रिया
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    गैलरी
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-300">
                संपर्क करें
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 mt-1"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-gray-400">
                    मुख्य कार्यालय, लखनऊ, उत्तर प्रदेश
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 mt-1"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-gray-400">
                    1800-XXX-XXXX (टोल फ्री)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 mt-1"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-gray-400">
                    contact@sandeep-janseva.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">
                © 2024 संदीप जन सेवा केंद्र, एक प्राइवेट सेवा प्रदाता।
                सर्वाधिकार सुरक्षित।
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  गोपनीयता नीति
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  नियम और शर्तें
                </Link>
                <Link
                  href="/accessibility"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  पहुंच
                </Link>
                <Link
                  href="/sitemap"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  साइटमैप
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
