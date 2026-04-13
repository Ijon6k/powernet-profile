"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";
import { NAV_LINKS } from "@/constants/content";
import Image from "next/image";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}
        >
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <Image
                            src="/logos/LOGO.svg"
                            alt="PowerNet Logo"
                            width={150}
                            height={40}
                        />
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-base font-medium text-gray-700 hover:text-primary transition-colors flex items-center gap-1"
                            >
                                {link.label}
                                {link.hasDropdown && (
                                    <ChevronRight className="w-3 h-3 rotate-90" />
                                )}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Button variant="outline" className="text-sm font-medium px-6 py-2.5">
                            Consult Now <ChevronRight className="w-3 h-3" />
                        </Button>
                    </div>

                    <button
                        className="md:hidden p-2 text-gray-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="p-3 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-lg"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button variant="primary" className="w-full mt-2">
                        Consult Now
                    </Button>
                </div>
            )}
        </header>
    );
};
