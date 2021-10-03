<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhotoModel extends Model
{
    public $table='photo';
    public $primaryKey='id';
    public $tinyIncrements=1;
    public $keyType='int';
    public  $timestamps=false;

}
