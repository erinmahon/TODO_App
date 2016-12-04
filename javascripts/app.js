var app = angular.module('toDoApp', []);
app.controller('ToDoController', ['$scope', function ($scope)  {
   

    $scope.tasks = [];
    $scope.lists = [
    {list: 'Grocery List'},
    {list: 'Monday Scehdule'},
    {list: 'Tuesday Scehdule'},
    {list: 'Wednesday Scehdule'}
    ];
    
    $scope.editIndex = false;

    // $scope.getClass = function getClass(idx, list) {
    //     return {
    // special: idx > list.length / 2 - 1
    // }

    $scope.getClass = function getClass (idx, list) {
        return {
            "special": idx > lists.length / 2 - 1 
        }
    }


    // Handler functions in scope

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

    // $scope.onEdit = function (index) {
    //     $scope.tasks[index].done =
    // }

    // edit list    
    $scope.editList = function (index) {
      $scope.list = $scope.lists[index].list;
      $scope.editIndex = index;
    }

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

    

// $(document).ready(function(){

//     $("#new-list-btn").click(function() {
//         $("#new-list-form").removeClass('hidden');
//         $("#add-new-btn").hide();
//     })

//     $("#list-name").click(function() {
//         $("#add-new-btn").show();
//     })

//     $("#add-new-btn").click(function() {
//         $("#new-list-form").hide();
//     })


// });

  



