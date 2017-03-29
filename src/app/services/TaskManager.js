(function(){
  angular
    .module('toDoApp')
      .service('TaskManager', ['$rootScope', function($rootScope) {
        var self = this;
        var tasks = getFromStorage();
        console.log(tasks);

        function getFromStorage() {
          var tasks =  localStorage.getItem('tasks');
          var arr = [];
          if (tasks === undefined || tasks === 'undefined') return arr;
          return JSON.parse(tasks);
        }

        function setToStorage(taskArray) {
          // В этом случае в объект будет добавляться $$hash - key
          // localStorage.setItem('tasks', JSON.stringify(taskArray));
          localStorage.setItem('tasks', angular.toJson(taskArray));
        }

        return {
          getTasks: function() {
            return tasks;
          },

          setEditedTask:  function(index, taskObj) {
            tasks.splice(index, 1, taskObj);
            setToStorage(tasks);
          },

          addTask: function(task) {
            tasks.push(task);
            console.log('taskCreated');
            setToStorage(tasks);
            // $rootScope.$emit('taskCreated', _task);
          },
          deleteTask: function(index) {
            tasks.splice(index,1);
            setToStorage(tasks);
          }
          // initState: function() {
          //
          // }
        }
      }]
    );
}());
