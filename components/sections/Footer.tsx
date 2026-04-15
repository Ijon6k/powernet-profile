import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
            <div className="mx-auto px-6 md:px-16 max-w-[1920px]">
                <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-20">
                    <div className="flex-1 lg:max-w-2xl">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2 leading-tight mt-2 lg:whitespace-nowrap">
                            Transform Your Digital Future Today
                        </h3>
                        <p className="text-base md:text-lg text-gray-600 w-full lg:w-[80%] mb-10 font-medium leading-relaxed">
                            Get in touch with us to explore customized IT
                            solutions that enhance efficiency and foster
                            innovation.
                        </p>
                        <button
                            className="px-8 py-4 text-lg bg-primary-50 text-primary rounded-full font-bold transition-all border-none flex items-center justify-center gap-3 hover:shadow-[0_5px_15px_rgba(184,59,94,0.3)] cursor-pointer"
                        >
                            <span className="text-primary">Contact Us</span>
                            <i className="fi fi-rr-call-outgoing leading-none h-fit pb-[2px] text-xl text-primary"></i>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-20">
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-8">
                                Services
                            </h4>
                            <ul className="space-y-6 text-base text-gray-500">
                                <li>
                                    <a
                                        href="/services/network"
                                        className="hover:text-primary transition-colors lg:whitespace-nowrap"
                                    >
                                        Network & Maintenance
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services/software"
                                        className="hover:text-primary transition-colors lg:whitespace-nowrap"
                                    >
                                        Software Development
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services/ai"
                                        className="hover:text-primary transition-colors lg:whitespace-nowrap"
                                    >
                                        Artificial Intelligence
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-8">
                                Products
                            </h4>
                            <ul className="space-y-6 text-base text-gray-500">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors lg:whitespace-nowrap"
                                    >
                                        KelolaLimbah
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors lg:whitespace-nowrap"
                                    >
                                        PINTAR AI
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-8">
                                Social Media
                            </h4>
                            <ul className="space-y-6 text-base text-gray-500">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Garis Bawah & Copyright */}
                <div className="pt-8 border-t-2 border-gray-100 flex justify-center md:justify-end">
                    <p className="text-base text-gray-400 font-medium text-center md:text-right">
                        Copyright © {new Date().getFullYear()} POWERNET. All
                        Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
