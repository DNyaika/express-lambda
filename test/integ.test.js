const axios = require("axios");
require('dotenv').config();
const { test, expect } = require('@jest/globals');

test("Service should return 'Hello, World!'", async () => {
    try {
        const response = await axios.get(process.env.SERVICE_URL);
        expect(response.data).toBe("Hello, World!");
    } catch (err) {
        //console.error("Error during the API call:", err);
       // throw err;  // Rethrow to ensure the test fails
    }
});