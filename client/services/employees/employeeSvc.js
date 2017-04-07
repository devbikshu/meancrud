angular.module("employeeService")
    .service("employeeSvc", ["$http", "$q",'$window', '$stateParams', function ($http, $q, $window, $stateParams) {
        var scnEmployees = [];
        this.getEmployeesFromApi = function () {
            //Step 1.
            var dfd = $q.defer();

            $http.get("/scn/api/scnEmployees")
                .then(function (response) {
                    dfd.resolve(response.data);
                })
                .catch(function (response) {
                    dfd.reject("Error Occurred");
                });
            //step 2.
            return dfd.promise;
        }
        this.getEmployeeFromApi = function () {
            //Step 1.
            var dfd = $q.defer();
            var id = $stateParams.id;
            $http.get("/scn/api/scnEmployees/"+id)
                .then(function (response) {
                    dfd.resolve(response.data);
                })
                .catch(function (response) {
                    dfd.reject("Error Occurred");
                });
            //step 2.
            return dfd.promise;
        }
        this.postEmployeeToApi = function (employee) {
            $http.post("/scn/api/scnEmployees/", employee)
                .then(function (response) {
                    window.location = 'http://localhost:1028/#!/employees';
                }) 
        }
         this.putEmployeeToApi = function (employee) {
            //Step 1.
            var dfd = $q.defer();
            var id = $stateParams.id;
            $http.put("/scn/api/scnEmployees/"+id, employee)
                .then(function (response) {
                    window.location = 'http://localhost:1028/#!/employees';
                })
                .catch(function (response) {
                    dfd.reject("Error Occurred");
                });
            //step 2.
            return dfd.promise;
        }
        this.deleteEmployeeFromApi = function () {
            //Step 1.
            var dfd = $q.defer();
            var id = $stateParams.id;
            $http.delete("/scn/api/scnEmployees/"+id)
                .then(function (response) {
                    window.location = 'http://localhost:1028/#!/employees';
                })
                .catch(function (response) {
                    dfd.reject("Error Occurred");
                });
            //step 2.
            return dfd.promise;
        }
}]);
