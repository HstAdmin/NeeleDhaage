
function addToCart(customerid, varientId) {
    if (customerid > 0 && varientId > 0) {
        /*buttonLoadingStart($(btn));*/
        ajaxGet('/shoppingcart/AddCart', { varientId: varientId }, function (data) {
            //$('#div-admission').html(data);
            //$('#ActionType').val(isApplyNow ? 2 : 3);//apply now/add to cart
            //$('#modal-admission').modal('show');
            /*buttonLoadingEnd($(btn));*/
        })
    }
    else {
        toastr.error('You are not logged in.');
    }
}
function removeFromCart(customerid, varientId) {
    if (customerid > 0 && varientId > 0) {
        /*buttonLoadingStart($(btn));*/
        ajaxGet('/shoppingcart/RemoveCart', { varientId: varientId }, function (data) {
        })

    }
    else {
        toastr.error('You are not logged in.');
    }
}
function buttonLoadingEnd(button) {
    if (button) {
        button.find('.fa-spinner').remove();
        button.prop('disabled', false);
    }
}
function buttonLoadingStart(button) {
    if (button) {
        button.html('<i class="fa fa-spinner fa-pulse fa-fw loader mr-1"></i>' + button.html());
        button.prop('disabled', true);
    }
}