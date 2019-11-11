$(document).ready(function () {
    $('.form-signup').on('submit', function (e) {
        e.preventDefault();
        let form = $('form').serializeArray();
        console.log(form);
        $.ajax({
            url: "/norm_home2/reg.php",
            method: "POST",
            data: form,
            dataType: "json",
            success: function (result) {

                $.each(form, function (key, value) {
                    $('[name="' + value.name + '"]').css('border', 'none');
                });
                $('.error').hide();
                console.log(result);
                if (result.status) {
                    //
                    //     $('.error').show();
                    //     $('.error').html(result.message);
                    //     $('.error').css('color', 'green');
                    //     $('.form-signup').hide();
                } else {

                    $('.error').show();
                    $('.error').html('Неверно заполнено поле.');
                    $('.error').css('color', 'red');
                    $.each(result.errors, function (key, value) {
                        $('[name="' + value + '"]').css('border', '1px solid red');
                        console.log(value);
                    });

                }
            }
        });
    });
    $('.form-signin').on('submit', function (e) {
        e.preventDefault();
        let form = $('.form-signin').serializeArray();
        console.log(form);
        $.ajax({
            url: "/norm_home2/auth.php",
            method: "POST",
            data: form,
            dataType: "json",
            success: function (result) {

                $.each(form, function (key, value) {
                    $('[name="' + value.name + '"]').css('border', 'none');
                });
                // $('.error').hide();
                console.log(result);
                if (result.status) {
                    //
                    //     $('.error').show();
                    //     $('.error').html(result.message);
                    //     $('.error').css('color', 'green');
                    // $('.form-signin').hide();
                    // $(function() {
                    $(".btn-signin").click(function() {
                        $(".btn-animate").toggleClass("btn-animate-grow");
                        $(".welcome").toggleClass("welcome-left");
                        $(".cover-photo").toggleClass("cover-photo-down");
                        $(".container").toggleClass("container-short");
                        $(".profile-photo").toggleClass("profile-photo-down");
                        $(".btn-goback").toggleClass("btn-goback-up");
                        $(".forgot").toggleClass("forgot-fade");
                    });
                } else {

                    $('.error').show();
                    $('.error').html('Неверно заполнено поле.');
                    $('.error').css('color', 'red');
                    $.each(result.errors, function (key, value) {
                        $('[name="' + value + '"]').css('border', '1px solid red');
                        console.log(value);
                    });

                }
            }
        });
    });
});

$(function() {
	$(".btn").click(function() {
		$(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".container").toggleClass("container-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(this).removeClass("idle").addClass("active");
	});
});

// $(function() {
//     $(".btn-signup").click(function() {
//         $(".nav").toggleClass("nav-up");
//         $(".form-signup-left").toggleClass("form-signup-down");
//         $(".success").toggleClass("success-left");
//         $(".container").toggleClass("container-short");
//     });
// });

