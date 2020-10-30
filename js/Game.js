class Game {
  constructor(){}
  
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
      player = new Player();
      var pcRef = await database.ref('playerCount').once("value");
      if(pcRef.exists()){
        playerCount = pcRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage(car1_pic);
    car2 = createSprite(300,200);
    car2.addImage(car2_pic);
    car3 = createSprite(500,200);
    car3.addImage(car3_pic);
    car4 = createSprite(700,200);
    car4.addImage(car4_pic);
    
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();
    textSize(25);
    text("GAME HAS STARTED! BEGIN", 120, 100);
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background("aqua");
      image(track_pic,0,-displayHeight*4,displayWidth,displayHeight*5);
      var index = 0;
      var x = 175;
      var y;
      // var displayPos = 130;
      for(var plr in allPlayers){
        index++;
        x = x+200;
        y = displayHeight-allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
        if(index===player.index){
          cars[index-1].shapeColor = "yellow";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
        // if(plr==="player"+player.index){
        //   fill("aqua"); 
        // }   
        // else fill("red");
        
        // displayPos+=20;
        // textSize(15);
        // text(allPlayers[plr].name+";"+allPlayers[plr].distance,120,displayPos);

       }
    }
   if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance+=50;
      player.update();
   }
   
   if(player.distance>4000){
     gameState=2;
   }

   drawSprites();
  }

  end(){
    console.log("gameEnded");
  }
  

}
