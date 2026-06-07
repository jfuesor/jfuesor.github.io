app.innerHTML=`<input id=n><button onclick='f()'>Sumar</button><p id=r></p>`;
function f(){let s=0;for(let i=0;i<=+n.value;i++)s+=i;r.textContent=s;}