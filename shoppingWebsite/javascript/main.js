// var image, Ypos;
// function scroll(){
//   var image = document.getElementById('image');
//   var Ypos = window.pageYOffset;
//   image.style.top = window.pageYOffset * .3 +'px';
// }

// window.addEventListener('scroll', scroll);


// button on hover fx
$('#button').on('mouseenter', function(){
  $(this).css({
    'background-color':'#626E7C',
    'cursor':'pointer',
    'color':'rgba(18, 24, 32, 0.98)'
  });
});

$('#button').on('mouseleave', function(){
  $(this).css({
    'background-color':'#FF5049',
    'color':'white'
  });
});
