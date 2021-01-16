class theifinstructons{
    constructor(){
        this.greeting = createElement('h2');
        this.play=createButton('PLAY')
    }
    display(){
        this.greeting.html("Hello " + robber.name)
        this.greeting.position(windowWidth/2,windowHeight/7);
        textsize(windowHeight/6)
        text(" 1. Move anywhere using: arrow keys or  w, a, s, d.",windowWidth/2,windowHeight/6)
        text(" 2. Can hide in house and exit using “e” key - Can’t go out of the room if the door is placed.",windowWidth/2,windowHeight/6)
        text(" 3. Can change as police.",windowWidth/2,windowHeight/6)
        text(" 4. key Can collect coins or cash in rooms or city.",windowWidth/2,windowHeight/6)
        text(" 5. If you are caught you will be in prison.",windowWidth/2,windowHeight/6)
        text(" 6. Must collect 200 coins and 10 cash in 2 min else your coins will be lost  and you will be in prison",windowWidth/2,windowHeight/6);
    }
}
class policeinstructions{
    constructor(){
        this.greeting = createElement('h2');
        this.play=createButton('PLAY')
    }
    display(){
        this.greeting.html("Hello " + cop.name)
        this.greeting.position(windowWidth/2,windowHeight/5);
        text("1. Move anywhere using: arrow keys or  w, a, s, d.",windowWidth/2,windowHeight/2) 
        text("2. Can trap theif in room using barrier and removing the barrier“T” key.",windowWidth/2,windowHeight/2)
        text("3. Cannot change as robber.",windowWidth/2,windowHeight/2)
        text("4. Can enter or exit room using “e” key.",windowWidth/2,windowHeight/2)
        text("5. Must find robber in 2 min else didn’t found the robber in 2 min you will be in the police station and all of your coins will  be lost",windowWidth/2,windowHeight/2);
    }
}