$(document).ready(function() {

    /* --- Галерея ---------------------------------------- */

    $('.b-gallery__item a').fancybox();

    $('.b-gallery__items').bxSlider({
        maxSlides: 4,
        slideWidth: 270,
        adaptiveHeight: true,
        slideMargin: 20,
        pager: false,
        infiniteLoop: false,
    });

    /* --- Форма заказа ---------------------------------- */

    var $orderForm = $('.b-order-form');
    $orderForm.find('[name="phone"]').mask('+7 (999) 999-99-99');

    $orderForm.find('form').submit(function(e) {

        $this = $(this);
        $.post($this.attr('action'), $this.serialize(), function(response) {

            if (response.error) {

                alert(response.error);

            } else {

                $.fancybox('<h2 class="b-order-form__success-heading">Мы с Вами свяжемся в течении 30 минут рабочего времени по Мск!</h2>', {
                    minHeight: 45
                });
                
                yaCounter24120712.reachGoal('ORDER');

            }

    }, 'json');

        e.preventDefault();
    });

    $('[data-scroll]').click(function() {
        $('html, body').animate({
          scrollTop: $('.' + $(this).data('scroll')).offset().top
        }, 700);
        return false;
    });

});