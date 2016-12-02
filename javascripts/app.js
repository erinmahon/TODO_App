var app = angular.module('toDoApp', []);
app.controller('ToDoController', ['$scope', function ($scope)  {
   
    $scope.tasks = [];
    $scope.lists = [];
    $scope.editIndex = false;

    // Handler functions in scope

    // add task
    $scope.addTask = function () {
        if( $scope.editIndex === false){
            $scope.tasks.push({task: $scope.task, done: false})
        } else {
            $scope.tasks[$scope.editIndex].task = $scope.task;
        }
        $scope.editIndex = false;
        $scope.task = '';
    }
    //add list
    $scope.addList = function () {
        if( $scope.editIndex === false){
            $scope.lists.push({list: $scope.list, done: false})
        } else {
            $scope.lists[$scope.editIndex].list = $scope.list;
        }
        $scope.editIndex = false;
        $scope.list = '';
    }

    // $scope.onEdit = function (index) {
    //     $scope.tasks[index].done =
    // }
    // edit task     
    $scope.editTask = function (index) {
      $scope.task = $scope.tasks[index].task;
      $scope.editIndex = index;
    }
    // mark task as completed
    $scope.doneTask = function (index) {
      $scope.tasks[index].done = true;
    }

    // delete task
    $scope.deleteTask = function (index) {
      $scope.tasks.splice(index, 1);
    }

    //delete list
    $scope.deleteList = function (index) {
      $scope.lists.splice(index, 1);
    }



    }])

$(document).ready(function(){

    $("#new-list-btn").click(function() {
        $("#new-list-form").removeClass('hidden');
        $("#add-new-btn").hide();
    })

    $("#list-name").click(function() {
        $("#add-new-btn").show();
    })

    $("#add-new-btn").click(function() {
        $("#new-list-form").hide();
    })


});

  



