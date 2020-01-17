
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

