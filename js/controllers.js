/* global angular */
angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, Quests) {
    $scope.quests = Quests

    $scope.resolve = function (quest) {
      Quests.resolve(quest)
    }
  })

  .controller('AddQuestCtrl', function ($scope, $stateParams, Quests) {
    $scope.submit = function (quest) {
      Quests.add({description: quest.description, size: quest.size || 3, done: false})
      quest.description = ''
      quest.size = 3
    }
  })
