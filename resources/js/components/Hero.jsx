import React from 'react';
import { ArrowDown, ChevronRight, Mail, Building2, Award, ShieldCheck, Cpu } from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
    const stats = [
        { label: 'Ministry Certified', val: 'Category 1', sub: 'Consulting Architects & Engineers' },
        { label: 'Landmark Projects', val: '8+', sub: 'High-Rise & Mixed-Use Towers' },
        { label: 'Cumulative Built Area', val: '25,000+ m²', sub: 'Urban Developments in Addis Ababa' },
        { label: 'German & Local Mastery', val: '12+ Years', sub: 'Bauhaus Structural Standards' },
    ];

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-12 overflow-hidden bg-[#0A1C33]"
        >
            {/* Background Image: Actual Architectural Landmark from Profile (Metro Homes Aware Tower) */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/projects/metro-homes-aware-square.jpg"
                    alt="Metro Homes Landmark High-Rise by Ethio-German Consulting"
                    className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
                />
                {/* Subtle dark overlay for readability using brand colors */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A1C33]/95 via-[#102B4E]/88 to-[#0A1C33]/85" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C33] via-transparent to-transparent opacity-80" />
            </div>

            {/* Hero Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-left sm:text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-start sm:items-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A46D]/40 text-[#DFC79E] text-xs font-semibold uppercase tracking-widest mb-8 shadow-md">
                        <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-pulse" />
                        <span>Ethio-German Consulting Architects & Engineers PLC</span>
                    </div>

                    {/* Main Heading Exactly from Prompt */}
                    <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] mb-6">
                        Engineering Tomorrow.{' '}
                        <span className="text-[#C5A46D] block mt-1">
                            Designing Better Living.
                        </span>
                    </h1>

                    {/* Supporting Text Exactly from Prompt */}
                    <p className="text-base sm:text-xl text-[#EAF1F8]/90 max-w-2xl leading-relaxed mb-10 font-normal">
                        Delivering innovative architectural, engineering, and project management solutions through professional excellence, creativity, and sustainability.
                    </p>

                    {/* Buttons: Explore Our Projects & Get in Touch */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
                        <a
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C5A46D] hover:bg-[#B39158] text-[#0A1C33] font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
                        >
                            <span>Explore Our Projects</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <button
                            onClick={onOpenConsultation}
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all border border-white/20 hover:border-white/40 backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <Mail className="w-4 h-4 text-[#C5A46D]" />
                            <span>Get in Touch</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Verified Stats Counters & Subtle Scroll Indicator */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-6 border-b border-white/10">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col"
                        >
                            <span className="font-heading font-black text-2xl sm:text-3xl text-[#C5A46D] tracking-tight">
                                {stat.val}
                            </span>
                            <span className="text-xs font-bold text-white mt-1 uppercase tracking-wider">
                                {stat.label}
                            </span>
                            <span className="text-[11px] text-white/60 mt-0.5">
                                {stat.sub}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Subtle Scroll Indicator */}
                <div className="flex justify-center items-center pt-4">
                    <a
                        href="#about"
                        aria-label="Scroll down to About section"
                        className="flex items-center gap-2 text-white/60 hover:text-[#C5A46D] text-xs font-semibold tracking-widest uppercase transition-colors"
                    >
                        <span>Scroll Down</span>
                        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C5A46D]" />
                    </a>
                </div>
            </div>
        </section>
    );
}
