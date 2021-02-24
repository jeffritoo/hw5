/* Tutorial 4
 Example 1 JavaScript code
*/
console.log("Jeffry's Output from Tutorial 4 Example 1");

class square{
    constructor(side){
        this.property = side;
    }
    perimeter(){
        return this.side*4;
    }
    area(){
        return this.side**2;
    }
    diagonal(){
        return ((this.side**0.5) * this.side**2);
    }
    describe(){
        return ("Square with",side, "has perimeter", this.perimeter,"area of", this.area,
        ",and diagonal of", this.diagonal);
    }
};

let mySquare = new square(6);

console.log(mySquare.area());