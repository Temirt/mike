import React from 'react';
import {
    Sparkles,
    CheckCircle,
    Users2,
    Compass,
    Leaf,
    Coins,
    Award,
    Cpu,
    GitMerge,
    Scale,
} from 'lucide-react';

export default function WhyChooseUs() {
    const pillars = [
        {
            num: '01',
            title: 'Multidisciplinary Professional Expertise',
            desc: 'Complete architectural, structural, civil, mechanical, sanitary, and electrical engineering under a single unified firm, preventing coordination gaps.',
            icon: <Users2 className="w-6 h-6 text-[#102B4E]" />,
        },
        {
            num: '02',
            title: 'Client-Focused Solutions',
            desc: 'Every blueprint begins with the client’s commercial objectives, aesthetic preferences, and budget parameters, ensuring tailor-made outcomes.',
            icon: <Compass className="w-6 h-6 text-[#C5A46D]" />,
        },
        {
            num: '03',
            title: 'Sustainable Design Philosophy',
            desc: 'Prioritizing natural cross-ventilation, daylighting, low-embodied carbon indigenous materials, and long-term energy efficiency in every structure.',
            icon: <Leaf className="w-6 h-6 text-emerald-700" />,
        },
        {
            num: '04',
            title: 'Cost-Effective Solutions',
            desc: 'Rigorous value engineering and precise Bill of Quantities (BOQ) eliminate material waste and prevent unforeseen project budget overruns.',
            icon: <Coins className="w-6 h-6 text-[#C5A46D]" />,
        },
        {
            num: '05',
            title: 'Quality & Professional Excellence',
            desc: 'Strict adherence to Ethiopian Building Codes and European Eurocodes, supported by certified Category 1 regulatory practice standards.',
            icon: <Award className="w-6 h-6 text-[#102B4E]" />,
        },
        {
            num: '06',
            title: 'Modern Design Technology',
            desc: 'Leveraging computerized structural modeling (ETABS & SAFE), Revit BIM synchronization, and digital Total Station field mapping.',
            icon: <Cpu className="w-6 h-6 text-[#C5A46D]" />,
        },
        {
            num: '07',
            title: 'Seamless Project Coordination',
            desc: 'Active weekly interdisciplinary coordination meetings align architects, structural engineers, and contractors, ensuring timely site milestones.',
            icon: <GitMerge className="w-6 h-6 text-[#102B4E]" />,
        },
        {
            num: '08',
            title: 'Ethical Professional Practice',
            desc: 'Uncompromising corporate transparency, fiduciary duty to our clients, and certified tax and regulatory standing across all engagements.',
            icon: <Scale className="w-6 h-6 text-[#C5A46D]" />,
        },
    ];

    return (
        <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1F8] border border-blue-200 text-[#102B4E] text-xs font-bold uppercase tracking-widest mb-4">
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
                        <span>Core Strategic Advantages</span>
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#102B4E] tracking-tight mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-[#202A35]/80 text-base sm:text-lg leading-relaxed">
                        Ethio-German Consulting delivers technical excellence, German precision engineering, and proven project management across Ethiopia.
                    </p>
                </div>

                {/* 8-Pillars Elegant Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.num}
                            className="p-7 rounded-3xl bg-[#FAFCFE] border border-slate-200 hover:border-[#C5A46D] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:border-[#C5A46D] transition-colors">
                                        {pillar.icon}
                                    </div>
                                    <span className="font-heading font-black text-xs text-[#C5A46D] tracking-wider">
                                        {pillar.num}
                                    </span>
                                </div>

                                <h3 className="font-heading font-bold text-base text-[#102B4E] mb-2.5 leading-snug">
                                    {pillar.title}
                                </h3>

                                <p className="text-xs text-[#202A35]/75 leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </div>

                            <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#102B4E]">
                                <CheckCircle className="w-3.5 h-3.5 text-[#C5A46D]" />
                                <span>Guaranteed Standard</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
