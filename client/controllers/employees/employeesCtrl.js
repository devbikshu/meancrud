angular.module("employees")
    .controller("employeesCtrl", ['$scope', '$rootScope', 'employeeSvc', function ($scope, $rootScope, employeeSvc) {
//    $scope.getScnEmployees = function () {
//        $http.get('/scn/api/scnEmployees').then(function (response) {
//            $scope.scnEmployees = response.data;
//        })
//    }
//    $scope.getScnEmployee = function () {
//        var id = $routeParams.id;
//        $http.get('/scn/api/scnEmployees/'+id).then(function (response) {
//            $scope.scnEmployee = response.data;
//            console.log($scope.scnEmployee);
//            
//        })
//    }
//    $scope.addScnEmployee = function () {
//        $http.post('/scn/api/scnEmployees/', $scope.employee).then(function (response) {
//            window.location.href="#/employees";
//        })
//    }
    employeeSvc.getEmployeesFromApi()
                .then(function (response) {
                    $scope.employees = response;
                }).catch(function (response) {
                    $scope.error = response;
                });
}])
.controller("employeeDetailsCtrl", ['$scope', '$rootScope', 'employeeSvc', function ($scope, $rootScope, employeeSvc) {
    employeeSvc.getEmployeeFromApi()
                .then(function (response) {
                    $scope.employee = response;
                }).catch(function (response) {
                    $scope.error = response;
                });
}])
.controller("addEmployeeCtrl", ['$scope', '$rootScope', 'employeeSvc', function ($scope, $rootScope, employeeSvc) {
    $scope.addEmployee = function (employee) {
                employeeSvc.postEmployeeToApi(employee);
            };
   
}])