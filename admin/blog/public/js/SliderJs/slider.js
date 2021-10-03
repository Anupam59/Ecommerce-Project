


//Get Project Data
function getSliderData(){
    axios.get('/getSliderData')
        .then(function (response) {
            if(response.status==200){
                $('#SliderMainDiv').removeClass('d-none');
                $('#SliderLoaderDiv').addClass('d-none');
                $('#SliderTableId').DataTable().destroy();
                $('#Slider_Table').empty();
                var JsonData = response.data;
                $.each(JsonData, function (i, item) {
                    $('<tr>').html(
                        "<th class='th-sm'><img class='table-img' src="+JsonData[i].image+"></th>"+
                        "<th class='th-sm'>"+JsonData[i].title+"</th>"+
                        "<th class='th-sm'>"+JsonData[i].sub_title+"</th>"+
                        "<th class='th-sm'><a class='SliderEditDetailsBtn' data-id="+JsonData[i].id+" ><i class='fas fa-eye'></i></a></th>"+
                        "<th class='th-sm'><a class='SliderDeleteBtn' data-id="+JsonData[i].id+" ><i class='fas fa-trash-alt'></i></a></th>"
                    ).appendTo('#Slider_Table');
                });
                //Project Table Delete Icon Click
                $('.SliderDeleteBtn').click(function () {
                    var id = $(this).data('id');
                    // $('#serviceDeleteConfirmBtn').attr('data-id',id);
                    $('#SliderDeleteModalId').html(id);
                    $('#SliderDeleteModal').modal('show');
                });
                //Project Table Edit Icon Click
                $('.SliderEditDetailsBtn').click(function () {
                    var id = $(this).data('id');
                    $('#SliderEditModalId').html(id);
                    $('#SliderEditModal').modal('show');
                    SliderUpdateDetails(id);
                });
                $('#SliderTableId').DataTable({"order":false});
                $('.dataTables_length').addClass('bs-select');
            }
            else{
                $('#SliderLoaderDiv').addClass('d-none');
                $('#SliderWrongDiv').removeClass('d-none');
            }
        }).catch(function (error) {
        $('#SliderLoaderDiv').addClass('d-none');
        $('#SliderWrongDiv').removeClass('d-none');
    });
}

//Project Delete Yes Btn
$('#SliderDeleteConfirmBtn').click(function () {
    // var id = $(this).data('id');
    var id = $('#SliderDeleteModalId').html();
    getSliderDelete(id);
});

