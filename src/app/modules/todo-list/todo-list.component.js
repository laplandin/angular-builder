(function() {
  angular
    .module('todoList')
      .component('todoList',  {
        templateUrl: 'app/modules/todo-list/todo-list.template.html',
        controller: [
                '$rootScope',
                '$scope',
                'TaskManager',
                function($rootScope, $scope, TaskManager) {
                  var self = this;
                  self.tasks = TaskManager.getTasks();
                  console.log(self.tasks);
                  self.deleteTask = TaskManager.deleteTask;
                  self.setEditedTask = TaskManager.setEditedTask;
                  self.setBuferState = function(index) {
                    self.editBufer = self.tasks[index];
                  }

                  self.editBufer = {};
                }]
      });

      // function TodoListController
}());
