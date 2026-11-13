import React, { useState, useEffect } from 'react';
import { Building2, MapPin, ExternalLink, ArrowRight, Eye, Layers } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function ProjectsSection({ onOpenConsultation }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [activeModalProject, setActiveModalProject] = useState(null);

    // Exact 11 Projects from the Company Profile PDF & User Prompt
    const projects = [
        {
            id: 1,
            title: 'Mixed Use Building',
            category: 'Mixed Use',
            building: 'G+10 Tower',
            location: 'Aware Square, Addis Ababa',
            plot_area: '293 m²',
            built_up_area: '2,990 m²',
            project_cost: 'ETB 130,600,000',
            status: 'Design Completed',
            client: 'Almaz Tadesse',
            image: '/images/projects/mixed-use-aware-square.jpg',
            description: 'G+10 mixed-use building in Lideta/Aware Square providing ground floor vehicular parking, 184 m² commercial office on 1st floor, spacious 230 m² 3-bedroom residences on floors 2–3, and dual-unit residential configurations (84 m² 1BR and 108 m² 2BR) spanning floors 4 through 10.',
        },
        {
            id: 2,
            title: 'Mixed Use Building (B+G+6)',
            category: 'Mixed Use',
            building: 'B+G+6',
            location: 'Kara Ayertena, Addis Ababa',
            plot_area: '248 m²',
            built_up_area: '2,006 m²',
            project_cost: 'ETB 110,330,000',
            status: 'Design Completed',
            client: 'Elias Assefa',
            image: '/images/projects/mixed-use-kara-ayertena.jpg',
            description: 'Mid-rise B+G+6 building featuring 118 m² basement parking & technical storage, ground and first floor commercial retail shop spaces, and typical 2nd to 6th levels hosting two optimized residential units per floor (92 m² 3BR and 95 m² 2BR).',
        },
        {
            id: 3,
            title: 'Residential Building',
            category: 'Residential',
            building: 'G+2 Luxury Villa',
            location: 'Lemi Kura Subcity, Addis Ababa',
            plot_area: '150 m²',
            built_up_area: '360 m²',
            project_cost: 'ETB 12,565,000',
            status: 'Design Completed',
            client: 'Yohannes Legesse',
            image: '/images/projects/residence-lemi-kura.jpg',
            description: 'Modern G+2 single-family residence featuring 111 m² ground floor (parking, living/dining salon, open modern kitchen and traditional wet kitchen), and 121 m² upper level comprising master suite with private bath, two additional bedrooms, common bath, and family terrace salon.',
        },
        {
            id: 4,
            title: 'Metro Homes Tower',
            category: 'Mixed Use',
            building: 'B+G+12',
            location: 'Aware Square, Addis Ababa',
            plot_area: '270 m²',
            built_up_area: '2,990 m²',
            project_cost: 'ETB 179,000,000',
            status: 'Under Construction',
            client: 'Metro Homes',
            image: '/images/projects/metro-homes-aware-square.jpg',
            description: 'Sophisticated B+G+12 landmark high-rise providing 20 car parking bays across basement and ground floor, alongside 660 m² of prime commercial retail space across ground through 3rd floor. Upper floors house three 2-bedroom units per floor with enclosed kitchens and panoramic balconies.',
        },
        {
            id: 5,
            title: 'Apartment Building',
            category: 'Residential',
            building: 'B+G+11',
            location: 'Dembel, Addis Ababa',
            plot_area: '470 m²',
            built_up_area: '2,990 m²',
            project_cost: 'ETB 179,000,000',
            status: 'Under Construction',
            client: 'Weyzero Hablewerk',
            image: '/images/projects/apartment-dembel.jpg',
            description: 'High-density B+G+11 residential tower providing 15 underground parking spaces, 420 m² ground floor commercial space, and four 2-bedroom apartment units per floor from 1st through 11th levels with dual elevators and central refuse chute.',
        },
        {
            id: 6,
            title: 'Apartment Building',
            category: 'Residential',
            building: 'G+6',
            location: 'Aware Square, Addis Ababa',
            plot_area: '120 m²',
            built_up_area: '735 m²',
            project_cost: 'ETB 40,425,000',
            status: 'Completed',
            client: 'Ato Wandwesen',
            image: '/images/projects/apartment-aware-square.jpg',
            description: 'Completed G+6 residential tower with dedicated ground floor parking bays. Upper levels from 4th floor upwards accommodate three 2-bedroom units per floor with en-suite master bedrooms, private verandas, and enclosed kitchens.',
        },
        {
            id: 7,
            title: 'Apartment Building',
            category: 'Residential',
            building: 'B+G+6',
            location: 'Signal, Addis Ababa',
            plot_area: '220 m²',
            built_up_area: '1,140 m²',
            project_cost: 'ETB 62,700,000',
            status: 'Completed',
            client: 'Michael Wandwassen',
            image: '/images/projects/apartment-signal.jpg',
            description: 'Completed B+G+6 development with 10 basement parking bays, 160 m² ground commercial retail area, and single-unit-per-floor full-floor luxury residences featuring 2 bedrooms, 2 bathrooms, open-concept kitchen, and spacious living area.',
        },
        {
            id: 8,
            title: 'Metro Homes New Stadium Tower',
            category: 'Mixed Use',
            building: 'B+G+12',
            location: 'New Stadium, Addis Ababa',
            plot_area: '270 m²',
            built_up_area: '2,990 m²',
            project_cost: 'ETB 179,000,000',
            status: 'Under Construction',
            client: 'Metro Homes',
            image: '/images/projects/metro-homes-new-stadium.jpg',
            description: 'Iconic B+G+12 tower providing 15 underground parking spaces and 750 m² of commercial retail floor space from ground through 3rd floor. Upper levels accommodate three 2-bedroom units per floor with enclosed kitchens and high-speed elevator access.',
        },
        {
            id: 9,
            title: 'Apartment and Commercial Building',
            category: 'Mixed Use',
            building: 'B+G+6',
            location: 'Bole Bulbula, Addis Ababa',
            plot_area: '500 m²',
            built_up_area: '2,590 m²',
            project_cost: 'ETB 25,000,000',
            status: 'Under Construction',
            client: 'Woynishet Molla',
            image: '/images/projects/apartment-bole-bulbula.jpg',
            description: 'B+G+6 complex featuring 200 m² commercial space and 40 m² reception lobby salon, alongside 12 three-bedroom apartments of 145 m² and 170 m² complete with master bedroom suites, maid quarters, and private balconies.',
        },
        {
            id: 10,
            title: 'Apartment Building',
            category: 'Residential',
            building: 'B+G+5',
            location: 'Sar Bet, Addis Ababa',
            plot_area: '336 m²',
            built_up_area: '5,080 m²',
            project_cost: 'ETB 35,000,000',
            status: 'Design Completed',
            client: 'Metropolitan Real Estate',
            image: '/images/projects/apartment-sar-bet.jpg',
            description: 'Exclusive B+G+5 apartment development featuring five expansive 185 m² 3-bedroom residences with 3.5 bathrooms, enclosed kitchen, living/dining salon, maid room, and dedicated laundry room.',
        },
        {
            id: 11,
            title: 'FDRE Attorney General Building',
            category: 'Institutional',
            building: '2B+G+M+10',
            location: 'Piazza, Addis Ababa',
            plot_area: '2,614 m²',
            built_up_area: '13,990 m²',
            project_cost: 'ETB 175,000,000',
            status: 'Design Completed',
            client: 'FDRE Attorney General',
            image: '/images/projects/attorney-general-piazza.jpg',
            description: 'Monumental 2B+G+M+10 federal headquarters comprising 56 secure parking spaces, 16 dedicated courtrooms, top-floor multipurpose conference hall, full-height central atrium with architectural skylight, four high-speed elevators, and triple-height public lobby.',
        },
    ];

    const categories = ['All', 'Mixed Use', 'Residential', 'Institutional'];
    const statuses = ['All', 'Design Completed', 'Under Construction', 'Completed'];

    const filteredProjects = projects.filter((p) => {
        const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
        const matchStatus = selectedStatus === 'All' || p.status === selectedStatus;
        return matchCategory && matchStatus;
    });

    return (
        <section id="projects" className="py-24 bg-white relative border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1F8] border border-blue-200 text-[#102B4E] text-xs font-bold uppercase tracking-widest mb-4">
                        <Building2 className="w-3.5 h-3.5 text-[#C5A46D]" />
                        <span>Architectural Portfolio</span>
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#102B4E] tracking-tight mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-[#202A35]/80 text-base sm:text-lg leading-relaxed">
                        Explore our track record of landmark government complexes, high-rise mixed-use developments, and luxury residential apartments across Addis Ababa.
                    </p>
                </div>

                {/* Filter Controls Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 p-3 rounded-2xl bg-[#FAFCFE] border border-slate-200">
                    {/* Category Filter */}
                    <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                        <span className="text-xs font-bold text-[#202A35]/60 uppercase tracking-wider mr-2 hidden sm:inline">
                            Category:
                        </span>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                                    selectedCategory === cat
                                        ? 'bg-[#102B4E] text-white shadow-xs'
                                        : 'bg-white text-[#202A35]/70 hover:text-[#102B4E] hover:bg-[#EAF1F8] border border-slate-200'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Status Filter */}
                    <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-start md:justify-end">
                        <span className="text-xs font-bold text-[#202A35]/60 uppercase tracking-wider mr-2 hidden sm:inline">
                            Status:
                        </span>
                        {statuses.map((stat) => (
                            <button
                                key={stat}
                                onClick={() => setSelectedStatus(stat)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                                    selectedStatus === stat
                                        ? 'bg-[#EAF1F8] text-[#102B4E] border border-blue-300 font-bold'
                                        : 'bg-white text-[#202A35]/70 hover:text-[#102B4E] border border-slate-200'
                                }`}
                            >
                                {stat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid: All 11 Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setActiveModalProject(project)}
                            className="bg-white border border-slate-200 hover:border-[#C5A46D] shadow-xs hover:shadow-xl rounded-3xl overflow-hidden flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
                        >
                            <div>
                                {/* Project Image with Hover Zoom */}
                                <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = '/images/projects/metro-homes-aware-square.jpg';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C33]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                    {/* Status Badge */}
                                    <div className="absolute top-3.5 left-3.5">
                                        <span
                                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm ${
                                                project.status === 'Completed'
                                                    ? 'bg-emerald-600 text-white'
                                                    : project.status === 'Under Construction'
                                                    ? 'bg-[#C5A46D] text-[#0A1C33]'
                                                    : 'bg-[#102B4E] text-white'
                                            }`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Building Type Tag */}
                                    <div className="absolute top-3.5 right-3.5">
                                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#102B4E] shadow-sm border border-slate-200">
                                            {project.building}
                                        </span>
                                    </div>

                                    {/* Quick Spec Bar on Image */}
                                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs">
                                        {project.project_cost ? (
                                            <span className="px-2.5 py-1 rounded-md bg-white/95 text-[#102B4E] font-mono font-bold shadow-sm border border-slate-200">
                                                {project.project_cost}
                                            </span>
                                        ) : (
                                            <span className="px-2.5 py-1 rounded-md bg-white/95 text-[#102B4E] font-mono text-[11px] font-semibold">
                                                Plot: {project.plot_area}
                                            </span>
                                        )}
                                        <span className="text-white font-semibold text-[11px] bg-[#0A1C33]/85 px-2 py-0.5 rounded backdrop-blur-xs">
                                            Built: {project.built_up_area || 'N/A'}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A46D] block mb-1">
                                        {project.category}
                                    </span>
                                    <h3 className="font-heading font-black text-lg text-[#102B4E] mb-2 group-hover:text-[#C5A46D] transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>

                                    <div className="flex items-center gap-2 text-xs text-[#202A35]/70 mb-3">
                                        <MapPin className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                                        <span className="truncate">{project.location}</span>
                                    </div>

                                    <p className="text-xs text-[#202A35]/75 line-clamp-2 leading-relaxed mb-5">
                                        {project.description}
                                    </p>

                                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#202A35]/70">
                                        <span>
                                            Client: <strong className="text-[#102B4E]">{project.client}</strong>
                                        </span>
                                        <span className="text-[#102B4E] font-bold group-hover:text-[#C5A46D] flex items-center gap-1 transition-colors">
                                            View Details
                                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16 p-8 rounded-3xl bg-[#FAFCFE] border border-slate-200">
                        <Building2 className="w-12 h-12 text-[#202A35]/40 mx-auto mb-3" />
                        <h3 className="text-[#102B4E] font-bold text-lg">No Projects Found</h3>
                        <p className="text-[#202A35]/70 text-sm mt-1">Try resetting your filters to see all 11 projects.</p>
                        <button
                            onClick={() => {
                                setSelectedCategory('All');
                                setSelectedStatus('All');
                            }}
                            className="mt-4 px-5 py-2 rounded-xl bg-[#102B4E] text-white text-xs font-bold uppercase tracking-wider"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>

            {/* Project Modal Lightbox */}
            {activeModalProject && (
                <ProjectModal
                    project={activeModalProject}
                    onClose={() => setActiveModalProject(null)}
                    onInquire={(proj) => {
                        onOpenConsultation(proj);
                    }}
                />
            )}
        </section>
    );
}
