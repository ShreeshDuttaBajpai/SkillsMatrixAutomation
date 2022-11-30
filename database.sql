
create table Team(team_id int identity(1,1) primary key, team_name nvarchar(20))

insert into Team values('CNS')
insert into Team values('Mobile team')
insert into Team values('Partner Service')
insert into Team values('Contacts')
insert into Team values('Mobile team')
insert into Team values('CP')
insert into Team values('Event Bridge')

create table Ticket(ticket_id int identity(100,1) primary key, ticket_type nvarchar(20))

insert into Ticket values('Story')
insert into Ticket values('Task')
insert into Ticket values('Bug')
insert into Ticket values('Sub Task')

create table Status_type(status_id int, project_status nvarchar(20) primary key)

insert into Status_type values(10,'Completed')
insert into Status_type values(11,'In Progress')
insert into Status_type values(12,'Could not Complete')

select * from Status_type
drop table Status_type
drop table Non_SP

create table Non_SP(Serial_no int identity(1,1) primary key, T_Name nvarchar(30), Work_Description nvarchar(MAX),Start_Date datetime,
End_Date datetime, total_hrs int ,project_status nvarchar(20),CONSTRAINT fk_Non_SP_project_status FOREIGN KEY(project_status) REFERENCES Status_type(project_status))

create table Emp_details(Emp_id int primary key,Emp_name nvarchar(50),Emp_designation nvarchar(50))

insert into Emp_details values(300,'Varun Bansal','Software Engineer')
insert into Emp_details values(301,'Nilesh Tiwari')
insert into Emp_details values(302,'Ashish Yadav')
insert into Emp_details values(303,'Ravish')
insert into Emp_details values(304,'Neha Divakar')
insert into Emp_details values(305,'Laxman Singh')

select * from Emp_details
drop table Emp_details

select * from StoryTrackerDB

select * from StoryTrackerDB 
where Name in (select Emp_name from Emp_details where Emp_id=300)
inner join Emp_details E on
S.Name=E.Emp_name
where E.Emp_id=300
