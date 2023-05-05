select * from TeamMaster
------------ INSERT INTO TABLE CLIENT MASTER QUERIES -------------

INSERT INTO dbo.ClientMaster
         
     VALUES
           ('CW'
           ,'ConnectWise'
           ,'2023-08-10'
           ,'2023-08-10')
GO


INSERT INTO dbo.ClientMaster
     VALUES
           ('ML'
           ,'MeridianLink'
           ,'2023-06-22'
           ,'2023-07-10')
GO

INSERT INTO dbo.ClientMaster
     VALUES
           ('Mercel'
           ,'Mercel'
           ,'2022-07-07'
           ,'2023-02-19')
GO


------------ INSERT INTO TABLE TEAM MASTER QUERIES -------------


INSERT INTO dbo.TeamMaster
     VALUES
           (1
           ,'CNS'
		   ,'CNS'
           ,'2023-03-20'
           ,'2023-04-30')
GO


INSERT INTO dbo.TeamMaster
          
     VALUES
           (1
           ,'CES'
		   ,'CES'
           ,'2022-03-11'
           ,'2022-10-27')
GO

INSERT INTO dbo.TeamMaster
           
     VALUES
           (1
           ,'Mobile Team'
		   ,'Mobile Team'
           ,'2021-11-08'
           ,'2023-04-26')
GO

INSERT INTO dbo.TeamMaster
          
     VALUES
           (2
           ,'CP-IP'
		   ,'CP-IP'
           ,'2023-03-20'
           ,'2023-04-30')
GO

INSERT INTO dbo.TeamMaster
          
     VALUES
           (2
           ,'Events Bridge'
		   ,'Events Bridge'
           ,'2023-03-26'
           ,'2023-04-29')
GO

INSERT INTO dbo.TeamMaster
         
     VALUES
           (3
           ,'Company&Sites'
		   ,'Company&Sites'
           ,'2022-10-18'
           ,'2023-03-28')
GO

INSERT INTO dbo.TeamMaster
          
     VALUES
           (3
           ,'Partner Service'
		   ,'Partner Service'
           ,'2022-11-11'
           ,'2023-03-18')
GO



------------ INSERT INTO TABLE CATEGORY MASTER QUERIES -------------



INSERT INTO dbo.CategoryMaster
 
     VALUES
           ('Developer'
		   ,'MS Technologies & Framework'
           ,'MS Technologies & Framework'
           ,'2023-03-20'
           ,'2023-04-30')
GO


INSERT INTO dbo.CategoryMaster

     VALUES
           ('Developer'
		   ,'UI'
           ,'User Interface'
           ,'2023-01-17'
           ,'2023-04-22')
GO



INSERT INTO dbo.CategoryMaster

     VALUES
           ('Developer'
		   ,'Java Technologies & Framework'
           ,'Java Technologies & Framework'
           ,'2022-02-17'
           ,'2023-03-02')
GO


INSERT INTO dbo.CategoryMaster

     VALUES
           ('Developer'
		   ,'Database'
           ,'Database'
           ,'2023-01-17'
           ,'2023-04-22')
GO






------------ INSERT INTO TABLE CATEGORY MASTER QUERIES -------------





INSERT INTO dbo.SubCategoryMaster

     VALUES
           (3
           ,'Java'
		   ,'Java'
           ,'2023-01-17'
           ,'2023-04-22')
GO



INSERT INTO dbo.SubCategoryMaster
     VALUES
           (3
           ,'JDK'
		   ,'Java Developer Kit'
           ,'2023-01-17'
           ,'2023-04-22')
GO


INSERT INTO dbo.SubCategoryMaster
         
     VALUES
           (3
           ,'MongoDB'
		   ,'Mongo Database'
           ,'2023-01-17'
           ,'2023-04-22')
GO


INSERT INTO dbo.SubCategoryMaster
     VALUES
           (6
           ,'MongoDB'
		   ,'Mongo Database'
           ,'2023-01-17'
           ,'2023-04-22')
GO


INSERT INTO dbo.SubCategoryMaster
     
     VALUES
           (5
           ,'MongoDB'
		   ,'Mongo Database'
           ,'2023-01-17'
           ,'2023-04-22')
GO





INSERT INTO dbo.SubCategoryMaster
         
     VALUES
           (3
           ,'MySQL'
		   ,'SQL Server'
           ,'2023-01-17'
           ,'2023-04-22')
GO





------------ INSERT INTO TABLE SKILL MATRIX QUERIES -------------





INSERT INTO dbo.SkillsMatrix

     VALUES
           (908
           ,2
		   ,3
           ,'2023-01-17'
           ,'2023-04-22')
GO


INSERT INTO dbo.SkillsMatrix
          
     VALUES
           (909
           ,6
		   ,3
           ,'2023-02-28'
           ,'2023-04-20')
GO




------------	INSERT INTO TABLE SUB-CATEGORY MAPPING QUERIES	------------


INSERT INTO dbo.SubCategoryMapping
          
     VALUES
           (1
		   ,1
           ,4
           ,'2023-02-28'
           ,'2023-04-20')
GO


INSERT INTO dbo.SubCategoryMapping
          
     VALUES
           (1
		   ,2
           ,4
           ,'2023-02-28'
           ,'2023-04-20')
GO

INSERT INTO dbo.SubCategoryMapping
          
     VALUES
           (1
		   ,3
           ,4
           ,'2023-02-28'
           ,'2023-04-20')
GO

INSERT INTO dbo.SubCategoryMapping
          
     VALUES
           (1
		   ,6
           ,3
           ,'2023-02-28'
           ,'2023-04-20')
GO


INSERT INTO dbo.SubCategoryMapping
          
     VALUES
           (2
		   ,1
           ,3
           ,'2023-02-28'
           ,'2023-04-20')
GO

INSERT INTO dbo.SubCategoryMapping
          
     VALUES
           (2
		   ,2
           ,3
           ,'2023-02-28'
           ,'2023-04-20')
GO

INSERT INTO dbo.SubCategoryMapping
          
     VALUES
           (2
		   ,3
           ,4
           ,'2023-02-28'
           ,'2023-04-20')
GO

INSERT INTO dbo.SubCategoryMapping
          
     VALUES
           (2
		   ,6
           ,4
           ,'2023-02-28'
           ,'2023-04-20')
GO



------------	INSERT INTO TABLE SUB-CATEGORY MAPPING QUERIES	------------



INSERT INTO dbo.EmployeeDetails
          
     VALUES
           (908
		   ,7
           ,'Shreesh Dutta Bajpai'
           )
GO


INSERT INTO dbo.EmployeeDetails
          
     VALUES
           (909
		   ,5
           ,'Naina Upadhyay'
           )
GO

INSERT INTO dbo.EmployeeDetails
          
     VALUES
           (910
		   ,1
           ,'Devesh Kumar Singh'
           )
GO


