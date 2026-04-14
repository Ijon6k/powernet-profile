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
                                        <div className="w-18 h-18 flex items-center justify-center mb-6">
                                            <img src="/illustrations/ai/ai1.svg" alt="Icon" className="w-full h-full object-contain" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-3 leading-tight">NLP Intelligence</h3>
                                        <p className="text-sm md:text-base font-medium text-gray-600 leading-relaxed">Automated extraction and semantic analysis for enterprise data.</p>
                                    </div>

                                    {/* Box 2 */}
                                    <div className="p-8 md:p-10 flex flex-col items-center text-center border-b border-gray-200">
                                        <div className="w-18 h-18 flex items-center justify-center mb-6">
                                            <img src="/illustrations/ai/ai2.svg" alt="Icon" className="w-full h-full object-contain" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-3 leading-tight">Visual Recognition</h3>
                                        <p className="text-sm md:text-base font-medium text-gray-600 leading-relaxed">Industrial-grade object detection with 99.9% precision.</p>
                                    </div>

                                    {/* Box 3 */}
                                    <div className="p-8 md:p-10 flex flex-col items-center text-center border-r border-gray-200">
                                        <div className="w-18 h-18 flex items-center justify-center mb-6">
                                            <img src="/illustrations/ai/ai3.svg" alt="Icon" className="w-full h-full object-contain" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-3 leading-tight">Cognitive Logic</h3>
                                        <p className="text-sm md:text-base font-medium text-gray-600 leading-relaxed">Predictive modeling to optimize complex decision-making.</p>
                                    </div>

                                    {/* Box 4 */}
                                    <div className="p-8 md:p-10 flex flex-col items-center text-center">
                                        <div className="w-18 h-18 flex items-center justify-center mb-6">
                                            <img src="/illustrations/ai/ai4.svg" alt="Icon" className="w-full h-full object-contain" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-3 leading-tight">Secure Infrastructure</h3>
                                        <p className="text-sm md:text-base font-medium text-gray-600 leading-relaxed">Privacy-first AI integration via encrypted on-premise systems.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#9f3150] mb-6">From Raw Data to Scalable Intelligence</h2>
                            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                                We eliminate the <span className="font-bold">"Black Box"</span> approach by providing a transparent, end-to-end engineering framework designed for enterprise reliability.
                            </p>
                        </div>

                        <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[500px]">
                            {/* SVG Curves Background */}
                            <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
                                <img src="/illustrations/curve-left.svg" alt="" className="absolute right-[50%] top-1/2 -translate-y-1/2 h-64 lg:h-80 object-right object-contain w-[40%]" />
                                <img src="/illustrations/curve-right.svg" alt="" className="absolute left-[50%] top-1/2 -translate-y-1/2 h-64 lg:h-80 object-left object-contain w-[40%]" />
                            </div>

                            {/* Left Cards */}
                            <div className="w-full md:w-[42%] flex flex-col gap-8 lg:gap-20 relative z-10">
                                {/* Card 1 */}
                                <div className="p-[10px] rounded-2xl bg-gradient-to-r from-[#fcb6c1] to-[#fde2e6] shadow-[0_4px_20px_rgba(252,182,193,0.4)]">
                                    <div className="bg-white rounded-[14px] p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:gap-6 h-full relative">
                                        <div className="w-18 h-18 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                                            <img src="/illustrations/ai/ai5.svg" alt="Icon" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2">Data Acquisition</h3>
                                            <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">Secure ingestion and integration of structured and unstructured data sources.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="p-[10px] rounded-2xl bg-gradient-to-r from-[#fcb6c1] to-[#fde2e6] shadow-[0_4px_20px_rgba(252,182,193,0.4)]">
                                    <div className="bg-white rounded-[14px] p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:gap-6 h-full relative">
                                        <div className="w-18 h-18 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                                            <img src="/illustrations/ai/ai6.svg" alt="Icon" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2">Model Training</h3>
                                            <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">Custom-engineered frameworks and fine-tuning for domain-specific accuracy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Center Logo */}
                            <div className="hidden md:flex w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-b from-[#f5a19b] to-[#fef2f2] shadow-[0_10px_40px_rgba(245,161,155,0.4)] items-center justify-center relative z-20 shrink-0 mx-8">
                                <img src="/illustrations/ai/aicenter.svg" alt="AI Center Brain" className="w-18 h-18 lg:w-24 lg:h-24 object-contain" />
                            </div>

                            {/* Right Cards */}
                            <div className="w-full md:w-[42%] flex flex-col gap-8 lg:gap-20 relative z-10 mt-12 md:mt-0">
                                {/* Card 3 */}
                                <div className="p-[10px] rounded-2xl bg-gradient-to-l from-[#fcb6c1] to-[#fde2e6] shadow-[0_4px_20px_rgba(252,182,193,0.4)]">
                                    <div className="bg-white rounded-[14px] p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:gap-6 h-full relative">
                                        <div className="w-18 h-18 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                                            <img src="/illustrations/ai/ai7.svg" alt="Icon" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2">API Integration</h3>
                                            <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">Lightweight, scalable APIs engineered for seamless legacy system communication.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 4 */}
                                <div className="p-[10px] rounded-2xl bg-gradient-to-l from-[#fcb6c1] to-[#fde2e6] shadow-[0_4px_20px_rgba(252,182,193,0.4)]">
                                    <div className="bg-white rounded-[14px] p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:gap-6 h-full relative">
                                        <div className="w-18 h-18 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                                            <img src="/illustrations/ai/ai8.svg" alt="Icon" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2">Optimization Loop</h3>
                                            <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">Continuous monitoring to prevent model drift and ensure long-term reliability.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantage Section */}
                <section className="w-full border-y border-gray-200 bg-white lg:h-[calc(100vh-6rem)] min-h-max lg:min-h-[600px] flex items-center">
                    <div className="w-full max-w-[1536px] mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr] border-x border-gray-200 bg-white">
                        {/* Left Text Block */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2 lg:border-r border-b lg:border-b-0 border-gray-200 p-8 lg:p-12 xl:p-16 flex flex-col justify-start pt-12 lg:pt-16 xl:pt-20">
                            <span className="text-[#9f3150] font-bold text-sm lg:text-base mb-6 block uppercase tracking-wider">The PowerNET Advantage</span>
                            <h2 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-gray-900 leading-tight">
                                Tailored AI solutions engineered for security, accuracy, and seamless enterprise continuity.
                            </h2>
                        </div>

                        {/* Top Middle */}
                        <div className="col-span-1 border-b md:border-r border-gray-200 p-10 lg:p-16 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Custom-Built for You</h3>
                            <p className="text-lg lg:text-xl font-medium text-gray-700 leading-relaxed italic">
                                We don't use generic tools. Every AI model is trained specifically on your business data for maximum accuracy.
                            </p>
                        </div>

                        {/* Top Right */}
                        <div className="col-span-1 border-b border-gray-200 p-10 lg:p-16 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Data Stays Safe</h3>
                            <p className="text-lg lg:text-xl font-medium text-gray-700 leading-relaxed italic">
                                Your privacy is our priority. We deploy AI on your own servers or private cloud so your data never leaves your control.
                            </p>
                        </div>

                        {/* Bottom Middle */}
                        <div className="col-span-1 border-b md:border-b-0 md:border-r border-gray-200 p-10 lg:p-16 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Proven Performance</h3>
                            <p className="text-lg lg:text-xl font-medium text-gray-700 leading-relaxed italic">
                                We don't just promise results. Every system is rigorously tested and validated to ensure it works reliably in real-world conditions.
                            </p>
                        </div>

                        {/* Bottom Right */}
                        <div className="col-span-1 p-10 lg:p-16 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Easy Integration</h3>
                            <p className="text-lg lg:text-xl font-medium text-gray-700 leading-relaxed italic">
                                No need to change your current software. Our AI is designed to plug directly into your existing systems without disrupting your workflow.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
