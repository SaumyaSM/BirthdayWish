$(document).ready(function() {
    let envelopeOpen = false;
    
    // Handle envelope click
    $(".envelope-wrapper").click(function() {
        $(this).toggleClass('flap');
        envelopeOpen = !envelopeOpen;
        
        // If envelope is opened, trigger the card hover effect
        if (envelopeOpen) {
            setTimeout(function() {
            $(".card").stop().animate({
                top: "-90px"
            }, "200");
        }, 900); 
          $(".hearts").addClass("no-animation");// Delay to allow flap animation to complete
        } else {
            // If envelope is closed, return card to original position
            $(".card").stop().animate({
                top: "0px"
            }, "slow");
             setTimeout(function () {
                $(".hearts").removeClass("no-animation");
            }, 900); // matches envelope flap transition timing
        }
    });
});