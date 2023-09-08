<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
		<nav>
			<div class="nav-wrapper">
				<a href="#" class="brand-logo">Logo</a>
				<ul id="nav-mobile" class="right hide-on-med-and-down">
					<li><RouterLink to="/">Home</RouterLink></li>
					<li><RouterLink to="/about">About</RouterLink></li>
				</ul>
			</div>
		</nav>
  </header>

	<main>
		<RouterView />
	</main>

	<footer>
		footer
	</footer>
</template>

<style lang="scss">
#app {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	min-height: 100vh;
}

header {
  line-height: 1.5;
	flex: 0 0 auto;
}

footer {
	flex: 0 0 auto;
}

main {
	flex: 1 0 auto;
}
</style>