// Get Service Delete Id Function
function getSliderDelete(deleteID){

    $('#SliderDeleteConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...

    axios.post('/SliderDelete',{id:deleteID})
        .then(function (response) {
            $('#SliderDeleteConfirmBtn').html("Yes");
            if(response.status==200){
                if (response.data==1) {
                    $('#SliderDeleteModal').modal('hide');
                    getSliderData();
                    toastr.success('Delete Success');
                } else {
                    $('#SliderDeleteModal').modal('hide');
                    getSliderData();
                    toastr.error('Delete Fail');
                }
            }else{
                $('#SliderDeleteModal').modal('hide');
                toastr.error('Something Went Wrong');
            }

        }).catch(function (error) {
        $('#SliderDeleteModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#SliderDeleteConfirmBtn').html("Yes");
    });
}

// Each Project Details Id Function
function SliderUpdateDetails(DetailsID){

    axios.post('/getSliderDetails',{id:DetailsID})
        .then(function (response) {
            if(response.status==200){

                $('#SliderEditLoader').addClass('d-none');
                $('#SliderEditForm').removeClass('d-none');

                var JsonData = response.data;
                $('#SliderTitleId').val(JsonData[0].title);
                $('#SliderSubTitleId').val(JsonData[0].sub_title);
                $('#SliderImageId').val(JsonData[0].image);
                $('#SliderImageShow').attr('src',JsonData[0].image);
                $('#SliderTextColorId').val(JsonData[0].text_color);
                $('#SliderBgColorId').val(JsonData[0].bg_color);
                $('#SliderProductCodeId').val(JsonData[0].product_code);

            }else{
                $('#SliderEditLoader').addClass('d-none');
                $('#SliderEditWrong').removeClass('d-none');
            }

        }).catch(function (error) {
        $('#SliderEditLoader').addClass('d-none');
        $('#SliderEditWrong').removeClass('d-none');
    });
}

//Project Edit Save Btn
$('#SliderEditConfirmBtn').click(function () {
    let id = $('#SliderEditModalId').html();
    let title = $('#SliderTitleId').val();
    let sub_title = $('#SliderSubTitleId').val();
    let image = $('#SliderImageId').val();
    let text_color = $('#SliderTextColorId').val();
    let bg_color = $('#SliderBgColorId').val();
    let product_code = $('#SliderProductCodeId').val();
    SliderUpdate(id,title,sub_title,image,text_color,bg_color,product_code);
});

// Each Project Details Id Function
function SliderUpdate(id,title,sub_title,image,text_color,bg_color,product_code){
    if(id.length==0){
        toastr.error('ProjectId is Empty');
    }else if(title.length==0){
        toastr.error('title is Empty');
    }else if(sub_title.length==0){
        toastr.error('sub_title is Empty');
    }else if(image.length==0){
        toastr.error('image is Empty');
    }else if(text_color.length==0){
        toastr.error('text_color is Empty');
    }else if(bg_color.length==0){
        toastr.error('bg_color is Empty');
    }else if(product_code.length==0){
        toastr.error('product_code is Empty');
    }else{
        $('#SliderEditConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
        axios.post('/SliderUpdate',{
            id:id,
            title:title,
            sub_title:sub_title,
            image:image,
            text_color:text_color,
            bg_color:bg_color,
            product_code:product_code,
        }).then(function (response) {
            $('#SliderEditConfirmBtn').html("Save");
            if(response.status==200){
                if (response.data==1) {
                    $('#SliderEditModal').modal('hide');
                    toastr.success('Update Success');
                    getSliderData();
                } else {
                    $('#SliderEditModal').modal('hide');
                    toastr.error('Update Fail');
                    getSliderData();
                }
            }else{
                $('#SliderEditModal').modal('hide');
                toastr.error('Something Went Wrong');
            }
        }).catch(function (error) {
            $('#SliderEditModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#SliderEditConfirmBtn').html("Save");
        });
    }
}

//Add New Project Btn Click
$('#AddNewSliderBtnID').click(function(){
    $('#AddSliderModal').modal('show');
});

//Add New Project  Btn
$('#AddSliderConfirmBtn').click(function () {

    let title = $('#AddSliderTitleId').val();
    let sub_title = $('#AddSliderSubTitleId').val();
    let image = $('#AddSliderImageId').val();
    let text_color = $('#AddSliderTextColorId').val();
    let bg_color = $('#AddSliderBgColorId').val();
    let product_code = $('#AddSliderProductCodeId').val();
    AddSlider(title,sub_title,image,text_color,bg_color,product_code);
});

//Add New Project Input part Empty Btn
function AddSliderInputEmpty(){
    $('#AddSliderConfirmBtn').click(function () {
        $('#AddSliderTitleId').val("");
        $('#AddSliderSubTitleId').val("");
        $('#AddSliderImageId').val("");
        $('#AddSliderTextColorId').val("");
        $('#AddSliderBgColorId').val("");
        $('#AddSliderProductCodeId').val("");
    });
}

//Add New Project Function
function AddSlider(title,sub_title,image,text_color,bg_color,product_code){

    if(title.length==0){
        toastr.error('title is Empty');
    }else if(sub_title.length==0){
        toastr.error('sub_title is Empty');
    }else if(image.length==0){
        toastr.error('image is Empty');
    }else if(text_color.length==0){
        toastr.error('text_color is Empty');
    }else if(bg_color.length==0){
        toastr.error('bg_color is Empty');
    }else if(product_code.length==0){
        toastr.error('product_code is Empty');
    }else{
        $('#AddSliderConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
        axios.post('/AddSlider',{
            title:title,
            sub_title:sub_title,
            image:image,
            text_color:text_color,
            bg_color:bg_color,
            product_code:product_code,
        }).then(function (response) {
            $('#AddSliderConfirmBtn').html("Add New");
            if(response.status==200){
                if (response.data==1) {
                    $('#AddSliderModal').modal('hide');
                    AddSliderInputEmpty();
                    toastr.success('Add Success');
                    getSliderData();
                } else {
                    $('#AddSliderModal').modal('hide');
                    AddSliderInputEmpty();
                    toastr.error('Add Fail');
                    getSliderData();
                }
            }else{
                $('#AddSliderModal').modal('hide');
                toastr.error('Something Went Wrong');
                AddSliderInputEmpty();
            }
        }).catch(function (error) {
            $('#AddSliderModal').modal('hide');
            AddSliderInputEmpty();
            toastr.error('Something Went Wrong');
            $('#AddSliderConfirmBtn').html("Save");
        });
    }
}

//Gallery Image Edit Click
$('#GallerySliderImage').click(function () {
    getSliderPhoto();
    $('#GallerySliderImageModal').modal('show');
});
function getSliderPhoto() {
    let URL="/PhotoJSON";
    axios.get(URL).then(function (response) {
        $('.photoGalleySliderImage').empty();
        $.each(response.data, function(i, item) {
            $("<div class='col-3'>").html(
                "<img data-id="+ item['id']+" class='imgOnRow1' src=" + item['location'] + ">"+
                "<button data-id="+ item['id']+" data-photo="+ item['location']+" class='btn SelectSliderPhoto btn-sm'> Select</button>"
            ).appendTo('.photoGalleySliderImage');
        })
        $('.SelectSliderPhoto').on('click',function () {
            let photo=$(this).data('photo');
            $('#SelectedSliderImage').attr('src',photo)
        })
    }).catch(function (error) {
    })
}
$('#GallerySliderImageSetBtn').click(function () {
    //ProductDetails Model Catch
    let photo=$('#SelectedSliderImage').attr('src');
    $('#SliderImageId').val(photo);
    $('#SliderImageShow').attr('src',photo);
    $('#GallerySliderImageModal').modal('hide');
});

//Gallery Image Add Click
$('#AddGallerySliderImage').click(function () {
    getAddSliderPhoto();
    $('#AddGallerySliderImageModal').modal('show');
});
function getAddSliderPhoto() {
    let URL="/PhotoJSON";
    axios.get(URL).then(function (response) {
        $('.AddphotoGalleySliderImage').empty();
        $.each(response.data, function(i, item) {
            $("<div class='col-3'>").html(
                "<img data-id="+ item['id']+" class='imgOnRow1' src=" + item['location'] + ">"+
                "<button data-id="+ item['id']+" data-photo="+ item['location']+" class='btn AddSelectSliderPhoto btn-sm'> Select</button>"
            ).appendTo('.AddphotoGalleySliderImage');
        })
        $('.AddSelectSliderPhoto').on('click',function () {
            let photo=$(this).data('photo');
            $('#AddSelectedSliderImage').attr('src',photo)
        })
    }).catch(function (error) {
    })
}
$('#AddGallerySliderImageSetBtn').click(function () {
    //ProductDetails Model Catch
    let photo=$('#AddSelectedSliderImage').attr('src');
    $('#AddSliderImageId').val(photo);
    $('#AddSliderImageShow').attr('src',photo);
    $('#AddGallerySliderImageModal').modal('hide');
});
