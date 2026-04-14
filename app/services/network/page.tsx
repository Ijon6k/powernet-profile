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
                <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden bg-white">
                    <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] mb-6 tracking-tight">
                            Resilient Network Architecture for High-Stake Operations
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Experience comprehensive end-to-end infrastructure management powered by proactive maintenance strategies. We ensure your business achieves peak performance through ultra-fast, low-latency connectivity and robust, enterprise-grade security layers.
                        </p>
                        <Button
                            variant="primary"
                            className="px-8 py-3 bg-primary text-white hover:bg-primary/90 rounded-full font-medium transition-colors"
                        >
                            Consult Now
                        </Button>
                    </div>
                </section>

                {/* Section 2: Integrated Network Infrastructure Solutions */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Integrated Network Infrastructure Solutions</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                A technical overview of connectivity services designed to support operational stability and data scalability through fiber optic infrastructure.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-auto md:h-[450px] group flex flex-col justify-end border border-gray-100">
                                {/* PLACEHOLDER IMAGE */}
                                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400 text-sm font-medium">Image Placeholder</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent z-10"></div>
                                <div className="relative z-20 p-8">
                                    <h3 className="text-xl font-bold text-white mb-3">Private Fiber & High-Speed Access</h3>
                                    <p className="text-gray-200 text-sm leading-relaxed">
                                        High-speed fiber optic channel with direct pool and 1:1 CIR ratio. We provide dedicated symmetric bandwidth to ensure your business stays connected with maximum reliability.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Card 2 */}
                            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-auto md:h-[450px] group flex flex-col justify-end border border-gray-100">
                                {/* PLACEHOLDER IMAGE */}
                                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400 text-sm font-medium">Image Placeholder</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent z-10"></div>
                                <div className="relative z-20 p-8">
                                    <h3 className="text-xl font-bold text-white mb-3">Full-Manage Server Infrastructure</h3>
                                    <p className="text-gray-200 text-sm leading-relaxed">
                                        Comprehensive hardware and software solutions with 24/7 monitoring. We handle performance optimization and system upgrades so your applications always run smoothly and reliably.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Card 3 */}
                            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-auto md:h-[450px] group flex flex-col justify-end border border-gray-100">
                                {/* PLACEHOLDER IMAGE */}
                                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                                    <span className="text-gray-400 text-sm font-medium">Image Placeholder</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent z-10"></div>
                                <div className="relative z-20 p-8">
                                    <h3 className="text-xl font-bold text-white mb-3">Proactive Infra Management & SLA</h3>
                                    <p className="text-gray-200 text-sm leading-relaxed">
                                        Professional maintenance, security management, and proactive adaptation. Our technical team ensures constant supervision and rapid support to keep your infrastructure secure and online.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Future-Ready Cloud Infrastructure */}
                <section className="py-20 bg-gray-50/50">
                    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Future-Ready Cloud Infrastructure</h2>
                            <p className="text-gray-600 max-w-4xl">
                                A high-performance and flexible cloud environment designed for seamless remote access and resilient data protection. Our solutions allow you to scale resources instantly while maintaining maximum security and operational visibility.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between border border-gray-100 border-l-2 border-b-2 border-l-primary border-b-primary">
                                <div className="w-16 h-16 bg-gray-50 rounded-xl mb-6 flex items-center justify-center text-primary border border-gray-100">
                                    <span className="text-xs text-gray-400 font-medium text-center">Icon<br/>Placeholder</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">01 Seamless Remote Access</h3>
                                    <p className="text-sm text-gray-600">Safeguard your digital assets with advanced protocols and multi-layered authentication for maximum privacy.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between border border-gray-100 border-l-2 border-b-2 border-l-primary border-b-primary">
                                <div className="w-16 h-16 bg-gray-50 rounded-xl mb-6 flex items-center justify-center text-primary border border-gray-100">
                                    <span className="text-xs text-gray-400 font-medium text-center">Icon<br/>Placeholder</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">02 Automated Data Security</h3>
                                    <p className="text-sm text-gray-600">Safeguard your digital assets with advanced protocols and multi-layered authentication for maximum privacy.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between border border-gray-100 border-l-2 border-b-2 border-l-primary border-b-primary">
                                <div className="w-16 h-16 bg-gray-50 rounded-xl mb-6 flex items-center justify-center text-primary border border-gray-100">
                                    <span className="text-xs text-gray-400 font-medium text-center">Icon<br/>Placeholder</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">03 On-Demand Scalability</h3>
                                    <p className="text-sm text-gray-600">Safeguard your digital assets with advanced protocols and multi-layered authentication for maximum privacy.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between border border-gray-100 border-l-2 border-b-2 border-l-primary border-b-primary">
                                <div className="w-16 h-16 bg-gray-50 rounded-xl mb-6 flex items-center justify-center text-primary border border-gray-100">
                                    <span className="text-xs text-gray-400 font-medium text-center">Icon<br/>Placeholder</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">04 Optimized Cost Efficiency</h3>
                                    <p className="text-sm text-gray-600">Safeguard your digital assets with advanced protocols and multi-layered authentication for maximum privacy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Secure Communication & Digital Defense */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Secure Communication & Digital Defense</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Protect your data and professional identity with integrated cyber security and enterprise-grade hosting solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            {/* Card 1 */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden">
                                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 w-4/5 leading-snug">Cyber Security & Threat Defense</h3>
                                <p className="text-gray-700 font-medium mb-8">
                                    Complete protection for your web applications and data interfaces. We monitor, filter, and shield your digital ecosystem from evolving cyber threats 24/7.
                                </p>
                                
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 text-primary w-5 h-5 border border-primary/30 rounded flex items-center justify-center">
                                            <Check className="w-3 h-3 stroke-[3]" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900">Web Application Firewall (WAF): </span>
                                            <span className="text-gray-600">Advanced Layer 7 filtering that monitors and blocks malicious traffic (malware, exploits, and bots) before they reach your server.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 text-primary w-5 h-5 border border-primary/30 rounded flex items-center justify-center">
                                            <Check className="w-3 h-3 stroke-[3]" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900">Secure API Management: </span>
                                            <span className="text-gray-600">Ensures data integrity and confidentiality for all API-directed connections, preventing the 'loose doors' to your applications.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 text-primary w-5 h-5 border border-primary/30 rounded flex items-center justify-center">
                                            <Check className="w-3 h-3 stroke-[3]" />
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
                                <p className="text-gray-700 font-medium mb-8">
                                    Establish a credible digital identity with secure, high-performance communication and hosting solutions. We provide the infrastructure to keep your business connected and professional.
                                </p>
                                
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 text-primary w-5 h-5 border border-primary/30 rounded flex items-center justify-center">
                                            <Check className="w-3 h-3 stroke-[3]" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900">Enterprise Email: </span>
                                            <span className="text-gray-600">Fully managed solutions for Zimbra and Zoho Mail with custom domains and secure authentication.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 text-primary w-5 h-5 border border-primary/30 rounded flex items-center justify-center">
                                            <Check className="w-3 h-3 stroke-[3]" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900">Reliable Web Hosting: </span>
                                            <span className="text-gray-600">Premium website and email management powered by the industry-standard cPanel platform.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 text-primary w-5 h-5 border border-primary/30 rounded flex items-center justify-center">
                                            <Check className="w-3 h-3 stroke-[3]" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900">Integrated Security: </span>
                                            <span className="text-gray-600">Proactive defense with Anti-Spam, Anti-Virus, and multi-platform protection for your inbox.</span>
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
