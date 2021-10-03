<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProductOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_order',function (Blueprint $table){
            $table->bigIncrements('id');
            $table->string('invoice_no',1000);
            $table->string('product_name',100);
            $table->string('product_code',100);
            $table->string('shop_name',100);
            $table->string('shop_code',100);
            $table->string('product_info',100);
            $table->string('product_quantity',1000);
            $table->string('unit_price',100);
            $table->string('total_price',100);
            $table->string('mobile',100);
            $table->string('name',100);
            $table->string('payment_method',100);
            $table->text('delivery_address');
            $table->string('city',100);
            $table->string('delivery_charge',100);
            $table->string('order_data',100);
            $table->string('order_time',100);
            $table->string('order_status',100);
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
