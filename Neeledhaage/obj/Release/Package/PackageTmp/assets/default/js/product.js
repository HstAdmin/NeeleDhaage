$(document).on('submit','#register',function( event ) {

	var formid = '#register';
	 event.preventDefault();
		$.ajax({
		url : $(this).attr('action'),
		type: "POST",
		data: $('#register').serialize(),
		dataType: 'json',
		 beforeSend:function(){

			$('.formmessage').remove();
			$(formid).find("input[type=submit]").attr("disabled", "disabled");
			$(formid).find("button[type=submit]").attr("disabled", "disabled");
			
			}
			,
		success: function(response) {
				//toastr[response.status](response.message, "Notifications");
				$(formid).find("input[type=submit]").removeAttr("disabled");
				$(formid).find("button[type=submit]").removeAttr("disabled");
				$('#signin_tab').removeClass('active');
				$('#signin_div').css({'display':'none'});
				$('#signin_tab a span').html('<button class="edit_sign_in pull-right btn btn-primary btn-sm" id="signin_box"> Change</button>');
				
				$('#billing_tab').addClass('active');
				if(response.register=="guest")
				{
					$('#register-form').removeAttr('style');
					$('#passw').css({'display':'none'});
				}
				else{
					$('#register-form').removeAttr('style');		
					$('#passw').removeAttr('style');		
				}
				
				$('#billing_div').removeAttr('style');		
			
		},
		error: function(response) {
			$(formid).find("input[type=submit]").removeAttr("disabled");
			$(formid).find("button[type=submit]").removeAttr("disabled");
			var data = response.responseJSON;
                       $.each(data, function( key, value ) {
                      console.log(key + " => " + value);
                      
                      var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      $('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').addClass('inputTxtError').after(msg);

                 });
		}
	});
});

$(document).on('submit','#checkoutLogin',function( event ) {

		var formid = '#checkoutLogin';
		event.preventDefault();
		$.ajax({
		url : $(this).attr('action'),
		type: "POST",
		data: $('#checkoutLogin').serialize(),
		dataType: 'json',
		 beforeSend:function(){

			$('.formmessage').remove();
			$(formid).find("input[type=submit]").attr("disabled", "disabled");
			$(formid).find("button[type=submit]").attr("disabled", "disabled");
			$(formid).find('.box-placeholder').removeClass('box-placeholder');
			$(formid).find('.alert').removeClass('alert-info').removeClass('alert-success').removeClass('alert-danger').fadeIn(200);
			$(formid).find('.alert').addClass('alert-info');
			$(formid).find('.alert').show();
			$(formid).find('.ajax_message').html('<strong>Please Wait ! <i class="fa fa-spinner fa-spin" aria-hidden="true"></i></strong>');

			}
			,
		success: function(response) {
			
			$(formid).find("input[type=submit]").removeAttr("disabled");
			$(formid).find("button[type=submit]").removeAttr("disabled");
			
			if(response.success)
			{	
				toastr[response.status](response.message, "Notifications");
				$(formid).find('.alert').fadeIn();
				$(formid).find('.alert').addClass('alert-success').children('.ajax_message').html(response.message);
			}
			else
			{
				$(formid).find('.alert').fadeIn();
				$(formid).find('.alert').addClass('alert-danger').children('.ajax_message').html(response.message);
			}
			
				
			if(response.login_step)
			{
				//alert('loginstep');
				$('#signin_tab').removeClass('active');
				$('#signin_div').css({'display':'none'});
				$('#signin_tab a span').html('<button class="edit_sign_in pull-right btn btn-primary btn-sm" id="signin_box"> Change</button>');
				
				$('#billing_tab').addClass('active');
				$('#billing_div').removeAttr('style');
				
			}	
			
			if(response.resetform)
			$(formid).resetForm();
			
			if(response.selfReload)
			window.location.reload();


		},
		error: function(response) {
			
			$(formid).find('.alert').fadeOut(100);
			$(formid).find("input[type=submit]").removeAttr("disabled");
			$(formid).find("button[type=submit]").removeAttr("disabled");
			$(formid).find('.alert').fadeIn();
			$(formid).find('.alert').addClass('alert-danger').children('.ajax_message').html('OOps Some Error Occured!!');
			
			var data = response.responseJSON;
                       $.each(data, function( key, value ) {
                      console.log(key + " => " + value);
                      
                      if (!/\brequired\b/.test(value))
						{
					  		$(formid).find('.ajax_message').append('<br>'+value);
						} 
                      
                      var placeH	=value;						
						$(formid).find('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').attr("placeholder", placeH);
						$(formid).find('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').addClass('box-placeholder');
                      
                      if ( $(this).is('select') )
						$(formid).find('.selectOption').addClass('state-error');
                      
                      //~ var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      //~ $('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').addClass('inputTxtError').after(msg);

                 });




		}
	});
});

