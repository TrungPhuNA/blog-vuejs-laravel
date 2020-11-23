<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('a_name')->nullable();
            $table->string('a_slug')->nullable()->unique();
            $table->string('a_description')->nullable();
            $table->string('a_avatar')->nullable();
            $table->integer('a_menu_id')->default(0);
            $table->text('a_content');
            $table->tinyInteger('a_total_comment')->default(0);
            $table->tinyInteger('a_position')->default(0);
            $table->integer('a_user_id')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
