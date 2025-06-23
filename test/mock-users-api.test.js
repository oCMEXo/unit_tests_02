const nock = require("nock");
const request = require("supertest");

const BASE_URL = "https://api.example.com";

const validResponse = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    username: "johndoe",
    phone: "+1-555-123-4567",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipcode: "10001",
        country: "USA",
    },
    company: {
        name: "Doe Enterprises",
        industry: "Technology",
        position: "Software Engineer",
    },
    dob: "1990-05-15",
    profile_picture_url: "https://example.com/images/johndoe.jpg",
    is_active: true,
    created_at: "2023-01-01T12:00:00Z",
    updated_at: "2023-10-01T12:00:00Z",
    preferences: {
        language: "en",
        timezone: "America/New_York",
        notifications_enabled: true,
    },
};

describe("Mocked Users API", () => {
    beforeEach(() => {
        nock.cleanAll();
    });

    test("Successful response structure", async () => {
        nock(BASE_URL)
            .get("/users/1")
            .reply(200, validResponse);

        const res = await request(BASE_URL).get("/users/1");

        expect(res.statusCode).toBe(200);
        expect(res.body).toMatchObject({
            id: expect.any(Number),
            email: expect.any(String),
            address: expect.any(Object),
            company: expect.any(Object),
        });
    });

    test.each([200, 204, 403, 404, 502])(
        "Mock response with status %s",
        async (code) => {
            nock(BASE_URL).get("/users/1").reply(code, code === 204 ? "" : { error: "Error", details: "Mocked" });

            const res = await request(BASE_URL).get("/users/1");
            expect(res.statusCode).toBe(code);
        }
    );

    test("Error response structure", async () => {
        nock(BASE_URL)
            .get("/users/999")
            .reply(404, { error: "Not Found", details: "User does not exist" });

        const res = await request(BASE_URL).get("/users/999");

        expect(res.statusCode).toBe(404);
        expect(res.body).toHaveProperty("error");
        expect(res.body).toHaveProperty("details");
    });
});