$(document).on('submit','#billingform',function( event ) {

		var formid = '#billingform';
		event.preventDefault();
		$.ajax({
		url : $(this).attr('action'),
		type: "POST",
		data: $('#billingform').serialize(),
		dataType: 'json',
		 beforeSend:function(){

			$('.formmessage').remove();
			$(formid).find("input[type=submit]").attr("disabled", "disabled");
			$(formid).find("button[type=submit]").attr("disabled", "disabled");
			$(formid).find('.box-placeholder').removeClass('box-placeholder');
			$(formid).find('.alert').removeClass('alert-info').removeClass('alert-success').removeClass('alert-danger').fadeIn(200);
			$(formid).find('.alert').addClass('alert-info');
			$(formid).find('.alert').show();
			$(formid).find('.ajax_message').html('<strong>Please Wait ! <i class="fa fa-spinner fa-spin" aria-hidden="true"></i></strong>');

			}
			,
		success: function(response) {
			//toastr[response.status](response.message, "Notifications");
			$(formid).find("input[type=submit]").removeAttr("disabled");
			$(formid).find("button[type=submit]").removeAttr("disabled");
			
			if(response.success)
			{
				$(formid).find('.alert').fadeIn();
				$(formid).find('.alert').addClass('alert-success').children('.ajax_message').html(response.message);
			}
			else
			{
				$(formid).find('.alert').fadeIn();
				$(formid).find('.alert').addClass('alert-danger').children('.ajax_message').html(response.message);
			}
				
			if(response.billing_info)
			{
				$(formid).find('.alert').fadeOut(100);
				$('#billing_tab').removeClass('active');
				$('#billing_div').css({'display':'none'});
				$('#billing_tab a span').html('<button class="edit_billing_info pull-right btn btn-primary btn-sm" id="signin_box"> Change</button>');
				
				if(response.address_type=='diff_add')
				{
					$('#method_tab').addClass('active');
					$('#method_div').removeAttr('style');
					$('#shipping_tab').addClass('active');
					$('#shipping_div').removeAttr('style');
					
					//~ $("#billing_dis").load(location.href + " #billing_dis");
					//~ $("#shipping_dis").load(location.href + " #shipping_dis");
					//~ $('#billing_dis div.panel-body').css();
					//~ $('#shipping_dis div.panel-body').css();
					
					//~ $("#billing_dis").load(location.href + " #billing_dis");
					//~ $("#shipping_dis").load(location.href + " #shipping_dis");
					//~ $('#billing_dis div.panel-body').removeAttr('style');
					//~ $('#shipping_dis div.panel-body').removeAttr('style');
					
					$("#billing_dis").load(" #billing_dis > *");
					$("#shipping_dis").load(" #shipping_dis > *");
					
					$("#billing_div").load(" #billing_div > *");
					$("#signin_div").load(" #signin_div > *");
					
				}
				else
				{
					$('#method_tab').addClass('active');
					$('#method_div').removeAttr('style');
					
					//~ $("#billing_dis").load(location.href + " #billing_dis");
					//~ $("#shipping_dis").load(location.href + " #shipping_dis");
					//~ $('#billing_dis div.panel-body').css();
					//~ $('#shipping_dis div.panel-body').css();
					
					//~ $("#billing_dis").load(location.href + " #billing_dis");
					//~ $("#shipping_dis").load(location.href + " #shipping_dis");
					//~ $('#billing_dis div.panel-body').removeAttr('style');
					//~ $('#shipping_dis div.panel-body').removeAttr('style');
					
					$("#billing_dis").load(" #billing_dis > *");
					$("#shipping_dis").load(" #shipping_dis > *");
					
					$("#billing_div").load(" #billing_div > *");
					$("#signin_div").load(" #signin_div > *");
				}	
			}	
			
			if(response.resetform)
			$(formid).resetForm();


		},
		error: function(response) {
			$(formid).find('.alert').fadeOut(100);
			$(formid).find("input[type=submit]").removeAttr("disabled");
			$(formid).find("button[type=submit]").removeAttr("disabled");
			$(formid).find('.alert').fadeIn();
			$(formid).find('.alert').addClass('alert-danger').children('.ajax_message').html('OOps Some Error Occured!!');
			
			var data = response.responseJSON;
                       $.each(data, function( key, value ) {
                      console.log(key + " => " + value);
                      
                      if (!/\brequired\b/.test(value))
						{
					  		$(formid).find('.ajax_message').append('<br>'+value);
						} 
                      
                      var placeH	=value;						
						$(formid).find('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').attr("placeholder", placeH);
						$(formid).find('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').addClass('box-placeholder');
                      
                      if ( $(this).is('select') )
						$(formid).find('.selectOption').addClass('state-error');
                      
                      //~ var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      //~ $('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').addClass('inputTxtError').after(msg);

                 });

		}
	});
});

$(document).on('submit','#shippingform',function( event ) {

		var formid = '#shippingform';
	 event.preventDefault();
		$.ajax({
		url : $(this).attr('action'),
		type: "POST",
		data: $('#shippingform').serialize(),
		dataType: 'json',
		 beforeSend:function(){

			$('.formmessage').remove();
			$(formid).find("input[type=submit]").attr("disabled", "disabled");
			$(formid).find("button[type=submit]").attr("disabled", "disabled");
			$(formid).find('.box-placeholder').removeClass('box-placeholder');
			$(formid).find('.alert').removeClass('alert-info').removeClass('alert-success').removeClass('alert-danger').fadeIn(200);
			$(formid).find('.alert').addClass('alert-info');
			$(formid).find('.alert').show();
			$(formid).find('.ajax_message').html('<strong>Please Wait ! <i class="fa fa-spinner fa-spin" aria-hidden="true"></i></strong>');

			}
			,
		success: function(response) {
			toastr[response.status](response.message, "Notifications");
			$(formid).find("input[type=submit]").removeAttr("disabled");
			$(formid).find("button[type=submit]").removeAttr("disabled");
			
			if(response.success)
			{
				$(formid).find('.alert').fadeIn();
				$(formid).find('.alert').addClass('alert-success').children('.ajax_message').html(response.message);
			}
			else
			{
				$(formid).find('.alert').fadeIn();
				$(formid).find('.alert').addClass('alert-danger').children('.ajax_message').html(response.message);
			}
				
			if(response.shipping_info)
			{
				$('#shipping_tab').removeClass('active');
				$('#shipping_div').css({'display':'none'});
				$('#method_tab').addClass('active');
				$('#method_div').removeAttr('style');	
				//~ $('#shipping_dis').removeAttr('style');		
				//~ $("#shipping_dis").load(location.href + " #shipping_dis");
				$("#shipping_dis").load(" #shipping_dis > *");
				
			}	
			
			if(response.resetform)
			$(formid).resetForm();


		},
		error: function(response) {
			$(formid).find("input[type=submit]").removeAttr("disabled");
			$(formid).find("button[type=submit]").removeAttr("disabled");
			var data = response.responseJSON;
                       $.each(data, function( key, value ) {
                      console.log(key + " => " + value);
                      
                      var placeH	=value;						
						$(formid).find('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').attr("placeholder", placeH);
						$(formid).find('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').addClass('box-placeholder');
                      
                      //~ var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      //~ $('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').addClass('inputTxtError').after(msg);

                 });




		}
	});
});


$('#shippingmethod').submit(function( event ) {

var formid = '#shippingmethod';
	 event.preventDefault();
		$.ajax({
		url : $(this).attr('action'),
		type: "POST",
		data: $('#shippingmethod').serialize(),
		dataType: 'json',
		 beforeSend:function(){

			$('.formmessage').remove();
			$(formid).find("input[type=submit]").attr("disabled", "disabled");
			$(formid).find("button[type=submit]").attr("disabled", "disabled");
			
			}
			,
		success: function(response) {
				//toastr[response.status](response.message, "Notifications");
				$(formid).find("input[type=submit]").removeAttr("disabled");
				$(formid).find("button[type=submit]").removeAttr("disabled");
				$('#method_tab').removeClass('active');
				$('#method_div').css({'display':'none'});
				$('#method_tab a span').html('<button class="edit_ship_method pull-right btn btn-primary btn-sm"> Change</button>');
				
				
				$("#shipping_method").load(" #shipping_method > *");
				$("#order_div").load(" #order_div > *");
				//$("#payment_detail").load(" #payment_detail > *");
				$('#total_price').html('<strong>₹ '+response.total+'</strong>');
				$('#shipping_cost').html(response.shipping_cost);
				
				
				$('#order_tab').addClass('active');
				$('#order_div').removeAttr('style');	
				
				//~ $("#shipping_method").load(location.href + " #shipping_method");	
				//~ $('#shipping_method').removeAttr('style');
				
		},
		error: function(response) {
			$(formid).find("input[type=submit]").removeAttr("disabled");
			$(formid).find("button[type=submit]").removeAttr("disabled");
			var data = response.responseJSON;
                       $.each(data, function( key, value ) {
                      console.log(key + " => " + value);
                      
                      var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      $('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').addClass('inputTxtError').after(msg);

                 });
		}
	});
});

