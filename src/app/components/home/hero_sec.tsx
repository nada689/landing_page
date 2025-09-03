"use client";
import Image from "next/image";
import Link from "next/link";
//landing section 
export default function Hero() {
  return (
    <>
      <div className="px-20 w-[90%] mx-auto border-r-2 border-l-2 line max-lg:p-2 max-lg:h-auto">
        <div className={"relative h-screen border-r-2 border-l-2 line mx-auto"}>
          <Image
            src="/img/home/Hero_Image.png"
            width={1400}
            height={280}
            className={"w-full"}
            alt={"home"}
          />
          <div className={"absolute text-foreground w-[80%] mx-auto inset-x-0 top-1/5 text-center max-lg:w-11/12 "}>
            <button className="rounded-3xl py-3 w-[55%] mb-10 text-xl text-foreground bg-btns max-lg:w-[80%]">⁎ scout <span className="text-sub">is currently in beta</span> &gt;</button>
            <h1 className="text-6xl home_text mb-5 max-md:text-4xl">AI for teams building what&apos;s next.</h1>
            <p className="text-xl text-sub">
              Scout gives you the tools to build custom agents and workflows in record time.
            </p>
            <input type="button" value="Get Started >" className="bg-foreground rounded-3xl py-3 w-2/6 mt-10 text-xl text-background max-lg:w-[80%]" />
          </div>
        </div>
        <hr className="text-[#25252733]" />
      </div>
    </>
  );
}
