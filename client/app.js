angular.module("scnApp", ['employees','employeeService','ui.router']);
angular.module("scnApp")
.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    var employees = {
        url:"/employees",
        controller: "employeesCtrl",
        templateUrl: "controllers/employees/employees.tpl.html"
    };
    var employee = {
        url:"/employees/:id",
        controller: "employeeDetailsCtrl",
        templateUrl: "controllers/employees/employee-details.tpl.html"
    };
    var addEmployee = {
        url:"/add-employee/",
        controller: "addEmployeeCtrl",
        templateUrl: "controllers/employees/add-employee.tpl.html"
    };
    $stateProvider.state("employees", employees);
    $stateProvider.state("employee", employee);
    $stateProvider.state("addEmployee", addEmployee);
}]);