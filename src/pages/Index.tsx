import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="hidden lg:block absolute left-[58px] top-[375px] z-50">
        {/* Selection highlight rounded rectangle */}
        <div className="w-[170px] h-[56px] bg-[#8BC53F] rounded-[45.5px] absolute"></div>

        {/* Logo */}
        <div className="absolute left-[27px] top-[15px] text-xl font-medium text-black">
          agrify.ai
        </div>
      </div>

      {/* Desktop navigation menu items */}
      <div className="hidden lg:block absolute left-[85px] top-[459px] z-50">
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
      <div className="hidden lg:block absolute left-[178px] top-[382px] w-[43px] h-[44px] bg-[#006837] rounded-[35.5px] z-50"></div>

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
        {/* Left column - Text content */}
        <div
          className={cn(
            "flex flex-col justify-end",
            // Mobile: full width, padding
            "w-full px-6 pb-8 lg:pb-20",
            // Desktop: half width, specific positioning
            "lg:w-1/2 lg:pl-[341px] lg:pr-8",
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

        {/* Right column - Background and buttons */}
        <div
          className={cn(
            "flex flex-col",
            // Mobile: full width
            "w-full",
            // Desktop: half width
            "lg:w-1/2",
          )}
        >
          {/* Top row - Background SVG (circle and square) */}
          <div
            className={cn(
              "flex-1 relative flex items-center justify-center",
              // Mobile: smaller height
              "h-64 lg:h-auto",
            )}
          >
            <svg
              width="964"
              height="964"
              viewBox="0 0 964 777"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                // Take full width and height of container
                "w-full h-full max-w-none",
              )}
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

          {/* Bottom row - Call-to-action buttons */}
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
    </div>
  );
};

export default Index;
