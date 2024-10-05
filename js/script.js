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
          mobileMenuLinksMenuTriggerBtn = document.querySelector('.mobile-navigation-item.trigger');

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
        } else {
            mobileMenuLinks.classList.remove('active');
            mobileMenuLinksMenuDefaultBtn.classList.add('active');
            mobileMenuLinksMenuClosetBtn.classList.remove('active');
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

        if (mobileMenuLinks.classList.contains('active') && !e.target.closest('.mobile-menu-list') && !e.target.closest('.mobile-menu')){
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


});