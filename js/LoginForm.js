class Loginform {
    constructor(){
        this.input = createInput("Name");
        this.theif=createButton('THEIF')
        this.police=createButton('POLICE')
        this.policeimage=loadImage("images/policeman.jpg");
        this.theifimage=loadImage("images/robber.jpg");
    }
    hide(){
        this.input.hide();
        this.theif.hide();
        this.police.hide();
    }
    display(){
        this.input.position(windowWidth/2-40,windowHeight/2-80);
        text("which character do you want to choose ?",windowWidth/2-50,windowHeight/2-50);
        image(this.policeimage,windowWidth/2-30,windowHeight/2+50,windowWidth/2-50,windowHeight/2-50);
        image(this.theifimage,windowWidth/2+20,windowHeight/2+10,windowWidth/2-50,windowHeight/2-50);
        this.theif.position(windowWidth/2+70,windowHeight/2);
        this.police.position(windowWidth/2,windowHeight/2);
        this.police.mousePressed(()=>{
            this.input.hide();
            this.theif.hide();
            this.police.hide();
            cop.name=this.input.value();
            policeCount=+1;
            cop.index=policeCount;
            cop.update();
            cop.updateCount(policeCount);
            policeinstruction=new policeinstructions();
            policeinstruction.display();
        })
        this.theif.mousePressed(()=>{
            this.input.hide();
            this.theif.hide();
            this.police.hide();
            robber.name=this.input.value();
            theifCount+=1;
            robber.index= theifCount;
            robber.update();
            robber.updateCount(theifCount);
            theifinstructon=new theifinstructons();
            theifinstructon.display();
    });
    }
}