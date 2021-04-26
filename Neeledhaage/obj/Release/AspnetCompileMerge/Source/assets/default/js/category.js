$('body').delegate('.heart','click', function (){
		     	var slug= $(this).data('id');

				var url= $(this).data('url');
                 var myurl=  url;

				$.ajax({

						url: myurl,
						type: "GET",
						dataType: 'JSON',
						data: {

								'_token': $('input[name=_token]').val(),


				                },
				        success: function(response){
                   if(response.success==true)
		           	{
						toastr[response.status]("Successfully Added In Wishlist", "Notifications");
						   $('.heart_inactive_'+slug).attr('src',addurl);
						   $('.heart_inactive_'+slug).attr('class','heart_active_'+slug);
					}
					else
					{
						 toastr[response.status]("Successfully Remove From Wishlist", "Notifications");
						   $('.heart_active_'+slug).attr('src',removeurl);
						   $('.heart_active_'+slug).attr('class','heart_inactive_'+slug);
					}
					 $('.wishlistcount').html();
					 $('.wishlistcount').html(response.total_count);
					
					


							},
				error:function (response)
				{
				if(response.status==401)
				window.location.href=login;
				}



		        });



		});

$('body').delegate('.add-to-fav','click', function (){
		     	var slug= $(this).data('id');
				var url= $(this).data('url');
                var myurl=  url;
				$.ajax({
						url: myurl,
						type: "GET",
						dataType: 'JSON',
						data: {
								'_token': $('input[name=_token]').val(),
							},
				        success: function(response){
						   if(response.success==true)
							{
								toastr[response.status]("Successfully Added In Wishlist", "Notifications");
								$('.add-to-fav').addClass('active');
								   //~ $('.heart_inactive_'+slug).attr('src',addurl);
								   //~ $('.heart_inactive_'+slug).attr('class','heart_active_'+slug);
							}
							else
							{
								 toastr[response.status]("Successfully Remove From Wishlist", "Notifications");
								 $('.add-to-fav').removeClass('active');
								   //~ $('.heart_active_'+slug).attr('src',removeurl);
								   //~ $('.heart_active_'+slug).attr('class','heart_inactive_'+slug);
							}

						},
				error:function (response)
				{
				if(response.status==401)
				window.location.href=login;
				}
		});
});


 $('input:checkbox,input:radio,select').on('click',function(){
		//alert(purl);
		 page = 2;
		 $('#pleaseWaitDialog').modal();
		//~ $('#loading-image').show();
		 //~ $('#product_list').hide();
		
	var getclass = 	$(this).attr('class');
	if(getclass == 'allcheck')
	{
	$(this).closest('ul'). find('li > ul input').prop('checked',true);

 //   $("input:checkbox").prop('checked', $(this).prop("checked"));
	}
	if(getclass == 'parentcat')
	{

	var checked = $(this).is(':checked');
	if(checked){			
		$(this).closest('li'). find('ul > li input').prop('checked',true);
	} else {
		$(this).closest('li'). find('ul > li input').prop('checked',false);
	}

	}
	
		
		var values = $("input[name^='category']").map(function (idx, ele) {
   var cat =  $(ele).val();
   
}).get();
		
		$.ajax({
		  url: purl,
		  type: "GET",
		  data: $('#top-search,#price_form,#clothing_type_form,#fabric_form,#color_form,#craft_form,#category_form,#category_men_form,#category_other_form').serialize(),
		  dataType: "json",
		   beforeSend: function(){
            $("#loading-overlay").show();
        },
		  success: function(data) {
			   
				$('#product_list').html(data.content);
			  	$('#no_of_product').html(data.countnew);
				
			 },
			complete: function(){
				$('#pleaseWaitDialog').modal('hide');
				//~ $('#loading-image').hide();
				//~ $('#product_list').show();
			},

		});
		

});



$(document).on('keydown','#count',function(e){
	if (e.keyCode == 38)
    {
		var qty = parseInt($(this).val());
		if(qty<99)
		{
			qty = qty+1;
			$(this).val(qty);
		}          
	} 
     if (e.keyCode == 40)
    {
		var qty = parseInt($(this).val());
		if(qty>1)
		{
			qty = qty-1;
			$(this).val(qty);
		}
	} 
});
