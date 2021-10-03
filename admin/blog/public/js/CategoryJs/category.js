


//To See the Category
function getCategory(){
    SelectOptionCategory1();
    SelectAddSubItemCategory();
    SelectOptionDeleteCategory();
    SelectOptionDeleteSubCategory();
    axios.get('/SelectOptionCategory').then(function (response){
        if(response.status==200){
            var JsonData = response.data;
            $('#CategoryList').empty();
            $.each(JsonData, function (i, item) {
                $('<ul class="list-group">').html(
                    '<li class="list-group-item"><img src="'+JsonData[i].cat1_image+'" class="categoryImg"> '+JsonData[i].cat1_name+'</li>'
                ).appendTo('#CategoryList');
            })
        }else {
        }
    }).cache(function (error){
    })
}

//To See the SubCategory
function SelectOptionCategory1() {
    axios.get('/SelectOptionCategory').then(function (response) {
        var JsonData = response.data;
        $('#CategoryShow').empty();
        $.each(JsonData, function (i, item) {
            $('<option value="' + JsonData[i].cat1_name + '">').html(
                JsonData[i].cat1_name
            ).appendTo('#CategoryShow');
        });
    })

    $('#CategoryShow').on('change',function (e){
        var CategoryName = e.target.value;
        axios.post('/SelectSubCategory',{'CategoryName':CategoryName}).then(function (response){
            var JsonData = response.data;
            $('#SubCategoryList').empty();
            $.each(JsonData, function (i, item) {
                $('<ul class="list-group">').html(
                    '<li class="list-group-item">'+JsonData[i].cat2_name+'</li>'
                ).appendTo('#SubCategoryList');
            });
        })
    })
}

//Add New Category  Btn
$('#AddCategoryBtn').click(function () {
    //ProductDetails Model Catch
    var cat1_name = $('#AddCategory').val();
    var cat1_image = $('#AddCategoryImg').val();
    AddCategory(cat1_name,cat1_image);
    $('#AddCategory').val(null);
    $('#AddCategoryImg').val(null);
    $('#AddSubCategory').val(null);
    $('#DeleteSubCategory').empty();
    $('#SubCategoryList').empty();
});

//Add Category
function AddCategory(cat1_name,cat1_image){
    if(cat1_name.length==0){
        toastr.error('Category Name is Empty');
    }else if(cat1_image.length==0){
        toastr.error('Category Image is Empty');
    }else {
        $('#AddCategoryBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
        axios.post('/AddCategoryList',{
            cat1_name:cat1_name,
            cat1_image:cat1_image
        }).then(function (response) {
            $('#AddCategoryBtn').html("Add New");
            if(response.status==200){
                toastr.success('Category Add Success');
                getCategory();
            }else{
                $('#AddCategoryBtn').html("Add New");
                toastr.error('Something Went Wrong');
            }
        })
    }
}

//Category Select Option to Select All SubCategory
function SelectAddSubItemCategory() {
    axios.get('/SelectOptionCategory').then(function (response) {
        var JsonData = response.data;
        $('#AddSubItemCategory').empty();
        $.each(JsonData, function (i, item) {
            $('<option value="' + JsonData[i].cat1_name + '">').html(
                JsonData[i].cat1_name
            ).appendTo('#AddSubItemCategory');
        });
    })
}

//Add New SubCategory  Btn
$('#AddSubCategoryBtn').click(function () {
    //ProductDetails Model Catch
    var cat1_name =$('#AddSubItemCategory').val();
    var cat2_name =$('#AddSubCategory').val();
    AddSubCategory(cat1_name,cat2_name);
    $('#AddCategory').val(null);
    $('#AddCategoryImg').val(null);
    $('#AddSubCategory').val(null);
    $('#DeleteSubCategory').empty();
    $('#SubCategoryList').empty();
});

//Add SubCategory
function AddSubCategory(cat1_name,cat2_name){
    if(cat1_name.length==0){
        toastr.error('Category Name is Empty');
    }else if(cat2_name.length==0){
        toastr.error('SubCategory Image is Empty');
    }else {
        $('#AddSubCategoryBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
        axios.post('/AddSubCategoryList',{
            cat1_name:cat1_name,
            cat2_name:cat2_name
        }).then(function (response) {
            $('#AddSubCategoryBtn').html("Add SubCategory");
            if(response.status==200){
                toastr.success('Category Add Success');
                getCategory();
            }else{
                $('#AddSubCategoryBtn').html("Add SubCategory");
                toastr.error('Something Went Wrong');
            }
        })
    }
}

//Select Option to Delete Category
function SelectOptionDeleteCategory() {
    axios.get('/SelectOptionCategory').then(function (response) {
        var JsonData = response.data;
        $('#DeleteCategory').empty();
        $.each(JsonData, function (i, item) {
            $('<option value="' + JsonData[i].cat1_name + '">').html(
                JsonData[i].cat1_name
            ).appendTo('#DeleteCategory');
        });
    })
}

//Category Delete Btn Show Delete Model
$('#DeleteCategoryBtn').click(function () {
    var cat1_name =$('#DeleteCategory').val();
    $('#DeleteModalCategory').html(cat1_name);
    $('#DeleteModal').modal('show');
});

//Category Delete Yes Btn
$('#DeleteConfirmBtnCategory').click(function () {
    var cat1_name =$('#DeleteCategory').val();
    DeleteCategory(cat1_name);
    $('#AddCategory').val(null);
    $('#AddCategoryImg').val(null);
    $('#AddSubCategory').val(null);
    $('#DeleteSubCategory').empty();
    $('#SubCategoryList').empty();
});

// Get Delete Category Function
function DeleteCategory(cat1_name){
    $('#DeleteConfirmBtnCategory').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/DeleteCategory',{cat1_name:cat1_name}).then(function (response) {
        $('#DeleteConfirmBtn').html("Yes");
        if(response.status==200 && response.data==1){
            $('#DeleteModal').modal('hide');
            toastr.success('Delete Success');
            getCategory();
        } else {
            $('#DeleteModal').modal('hide');
            toastr.error('Delete Fail');
        }
    })
}

