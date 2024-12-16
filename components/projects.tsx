"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useSettings } from "@/contexts/settings-context";
import { TRANSLATIONS } from "@/lib/constants";
import { SectionWrapper } from "./section-wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    title: {
      en: "Artista CV",
      pt: "Artista CV",
    },
    description: {
      en: "The art of Cape Verde in one place.",
      pt: "A arte de Cabo Verde em um só lugar.",
    },
    image: "/img/project/projectartista.png",
    link: "https://www.artista.cv",
  },
  {
    title: {
      en: "Sandwatch CV",
      pt: "Sandwatch CV",
    },
    description: {
      en: "Sandwatch is a program that mobilizes communities to protect their beaches.",
      pt: "O Sandwatch é um programa que mobiliza comunidades para proteger suas praias.",
    },
    image: "/img/project/sandwatchcv.png",
    link: "https://sandwatch.cv/sobre-nos",
  },
  {
    title: {
      en: "Health 360 System",
      pt: "Health 360 System",
    },
    description: {
      en: "A complete healthcare solution.",
      pt: "Uma solução completa da área de saúde.",
    },
    image: "/img/project/health.png",
    link: "https://www.health.cv",
  },
];

export function Projects() {
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

  const ProjectCard = ({
    project,
    index,
  }: {
    project: (typeof projects)[0];
    index: number;
  }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        className={`relative overflow-hidden cursor-pointer ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <CardContent className="p-0">
          <Image
            src={project.image}
            alt={project.title[language]}
            width={500}
            height={300}
            className="w-full aspect-square object-cover"
          />
          {hoveredIndex === index && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`absolute inset-0 ${
                isDark ? "bg-black/80" : "bg-white/80"
              } p-6 flex flex-col justify-center items-center ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">
                {project.title[language]}
              </h3>
              <p className="text-center">{project.description[language]}</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section
      className={`h-screen ${
        isDark ? "bg-black" : "bg-white"
      } py-24 flex flex-col justify-center`}
      id="projects"
    >
      <SectionWrapper>
        <div className="container mx-auto px-4">
          <h2
            className={`text-4xl font-bold text-center mb-12 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {TRANSLATIONS[language].projects}
          </h2>

          {isMobile ? (
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="w-full"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>
    </section>
  );
}
