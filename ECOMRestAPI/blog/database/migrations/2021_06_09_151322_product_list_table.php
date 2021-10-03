<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProductListTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_list',function (Blueprint $table){
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('price');
            $table->string('special_price');
            $table->string('image');
            $table->string('category');
            $table->string('subcategory');
            $table->string('remark');
            $table->string('shop_name');
            $table->string('shop_code');
            $table->string('brand');
            $table->string('star');
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
