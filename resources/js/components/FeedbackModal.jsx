import React, { useState } from 'react';
import { X, Star, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function FeedbackModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        client_name: '',
        email: '',
        phone: '',
        company_or_project: '',
        rating: 5,
        feedback_type: 'Project Review',
        message: '',
    });

    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError(null);
    };

    const handleRating = (rating) => {
        setFormData({ ...formData, rating });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

        try {
            const res = await fetch('/api/feedback', {
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
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    onClose();
                }, 2500);
            } else {
                setError(data.message || 'Submission failed. Please check form fields.');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A1C33]/80 backdrop-blur-md"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF1F8] border border-blue-200 text-[#102B4E] text-[10px] font-bold uppercase tracking-wider w-fit mb-3">
                    <MessageSquare className="w-3 h-3 text-[#C5A46D]" />
                    <span>Client Voice & Testimonials</span>
                </div>

                <h3 className="font-heading font-black text-xl text-[#102B4E] mb-1">
                    Share Your Feedback
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                    We appreciate your thoughts on our architectural design, engineering precision, or site supervision.
                </p>

                {success && (
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs flex items-center gap-3 mb-4">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>Thank you! Your feedback has been transmitted to Ethio-German Consulting management.</span>
                    </div>
                )}

                {error && (
                    <div className="p-4 rounded-2xl bg-rose-50 border border-rose-300 text-rose-950 text-xs mb-4">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Star Rating Selector */}
                    <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] block mb-1.5">
                            Overall Rating
                        </label>
                        <div className="flex items-center gap-1.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    type="button"
                                    key={star}
                                    onClick={() => handleRating(star)}
                                    className="p-1 cursor-pointer focus:outline-none transition-transform hover:scale-110"
                                >
                                    <Star
                                        className={`w-6 h-6 ${
                                            star <= formData.rating
                                                ? 'text-[#C5A46D] fill-[#C5A46D]'
                                                : 'text-slate-200 hover:text-amber-200'
                                        }`}
                                    />
                                </button>
                            ))}
                            <span className="text-xs font-bold text-[#102B4E] ml-2">
                                {formData.rating} of 5 Stars
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] block mb-1">
                                Your Full Name *
                            </label>
                            <input
                                type="text"
                                name="client_name"
                                required
                                value={formData.client_name}
                                onChange={handleChange}
                                placeholder="Ato / W/ro / Eng..."
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#202A35] focus:outline-none focus:border-[#102B4E]"
                            />
                        </div>

                        <div>
                            <label className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] block mb-1">
                                Project / Firm Name
                            </label>
                            <input
                                type="text"
                                name="company_or_project"
                                value={formData.company_or_project}
                                onChange={handleChange}
                                placeholder="e.g. Metro Homes, Villa G+2..."
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#202A35] focus:outline-none focus:border-[#102B4E]"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] block mb-1">
                                Email (Optional)
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="client@example.com"
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#202A35] focus:outline-none focus:border-[#102B4E]"
                            />
                        </div>

                        <div>
                            <label className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] block mb-1">
                                Feedback Type
                            </label>
                            <select
                                name="feedback_type"
                                value={formData.feedback_type}
                                onChange={handleChange}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#202A35] focus:outline-none focus:border-[#102B4E]"
                            >
                                <option value="Project Review">Project Review</option>
                                <option value="Design Quality">Design Quality</option>
                                <option value="Structural Engineering">Structural Engineering</option>
                                <option value="Construction Supervision">Construction Supervision</option>
                                <option value="General Service">General Service</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] block mb-1">
                            Your Message / Review *
                        </label>
                        <textarea
                            name="message"
                            required
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Share your experience working with Ethio-German Consulting..."
                            className="w-full p-3.5 rounded-xl border border-slate-200 text-xs text-[#202A35] focus:outline-none focus:border-[#102B4E] leading-relaxed"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3 rounded-xl bg-[#102B4E] hover:bg-[#0A1C33] text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                        <Send className="w-3.5 h-3.5 text-[#C5A46D]" />
                        <span>{submitting ? 'Submitting...' : 'Submit Feedback'}</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
