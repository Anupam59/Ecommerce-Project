@extends('Layout.app')

@section('content')

    <!--Admin Profile Div -->
    <div class="container">
        <h1 class="ml-5 mt-3">Admin Profile </h1>
        <hr>
        <br>
        <h4 id="AdminName" class="ml-5">Name :</h4>
        <h5 id="AdminEmail" class="ml-5">Email :</h5>
        <h5 id="AdminUserName" class="ml-5">UserName :</h5>
        <h5 id="AdminNumber" class="ml-5">Number :</h5>
        <br>
        <button id="UpdateProfileBtn" class="btn btn-sm btn-brown ml-5"> Update Profile</button>
        <hr>
    </div>

    <!--Admin Table Div -->
    <div id="AdminMainDiv" class="container d-none">
        <div class="row">
            <div class="col-md-12 addButton">
                <button id="AdminAddNewBtn" class="btn btn-sm btn-danger ml-2">Add New Admin</button>
            </div>
            <div class="col-md-12 pt-0 pl-4 pr-4 pb-3">
                <table id="AdminProfileTableDt" class="table table-striped table-sm table-bordered" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th class="th-sm">Admin Name</th>
                        <th class="th-sm">Email</th>
                        <th class="th-sm">UserName</th>
                        <th class="th-sm">Number</th>
                        <th class="th-sm">Delete</th>
                    </tr>
                    </thead>
                    <tbody id="AdminProfile_Table">

                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!--Loader Div -->
    <div id="AdminLoaderDiv" class="container">
        <div class="row">
            <div class="col-md-12 text-center mt-5 p-5">
                <img class="loading-icon" src="{{asset('images/loader.svg')}}" alt="">
            </div>
        </div>
    </div>

    <!--Wrong Div -->
    <div id="AdminWrongDiv" class="container d-none">
        <div class="row">
            <div class="col-md-12 text-center p-5">
                <h3>Something Went Wrong !</h3>
            </div>
        </div>
    </div>

    <!-- Admin Delete Modal -->
    <div class="modal fade" id="AdminDeleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Do you want to Delete?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p id="AdminDeleteModalUserName"> </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button data-id=" " id="AdminDeleteConfirmBtn" type="button" class="btn btn-sm btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>

    <!--AddAdmin Profile Modal -->
    <div class="modal fade" id="AddAdminProfileModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Update Your Profile</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <label>Your Name</label>
                    <input id="AddAdminName" type="text" class="form-control mb-2" placeholder="Your Name">
                    <label>Your Email</label>
                    <input id="AddAdminEmail" type="email" class="form-control mb-2" placeholder="Your Email">
                    <label>Your UserName</label>
                    <input id="AddAdminUserName" type="text" class="form-control mb-2" placeholder="Your UserName">
                    <label>Your PassWord</label>
                    <input id="AddAdminPassWord" type="password" class="form-control mb-1" placeholder="Your PassWord">
                    <input type="checkbox" class="mb-3" onclick="myFunctionAddAdmin()"><span class="ml-1">Show Password</span><br>
                    <label>Your Number</label>
                    <input id="AddAdminNumber" type="text" class="form-control mb-2" placeholder="Your Number">
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button data-id=" " id="AddAdminProfileConfBtn" type="button" class="btn btn-sm btn-primary">Update</button>
                </div>
            </div>
        </div>
    </div>

    <!--Update Profile Modal -->
    <div class="modal fade" id="UpdateProfileModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Update Your Profile</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <label>Your Name</label>
                    <input id="NameUpdate" type="text" class="form-control mb-2" placeholder="Your Name">
                    <label>Your Email</label>
                    <input id="EmailUpdate" type="email" class="form-control mb-2" placeholder="Your Email">

                    <label>Your PassWord</label>
                    <input id="PassWordUpdate" type="password" class="form-control mb-1" placeholder="Your PassWord">
                    <input type="checkbox" class="mb-3" onclick="myFunction()"><span class="ml-1">Show Password</span><br>
                    <label>Your Number</label>
                    <input id="NumberUpdate" type="text" class="form-control mb-2" placeholder="Your Number">
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button data-id=" " id="UpdateProfileConfBtn" type="button" class="btn btn-sm btn-primary">Update</button>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('script')

    <script type="text/javascript">
        getAdmin();
    </script>

@endsection
