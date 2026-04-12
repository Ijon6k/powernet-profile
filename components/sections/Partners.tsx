import React from "react";
import NextImage from "next/image";
import { SectionHeader } from "../ui/SectionHeader";
import { PARTNERS } from "@/constants/content";

export const Partners = () => {
    return (
        <section className="py-20 bg-white border-y border-gray-50">
            <div className="container mx-auto px-4 text-center max-w-7xl">
                <SectionHeader
                    title="Validated by Leaders in Government and Enterprise."
                    highlight="Leaders"
                    subtitle="Kami bangga berkolaborasi dengan institusi ternama untuk membangun ekosistem digital yang aman."
                />

                <div className="mt-16 overflow-hidden relative w-full">
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
                        {PARTNERS.map((partner, idx) => (
                            <div
                                key={idx}
                                className="relative w-40 h-20 md:w-52 md:h-28 transition-transform duration-300 hover:scale-110"
                            >
                                <NextImage
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                    priority={idx < 5}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
