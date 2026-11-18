"use client";

import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ApproachTeaser from "@/components/home/ApproachTeaser";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import CtaBand from "@/components/home/CtaBand";

export default function HomeView() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedProjects />
      <ApproachTeaser />
      <ServicesTeaser />
      <CtaBand />
    </>
  );
}
