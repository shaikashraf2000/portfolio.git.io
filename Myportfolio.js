$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
 // slide-up script
 $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Student", "Fresher", "Hardworker",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
 // owl carousel script
 $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
    });
});

$(document).ready(function() {
    // Filter publications by category
    $('.filter-btn').on('click', function() {
        var category = $(this).data('category');

        if (category == 'all') {
            $('.pub-card').fadeIn();
        } else {
            $('.pub-card').fadeOut(0);
            $('.pub-card[data-category="' + category + '"]').fadeIn();
        }
    });
});

function toggleCertDetails(certId) {
    const certDetails = document.getElementById(certId);
    const isVisible = certDetails.style.display === "block";

    // Hide all cert-details
    document.querySelectorAll('.cert-details').forEach(detail => {
        detail.style.display = "none";
    });

    // Toggle the clicked cert-details
    certDetails.style.display = isVisible ? "none" : "block";
}

// Function to toggle the details in education section
function toggleDetails(element) {
    const details = element.nextElementSibling;
    if (details.style.display === "block") {
        details.style.display = "none";
        element.textContent = "View More";
    } else {
        details.style.display = "block";
        element.textContent = "View Less";
    }
}

// Function to toggle the details in certifications section
function toggleCertDetails(certId) {
    const details = document.getElementById(certId);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}

// Function to initialize the display of elements
function initialize() {
    const certDetails = document.querySelectorAll('.cert-details');
    certDetails.forEach(detail => {
        detail.style.display = 'none'; // Hide details by default
    });

    const projectDetails = document.querySelectorAll('.details');
    projectDetails.forEach(detail => {
        detail.style.display = 'none'; // Hide project details by default
    });
}

// Initialize on document load
document.addEventListener('DOMContentLoaded', initialize);
