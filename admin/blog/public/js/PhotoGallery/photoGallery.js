

//Image Input your Computer
$('#imgInput').change(function () {
    var reader=new FileReader();
    reader.readAsDataURL(this.files[0]);
    reader.onload=function (event) {
        var ImgSource= event.target.result;
        $('#imgPreview').attr('src',ImgSource)
    }

})

//Image Upload
$('#SavePhoto').on('click',function () {
    $('#SavePhoto').html("<div class='spinner-border spinner-border-sm' role='status'></div>")
    var PhotoFile= $('#imgInput').prop('files')[0];
    var formData=new FormData();
    formData.append('photo',PhotoFile);
    axios.post("/PhotoUpload",formData).then(function (response) {
        if(response.status==200 && response.data==1){
            $('#PhotoModal').modal('hide');
            $('#SavePhoto').html('Save');
            window.location.href="/Photo";
            toastr.success('Photo Upload Success');
        }
        else{
            $('#PhotoModal').modal('hide');
            toastr.error('Photo Upload Fail');
        }
    }).catch(function (error) {
        $('#PhotoModal').modal('hide');
        toastr.error('Photo Upload Fail');
        $('#SavePhoto').html('Save');
    })
});

//Get Image
function LoadPhoto() {
    let URL="/PhotoJSON";
    axios.get(URL).then(function (response) {
        $.each(response.data, function(i, item) {
            $("<div class='col-md-4 p-1'>").html(
                "<img data-id="+ item['id']+" class='imgOnRow' src=" + item['location'] + ">"+
                "<button data-id="+ item['id']+" data-photo="+ item['location']+" class='btn deletePhoto btn-sm'> Delete</button>"
            ).appendTo('.photoRow');
        })
        $('.deletePhoto').on('click',function (event) {
            let id=$(this).data('id');
            let photo=$(this).data('photo');
            $('#PhotoDeleteId').html(id);
            $('#PhotoDeleteImage').html(photo);
            $('#PhotoDeleteModal').modal('show');
            event.preventDefault();
        })
    }).catch(function (error) {
    })
}

//How many can be Load Image
var  ImgID=0;
function LoadByID(FirstImgID,loadMoreBtn){
    ImgID=ImgID-9;
    let PhotoID=ImgID+FirstImgID;
    let URL="/PhotoJSONByID/"+PhotoID
    loadMoreBtn.html("<div class='spinner-border spinner-border-sm' role='status'></div>")
    axios.get(URL).then(function (response) {
        loadMoreBtn.html("Load More");
        $.each(response.data, function(i, item) {
            $("<div class='col-md-4 p-1'>").html(
                "<img data-id="+ item['id']+" class='imgOnRow' src=" + item['location'] + ">"+
                "<button data-id="+ item['id']+" data-photo="+ item['location']+" class='btn btn-sm'> Delete</button>"
            ).appendTo('.photoRow');
        })
    }).catch(function (error) {
    })
}

//Loading Btn Click
$('#LoadMoreBtn').on('click',function () {
    let loadMoreBtn=$(this);
    let FirstImgID= $(this).closest('div').find('img').data('id');
    LoadByID(FirstImgID,loadMoreBtn);
})


//Photo Delete Confirm Btn
$('#PhotoDeleteConfirmBtn').on('click',function () {
    let OldPhotoURL=$('#PhotoDeleteImage').html();
    let id=  $('#PhotoDeleteId').html();
    PhotoDelete(OldPhotoURL,id)
})

//Delete Photo on Gallery
function PhotoDelete(OldPhotoURL,id) {
    let URL="/PhotoDelete";
    let MyFormData=new FormData();
    MyFormData.append('OldPhotoURL',OldPhotoURL);
    MyFormData.append('id',id);
    axios.post(URL,MyFormData).then(function (response) {
        if(response.status==200 && response.data==1){
            toastr.success('Photo Delete Success');
            window.location.href="/Photo";
            $('#PhotoDeleteModal').modal('hide');
        }
        else{
            toastr.error('Delete Fail Try Again');
            $('#PhotoDeleteModal').modal('hide');
        }
    }).catch(function () {
        toastr.error('Delete Fail Try Again');
        $('#PhotoDeleteModal').modal('hide');
    })
}
