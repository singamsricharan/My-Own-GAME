class Player{
    constructor(x,y){

    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
        playerCount = data.val();
    })
    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    });
    }
    updateCount(){
        database.ref('/').update({
            playerCount: count
          });
    }
    display(){
        
    }
}