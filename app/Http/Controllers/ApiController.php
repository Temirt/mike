<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Inquiry;
use App\Models\Feedback;

class ApiController extends Controller
{
    public function getProjects(Request $request)
    {
        $query = Project::query();

        if ($request->has('category') && $request->category !== 'All') {
            $query->where('category', $request->category);
        }

        if ($request->has('status') && $request->status !== 'All') {
            $query->where('status', $request->status);
        }

        $projects = $query->orderBy('sort_order', 'asc')->get();

        return response()->json([
            'status' => 'success',
            'count' => $projects->count(),
            'data' => $projects,
        ]);
    }

    public function getProjectBySlug($slug)
    {
        $project = Project::where('slug', $slug)->firstOrFail();

        return response()->json([
            'status' => 'success',
            'data' => $project,
        ]);
    }

    public function getCompanyInfo()
    {
        return response()->json([
            'firm_name' => 'Ethio-German Consulting Architects and Engineers PLC',
            'short_name' => 'Ethio-German Consult',
            'category' => 'Category One Professional Consultancy Firm',
            'tagline' => 'Engineering Excellence & German-Trained Structural Precision in Ethiopia',
            'manager' => [
                'name' => 'Mikiyas Belayneh (MSc.)',
                'title' => 'General Manager & Practicing Professional Structural Engineer',
                'education' => [
                    'MSc. in Structural Design — Bauhaus University, Germany',
                    'BSc. in Civil Engineering — Haramaya University, Ethiopia',
                ],
                'experience' => '12+ Years',
                'phone' => '+251 911 194 278 / +491 724951267',
                'email' => 'Ethio-German@outlook.com',
            ],
            'contact' => [
                'office_address' => 'Aware Metro Homes Building, 3rd Floor, Room No. 642, Woreda 08, Yeka Sub-City, Addis Ababa, Ethiopia',
                'phones' => ['(+251) 911 194 278', '(+491) 724951267'],
                'email' => 'Ethio-German@outlook.com',
                'pobox' => 'Addis Ababa, Ethiopia',
            ],
            'vision' => 'Aspire to be a role model in contributing our professional share in the making of well-planned, designed, and sustainable built environments which are SCCEPP to end-users.',
            'mission' => 'To provide a comprehensive design and project management service of excellence through a single point of contact, utilizing indigenous knowledge and materials in synergy with cutting-edge global technology.',
            'philosophy' => 'Simple, cost-effective, contextual, and environmentally friendly architecture. Collaborative coordination meetings among multidisciplinary professionals and clients ensure unwavering consistency and supreme quality.',
            'principles_sccepp' => [
                ['letter' => 'S', 'word' => 'Safe', 'desc' => 'High-factor structural safety conforming to Eurocodes and Ethiopian Building Codes.'],
                ['letter' => 'C', 'word' => 'Comfortable', 'desc' => 'Thermal, acoustic, and visual comfort optimized for human wellbeing.'],
                ['letter' => 'C', 'word' => 'Convenient', 'desc' => 'Ergonomic circulation, functional space planning, and barrier-free access.'],
                ['letter' => 'E', 'word' => 'Efficient', 'desc' => 'Resource-conscious, energy-efficient, and optimized material usage.'],
                ['letter' => 'P', 'word' => 'Play & Pleasure', 'desc' => 'Aesthetic grandeur, inviting atriums, and delightful living spaces.'],
            ],
            'team' => [
                [
                    'name' => 'Eng. Mikiyas Belayneh',
                    'role' => 'General Manager / Lead Structural Engineer',
                    'qualification' => 'MSc. Structural Design (Bauhaus Univ., Germany) & BSc. Civil Eng.',
                    'status' => 'Practicing Professional Structural Engineer',
                    'experience' => '12+ Years',
                    'phone' => '+251 911 194 278',
                ],
                [
                    'name' => 'Tigistu Senbu',
                    'role' => 'Senior Architect',
                    'qualification' => 'B.Arch in Architectural Design',
                    'status' => 'Senior Architect',
                    'experience' => '10+ Years',
                    'phone' => '+251 923 026 840',
                ],
                [
                    'name' => 'Michael Wandwessen',
                    'role' => 'Contract Manager & Senior Civil Engineer',
                    'qualification' => 'BSc. in Civil Engineering',
                    'status' => 'Contract Manager',
                    'experience' => '12+ Years',
                    'phone' => '+251 911 371 184',
                ],
                [
                    'name' => 'Million Demise',
                    'role' => 'Principal Electrical Engineer',
                    'qualification' => 'BSc. in Electrical Engineering',
                    'status' => 'Practicing Professional Electrical Engineer',
                    'experience' => '15+ Years',
                    'phone' => 'In-House Professional',
                ],
                [
                    'name' => 'Samrawit Yeshaw',
                    'role' => 'Sanitary & Environmental Engineer',
                    'qualification' => 'MSc. in Civil Engineering / Water & Sanitary',
                    'status' => 'Sanitary Engineer',
                    'experience' => '8+ Years',
                    'phone' => '+251 921 530 442',
                ],
                [
                    'name' => 'Hana Debebe',
                    'role' => 'Chief CAD & BIM Specialist',
                    'qualification' => 'Diploma & Advanced CAD/BIM Certifications',
                    'status' => 'Lead CAD Operator',
                    'experience' => '20+ Years',
                    'phone' => '+251 911 317 054',
                ],
            ],
            'services' => [
                [
                    'title' => 'Architectural Design',
                    'icon' => 'Compass',
                    'desc' => 'Contemporary, context-sensitive architectural concepts, 3D photorealistic renderings, spatial planning, and sustainable building envelopes.',
                ],
                [
                    'title' => 'Structural Engineering',
                    'icon' => 'Layers',
                    'desc' => 'Advanced structural analysis using ETABS and Safe, earthquake-resistant design, post-tensioned slabs, and foundation optimization.',
                ],
                [
                    'title' => 'Electromechanical & Sanitary',
                    'icon' => 'Zap',
                    'desc' => 'High-voltage and low-current electrical schematics, intelligent building automation, water supply networks, and drainage systems.',
                ],
                [
                    'title' => 'Construction Supervision & QC',
                    'icon' => 'CheckCircle2',
                    'desc' => 'Rigorous on-site quality assurance, material compliance testing, contractor oversight, and milestone progress reporting.',
                ],
                [
                    'title' => 'BOQ & Cost Engineering',
                    'icon' => 'Calculator',
                    'desc' => 'Detailed bill of quantities, precision market rate estimation, value engineering, and life-cycle cost budgeting.',
                ],
                [
                    'title' => 'Topographic & Geotechnical Surveys',
                    'icon' => 'MapPin',
                    'desc' => 'Total Station & GPS terrain mapping, soil stratum investigation, and foundation bearing capacity recommendations.',
                ],
                [
                    'title' => 'Contract Administration & Legal',
                    'icon' => 'FileText',
                    'desc' => 'Standard bidding documents, FIDIC & Ethiopian standard conditions of contract, dispute advisory, and claims evaluation.',
                ],
                [
                    'title' => 'Interior Design & Spatial Modeling',
                    'icon' => 'Home',
                    'desc' => 'Custom interior layouts, lighting design, material palettes, acoustic optimization, and bespoke finishes.',
                ],
            ],
            'software' => ['ETABS', 'Safe', 'Revit BIM', 'ArchiCAD', 'AutoCAD 2D/3D', 'ArcGIS', 'MS Project'],
            'equipment' => [
                'Workstations: 3 Quad-core Intel CAD Stations + 3 12th-Gen Core i5 (16GB RAM, 512GB SSD) Laptops',
                'Plotters & Reproduction: HP DesignJet 500, Blue-Print machine, Canon iR2002/2202 [A4/A3], HP LaserJet P1102',
                'Fleet: Toyota Hilux Revo 2.8L Diesel 4WD + Toyota Corolla XL Sedan',
                'Engineering Gear: Digital Total Station & Handheld Precision GPS Systems',
            ],
            'stats' => [
                ['label' => 'Major Landmark Projects', 'value' => 11, 'suffix' => '+'],
                ['label' => 'Total Project Value', 'value' => 900, 'suffix' => 'M+ ETB'],
                ['label' => 'Cumulative Built Area', 'value' => 40, 'suffix' => 'k+ m²'],
                ['label' => 'Years of Team Excellence', 'value' => 12, 'suffix' => '+ Yrs'],
            ],
        ]);
    }

