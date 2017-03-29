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
                    var tempObj = self.tasks[index];
                // input[date] не принимает в качестве значения строку,необходимо преобразовать в объект даты
                    tempObj.date = new Date(tempObj.date);
                    self.editBufer = tempObj;
                  };

                  self.initState = function() {
                    self.editBufer = {};
                    self.edited = '';
                  };

                  self.orderProp = 'name';
                  self.editBufer = {};
                }]
      });
}());
