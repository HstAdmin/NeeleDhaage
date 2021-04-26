
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


$('.forgot_pass_checkout').click(function(){
$('#passform').hide();
	$('.login_forgot_option').show();

		});
$('.back_login_forgot_option').click(function(){
$('#passform').show();
	$('.login_forgot_option').hide();

		});

function check_forgot_option(el)
{
      var value=    el;

    if( value == 'otp_mobile'){


           $('.mobile_no_input').show();
            $('.email_input').hide();

		}
		else if( value == 'tmp_pass_email'){
           $('.email_input').show();
             $('.mobile_no_input').hide();

		}


}

function ajaxPageCallBack(data)
{
				if(data.callback_type =="forgot_option"){
		$('#login_option_div').hide();
		$('#otpform').show();
		}
		if(data.callback_type =="forgot_option_email"){
		$('#login_option_div').hide();
		$('#otpform').show();
		}
		if(data.callback_type =="forgot_option_main"){
		$('.login_forgot_option').hide();
		$('#passform').show();
		}

	}

//====== wish list remove
$(function() {
  $('body').delegate('.trash', 'click', function() {
    var member_id = id;
    var slug = $(this).data('id');
    var url = $(this).data('url');
    var myurl = url;
    $.ajax({
      url: myurl,
      type: "GET",
      dataType: 'html',
      data: {
        '_token': $('input[name=_token]').val(),
      },
      success: function(response) {
        //
		setTimeout(function(){
			$('#tblwishlist').load(document.URL +  ' #tblwishlist');
			location.reload();
		},1000);
//        $('#wish_product').html(response);
        toastr["success"]("Successfully Remove From Wishlist", "Notifications");
      }
    });
  });



});


