ALTER TABLE employee ADD COLUMN salary DECIMAL;
UPDATE employee
INNER JOIN empRole ON employee.id = empRole.id
SET employee.salary = empRole.salary;

ALTER TABLE employee ADD COLUMN title VARCHAR(30);
UPDATE employee
INNER JOIN empRole ON employee.id = empRole.id
SET employee.Title = empRole.title;

ALTER TABLE empRole ADD COLUMN Department VARCHAR(30);
UPDATE empRole
INNER JOIN department on department.id = empRole.department_id
set empRole.department = department.depName;

ALTER TABLE employee ADD COLUMN department VARCHAR(30);
UPDATE employee
INNER JOIN empRole on employee.id = empRole.id
SET employee.department = empRole.department;

SELECT employee.id, employee.first_name, employee.last_name, employee.title, employee.role_id, employee.salary, employee.department,CONCAT(manager.first_name," ",manager.last_name) AS manager
FROM employee
LEFT JOIN employee AS manager ON manager.id = employee.manager_id;