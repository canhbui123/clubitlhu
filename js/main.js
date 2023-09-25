 
const icon1 = document.getElementById("showText1");
const hiddenText1 = document.getElementById("hiddenText1");
let isTextVisible1 = false;

icon1.addEventListener("click", () => {
    if (!isTextVisible1) {
        hiddenText1.style.display = "block";
        icon1.classList.remove("fa-chevron-down");
        icon1.classList.add("fa-chevron-up");
    } else {
        hiddenText1.style.display = "none";
        icon1.classList.remove("fa-chevron-up");
        icon1.classList.add("fa-chevron-down");
    }
    isTextVisible1 = !isTextVisible1;
});

const icon2 = document.getElementById("showText2");
const hiddenText2 = document.getElementById("hiddenText2");
let isTextVisible2 = false;

icon2.addEventListener("click", () => {
    if (!isTextVisible2) {
        hiddenText2.style.display = "block";
        icon2.classList.remove("fa-chevron-down");
        icon2.classList.add("fa-chevron-up");
    } else {
        hiddenText2.style.display = "none";
        icon2.classList.remove("fa-chevron-up");
        icon2.classList.add("fa-chevron-down");
    }
    isTextVisible2 = !isTextVisible2;
});
const icon3 = document.getElementById("showText3");
const hiddenText3 = document.getElementById("hiddenText3");
let isTextVisible3 = false;

icon3.addEventListener("click", () => {
    if (!isTextVisible3) {
        hiddenText3.style.display = "block";
        icon3.classList.remove("fa-chevron-down");
        icon3.classList.add("fa-chevron-up");
    } else {
        hiddenText3.style.display = "none";
        icon3.classList.remove("fa-chevron-up");
        icon3.classList.add("fa-chevron-down");
    }
    isTextVisible3 = !isTextVisible3;
});
const icon4 = document.getElementById("showText4");
const hiddenText4 = document.getElementById("hiddenText4");
let isTextVisible4 = false;

icon4.addEventListener("click", () => {
    if (!isTextVisible4) {
        hiddenText4.style.display = "block";
        icon4.classList.remove("fa-chevron-down");
        icon4.classList.add("fa-chevron-up");
    } else {
        hiddenText4.style.display = "none";
        icon4.classList.remove("fa-chevron-up");
        icon4.classList.add("fa-chevron-down");
    }
    isTextVisible4 = !isTextVisible4;
});
const icon5 = document.getElementById("showText5");
const hiddenText5 = document.getElementById("hiddenText5");
let isTextVisible5 = false;

icon5.addEventListener("click", () => {
    if (!isTextVisible5) {
        hiddenText5.style.display = "block";
        icon5.classList.remove("fa-chevron-down");
        icon5.classList.add("fa-chevron-up");
    } else {
        hiddenText5.style.display = "none";
        icon5.classList.remove("fa-chevron-up");
        icon5.classList.add("fa-chevron-down");
    }
    isTextVisible5 = !isTextVisible5;
});
let isVisible = true;

 

 
// Thêm sự kiện click cho nút bấm
document.getElementById("myButton").addEventListener("click", function () {
    // Thay đổi trạng thái của nút bấm
    isVisible = !isVisible;

    // Thay đổi văn bản của nút bấm
    document.getElementById("myButton").textContent = isVisible ? "Đọc tiếp" : "Thu gọn";

    // Hiển thị hoặc ẩn đoạn văn bản
    if (isVisible) {
        // Hiển thị đoạn văn bản
        document.getElementById("an1").style.display = "none";
   
    } else {
        // Ẩn đoạn văn bản
        document.getElementById("an1").style.display = "block";
       
    }
});
 

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 1,
        time: 1500
    });


    // Screenshot carousel
    $(".screenshot-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: true,
        items: 1
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

