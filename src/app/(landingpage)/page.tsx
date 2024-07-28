"use client"

import { Button } from "@/components/ui/button";
import BannerSignUp from "@/components/organisms/BannerSignUp";
import Category from "@/components/organisms/Category";
import Clients from "@/components/organisms/Clients";
import FeaturedJobs from "@/components/organisms/FeaturedJobs";
import Hero from "@/components/organisms/Hero";
import Image from "next/image";
import LatestJobs from "@/components/organisms/LatestJob";
import { useTranslation } from "react-i18next";

export default function Home() {
  const {t} = useTranslation()
 
  return (
    <>
      <div className="absolute w-2/3 h-screen top-0 right-0 -z-10">
        <Image src="/images/pattern.png" alt="/images/pattern.png" fill />
      </div>
      
      <div className="px-32">
        <Hero />
        <Clients />
        <Category />
        <BannerSignUp />
        <FeaturedJobs />
        <LatestJobs />
      </div>
    </>
  );
}
