$(function () {

    // Кнопка поиска 

    $('.search-btn').click(function () {
        $('.header-form').toggleClass('active');
        $('body').toggleClass('scroll');
    })

    // Меню

    $('.burger').click(function () {
        $('.burger span').toggleClass('active');
        $('.menu__list').toggleClass('active');
        $('body').toggleClass('scroll');
        $('.logo').toggleClass('d-none');  
    })

    $('.menu__link.scrollTo').click(function () {
        $('.burger span').removeClass('active');
        $('.menu__list').removeClass('active');
        $('body').removeClass('oveflow');
      })
    
    // Юзер панель

    $('.user-panel__btn').click( function () {
        $('.user-panel__inner').addClass('active-panel');
        $('.user-panel__btn').addClass('hidden');
        $('.user-panel__close-btn').addClass('close-panel');
        $('.user-panel').addClass('active-panel');
        $('body').addClass('scroll');
    })

    $('.user-panel__close-btn').click( function () {
        $('.user-panel__inner').removeClass('active-panel');
        $('.user-panel__btn').removeClass('hidden');
        $('.user-panel__close-btn').removeClass('close-panel');
        $('.user-panel').removeClass('active-panel');
        $('body').removeClass('scroll');
    })


     // Табы в блоге

     $('.jsTabBtn').click(function () {
        const tabBtn = $(this).attr('data-tab');
        const tabContent = $('.jsTabContent[data-tab="'+ tabBtn +'"]');

        $('.jsTabBtn').removeClass('active');
        $(this).addClass('active');

        $('.jsTabContent').removeClass('active');
        tabContent.addClass('active');

    })

    // Табы в секции Биографии

    $('.jsFamilyBtn').click(function () {
        const tabBtn = $(this).attr('data-biography');
        const tabContent = $('.jsFamilyContent[data-biography="'+ tabBtn +'"]');

        $('.jsFamilyBtn').removeClass('active');
        $(this).addClass('active');

        $('.jsFamilyContent').removeClass('active');
        tabContent.addClass('active');

    })

    // Табы в секции Single biography

    $('.jsPersonBtn').click(function () {
        const tabBtn = $(this).attr('data-person');
        const tabContent = $('.jsPersonContent[data-person="'+ tabBtn +'"]');

        $('.jsPersonBtn').removeClass('active');
        $(this).addClass('active');

        $('.jsPersonContent').removeClass('active');
        tabContent.addClass('active');

    })

    // Табы в секции info-option

    $('.jsOptionBtn').click(function () {
        const tabBtn = $(this).attr('data-option');
        const tabContent = $('.jsOptionContent[data-option="'+ tabBtn +'"]');

        $('.jsOptionBtn').removeClass('active');
        $(this).addClass('active');

        $('.jsOptionContent').removeClass('active');
        tabContent.addClass('active');

    })

    // Табы в секции dates

    $('.jsDatesBtn').click(function () {
        const tabBtn = $(this).attr('data-dates');
        const tabContent = $('.jsDatesContent[data-dates="'+ tabBtn +'"]');

        $('.jsDatesBtn').removeClass('active');
        $(this).addClass('active');

        $('.jsDatesContent').removeClass('active');
        tabContent.addClass('active');

    })

    // Табы в секции ceкции Events

    $('.jsEventsBtn').click(function () {
        const tabBtn = $(this).attr('data-events');
        const tabContent = $('.jsEventsContent[data-events="'+ tabBtn +'"]');

        $('.jsEventsBtn').removeClass('active');
        $(this).addClass('active');

        $('.jsEventsContent').removeClass('active');
        tabContent.addClass('active');

    })

    // Табы в секции ceкции Periods

    $('.jsPeriodsBtn').click(function () {
        const tabBtn = $(this).attr('data-periods');
        const tabContent = $('.jsPeriodsContent[data-periods="'+ tabBtn +'"]');

        $('.jsPeriodsBtn').removeClass('active');
        $(this).addClass('active');

        $('.jsPeriodsContent').removeClass('active');
        tabContent.addClass('active');
    }) 

    // Табы в секции ceкции Quotes

    $('.jsQuotesBtn').click(function () {
        const tabBtn = $(this).attr('data-quotes');
        const tabContent = $('.jsQuotesContent[data-quotes="'+ tabBtn +'"]');

        $('.jsQuotesBtn').removeClass('active');
        $(this).addClass('active');

        $('.jsQuotesContent').removeClass('active');
        tabContent.addClass('active');
    }) 

    
     // Слайдер на главной странице

     $('.slider__wrapper').slick({
        // autoplay: true,
        delay: 100,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });

    // Слайдер "Периоды"

    $('.periods-slider').slick({
        prevArrow: '<button class="periods-slider__prev-btn"><img src="assets/img/periods/arrow-prev.svg" alt="arrow"></button>',
        nextArrow: '<button class="periods-slider__next-btn"><img src="assets/img/periods/arrow-next.svg" alt="arrow"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
    });

     // Слайдер "Quotes"

    $('.quotes-content').slick({
        prevArrow: '<button class="quotes-content__prev-btn"><img src="assets/img/periods/arrow-prev.svg" alt="arrow"></button>',
        nextArrow: '<button class="quotes-content__next-btn"><img src="assets/img/periods/arrow-next.svg" alt="arrow"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
    });
   

    // Cпойлер в тестах

    $('.tests__title').click(function() {
        if($('.tests').hasClass('one')){
            $('.tests__title').not($(this)).removeClass('active');
            $('.tests__list').not($(this).next()).slideUp(500);
        }
        $(this).toggleClass('active').next().slideToggle(500);
    })

    // Cпойлер в периодах

    $('.periods-maps__title').click(function() {
        if($('.periods-maps').hasClass('one')){
            $('.periods-maps__title').not($(this)).removeClass('active');
            $('.periods-maps__inner').not($(this).next()).slideUp(500);
        }
        $(this).toggleClass('active').next().slideToggle(500);
    })


    // Fixed header и кнопка вверх

    $(window).scroll( function () {
        const scroll = $(this).scrollTop();

        if (scroll > 600) {
            $('.header__bottom-menu').addClass('header-fixed');
            $('.return-up').fadeIn(800);
        } else if (scroll < 600) {
            $('.header__bottom-menu').removeClass('header-fixed');
            $('.return-up').fadeOut(800);
        }
    })

    $('.return-up a').click(function () {
        $('body,html').animate({scrollTop: 0}, 400);
    });


    // якори для ссылок прокрутка

    $("a.scrollTo").on("click", function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });











    
















}) //end jquery