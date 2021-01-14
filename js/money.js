class coin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.coinimage=loadImage("images/coin.png");
    }
    display(){
        image(this.coinimage,this.x,this.y,this.x,this.y);
    }
}
class cash{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.cashimage=loadImage("images/cash.png");
    }
    display(){
        image(this.cashimage,this.x,this.y,this.x,this.y);
    }
}
class rarecash{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.rarecash=loadImage("images/rare cash.png");
    }
    display(){
        image(this.rarecash,this.x,this.y,this.x,this.y);
    }
}