 $( function(){
    $( "#gallery" ).jGallery( {
        "transition":"moveToLeftFade_moveFromRightFade",
        "transitionBackward":"moveToRightFade_moveFromLeftFade",
        "transitionCols":"1",
        "transitionRows":"1",
        "thumbnailsPosition":"bottom",
        "thumbType":"image",
        "backgroundColor":"FFFFFF",
        "textColor":"000000",
        "mode":"standard"
    } );
} );
