<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SiteinfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('siteinfo',function (Blueprint $table){
            $table->bigIncrements('id');
            $table->text('about',5000);
            $table->text('terms',5000);
            $table->text('ploicy',5000);
            $table->text('purchase_guide',5000);
            $table->text('about_company',5000);
            $table->text('address',5000);
            $table->string('android_app_link',100);
            $table->string('ios_app_link',100);
            $table->string('facebook_link',100);
            $table->string('twitter_link',100);
            $table->string('instagram_link',100);
            $table->text('delivery_notice',100);
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
