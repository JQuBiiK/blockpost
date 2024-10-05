document.addEventListener('DOMContentLoaded', () => {

    const catalogBtn = document.querySelector('.catalog'),
          catalogModal = document.querySelector('.catalog-modal'),
          catalogIconDefault = document.querySelector('#default'),
          catalogIconDop = document.querySelector('#dop'),
          catalogInput = document.querySelector('.navigation-panel-item label input'),
          catalogInputModal = document.querySelector('.search-modal'),
          mobileMenuBtn = document.querySelector('.mobile-menu'),
          mobileMenuModal = document.querySelector('.mobile-menu-list'),
          mobileMenuBtnDefault = document.querySelector('.mobile-menu-btn-default'),
          mobileMenuBtnClose = document.querySelector('.mobile-menu-btn-close'),
          mobileMenuLinks = document.querySelector('.mobile-navigation-link-list'),
          mobileMenuLinksMenuDefaultBtn = document.querySelector('.mobile-navigation-item-default'),
          mobileMenuLinksMenuClosetBtn = document.querySelector('.mobile-navigation-item-close'),
          mobileMenuLinksMenuTriggerBtn = document.querySelector('.mobile-navigation-item.trigger'),
          mobileMenuLinksLowSize = document.querySelector('.mobile-navigation-link-list.low-size');


    catalogBtn.addEventListener('click', () => {
        if (!catalogModal.classList.contains('active')) {
            catalogModal.classList.add('active');
            catalogIconDefault.classList.remove('open');
            catalogIconDop.classList.add('open');
        } else {
            catalogModal.classList.remove('active');
            catalogIconDefault.classList.add('open');
            catalogIconDop.classList.remove('open');
        }
    });

    catalogInput.addEventListener('click', () => {
        if (!catalogInput.classList.contains('active')) {
            catalogInput.classList.add('active')
            catalogInputModal.classList.add('active');
        }
    });

    mobileMenuBtn.addEventListener('click', () => {
        if(!mobileMenuModal.classList.contains('active')) {
            mobileMenuModal.classList.add('active');
            mobileMenuBtnDefault.classList.remove('active');
            mobileMenuBtnClose.classList.add('active');
        } else {
            mobileMenuModal.classList.remove('active');
            mobileMenuBtnDefault.classList.add('active');
            mobileMenuBtnClose.classList.remove('active');
        }
    })

    mobileMenuLinksMenuTriggerBtn.addEventListener('click', (e) => {
        if(!mobileMenuLinks.classList.contains('active')) {
            mobileMenuLinks.classList.add('active');
            mobileMenuLinksMenuDefaultBtn.classList.remove('active');
            mobileMenuLinksMenuClosetBtn.classList.add('active');
            mobileMenuLinksMenuClosetBtn.querySelector('svg').style.color = '#FFFFFF';
            mobileMenuLinksLowSize.classList.add('active');
            mobileMenuLinksMenuTriggerBtn.classList.add('active');
        } else {
            mobileMenuLinks.classList.remove('active');
            mobileMenuLinksMenuDefaultBtn.classList.add('active');
            mobileMenuLinksMenuClosetBtn.classList.remove('active');
            mobileMenuLinksLowSize.classList.remove('active');
            mobileMenuLinksMenuTriggerBtn.classList.remove('active');
        }
    })


    document.addEventListener('click', (e) => {

        if (catalogInput.classList.contains('active') && e.target !== catalogInput) {
            catalogInput.classList.remove('active')
            catalogInputModal.classList.remove('active');
        }

        if (catalogModal.classList.contains('active') && !e.target.closest('.catalog-modal') && !e.target.closest('.catalog')){
            catalogModal.classList.remove('active');
            catalogIconDefault.classList.add('open');
            catalogIconDop.classList.remove('open');
        }

        if (mobileMenuModal.classList.contains('active') && !e.target.closest('.mobile-menu-list') && !e.target.closest('.mobile-menu')){
            mobileMenuModal.classList.remove('active');
            mobileMenuBtnDefault.classList.add('active');
            mobileMenuBtnClose.classList.remove('active');
        }

        if (mobileMenuLinks.classList.contains('active') && !e.target.closest('.mobile-navigation-link-list') && !e.target.closest('.mobile-navigation-item.trigger')){
            mobileMenuLinks.classList.remove('active');
            mobileMenuLinksMenuDefaultBtn.classList.add('active');
            mobileMenuLinksMenuClosetBtn.classList.remove('active');
        }

    });

    $(".gallery-main").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    function toggleSlickSlider() {
        if ($(window).width() <= 812) {
            if (!$('.brand-list-slider').hasClass('slick-initialized')) {
                $('.brand-list-slider').slick({
                    arrows: false,
                    dots: false,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true
                });
            }
        } else {
            if ($('.brand-list-slider').hasClass('slick-initialized')) {
                $('.brand-list-slider').slick('unslick');
            }
        }
    }

    // Запуск функции при загрузке страницы
    toggleSlickSlider();

    // Запуск функции при изменении размера окна
    $(window).on('resize', function() {
        toggleSlickSlider();
    });


});