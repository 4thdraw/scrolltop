$(document).ready(() => {

    function debounce(func, delay) {       
        let timeout;        
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };        
    }


    function handleScroll() {
        if ($(window).scrollTop() > 0) {
            $('body').addClass('scroll');
        } else {
            $('body').removeClass('scroll');
        }
        $(".dropdown").click();
    }

    $(window).scroll(        
        debounce(handleScroll, 250)
    ); 

}
)