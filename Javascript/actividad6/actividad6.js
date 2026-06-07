app.innerHTML=`<input id=p placeholder='Precio'><button onclick='f()'>Calcular</button><p id=r></p>`;
function f(){r.textContent='Total: '+(p.value*1.21).toFixed(2)+' €';}