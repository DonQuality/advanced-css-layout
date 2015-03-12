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
// pinterest
$('#pin').on('mouseenter', function(){
  $(this).css({
    'color':'red'
  });
});

$('#pin').on('mouseleave', function(){
  $(this).css({
    'color':'white'
  });
});
// instagram
$('#instagram').on('mouseenter', function(){
  $(this).css({
    'color':'#967557'
  });
});

$('#instagram').on('mouseleave', function(){
  $(this).css({
    'color':'white'
  });
});
// facebook
$('#facebook').on('mouseenter', function(){
  $(this).css({
    'color':'#3A589B'
  });
});

$('#facebook').on('mouseleave', function(){
  $(this).css({
    'color':'white'
  });
});
// google
$('#google').on('mouseenter', function(){
  $(this).css({
    'color':'red'
  });
});

$('#google').on('mouseleave', function(){
  $(this).css({
    'color':'white'
  });
});
//mail
$('#mail').on('mouseenter', function(){
  $(this).css({
    'color':'lime'
  });
});

$('#mail').on('mouseleave', function(){
  $(this).css({
    'color':'white'
  });
});
