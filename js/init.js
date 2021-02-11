/**
 * Created by user pc on 25.07.2017.
 */
$(document).ready(function() {
    //===========================  stars(product card)========================
    var liStr = $(".parent_stars>li");
    liStr.click(function() {
        $(this).closest(".parent_stars").addClass("active_str");
        $(".parent_stars>li").removeClass("full_str");
        $(this).toggleClass("full_str");
    });
    // ========================= dot master (обрезаем текст троеточием)===============================
    $(document).ready(function() {
        $(".ellipsis").dotdotdot();
    });
    //== =============window enter=======================
    $('.btn_avtoriz').on("click", function(e) {
        e.preventDefault();
        var blockEnter = $("#modal_auth");
        if (blockEnter.is(":hidden")) {
            blockEnter.show("200");
        } else {
            blockEnter.hide("200");
        }
    });
    $(document).mouseup(function(e) { // событие клика по веб-документу
        var blockEnter = $("#modal_auth");
        if (!blockEnter.is(e.target) // если клик был не по нашему блоку
            &&
            blockEnter.has(e.target).length === 0) { // и не по его дочерним элементам
            blockEnter.hide("200"); // скрываем его
        }
        $(document).on('click', '#modal_auth .close', function(e) {
            blockEnter.hide("200");
        });
    });

    // ===============window call back=======================
    $('.btn_call_back').on("click", function(e) {
        e.preventDefault();
        var blockEnter = $("#modal_call_back");
        if (blockEnter.is(":hidden")) {
            blockEnter.show("200");
        } else {
            blockEnter.hide("200");
        }
    });
    $(document).mouseup(function(e) { // событие клика по веб-документу
        var blockEnter = $("#modal_call_back");
        if (!blockEnter.is(e.target) // если клик был не по нашему блоку
            &&
            blockEnter.has(e.target).length === 0) { // и не по его дочерним элементам
            blockEnter.hide("200"); // скрываем его
        }
        $(document).on('click', '#modal_call_back .close', function(e) {
            blockEnter.hide("200");
        });
    });
    //================= maskedinput =======================
    $(".mask-phone").mask("+ 38 (999) 999-99-99");

    //================== button to-top==============
    var toTop = $('#to-top');
    toTop.click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#to-top').fadeIn();
        } else {
            $('#to-top').fadeOut();
        }
    });
    //        ===================spiner================
    $('.but-plus').click(function() {
        var countInput = $(this).parent().find('.countItem');
        var multiplicity = countInput.attr('data-multiplicity') * 1;
        var maxItems = Math.floor(9999 / multiplicity) * multiplicity;
        var countItem = Math.floor(countInput.val() * 1 / multiplicity) * multiplicity + multiplicity;
        countInput.val(countItem < 9999 ? countItem : maxItems);
        return false;
    });

    $('.but-minus').click(function() {
        var countInput = $(this).parent().find('.countItem');
        var multiplicity = countInput.attr('data-multiplicity');
        var countItem = countInput.val() * 1 - multiplicity;
        countInput.val(countItem < multiplicity ? multiplicity : countItem);
        return false;
    });
    //======================== the adaptation of the image to fit the screen resolution ==============
    $(".img_fluid").each(function(e) {
        var Par = $(this).parent('.parent_img');
        var imgHeight = $(this).height();
        var imgWidth = $(this).width();
        var heightPar = Par.height();
        var widthPar = Par.width();
        if (widthPar > imgWidth) {
            $(this).css({
                "max-width": "100%",
                "max-height": "none"
            })
        } else if (heightPar > imgHeight) {
            $(this).css({
                "max-width": "none",
                "max-height": "100%"
            })
        }
    });

    // ====================== slider on main page ===================
    // http://idangero.us/swiper/#.WYLIdoTyiUl
    var swiper1 = new Swiper('.slider_news', {
        nextButton: '.but_news_next',
        prevButton: '.but_news_prev',
        slidesPerView: adaptivSlides(),
        loop: true,
        spaceBetween: 30
    });
    var swiper2 = new Swiper('.swiper_pop', {
        nextButton: '.but_pop_next',
        prevButton: '.but_pop_prev',
        slidesPerView: adaptivSlides(),
        loop: true,
        spaceBetween: 30
    });
    // ====================== the function returns the number of visible slides for each resolution===================
    function adaptivSlides() {
        var widthSwiper = $(".swiper-main").width();
        if (1165 <= widthSwiper) {
            return 4;
        }
        if (940 <= widthSwiper && widthSwiper < 1165) {
            return 3;
        }
        if (720 <= widthSwiper && widthSwiper < 940) {
            return 2;
        }
        if (widthSwiper < 719) {
            return 1;
        }
    }

    // ====================== слайдер карточка товара  ===================
    var previous = $(".gallery-thumbs .swiper-wrapper");
    var previousSlider = previous.find(".swiper-slide");

    if (previousSlider.length == 1) { //если привью один -скрываем сам привью
        $(".wrap_slider_card .swiper-button-next, .wrap_slider_card .swiper-button-prev").css("display", "none");
        previous.css("display", "none");
    }
    if (previousSlider.length == 2) {
        previous.addClass("fixed");
    }
    if (2 <= previousSlider.length) { //если привью 2- выравниваем по центру
        var galleryTop = new Swiper('.gallery-top', {
            /*nextButton: '.but_top_next',
             prevButton: '.but_top_prev',*/
            spaceBetween: 10
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            nextButton: '.but_thumb_next',
            prevButton: '.but_thumb_prev',
            spaceBetween: 10,
            roundLengths: true,
            centeredSlides: true,
            slidesPerView: 3,
            touchRatio: 0.2,
            slideToClickedSlide: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;
    }

    //        ============= jquery.selectBox =======================
    //  настройка jquery.selectBox http://marcj.github.io/jquery-selectBox/
    $('.select').selectBox({
        mobile: true
    });
    // =======scrollbar===================
    jQuery('.scrollbar-janos').scrollbar({
        "showArrows": true,
        "disableBodyScroll": true,
        "scrolly": "advanced",
        "scrollx": "advanced"
    });
    // =============== страница регистрации label подставлен вместо placeholder, удаляем label если поле не пустое ==================
    var inp = $('.form_reg').find("input[type='text'], input[type='password']");

    inp.focus(function() {
        $(this).next('label').css('z-index', '-1');
    });

    inp.blur(function() {
        if ($(this).val() != '') {
            $(this).next('label').css('z-indx', '-1');
        } else {
            $(this).next('label').css('z-index', '1');
        }
    });
    // =========================== тестовый вызов модального окна заказ удачно сформирован ===============
    $("#test_modal").click(function(e) {
        e.preventDefault();
        $('#myModal').modal('show');
    });
    /*==========================================*/
    var menuMax,
        menuMin,
        Menu = $('#main-menu'),
        itemMenu = $('.menu_lg >.dropdown');

    menuMax = function(elemDom) {
        elemDom.each(function() {
            var itemMenuLeft = $(this).position().left + $(this).outerWidth(true);
            if (Menu.innerWidth() - ($(this).width() * 2) <= itemMenuLeft) {
                $(this).find('.dropdown-menu').css({ 'left': 'auto', 'right': '0' });
            }
        });
    };
    menuMin = function(elemDom) {
        var itemMenu = elemDom.find('.dropdown');

        itemMenu.each(function() {
            var itemMenuTop =  $(this).position().top + $(this).outerHeight(true);
            $(this).find('.dropdown-menu').css({'top':itemMenuTop + 'px'});
        });
    };

    if($(document).width() > 600){
        menuMax(itemMenu);}

    else{
        menuMin(Menu);
    }
});