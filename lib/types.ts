import { IconType } from 'react-icons'

export interface Technology {
  name: string;
  icon: IconType;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export type Language = 'en' | 'pt';

