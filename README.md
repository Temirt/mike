# Ethio-German Consulting Architects & Engineers PLC

Official corporate web portal and executive management dashboard for **Ethio-German Consulting Architects & Engineers PLC** — a premier Category One Architectural & Engineering Consultancy firm established in Addis Ababa, Ethiopia, led by Practicing Professional Structural Engineer Eng. Mikiyas Belayneh (MSc. Structural Design, Bauhaus University Weimar, Germany).

---

## 🏛️ Project Overview

A modern, responsive, high-performance web platform built with **Laravel 12**, **React**, and **Tailwind CSS**, designed with an international architectural consultancy brand identity:
- **Brand Palette**: Deep Navy (`#102B4E`), Warm Gold (`#C5A46D`), Crisp White (`#FFFFFF`), Light Slate Blue (`#EAF1F8`), and Dark Charcoal (`#202A35`).
- **Typography**: Architectural Headings in **Manrope**, body copy in **Inter**.
- **Authentic Assets**: Renderings and company credentials extracted directly from the official corporate profile.

---

## ✨ Features

### Public Corporate Website
- **Full-Screen Hero**: Landmark architectural visual with dynamic statistics (12+ Years, 45+ Landmark Projects, 16 Engineering Disciplines, ETB 800M+ Portfolio Valuation) and quick consultation triggers.
- **Multidisciplinary Disciplines (All 16 Services)**: Architectural Design, Structural Engineering, Sanitary & MEP, Soil Investigation, BOQ & Cost Estimation, Topographic Surveying, Construction Supervision, Quality Control, and Contract Administration.
- **Landmark Projects Portfolio**: All 11 authentic high-rise and mixed-use projects from the official company profile (FDRE Attorney General, Metro Homes Aware, Dembel Heights, Kara Ayertena Mixed-Use, etc.) with specs (Plot Area, Built-up Area, Project Cost, Status) and an interactive lightbox modal.
- **Leadership & Engineering Team**: Monogram badges and verified professional qualifications of lead engineers and architects.
- **Strategic Pillars & Engineering Suite**: Showcase of core philosophies (SCCEPP framework: Safe, Comfortable, Convenient, Efficient, Play & Pleasure) and software proficiency (AutoCAD, ArchiCAD, Revit, ETABS, SAFE, GIS).
- **Interactive Contact & Consultation Form**: Validated consultation requests submitting directly to the engineering team with Google Maps embed and direct WhatsApp, phone, and email links.
- **Client Feedback System**: Public review submission modal with star ratings and client testimonials.

### Executive Administration Portal (`/admin`)
- **Secure Authentication (`/login`)**: Clean, un-prefilled credentials form with protection against unauthorized access.
- **Real-Time KPIs**: Live counters for total consultation requests, pending reviews, active projects, and client ratings.
- **Inquiry Management Workflow**: Live search, filtering by status (`received`, `under_review`, `contacted`, `proposal_sent`, `completed`), status progression dropdowns, and interactive internal engineering notes.
- **CSV Data Export**: One-click download of all consultation inquiries for reporting and executive review.
- **Feedback Moderation**: Review moderation tools with approval and rejection controls.

---

## 🛠️ Tech Stack

- **Backend**: Laravel 12.x on PHP 8.2+
- **Frontend**: React 19, Tailwind CSS v4, Lucide Icons
- **Database**: SQLite (Zero-config, fast local persistence)
- **Asset Bundler**: Vite 7
- **Authentication**: Laravel Session & Guard Authentication with CSRF API protection

---

## 🚀 Getting Started

### Prerequisites
- PHP 8.2 or higher (with `pdo_sqlite`, `mbstring`, `fileinfo` extensions enabled)
- Composer 2.x
- Node.js 18+ and npm

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Temirt/mike.git
   cd mike
   ```

2. **Install PHP dependencies**:
   ```bash
   composer install
   ```

3. **Install JavaScript dependencies & build assets**:
   ```bash
   npm install
   npm run build
   ```

4. **Environment Setup**:
   ```bash
   copy .env.example .env
   php artisan key:generate
   ```

5. **Database Migration & Seeding**:
   ```bash
   touch database/database.sqlite
   php artisan migrate --seed
   ```
   *Seeds all 11 landmark high-rise projects, the administrator account, and sample client reviews.*

6. **Start the local server**:
   ```bash
   php artisan serve
   ```
   The application is now accessible at `http://127.0.0.1:8000`.

---

## 🔐 Administrative Access

- **Login URL**: `http://127.0.0.1:8000/login`
- **Admin Portal**: `http://127.0.0.1:8000/admin`
- **Default Administrator**:
  - Email: `admin@ethio-german.com`
  - Password: `EthioGerman@2026`

---

## 📍 Company Contact Information

- **Company**: Ethio-German Consulting Architects & Engineers PLC
- **General Manager**: Eng. Mikiyas Belayneh (MSc.)
- **Address**: Aware Metro Homes Building, 3rd Floor, Room No. 642, Addis Ababa, Ethiopia
- **Phone**: (+251) 911 194 278 / (+491) 724 951 267
- **Email**: Ethio-German@outlook.com

---

© 2026 Ethio-German Consulting Architects & Engineers PLC. All Rights Reserved.
