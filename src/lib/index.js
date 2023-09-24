/** 
 * @param {string} endpoint
 * @returns {string} Full Api Url
 */
export function DiscordApi(endpoint) {
    return 'https://discord.com/api/v10' + endpoint;
}