import React from 'react';
import {
    Compass,
    Layers,
    Palette,
    Zap,
    Droplets,
    Settings,
    MapPin,
    Mountain,
    Calculator,
    HardHat,
    ShieldCheck,
    FileText,
    TrendingUp,
    Building2,
    PenTool,
    Box,
    ArrowUpRight,
} from 'lucide-react';

export default function ServicesSection({ onOpenConsultation }) {
    const services = [
        {
            num: '01',
            title: 'Architectural Design',
            icon: <Compass className="w-6 h-6 text-[#102B4E]" />,
            desc: 'Conceptual planning, spatial functionality, climate-responsive building design, and aesthetic facade detailing tailored to Ethiopian urban codes.',
        },
        {
            num: '02',
            title: 'Structural Design',
            icon: <Layers className="w-6 h-6 text-[#C5A46D]" />,
            desc: 'Advanced seismic and gravity load finite element analysis using ETABS and SAFE for reinforced concrete, post-tensioned slabs, and steel frames.',
        },
        {
            num: '03',
            title: 'Interior Design',
            icon: <Palette className="w-6 h-6 text-[#102B4E]" />,
            desc: 'Sophisticated spatial ergonomics, material selections, lighting layouts, and custom millwork for luxury residences, hotels, and executive offices.',
        },
        {
            num: '04',
            title: 'Electrical Design',
            icon: <Zap className="w-6 h-6 text-[#C5A46D]" />,
            desc: 'Complete power distribution, transformer sizing, backup generators, low-current networks, fire detection, and energy-efficient lighting.',
        },
        {
            num: '05',
            title: 'Sanitary Design',
            icon: <Droplets className="w-6 h-6 text-[#102B4E]" />,
            desc: 'Cold and hot water supply networks, pressure booster stations, soil and waste drainage, rainwater harvesting, and septic engineering.',
        },
        {
            num: '06',
            title: 'Mechanical Design',
            icon: <Settings className="w-6 h-6 text-[#C5A46D]" />,
            desc: 'HVAC mechanical ventilation, smoke extraction systems, central air conditioning, elevator electrification, and firefighting plumbing networks.',
        },
        {
            num: '07',
            title: 'Topographic Surveying',
            icon: <MapPin className="w-6 h-6 text-[#102B4E]" />,
            desc: 'High-precision boundary mapping, contour generation, and benchmark establishment using digital Electronic Total Stations and GPS equipment.',
        },
        {
            num: '08',
            title: 'Soil Investigation & Foundation Recommendation',
            icon: <Mountain className="w-6 h-6 text-[#C5A46D]" />,
            desc: 'Subsurface geotechnical drilling, core sampling, laboratory testing, and allowable bearing capacity recommendations for stable foundation designs.',
        },
        {
            num: '09',
            title: 'Bill of Quantities & Cost Estimation',
            icon: <Calculator className="w-6 h-6 text-[#102B4E]" />,
            desc: 'Comprehensive take-offs, itemized Bill of Quantities (BOQ), material specifications, and accurate confidential engineering cost estimates.',
        },
        {
            num: '10',
            title: 'Construction Supervision',
            icon: <HardHat className="w-6 h-6 text-[#C5A46D]" />,
            desc: 'Continuous resident engineer on-site inspection ensuring contractor execution strictly complies with approved design drawings and schedules.',
        },
        {
            num: '11',
            title: 'Quality Control',
            icon: <ShieldCheck className="w-6 h-6 text-[#102B4E]" />,
            desc: 'Rigorous quality assurance, concrete slump testing, compressive cube test verifications, and steel tensile strength compliance auditing.',
        },
        {
            num: '12',
            title: 'Contract Administration',
            icon: <FileText className="w-6 h-6 text-[#C5A46D]" />,
            desc: 'Preparation of tender documents, technical bid evaluations, variation order reviews, payment certification, and dispute settlement management.',
        },
        {
            num: '13',
            title: 'Feasibility Studies',
            icon: <TrendingUp className="w-6 h-6 text-[#102B4E]" />,
            desc: 'Technical, economic, environmental, and financial viability assessments for major commercial, institutional, and real estate investments.',
        },
        {
            num: '14',
            title: 'Municipal Consultancy',
            icon: <Building2 className="w-6 h-6 text-[#C5A46D]" />,
            desc: 'Navigating regulatory approvals, zoning compliance, master plan alignments, and statutory building permit clearance with municipal bureaus.',
        },
        {
            num: '15',
            title: '2D Drawings',
            icon: <PenTool className="w-6 h-6 text-[#102B4E]" />,
            desc: 'Detailed architectural, structural, and MEP working drawings, standard construction details, sections, and municipal submittal packages.',
        },
        {
            num: '16',
            title: '3D Modeling & Animations',
            icon: <Box className="w-6 h-6 text-[#C5A46D]" />,
            desc: 'Photorealistic architectural 3D exterior and interior renderings, virtual reality walkthroughs, and cinematic animated presentations for stakeholders.',
        },
    ];

    return (
        <section id="services" className="py-24 bg-[#FAFCFE] relative overflow-hidden border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1F8] border border-blue-200 text-[#102B4E] text-xs font-bold uppercase tracking-widest mb-4">
                        <Settings className="w-3.5 h-3.5 text-[#C5A46D]" />
                        <span>Comprehensive Professional Disciplines</span>
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#102B4E] tracking-tight mb-4">
                        Our Engineering & Architectural Services
                    </h2>
                    <p className="text-[#202A35]/80 text-base sm:text-lg leading-relaxed">
                        End-to-end solutions delivering professional excellence across all 16 specialized design, surveying, and management disciplines through a single point of contact.
                    </p>
                </div>

                {/* 16 Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.num}
                            className="bg-white border border-slate-200 hover:border-[#C5A46D] rounded-3xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-12 h-12 rounded-2xl bg-[#EAF1F8] group-hover:bg-[#102B4E] transition-colors flex items-center justify-center shadow-xs">
                                        <div className="group-hover:text-white transition-colors">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <span className="font-heading font-black text-xs text-[#C5A46D] tracking-wider">
                                        {service.num}
                                    </span>
                                </div>

                                <h3 className="font-heading font-bold text-base text-[#102B4E] group-hover:text-[#102B4E] mb-2.5 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-xs text-[#202A35]/75 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>

                            <button
                                onClick={onOpenConsultation}
                                className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#102B4E] group-hover:text-[#C5A46D] transition-colors cursor-pointer"
                            >
                                <span>Inquire Service</span>
                                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
