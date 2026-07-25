const request = require("supertest");
const app = require("../app");

describe("POST /api/analyse", () => {
  jest.setTimeout(20000);

  test("should analyse a valid website", async () => {
    const res = await request(app)
      .post("/api/analyse")
      .send({
        url: "https://example.com",
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);

    expect(res.body.data).toHaveProperty("url");
    expect(res.body.data).toHaveProperty("status");
    expect(res.body.data).toHaveProperty("responseTime");
    expect(res.body.data).toHaveProperty("title");
  });

  test("should return 400 when URL is missing", async () => {
    const res = await request(app)
      .post("/api/analyse")
      .send({});

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe("URL is required");
  });

  test("should return 400 when request body is empty", async () => {
    const res = await request(app)
      .post("/api/analyse");

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe("URL is required");
  });
});