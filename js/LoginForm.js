class Loginform {
    constructor(){
        this.input = createInput("Name");
        this.loginbutton = createButton('login');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.logout=createButton('logout'); 
    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.greeting.hide();
        this.loginbutton.hide();
    }
    display(){
        image(policeimage,windowWidth/2-100,windowHeight/2+100)
        this.input.position(windowWidth/2 - 40 ,windowHeight/2 - 80);
        this.loginbutton.position(windowWidth/2 + 30,windowHeight/2);
        this.loginbutton.mousePressed(()=>{
            this.input.hide();
            this.loginbutton.hide();
            Player.name=this.input.value();
        })
        this.logout.position(windowWidth-80,windowHeight-50)
        this.logout.mousePressed()
    }
}