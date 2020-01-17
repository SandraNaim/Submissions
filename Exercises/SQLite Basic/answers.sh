
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


