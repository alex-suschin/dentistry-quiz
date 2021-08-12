$(function() {



    setTimeout(function() {
        $("header").addClass("header-show");
        $("h1").addClass("h1-show");
        $(".message-box").addClass("message-box-show");
        setTimeout(function() {
            $(".main").removeClass("mainshow");
        }, 250);
    }, 50);

    $(window).on('load', function() {
        let phones = [
            { 'mask': '+7 \\ \\ ###-###-##-##' }
        ];

        $('input[type=tel]').inputmask({
            mask: phones,
            greedy: false,
            definitions: {
                '#': {
                    validator: '[0-9]',
                    cardinality: 1
                }
            }
        });
    });

    $('.message-box div[data-delay-text]').each(function() {
        var delayVal = $(this).attr('data-delay-text');
        // console.log(delayVal);

        setTimeout(() => {
            if ($('.text-print').length == 0) {
                $(this).before('<div class="text-print">Анастасия печатает ...</div>');
            }
        }, delayVal);
    });

    $('.message-box div[data-delay]').each(function() {
        var delayVal = $(this).attr('data-delay');

        setTimeout(() => {

            $(this).addClass('visF');
        }, delayVal - 100);

        setTimeout(() => {

            $(this).addClass('vis');
            $('.text-print').remove();
        }, delayVal);
    });

    setTimeout(() => {
        $('html,body').animate({ scrollTop: $('.services').offset().top + "px" }, { duration: 1E3 });
    }, 5200);




    $('.services-item').click(function() {
        // var newmessBlockH = $('.message-box').outerHeight();
        // var messCarH = $('.js-step-1').outerHeight();
        // $(".message-box").css('height', newmessBlockH + messCarH);
        var optVal = $(this).data('option');
        // $('.message-m .message-text').hide();
        // $('.message-m .message-text' + '.' + optVal).show();

        $('.services-elem').hide();
        $('#' + optVal).show();
        // console.log(optVal);
        $('.js-final-message').removeClass('vis visF');
        flag = false;
        $('#' + optVal).children('.js-step-1').removeClass('visF');
        $('#' + optVal).children('.js-step-1').removeClass('vis');
        $('#' + optVal).find('.js-step-1').next('.message-m').removeClass('vis');
        $('#' + optVal).find('.js-step-1').next('.message-m').removeClass('visF');
        // $('.js-problem-check').removeClass('vis');
        // $('.js-problem-check').removeClass('visF');
        // $('.js-final-message').removeClass('vis');
        // $('.js-final-message').removeClass('visF');
        // $('.js-problem-check-answear').removeClass('vis');
        // $('.js-problem-check-answear').removeClass('visF');
        $('.btns label').removeClass('active');
        var valueServ = $(this).children('input:checked').val();

        $('#' + optVal).children('.js-step-1').find('.message-text').text(valueServ);

        setTimeout(() => {
            $('#' + optVal).children('.js-step-1').addClass('visF');
        }, 1);


        setTimeout(() => {
            $('#' + optVal).children('.js-step-1').addClass('vis');
        }, 100);

        setTimeout(() => {
            $('html,body').animate({ scrollTop: $('#' + optVal).children('.js-step-1').offset().top + "px" }, { duration: 1E3 });
        }, 150);



        setTimeout(() => {
            if ($('.text-print').length == 0) {
                $('#' + optVal).children('.js-step-1').after('<div class="text-print text-car-check">Анастасия печатает ...</div>');
            }
        }, 350);

        setTimeout(() => {
            $('.text-car-check').remove();
        }, 1200);

        setTimeout(() => {
            $('#' + optVal).find('.js-step-1').next('.message-m').addClass('visF');
        }, 1200);

        setTimeout(() => {
            $('#' + optVal).find('.js-step-1').next('.message-m').addClass('vis');
        }, 1300);




    });

    $('.back-step').click(function(e) {
        setTimeout(() => {
            $('html,body').animate({ scrollTop: $(this).closest('.message-item').prev('.message-y').prev('.message-item').offset().top + "px" }, { duration: 300 });
        }, 150);
        e.preventDefault();
        setTimeout(() => {
            $(this).closest('.message-item').removeClass('vis');
            $(this).closest('.message-item').prev('.message-y').removeClass('vis');
            $(this).closest('.message-item').next('.message-y').removeClass('vis');
            $(this).closest('.message-item~.message-item').removeClass('vis');
        }, 250);
        setTimeout(() => {
            $(this).closest('.message-item').removeClass('visF');
            $(this).closest('.message-item').prev('.message-y').removeClass('visF');
            $(this).closest('.message-item').next('.message-y').removeClass('visF');
            $(this).closest('.message-item~.message-item').removeClass('visF');
        }, 350);
        // $(this).closest('.message-item').removeClass('vis visF');
        // $(this).closest('.message-item').prev('.message-y').removeClass('vis visF');
        // $(this).closest('.message-item').next('.message-y').removeClass('vis visF');
        $(this).closest('.message-item').prev('.message-y').prev('.message-item').find('.btns').removeClass('btns-checked');
        $(this).closest('.message-item').prev('.message-y').prev('.message-item').children('.back-step').removeClass('back-step-dis');
        $(this).closest('.message-item').prev('.message-y').prev('.message-item').find('.btns label').removeClass('active');
        $(this).siblings('.message-info').find('.btns').removeClass('btns-checked');
        $(this).siblings('.message-info').find('.btns').children('label').removeClass('active');
        // $(this).closest('.message-item~.message-item').removeClass('vis visF');
        $('.js-final-message').removeClass('vis visF');

    });

    $('.services-item').click(function() {
        $('.services-item').removeClass('active');
        $(this).addClass('active');
        // $('.message-text').hide();
        // $('.message-text' + '.' + optVal).show();

    });

    $('.btns').each(function() {
        $(this).children('label').click(function() {
            $(this).parents('.btns').addClass('btns-checked');
            $(this).closest('.message-item').children('.back-step').addClass('back-step-dis');
            var elemThis = $(this).closest('.message-item-m');
            var idVal = $(this).closest('.message-item-m').attr('id');
            // console.log(idVal);
            $('.js-final-message').removeClass('vis');
            $('.js-final-message').removeClass('visF');
            $(this).siblings('label').removeClass('active');
            $(this).addClass('active');

            var NextEl = $(this).closest('.message-item').next('.message-item').next('.message-item').length;

            var valueMoney = $(this).children('input:checked').val();
            // console.log(valueMoney);
            $(this).closest('.messag-elem').next('.message-y').find('.message-text').text(valueMoney);


            setTimeout(() => {
                $(this).closest('.messag-elem').next('.message-y').addClass('visF');
            }, 100);




            setTimeout(() => {
                $(this).closest('.messag-elem').next('.message-y').addClass('vis');
            }, 200);

            setTimeout(() => {
                $('html,body').animate({ scrollTop: $(this).closest('.messag-elem').next('.message-y').offset().top + "px" }, { duration: 1E3 });
            }, 400);

            setTimeout(() => {
                if ($('.text-print').length == 0 && NextEl != 0) {
                    $(this).closest('.messag-elem').next('.message-y').after('<div class="text-print text-money-check">Анастасия печатает ...</div>');
                }
            }, 600);

            setTimeout(() => {
                $(this).closest('.messag-elem').next('.message-y').next('.messag-elem').addClass('visF');
                $('.text-money-check').remove();

            }, 1500);



            setTimeout(() => {
                $(this).closest('.messag-elem').next('.message-y').next('.messag-elem').addClass('vis');

            }, 1600);






            // console.log(NextEl);
            if (NextEl == 0) {
                setTimeout(() => {
                    if ($('.text-final').length == 0) {
                        $('.js-final-message').before('<div class="text-print text-final">Анастасия печатает ...</div>');
                    }
                }, 400);

                setTimeout(() => {
                    $('.js-final-message').addClass('visF');
                    $('.text-final').remove();
                }, 1500);

                setTimeout(() => {
                    $('.js-final-message').addClass('vis');
                }, 1600);


            }



            // setTimeout(() => {
            //     $('.js-final-message').addClass('visF');
            // }, 1600);

            // setTimeout(() => {
            //     $('.js-final-message').addClass('vis');
            //     $('.text-final').remove();
            // }, 1700);



        });
    });



});




$('.car-item').click(function() {
    $('.car-item').removeClass('active');
    $(this).addClass('active');
});

$('.btns a').click(function(e) {
    e.preventDefault();
    $('.btns a').removeClass('active');
    $(this).addClass('active');
});

$("body").on("keyup", ".inpphone", function() {
    if ($(this).val() != "") {
        $(".butphone").addClass("butphoneshow");
    } else {
        $(".butphone").removeClass("butphoneshow");
    }
});

$(window).on('load resize', function() {

    var width = $(window).width();
    if (width > '700') {}

});
//# sourceMappingURL=../sourcemaps/main.js.map