    public function storeInquiry(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'service_type' => 'nullable|string|max:100',
            'project_scale' => 'nullable|string|max:100',
            'project_location' => 'nullable|string|max:255',
            'message' => 'required|string|min:10|max:3000',
        ]);

        $inquiry = Inquiry::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Thank you for reaching out to Ethio-German Consulting Architects and Engineers. Our engineering team has received your message and Eng. Mikiyas Belayneh or our senior staff will contact you shortly.',
            'data' => [
                'reference_id' => 'EGC-' . str_pad($inquiry->id, 5, '0', STR_PAD_LEFT),
                'name' => $inquiry->name,
                'email' => $inquiry->email,
            ],
        ], 201);
    }

    /* ===================================================
       ADMIN INQUIRY & CONSULTATION MANAGEMENT
       =================================================== */

    public function getAdminInquiries(Request $request)
    {
        $query = Inquiry::query()->orderBy('created_at', 'desc');

        if ($request->filled('status') && $request->status !== 'All') {
            $query->where('status', $request->status);
        }

        if ($request->filled('q')) {
            $search = '%' . $request->q . '%';
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', $search)
                  ->orWhere('email', 'like', $search)
                  ->orWhere('phone', 'like', $search)
                  ->orWhere('project_location', 'like', $search)
                  ->orWhere('service_type', 'like', $search)
                  ->orWhere('message', 'like', $search);
            });
        }

        $inquiries = $query->get()->map(function ($item) {
            $item->reference_id = 'EGC-' . str_pad($item->id, 5, '0', STR_PAD_LEFT);
            return $item;
        });

        return response()->json([
            'status' => 'success',
            'count' => $inquiries->count(),
            'data' => $inquiries,
        ]);
    }

    public function updateInquiry(Request $request, $id)
    {
        $inquiry = Inquiry::findOrFail($id);

        $validated = $request->validate([
            'status' => 'nullable|string|in:received,under_review,contacted,proposal_sent,completed,archived',
            'admin_notes' => 'nullable|string',
        ]);

        $inquiry->update($validated);
        $inquiry->reference_id = 'EGC-' . str_pad($inquiry->id, 5, '0', STR_PAD_LEFT);

        return response()->json([
            'status' => 'success',
            'message' => 'Inquiry updated successfully.',
            'data' => $inquiry,
        ]);
    }

    public function deleteInquiry($id)
    {
        $inquiry = Inquiry::findOrFail($id);
        $inquiry->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Inquiry record removed successfully.',
        ]);
    }

    /* ===================================================
       CLIENT FEEDBACK & REVIEWS MANAGEMENT
       =================================================== */

    public function getFeedbacks()
    {
        $feedbacks = Feedback::where('status', 'approved')
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json([
            'status' => 'success',
            'count' => $feedbacks->count(),
            'data' => $feedbacks,
        ]);
    }

    public function storeFeedback(Request $request)
    {
        $validated = $request->validate([
            'client_name' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:50',
            'company_or_project' => 'nullable|string|max:255',
            'rating' => 'required|integer|min:1|max:5',
            'feedback_type' => 'nullable|string|max:100',
            'message' => 'required|string|min:10|max:2000',
        ]);

        $validated['status'] = 'pending'; // Requires admin approval to be featured

        $feedback = Feedback::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Thank you for your valuable feedback! It has been submitted to Ethio-German Consulting management.',
            'data' => $feedback,
        ], 201);
    }

    public function getAdminFeedbacks(Request $request)
    {
        $query = Feedback::query()->orderBy('created_at', 'desc');

        if ($request->filled('status') && $request->status !== 'All') {
            $query->where('status', $request->status);
        }

        $feedbacks = $query->get();

        return response()->json([
            'status' => 'success',
            'count' => $feedbacks->count(),
            'data' => $feedbacks,
        ]);
    }

    public function updateFeedback(Request $request, $id)
    {
        $feedback = Feedback::findOrFail($id);

        $validated = $request->validate([
            'status' => 'nullable|string|in:pending,approved,archived',
            'message' => 'nullable|string',
        ]);

        $feedback->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Feedback status updated.',
            'data' => $feedback,
        ]);
    }

    public function deleteFeedback($id)
    {
        $feedback = Feedback::findOrFail($id);
        $feedback->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Feedback entry removed.',
        ]);
    }

    /* ===================================================
       ADMIN DASHBOARD STATS & METRICS
       =================================================== */

    public function getAdminStats()
    {
        $totalInquiries = Inquiry::count();
        $pendingInquiries = Inquiry::whereIn('status', ['received', 'under_review'])->count();
        $contactedInquiries = Inquiry::where('status', 'contacted')->count();
        $completedInquiries = Inquiry::where('status', 'completed')->count();

        $totalFeedbacks = Feedback::count();
        $approvedFeedbacks = Feedback::where('status', 'approved')->count();
        $avgRating = round((float) (Feedback::avg('rating') ?: 5.0), 1);

        return response()->json([
            'status' => 'success',
            'data' => [
                'total_inquiries' => $totalInquiries,
                'pending_inquiries' => $pendingInquiries,
                'contacted_inquiries' => $contactedInquiries,
                'completed_inquiries' => $completedInquiries,
                'total_feedbacks' => $totalFeedbacks,
                'approved_feedbacks' => $approvedFeedbacks,
                'average_rating' => $avgRating,
            ],
        ]);
    }
}
