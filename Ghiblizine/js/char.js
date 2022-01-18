var newC = document.getElementById('charContainer');

for(let i=1; i<=9; i++){
        var div = document.createElement('div');
        var img = document.createElement('img');
        var charName = document.createElement('span');
        var age = document.createElement('span');
        var movieName = document.createElement('span');
        img.setAttribute('src', '../assets/imgs/chi.png');
        img.setAttribute('height', 'auto');
        charName.innerText  ='Character Name ' + i;
        age.innerText ='Age ' + i;
        movieName.innerText  ='Movie Name' + i;
        div.appendChild(img);
        div.appendChild(charName);
        div.appendChild(age);
        div.appendChild(movieName);
        newC.appendChild(div);
}

var nPag = document.getElementById('nPag');
for(let i=1; i<=5; i++){
    var div = document.createElement('div');
    var num = document.createElement('span');
    num.innerText = i;
    div.appendChild(num);
    nPag.appendChild(div);
}