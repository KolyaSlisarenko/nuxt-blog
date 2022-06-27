<template>
  <header>
    <div>
      <nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
      <nuxt-link :to="{ name: 'posts' }">Posts</nuxt-link>
      <nuxt-link :to="{ name: 'about' }">About</nuxt-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>
