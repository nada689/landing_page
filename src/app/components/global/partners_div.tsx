'use client'
import Image from "next/image";

type Logo = {
    title: string;
    img: string;
};

//Partners icons
export default function PartnersDiv({ logos }: { logos: Logo[] }) {
    return (
        <div className="">
            <hr className="text-[#25252733]" />
            <div className="w-[90%] border-r-2 border-l-2 border-[#25252733] mx-auto px-20 flex-wrap justify-around flex flex-row items-center max-lg:w-[90%] max-lg:p-2">
                {logos.map((logo, index) => (
                    <div key={index} className="text-center border border-(--border) hover:border-(--foreground) w-1/4 p-10 max-lg:w-[45%] max-md:w-[95%] ">
                        <Image
                            src={`/img/partners/${logo.img}`}
                            width={80}
                            height={80}
                            alt={logo.title}
                            className="mx-auto h-[30px]"
                        />
                    </div>
                ))}
            </div>
            <hr className="text-[#25252733]" />
        </div>
    )
}