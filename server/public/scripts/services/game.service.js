app.service('GameService', ['$http', function ($http) {
    console.log('in GameService');
    var self = this;

    self.game = { list: [] };

    self.getGame = function () {
        $http({
            method: 'GET',
            url: '/game'
        }).then(function (response) {
            console.log('response', response);
            self.game.list = response.data;
        })
    };

    self.getGame();

    self.addNewGame = function(newGame){
        $http({
            method: 'POST',
            url: '/game',
            data: newGame
        }).then(function(response){
            console.log('response', response);
            // newHero.name = '';
            // newHero.backstory = '';
            newGame.name = '';
            newGame.duration = '';
            newGame.numberOfPlayers = '';
            newGame.publishedDate = '';
            self.getGame();
        })
    }

    self.gameVotes = function(game) {
        game.votes++;
    }
}]);