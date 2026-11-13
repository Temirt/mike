<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category'); // Mixed Use, Residential, Commercial, Government/Public
            $table->string('location');
            $table->string('plot_area')->nullable();
            $table->string('footprint')->nullable();
            $table->string('built_up_area')->nullable();
            $table->string('project_cost')->nullable();
            $table->string('status'); // Design is Completed, Under construction, Completed
            $table->string('client');
            $table->text('description');
            $table->string('image');
            $table->boolean('is_featured')->default(false);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
