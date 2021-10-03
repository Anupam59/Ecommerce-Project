@extends('Layout.app')

@section('content')

    <div class="container-fluid m-0 ">
        <div class="row">
            <div class="col-md-12">
                <button data-toggle="modal" data-target="#PhotoModal" id="addNewPhotoBtnId" class="btn my-3 btn-sm btn-danger">Add New </button>
            </div>
        </div>
        <div class="row photoRow">

        </div>
        <button class="btn btn-sm btn-primary" id="LoadMoreBtn"> Load More </button>

    </div>



    <!-- Modal -->
    <div class="modal fade" id="PhotoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Photo</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <input class="form-control" id="imgInput" type="file">
                    <img class="imgPreview mt-3" id="imgPreview" src="{{asset('images/default-image.png')}}">


                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-danger" data-dismiss="modal">Close</button>
                    <button id="SavePhoto" type="button" class="btn btn-sm btn-success">Save</button>
                </div>
            </div>
        </div>
    </div>



    <!--Photo Delete Modal -->
    <div class="modal fade" id="PhotoDeleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                    <p class="d-none" id="PhotoDeleteId"></p>
                    <p class="d-none" id="PhotoDeleteImage"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button data-id=" " id="PhotoDeleteConfirmBtn" type="button" class="btn btn-sm btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>


@endsection
@section('script')
    <script type="text/javascript">
        LoadPhoto();
    </script>
@endsection
