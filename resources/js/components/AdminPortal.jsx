import React, { useState, useEffect } from 'react';
import {
    Building2,
    Users,
    MessageSquare,
    Search,
    Filter,
    CheckCircle2,
    Clock,
    AlertCircle,
    Phone,
    Mail,
    MapPin,
    ArrowUpRight,
    ArrowLeft,
    RefreshCw,
    Download,
    Trash2,
    Save,
    Star,
    MessageCircle,
    SlidersHorizontal,
    FileSpreadsheet,
    ShieldCheck,
    Layers,
    ChevronDown,
    ChevronUp,
} from 'lucide-react';

export default function AdminPortal({ onBackToWebsite, currentUser, onLogout }) {
    const [activeTab, setActiveTab] = useState('inquiries'); // 'inquiries' | 'feedbacks'
    const [stats, setStats] = useState(null);
    const [inquiries, setInquiries] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    // Filter & Search states
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [serviceFilter, setServiceFilter] = useState('All');

    // Expanded Inquiry rows for detailed notes
    const [expandedInquiryId, setExpandedInquiryId] = useState(null);
    const [adminNotesDraft, setAdminNotesDraft] = useState({});
    const [savingNoteId, setSavingNoteId] = useState(null);

    // Toast notification
    const [notification, setNotification] = useState(null);

    const showNotification = (msg, type = 'success') => {
        setNotification({ msg, type });
        setTimeout(() => setNotification(null), 4000);
    };

    // Load Data
    const fetchData = async () => {
        setRefreshing(true);
        try {
            // Stats
            const statsRes = await fetch('/api/admin/stats');
            const statsData = await statsRes.json();
            if (statsData.status === 'success') {
                setStats(statsData.data);
            }

            // Inquiries
            const inqRes = await fetch('/api/admin/inquiries');
            const inqData = await inqRes.json();
            if (inqData.status === 'success') {
                setInquiries(inqData.data);
                // Pre-fill notes draft
                const notes = {};
                inqData.data.forEach((item) => {
                    notes[item.id] = item.admin_notes || '';
                });
                setAdminNotesDraft(notes);
            }

            // Feedbacks
            const fbRes = await fetch('/api/admin/feedbacks');
            const fbData = await fbRes.json();
            if (fbData.status === 'success') {
                setFeedbacks(fbData.data);
            }
        } catch (err) {
            showNotification('Failed to fetch admin data.', 'error');
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Update Inquiry Status
    const handleUpdateInquiryStatus = async (id, newStatus) => {
        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
            const res = await fetch(`/api/admin/inquiries/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken || '',
                },
                body: JSON.stringify({ status: newStatus }),
            });
            const data = await res.json();
            if (res.ok && data.status === 'success') {
                setInquiries((prev) =>
                    prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
                );
                showNotification(`Inquiry updated to "${newStatus.replace('_', ' ').toUpperCase()}".`);
            } else {
                showNotification('Failed to update status.', 'error');
            }
        } catch (err) {
            showNotification('Connection error while updating status.', 'error');
        }
    };

    // Save Admin Notes
    const handleSaveAdminNotes = async (id) => {
        setSavingNoteId(id);
        const note = adminNotesDraft[id] || '';
        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
            const res = await fetch(`/api/admin/inquiries/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken || '',
                },
                body: JSON.stringify({ admin_notes: note }),
            });
            const data = await res.json();
            if (res.ok && data.status === 'success') {
                setInquiries((prev) =>
                    prev.map((item) => (item.id === id ? { ...item, admin_notes: note } : item))
                );
                showNotification('Engineer notes saved successfully.');
            } else {
                showNotification('Could not save notes.', 'error');
            }
        } catch (err) {
            showNotification('Error saving notes.', 'error');
        } finally {
            setSavingNoteId(null);
        }
    };

    // Delete Inquiry
    const handleDeleteInquiry = async (id, refId) => {
        if (!window.confirm(`Are you sure you want to delete inquiry ${refId}? This cannot be undone.`)) {
            return;
        }

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
            const res = await fetch(`/api/admin/inquiries/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken || '',
                },
            });
            const data = await res.json();
            if (res.ok && data.status === 'success') {
                setInquiries((prev) => prev.filter((item) => item.id !== id));
                showNotification(`Inquiry ${refId} removed.`);
            } else {
                showNotification('Could not delete inquiry.', 'error');
            }
        } catch (err) {
            showNotification('Error deleting inquiry.', 'error');
        }
    };

    // Update Feedback Status
    const handleUpdateFeedbackStatus = async (id, newStatus) => {
        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
            const res = await fetch(`/api/admin/feedbacks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken || '',
                },
                body: JSON.stringify({ status: newStatus }),
            });
            const data = await res.json();
            if (res.ok && data.status === 'success') {
                setFeedbacks((prev) =>
                    prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
                );
                showNotification(`Feedback marked as ${newStatus}.`);
            } else {
                showNotification('Failed to update feedback status.', 'error');
            }
        } catch (err) {
            showNotification('Error updating feedback status.', 'error');
        }
    };

    // Delete Feedback
    const handleDeleteFeedback = async (id) => {
        if (!window.confirm('Delete this feedback review?')) return;

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
            const res = await fetch(`/api/admin/feedbacks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken || '',
                },
            });
            const data = await res.json();
            if (res.ok && data.status === 'success') {
                setFeedbacks((prev) => prev.filter((item) => item.id !== id));
                showNotification('Feedback entry deleted.');
            }
        } catch (err) {
            showNotification('Error deleting feedback.', 'error');
        }
    };

    // Export Inquiries to CSV
    const exportInquiriesCSV = () => {
        if (inquiries.length === 0) {
            alert('No inquiries available to export.');
            return;
        }

        const headers = ['Ref ID', 'Client Name', 'Email', 'Phone', 'Service', 'Location', 'Scale', 'Status', 'Message', 'Notes', 'Date'];
        const rows = inquiries.map((i) => [
            i.reference_id,
            `"${(i.name || '').replace(/"/g, '""')}"`,
            `"${(i.email || '').replace(/"/g, '""')}"`,
            `"${(i.phone || '').replace(/"/g, '""')}"`,
            `"${(i.service_type || '').replace(/"/g, '""')}"`,
            `"${(i.project_location || '').replace(/"/g, '""')}"`,
            `"${(i.project_scale || '').replace(/"/g, '""')}"`,
            i.status,
            `"${(i.message || '').replace(/"/g, '""')}"`,
            `"${(i.admin_notes || '').replace(/"/g, '""')}"`,
            i.created_at,
        ]);

        const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `EthioGerman_Inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Filter inquiries
    const filteredInquiries = inquiries.filter((item) => {
        const matchesQuery =
            !searchQuery ||
            (item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.email && item.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.phone && item.phone.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.reference_id && item.reference_id.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.project_location && item.project_location.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.message && item.message.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
        const matchesService = serviceFilter === 'All' || item.service_type === serviceFilter;

        return matchesQuery && matchesStatus && matchesService;
    });

    const getStatusBadge = (status) => {
        switch (status) {
            case 'received':
                return { label: 'New / Received', bg: 'bg-blue-100 text-blue-900 border-blue-200' };
            case 'under_review':
                return { label: 'Under Review', bg: 'bg-amber-100 text-amber-900 border-amber-300' };
            case 'contacted':
                return { label: 'Contacted / In Discussion', bg: 'bg-indigo-100 text-indigo-900 border-indigo-200' };
            case 'proposal_sent':
                return { label: 'Proposal Sent', bg: 'bg-sky-100 text-sky-900 border-sky-300' };
            case 'completed':
                return { label: 'Completed / Retained', bg: 'bg-emerald-100 text-emerald-900 border-emerald-300' };
            case 'archived':
                return { label: 'Archived', bg: 'bg-slate-100 text-slate-700 border-slate-300' };
            default:
                return { label: status, bg: 'bg-slate-100 text-slate-800 border-slate-200' };
        }
    };

    return (
        <div className="min-h-screen bg-[#FAFCFE] text-[#202A35] flex flex-col font-sans">
            {/* Notification Banner */}
            {notification && (
                <div
                    className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-2xl shadow-xl border flex items-center gap-3 text-xs font-bold transition-all ${
                        notification.type === 'error'
                            ? 'bg-rose-50 border-rose-300 text-rose-900'
                            : 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    }`}
                >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{notification.msg}</span>
                </div>
            )}

            {/* Portal Header */}
            <header className="bg-[#102B4E] border-b border-[#C5A46D]/30 text-white sticky top-0 z-40 shadow-md">
                <div className="max-w-[1720px] mx-auto px-4 sm:px-8 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    {/* Brand & Portal Monogram */}
                    <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden shrink-0 border border-slate-200 shadow-sm">
                            <img
                                src="/images/logo.jpg"
                                alt="Ethio-German Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="font-heading font-black text-lg tracking-tight uppercase">
                                    Ethio-German Consulting
                                </h1>
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#C5A46D] text-[#0A1C33]">
                                    Admin Portal
                                </span>
                            </div>
                            <p className="text-xs text-[#EAF1F8]/80">
                                Project Consultation Requests & Client Feedback Management
                            </p>
                        </div>
                    </div>

                    {/* Actions: Refresh, User Identity, Logout & Return to Public Site */}
                    <div className="flex flex-wrap items-center gap-2.5 self-end md:self-auto">
                        {currentUser && (
                            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs">
                                <Users className="w-3.5 h-3.5 text-[#C5A46D]" />
                                <span className="text-white font-medium">{currentUser.name}</span>
                            </div>
                        )}

                        <button
                            onClick={fetchData}
                            disabled={refreshing}
                            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors border border-white/20 cursor-pointer"
                            title="Refresh data from server"
                        >
                            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
                            <span className="hidden sm:inline">Refresh</span>
                        </button>

                        <button
                            onClick={onBackToWebsite}
                            className="px-4 py-2 rounded-xl bg-[#C5A46D] hover:bg-[#B39158] text-[#0A1C33] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Public Website</span>
                        </button>

                        {currentUser ? (
                            <button
                                onClick={onLogout}
                                className="px-3.5 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-500/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                                title="Sign out of administration session"
                            >
                                <span>Sign Out</span>
                            </button>
                        ) : null}
                    </div>
                </div>
            </header>

            {/* Main Portal Body */}
            <main className="flex-1 max-w-[1720px] w-full mx-auto px-4 sm:px-8 py-8">
                {/* KPI Metrics Dashboard */}
                {stats && (
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col">
                            <span className="text-xs font-bold text-[#202A35]/60 uppercase tracking-wider mb-1">
                                Total Consultations
                            </span>
                            <span className="font-heading font-black text-3xl text-[#102B4E]">
                                {stats.total_inquiries}
                            </span>
                            <span className="text-[11px] text-slate-500 mt-0.5">All time submissions</span>
                        </div>

                        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 shadow-xs flex flex-col">
                            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-amber-600" />
                                Pending Review
                            </span>
                            <span className="font-heading font-black text-3xl text-amber-900">
                                {stats.pending_inquiries}
                            </span>
                            <span className="text-[11px] text-amber-800 mt-0.5">Awaiting initial assessment</span>
                        </div>

                        <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 shadow-xs flex flex-col">
                            <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1">
                                In Discussion
                            </span>
                            <span className="font-heading font-black text-3xl text-indigo-900">
                                {stats.contacted_inquiries}
                            </span>
                            <span className="text-[11px] text-indigo-800 mt-0.5">Active engineering talks</span>
                        </div>

                        <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 shadow-xs flex flex-col">
                            <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                Completed / Retained
                            </span>
                            <span className="font-heading font-black text-3xl text-emerald-900">
                                {stats.completed_inquiries}
                            </span>
                            <span className="text-[11px] text-emerald-800 mt-0.5">Successful closures</span>
                        </div>

                        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col col-span-2 lg:col-span-1">
                            <span className="text-xs font-bold text-[#202A35]/60 uppercase tracking-wider mb-1 flex items-center gap-1">
                                <Star className="w-3.5 h-3.5 text-[#C5A46D] fill-[#C5A46D]" />
                                Client Feedback
                            </span>
                            <div className="flex items-baseline gap-2">
                                <span className="font-heading font-black text-3xl text-[#102B4E]">
                                    {stats.total_feedbacks}
                                </span>
                                <span className="text-xs font-bold text-[#C5A46D]">
                                    ({stats.average_rating} ★ Avg)
                                </span>
                            </div>
                            <span className="text-[11px] text-slate-500 mt-0.5">{stats.approved_feedbacks} Featured reviews</span>
                        </div>
                    </div>
                )}

                {/* Primary Navigation Tabs */}
                <div className="flex items-center justify-between border-b border-slate-200 mb-6 gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setActiveTab('inquiries')}
                            className={`px-5 py-3 text-xs font-heading font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                                activeTab === 'inquiries'
                                    ? 'border-[#102B4E] text-[#102B4E] bg-white shadow-xs rounded-t-xl'
                                    : 'border-transparent text-slate-500 hover:text-[#102B4E]'
                            }`}
                        >
                            <MessageSquare className="w-4 h-4 text-[#C5A46D]" />
                            <span>Project Consultation Inquiries ({inquiries.length})</span>
                        </button>

                        <button
                            onClick={() => setActiveTab('feedbacks')}
                            className={`px-5 py-3 text-xs font-heading font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                                activeTab === 'feedbacks'
                                    ? 'border-[#102B4E] text-[#102B4E] bg-white shadow-xs rounded-t-xl'
                                    : 'border-transparent text-slate-500 hover:text-[#102B4E]'
                            }`}
                        >
                            <Star className="w-4 h-4 text-[#C5A46D] fill-[#C5A46D]" />
                            <span>Client Feedback & Reviews ({feedbacks.length})</span>
                        </button>
                    </div>

                    {activeTab === 'inquiries' && (
                        <button
                            onClick={exportInquiriesCSV}
                            className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-xs font-semibold text-[#102B4E] flex items-center gap-2 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                        >
                            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                            <span>Export Inquiries to CSV</span>
                        </button>
                    )}
                </div>

                {/* TAB 1: INQUIRIES MANAGEMENT */}
                {activeTab === 'inquiries' && (
                    <div>
                        {/* Filters & Search Toolbar */}
                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
                            {/* Search Input */}
                            <div className="relative w-full md:w-96">
                                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    placeholder="Search by client, email, phone, location, ref..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-[#102B4E] bg-slate-50 focus:bg-white transition-colors"
                                />
                            </div>

                            {/* Status Filter Buttons */}
                            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1 hidden lg:inline">
                                    Status:
                                </span>
                                {['All', 'received', 'under_review', 'contacted', 'completed'].map((st) => (
                                    <button
                                        key={st}
                                        onClick={() => setStatusFilter(st)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                                            statusFilter === st
                                                ? 'bg-[#102B4E] text-white shadow-2xs'
                                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                        }`}
                                    >
                                        {st === 'All' ? 'All Status' : st.replace('_', ' ')}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Inquiries List Cards */}
                        <div className="space-y-4">
                            {filteredInquiries.map((inq) => {
                                const badge = getStatusBadge(inq.status);
                                const isExpanded = expandedInquiryId === inq.id;

                                return (
                                    <div
                                        key={inq.id}
                                        className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all"
                                    >
                                        {/* Main Row */}
                                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                                            {/* Client Identity & Service */}
                                            <div className="space-y-1 flex-1">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-slate-100 text-[#102B4E] border border-slate-200">
                                                        {inq.reference_id}
                                                    </span>
                                                    <h3 className="font-heading font-black text-lg text-[#102B4E]">
                                                        {inq.name}
                                                    </h3>
                                                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${badge.bg}`}>
                                                        {badge.label}
                                                    </span>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600">
                                                    <span className="font-semibold text-[#102B4E]">
                                                        {inq.service_type || 'General Consultation'}
                                                    </span>
                                                    {inq.project_location && (
                                                        <span className="flex items-center gap-1">
                                                            <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" />
                                                            {inq.project_location}
                                                        </span>
                                                    )}
                                                    <span className="text-slate-400">
                                                        Received: {new Date(inq.created_at).toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Contact Details & Quick Links */}
                                            <div className="flex flex-wrap items-center gap-2">
                                                {inq.email && (
                                                    <a
                                                        href={`mailto:${inq.email}?subject=Ethio-German%20Consulting%20-%20Ref:%20${inq.reference_id}`}
                                                        className="p-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-900 transition-colors flex items-center gap-1.5 text-xs"
                                                        title="Send Email"
                                                    >
                                                        <Mail className="w-3.5 h-3.5 text-blue-700" />
                                                        <span className="font-mono">{inq.email}</span>
                                                    </a>
                                                )}

                                                {inq.phone && (
                                                    <a
                                                        href={`tel:${inq.phone.replace(/\s+/g, '')}`}
                                                        className="p-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-900 transition-colors flex items-center gap-1.5 text-xs font-mono font-bold"
                                                        title="Call Client"
                                                    >
                                                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                                                        <span>{inq.phone}</span>
                                                    </a>
                                                )}

                                                {inq.phone && (
                                                    <a
                                                        href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(inq.name)}%2C%20following%20up%20on%20your%20inquiry%20${inq.reference_id}%20with%20Ethio-German%20Consulting.`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-800 transition-colors flex items-center gap-1 text-xs font-semibold"
                                                        title="Chat on WhatsApp"
                                                    >
                                                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                                                        <span>WhatsApp</span>
                                                    </a>
                                                )}

                                                {/* Status Selector Dropdown */}
                                                <select
                                                    value={inq.status}
                                                    onChange={(e) => handleUpdateInquiryStatus(inq.id, e.target.value)}
                                                    className="px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 bg-white text-[#102B4E] focus:outline-none focus:border-[#102B4E]"
                                                >
                                                    <option value="received">New / Received</option>
                                                    <option value="under_review">Under Review</option>
                                                    <option value="contacted">Contacted / In Discussion</option>
                                                    <option value="proposal_sent">Proposal Sent</option>
                                                    <option value="completed">Completed / Retained</option>
                                                    <option value="archived">Archived</option>
                                                </select>

                                                {/* Expand Detail Accordion */}
                                                <button
                                                    onClick={() => setExpandedInquiryId(isExpanded ? null : inq.id)}
                                                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                                                    aria-label="Toggle details"
                                                >
                                                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                                </button>

                                                {/* Delete Button */}
                                                <button
                                                    onClick={() => handleDeleteInquiry(inq.id, inq.reference_id)}
                                                    className="p-2 rounded-xl hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors"
                                                    title="Delete inquiry"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Expanded Details: Message & Internal Engineer Notes */}
                                        {isExpanded && (
                                            <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-50/50 p-4 rounded-2xl">
                                                {/* Client Scope Message */}
                                                <div>
                                                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B4E] mb-2 flex items-center gap-1.5">
                                                        <MessageSquare className="w-3.5 h-3.5 text-[#C5A46D]" />
                                                        Client Project Scope & Description
                                                    </h4>
                                                    <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-[#202A35] leading-relaxed whitespace-pre-wrap">
                                                        {inq.message}
                                                    </div>
                                                </div>

                                                {/* Engineering Team Internal Remarks & Follow-up Notes */}
                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B4E] flex items-center gap-1.5">
                                                            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A46D]" />
                                                            Internal Engineer Remarks / Meeting Notes
                                                        </h4>
                                                        <button
                                                            onClick={() => handleSaveAdminNotes(inq.id)}
                                                            disabled={savingNoteId === inq.id}
                                                            className="px-3 py-1 rounded-lg bg-[#102B4E] hover:bg-[#0A1C33] text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors"
                                                        >
                                                            <Save className="w-3 h-3 text-[#C5A46D]" />
                                                            <span>{savingNoteId === inq.id ? 'Saving...' : 'Save Notes'}</span>
                                                        </button>
                                                    </div>
                                                    <textarea
                                                        rows="4"
                                                        placeholder="Record project assessment notes, meeting minutes, fee proposals discussed, follow-up deadlines..."
                                                        value={adminNotesDraft[inq.id] || ''}
                                                        onChange={(e) =>
                                                            setAdminNotesDraft({ ...adminNotesDraft, [inq.id]: e.target.value })
                                                        }
                                                        className="w-full p-3 rounded-xl bg-white border border-slate-200 text-xs text-[#202A35] focus:outline-none focus:border-[#102B4E] leading-relaxed"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            {filteredInquiries.length === 0 && (
                                <div className="text-center py-16 p-8 rounded-3xl bg-white border border-slate-200">
                                    <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                                    <h3 className="text-base font-bold text-[#102B4E]">No consultation inquiries found</h3>
                                    <p className="text-xs text-slate-500 mt-1">Try clearing your search query or status filter.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* TAB 2: CLIENT FEEDBACK & REVIEWS */}
                {activeTab === 'feedbacks' && (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="font-heading font-black text-xl text-[#102B4E]">
                                Client Testimonials & Feedback Submissions
                            </h2>
                            <span className="text-xs text-slate-500">
                                Approved testimonials are published on public portal.
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {feedbacks.map((fb) => (
                                <div
                                    key={fb.id}
                                    className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-all"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            {/* Star Rating */}
                                            <div className="flex items-center gap-1 text-[#C5A46D]">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${
                                                            i < fb.rating ? 'fill-[#C5A46D]' : 'text-slate-200'
                                                        }`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Status Badge */}
                                            <span
                                                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                                    fb.status === 'approved'
                                                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                                                        : fb.status === 'pending'
                                                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                                        : 'bg-slate-100 text-slate-700'
                                                }`}
                                            >
                                                {fb.status}
                                            </span>
                                        </div>

                                        <h3 className="font-heading font-bold text-base text-[#102B4E]">
                                            {fb.client_name}
                                        </h3>
                                        <p className="text-xs text-[#C5A46D] font-semibold mb-3">
                                            {fb.company_or_project || 'Project Partner'} • {fb.feedback_type}
                                        </p>

                                        <blockquote className="text-xs text-slate-700 leading-relaxed italic bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
                                            "{fb.message}"
                                        </blockquote>
                                    </div>

                                    {/* Action Bar */}
                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-2">
                                            {fb.status !== 'approved' && (
                                                <button
                                                    onClick={() => handleUpdateFeedbackStatus(fb.id, 'approved')}
                                                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-wider cursor-pointer"
                                                >
                                                    Approve & Feature
                                                </button>
                                            )}
                                            {fb.status === 'approved' && (
                                                <button
                                                    onClick={() => handleUpdateFeedbackStatus(fb.id, 'archived')}
                                                    className="px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-[10px] uppercase tracking-wider cursor-pointer"
                                                >
                                                    Archive
                                                </button>
                                            )}
                                        </div>

                                        <button
                                            onClick={() => handleDeleteFeedback(fb.id)}
                                            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 transition-colors"
                                            title="Delete review"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {feedbacks.length === 0 && (
                                <div className="col-span-full text-center py-12 p-6 rounded-3xl bg-white border border-slate-200">
                                    <Star className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                                    <p className="text-xs text-slate-500">No feedback submissions recorded yet.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
