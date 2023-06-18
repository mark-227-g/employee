DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);
CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE SET NULL
);


INSERT INTO department(id, name)
VALUES 
('001','Sales'),
('002','Engineering'),
('003','Finance'),
('004','Legal')
;

INSERT INTO role(id,title,salary,department_id)
VALUES
(001,"Sales Lead",100000,001),
(002,"Lead Engineer",110000,002),
(003,"Accountant",120000,003),
(004,"Lawyer",100000,004)
;

INSERT INTO employee(id,first_name,last_name,role_id,manager_id)
VALUES
(001,'John','Doe',001,001),
(002,'John','Smith',002,001),
(003,'John','Jones',003,001),
(004,'John','Tall',004,004)
;



