import React from 'react';
import { X, MapPin, User, Layers, ArrowRight, Building, CheckCircle2, Maximize2 } from 'lucide-react';

export default function ProjectModal({ project, onClose, onInquire }) {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#0A1C33]/80 backdrop-blur-md transition-opacity"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#102B4E] hover:text-[#C5A46D] border border-slate-200 transition-colors shadow-md cursor-pointer"
                    aria-label="Close project modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Hero Project Image */}
                <div className="relative w-full h-80 sm:h-[420px] bg-slate-900 overflow-hidden shrink-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/projects/metro-homes-aware-square.jpg';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C33]/90 via-transparent to-transparent" />

                    {/* Overlay Badges */}
                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#102B4E] text-white border border-[#C5A46D]/40 shadow-md">
                                {project.category}
                            </span>
                            <span
                                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md ${
                                    project.status === 'Completed'
                                        ? 'bg-emerald-600 text-white'
                                        : project.status === 'Under Construction'
                                        ? 'bg-[#C5A46D] text-[#0A1C33]'
                                        : 'bg-blue-600 text-white'
                                }`}
                            >
                                {project.status}
                            </span>
                        </div>

                        {project.project_cost && (
                            <div className="px-4 py-1.5 rounded-full bg-white/95 border border-slate-200 text-[#102B4E] text-xs font-mono font-bold shadow-md">
                                Project Valuation: {project.project_cost}
                            </div>
                        )}
                    </div>
                </div>

                {/* Project Details Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-[#C5A46D] uppercase tracking-widest mb-1.5">
                            <Building className="w-4 h-4" />
                            <span>Building Typology: {project.building || project.category}</span>
                        </div>

                        <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#102B4E] mb-3">
                            {project.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#202A35]/80 mb-6 pb-4 border-b border-slate-100">
                            <span className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4 text-[#C5A46D]" />
                                <strong>Location:</strong> {project.location}
                            </span>
                            {project.client && (
                                <span className="flex items-center gap-1.5">
                                    <User className="w-4 h-4 text-[#102B4E]" />
                                    <strong>Client:</strong> {project.client}
                                </span>
                            )}
                        </div>

                        {/* Specifications Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-5 rounded-2xl bg-[#EAF1F8]/60 border border-blue-100 mb-6">
                            <div>
                                <span className="text-[11px] text-[#202A35]/60 uppercase tracking-wider block font-semibold">
                                    Plot Area
                                </span>
                                <span className="font-heading font-black text-base text-[#102B4E]">
                                    {project.plot_area || 'N/A'}
                                </span>
                            </div>
                            <div>
                                <span className="text-[11px] text-[#202A35]/60 uppercase tracking-wider block font-semibold">
                                    Built-up Area
                                </span>
                                <span className="font-heading font-black text-base text-[#102B4E]">
                                    {project.built_up_area || 'N/A'}
                                </span>
                            </div>
                            <div>
                                <span className="text-[11px] text-[#202A35]/60 uppercase tracking-wider block font-semibold">
                                    Building Scale
                                </span>
                                <span className="font-heading font-black text-base text-[#C5A46D]">
                                    {project.building || 'Custom High-Rise'}
                                </span>
                            </div>
                            <div>
                                <span className="text-[11px] text-[#202A35]/60 uppercase tracking-wider block font-semibold">
                                    Execution Status
                                </span>
                                <span className="font-heading font-black text-base text-[#102B4E]">
                                    {project.status}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-3 mb-6">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B4E] flex items-center gap-2">
                                <Layers className="w-4 h-4 text-[#C5A46D]" />
                                Architectural & Engineering Scope
                            </h4>
                            <p className="text-sm text-[#202A35]/80 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-xs text-[#202A35]/70">
                            Ethio-German Consulting Architects & Engineers PLC
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button
                                onClick={onClose}
                                className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider text-[#202A35] cursor-pointer"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => {
                                    onClose();
                                    onInquire(project);
                                }}
                                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-[#102B4E] hover:bg-[#0A1C33] text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 cursor-pointer border border-[#C5A46D]/40"
                            >
                                <span>Inquire for Similar Project</span>
                                <ArrowRight className="w-4 h-4 text-[#C5A46D]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
