

//Get Contact Data
function getContactData(){
    axios.get('/getContactsData')
        .then(function (response) {
            if(response.status==200){

                $('#MainDiv').removeClass('d-none');
                $('#LoaderDiv').addClass('d-none');

                $('#ContactTableID').DataTable().destroy();
                $('#contact_table').empty();

                var JsonData = response.data;
                $.each(JsonData, function (i, item) {
                    $('<tr>').html(
                        "<th class='th-sm'>"+JsonData[i].name+"<br>Number :"+JsonData[i].mobile+"</th>" +
                        "<th class='th-sm'>"+JsonData[i].message+"</th>" +
                        "<th class='th-sm'>Date :"+JsonData[i].contact_date+"<br>Time :"+JsonData[i].contact_time+"</th>" +
                        "<th class='th-sm'><a class='contactDeleteBtn' data-id="+JsonData[i].id+"><i class='fas fa-trash-alt'></i></a></th>"
                    ).appendTo('#contact_table');
                });

                //Contact Table Delete Icon Click
                $('.contactDeleteBtn').click(function () {
                    let id = $(this).data('id');
                    // $('#serviceDeleteConfirmBtn').attr('data-id',id);
                    $('#DeleteModalId').html(id);
                    $('#DeleteModal').modal('show');
                });

                $('#ContactTableID').DataTable({"order":false});
                $('.dataTables_length').addClass('bs-select');
            }
            else{
                $('#LoaderDiv').addClass('d-none');
                $('#WrongDiv').removeClass('d-none');
            }
        }).catch(function (error) {
        $('#LoaderDiv').addClass('d-none');
        $('#WrongDiv').removeClass('d-none');
    });
}

//Contact Delete Yes Btn
$('#DeleteConfirmBtn').click(function () {
    // var id = $(this).data('id');
    var id = $('#DeleteModalId').html();
    getContactDelete(id);
});

// Get Contact Delete Id Function
function getContactDelete(deleteID){
    $('#DeleteConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/ContactDelete',{id:deleteID})
        .then(function (response) {
            $('#DeleteConfirmBtn').html("Yes");
            if(response.status==200){
                if (response.data==1) {
                    $('#DeleteModal').modal('hide');
                    getContactData();
                    toastr.success('Delete Success');
                } else {
                    $('#DeleteModal').modal('hide');
                    getContactData();
                    toastr.error('Delete Fail');
                }
            }else{
                $('#DeleteModal').modal('hide');
                toastr.error('Something Went Wrong');
            }
        }).catch(function (error) {
        $('#DeleteModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#DeleteConfirmBtn').html("Yes");
    });
}
