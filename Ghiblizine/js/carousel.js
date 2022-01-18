var index = 1;
showThumb(index);

function current(n){
    showThumb(index = n);
}

function nxt(n) {
    showThumb(index += n);
  }
  

function showThumb(n){
    var thumb = document.getElementsByClassName('thumbnailSlide');
    var dust = document.getElementsByClassName('waiting');

    if( n> thumb.length){
        index = 1;
    }

    if (n < 1){
        index = thumb.length;
    }

    for(var i=0; i< thumb.length; i++){
        thumb[i].style.display = "none";
    }

    for (i = 0; i < dust.length; i++) {
        dust[i].className = dust[i].className.replace(" clicked", "");
    }

    thumb[index-1].style.display = "block";
    dust[index-1].className += " clicked";
}

var wait = document.getElementsByClassName('waiting');
for(var i=0; i< wait.length; i++){
wait[i].setAttribute('src', '../assets/imgs/dust.png ');
}

var click = document.getElementsByClassName('clicked');
for(var i=0; i< click.length; i++){
click[i].setAttribute('src', '../assets/imgs/toto.png ');
}

