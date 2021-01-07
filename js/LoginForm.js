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
        this.input.position(displayWidth/2 - 40 ,displayHeight/2 - 80);
        this.loginbutton.position(displayWidth/2 + 30,displayHeight/2);
        this.loginbutton.mousePressed(()=>{
            this.input.hide();
            this.loginbutton.hide();
            player.name=this.input.value();
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(displayWidth/4-10,displayHeight/4);
            
            image(policeimage,displayWidth/2-30,displayHeight/2+50,20,20)
            image(theifimage,displayWidth/2+20,displayHeight/2+10,20,20)
        })
        this.logout.position(displayWidth-80,displayHeight-50)
        this.logout.mousePressed(()=>{
            logout=new  Logout();
            loguout.display();
        })
    }
}