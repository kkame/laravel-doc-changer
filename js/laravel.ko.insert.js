var div = document.createElement('div');
document.body.appendChild(div);
div.style.position='fixed';
div.style.bottom='10px';
div.style.right='10px';

var new_location=document.location.href.replace('laravel.kr','laravel.com');

var new_window=document.createElement("a");
div.appendChild(new_window);
new_window.innerText="영문버전 새창";
new_window.href=new_location;
new_window.target='_blank';
new_window.style.display='block';
new_window.classList.add('btn');
new_window.classList.add('btn-default');

var moveWindow=document.createElement("a");
div.appendChild(moveWindow);
moveWindow.innerText="영문버전 이동";
moveWindow.href=new_location;
moveWindow.style.display='block';
moveWindow.classList.add('btn');
moveWindow.classList.add('btn-default');
