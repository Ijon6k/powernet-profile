"use client";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Check } from "lucide-react";

export default function NetworkServicePage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white max-w-[1920px] mx-auto overflow-x-hidden">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden bg-white bg-custom-dots">
                    <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] mb-6 tracking-tight">
                            Resilient Network Architecture for High-Stake Operations
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Experience comprehensive end-to-end infrastructure management powered by proactive maintenance strategies. We ensure your business achieves peak performance through ultra-fast, low-latency connectivity and robust, enterprise-grade security layers.
                        </p>
                        <Button
                            variant="primary"
                            className="px-8 py-3 bg-primary text-white hover:bg-primary/90 rounded-full font-medium transition-colors flex items-center justify-center gap-0"
                            onClick={() => window.location.href = '/'}
                        >
                            <span>Consult Now</span>
                            <i className="fi fi-rr-call-outgoing leading-none"></i>
                        </Button>
                    </div>
                </section>

                {/* Section 2: Integrated Network Infrastructure Solutions */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-4">Integrated Network Infrastructure Solutions</h2>
                            <p className="text-lg md:text-xl font-medium text-gray-600 max-w-4xl mx-auto">
                                A technical overview of connectivity services designed to support operational stability and data scalability through fiber optic infrastructure.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-auto md:h-[500px] group flex flex-col justify-end border border-gray-100">
                                {/* BACKGROUND IMAGE */}
                                <img src="/image/networkimage1.svg" alt="Private Fiber" className="absolute inset-0 w-full h-full object-cover" />
                                {/* Dark overlay to darken the image */}
                                <div className="absolute inset-0 bg-black/40 z-[5]"></div>
                                {/* Dark Red gradient layer - reduced height and deeper color */}
                                <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#6b122b]/95 via-[#6b122b]/40 to-transparent z-10"></div>
                                <div className="relative z-20 p-8 lg:p-10">
                                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Private Fiber & High-Speed Access</h3>
                                    <p className="text-sm lg:text-base text-gray-100 leading-relaxed font-medium">
                                        High-speed fiber optic channel with direct pool and 1:1 CIR ratio. We provide dedicated symmetric bandwidth to ensure your business stays connected with maximum reliability.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-auto md:h-[500px] group flex flex-col justify-end border border-gray-100">
                                {/* BACKGROUND IMAGE */}
                                <img src="/image/networkimage2.svg" alt="Server Infrastructure" className="absolute inset-0 w-full h-full object-cover" />
                                {/* Dark overlay to darken the image */}
                                <div className="absolute inset-0 bg-black/40 z-[5]"></div>
                                {/* Dark Red gradient layer - reduced height and deeper color */}
                                <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#6b122b]/95 via-[#6b122b]/40 to-transparent z-10"></div>
                                <div className="relative z-20 p-8 lg:p-10">
                                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Full-Manage Server Infrastructure</h3>
                                    <p className="text-sm lg:text-base text-gray-100 leading-relaxed font-medium">
                                        Comprehensive hardware and software solutions with 24/7 monitoring. We handle performance optimization and system upgrades so your applications always run smoothly and reliably.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-auto md:h-[500px] group flex flex-col justify-end border border-gray-100">
                                {/* BACKGROUND IMAGE */}
                                <img src="/image/networkimage3.svg" alt="Infra Management" className="absolute inset-0 w-full h-full object-cover" />
                                {/* Dark overlay to darken the image */}
                                <div className="absolute inset-0 bg-black/40 z-[5]"></div>
                                {/* Dark Red gradient layer - reduced height and deeper color */}
                                <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#6b122b]/95 via-[#6b122b]/40 to-transparent z-10"></div>
                                <div className="relative z-20 p-8 lg:p-10">
                                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Proactive Infra Management & SLA</h3>
                                    <p className="text-sm lg:text-base text-gray-100 leading-relaxed font-medium">
                                        Professional maintenance, security management, and proactive adaptation. Our technical team ensures constant supervision and rapid support to keep your infrastructure secure and online.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Future-Ready Cloud Infrastructure */}
                <section className="py-20 bg-gray-50/50">
                    <div className="container mx-auto px-4 md:px-12 max-w-screen-2xl">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">Future-Ready Cloud Infrastructure</h2>
                            <p className="text-lg md:text-xl font-medium text-gray-600 max-w-4xl">
                                A high-performance and flexible cloud environment designed for seamless remote access and resilient data protection. Our solutions allow you to scale resources instantly while maintaining maximum security and operational visibility.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded-2xl p-6 lg:p-6 lg:pt-12  shadow-sm flex flex-col border border-gray-100 border-l-2 border-b-2 border-l-primary border-b-primary text-left group hover:shadow-md transition-shadow">
                                <div className="w-full h-24 lg:h-32 mb-6">
                                    <img src="/illustrations/network/High performance server 1.svg" alt="Seamless Remote Access" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex flex-col gap-2 mt-auto pb-4">
                                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">01 Seamless Remote Access</h3>
                                    <p className="text-sm lg:text-base font-medium text-gray-600 leading-relaxed">Safeguard your digital assets with advanced protocols and multi-layered authentication for maximum privacy.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 lg:p-6 lg:pt-12  shadow-sm flex flex-col border border-gray-100 border-l-2 border-b-2 border-l-primary border-b-primary text-left group hover:shadow-md transition-shadow">
                                <div className="w-full h-24 lg:h-32 mb-6">
                                    <img src="/illustrations/network/High nnnserver 1.svg" alt="Automated Data Security" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex flex-col gap-2 mt-auto pb-4">
                                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">02 Automated Data Security</h3>
                                    <p className="text-sm lg:text-base font-medium text-gray-600 leading-relaxed">Safeguard your digital assets with advanced protocols and multi-layered authentication for maximum privacy.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 lg:p-6 lg:pt-12  shadow-sm flex flex-col border border-gray-100 border-l-2 border-b-2 border-l-primary border-b-primary text-left group hover:shadow-md transition-shadow">
                                <div className="w-full h-24 lg:h-32 mb-6">
                                    <img src="/illustrations/network/High nnnserver (1) 1.svg" alt="On-Demand Scalability" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex flex-col gap-2 mt-auto pb-4">
                                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">03 On-Demand Scalability</h3>
                                    <p className="text-sm lg:text-base font-medium text-gray-600 leading-relaxed">Safeguard your digital assets with advanced protocols and multi-layered authentication for maximum privacy.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 lg:p-6 lg:pt-12  shadow-sm flex flex-col border border-gray-100 border-l-2 border-b-2 border-l-primary border-b-primary text-left group hover:shadow-md transition-shadow">
                                <div className="w-full h-24 lg:h-32 mb-6">
                                    <img src="/illustrations/network/High nnnserver (2) 1.svg" alt="Optimized Cost Efficiency" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex flex-col gap-2 mt-auto pb-4">
                                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">04 Optimized Cost Efficiency</h3>
                                    <p className="text-sm lg:text-base font-medium text-gray-600 leading-relaxed">Safeguard your digital assets with advanced protocols and multi-layered authentication for maximum privacy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Secure Communication & Digital Defense */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5\">Secure Communication & Digital Defense</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
                                Protect your data and professional identity with integrated cyber security and enterprise-grade hosting solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            {/* Card 1 */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden">
                                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 w-4/5 leading-snug">Cyber Security & Threat Defense</h3>
                                <p className="text-gray-700 font-semibold text-lg mb-8">
                                    Complete protection for your web applications and data interfaces. We monitor, filter, and shield your digital ecosystem from evolving cyber threats 24/7.
                                </p>

                                <ul className="space-y-6">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 text-primary w-5 h-5 border-2 border-primary/50 rounded flex items-center justify-center">
                                            <Check className="w-3 h-3 stroke-[4]" />
                                        </div>
                                        <div>
                                            <span className="font-extrabold text-gray-900 text-base">Web Application Firewall (WAF): </span>
                                            <span className="text-gray-600 text-base">Advanced Layer 7 filtering that monitors and blocks malicious traffic (malware, exploits, and bots) before they reach your server.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 text-primary w-5 h-5 border-2 border-primary/50 rounded flex items-center justify-center">
                                            <Check className="w-3 h-3 stroke-[4]" />
                                        </div>
                                        <div>
                                            <span className="font-extrabold text-gray-900 text-base">Secure API Management: </span>
                                            <span className="text-gray-600 text-base">Ensures data integrity and confidentiality for all API-directed connections, preventing the 'loose doors' to your applications.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 text-primary w-5 h-5 border-2 border-primary/50 rounded flex items-center justify-center">
                                            <Check className="w-3 h-3 stroke-[4]" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900">Comprehensive Threat Prevention: </span>
                                            <span className="text-gray-600">Active defense against high-risk attacks, including:</span>
                                            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                                                <li>DDoS Mitigation: Prevent system downtime caused by traffic surges.</li>
                                                <li>SQL Injection & XSS Defense: Stop hackers from stealing or deleting your database.</li>
                                                <li>Session Security: Prevent unauthorized web session hijacking.</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden">
                                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 w-4/5 leading-snug">Professional Hosting & Email Services</h3>
                                <p className="text-gray-700 font-semibold text-lg mb-8">
                                    Establish a credible digital identity with secure, high-performance communication and hosting solutions. We provide the infrastructure to keep your business connected and professional.
                                </p>

                                <ul className="space-y-6">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 text-primary w-5 h-5 border-2 border-primary/50 rounded flex items-center justify-center">
                                            <Check className="w-3 h-3 stroke-[4]" />
                                        </div>
                                        <div>
                                            <span className="font-extrabold text-gray-900 text-base">Enterprise Email: </span>
                                            <span className="text-gray-600 text-base">Fully managed solutions for Zimbra and Zoho Mail with custom domains and secure authentication.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 text-primary w-5 h-5 border-2 border-primary/50 rounded flex items-center justify-center">
                                            <Check className="w-3 h-3 stroke-[4]" />
                                        </div>
                                        <div>
                                            <span className="font-extrabold text-gray-900 text-base">Reliable Web Hosting: </span>
                                            <span className="text-gray-600 text-base">Premium website and email management powered by the industry-standard cPanel platform.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 text-primary w-5 h-5 border-2 border-primary/50 rounded flex items-center justify-center">
                                            <Check className="w-3 h-3 stroke-[4]" />
                                        </div>
                                        <div>
                                            <span className="font-extrabold text-gray-900 text-base">Integrated Security: </span>
                                            <span className="text-gray-600 text-base">Proactive defense with Anti-Spam, Anti-Virus, and multi-platform protection for your inbox.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
