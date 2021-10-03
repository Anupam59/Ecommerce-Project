@extends('Layout.app')

@section('content')

    <div class="container">



        <div class="mb-3">
            <label id="CategoryName">Category </label>
            <select id="Category" class="form-select w-100">
                @foreach ($Category as $Category)
                    <option value="{{$Category['cat1_name']}}">{{$Category['cat1_name']}}</option>
                @endforeach
            </select>
        </div>

        <div class="mb-3">
            <label id="SubCategoryName">SubCategory </label>
            <select id="SubCategory" class="form-select w-100">

            </select>
        </div>



    </div>
@endsection

@section('script')

    <script type="text/javascript">
        SelectOption();



        function SelectOption(){
            $('#Category').on('change',function (e){
                var CategoryName = e.target.value;
                axios.post('/SelectOptionSubCategory',{'CategoryName':CategoryName}).then(function (response){
                    var JsonData = response.data;
                    $('#SubCategory').empty();
                    $.each(JsonData, function (i, item) {
                        $("<option value='"+JsonData[i].cat2_name+"'>").html(
                            JsonData[i].cat2_name
                        ).appendTo('#SubCategory');
                    });
                })
            })
        }


    </script>

@endsection
