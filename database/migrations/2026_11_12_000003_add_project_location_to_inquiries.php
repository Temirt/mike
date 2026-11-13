<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('inquiries') && !Schema::hasColumn('inquiries', 'project_location')) {
            Schema::table('inquiries', function (Blueprint $table) {
                $table->string('project_location')->nullable()->after('project_scale');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('inquiries') && Schema::hasColumn('inquiries', 'project_location')) {
            Schema::table('inquiries', function (Blueprint $table) {
                $table->dropColumn('project_location');
            });
        }
    }
};