$(document).on('click','#continue_order',function( event ) {

	 event.preventDefault();
		$.ajax({
		url : storeurl,
		type: "GET",
		dataType: 'json',
		beforeSend:function(){

			$('.formmessage').remove();
			$(this).attr("disabled", "disabled");
			}
			,
		success: function(response) {
				//toastr[response.status](response.message, "Notifications");
				$(this).removeAttr("disabled");
				//$("#miniCart").load(location.href + " #miniCart");
				$("#miniCart").load(" #miniCart > *");
				$('#order_tab').removeClass('active');
				$('#order_div').css({'display':'none'});
				$('#order_tab a span').html('<button class="edit_order pull-right btn btn-primary btn-sm"> Change</button>');
				
				//~ $('#billing_dis div.panel-heading span').html('');
				//~ $('#shipping_dis div.panel-heading span').html('');
				//~ $('#shipping_method div.panel-heading span').html('');
				//~ $('#signin_tab a span').html('');
				//~ $('#billing_tab a span').html('');
				//~ $('#method_tab a span').html('');
				
				$('#payment_tab').addClass('active');
				$('#payment_div').removeAttr('style');		
			
		},
		error: function(response) {
			$(this).removeAttr("disabled");
			var data = response.responseJSON;
                       $.each(data, function( key, value ) {
                      console.log(key + " => " + value);
                      
                      var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      $('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').addClass('inputTxtError').after(msg);

                 });
		}
	});
});


$(document).on('click', '.add_to_cart', function(){
	var slug=$(this).attr('data-id');
	var qty=$('input[name=quantity]').val();
	var size=$('#size').val();
	var color=$('#color').val();
	url = atocart_route+'/'+slug;
	//alert(url);
      $.ajax({
		url: url,
		type: "GET",
		data: {'size':size,'color':color,'qty':qty},
		dataType: 'json',
		success: function(response) {

		    if(response.redirect=="No")
		    {
				toastr[response.status](response.message, "Notifications");
				$("#miniCart").load(location.href + " #miniCart");
				$("#cartTotal").load(location.href + " #cartTotal");
				$("#miniBag").load(location.href + " #miniBag");
				//$('#cart-block').html(response.content);
			} 

		}
	});
	
});

$(document).on('click','.actions .minus, .actions .plus',function(){
	var count = $(this).closest('.actions').find('#count').val();
	count = parseInt(count);
	if($(this).hasClass('plus')){
		count++;
	} else{
		if(count > 1 ){
			count--;
		}
	}
	$(this).closest('.actions').find('#count').val(count);
	//var count = $('#count').val();
	var count = $(this).closest('.actions').find('#count').val();
	//var rowId = $('#count').attr('data-id');
    var rowId = $(this).closest('.actions').find('#count').attr('data-id');
    alert(12);
	//alert(count);
	//alert(ucarturl);
	 $.ajax({
		url: ucarturl,
		type: "GET",
		data: {'count':count,'rowId':rowId},
		dataType: 'json',
		success: function(response) {

		    if(response.redirect=="No")
		    {
				toastr[response.status](response.message, "Notifications");
				$("#miniCart").load(location.href + " #miniCart");
				$("#cartTotal").load(location.href + " #cartTotal");
				$("#miniBag").load(location.href + " #miniBag");
				$("#cartTable").load(location.href + " #cartTable");
				$("#grandTotal").load(location.href + " #grandTotal");
				//$('#cart-block').html(response.content);
			} 

		}
	});
	
	//~ var totalPrice	=  $(this).closest('form').find('#actualprice').val();
	//~ var oldprice	=  $(this).closest('form').find('#oldprice').val();
	//~ var extraprice	=  $(this).closest('form').find('#extraprice').val();
	
	//~ if(extraprice)
	//~ var actualprice	=	parseInt(totalPrice)+parseInt(extraprice);
	//~ else
	//~ var actualprice	=	parseInt(totalPrice);
	
	//~ var finalprice	=	actualprice*count;
	//~ finalprice		=	finalprice.toFixed(2);
	
	//~ //alert(finalprice);
	//~ $(this).closest('.product').find('.price #product_price').html(currency+finalprice);
	//~ if((parseInt(finalprice)) == actualprice){
		//~ $(this).closest('.product').find('.price #old_price').html(currency+oldprice+".00");
	//~ }else{
		//~ var totalold = parseInt(finalprice)+actualprice;
		//~ $(this).closest('.product').find('.price #old_price').html((currency+totalold)+".00");
	//~ }
	
});


//~ $(document).on('click','form .add-btn #cart_pro_id',function(e) {
//~ if($(this).closest('.productlist').find('#attr').val()==""){
	//~ $('.error').html('<span style="color:red;">Please Select Any One.</span>');
	//~ return false;
//~ }else{
	//~ $('.error').html('');
//~ }
//~ $(this).closest('.productlist').find('#add_to_cart').submit(function( event ) {
		//~ $(this).closest('.productlist').find('#cart_pro_id').html('Processing');
		 //~ $(this).closest('.productlist').find('#cart_pro_id').attr('disabled','disabled');
		//~ var target = $(this);
    	//~ var pro_slug=target.closest('.productlist').find('#cart_pro_id').attr('data-id');
//~ //    	alert(pro_slug);
		 //~ event.preventDefault();
		  //~ $.ajax({
			//~ url: atocart_route+'/'+pro_slug,
			//~ type: "POST",
			//~ data: $(this).closest('.productlist').find('#add_to_cart').serialize(),
			//~ dataType: 'json',
			//~ success: function(response) {
					//~ target.closest('.productlist').find('#cart_pro_id').html('Add to cart');
					//~ target.closest('.productlist').find('#cart_pro_id').removeAttr('disabled');

					//~ toastr[response.status]("Product successfully Add in your cart", "Notifications");
					//~ $('#cart-block').html(response.content);
			//~ }
			//~ });
//~ });	


//~ });


   $(document).on('change','.ch-size .attri_values',function(e) {
	   var target = $(this);
		var baseprice	=  target.closest('form').find('#actualprice').val();
	   var attr_route = $(this).closest('.ch-size').find('#attr_route').val();
	   var pro_slug = $(this).closest('.ch-size').find('#pro_slug').val();
	   //alert(attr_route);
	   $(this).closest('.productlist').find('#cart_pro_id').show();
	   $(this).closest('.productlist').find('#qty_error').hide();
	   var i=0;
    var attr =[];
       var quanity = $(this).closest('.productlist').find('#count').val();
    $(this).closest('.productlist').find('.attri_values').each(function(key, val) {
          attr[key] =$(this).closest('.productlist').find(':selected').val();
          //alert(attr[key]);
          if(attr[key]!="")
          i++;

     });
     if($(this).closest('.ch-size').find('.attri_values').length>=2)
     attr = attr.join('-');
    if(i>0)
    {
		 $.ajax({
				url: attr_route,
				type: "POST",
				data:{'attr_set':attr,'_token':$('input[name=_token]').val(),'pro_slug':pro_slug},
				dataType: 'JSON',
				success: function(response) {
					if(response.status!='error')
					{
						var price = response.data['price'];
						var quantity = response.data['quantity'];
							var upprice=parseInt(baseprice)+parseInt(price);
							target.closest('.product').find('.mps .price #product_price').html((currency+upprice*quanity)+".00");
							var oldprice	=  target.closest('form').find('#oldprice').val();
							if((parseInt(upprice)+parseInt(price)) == baseprice){
								target.closest('.product').find('.mps .price #old_price').html(currency+oldprice+".00");
							}else{
								var totalold = upprice+parseInt(baseprice);
								target.closest('.product').find('.mps .price #old_price').html((currency+totalold)+".00");
							}
							target.closest('.product').find('.mps .p-size strong').html(attr);

							if(quantity>0)
							{
								$('#quantity').val(1);
								$('#quantity').attr('max',quantity);

							}
							else
							{
								var msg = '<span style="color:red; text-align:right;"><h5><strong>out of stock</strong></h5></span>';
								target.closest('.product').find('#qty_error').show();
								target.closest('.product').find('#qty_error').html(msg);
								target.closest('.product').find('#cart_pro_id').hide();

							}
							target.closest('form').find('#extraprice').val(price);
					}
				}
		});

	}
	else
	{
		$('#product_price').html(currency+baseprice)
	}

});


     $(document).on('click','#detailquantity',function(e) {
		// alert('done');
           quanity = $('#count').val();
          
           var extraprice = $('#extraprice').val();
           if(extraprice)
			var actualprice=totalPrice+parseInt(extraprice);
           else
			var actualprice=totalPrice;
          $('#product_price').html(currency+actualprice*quanity+".00")
        });
