console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHtml='New Value';

//Moving an Image
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,100);
};
// Moving Ninja image
var nin = document.getElementById('ninja');
img.onclick = function() {
    nin.style.marginLeft = '100px';
};