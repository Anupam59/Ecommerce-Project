
//Get Product Data
function getProductData(){
    axios.get('/getProductData')
        .then(function (response) {
            if(response.status==200){

                $('#MainDiv').removeClass('d-none');
                $('#LoaderDiv').addClass('d-none');

                $('#ProductTableDt').DataTable().destroy();
                $('#product_table').empty();

                var JsonData = response.data;

                $.each(JsonData, function (i, item) {

                    $('<tr>').html(
                        '<th class="th-sm"><img class="table-img" src="'+JsonData[i].image+'"></th>' +
                        "<th class='th-sm'>" +
                        "<h6 class='mb-0'>"+JsonData[i].title+"</h6><br>" +
                        "Category :"+JsonData[i].category+"<br>" +
                        "Subcategory :"+JsonData[i].subcategory+"" +
                        "</th>" +
                        "<th class='th-sm'>" +
                        "Price :"+JsonData[i].price+"TK<br>" +
                        "Special price :"+JsonData[i].special_price+"TK" +
                        "</th>" +
                        "<th class='th-sm'>" +
                        '<a class="productDetailsBtn btn btn-success iconBtn" data-code="'+JsonData[i].product_code+'" data-category="'+JsonData[i].category+'"><i class="fas fa-edit"></i></a><br>' +
                        "<a class='productDeleteBtn btn btn-danger iconBtn' data-code='"+JsonData[i].product_code+"'><i class='fas fa-trash-alt'></i></a><br>" +
                        "</th>"
                    ).appendTo('#product_table');
                });

                //Contact Table Delete Icon Click
                $('.productDeleteBtn').click(function () {
                    let code = $(this).data('code');
                    let category = $(this).data('category');
                    // $('#serviceDeleteConfirmBtn').attr('data-id',id);
                    $('#DeleteModalCode').html(code);
                    $('#DeleteModal').modal('show');
                });


                //Product Table Edit Icon Click
                $('.productDetailsBtn').click(function () {
                    var code = $(this).data('code');
                    var category = $(this).data('category');
                    $('#EditModalId').html(code);
                    SelectOptionSubCategory(category);
                    $('#EditModal').modal('show');
                    SelectOptionCategory();
                    ProductUpdateDetails(code);
                });


                $('#ProductTableDt').DataTable({"order":false});
                $('.dataTables_length').addClass('bs-select');

            }
            else{
                $('#LoaderDiv').addClass('d-none');
                $('#WrongDiv').removeClass('d-none');
            }

        }).catch(function (error) {
        $('#LoaderDiv').addClass('d-none');
        $('#WrongDiv').removeClass('d-none');
    });
}

//Product Delete Yes Btn
$('#DeleteConfirmBtnProduct').click(function () {
    // var id = $(this).data('id');
    var code = $('#DeleteModalCode').html();
    getProductDelete(code);
});

//Product Edit Save Btn
$('#EditConfirmBtn').click(function () {
    //ProductDetails Model Catch
    var img1 =$('#img1').val();
    var img2 =$('#img2').val();
    var img3 =$('#img3').val();
    var img4 =$('#img4').val();
    var des =$('#ProductShortDescription').val();
    var color = $('#Color').val();
    var size =$('#Size').val();
    var details =$('#ProductDetails').val();


    //ProductList Model Catch
    var title =$('#ProductTitle').val();
    var price = $('#ProductPrice').val();
    var special_price =$('#ProductSpecialPrice').val();
    var image = $('#ProductFeatureImage').val();
    var category =$('#Category').val();
    var subcategory =$('#SubCategory').val();
    var remark =$('#Remark').val();
    var shop_name = $('#ShopName').val();
    var shop_code = $('#ShopCode').val();
    var brand = $('#BrandName').val();
    var star =$('#Star').val();
    var product_code = $('#ProductCode').val();
    ProductUpdate(img1,img2,img3,img4,des,color,size,details,title,price,special_price,image,category,subcategory,remark,shop_name,shop_code,brand,star,product_code);

});

