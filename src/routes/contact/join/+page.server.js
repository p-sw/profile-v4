import { DiscordApi } from '$lib'
import { error } from '@sveltejs/kit'
import { CLIENT_ID, CLIENT_SECRET, ORIGIN } from '$env/static/private'

/** @type {import('./$types').PageServerLoad<import('$lib/types/discord').AccessToken>} */
export async function load({ url }) {
    const code = url.searchParams.get("code")

    if (!code) {
        throw error(400, "No Authorization Code")
    }

    /** @type {Response} */
    const data = await fetch(DiscordApi('/oauth2/token'), {
        method: 'POST',
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        },
        body: `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=authorization_code&code=${code}&redirect_uri=${ORIGIN}/contact/join`
    })

    if (!data.ok) {
        throw error(data.status, data.statusText);
    }

    /** @type {import('$lib/types/discord').AccessToken} */
    const j = await data.json()

    return j
}