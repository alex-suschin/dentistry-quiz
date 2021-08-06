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

        flag = false;
        $('.js-problem-check').removeClass('vis');
        $('.js-problem-check').removeClass('visF');
        $('.js-final-message').removeClass('vis');
        $('.js-final-message').removeClass('visF');
        $('.js-problem-check-answear').removeClass('vis');
        $('.js-problem-check-answear').removeClass('visF');
        $('.btns label').removeClass('active');
        var valueCar = $(this).children('input:checked').val();

        $('.js-step-1 .message-text').text(valueCar);

        setTimeout(() => {
            $('.js-step-1').addClass('visF');
        }, 1);


        setTimeout(() => {
            $('.js-step-1').addClass('vis');
        }, 100);

        setTimeout(() => {
            $('html,body').animate({ scrollTop: $('.js-step-1').offset().top + "px" }, { duration: 1E3 });
        }, 150);



        setTimeout(() => {
            if ($('.text-print').length == 0) {
                $('.js-step-1').after('<div class="text-print text-car-check">Виктор печатает ...</div>');
            }
        }, 200);

        setTimeout(() => {
            $('.js-problem-check').addClass('visF');
        }, 300);

        setTimeout(() => {
            $('.js-problem-check').addClass('vis');
            $('.text-car-check').remove();
        }, 1200);


    });

    $('.services-item').click(function() {
        $('.services-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.btns').each(function() {
        $(this).children('label').click(function() {
            var elemThis = $(this).closest('.message-item-m');
            var idVal = $(this).closest('.message-item-m').attr('id');
            console.log(idVal);
            $('.js-final-message').removeClass('vis');
            $('.js-final-message').removeClass('visF');
            $(this).siblings('label').removeClass('active');
            $(this).addClass('active');

            var valueMoney = $(this).children('input:checked').val();
            console.log(valueMoney);
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
                if ($('.text-print').length == 0) {
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
//# sourceMappingURL=../sourcemaps/main.js.map
