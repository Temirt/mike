import React from 'react';
import { Users, GraduationCap, ShieldCheck, Phone } from 'lucide-react';

export default function TeamSection() {
    const teamMembers = [
        {
            name: 'Mikiyas Belayneh',
            titlePrefix: 'Eng.',
            role: 'Managing Director / Lead Structural Engineer',
            qualification: 'MSc in Structural Engineering (Bauhaus University Weimar, Germany) & BSc in Civil Engineering',
            status: 'Practicing Professional Structural Engineer',
            phone: '+251 911 194 278',
            highlight: true,
        },
        {
            name: 'Tigistu Senbu',
            titlePrefix: 'Arch.',
            role: 'Senior Architect',
            qualification: 'B.Arch in Architecture & Urban Design',
            status: 'Senior Registered Architect',
            phone: '+251 923 026 840',
            highlight: false,
        },
        {
            name: 'Michael Wandwessen',
            titlePrefix: 'Eng.',
            role: 'Contract Manager & Senior Civil Engineer',
            qualification: 'BSc in Civil Engineering',
            status: 'Civil Engineer & Contract Administrator',
            phone: '+251 911 371 184',
            highlight: false,
        },
        {
            name: 'Million Demise',
            titlePrefix: 'Eng.',
            role: 'Principal Electrical Engineer',
            qualification: 'BSc in Electrical Engineering & Power Systems',
            status: 'Practicing Professional Electrical Engineer',
            phone: null,
            highlight: false,
        },
        {
            name: 'Samrawit Yeshaw',
            titlePrefix: 'Eng.',
            role: 'Sanitary & Environmental Engineer',
            qualification: 'MSc in Civil Engineering (Water Supply & Drainage)',
            status: 'Registered Sanitary Engineer',
            phone: '+251 921 530 442',
            highlight: false,
        },
        {
            name: 'Hana Debebe',
            titlePrefix: '',
            role: 'CAD Operator & BIM Specialist',
            qualification: 'Diploma in Computer-Aided Drafting & Building Modeling',
            status: 'Lead CAD / Drafting Specialist (20+ Years Experience)',
            phone: '+251 911 317 054',
            highlight: false,
        },
    ];

    return (
        <section id="team" className="py-24 bg-[#FAFCFE] relative overflow-hidden border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1F8] border border-blue-200 text-[#102B4E] text-xs font-bold uppercase tracking-widest mb-4">
                        <Users className="w-3.5 h-3.5 text-[#C5A46D]" />
                        <span>Executive & Technical Leadership</span>
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#102B4E] tracking-tight mb-4">
                        Our Professional Team
                    </h2>
                    <p className="text-[#202A35]/80 text-base sm:text-lg leading-relaxed">
                        Multidisciplinary engineering leaders, registered practicing architects, and senior project administrators driving world-class project execution.
                    </p>
                </div>

                {/* Team Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, idx) => (
                        <div
                            key={idx}
                            className={`p-8 rounded-3xl bg-white border ${
                                member.highlight
                                    ? 'border-[#C5A46D] shadow-lg ring-1 ring-[#C5A46D]/30'
                                    : 'border-slate-200 shadow-xs'
                            } hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    {/* Elegant Monogram Initials */}
                                    <div className="w-14 h-14 rounded-2xl bg-[#EAF1F8] border border-blue-200 flex items-center justify-center font-heading font-black text-xl text-[#102B4E] shadow-xs">
                                        {member.name.split(' ').map((n) => n[0]).join('')}
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#EAF1F8] text-[#102B4E] border border-blue-200">
                                        Certified Professional
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 mb-1">
                                    {member.titlePrefix && (
                                        <span className="text-xs font-bold text-[#C5A46D] uppercase">
                                            {member.titlePrefix}
                                        </span>
                                    )}
                                    <h3 className="font-heading font-black text-xl text-[#102B4E]">
                                        {member.name}
                                    </h3>
                                </div>

                                <p className="text-xs font-bold text-[#C5A46D] uppercase tracking-wider mb-4">
                                    {member.role}
                                </p>

                                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs">
                                    <div className="flex items-start gap-2 text-[#202A35]">
                                        <GraduationCap className="w-4 h-4 text-[#102B4E] shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{member.qualification}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#202A35]/80 font-medium">
                                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>{member.status}</span>
                                    </div>
                                </div>
                            </div>

                            {member.phone && (
                                <a
                                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                                    className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#102B4E] hover:text-[#C5A46D] transition-colors"
                                >
                                    <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
                                    <span className="font-mono">{member.phone}</span>
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
