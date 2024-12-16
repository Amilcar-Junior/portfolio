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
    technologies: ["Next.js", "MongoDB"],
    image: "./img/project/projectartista.png",
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
    technologies: ["React", "MySQL"],
    image: "./img/project/sandwatchcv.png",
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
    technologies: ["Python", "PostgreSQL", "XML", "Odoo"],
    image: "./img/project/health.png",
    link: "https://www.health.cv",
  },
  {
    title: {
      en: "RS2Lab System",
      pt: "RS2Lab System",
    },
    description: {
      en: "Sensor monitoring and actuator control system for agricultural areas.",
      pt: "Sistema de monitoramento de Sensores e Controlo de Atuadores para area agricula.",
    },
    technologies: ["Vue.js", "MQTT", "Node-Red", "MySQL"],
    image: "./img/project/rs2lab.png",
    link: "https://github.com/Amilcar-Junior/RS2LAB_UNICV",
  },
  {
    title: {
      en: "Web Scraper Open Food Facts",
      pt: "Web Scraper Open Food Facts",
    },
    description: {
      en: "API that extracts data from Open Food Facts, filtering products by Nutri-Score (A to E) and NOVA (degree of processing).",
      pt: "API que extrai dados do Open Food Facts, filtrando produtos por Nutri-Score (A a E) e NOVA (grau de processamento).",
    },
    technologies: ["JavaScript", "Node.js", "Puppeteer", "Swagger"],
    image: "./img/project/openfood.png",
    link: "https://github.com/Amilcar-Junior/puppeteer-open-food-facts",
  },
  {
    title: {
      en: "Laptops Web Scraper Api",
      pt: "Notebook Web Scraper Api",
    },
    description: {
      en: "This project is an API to collect and provide information about desktop products from a web scraping test page.",
      pt: "Este projeto é uma API para coletar e fornecer informações sobre produtos de desktops de uma página de testes de web scraping.",
    },
    technologies: ["JavaScript", "Node.js", "Puppeteer", "Swagger"],
    image: "./img/project/laptops.png",
    link: "https://github.com/Amilcar-Junior/web-scraper-laptops",
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
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="block"
    >
      <Card
        className={`relative overflow-hidden cursor-pointer ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <CardContent className="p-0">
          <div className="aspect-square relative">
            <Image
              src={project.image}
              alt={project.title[language]}
              fill
              className="object-cover"
            />
          </div>
          {hoveredIndex === index && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`absolute inset-0 ${
                isDark ? "bg-black/80" : "bg-white/80"
              } p-4 flex flex-col justify-between ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <div>
                <h3 className="text-lg font-bold mb-1">
                  {project.title[language]}
                </h3>
                <p className="text-xs mb-2">{project.description[language]}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold mb-1">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isDark
                          ? "bg-gray-700 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.a>
  );

  return (
    <section
      className={`min-h-screen ${
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

