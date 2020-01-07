$(document).ready(function(){
    $('.link').on('click', function(event) {
        if (this.hash !== 'b') {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    console.log('hello');
});