// Get Product Delete Id Function
function getProductDelete(deleteCode){

    $('#DeleteConfirmBtnProduct').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...

    axios.post('/ProductDelete',{code:deleteCode})
        .then(function (response) {
            $('#DeleteConfirmBtnProduct').html("Yes");
            if(response.status==200){
                if (response.data==1) {
                    $('#DeleteModal').modal('hide');
                    getProductData();
                    toastr.success('Delete Success');
                } else {
                    $('#DeleteModal').modal('hide');
                    getProductData();
                    toastr.error('Delete Fail');
                }
            }else{
                $('#DeleteModal').modal('hide');
                getProductData();
                toastr.error('Something Went Wrong');
            }

        }).catch(function (error) {
        $('#DeleteModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#DeleteConfirmBtnProduct').html("Yes");
    });
}

// Product Update Details Show
function ProductUpdateDetails(EditCode){
    axios.post('/getProductDetails',{code:EditCode}).then(function (response) {
        if(response.status==200){
            $('#EditLoader').addClass('d-none');
            $('#EditForm').removeClass('d-none');

            var JsonData = response.data;
            //ProductDetails Model Catch
            $('#img1').val(JsonData[0].img1);
            $('#imgShow1').attr('src',JsonData[0].img1);
            $('#img2').val(JsonData[0].img2);
            $('#imgShow2').attr('src',JsonData[0].img2);
            $('#img3').val(JsonData[0].img3);
            $('#imgShow3').attr('src',JsonData[0].img3);
            $('#img4').val(JsonData[0].img4);
            $('#imgShow4').attr('src',JsonData[0].img4);
            $('#ProductShortDescription').val(JsonData[0].des);
            $('#Color').val(JsonData[0].color);
            $('#Size').val(JsonData[0].size);
            $('#ProductDetails').val(JsonData[0].details);
        }else{
            $('#EditLoader').addClass('d-none');
            $('#EditWrong').removeClass('d-none');
        }
    }).catch(function (error) {
        $('#EditLoader').addClass('d-none');
        $('#EditWrong').removeClass('d-none');
    });


    axios.post('/getProductList',{code:EditCode}).then(function (response) {
        if(response.status==200){
            $('#EditLoader').addClass('d-none');
            $('#EditForm').removeClass('d-none');

            var JsonData = response.data;
            //ProductList Model Catch
            $('#ProductTitle').val(JsonData[0].title);
            $('#ProductPrice').val(JsonData[0].price);
            $('#ProductSpecialPrice').val(JsonData[0].special_price);
            $('#ProductFeatureImage').val(JsonData[0].image);
            $('#ProductFeatureImageShow').attr('src',JsonData[0].image);
            $('#Category').val(JsonData[0].category);
            $('#SubCategory').val(JsonData[0].subcategory);
            $('#Remark').val(JsonData[0].remark);
            $('#ShopName').val(JsonData[0].shop_name);
            $('#ShopCode').val(JsonData[0].shop_code);
            $('#BrandName').val(JsonData[0].brand);
            $('#Star').val(JsonData[0].star);
            $('#ProductCode').val(JsonData[0].product_code);

        }else{
            $('#EditLoader').addClass('d-none');
            $('#EditWrong').removeClass('d-none');
        }
    }).catch(function (error) {
        $('#EditLoader').addClass('d-none');
        $('#EditWrong').removeClass('d-none');
    });

}

