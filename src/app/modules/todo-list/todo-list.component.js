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
                  self.tasks = TaskManager.getFromStorage();

                  $rootScope.$on('taskCreated', function(event, data) {
                    // получение данных через $emit
                    // console.log('task received', data);
                    // получение данных через геттер сервиса
                    // console.log('data from getter', TaskManager.getTask());
                    self.tasks.push(TaskManager.getTask());
                    TaskManager.setToStorage(self.tasks);
                  });
                }]
      });

      // function TodoListController
}());
