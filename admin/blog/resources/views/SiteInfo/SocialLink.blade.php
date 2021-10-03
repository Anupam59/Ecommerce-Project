@extends('Layout.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-12 mt-3 mb-3"><h3>Social Link</h3></div>
            <div class="col-2">
                <div class="card">
                    <img class="card-img-top" src="{{asset('images/Facebook.jpg')}}" alt="Card image cap">
                    <p id="FacebookData" class=""></p>
                    <hr>
                    <button id="FacebookLinkBtn" class="btn btn-sm btn-brown">Edit Link</button>
                </div>
            </div>

            <div class="col-2">
                <div class="card">
                    <img class="card-img-top" src="{{asset('images/twitter1.jpg')}}" alt="Card image cap">
                    <p id="TwitterData" class=""></p>
                    <hr>
                    <button id="TwitterLinkBtn" class="btn btn-sm btn-brown">Edit Link</button>
                </div>
            </div>

            <div class="col-2">
                <div class="card">
                    <img class="card-img-top" src="{{asset('images/linkin.png')}}" alt="Card image cap">
                    <p id="LinkedinData" class=""></p>
                    <hr>
                    <button id="LinkedinLinkBtn" class="btn btn-sm btn-brown">Edit Link</button>
                </div>
            </div>
        </div>

        <hr>


        <div class="row">
            <div class="col-12 mt-2 mb-3"><h3>App Link</h3></div>
            <div class="col-2">
                <div class="card">
                    <img class="card-img-top" src="{{asset('images/android.jpg')}}" alt="Card image cap">
                    <p id="AndroidData" class=""></p>
                    <hr>
                    <button id="AndroidLinkBtn" class="btn btn-sm btn-brown">Edit Link</button>
                </div>
            </div>

            <div class="col-2">
                <div class="card">
                    <img class="card-img-top" src="{{asset('images/ios.png')}}" alt="Card image cap">
                    <p id="IosData" class=""></p>
                    <hr>
                    <button id="IosLinkBtn" class="btn btn-sm btn-brown">Edit Link</button>
                </div>
            </div>
        </div>
    </div>





    <!--Facebook Modal -->
    <div class="modal fade" id="FacebookModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Do you want to Update Facebook Link</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p id="FacebookModalCode"> </p>
                    <input id="FacebookLink" type="text" class="form-control mb-2">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button data-id=" " id="FacebookConfirmBtn" type="button" class="btn btn-sm btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>


    <!--Twitter Modal -->
    <div class="modal fade" id="TwitterModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Do you want to Update Twitter Link</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p id="TwitterModalCode"> </p>
                    <input id="TwitterLink" type="text" class="form-control mb-2">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button data-id=" " id="TwitterConfirmBtn" type="button" class="btn btn-sm btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>


    <!--Linkedin Modal -->
    <div class="modal fade" id="LinkedinModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Do you want to Update Linkedin Link</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p id="LinkedinModalCode"> </p>
                    <input id="LinkedinLink" type="text" class="form-control mb-2">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button data-id=" " id="LinkedinConfirmBtn" type="button" class="btn btn-sm btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>


    <!--Android Modal -->
    <div class="modal fade" id="AndroidModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Do you want to Update Android Link</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p id="AndroidModalCode"> </p>
                    <input id="AndroidLink" type="text" class="form-control mb-2">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button data-id=" " id="AndroidConfirmBtn" type="button" class="btn btn-sm btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>



    <!--Ios Modal -->
    <div class="modal fade" id="IosModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Do you want to Update Ios Link</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <p id="IosModalCode"> </p>
                    <input id="IosLink" type="text" class="form-control mb-2">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button data-id=" " id="IosConfirmBtn" type="button" class="btn btn-sm btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('script')

    <script type="text/javascript">

        $('#FacebookLinkBtn').click(function(){
            $('#FacebookModal').modal('show');
        });

        $('#TwitterLinkBtn').click(function(){
            $('#TwitterModal').modal('show');
        });

        $('#LinkedinLinkBtn').click(function(){
            $('#LinkedinModal').modal('show');
        });

        $('#AndroidLinkBtn').click(function(){
            $('#AndroidModal').modal('show');
        });

        $('#IosLinkBtn').click(function(){
            $('#IosModal').modal('show');
        });

        getSiteInfoData();

        $('#FacebookConfirmBtn').click(function(){

        });

        $('#TwitterConfirmBtn').click(function(){

        });

        $('#LinkedinConfirmBtn').click(function(){

        });

        $('#AndroidConfirmBtn').click(function(){

        });

        $('#IosConfirmBtn').click(function(){

        });

    </script>

@endsection

