"use client";
import Image from "next/image";

//about image component
export default function HeroImg() {
    return (
        <>
            <div className="px-20 w-[90%] mx-auto border-r-2 border-l-2 border-[#25252733] max-lg:p-2">
                <Image
                    src="/img/home/screen.png"
                    width={900}
                    height={300}
                    alt={"hero_img"}
                    className="mx-auto max-lg:h-auto w-full border-r-2 border-l-2 border-[#25252733] "
                />
            </div>
            <hr className="text-[#25252733]" />
            <div className="w-[90%] px-20 py-15 mx-auto border-r-2 border-l-2 border-[#25252733]"></div>
        </>
    );
}
