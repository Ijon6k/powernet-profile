import React from 'react';
import { Lightbulb, FileText, Palette, Code2, Clock, Rocket } from 'lucide-react';

const workflowSteps = [
    {
        id: "Discovery",
        title: "Discovery",
        icon: <Lightbulb className="w-4 h-4" />,
        desc: "We pinpoint operational bottlenecks and align them with your business goals to ensure a foundation built for long-term success."
    },
    {
        id: "Planning",
        title: "Planning",
        icon: <FileText className="w-4 h-4" />,
        desc: "We create a strategic roadmap and define the resources required to transform your infrastructure into a driver for growth."
    },
    {
        id: "Design",
        title: "Design",
        icon: <Palette className="w-4 h-4" />,
        desc: "We simplify complex data into intuitive interfaces, enabling your team to make faster and better-informed decisions with ease."
    },
    {
        id: "Develop",
        title: "Develop",
        icon: <Code2 className="w-4 h-4" />,
        desc: "We engineer scalable, high-performance solutions using rigorous standards to ensure maximum stability and enterprise security."
    },
    {
        id: "Testing",
        title: "Testing",
        icon: <Clock className="w-4 h-4" />,
        desc: "We conduct rigorous quality audits to ensure every system is stable, secure, and performs at peak efficiency under any business demand."
    },
    {
        id: "Launch",
        title: "Launch",
        icon: <Rocket className="w-4 h-4" />,
        desc: "We manage a seamless transition to your live environment while providing the continuous support needed to maintain peak efficiency."
    }
];

export const Workflow = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div className="text-center max-w-none mx-auto mb-20">
                    <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6">
                        Strategic Development and Scalable Implementation
                    </h2>
                    <p className="text-gray-900 text-lg md:text-xl font-[400px] leading-relaxed max-w-none">
                        A data driven transparent workflow designed for quality assurance ensuring every line of code accelerates your strategic growth.
                    </p>
                </div>

                <div className="bg-white border border-gray-100 overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2">
                    {workflowSteps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`p-10 md:p-12 border-gray-100 
                                ${index % 2 === 0 ? 'md:border-r' : ''} 
                                ${index < 4 ? 'border-b' : ''}
                                ${index === 4 ? 'border-b md:border-b-0' : ''}
                            `}
                        >
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 text-primary text-sm font-bold gap-2 mb-8">
                                {step.icon}
                                <span className="lg:text-xl font-normal">{step.title}</span>
                            </div>
                            <p className="text-gray-900 text-base leading-relaxed lg:text-xl">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
