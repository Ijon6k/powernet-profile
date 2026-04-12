import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";
import { PILLARS } from "@/constants/content";

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
            <div
                className="  absolute inset-0 z-0 opacity-[0.30]"
                style={{
                    backgroundImage:
                        "radial-gradient(#D12053 2px, transparent 1.5px)",
                    backgroundSize: "34px 34px",
                }}
            ></div>

            <div className=" container mx-auto px-4 md:px-8  max-w-screen-3xl relative z-10">
                <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] mb-8 tracking-tight">
                        Secure. Scalable. Proven. IT Solutions{" "}
                        <br className="hidden lg:block" /> for the Modern
                        Enterprise.
                    </h1>
                    <Button
                        variant="primary"
                        className="px-8 py-4 text-base rounded-full shadow-lg hover:shadow-primary/20 transition-all"
                    >
                        Free Consultation{" "}
                        <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                </div>

                <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {PILLARS.map((pillar) => (
                        <div
                            key={pillar.id}
                            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-300 flex items-start gap-5 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
                                <i
                                    className={`${pillar.icon} text-2xl flex items-center justify-center`}
                                ></i>
                            </div>

                            <div className="flex flex-col gap-1">
                                <h3 className="font-bold text-gray-900 text-xl tracking-tight">
                                    {pillar.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                    {pillar.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
