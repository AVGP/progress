angular.module('starter.services', [])

.factory('Quests', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data

  var quests = [
    {description: "Water plants", size: 1, done: false},
    {description: "Call mom", size: 3, done: false},
    {description: "Clean dishes", size: 5, done: false}
  ]

  return {
    all: function() {
      return quests
    },
    listDone: function() {
      return quests.filter(function(quest) { return quest.done })
    },
    listOpen: function() {
      return quests.filter(function(quest) { return !quest.done })
    },
    doneSize: function() {
      return this.listDone().reduce(function(a, b) {
        return {size: a.size + b.size}
      }, {size: 0}).size
    },
    totalSize: function() {
      return quests.reduce(function(a,b) {
        return {size: a.size + b.size}
      }).size
    },
    nextOpenQuest: function() {
      return this.listOpen().shift();
    },
    resolve: function(quest) {
      console.log("Resolving", quest);
      for(var i=0;i<quests.length;i++) {
        if(quests[i] === quest) {
          quests[i].done = true
          console.log(quests);
          break
        }
      }
    }
  };
});
