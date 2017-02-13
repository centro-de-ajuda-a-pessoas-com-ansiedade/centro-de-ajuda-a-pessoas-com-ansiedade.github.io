$(document).ready(function() {

    setTimeout(function(){
        $('.progress-bar').addClass('active');
    }, 2000);

    var interval;
    var position = 11;

    interval = setInterval(function(){

        position--;

        $('.jumbotron b').text(position > 1 ? position + 'º' : 'próximo');

        if (position <= 1)
            clearInterval(interval);
    }, 1400);

    $('#atendimento').on('hidden.bs.modal', function (e) {
        if (!$('.embed-responsive').closest('.row').is(':visible')) {
            $('.embed-responsive').html('<iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/qrx1vyvtRLY?autoplay=1&rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
            $('.embed-responsive').closest('.row').removeClass('hide');
        }

        $('html, body').animate({scrollTop: $(".embed-responsive").offset().top - 300}, 2000);
    });

    $('.btn-success').click(function(){

        console.log('ga...');

        /*ga('send', {
                hitType: 'event',
                // eventCategory: '',
                eventAction: 'click',
                // eventLabel: ''
            });*/

    });

});