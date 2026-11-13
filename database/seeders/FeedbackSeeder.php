<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Feedback;

class FeedbackSeeder extends Seeder
{
    public function run(): void
    {
        if (Feedback::count() === 0) {
            Feedback::create([
                'client_name' => 'Metro Homes Real Estate Management',
                'email' => 'development@metrohomes.et',
                'phone' => '+251 911 200 100',
                'company_or_project' => 'Metro Homes Tower (B+G+12, Aware Square)',
                'rating' => 5,
                'feedback_type' => 'Project Review',
                'message' => 'Ethio-German Consulting Architects provided outstanding structural engineering and architectural coordination for our Aware Square B+G+12 tower. Eng. Mikiyas Belayneh’s German structural precision and adherence to Ethiopian building standards ensured maximum safety, smooth municipal approval, and efficient cost engineering.',
                'status' => 'approved',
            ]);

            Feedback::create([
                'client_name' => 'Elias Assefa',
                'email' => 'elias.assefa@gmail.com',
                'phone' => '+251 911 345 678',
                'company_or_project' => 'Mixed Use Complex (B+G+6, Kara Ayertena)',
                'rating' => 5,
                'feedback_type' => 'Service Quality',
                'message' => 'The architectural space planning and basement parking integration designed by Tigistu Senbu and the Ethio-German team exceeded our commercial expectations. The team was punctual, thorough, and highly responsive throughout all design stages.',
                'status' => 'approved',
            ]);

            Feedback::create([
                'client_name' => 'Metropolitan Real Estate',
                'email' => 'projects@metropolitan.et',
                'phone' => '+251 911 400 500',
                'company_or_project' => 'Sar Bet Luxury Residences (B+G+5)',
                'rating' => 5,
                'feedback_type' => 'Design Quality',
                'message' => 'From preliminary soil study interpretation to detailed 3D walkthroughs and full structural ETABS calculations, Ethio-German Consulting proved to be a reliable, world-class Category 1 partner.',
                'status' => 'approved',
            ]);
        }
    }
}
