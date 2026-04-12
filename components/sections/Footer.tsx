import React from "react";
import NextImage from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";

export const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
            <div className=" mx-auto px-4  md:px-8 md:max-w-screen-xl w-screen-xl max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    <div className="lg:col-span-5">
                        <div className="mb-6 flex items-center gap-2">
                            <NextImage
                                src="/logos/LOGO.svg"
                                alt="PowerNet Logo"
                                width={160}
                                height={45}
                                className="opacity-90"
                            />
                        </div>
                        <h3 className="text-3xl font-bold text-primary mb-4 leading-tight">
                            Transform Your Digital <br /> Future Today
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-sm">
                            Get in touch with us to explore customized IT
                            solutions that enhance efficiency and foster
                            innovation.
                        </p>
                        <Button variant="outline" className="px-8 py-3">
                            Contact Us <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6">
                                Services
                            </h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Network & Maintenance
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Software Development
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                    >
                                        Artificial Intelligence
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-6">
                                Products
                            </h4>
                            <ul className="space-y-4 text-sm text-gray-500">
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
                            <h4 className="font-bold text-gray-900 mb-6">
                                Social Media
                            </h4>
                            <ul className="space-y-4 text-sm text-gray-500">
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
                <div className="pt-8 border-t-2 border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-1 opacity-40 grayscale">
                        <NextImage
                            src="/logos/LOGO.svg"
                            alt="PowerNet Logo"
                            width={100}
                            height={28}
                        />
                    </div>
                    <p className="text-sm text-gray-400 font-medium">
                        Copyright © {new Date().getFullYear()} POWERNET. All
                        Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
