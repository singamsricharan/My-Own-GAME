class theif{
    constructor(x,y){
        this.index = null;
        this.score=0;
        this.coins=0;
        this.cash=0;
        this.name = null;
    }
    gettheifCount(){
        var robberCountRef = database.ref('theifCount');
        robberCountRef.on("value",(data)=>{
        theifCount = data.val();
    })
    }
    update(){
        var playerIndex = "robbers/robber" + this.index;
        database.ref(playerIndex).set({
        name:this.name,
        score:this.score,
        coins:this.coins,
        cash:this.cash,
    });
    }
    updateCount(count){
        database.ref('/').update({
            theifCount: count
          });
    }
    static gettheifInfo() {
        var theifInfoRef = database.ref('robbers');
        theifInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
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
    getpoliceCount(){
        var copCountRef = database.ref('policeCount');
        copCountRef.on("value",(data)=>{
        policeCount = data.val();
    })
    }
    update(){
        var playerIndex = "cops/cop" + this.index;
        database.ref(playerIndex).set({
        name:this.name,
        score:this.score,
        coins:this.coins,
        cash:this.cash,
    });
    }
    updateCount(count){
        database.ref('/').update({
            policeCount: count
          });
    }
    static getpoliceInfo() {
        var policeInfoRef = database.ref('cops');
        policeInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}