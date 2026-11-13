import React from 'react';
import { Cpu, Code2, Monitor, Printer, Compass, Layers, FileSpreadsheet, Map, CheckCircle2 } from 'lucide-react';

export default function TechnologySection() {
    const softwareList = [
        {
            name: 'AutoCAD',
            role: 'Precision 2D Drafting & Municipal Submission Drawings',
            category: 'Computer-Aided Drafting',
            icon: <Code2 className="w-6 h-6 text-[#102B4E]" />,
        },
        {
            name: 'ArchiCAD',
            role: '3D Architectural Modeling & BIM Documentation',
            category: 'Architectural BIM',
            icon: <Compass className="w-6 h-6 text-[#C5A46D]" />,
        },
        {
            name: 'Autodesk Revit',
            role: 'Multidisciplinary Building Information Modeling & Coordination',
            category: 'Full BIM Coordination',
            icon: <Layers className="w-6 h-6 text-[#102B4E]" />,
        },
        {
            name: 'ETABS',
            role: '3D Finite Element Structural Analysis & Seismic Modeling',
            category: 'Structural Engineering',
            icon: <Cpu className="w-6 h-6 text-[#C5A46D]" />,
        },
        {
            name: 'SAFE',
            role: 'Concrete Slab, Foundation Raft & Mat Design',
            category: 'Geotechnical & Foundations',
            icon: <Layers className="w-6 h-6 text-[#102B4E]" />,
        },
        {
            name: 'GIS Software',
            role: 'Geographic Information Systems, Topography & Spatial Analysis',
            category: 'Spatial Mapping',
            icon: <Map className="w-6 h-6 text-[#C5A46D]" />,
        },
        {
            name: 'Microsoft Office',
            role: 'BOQ Engineering Estimates, Specifications & Project Scheduling',
            category: 'Project Documentation',
            icon: <FileSpreadsheet className="w-6 h-6 text-[#102B4E]" />,
        },
    ];

    const hardwareFleet = [
        'HP DesignJet Large-Format Architectural Plotter',
        'Electronic Total Station for Topographic Surveying',
        'High-Performance Intel Core Workstations for BIM & FEA',
        'Precision Handheld GPS Field Survey Units',
        'Toyota Hilux 4WD Fleet for Nationwide Field Inspections',
        'Industrial Blueprint Production & Reprography Network',
    ];

    return (
        <section id="technology" className="py-24 bg-[#FAFCFE] relative overflow-hidden border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1F8] border border-blue-200 text-[#102B4E] text-xs font-bold uppercase tracking-widest mb-4">
                        <Cpu className="w-3.5 h-3.5 text-[#C5A46D]" />
                        <span>Computational & Analytical Power</span>
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#102B4E] tracking-tight mb-4">
                        Technology and Software
                    </h2>
                    <p className="text-[#202A35]/80 text-base sm:text-lg leading-relaxed">
                        Ethio-German Consulting deploys licensed, industry-standard engineering software and cutting-edge surveying instrumentation for flawless project execution.
                    </p>
                </div>

                {/* Software Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                    {softwareList.map((sw, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#C5A46D] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#EAF1F8] border border-blue-100 flex items-center justify-center shadow-xs">
                                        {sw.icon}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-[#102B4E]">
                                        {sw.category}
                                    </span>
                                </div>
                                <h3 className="font-heading font-black text-lg text-[#102B4E] mb-1">
                                    {sw.name}
                                </h3>
                                <p className="text-xs text-[#202A35]/75 leading-relaxed">
                                    {sw.role}
                                </p>
                            </div>
                            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Licensed In-House Suite</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Physical Hardware & Surveying Infrastructure Strip */}
                <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A46D] block mb-1">
                                Field & Office Infrastructure
                            </span>
                            <h3 className="font-heading font-black text-xl text-[#102B4E]">
                                Specialized Surveying & Heavy Plotting Equipment
                            </h3>
                        </div>
                        <span className="px-4 py-2 rounded-xl bg-[#EAF1F8] text-[#102B4E] text-xs font-bold uppercase tracking-wider">
                            Aware Metro Homes 3rd Floor Facility
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                        {hardwareFleet.map((hw, i) => (
                            <div key={i} className="flex items-center gap-2.5 text-xs text-[#202A35] font-semibold">
                                <span className="w-2 h-2 rounded-full bg-[#C5A46D] shrink-0" />
                                <span>{hw}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
