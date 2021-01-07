class Logout {
    constructor(){
        this.yes=createButton('YES');
        this.no=createButton('NO');
    }
    display(){
        Loginform.hide();
        text("Do you want to exit the game");
    }
}