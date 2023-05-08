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
           (4
           ,'MongoDB'
		   ,'Mongo Database'
           ,'2023-01-17'
           ,'2023-04-22')
GO


INSERT INTO dbo.SubCategoryMaster
     VALUES
           (2
           ,'React'
		   ,'ReactJS'
           ,'2023-01-17'
           ,'2023-04-22')
GO


INSERT INTO dbo.SubCategoryMaster
     
     VALUES
           (2
           ,'HTML'
		   ,'HTML'
           ,'2023-01-17'
           ,'2023-04-22')
GO





INSERT INTO dbo.SubCategoryMaster
         
     VALUES
           (4
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

--USE [Abp_StoryTracker]
--GO
--SET IDENTITY_INSERT [dbo].[CategoryMaster] ON 
--GO
--INSERT [dbo].[CategoryMaster] ([Id], [CategoryFunction], [CategoryName], [CategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (1, N'Developer', N'MS Technologies & Framework', N'MS Technologies & Framework', CAST(N'2023-03-20T00:00:00.000' AS DateTime), CAST(N'2023-04-30T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[CategoryMaster] ([Id], [CategoryFunction], [CategoryName], [CategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (2, N'Developer', N'UI', N'User Interface', CAST(N'2023-01-17T00:00:00.000' AS DateTime), CAST(N'2023-04-22T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[CategoryMaster] ([Id], [CategoryFunction], [CategoryName], [CategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (3, N'Developer', N'Java Technologies & Framework', N'Java Technologies & Framework', CAST(N'2022-02-17T00:00:00.000' AS DateTime), CAST(N'2023-03-02T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[CategoryMaster] ([Id], [CategoryFunction], [CategoryName], [CategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (4, N'Developer', N'Database', N'Database', CAST(N'2023-01-17T00:00:00.000' AS DateTime), CAST(N'2023-04-22T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[CategoryMaster] ([Id], [CategoryFunction], [CategoryName], [CategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (6, N'Developer', N'Cloud Tech', N'Cloud Technologies', CAST(N'2023-04-05T00:00:00.000' AS DateTime), CAST(N'2023-04-12T00:00:00.000' AS DateTime))
--GO
--SET IDENTITY_INSERT [dbo].[CategoryMaster] OFF
--GO
--SET IDENTITY_INSERT [dbo].[SubCategoryMaster] ON 
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (1, 3, N'Java', N'Java', CAST(N'2023-01-17T00:00:00.000' AS DateTime), CAST(N'2023-04-22T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (2, 3, N'JDK', N'Java Developer Kit', CAST(N'2023-01-17T00:00:00.000' AS DateTime), CAST(N'2023-04-22T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (3, 4, N'MongoDB', N'Mongo Database', CAST(N'2023-01-17T00:00:00.000' AS DateTime), CAST(N'2023-04-22T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (4, 2, N'React', N'ReactJS', CAST(N'2023-01-17T00:00:00.000' AS DateTime), CAST(N'2023-04-22T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (5, 2, N'HTML', N'HTML', CAST(N'2023-01-17T00:00:00.000' AS DateTime), CAST(N'2023-04-22T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (6, 4, N'MySQL', N'SQL Server', CAST(N'2023-01-17T00:00:00.000' AS DateTime), CAST(N'2023-04-22T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (7, 1, N'C#', N'C#', CAST(N'2023-01-18T00:00:00.000' AS DateTime), CAST(N'2023-04-25T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (8, 1, N'.Net', N'.Net', CAST(N'2023-01-18T00:00:00.000' AS DateTime), CAST(N'2023-03-12T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (9, 1, N'.NetCore', N'.Net Core', CAST(N'2023-01-19T00:00:00.000' AS DateTime), CAST(N'2023-02-20T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (10, 1, N'Vb.Net', N'VB .Net', CAST(N'2023-01-20T00:00:00.000' AS DateTime), CAST(N'2023-02-04T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (11, 1, N'.Net2', N'.Net 2', CAST(N'2023-01-20T00:00:00.000' AS DateTime), CAST(N'2023-02-05T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (12, 6, N'Docker', N'Docker', CAST(N'2023-01-21T00:00:00.000' AS DateTime), CAST(N'2023-01-22T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (13, 6, N'KuberNetes', N'KuberNetes', CAST(N'2023-01-24T00:00:00.000' AS DateTime), CAST(N'2023-01-25T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (14, 1, N'MVC', N'Model-View-Controller', CAST(N'2023-01-24T00:00:00.000' AS DateTime), CAST(N'2023-01-25T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (15, 1, N'VS 2019', N'Visual Studio 2019', CAST(N'2023-01-24T00:00:00.000' AS DateTime), CAST(N'2023-01-25T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMaster] ([Id], [CategoryId], [SubCategoryName], [SubCategoryDescription], [CreatedOn], [ModifiedOn]) VALUES (16, 2, N'CSS', N'CSS', CAST(N'2023-03-20T00:00:00.000' AS DateTime), CAST(N'2023-03-21T00:00:00.000' AS DateTime))
--GO
--SET IDENTITY_INSERT [dbo].[SubCategoryMaster] OFF
--GO
--SET IDENTITY_INSERT [dbo].[ClientMaster] ON 
--GO
--INSERT [dbo].[ClientMaster] ([Id], [ClientName], [ClientDescription], [CreatedOn], [ModifiedOn]) VALUES (1, N'CW', N'ConnectWise', CAST(N'2023-08-10T00:00:00.000' AS DateTime), CAST(N'2023-08-10T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[ClientMaster] ([Id], [ClientName], [ClientDescription], [CreatedOn], [ModifiedOn]) VALUES (2, N'ML', N'MeridianLink', CAST(N'2023-06-22T00:00:00.000' AS DateTime), CAST(N'2023-07-10T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[ClientMaster] ([Id], [ClientName], [ClientDescription], [CreatedOn], [ModifiedOn]) VALUES (3, N'Mercel', N'Mercel', CAST(N'2022-07-07T00:00:00.000' AS DateTime), CAST(N'2023-02-19T00:00:00.000' AS DateTime))
--GO
--SET IDENTITY_INSERT [dbo].[ClientMaster] OFF
--GO
--SET IDENTITY_INSERT [dbo].[TeamMaster] ON 
--GO
--INSERT [dbo].[TeamMaster] ([Id], [ClientId], [TeamName], [TeamDescription], [CreatedOn], [ModifiedOn]) VALUES (1, 1, N'CNS', N'CNS', CAST(N'2023-03-20T00:00:00.000' AS DateTime), CAST(N'2023-04-30T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[TeamMaster] ([Id], [ClientId], [TeamName], [TeamDescription], [CreatedOn], [ModifiedOn]) VALUES (2, 1, N'CES', N'CES', CAST(N'2022-03-11T00:00:00.000' AS DateTime), CAST(N'2022-10-27T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[TeamMaster] ([Id], [ClientId], [TeamName], [TeamDescription], [CreatedOn], [ModifiedOn]) VALUES (3, 1, N'Mobile Team', N'Mobile Team', CAST(N'2021-11-08T00:00:00.000' AS DateTime), CAST(N'2023-04-26T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[TeamMaster] ([Id], [ClientId], [TeamName], [TeamDescription], [CreatedOn], [ModifiedOn]) VALUES (4, 2, N'CP-IP', N'CP-IP', CAST(N'2023-03-20T00:00:00.000' AS DateTime), CAST(N'2023-04-30T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[TeamMaster] ([Id], [ClientId], [TeamName], [TeamDescription], [CreatedOn], [ModifiedOn]) VALUES (5, 2, N'Events Bridge', N'Events Bridge', CAST(N'2023-03-26T00:00:00.000' AS DateTime), CAST(N'2023-04-29T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[TeamMaster] ([Id], [ClientId], [TeamName], [TeamDescription], [CreatedOn], [ModifiedOn]) VALUES (6, 3, N'Company&Sites', N'Company&Sites', CAST(N'2022-10-18T00:00:00.000' AS DateTime), CAST(N'2023-03-28T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[TeamMaster] ([Id], [ClientId], [TeamName], [TeamDescription], [CreatedOn], [ModifiedOn]) VALUES (7, 3, N'Partner Service', N'Partner Service', CAST(N'2022-11-11T00:00:00.000' AS DateTime), CAST(N'2023-03-18T00:00:00.000' AS DateTime))
--GO
--SET IDENTITY_INSERT [dbo].[TeamMaster] OFF
--GO
--SET IDENTITY_INSERT [dbo].[SubCategoryMapping] ON 
--GO
--INSERT [dbo].[SubCategoryMapping] ([Id], [TeamId], [SubCategoryId], [ClientExpectedScore], [CreatedOn], [ModifiedOn]) VALUES (1, 1, 1, 4, CAST(N'2023-02-28T00:00:00.000' AS DateTime), CAST(N'2023-04-20T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMapping] ([Id], [TeamId], [SubCategoryId], [ClientExpectedScore], [CreatedOn], [ModifiedOn]) VALUES (2, 1, 2, 4, CAST(N'2023-02-28T00:00:00.000' AS DateTime), CAST(N'2023-04-20T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMapping] ([Id], [TeamId], [SubCategoryId], [ClientExpectedScore], [CreatedOn], [ModifiedOn]) VALUES (3, 1, 3, 4, CAST(N'2023-02-28T00:00:00.000' AS DateTime), CAST(N'2023-04-20T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMapping] ([Id], [TeamId], [SubCategoryId], [ClientExpectedScore], [CreatedOn], [ModifiedOn]) VALUES (4, 1, 6, 3, CAST(N'2023-02-28T00:00:00.000' AS DateTime), CAST(N'2023-04-20T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMapping] ([Id], [TeamId], [SubCategoryId], [ClientExpectedScore], [CreatedOn], [ModifiedOn]) VALUES (5, 2, 1, 3, CAST(N'2023-02-28T00:00:00.000' AS DateTime), CAST(N'2023-04-20T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMapping] ([Id], [TeamId], [SubCategoryId], [ClientExpectedScore], [CreatedOn], [ModifiedOn]) VALUES (6, 2, 2, 3, CAST(N'2023-02-28T00:00:00.000' AS DateTime), CAST(N'2023-04-20T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMapping] ([Id], [TeamId], [SubCategoryId], [ClientExpectedScore], [CreatedOn], [ModifiedOn]) VALUES (7, 2, 3, 4, CAST(N'2023-02-28T00:00:00.000' AS DateTime), CAST(N'2023-04-20T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMapping] ([Id], [TeamId], [SubCategoryId], [ClientExpectedScore], [CreatedOn], [ModifiedOn]) VALUES (8, 2, 6, 4, CAST(N'2023-02-28T00:00:00.000' AS DateTime), CAST(N'2023-04-20T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMapping] ([Id], [TeamId], [SubCategoryId], [ClientExpectedScore], [CreatedOn], [ModifiedOn]) VALUES (10, 1, 15, 4, CAST(N'2023-03-02T00:00:00.000' AS DateTime), CAST(N'2023-03-04T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMapping] ([Id], [TeamId], [SubCategoryId], [ClientExpectedScore], [CreatedOn], [ModifiedOn]) VALUES (11, 1, 7, 2, CAST(N'2023-05-08T00:00:34.000' AS DateTime), CAST(N'2023-05-08T00:00:34.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMapping] ([Id], [TeamId], [SubCategoryId], [ClientExpectedScore], [CreatedOn], [ModifiedOn]) VALUES (12, 1, 8, 3, CAST(N'2023-05-08T00:00:34.000' AS DateTime), CAST(N'2023-05-08T00:00:34.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMapping] ([Id], [TeamId], [SubCategoryId], [ClientExpectedScore], [CreatedOn], [ModifiedOn]) VALUES (13, 1, 9, 1, CAST(N'2023-05-08T00:00:34.000' AS DateTime), CAST(N'2023-05-08T00:00:34.000' AS DateTime))
--GO
--INSERT [dbo].[SubCategoryMapping] ([Id], [TeamId], [SubCategoryId], [ClientExpectedScore], [CreatedOn], [ModifiedOn]) VALUES (14, 1, 10, 5, CAST(N'2022-01-01T00:00:00.000' AS DateTime), CAST(N'2022-02-02T00:00:00.000' AS DateTime))
--GO
--SET IDENTITY_INSERT [dbo].[SubCategoryMapping] OFF
--GO
--INSERT [dbo].[EmployeeDetails] ([EmployeeId], [TeamId], [EmployeeName]) VALUES (908, 7, N'Shreesh Dutta Bajpai')
--GO
--INSERT [dbo].[EmployeeDetails] ([EmployeeId], [TeamId], [EmployeeName]) VALUES (909, 5, N'Naina Upadhyay')
--GO
--INSERT [dbo].[EmployeeDetails] ([EmployeeId], [TeamId], [EmployeeName]) VALUES (910, 1, N'Devesh Kumar Singh')
--GO
--INSERT [dbo].[EmployeeDetails] ([EmployeeId], [TeamId], [EmployeeName]) VALUES (911, 1, N'Ashish Singh')
--GO
--INSERT [dbo].[EmployeeDetails] ([EmployeeId], [TeamId], [EmployeeName]) VALUES (912, 1, N'Kashish Verma')
--GO
--INSERT [dbo].[EmployeeDetails] ([EmployeeId], [TeamId], [EmployeeName]) VALUES (913, 1, N'Anjali Saini')
--GO
--INSERT [dbo].[EmployeeDetails] ([EmployeeId], [TeamId], [EmployeeName]) VALUES (914, 1, N'Mudit Arya')
--GO
--INSERT [dbo].[EmployeeDetails] ([EmployeeId], [TeamId], [EmployeeName]) VALUES (915, 1, N'Akanshi Rastogi')
--GO
--INSERT [dbo].[EmployeeDetails] ([EmployeeId], [TeamId], [EmployeeName]) VALUES (916, 1, N'Akshita Singhania')
--GO
--INSERT [dbo].[EmployeeDetails] ([EmployeeId], [TeamId], [EmployeeName]) VALUES (917, 1, N'Pallavi Pandey')
--GO
--INSERT [dbo].[SkillsMatrix] ([EmployeeId], [SubCategoryId], [EmployeeScore], [CreatedOn], [ModifiedOn]) VALUES (908, 2, 3, CAST(N'2023-01-17T00:00:00.000' AS DateTime), CAST(N'2023-04-22T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SkillsMatrix] ([EmployeeId], [SubCategoryId], [EmployeeScore], [CreatedOn], [ModifiedOn]) VALUES (909, 6, 3, CAST(N'2023-02-28T00:00:00.000' AS DateTime), CAST(N'2023-04-20T00:00:00.000' AS DateTime))
--GO
--INSERT [dbo].[SkillsMatrix] ([EmployeeId], [SubCategoryId], [EmployeeScore], [CreatedOn], [ModifiedOn]) VALUES (913, 5, 2, CAST(N'2023-05-07T19:50:12.000' AS DateTime), CAST(N'2023-05-07T19:50:12.000' AS DateTime))
--GO
--INSERT [dbo].[SkillsMatrix] ([EmployeeId], [SubCategoryId], [EmployeeScore], [CreatedOn], [ModifiedOn]) VALUES (913, 1, 1, CAST(N'2023-05-07T19:52:09.000' AS DateTime), CAST(N'2023-05-07T19:52:09.000' AS DateTime))
--GO
--INSERT [dbo].[SkillsMatrix] ([EmployeeId], [SubCategoryId], [EmployeeScore], [CreatedOn], [ModifiedOn]) VALUES (913, 2, 2, CAST(N'2023-05-07T19:52:09.000' AS DateTime), CAST(N'2023-05-07T19:52:09.000' AS DateTime))
--GO


----------	SKILLMATRIX JOIN TABLES	--------------




SELECT
	ClientMaster.ClientName,
	TeamMaster.TeamName,
	SkillsMatrix.EmployeeId,
	EmployeeDetails.EmployeeName,
	CategoryMaster.CategoryName,
	SubCategoryMaster.SubCategoryName,
	SubCategoryMapping.ClientExpectedScore,
	SkillsMatrix.EmployeeScore
FROM SkillsMatrix
inner JOIN EmployeeDetails
ON EmployeeDetails.EmployeeId = SkillsMatrix.EmployeeId
inner JOIN SubCategoryMapping
ON SkillsMatrix.SubCategoryId = SubCategoryMapping.SubCategoryId and SubCategoryMapping.TeamId=EmployeeDetails.TeamId
inner JOIN TeamMaster
ON EmployeeDetails.TeamId=TeamMaster.Id
inner JOIN ClientMaster
ON TeamMaster.ClientId=ClientMaster.Id
inner JOIN SubCategoryMaster
ON SubCategoryMapping.SubCategoryId = SubCategoryMaster.Id 
JOIN CategoryMaster
ON SubCategoryMaster.CategoryId = CategoryMaster.Id
