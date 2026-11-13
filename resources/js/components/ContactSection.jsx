import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare, ExternalLink, MessageCircle } from 'lucide-react';

export default function ContactSection({ prefillData }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service_type: 'Architectural Design',
        project_location: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    // Apply prefill if user clicked from a project card
    useEffect(() => {
        if (prefillData && prefillData.title) {
            setFormData((prev) => ({
                ...prev,
                service_type: prefillData.category === 'Mixed Use' ? 'Structural Design' : 'Architectural Design',
                project_location: prefillData.location || 'Addis Ababa',
                message: `I am inquiring regarding project development similar to "${prefillData.title}" (${prefillData.building || prefillData.category}, ${prefillData.built_up_area || ''} in ${prefillData.location}).\n\nPlease advise on architectural feasibility, structural engineering, and contract management.`,
            }));
        }
    }, [prefillData]);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Full name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please provide a valid email address.';
        }
        if (!formData.message.trim() || formData.message.trim().length < 10) {
            newErrors.message = 'Please provide at least 10 characters describing your project.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
        if (errorMessage) setErrorMessage(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setSubmitting(true);
        setErrorMessage(null);
        setResponseMessage(null);

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
                    service_type: 'Architectural Design',
                    project_location: '',
                    message: '',
                });
            } else {
                setErrorMessage(data.message || 'Validation failed. Please verify your fields.');
            }
        } catch (err) {
            setErrorMessage('Network connection error. Please try again or reach us directly via Phone / WhatsApp.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1F8] border border-blue-200 text-[#102B4E] text-xs font-bold uppercase tracking-widest mb-4">
                        <MessageSquare className="w-3.5 h-3.5 text-[#C5A46D]" />
                        <span>Direct Communication & Advisory</span>
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-5xl text-[#102B4E] tracking-tight mb-4">
                        Contact Us
                    </h2>
                    <p className="text-[#202A35]/80 text-base sm:text-lg leading-relaxed">
                        Consult with our Managing Director, Eng. Mikiyas Belayneh, and our senior architectural and engineering staff regarding your upcoming development.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left: Official Company & Contact Information */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-8 rounded-3xl bg-[#FAFCFE] border border-slate-200 shadow-xs">
                            <h3 className="font-heading font-black text-xl text-[#102B4E] mb-6 pb-4 border-b border-slate-200">
                                Headquarters & Key Contacts
                            </h3>

                            <div className="space-y-6">
                                {/* Company & Managing Director */}
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A46D] block mb-1">
                                        Company Name
                                    </span>
                                    <h4 className="font-heading font-bold text-base text-[#102B4E]">
                                        Ethio-German Consulting Architects & Engineers PLC
                                    </h4>
                                    <p className="text-xs text-[#202A35]/80 mt-1">
                                        <strong>Contact Person:</strong> Eng. Mikiyas Belayneh (Managing Director)
                                    </p>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200">
                                    <div className="w-10 h-10 rounded-xl bg-[#EAF1F8] flex items-center justify-center text-[#102B4E] shrink-0">
                                        <MapPin className="w-5 h-5 text-[#C5A46D]" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#202A35]/60 block mb-0.5">
                                            Office Address
                                        </span>
                                        <p className="text-xs text-[#202A35] font-medium leading-relaxed">
                                            Aware Metro Homes Building,<br />
                                            3rd Floor, Room No. 642,<br />
                                            Yeka Sub City, Addis Ababa, Ethiopia.
                                        </p>
                                    </div>
                                </div>

                                {/* Phone Numbers */}
                                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200">
                                    <div className="w-10 h-10 rounded-xl bg-[#EAF1F8] flex items-center justify-center text-[#102B4E] shrink-0">
                                        <Phone className="w-5 h-5 text-[#C5A46D]" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#202A35]/60 block mb-0.5">
                                            Direct Phone Lines
                                        </span>
                                        <div className="flex flex-col gap-1 text-xs font-mono font-bold text-[#102B4E]">
                                            <a href="tel:+251911194278" className="hover:text-[#C5A46D] transition-colors">
                                                Ethiopia: (+251) 911 194 278
                                            </a>
                                            <a href="tel:+491724951267" className="hover:text-[#C5A46D] transition-colors">
                                                Germany / Int'l: (+49) 172 4951267
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200">
                                    <div className="w-10 h-10 rounded-xl bg-[#EAF1F8] flex items-center justify-center text-[#102B4E] shrink-0">
                                        <Mail className="w-5 h-5 text-[#C5A46D]" />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#202A35]/60 block mb-0.5">
                                            Official Email
                                        </span>
                                        <a
                                            href="mailto:Ethio-German@outlook.com"
                                            className="text-xs font-mono font-bold text-[#102B4E] hover:text-[#C5A46D] transition-colors"
                                        >
                                            Ethio-German@outlook.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Direct Action Buttons: Phone Call, Email, WhatsApp */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-8 pt-6 border-t border-slate-200">
                                <a
                                    href="tel:+251911194278"
                                    className="p-3 rounded-xl bg-[#102B4E] hover:bg-[#0A1C33] text-white text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                                >
                                    <Phone className="w-3.5 h-3.5 text-[#C5A46D]" />
                                    <span>Call Us</span>
                                </a>

                                <a
                                    href="mailto:Ethio-German@outlook.com"
                                    className="p-3 rounded-xl bg-[#EAF1F8] hover:bg-blue-100 text-[#102B4E] text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-blue-200"
                                >
                                    <Mail className="w-3.5 h-3.5 text-[#C5A46D]" />
                                    <span>Email Us</span>
                                </a>

                                <a
                                    href="https://wa.me/251911194278?text=Hello%20Ethio-German%20Consulting%2C%20I%20would%20like%20to%20inquire%20about%20architectural%20and%20engineering%20consultancy."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                                >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        {/* Google Maps Integration */}
                        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xs h-64 bg-slate-100 relative">
                            <iframe
                                title="Ethio-German Consulting Location Map"
                                src="https://maps.google.com/maps?q=Aware,Yeka,Addis+Ababa,Ethiopia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    {/* Right: Premium Responsive Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFCFE] border border-slate-200 shadow-sm">
                            <h3 className="font-heading font-black text-2xl text-[#102B4E] mb-2">
                                Request a Project Consultation
                            </h3>
                            <p className="text-xs text-[#202A35]/70 mb-8">
                                Please outline your project scope below. Our multidisciplinary engineering team will review your parameters and respond promptly.
                            </p>

                            {/* Success Notification */}
                            {responseMessage && (
                                <div className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-emerald-950 font-bold mb-1">
                                            Inquiry Transmitted Successfully! (Reference ID: {responseMessage.ref})
                                        </strong>
                                        <p className="leading-relaxed">{responseMessage.msg}</p>
                                    </div>
                                </div>
                            )}

                            {/* Error Notification */}
                            {errorMessage && (
                                <div className="mb-6 p-5 rounded-2xl bg-rose-50 border border-rose-300 text-rose-900 text-xs flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="block text-rose-950 font-bold mb-0.5">Submission Notice</strong>
                                        <p>{errorMessage}</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Row 1: Full Name & Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] block mb-1.5">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="e.g. Ato Yohannes / Real Estate Rep"
                                            className={`w-full px-4 py-3 rounded-xl bg-white border ${
                                                errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                                            } focus:border-[#102B4E] focus:ring-1 focus:ring-[#102B4E] focus:outline-none text-xs text-[#202A35] transition-colors shadow-2xs`}
                                        />
                                        {errors.name && <p className="text-[10px] text-rose-600 mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] block mb-1.5">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="e.g. client@example.com"
                                            className={`w-full px-4 py-3 rounded-xl bg-white border ${
                                                errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                                            } focus:border-[#102B4E] focus:ring-1 focus:ring-[#102B4E] focus:outline-none text-xs text-[#202A35] transition-colors shadow-2xs`}
                                        />
                                        {errors.email && <p className="text-[10px] text-rose-600 mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                {/* Row 2: Phone Number & Service Required */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] block mb-1.5">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+251 9... / +49..."
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#102B4E] focus:ring-1 focus:ring-[#102B4E] focus:outline-none text-xs text-[#202A35] transition-colors shadow-2xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] block mb-1.5">
                                            Service Required
                                        </label>
                                        <select
                                            name="service_type"
                                            value={formData.service_type}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#102B4E] focus:ring-1 focus:ring-[#102B4E] focus:outline-none text-xs text-[#202A35] transition-colors shadow-2xs"
                                        >
                                            <option value="Architectural Design">01. Architectural Design</option>
                                            <option value="Structural Design">02. Structural Design</option>
                                            <option value="Interior Design">03. Interior Design</option>
                                            <option value="Electrical Design">04. Electrical Design</option>
                                            <option value="Sanitary Design">05. Sanitary Design</option>
                                            <option value="Mechanical Design">06. Mechanical Design</option>
                                            <option value="Topographic Surveying">07. Topographic Surveying</option>
                                            <option value="Soil Investigation and Foundation Recommendation">08. Soil Investigation & Foundations</option>
                                            <option value="Bill of Quantities and Cost Estimation">09. Bill of Quantities & Costing</option>
                                            <option value="Construction Supervision">10. Construction Supervision</option>
                                            <option value="Quality Control">11. Quality Control</option>
                                            <option value="Contract Administration">12. Contract Administration</option>
                                            <option value="Feasibility Studies">13. Feasibility Studies</option>
                                            <option value="Municipal Consultancy">14. Municipal Consultancy</option>
                                            <option value="2D Drawings">15. 2D Working Drawings</option>
                                            <option value="3D Modeling and Animations">16. 3D Modeling & Animations</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 3: Project Location */}
                                <div>
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] block mb-1.5">
                                        Project Location
                                    </label>
                                    <input
                                        type="text"
                                        name="project_location"
                                        value={formData.project_location}
                                        onChange={handleChange}
                                        placeholder="e.g. Addis Ababa (Bole, Piazza, Yeka, Aware, etc.) or Regional City"
                                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-[#102B4E] focus:ring-1 focus:ring-[#102B4E] focus:outline-none text-xs text-[#202A35] transition-colors shadow-2xs"
                                    />
                                </div>

                                {/* Row 4: Message */}
                                <div>
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] block mb-1.5">
                                        Message & Scope Description *
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Outline your building typology (floors, plot dimensions), expected timelines, or questions..."
                                        className={`w-full px-4 py-3 rounded-xl bg-white border ${
                                            errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                                        } focus:border-[#102B4E] focus:ring-1 focus:ring-[#102B4E] focus:outline-none text-xs text-[#202A35] transition-colors leading-relaxed shadow-2xs`}
                                    />
                                    {errors.message && <p className="text-[10px] text-rose-600 mt-1">{errors.message}</p>}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full py-4 rounded-xl bg-[#102B4E] hover:bg-[#0A1C33] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl flex items-center justify-center gap-2 transition-all disabled:opacity-60 cursor-pointer border border-[#C5A46D]/40"
                                >
                                    {submitting ? (
                                        <span>Submitting Inquiry...</span>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 text-[#C5A46D]" />
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
