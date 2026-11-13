import React from 'react';
import { ArrowUp, ShieldCheck, Mail, Phone, MapPin, Star, MessageSquare } from 'lucide-react';

export default function Footer({ onOpenAdmin, onOpenLogin, onOpenFeedback, currentUser }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#0A1C33] border-t border-slate-800 pt-16 pb-12 text-[#EAF1F8]/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
                    {/* Brand Col */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center gap-3.5">
                            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center overflow-hidden p-1 shadow-sm">
                                <img
                                    src="/images/logo.jpg"
                                    alt="Ethio-German Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <span className="font-heading font-black text-lg text-white tracking-tight uppercase block">
                                    Ethio-German
                                </span>
                                <span className="text-[10px] tracking-widest text-[#C5A46D] uppercase font-semibold">
                                    Consulting Architects & Engineers PLC
                                </span>
                            </div>
                        </div>

                        <p className="text-xs text-[#EAF1F8]/70 leading-relaxed pr-6">
                            Category One Legally Registered Architectural & Engineering Consultancy Firm established under the Commercial Code of Ethiopia. Led by Eng. Mikiyas Belayneh (MSc. Structural Design, Bauhaus University Weimar, Germany).
                        </p>

                        <div className="flex flex-wrap items-center gap-2 pt-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-[#DFC79E]">
                                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                <span>Ministry of Works Certified Category 1</span>
                            </div>

                            <button
                                onClick={onOpenFeedback}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C5A46D]/20 border border-[#C5A46D]/40 text-[11px] text-[#DFC79E] hover:bg-[#C5A46D]/30 transition-colors cursor-pointer"
                            >
                                <Star className="w-3.5 h-3.5 text-[#C5A46D] fill-[#C5A46D]" />
                                <span>Leave Client Feedback</span>
                            </button>
                        </div>
                    </div>

                    {/* Quick Navigation Links */}
                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 text-xs text-[#EAF1F8]/70">
                            <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                            <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
                            <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                            Our Services
                        </h4>
                        <ul className="space-y-2.5 text-xs text-[#EAF1F8]/70">
                            <li><a href="#services" className="hover:text-white transition-colors">Architectural Design</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Structural Design</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Construction Supervision</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">BOQ & Cost Estimation</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Topographic Surveying</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Contract Administration</a></li>
                        </ul>
                    </div>

                    {/* Contact Information & Admin Portal */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                            Headquarters
                        </h4>
                        <ul className="space-y-2.5 text-xs text-[#EAF1F8]/70">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                                <span>Aware Metro Homes Building, 3rd Floor, Room No. 642, Addis Ababa, Ethiopia</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-[#C5A46D] shrink-0" />
                                <a href="tel:+251911194278" className="hover:text-white font-mono font-bold">+251 911 194 278</a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-[#C5A46D] shrink-0" />
                                <a href="mailto:Ethio-German@outlook.com" className="hover:text-white font-mono">Ethio-German@outlook.com</a>
                            </li>
                        </ul>

                        <div className="pt-3">
                            <button
                                onClick={currentUser ? onOpenAdmin : onOpenLogin}
                                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#DFC79E] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-white/10"
                            >
                                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A46D]" />
                                <span>{currentUser ? 'Management Admin Portal' : 'Staff / Admin Login'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Back-to-Top Button */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAF1F8]/60">
                    <div>
                        © 2026 Ethio-German Consulting Architects & Engineers PLC. All Rights Reserved.
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#C5A46D] text-white hover:text-[#C5A46D] transition-colors flex items-center gap-2 cursor-pointer"
                    >
                        <span>Back to top</span>
                        <ArrowUp className="w-3.5 h-3.5 text-[#C5A46D]" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
