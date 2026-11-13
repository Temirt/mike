import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenConsultation, onOpenAdmin, onOpenLogin, currentUser }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Our Team', href: '#team' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 w-full ${
                scrolled
                    ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-2.5'
                    : 'bg-white/95 backdrop-blur-sm border-b border-slate-200/60 py-3.5'
            }`}
        >
            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4">
                    {/* Left: Official Logo & Monogram Brand */}
                    <a href="#hero" className="flex items-center gap-3 group shrink-0">
                        <div className="relative w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center overflow-hidden group-hover:border-[#C5A46D] transition-colors p-1">
                            <img
                                src="/images/logo.jpg"
                                alt="Ethio-German Consulting Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <span className="font-heading font-black text-lg tracking-tight text-[#102B4E] uppercase group-hover:text-[#C5A46D] transition-colors">
                                    Ethio-German
                                </span>
                                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#EAF1F8] text-[#102B4E] border border-blue-200">
                                    Cat. 1
                                </span>
                            </div>
                            <span className="text-[10px] tracking-widest text-[#202A35]/70 uppercase font-semibold">
                                Consulting Architects & Engineers PLC
                            </span>
                        </div>
                    </a>

                    {/* Center: Desktop Navigation Pill (Active on lg+ screens >= 1024px) */}
                    <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#EAF1F8]/80 border border-slate-200/80 shadow-2xs">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-1.5 text-xs uppercase tracking-wider font-bold text-[#202A35]/80 hover:text-[#102B4E] hover:bg-white rounded-full transition-all duration-150"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Right: Actions (Phone, Admin Portal, Consultation Button) */}
                    <div className="hidden sm:flex items-center gap-2.5 shrink-0">
                        <a
                            href="tel:+251911194278"
                            className="hidden 2xl:flex items-center gap-1.5 text-xs font-semibold text-[#202A35] hover:text-[#102B4E] px-3 py-2 rounded-xl transition-colors border border-slate-200 bg-white shadow-2xs"
                        >
                            <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
                            <span className="font-mono font-bold">(+251) 911 194 278</span>
                        </a>

                        <button
                            onClick={currentUser ? onOpenAdmin : onOpenLogin}
                            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-[#102B4E] text-[#102B4E] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 border border-slate-200 cursor-pointer shadow-2xs"
                            title={currentUser ? "Open Inquiries & Feedback Admin Portal" : "Sign in to Staff & Admin Portal"}
                        >
                            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A46D]" />
                            <span>{currentUser ? 'Admin Portal' : 'Login'}</span>
                        </button>

                        <button
                            onClick={onOpenConsultation}
                            className="px-5 py-2.5 rounded-xl bg-[#102B4E] hover:bg-[#0A1C33] text-white text-xs font-heading font-black uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer border border-[#C5A46D]/30 hover:border-[#C5A46D]"
                        >
                            <span>REQUEST A CONSULTATION</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A46D]" />
                        </button>
                    </div>

                    {/* Mobile Hamburger Menu Toggle (Visible on < lg screens) */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#102B4E] hover:text-[#C5A46D] focus:outline-none shadow-xs"
                            aria-label="Toggle navigation menu"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Responsive Dropdown Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-3 p-5 rounded-2xl bg-white border border-slate-200 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="flex flex-col gap-1.5">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-4 py-2.5 text-sm font-bold text-[#202A35] hover:text-[#102B4E] hover:bg-[#EAF1F8] rounded-xl transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5 mt-1">
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        if (currentUser) {
                                            onOpenAdmin();
                                        } else {
                                            onOpenLogin();
                                        }
                                    }}
                                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#102B4E] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-200"
                                >
                                    <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
                                    <span>{currentUser ? 'Admin Portal' : 'Staff Login'}</span>
                                </button>

                                <a
                                    href="tel:+251911194278"
                                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#EAF1F8] border border-blue-200 text-sm font-semibold text-[#102B4E]"
                                >
                                    <Phone className="w-4 h-4 text-[#C5A46D]" />
                                    <span>Call: (+251) 911 194 278</span>
                                </a>

                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        onOpenConsultation();
                                    }}
                                    className="w-full py-3 rounded-xl bg-[#102B4E] hover:bg-[#0A1C33] text-white font-bold text-xs tracking-wide shadow-sm flex items-center justify-center gap-2 border border-[#C5A46D]/40 uppercase"
                                >
                                    <span>REQUEST A CONSULTATION</span>
                                    <ArrowUpRight className="w-4 h-4 text-[#C5A46D]" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
