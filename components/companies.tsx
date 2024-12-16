"use client";

import { useState, useEffect } from "react";
import { useSettings } from "@/contexts/settings-context";
import { TRANSLATIONS } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from 'next/image';
import "swiper/css";
import "swiper/css/pagination";

const companies = [
  {
    name: "Company 1",
    logo: "/img/company/artistacv.png?height=100&width=100",
  },
  {
    name: "Company 2",
    logo: "/img/company/devnology.png?height=100&width=100",
  },
  {
    name: "Company 3",
    logo: "/img/company/health360.png?height=100&width=100",
  },
  {
    name: "Company 4",
    logo: "/img/company/ministeriocultura.png?height=100&width=100",
  },
  { name: "Company 5", logo: "/img/company/unesco.png?height=100&width=100" },
];

export function Companies() {
  const { language, isDark } = useSettings();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const CompanyLogo = ({
    company,
    index,
  }: {
    company: (typeof companies)[0];
    index: number;
  }) => (
    <div
      className={`aspect-square rounded-lg ${
        isDark ? "bg-gray-800/50" : "bg-gray-100"
      } 
        p-6 flex items-center justify-center transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <Image
        src={company.logo}
        alt={company.name}
        width={500}
        height={300}
        className={`w-full h-full object-contain transition-all duration-300 ease-in-out
          ${
            hoveredIndex === index
              ? ""
              : isDark
              ? "invert brightness-0 opacity-70"
              : "brightness-0 opacity-70"
          }`}
      />
    </div>
  );

  return (
    <section
      className={`h-screen ${
        isDark ? "bg-black" : "bg-white"
      } flex flex-col justify-center`}
      id="companies"
    >
      <SectionWrapper>
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-16 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {TRANSLATIONS[language].collaboration}
          </h2>

          {isMobile ? (
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="w-full"
            >
              {companies.map((company, index) => (
                <SwiperSlide key={index}>
                  <CompanyLogo company={company} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
              {companies.map((company, index) => (
                <CompanyLogo key={index} company={company} index={index} />
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>
    </section>
  );
}
