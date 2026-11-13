import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';

export default function LoginPage({ onLoginSuccess, onBackToWebsite }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken || '',
                },
                body: JSON.stringify({
                    email,
                    password,
                    remember,
                }),
            });

            const data = await res.json();

            if (res.ok && data.status === 'success') {
                onLoginSuccess(data.data);
            } else {
                setError(data.message || 'Invalid email or password. Please verify your credentials.');
            }
        } catch (err) {
            setError('Connection error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FAFCFE] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
            {/* Subtle Architectural Grid Pattern */}
            <div className="absolute inset-0 bg-arch-grid pointer-events-none" />

            {/* Back to Website Button */}
            <div className="absolute top-6 left-6 z-20">
                <button
                    onClick={onBackToWebsite}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#102B4E] hover:border-[#C5A46D] shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                >
                    <ArrowLeft className="w-3.5 h-3.5 text-[#C5A46D]" />
                    <span>Return to Public Website</span>
                </button>
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
                {/* Official Monogram & Brand Logo */}
                <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center p-2 mb-4">
                        <img
                            src="/images/logo.jpg"
                            alt="Ethio-German Consulting Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] mb-1">
                        Executive Administration Portal
                    </span>
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#102B4E] tracking-tight">
                        Staff & Management Login
                    </h2>
                    <p className="text-xs text-[#202A35]/70 mt-1">
                        Ethio-German Consulting Architects & Engineers PLC
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white py-8 px-6 sm:px-10 shadow-xl rounded-3xl border border-slate-200">
                    {/* Error Banner */}
                    {error && (
                        <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-300 text-rose-900 text-xs flex items-start gap-2.5">
                            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
                        {/* Email */}
                        <div>
                            <label className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] block mb-1.5">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Mail className="w-4 h-4 text-slate-400" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    autoComplete="off"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your administrative email"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-[#102B4E] focus:ring-1 focus:ring-[#102B4E] text-xs text-[#202A35] focus:outline-none transition-colors shadow-2xs"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-[11px] font-bold uppercase tracking-wider text-[#102B4E] block mb-1.5">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Lock className="w-4 h-4 text-slate-400" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 focus:border-[#102B4E] focus:ring-1 focus:ring-[#102B4E] text-xs text-[#202A35] focus:outline-none transition-colors shadow-2xs font-mono"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center justify-between text-xs">
                            <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                                <input
                                    type="checkbox"
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                    className="w-4 h-4 text-[#102B4E] rounded border-slate-300 focus:ring-[#102B4E]"
                                />
                                <span>Remember this workstation</span>
                            </label>
                            <span className="text-[11px] text-slate-400">Category 1 Security</span>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 rounded-xl bg-[#102B4E] hover:bg-[#0A1C33] text-white font-heading font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#C5A46D]/40 disabled:opacity-60"
                        >
                            {loading ? (
                                <span>Verifying Credentials...</span>
                            ) : (
                                <>
                                    <span>Sign In to Admin Portal</span>
                                    <ArrowRight className="w-4 h-4 text-[#C5A46D]" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Authorized Personnel Only • Aware Metro Homes Building</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
