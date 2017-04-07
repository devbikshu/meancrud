var express = require('express');
var scn = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
scn.use(express.static(__dirname + '/client'));
scn.use(bodyParser.urlencoded({ extended: true }));
scn.use(bodyParser.json());
scnEmployees = require('./modals/employees');
mongoose.connect('mongodb://localhost/scndb');
var db = mongoose.connection;
scn.get('/scn/api/scnEmployees', function (req, res) {
    scnEmployees.getScnEmployees(function (err, scnemployees) {
        if (err) {
            throw err;
        }
        res.send(scnemployees);
    })
});
scn.get('/scn/api/scnEmployees/:_id', function (req, res) {
    var id = req.params._id;
    scnEmployees.getScnEmployeeById(id, function (err, scnemployee) {
        if (err) {
            throw err;
        }
        res.send(scnemployee);
    })
});
scn.post('/scn/api/scnEmployees', function (req, res) {
    var scnemployee = req.body;
    scnEmployees.addScnEmployee(scnemployee, function (err, scnemployee) {
        if (err) {
            throw err;
        }
        res.send(scnemployee);
    })
});
scn.put('/scn/api/scnEmployees/:_id', function (req, res) {
    var id = req.params._id;
    var scnemployee = req.body;
    scnEmployees.updateScnEmployee(id, scnemployee, {}, function (err, scnemployee) {
        if (err) {
            throw err;
        }
        res.send(scnemployee);
    })
});
scn.delete('/scn/api/scnEmployees/:_id', function (req, res) {
    var id = req.params._id;
    scnEmployees.removeScnEmployee(id, function (err, scnemployee) {
        if (err) {
            throw err;
        }
        res.send(scnemployee);
    })
});
scn.listen(1028);
console.log("server started at port number 1028.....");