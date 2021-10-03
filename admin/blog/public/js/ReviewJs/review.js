

//Get Product Data
function getReviewData(){
    axios.get('/getReviewData')
        .then(function (response) {
            if(response.status==200){

                $('#ReviewMainDiv').removeClass('d-none');
                $('#ReviewLoaderDiv').addClass('d-none');

                $('#ReviewTableDt').DataTable().destroy();
                $('#Review_table').empty();

                var JsonData = response.data;
                $.each(JsonData, function (i, item) {
                    $('<tr>').html(
                        "<th class='th-sm'>"+JsonData[i].product_code+"</th>" +
                        "<th class='th-sm'>"+JsonData[i].reviewer_name+"</th>" +
                        "<th class='th-sm'>"+JsonData[i].product_name+"</th>" +
                        "<th class='th-sm'>" +
                        "Mobile :"+JsonData[i].mobile+"<br>" +
                        "Rating :"+JsonData[i].reviewer_rating +
                        "</th>"+
                        "<th class='th-sm'>" +
                        '<a class="ReviewDetailsBtn btn btn-success iconBtn" data-id="'+JsonData[i].id+'"><i class="fas fa-edit"></i></a><br>' +
                        "<a class='ReviewDeleteBtn btn btn-danger iconBtn' data-id='"+JsonData[i].id+"'><i class='fas fa-trash-alt'></i></a><br>" +
                        "</th>"
                    ).appendTo('#Review_table');
                });

                //Review Table Delete Icon Click
                $('.ReviewDeleteBtn').click(function () {
                    let id = $(this).data('id');
                    $('#ReviewDeleteId').html(id);
                    $('#ReviewDeleteModal').modal('show');
                });


                //Review Details Table Edit Icon Click
                $('.ReviewDetailsBtn').click(function () {
                    var id = $(this).data('id');
                    $('#ReviewDetailsModalId').html(id);
                    $('#ReviewDetailsModal').modal('show');
                    ReviewDetails(id);
                });


                $('#ReviewTableDt').DataTable({"order":false});
                $('.dataTables_length').addClass('bs-select');

            }
            else{
                $('#ReviewLoaderDiv').addClass('d-none');
                $('#ReviewWrongDiv').removeClass('d-none');
            }

        }).catch(function (error) {
        $('#ReviewLoaderDiv').addClass('d-none');
        $('#ReviewWrongDiv').removeClass('d-none');
    });
}



// Review Delete Confirm Btn
$('#ReviewDeleteConfirmBtn').click(function () {
    var id = $('#ReviewDeleteId').html();
    getReviewDelete(id);
});

//get Review Delete Id Function
function getReviewDelete(id){
    $('#ReviewDeleteConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/ReviewDelete',{id:id})
        .then(function (response) {
            $('#ReviewConfirmBtn').html("Yes");
            if(response.status==200){
                if (response.data==1) {
                    $('#ReviewDeleteModal').modal('hide');
                    toastr.success('Delete Success');
                    $('#ReviewDeleteConfirmBtn').html("Yes");
                    getReviewData();
                } else {
                    $('#ReviewDeleteModal').modal('hide');
                    toastr.error('Delete Fail');
                    $('#ReviewDeleteConfirmBtn').html("Yes");
                    getReviewData();
                }
            }else{
                $('#ReviewDeleteModal').modal('hide');
                toastr.error('Something Went Wrong');
                $('#ReviewDeleteConfirmBtn').html("Yes");
                getReviewData();
            }

        }).catch(function (error) {
        $('#ReviewDeleteModal').modal('hide');
        toastr.error('Something Went Wrong');
        getReviewData();
    });
}


// Review Details  Show
function ReviewDetails(id){
    axios.post('/getReviewDetails',{id:id}).then(function (response) {
        if(response.status==200){
            $('#ReviewDetailsEditLoader').addClass('d-none');
            $('#ReviewDetailsEditForm').removeClass('d-none');
            var JsonData = response.data;

            //Review Details
            $('#ReviewerCode').html("Product Code : "+JsonData[0].product_code);
            $('#ReviewerProductTitle').html("Product Title : "+JsonData[0].product_name);
            $('#ReviewerNumber').html("Number : "+JsonData[0].mobile);
            $('#ReviewerName').html("Reviewer Name : "+JsonData[0].reviewer_name);
            $('#ReviewerRating').html("Rating : "+JsonData[0].reviewer_rating);
            $('#ReviewerComments').html(JsonData[0].reviewer_comments);

        }else{
            $('#ReviewDetailsEditLoader').addClass('d-none');
            $('#ReviewDetailsEditWrong').removeClass('d-none');
        }
    }).catch(function (error) {
        $('#ReviewDetailsEditLoader').addClass('d-none');
        $('#ReviewDetailsEditWrong').removeClass('d-none');
    });

}
