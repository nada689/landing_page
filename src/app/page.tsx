import Image from "next/image";
import Link from "next/link";
import Hero from "./components/home/hero_sec";
import HeroImg from "./components/home/hero_img";
import NavBar from "./components/global/nav_bar";
import Partners from "./components/home/partners_se";
import Blogs from "./components/home/blogs_se";
import Footer from "./components/global/footer_sec";
import FeaturesSec from "./components/home/feacutes_sec";
import Pricing from "./components/home/pricing";
export default function Home() {
  return (
    <main className="font-Inter !overflow-x-hidden w-full">
      <NavBar />
      <Hero />
      <hr className="text-[#25252733]" />
      <HeroImg />
      <hr className="text-[#25252733]" />
      <Partners />
      <hr className="text-[#25252733]" />
      <FeaturesSec />
      <hr className="text-[#25252733]" />
      <Blogs />
      <hr className="text-[#25252733]" />
      <div className="bg-[url(/img/features/features_bg.png)] bg-cover bg-no-repeat">
        <Pricing />
      </div>
      <hr className="text-[#25252733]" />
      <Footer />
    </main>
  );
}
