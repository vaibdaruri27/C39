class Form {
  constructor() {
    this.input = createInput("Name");
    this.greeting = createElement('h3');
    this.button = createButton('Play');
    this.restart = createButton('RESET!');
  }

  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  } 

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50,10);
    
    this.input.position(displayWidth/2-50, displayHeight/2-80);
    this.button.position(displayWidth/2+30, displayHeight/2);
    this.restart.position(displayWidth-100, 100);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name );
      this.greeting.position(displayWidth/2-50,displayHeight/4);
    });
    
    this.restart.mousePressed(()=>{
       game.update(0);
       player.updateCount(0);
    });
   
  }
}
