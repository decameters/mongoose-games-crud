app.controller('GameController', ['GameService', function(GameService){
    var self = this;
    
    self.game = GameService.game;

    self.addNewGame = GameService.addNewGame;
    self.gameVotes = GameService.gameVotes;
}]);