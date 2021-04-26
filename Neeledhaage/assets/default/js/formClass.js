$(document).ready(function() {

	$(document).on("submit", ".ajaxform", function (event) {
	var posturl=$(this).attr('action');
	var callbackFunction=$(this).attr('data-callback_function');
	if(callbackFunction)
	{
		if(callbackForm(callbackFunction) == false)
		{
			return false;
		}
	}
	var btn_txt;
	var formid = $(this).attr('id');
	if(formid)
	var formid = '#'+formid;
	else
	var formid = ".ajaxform";

	$(this).ajaxSubmit({
			url: posturl,
			dataType: 'json',
			beforeSend: function(){
			$(formid).find('.selectOption').removeClass('state-error');
			$(formid).find('.form-group').removeClass('has-error');
			$(formid).find('.box-placeholder').removeClass('box-placeholder');
			$(formid).find('.alert').removeClass('alert-info').removeClass('alert-success').removeClass('alert-danger').fadeIn(200);
			$(formid).find('.alert').addClass('alert-info');
			$(formid).find('.alert').show();
			$(formid).find('.ajax_message').html('<strong>Please Wait ! <i class="fa fa-spinner fa-spin" aria-hidden="true"></i></strong>');


				$('.formmessage').remove();


				$(formid).find('.alert').removeClass('alert-success').removeClass('alert-danger').removeClass('alert-info');
				$(formid).find('.alert').addClass('alert-info').children('.ajax_message').html('<p><strong>Please wait! </strong>Your action is in proccess...</p>');

				btn_txt = $(formid).find("input[type=submit]").html();
				if(!isset(btn_txt))
				{
					btn_txt = $(formid).find("button[type=submit]").html();
				}

			$(formid).find("input[type=submit]").html('<i class="fa fa-circle-o-notch fa-spin"></i>&nbsp;Please wait');
			$(formid).find("button[type=submit]").html('<i class="fa fa-circle-o-notch fa-spin"></i>&nbsp;Please wait');

				$(formid).find("input[type=submit]").attr("disabled", "disabled");
				$(formid).find("button[type=submit]").attr("disabled", "disabled");
			},
			success: function(response){
				$(formid).find("input[type=submit]").removeAttr("disabled");
				$(formid).find("button[type=submit]").removeAttr("disabled");
				$(formid).find("input[type=submit]").html(btn_txt);
				$(formid).find("button[type=submit]").html(btn_txt);

				$('#wait-div').hide();
				$(formid).find('.alert').removeClass('alert-success').removeClass('alert-danger').removeClass('alert-info');
				
				
				
				if(response.success == 'false')
				{
					$(formid).find('.alert').fadeIn();
					$(formid).find('.alert').addClass('alert-success').children('.ajax_message').html(response.message);
				}

				if(response.restore_error)
				{
					$(formid).find('.alert').show();
					$(formid).find('.alert').html(response.restore_error);
				}
				else if(response.message)
				{
					//~ if(response.success){
					//~ toastr[response.status](response.message, "Notifications");
					//~ }
					//~ else
					 if(response.status)
					toastr[response.status](response.message, "Notifications");
					

					if(response.messageNot)
					{
						$(formid).find('.alert').fadeOut(100);
					}
					else
					{
						$(formid).find('.alert').fadeIn(200);

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
					}
				}
				else
				{
					$(formid).find('.alert').fadeOut(100);
				}
				if(response.discount)
				{
					//$("#grandTotal").load(location.href + " #grandTotal");
					$("#grandTotal").load(" #grandTotal > *");
				}
				if(response.set_table)
				{
					
					$('#edit_set').html(response.set_table);
				}
				if(response.effect)
				{
					$('#cb').html(response.current_balance);
					$('#wa').html(response.withdrawl);
				}
				if(response.reload==true)
				 location.reload();

				if(response.resetform)
				$(formid).resetForm();

				if(response.modalname)
				$(response.modalname).modal('toggle');

				if(response.url)
				window.location.href=response.url;

				if(response.parentUrl)
				window.top.location.href = response.parentUrl;

				if(response.selfReload)
				window.location.reload();

				if(response.slideToThisDiv)
				slideToDiv(response.divId);

				if(response.slideToTop)
				slideToTop();

				if(response.scrollToThisForm)
				slideToElement(formid);

				if(response.ajaxPageCallBack)
				{
					response.formid = formid;
					ajaxPageCallBack(response);

				}
				if(response.popup)
				{
					popup(response.mobileno);

				}
				if(response.ajaxPageCallBackData)
				{
					response.formid = formid;
					ajaxPageCallBackData(response);
				}
				if(response.hideModel)
				{
					setTimeout(function()
					{
						$('.modal').modal('hide');
					},500);
				}
				
				setTimeout(function() {
					$(formid).find('.ajax_report').fadeOut(1000);
				}, 7000);
			},
			error:function(response){
					$(formid).find('.alert').fadeOut(100);
					$(formid).find("input[type=submit]").removeAttr("disabled");
					$(formid).find("button[type=submit]").removeAttr("disabled");
					$(formid).find("input[type=submit]").html(btn_txt);
					$(formid).find("button[type=submit]").html(btn_txt);
					$(formid).find('.alert').fadeIn();
					$(formid).find('.alert').addClass('alert-danger').children('.ajax_message').html('OOps Some Error Occured!!');

				var data = response.responseJSON;

                //~ $.each(data, function( key, value ) {
					//~ console.log(key + " => " + value);
					//~ var msg = '<label class="error formmessage error2" for="'+key+'"  style="color:red">'+value+'</label>';
					//~ $(formid).find('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').last().addClass('inputTxtError').after(msg);

				//~ });
		  $.each(data, function(key, value) {
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
						
                    });
               
		  //~ $.each(data, function( key, value ) {
					//~ console.log(key + " => " + value);
					//~ var msg = '<label class="error formmessage" for="'+key+'"  style="color:red">'+value+'</label>';
					//~ $(formid).find('input[name="' + key + '"], select[name="' + key + '"],textarea[name="' + key + '"]').last().addClass('inputTxtError').parent('.form-group').after(msg);

				//~ });
		
		
			}
		});
	return false;
	});

	$(document).on("click", ".alert .close", function (event) {
		$(this).closest(".ajax_report").hide();
		$(this).closest(".alert").hide();
	});
});

function slideToElement(element,position)
{
	var target = $(element);

	$('html, body').animate({
		scrollTop: target.offset().top-100
	}, 500);
}

function slideToDiv(element)
{
	$("html, body").animate({scrollTop: $(element).offset().top-50 }, 1000);
}
function slideToTop()
{
	$("html, body").animate({scrollTop: 50}, 1000);
}

function isset(variable)
{
	if(typeof(variable) != "undefined" && variable !== null)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function hide_alert_message(){
	setTimeout(function() {
		$('.alert.alert-dismissable').fadeOut(1000);
	}, 3000);
}
