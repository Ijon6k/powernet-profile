import React from "react";
import NextImage from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";

export const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
            <div className="mx-auto px-4 md:px-8 max-w-screen-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    <div className="lg:col-span-5">
                        <h3 className="text-4xl font-bold text-primary mb-4 leading-tight mt-2">
                            Transform Your Digital <br /> Future Today
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-sm">
                            Get in touch with us to explore customized IT
                            solutions that enhance efficiency and foster
                            innovation.
                        </p>
                        <Button variant="outline" className="px-8 py-3 flex items-center justify-center gap-0">
                            <span>Contact Us</span>
                            <i className="fi fi-rr-call-outgoing leading-none"></i>
                        </Button>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-6">
                                Services
                            </h4>
                            <ul className="space-y-4 text-base text-gray-500">
                                <li>
                                    <a
                                        href="/services/network"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Network & Maintenance
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services/software"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Software Development
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services/ai"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Artificial Intelligence
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-6">
                                Products
                            </h4>
                            <ul className="space-y-4 text-base text-gray-500">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        KelolaLimbah
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        PINTAR AI
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-6">
                                Social Media
                            </h4>
                            <ul className="space-y-4 text-base text-gray-500">
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
