import {promises as fs} from "node:fs";

let mockUser = [];

async function fetchMockUser() {
    try {
        const data = await fs.readFile('src/database/data.json', 'utf8');
        mockUser = await JSON.parse(data)
    } catch (error) {
        console.error("[ERROR] fetching mock user:", error.message);
        return null;
    }
}

await fetchMockUser();

export default mockUser;