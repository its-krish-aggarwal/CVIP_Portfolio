// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function () {
    var top = window.scrollY;
    var contactSection = document.getElementById('contact'); // Assuming 'contact' is the id of the contact section

    if (top >= 500 && top < contactSection.offsetTop) {
        header.classList.add('navbarDark');
    } else {
        header.classList.remove('navbarDark');
    }
}


$(document).ready(function () {
    // Function to add the "navbar-scroll" class when scrolled to the contact section
    $(window).scroll(function () {
        if ($(this).scrollTop() >= $("#contact").offset().top) {
            $(".navbar").addClass("navbar-scroll");
        } else {
            $(".navbar").removeClass("navbar-scroll");
        }
    });
});