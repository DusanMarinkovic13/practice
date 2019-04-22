var a = [4,10,6,8,3];
var b = 6;
var novi = [];
function noviNiz(a,b){
    if(a.length<1){
        return "Niz je prazan";
    }
    for(i in a){
        if(a[i]<=b){
            a[i]=0;
            novi.push(a[i]);
        }else{
            novi.push(a[i]);
        }
    }
    return novi;
}
document.write(noviNiz(a,b)); 

// saletov primer
/* function brojevi(a,b){
    if (a.length == 0){
        document.write("nema nista ovde");
    return 0;
    }
    for (i=0; i<a.length; i++)
    if (a[i]<=b)
    a[i]=0;
    
    return a;
    }
    var a= Array(4,10,6,8,3,5,9,33,4);
    var b= 6;
   
    document.write(brojevi(a,b)); */