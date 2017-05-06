// Primera forma
$(function() {
  console.log( "ready! primera forma" );
});

// Segunda forma
$( document ).ready(function() {
    console.log( "ready segunda forma!" );
});

// Tercera forma
function onReady() {
  console.log( "ready tercera forma!" );
}

$(document).ready( onReady );
// o:
$(window).on( "load", onReady );
