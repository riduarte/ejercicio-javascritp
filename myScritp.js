window.onload= function() {palabraRamdon()};


function palabraRamdon(){
    
    let quien =["el agua","el vino","el jamon"];           
    let cuando =["manana","mas tarde","luego"];
    let que =["un colapso","un mareo","un infarto"];
    let verbo=["me dara","me provocara"];           

    var frase="";
        
    var excusa = quien[numeroRandom(quien.length)];
    var excusa1 = verbo[numeroRandom(verbo.length)];
    var excusa2 = que[numeroRandom(que.length)];
    var excusa3 = cuando[numeroRandom(cuando.length)];

    document.getElementById('frase').innerHTML=(frase.concat(excusa," ", excusa1," ",excusa2," ",excusa3));
}
                
function numeroRandom(length){
    return Math.floor((Math.random() * length));  
        };




