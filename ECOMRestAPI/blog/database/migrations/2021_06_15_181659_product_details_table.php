<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProductDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_details',function (Blueprint $table){
            $table->bigIncrements('id');
            $table->string('product_code');
            $table->string('img1');
            $table->string('img2');
            $table->string('img3');
            $table->string('img4');
            $table->string('des');
            $table->string('color');
            $table->string('size');
            $table->text('details');
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
