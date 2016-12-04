

// Code goes here

function MyController ($scope, $http)	{
	$scope.hint = "<p>Start with a web server such as node server.</p>"

	$scope.loadJson = function() {
		var getDataJson = $http.get('data.json');
		
		getDataJson.success(function(data, status, headers, config) {
			$scope.data = data
		});
		
		getDataJson.error(function(data, status, headers, config) {
			throw new Error('Oh no! An Error!');
		});
	}
}

// angular.module('myApp', [])
//   .directive('editCar', function ($compile) {
//       return {
//         restrict: 'E',
//         link: function (scope, element, attr) {
//           var template = '<span class="car-edit">'+
//             '<input type="text" ng-model="car.name" />' +
//             '<button ng-click="someValue = false" class="btn btn-primary">Save</button></span>';
//           scope.$watch('someValue', function (newVal, oldVal) {
//               //alert(scope.car.name);
//               if (newVal) {
//                   $(element).html(template).show();
//                   $compile($('.car-edit'))(scope);
//               }
//               else
//                   $(element).hide();
//               if (oldVal)
//                   $(element).hide();
//           });
//         }
//       }
//   })
//   .controller('myController', function($scope, $http) {
      
//       $scope.cars = [];
//       $scope.editedCars = [];
      
//       $http.get('test.json')
//       .success(function(data) {
//         $scope.cars = data[0].cars;
//       });
      
//       $scope.editCar = function (car) {
//         $scope.editedCars.push(car);
//       }
      
//       $scope.submit = function() {
//         $http.post('someURL', $scope.editedCars);        
//       }
//   });

