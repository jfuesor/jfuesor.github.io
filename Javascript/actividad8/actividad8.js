app.innerHTML=`<input id=v><button onclick='km()'>Km→Millas</button><button onclick='mi()'>Millas→Km</button><p id=r></p>`;
function km(){r.textContent=(v.value*0.621371).toFixed(2)}
function mi(){r.textContent=(v.value*1.60934).toFixed(2)}