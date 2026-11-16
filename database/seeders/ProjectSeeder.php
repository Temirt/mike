<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::truncate();

        $projects = [
            [
                'title' => 'Metro Homes Luxury Tower',
                'slug' => 'metro-homes-aware-square',
                'category' => 'Mixed Use',
                'location' => 'Aware Square, Addis Ababa',
                'plot_area' => '270 m²',
                'footprint' => '235 m²',
                'built_up_area' => '2,990 m²',
                'project_cost' => 'ETB 179,000,000',
                'status' => 'Under Construction',
                'client' => 'Metro Homes',
                'description' => 'Sophisticated B+G+12 mixed-use landmark providing 20 car parking bays across basement and ground floor, alongside 660 m² of premium retail shopping area spanning ground through third floor. Upper floors house contemporary two-bedroom residences with private balconies and scenic city vistas.',
                'image' => '/images/projects/metro-homes-aware-square.jpg',
                'is_featured' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Almaz Apartments & Commercial Center',
                'slug' => 'almaz-apartments-aware-square',
                'category' => 'Mixed Use',
                'location' => 'Aware Square, Lideta, Addis Ababa',
                'plot_area' => '293 m²',
                'footprint' => '220 m²',
                'built_up_area' => '2,990 m²',
                'project_cost' => 'ETB 130,600,000',
                'status' => 'Design Completed',
                'client' => 'Almaz Tadesse',
                'description' => 'Dynamic G+10 mixed-use development comprising dedicated ground parking, generator station, and waste management. The 1st floor houses 184 m² of prime corporate office suites, followed by expansive 230 m² 3-bedroom master apartments on floors 2-3, and dual-unit 1BR/2BR layouts across floors 4-10.',
                'image' => '/images/projects/mixed-use-aware-square.jpg',
                'is_featured' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'Metro Homes Tower II',
                'slug' => 'metro-homes-new-stadium',
                'category' => 'Mixed Use',
                'location' => 'New Stadium Corridor, Addis Ababa',
                'plot_area' => '270 m²',
                'footprint' => '235 m²',
                'built_up_area' => '2,990 m²',
                'project_cost' => 'ETB 179,000,000',
                'status' => 'Under Construction',
                'client' => 'Metro Homes',
                'description' => 'Premier B+G+12 high-rise development featuring 15 basement parking bays and 750 m² of vibrant commercial spaces from ground to 3rd floor. Upper floors feature three spacious 2-bedroom apartment units per level, engineered with energy-efficient ventilation and structural resilience.',
                'image' => '/images/projects/metro-homes-new-stadium.jpg',
                'is_featured' => true,
                'sort_order' => 3,
            ],
            [
                'title' => 'Kara Ayertena Mixed-Use Complex',
                'slug' => 'mixed-use-kara-ayertena',
                'category' => 'Mixed Use',
                'location' => 'Kara Ayertena, Addis Ababa',
                'plot_area' => '248 m²',
                'footprint' => '118 m²',
                'built_up_area' => '2,006 m²',
                'project_cost' => 'ETB 110,330,000',
                'status' => 'Design Completed',
                'client' => 'Elias Assefa',
                'description' => 'Modern B+G+6 development incorporating a 118 m² basement parking & storage facility, two full floors of vibrant retail shops and lobby, and upper residential floors configured with two generous apartment units per level (92 m² 3BR suite and 95 m² 2BR suite).',
                'image' => '/images/projects/mixed-use-kara-ayertena.jpg',
                'is_featured' => false,
                'sort_order' => 4,
            ],
            [
                'title' => 'Yohannes Legesse Contemporary Villa',
                'slug' => 'yohannes-legesse-residence',
                'category' => 'Residential',
                'location' => 'Lemi Kura Subcity, Addis Ababa',
                'plot_area' => '150 m²',
                'footprint' => '120 m²',
                'built_up_area' => '360 m²',
                'project_cost' => 'ETB 12,565,000',
                'status' => 'Design Completed',
                'client' => 'Yohannes Legesse',
                'description' => 'Bespoke G+2 luxury modern villa featuring a 111 m² ground floor with covered parking, seamless living/dining hall, dual modern & traditional kitchens, and guest amenities. The 121 m² upper level features a private family room, master suite, and two junior suites.',
                'image' => '/images/projects/residence-lemi-kura.jpg',
                'is_featured' => false,
                'sort_order' => 5,
            ],
            [
                'title' => 'Dembel Heights Apartment Tower',
                'slug' => 'dembel-heights-apartment',
                'category' => 'Residential',
                'location' => 'Dembel, Addis Ababa',
                'plot_area' => '470 m²',
                'footprint' => '420 m²',
                'built_up_area' => '2,990 m²',
                'project_cost' => 'ETB 179,000,000',
                'status' => 'Under Construction',
                'client' => 'Weyzero Hablewerk',
                'description' => 'Commanding B+G+11 high-rise featuring 15 basement parking stalls, 420 m² ground floor commercial space, and four modern two-bedroom, two-bathroom apartment homes per floor from the first floor through the 11th floor.',
                'image' => '/images/projects/apartment-dembel.jpg',
                'is_featured' => false,
                'sort_order' => 6,
            ],
            [
                'title' => 'Aware Square Completed Residence',
                'slug' => 'aware-square-completed-apartment',
                'category' => 'Residential',
                'location' => 'Aware Square, Addis Ababa',
                'plot_area' => '120 m²',
                'footprint' => '105 m²',
                'built_up_area' => '735 m²',
                'project_cost' => 'ETB 40,425,000',
                'status' => 'Completed',
                'client' => 'Ato Wandwesen',
                'description' => 'Successfully completed G+6 urban residential building equipped with ground parking for 6 vehicles. Floors 4 to 6 host three functional 2-bedroom apartment units per level with contemporary fixtures, daylight-optimized living areas, and individual storage.',
                'image' => '/images/projects/apartment-aware-square.jpg',
                'is_featured' => false,
                'sort_order' => 7,
            ],
            [
                'title' => 'Signal Commercial & Residential Tower',
                'slug' => 'signal-apartment-tower',
                'category' => 'Mixed Use',
                'location' => 'Signal, Addis Ababa',
                'plot_area' => '220 m²',
                'footprint' => '180 m²',
                'built_up_area' => '1,140 m²',
                'project_cost' => 'ETB 62,700,000',
                'status' => 'Completed',
                'client' => 'Michael Wandwassen',
                'description' => 'Completed B+G+6 residential development featuring 10 secure basement parking spaces and 160 m² ground floor commercial space. Upper levels offer private single-apartment floor layouts with two bedrooms, two baths, open modern kitchens, and wraparound balconies.',
                'image' => '/images/projects/apartment-signal.jpg',
                'is_featured' => false,
                'sort_order' => 8,
            ],
        ];

        foreach ($projects as $project) {
            Project::create($project);
        }
    }
}
