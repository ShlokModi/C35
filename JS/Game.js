class Game{
    constructor(){}
    getState(){
        var gameStateRef = database.ref("GameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            GameState: state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display()
        }
    }
}