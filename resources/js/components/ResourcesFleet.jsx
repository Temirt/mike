import React from 'react';
import { Laptop, Printer, Car, Code, CheckCircle2 } from 'lucide-react';

export default function ResourcesFleet() {
    const resourceCategories = [
        {
            title: 'Licensed Engineering Software',
            icon: <Code className="w-5 h-5 text-blue-900" />,
            desc: 'Comprehensive CAD, BIM, GIS, and structural finite element analysis software suite.',
            items: [
                'ETABS — Advanced Structural Analysis & Dynamic Seismic Design',
                'SAFE — Foundation Mats, Rafts & Slab Structural Engineering',
                'Revit BIM — Multi-Disciplinary Building Information Modeling',
                'ArchiCAD — 3D Contextual Architectural Design & Modeling',
                'AutoCAD 2026 — Precision 2D Engineering Working Drawings',
                'ArcGIS — Geographic Information Systems & Site Base Mapping',
            ],
        },
        {
            title: 'High-Performance Workstations',
            icon: <Laptop className="w-5 h-5 text-blue-800" />,
            desc: 'Modernized computation network configured for intensive rendering and structural simulations.',
            items: [
                '3x Intel Core i5 (12th Gen) Laptops with 16GB RAM & 512GB High-Speed SSD',
                '3x Desktop Quad-Core Intel Workstations designated for CAD/BIM processing',
                'Dual-display 17" CAD stations for synchronized multidisciplinary reviews',
                'Local Gigabit networked data repository with automated encrypted backups',
            ],
        },
        {
            title: 'Plotting & High-Speed Reprography',
            icon: <Printer className="w-5 h-5 text-amber-700" />,
            desc: 'In-house heavy-duty production machinery for large-format blueprints and tender books.',
            items: [
                'HP DesignJet 500 Large-Format Architectural Plotter',
                'Heavy-Duty Industrial Blue-Print Reproduction Machine',
                'Canon iR2002/2202 Multi-Function High-Speed A4/A3 Printer',
                'HP LaserJet Professional P1102 & Benq Digital Flatbed Scanner',
            ],
        },
        {
            title: 'Logistics Fleet & Field Surveying',
            icon: <Car className="w-5 h-5 text-emerald-800" />,
            desc: 'Dedicated field mobility and precision surveying equipment for nationwide site visits.',
            items: [
                'Toyota Hilux Revo 2.8L Diesel 4WD — Field Inspection & Rugged Terrain Vehicle',
                'Toyota Corolla XL Sedan — Urban Liaison & Municipal Operations',
                'Electronic Total Station — Topographic Surveying & Coordinate Benchmarking',
                'Precision Handheld GPS Units for Infrastructure Alignment',
            ],
        },
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-widest block mb-2">
                        Infrastructure & Operational Capacity
                    </span>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
                        Material, Hardware & Software Resources
                    </h3>
                    <p className="text-sm text-slate-600 mt-2">
                        Headquartered on the 3rd floor of Aware Metro Homes Building, Addis Ababa, equipped with world-class computational tools for project execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resourceCategories.map((cat, idx) => (
                        <div
                            key={idx}
                            className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors shadow-2xs"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                                    {cat.icon}
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-base text-slate-900">
                                        {cat.title}
                                    </h4>
                                    <p className="text-xs text-slate-500">
                                        {cat.desc}
                                    </p>
                                </div>
                            </div>

                            <ul className="space-y-2.5 pt-3 border-t border-slate-200/80">
                                {cat.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-800 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