// Select Option to Delete Subcategory
function SelectOptionDeleteSubCategory() {
    axios.get('/SelectOptionCategory').then(function (response) {
        var JsonData = response.data;
        $('#DeleteSubItemCategory').empty();
        $.each(JsonData, function (i, item) {
            $('<option value="' + JsonData[i].cat1_name + '">').html(
                JsonData[i].cat1_name
            ).appendTo('#DeleteSubItemCategory');
        });
    })
    $('#DeleteSubItemCategory').on('change',function (e){
        var CategoryName = e.target.value;
        axios.post('/SelectSubCategory',{'CategoryName':CategoryName}).then(function (response){
            var JsonData = response.data;
            $('#DeleteSubCategory').empty();
            $.each(JsonData, function (i, item) {
                $('<option value="' + JsonData[i].cat2_name + '">').html(
                    JsonData[i].cat2_name
                ).appendTo('#DeleteSubCategory');
            });
        })
    })
}

//SubCategory Delete Btn Show Delete Model
$('#DeleteSubCategoryBtn').click(function () {
    var cat2_name =$('#DeleteSubCategory').val();
    $('#DeleteModalSubCategory').html(cat2_name);
    $('#DeleteSubCategoryModal').modal('show');
});

//SubCategory Delete Yes Btn
$('#DeleteSubCategoryConfirmBtn').click(function () {
    var cat1_name =$('#DeleteSubItemCategory').val();
    var cat2_name =$('#DeleteSubCategory').val();
    DeleteSubCategory(cat1_name,cat2_name);
    $('#AddCategory').val(null);
    $('#AddCategoryImg').val(null);
    $('#AddSubCategory').val(null);
    $('#DeleteSubCategory').empty();
    $('#SubCategoryList').empty();
});

// Get Delete SubCategory Function
function DeleteSubCategory(cat1_name,cat2_name){
    $('#DeleteSubCategoryConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/DeleteSubCategory',{
        cat1_name:cat1_name,
        cat2_name:cat2_name,
    }).then(function (response) {
        $('#DeleteSubCategoryConfirmBtn').html("Yes");
        if(response.status==200){
            $('#DeleteSubCategoryModal').modal('hide');
            toastr.success('Delete Success');
            getCategory();
        } else {
            $('#DeleteSubCategoryModal').modal('hide');
            toastr.error('Delete Fail');
        }
    })
}

