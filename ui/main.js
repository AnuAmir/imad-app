console.log('Loaded!');
// same inspect elem code
var element=document.getElementById('main');

element.innerHTML='text modified';
//move img 
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
 marginLeft=marginLeft+100;
 img.style.marginLeft=marginLeft+'px';
}

img.onclick = function()
{
    var interval=setInterval(moveRight,100);
};