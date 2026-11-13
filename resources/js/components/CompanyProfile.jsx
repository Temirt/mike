import React from 'react';
import { Award, GraduationCap, CheckCircle2, ShieldCheck, Eye, Target, Sparkles } from 'lucide-react';

export default function CompanyProfile() {
    const scceppPrinciples = [
        {
            letter: 'S',
            word: 'Safe',
            title: 'Structural Safety & Resilience',
            desc: 'Prioritizing structural integrity through high-grade static and dynamic modeling in ETABS & Safe, adhering strictly to Eurocodes & Ethiopian Standard Building Codes.',
            tagColor: 'bg-blue-50 text-blue-900 border-blue-200',
        },
        {
            letter: 'C',
            word: 'Comfortable',
            title: 'Human-Centric Comfort',
            desc: 'Optimizing thermal regulation, natural cross-ventilation, acoustic privacy, and daylight infiltration to nurture human well-being and interior microclimates.',
            tagColor: 'bg-sky-50 text-sky-900 border-sky-200',
        },
        {
            letter: 'C',
            word: 'Convenient',
            title: 'Circulation & Functionality',
            desc: 'Thoughtfully planned barrier-free navigation, segregated vehicular-pedestrian paths, and pragmatic floor zoning for effortless everyday usability.',
            tagColor: 'bg-indigo-50 text-indigo-900 border-indigo-200',
        },
        {
            letter: 'E',
            word: 'Efficient',
            title: 'Resource & Cost Optimization',
            desc: 'Minimizing embodied carbon and lifecycle expenditure through sensible material choices, indigenous resources, and precision BOQ engineering.',
            tagColor: 'bg-teal-50 text-teal-900 border-teal-200',
        },
        {
            letter: 'P',
            word: 'Play & Pleasure',
            title: 'Architectural Aesthetics',
            desc: 'Elevating urban landscapes with striking facades, sculptural volumes, panoramic central atriums, and invigorating communal recreational environments.',
            tagColor: 'bg-amber-50 text-amber-900 border-amber-200',
        },
    ];

    const legalCredentials = [
        'Trade Registration Issued by Addis Ababa Trade & Industry Bureau',
        'Trade License Issued by Addis Ababa Trade & Industry Bureau',
        'Professional Consultancy License (Addis Ababa Infrastructure & Construction Authority)',
        'Certificate of Registration for TIN (Federal Customs and Revenue Authority)',
        'Certificate of Registration for VAT (Federal Customs and Revenue Authority)',
        'Tax Clearance Certification (Federal Customs & Revenue Authority)',
        'Professional Practice Certification issued by Federal Ministry of Works & Urban Development',
    ];

    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest mb-4">
                        <Award className="w-3.5 h-3.5" />
                        <span>Corporate Profile & Strategic Posture</span>
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
                        Where European Structural Science Meets{' '}
                        <span className="text-[#0f224a] underline decoration-blue-200 underline-offset-8">
                            African Ingenuity
                        </span>
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                        Ethio-German Consulting Architects and Engineers PLC was established according to the Commercial Code of Ethiopia. 
                        We deliver integrated architecture, structural engineering, electromechanical systems, and project supervision from a single point of contact.
                    </p>
                </div>

                {/* 2-Column Overview: Founder Spotlight & Strategic Posture */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
                    {/* General Manager Spotlight */}
                    <div className="lg:col-span-5 flex flex-col">
                        <div className="h-full flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-xs">
                            <div>
                                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-900 shrink-0 shadow-xs">
                                        <GraduationCap className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-blue-800 tracking-wider uppercase block">
                                            Managing Director
                                        </span>
                                        <h3 className="font-heading font-black text-xl text-slate-900">
                                            Eng. Mikiyas Belayneh
                                        </h3>
                                        <p className="text-xs text-slate-500 font-medium">
                                            Practicing Professional Structural Engineer (12+ Yrs)
                                        </p>
                                    </div>
                                </div>

                                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                                    Academic & Professional Credentials
                                </h4>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                                        <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-slate-900">MSc. in Structural Design</strong> — Bauhaus University Weimar, Germany
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                                        <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-slate-900">BSc. in Civil Engineering</strong> — Haramaya University, Ethiopia
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                                        <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-slate-900">Certified Practicing Professional</strong> by Federal Ministry of Works & Urban Development
                                        </span>
                                    </li>
                                </ul>

                                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed italic shadow-2xs">
                                    "We base our design philosophy on creating simple, cost-effective, contextual, and environmentally friendly buildings. Close collaborative coordination meetings among all engineering disciplines and clients ensure unmatched consistency and quality."
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                                <span>Addis Ababa & Germany Aligned</span>
                                <span className="font-mono text-[#0f224a] font-bold">(+251) 911 194 278</span>
                            </div>
                        </div>
                    </div>

                    {/* Vision, Mission, & Core Objectives */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Vision Card */}
                            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
                                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-900 mb-4">
                                    <Eye className="w-5 h-5" />
                                </div>
                                <h3 className="font-heading font-black text-lg text-slate-900 mb-2">Our Vision</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Aspire to be a role model in contributing our professional share in the making of well-planned, designed, and sustainable built environments that are Safe, Comfortable, Convenient, Efficient, Play and Pleasure (SCCEPP) to end-users.
                                </p>
                            </div>

                            {/* Mission Card */}
                            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
                                <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-900 mb-4">
                                    <Target className="w-5 h-5" />
                                </div>
                                <h3 className="font-heading font-black text-lg text-slate-900 mb-2">Our Mission</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Deliver comprehensive design and project management services of supreme excellence through a single point of contact, seamlessly combining indigenous Ethiopian knowledge and materials with cutting-edge global technology.
                                </p>
                            </div>
                        </div>

                        {/* Regulatory Compliance & Licenses */}
                        <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                <h4 className="font-heading font-bold text-base text-slate-900">
                                    Category 1 Corporate Accreditations & Tax Certifications
                                </h4>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {legalCredentials.map((lic, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                                        <span>{lic}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* The SCCEPP Principles Section */}
                <div id="principles" className="pt-8">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs font-bold text-blue-900 uppercase tracking-widest block mb-2">
                            The Guiding Philosophy
                        </span>
                        <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                            The SCCEPP Design Principle
                        </h3>
                        <p className="text-sm text-slate-600 mt-2">
                            Every blueprint drafted by Ethio-German Consulting is rigorously examined through our five cardinal design pillars:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {scceppPrinciples.map((principle, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center font-heading font-black text-2xl text-slate-900 mb-4">
                                        <span>{principle.letter}</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                                        {principle.word}
                                    </span>
                                    <h4 className="font-heading font-bold text-base text-slate-900 mt-1 mb-2">
                                        {principle.title}
                                    </h4>
                                    <p className="text-xs text-slate-600 leading-relaxed">
                                        {principle.desc}
                                    </p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-blue-900">
                                    <Sparkles className="w-3 h-3 text-blue-700" />
                                    <span>Pillar 0{idx + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
