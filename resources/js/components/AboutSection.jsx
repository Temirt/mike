import React from 'react';
import { Building, Users, Globe, CheckCircle2, ShieldCheck, Eye, Target, Sparkles, Award } from 'lucide-react';

export default function AboutSection() {
    const clientTypes = [
        'Private Individuals & Homeowners',
        'Private Real Estate & Commercial Firms',
        'Communities & Civic Organizations',
        'Non-Governmental Organizations (NGOs)',
        'Federal & Regional Government Institutions',
    ];

    const disciplines = [
        'Architecture',
        'Structural Engineering',
        'Electrical Engineering',
        'Mechanical Engineering',
        'Sanitary Engineering',
        'Construction Management',
        'Contract Administration',
    ];

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1F8] border border-blue-200 text-[#102B4E] text-xs font-bold uppercase tracking-widest mb-4">
                        <Award className="w-3.5 h-3.5 text-[#C5A46D]" />
                        <span>Corporate Profile & Background</span>
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#102B4E] tracking-tight leading-tight mb-4">
                        About Ethio-German Consulting Architects & Engineers PLC
                    </h2>
                    <p className="text-[#202A35]/80 text-base sm:text-lg leading-relaxed">
                        An Ethiopian multidisciplinary development consultancy established as a Private Limited Company under the Commercial Code of Ethiopia.
                    </p>
                </div>

                {/* Elegant Two-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
                    {/* Left: Company Introduction */}
                    <div className="lg:col-span-7 space-y-6">
                        <p className="text-base text-[#202A35] leading-relaxed">
                            <strong className="text-[#102B4E] font-bold">Ethio-German Consulting Architects & Engineers PLC</strong> delivers world-class design, rigorous structural calculation, and turnkey construction management. 
                            Operating under a Category 1 consultancy license certified by the Federal Ministry of Works & Urban Development, we bridge European engineering precision—nurtured through Bauhaus University Weimar, Germany—with extensive local Ethiopian context and materials.
                        </p>

                        <div className="p-6 rounded-2xl bg-[#EAF1F8]/60 border border-blue-100">
                            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#102B4E] mb-3 flex items-center gap-2">
                                <Users className="w-4 h-4 text-[#C5A46D]" />
                                Professional Services Provided To:
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {clientTypes.map((client, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#202A35]">
                                        <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0" />
                                        <span>{client}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#102B4E] mb-3 flex items-center gap-2">
                                <Building className="w-4 h-4 text-[#C5A46D]" />
                                Multidisciplinary Professional Expertise:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {disciplines.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-[#102B4E] shadow-2xs"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Regulatory Verification Statement */}
                        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 text-xs text-[#202A35]/70">
                            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                            <span>
                                Legally registered and fully certified under TIN, VAT, and Tax Clearance by the Federal Customs and Revenue Authority of Ethiopia.
                            </span>
                        </div>
                    </div>

                    {/* Right: Professional Architectural Image from Profile */}
                    <div className="lg:col-span-5">
                        <div className="relative rounded-3xl overflow-hidden border-2 border-[#EAF1F8] shadow-xl group">
                            <div className="aspect-[4/5] w-full overflow-hidden bg-slate-100">
                                <img
                                    src="/images/projects/metro-homes-aware-square.jpg"
                                    alt="Metro Homes Landmark Project by Ethio-German Consulting"
                                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                                />
                            </div>

                            {/* Floating Architectural Badge */}
                            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A46D]">
                                        Featured Landmark
                                    </span>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#EAF1F8] text-[#102B4E]">
                                        B+G+12 High-Rise
                                    </span>
                                </div>
                                <h4 className="font-heading font-bold text-base text-[#102B4E]">
                                    Metro Homes Mixed-Use Tower
                                </h4>
                                <p className="text-xs text-[#202A35]/70 mt-1">
                                    Aware Square, Addis Ababa • 2,990 m² Built-Up Footprint
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================================================== */}
                {/* 5. VISION AND MISSION CARDS                        */}
                {/* ================================================== */}
                <div id="vision-mission" className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <div className="p-8 sm:p-10 rounded-3xl bg-[#102B4E] text-white shadow-xl relative overflow-hidden border border-[#C5A46D]/30 flex flex-col justify-between">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C5A46D]/10 rounded-full blur-2xl pointer-events-none" />
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#C5A46D] mb-6 shadow-sm">
                                    <Eye className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-2">
                                    Our Direction
                                </span>
                                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-4">
                                    OUR VISION
                                </h3>
                                <blockquote className="text-base sm:text-lg text-[#EAF1F8] leading-relaxed font-normal italic border-l-2 border-[#C5A46D] pl-4">
                                    "Aspire to be a role model in contributing our professional share in the making of well-planned, designed and sustainable built environments."
                                </blockquote>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#EAF1F8]/70">
                                <span>Sustainable Urban Development</span>
                                <span className="font-semibold text-[#C5A46D]">Ethio-German Standard</span>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="p-8 sm:p-10 rounded-3xl bg-[#EAF1F8] text-[#102B4E] shadow-lg relative overflow-hidden border border-blue-200 flex flex-col justify-between">
                            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-200/40 rounded-full blur-2xl pointer-events-none" />
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200 flex items-center justify-center text-[#102B4E] mb-6 shadow-sm">
                                    <Target className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[#102B4E]/70 block mb-2">
                                    Our Commitment
                                </span>
                                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#102B4E] tracking-tight mb-4">
                                    OUR MISSION
                                </h3>
                                <blockquote className="text-base sm:text-lg text-[#202A35] leading-relaxed font-normal italic border-l-2 border-[#102B4E] pl-4">
                                    "To provide comprehensive design and project management services of excellence through a single point of contact."
                                </blockquote>
                            </div>
                            <div className="mt-8 pt-6 border-t border-blue-200/80 flex items-center justify-between text-xs text-[#202A35]/70">
                                <span>Turnkey Engineering Delivery</span>
                                <span className="font-semibold text-[#102B4E]">Excellence Through Synergy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
