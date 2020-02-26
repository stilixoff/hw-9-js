const generateBlocksInterval = (totalDiv = 25, w = 50, h = 50) => {
    let sec = document.createElement('section');
    let widthD = (totalDiv*w)/5;
    sec.style.width = widthD + 'px';
    sec.style.height='250px';
    sec.style.background='gray';
    sec.style.display = 'flex';
    sec.style.flexWrap = 'wrap';
    document.body.appendChild(sec);
    for(let i = 0; i < totalDiv; i++) {
        sec.innerHTML += '<div><\/div>'
    }
    setInterval (function(){
        if (sec.hasChildNodes()) {
            for (var x = 0; x < sec.children.length; ++x) {
                sec.children[x].style.width = w +'px';
                sec.children[x].style.height = h + 'px';
                sec.children[x].style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
            }
        }
    } ,1000);
}

generateBlocksInterval();