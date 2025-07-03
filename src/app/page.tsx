"use client";
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { Link as ScrollLink, Element } from 'react-scroll';
import { GithubIcon } from 'lucide-react';
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import CVSection from "../components/CVSection";

const techBadge = (name: string, color: string) => (
  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mr-2 mb-2 bg-gradient-to-r ${color} text-white shadow-md`}>{name}</span>
);

export default function Home() {
  return (
    <div>
      <Element name="about">
        <AboutSection />
      </Element>
      <div className="h-0" />
      <Element name="projects">
        <ProjectsSection />
      </Element>
      <div className="h-0" />
      <Element name="cv">
        <CVSection />
      </Element>
    </div>
  );
}
