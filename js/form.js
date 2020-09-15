class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.wait = createElement('h2')
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.wait.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(535, 165);   
        this.title.style('font-size', '70px');
        this.title.style('font-family', 'Dubai');
        this.title.style('color', '#007ACC');
        this.input.position(675,360);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(680,425);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(1150, 85);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(700,315);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '35px');
            this.greeting.style('font-family', 'Dubai');
            this.wait.html("Please wait untill the fellow player joins")
            this.wait.position(585,375);
            this.wait.style('color', 'white');
            this.wait.style('font-size', '25px');
            this.wait.style('font-family', 'Dubai');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            database.ref('/').update({players:null});
        });

    }
}