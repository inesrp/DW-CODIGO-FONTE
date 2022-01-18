//Pre-load 
var nP = 11;
// for (let i = 1; i <= nP; i++) {
//     let link = document.createElement("link");
//     link.setAttribute('rel', 'preload');
//     link.setAttribute('as', 'image');
//     link.setAttribute('href', '../assets/imgs/Hero (' + i + ').png');
//     document.head.appendChild(link);
// }

//Imgs com parallax

var imgList = document.createElement('ul');
imgList.setAttribute('class', 'grid');

for (let i = 1; i <= nP; i++) {
    var listItem = document.createElement('li');
    listItem.display = 'inline-block';
    var img = document.createElement('img');
    img.setAttribute('src', '../assets/imgs/Hero (' + i + ').png');
    // img.setAttribute('class', 'rellax');
    // img.setAttribute('data-rellax-speed', '-10');
    
    img.setAttribute('alt', 'ghiChar' + i);
    // img.setAttribute('class', 'rellax');
    listItem.appendChild(img);
    imgList.appendChild(listItem);
}
var main = document.getElementById('container');
main.appendChild(imgList);

var newC = document.getElementById('newsContainer');

for(let i=1; i<=8; i++){
        var div = document.createElement('div');
        var img = document.createElement('img');
        var caption = document.createElement('span');
        img.setAttribute('src', '../assets/imgs/thumb2.png');
        img.setAttribute('height', 'auto');
        caption.innerText  ='Article Title' + i;
        div.appendChild(img);
        div.appendChild(caption);
        newC.appendChild(div);
}


var rellax = new Rellax('.rellax'); 
