@extends('Layout.app')

@section('content')

        <!--Review Table Div -->
        <div id="ReviewMainDiv" class="container d-none">
            <div class="row">
                <div class="col-md-12 addButton">
                    <h3 class="mt-2 pl-5">Review</h3>
                </div>
                <div class="col-md-12 pt-3 pl-5">
                    <table id="ReviewTableDt" class="table table-striped table-sm table-bordered" cellspacing="0" width="100%">
                        <thead>
                        <tr>
                            <th class="th-sm">Product Code</th>
                            <th class="th-sm">Reviewer Name</th>
                            <th class="th-sm">Product Title</th>
                            <th class="th-sm">Mobile And Rating</th>
                            <th class="th-sm">Details</th>
                        </tr>
                        </thead>
                        <tbody id="Review_table">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!--Loader Div -->
        <div id="ReviewLoaderDiv" class="container">
            <div class="row">
                <div class="col-md-12 text-center mt-5 p-5">
                    <img class="loading-icon" src="{{asset('images/loader.svg')}}" alt="">
                </div>
            </div>
        </div>

        <!--Wrong Div -->
        <div id="ReviewWrongDiv" class="container d-none">
            <div class="row">
                <div class="col-md-12 text-center p-5">
                    <h3>Something Went Wrong !</h3>
                </div>
            </div>
        </div>

        <!--Review Delete Modal -->
        <div class="modal fade" id="ReviewDeleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                        <p id="ReviewDeleteId"></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                        <button data-id=" " id="ReviewDeleteConfirmBtn" type="button" class="btn btn-sm btn-primary">Yes</button>
                    </div>
                </div>
            </div>
        </div>




        <!--Product Edit Modal -->
        <div class="modal fade" id="ReviewDetailsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Product Edit and Update</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p id="ReviewDetailsModalId"> </p>

                        <div class="row d-none" id="ReviewDetailsEditForm">
                            <div class="col-8">
                                <h6 id="ReviewerProductTitle"></h6>
                                <h6 id="ReviewerName"></h6>
                                <hr>
                                <div>
                                    <h5>Review</h5>
                                    <p id="ReviewerComments"></p>
                                </div>
                            </div>

                            <div class="col-4">
                                <p id="ReviewerCode"></p>
                                <p id="ReviewerNumber"></p>
                                <p id="ReviewerRating"></p>
                            </div>
                        </div>

                        <div id="ReviewDetailsEditLoader" class="col-md-12 text-center">
                            <img class="loading-icon" src="{{asset('images/loader.svg')}}" alt="">
                        </div>

                        <div id="ReviewDetailsEditWrong" class="col-md-12 text-center d-none">
                            <h3>Something Went Wrong !</h3>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

@endsection

@section('script')

    <script type="text/javascript">
        getReviewData();
    </script>

@endsection
