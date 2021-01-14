class theifinstructons{
    constructor(){
        this.greeting = createElement('h2');
        this.play=createButton('PLAY')
    }
    display(){
        this.greeting.html("Hello " + player.name)
        this.greeting.position(windowWidth/2-70,windowHeight/2);
        text(" 1. Move anywhere using: arrow keys or  w, a, s, d.")
        text(" 2. Can hide in house and exit using “e” key - Can’t go out of the room if the door is placed.")
        text(" 3. Can change as police.")
        text(" 4. key Can collect coins or cash in rooms or city.")
        text(" 5. If you are caught you will be in prison.")
        text(" 6. Must collect 200 coins and 10 cash in 2 min else your coins will be lost  and you will be in prison");
    }
}
class policeinstructions{
    constructor(){
        this.greeting = createElement('h2');
        this.play=createButton('PLAY')
    }
    display(){
        this.greeting.html("Hello " + player.name)
        this.greeting.position(windowWidth/2-70,windowHeight/2);
        text("1. Move anywhere using: arrow keys or  w, a, s, d.") 
        text("2. Can trap theif in room using barrier and removing the barrier“T” key.")
        text("3. Cannot change as robber.")
        text("4. Can enter or exit room using “e” key.")
        text("5. Must find robber in 2 min else didn’t found the robber in 2 min you will be in the police station and all of your coins will  be lost");
    }
}