//menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
});

//galeria
$(document).ready(function() {
    $('.list').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'tudo') {
            $('.boxItens').show('1000');
        }else {
            $('.boxItens').not('.' + value).hide('1000');
            $('.boxItens').filter('.' + value).show('1000');
        }
    })
    $('.list').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
});