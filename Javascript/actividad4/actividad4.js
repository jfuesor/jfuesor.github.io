document.getElementById('app').innerHTML=`<input id=n><button onclick='f()'>Ver</button><p id=r></p>`;
function f(){let n=+document.getElementById('n').value;let t='';
switch(n){case 1:t='Primavera';break;case 2:t='Verano';break;case 3:t='Otoño';break;case 4:t='Invierno';break;default:t='Número inválido';}
r.textContent=t;}