import { NavItem, Technology } from './types'
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiCss3,
  SiHtml5,
  SiFigma,
  SiPycharm,
  SiPuppeteer
} from 'react-icons/si'
import { FaAws, FaSpider } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'
import { DiCodeBadge } from 'react-icons/di'

export const TECHNOLOGIES: Technology[] = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: FaAws },
  { name: "CSS", icon: SiCss3 },
  { name: "HTML", icon: SiHtml5 },
  { name: "Figma", icon: SiFigma },
  { name: "VS Code", icon: VscCode },
  { name: "PyCharm", icon: SiPycharm },
  { name: "Odoo", icon: DiCodeBadge },
  { name: "Crawler", icon: FaSpider },
  { name: "Puppeteer", icon: SiPuppeteer }
]

export const NAV_ITEMS: Record<'en' | 'pt', NavItem[]> = {
  en: [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Companies', href: '#companies' },
    { label: 'Contact', href: '#contact' },
  ],
  pt: [
    { label: 'Habilidades', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Empresas', href: '#companies' },
    { label: 'Contato', href: '#contact' },
  ],
};

export const TRANSLATIONS = {
  en: {
    greeting: "Hi, I'm Amílcar Júnior",
    role: "SOFTWARE ENGINEER",
    tagline: "building the future of technology",
    skills: "Skills",
    projects: "Projects",
    collaboration: "I'm proud to have collaborated with some amazing companies:",
    footer: "Living, evolving, and reaching new heights every day.",
    typing: [
      "get ready to turn your ideas into reality",
      "crafting innovative solutions",
      "building the future of technology",
      "solving complex problems with elegant code"
    ]
  },
  pt: {
    greeting: "Olá, sou Amílcar Júnior",
    role: "ENGENHEIRO DE SOFTWARE",
    tagline: "construindo o futuro da tecnologia",
    skills: "Habilidades",
    projects: "Projetos",
    collaboration: "Tenho orgulho de ter colaborado com algumas empresas incríveis:",
    footer: "Vivendo, evoluindo e alcançando novos patamares todos os dias.",
    typing: [
      "prepare-se para transformar suas ideias em realidade",
      "criando soluções inovadoras",
      "construindo o futuro da tecnologia",
      "resolvendo problemas complexos com código elegante"
    ]
  },
}

