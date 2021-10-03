@extends('Layout.app')

@section('content')


    <!--Review Table Div -->
    <div id="OrderMainDiv" class="container d-none">
        <div class="row">
            <div class="col-md-12 addButton">
                <h3 class="mt-2 pl-5">Order</h3>
            </div>
            <div class="col-md-12 pt-3 pl-5">
                <table id="OrderTableDt" class="table table-striped table-sm table-bordered" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th class="th-sm">No-Code</th>
                        <th class="th-sm">User Details</th>
                        <th class="th-sm">Product Details</th>
                        <th class="th-sm">Time Price</th>
                        <th class="th-sm">Order Status</th>
                        <th class="th-sm">Details</th>
                    </tr>
                    </thead>
                    <tbody id="Order_table">

                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!--Order Loader Div -->
    <div id="OrderLoaderDiv" class="container">
        <div class="row">
            <div class="col-md-12 text-center mt-5 p-5">
                <img class="loading-icon" src="{{asset('images/loader.svg')}}" alt="">
            </div>
        </div>
    </div>

    <!--Order Wrong Div -->
    <div id="OrderWrongDiv" class="container d-none">
        <div class="row">
            <div class="col-md-12 text-center p-5">
                <h3>Something Went Wrong !</h3>
            </div>
        </div>
    </div>

    <!--Order Delete Modal -->
    <div class="modal fade" id="OrderDeleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                    <p id="OrderDeleteId"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button data-id=" " id="OrderDeleteConfirmBtn" type="button" class="btn btn-sm btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>


    <!--Order Chang Modal -->
    <div class="modal fade" id="OrderDetailsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Do you want to Order Details Status Update?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p class="d-none" id="OrderDetailsId"></p>
                    <select id="OrderDetailsStatus" class="form-select w-100">
                        <option value="Pending">Pending</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Accepted By Courier">Accepted By Courier</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button data-id=" " id="OrderDetailsConfirmBtn" type="button" class="btn btn-sm btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>


@endsection

@section('script')

    <script type="text/javascript">
        getOrderData();
    </script>

@endsection

