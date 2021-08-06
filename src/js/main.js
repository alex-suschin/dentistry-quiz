$(function() {



    setTimeout(function() {
        $("header").addClass("header-show");
        $("h1").addClass("h1-show");
        $(".exs-items").addClass("exs-items-show");
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
                $(this).before('<div class="text-print">Виктор печатает ...</div>');
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
        $('html,body').animate({ scrollTop: $('.cars').offset().top + "px" }, { duration: 1E3 });
    }, 5200);


    $('.car-item').click(function() {
        // var newmessBlockH = $('.message-box').outerHeight();
        // var messCarH = $('.js-message--check-car').outerHeight();
        // $(".message-box").css('height', newmessBlockH + messCarH);

        flag = false;
        $('.js-money-check').removeClass('vis');
        $('.js-money-check').removeClass('visF');
        $('.js-final-message').removeClass('vis');
        $('.js-final-message').removeClass('visF');
        $('.js-message--check-money').removeClass('vis');
        $('.js-message--check-money').removeClass('visF');
        $('.btns label').removeClass('active');
        var valueCar = $(this).children('input:checked').val();
        $('.js-message--check-car').addClass('vis');
        $('.js-message--check-car .message-text').text(valueCar);


        setTimeout(() => {
            $('.js-message--check-car').addClass('visF');
        }, 100);

        setTimeout(() => {
            $('html,body').animate({ scrollTop: $('.js-message--check-car').offset().top + "px" }, { duration: 1E3 });
        }, 150);



        setTimeout(() => {
            if ($('.text-print').length == 0) {
                $('.js-message--check-car').after('<div class="text-print text-car-check">Виктор печатает ...</div>');
            }
        }, 200);

        setTimeout(() => {
            $('.js-money-check').addClass('visF');
        }, 300);

        setTimeout(() => {
            $('.js-money-check').addClass('vis');
            $('.text-car-check').remove();
        }, 1200);


    });

    $('.btns label').click(function() {

        $('.js-final-message').removeClass('vis');
        $('.js-final-message').removeClass('visF');
        $('.btns label').removeClass('active');
        $(this).addClass('active');

        var valueMoney = $(this).children('input:checked').val();
        $('.js-message--check-money').addClass('vis');
        $('.js-message--check-money .message-text').text(valueMoney);



        setTimeout(() => {
            $('.js-message--check-money').addClass('visF');
        }, 300);

        setTimeout(() => {
            $('html,body').animate({ scrollTop: $('.js-message--check-money').offset().top + "px" }, { duration: 1E3 });
        }, 400);

        setTimeout(() => {
            if ($('.text-print').length == 0) {
                $('.js-message--check-money').after('<div class="text-print text-money-check">Виктор печатает ...</div>');
            }
        }, 600);

        setTimeout(() => {
            $('.js-money-check').addClass('vis');
            $('.text-money-check').remove();
        }, 1600);

        // setTimeout(() => {
        //     if ($('.text-print').length == 0) {
        //         $('.js-message--check-money').after('<div class="text-print text-final">Виктор печатает ...</div>');
        //     }
        // }, 1500);

        setTimeout(() => {
            $('.js-final-message').addClass('visF');
        }, 1600);

        setTimeout(() => {
            $('.js-final-message').addClass('vis');
            $('.text-final').remove();
        }, 1700);



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