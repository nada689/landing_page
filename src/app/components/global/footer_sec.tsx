'use client'
import Link from 'next/link';
import Image from "next/image";

type Logo = {
    title: string;
    img: string;
};

const footer: Logo[] = [
    {
        title: "slack",
        img: "slack.png",
    },
    {
        title: "x",
        img: "x.png",
    },
    {
        title: "linkedin",
        img: "linkedin.png",
    },

];
//Footer component
export default function Footer() {
    return (
        <>
            <div className="text-foreground border-r-2 border-l-2 border-[#25252733] px-20 w-[90%] py-5 mx-auto max-lg:p-2 ">
                <div className="flex flex-wrap pt-20 pb-2 px-20 justify-between flex-row bg-[url(/img/footer/footer_background.png)] bg-cover bg-no-repeat max-lg:p-2">
                    <div className="max-lg:w-1/2 max-md:w-[90%]">
                        <h2 className="text-3xl font-bold">⁎ scout</h2>
                        <button className="border rounded-3xl p-2 text-sm flex gap-1 footer_btn mt-5">
                            <Image
                                src={`/img/footer/dot.png`}
                                width={20}
                                height={10}
                                alt={"btn"}
                                className="opacity-80 backdrop-blur-3xl"
                            />
                            <p>ALL SYSTEMS OPERATIONAL</p>
                        </button>
                    </div>
                    <div className="w-[20%] flex flex-wrap flex-col max-lg:w-1/2 max-md:w-[90%]">
                        <h2 className="text-xl text-sub">Links</h2>
                        <Link
                            className="font-bold"
                            href={`#`}
                        >
                            Features
                        </Link>
                        <Link
                            className="font-bold"
                            href={`#`}
                        >
                            Pricing
                        </Link>
                        <Link
                            className="font-bold"
                            href={`#`}
                        >
                            Docs
                        </Link>
                        <Link
                            className="font-bold"
                            href={`#`}
                        >
                            Blog
                        </Link>
                    </div>
                    <div className="w-[20%] flex flex-wrap flex-col max-lg:w-1/2 max-md:w-[90%]">
                        <h2 className="text-xl text-sub">Solutions</h2>
                        <Link
                            className="font-bold"
                            href={`#`}
                        >
                            Slack Bot
                        </Link>
                        <Link
                            className="font-bold"
                            href={`#`}
                        >
                            Discord Bot
                        </Link>
                        <Link
                            className="font-bold"
                            href={`#`}
                        >
                            Command
                        </Link>
                        <Link
                            className="font-bold"
                            href={`#`}
                        >
                            Onsite Chat
                        </Link>
                    </div>
                    <div className="w-[20%] flex flex-wrap flex-col max-lg:w-1/2 max-md:w-[90%]">
                        <h2 className="text-xl text-sub">Legal</h2>
                        <Link
                            className="font-bold"
                            href={`#`}
                        >
                            Terms of Service
                        </Link>
                        <Link
                            className="font-bold"
                            href={`#`}
                        >
                            Privacy Policy
                        </Link>

                    </div>
                </div>
            </div>
            <footer className="pb-32 border-r-2 border-l-2 border-[#25252733] w-[90%] mx-auto">
            <hr className="text-(--border)" />
            <div className="text-foreground max-lg:p-2 px-20">
                <div className="flex justify-between  items-center pl-20 max-md:flex-col max-md:p-2">
                    <h2 className="text-xl text-sub">Copyright © 2024 Scout. All rights reserved.</h2>
                    <div className="flex">
                        {footer.map((foo) => (
                            <Image
                                key={foo.title}
                                src={`/img/footer/${foo.img}`}
                                width={70}
                                height={70}
                                alt={foo.title}
                                className="border border-(--border) p-5"
                            />))}
                    </div>
                </div>
            </div>
            <hr className="text-(--border)" />
            </footer>
        </>
    )
}