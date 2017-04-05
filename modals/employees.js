var mongoose = require('mongoose');

var scnEmployeesSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    address: {
        type: String,
    },
    Salary: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    line: {
        type: String,
        require: true
    },
    created_date: {
    type: Date,
        default: Date.now
}
}); 

var scnEmployees = module.exports = mongoose.model('scnEmployees', scnEmployeesSchema); 

//GET Books
module.exports.getScnEmployees = function(callback, limit){
    scnEmployees.find(callback).limit(limit);
}

////GET Book by ID
module.exports.getScnEmployeeById = function(id, callback){
    scnEmployees.findById(id, callback);
}

//ADD Book
module.exports.addScnEmployee = function(scnemployee, callback){
    scnEmployees.create(scnemployee, callback);
}
////PUT Book
module.exports.updateScnEmployee = function(id,scnemployee,options,callback){
    var query = {_id:id};
    var update = {
        firstName: scnemployee.firstName,
        lastName:scnemployee.lastName,
        address: scnemployee.address,
        salary: scnemployee.salary,
        mobile: scnemployee.mobile,
        line: scnemployee.line
        
    }
    scnEmployees.findOneAndUpdate(query,update,options,callback);
}
////delelte Book
module.exports.removeScnEmployee = function(id, callback){
    var query = {_id:id};
    scnEmployees.remove(query, callback);
}