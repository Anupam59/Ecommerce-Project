@extends('Layout.app')

@section('content')

    <!--Product Table Div -->
    <div class="container">
        <div class="row">
            <div class="col-md-12 addButton">
                <button id="addNewBtnID" class="btn btn-sm btn-danger">Add New Service</button>
            </div>
            <div class="col-md-12 p-5">
                <table id="ProductTableDt" class="table table-striped table-sm table-bordered" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th class="th-sm">Image</th>
                        <th class="th-sm">Product Title</th>
                        <th class="th-sm">price</th>
                        <th class="th-sm">Details</th>
                    </tr>
                    </thead>
                    <tbody id="product_table">

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
                    <p id="DeleteModalCode"> </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button data-id=" " id="DeleteConfirmBtnProduct" type="button" class="btn btn-sm btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>

    <!--Product Edit Modal -->
    <div class="modal fade" id="EditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                    <p id="EditModalId"> </p>

                    <div class="row d-none" id="EditForm">
                        <div class="col-8">
                            <div class="mb-3">
                                <label class="form-label">Product Title</label>
                                <input id="ProductTitle" type="text" class="form-control" placeholder="Product Title">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Short Description</label>
                                <input id="ProductShortDescription" type="text" class="form-control" placeholder="Short Description">
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Choose Feature Image</label>
                                <input id="ProductFeatureImage" type="text" class="form-control" placeholder="Image URL">
                                <button class="mt-2 btn btn-sm btn-brown" id="GalleryMainImage">Gallery</button>
                            </div>

                            <img id="ProductFeatureImageShow" src="{{asset('images/default-image.png')}}" class="card-img-top w-50" alt=" ">

                            <div class="mt-3 mb-3">
                                <label class="form-label">Details</label>
                                <textarea id="ProductDetails" class="form-control" style="visibility:visible !important; display: block !important;" name="editor1"></textarea>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <label class="form-label">Product Price</label>
                                    <input id="ProductPrice" type="text" class="form-control" placeholder="Price">
                                </div>
                                <div class="col">
                                    <label class="form-label">Product Special Price</label>
                                    <input id="ProductSpecialPrice" type="text" class="form-control" placeholder="Special Price">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <label class="form-label">Shop Name</label>
                                    <input id="ShopName" type="text" class="form-control" placeholder="Shop Name">
                                </div>
                                <div class="col">
                                    <label class="form-label">Shop Code</label>
                                    <input id="ShopCode" type="text" class="form-control" placeholder="Shop Code">
                                </div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="mb-3">
                                <label id="CategoryName">Category </label>
                                <select id="Category" class="form-select w-100">

                                </select>
                            </div>
                            <div class="mb-3">
                                <label id="SubCategoryName">SubCategory </label>
                                <select id="SubCategory" class="form-select w-100">

                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Remark</label>
                                <select id="Remark" class="form-select w-100">
                                    <option value="Featured">Featured</option>
                                    <option value="Collection">Collection</option>
                                    <option value="New">New</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Star</label>
                                <select id="Star" class="form-select w-100">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                                <div class="mb-3">
                                    <div class="form-text">Insert Individual Product Code</div>
                                    <input id="ProductCode" type="text" class="form-control" placeholder="Product Code">
                                </div>
                                <div class="mb-3">
                                    <div  class="form-text">Insert Your Brand Name</div>
                                    <input id="BrandName" type="text" class="form-control" placeholder="Brand Name">
                                </div>
                                <div class="mb-3">
                                    <div class="form-text">Color Insert Ex: Red,Green,blue</div>
                                    <input id="Color" type="text" class="form-control" placeholder="Color">
                                </div>
                                <div class="mb-3">
                                    <div class="form-text">Size Insert Ex: M,L,XL,XXL</div>
                                    <input id="Size" type="text" class="form-control" placeholder="Size">
                                </div>
                            <div class="mb-4">
                                <label class="form-label">Select Image</label>
                                <input id="img1" type="text" class="form-control mb-2">
                                <button class="mt-2 btn btn-sm btn-brown" id="Gallery1">Image 1</button>
                                <input id="img2" type="text" class="form-control mb-2">
                                <button class="mt-2 btn btn-sm btn-brown" id="Gallery2">Image 2</button>
                                <input id="img3" type="text" class="form-control mb-2">
                                <button class="mt-2 btn btn-sm btn-brown" id="Gallery3">Image 3</button>
                                <input id="img4" type="text" class="form-control mb-2">
                                <button class="mt-2 btn btn-sm btn-brown" id="Gallery4">Image 4</button>
                            </div>

                            <div class="row mb-3">
                                <div class="col-6">
                                    <img id="imgShow1" src="{{asset('images/default-image.png')}}" class="card-img-top" alt=" ">
                                </div>
                                <div class="col-6">
                                    <img id="imgShow2" src="{{asset('images/default-image.png')}}" class="card-img-top" alt=" ">
                                </div>
                                <div class="col-6">
                                    <img id="imgShow3" src="{{asset('images/default-image.png')}}" class="card-img-top" alt=" ">
                                </div>
                                <div class="col-6">
                                    <img id="imgShow4" src="{{asset('images/default-image.png')}}" class="card-img-top" alt=" ">
                                </div>
                            </div>

                        </div>
                    </div>
                    <div id="EditLoader" class="col-md-12 text-center">
                        <img class="loading-icon" src="{{asset('images/loader.svg')}}" alt="">
                    </div>
                    <div id="EditWrong" class="col-md-12 text-center d-none">
                        <h3>Something Went Wrong !</h3>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cancel</button>
                    <button id="EditConfirmBtn" type="button" class="btn btn-sm btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>

    <!--Product Add Modal -->
    <div class="modal fade" id="AddModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Product</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row" id="AddForm">
                        <div class="col-8">
                            <div class="mb-3">
                                <label class="form-label">Product Title</label>
                                <input id="AddProductTitle" type="text" class="form-control" placeholder="Product Title">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Short Description</label>
                                <input id="AddProductShortDescription" type="text" class="form-control" placeholder="Short Description">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Feature Image</label>
                                <input id="AddProductFeatureImage" type="text" class="form-control" placeholder="Image URL">
                                <button class="mt-2 btn btn-sm btn-brown" id="AddGalleryMainImage">Gallery</button>
                            </div>
                            <img id="AddProductFeatureImageShow" src="{{asset('images/default-image.png')}}" class="card-img-top w-50" alt=" ">
                            <div class="mt-3 mb-3">
                                <label class="form-label">Details</label>
                                <textarea id="AddProductDetails" class="form-control" style="visibility:visible !important; display: block !important;" name="editor1"></textarea>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <label class="form-label">Product Price</label>
                                    <input id="AddProductPrice" type="text" class="form-control" placeholder="Price">
                                </div>
                                <div class="col">
                                    <label class="form-label">Product Special Price</label>
                                    <input id="AddProductSpecialPrice" type="text" class="form-control" placeholder="Special Price">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <label class="form-label">Shop Name</label>
                                    <input id="AddShopName" type="text" class="form-control" placeholder="Shop Name">
                                </div>
                                <div class="col">
                                    <label class="form-label">Shop Code</label>
                                    <input id="AddShopCode" type="text" class="form-control" placeholder="Shop Code">
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-3">
                                <label id="CategoryName">Category </label>
                                <select id="AddCategory" class="form-select w-100">

                                </select>
                            </div>
                            <div class="mb-3">
                                <label id="SubCategoryName">SubCategory </label>
                                <select id="AddSubCategory" class="form-select w-100">

                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Remark</label>
                                <select id="AddRemark" class="form-select w-100">
                                    <option value="Featured">Featured</option>
                                    <option value="Collection">Collection</option>
                                    <option value="New">New</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Star</label>
                                <select id="AddStar" class="form-select w-100">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <div class="form-text">Insert Individual Product Code</div>
                                <input id="AddProductCode" type="text" class="form-control" placeholder="Product Code">
                            </div>
                            <div class="mb-3">
                                <div  class="form-text">Insert Your Brand Name</div>
                                <input id="AddBrandName" type="text" class="form-control" placeholder="Brand Name">
                            </div>
                            <div class="mb-3">
                                <div class="form-text">Color Insert Ex: Red,Green,blue</div>
                                <input id="AddColor" type="text" class="form-control" placeholder="Color">
                            </div>
                            <div class="mb-3">
                                <div class="form-text">Size Insert Ex: M,L,XL,XXL</div>
                                <input id="AddSize" type="text" class="form-control" placeholder="Size">
                            </div>
                            <div class="mb-4">
                                <label class="form-label">Select Image</label>
                                <input id="AddImg1" type="text" class="form-control mb-2">
                                <button class="mt-2 btn btn-sm btn-brown" id="AddGallery1">Image 1</button>
                                <input id="AddImg2" type="text" class="form-control mb-2">
                                <button class="mt-2 btn btn-sm btn-brown" id="AddGallery2">Image 2</button>
                                <input id="AddImg3" type="text" class="form-control mb-2">
                                <button class="mt-2 btn btn-sm btn-brown" id="AddGallery3">Image 3</button>
                                <input id="AddImg4" type="text" class="form-control mb-2">
                                <button class="mt-2 btn btn-sm btn-brown" id="AddGallery4">Image 4</button>
                            </div>

                            <div class="row mb-3">
                                <div class="col-6">
                                    <img id="AddImgShow1" src="{{asset('images/default-image.png')}}" class="card-img-top" alt=" ">
                                </div>
                                <div class="col-6">
                                    <img id="AddImgShow2" src="{{asset('images/default-image.png')}}" class="card-img-top" alt=" ">
                                </div>
                                <div class="col-6">
                                    <img id="AddImgShow3" src="{{asset('images/default-image.png')}}" class="card-img-top" alt=" ">
                                </div>
                                <div class="col-6">
                                    <img id="AddImgShow4" src="{{asset('images/default-image.png')}}" class="card-img-top" alt=" ">
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cancel</button>
                    <button id="AddConfirmBtn" type="button" class="btn btn-sm btn-primary">Add New</button>
                </div>
            </div>
        </div>
    </div>





    <!--Image Edit Model part -->
    <!--Gallery Main Image Modal -->
    <div class="modal fade ModelZIndexTop" id="GalleryMainImageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                            <div class="row photoGalleyMainImage">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <div class="col flex-row">
                                        <img id="SelectedMainImage" src="http://localhost/images/product1.jpg" class="card-img-top w-100" alt=" ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                        <button id="GalleryMainImageSetBtn" type="button" class="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Gallery 1 Image Modal -->
    <div class="modal fade ModelZIndexTop" id="GalleryImage1Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                            <div class="row photoGalleyImage1">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <div class="col flex-row">
                                        <img id="SelectedImage1" src="http://localhost/images/product1.jpg" class="card-img-top w-100" alt=" ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                        <button id="GalleryImage1SetBtn" type="button" class="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Gallery 2 Image Modal -->
    <div class="modal fade ModelZIndexTop" id="GalleryImage2Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                            <div class="row photoGalleyImage2">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <div class="col flex-row">
                                        <img id="SelectedImage2" src="http://localhost/images/product1.jpg" class="card-img-top w-100" alt=" ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                        <button id="GalleryImage2SetBtn" type="button" class="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Gallery 3 Image Modal -->
    <div class="modal fade ModelZIndexTop" id="GalleryImage3Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                            <div class="row photoGalleyImage3">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <div class="col flex-row">
                                        <img id="SelectedImage3" src="http://localhost/images/product1.jpg" class="card-img-top w-100" alt=" ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                        <button id="GalleryImage3SetBtn" type="button" class="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Gallery 4 Image Modal -->
    <div class="modal fade ModelZIndexTop" id="GalleryImage4Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                            <div class="row photoGalleyImage4">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <div class="col flex-row">
                                        <img id="SelectedImage4" src="http://localhost/images/product1.jpg" class="card-img-top w-100" alt=" ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                        <button id="GalleryImage4SetBtn" type="button" class="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>




    <!--Image Add Model part -->
    <!--Product Add Gallery Main Image Modal -->
    <div class="modal fade ModelZIndexTop" id="AddGalleryMainImageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                            <div class="row AddPhotoGalleyMainImage">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <div class="col flex-row">
                                        <img id="AddSelectedMainImage" src="http://localhost/images/product1.jpg" class="card-img-top w-100" alt=" ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                        <button id="AddGalleryMainImageSetBtn" type="button" class="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Product Add Gallery 1 Image Modal -->
    <div class="modal fade ModelZIndexTop" id="AddGalleryImage1Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                            <div class="row AddPhotoGalleyImage1">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <div class="col flex-row">
                                        <img id="AddSelectedImage1" src="http://localhost/images/product1.jpg" class="card-img-top w-100" alt=" ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                        <button id="AddGalleryImage1SetBtn" type="button" class="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Product Add Gallery 2 Image Modal -->
    <div class="modal fade ModelZIndexTop" id="AddGalleryImage2Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                            <div class="row AddPhotoGalleyImage2">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <div class="col flex-row">
                                        <img id="AddSelectedImage2" src="http://localhost/images/product1.jpg" class="card-img-top w-100" alt=" ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                        <button id="AddGalleryImage2SetBtn" type="button" class="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Product Add Gallery 3 Image Modal -->
    <div class="modal fade ModelZIndexTop" id="AddGalleryImage3Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                            <div class="row AddPhotoGalleyImage3">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <div class="col flex-row">
                                        <img id="AddSelectedImage3" src="http://localhost/images/product1.jpg" class="card-img-top w-100" alt=" ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                        <button id="AddGalleryImage3SetBtn" type="button" class="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Product Add Gallery 4 Image Modal -->
    <div class="modal fade ModelZIndexTop" id="AddGalleryImage4Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                            <div class="row AddPhotoGalleyImage4">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="row">
                                <div class="col">
                                    <div class="col flex-row">
                                        <img id="AddSelectedImage4" src="http://localhost/images/product1.jpg" class="card-img-top w-100" alt=" ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                        <button id="AddGalleryImage4SetBtn" type="button" class="btn btn-sm btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>



@endsection

@section('script')

    <script type="text/javascript">
        getProductData();
    </script>

@endsection
