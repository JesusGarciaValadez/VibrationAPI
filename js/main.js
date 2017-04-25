( function () {
  if ( !navigator.vibrate ) {
    alert( "No hay API de vibracion" );
  } else {
    console.log( navigator.vibrate( [
      200, 100, 500, 100
    ] ) );
  }
} )();