$(document).on('click','#increasedecrease',function(){	
	setTimeout(function(){
	$('#discount_amount').load(document.URL +  ' #discount_amount');
	$('#total_price').load(document.URL +  ' #total_price');
	$('#cart_tax').load(document.URL +  ' #cart_tax');
	$('#subtotal').load(document.URL +  ' #subtotal');
},100);
});
function ajaxPageCallBack(data)
{
		if(data.callback_type =="registration temp"){
		$('.tmp_re_div').hide();
		$('.Verifyotp_div').show();
		}


		if(data.callback_type =="forgot_option"){
		$('#login_option_div').hide();
		$('#otpform').show();
		}
		if(data.callback_type =="forgot_option_email"){
		$('#login_option_div').hide();
		$('#otpform').show();
		}

		if(data.callback_type =="inquiry_add_info"){
		$('.modal-content').find('#inq_div').html(data.view);
		//~ $('.modal-content').find('#add_info').css('display','block');	 
		//~ $('#inq_div').html(data.view);
		}
		if(data.callback_type =="closepop_up"){
		$('.modal').modal('hide');
		}
		if(data.callback_type =="change_mobile"){
			$('#change_mobile').hide();
			$('#inquiry_form').show();
			$('#inquiry_form').find('#mobile_no').val(data.mobileno);
		}	

}


    $('#my_fav').on('click', function(event){

		$.ajax({
			url: wishurl+'/' +pro_slug,
			type: "GET",
			dataType: 'JSON',
			success: function(response) {

			if(response.success==true)
			{
				toastr[response.status]("Successfully Added In Wishlist", "Notifications");
				$('#my_fav').attr('title','Remove From Wishlist');
				$('#my_fav').addClass('wishlist activewishlist');
			}
			else
			{
				toastr[response.status]("Successfully Remove From Wishlist", "Notifications");
				$('#my_fav').attr('title','Add To Wishlist');
				$('#my_fav').removeClass('activewishlist');
			}


			},
			error:function (response)
			{
				 if(response.status==401)
                 window.location.href=login;
			}

		});

      });

$(function(){
$('#review_form').on('submit', function(event){
var error="";
var array="";

                event.preventDefault();
		$.ajax({
		url: reviewurl,
                type: "POST",
		dataType: 'json',
		data: {
		'rate':$('#rate').val(),
		'review':$('#review').val(),
                '_token': $('input[name=_token]').val(),
                'product_slug': pro_slug,

		},
		success: function(data) {
						if(data.status=='error')
						{
							toastr[data.status](data.message, "Notifications");
						}
						else
						{
						   $.each( data.response, function( key, value ) {
							var star="";
						   date = new Date(value.created_at);


								   array+=
						"<div class='comment row'>"+
						"<div class='col-sm-3 author'>"+
						"<div class='grade'>"+
							"<span>Grade</span>"+
							"<span class='reviewRating'>"+
								"<div class='rateyo-widg-1' data-rate='"+value.rate+"'></div>"+ "</div>"+
						"<div class='info-author'>"+
							"<span><strong>"+value.first_name+"&nbsp;"+value.last_name+"</strong></span>"+
							 "<em>"+date.getDate()+" "+eval(date.getMonth()+1)+" "+date.getFullYear()+"</em>"+
						"</div>"+
						"</div>"+
						"<div class='col-sm-9 commnet-dettail'>"+value.review+
						"</div>"+
						"</div>"

							});
						toastr[data.status](data.message, "Notifications");

						$('#pro_review').html(array);viewRating();
						$('#writereview').removeClass('in');
						$('#writereview').attr("aria-expanded","false");
						$('#review_exp_collpase').html('<a class="btn-comment" data-toggle="collapse" href="#writereview" aria-expanded="false" aria-controls="collapseExample" id="review_exp_collpase">Edit your review !</a>');

						$('#review_error').html("<span id='review_error' style='color:red;'></span>");
					}
                },
                error: function (data) {

							if(data.status==401)
							{
								window.location.href=login;
							}
							else
							{
								var data = data.responseJSON;
								$.each( data, function( key, value ) {
								error+=data[key]+"<br>";
								$('#review_error').html("<span id='review_error' style='color:red;'>"+error+"</span>");
								});
							}




                }



		});

      });
});
//*****************Rating***********************************//
   //~ $(function () {
		//~ $(".rateyo-widg-2").rateYo({

				//~ }).on("rateyo.set", function (e, data) {

		   //~ $('#rate').val(data.rating);
		//~ });
	//~ });


	//~ $(function () {
		//~ $(".rateyo-widg-3").rateYo({
			  //~ rating: parseFloat($('.rateyo-widg-3').attr('data-rate'))
				//~ }).on("rateyo.set", function (e, data) {

		   //~ $('#rate').val(data.rating);
		//~ });
	//~ });


	//~ $(document).ready(function(){
		//~ $(".rateyo-widg-1").each(function(key, val) {
			//~ $(this).rateYo({
				//~ starWidth: "15px",
				//~ readOnly: true,
				//~ rating: parseFloat($(this).attr('data-rate'))

            //~ });
		//~ });
	//~ });


	//~ function viewRating()
	//~ {
		//~ $(".rateyo-widg-1").each(function(key, val) {
			//~ $(this).rateYo({
				//~ starWidth: "15px",
				//~ readOnly: true,
				//~ rating: parseFloat($(this).attr('data-rate'))

            //~ });
		//~ });


	//~ }
//*****************Rating End***********************************//
 $("#link").click(function() {
    $('html, body').animate({
        scrollTop: $("#pro_tab").offset().top
    }, 1000);

    $('#reviews').addClass('active');
    $('#product-detail').removeClass('active');
    $('#tag').removeClass('active');
    $('#guarantees').removeClass('active');
    $('#comment_review').addClass('active');
    $('#pro_description').removeClass('active');
    $('#term_condition').removeClass('active');
    $('#tag_id').removeClass('active');
    $('#writereview').show();

});






