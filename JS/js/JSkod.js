document.write("Ovo je JavaScript eksterni fajl!");
document.write("<br><b>Prvi red</b><br><i>Drugi red</i>");
document.write("<br>");
        x=2+4;
        document.write(x);
        document.write("<br>");
        x="2"+"4";
        document.write(x);
        document.write("<br>");
        x=2+"4";
        document.write(x);
        document.write("<br>");
        x="2"+4;
        document.write(x);
        document.write("<br>");
        x=4+"U";
        document.write(x);
        document.write("<br>");
        x="du"+"san";
        document.write(x);
        document.write("<br>");
        a=5; //a je celobrojni podatak
        b=8;  //b je celobrojni podatak
        b="broj "+a; 
        //b je string podatak, zato što se na string "broj" nadovezuje ceo broj, pa se dobija string
        document.write(b);
        document.write("<br>");
        a=24;
        b="broj " +a;
        document.write(b);
        document.write("<br>");
        b="broj " -a;
        document.write(b);
        document.write("<br>");
        b=5;
        b*=4;
        document.write(b);
        document.write("<br>");
        b--;
        document.write(b);
        document.write("<br>");
        x=b%4;
        document.write(x);
        document.write("<br>");

        x=23;
        for(i=1;i<=x; i++){
            y=x%i;
            document.write(y+" ");
        }
        document.write("<br>");
        a=true;
        b=false;
        c=a||b;
        d=a&&b;
        f=(!a && b)||(a&&!b);
        g=!a;
        document.write(" a = "+ a + "<br>");
        document.write(" b = "+ b + "<br>");
        document.write(" c = "+ c + "<br>");
        document.write(" d = "+ d + "<br>");
        document.write(" f = "+ f + "<br>");
        document.write(" g = "+ g + "<br>");
        document.write("<br>");
        
        a = 4;
        b = "4";
        g=a+b+8;
        h=a+8+b;
        c= a<b;
        d = a==b;
        f1 = a===b;
        document.write(" c = "+ c + "<br>");
        document.write(" d = "+ d + "<br>");
        document.write(" f1 = "+ f1 + "<br>");
        document.write(" g = "+ g + "<br>");
        document.write(" h = "+ h + "<br>");
        
        x=6;
        if(x>5)
        document.write("veće je" +"<br>");  
        x=3;
        if(x>5)
        document.write("veće je"+"<br>"); 
        else 
        document.write("manje je"+"<br>"); 
        x=5;
        if(x>5)
        document.write("veće je"+"<br>"); 
        else if(x<5)
        document.write("manje je"+"<br>"); 
        else         
        document.write("jednako je"+"<br>");
        document.write("<br>");
        var x=5;
        var y = 10;
        var z = 0;
        if(x>y)
        if(x>20)
        z=y;
        else
        z=x;
        document.write("Rezultat je "+z+"<br>");
        document.write("<br>");
        var x=5;
        var y = 10;
        var z = 0;
        if(x>y){
            if(x>20)
            z=y;
        }else
        z=x;
        document.write("Rezultat je "+z+"<br>");
        document.write("<br>");
        var x=5;
        var y=10;
        if(x>y)
        x+=2;
        y++;
        var z=x+y;
        document.write("Rezultat je "+z+"<br>");
        document.write("<br>");
        var ocena=12;
        
        if(ocena<6){
            document.write("Loše "+"<br>");
        }
        else if(ocena<8){
            document.write("Dobro "+"<br>");
        }else if(ocena<=10){
            document.write("Solidno "+"<br>");
        }else if(ocena>10){
            document.write("Pogrešno uneta vrednost ocene "+"<br>");
        }else{
            document.write("Pogrešno uneta vrednost ocene "+"<br>");
        }
        document.write("<br>");
        var mark=7;
        if((mark>=6)&&(mark<=7)){
            document.write("Prolaz "+"<br>");
        }if((mark>7)&&(mark<=9)){
            document.write("Dobro "+"<br>");
        }if((mark>9)&&(mark<=10)){
            document.write("Odlično "+"<br>");
        }if((mark<=5)&&(mark>10)){
            document.write("Pogrešno uneta vrednost ocene "+"<br>"); 
        }
        document.write("<br>");

            var x=3;
            var y=-4;
            var z=x-y;
            if(x+y>0){
                document.write("Zbir prve dve je pozitivan broj "+"<br>"); 
            }else if(z>0){
                document.write("Razlika prve dve je pozitivan broj "+"<br>"); 
            }else{
                document.write("zadati novu operaciju "+"<br>");
            }
        document.write("<br>");
        var x=3;
        var y=-4;
        var z=x-y;
        if((x*z>15)&&(y<0)){
            document.write("Proizvod prve i treće je veći od 15 i druga varijabla je negativna "+"<br>");
        }else if((x*z>15)||(y>0)){
            document.write("Proizvod prve i treće je veći od 15 ili druga varijabla je pozitivna "+"<br>");
        }else{
            document.write("Nešto treće se dešava "+"<br>");
        }
        document.write("<br>");
        switch(new Date().getDay()){
            case 0:
            day="Sunday";
            break;
            case 1:
            day="Monday";
            break;
            case 2:
            day="Tuesday";
            break;
            case 3:
            day="Wednesday";
            break;
            case 4:
            day="Thursday";
            break;
            case 5:
            day="Friday";
            break;
            case 6:
            day="Saturday";
            break;
            
        }
        document.getElementById("demo").innerHTML = "Today is " + day;
        var ocena = 9;
        switch (ocena){
            case 5:
            document.write("Loše");
            break;
            case 6:
            case 7:
            document.write("Dobro");
            break;
            case 8:
            case 9:
            document.write("Solidno");
            break;
            case 10:
            document.write("Odlično");
            break;
            default:
            document.write("Pogrešno uneta ocena");
        }
        document.write("<br>");
        document.write("<br>");
        var mesec = 2;
        switch(mesec){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
            brojDana =31;
            daniTxt = "tridesetjedan";
            document.write("Broj dana u mesecu je " +brojDana +", slovima "+daniTxt);
            break;
            case 4:
            case 6:
            case 9:
            case 11:
            brojDana =30;
            daniTxt = "trideset";
            document.write("Broj dana u mesecu je " +brojDana +", slovima "+daniTxt);
            break;
            default:
            brojDana =28;
            daniTxt = "dvadestosam";
            document.write("Broj dana u mesecu je " +brojDana +", slovima "+daniTxt);
        }
        document.write("<br>");
        document.write("<br>");
        var vrednost = 4;
        switch(vrednost){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            document.write("Zadata vrednost je izmedju 1 i 5 i zadata vrednost je "+ vrednost);
            break;
            case 8:
            case 9:
            case 10:
            document.write("Zadata vrednost je izmedju 8 i 10 i zadata vrednost je "+ vrednost);
            break;
            default:
            document.write("Zadata vrednost "+ vrednost+ " nije u navedenom opsegu ");
        }
         
       
        
        



