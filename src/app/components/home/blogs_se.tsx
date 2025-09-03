'use client'
import Image from "next/image";
import LogosDiv from "../global/logo_div";

type Logo = {
    title: string;
    img: string;
};

const partners1: Logo[] = [
    {
        title: "statsig",
        img: "Image.png",
    }, {
        title: "dagster",
        img: "Image1.png",
    },
    {
        title: "hyper",
        img: "Image2.png",
    },


];
const partners2: Logo[] = [
    {
        title: "DIG SOUTH",
        img: "Image3.png",
    },
    {
        title: "case status",
        img: "Image4.png",
    },
    {
        title: "Model",
        img: "Image5.png",
    }
];

//Partners section
export default function Blogs() {
    return (
        <div id="blogs" className="w-full">
            <div className="w-[90%] border-r-2 border-l-2 border-[#25252733] px-20 mx-auto flex flex-wrap items-center max-lg:block max-lg:p-2">
                <LogosDiv logos={partners1} dirt={"flex-row-reverse"} />
                <div className="w-[50%] mx-auto text-center max-md:w-[90%] bg-[url(/img/logos/blogs_background.png)] bg-cover bg-no-repeat max-lg:py-15"> 
                    <h1 className="text-3xl">&quot;Scout is an indispensable tool for our Engineering, DS and Sales teams to engage with our customers. We rely on Scout daily, making it an integral part of our operations.&quot;</h1>
                    <Image
                        src={`/img/logos/icon.png`}
                        width={80}
                        height={80}
                        alt={"icon"}
                        className="rounded-full mx-auto mt-5"
                    />
                    <h2 className="text-xl">Vijaye Raji</h2>
                    <p className="text-xl text-sub">CEO of Statsig</p>
                    </div>

                <LogosDiv logos={partners2} dirt={"flex-row"} />
            </div>

        </div>
    )
}