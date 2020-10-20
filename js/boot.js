var Boot = function(game){};

Boot = function() {};

Boot.prototype = {

	
	
  	create: function(){
			this.game.stage.backgroundColor = '660000';
		
		
			this.input.maxPointers = 1
		
			if (this.game.device.desktop){
		
			  this.scale.pageAlignHorizontally = true;
			} else{

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 800;
      this.scale.minHeight = 600;
      this.scale.maxWidth = 2048;
      this.scale.maxHeight = 1536;
      this.scale.forceLandscape = true;
      this.scale.pageAlignHorizontally = true;
      this.scale.setScreenSize(true);
	}
	
		this.game.state.start("Preload");
	}
};