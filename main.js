// Filter category
$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.post-box').show('1000');
        }
        else {
            $('.post-box')
                .not('.'+ value)
                .hide('1000');
            $('.post-box')
                .filter('.'+ value)
                .show('1000');
        }
    });
    //Active button link
    $('.filter-item').click(function(){
        $(this).addClass("active-filter")
        .siblings().removeClass('active-filter');
    });
});

//Header on scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

//Highlight Animation
$(document).ready(function(){
    // Event handler for button click
    $('#highlightBtn').click(function(){
        // Toggle the 'highlight' class on the span
        $('#highlight').toggleClass('highlight');
    });
});
