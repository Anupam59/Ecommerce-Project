@extends('Layout.app')

@section('content')

    <div class="container">
        <div class="row mt-3">
            <!--Category part -->
            <div class="col-6">
                <div class="mb-3">
                    <label class="form-label">Add Category</label>
                    <input id="AddCategory" type="text" class="form-control" placeholder="Add Category">
                    <label class="form-label">Add Category Img url</label>
                    <input id="AddCategoryImg" type="text" class="form-control" placeholder="Add Category Img url">
                    <button id="AddCategoryBtn" class="btn btn-sm btn-danger">Add Category</button>
                </div>
                <hr/>
                <hr/>
                <div class="mb-3">
                    <label class="form-label">Category List</label>
                    <div id="CategoryList">

                    </div>
                </div>
            </div>

            <!--SubCategory part -->
            <div class="col-6">
                <div class="mb-3">
                    <label class="form-label">Category </label>
                    <select id="AddSubItemCategory" class="form-select w-100">

                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">Add SubCategory</label>
                    <input id="AddSubCategory" type="text" class="form-control" placeholder="Add SubCategory">
                    <button id="AddSubCategoryBtn" class="btn btn-sm btn-danger">Add SubCategory</button>
                </div>
                <hr/>
                <hr/>
                <div class="mb-3">
                    <label class="form-label">Category </label>
                    <select id="CategoryShow" class="form-select w-100">

                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">SubCategory List</label>
                    <div id="SubCategoryList">

                    </div>
                </div>
                <hr/>
                <hr/>
                <div class="mb-3">
                    <label class="form-label">Delete Category</label>
                    <select id="DeleteCategory" class="form-select w-100">

                    </select>
                    <button id="DeleteCategoryBtn" class="btn btn-sm btn-danger">Delete Category</button>
                </div>
                <hr/>
                <hr/>
                <div class="mb-3">
                    <label class="form-label">Delete SubCategory</label>
                    <div class="row">
                        <div class="col-6">
                            <select id="DeleteSubItemCategory" class="form-select w-100">

                            </select>
                        </div>
                        <div class="col-6">
                            <select id="DeleteSubCategory" class="form-select w-100">

                            </select>
                        </div>
                    </div>
                    <button id="DeleteSubCategoryBtn" class="btn btn-sm btn-danger">Delete SubCategory</button>
                </div>
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
                    <p id="DeleteModalCategory"> </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button id="DeleteConfirmBtnCategory" type="button" class="btn btn-sm btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>

    <!--Delete SubCategory Modal -->
    <div class="modal fade" id="DeleteSubCategoryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                    <p id="DeleteModalSubCategory"> </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">No</button>
                    <button id="DeleteSubCategoryConfirmBtn" type="button" class="btn btn-sm btn-primary">Yes</button>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('script')
    <script type="text/javascript">
         getCategory();
    </script>
@endsection
