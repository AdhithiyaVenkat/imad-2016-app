console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHtml='New Value';

//Moving an Image
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginLeft= '100px';
}