//~ $('body').delegate('.heart','click', function (){

		     	//~ var slug= $(this).data('id');

				//~ var url= $(this).data('url');
                 //~ var myurl=  url;

				//~ $.ajax({

						//~ url: myurl,
						//~ type: "GET",
						//~ dataType: 'JSON',
						//~ data: {

								//~ '_token': $('input[name=_token]').val(),


				                //~ },
				        //~ success: function(response){
                             //~ if(response.success==true)
		           	//~ {
						//~ toastr[response.status]("Successfully Added In Wishlist", "Notifications");

						  	//~ $('.'+slug).attr('title','Remove From Wishlist');
					  	  	//~ $('.'+slug).addClass("wished" +' ' +slug);

					//~ }
					//~ else
					//~ {
						 //~ toastr[response.status]("Successfully Remove From Wishlist", "Notifications");

						  //~ $('.'+slug).attr('title','Add To Wishlist');
					      //~ $('.'+slug).removeClass("wished");
					//~ }


							//~ },
				//~ error:function (response)
				//~ {
				//~ if(response.status==401)
				//~ window.location.href=login;
				//~ }



		        //~ });



		//~ });





$('#sort_product_search').change(function()
{

	var sort_by=$(this).val();
	var no=$('#product_show_search').find(':selected').val();
	if(no=='')
	no=10;
	if(sort_by!='')
	{
		$.ajax({
			url: sroute+'/' +tag_key+'/'+sort_by+'/'+no,
			type: "GET",
			dataType: 'html',
			success: function(response) {

				$('#product_list').html(response);
			}
		});
     }


});

$('#product_show_search').change(function() {
	var no=$(this).val();
	var sort_by=$('#sort_product_search').find(':selected').val();
	if(sort_by=='')
	sort_by='desc';
        if(no!='')
	{
		$.ajax({
		url: proute+'/' +tag_key+'/'+sort_by+'/'+no,
		type: "GET",
		dataType: 'html',
		success: function(response) {

		$('#product_list').html(response);
		}
		});
	}
});
//~ $(document).on('click', '#sendnewsletter', function(){
		//~ email=$('#email').val();
		//~ token=$(this).attr('data-token');
		//~ $.ajax({
		//~ url:newsletter,
	    //~ type:"POST",
		//~ data:{email: email, '_token': $('input[name=_token]').val(),},
		//~ dataType: 'json',
		//~ success: function(response) {
				//~ toastr['success']("Email Address Successfully Save", "Notifications");
			//~ }

//~ });

//~ });




$('.deliveryadd').submit(function( event ) {
  var addId=  $(this).attr('data-id');
  var formid = $(this).attr('id');
	 event.preventDefault();
		$.ajax({
		url: deliveryUrl+'/'+addId,
		type: "POST",
		data: $('#'+formid).serialize(),
		dataType: 'json',
		beforeSend:function(){

			$('.formmessage').remove();

			}
        ,
		success: function(response) {

					toastr[response.status]("Delivery Address Sucessfully Updated", "Notifications");
					 location.reload();
		},
		error: function(response){

			var data = response.responseJSON;
                       $.each(data, function( key, value ) {
                      console.log(key + " => " + value);
                      var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      $('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').addClass('inputTxtError').after(msg);

                 });



          }

		});



});


//~ $('#myaddress').on('submit',function(e){
   //~ var error="";
    //~ e.preventDefault(e);
        //~ $.ajax({
        //~ type:"POST",
        //~ url:myurl,
        //~ data:$(this).serialize(),
        //~ dataType: 'json',
        //~ beforeSend:function(){
			//~ $('.formmessage').remove();
			//~ }
        //~ ,
        //~ success: function(response){
            //~ if(response.success==true)
		           	//~ {
						//~ toastr[response.status]("Successfully Added My Address", "Notifications");
						//~ $( '#myaddress' ).each(function(){
				         //~ this.reset();
				    //~ });
						//~ window.location.href = myaddress;
					//~ }
           //~ },error: function(data){
			//~ var data = data.responseJSON;
                       //~ $.each(data, function( key, value ) {
                      //~ console.log(key + " => " + value); // view in console for error messages
                      //~ var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      //~ $('input[name="' + key + '"], select[name="' + key + '"]').addClass('inputTxtError').after(msg);
                                //~ //error+=data[key]+"<br>";
                                //~ //$('#myadd').html("<span class='help-block' style='color:red' id='myadd'>"+error+"</span>");
                 //~ });
          //~ }
    //~ })
    //~ });

$(".deleteadd").click(function(){
	
        var id = $(this).data("id");
        var token = $(this).data("token");

      $(".deletemyadd").click(function(){
		$(this).addClass('disabled');
        $.ajax(

        {

            url: myadddelete+'/'+id,

            type: 'POST',

            dataType: "JSON",

            data: {

                "id": id,

                "_token": token,
                },

            success: function (response)
             {

              if(response.success==true)
		           	{


						toastr[response.status]("Successfully Deleted My Address", "Notifications");
			setInterval(function(){ 
                        window.location.href = 'my-address';
				}, 1000);	


					}

             }

        });

        });

});


   var request=false;


$('#byNow').click(function(e) {
$('#add_to_cart').submit(function( event ) {
$('#byNow').html('Processing');
 $('#byNow').attr('disabled','disabled')
 pro_slug=$('#cart_pro_id').attr('data-id');
 event.preventDefault();

		  $.ajax({
			url: atocart_route+'/'+pro_slug,
			type: "POST",
			data: $('#add_to_cart').serialize(),
			dataType: 'json',
			success: function(response) {
					$('#byNow').html('Buy Now');
					$('#byNow').removeAttr('disabled');

					toastr[response.status]("Product successfully Add in your cart", "Notifications");
					$('#cart-block').html(response.content);
						window.location.href=viewcart;
			}
			});

});
});
$('#cart_pro_id').click(function(e) {
if($('#attr').val()==""){
	$('.error').html('<span style="color:red;">Please Select Any One.</span>');
}else{
	$('.error').html('');
}
$('#add_to_cart').submit(function( event ) {
		$('#cart_pro_id').html('Processing');
		 $('#cart_pro_id').attr('disabled','disabled')
    	 pro_slug=$('#cart_pro_id').attr('data-id');
		 event.preventDefault();
		  $.ajax({
			url: atocart_route+'/'+pro_slug,
			type: "POST",
			data: $('#add_to_cart').serialize(),
			dataType: 'json',
			success: function(response) {
					$('#cart_pro_id').html('Add to cart');
					$('#cart_pro_id').removeAttr('disabled');

					toastr[response.status]("Product successfully Add in your cart", "Notifications");
					$('#cart-block').html(response.content);
			}
			});
});	


});

