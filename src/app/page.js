"use client";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeSection } from "@/components/HomeSection";
import { SkillSection } from "@/components/SkillSection";

export default function Home() {
  return (
    <main>
    <Header />
    <HomeSection/>
    <AboutSection/>
    <SkillSection/>
    <ContactSection/>
    <Footer/>
    </main>
  );
}
