import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Info, Phone } from "lucide-react";

export default function AIServicePage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white max-w-[1920px] mx-auto overflow-x-hidden">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 md:pt-48 pb-24 overflow-hidden bg-white">
                    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                            
                            {/* Left Column: Content */}
                            <div className="max-w-xl">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.25] mb-6">
                                    Enterprise AI Architectures: <br className="hidden md:block" />
                                    Engineering Precision, Automating Complexity
                                </h1>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    PowerNET deploys <span className="font-bold text-gray-900">custom-engineered AI models</span>—from Computer Vision to Advanced NLP—built for high-stakes environments. We integrate high-accuracy automation directly into your infrastructure while ensuring total data sovereignty and zero workflow disruption.
                                </p>
                                
                                <div className="flex flex-wrap items-center gap-4">
                                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#fce8ef] text-primary hover:bg-[#fbdde7] font-medium transition-colors text-sm">
                                        Learn More <Info className="w-4 h-4 ml-1" />
                                    </button>
                                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#b83b5e] text-white hover:bg-[#9f3150] font-medium transition-colors shadow-lg shadow-primary/20 text-sm">
                                        Free Consultation <Phone className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            </div>
                            
                            {/* Right Column: 2x2 Grid */}
                            <div className="w-full max-w-lg lg:ml-auto">
                                <div className="grid grid-cols-2 border border-gray-200 bg-white">
                                    {/* Box 1 */}
                                    <div className="p-8 md:p-10 flex flex-col items-center text-center border-r border-b border-gray-200">
                                        <div className="w-20 h-20 bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 rounded-lg">
                                            <span className="text-xs text-gray-400 font-medium">Icon</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-3 leading-tight">NLP Intelligence</h3>
                                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Automated extraction and semantic analysis for enterprise data.</p>
                                    </div>
                                    
                                    {/* Box 2 */}
                                    <div className="p-8 md:p-10 flex flex-col items-center text-center border-b border-gray-200">
                                        <div className="w-20 h-20 bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 rounded-lg">
                                            <span className="text-xs text-gray-400 font-medium">Icon</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-3 leading-tight">Visual Recognition</h3>
                                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Industrial-grade object detection with 99.9% precision.</p>
                                    </div>
                                    
                                    {/* Box 3 */}
                                    <div className="p-8 md:p-10 flex flex-col items-center text-center border-r border-gray-200">
                                        <div className="w-20 h-20 bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 rounded-lg">
                                            <span className="text-xs text-gray-400 font-medium">Icon</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-3 leading-tight">Cognitive Logic</h3>
                                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Predictive modeling to optimize complex decision-making.</p>
                                    </div>
                                    
                                    {/* Box 4 */}
                                    <div className="p-8 md:p-10 flex flex-col items-center text-center">
                                        <div className="w-20 h-20 bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 rounded-lg">
                                            <span className="text-xs text-gray-400 font-medium">Icon</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-3 leading-tight">Secure Infrastructure</h3>
                                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">Privacy-first AI integration via encrypted on-premise systems.</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
