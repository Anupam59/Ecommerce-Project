<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ContactTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contact',function (Blueprint $table){
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('mobile');
            $table->string('message',1000);
            $table->string('contact_date');
            $table->string('contact_time');
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
