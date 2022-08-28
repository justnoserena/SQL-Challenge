const express = require('express')
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const { response } = require('express');

// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

console.log("ꓤƎ⅁∀N∀ꟽ ƎƎ⅄O⅂ԀꟽƎ");
console.log("");
const prompt = () => {
    inquirer
    .prompt
    ([
        {
            type: 'list',
            name: 'action',
            message: 'Employee Manager',
            choices:
            [
            'View All Departments',
            'Add A Department',
            'View All Roles',
            'Add A Role',
            'View All Employees',
            'Add An Employee',
            'Update An Employee Role',
            'Exit' 
            ]
        },
    ])
    .then (({action}) => {
        switch (action) {
            case 'View All Departments':
                departments();
                break;
            case 'Add A Department':
                addDepartments();
                prompt();
                break;
            case 'View All Roles':
                roles();
                break;
            case 'Add A Role':
                addRoles();
                break;
            case 'View All Employees':
                employees();
                break;
            case 'Add An Employee':
                addEmployee();
                break;
            case 'Update An Employee Role':
                updateEmployee();
                break;
            default:
                break;
        }
    });
}
    const db = mysql.createConnection(
        {
        host: 'localhost',
        user: 'root',
        password: '1134',
        database: 'employee_db'
        });

    const departments = ()=> {
        db.connect(function(err){
            if (err) throw err;
            db.query("SELECT * FROM department;", function (err, results){
                if(err) throw err;
                console.table(results);
                prompt();
            });
        })};

    const addDepartments = ()=> {
        inquirer.prompt([
            {
            type: 'input',
            name: 'depName',
            message: 'What is the name of the department?',
            }
        ])
        .then (({depName}) => {
            if (depName!==null){
                db.connect(function(err){
                    if (err) throw err;
                    db.query("INSERT INTO department (depName) VALUE ('" + depName +"');")
                        departments();
                });
            } else {
                console.log("Please enter a department name")
                addDepartments();
            }
        });
        };

    const roles = ()=> {
        db.connect(function(err){
            if (err) throw err;
            db.query("SELECT id, title, department, salary FROM empRole;", function (err, results){
                if(err) throw err;
                console.table(results);
                prompt();
            });
        })};

    const addRoles = ()=> {
        console.log("here roles")
        return;
    }
    const employees = ()=> {
        db.connect(function(err){
            if (err) throw err;
            db.query("SELECT id, first_name, last_name, title, salary, manager_id FROM employee;", function (err, results){
                if(err) throw err;
                console.table(results);
                prompt();
            });
        })};
    
    const addEmployee = ()=> {
        console.log("here roles")
        return;
    }
    const updateEmployee = ()=> {
        console.log("here roles")
        return;
    }
    const Exit = ()=> {
        console.log("here roles")
        return;
    }

    prompt();