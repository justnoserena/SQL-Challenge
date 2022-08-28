INSERT INTO department (depName)
VALUES ("Marketing"),
("Operations"),
("Sales"),
("Engineering");

INSERT INTO empRole (title, salary, department_id)
VALUES ("Marketing Director", 150000, 1),
("Brand Strategist", 100000, 1),
("Director Of Operations", 100000, 2),
("Operations Manager", 80000, 2),
("Senior Sales Executive", 150000, 3),
("Sales Account Manager", 90000, 3),
("Senior Software Engineer",200000, 4),
("Software Engineer",100000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Authur","Kelly", 1, NULL),
("Bob","Horton", 2, 1),
("Vickie","Robinson", 3, NULL),
("Joe","Elliott", 4, 3),
("Ruby","Figueroa", 5, NULL),
("Todd","Flores", 6, 5),
("Eunice","Little", 7, NULL),
("Francisco","Mcdaniel", 8, 7);