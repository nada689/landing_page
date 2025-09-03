'use client'
import Image from "next/image";

type Logo = {
    title: string;
    img: string;
};

//Logos div
export default function LogosDiv({ logos , dirt }: { logos: Logo[] ,dirt:string}) {
    return (
        <div className="max-lg:flex max-lg:flex-wrap max-lg:justify-around max-lg:w-full max-lg:flex-row ">
            {logos.map((logo, index) => (
                <div key={index} className={`${dirt} flex flex-wrap justify-around max-lg:block max-lg:w-[45%] max-md:w-[95%]`}>
                    <div className="text-center border border-(--border) hover:border-(--foreground) p-10">
                        <Image
                            src={`/img/logos/${logo.img}`}
                            width={140}
                            height={100}
                            alt={logo.title}
                            className="mx-auto h-[80px] py-5 w-[50px] max-lg:w-auto"
                        />
                    </div>
                    <div className="text-center border border-(--border) p-10 max-lg:hidden">

                    </div>
                </div>
            ))}
        </div>
    )
}