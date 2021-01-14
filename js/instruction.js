class theifinstructons{
    constructor(){
        this.greeting = createElement('h2');
    }
    display(){
        this.greeting.html("Hello " + player.name)
        this.greeting.position(windowWidth/2-70,windowHeight/2);
        text(" 1. Move anywhere using: arrow keys or  w, a, s, d Can hide using “e” key - Can’t go out of the room if the door is placed Can change as police Can exit room using “e ” key Can collect coins or cash in rooms or city To change character use logout key If you are caught you will be in prison Must collect 200coins and 10 cash in 2 min else your coins will be lost  and you will be in prison");
    }
}
class policeinstructions{
    constructor(){
        this.greeting = createElement('h2');
    }
    display(){
        this.greeting.html("Hello " + player.name)
        this.greeting.position(windowWidth/2-70,windowHeight/2);
        text(" 1. Move anywhere using: arrow keys or  w, a, s, dCan trap theif in rooms using “T” keyRemove the door using the same key Cannot change as robber Can enter room using “e” key Can exit room using “e” key Must find robber in 2 min When you didn’t found the robber in 2 min you will b in the police station and all of your coins will  be lost");
    }
}