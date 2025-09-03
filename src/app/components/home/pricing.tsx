
"use client";
import PricingDiv from "../global/pricing_sec";
import Image from "next/image";
// Features component
export default function Pricing() {
    type Price = {
        title: string;
        img: string;
        top_btn: string;
        w: string;
        price: string;
        text: string;
        content: string[];
        btn: string;
        btn_class: string;
    };

    const prices: Price[] = [
        {
            title: "Hobby",
            img: "hobby.png",
            top_btn: "hobby_btn",
            w: "20%",
            price: "$0",
            text: "Great for personal use or a first step to explore the Scout platform.",
            btn_class: "text-foreground bg-btns",
            btn: "Sign Up",
            content: ["100 Interactions (GPT-3.5 Only)", "Deploy 1 App", "Connect 1 Collection", "10GB of Storage", "Community Support (Discord)"],
        },
        {
            title: "Pro",
            img: "pro.png",
            top_btn: "pro_btn",
            w: "20%",
            price: "$50",
            text: "Perfect for building and scaling models with limited context.",
            btn_class: "bg-white text-black",
            btn: "Sign Up",
            content: ["Unlimited Interactions", "$0.09 per Interaction", "Deploy 10 Apps", "Connect 10 Collections", "1TB of Storage", "Community & Email Support"],
        },
        {
            title: "Enterprise",
            img: "enterprise.png",
            top_btn: "enterprise_btn",
            w: "20%",
            price: "Custom",
            text: "For large scale models with large and ever-changing context.",
            btn_class: "text-foreground bg-btns",
            btn: "Request Access",
            content: ["Unlimited Interactions", "Custom Interaction Pricing", "Unlimited Apps", "Unlimited Collections", "Unlimited Storage", "Dedicated Support"],
        }
    ];
    const price_last: Price[] = [
        {
            title: "Add On",
            img: "support.png",
            top_btn: "support_btn",
            w: "30%",
            price: "$750",
            text: "We are here to help get you started with a dedicated support engineer who can assist with scoping your first models and getting them deployed.",
            btn_class: "bg-white text-black",
            btn: "Request Access",
            content: ["Shared Slack Channel", "Dedicated Support Engineer", "Prompt Engineering Guidance", "Context Sourcing Guidance"],
        }
    ];
    return (
        <div className="w-[90%] border-r-2 border-l-2 border-[#25252733] p-20 mx-auto max-lg:p-2" id="pricing">
            <div className="py-10 text-center">            
                <h1 className="text-4xl pb-5">A plan for every need.</h1>
                <p className="text-xl text-sub">Whether you are just starting or require massive scale, we have a solution.</p>
            </div>
            <PricingDiv prices={prices} />
            {price_last.map((price, index) => (
                <div key={index} className={`text-center rounded-2xl border-2 border-[#25252733] hover:border hover:border-(--foreground) w-${price.w}  max-lg:w-full`}>
                    <div className={`flex flex-row-reverse max-lg:flex-wrap mx-auto w-full justify-center gap-1 p-2`}>
                        <div className="py-2 w-[45%] mb-10 border-2 rounded-r-2xl border-[#25252733] p-5 mx-auto max-lg:w-full max-lg:rounded-none max-lg:m-0">
                            <div className="text-center mx-auto">
                                <button className={`${price.top_btn} border rounded-3xl pr-5 justify-center p-2 text-sm flex gap-1 mx-auto`}>
                                    <Image
                                        src={`/img/pricing/${price.img}`}
                                        width={20}
                                        height={10}
                                        alt={price.title}
                                        className="rounded-full"
                                    />
                                    <p className="text-sub">{price.title}</p>
                                </button>
                                <div className="my-5">
                                    <p className="text-4xl">{price.price}</p>
                                    <p className="text-sub">monthly</p>
                                </div>
                            </div>
                            <div className="text-left">
                                <input type="button" value={price.btn} className={`${price.btn_class} text-center rounded-3xl py-2 w-[95%] text-xl`} />
                                <p className="text-sm mt-2 text-sub">No long term contract obligation.</p>
                            </div>
                        </div>
                        <div className="support_left py-2 border-2 border-[#25252733] rounded-l-2xl p-5 max-lg:w-full max-lg:rounded-none  max-lg:py-0">
                            <div className="text-left">
                                <p className="text-4xl">Dedicated Support</p>
                                <p className="text-sub mt-5">{price.text}</p>
                                <p className="text-sub mt-5">What’s included</p>
                            </div>
                            <div className="flex flex-wrap mt-5">
                                {price.content.map((content, index) => (
                                    <div key={index} className="w-[45%] flex gap-5 items-center text-sub flex-wrap">
                                        <Image
                                            src={`/img/pricing/icon.png`}
                                            width={20}
                                            height={10}
                                            alt={"btn"}
                                            className="h-auto my-auto"
                                        />
                                        <p>{content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            ))}

        </div >
    );
}