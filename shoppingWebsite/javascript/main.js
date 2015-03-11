var image, Ypos;
function scroll(){
  var image = document.getElementById('image');
  var Ypos = window.pageYOffset;
  image.style.top = window.pageYOffset * .4 +'px';
}

window.addEventListener('scroll', scroll);
