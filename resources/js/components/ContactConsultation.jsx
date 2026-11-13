import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';

export default function ContactConsultation({ prefillData }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service_type: 'Architectural & Structural Package',
        project_scale: 'Mid-Rise (G+6 to G+10)',
        message: '',
    });

    const [submitting, setSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    // Apply prefill data if user clicked a project
    useEffect(() => {
        if (prefillData && prefillData.title) {
            setFormData((prev) => ({
                ...prev,
                service_type: 'Full Consultancy Package',
                message: `I am interested in developing a project similar to "${prefillData.title}" (${prefillData.category}, ${prefillData.built_up_area || ''} in ${prefillData.location}).\n\nPlease advise on architectural design, structural feasibility, and contract administration.`,
            }));
        }
    }, [prefillData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        if (errorMessage) setErrorMessage(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setErrorMessage(null);
        setResponseMessage(null);

        // Get CSRF token
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken || '',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok && data.status === 'success') {
                setResponseMessage({
                    ref: data.data?.reference_id || 'EGC-SUCCESS',
                    msg: data.message,
                });

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service_type: 'Architectural & Structural Package',
                    project_scale: 'Mid-Rise (G+6 to G+10)',
                    message: '',
                });
            } else {
                setErrorMessage(data.message || 'Validation failed. Please verify your form fields.');
            }
        } catch (err) {
            setErrorMessage('Network connection error. Please try again or reach out to us via direct phone/WhatsApp.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest mb-4">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Direct Communication & Inquiries</span>
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
                        Initiate Your Project with{' '}
                        <span className="text-[#0f224a] underline decoration-blue-200 underline-offset-8">
                            Eng. Mikiyas Belayneh
                        </span>
                    </h2>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                        Whether you are planning a high-density mixed-use development, a residential tower, or require senior structural analysis, our engineering studio is at your disposal.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Contact Information */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-xs">
                            <h3 className="font-heading font-bold text-xl text-slate-900 mb-6 pb-4 border-b border-slate-100">
                                Headquarters & Key Contacts
                            </h3>

                            <div className="space-y-6">
                                {/* Office Address */}
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-900 shrink-0 shadow-2xs">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                                            Physical Office Address
                                        </span>
                                        <p className="text-xs text-slate-700 leading-relaxed font-medium">
                                            Aware Metro Homes Building, 3rd Floor, Room No. 642<br />
                                            Woreda: 08, House No.: New<br />
                                            Yeka Sub City, Addis Ababa, Ethiopia
                                        </p>
                                    </div>
                                </div>

                                {/* Direct Phone Contacts */}
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-900 shrink-0 shadow-2xs">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                                            Managing Director & Senior Office
                                        </span>
                                        <div className="flex flex-col gap-1 text-xs">
                                            <a
                                                href="tel:+251911194278"
                                                className="text-slate-900 hover:text-blue-700 font-mono font-bold"
                                            >
                                                Ethiopia: (+251) 911 194 278
                                            </a>
                                            <a
                                                href="tel:+491724951267"
                                                className="text-slate-600 hover:text-blue-700 font-mono"
                                            >
                                                Germany / Int'l: (+491) 724951267
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Official Email */}
                                <div className="flex items-start gap-4">
                                    <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-900 shrink-0 shadow-2xs">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                                            Official Correspondence
                                        </span>
                                        <a
                                            href="mailto:Ethio-German@outlook.com"
                                            className="text-xs text-blue-900 hover:text-blue-700 font-bold font-mono"
                                        >
                                            Ethio-German@outlook.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                                <span className="text-slate-800 font-semibold">Office Hours:</span> Monday – Saturday: 8:30 AM – 6:00 PM (EAT). Project consultation meetings available by appointment.
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="lg:col-span-7">
                        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs">
                            <h3 className="font-heading font-bold text-xl text-slate-900 mb-1.5">
                                Request Engineering & Design Consultation
                            </h3>
                            <p className="text-xs text-slate-500 mb-6">
                                Submit your project parameters below. Our multidisciplinary team will prepare preliminary assessments.
                            </p>

                            {/* Success Notification Alert */}
                            {responseMessage && (
                                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-emerald-950 font-bold mb-1">
                                            Inquiry Submitted Successfully! (Ref: {responseMessage.ref})
                                        </strong>
                                        <p className="leading-relaxed">{responseMessage.msg}</p>
                                    </div>
                                </div>
                            )}

                            {/* Error Alert */}
                            {errorMessage && (
                                <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-300 text-rose-900 text-xs flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-rose-950 font-bold mb-0.5">Submission Notice</strong>
                                        <p>{errorMessage}</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                                            Your Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="e.g. Ato Yohannes / Real Estate Rep"
                                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0f224a] focus:ring-1 focus:ring-[#0f224a] focus:outline-none text-xs text-slate-900 placeholder-slate-400 transition-colors shadow-2xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="e.g. client@example.com"
                                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0f224a] focus:ring-1 focus:ring-[#0f224a] focus:outline-none text-xs text-slate-900 placeholder-slate-400 transition-colors shadow-2xs"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                                            Phone / WhatsApp
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+251 9... / +49..."
                                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0f224a] focus:ring-1 focus:ring-[#0f224a] focus:outline-none text-xs text-slate-900 placeholder-slate-400 transition-colors shadow-2xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                                            Primary Discipline
                                        </label>
                                        <select
                                            name="service_type"
                                            value={formData.service_type}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0f224a] focus:ring-1 focus:ring-[#0f224a] focus:outline-none text-xs text-slate-900 transition-colors shadow-2xs"
                                        >
                                            <option value="Architectural & Structural Package">Full Architectural & Structural</option>
                                            <option value="Architectural Design & 3D">Architectural Design & 3D Walkthrough</option>
                                            <option value="Structural Engineering & ETABS">Structural Engineering & ETABS Analysis</option>
                                            <option value="Construction Supervision & QC">Construction Supervision & QC</option>
                                            <option value="BOQ & Cost Engineering">BOQ Specification & Cost Engineering</option>
                                            <option value="Topographic Survey & Geotechnical">Topographic Survey & Soil Study</option>
                                            <option value="Contract Administration & Advisory">Contract Administration & Legal</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                                        Project Scale / Typology
                                    </label>
                                    <input
                                        type="text"
                                        name="project_scale"
                                        value={formData.project_scale}
                                        onChange={handleChange}
                                        placeholder="e.g. Mixed-Use B+G+12, Luxury Villa G+2, etc."
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0f224a] focus:ring-1 focus:ring-[#0f224a] focus:outline-none text-xs text-slate-900 placeholder-slate-400 transition-colors shadow-2xs"
                                    />
                                </div>

                                <div>
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                                        Project Scope & Brief Description *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Outline your plot location, number of floors, desired amenities, timeline, and questions..."
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#0f224a] focus:ring-1 focus:ring-[#0f224a] focus:outline-none text-xs text-slate-900 placeholder-slate-400 transition-colors leading-relaxed shadow-2xs"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full py-3.5 rounded-xl bg-[#0f224a] hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-60 cursor-pointer"
                                >
                                    {submitting ? (
                                        <span>Submitting Inquiry...</span>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            <span>Transmit Consultation Request</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
