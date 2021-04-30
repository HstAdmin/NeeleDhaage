//$('body').delegate('.heart', 'click', function () {
//    var slug = $(this).data('id');

//    var url = $(this).data('url');
//    var myurl = url;

//    $.ajax({

//        url: myurl,
//        type: "GET",
//        dataType: 'JSON',
//        data: {

//            '_token': $('input[name=_token]').val(),


//        },
//        success: function (response) {
//            if (response.success == true) {
//                toastr[response.status]("Successfully Added In Wishlist", "Notifications");
//                $('.heart_inactive_' + slug).attr('src', addurl);
//                $('.heart_inactive_' + slug).attr('class', 'heart_active_' + slug);
//            }
//            else {
//                toastr[response.status]("Successfully Remove From Wishlist", "Notifications");
//                $('.heart_active_' + slug).attr('src', removeurl);
//                $('.heart_active_' + slug).attr('class', 'heart_inactive_' + slug);
//            }
//            $('.wishlistcount').html();
//            $('.wishlistcount').html(response.total_count);




//        },
//        error: function (response) {
//            if (response.status == 401)
//                window.location.href = login;
//        }



//    });



//});

//$('body').delegate('.add-to-fav', 'click', function () {
//    var slug = $(this).data('id');
//    var url = $(this).data('url');
//    var myurl = url;
//    $.ajax({
//        url: myurl,
//        type: "GET",
//        dataType: 'JSON',
//        data: {
//            '_token': $('input[name=_token]').val(),
//        },
//        success: function (response) {
//            if (response.success == true) {
//                toastr[response.status]("Successfully Added In Wishlist", "Notifications");
//                $('.add-to-fav').addClass('active');
//                //~ $('.heart_inactive_'+slug).attr('src',addurl);
//                //~ $('.heart_inactive_'+slug).attr('class','heart_active_'+slug);
//            }
//            else {
//                toastr[response.status]("Successfully Remove From Wishlist", "Notifications");
//                $('.add-to-fav').removeClass('active');
//                //~ $('.heart_active_'+slug).attr('src',removeurl);
//                //~ $('.heart_active_'+slug).attr('class','heart_inactive_'+slug);
//            }

//        },
//        error: function (response) {
//            if (response.status == 401)
//                window.location.href = login;
//        }
//    });
//});


$('.product-input').change(function () {
    $('#pleaseWaitDialog').modal();

    var price = $('input[name="price_type"]:checked').val();
    var fabrics = $('input[name="fabric[]"]:checked').map(function (m) { return $(this).val() }).get();
    var crafts = $('input[name="craft[]"]:checked').map(function (m) { return $(this).val() }).get();
    var colors = $('input[name="color[]"]:checked').map(function (m) { return $(this).val() }).get();
    var tags = [];
    tags = tags.concat(fabrics);
    tags = tags.concat(crafts);
    tags = tags.concat(colors);

    $.ajax({
        url: '/Shop/ProductList',
        type: "POST",
        data: { CategoryId: $('#hdnCategoryId').val(), ProdcutPrices: price, ProdcutTags: tags },
        //dataType: "json",
        //beforeSend: function () {
        //    $("#loading-overlay").show();
        //},
        success: function (data) {

            $('#div-product-list').html(data);
            //$('#no_of_product').html(data.countnew);

        },
        complete: function () {
            $('#pleaseWaitDialog').modal('hide');
        },

    });


});



$(document).on('keydown', '#count', function (e) {
    if (e.keyCode == 38) {
        var qty = parseInt($(this).val());
        if (qty < 99) {
            qty = qty + 1;
            $(this).val(qty);
        }
    }
    if (e.keyCode == 40) {
        var qty = parseInt($(this).val());
        if (qty > 1) {
            qty = qty - 1;
            $(this).val(qty);
        }
    }
});
