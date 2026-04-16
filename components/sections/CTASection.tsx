"use client";
import React from "react";
import { motion } from "framer-motion";

export const CTASection = () => {
    return (
        <section className="py-24 max-w-screen-2xl bg-neutral-2 mx-auto  overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#83213f] leading-tight mb-12 max-w-6xl mx-auto">
                        <span className="inline-block border-b-2 border-[#83213f] pb-1">
                            Powering Enterprise
                        </span>{" "}
                        Efficiency. Accelerating Your Strategic Growth.
                    </h2>

                    <div className="flex justify-center">
                        <button
                            className="flex items-center gap-3 px-8 py-4 bg-primary-50 text-primary rounded-full font-bold text-lg hover:shadow-[0_5px_15px_rgba(184,59,94,0.15)] transition-all cursor-pointer group"
                            onClick={() => window.location.href = '#'}
                        >
                            <span>Scale with PowerNET</span>
                            <i className="fi fi-rr-comment leading-none  text-lg"></i>

                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