$(document).on('click', '.remove_link', function(){
	 rowId=$(this).attr('data-id');
	
	 //alert(rowId);
	  $.ajax({
		url: rtocart_route+'/'+rowId,
		type: "GET",
		dataType: 'json',
		success: function(response) {
			toastr[response.status]("Product successfully Removed from your cart", "Notifications");
			    $("#miniCart").load(location.href + " #miniCart");
				$("#cartTotal").load(location.href + " #cartTotal");
				$("#miniBag").load(location.href + " #miniBag");
				$("#cartTable").load(location.href + " #cartTable");
				$("#grandTotal").load(location.href + " #grandTotal");
			//$('#cart-block').html(response.content);
		}
	});

});

$(document).on('click', '.remove_cart', function(){

	 rowId=$(this).attr('data-id');
	 ref=$(this);
      $.ajax({
		url: rtocart_route+'/' +rowId,
		type: "GET",
		dataType: 'json',
		success: function(response) {

			    if(response.message)
			    {
					$('#cart_div').html("<center>"+response.message+"<center>");

			    }
			    else
			    {
					toastr[response.status]("Product successfully Remove from your cart", "Notifications");

					$(ref).closest("tr").remove();
					$('#cart_tax').html(response.cart_tax);
					$('#cart_product').html(response.pro_count);
					$('#subtotal').html(response.subtotal);
					$('#total_price').html(response.total_price);
					if(response.coupon_discount!=0)
					$('#discount_amount').html(response.coupon_discount);
				}


		}
		});


});


$(document).on('click', '#clear_cart', function(){

      $.ajax({
		url: dfromcart_route,
		type: "GET",
		dataType: 'json',
		success: function(response) {
		  toastr[response.status]("All Product successfully Remove from your cart", "Notifications");
		  $('.order-detail-content').html("<center>"+response.message+"</center>");
			$('#cart_div').html("<div class='alert alert-warning w-message' style='font-size:14px;'><center>"+response.message+"</center></div>>");


		}
		});


});

$(document).on('click', '#set_as_default', function(){
	$('.maindiv').show();
	$('.loader').show();
	var id = $(this).attr('data-id');
      $.ajax({
		url: myaddressSetasdefault+'/'+id,
		type: "GET",
		dataType: 'json', 
		success: function(response) {
		  toastr[response.status]("Address Set As Default Successfully", "Notifications");
			setInterval(function(){ 
		  $('.maindiv').hide();
		  $('.loader').hide();
				window.location.reload();
				}, 500);		
			}
		});

});

//~ $(document).on('click', '.qty', function(e){

		//~ var quanity = $(this).val();
		//~ var pro_id=$(this).attr('data-id');
		//~ var rowId=$(this).attr('data-rowId');
		//~ var options=$(this).attr('data-options');

			//~ $.ajax({
			//~ url: cqp_route+'/'+rowId+'/'+pro_id+'/'+quanity,
			//~ type: "GET",
			//~ data:{'options':options},
			//~ dataType: 'json',
			//~ success: function(response) {
                     //~ if(response.product_exist=="No")
                     //~ {
						 //~ error="We're sorry! We are able to accommodate only "+response.quantity+" units of "+response.product_name+"<br>";
						//~ $('#error_message').html(
						//~ "<div class='alert alert-danger alert-dismissable margin5'>"+
						//~ "<button type='button' class='close' data-dismiss='alert' aria-hidden=true'>&times;</button>"+
						//~ "<strong >"+error+"</strong>"+
						//~ "</div>"
						//~ );
						//~ $('#cart_product').html(response.pro_count);
                         //~ $('#cart_detail').html(response.content);
					 //~ }
					 //~ else
					 //~ {
							//~ toastr[response.status]("The quantity of item "+response.product_name+" has been changed to "+response.changed_quantity, "Notifications");

							//~ $('#cart_product').html(response.pro_count);
							//~ $('#cart_detail').html(response.content);

					 //~ }
			//~ }
			//~ });
 //~ });






$(document).on('click', '#checkout_proceed', function(){
	$('#checkout_proceed').html('Processing');
	$('#checkout_proceed').attr('disabled','disabled')
	var error="";
      $.ajax({
		url: checkout_route,
		type: "GET",
		dataType: 'json',
		success: function(response) {
			$('#checkout_proceed').html('Proceed to Checkout');
			$('#checkout_proceed').removeAttr('disabled');

			if(response.success==false)
			{
				 $.each( response.quantity_error, function( key, value ) {

					error+="We're sorry! We are able to accommodate only "+value.quantity+" units of "+value.title+"<br>";
				 });

				   $('#error_message').html(
				  "<div class='alert alert-danger alert-dismissable margin5'>"+
					"<button type='button' class='close' data-dismiss='alert' aria-hidden=true'>&times;</button>"+
					"<strong >"+error+"</strong>"+
				   "</div>"
				   );

			}
			else
			{
				window.location.href = checkout;
			}
		}
		});


});

$('#reg_from').submit(function( event ) {

	 event.preventDefault();
		$.ajax({
		url: creg_route,
		type: "POST",
		data: $('#reg_from').serialize(),
		dataType: 'json',
		beforeSend:function(){

			$('.formmessage').remove();

			}
        ,
		success: function(response) {

					toastr[response.status]("Sucessfully Register", "Notifications");
					window.location.href = payment_route;



		},
		error: function(response){

			var data = response.responseJSON;
                       $.each(data, function( key, value ) {
                      console.log(key + " => " + value);
                      var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      $('input[name="' + key + '"], select[name="' + key + '"]').addClass('inputTxtError').after(msg);

                 });



          }

		});



});

$('#signcheck').submit(function( event ) {


	 event.preventDefault();
		$.ajax({
		url : $(this).attr('action'),
		type: "POST",
		data: $('#signcheck').serialize(),
		dataType: 'json',
		 beforeSend:function(){

			$('.formmessage').remove();

			}
			,
		success: function(response) {



				window.location.href = response.url;

		},
		error: function(response) {
			var data = response.responseJSON;
                       $.each(data, function( key, value ) {
                      console.log(key + " => " + value);
                      var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      $('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').addClass('inputTxtError').after(msg);

                 });




		}
		});
});

$('#signcheckpass').submit(function( event ) {


	 event.preventDefault();
		$.ajax({
		url : $(this).attr('action'),
		type: "POST",
		data: $('#signcheckpass').serialize(),
		dataType: 'json',
		 beforeSend:function(){

			$('.formmessage').remove();

			}
			,
		success: function(response) {

		if(response.status== "error"){

			 $('#error_message').html(
				  "<div class='alert alert-danger alert-dismissable margin5'>"+
					"<button type='button' class='close' data-dismiss='alert' aria-hidden=true'>&times;</button>"+
					"<strong >password incorrect</strong>"+
				   "</div>"
				   );

			}
			else{
				window.location.href = response.url;
			}

		},
		error: function(response) {



			var data = response.responseJSON;


                       $.each(data, function( key, value ) {
                      console.log(key + " => " + value);
                      var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      $('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').addClass('inputTxtError').after(msg);

                 });




		}
		});
});

