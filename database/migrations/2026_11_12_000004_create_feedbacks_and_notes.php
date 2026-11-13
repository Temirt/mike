<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Add admin_notes to inquiries table if not exists
        if (Schema::hasTable('inquiries') && !Schema::hasColumn('inquiries', 'admin_notes')) {
            Schema::table('inquiries', function (Blueprint $table) {
                $table->text('admin_notes')->nullable()->after('status');
            });
        }

        // Create feedbacks table
        if (!Schema::hasTable('feedbacks')) {
            Schema::create('feedbacks', function (Blueprint $table) {
                $table->id();
                $table->string('client_name');
                $table->string('email')->nullable();
                $table->string('phone')->nullable();
                $table->string('company_or_project')->nullable();
                $table->unsignedTinyInteger('rating')->default(5); // 1-5 stars
                $table->string('feedback_type')->default('Project Review'); // Project Review, Service Quality, General
                $table->text('message');
                $table->string('status')->default('pending'); // pending, approved, archived
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('feedbacks');

        if (Schema::hasTable('inquiries') && Schema::hasColumn('inquiries', 'admin_notes')) {
            Schema::table('inquiries', function (Blueprint $table) {
                $table->dropColumn('admin_notes');
            });
        }
    }
};
