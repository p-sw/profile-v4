<script>
	import { DiscordApi } from '$lib';

	/** @type {import('./$types').PageData} */
	export let data;

	import { onMount } from 'svelte';

	let message = 'Joining to Server...';
	let submessage = '';

	onMount(() => {
		fetch(DiscordApi(`/oauth2/@me`), {
			headers: {
				Authorization: `Bearer ${data.access_token}`
			}
		})
			.then(
				/** @type {(res: Response) => Promise<{user: import('$lib/types/discord').User}>} */ (
					res
				) => {
					if (res.ok) {
						return res.json();
					} else {
						throw Error('Failed to get user data.');
					}
				}
			)
			.then(async ({ user }) => {
				const joinData = await fetch(`/contact/join`, {
					method: 'POST',
					body: JSON.stringify({
						access_token: data.access_token,
						user_id: user.id
					})
				});

				if (!joinData.ok) {
					throw Error('Failed to add member to server.');
				}

				message = 'Success!';
				submessage = 'Now check your discord...';
			})
			.catch(
				/** @type {(err: Error) => void} */ (err) => {
					message = err.message;
				}
			);
	});
</script>

<section>
	<h1>{message}</h1>
	{#if submessage}
		<h2>{submessage}</h2>
	{/if}
</section>

<style>
	section {
		width: 100%;
		height: calc(100vh - 60px);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& h1 {
			font-size: 40px;
			font-weight: 900;
		}

		& h2 {
			font-size: 28px;
			font-weight: 500;
		}
	}
</style>
