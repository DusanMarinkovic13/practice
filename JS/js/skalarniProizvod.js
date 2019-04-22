var a = [1.0, 3.5, 2.0];
var b = [2.5, 2.0, 3.0];
var skalP = 0;
var smallP = [];
var x = 0;

function skalarniProizvod(a,b){
    if(a.length != b.length){
        document.write(0);
    }else{
        for(var i = 0; i<a.length; i++){
            smallP.push(a[i]*b[x]);
            x++;
            } 
            document.write(smallP +"<br>");
        for(var j =0; j<smallP.length; j++){
            skalP += smallP[j];
        }   

    }
    document.write(skalP+"<br>");
}
skalarniProizvod(a,b);  
 


//drugi nacin za for petlju
 /* suma =0;
 for(i=0; i<a.length;i++){
     suma += a[i]*b[i];
     return suma;
 } */



 
// primer od Velje

/* var nizA = [26,38,68,77,78];
var nizB = [2,16,43,55,85];

    function skalarniProizvod(nizA,nizB){
        if(nizA.length != nizB.length){
            return 0;
        }
        var x = 0;
        for(i in nizA){
             x += nizA[i]*nizB[i];
            }
            return x;
     
        }
     
     document.write(skalarniProizvod(nizA,nizB)); */ 




