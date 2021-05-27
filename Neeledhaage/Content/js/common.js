var Common = {
    DefaultPageSize: 10,
    NoRecordFound: "No record found",
    SomethingWentWrong: "Something went wrong. Please contact to administrator.",
    FormatDate: function (data) {
        if (data) {
            var date = new Date(data);
            var month = date.getMonth() + 1;
            return (month.toString().length > 1 ? month : "0" + month) + "/" + date.getDate() + "/" + date.getFullYear();
        }
        return '';
    }
}

var defaultDatePickerOptions = {
    autoclose: true,
    format: 'dd/mm/yyyy',
    //endDate: new Date(),
    daysOfWeekDisabled: [0],
    todayBtn: 'linked'
}

var defaultTimePickerOptions = {
    icons: {
        up: "fa fa-arrow-up",
        down: "fa fa-arrow-down",
    }
};


$.fn.serializeFormJSON = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

$(window).scroll(function () {
    let body = $('body');
    let scroll = $(window).scrollTop();

    if (scroll >= 10) {
        body.addClass('fixed');
    } else {
        body.removeClass('fixed');
    }
});


$(document).ready(function () {
    //$('#lightgallery').lightGallery();
});

//$('.testimonials-slider').owlCarousel({
//    loop: false,
//    nav: false,
//    autoplay: true,
//    dots: true,
//    touchDrag: true,
//    mouseDrag: true,
//    animateOut: 'fadeOut',
//    autoplayHoverPause: true,
//    responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } }
//});
//$('.school-pro-slider').owlCarousel({
//    loop: false,
//    nav: false,
//    autoplay: true,
//    dots: true,
//    touchDrag: true,
//    mouseDrag: true,
//    animateOut: 'fadeOut',
//    autoplayHoverPause: true,
//    responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } }
//});
//$('.academics-slider').owlCarousel({
//    loop: false,
//    nav: false,
//    autoplay: true,
//    dots: true,
//    touchDrag: true,
//    mouseDrag: true,
//    animateOut: 'fadeOut',
//    autoplayHoverPause: true,
//    responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } }
//});


var $element = $('input[type="range"]');
var $output = $('output');

//$element.rangeslider({
//    polyfill: false,
//    onInit: function () {
//        $output[0].textContent = this.value;
//    }
//}).on('input', function () {
//    $output[0].textContent = this.value;
//});


$(document).ready(function () {
});

$(document).ready(function () {
    $("#show_hide_password a").on('click', function (event) {
        event.preventDefault();
        if ($('#show_hide_password input').attr("type") == "text") {
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass("fa-eye-slash");
            $('#show_hide_password i').removeClass("fa-eye");
        } else if ($('#show_hide_password input').attr("type") == "password") {
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass("fa-eye-slash");
            $('#show_hide_password i').addClass("fa-eye");
        }
    });
});

$(document).ready(function () {

    $('.mobile_no_input_validation').keypress(function (event) {
        if (isSelectedMobileNo == true) {
            $(".mobile_no_input_validation").val('');
            isSelectedMobileNo = false;
        }
        return numberFieldValidation(this, event, 10);
    });

    $('.establish_year_input_validation').keypress(function (event) {
        if (isEstablishyear == true) {
            $(".establish_year_input_validation").val('');
            isEstablishyear = false;
        }
        return numberFieldValidation(this, event, 10);
    });

    $('.zip_code_input_validation').keypress(function (event) {
        if (isSelectedZipNo == true) {
            $(".zip_code_input_validation").val('');
            isSelectedZipNo = false;
        }
        return numberFieldValidation(this, event, 6);
    });

    $('.otp_input_validation').keypress(function (event) {
        return numberFieldValidation(this, event, 6);
    });


    $(':text').keypress(function (event) {
        $(this).removeClass('is-invalid');
        $(this).parent().find('span.invalid-feedback').text('');
        $(this).parent().parent().find('span.invalid-feedback').text('');
    });

    $('select').change(function (event) {
        $(this).removeClass('is-invalid');
        $(this).parent().find('span.invalid-feedback').text('');
    });

    $('.reset_error_on_keypress').keypress(function (event) {
        $(this).removeClass('is-invalid');
        $(this).parent().parent().find('span.invalid-feedback').text('');
    });

    $(".has-char-count[maxlength]").keyup(function () {
        console.log("comming");
        var total = $(this).attr("maxlength");
        var consumed = this.value.length;
        console.log("consumed 1", consumed);


        if (consumed <= total) {
            if ($(this).parent().find(".max-length-counter").length > 0) {
                console.log("consumed 2", consumed);
                $(this).parent().find(".max-length-counter").text(consumed + "/" + total);
                console.log("consumed 3", consumed);
            } else {
                console.log("consumed 4", consumed);
                $(this).parent().append("<span class='max-length-counter success'>" + consumed + "/" + total + "</span>");
                console.log("consumed 5", consumed);
            }
        }

    });

    var isSelectedMobileNo = false;
    $(".mobile_no_input_validation").select(function () {
        isSelectedMobileNo = true;
    });

    var isEstablishyear = false;
    $("establish_year_input_validation").select(function () {
        isEstablishyear = true;
    });

    var isSelectedZipNo = false;
    $(".zip_code_input_validation").select(function () {
        isSelectedZipNo = true;
    });

    function numberFieldValidation(element, event, length) {
        if (element.value != undefined && element.value.length >= length) {
            return false;
        }
        var keyCode = event.which ? event.which : event.keyCode
        if (!(keyCode >= 48 && keyCode <= 57)) {
            return false;
        }
        return true;
    }
   

    $('.datepicker').bootstrapDP(defaultDatePickerOptions)

    $('.timepicker').timepicker(defaultTimePickerOptions);

});


