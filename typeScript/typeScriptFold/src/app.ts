let title:string = "Hello World!";
let iAm:string = "Bobby"
console.log(title + " I am " + iAm); 

let number: number = 1;
if(true){
    let number: number = 20;
}
console.log(number);

let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[];
let f: any[];

const crvena = 0;
const zelena =1;
const plava = 2;

enum Boje{
    crvena,zelena,plava
}
let bojaSlova = Boje.plava;

let names: string[] = ["Ivan", "Bojan", "Mitar", "Sasa"];
let numbers: number[]=[1,2,3,4];

//let names: Array = ["Ivan", "Bojan", "Mitar", "Sasa"];
//let objects: Array<Object> = [complex, complex];

//vraca rec
function getName():string{
    return "Marko Markovic"
}
console.log(getName());

//F-ja vraa kompleksni objekat
function getComplex(): {_name:string, _age:number}{
    return{
        _name: "Marko Markovic",
        _age: 20
    }
}
console.log(getComplex());
//funkcija ne vraca nista
function nothing():void{
    let addition: number = 10+30;
}
console.log(nothing());
