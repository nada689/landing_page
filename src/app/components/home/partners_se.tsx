'use client'
import Image from "next/image";
import PartnersDiv from "../global/partners_div";

type Logo = {
    title: string;
    img: string;
};

const partners1: Logo[] = [
    {
        title: "statsig",
        img: "partner1.png",
    }, {
        title: "Deno",
        img: "partner2.png",
    },
    {
        title: "Model",
        img: "partner4.png",
    },
    {
        title: "hyper",
        img: "partner5.png",
    },

];
const partners2: Logo[] = [
    {
        title: "evidence",
        img: "partner6.png",
    },
    {
        title: "dagster",
        img: "partner3.png",
    },
    {
        title: "case status",
        img: "partner7.png",
    }, {
        title: "DIG SOUTH ",
        img: "partner8.png",
    }
];

//Partners section
export default function Partners() {
    return (
        <div className="">
            <PartnersDiv logos={partners1} />
            <div className="w-[90%] px-20 mx-auto border-r-2 border-l-2 border-[#25252733] max-lg:p-2">
                <h1 className="text-4xl w-[60%] mx-auto text-center max-md:w-[90%] py-15 my-auto ">Used by teams at Statsig, Deno, Dagster, Evidence and more.</h1>
            </div>
            <PartnersDiv logos={partners2} />
        </div>
    )
}