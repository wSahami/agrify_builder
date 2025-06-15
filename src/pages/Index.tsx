import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FFF4DE] relative overflow-hidden">
      {/* Background semicircle in upper right - exact from Figma */}
      <div className="absolute top-[-187px] right-0">
        <svg
          width="964"
          height="964"
          viewBox="0 0 964 777"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[964px] h-[964px]"
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

      {/* Left sidebar navigation */}
      <div className="absolute left-[58px] top-[375px] z-10">
        {/* Selection highlight rounded rectangle */}
        <div className="w-[170px] h-[56px] bg-[#8BC53F] rounded-[45.5px] absolute"></div>

        {/* Logo */}
        <div className="absolute left-[27px] top-[15px] text-xl font-medium text-black">
          agrify.ai
        </div>
      </div>

      {/* Navigation menu items */}
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

      {/* Main hero text - positioned as in Figma */}
      <div className="absolute left-[341px] top-[590px] w-[567px] h-[252px] z-10">
        <h1 className="text-[128px] font-bold leading-[98.477%]">
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

      {/* Call-to-action buttons - positioned as in Figma */}
      <div className="absolute left-[1210px] top-[913px] z-10">
        <div className="flex items-center gap-[73px]">
          {/* Start growing button */}
          <button className="w-[181px] h-[56px] px-8 py-4 bg-[#006837] text-[#FFF4DE] rounded-[45.5px] text-xl font-medium hover:bg-[#004d26] transition-colors">
            start growing
          </button>

          {/* Contact us button and phone */}
          <div className="flex items-center gap-4">
            <button className="w-[191px] h-[56px] px-8 py-4 bg-[#8BC53F] text-black rounded-[45.5px] text-xl font-medium hover:bg-[#7AB332] transition-colors">
              contact us
            </button>

            <div className="w-[43px] h-[44px] bg-[#006837] rounded-[35.5px] flex items-center justify-center hover:bg-[#004d26] transition-colors cursor-pointer">
              <Phone className="w-5 h-5 text-[#FFF4DE]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
