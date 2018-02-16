jQuery(document).ready(function() {
    $('.button-collapse').sideNav({
            closeOnClick: true,
            draggable: true
        }
    );

    $('.pushpin-demo-nav').each(function() {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
            top: $target.offset().top,
            bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
    });
    $('.target').pushpin({
        top: 0,
        bottom: 1000,
        offset: 0,
    });

    $('.parallax').parallax();

    var options = [{
        selector: '#formations',
        offset: 50,
        callback: function(el) {
            Materialize.showStaggeredList($(el));
        }
    }, {
        selector: '#experiences',
        offset: 50,
        callback: function(el) {
            Materialize.showStaggeredList($(el));
        }
    }];

    Materialize.scrollFire(options);




});