$('#checkotp').submit(function( event ) {


	 event.preventDefault();
		$.ajax({
		url : $(this).attr('action'),
		type: "POST",
		data: $('#checkotp').serialize(),
		dataType: 'json',
		 beforeSend:function(){

			$('.formmessage').remove();

			}
			,
		success: function(response) {

		if(response.status== "error"){

			 $('#error_message').html(
				  "<div class='alert alert-danger alert-dismissable margin5'>"+
					"<button type='button' class='close' data-dismiss='alert' aria-hidden=true'>&times;</button>"+
					"<strong >OTP Incorrect</strong>"+
				   "</div>"
				   );

			}
			else{
				window.location.href = response.url;
			}

		},
		error: function(response) {



			var data = response.responseJSON;

                       $.each(data, function( key, value ) {
                      console.log(key + " => " + value);
                      var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      $('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').addClass('inputTxtError').after(msg);

                 });




		}
		});
});

$('.resend_chceck_otp').click(function(){

	var url=$(this).attr('data-url');

	$.ajax({
		url : url,
		type: "POST",

		dataType: 'json',
      	data: {

						'_token': $('input[name=_token]').val(),

				                },
		success: function(response) {



			toastr[response.status](response.message, "Notifications");

			}


		});

		});

//~ $('.forgot_pass_checkout').click(function(){
//~ $('#passform').hide();
	//~ $('#login_option_div').show();

		//~ });



$('#checkout_reg').submit(function( event ) {

	 event.preventDefault();
		$.ajax({
		url: creg_route,
		type: "POST",
		data: $('#checkout_reg').serialize(),
		dataType: 'json',
		success: function(response) {
			if(response.message!="")
			{
		       $('#error_message').html(
				  "<div class='alert alert-danger alert-dismissable margin5'>"+
					"<button type='button' class='close' data-dismiss='alert' aria-hidden=true'>&times;</button>"+
					"<strong >"+response.message+"</strong>"+
				   "</div>"
				   );
			}
			else
			{
				window.location.href = address;
			}

		}
		});
});


$('#new_address').submit(function( event ) {

	 event.preventDefault();
		$.ajax({
		url: new_address+'/'+userid,
		type: "POST",
		data: $('#new_address').serialize(),
		dataType: 'json',
		beforeSend:function(){

			$('.formmessage').remove();

			}
        ,
		success: function(response) {

					toastr[response.status]("Sucessfully Add", "Notifications");
					 location.reload();
		},
		error: function(response){

			var data = response.responseJSON;
                       $.each(data, function( key, value ) {
                      console.log(key + " => " + value);
                      var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      $('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').addClass('inputTxtError').after(msg);

                 });



          }

		});



});

$(document).on('click', '#deliver_here', function(){
		address_id=$(this).attr('data-addid');
		token=$(this).attr('data-token');
		$.ajax({
		url:order_route,
	    type:"POST",
		data:{address_id:address_id,'_token': token},
		dataType: 'json',
		success: function(response) {
			if(response.success==true)
			window.location.href = payment_route;
			else
			{
				toastr['error'](response.message, "Notifications");
			}

		},


		});




});

$('#profile_update').on('submit',function(e){
   var error="";
    e.preventDefault(e);
        $.ajax({
        type:"POST",
        url:myurl,
        data:$(this).serialize(),
        dataType: 'json',
        beforeSend:function(){

			$('.formmessage').remove();

			}
        ,
        success: function(response){


            if(response.success==true)
		           	{


						toastr[response.status]("Successfully Updated My Profile", "Notifications");




						window.location.href = myprofile;

					}



           },error: function(data){

			var data = data.responseJSON;


                       $.each(data, function( key, value ) {


                      console.log(key + " => " + value); // view in console for error messages
                      var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      $('input[name="' + key + '"], select[name="' + key + '"]').addClass('inputTxtError').after(msg);



                                //error+=data[key]+"<br>";
                                //$('#myadd').html("<span class='help-block' style='color:red' id='myadd'>"+error+"</span>");



                 });



          }

    });
 });



$('#updatepassword').on('submit',function(e){


   var error="";

    e.preventDefault(e);

        $.ajax({

        type:"POST",
        url:myurl,
        data:$(this).serialize(),
        dataType: 'json',
        beforeSend:function(){

			$('.formmessage').remove();

			}
        ,
        success: function(response){


            if(response.success==true)
		           	{


						toastr[response.status]("Successfully Updated Your Password", "Notifications");




						window.location.href = mypassword;

					}
                    else{


						  var msg = '<label class="error formmessage" for=""  style="color:red">Old Password is Mismatch</label>';
		                 $('#err_message').html(
				          "<div class='alert alert-danger alert-dismissable margin5'>"+
					      "<button type='button' class='close' data-dismiss='alert' aria-hidden=true'>&times;</button>"+
					        "<strong >"+msg+"</strong>"+
				             "</div>"
				   );

						$( '#updatepassword' ).each(function(){
				         this.reset();
				    });

						}


           },error: function(data){

			var data = data.responseJSON;


                       $.each(data, function( key, value ) {


                      console.log(key + " => " + value); // view in console for error messages
                      var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
                      $('input[name="' + key + '"], select[name="' + key + '"]').addClass('inputTxtError').after(msg);



                                //error+=data[key]+"<br>";


                                //$('#myadd').html("<span class='help-block' style='color:red' id='myadd'>"+error+"</span>");




                 });



          }

    });
 });


