const request = require("supertest");
const api = request("https://demoqa.com");

const password = "Password123!";

const generateUsername = () => "user_" + Math.random().toString(36).substring(2, 8);


async function createUser() {
    const username = generateUsername();
    const res = await api.post("/Account/v1/User").send({ userName: username, password });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("userID");
    expect(res.body.username).toBe(username);
    return { userId: res.body.userID, username };
}

describe("DemoQA Account API Tests", () => {
    test("Create user - positive", async () => {
        const username = generateUsername();
        const res = await api.post("/Account/v1/User").send({ userName: username, password });

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("userID");
        expect(res.body.username).toBe(username);
    });

    test("Create user - negative (empty password)", async () => {
        const res = await api.post("/Account/v1/User").send({ userName: "invalidUser", password: "" });

        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty("code");
        expect(res.body).toHaveProperty("message");
    });

    test("Generate token - positive", async () => {
        const { username } = await createUser();

        const res = await api.post("/Account/v1/GenerateToken").send({ userName: username, password });

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("token");
        expect(res.body.token).not.toBe("");
    });

    test("Generate token - negative (wrong password)", async () => {
        const { username } = await createUser();

        const res = await api.post("/Account/v1/GenerateToken").send({ userName: username, password: "WrongPassword!" });

        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeNull();
        expect(res.body.status).toBe("Failed");
    });

    test("Get user info - positive", async () => {
        const { userId, username } = await createUser();

        const tokenRes = await api.post("/Account/v1/GenerateToken").send({ userName: username, password });
        expect(tokenRes.statusCode).toBe(200);
        const token = tokenRes.body.token;

        const res = await api.get(`/Account/v1/User/${userId}`).set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.username).toBe(username);
        expect(res.body.userId).toBe(userId);
    });

    test("Get user info - negative (non-existent user)", async () => {
        const fakeId = "00000000-0000-0000-0000-000000000000";

        const { username } = await createUser();
        const tokenRes = await api.post("/Account/v1/GenerateToken").send({ userName: username, password });
        const token = tokenRes.body.token;

        const res = await api.get(`/Account/v1/User/${fakeId}`).set("Authorization", `Bearer ${token}`);

        expect([401, 403, 404]).toContain(res.statusCode);
    });

    test("Delete user - positive", async () => {
        const { userId, username } = await createUser();

        const tokenRes = await api.post("/Account/v1/GenerateToken").send({ userName: username, password });
        const token = tokenRes.body.token;

        const res = await api.delete(`/Account/v1/User/${userId}`).set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(204);
    });

    test("Delete user - negative (non-existent user)", async () => {
        const fakeId = "00000000-0000-0000-0000-000000000000";

        try {
            const { username } = await createUser();
            const tokenRes = await api.post("/Account/v1/GenerateToken").send({ userName: username, password });
            const token = tokenRes.body.token;

            const res = await api.delete(`/Account/v1/User/${fakeId}`).set("Authorization", `Bearer ${token}`);

            console.log("Delete invalid user response:", res.statusCode, res.body);

            const validStatus = [401, 403, 404, 200];
            expect(validStatus).toContain(res.statusCode);

            if (res.statusCode === 200) {
                expect(res.body).toHaveProperty("code", "1207");
                expect(res.body).toHaveProperty("message", "User Id not correct!");
            }
        } catch (error) {
            console.error("Error during deleting non-existent user:", error);
            throw error;
        }
    });

});
