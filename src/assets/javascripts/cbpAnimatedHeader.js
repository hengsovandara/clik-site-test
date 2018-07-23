var classie = require('./classie.js')
var cbpAnimatedHeader = (function() {

    var didScroll = false;
    function init() {
      window.addEventListener( 'scroll', function( event ) {
        if( !didScroll ) {
          didScroll = true;
          setTimeout( scrollPage, 250 );
        }
      }, false );
    }

    function scrollPage() {
      var sy = scrollY();
      var header  = document.querySelector( '.navbar-default' );
      var changeHeaderOn = 200;
      if ( sy >= changeHeaderOn ) {
          classie.add( header, 'navbar-scroll' );
      }
      else {
          classie.remove( header, 'navbar-scroll' );
      }
      didScroll = false;
    }

    function scrollY() {
        var docElem = document.documentElement;
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();