function gotoSearchPanel() {
    if (window.location.pathname == "/") {
        $("body, html").animate({
            scrollTop: 0
        });
        $('#search').focus();
    } else {
        window.location.href = "/";
    }
}

function buttonLoadingStart(button) {
    if (button) {
        button.html('<i class="fa fa-spinner fa-pulse fa-fw loader mr-1"></i>' + button.html());
        button.prop('disabled', true);
    }
}

function buttonLoadingEnd(button) {
    if (button) {
        button.find('.fa-spinner').remove();
        button.prop('disabled', false);
    }
}

function ConvertDateIntoDDMMYYYY(date) {
    var nd = new Date(date);
    nd = nd.getDate() + '/' + (nd.getMonth() + 1) + '/' + nd.getFullYear()
    return nd;
}

function bindSelect(data, ele, textProp, valueProp, isDefaultOption = true) {
    $(ele).html('');
    var html = isDefaultOption ? '<option value="0">Select</option>' : '';
    if (data && data.length > 0) {
        $(data).each(function (index, item) {
            html += '<option value="' + item[valueProp] + '">' + item[textProp] + '</option>'
        })
    }
    $(ele).html(html);
}

function ajaxGet(url, data, successCallback, errorCallback) {
    if (!errorCallback) {
        errorCallback = defaultErrorCallback;
    }
    callAjax(url, 'GET', data, successCallback, errorCallback)
}

function defaultErrorCallback(e) {
    console.error(e);
    toastr.error(Common.SomethingWentWrong);
    $('.fa-spinner').each(function (index, item) {
        buttonLoadingEnd($(item).closest('button'));
    })
}

function ajaxPost(url, data, successCallback, errorCallback) {
    if (!errorCallback) {
        errorCallback = defaultErrorCallback;
    }
    callAjax(url, 'POST', data, successCallback, errorCallback)
}

function callAjax(url, method, data, successCallback, errorCallback) {
    $.ajax({
        url: url,
        method: method,
        data: data,
        success: successCallback,
        error: errorCallback
    })
}
$(function () {
    $(document).on('keypress', '.decimal', function (event) {
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) &&
            ((event.which < 48 || event.which > 57) &&
                (event.which != 0 && event.which != 8))) {
            event.preventDefault();
        }
        var text = $(this).val();
        if ((text.indexOf('.') != -1) &&
            (text.substring(text.indexOf('.')).length > 7) &&
            (event.which != 0 && event.which != 8)) {
            event.preventDefault();
        }
    });
    $(document).on("keypress", '.number', function (event) {
        if (event.ctrlKey) {
            return true;
        }
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57) && event.which != 8 && event.which != 0) {
            event.preventDefault();
        }
    });
    $(document).on("paste", '.number', function (e) {
        var pastedData = e.originalEvent.clipboardData.getData('text');
        var intRegex = /^\d+$/;
        if (intRegex.test(pastedData)) {
            return true;
        }
        else {
            return false;
        }
    });
    $(document).on("keypress", '.alphanumeric', function (event) {
        var mask = new RegExp('^[A-Za-z0-9 ]*$')
        if (!event.charCode) return true;
        var part1 = this.value.substring(0, this.selectionStart);
        var part2 = this.value.substring(this.selectionEnd, this.value.length);
        if (!mask.test(part1 + String.fromCharCode(event.charCode) + part2))
            return false;
    });
    $(document).on("paste", '.alphanumeric', function (e) {
        var pastedData = e.originalEvent.clipboardData.getData('text').replace('"', '');
        var d = pastedData.trim().replace('"', '');
        var intRegex = new RegExp('^[A-Za-z0-9 ]*$');
        if (intRegex.test(d)) {
            return true;
        }
        else {
            return false;
        }
    });

    $('.submit-enquiry').click(function (e) {
        var $this = this;
        if ($($this).closest('.enquiry-form').valid()) {
            buttonLoadingStart($($this));
            ajaxPost('/school/save-enquiry', $($this).closest('.enquiry-form').serialize(), function (data) {
                if (data.status) {
                    //toastr.success(data.message);
                    $($this).closest('.modal').modal('hide');
                    $($this).closest('.enquiry-form')[0].reset();
                    $('#admission_success_modal').modal('show');
                }
                else {
                    toastr.error(data.message);
                }
                buttonLoadingEnd($($this));
            });
        }
        e.preventDefault();
    })

    $('[class="input-group date"] input').blur(function () {
        var date = $(this).val();
        if (!IsValidDDMMYYYDateFormat(date)) {
            $(this).val('');
        }
    });

})

function openAdmissionApplyModal() {
    $('#admission_apply_modal').modal('show');
}

function closeAdmissionApplyModal() {
    $('#admission_apply_modal').modal('hide');
}

function IsValidDDMMYYYDateFormat(txtDate) {
    var currVal = txtDate;
    if (currVal == '')
        return false;
    //Declare Regex
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dtArray = currVal.match(rxDatePattern); // is format OK?
    if (dtArray == null)
        return false;
    //Checks for mm/dd/yyyy format.
    dtDay = dtArray[1];
    dtMonth = dtArray[3];
    dtYear = dtArray[5];
    if (dtMonth < 1 || dtMonth > 12)
        return false;
    else if (dtDay < 1 || dtDay > 31)
        return false;
    else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
        return false;
    else if (dtMonth == 2) {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay > 29 || (dtDay == 29 && !isleap))
            return false;
    }
    if (dtYear < 1900)
        return false;
    return true;
}

function ConvertDDMMYYYYToDate(date) {
    if (date) {
        var dateParts = date.split("/");
        var dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // month is 0-based
        return dateObject;
    }
    return undefined;
}
