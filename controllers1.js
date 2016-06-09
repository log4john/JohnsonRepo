angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $http) {
    $scope.data = {};

    $scope.login = function() {
		
	alert($http);
		$http.post("http://localhost:8124")
			.success(function(data){
				angular.forEach(data, function(report) {
					$scope.data.message += report;
				});
			})
			.error(function (error){
				alert(error);
				
			});        
    }
})


.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
