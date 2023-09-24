import { DiscordApi } from "$lib"
import { error } from "@sveltejs/kit"
import { BOT_TOKEN } from "$env/static/private";

/**
 * @returns {Promise<import('$lib/types/discord').User>}
 */
export async function load() {
    if (!BOT_TOKEN) {
        throw error(501, "Missing Bot Token")
    }

    const userInfo = await fetch(DiscordApi("/users/"+"425950473476898826"), {
        headers: {
            Authorization: "Bot "+BOT_TOKEN
        }
    })

    if (!userInfo.ok) {
        if (userInfo.status === 401) {
            throw error(401, "Invalid Bot Token")
        } else if (userInfo.status === 429) {
            throw error(429, "Rate Limited")
        } else {
            throw error(userInfo.status, userInfo.statusText)
        }
    }

    return await userInfo.json()
}