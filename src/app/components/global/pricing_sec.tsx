'use client'
import Image from "next/image";

type Price = {
    title: string;
    img: string;
    w: string;
    top_btn: string;
    price: string;
    text: string;
    content: string[];
    btn: string;
    btn_class: string;
};

//Prices div
export default function PricingDiv({ prices }: { prices: Price[] }) {
    return (
        <div className={`flex max-lg:flex-wrap mx-auto w-full justify-center gap-5 my-2`}>
            {prices.map((price, index) => (

                <div key={index} className={price.title === "Pro" ?`relative pro text-center rounded-3xl p-5 hover:border hover:border-(--foreground) w-${price.w} max-lg:w-[45%] max-md:w-[95%] border-2 border-[#25252733]`:`text-center rounded-3xl p-5 hover:border hover:border-(--foreground) w-${price.w} max-lg:w-[45%] max-md:w-[95%] border-2 border-[#25252733]`}>
                    <input type="button" value={"Most Popular"} className={price.title === "Pro" ?` mx-auto absolute bottom-[95%] most_btn right-[25%] border border-[#ffffff0a] rounded-3xl py-2 w-[50%] text-md`:"hidden"} />

                    <div className="py-5 ">
                        <button className={`${price.top_btn} border rounded-3xl p-2 pr-5 text-sm flex gap-1 mt-5`}>
                            <Image
                                src={`/img/pricing/${price.img}`}
                                width={20}
                                height={10}
                                alt={price.title}
                                className="rounded-full"
                            />
                            <p className="text-sub">{price.title}</p>
                        </button>
                        <div className="text-left py-5">
                            <p className="text-4xl">{price.price}</p>
                            <p className="text-sub">{price.text}</p>
                        </div>
                        <input type="button" value={price.btn} className={`${price.btn_class} rounded-3xl py-2 w-[95%] text-xl`} />
                    </div>
                    {price.content.map((content, index) => (
                        <div key={index} className="flex gap-5 items-center">
                            <Image
                                src={`/img/pricing/icon.png`}
                                width={20}
                                height={10}
                                alt={"btn"}
                                className=""
                            />
                            {content}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}