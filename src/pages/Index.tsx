import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFF4DE] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="relative w-full h-full">
          {/* Dark green background */}
          <div className="absolute inset-0 bg-[#006837]"></div>
          {/* Light green curved overlay */}
          <div
            className="absolute inset-0 bg-[#8BC53F]"
            style={{
              clipPath: "circle(50% at 0% 50%)",
            }}
          ></div>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left sidebar navigation */}
        <div className="w-full lg:w-80 p-6 lg:p-14 flex flex-col">
          {/* Logo section */}
          <div className="mb-8 lg:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-[#8BC53F] rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-[#006837] rounded-full"></div>
              </div>
              <div className="text-xl font-medium text-black">agrify.ai</div>
            </div>
          </div>

          {/* Navigation menu */}
          <nav className="space-y-6 lg:space-y-8">
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

        {/* Main content area */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 lg:px-14 py-12 lg:py-20">
          {/* Hero text */}
          <div className="text-center max-w-4xl">
            <h1
              className={cn(
                "text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none",
                "bg-gradient-to-r from-[#006837] via-[#006837] to-[#8BC53F] bg-clip-text text-transparent",
                "mb-8 lg:mb-16",
              )}
            >
              tech that
              <br />
              Grows
            </h1>
          </div>

          {/* Call-to-action buttons */}
          <div className="flex items-center justify-center gap-6">
            <button className="px-8 py-4 bg-[#006837] text-[#FFF4DE] rounded-full text-xl font-medium hover:bg-[#004d26] transition-colors">
              start growing
            </button>

            <div className="flex items-center gap-4">
              <button className="px-8 py-4 bg-[#8BC53F] text-black rounded-full text-xl font-medium hover:bg-[#7AB332] transition-colors">
                contact us
              </button>

              <div className="w-11 h-11 bg-[#006837] rounded-full flex items-center justify-center hover:bg-[#004d26] transition-colors cursor-pointer">
                <Phone className="w-5 h-5 text-[#FFF4DE]" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Mobile responsive adjustments */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .clip-circle {
            clip-path: circle(60% at 0% 100%);
          }
        }

        @media (max-width: 768px) {
          .clip-circle {
            clip-path: circle(70% at 50% 0%);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;