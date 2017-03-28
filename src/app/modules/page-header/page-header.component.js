(function() {
  angular
    .module('pageHeader')
      .component('pageHeader', {
        templateUrl: 'app/modules/page-header/page-header.template.html',
        controller: [
                '$rootScope',
                '$scope',
                'ngDialog',
                'TaskManager',
                function($rootScope, $scope, ngDialog, TaskManager) {
                this.date = new Date();
                this.clickToOpen = function() {
                  var dialog = ngDialog.open({
                    template: 'app/templates/create-modal.template.html',
                    className: 'ngdialog-theme-default',
                    controller:['$scope', 'TaskManager', function($scope, TaskManager) {
                        $scope.task = {};
                        $scope.addTask = function(){
                          TaskManager.setTask(this.task);
                          this.task = {};
                          ngDialog.close();
                        }
                    }]
                  })
                };
        }]
      });
}());
