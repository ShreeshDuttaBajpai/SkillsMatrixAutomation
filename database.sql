
------------ INSERT INTO TABLE CLIENT MASTER QUERIES -------------

INSERT INTO dbo.ClientMaster
           ([ClientName]
           ,[ClientDescription]
           ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           ('CW'
           ,'ConnectWise'
           ,'2023-08-10'
           ,'2023-08-10')
GO


INSERT INTO dbo.ClientMaster
           ([ClientName]
           ,[ClientDescription]
           ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           ('ML'
           ,'MeridianLink'
           ,'2023-06-22'
           ,'2023-07-10')
GO

INSERT INTO dbo.ClientMaster
           ([ClientName]
           ,[ClientDescription]
           ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           ('Mercel'
           ,'Mercel'
           ,'2022-07-07'
           ,'2023-02-19')
GO


------------ INSERT INTO TABLE TEAM MASTER QUERIES -------------


INSERT INTO dbo.TeamMaster
           ([ClientIdFK]
           ,[TeamName]
           ,[TeamDescription]
           ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (1
           ,'CNS'
		   ,'CNS'
           ,'2023-03-20'
           ,'2023-04-30')
GO


INSERT INTO dbo.TeamMaster
           ([ClientIdFK]
           ,[TeamName]
           ,[TeamDescription]
           ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (1
           ,'CES'
		   ,'CES'
           ,'2022-03-11'
           ,'2022-10-27')
GO

INSERT INTO dbo.TeamMaster
           ([ClientIdFK]
           ,[TeamName]
           ,[TeamDescription]
           ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (1
           ,'Mobile Team'
		   ,'Mobile Team'
           ,'2021-11-08'
           ,'2023-04-26')
GO

INSERT INTO dbo.TeamMaster
           ([ClientIdFK]
           ,[TeamName]
           ,[TeamDescription]
           ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (2
           ,'CP-IP'
		   ,'CP-IP'
           ,'2023-03-20'
           ,'2023-04-30')
GO

INSERT INTO dbo.TeamMaster
           ([ClientIdFK]
           ,[TeamName]
           ,[TeamDescription]
           ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (2
           ,'Events Bridge'
		   ,'Events Bridge'
           ,'2023-03-26'
           ,'2023-04-29')
GO

INSERT INTO dbo.TeamMaster
           ([ClientIdFK]
           ,[TeamName]
           ,[TeamDescription]
           ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (3
           ,'Company&Sites'
		   ,'Company&Sites'
           ,'2022-10-18'
           ,'2023-03-28')
GO

INSERT INTO dbo.TeamMaster
           ([ClientIdFK]
           ,[TeamName]
           ,[TeamDescription]
           ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (3
           ,'Partner Service'
		   ,'Partner Service'
           ,'2022-11-11'
           ,'2023-03-18')
GO



------------ INSERT INTO TABLE CATEGORY MASTER QUERIES -------------



INSERT INTO dbo.CategoryMaster
           ([CategoryName]
           ,[CategoryDescription]
           ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           ('MS Technologies & Framework'
           ,'MS Technologies & Framework'
           ,'2023-03-20'
           ,'2023-04-30')
GO


INSERT INTO dbo.CategoryMaster
           ([CategoryName]
           ,[CategoryDescription]
           ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           ('UI'
           ,'User Interface'
           ,'2023-01-17'
           ,'2023-04-22')
GO



INSERT INTO dbo.CategoryMaster
           ([CategoryName]
           ,[CategoryDescription]
           ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           ('Java Technologies & Framework'
           ,'Java Technologies & Framework'
           ,'2022-02-17'
           ,'2023-03-02')
GO


INSERT INTO dbo.CategoryMaster
           ([CategoryName]
           ,[CategoryDescription]
           ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           ('Database'
           ,'Database'
           ,'2023-01-17'
           ,'2023-04-22')
GO






------------ INSERT INTO TABLE CATEGORY MASTER QUERIES -------------





INSERT INTO dbo.SkillsSubCategory
           ([ClientIdFK]
           ,[CategoryIdFK]
           ,[SubCategoryName]
           ,[SubCategoryDescription]
		   ,[SubCategoryFunction]
		   ,[ClientExpectedScore]
		   ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (1
		   ,1
           ,'Java'
		   ,'Java'
		   ,'Developer'
		   ,3
           ,'2023-01-17'
           ,'2023-04-22')
GO



INSERT INTO dbo.SkillsSubCategory
           ([ClientIdFK]
           ,[CategoryIdFK]
           ,[SubCategoryName]
           ,[SubCategoryDescription]
		   ,[SubCategoryFunction]
		   ,[ClientExpectedScore]
		   ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (1
		   ,2
           ,'JDK'
		   ,'Java Developer Kit'
		   ,'Developer'
		   ,3
           ,'2023-01-17'
           ,'2023-04-22')
GO


INSERT INTO dbo.SkillsSubCategory
           ([ClientIdFK]
           ,[CategoryIdFK]
           ,[SubCategoryName]
           ,[SubCategoryDescription]
		   ,[SubCategoryFunction]
		   ,[ClientExpectedScore]
		   ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (2
		   ,3
           ,'MongoDB'
		   ,'Mongo Database'
		   ,'Developer'
		   ,3
           ,'2023-01-17'
           ,'2023-04-22')
GO


INSERT INTO dbo.SkillsSubCategory
           ([ClientIdFK]
           ,[CategoryIdFK]
           ,[SubCategoryName]
           ,[SubCategoryDescription]
		   ,[SubCategoryFunction]
		   ,[ClientExpectedScore]
		   ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (1
		   ,3
           ,'MongoDB'
		   ,'Mongo Database'
		   ,'Developer'
		   ,3
           ,'2023-01-17'
           ,'2023-04-22')
GO


INSERT INTO dbo.SkillsSubCategory
           ([ClientIdFK]
           ,[CategoryIdFK]
           ,[SubCategoryName]
           ,[SubCategoryDescription]
		   ,[SubCategoryFunction]
		   ,[ClientExpectedScore]
		   ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (3
		   ,3
           ,'MongoDB'
		   ,'Mongo Database'
		   ,'Developer'
		   ,3
           ,'2023-01-17'
           ,'2023-04-22')
GO





INSERT INTO dbo.SkillsSubCategory
           ([ClientIdFK]
           ,[CategoryIdFK]
           ,[SubCategoryName]
           ,[SubCategoryDescription]
		   ,[SubCategoryFunction]
		   ,[ClientExpectedScore]
		   ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (3
		   ,3
           ,'MySQL'
		   ,'SQL Server'
		   ,'Developer'
		   ,3
           ,'2023-01-17'
           ,'2023-04-22')
GO





------------ INSERT INTO TABLE SKILL MATRIX QUERIES -------------





INSERT INTO dbo.SkillsMatrix
           ([EmployeeId]
           ,[TeamIdFK]
           ,[SubCategoryIdFK]
		   ,[EmpScore]
		   ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (908
		   ,1
           ,4
		   ,3
           ,'2023-01-17'
           ,'2023-04-22')
GO


INSERT INTO dbo.SkillsMatrix
           ([EmployeeId]
           ,[TeamIdFK]
           ,[SubCategoryIdFK]
		   ,[EmpScore]
		   ,[CreatedOnDateTime]
           ,[ModifiedOnDateTime])
     VALUES
           (909
		   ,2
           ,6
		   ,3
           ,'2023-02-28'
           ,'2023-04-20')
GO

