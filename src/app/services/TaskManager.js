(function(){
  angular
    .module('toDoApp')
      .service('TaskManager', ['$rootScope', function($rootScope) {
        var _task = {};

        return {
          setTask: function(task) {
            _task = task;
            console.log('taskCreated');
            $rootScope.$emit('taskCreated', _task);
          },

          getTask: function() {
            return _task;
          },

          setToStorage: function(taskArray) {
            // В этом случае в объект будет добавляться $$hash - key
            // localStorage.setItem('tasks', JSON.stringify(taskArray));
            localStorage.setItem('tasks', angular.toJson(taskArray));
          },

          getFromStorage: function() {
            var tasks =  localStorage.getItem('tasks');
            var arr = [];
            if (tasks === undefined || tasks === 'undefined') return arr;
            return JSON.parse(tasks);
          }
        }
      }]
    );
}());
