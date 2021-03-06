
select * from students

select Name from students

select * from students
where Age > 30

select Name from students
where Gender = 'F' and Age = 30

select Points from students
where Name LIKE "Alex"

INSERT INTO students (Name, Age, Gender, Points)
VALUES ('Sandra', 23, 'F', 200)

update students
set Points = Points + 20
where Name = 'Basma'





create table graduates(
    ID INTEGER NOT NULL PRIMARY KEY autoincrement,
    Name TEXT NOT NULL UNIQUE,
    Age INTEGER,
    Gender TEXT,
    Points INTEGER,
    Graduation date
    );

INSERT INTO graduates (ID, Name, Age, Gender, Points)
SELECT * 
FROM students
WHERE Name Like 'Layal'

update graduates 
SET graduation = '08/09/2018'
where Name = 'Layal'

delete from students
where Name = 'Layal'







SELECT employees.ID, employees.Name, employees.Company, companies.Date
FROM employees
INNER JOIN companies ON employees.Company=companies.Name;

select employees.Name
from employees
where employees.Company IN 
			(select companies.Name
			from companies
			where companies.date like '1%');

select employees.company
from employees
where employees.Role = 'Graphic Designer'







select *
from students
where Points = 
		(select max(Points)
		from students)

select avg(Points) from students

select count(ID)
from students
where Points = 500

select Name
from students
where Name LIKE "%s%"

select *
from students
order by Points desc