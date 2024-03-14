import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HomeSection } from "@/components/HomeSection";
import { SkillSection } from "@/components/SkillSection";

export default function Home() {
  return (
    <main>
    <HomeSection/>
    <AboutSection/>
    <SkillSection/>
    <ContactSection/>
    </main>
  );
}
