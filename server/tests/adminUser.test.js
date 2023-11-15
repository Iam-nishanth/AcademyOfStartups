// import supertest from "supertest";
// import app from "../server.js";
// import bcrypt from "bcryptjs";
// import { PrismaClient } from "@prisma/client";

// const request = supertest(app);
// const prisma = new PrismaClient();

// describe("allUsers controller", () => {
//   it("should return all users", async () => {
//     const response = await request.get("/admin/all-users");

//     expect(response.status).toBe(200);
//     expect(response.body.length).toBeGreaterThan(0);
//   });
// });

// describe("addUser controller", () => {
//   it("should create a new user", async () => {
//     const userData = {
//       email: "test@example.com",
//       password: "Password@123",
//       name: "Test User",
//     };

//     const hashedPassword = await bcrypt.hash(userData.password, 10); // Hash the password

//     const response = await request.post("/admin/add-user").send({
//       ...userData,
//       password: hashedPassword, // Use the hashed password
//     });

//     expect(response.status).toBe(201);
//   });

//   it("should return 409 if user already exists", async () => {
//     const existingUser = {
//       password: "Password@123",
//       name: "Existing User",
//       userEmail: "existing@example.com",
//     };

//     const hashedPassword = await bcrypt.hash(existingUser.password, 10); // Hash the password

//     // Create an existing user before running the test
//     await prisma.user.create({
//       data: {
//         ...existingUser,
//         password: hashedPassword,
//       },
//     });

//     const response = await request.post("/admin/add-user").send({
//       ...existingUser,
//       email: existingUser.userEmail,
//     });

//     expect(response.status).toBe(409);
//     expect(response.body).toEqual({
//       message: "User already exists",
//       error: expect.any(Object),
//     });
//   });

//   it("should handle validation errors", async () => {
//     const invalidUser = {
//       email: "invalid-email",
//       password: "password",
//       name: "Invalid User",
//     };

//     const response = await request.post("/admin/add-user").send(invalidUser);

//     expect(response.status).toBe(400);
//     expect(response.body.error).toEqual(expect.any(Array));
//   });
// });

// describe("DELETE /users/:id", () => {
//   it("should delete the user and return success message", async () => {
//     const response = await request.delete("/admin/delete-user/1");

//     expect(response.status).toBe(200);
//     expect(response.body).toEqual({
//       message: "User deleted",
//       deletedUser: expect.any(Object),
//     });
//   });

//   it("should return 404 if user is not found", async () => {
//     const response = await request.delete("/admin/delete-user/999");

//     expect(response.status).toBe(404);
//     expect(response.body).toEqual({
//       message: "User not found",
//     });
//   });
// });

// // ----------------INVESTORS------------------------

// describe("allInvestors controller", () => {
//   it("should return all investors", async () => {
//     const response = await request.get("/admin/all-investors");

//     expect(response.status).toBe(200);
//     expect(response.body.length).toBeGreaterThan(0);
//   });
// });
