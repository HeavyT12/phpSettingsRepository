<template>
	<${VuetifyName}
		v-bind="${DS}attrs"
		v-on="${DS}listeners"
	>
		<slot />
	</${VuetifyName}>
</template>

<script>
export default {
	name: 'Above${NAME}'
};
</script>