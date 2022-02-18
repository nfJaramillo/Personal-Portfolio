
$(document).ready(function () {
   
    $('.navbar-nav>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $( ".mx-auto .nav-item" ).bind( "click", function(event) {
       // event.preventDefault();
        var clickedItem = $( this );
        $( ".mx-auto .nav-item" ).each( function() {
            $( this ).removeClass( "active" );
        });
        clickedItem.addClass( "active" );
    });
    
  });
