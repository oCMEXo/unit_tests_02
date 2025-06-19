const request = require("supertest");

const BASE_URL = "https://demoqa.com";
const account = "/Account/v1";

function randomUsername() {
    return `user_${Math.random().toString(36).substring(2, 10)}`;
}

describe("DemoQA API Tests", () => {
    let username = randomUsername();
    const password = "StrongP@ssword123";
    let userId = "";
    let token = "";

    test("Create user - positive", async () => {
        const res = await request(BASE_URL)
            .post(`${account}/User`)
            .send({ userName: username, password });

        expect(res.statusCode).toBe(201);
        expect(res.body.userID).toBeDefined();
        userId = res.body.userID;
    });

    test("Create user - negative (empty password)", async () => {
        const res = await request(BASE_URL)
            .post(`${account}/User`)
            .send({ userName: "invalid", password: "" });

        expect(res.statusCode).toBe(400);
    });

    test("Generate token - positive", async () => {
        const res = await request(BASE_URL)
            .post(`${account}/GenerateToken`)
            .send({ userName: username, password });

        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeDefined();
        token = res.body.token;
    });

    test("Generate token - negative (wrong password)", async () => {
        const res = await request(BASE_URL)
            .post(`${account}/GenerateToken`)
            .send({ userName: username, password: "WrongPassword" });

        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBe("");
    });

    test("Get user info - positive", async () => {
        const res = await request(BASE_URL)
            .get(`${account}/User/${userId}`)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.userName).toBe(username);
    });

    test("Get user info - negative (fake id)", async () => {
        const res = await request(BASE_URL)
            .get(`${account}/User/00000000-0000-0000-0000-000000000000`)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBeGreaterThanOrEqual(400);
    });

    test("Delete user - positive", async () => {
        const res = await request(BASE_URL)
            .delete(`${account}/User/${userId}`)
            .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(204);
    });

    test("Delete user - negative (invalid ID)", async () => {
        const res = await request(BASE_URL)
            .delete(`${account}/User/00000000-0000-0000-0000-000000000000`)
            .set("Authorization", `Bearer ${token}`);

        expect([401, 403, 404]).toContain(res.statusCode);
    });
});
