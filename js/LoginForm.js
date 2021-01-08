class Loginform {
    constructor(){
        this.input = createInput("Name");
        this.loginbutton = createButton('login');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.logout=createButton('logout'); 
        this.theif=createButton('theif')
        this.police=createButton('police')
    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.greeting.hide();
        this.loginbutton.hide();
    }
    display(){
        this.police.hide();
        this.theif.hide();
        this.logout.hide();
        this.input.position(windowWidth/2-40,windowHeight/2-80);
        this.loginbutton.position(windowWidth/2+10,windowHeight/2);
        this.loginbutton.mousePressed(()=>{
            this.input.hide();
            this.loginbutton.hide();
            player.name=this.input.value();
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(windowWidth/2-50,windowHeight/2);
            text("which character do you want to choose ?",windowWidth/2-50,windowHeight/2-50);
            image(policeimage,windowWidth/2-30,windowHeight/2+50,windowWidth/2-50,windowHeight/2-50);
            image(theifimage,windowWidth/2+20,windowHeight/2+10,windowWidth/2-50,windowHeight/2-50);
        })
        this.logout.position(windowWidth-80,windowHeight-50)
        this.logout.mousePressed(()=>{
            logout=new  Logout();
            loguout.display();
        })
    }
}