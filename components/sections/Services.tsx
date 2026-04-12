import React from "react";
import NextImage from "next/image";
import { ChevronRight } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";

export const Services = () => {
    return (
        <section id="services" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
                <SectionHeader
                    title="Integrated Institutional IT Solutions"
                    highlight="Integrated"
                    subtitle="Scalable architectures designed for organizational resilience."
                />

                <div className="flex flex-col gap-6 md:gap-8 mt-16">
                    <div className="bg-[#FAFAFA] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative group border border-transparent hover:border-primary/10 transition-all duration-500">
                        <div className="md:w-1/2 z-10">
                            <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-3 block">
                                Service
                            </span>
                            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                Managed Network & Proactive Maintenance
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed max-w-md text-lg">
                                Our managed NOC delivers round-the-clock
                                monitoring and expert maintenance to prevent
                                interruptions and optimize performance.
                            </p>
                            <Button variant="outline">
                                Explore{" "}
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                        </div>

                        <div className="md:w-1/2 flex justify-center items-center relative">
                            <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
                                <div className="absolute w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                                <div className="relative w-full h-full">
                                    <NextImage
                                        src="/illustrations/network.svg"
                                        alt="Managed Network Illustration"
                                        fill
                                        className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="bg-[#FAFAFA] rounded-3xl p-8 md:p-12 flex flex-col h-full group border border-transparent hover:border-primary/10 hover:shadow-xl transition-all duration-500">
                            <div className="mb-8 flex-grow">
                                <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-3 block">
                                    Service
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                    Advanced AI & Machine Learning
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Future-proof your organization with custom
                                    AI integrations. Dari analitik prediktif
                                    hingga otomatisasi workflow.
                                </p>
                            </div>
                            <Button variant="outline" className="mb-12 w-fit">
                                Explore{" "}
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                            <div className="w-full h-64 relative mt-auto">
                                <NextImage
                                    src="/illustrations/software.svg"
                                    alt="AI Illustration"
                                    fill
                                    className="object-contain transform group-hover:-translate-y-2 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <div className="bg-[#FAFAFA] rounded-3xl p-8 md:p-12 flex flex-col h-full group border border-transparent hover:border-primary/10 hover:shadow-xl transition-all duration-500">
                            <div className="mb-8 flex-grow">
                                <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-3 block">
                                    Service
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                    Tailored Software Development
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    We build scalable, high-performance software
                                    tailored to your organizational needs.
                                </p>
                            </div>
                            <Button variant="outline" className="mb-12 w-fit">
                                Explore{" "}
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                            <div className="w-full h-64 relative mt-auto">
                                <NextImage
                                    src="/illustrations/ai.svg"
                                    alt="Software Development Illustration"
                                    fill
                                    className="object-contain transform group-hover:-translate-y-2 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
