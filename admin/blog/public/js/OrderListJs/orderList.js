

//Get Order Data
function getOrderData(){
    axios.get('/getOrderData')
        .then(function (response) {
            if(response.status==200){

                $('#OrderMainDiv').removeClass('d-none');
                $('#OrderLoaderDiv').addClass('d-none');

                $('#OrderTableDt').DataTable().destroy();
                $('#Order_table').empty();

                var JsonData = response.data;
                $.each(JsonData, function (i, item) {
                    $('<tr>').html(
                        "<th class='th-sm'>" +
                        "Invoice No : "+JsonData[i].invoice_no+"<br>" +
                        "Product Code : "+JsonData[i].product_code +"<br>" +
                        "Shop Code : "+JsonData[i].shop_code +"<br>" +
                        "</th>"+
                        "<th class='th-sm'>" +
                        "Name : "+JsonData[i].name+"<br>" +
                        "Mobile : "+JsonData[i].mobile +"<br>" +
                        "Address : "+JsonData[i].delivery_address +"<br>" +
                        "City : "+JsonData[i].city +
                        "</th>"+
                        "<th class='th-sm'>" +
                        "Product Name : "+JsonData[i].product_name+"<br>" +
                        "Quantity : "+JsonData[i].product_quantity +"<br>" +
                        "Payment Method : "+JsonData[i].payment_method +
                        "</th>"+
                        "<th class='th-sm'>" +
                        "Total Price : "+JsonData[i].total_price +"<br>" +
                        "Order Date : "+JsonData[i].order_date +"<br>" +
                        "Order Time : "+JsonData[i].order_time +"<br>" +
                        "</th>"+
                        "<th class='th-sm'>" +
                        "Order Status : "+JsonData[i].order_status+"<br>" +
                        "</th>"+
                        "<th class='th-sm'>" +
                        '<a class="OrderDetailsBtn btn btn-success iconBtn" data-id="'+JsonData[i].id+'" data-status="'+JsonData[i].order_status+'"><i class="fas fa-edit"></i></a><br>' +
                        "<a class='OrderDeleteBtn btn btn-danger iconBtn' data-id='"+JsonData[i].id+"'><i class='fas fa-trash-alt'></i></a><br>" +
                        "</th>"
                    ).appendTo('#Order_table');
                });

                //Order Table Delete Icon Click
                $('.OrderDeleteBtn').click(function () {
                    let id = $(this).data('id');
                    $('#OrderDeleteId').html(id);
                    $('#OrderDeleteModal').modal('show');
                });


                //Order Details Table Edit Icon Click
                $('.OrderDetailsBtn').click(function () {
                    var id = $(this).data('id');
                    let status = $(this).data('status');
                    $('#OrderDetailsId').html(id);
                    $('#OrderDetailsStatus').val(status);
                    $('#OrderDetailsModal').modal('show');
                });


                $('#OrderTableDt').DataTable({"order":false});
                $('.dataTables_length').addClass('bs-select');

            }
            else{
                $('#OrderLoaderDiv').addClass('d-none');
                $('#OrderWrongDiv').removeClass('d-none');
            }

        }).catch(function (error) {
        $('#OrderLoaderDiv').addClass('d-none');
        $('#OrderWrongDiv').removeClass('d-none');
    });
}


// Order Delete Confirm Btn
$('#OrderDeleteConfirmBtn').click(function () {
    var id = $('#OrderDeleteId').html();
    getOrderDelete(id);
});

//get Order Delete Id Function
function getOrderDelete(id){
    $('#OrderDeleteConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/OrderDelete',{id:id})
        .then(function (response) {
            $('#OrderConfirmBtn').html("Yes");
            if(response.status==200){
                if (response.data==1) {
                    $('#OrderDeleteModal').modal('hide');
                    toastr.success('Delete Success');
                    $('#OrderDeleteConfirmBtn').html("Yes");
                    getOrderData();
                } else {
                    $('#OrderDeleteModal').modal('hide');
                    toastr.error('Delete Fail');
                    $('#OrderDeleteConfirmBtn').html("Yes");
                }
            }else{
                $('#OrderDeleteModal').modal('hide');
                toastr.error('Something Went Wrong');
                $('#OrderDeleteConfirmBtn').html("Yes");
                getOrderData();
            }

        }).catch(function (error) {
        $('#OrderDeleteModal').modal('hide');
        toastr.error('Something Went Wrong');
        getOrderData();
    });
}




// Order Details Status Confirm Btn
$('#OrderDetailsConfirmBtn').click(function(){
    let order_status = $('#OrderDetailsStatus').val();
    let id = $('#OrderDetailsId').html();
    OrderDetailsStatusUpdate(id,order_status);
});
// Order Details Status Update
function OrderDetailsStatusUpdate(id,order_status) {
    $('#OrderDetailsConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/OrderDetailsStatusUpdate', {
        id:id,
        order_status:order_status,
    }).then(function (response) {
        if (response.status == 200) {
            $('#OrderDetailsConfirmBtn').html("Yes");
            toastr.success('Update Success');
            $('#OrderDetailsModal').modal('hide');
            getOrderData();
        } else {
            $('#OrderDetailsModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#OrderDetailsConfirmBtn').html("Yes");
        }
    }).catch(function (error) {
        $('#OrderDetailsModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#OrderDetailsConfirmBtn').html("Save");
    });
}

