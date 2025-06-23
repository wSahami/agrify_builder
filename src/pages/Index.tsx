import {
  Phone,
  Menu,
  X,
  Code,
  Database,
  Cloud,
  Shield,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll to section functionality
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Track active section and menu visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle menu visibility based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide menu
        setIsMenuVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        // Scrolling up or near top - show menu
        setIsMenuVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Handle active section tracking
      const sections = ["home", "tech", "solutions", "pricing"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-[#FFF4DE] relative">
      {/* Mobile menu toggle button */}
      <div className="lg:hidden absolute top-6 left-6 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 bg-[#8BC53F] rounded-full flex items-center justify-center"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#FFF4DE] z-40 p-6">
          <div className="pt-20">
            {/* Mobile logo */}
            <div className="mb-8">
              <div className="w-[170px] h-[56px] bg-[#8BC53F] rounded-[45.5px] flex items-center justify-center">
                <div className="text-xl font-medium text-black">agrify.ai</div>
              </div>
            </div>

            {/* Mobile navigation */}
            <nav className="space-y-6">
              <button
                onClick={() => scrollToSection("tech")}
                className="block text-2xl font-medium text-black hover:text-[#006837] transition-colors w-full text-left"
              >
                tech
              </button>
              <button
                onClick={() => scrollToSection("solutions")}
                className="block text-2xl font-medium text-black hover:text-[#006837] transition-colors w-full text-left"
              >
                solutions
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block text-2xl font-medium text-black hover:text-[#006837] transition-colors w-full text-left"
              >
                pricing
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop left sidebar navigation with moving highlight */}
      <div
        className={cn(
          "hidden lg:block fixed left-[58px] top-[375px] z-50 transition-all duration-300 ease-in-out",
          isMenuVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0",
        )}
      >
        {/* Moving selection highlight */}
        <div
          className={cn(
            "w-[170px] h-[56px] bg-[#8BC53F] rounded-[45.5px] absolute transition-all duration-300 ease-in-out",
            activeSection === "home" && "top-0",
            activeSection === "tech" && "top-[84px]",
            activeSection === "solutions" && "top-[168px]",
            activeSection === "pricing" && "top-[252px]",
          )}
        />

        {/* Logo */}
        <div className="relative left-[27px] top-[15px] text-xl font-medium text-black z-10">
          agrify.ai
        </div>
      </div>

      {/* Desktop navigation menu items */}
      <div
        className={cn(
          "hidden lg:block fixed left-[85px] top-[459px] z-50 transition-all duration-300 ease-in-out",
          isMenuVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0",
        )}
      >
        <nav className="space-y-[27px]">
          <button
            onClick={() => scrollToSection("tech")}
            className={cn(
              "block text-xl font-medium transition-colors py-3",
              activeSection === "tech"
                ? "text-[#006837]"
                : "text-black hover:text-[#006837]",
            )}
          >
            tech
          </button>
          <button
            onClick={() => scrollToSection("solutions")}
            className={cn(
              "block text-xl font-medium transition-colors py-3",
              activeSection === "solutions"
                ? "text-[#006837]"
                : "text-black hover:text-[#006837]",
            )}
          >
            solutions
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className={cn(
              "block text-xl font-medium transition-colors py-3",
              activeSection === "pricing"
                ? "text-[#006837]"
                : "text-black hover:text-[#006837]",
            )}
          >
            pricing
          </button>
        </nav>
      </div>

      {/* Dark green circle next to navigation - moves with the highlight */}
      <div
        className={cn(
          "hidden lg:block fixed left-[178px] w-[43px] h-[44px] bg-[#006837] rounded-[35.5px] z-50 transition-all duration-300 ease-in-out",
          // Move with the active section
          activeSection === "home" && "top-[382px]",
          activeSection === "tech" && "top-[466px]", // 382 + 84
          activeSection === "solutions" && "top-[550px]", // 382 + 168
          activeSection === "pricing" && "top-[634px]", // 382 + 252
          // Hide/show with menu
          isMenuVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0",
        )}
      ></div>

      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        {/* Main flexbox layout - Mobile: single column, Desktop: two columns */}
        <div
          className={cn(
            "min-h-screen flex",
            // Mobile: flex-col (stack vertically)
            "flex-col lg:flex-row",
            // Mobile: padding for mobile menu
            "pt-20 lg:pt-0",
          )}
        >
          {/* Mobile: SVG first */}
          <div
            className={cn(
              "relative flex items-center justify-center overflow-hidden",
              // Mobile: show first, full width
              "order-1 w-full h-64",
              // Desktop: hide (will be shown in right column)
              "lg:hidden",
            )}
          >
            <svg
              width="964"
              height="964"
              viewBox="0 0 964 777"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full max-w-none"
              style={{ marginTop: "-12%" }}
            >
              <g clipPath="url(#clip0_1_17)">
                <path d="M964 -187H0V777H964V-187Z" fill="#006837" />
                <path
                  d="M0 -187H964C964 345.42 532.42 777 0 777V-187Z"
                  fill="#8BC53F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_17">
                  <rect
                    width="964"
                    height="964"
                    fill="white"
                    transform="translate(0 -187)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Mobile: Text second, Desktop: Text column (left) */}
          <div
            className={cn(
              "flex flex-col justify-end",
              // Mobile: show second, full width, padding
              "order-2 w-full px-6 pb-8",
              // Desktop: half width, specific positioning
              "lg:order-1 lg:w-1/2 lg:pl-[341px] lg:pr-8 lg:pb-20",
            )}
          >
            <h1
              className={cn(
                "font-bold leading-[98.477%]",
                // Mobile: responsive sizing, center aligned
                "text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-center",
                // Desktop and large screens: responsive scaling
                "lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-[128px] lg:text-left",
                // Ensure text never overflows container
                "break-words hyphens-auto",
              )}
            >
              <span className="text-black">tech that</span>
              <br />
              <span
                className={cn(
                  "bg-gradient-to-r from-[#006837] via-[#006837] to-[#8BC53F] bg-clip-text text-transparent",
                )}
              >
                Grows
              </span>
            </h1>
          </div>

          {/* Mobile: Buttons third, Desktop: Right column - Background and buttons */}
          <div
            className={cn(
              "flex flex-col",
              // Mobile: show third, full width
              "order-3 w-full",
              // Desktop: show second, half width
              "lg:order-2 lg:w-1/2",
            )}
          >
            {/* Desktop only: Background SVG (circle and square) */}
            <div
              className={cn(
                "relative flex items-center justify-center overflow-hidden",
                // Mobile: hidden
                "hidden lg:flex",
                // Desktop: flex-1 to take available space
                "lg:flex-1",
              )}
            >
              <svg
                width="964"
                height="964"
                viewBox="0 0 964 777"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full max-w-none"
                style={{ marginTop: "-12%" }}
              >
                <g clipPath="url(#clip0_1_17)">
                  <path d="M964 -187H0V777H964V-187Z" fill="#006837" />
                  <path
                    d="M0 -187H964C964 345.42 532.42 777 0 777V-187Z"
                    fill="#8BC53F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_17">
                    <rect
                      width="964"
                      height="964"
                      fill="white"
                      transform="translate(0 -187)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Call-to-action buttons */}
            <div
              className={cn(
                "flex items-center justify-center p-6",
                // Mobile: flex-col on small screens
                "flex-col sm:flex-row gap-4",
                // Desktop: flex-row
                "lg:flex-row lg:gap-6 lg:pb-20",
              )}
            >
              <button
                className={cn(
                  "px-8 py-4 bg-[#006837] text-[#FFF4DE] rounded-[45.5px] text-xl font-medium hover:bg-[#004d26] transition-colors",
                  // Mobile: full width on small screens
                  "w-full sm:w-auto",
                  // Desktop: auto width to fit content
                  "lg:w-auto",
                )}
              >
                start growing
              </button>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <button
                  className={cn(
                    "px-8 py-4 bg-[#8BC53F] text-black rounded-[45.5px] text-xl font-medium hover:bg-[#7AB332] transition-colors",
                    // Mobile: flexible width
                    "flex-1 sm:flex-none",
                    // Desktop: auto width to fit content
                    "lg:w-auto",
                  )}
                >
                  contact us
                </button>

                <div className="w-[43px] h-[44px] bg-[#006837] rounded-[35.5px] flex items-center justify-center hover:bg-[#004d26] transition-colors cursor-pointer flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#FFF4DE]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="min-h-screen bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Advanced
              <span className="bg-gradient-to-r from-[#006837] to-[#8BC53F] bg-clip-text text-transparent">
                {" "}
                Technology
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge agricultural technology solutions powered by AI, IoT,
              and data analytics to revolutionize modern farming practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#FFF4DE] p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#8BC53F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-[#006837]" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                AI Analytics
              </h3>
              <p className="text-gray-600">
                Machine learning algorithms that analyze crop data and predict
                optimal growing conditions.
              </p>
            </div>

            <div className="bg-[#FFF4DE] p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#8BC53F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-[#006837]" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                IoT Sensors
              </h3>
              <p className="text-gray-600">
                Smart sensor networks that monitor soil moisture, temperature,
                and nutrient levels in real-time.
              </p>
            </div>

            <div className="bg-[#FFF4DE] p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#8BC53F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-[#006837]" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Cloud Platform
              </h3>
              <p className="text-gray-600">
                Scalable cloud infrastructure for data processing and remote
                farm management.
              </p>
            </div>

            <div className="bg-[#FFF4DE] p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#8BC53F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#006837]" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Security
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security to protect your agricultural data and
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="min-h-screen bg-[#FFF4DE] py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Complete
              <span className="bg-gradient-to-r from-[#006837] to-[#8BC53F] bg-clip-text text-transparent">
                {" "}
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive agricultural technology stack designed to optimize
              every aspect of your farming operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-8">
                Our Tech Stack
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#8BC53F] rounded-lg flex items-center justify-center">
                    <span className="text-[#006837] font-bold">AI</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      Artificial Intelligence
                    </h4>
                    <p className="text-gray-600">
                      TensorFlow, PyTorch, Computer Vision
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#8BC53F] rounded-lg flex items-center justify-center">
                    <span className="text-[#006837] font-bold">IoT</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      Internet of Things
                    </h4>
                    <p className="text-gray-600">
                      Arduino, Raspberry Pi, LoRaWAN
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#8BC53F] rounded-lg flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-[#006837]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      Cloud Infrastructure
                    </h4>
                    <p className="text-gray-600">
                      AWS, Azure, Google Cloud Platform
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#8BC53F] rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-[#006837]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      Data Analytics
                    </h4>
                    <p className="text-gray-600">
                      Apache Spark, MongoDB, PostgreSQL
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">
                Solution Benefits
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-[#8BC53F] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black">
                      Increased Crop Yield
                    </h4>
                    <p className="text-gray-600">
                      Up to 30% improvement in harvest output
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-[#8BC53F] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black">
                      Resource Efficiency
                    </h4>
                    <p className="text-gray-600">
                      25% reduction in water and fertilizer usage
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-[#8BC53F] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black">Cost Savings</h4>
                    <p className="text-gray-600">
                      20% reduction in operational costs
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-[#8BC53F] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-black">
                      Real-time Monitoring
                    </h4>
                    <p className="text-gray-600">
                      24/7 farm surveillance and alerts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="min-h-screen bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-6">
              Simple
              <span className="bg-gradient-to-r from-[#006837] to-[#8BC53F] bg-clip-text text-transparent">
                {" "}
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your farming operation. Scale up or
              down as your needs change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-[#FFF4DE] p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">Starter</h3>
                <div className="text-4xl font-bold text-[#006837] mb-2">
                  $99
                </div>
                <div className="text-gray-600">per month</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-gray-700">Up to 10 IoT sensors</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-gray-700">
                    Basic analytics dashboard
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-gray-700">Email notifications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-gray-700">5 acres coverage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-gray-700">24/7 support</span>
                </li>
              </ul>

              <button className="w-full py-3 px-6 bg-[#8BC53F] text-black rounded-full font-medium hover:bg-[#7AB332] transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-[#006837] p-8 rounded-2xl hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#8BC53F] text-black px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Professional
                </h3>
                <div className="text-4xl font-bold text-[#8BC53F] mb-2">
                  $299
                </div>
                <div className="text-[#FFF4DE]">per month</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-[#FFF4DE]">Up to 50 IoT sensors</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-[#FFF4DE]">Advanced AI analytics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-[#FFF4DE]">Real-time alerts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-[#FFF4DE]">50 acres coverage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-[#FFF4DE]">Priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-[#FFF4DE]">API access</span>
                </li>
              </ul>

              <button className="w-full py-3 px-6 bg-[#8BC53F] text-black rounded-full font-medium hover:bg-[#7AB332] transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#FFF4DE] p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Enterprise
                </h3>
                <div className="text-4xl font-bold text-[#006837] mb-2">
                  $999
                </div>
                <div className="text-gray-600">per month</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-gray-700">Unlimited IoT sensors</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-gray-700">Custom AI models</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-gray-700">White-label solution</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-gray-700">Unlimited coverage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-gray-700">
                    Dedicated account manager
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-[#8BC53F]" />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
              </ul>

              <button className="w-full py-3 px-6 bg-[#006837] text-[#FFF4DE] rounded-full font-medium hover:bg-[#004d26] transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
