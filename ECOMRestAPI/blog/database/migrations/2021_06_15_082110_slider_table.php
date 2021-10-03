<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SliderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('slider_table',function (Blueprint $table){
            $table->bigIncrements('id');
            $table->string('text_color');
            $table->string('bg_color');
            $table->string('image');
            $table->string('title');
            $table->string('sub_title');
            $table->string('product_code');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
