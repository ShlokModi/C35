class Player{
    constructor(){}
    update(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name: name
        })
    }
    updateCount(count){
        database.ref("/").update({
            PlayerCount: count
        })
    }
    getCount(){
        var playerCountRef = database.ref("PlayerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }
}