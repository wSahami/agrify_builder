import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF4DE] relative overflow-hidden">
      {/* Background semicircle - responsive positioning */}
      <div className="absolute top-[-187px] right-0 lg:top-[-187px] lg:right-0 md:top-[-100px] md:right-[-200px] sm:top-[-50px] sm:right-[-300px]">
        <svg
          width="964"
          height="964"
          viewBox="0 0 964 777"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[964px] h-[964px] lg:w-[964px] lg:h-[964px] md:w-[600px] md:h-[600px] sm:w-[400px] sm:h-[400px]"
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
              <a
                href="#tech"
                className="block text-2xl font-medium text-black hover:text-[#006837] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                tech
              </a>
              <a
                href="#solutions"
                className="block text-2xl font-medium text-black hover:text-[#006837] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                solutions
              </a>
              <a
                href="#pricing"
                className="block text-2xl font-medium text-black hover:text-[#006837] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                pricing
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop left sidebar navigation */}
      <div className="hidden lg:block">
        <div className="absolute left-[58px] top-[375px] z-10">
          {/* Selection highlight rounded rectangle */}
          <div className="w-[170px] h-[56px] bg-[#8BC53F] rounded-[45.5px] absolute"></div>

          {/* Logo */}
          <div className="absolute left-[27px] top-[15px] text-xl font-medium text-black">
            agrify.ai
          </div>
        </div>

        {/* Desktop navigation menu items */}
        <div className="absolute left-[85px] top-[459px] z-10">
          <nav className="space-y-[27px]">
            <a
              href="#tech"
              className="block text-xl font-medium text-black hover:text-[#006837] transition-colors"
            >
              tech
            </a>
            <a
              href="#solutions"
              className="block text-xl font-medium text-black hover:text-[#006837] transition-colors"
            >
              solutions
            </a>
            <a
              href="#pricing"
              className="block text-xl font-medium text-black hover:text-[#006837] transition-colors"
            >
              pricing
            </a>
          </nav>
        </div>

        {/* Small green circle next to navigation */}
        <div className="absolute left-[178px] top-[382px] w-[43px] h-[44px] bg-[#006837] rounded-[35.5px] z-10"></div>
      </div>

      {/* Main hero text - responsive positioning */}
      <div
        className={cn(
          "z-10 w-full max-w-[567px]",
          // Mobile: centered and below the background elements (SVG goes from -187px to 777px)
          "absolute left-1/2 transform -translate-x-1/2 top-[800px] text-center px-6",
          // Desktop: positioned as in Figma
          "lg:absolute lg:left-[341px] lg:top-[590px] lg:w-[567px] lg:h-[252px] lg:text-left lg:transform-none lg:px-0",
        )}
      >
        <h1
          className={cn(
            "font-bold leading-[98.477%]",
            // Mobile sizing
            "text-4xl sm:text-5xl md:text-6xl",
            // Desktop sizing
            "lg:text-[128px]",
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

      {/* Call-to-action buttons - responsive positioning */}
      <div
        className={cn(
          "z-10",
          // Mobile: centered below text
          "absolute left-1/2 transform -translate-x-1/2 top-[650px] w-full px-6",
          // Desktop: positioned as in Figma
          "lg:absolute lg:left-[1210px] lg:top-[913px] lg:transform-none lg:w-auto lg:px-0",
        )}
      >
        <div
          className={cn(
            "flex items-center gap-4",
            // Mobile: vertical stack
            "flex-col sm:flex-row sm:justify-center",
            // Desktop: horizontal with specific gap
            "lg:gap-[73px] lg:flex-row",
          )}
        >
          {/* Start growing button */}
          <button
            className={cn(
              "px-8 py-4 bg-[#006837] text-[#FFF4DE] rounded-[45.5px] text-xl font-medium hover:bg-[#004d26] transition-colors",
              // Mobile: full width on small screens
              "w-full sm:w-auto",
              // Desktop: fixed width
              "lg:w-[181px] lg:h-[56px]",
            )}
          >
            start growing
          </button>

          {/* Contact us button and phone */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button
              className={cn(
                "px-8 py-4 bg-[#8BC53F] text-black rounded-[45.5px] text-xl font-medium hover:bg-[#7AB332] transition-colors",
                // Mobile: flexible width
                "flex-1 sm:flex-none",
                // Desktop: fixed width
                "lg:w-[191px] lg:h-[56px]",
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
  );
};

export default Index;
