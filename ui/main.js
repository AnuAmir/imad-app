console.log('Loaded!');
// same inspect elem code
var element=document.getElementById('main')
element

//move img 
var img=document.getElementById('madi')
var marginLeft=0;
function moveRight()
{
 marginLeft=marginLeft+1;
 img.style.marginLeft=marginLeft+'px';
}

img.onclick = function()
{
    var interval=setInterval(marginRight,50);
};