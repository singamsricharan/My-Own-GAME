class Player{
    constructor(){
        this.index = null;
        this.score=0;
        this.coins=0;
        this.cash=0;
        this.name = null;
        this.type=null;
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
        score:this.score,
        coins:this.coins,
        cash:this.cash,
        type:this.type,
    });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
          });
    }
}
class theif{
    constructor(x,y){
        this.index = null;
        this.score=0;
        this.coins=0;
        this.cash=0;
        this.name = null;
    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
        name:this.name,
        score:this.score,
        coins:this.coins,
        cash:this.cash,
    });
    }
}
class police{
    constructor(){
        this.index = null;
        this.score=0;
        this.coins=0;
        this.cash=0;
        this.name = null;
    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
        name:this.name,
        score:this.score,
        coins:this.coins,
        cash:this.cash,
    });
    }
}