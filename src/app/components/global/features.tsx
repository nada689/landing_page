'use client'
import Image from "next/image";

type Feature = {
    title: string;
    img: string;
    w: string;
};

//Features div
export default function FeaturesDiv({ features }: { features: Feature[] }) {
    return (
            <div className={`flex max-lg:flex-wrap mx-auto w-full justify-center gap-1 py-2`}>
                {features.map((feature, index) => (
                    <div key={index} className={`text-center rounded-3xl hover:border hover:border-(--foreground) w-${feature.w} max-lg:w-[45%] max-md:w-[95%]`}>
                        <Image
                            src={`/img/features/${feature.img}`}
                            width={300}
                            height={400}
                            alt={feature.title}
                            className="mx-auto h-[400px] w-fit"
                        />
                    </div>
                ))}
            </div>
    )
}