// Product Update Details
function ProductUpdate(img1,img2,img3,img4,des,color,size,details,title,price,special_price,image,category,subcategory,remark,shop_name,shop_code,brand,star,product_code){

    if(title.length==0){
        toastr.error('Product title is Empty');
    }else if(details.length==0){
        toastr.error('Product details is Empty');
    }else if(des.length==0){
        toastr.error('Product des is Empty');
    }else if(price.length==0){
        toastr.error('Product price is Empty');
    }else if(special_price.length==0){
        toastr.error('Product special_price is Empty');
    }else if(image.length==0){
        toastr.error('Product image is Empty');
    }else if(category==null){
        toastr.error('Product category is Empty');
    }else if(subcategory==null){
        toastr.error('Product subcategory is Empty');
    }else if(remark==null){
        toastr.error('Product remark is Empty');
    }else if(color.length==0){
        toastr.error('Product color is Empty');
    }else if(size.length==0){
        toastr.error('Product size is Empty');
    }else if(star==null){
        toastr.error('Product star is Empty');
    }else if(shop_name.length==0){
        toastr.error('Product shop_name is Empty');
    }else if(shop_code.length==0){
        toastr.error('Product shop_code is Empty');
    }else if(brand.length==0){
        toastr.error('Product brand is Empty');
    }else if(product_code.length==0){
        toastr.error('Product product_code is Empty');
    } else if(img1.length==0){
        toastr.error('Product img1 is Empty');
    }else if(img2.length==0){
        toastr.error('Product img2 is Empty');
    }else if(img3.length==0){
        toastr.error('Product img3 is Empty');
    }else if(img4.length==0){
        toastr.error('Product img4 is Empty');
    }else{

        $('#EditConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...

        axios.post('/ProductListUpdate',{
            title:title,
            price:price,
            special_price:special_price,
            image:image,
            category:category,
            subcategory:subcategory,
            remark:remark,
            shop_name:shop_name,
            shop_code:shop_code,
            brand:brand,
            star:star,
            product_code:product_code
        }).then(function (response) {
            $('#EditConfirmBtn').html("Save");
            if(response.status==200){
                getProductData();
            }else{
            }
        }).catch(function (error) {
        });


        axios.post('/ProductDetailsUpdate',{
            img1:img1,
            img2:img2,
            img3:img3,
            img4:img4,
            des:des,
            color:color,
            size:size,
            details:details,
            product_code:product_code
        }).then(function (response) {
            $('#EditConfirmBtn').html("Save");

            if(response.status==200){
                $('#EditModal').modal('hide');
                getProductData();
                toastr.success('Update Success');
            }else{
                $('#EditModal').modal('hide');
                toastr.error('Something Went Wrong');
            }
        }).catch(function (error) {
            $('#EditModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#EditConfirmBtn').html("Save");
        });
    }
}





//--------Add New Product part JS----------------
//Add New Product Btn Click
$('#addNewBtnID').click(function(){
    $('#AddModal').modal('show');
    AddSelectOptionCategory1();
});

//Add New Product  Btn
$('#AddConfirmBtn').click(function () {
    //ProductDetails Model Catch
    var img1 =$('#AddImg1').val();
    var img2 =$('#AddImg2').val();
    var img3 =$('#AddImg3').val();
    var img4 =$('#AddImg4').val();
    var des =$('#AddProductShortDescription').val();
    var color = $('#AddColor').val();
    var size =$('#AddSize').val();
    var details =$('#AddProductDetails').val();

    //ProductList Model Catch
    var title =$('#AddProductTitle').val();
    var price = $('#AddProductPrice').val();
    var special_price =$('#AddProductSpecialPrice').val();
    var image = $('#AddProductFeatureImage').val();
    var category =$('#AddCategory').val();
    var subcategory =$('#AddSubCategory').val();
    var remark =$('#AddRemark').val();
    var shop_name = $('#AddShopName').val();
    var shop_code = $('#AddShopCode').val();
    var brand = $('#AddBrandName').val();
    var star =$('#AddStar').val();
    var product_code = $('#AddProductCode').val();
    AddProduct(img1,img2,img3,img4,des,color,size,details,title,price,special_price,image,category,subcategory,remark,shop_name,shop_code,brand,star,product_code);
});

//Add New Product Function
function AddProduct(img1,img2,img3,img4,des,color,size,details,title,price,special_price,image,category,subcategory,remark,shop_name,shop_code,brand,star,product_code){

    if(title.length==0){
        toastr.error('Product title is Empty');
    }else if(details.length==0){
        toastr.error('Product details is Empty');
    }else if(des.length==0){
        toastr.error('Product des is Empty');
    }else if(price.length==0){
        toastr.error('Product price is Empty');
    }else if(special_price.length==0){
        toastr.error('Product special_price is Empty');
    }else if(image.length==0){
        toastr.error('Product image is Empty');
    }else if(category==null){
        toastr.error('Product category is Empty');
    }else if(subcategory==null){
        toastr.error('Product subcategory is Empty');
    }else if(remark==null){
        toastr.error('Product remark is Empty');
    }else if(color.length==0){
        toastr.error('Product color is Empty');
    }else if(size.length==0){
        toastr.error('Product size is Empty');
    }else if(star==null){
        toastr.error('Product star is Empty');
    }else if(shop_name.length==0){
        toastr.error('Product shop_name is Empty');
    }else if(shop_code.length==0){
        toastr.error('Product shop_code is Empty');
    }else if(brand.length==0){
        toastr.error('Product brand is Empty');
    }else if(product_code.length==0){
        toastr.error('Product product_code is Empty');
    } else if(img1.length==0){
        toastr.error('Product img1 is Empty');
    }else if(img2.length==0){
        toastr.error('Product img2 is Empty');
    }else if(img3.length==0){
        toastr.error('Product img3 is Empty');
    }else if(img4.length==0){
        toastr.error('Product img4 is Empty');
    }else{
        $('#AddConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...

        axios.post('/AddProductList',{
            title:title,
            price:price,
            special_price:special_price,
            image:image,
            category:category,
            subcategory:subcategory,
            remark:remark,
            shop_name:shop_name,
            shop_code:shop_code,
            brand:brand,
            star:star,
            product_code:product_code
        })
            .then(function (response) {
                $('#AddConfirmBtn').html("Add New");
                if(response.status==200){
                    getProductData();
                }else{

                }

            }).catch(function (error) {

        });


        axios.post('/AddProductDetails',{
            img1:img1,
            img2:img2,
            img3:img3,
            img4:img4,
            des:des,
            color:color,
            size:size,
            details:details,
            product_code:product_code
        })
            .then(function (response) {
                $('#addConfirmBtn').html("Add New");

                if(response.status==200){
                    $('#AddModal').modal('hide');
                    getProductData();
                    toastr.success('Add Success');
                }else{
                    $('#AddModal').modal('hide');
                    toastr.error('Something Went Wrong');
                }

            }).catch(function (error) {
            $('#AddModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#addConfirmBtn').html("Save");
        });

    }
}

// Add Select Option Category SubCategory
function AddSelectOptionCategory1(){

    axios.get('/SelectOptionCategory').then(function (response){
        var JsonData = response.data;
        $('#AddCategory').empty();
        $.each(JsonData, function (i, item) {
            $('<option value="'+JsonData[i].cat1_name+'">').html(
                JsonData[i].cat1_name
            ).appendTo('#AddCategory');
        });
        var category =$('#AddCategory').val();
        AddSelectOptionSubCategory(category);
    })

    $('#AddCategory').on('change',function (e){
        var CategoryName = e.target.value;
        axios.post('/SelectSubCategory',{'CategoryName':CategoryName}).then(function (response){
            var JsonData = response.data;
            $('#AddSubCategory').empty();
            $.each(JsonData, function (i, item) {
                $('<option value="'+JsonData[i].cat2_name+'">').html(
                    JsonData[i].cat2_name
                ).appendTo('#AddSubCategory');
            });
        })
    })
}

// Select Option Category SubCategory Details
function SelectOptionCategory(){

    axios.get('/SelectOptionCategory').then(function (response){
        var JsonData = response.data;
        $('#Category').empty();
        $.each(JsonData, function (i, item) {
            $('<option value="'+JsonData[i].cat1_name+'">').html(
                JsonData[i].cat1_name
            ).appendTo('#Category');
        });
    })

    $('#Category').on('change',function (e){
        var CategoryName = e.target.value;
        axios.post('/SelectSubCategory',{'CategoryName':CategoryName}).then(function (response){
            var JsonData = response.data;
            $('#SubCategory').empty();
            $.each(JsonData, function (i, item) {
                $('<option value="'+JsonData[i].cat2_name+'">').html(
                    JsonData[i].cat2_name
                ).appendTo('#SubCategory');
            });
        })
    })
}

// Add Select Option SubCategory Details
function AddSelectOptionSubCategory(category) {
    axios.get('/SelectOptionSubCategory').then(function (response) {
        var JsonData = response.data;
        $('#AddSubCategory').empty();

        $.each(JsonData, function (i, item) {

            if (category === JsonData[i].cat1_name) {
                $('<option value="' + JsonData[i].cat2_name + '">').html(
                    JsonData[i].cat2_name
                ).appendTo('#AddSubCategory');
            }
        });

    })
}


// Select Option SubCategory Details
function SelectOptionSubCategory(category) {
    axios.get('/SelectOptionSubCategory').then(function (response) {
        var JsonData = response.data;
        $('#SubCategory').empty();

        $.each(JsonData, function (i, item) {

            if (category === JsonData[i].cat1_name) {
                $('<option value="' + JsonData[i].cat2_name + '">').html(
                    JsonData[i].cat2_name
                ).appendTo('#SubCategory');
            }
        });

    })
}






//--------Edit Image part JS----------------
//Gallery Image main Click
$('#GalleryMainImage').click(function () {
    getMainPhoto();
    $('#GalleryMainImageModal').modal('show');
});
function getMainPhoto() {
    let URL="/PhotoJSON1";
    axios.get(URL).then(function (response) {
        $('.photoGalleyMainImage').empty();
        $.each(response.data, function(i, item) {
            $("<div class='col-3'>").html(
                "<img data-id="+ item['id']+" class='imgOnRow1' src=" + item['location'] + ">"+
                "<button data-id="+ item['id']+" data-photo="+ item['location']+" class='btn SelectPhoto btn-sm'> Select</button>"
            ).appendTo('.photoGalleyMainImage');
        })
        $('.SelectPhoto').on('click',function () {
            let photo=$(this).data('photo');
            $('#SelectedMainImage').attr('src',photo)
        })
    }).catch(function (error) {
    })
}
$('#GalleryMainImageSetBtn').click(function () {
    //ProductDetails Model Catch
    let photo=$('#SelectedMainImage').attr('src');
    $('#ProductFeatureImage').val(photo);
    $('#ProductFeatureImageShow').attr('src',photo);
    $('#GalleryMainImageModal').modal('hide');
});

//Gallery 1 Click
$('#Gallery1').click(function () {
    getPhoto1();
    $('#GalleryImage1Modal').modal('show');
});
function getPhoto1() {
    let URL="/PhotoJSON1";
    axios.get(URL).then(function (response) {
        $('.photoGalleyImage1').empty();
        $.each(response.data, function(i, item) {
            $("<div class='col-3'>").html(
                "<img data-id="+ item['id']+" class='imgOnRow1' src=" + item['location'] + ">"+
                "<button data-id="+ item['id']+" data-photo="+ item['location']+" class='btn SelectPhoto1 btn-sm'> Select</button>"
            ).appendTo('.photoGalleyImage1');
        })
        $('.SelectPhoto1').on('click',function () {
            let photo=$(this).data('photo');
            $('#SelectedImage1').attr('src',photo)
        })
    }).catch(function (error) {
    })
}
$('#GalleryImage1SetBtn').click(function () {
    //ProductDetails Model Catch
    let photo=$('#SelectedImage1').attr('src');
    $('#img1').val(photo);
    $('#imgShow1').attr('src',photo);
    $('#GalleryImage1Modal').modal('hide');
});

//Gallery 2 Click
$('#Gallery2').click(function () {
    getPhoto2();
    $('#GalleryImage2Modal').modal('show');
});
function getPhoto2() {
    let URL="/PhotoJSON1";
    axios.get(URL).then(function (response) {
        $('.photoGalleyImage2').empty();
        $.each(response.data, function(i, item) {
            $("<div class='col-3'>").html(
                "<img data-id="+ item['id']+" class='imgOnRow1' src=" + item['location'] + ">"+
                "<button data-id="+ item['id']+" data-photo="+ item['location']+" class='btn SelectPhoto2 btn-sm'> Select</button>"
            ).appendTo('.photoGalleyImage2');
        })
        $('.SelectPhoto2').on('click',function () {
            let photo=$(this).data('photo');
            $('#SelectedImage2').attr('src',photo)
        })
    }).catch(function (error) {
    })
}
$('#GalleryImage2SetBtn').click(function () {
    //ProductDetails Model Catch
    let photo=$('#SelectedImage2').attr('src');
    $('#img2').val(photo);
    $('#imgShow2').attr('src',photo);
    $('#GalleryImage2Modal').modal('hide');
});

//Gallery 3 Click
$('#Gallery3').click(function () {
    getPhoto3();
    $('#GalleryImage3Modal').modal('show');
});
function getPhoto3() {
    let URL="/PhotoJSON1";
    axios.get(URL).then(function (response) {
        $('.photoGalleyImage3').empty();
        $.each(response.data, function(i, item) {
            $("<div class='col-3'>").html(
                "<img data-id="+ item['id']+" class='imgOnRow1' src=" + item['location'] + ">"+
                "<button data-id="+ item['id']+" data-photo="+ item['location']+" class='btn SelectPhoto3 btn-sm'> Select</button>"
            ).appendTo('.photoGalleyImage3');
        })
        $('.SelectPhoto3').on('click',function () {
            let photo=$(this).data('photo');
            $('#SelectedImage3').attr('src',photo)
        })
    }).catch(function (error) {
    })
}
$('#GalleryImage3SetBtn').click(function () {
    //ProductDetails Model Catch
    let photo=$('#SelectedImage3').attr('src');
    $('#img3').val(photo);
    $('#imgShow3').attr('src',photo);
    $('#GalleryImage3Modal').modal('hide');
});

//Gallery 4 Click
$('#Gallery4').click(function () {
    getPhoto4();
    $('#GalleryImage4Modal').modal('show');
});
function getPhoto4() {
    let URL="/PhotoJSON1";
    axios.get(URL).then(function (response) {
        $('.photoGalleyImage4').empty();
        $.each(response.data, function(i, item) {
            $("<div class='col-3'>").html(
                "<img data-id="+ item['id']+" class='imgOnRow1' src=" + item['location'] + ">"+
                "<button data-id="+ item['id']+" data-photo="+ item['location']+" class='btn SelectPhoto4 btn-sm'> Select</button>"
            ).appendTo('.photoGalleyImage4');
        })
        $('.SelectPhoto4').on('click',function () {
            let photo=$(this).data('photo');
            $('#SelectedImage4').attr('src',photo)
        })
    }).catch(function (error) {
    })
}
$('#GalleryImage4SetBtn').click(function () {
    //ProductDetails Model Catch
    let photo=$('#SelectedImage4').attr('src');
    $('#img4').val(photo);
    $('#imgShow4').attr('src',photo);
    $('#GalleryImage4Modal').modal('hide');
});






//--------Add Image part JS----------------
//Product Add Gallery Image main Click
$('#AddGalleryMainImage').click(function () {
    getMainPhotoAdd();
    $('#AddGalleryMainImageModal').modal('show');
});
function getMainPhotoAdd() {
    let URL="/PhotoJSON1";
    axios.get(URL).then(function (response) {
        $('.AddPhotoGalleyMainImage').empty();
        $.each(response.data, function(i, item) {
            $("<div class='col-3'>").html(
                "<img data-id="+ item['id']+" class='imgOnRow1' src=" + item['location'] + ">"+
                "<button data-id="+ item['id']+" data-photo="+ item['location']+" class='btn AddSelectPhoto btn-sm'> Select</button>"
            ).appendTo('.AddPhotoGalleyMainImage');
        })
        $('.AddSelectPhoto').on('click',function () {
            let photo=$(this).data('photo');
            $('#AddSelectedMainImage').attr('src',photo)
        })
    }).catch(function (error) {
    })
}
$('#AddGalleryMainImageSetBtn').click(function () {
    //ProductDetails Model Catch
    let photo=$('#AddSelectedMainImage').attr('src');
    $('#AddProductFeatureImage').val(photo);
    $('#AddProductFeatureImageShow').attr('src',photo);
    $('#AddGalleryMainImageModal').modal('hide');
});

//Product Add Gallery 1 Click
$('#AddGallery1').click(function () {
    getPhoto1Add();
    $('#AddGalleryImage1Modal').modal('show');
});
function getPhoto1Add() {
    let URL="/PhotoJSON1";
    axios.get(URL).then(function (response) {
        $('.AddPhotoGalleyImage1').empty();
        $.each(response.data, function(i, item) {
            $("<div class='col-3'>").html(
                "<img data-id="+ item['id']+" class='imgOnRow1' src=" + item['location'] + ">"+
                "<button data-id="+ item['id']+" data-photo="+ item['location']+" class='btn AddSelectPhoto1 btn-sm'> Select</button>"
            ).appendTo('.AddPhotoGalleyImage1');
        })
        $('.AddSelectPhoto1').on('click',function () {
            let photo=$(this).data('photo');
            $('#AddSelectedImage1').attr('src',photo)
        })
    }).catch(function (error) {
    })
}
$('#AddGalleryImage1SetBtn').click(function () {
    //ProductDetails Model Catch
    let photo=$('#AddSelectedImage1').attr('src');
    $('#AddImg1').val(photo);
    $('#AddImgShow1').attr('src',photo);
    $('#AddGalleryImage1Modal').modal('hide');
});

//Product Add Gallery 2 Click
$('#AddGallery2').click(function () {
    getPhoto2Add();
    $('#AddGalleryImage2Modal').modal('show');
});
function getPhoto2Add() {
    let URL="/PhotoJSON1";
    axios.get(URL).then(function (response) {
        $('.AddPhotoGalleyImage2').empty();
        $.each(response.data, function(i, item) {
            $("<div class='col-3'>").html(
                "<img data-id="+ item['id']+" class='imgOnRow1' src=" + item['location'] + ">"+
                "<button data-id="+ item['id']+" data-photo="+ item['location']+" class='btn AddSelectPhoto2 btn-sm'> Select</button>"
            ).appendTo('.AddPhotoGalleyImage2');
        })
        $('.AddSelectPhoto2').on('click',function () {
            let photo=$(this).data('photo');
            $('#AddSelectedImage2').attr('src',photo)
        })
    }).catch(function (error) {
    })
}
$('#AddGalleryImage2SetBtn').click(function () {
    //ProductDetails Model Catch
    let photo=$('#AddSelectedImage2').attr('src');
    $('#AddImg2').val(photo);
    $('#AddImgShow2').attr('src',photo);
    $('#AddGalleryImage2Modal').modal('hide');
});

//Product Add Gallery 3 Click
$('#AddGallery3').click(function () {
    getPhoto3Add();
    $('#AddGalleryImage3Modal').modal('show');
});
function getPhoto3Add() {
    let URL="/PhotoJSON1";
    axios.get(URL).then(function (response) {
        $('.AddPhotoGalleyImage3').empty();
        $.each(response.data, function(i, item) {
            $("<div class='col-3'>").html(
                "<img data-id="+ item['id']+" class='imgOnRow1' src=" + item['location'] + ">"+
                "<button data-id="+ item['id']+" data-photo="+ item['location']+" class='btn AddSelectPhoto3 btn-sm'> Select</button>"
            ).appendTo('.AddPhotoGalleyImage3');
        })
        $('.AddSelectPhoto3').on('click',function () {
            let photo=$(this).data('photo');
            $('#AddSelectedImage3').attr('src',photo)
        })
    }).catch(function (error) {
    })
}
$('#AddGalleryImage3SetBtn').click(function () {
    //ProductDetails Model Catch
    let photo=$('#AddSelectedImage3').attr('src');
    $('#AddImg3').val(photo);
    $('#AddImgShow3').attr('src',photo);
    $('#AddGalleryImage3Modal').modal('hide');
});

//Product Add Gallery 4 Click
$('#AddGallery4').click(function () {
    getPhoto4Add();
    $('#AddGalleryImage4Modal').modal('show');
});
function getPhoto4Add() {
    let URL="/PhotoJSON1";
    axios.get(URL).then(function (response) {
        $('.AddPhotoGalleyImage4').empty();
        $.each(response.data, function(i, item) {
            $("<div class='col-3'>").html(
                "<img data-id="+ item['id']+" class='imgOnRow1' src=" + item['location'] + ">"+
                "<button data-id="+ item['id']+" data-photo="+ item['location']+" class='btn AddSelectPhoto4 btn-sm'> Select</button>"
            ).appendTo('.AddPhotoGalleyImage4');
        })
        $('.AddSelectPhoto4').on('click',function () {
            let photo=$(this).data('photo');
            $('#AddSelectedImage4').attr('src',photo)
        })
    }).catch(function (error) {
    })
}
$('#AddGalleryImage4SetBtn').click(function () {
    //ProductDetails Model Catch
    let photo=$('#AddSelectedImage4').attr('src');
    $('#AddImg4').val(photo);
    $('#AddImgShow4').attr('src',photo);
    $('#AddGalleryImage4Modal').modal('hide');
});
