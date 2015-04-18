/* global angular */
angular.module('starter.services', [])

  .factory('Storage', function () {
    return {
      save: function (key, data) {
        try {
          window.localStorage.setItem(key, JSON.stringify(data))
        } catch(e) {
          // Hm...
        }
      },
      load: function (key) {
        try {
          return JSON.parse(window.localStorage.getItem(key))
        } catch(e) {
          // Hm..
        }
      }
    }

  })

  .factory('Quests', function (Storage) {
    // Might use a resource here that returns a JSON array

    // Some fake testing data

    var quests = Storage.load('quests') || []

    return {
      all: function () {
        return quests
      },
      listDone: function () {
        return quests.filter(function (quest) { return quest.done })
      },
      listOpen: function () {
        return quests.filter(function (quest) { return !quest.done })
      },
      doneSize: function () {
        return this.listDone().reduce(function (a, b) {
          return {size: a.size + b.size}
        }, {size: 0}).size
      },
      totalSize: function () {
        return quests.reduce(function (a, b) {
          return {size: a.size + b.size}
        }, {size: 0}).size
      },
      nextOpenQuest: function () {
        return this.listOpen().shift()
      },
      add: function (quest) {
        quests.push(quest)
        Storage.save('quests', quests)
      },
      resolve: function (quest) {
        for (var i = 0;i < quests.length;i++) {
          if (quests[i] === quest) {
            quests[i].done = true
            Storage.save('quests', quests)
            break
          }
        }
      }
    }
  })
