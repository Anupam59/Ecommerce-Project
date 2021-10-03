//get Site Info Data
function getSiteInfoData(){
    axios.get('/getSiteInfoData').then(function (response){
        var JsonData = response.data;
        $('#AboutCompanyTextArea').val(JsonData[0].about_company);
        $('#AboutUsTextArea').val(JsonData[0].about);
        $('#AddressTextArea').val(JsonData[0].address);
        $('#DeliveryNoticeTextArea').val(JsonData[0].delivery_notice);
        $('#PrivacyPolicyTextArea').val(JsonData[0].ploicy);
        $('#PurchaseTextArea').val(JsonData[0].purchase_guide);
        $('#TermsTextArea').val(JsonData[0].terms);
        $('#FacebookLink').val(JsonData[0].facebook_link);
        $('#TwitterLink').val(JsonData[0].twitter_link);
        $('#LinkedinLink').val(JsonData[0].instagram_link);
        $('#AndroidLink').val(JsonData[0].android_app_link);
        $('#IosLink').val(JsonData[0].ios_app_link);
    }).cache(function (error){

    })
}






// About Us Confirm Btn
$('#AboutUsConfirmBtn').click(function(){
    let about = $('#AboutUsTextArea').val();
    AboutUsUpdate(about);
});
// AboutUs Update Details
function AboutUsUpdate(about) {
    $('#AboutUsConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/AboutUsUpdate', {
        about:about,
    }).then(function (response) {
        if (response.status == 200) {
            $('#AboutUsConfirmBtn').html("Yes");
            toastr.success('Update Success');
            $('#AboutUsModal').modal('hide');
        } else {
            $('#AboutUsModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#AboutUsConfirmBtn').html("Yes");
        }
    }).catch(function (error) {
        $('#AboutUsModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#AboutUsConfirmBtn').html("Save");
    });
}






// Privacy Policy Confirm Btn
$('#PrivacyPolicyConfirmBtn').click(function(){
    let ploicy = $('#PrivacyPolicyTextArea').val();
    PrivacyPolicyUpdate(ploicy);
});
// Privacy Policy Update
function PrivacyPolicyUpdate(ploicy) {
    $('#PrivacyPolicyConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/PrivacyPolicyUpdate', {
        ploicy:ploicy,
    }).then(function (response) {
        if (response.status == 200) {
            $('#PrivacyPolicyConfirmBtn').html("Yes");
            toastr.success('Update Success');
            $('#PrivacyPolicyModal').modal('hide');
        } else {
            $('#PrivacyPolicyModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#PrivacyPolicyConfirmBtn').html("Yes");
        }
    }).catch(function (error) {
        $('#PrivacyPolicyModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#PrivacyPolicyConfirmBtn').html("Save");
    });
}






// Purchase Confirm Btn
$('#PurchaseConfirmBtn').click(function(){
    let purchase_guide = $('#PurchaseTextArea').val();
    PurchaseUpdate(purchase_guide);
});
//  Purchase Update
function PurchaseUpdate(purchase_guide) {
    $('#PurchaseConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/PurchaseUpdate', {
        purchase_guide:purchase_guide,
    }).then(function (response) {
        if (response.status == 200) {
            $('#PurchaseConfirmBtn').html("Yes");
            toastr.success('Update Success');
            $('#PurchaseModal').modal('hide');
        } else {
            $('#PurchaseModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#PurchaseConfirmBtn').html("Yes");
        }
    }).catch(function (error) {
        $('#PurchaseModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#PurchaseConfirmBtn').html("Save");
    });
}





// Terms Confirm Btn
$('#TermsConfirmBtn').click(function(){
    let terms = $('#TermsTextArea').val();
    TermsUpdate(terms);
});
//  Terms Update
function TermsUpdate(terms) {
    $('#TermsConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/TermsUpdate', {
        terms:terms,
    }).then(function (response) {
        if (response.status == 200) {
            $('#TermsConfirmBtn').html("Yes");
            toastr.success('Update Success');
            $('#TermsModal').modal('hide');
        } else {
            $('#TermsModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#TermsConfirmBtn').html("Yes");
        }
    }).catch(function (error) {
        $('#TermsModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#TermsConfirmBtn').html("Save");
    });
}






// Address Confirm Btn
$('#AddressConfirmBtn').click(function(){
    let address = $('#AddressTextArea').val();
    AddressUpdate(address);
});
//  Address Update
function AddressUpdate(address) {
    $('#AddressConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/AddressUpdate', {
        address:address,
    }).then(function (response) {
        if (response.status == 200) {
            $('#AddressConfirmBtn').html("Yes");
            toastr.success('Update Success');
            $('#AddressModal').modal('hide');
        } else {
            $('#AddressModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#AddressConfirmBtn').html("Yes");
        }
    }).catch(function (error) {
        $('#AddressModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#AddressConfirmBtn').html("Save");
    });
}





// About Company Confirm Btn
$('#AboutCompanyConfirmBtn').click(function(){
    let about_company = $('#AboutCompanyTextArea').val();
    AboutCompanyUpdate(about_company);
});
//  About Company Update
function AboutCompanyUpdate(about_company) {
    $('#AboutCompanyConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/AboutCompanyUpdate', {
        about_company:about_company,
    }).then(function (response) {
        if (response.status == 200) {
            $('#AboutCompanyConfirmBtn').html("Yes");
            toastr.success('Update Success');
            $('#AboutCompanyModal').modal('hide');
        } else {
            $('#AboutCompanyModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#AboutCompanyConfirmBtn').html("Yes");
        }
    }).catch(function (error) {
        $('#AboutCompanyModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#AboutCompanyConfirmBtn').html("Save");
    });
}





