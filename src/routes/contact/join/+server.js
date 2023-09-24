import { BOT_TOKEN, GUILD_ID } from '$env/static/private';
import { DiscordApi } from '$lib';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    /** @type {{access_token: string, user_id: string}} */
    const {access_token, user_id} = await request.json()

    if (!access_token || !user_id) {
        throw error(400, 'Bad Request');
    }

    const f = await fetch(DiscordApi(`/guilds/${GUILD_ID}/members/${user_id}`), {
        method: 'PUT',
        headers: {
            Authorization: 'Bot '+BOT_TOKEN,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            access_token,
        })
    })

    return new Response(null, {
        status: f.status,
        statusText: f.statusText
    })
}