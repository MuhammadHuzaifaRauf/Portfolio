import React from "react";
import SocialLinks from "../socialLinks/SocialLinks";
import Posts from "../posts/Posts";
import HeroSection from "../heroSection/HeroSection";

export default function Main() {
  return (
    <main className="flex flex-col gap-20">
      <HeroSection />

      <Posts />

      <SocialLinks />
    </main>
  );
}
