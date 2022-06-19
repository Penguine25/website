window.addEventListener('scroll', () => {
    var header = document.getElementById('nav');
    var logo = document.getElementById('logo');
    logo.style.color = 'transparent';
    header.classList.toggle('animate-nav', window.scrollY > 0);
    if(scrollY==0){
        logo.style.color = 'black';
    }
});

$(function(){
    $("#close-menu, a").on("click", function () {
        $(".responsive-menu").hide();
    });
    $("#hamburger").on("click", function () {
        $(".responsive-menu").css("display", "flex");
    });
});
