import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import TeamSection from './components/TeamSection';
import WhyChooseUs from './components/WhyChooseUs';
import TechnologySection from './components/TechnologySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdminPortal from './components/AdminPortal';
import FeedbackModal from './components/FeedbackModal';
import LoginPage from './components/LoginPage';

function App() {
    // Current authenticated user session (null when unauthenticated)
    const [currentUser, setCurrentUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);

    // Current active view: 'website' | 'login' | 'admin'
    const [currentView, setCurrentView] = useState(() => {
        const path = window.location.pathname;
        if (path.startsWith('/login')) return 'login';
        if (path.startsWith('/admin') || window.location.search.includes('admin=true')) return 'admin';
        return 'website';
    });

    const [inquiryPrefill, setInquiryPrefill] = useState(null);
    const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);

    // Check optional backend session
    useEffect(() => {
        fetch('/api/auth/me')
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 'success' && data.authenticated && data.data) {
                    setCurrentUser(data.data);
                } else {
                    setCurrentUser(null);
                }
            })
            .catch(() => {
                setCurrentUser(null);
            })
            .finally(() => {
                setAuthChecked(true);
            });
    }, []);

    // Listen for browser popstate (back/forward navigation)
    useEffect(() => {
        const handlePopState = () => {
            const path = window.location.pathname;
            if (path.startsWith('/login')) {
                setCurrentView('login');
            } else if (path.startsWith('/admin')) {
                setCurrentView('admin');
            } else {
                setCurrentView('website');
            }
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Navigation triggers
    const handleOpenLogin = () => {
        setCurrentView('login');
        window.history.pushState({}, '', '/login');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleOpenAdmin = () => {
        if (!currentUser) {
            handleOpenLogin();
        } else {
            setCurrentView('admin');
            window.history.pushState({}, '', '/admin');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBackToWebsite = () => {
        setCurrentView('website');
        window.history.pushState({}, '', '/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLoginSuccess = (userData) => {
        if (userData) setCurrentUser(userData);
        setCurrentView('admin');
        window.history.pushState({}, '', '/admin');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLogout = async () => {
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
        try {
            await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken || '',
                },
            });
        } catch (err) {}
        setCurrentUser(null);
        setCurrentView('login');
        window.history.pushState({}, '', '/login');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleOpenConsultation = (data = null) => {
        if (currentView !== 'website') {
            handleBackToWebsite();
        }
        if (data) {
            setInquiryPrefill(data);
        }
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    // Render 1: Dedicated Login Page
    if (currentView === 'login') {
        return (
            <LoginPage
                onLoginSuccess={handleLoginSuccess}
                onBackToWebsite={handleBackToWebsite}
            />
        );
    }

    // Render 2: Executive Admin Portal (Requires authentication, otherwise presents Login)
    if (currentView === 'admin') {
        if (!currentUser) {
            return (
                <LoginPage
                    onLoginSuccess={handleLoginSuccess}
                    onBackToWebsite={handleBackToWebsite}
                />
            );
        }

        return (
            <AdminPortal
                onBackToWebsite={handleBackToWebsite}
                currentUser={currentUser}
                onLogout={handleLogout}
            />
        );
    }

    // Render 3: Public Website
    return (
        <div className="min-h-screen bg-white text-[#202A35] flex flex-col selection:bg-[#102B4E] selection:text-white">
            {/* 1. Sticky Navigation Bar */}
            <Navbar
                onOpenConsultation={() => handleOpenConsultation()}
                onOpenAdmin={handleOpenAdmin}
                onOpenLogin={handleOpenLogin}
                currentUser={currentUser}
            />

            {/* Main Corporate Sections */}
            <main className="flex-1">
                {/* 2. Hero Section */}
                <Hero onOpenConsultation={() => handleOpenConsultation()} />

                {/* 3. About the Company & Vision / Mission */}
                <AboutSection />

                {/* 4. Our Services (All 16 Disciplines with Icons & Hover Animations) */}
                <ServicesSection onOpenConsultation={() => handleOpenConsultation()} />

                {/* 5. Featured Projects (Visual Centerpiece: All 11 Projects with Filter Tabs & Lightbox Modal) */}
                <ProjectsSection onOpenConsultation={handleOpenConsultation} />

                {/* 6. Our Professional Team */}
                <TeamSection />

                {/* 7. Why Choose Us (8 Pillars in Elegant Grid) */}
                <WhyChooseUs />

                {/* 8. Technology and Software */}
                <TechnologySection />

                {/* 9. Contact Section (Form, Call, Email, WhatsApp, Google Maps) */}
                <ContactSection prefillData={inquiryPrefill} />
            </main>

            {/* 10. Corporate Footer */}
            <Footer
                onOpenAdmin={handleOpenAdmin}
                onOpenLogin={handleOpenLogin}
                onOpenFeedback={() => setFeedbackModalOpen(true)}
                currentUser={currentUser}
            />

            {/* Client Feedback Submission Modal */}
            <FeedbackModal
                isOpen={feedbackModalOpen}
                onClose={() => setFeedbackModalOpen(false)}
            />
        </div>
    );
}

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

export default App;
