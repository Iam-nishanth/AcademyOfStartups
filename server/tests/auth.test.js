// import supertest from "supertest";
// import app from "../server.js";
// import bcrypt from "bcryptjs";
// import { PrismaClient } from "@prisma/client";

// const request = supertest;
// const prisma = new PrismaClient();

// describe("Auth Controllers", () => {
//   describe("RegisterController", () => {
//     it("should register a new user", async () => {
//       const response = await request(app).post("/auth/register").send({
//         email: "test@example.com",
//         password: "Password@123",
//         name: "John Doe",
//       });

//       expect(response.status).toBe(201);
//     });

//     // Add more test cases for different scenarios
//   });

//   describe("LoginController", () => {
//     it("should log in an existing user", async () => {
//       const response = await request(app).post("/auth/login").send({
//         email: "test@example.com",
//         password: "Password@123",
//       });

//       expect(response.status).toBe(200);
//       expect(response.body).toHaveProperty("auth", true);
//       expect(response.body).toHaveProperty("token");
//       expect(response.body).toHaveProperty("user");
//       expect(response.body).toHaveProperty("business");
//     });

//     // Add more test cases for different scenarios
//   });

//   describe("ChangePasswordController", () => {
//     it("should change the user password", async () => {
//       const response = await request(app)
//         .put("/auth/user/change-password/123")
//         .send({
//           oldPassword: "Mynewpassword@456",
//           newPassword: "Password@123",
//         });

//       expect(response.status).toBe(200);
//       expect(response.body).toHaveProperty(
//         "message",
//         "Password updated successfully"
//       );
//     });

//     // Add more test cases for different scenarios
//   });
// });
