<script>
	import { page } from '$app/stores';
</script>

<section>
	<h1>Oops!</h1>
	<h3>{$page.status}: {$page.error?.message}</h3>
	<p>Sorry. Please contact to admin with email (shinwoo.park@psw.kr) or try it again later.</p>
</section>

<style>
	section {
		width: 100%;
		height: calc(100vh - 60px);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;

		font-size: 16px;

		text-align: center;

		& h1 {
			font-size: 3em;
			font-weight: 800;
		}

		& h3 {
			font-size: 2em;
			font-weight: 500;
		}

		& p {
			font-size: 1em;
			font-weight: 300;
		}
	}
</style>
