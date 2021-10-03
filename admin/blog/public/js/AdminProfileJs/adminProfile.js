

//Update Profile Btn
$('#UpdateProfileBtn').click(function () {
    $('#UpdateProfileModal').modal('show');
})

//Update Profile Confirm Btn
$('#UpdateProfileConfBtn').click(function () {
    var name =$('#NameUpdate').val();
    var email =$('#EmailUpdate').val();
    var password =$('#PassWordUpdate').val();
    var number =$('#NumberUpdate').val();
    ProfileUpdate(name,email,password,number);
});

//Admin Delete Yes Btn
$('#AdminDeleteConfirmBtn').click(function () {
    var username = $('#AdminDeleteModalUserName').html();
    getAdminDelete(username);
});

//Add New Admin Btn Click
$('#AdminAddNewBtn').click(function(){
    $('#AddAdminProfileModal').modal('show');
});

//Add New Product  Btn
$('#AddAdminProfileConfBtn').click(function () {
    var name =$('#AddAdminName').val();
    var email =$('#AddAdminEmail').val();
    var username =$('#AddAdminUserName').val();
    var password =$('#AddAdminPassWord').val();
    var number =$('#AddAdminNumber').val();
    AddAdminProfile(name,email,username,password,number);
});



//Get your Admin Profile
function getAdmin(){
    axios.get('/AdminUpdate').then(function (response) {
        if(response.status==200){
            var JsonData = response.data;
            $('#AdminName').html("Name : "+JsonData[0].name);
            $('#AdminEmail').html("Email : "+JsonData[0].email);
            $('#AdminUserName').html("UserName : "+JsonData[0].username);
            $('#AdminNumber').html("Number : "+JsonData[0].number);

            $('#NameUpdate').val(JsonData[0].name);
            $('#EmailUpdate').val(JsonData[0].email);
            $('#PassWordUpdate').val(JsonData[0].password);
            $('#NumberUpdate').val(JsonData[0].number);

            getAdminData();
        }else {
            console.log(response.data)
        }
    }).cache(function (error){
        console.log(error);
    })
}

//Your Admin Profile Update
function ProfileUpdate(name,email,password,number){
    if(name.length==0){
        toastr.error('Name is Empty');
    }else if(email.length==0){
        toastr.error('Email is Empty');
    }else if(password.length==0){
        toastr.error('Password is Empty');
    }else if(number.length==0){
        toastr.error('Number is Empty');
    }else {
        $('#UpdateProfileConfBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
        axios.post('/AdminUpdateData',{
            name:name,
            email:email,
            password:password,
            number:number,
        }).then(function (response){
            $('#UpdateProfileConfBtn').html("Update");
            if(response.status==200){
                toastr.success('Update Success');
                $('#UpdateProfileModal').modal('hide');
                getAdmin();
            }else{
                toastr.error('Something Went Wrong');
                $('#UpdateProfileModal').modal('hide');
            }
        }).catch(function (error){

        })
    }
}

//Get Admin Data
function getAdminData(){
    axios.get('/getAdminData')
        .then(function (response) {
            if(response.status==200){

                $('#AdminMainDiv').removeClass('d-none');
                $('#AdminLoaderDiv').addClass('d-none');

                $('#AdminProfileTableDt').DataTable().destroy();
                $('#AdminProfile_Table').empty();

                var JsonData = response.data;

                $.each(JsonData, function (i, item) {

                    $('<tr>').html(
                        "<th class='th-sm'>"+JsonData[i].name+"</th>" +
                        "<th class='th-sm'>"+JsonData[i].email+"</th>" +
                        "<th class='th-sm'>"+JsonData[i].username+"</th>" +
                        "<th class='th-sm'>"+JsonData[i].number+"</th>" +
                        "<th class='th-sm'>" +
                        '<a class="AdminDeleteBtn btn btn-success iconBtn" data-username="'+JsonData[i].username+'"><i class="fas fa-trash-alt"></i></a><br>' +
                        "</th>"
                    ).appendTo('#AdminProfile_Table');
                });

                //Admin Table Delete Icon Click
                $('.AdminDeleteBtn').click(function () {
                    let username = $(this).data('username');
                    $('#AdminDeleteModalUserName').html(username);
                    $('#AdminDeleteModal').modal('show');
                });

                $('#AdminProfileTableDt').DataTable({"order":false});
                $('.dataTables_length').addClass('bs-select');

            }
            else{
                $('#AdminLoaderDiv').addClass('d-none');
                $('#AdminWrongDiv').removeClass('d-none');
            }

        }).catch(function (error) {
        $('#AdminLoaderDiv').addClass('d-none');
        $('#AdminWrongDiv').removeClass('d-none');
    });
}

// Get Admin Delete Function
function getAdminDelete(username){

    $('#AdminDeleteConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...

    axios.post('/AdminDelete',{username:username})
        .then(function (response) {
            $('#AdminDeleteConfirmBtn').html("Yes");
            if(response.status==200){
                if (response.data==1) {
                    $('#AdminDeleteModal').modal('hide');
                    toastr.success('Delete Success');
                    getAdminData();
                } else {
                    $('#AdminDeleteModal').modal('hide');
                    toastr.error('Your Profile is Not delete!');
                    getAdminData();
                }
            }else{
                $('#AdminDeleteModal').modal('hide');
                toastr.error('Something Went Wrong');
                getAdminData();
            }

        }).catch(function (error) {
        $('#AdminDeleteModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#AdminDeleteConfirmBtn').html("Yes");
    });
}

//Add New Admin
function  AddAdminProfile(name,email,username,password,number){
    if(name.length==0){
        toastr.error('Name is Empty');
    }else if(email.length==0){
        toastr.error('Email is Empty');
    }else if(username.length==0){
        toastr.error('UserName is Empty');
    } else if(password.length==0){
        toastr.error('Password is Empty');
    }else if(number.length==0){
        toastr.error('Number is Empty');
    }else {
        $('#AddAdminProfileConfBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...

        axios.post('/AddAdminProfile',{
            name:name,
            email:email,
            username:username,
            password:password,
            number:number,
        }).then(function (response) {
            $('#AddAdminProfileConfBtn').html("Add New");
            if(response.status==200){
                toastr.success('Add Admin Success');
                $('#AddAdminProfileModal').modal('hide');
                getAdminData();
            }else{
                toastr.error('Something Went Wrong');
                $('#AddAdminProfileModal').modal('hide');
            }
        }).catch(function (error) {
            toastr.error('Something Went Wrong');
            $('#AddAdminProfileModal').modal('hide');
        });
    }
}

//PassWord Show Check Option
function myFunction() {
    var Check = document.getElementById("PassWordUpdate");
    if (Check.type === "password") {
        Check.type = "text";
    } else {
        Check.type = "password";
    }
}

//AddAdmin PassWord Show Check Option
function myFunctionAddAdmin() {
    var Check = document.getElementById("AddAdminPassWord");
    if (Check.type === "password") {
        Check.type = "text";
    } else {
        Check.type = "password";
    }
}
