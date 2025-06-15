import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFF4DE] relative overflow-hidden">
      {/* Background semicircle in upper right */}
      <div className="absolute top-0 right-0">
        <svg
          width="964"
          height="777"
          viewBox="0 0 964 777"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[964px] h-[777px]"
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

      {/* Main content container */}
      <div className="relative z-10 flex min-h-screen">
        {/* Left sidebar navigation */}
        <div className="w-80 p-14 flex flex-col">
          {/* Logo section with highlight */}
          <div className="mb-16">
            <div className="relative mb-4">
              {/* Selection highlight rounded rectangle */}
              <div className="absolute -left-4 -top-2 w-44 h-14 bg-[#8BC53F] rounded-[45.5px]"></div>
              <div className="relative flex items-center gap-3 py-3 px-4">
                <div className="text-xl font-medium text-black">agrify.ai</div>
              </div>
            </div>
          </div>

          {/* Navigation menu */}
          <nav className="space-y-8">
            <a
              href="#tech"
              className="block text-xl font-medium text-black hover:text-[#006837] transition-colors py-3"
            >
              tech
            </a>
            <a
              href="#solutions"
              className="block text-xl font-medium text-black hover:text-[#006837] transition-colors py-3"
            >
              solutions
            </a>
            <a
              href="#pricing"
              className="block text-xl font-medium text-black hover:text-[#006837] transition-colors py-3"
            >
              pricing
            </a>
          </nav>
        </div>

        {/* Main content area positioned to the side of the semicircle */}
        <div className="flex-1 flex flex-col justify-center items-start px-14 py-20 max-w-2xl">
          {/* Hero text */}
          <div className="text-left">
            <h1 className="text-[128px] font-bold leading-[98.477%] mb-16">
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

            {/* Call-to-action buttons */}
            <div className="flex items-center gap-6">
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
    </div>
  );
};

export default Index;
