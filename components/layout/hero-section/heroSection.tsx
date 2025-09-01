import React from "react";
import { HeroSectionProps } from "@/types/heroSection";

/**
 * HeroSection Component
 * 
 * Ce composant représente la section "Hero" de notre page
 * 
 * @param {HeroSectionProps} props - Les propriétés du composant
 * @param {React.ReactNode} props.children - Les éléments enfants passés au HeroSection
 * 
 * @returns {JSX.Element} Une section hero affichant les enfants
 */
const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        {children}
      </div>
    </div>
  );
};

export default HeroSection;