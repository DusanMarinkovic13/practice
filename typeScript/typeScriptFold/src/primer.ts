class Point{
    constructor(private x?:number, private y?:number){

    }
    draw(){
        console.log("X: "+ this.x + ", Y: "+ this.y);
    }
}

class Points{
    private x: number;
    private y: number;

    constructor(x?:number, y?:number){
        this.x = x;
        this.y = y;
    }
    draw(){
        console.log("X: "+ this.x + ", Y: "+ this.y);
    }
}