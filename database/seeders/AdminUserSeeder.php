<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        // Default Managing Director / Executive Admin
        User::updateOrCreate(
            ['email' => 'admin@ethio-german.com'],
            [
                'name' => 'Eng. Mikiyas Belayneh',
                'password' => Hash::make('EthioGerman@2026'),
            ]
        );

        // Official company email alias
        User::updateOrCreate(
            ['email' => 'Ethio-German@outlook.com'],
            [
                'name' => 'Ethio-German Management',
                'password' => Hash::make('EthioGerman@2026'),
            ]
        );
    }
}
