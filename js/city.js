class house1{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height);
        this.house1=loadImage("images/house1.jpg");
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.house1,this.x,this.y,this.width,this.height);
        pop();
    }
}class house2{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height);
        this.house2=loadImage("images/house2.jpg");
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.house2,this.x,this.y,this.width,this.height);
        pop();
    }
}class house3{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height);
        this.house3=loadImage("images/house3.jpg");
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.house3,this.x,this.y,this.width,this.height);
        pop();
    }
}
class house4{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height);
        this.house4=loadImage("images/house4.jpg");
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.house4,this.x,this.y,this.width,this.height);
        pop();
    }
}
class house5{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height);
        this.house5=loadImage("images/house8.jpg");
    }
    display(){
        push();
        imageMode(CENTER)
        image(this.house5,this.x,this.y,this.width,this.height);
        pop();
    }
}

class city{
    constructor(){
        this.house1=new house1();
        this.house2=new house2();
        this.house3=new house3();
        this.house4=new house4();
        this.house5=new house5();
    }
    display(){

    }
}