import supertest from "supertest";
import app from "../server.js";
import { PrismaClient } from "@prisma/client";

const request = supertest(app);
const prisma = new PrismaClient();

describe("Count Controller", () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("GET /count", () => {
    it("should return the count of startups and investors", async () => {
      const response = await request.get("/api/startups/count");

      expect(response.status).toBe(200);
    });
  });
});
