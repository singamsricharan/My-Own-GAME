class game{
    constructor(){
        
    }
getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val();
    })
}
update(state){
    database.ref('/').update({
      gameState: state
    });
}
async start(){
    if(gameState === 0){
      form =new Loginform();
      form.display();
      cop = new police();
      var copCountRef = await database.ref('policeCount').once("value");
      if(copCountRef.exists()){
          policeCount = copCountRef.val();
          cop.getpoliceCount();
      }
      robber = new theif();
      var robberCountRef = await database.ref('theifCount').once("value");
      if(robberCountRef.exists()){
          theifCount = robberCountRef.val();
          robber.gettheifCount();
      }
    }
}
play(){
  
}
}