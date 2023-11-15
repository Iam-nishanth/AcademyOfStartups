import supertest from "supertest";
import app from "../server.js";

const request = supertest(app);

describe("Investor API", () => {
    describe("GET /investors", () => {
        it("should return all investors", async () => {
            const response = await request.get("/auth/investors");

            expect(response.status).toBe(200);
        });
    });

    describe("POST /investors", () => {
        it("should create a new investor", async () => {
            const newInvestor = {
                email: "test@example.com",
                password: "Password@123",
                name: "John Doe",
                gender: "Male",
                phoneNo: "1234567890",
                address: "123 Main St",
                image: null,
                investorType: "Angel Investor",
                investmentRange: "High",
                domainsOfInterest: ["Technology", "Finance"],
                existingInvestments: null,
            };

            const response = await request
                .post("/auth/investor-signup")
                .send(newInvestor);

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty(
                "message",
                "Investor created successfully"
            );
        });

        it("should return 409 if investor already exists", async () => {
            const existingInvestor = {
                email: "test@example.com",
                password: "Password@123",
                name: "John Doe",
                gender: "Male",
                phoneNo: "1234567890",
                address: "123 Main St",
                image: null,
                investorType: "Angel Investor",
                investmentRange: "High",
                domainsOfInterest: ["Technology", "Finance"],
                existingInvestments: null,
            };

            const response = await request
                .post("/auth/investor-signup")
                .send(existingInvestor);

            expect(response.status).toBe(409);
            expect(response.body).toHaveProperty("error", "Investor already exists");
        });
    });

    describe("POST /investor-login", () => {
        it("should log in an existing investor with correct credentials", async () => {
            const credentials = {
                email: "test@example.com",
                password: "password123",
            };

            const response = await request(
                "POST",
                "/auth/investor-login",
                credentials
            );

            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                auth: true,
                investor: expect.any(Object),
                investorInfo: expect.any(Object),
            });
        });

        it("should return an error for incorrect password", async () => {
            const credentials = {
                email: "test@example.com",
                password: "wrongpassword",
            };

            const response = await request(
                "POST",
                "/auth/investor-login",
                credentials
            );

            expect(response.status).toBe(401);
            expect(response.body).toEqual({
                message: "Incorrect password",
                error: expect.any(String),
            });
        });

        it("should return an error for non-existent investor", async () => {
            const credentials = {
                email: "nonexistent@example.com",
                password: "password123",
            };

            const response = await request(
                "POST",
                "/auth/investor-login",
                credentials
            );

            expect(response.status).toBe(404);
            expect(response.body).toEqual({
                message: "Investor not found",
            });
        });
    });
});
