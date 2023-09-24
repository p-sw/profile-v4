<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { page } from '$app/stores';
</script>

<section>
	<h1>Meet me in the Discord</h1>
	<div>
		<article>
			<aside>
				<img
					src="https://cdn.discordapp.com/avatars/425950473476898826/{data.avatar}.png"
					alt="avatar"
				/>
			</aside>
			<header>
				<h2>{data.global_name ?? data.username}</h2>
				<span>@{data.username}</span>
			</header>
		</article>
		<div>
			<a
				href="https://discord.com/api/oauth2/authorize?client_id=1155142785930907740&redirect_uri={$page
					.url
					.origin}%2Fcontact%2Fjoin&response_type=code&scope=guilds.join%20identify%20guilds.members.read"
				>Join Discord Server</a
			>
		</div>
	</div>
</section>

<style>
	section {
		width: 100%;
		height: calc(100vh - 60px);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: 0 10vw;

		gap: 10vh;

		& h1 {
			font-size: 40px;
			font-weight: 600;
		}

		& > div {
			width: 100%;
			max-width: 400px;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 20px;

			& div {
				width: 100%;

				display: flex;
				flex-direction: row;
				gap: 8px;
				justify-content: flex-end;
				align-items: center;

				& a {
					color: #fff;
					text-decoration: none;
					font-size: 20px;
					border-radius: 8px;
					padding: 10px 16px;
					background-color: var(--primary);
				}
			}
		}

		& article {
			background-color: var(--base-200);
			border-radius: 10px;

			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: flex-start;
			gap: 20px;

			width: 100%;

			padding: 20px;

			& aside {
				background-color: var(--base-200-content);
				width: 50px;
				height: 50px;
				aspect-ratio: 1;
				border-radius: 100%;

				@media screen and (min-width: 500px) {
					width: 80px;
					height: 80px;
				}

				& img {
					object-fit: cover;
					border-radius: 100%;
				}
			}

			& header {
				color: var(--base-200-content);
				font-size: 16px;

				@media screen and (min-width: 500px) {
					font-size: 24px;
				}

				& h2 {
					font-size: 1.5em;
					font-weight: 700;
				}

				& span {
					font-size: 1em;
					font-weight: 200;
				}
			}
		}
	}
</style>
