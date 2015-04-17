angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Quests) {
  $scope.quests = Quests;

  $scope.resolve = function(quest) {
    Quests.resolve(quest)
  }
})

.controller('ChatsCtrl', function($scope, Quests) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
