using Microsoft.EntityFrameworkCore.Migrations;

namespace LawyerApp.Migrations
{
    public partial class SeedUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
                                    INSERT INTO [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount]) VALUES (N'daa8c846-6344-45c6-acb7-9bf496362ed3', N'Admin', N'Admin', N'admin@gmail.com', N'ADMIN@GMAIL.COM', N'admin@gmail.com', N'ADMIN@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEJKIO2KTpKQf0kIbGGZD+Iva6YYHwPvWw5wkLgWJkSKs2te72dl/0/itBXVP9K70ww==', N'LFL7MUA44JMW6XBEYKUZKZ3LGQ4RPWBR', N'a77c45fa-c652-453e-b671-b2d1592ec1f2', NULL, 0, 0, NULL, 1, 0)

                                    INSERT INTO [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'a8f95b62-37e2-4de7-8491-1b15d7718346', N'Admin', N'ADMIN', N'a234f853-66d2-4bf6-af58-52b72f88844a')

                                    INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'daa8c846-6344-45c6-acb7-9bf496362ed3', N'a8f95b62-37e2-4de7-8491-1b15d7718346')
                                ");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
