<script setup lang="ts">

import axios from "axios";

const handlePreventSubmit = () => {
	axios.get('/api').then(res => {
		console.log(res.data)
	})
}

</script>

<template>
  <main>
		<form action="" class="col s12" @submit.prevent="handlePreventSubmit">
			<div class="row">
				<div class="input-field col s6">
					<input id="icon_email" type="email" class="validate">
					<label for="icon_email">Email</label>
				</div>
				<div class="input-field col s6">
					<input id="icon_password" type="password" class="validate">
					<label for="icon_password">Password</label>
				</div>
			</div>

			<button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
		</form>
  </main>
</template>
