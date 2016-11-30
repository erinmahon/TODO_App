var app = angular.module('toDoApp', []);
app
  .controller('ToDoController', ['$scope', function ($scope) {

// Handler function in scope to add ToDo object to the array of ToDo tasks of a tasklist

  $scope.tasks = [];
    $scope.editIndex = false;
    $scope.addTask = function () {
        if( $scope.editIndex === false){
            $scope.tasks.push({task: $scope.task, done: false})
        } else {
            $scope.tasks[$scope.editIndex].task = $scope.task;
        }
        $scope.editIndex = false;
        $scope.task = '';
    }

    // Handler function in scope to edit, delete, and mark ToDo tasks as done
        
    $scope.editTask = function (index) {
      $scope.task = $scope.tasks[index].task;
      $scope.editIndex = index;
    }
    $scope.doneTask = function (index) {
      $scope.tasks[index].done = true;
    }
    $scope.unDoneTask = function (index) {
      $scope.tasks[index].done = false;
    }
    $scope.deleteTask = function (index) {
      $scope.tasks.splice(index, 1);
    }
  }])

