/*console.log('Loaded!');
// same inspect elem code img move 
var element=document.getElementById('main');

element.innerHTML='text modified';
//move img 
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
 marginLeft=marginLeft+10;
 img.style.marginLeft=marginLeft+'px';
}

img.onclick = function()
{
    var interval=setInterval(moveRight,100);
};
*/


var button=document.getElementById('counter');
var counter=0;
button.onclick = function()
{
    //create a req obj
    var request=XMLHttpRequest();
    
    //response to conter vAR
     request.onreadystatechange =function()
     {
         if(request.readystate=== XMLHttpReuest.Done)
         {
             if(request.state===200)
             {
              var counter=request.responseText;
              var span=document.getElementById('count');
              span.innerHtml=counter.toString();
             }
         }
     }
     
     request.open('GET','http://anufreebird26.imad.hasura-app.io',true);
     request.send(null);
    
 /*   //count clicking button
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();*/
};