// Delivery Notice Confirm Btn
$('#DeliveryNoticeConfirmBtn').click(function(){
    let delivery_notice = $('#DeliveryNoticeTextArea').val();
    DeliveryNoticeUpdate(delivery_notice);
});
//  Delivery Notice Update
function DeliveryNoticeUpdate(delivery_notice) {
    $('#DeliveryNoticeConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/DeliveryNoticeUpdate', {
        delivery_notice:delivery_notice,
    }).then(function (response) {
        if (response.status == 200) {
            $('#DeliveryNoticeConfirmBtn').html("Yes");
            toastr.success('Update Success');
            $('#DeliveryNoticeModal').modal('hide');
        } else {
            $('#DeliveryNoticeModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#DeliveryNoticeConfirmBtn').html("Yes");
        }
    }).catch(function (error) {
        $('#DeliveryNoticeModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#DeliveryNoticeConfirmBtn').html("Save");
    });
}





// Facebook Confirm Btn
$('#FacebookConfirmBtn').click(function(){
    let facebook_link = $('#FacebookLink').val();
    FacebookLinkUpdate(facebook_link);
});
//  Facebook Link Update
function FacebookLinkUpdate(facebook_link) {
    $('#FacebookConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/FacebookLinkUpdate', {
        facebook_link:facebook_link,
    }).then(function (response) {
        if (response.status == 200) {
            $('#FacebookConfirmBtn').html("Yes");
            toastr.success('Update Success');
            $('#FacebookModal').modal('hide');
        } else {
            $('#FacebookModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#FacebookConfirmBtn').html("Yes");
        }
    }).catch(function (error) {
        $('#FacebookModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#FacebookConfirmBtn').html("Save");
    });
}




// Twitter Confirm Btn
$('#TwitterConfirmBtn').click(function(){
    let twitter_link = $('#TwitterLink').val();
    TwitterLinkUpdate(twitter_link);
});
//  Twitter Link Update
function TwitterLinkUpdate(twitter_link) {
    $('#TwitterConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/TwitterLinkUpdate', {
        twitter_link:twitter_link,
    }).then(function (response) {
        if (response.status == 200) {
            $('#TwitterConfirmBtn').html("Yes");
            toastr.success('Update Success');
            $('#TwitterModal').modal('hide');
        } else {
            $('#TwitterModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#TwitterConfirmBtn').html("Yes");
        }
    }).catch(function (error) {
        $('#TwitterModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#TwitterConfirmBtn').html("Save");
    });
}




// Linkedin Confirm Btn
$('#LinkedinConfirmBtn').click(function(){
    let instagram_link = $('#LinkedinLink').val();
    LinkedinLinkUpdate(instagram_link);
});
//  Linkedin Link Update
function LinkedinLinkUpdate(instagram_link) {
    $('#LinkedinConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/LinkedinLinkUpdate', {
        instagram_link:instagram_link,
    }).then(function (response) {
        if (response.status == 200) {
            $('#LinkedinConfirmBtn').html("Yes");
            toastr.success('Update Success');
            $('#LinkedinModal').modal('hide');
        } else {
            $('#LinkedinModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#LinkedinConfirmBtn').html("Yes");
        }
    }).catch(function (error) {
        $('#LinkedinModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#LinkedinConfirmBtn').html("Save");
    });
}





// Android Confirm Btn
$('#AndroidConfirmBtn').click(function(){
    let android_app_link = $('#AndroidLink').val();
    AndroidLinkUpdate(android_app_link);
});
//  Android Link Update
function AndroidLinkUpdate(android_app_link) {
    $('#AndroidConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/AndroidLinkUpdate', {
        android_app_link:android_app_link,
    }).then(function (response) {
        if (response.status == 200) {
            $('#AndroidConfirmBtn').html("Yes");
            toastr.success('Update Success');
            $('#AndroidModal').modal('hide');
        } else {
            $('#AndroidModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#AndroidConfirmBtn').html("Yes");
        }
    }).catch(function (error) {
        $('#AndroidModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#AndroidConfirmBtn').html("Save");
    });
}




// Ios Confirm Btn
$('#IosConfirmBtn').click(function(){
    let ios_app_link = $('#IosLink').val();
    IosLinkUpdate(ios_app_link);
});
//  Ios Link Update
function IosLinkUpdate(ios_app_link) {
    $('#IosConfirmBtn').html("<div class='spinner-border spinner-border-sm' role='status'></div>"); //Animation...
    axios.post('/IosLinkUpdate', {
        ios_app_link:ios_app_link,
    }).then(function (response) {
        if (response.status == 200) {
            $('#IosConfirmBtn').html("Yes");
            toastr.success('Update Success');
            $('#IosModal').modal('hide');
        } else {
            $('#IosModal').modal('hide');
            toastr.error('Something Went Wrong');
            $('#IosConfirmBtn').html("Yes");
        }
    }).catch(function (error) {
        $('#IosModal').modal('hide');
        toastr.error('Something Went Wrong');
        $('#IosConfirmBtn').html("Save");
    });
}
