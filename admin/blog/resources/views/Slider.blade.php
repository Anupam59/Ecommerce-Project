@extends('Layout.app')

@section('content')

    <div class="container">

        <!--Slider Table Div -->
        <div id="SliderMainDiv" class="container d-none">
            <div class="row">
                <div class="col-md-12 addButton">
                    <button id="AddNewSliderBtnID" class="btn btn-sm btn-danger ml-2">Add New Slider</button>
                </div>
                <div class="col-md-12 pt-0 pl-4 pr-4 pb-3">
                    <table id="SliderTableDt" class="table table-striped table-sm table-bordered" cellspacing="0" width="100%">
                        <thead>
                        <tr>
                            <th class="th-sm">Image</th>
                            <th class="th-sm">Title</th>
                            <th class="th-sm">Sub Title</th>
                            <th class="th-sm">Details</th>
                        </tr>
                        </thead>
                        <tbody id="Slider_Table">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Slider Loader Div -->
        <div id="SliderLoaderDiv" class="container">
            <div class="row">
                <div class="col-md-12 text-center mt-5 p-5">
                    <img class="loading-icon" src="{{asset('images/loader.svg')}}" alt="">
                </div>
            </div>
        </div>

        <!-- Slider Wrong Div -->
        <div id="SliderWrongDiv" class="container d-none">
            <div class="row">
                <div class="col-md-12 text-center p-5">
                    <h3>Something Went Wrong !</h3>
                </div>
            </div>
        </div>
    </div>


    <!--Slider Delete Modal -->
    <div class="modal fade" id="SliderDeleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                    <p id="SliderDeleteModalId"> </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button data-id=" " id="SliderDeleteConfirmBtn" type="button" class="btn btn-sm btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>


    <!--Slider Edit Modal -->
    <div class="modal fade" id="SliderEditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Slider Edit and Update</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p id="SliderEditModalId"> </p>

                    <div id="SliderEditForm" class="d-none">
                        <div class="row">
                            <div class="col-8">
                                <!-- Slider Title Id -->
                                <div class="form-outline mb-2">
                                    <label>Slider Title</label>
                                    <input type="text" id="SliderTitleId" class="form-control" placeholder="Course Name" />
                                </div>
                                <!-- Slider SubTitle Id -->
                                <div class="form-outline mb-2">
                                    <label>Slider SubTitle</label>
                                    <input type="text" id="SliderSubTitleId" class="form-control" placeholder="Course Description" />
                                </div>
                                <!-- Slider Image Id-->
                                <div class="form-outline mb-2">
                                    <label>Slider Image Link</label>
                                    <input type="text" id="SliderImageId" class="form-control" placeholder="Course Link" />
                                    <button class="mt-2 btn btn-sm btn-brown" id="GallerySliderImage">Gallery</button>
                                </div>
                                <img id="SliderImageShow" src="http://localhost/images/product1.jpg" class="card-img-top w-50" alt=" ">
                            </div>


                            <div class="col-4">
                                <!-- Slider Text Color Id -->
                                <div class="form-outline mb-2">
                                    <label>Slider Text Color</label>
                                    <input type="text" id="SliderTextColorId" class="form-control" placeholder="Course image link" />
                                </div>

                                <!-- Slider BgColor Id -->
                                <div class="form-outline mb-2">
                                    <label>Slider Background Color</label>
                                    <input type="text" id="SliderBgColorId" class="form-control" placeholder="Course image link" />
                                </div>

                                <!-- Slider Product Code Id -->
                                <div class="form-outline mb-2">
                                    <label>Slider Product Code</label>
                                    <input type="text" id="SliderProductCodeId" class="form-control" placeholder="Course image link" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="SliderEditLoader" class="col-md-12 text-center">
                        <img class="loading-icon" src="{{asset('images/loader.svg')}}" alt="">
                    </div>

                    <div id="SliderEditWrong" class="col-md-12 text-center d-none">
                        <h3>Something Went Wrong !</h3>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cancel</button>
                    <button data-id=" " id="SliderEditConfirmBtn" type="button" class="btn btn-sm btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>



    <!--Add Slider  Modal -->
    <div class="modal fade" id="AddSliderModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Slider</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <p id="AddSliderModalId"> </p>

                    <div id="AddSliderForm" class=" ">
                        <div class="row">
                            <div class="col-8">
                                <!-- Add Slider Title Id -->
                                <div class="form-outline mb-2">
                                    <label>Slider Title</label>
                                    <input type="text" id="AddSliderTitleId" class="form-control" placeholder="Course Name" />
                                </div>
                                <!-- Add Slider Sub Title Id -->
                                <div class="form-outline mb-2">
                                    <label>Slider SubTitle</label>
                                    <input type="text" id="AddSliderSubTitleId" class="form-control" placeholder="Course Description" />
                                </div>
                                <!-- Add Slider Image Id-->
                                <div class="form-outline mb-2">
                                    <label>Slider Image Link</label>
                                    <input type="text" id="AddSliderImageId" class="form-control" placeholder="Course Link" />
                                    <button class="mt-2 btn btn-sm btn-brown" id="AddGallerySliderImage">Gallery</button>
                                </div>
                                <img id="AddSliderImageShow" src="http://localhost/images/product1.jpg" class="card-img-top w-50" alt=" ">
                            </div>


                            <div class="col-4">
                                <!-- Add Slider Text Color Id -->
                                <div class="form-outline mb-2">
                                    <label>Slider Text Color</label>
                                    <input type="text" id="AddSliderTextColorId" class="form-control" placeholder="Course image link" />
                                </div>
                                <!-- Add Slider BgColor Id -->
                                <div class="form-outline mb-2">
                                    <label>Slider Background Color</label>
                                    <input type="text" id="AddSliderBgColorId" class="form-control" placeholder="Course image link" />
                                </div>
                                <!-- Add Slider Product Code Id -->
                                <div class="form-outline mb-2">
                                    <label>Slider Product Code</label>
                                    <input type="text" id="AddSliderProductCodeId" class="form-control" placeholder="Course image link" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cancel</button>
                    <button id="AddSliderConfirmBtn" type="button" class="btn btn-sm btn-primary">Add New</button>
                </div>
            </div>
        </div>
    </div>

    <!--Edit Gallery  Modal -->
    <div class="modal fade ModelZIndexTop" id="GallerySliderImageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> Gallery</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <div class="row">
                        <div class="col-8 OverFlowScroll">
                            <div class="row photoGalleySliderImage">

                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <div class="col flex-row">
                                        <img id="SelectedSliderImage" src="http://localhost/images/product1.jpg" class="card-img-top w-100" alt=" ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                        <button id="GallerySliderImageSetBtn" type="button" class="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Add Gallery  Modal -->
    <div class="modal fade ModelZIndexTop" id="AddGallerySliderImageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> Gallery</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center">
                    <div class="row">
                        <div class="col-8 OverFlowScroll">
                            <div class="row AddphotoGalleySliderImage">

                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <div class="col flex-row">
                                        <img id="AddSelectedSliderImage" src="http://localhost/images/product1.jpg" class="card-img-top w-100" alt=" ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                        <button id="AddGallerySliderImageSetBtn" type="button" class="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


@endsection

@section('script')

    <script type="text/javascript">
        getSliderData();
    </script>

@endsection
