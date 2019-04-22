var niz = [2,7,9,9,8,7,2];
var niz1 =niz.slice(niz.length/2).reverse();
// var niz0 =niz.slice(0,niz.length/2);
var test = 1;
document.write(niz1+"<br>");
// document.write(niz0+"<br>");
document.write(niz.slice(0,niz.length/2)+"<br>"); 



var i = 0;
while(i<niz.length/2){
if(niz[i]!==niz1[i]){
    test = 0;
    }
    i++;
}

if(test<1){
    document.write(" nije identican"+"<br>");
}else{
    document.write("identican"+"<br>");
}  



document.write("<br>");
document.write("<br>");
var drugi =[5,7,6,3,3,7,5];
document.write(drugi+"<br>");
document.write(drugi.reverse()+"<br>");
var counter= 1;
var x = 0;
while(x<drugi.length){
    if(drugi[x]!==drugi.reverse()[x]){
        document.write(drugi[x]+" "+drugi.reverse()[x]+"<br>");
        counter = 0;
        }
    x++;
}
if(counter<1){
    document.write(" nije identican drugi i drugi.revers()"+"<br>");
}else{
    document.write("identican drugi i drugi.revers()"+"<br>");
}
document.write("<br>");
// drugi zadatak
var matrix = [
    [1,2,3,0,0],
    [4,0,5,6],
    [0,7,0,9,0,0]
];
 
var x = 0;
var zeros = 0;
var long = matrix.length;

for(var i=0;i<long;i++){
    var zeros = 0;
    for(var j=0; j<matrix[x].length;j++){
        if(matrix[i][j]===0){
        zeros++;  
        }
    }
    x++;
    document.write("Red "+i+ " ima "+zeros+" nula"+"<br>");
} 
document.write("<br>");
    //Resenje -------------------------------------
/* var i =0;
var j = 0;
for(i;i<3;i++){
    var brNula = 0;
    for(j=0;j<4;j++){
        if(matrix[i][j]==0){
            brNula++;
        }
    }
    document.write("Red "+i+ " ima "+brNula+" nula"+"<br>");
} */
//----------------------------------------------------------------
//Treci zadatak
//jedno resenje
var niz_decimalnih = [0.1,0.001, 0.02,0.003];
function sortNumber(a, b) {
    return a - b;
}
niz_decimalnih.sort(sortNumber);
document.write(niz_decimalnih+"<br>");
document.write("Najveci broj u nizu je: "+niz_decimalnih[niz_decimalnih.length-1]+"<br>");
document.write("Najmanji broj u nizu je: "+niz_decimalnih[0]+"<br>");
document.write("<br>");
//drugo resenje
var niz_decimalnih2 = [0.1,0.001, 0.02,0.003];
var min =0;
var max =0;
for(var i = 0; i<niz_decimalnih2.length; i++){
    for(var j = 0; j<niz_decimalnih2.length; j++){
        if(niz_decimalnih2[i]>niz_decimalnih2[j]){
            max=niz_decimalnih2[i]
        }
        if(niz_decimalnih2[i]<niz_decimalnih2[j]){
            min=niz_decimalnih2[i]
        }
    }
}
document.write("Najmanji broj u nizu je: "+min+"<br>");

document.write("Najveći broj u nizu je: "+max+"<br>");