$('#newsletter_update').on('submit',function(e){


   var error="";

    e.preventDefault(e);

        $.ajax({

        type:"POST",
        url:newsurl,
        data:$(this).serialize(),
        dataType: 'json',
        beforeSend:function(){

			$('.formmessage').remove();

			}
        ,
        success: function(response){


            if(response.success==true)
		           	{


						toastr[response.status]("Successfully Updated Your Newsletter", "Notifications");

					    window.location.href = mynewsletter;

					}
					else{


						  var msg = '<label class="error formmessage" for=""  style="color:red">Please Select Newsletter</label>';
		                 $('#err_msg').html(
				          "<div class='alert alert-danger alert-dismissable margin5'>"+
					      "<button type='button' class='close' data-dismiss='alert' aria-hidden=true'>&times;</button>"+
					        "<strong >"+msg+"</strong>"+
				             "</div>"
				   );

						$( '#updatepassword' ).each(function(){
				         this.reset();
				    });

						}




           },error: function(data){





              }

    });
 });






	 $('#shipping_frm').submit(function( event ) {

	 event.preventDefault();
		$.ajax({
		url: shipmethod_route,
		type: "POST",
		 data: $('form').serialize(),
		dataType: 'json',
		success: function(response) {

		    if(response.success==true)
		    window.location.href = payment_route;
		},
		error: function(response){

			var data = response.responseJSON;
			$.each(data, function( key, value ) {

		var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
		 $('#error_message').html(
				  "<div class='alert alert-danger alert-dismissable margin5'>"+
					"<button type='button' class='close' data-dismiss='alert' aria-hidden=true'>&times;</button>"+
					"<strong >"+msg+"</strong>"+
				   "</div>"
				   );



			});
		}

		});
});

 $('#coupon_form').submit(function(event) {
		event.preventDefault();
			$.ajax({
				url: coupon_route,
				type: "POST",
				data: $('form').serialize(),
				dataType: 'json',
				beforeSend:function(){
					$('.formmessage').remove();
				},
				success: function(response) {

					if(response.valid=="No")
					{

						$('#coupon_message').html(
						"<div class='alert alert-danger alert-dismissable margin5'>"+
						"<button type='button' class='close' data-dismiss='alert' aria-hidden=true'>&times;</button>"+
						"<strong >Plaese enter valid coupon code</strong>"+
						"</div>"
						);
					}
					else if(response.valid=="This coupon code not valid for this cart")
					{
						$('#coupon_message').html(
						"<div class='alert alert-danger alert-dismissable margin5'>"+
						"<button type='button' class='close' data-dismiss='alert' aria-hidden=true'>&times;</button>"+
						"<strong >"+response.valid+"</div>"
						);
					}
					else if(response.valid=="Login First")
					{
						$('#coupon_message').html(
						"<div class='alert alert-danger alert-dismissable margin5'>"+
						"<button type='button' class='close' data-dismiss='alert' aria-hidden=true'>&times;</button>"+
						"<strong >"+response.valid+"</div>"
						);
					}
					else if(response.valid=="Sorry Coupon is finished")
					{
						$('#coupon_message').html(
						"<div class='alert alert-danger alert-dismissable margin5'>"+
						"<button type='button' class='close' data-dismiss='alert' aria-hidden=true'>&times;</button>"+
						"<strong >"+response.valid+"</div>"
						);
					}
					else if(response.valid=="Sorry!Your Coupon Limit is Out")
					{
						$('#coupon_message').html(
						"<div class='alert alert-danger alert-dismissable margin5'>"+
						"<button type='button' class='close' data-dismiss='alert' aria-hidden=true'>&times;</button>"+
						"<strong >"+response.valid+"</div>"
						);
					}
					else
					{
						$('#coupon_message').html("");
						toastr[response.status]("Successfully submit coupon", "Notifications");
						$('#discount_amount').html(response.cart_session.coupon_discount);
						$('#total_price').html(response.cart_session.cart_total);


					}
				},
				error: function(response){

					var data = response.responseJSON;
					$.each(data, function( key, value ) {
					$('#coupon_message').html(
					"<div class='alert alert-danger alert-dismissable margin5'>"+
					"<button type='button' class='close' data-dismiss='alert' aria-hidden=true'>&times;</button>"+
					"<strong >"+value+"</strong>"+
					"</div>"
					);
					});
				}


			});



 });


$('#retry').click(function()
{
	orderId=$(this).attr('data-orderid');
	token=$(this).attr('data-token');
	$.ajax({
			url: rcart_route,
			type: "POST",
			data:{'orderId':orderId,'_token':token},
			dataType: 'JSON',
			success: function(response) {
				if(response.status==true)
				window.location.href=view_cart;

			}
	});

});

   $('.attri_value').change(function(e) {
	   $('#cart_pro_id').show();
	   $('#qty_error').hide();
	   var i=0;
    var attr =[];
       var quanity = $('#count').val();
     $('.attri_value').each(function(key, val) {
          attr[key] =$(this).find(':selected').val();
          if(attr[key]!="")
          i++;

     });
     if($('.attri_value').length>=2)
     attr = attr.join('-');
    if(i>0)
    {
		 $.ajax({
				url: attr_route,
				type: "POST",
				data:{'attr_set':attr,'_token':$('input[name=_token]').val(),'pro_slug':pro_slug},
				dataType: 'JSON',
				success: function(response) {
					if(response.status!='error')
					{
						var price = response.data['price'];
						var quantity = response.data['quantity'];
							upprice=baseprice+parseInt(price);
							$('#product_price').html(currency+(upprice*quanity)+".00")

							if(quantity>0)
							{
								var msg = '<i class="fa fa-check-circle-o color-in"></i>In Stock';
								$('#instrock').show();
								$('#instrock').html(msg);
								$('#quantity').val(1);
								$('#quantity').attr('max',quantity);

							}
							else
							{

								$('#qty_error').show();
								$('#cart_pro_id').hide();
								$('#instrock').hide();

							}
							//~ if(response.view)
							//~ {
								//~ $('.img').attr('src',response.img);
								 //~ $('.owl-carousel').html(response.view);
									//~ var $owl = $('.owl-carousel');
								//~ $owl.trigger('destroy.owl.carousel');
							//~ }
							$('#extraprice').val(price);
					}
				}
		});

	}
	else
	{
		$('#product_price').html(currency+baseprice)
	}

});

$(document).on('click', '#delivery_here', function(){
		 address_id=$('input[type=radio][name=address]:checked').val();
		 token=$(this).attr('data-token');
		 $('#delivery_here').attr('disabled','disabled');
		 $('#delivery_here').html('Processing');
		 $.ajax({
		 url:order_route,
	     type:"POST",
		 data:{address_id:address_id,'_token': token},
		 dataType: 'json',
		 success: function(response) {
			if(response.success==true){
			 $('#delivery_here').removeAttr('disabled');
				$('#delivery_here').html('Deliver Here');
			window.location.href = payment_route;
			}else if(response.success==false && typeof response.message == 'undefined'){
				 $('#delivery_here').removeAttr('disabled');
					$('#delivery_here').html('Deliver Here');

				toastr['error']("Please Select Any One Address For delivery", "Notifications");
			}else{
				toastr['error'](response.message, "Notifications");
			}

		},
	 });
});

$('#product_sort,#product_no').on('change',function(){
		$.ajax({
		  url: purl,
		  type: "GET",
		  data: $('#seller_pro_form').serialize(),
		  dataType: "json",
		  success: function(data) {
			  $('#product_list').html(data.content);
				$(".rateyo-widg-1").rateYo({
						starWidth: "15px",
						readOnly: true,
						rating: parseFloat($(".rateyo-widg-1").attr('data-rate'))
					});
			 }

		});
});

//**************** Enquiry Product js***********************//

function popup(mobileno) {
 
      $.ajax({
		url: inquiry_route,
		data:{'mobileno':mobileno},
		type: "GET",
		dataType: 'json',
		success: function(response) {
		
			 $('.modal-content').html(response.content);	 
			 	$("#modal-inquiry").modal('toggle');	   
		}
		});
}

$(document).on('click','#resend_otp',function(){
	var mobileno = $(this).attr('data-mobile');
	$.ajax({
		url: resnd_otp,
		data:{'mobileno':mobileno,'_token': $('input[name=_token]').val()},
		type: "POST",
		dataType: 'json',
		success: function(response) {
		
			toastr[response.status](response.message, "Notifications");

		}
		});
	});	
$(document).on('click','#change_mobile_no',function(){
	
	$('#inquiry_form').hide();
		$('#change_mobile').show();

});
	$(".dropdown-tree-a").click(function(){
	$(this).next(".msg_body").slideToggle(100);
	})
	.toggle( function() {
	$(this).children("i").removeClass("fa fa-minus");
	$(this).children("i").addClass("fa fa-plus");
	}, function() {
	$(this).children("i").removeClass("fa fa-plus");
	$(this).children("i").addClass("fa fa-minus");
	});
