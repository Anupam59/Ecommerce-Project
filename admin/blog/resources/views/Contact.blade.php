@extends('Layout.app')
@section('content')

    <!--Contact Table Div -->
    <div id="MainDiv" class="container d-none">
        <div class="row">
            <div class="col-md-12 p-4">
                <table id="ContactTableID" class="table table-striped table-bordered" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th class="th-sm">Name/Phone</th>
                        <th class="th-sm">Email</th>
                        <th class="th-sm">Message</th>
                        <th class="th-sm">Delete</th>
                    </tr>
                    </thead>
                    <tbody id="contact_table">

                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!--Loader Div -->
    <div id="LoaderDiv" class="container">
        <div class="row">
            <div class="col-md-12 text-center mt-5 p-5">
                <img class="loading-icon" src="{{asset('images/loader.svg')}}" alt="">
            </div>
        </div>
    </div>

    <!--Wrong Div -->
    <div id="WrongDiv" class="container d-none">
        <div class="row">
            <div class="col-md-12 text-center p-5">
                <h3>Something Went Wrong !</h3>
            </div>
        </div>
    </div>

    <!--Delete Modal -->
    <div class="modal fade" id="DeleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                    <p id="DeleteModalId"> </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button data-id=" " id="DeleteConfirmBtn" type="button" class="btn btn-sm btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>


@endsection
@section('script')

    <script type="text/javascript">
        getContactData();
    </script>

@endsection

