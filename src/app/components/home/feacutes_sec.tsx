
"use client";
import FeaturesDiv from "../global/features";

// Features component
export default function FeaturesSec() {
    type Feature = {
        title: string;
        img: string;
        w: string;
    };
    const features1: Feature[] = [
        {
            title: "Accelerate",
            img: "features4.png",
            w: "15%",
        },
        {
            title: "Automate",
            img: "features5.png",
            w: "15%",
        },
        {
            title: "Curate",
            img: "features6.png",
            w: "30%",
        }
    ];
    const features: Feature[] = [
        {
            title: "Deploy",
            img: "features1.png",
            w: "30%",
        },
        {
            title: "Customize",
            img: "features2.png",
            w: "15%",
        },
        {
            title: "Access ",
            img: "features3.png",
            w: "15%",
        }
    ];
    return (
        <div className="w-[90%] mx-auto px-5 py-25 border-r-2 border-l-2 border-[#25252733] bg-[url(/img/features/features_bg.png)] bg-cover bg-no-repeat max-lg:p-2" id="features">
            <FeaturesDiv features={features} />
            <FeaturesDiv features={features1} />
        </div>
    );
}